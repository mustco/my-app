import style from '@/styles/404.module.scss';
const Custom404 = () => {
    return (
        <div className={style.error}>
            <img src="/not_found.png" alt="404" className={style.error__image} />
            <div>404 | Halaman Tidak Ditemukan</div>
        </div>
    )
}

export default Custom404