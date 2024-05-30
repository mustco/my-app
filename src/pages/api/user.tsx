import { NextApiRequest, NextApiResponse  } from "next"

type Data = {
    status:boolean
    statusCode:Number
    data:any
}
const User = (
    req: NextApiRequest,
    res: NextApiResponse<Data>
) => {
    const data = [
        {
            name:"Adnan",
            age:20
        },
        {
            name:"Syafiq",
            age:20
        },
        {
            name:"Hafiz",
            age:20
        }
    ]
   res.status(200).json({status:true, statusCode:200, data})
}

export default User