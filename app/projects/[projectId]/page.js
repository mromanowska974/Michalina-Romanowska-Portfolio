import React from 'react';
import { getProject } from '../../../lib/projects';
import Title from '../../../components/Title/title';
import styles from './page.module.css';
import ImageWrapper from '../../../components/ImageWrapper/ImageWrapper';
import Technologies from '../../../components/Technologies/technologies';
import Scrollable from '../../../components/Scrollable/scrollable';
import Button from '../../../components/Button/button';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

function ProjectPage({ searchParams }) {
    const projectId = searchParams.id;
    const translate = useTranslations("projects");

    const project = getProject(projectId);
    const technologies = project.technologies.split(',');
    console.log(project)
    return (
        <div className={styles.container}>
            <div className={styles.demo}>
                <Link href='/projects' className={styles.backLink}> ... {translate("backToProjects")}</Link>
                <div className={styles.imageWrap}>
                    <ImageWrapper width={'100%'} height={'100%'}/>
                </div>
            </div>
            <div className={styles.info}>
                <Title>{project.name}</Title>
                <Technologies technologies={technologies}/>
                <Scrollable className={styles.paragraph} axis={'y'}>
                    <p>{project.description}</p>
                </Scrollable>
                <div className={styles.links}>
                    <Button link href={project.app_link} text={translate('viewProject')}/>
                    <Button link href={project.repo_link} text={translate('viewRepository')} />
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;