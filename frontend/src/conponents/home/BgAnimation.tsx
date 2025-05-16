
import styles from "./home.module.css"

function BgAnimation() {
  return (
    <div>
      <div className="bg-animation">
        <div className={` ${styles.translatex_lines}  size-72  z-0 blur-lg`}>
     <img src='/lines.png' alt='' />
    </div>
    <div className={` ${styles.translatexy_lines}  size-72  z-0 blur-lg`}>
       <img src='/lines.png' alt='' />
    </div>
    <div className={` ${styles.translatey_lines}  size-72  z-0 blur-lg`}>
     <img src='/lines.png' alt='' />
        </div>
      </div>
    </div>
  )
}


export default BgAnimation
