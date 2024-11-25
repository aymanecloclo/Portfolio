import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
  // Mise à jour des compteurs pour refléter des informations sur toi
  useCountUp({ ref: 'experienceCounter', end: 1, duration: 2 }); // 3 ans d'expérience
  useCountUp({ ref: 'projectsCounter', end: 4, duration: 2 }); // 25 projets réalisés
  useCountUp({ ref: 'feedbackCounter', end: 95, duration: 2 }); // 95% de retours positifs
  useCountUp({ ref: 'skillsCounter', end: 8, duration: 2 }); // 8 technologies maîtrisées

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement="years"
        />

        <CounterItem
          title="Projects completed"
          counter={<span id="projectsCounter" />}
          measurement=""
        />

        <CounterItem
          title="Positive feedback"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />

        <CounterItem
          title="Technologies mastered"
          counter={<span id="skillsCounter" />}
          measurement="technologies"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
