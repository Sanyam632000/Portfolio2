import './App.css';
import React,{useRef} from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {MdComputer} from 'react-icons/md'
import {FaUniversity,FaHtml5,FaCss3Alt,FaReact,FaNodeJs,FaBootstrap,FaGithub} from 'react-icons/fa'
import {SiJavascript,SiMongodb,SiPostgresql,SiGmail} from 'react-icons/si'
import profileImage from './profileImage.jpg';
import { Zoom } from "react-awesome-reveal";
import emailjs from '@emailjs/browser'

const file = "http://localhost:3000/Sanyam-Panchal-WebDeveloper.pdf"

function App() {

  const downloadFile =(url)=>{
    const aTag = document.createElement('a')
    aTag.href = url
    aTag.setAttribute('download', "Sanyam-Panchal-WebDeveloper.pdf")
    document.body.appendChild(aTag)
    aTag.click()
    aTag.remove()
  }

  return <BrowserRouter>
  <div>
  <nav className='header'>
      <h3 className='name'>Sanyam Panchal</h3>
      <h6 className='email'>sanyampanchal632000@gmail.com</h6>
      
      <div className='header-right-buttons'>
      <button className='github-button'><Link to='https://github.com/Sanyam632000' className='github-link'><FaGithub size={25}></FaGithub></Link></button>
      <button className='resume' onClick={()=>downloadFile(file)}>My Resume</button>


      </div>

      <ul>
        <li> <button className='btn buttons'><Link to='/' className='link'>Home</Link></button> </li>
        <li> <button className='btn buttons'><Link to='/skills' className='link'>Skills</Link></button> </li>
        <li> <button className='btn buttons'><Link to='/projects' className='link'>Projects</Link></button> </li>
        <li> <button className='btn buttons'><Link to='/contact' className='link'>Contact</Link></button> </li>
      </ul>
      
 </nav>
  
  {/*<ParticleBackground  className='bg'/>
  <ParticleBackground  className='bg'/>
<ParticleBackground  className='bg'/>*/}
  
  <Routes>
    <Route exact path='/' element={<Home/>}>  </Route>
    <Route path='/skills' element={<Skills/>}> </Route>
    <Route path='/projects' element={<Projects/>}>  </Route>
    <Route path='/contact' element={<Contact/>}>  </Route>
</Routes>



</div>
</BrowserRouter>
}

const Home =()=>{
  return<>
          <div className='hello'>
            <Zoom>
            <div className='hello-content'>
              <h2 className='hello-name'>SANYAM PANCHAL</h2>
              <h1 className='hello-position'>Full-Stack Developer</h1>
              <h1 className='second'>My name is <span>Sanyam Panchal</span> and I have pursued <span>Computer Science (BSc. Hons)</span> <MdComputer/> from <span>York University <FaUniversity/></span>. I am looking for full-time job relating to my education field. I have been working and making project using <span>MERN Stack</span> for the last 2-3 years and have really good idea of how a website works both at frontend and backend. </h1>

            {/*  <div className='hello-buttons'>
              <li> <button className='btn hello-first-button'><Link to='/projects' className='link'>My Latest Work</Link></button> </li>
              <li> <button className='btn'><Link to='/contact' className='link'>Contact Me</Link></button> </li> 
</div> */}
              
            </div>
            </Zoom>
            <div className='hello-image-div'>
              <img src={profileImage} className='hello-image'></img>
            </div>
          </div>
        </>
}

const Skills =()=>{
  return <div className='third'>
            <Zoom>
              
              <FaHtml5 size='100' className='skills_icon' color='#f06529'/>
              <FaCss3Alt size='100' className='skills_icon' color='#2965f1'/>
              <SiJavascript size='100' className='skills_icon' color='yellow'/>
              <FaBootstrap size='100' className='skills_icon' color='#553C7B'/>
              <FaReact size='100' className='skills_icon' color='lightblue'/>
              <FaNodeJs size='100' className='skills_icon' color='green'/>
              <SiMongodb size='100' className='skills_icon' color='#3FA037'/>
              <SiPostgresql size='100' className='skills_icon' color='#0064a5'/>
              
            </Zoom>
         </div>
}

