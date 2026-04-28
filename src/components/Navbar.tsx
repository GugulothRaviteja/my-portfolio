function Navbar() {

return (
<nav className="nav">
<h2 className="logo">Raviteja</h2>

<ul>
<li><a href="#about">About</a></li>
<li><a href="#skills">Skills</a></li>
<li><a href="#projects">Projects</a></li>
<li><a href="#education">Education</a></li>
<li><a href="#contact">Contact</a></li>
</ul>

</nav>
);
}

// const navStyle:any={
// display:"flex",
// justifyContent:"space-between",
// alignItems:"center",
// padding:"20px 10%",
// background:"#020617",
// position:"sticky",
// top:0
// }

// const menuStyle:any={
// display:"flex",
// gap:"25px",
// listStyle:"none"
// }

export default Navbar;