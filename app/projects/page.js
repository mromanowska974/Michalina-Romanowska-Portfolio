import React from 'react';
import styles from './page.module.css';
import Project from '../../components/UI/Project/project';
import Title from '../../components/UI/Title/title';
import { getProjects } from '../../lib/projects';

function Projects() {
  const projects = getProjects();

  return (
    <div className={styles.projects}>
      <Title>Moje Projekty</Title>
      <ul className={styles.list}>
        {projects.map(project => (
          <li key={project.id}>
            <Project project={project}/>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
