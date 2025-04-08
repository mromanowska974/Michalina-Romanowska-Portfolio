import React from 'react';
import styles from './page.module.css';
import Project from '../../components/Project/project';
import Title from '../../components/Title/title';
import { getProjects } from '../../lib/projects';
import Scrollable from '../../components/Scrollable/scrollable';
import { useTranslations } from 'next-intl';

function Projects() {
  const projects = getProjects();
  const translate = useTranslations('projects');

  return (
    <div className={styles.projects}>
      <Title>{translate('title')}</Title>
      <ul className={styles.list}>
        <Scrollable className={styles.scrollable} axis={'x'} portraitAxis={'portraitY'}>
          {projects.map(project => (
            <li key={project.id}>
              <Project project={project}/>
            </li>
          ))}
        </Scrollable>
      </ul>
    </div>
  );
}

export default Projects;
