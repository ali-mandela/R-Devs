/* eslint-disable react/prop-types */
import styles from '../styles/component.module.css';

const TechStack = () => {
  const tech = [
    "React.Js",
    "Next.js",
    "Express.Js",
    "MongoDB",
    "JavaScript",
    "HTML",
    "CSS",
    "MySQL",
    "Node.js",
    "C++",
    "TypeScript"
  ];
  
  return (
    <div className={styles.techStackContainer}>
      <h2>Technologies We Employ</h2>
      <div>
        {tech.map((item, index) => (
          <Tech key={index} index={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const Tech = ({ item, index }) => {
    if(index % 2 ==0){
        return  <p className={styles.even}>{item}</p>;
    }else{
        return  <p className={styles.odd}>{item}</p>;
    }

};

export default TechStack;