const Projects =()=>{
  return <div className='hello_project'>
            <Zoom>

            
            <h1><b>1) Go-Social: </b> <span className='project-description'> This is a full-stack social networking website which is developed using MERN stack. I have tried to create a website just like facebook, where user can create and login in an account, user can follow or unfollow other users, check other user's profile. User can also chat with other users (if user is following the other user) and for this chat system I have used web socket. Due to web socket, the chat system works as real-time communication.</span></h1>
            <div className='project-button-div'>
              <a href='https://github.com/Sanyam632000/Go-Social-Frontend' className='view-git-repo'>View Frontend Git Repo</a>
              <a href='https://github.com/Sanyam632000/Go-Social-Backend' className='view-git-repo'>View Backend Git Repo</a>
              <a href='https://github.com/Sanyam632000/Go-Social-Socket' className='view-git-repo'>View Socket Git Repo</a>
            </div>


            <h1><b>2) E-Commerce Website: </b> <span className='project-description'> This is a full-stack e-commerce website which is developed using MERN stack where user can buy shoes. Website has good filtering of the product. User can also post a review on a product and can also update products in their cart. I have used tailwind CSS and typescript in the frontend part.</span></h1>
            <div className='project-button-div'>
              <a href='https://github.com/Sanyam632000/shoescom-frontend' className='view-git-repo'>View Frontend Git Repo</a>
              <a href='https://github.com/Sanyam632000/shoescom-backend' className='view-git-repo'>View Backend Git Repo</a>
            </div>

            <h1><b>3) FindMate: </b> <span className='project-description'> This is a full-stack website which is developed using MERN stack. This website was made primarily for University or College Students. In this website, user can search for other students which are in same course or taking same subject. User can update his personal info such which subject he is taking this intake or will be taking in upcoming intake. Moreover, this website has a concept of market where students can sell their old books or labs material or other user can buy those stuff. It also has chat system where user can communicate in real-time as I have used web socket for the chat system. Furthermore, students (user) can ask questions related to the courses or particular professor and other students can make a comment to that questions. So, I have tried to mix the concept of social media, Kijiji and quora in one website.</span></h1>
            <div className='project-button-div'>
              <a href='https://github.com/Sanyam632000/Hackathon-FindMate' className='view-git-repo'>View Github Repository</a>
            </div>

          
            <h1><b>4) Menu: </b> <span className='project-description'> This menu is designed using React. There are four button in the website and I have used the concept of map.filter(). In all button, there are list of availble dishes whereas in breakfast button, there is list of only breakfast dishes (used concent of map.filter()). The rest of remaining button work in similar manner. Moreover, I have used CSS for making the website more attractive and responsive. This is webpage is responsive for all mobile, tablet and laptop devices.</span></h1>
            <div>
            <a href='https://menu-static-webpage.netlify.app/' className='view-git-repo'>View Deployed Version</a>
            </div>


            <h1><b>5) OurTours: </b> <span className='project-description'> This is simple static webpage designed using pure React and CSS and have used dummy data for all the informations. When you press not Interested button it will be removed from the webpage and when all tours information will be removed, then it will say no Tour Left. This is responsive website which can adapt any mobile, tablet and laptop devices.</span></h1>
            <div>
            <a href='https://tours-information.netlify.app/' className='view-git-repo'>View Deployed Version</a>
            </div>

            

            </Zoom>
         </div>
}


const Contact =()=>{

  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vrfgiaq', 'template_ddgqim9', e.target, {
        publicKey: 'din9nuWmzbMZBWxME',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return <div className='hello1'>
            <Zoom>
            <h1>Contact</h1>
            <form ref={formRef} onSubmit={sendEmail}>     
                <h4>Name</h4>
                <textarea className='input' type='text' placeholder='Name' name ='name' required="true"></textarea>
                <h4>E-mail</h4>
                <input className='input' type='email' placeholder='e-mail' name='email' required='true'></input>
                <h4>Message</h4>
                <textarea className='textarea' placeholder='Message' name='message' required='true'></textarea>
                <br/>
                <button className="send" type='button'>Send</button>  
            </form>           
            </Zoom>
         </div>
}

export default App;
