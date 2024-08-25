import project1 from "../assets/projects/myWebsite.png";
import project2 from "../assets/projects/Archiving-System.png";
import project3 from "../assets/projects/ClimaTech.png";
import project4 from "../assets/projects/myWebsite.png";

export const HERO_CONTENT = `Hello! I am a university student currently studying Information Technology, Major in Business Analytics. 
                            With skills gained from school and different web resources, my goal is to leverage my skills to create innovative 
                            solutions that drive business growth and deliver acceptable user experiences.`;

export const ABOUT_TEXT = `As a versatile developer with a strong foundation in HTML, CSS, JavaScript, PHP, React, and Flutter, 
                           I bring a creative and dynamic approach to web and mobile development. My experience with these frameworks 
                           ensures that I can deliver modern, performance-optimized applications that provide a smooth and engaging user experience.
                           My experience with these frameworks ensures that I can deliver modern, performance-optimized applications that provide a
                           smooth and engaging user experience. Outside of coding, I enjoy engaging in various hobbies that keep my creativity and 
                           problem-solving skills sharp. Whether it's exploring the outdoors, participating in sports, or indulging in artistic activities, 
                           these hobbies provide me with a well-rounded perspective that I bring back into my work. `;

export const EDUCATION = [
  {
    year: "2021 - Present",
    school: "Batangas State University - The National Engineering University - Alangilan",
    description: "Bachelor of Science in Information Technology - Major in Business Analytics",
  },
  {
    year: "2015 - 2021",
    school: "Ibaan Saint James Academy, Inc.",
    description: "STEM (Science, Technology, Engineering and Mathematics",
    honors: "With High Honors"
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "You are browsing on my personal portfolio website showcasing my profile, education, skills, and contact information. This website was developed in 2024.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "Research Archiving System ",
    image: project2,
    description:
      "A functional archiving research hub for senior high school students in Ibaan Saint James Academy, Inc. The user will be upload their research documents. The admin will be able to edit and archive the documents for future research purposes. This system was developed in 2023.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "ClimaTech: Weather Application",
    image: project3,
    description:
      "This is a pure front-end mobile application developed for weather information using openweather API which includes real-time data about the location's temperature, humidity, wind speed, etc. This mobile application was developed in 2024.",
    technologies: ["Flutter", "Dart"],
  },
  {
    title: "Integrated Membership and Loan Management System with Forecasting Analytics",
    image: project4,
    description:
      "This is a capstone project for SANGKAP Multi-Purpose Cooperative in managing their membership and loan processes. This system includes predictive/forecasting analytics to determine the loan application volume and loan revenue in the future years of operation.",
    technologies: ["JavaScript", "React", "Tailwind", "Node.js", "Next.js", "PostgreSQL","Supabase","Python"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
