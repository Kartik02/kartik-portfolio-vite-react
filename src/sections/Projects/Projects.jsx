import styles from './ProjectsStyles.module.css';
import mediplus from '../../assets/mediplus.png';
import weather from '../../assets/weather-predictor.png';
import calculator from '../../assets/virtual-calculator.png';
import signlanguage from '../../assets/signlanguage.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mediplus}
          link="https://medi-plus-beta.vercel.app/"
          h3="Mediplus"
          p="Ecommerce Website"
        />
        <ProjectCard
          src={weather}
          link="https://github.com/Kartik02/Weather-Predictor"
          h3="Weather-Predictor"
          p="Web Development"
        />
        <ProjectCard
          src={calculator}
          link="https://github.com/Kartik02/VirtualCalculatorUsingOpenCV-Python"
          h3="Virtual Calculator"
          p="Web Application"
        />
        <ProjectCard
          src={signlanguage}
          link="https://github.com/Kartik02/Sign-language-to-text-and-voice-conversion-using-opencv-and-python"
          h3="Sign Language"
          p="Web Application"
        />
      </div>
    </section>
  );
}

export default Projects;
