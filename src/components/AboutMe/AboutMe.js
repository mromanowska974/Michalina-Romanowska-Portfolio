import React from 'react';
import styles from './AboutMe.module.css';
import ImageWrapper from '../UI/ImageWrapper/ImageWrapper.jsx';
import { useTranslation } from 'react-i18next';

function AboutMe() {
  const { t: translate } = useTranslation();

  return (
    <div className={styles.container}>
      <ImageWrapper width={'calc(15vh + 15vw)'} height={'calc(15vh + 15vw)'}/>
      <div className={styles.content}>
        <h1>{translate('aboutMe.title')}</h1>
        <h2>{translate('aboutMe.whoAmI')}</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non fringilla enim, sed vulputate odio. Nam lacinia, augue a facilisis pretium, tortor dui egestas velit, in maximus turpis urna in dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer id maximus magna. Curabitur lacinia id tellus at consectetur. Donec efficitur odio ligula, ac commodo metus aliquet sed. Donec ornare erat justo, in pretium justo ultricies et. Suspendisse potenti. Duis eget tellus sit amet tortor gravida tempus ut vel urna. Morbi turpis mi, feugiat ut aliquam placerat, molestie sed est. Etiam sed augue aliquet, scelerisque neque ut, faucibus turpis. Etiam orci leo, pulvinar at tristique ac, euismod et nisl.

  Fusce consectetur massa a turpis dignissim, bibendum suscipit mi euismod. Nullam a nisl elit. Duis placerat, nunc et ornare molestie, nisi ante interdum sapien, eu condimentum tortor dui convallis sem. Morbi ultricies lobortis lobortis. Mauris a nulla non lorem feugiat fermentum. Fusce sed justo a erat feugiat malesuada ac vel ex. Aenean iaculis metus eget mi fringilla tincidunt. Donec porttitor purus nec lacinia condimentum. Donec mollis ante lacus, et semper enim maximus ut. Morbi diam augue, egestas vitae sagittis ut, consequat id neque. Vestibulum mattis mi consectetur lorem tincidunt, sit amet pulvinar erat interdum. Mauris et neque nec ligula lacinia condimentum in id metus. Vestibulum pharetra leo est, et porttitor ex laoreet eget. Maecenas pulvinar ipsum nibh, a euismod lacus egestas et. Mauris ac augue in lorem tincidunt iaculis. Curabitur suscipit, est non ullamcorper pretium, mi felis sollicitudin odio, in feugiat quam sapien ut tellus.
        </p>
        <h2>{translate('aboutMe.skills')}</h2>
        <h3>Technical</h3>
        <ul>
          <li>HTML, CSS, JavaScript/TypeScript</li>
          <li>React 19 (React Router, React Hooks)</li>
          <li>Angular 18 (rjsx)</li>
          <li>Git</li>
          <li>Docker (learning)</li>
          <li>PHP Laraver 11</li>
          <li>Java SpringBoot</li>
          <li>SQL</li>
          <li>REST API (HTTP requests, CRUD)</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          <li>Fast-learner</li>
          <li>Problem solving</li>
          <li>Engagement into my tasks</li>
          <li>Individual work and teamwork</li>
          <li>Fluent English (B2)</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutMe;
