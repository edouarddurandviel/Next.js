import { NextRequest, NextResponse } from "next/server";
import { userSchemas } from "@app/schemas/user";
import {signIn} from "@app/controllers/UserController";

export async function POST(_: NextRequest) {
    try {
        const body = await _.json()
        const user = await userSchemas.validateAsync(body);
        const result = await signIn(user)

        if(result && result.cookieSet){
            const resp = NextResponse.json({ 
                error: result.error ? result.error : false, 
                data: {
                    message: result.message,
                    user: result.user
                }
            })
            if(result.message){         
                resp.cookies.set("jwt", result.cookieSet.token, {
                    path: "/",
                    secure: true,
                    httpOnly: true,
                    sameSite: "lax",
                    maxAge: 60 * 60 * 24,
                    expires: undefined
                })
                return resp
            } 
        } else if(result && result.error) {
            return NextResponse.json({error: result.error})
        }
    } catch (error: unknown) {
        return NextResponse.json(
            { error: error instanceof Error ? error.message : "Unknown error" },
            { status: 500 }
        );
    }
}