import { useState } from 'react'
import heroImg from './assets/hero.png'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">Resham</a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">Hello, I'm Resham 👋</h1>
              <p className="lead">BIT Student | MERN Stack Developer</p>
              <button className="btn btn-primary btn-lg">Download CV</button>
            </div>
            <div className="col-md-6 text-center">
              <img src={heroImg} className="img-fluid rounded shadow" alt="profile" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">About Me</h2>
          <p className="text-muted">
            I am a Bachelor of Information Technology student skilled in HTML, CSS, JavaScript,
            React, Node.js, and MongoDB. I love building modern and responsive web applications.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">My Projects</h2>
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">Fee Management System</h5>
                  <p className="card-text">Web system to manage school fee payments and records.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">CourtX Furniture</h5>
                  <p className="card-text">Furniture showcase and ordering website.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">Karnali Explore</h5>
                  <p className="card-text">Tourism website promoting Karnali region.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">Himalayan Job Center</h5>
                  <p className="card-text">Job portal connecting employers and job seekers.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="card-title">E-Commerce App</h5>
                  <p className="card-text">Online shopping platform with product management.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-light py-5 text-center">
        <h2 className="fw-bold">Contact Me</h2>
        <p>Email: resham@example.com</p>
        <button className="btn btn-outline-primary">Send Message</button>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2026 Resham Kumar Thapa</p>
      </footer>
    </>
  )
}

export default App
