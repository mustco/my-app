import { ProductType } from '@/types/product.type';
import styles from './DetailProduct.module.scss';

const DetailProduct = ({product}: {product:ProductType}) => {
    console.log(product)
    return(
        <>
        <h1 className={`${styles.product__title} pt-16`}>Detail Product</h1>

        <div className={styles.product__detail__item}>
        <div className={styles.product__detail__item__image}>
            <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.product__detail__item__name}>{product.name}</h4>
        <p className={styles.product__detail__item__category}>{product.category}</p>
        <p className={styles.product__detail__item__price}>
            {product.price && product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
            })}
            </p>

    </div>
    </>
    )

}

export default DetailProduct