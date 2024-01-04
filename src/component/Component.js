import React,{useState} from "react";
import '../style/Component.css'
import instructorpng from '../img/instructor.jpg'
import reviewpng from '../img/profile.png'

import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Component = ({ instructor, course, testimonal }) => {


  const testimonials = [
    {
      text: testimonal.text,
      reviewer_name: testimonal.reviewer_name,
      reviewer_designation: testimonal.reviewer_designation,
    },
    {
      text: "Another testimonial text.",
      reviewer_name: "Name of the reviewer 2",
      reviewer_designation: "Designation of the reviewer 2",
    },
    // Add more testimonials as needed
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleRightClick = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleLeftClick = () => {
    setCurrentTestimonialIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="head-background">
     <div className="overlay">
       <div className="head-content">
         <h4 style={{opacity:"0.8"}}>{instructor.name}</h4>
         <h1>{course.title}</h1>
        </div>
      </div>
      <div className="stick-course">
        <div className="fees">
        <span className="course-fees">Course fees</span>
        <small style={{fontSize:"35px"}}><span style={{fontSize:"45px"}}>&#8377;</span><span>{course.fee.amount}</span></small>
        </div>
        <div>
          <span className="ul-list">What's included</span>
          <div style={{paddingTop:"9px"}}>
             <li className="list-background1">{course.inclusions.on_demand_videos} on-demand videos</li>
             <li className="list-background1">2 livestream sessions</li>
             <li className="list-background2">Live Q&A sessions with <span style={{textTransform:"lowercase"}}>{instructor.name}</span></li>
             <li className="list-background2">An active WhatsApp community</li>
          </div>
        </div>
        <button className="register">Register today</button>
      </div>
      <div className="Main">
      <div className="routes">
       <a href="#About" style={{borderBottom:"5px solid purple",padding:"0 12% 0 10%",marginLeft:"2em"}}><h1>About</h1></a> 
        <a href="#instruction" style={{padding:"0 10%"}}><h1>Instructor</h1></a>
        <a href="#reviews" style={{padding:"0 10%"}}><h1>Reviews</h1></a>
      </div>
      <div style={{marginLeft:"2em"}}>
        <h1 id="About">About the Course</h1>
        <p className="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="about-para">consec nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="about-para">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className="expect">
        <h1 style={{marginLeft:"1em"}}>What to expect from the course</h1>
        <div className="arrow-list" dangerouslySetInnerHTML={{ __html: course.what_to_expect.html_content }} />
      </div>
      <div>
        <h1 style={{marginLeft:"1em"}}>Key Topics covered</h1>
        <p style={{marginLeft:"1em"}} className="about-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="arrow-list" dangerouslySetInnerHTML={{ __html:course.key_topics.html_content}}/>
      </div>
      </div>
      <div id="instruction" style={{margin:"3em 2em 1.4em"}}>
        <h1>About the instructor</h1>
        <div className="about-instructor">
          <img style={{borderRadius:"100%",height:"60%"}} src={instructorpng}/>
          <p className="about-para2">consec nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="about-para2">sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="social-media-container">
      <div className="social-icon">
        <FaFacebook />
        <span>Facebook</span>
      </div>
      <div className="social-icon">
        <FaTwitter />
        <span>Twitter</span>
      </div>
      <div className="social-icon">
        <FaYoutube />
        <span>YouTube</span>
      </div>
      <div className="social-icon">
        <FaInstagram />
        <span>Instagram</span>
      </div>
    </div>
    <div id="reviews" className="footer">
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
        <div onClick={handleLeftClick} className="arrow-style">&lt;</div>
        <div className="textimonal-style">
          <h1 style={{width:"25em"}}>"{currentTestimonial.text}"</h1>
          <div style={{display:"flex",marginLeft:"16em"}}>
            <img style={{width:"35px",marginRight:'8px'}} src={reviewpng} alt="name"/>
          <span style={{display:"flex",flexDirection:"column",textAlign:"left"}}>
            <strong>{currentTestimonial.reviewer_name}</strong> <strong>{currentTestimonial.reviewer_designation}</strong>
          </span>
          </div>
        </div>
        <div onClick={handleRightClick} className="arrow-style">&gt;</div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Component;