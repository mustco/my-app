import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import DetailProduct from "@/views/DetailProduct";
import { useRouter } from "next/router"
import useSWR from "swr";


const DetailProductPage = ({dataServer}:{dataServer:ProductType}) => {
    // console.log(dataServer)
    const router = useRouter();
    const {id} = router.query
    const {query} = useRouter();

    // const { data, error, isLoading } = useSWR(
    //     `/api/product/${id}`,
    //     fetcher
    //   );
    // console.log(data.data)
    return (
    //  CSR
    //   <DetailProduct product={isLoading ? [] : data.data}/>

    //  SSR
        // <DetailProduct product={dataServer}/>

        // SSG
        <DetailProduct product={dataServer}/>
        // <></>
    )
}

export default DetailProductPage


// export async function getServerSideProps({params}:{params:{id:string};}) {
//     // console.log(params)
//     const res = await fetch(`http://localhost:3000/api/product/${params.id}`)
//     const response = await res.json()
//     console.log(response)

//     return{
//         props: {
//             dataServer:response.data
//         }
//     }
// }


// SSG perlu getStaticPaths untuk parameternya
export async function getStaticPaths({params}:{params: {id:string}}) {
    const res = await fetch(`http://localhost:3000/api/product`);
    const response = await res.json();

    const paths = response.data.map((product:ProductType) => ({
        params: {
            id:product.id
        }
    }))
    console.log(paths)
    return {paths, fallback:false}
}

export async function getStaticProps({params}:{params:{id:string};}) {
    // console.log(params)
    const res = await fetch(`http://localhost:3000/api/product/${params.id}`)
    const response = await res.json()
    console.log(response)

    return{
        props: {
            dataServer:response.data
        }
    }
}

