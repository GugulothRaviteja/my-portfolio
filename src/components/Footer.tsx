import {
FaLinkedin,
FaEnvelope,
FaInstagram,
FaFacebook,
FaWhatsapp
} from 'react-icons/fa';

function Footer(){
return(
<footer id='contact' className='footer-section'>

<h2 className='title'>Connect With Me</h2>

<div className='contact-card'>
<p>
Email:
<a href='mailto:ravitejaguguloth21@gmail.com'>
 ravitejaguguloth21@gmail.com
</a>
</p>

<p>
Phone:
<a href='tel:+916305017463'>
 +91 6305017463
</a>
</p>
</div>

<div className='social-icons'>

<a
href='https://www.linkedin.com/'
target='_blank'
rel='noreferrer'
>
<FaLinkedin/>
</a>

<a href='mailto:ravitejaguguloth21@gmail.com'>
<FaEnvelope/>
</a>

<a
href='https://instagram.com/raviteja_021_'
target='_blank'
rel='noreferrer'
>
<FaInstagram/>
</a>

<a
href='https://facebook.com/raviteja.prabha.7'
target='_blank'
rel='noreferrer'
>
<FaFacebook/>
</a>

<a
href='https://wa.me/916305017463'
target='_blank'
rel='noreferrer'
>
<FaWhatsapp/>
</a>

</div>

<p className='copyright'>
 Raviteja | Java Full Stack Developer
</p>

</footer>
)
}

export default Footer;