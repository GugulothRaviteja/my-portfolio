import milk from '../assets/milk.jpg';
import cake from '../assets/cake.jpg';
import ecommerce from '../assets/ecommerce.jpg';

function Projects(){

const projects=[
{
name:'Milk In Minute',
image:milk,
description:
'Online dairy ordering platform with responsive UI and smooth ordering flow.'
},
{
name:'Bake My Cake',
image:cake,
description:
'Bakery ordering application with interactive UI and product ordering features.'
},
{
name:'E-Commerce Website',
image:ecommerce,
description:
'Full-stack commerce platform with cart, authentication and REST APIs.'
}
]

return(
<section id='projects'>
<h2 className='title'>Projects</h2>

<div className='project-grid'>

{projects.map((project,index)=>(
<div
className='project-card'
key={index}
style={{
backgroundImage:`url(${project.image})`
}}
>
<div className='overlay'></div>

<div className='project-content'>
<h3>{project.name}</h3>
<p>{project.description}</p>
</div>

</div>
))}

</div>

</section>
)
}

export default Projects;