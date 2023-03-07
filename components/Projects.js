import styles from "../styles/Projects.module.sass";

const works = [
  { id: 1, title: "Главная", path: "/" },
  { id: 2, title: "Мои работы", path: "/projects" },
  { id: 3, title: "Контакты", path: "/contacts" },
];

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={`container ` + styles.container}>
        <h1 className={styles.title}>Мои работы</h1>
        <div className={styles.content}></div>
      </div>
    </section>
  );
};

export default Projects;
