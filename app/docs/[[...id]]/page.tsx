import styles from './style.module.css'



export default function Page({ params }){
    console.log(params)
    return(
        <div className={styles.title}>Tim is the goat</div>
    )
}