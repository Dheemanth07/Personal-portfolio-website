
import type { ResumeData } from './types';

export const resumeData: ResumeData = {
  name: "Dheemanth D",
  contact: {
    phone: "+91 7892443531",
    email: "dheemanth1007@gmail.com",
    linkedin: "https://www.linkedin.com/in/dheemanth-d-522469291/",
    github: "https://github.com/Dheemanth07",
  },
  personalDetails: {
    dateOfBirth: "07/04/2005",
    gender: "Male",
    nationality: "Indian",
    languagesKnown: ["English", "Kannada", "Hindi"],
  },
  education: [
    {
      institution: "RNS Institute of Technology",
      degree: "Bachelor of Engineering",
      period: "Aug. 2023 – May 2027",
      location: "Bangalore, Karnataka",
      details: "CGPA: 9.3/10",
    },
    {
      institution: "Vidyanikethan Pre-University College",
      degree: "Pre-University Course (PCMC)",
      period: "Aug. 2021 – March 2023",
      location: "Bangalore, Karnataka",
      details: "Percentage: 93%",
    },
  ],
  experience: [
    {
      role: "Event Head - Aikya (Non-Technical Club)",
      company: "RNS Institute of Technology",
      period: "April 2025 – Present",
      location: "Bangalore, Karnataka",
      description: [
        "Organized and led non-technical events for the CSE department, coordinating 50+ participants per event.",
        "Planned and managed event logistics, ensuring smooth execution and high student engagement.",
        "Collaborated with faculty and peers to conceptualize innovative events for the department.",
      ],
    },
    {
      role: "Project Lead - Radar Detector",
      company: "RNS Institute of Technology",
      period: "March 2024 – June 2024",
      location: "Bangalore, Karnataka",
      description: [
        "Designed and implemented an IoT-based radar detector to monitor obstacles in real-time.",
        "Programmed microcontrollers and integrated ultrasonic sensors for accurate detection.",
      ],
    },
  ],
  projects: [
    {
      title: "Legal Document Analyzer",
      technologies: "React, Node.js (Express), TypeScript",
      period: "Aug. 2025 – Dec. 2025",
      description: [
        "Developed a full-stack web application with React frontend and Node.js (Express) backend, providing a REST API for document simplification.",
        "Integrated Supabase (OAuth, webhooks) to handle authentication, session management and real-time data synchronization between frontend and backend.",
        "Stored document data and user activity using MongoDB Atlas for persistent and efficient data management.",
        "Processed uploaded documents via backend API calling HuggingFace Transformers to generate section-wise simplified text.",
      ],
    },
    {
      title: "Bluetooth-Controlled Car",
      technologies: "Arduino, Python (Tkinter)",
      period: "May 2025 - Aug. 2025",
      description: [
        "Developed a Bluetooth-enabled Arduino car with obstacle avoidance and speed control via PWM.",
        "Built a desktop app using Python (Tkinter) to control the car wirelessly.",
        "Coordinated hardware-software integration and collaborated with team members to ensure smooth operation.",
      ],
    },
  ],
  skills: {
    languages: "C/C++, SQL (MySQL), JavaScript, TypeScript, HTML/CSS",
    frameworks: "React, Node.js (Express), MERN Stack, Tkinter, Arduino",
    developerTools: "Git, Docker, Supabase, Postman, Google Cloud Platform, VS Code, Ardiono IDE",
    libraries: "React Hooks, Express.js, Bootstrap, Tailwind CSS, Axios",
  },
  certifications: [
    { name: "Design and Analysis of Algorithms", issuer: "Coursera", year: 2025 },
    { name: "Demystifying Networks", issuer: "NPTEL", year: 2025 },
  ],
};