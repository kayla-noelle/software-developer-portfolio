import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans min-h-screen">
      <Header />
      <Hero />
      <About />
      <Resume />
      <Skills />
    </div>
  );
}

// Header / Navigation Component
function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
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
    <section className="max-w-3xl mx-auto text-center py-20 px-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Kayla Chavez</h1>
      <h3 className="text-lg md:text-xl text-gray-700 mb-8">
        I'm a Front-End Developer. I love combining technical skills with design thinking to create smooth, user-centered digital experiences.
      </h3>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto text-center py-20 px-6">
      <h1>ABOUT</h1>
      <h3>Hi,my name is Kayla Chavez</h3>
      <p className='"text-lg md:text-xl text-gray-700 mb-8"'>I’ve always been a problem solver at heart. As a kid I loved puzzles, solving riddles and finding patterns in things. I was drawn to anything that I could figure out. That curiosity stayed with me throughout the years guiding me as I entered into my career. Eventually that evolved into a love for good design – solving visual problems and crafting experiences that make sense at a glance. </p>
      <p>After graduating from San Diego State with a B.A. in Graphic Design, I began my career as a graphic designer. I collaborated with different companies and teams, working across branding, publications, and digital content. In 2021, I decided to take a leap to expand and challenge myself in a new way, joining a Full Stack Engineering bootcamp with Thinkful. Writing code gave me the same feeling I had as a kid solving puzzles –– that mix of curiosity, logic, and satisfaction when everything clicks. It became quickly clear that software engineering was where I wanted to grow.</p>
      <p>Now as a Front End Developer, I bring both design and engineering together. I care about details, clean interfaces, and building products where that not only works but feels good to use.</p>
      <p>In my spare time, I am usually feeding that same love of learning –– whether it’s solving Wordle, Sudoku, or crossword puzzles or diving into a good mystery novel. Of course, when I need a break from all the problem solving…I head to the gym 💪
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