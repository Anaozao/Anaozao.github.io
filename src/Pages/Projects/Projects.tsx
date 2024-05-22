import ProjectCard from '../../Components/ProjectCard/ProjectCard';
import { projects } from '../../ProjectsData/ProjectsData';
import styles from './Projects.module.css'

function Projects() {

  return (
    <main className={styles.main}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          link={project.link}
          description={project.description}
          name={project.name}
        />
      ))}
    </main>
  )
}

export default Projects;