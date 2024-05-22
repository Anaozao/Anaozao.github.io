import { Link } from "react-router-dom";
import { ProjectCardProps } from "../../types";
import styles from './ProjectCard.module.css'

function ProjectCard({name, link, description, image}: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt="Imagem do Projeto" />
      <div className={styles.infoDiv}>
        <Link to={link} className={styles.link}><h1 className={styles.title}>{name}</h1></Link>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard;