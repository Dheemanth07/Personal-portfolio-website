
import React from 'react';

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold font-serif uppercase tracking-widest text-gray-700 pb-2 border-b-2 border-gray-300 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default ResumeSection;
