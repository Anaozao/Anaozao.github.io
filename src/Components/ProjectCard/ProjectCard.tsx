import { Link } from "react-router-dom";
import { ProjectCardProps } from "../../types";
import styles from './ProjectCard.module.css'
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useState } from "react";

function ProjectCard({name, link, description, image}: ProjectCardProps) {
  const [cardClass, setCardClass] = useState(styles.card)
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Limpeza na desmontagem
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleExpand = () => {
    if (cardClass === styles.card) {
      setCardClass(styles.expandedCard)
      return;
    }
    setCardClass(styles.card)
  }
  return (
    <div className={cardClass}>
      <img className={styles.image} src={image} alt="Imagem do Projeto" />
      <div className={styles.infoDiv}>
        <Link to={link} target="_blank" className={styles.link}><h1 className={styles.title}>{name}</h1></Link>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.btnDiv}>
        {windowWidth < 600 && (
          <button
            onClick={handleExpand}
            className={styles.expandBtn}
          >
            <IoMdArrowDropdown className={styles.expandIcon}/>
          </button>
        )}
      </div>
    </div>
  )
}

export default ProjectCard;