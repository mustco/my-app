// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data : {
    name: string,
    age:number,
}[]
}
export default function handler(
  // req: NextApiRequest,
  // res: NextApiResponse<Data>
) {
//   const data = {
//     data : [
//     {name: 'Adnan', age:20},
//     {name: 'Syafiq', age:20},
//     {name: 'Hafiz', age:20},
//   ]
// };
  // res.status(200).json(data);
}
