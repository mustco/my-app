import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import ProductView from "@/views/Product";
import useSWR from "swr";
import { fetcher } from "@/lib/swr/fetcher";



const ProductPage = () => {

    const [isLogin, setIsLogin] = useState(true);
    const {push} = useRouter();
    const [products, setProducts] = useState([]);
    // console.log(products);

    useEffect(() => {
        // const token = localStorage.getItem("token")
        // if(token) {
        //     setIsLogin(true)
        // }
        if(!isLogin) {
            push("/auth/login", undefined, {shallow:true})            
        }
    }, [])

    const { data, error, isLoading } = useSWR(
        "/api/product",
        fetcher
      );

    //   console.log(data)
    //   console.log(error)
    //   console.log(isLoading)

    // useEffect(() => {
    //     fetch("/api/product")
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data.data) 
    //         // console.log(data)
    //     })
    // },[])

    return (
        <div>
            <ProductView products={isLoading ? [] : data.data} />
        </div>
    )
}

export default ProductPage