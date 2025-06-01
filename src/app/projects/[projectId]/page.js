import { getProject, getProjectImages } from '../../../lib/db/projects';
import Title from '../../../components/Title/title';
import styles from './page.module.css';
import Technologies from '../../../components/Technologies/technologies';
import Scrollable from '../../../components/Scrollable/scrollable';
import Button from '../../../components/Button/button';
import Link from 'next/link';

import { cookies } from 'next/headers';
import { getTranslations } from 'next-intl/server';
import ImageSlideshow from '../../../components/ImageSlideshow/image-slideshow';
import GalleryModal from '../../../components/GalleryModal/gallery-modal';

async function ProjectPage({ searchParams }) {
    const projectId = await searchParams.id;
    const isGalleryOpen = await searchParams.gallery;
    const cookieLocale = (await cookies()).get("PORTFOLIO_LOCALE")?.value || "en";

    const translate = await getTranslations('projects', {
        locale: cookieLocale
    });

    const project = getProject(projectId);
    const projectImages = getProjectImages(projectId);
    const technologies = project.technologies.split(',');

    return (       
        <div className={styles.container}>
            {isGalleryOpen && <GalleryModal 
                images={projectImages} 
                project={project} 
            />}
            <div className={styles.demo}>
                <Link href='/projects' className={styles.backLink}> ... {translate("backToProjects")}</Link>
                <div className={styles.imageWrap}>
                    <ImageSlideshow 
                        images={projectImages}
                        project={project}
                    />
                </div>
            </div>
            <div className={styles.info}>
                <Title>{project.name}</Title>
                <Technologies technologies={technologies}/>
                <Scrollable className={styles.paragraph} axis={'y'}>
                    <p>{cookieLocale === 'pl' ? project.descriptionPL : project.descriptionEN}</p>
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