import React from 'react';
import styles from './page.module.css';
import Project from '../../components/Project/project';
import Title from '../../components/Title/title';
import { getProjects } from '../../lib/db/projects';
import Scrollable from '../../components/Scrollable/scrollable';
import { useTranslations } from 'next-intl';
import AnimatedListItem from '../../components/AnimatedListItem/AnimatedListItem';

function Projects() {
  const projects = getProjects();
  const translate = useTranslations('projects');

  return (
    <div className={styles.projects}>
      <Title>{translate('title')}</Title>
      <ul>
        <Scrollable 
          className={styles.scrollable} 
          axis={'x'} 
          portraitAxis={'portraitY'}
        >
            {projects.map(project => (
              <AnimatedListItem key={project.id}>
                <Project project={project}/>
              </AnimatedListItem>
            ))}
        </Scrollable>
      </ul>
    </div>
  );
}

export default Projects;
