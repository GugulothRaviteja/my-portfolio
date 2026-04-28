function Education(){

const education=[
{
degree:'B.Tech Computer Science',
institute:'Malla Reddy Engineering College',
score:'72.9%',
year:'2020 - 2023'
},
{
degree:'Diploma in Mining Engineering',
institute:'Abdul Kalam Institute of Technological Sciences',
score:'72.85%',
year:'2017 - 2020'
},
{
degree:'SSC',
institute:'New Vision High School',
score:'7.7 GPA',
year:'2017'
}
]

return(
<section id='education'>
<h2 className='title'>Education</h2>

<div className='education-grid'>

{education.map((item,index)=>(
<div
className='education-card'
key={index}
>
<h3>{item.degree}</h3>
<p>{item.institute}</p>
<p>{item.score}</p>
<span>{item.year}</span>
</div>
))}

</div>

</section>
)
}

export default Education;