import styles from "./Styleswithnext.module.css"
import style2 from './Styleswithnext.module.scss'
export default function Abouts() {
  return (
    <div className="flex-1">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className={styles.title}>Style with Next JS</h1>
        <p className={style2.color}>Welcome to the Styles Page</p>
      </div>
    </div>
  );
}
