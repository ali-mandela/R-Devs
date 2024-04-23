import { Link } from 'react-router-dom'
import style from '../styles/layout.module.css' 
const Footer = () => {
  return (
<>  <div className={style.footer}>
  <div className={style.top}> 
      <h2>R-dev</h2>
      <p>Reliable, responsive, and resilient digital agency.</p>
     
  </div>
  <hr/>
  <div className={style.top}>
  © 2024 <Link to='/'>R-dev</Link>. All Rights Reserved.
  </div>
</div>

</>  )
}

export default Footer