import { useRouter } from "next/router"

const DetailProductPage = () => {
    const router = useRouter();
    const {query} = useRouter();
    console.log(router)
    return (
        <div>
            <h1>Detail Product Page</h1>
            <p>{`${query.slug ? query.slug[0] + " " + query.slug[1] + " " + query.slug[2]: ""}  `} </p>
        </div>
    )
}

export default DetailProductPage