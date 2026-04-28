// import {FaReact,FaJava} from "react-icons/fa";
// import {SiSpringboot,SiMysql,SiMongodb} from "react-icons/si";
import {
FaJava,
FaReact,
FaHtml5,
FaCss3Alt,
FaJs
} from "react-icons/fa";

import {
SiSpringboot,
SiMysql,
SiMongodb,
SiPostman
} from "react-icons/si";
const skills=[
// {icon:<FaJava/>,name:"Java"},
// {icon:<FaReact/>,name:"React"},
// {icon:<SiSpringboot/>,name:"Spring Boot"},
// {icon:<SiMysql/>,name:"MySQL"},
// {icon:<SiMongodb/>,name:"MongoDB"}
{name:"Java", icon:<FaJava/>},
{name:"JavaScript", icon:<FaJs/>},
{name:"HTML5", icon:<FaHtml5/>},
{name:"CSS3", icon:<FaCss3Alt/>},
{name:"ReactJS", icon:<FaReact/>},
{name:"Spring Boot", icon:<SiSpringboot/>},
{name:"REST API", icon:"🔗"},
{name:"MySQL", icon:<SiMysql/>},
{name:"MongoDB", icon:<SiMongodb/>},
{name:"Postman", icon:<SiPostman/>}
];

function Skills(){
return(
<section id="skills">
<h2 className="title">Skills</h2>

<div className="skills-grid">
{skills.map((skill,i)=>(
<div className="skill-card" key={i}>
<div className="skill-icon">
{skill.icon}
</div>
<h3>{skill.name}</h3>
</div>
))}
</div>

</section>
)
}

export default Skills;



// const skills = [
// 
// ];