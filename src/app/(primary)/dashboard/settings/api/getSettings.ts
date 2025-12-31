import { userIdShema } from 'edouard/schemas/user';
import { createSettings } from 'edouard/services/settings';
import { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    externalResolver: true,
    responseLimit: false,
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
  // Specifies the maximum allowed duration for this function to execute (in seconds)
  maxDuration: 5,
}

// handler middlewares
async function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: (
    req: NextApiRequest, 
    res: NextApiResponse, 
    next: (result?: Promise<Response | undefined>) => void
  ) => void
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) return reject(result);
      return resolve(result);
    });
  });
}

// auth middleware
async function authHandler(
  req: NextApiRequest, 
  res: NextApiResponse, 
  next: () => void
){
    if(req.cookies){
      return Response.json({ error: 'Unauthorized' }, {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    next()
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try{
        await runMiddleware(req, res, authHandler)

        const { pid } = req.query
        const { slug } = req.query
        const { name, message } = req.body
        
         // check params
        const data = await userIdShema.validateAsync(req.body);
        const result = await createSettings(data)

        res.status(200).json({ message: result })

    }catch(err){
       res.status(500).send({ error: 'failed to fetch data' })
    }
}