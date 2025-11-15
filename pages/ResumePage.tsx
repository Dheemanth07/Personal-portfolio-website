
import React from 'react';
import { resumeData } from '../constants';
import ResumeSection from '../components/ResumeSection';
import { PhoneIcon, LinkedInIcon, GithubIcon, LinkIcon } from '../components/Icons';

const ResumePage: React.FC = () => {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-12 shadow-lg rounded-lg max-w-4xl mx-auto font-serif">
      <header className="text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900">{resumeData.name}</h1>
        <div className="flex justify-center items-center space-x-4 md:space-x-6 mt-4 text-gray-600">
          <span className="flex items-center">
            <PhoneIcon className="w-4 h-4 mr-2" />
            {resumeData.contact.phone}
          </span>
          <span className="text-gray-300">|</span>
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-700 transition-colors">
            <LinkedInIcon className="w-4 h-4 mr-2" />
            linkedin
          </a>
          <span className="text-gray-300">|</span>
          <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-700 transition-colors">
            <GithubIcon className="w-4 h-4 mr-2" />
            github
          </a>
        </div>
      </header>

      <ResumeSection title="Education">
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4 last:mb-0">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-gray-800">{edu.institution}</h3>
              <p className="text-sm text-gray-600 text-right">{edu.location}</p>
            </div>
            <div className="flex justify-between items-start text-gray-700">
              <p className="italic">{edu.degree} &ndash; {edu.details}</p>
              <p className="text-sm italic">{edu.period}</p>
            </div>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection title="Experience">
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-gray-800">{exp.role}</h3>
              <p className="text-sm text-gray-600 text-right">{exp.period}</p>
            </div>
            <div className="flex justify-between items-start text-gray-700 mb-2">
              <p className="italic">{exp.company}</p>
              <p className="text-sm italic">{exp.location}</p>
            </div>
            <ul className="list-disc list-inside text-gray-600 font-sans space-y-1">
              {exp.description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </ResumeSection>
      
      <ResumeSection title="Projects">
        {resumeData.projects.map((proj, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-gray-800">{proj.title}</h3>
               <p className="text-sm text-gray-600 text-right">{proj.period}</p>
            </div>
            <div className="flex justify-between items-start text-gray-700 mb-2">
               <p className="italic font-sans text-sm">{proj.technologies}</p>
            </div>
            <ul className="list-disc list-inside text-gray-600 font-sans space-y-1">
              {proj.description.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection title="Technical Skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 font-sans text-gray-700">
          <p><span className="font-bold text-gray-800">Languages:</span> {resumeData.skills.languages}</p>
          <p><span className="font-bold text-gray-800">Frameworks:</span> {resumeData.skills.frameworks}</p>
          <p><span className="font-bold text-gray-800">Dev Tools/Platforms:</span> {resumeData.skills.developerTools}</p>
          <p><span className="font-bold text-gray-800">Libraries:</span> {resumeData.skills.libraries}</p>
        </div>
      </ResumeSection>

      <ResumeSection title="Certifications">
        <ul className="list-disc list-inside font-sans text-gray-700 space-y-1">
          {resumeData.certifications.map((cert, index) => (
            <li key={index}>{cert.name} &ndash; <span className="italic">{cert.issuer}, {cert.year}</span></li>
          ))}
        </ul>
      </ResumeSection>

    </div>
  );
};

export default ResumePage;
