"use server"

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret=process.env.STREAM_SECRET_KEY;

export const tokenProvider=async ()=>{
    const user =await currentUser();

    if(!user) throw new Error('User is not logged in');
    if(!apiKey) throw new Error('No Api Key'); 
    if(!apiSecret) throw new Error('No Api Secret');

    const client =new StreamClient(apiKey,apiSecret);
    //expiry time of One hour
    const exp=Math.round(new Date().getTime()/1000)+60*60;

    //time when this was token created 
    const issued=Math.floor(Date.now()/1000)-60;
    //generate user token
    const token = client.generateUserToken({
        user_id:user.id,
        validity_in_seconds:exp,
        issued:issued
    });

    return token;   
} 