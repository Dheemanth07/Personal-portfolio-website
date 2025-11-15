
import React from 'react';
import { resumeData } from '../constants';
import ResumeSection from '../components/ResumeSection';
import { PhoneIcon, LinkedInIcon, GithubIcon, EmailIcon, LocationIcon } from '../components/Icons';


const BioDataEntry: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-b border-gray-200 last:border-b-0">
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{children}</dd>
    </div>
);

const BioDataPage: React.FC = () => {
    return (
        <div className="bg-white p-6 sm:p-8 md:p-12 shadow-lg rounded-lg max-w-4xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold font-serif text-gray-900">Bio-data</h1>
                <p className="mt-1 text-gray-600">A professional summary and personal information.</p>
            </header>

            <ResumeSection title="Personal Details">
                 <dl>
                    <BioDataEntry label="Full Name">{resumeData.name}</BioDataEntry>
                    <BioDataEntry label="Date of Birth">{resumeData.personalDetails.dateOfBirth}</BioDataEntry>
                    <BioDataEntry label="Gender">{resumeData.personalDetails.gender}</BioDataEntry>
                    <BioDataEntry label="Nationality">{resumeData.personalDetails.nationality}</BioDataEntry>
                    <BioDataEntry label="Languages Known">{resumeData.personalDetails.languagesKnown.join(', ')}</BioDataEntry>
                 </dl>
            </ResumeSection>

            <ResumeSection title="Contact Info">
                <dl>
                    <BioDataEntry label="Email Address">
                        <a href={`mailto:${resumeData.contact.email}`} className="flex items-center text-blue-600 hover:underline">
                            <EmailIcon className="w-5 h-5 mr-2" />
                            {resumeData.contact.email}
                        </a>
                    </BioDataEntry>
                    <BioDataEntry label="Phone Number">
                        <span className="flex items-center">
                            <PhoneIcon className="w-5 h-5 mr-2" />
                            {resumeData.contact.phone}
                        </span>
                    </BioDataEntry>
                    <BioDataEntry label="Location">
                        <span className="flex items-center">
                            <LocationIcon className="w-5 h-5 mr-2" />
                            Bangalore, Karnataka, India
                        </span>
                    </BioDataEntry>
                     <BioDataEntry label="Professional Links">
                         <div className="flex flex-col space-y-2">
                             <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                                 <LinkedInIcon className="w-5 h-5 mr-2" /> LinkedIn Profile
                             </a>
                             <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                                 <GithubIcon className="w-5 h-5 mr-2" /> GitHub Profile
                             </a>
                         </div>
                    </BioDataEntry>
                </dl>
            </ResumeSection>
            
            <ResumeSection title="Professional Summary">
                <p className="text-gray-700 leading-relaxed">
                    A motivated and detail-oriented Computer Science Engineering student with a strong academic background (9.3/10 CGPA) and hands-on experience in full-stack web development, IoT projects, and event management. Proficient in technologies like React, Node.js, TypeScript, and Python. A proactive leader with proven skills in coordinating projects and teams. Eager to apply technical knowledge and problem-solving abilities to develop innovative software solutions.
                </p>
            </ResumeSection>

        </div>
    );
};

export default BioDataPage;