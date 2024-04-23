/* eslint-disable react/prop-types */
import styles from '../styles/component.module.css'; 
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
const OurWork = () => {
  const works = [
    {
      index: 1,
      name: "E-commerce Store",
      Desc: "An e-commerce store",
      link: "https://r-store-liard.vercel.app/",
      image:p1
    },
    {
      index: 2,
      name: "Academy 360",
      Desc: "Library and coaching academy",
      link: "https://academy360-zeta.vercel.app/",
      image:p3
    },
    {
      index: 3,
      name: "Aspire Dummy Website",
      Desc: "",
      link: "https://asspire.vercel.app/",
      image:p2
    },
    {
      index: 4,
      name: "Skropay - Early Access Portal",
      Desc: "Early access portal for Skropay",
      link: "https://launch-beta-zeta.vercel.app/",
      image:p4
    },
    {
      index: 5,
      name: "Trando Dummy Website",
      Desc: "",
      link: "https://techno-five.vercel.app/",
      image:p5
    },
    {
      index: 6,
      name: "MFD Website",
      Desc: "Food e-commerce website for Mandela Food Products",
      link: "https://mandela-food-products.vercel.app/",
      image:p6
    }
  ];
  
  return (
    <div className={styles.workContainer}>
      <h2>Our Work Portfolio</h2>
      <div>
        {
          works.map((item)=><Work  item={item} key={item.index}/>)
        }
      </div>
    </div>
  )
}


const Work=({item})=>{
  return(
    <div className={styles.workComponent}>
    <a href={item.link} target='_blank' rel="noreferrer">
        <img className={styles.imgg} src={item.image} alt='project-image' />
    </a>
    <b>{item.name}</b>
    <p>{item.Desc}</p>
</div>

  )
}
export default OurWork