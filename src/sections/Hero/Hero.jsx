import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/kartik-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import instagramLight from "../../assets/instagram-light.svg";
import instagramDark from "../../assets/instagram-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
// import CV from "../../assets/cv.pdf";
import { useContext } from "react";
import { ThemeContext } from "../../common/ThemeProvider";

function Hero() {
  const useTheme = () => useContext(ThemeContext);
  const { theme, toggleTheme } = useTheme();
  console.log(theme);

  const themeIcon = theme === "light" ? sun : moon;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Kartik Poojari"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Kartik
          <br />
          Poojari
        </h1>
        <h2>Software Developer</h2>
        <span>
          <a href="https://instagram.com/kartik._______" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://github.com/kartik02/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/in/kartikpoojari" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          MCA Graduate<br></br>
          Full-Stack Enthusiast<br></br>
          Skilled in UI & Responsiveness
        </p>
        {/* <a href={CV} download> */}
        <a
          href="https://drive.google.com/file/d/1NfL6ZTc8KXR7MyF4SJPQ7K-cV0ebm129/view"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
