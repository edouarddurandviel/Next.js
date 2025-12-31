import { userIdShema } from 'edouard/schemas/user';
import { createSettings } from 'edouard/services/settings';

async function authHandler(handler: (req: Request) => Promise<Response>){
  return async (req: Request) => {
    if(req.headers.get('token') === null){
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return handler(req)
  }
}

async function getSettings(req: Request) {
    try{
         // check params
        const data = await userIdShema.validateAsync(req.body);
        const result = await createSettings(data)

         return Response.json({ data: result }, {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });

    }catch(err){
        return Response.json({ error: 'Failed to load data' }, {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
    }
}

export const GET = authHandler(getSettings)