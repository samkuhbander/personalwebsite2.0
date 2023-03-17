import React from 'react';
import styles from './CompanyTimeline.module.css';

const CompanyTimeline = () => {
  const companies = [
    { id: 1, logo: '/path/to/miami-university-logo.png', alt: 'Miami University' },
    { id: 2, logo: '/path/to/air-force-logo.png', alt: 'Wright-Patterson Air Force Base' },
    { id: 3, logo: '/path/to/aws-logo.png', alt: 'Amazon Web Services' },
  ];

  return (
    <div className={styles.timeline}>
      {companies.map((company, index) => (
        <div key={company.id} className={styles.company}>
          {index > 0 && <div className={styles.arrow}></div>}
          <img className={styles.logo} src={company.logo} alt={company.alt} />
        </div>
      ))}
    </div>
  );
};

export default CompanyTimeline;
