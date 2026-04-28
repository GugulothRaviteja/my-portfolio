import profile from "../assets/profile.jpg";

function Hero() {
return (
<section className="hero">

<div className="hero-content">
<h1>
Hi, I'm <span>Raviteja</span>
</h1>

<h2>Java Fullstack Developer</h2>

<p>
Building scalable web applications using React,
Spring Boot, and REST APIs
</p>

<a
href="mailto:ravitejaguguloth21@gmail.com?subject=Hiring Opportunity"
className="hire-btn"
>
Hire Me
</a>

</div>

<div className="profile-wrapper">
<img src={profile} alt="Raviteja"/>
</div>

</section>
)
}

export default Hero;