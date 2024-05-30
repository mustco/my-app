import { signUp } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
    status: boolean;
    message : string;
}
 
// export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>) {
//     console.log(req)
//     if(req.method === "POST") {
//         await signUp(req.body, (result: {status:boolean; message:string})=> {
//             console.log(result.status)
//             if(result.status) {
//                 res.status(200).json({status:result.status, message:result.message})
//             } else {
//                 res.status(400).json({status:result.status, message:result.message});
//             }
//         })
//     }
// } 
export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>) {
    console.log(req)
    if(req.method === "POST") {
        await signUp(req.body, ({status, message}: {status:boolean; message:string})=> {
            console.log(status)
            if(status) {
                res.status(200).json({status, message})
            } else {
                res.status(400).json({status, message});
            }
        })
    }
} 