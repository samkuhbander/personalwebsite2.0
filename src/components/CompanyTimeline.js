import React from 'react';
import styles from './CompanyTimeline.module.css';

const CompanyTimeline = () => {
  const companies = [
    { id: 1, logo: '/logos/MiamiUniversity-Logo.png', alt: 'Miami University' },
    { id: 2, logo: '/logos/AFLCMC-Logo.png', alt: 'AFLCMC' },
    { id: 3, logo: '/logos/AWS-Logo.png', alt: 'Amazon Web Services' },
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
