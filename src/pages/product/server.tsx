import { ProductType } from "@/types/product.type"
import ProductView from "@/views/Product"

const ProductPagess = ({data}:{data:ProductType[]}) => {
    console.log(data)
    return(
        <div>
            <ProductView products={data} />
        </div>
    )

}

export default ProductPagess

//dipanggil setiap melakukan req, tiap halaman di buka
export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/product")
    const response = await res.json()
    // console.log(response)

    return{
        props: {
            data:response.data
        }
    }
}