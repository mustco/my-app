import { useEffect, useState } from "react";
import styles from "./Product.module.scss";
import { ProductType } from "@/types/product.type";
import Link from "next/link";

const skeleton = () => {
    const skeletonElements = new Array(2).fill(0);

    return (
        <>
            {skeletonElements.map((_, index) => (
                <div key={`skeleton_${index}`} className={styles.product__content__skeleton}>
                    <div className={styles.product__content__skeleton__image} />
                    <div className={styles.product__content__skeleton__name} />
                    <div className={styles.product__content__skeleton__category} />
                    <div className={styles.product__content__skeleton__price} />
                </div>
            ))}
        </>
    );
}



const ProductView = ({products}: {products: ProductType[]} ) => {

    useEffect(() => {
        const handleOnline = () => {
        //   console.log(true)
        };
        window.addEventListener('online', handleOnline);
        return () => {
          window.removeEventListener('online', handleOnline);
        };
      }, []);

    const productDstruct = {products};
    return(
        <div className={`${styles.product} pt-16`}>
        <h1 className={styles.product__title}>Product</h1>
        <div className={styles.product__content}>
        {
            products.length > 0 ? 
            (
                <>
                {products.map((product:ProductType, index) => {
                return (
                <Link href={`/product/${product.id}`} key={index} className={styles.product__content__item}>
                    <div className={styles.product__content__item__image}>
                        <img src={product.image && product.image} alt={product.name} />
                    </div>
                    <h4 className={styles.product__content__item__name}>{product.name}</h4>
                    <p className={styles.product__content__item__category}>{product.category}</p>
                    <p className={styles.product__content__item__price}>
                        {product.price.toLocaleString("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        })}
                        </p>

                </Link>
            )
        })}
                </>
            ) : (
               skeleton()
            )
        }

     
        </div>
        
        <p></p>
    </div>
    )
}

export default ProductView