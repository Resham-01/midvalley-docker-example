import { useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Resham Kumar Thapa</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Hello, I'm Resham 👋</h1>
          <p>BIT Student | MERN Stack Developer | Passionate Learner</p>
          <button className="btn">Download CV</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Profile" />
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a Bachelor of Information Technology student with skills in HTML,
          CSS, JavaScript, React, Node.js, and MongoDB. I enjoy building modern
          web applications and solving real-world problems.
        </p>
      </section>

      {/* Counter Section */}
      <section className="counter-section">
        <h2>Fun Counter</h2>
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>My Projects</h2>
        <div className="project-cards">
          <div className="card">
            <h3>Student Reminder App</h3>
            <p>Android app for managing assignments and reminders.</p>
          </div>
          <div className="card">
            <h3>Bakery Management System</h3>
            <p>MERN stack project for managing bakery operations.</p>
          </div>
          <div className="card">
            <h3>Tourism Website</h3>
            <p>Responsive website showcasing tourism in Karnali.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>Email: resham@example.com</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Resham Kumar Thapa. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
