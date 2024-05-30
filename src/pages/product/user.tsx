import { useEffect, useState } from "react";
import fetchApi from "@/lib/fetch";

// type Data = {
//     id: number;
//     name: string;
// }

const UserPage = () => {
//     const [getData, setGetData] = useState([]);
//    useEffect(() => {
//     const fetchData = async () => {
//         const data = await fetchApi("/api/user");
//         console.log(data);
//         setGetData(data.data);
//     }
//     fetchData();
// }, []);
   
    return (
        <div>
            {/* {getData.map((data:Data, index) => (
            <h1 key={index}>{data.name}</h1>
            ))} */}
        </div>
    );
}

export default UserPage;
