import React from 'react';
import styles from './page.module.css';
import Project from '../../components/Project/project';
import Title from '../../components/Title/title';
import { getProjects } from '../../lib/projects';
import Scrollable from '../../components/Scrollable/scrollable';

function Projects() {
  const projects = getProjects();

  return (
    <div className={styles.projects}>
      <Title>Moje Projekty</Title>
      <Scrollable className={styles.scrollable} axis={'x'} portraitAxis={'portraitY'}>
        <ul className={styles.list}>
          {projects.map(project => (
            <li key={project.id}>
              <Project project={project}/>
            </li>
          ))}
        </ul>
      </Scrollable>
    </div>
  );
}

export default Projects;
