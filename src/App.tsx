import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      <Header />
      <Hero />
      <Resume />
      <Skills />
    </div>
  );
}

// Header / Navigation Component
function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      <div className="text-xl font-bold">Kayla</div>
      <nav>
        <ul className="flex space-x-6 text-gray-700">
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#resume" className="hover:text-blue-500">Resume</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section id="about" className="max-w-3xl mx-auto text-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Kayla Chavez</h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        I'm a Front-End Developer. I love combining technical skills with design thinking to create smooth, user-centered digital experiences.
      </p>
    </section>
  );
}

// Resume Section
function Resume() {
  const jobs = [
    {
      title: "Front-End Developer at Tubby Todd",
      date: "DEC 2021- NOV 2025",
      points: [
        "Developed and maintained Shopify stores using Liquid, HTML, CSS, and JavaScript.",
        "Collaborated with designers and developers to improve UI/UX across multiple platforms.",
        "Implemented features to enhance cart functionality and customer experience."
      ]
    },
    {
      title: "Social Media Graphic Designer at ReviewBoost",
      date: "FEB 2021 - DEC 2021",
      points: [
        "Created visually compelling editorial layouts and digital content.",
        "Worked closely with editorial teams to deliver designs on tight deadlines."
      ]
    },
    {
      title: "Graphic Designer at Preserve Magazine",
      date: "OCT 2019 - JUL 2021",
      points: [
        "Created visually compelling editorial layouts and digital content.",
        "Worked closely with editorial teams to deliver designs on tight deadlines."
      ]
    }
  ];

  return (
    <section id="resume" className="max-w-4xl mx-auto px-6 pb-20">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <ul className="space-y-6">
        {jobs.map((job, index) => (
          <li key={index}>
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-600">{job.date}</p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Skills(){
  return(
    <section id="skills" className="max-w-4xl mx-auto px-6 pb-20">
      <ul>
        <li>JavaScript</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Adobe Suite</li>
        <li>Figma</li>
        <li>Shopify</li>
      </ul>
    </section>
  )
}
export default App;