import React from 'react';
import Nav from './Nav';
import './styles.css';

function Home() {
    return (
        <div className='home'>
            <Nav />
            <section id="testimonials">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">

                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="testimonial-image" src="software2.jpg" alt="" />
                            <h2>Software Engineering (Computer Science with Python, Oracle Certifications)</h2>
                        </div>
                
                        <div class="carousel-item">
                            <img class="testimonial-image" src="hardware.jpg" alt="" />
                            <h2>Hardware Engineering, Networking and System Security (Computer Engineering with Cisco Certifications for Hardware and Cybersecurity with Cybersecurity Certifications for Networking)</h2>
                        </div>

                        <div class="carousel-item">
                            <img class="testimonial-image" src="dmt.jpg" alt="" />
                            <h2>Digital Multimedia Technology (Mass Communication with ADOBE Certifications)</h2>
                        </div>

                        <div class="carousel-item">
                            <img class="testimonial-image" src="banking.jpg" alt="" /> 
                            <h2>Banking Operation (Banking & Finance with ATS Certifications)</h2>
                        </div>

                    </div>

                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span id='prev' class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
                
            </section>
            <p className="copy">Copyright &copy; SMARG WEB DEVELOPMENT</p>
        </div>
    );
}

export default Home;