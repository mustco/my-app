import { ProductType } from "@/types/product.type"
import ProductView from "@/views/Product"

const ProductPagess = (props:{data:ProductType[]}) => {
    const {data} = props;
    // console.log(data)
    return(
        <div>
            <ProductView products={[]} />
        </div>
    )

}

export default ProductPagess

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/product")
    const response = await res.json()
    return {
        props: {
            data: response.data
        },
        revalidate: 10
    }
}