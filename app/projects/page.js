import React from 'react';
import styles from './page.module.css';
import Project from '../../components/UI/Project/project';
import Title from '../../components/UI/Title/title';

const Projects = () => (
  <div className={styles.projects}>
    <Title>Moje Projekty</Title>
    <ul className={styles.list}>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
      <li>
        <Project />
      </li>
    </ul>
  </div>
);

export default Projects;
