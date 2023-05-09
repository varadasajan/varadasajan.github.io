import logo from './logo.svg';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Animate.css'; 
import './css/Magnific-popup.css';
import './css/Main.css';
import './css/Responsive.css';
import './css/Slick.css';
import './css/Style.css';
 
import { Link, animateScroll as scroll } from "react-scroll";
import emailjs from "emailjs-com";
import { useRef, useState, useEffect } from "react";
import { TwitterDMButton } from 'react-twitter-embed';

import Resume from './Resume.pdf'
function App() { 
  const form = useRef();
  const [contactmsg, setcontactmsg]=useState('');
  const [msgStatus, setMsgStatus] =  useState('-1');
   const sendMail = (e)=>{
    e.preventDefault();
	setMsgStatus('0');
    emailjs.sendForm(
      "service_2vcfx1e",
      "template_5l61jya",
      form.current,
      "F6LgA52b42bEBAN5C",

    ).then(
      result=>{console.log(result); form.current.reset(); 
	  setcontactmsg('Your message sent successfully');
	  setMsgStatus(1);
	  setTimeout(function(){
		   setcontactmsg('');
	  },2000)
	  },
      error=>{console.log(error); form.current.reset(); 
	  setcontactmsg('Oops something went wrong');
	  setMsgStatus(2);
	   setTimeout(function(){
		   setcontactmsg('');
	  },2000)
	  }
    )
  }
  return (
    <div className="App"> 

        <div class="preloader">
          <img src="images/loader.gif" alt="Loading..."/>
        </div>




        <nav class="navbar navbar-default navbar-fixed-top navbar-inverse navbar-trans  navbar-fw" role="navigation">
          <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand logoV" href="index.html">V<span class="logoS">S</span></a>
          </div> 
          <div id="navbar" class="navbar-collapse collapse page-scroll navbar-right">
            <ul class="nav navbar-nav">
              <li><a href="#home">Home<span class="sr-only"></span></a></li>
              <li>
			  <Link to="about"  activeClass="active"  spy={true} smooth={true} offset={-70} duration={500}>About</Link> </li>
              <li>
			  <Link to="skillSet"  activeClass="active"  spy={true} smooth={true} offset={-70} duration={500}>My Skills</Link> </li>
              <li>
			  <Link to="experience"  activeClass="active"  spy={true} smooth={true} offset={-70} duration={500}>Experience</Link>  </li>
              <li>
			  <Link to="education"  activeClass="active"  spy={true} smooth={true} offset={-70} duration={500}>Education</Link> </li>
              <li><a href="#blog">Testimonials<span class="sr-only"></span></a></li>
              <li>
			  <Link to="contact"  activeClass="active"  spy={true} smooth={true} offset={-70} duration={500}>Contact</Link> </li>
              <li><a href="index.html">Tools<span class="sr-only"></span></a></li>
            </ul>             
          </div>
        </nav>


        <div id="home" class="agency2-hero">
          <div class="bg-overlay">
            
            <div id="large-header" class="large-header">
              <canvas id="demo-canvas" class="demo-canvas"></canvas>

             
              <div class="hero-content-wrapper">
                <div class="hero-content">
				<div class="col-xs-2 col-sm-1 imgWrapper" ><img src="images/my_pic.png" class="img-circle img-responsive" /></div>
                  <h1 class="hero-lead">Varada <span>C S</span></h1>
                  <h4 class="h-alt hero-secondary">Web Developer . Coder . Designer</h4> 
                  <Link to="about"  activeClass="active" className="btn btn-light" spy={true} smooth={true} offset={-70} duration={500}>Explore</Link>
                  
				  <Link to="about"  activeClass="active" className="scroller" spy={true} smooth={true} offset={-70} duration={500}>
                    <span class="scroller-text">scroll down</span>
                    <span  ><img src="images/down.png" /></span>
                  </Link>

                </div> 
              </div>

            </div>

          </div>
        </div>



       

        <section id="about" class="container">
          <div class="row section">
            
            <header class="sec-heading">
              <h2>About Me</h2>
              <span class="subheading blueTxt">Best Candies of creativity</span>
            </header>
			<div class="col-sm-4 wow bounceInLeft">
				<img src="images/about_me_header.png" class="img-responsive negTopMrgn" />
			</div>
            <div class="col-sm-8">
              <blockquote>
			  Hi, I am Varada, a web developer looking forward to work with pretty technical and lots of scientific ideas to serve best . My aim is to deliver the quality work with high standards with in time frame. I create usable, accessible and engaging websites.
			  My web designs are always full of refreshing ideas that can't wait to be seen by web people. I call them <span class="blueTxt">creative candies</span> and I know you will want some.
              <footer><cite>Varada C S</cite></footer></blockquote>
            </div>
             
          </div>
          <div class="row ws-m">
            <div class="col-md-12 text-center  wow swing">
              <a href={Resume} download="Varada" target='_blank' title="download resume" class="btn btn-default btn-normal btn-inline costumBtn">download resume <i class="fas fa-download"></i></a>
            
		 
			</div>
          </div>
        </section>



        

        <div class="number-counters-dark-bg">
           <section id="skillSet" class="container">
		   <h2>My Skills</h2>
		   <div class="subheading">What I can do</div>
            <div id="counters-min" class="row count-wrapper skillPercent">
              
             
              <div class="col-md-2  count-item wow fadeInDown" data-wow-duration="1s" data-wow-delay=".3s"> 
				 <div id="htmlChart" data-percent="95" data-scale-color="#ffb400">
				 <span class="chartSpan">95%</span>
				 </div>
				 
				 HTML/HTML5
              </div>

              
              <div class="col-md-2 count-item wow fadeIn" data-wow-duration="1s">
                <div id="cssChart" data-percent="85" data-scale-color="#ffb400">
				 <span class="chartSpan">85%</span>
				 </div>
				CSS/CSS3
              </div>

              
              <div class="col-md-2  count-item wow fadeInDown" data-wow-duration="1s">
               <div id="angularChart" data-percent="94" data-scale-color="#ffb400">
				 <span class="chartSpan">94%</span>
				</div>
				jQuery/Angular JS
              </div>

             
              <div class="col-md-2 count-item wow fadeInDown" data-wow-duration="1s" data-wow-delay=".3s">
                <div id="bootstrapChart" data-percent="85" data-scale-color="#ffb400">
				 <span class="chartSpan">85%</span>
				 </div>
				Bootstrap/Materialized CSS
				</div>
			  
			  
              <div class="col-md-2 count-item wow fadeIn" data-wow-duration="1s" data-wow-delay=".3s">
                <div id="reactChart" data-percent="80" data-scale-color="#ffb400">
				 <span class="chartSpan">80%</span>
				 </div>
				React JS
              </div>
			  
			  
              <div class="col-md-2 count-item wow fadeInDown" data-wow-duration="1s" data-wow-delay=".3s">
                <div id="photoChart" data-percent="65" data-scale-color="#ffb400">
				 <span class="chartSpan">65%</span>
				 </div>
				Photoshop
              </div>
			  

            </div>
          </section>
        </div>

		
		<section id="experience" class="container experience">
          <div class="row section">
            
            <header class="sec-heading">
              <h2 class="wow fadeInUp">Work Experience</h2>
              <span class="subheading blueTxt wow fadeInDown">My Professional Background</span>
            </header>
			<div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month"></div>
							<div class="experience-date-end-year blueTxt ">now</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">June</div>
							<div class="experience-date-start-year ">2019</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">Tata Consultancy Services</div>
					<div class="experience-position text-right">Technical Lead</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">Tata Consultancy Services is an Indian multinational information technology services and consulting company. Tcs is a global leader in IT services, consulting, and business solutions. I am involved in creating and deploying Angular, ionic and react applications. Unit testing, defect fixing, device testing etc</p>
						<a href="https://www.tcs.com/">https://www.tcs.com/</a>
					</div>
				</div>
				</div>
            </div> <div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month">May</div>
							<div class="experience-date-end-year blueTxt ">2019</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">May</div>
							<div class="experience-date-start-year ">2017</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">Freelancer</div>
					<div class="experience-position text-right">Web Developer</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">I was a self employed India based freelancer looking forward to work with creative ideas. I am highly experienced in developing fully responsive websites with php frameworks as well as CMSs. I have Sound knowledge in Angular js and other javascript frameworks too. Innovation is my passion. With every line of code I strive to make the web beautiful.</p>
						<a href="https://varadasajan.github.io/">https://varadasajan.github.io/</a>
					</div>
				</div>
				</div>
            </div> 
			<div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month">May</div>
							<div class="experience-date-end-year blueTxt ">2017</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">July</div>
							<div class="experience-date-start-year ">2014</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">Cognizant Technology Solutions</div>
					<div class="experience-position text-right">Technology Lead</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">CTS is a global leader in business and technology services, helping their clients bring the future of work to life—today. I was working as a front end developer in CTS who involved in UI design and development, code integration with back end development team, bug fixing, Understanding of client’s expectation from the BRDs and from calls etc. </p>
						<a href="https://www.cognizant.com/">https://www.cognizant.com/</a>
					</div>
				</div>
				</div>
            </div> 
			<div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month">July</div>
							<div class="experience-date-end-year blueTxt ">2014</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">June</div>
							<div class="experience-date-start-year ">2013</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">TI Technologies</div>
					<div class="experience-position text-right">Senior Software engineer</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">TI Technologies with its Project Managers, Developers, Designers, and Testers have worked with over 300 businesses both small and big from startup to corporate. I was working as a backend developer in TI. I was developing projects based on Zend framework and CMS like Social engine there.</p>
						<a href="https://www.titechglobal.com/">https://www.titechglobal.com/</a>
					</div>
				</div>
				</div>
            </div> 
			<div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month">March </div>
							<div class="experience-date-end-year blueTxt ">2013</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">February</div>
							<div class="experience-date-start-year ">2012</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">WDS Technologies</div>
					<div class="experience-position text-right">Senior Software engineer</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">WDS Technologies and Systems LLP is a premier IT Solutions firm, primarily a website development and design company, with one simple objective to help the businesses to leverage the full potential of the Internet. I was a backend developer in WDS with experience in core php, joomla, wordpress and social engine.</p>
						<a href="http://www.wdstech.com/">http://www.wdstech.com/</a>
					</div>
				</div>
				</div>
            </div>
			<div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month">June </div>
							<div class="experience-date-end-year blueTxt ">2010</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">November</div>
							<div class="experience-date-start-year ">2011</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">Spaniac Corperate solutions Pvt Ltd</div>
					<div class="experience-position text-right">Technical Consultant</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">Spaniac is a full service web design company. They craft beautiful, engaging websites and deliver successful SEO campaigns. They are specialized in website design, custom web development for desktop and mobile and search engine optimization (SEO). My role in spaniac included developing core php websites,understnding and developing backend based on BRDs and client requirements, bug fixing etc.</p>
						<a href="http://spaniac.com/">http://spaniac.com/</a>
					</div>
				</div>
				</div>
            </div>
			<div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month">September </div>
							<div class="experience-date-end-year blueTxt ">2008</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">April</div>
							<div class="experience-date-start-year ">2010</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">Southerland Global Services</div>
					<div class="experience-position text-right">Technical Support Executive</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">Southerland is a BPO company with a branch in Kakkanad. I was under the department of Online chat support of Norton Antivirus software.</p>
						<a href="https://www.sutherlandglobal.com/">https://www.sutherlandglobal.com/</a>
					</div>
				</div>
				</div>
            </div>
          </div>
          
        </section>


<section id="education" class="container experience">
          <div class="row section">
            
            <header class="sec-heading">
              <h2 class="wow fadeInUp">Education</h2>
              <span class="subheading blueTxt wow fadeInDown">My Academic Achievement</span>
            </header>
			<div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month">June</div>
							<div class="experience-date-end-year blueTxt ">2004</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">March</div>
							<div class="experience-date-start-year ">2008</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">SNMIMT, Malyankara</div>
					<div class="experience-position text-right">Btech in Computer Science and Engineering</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">SNM Institute of Management and Technology is one of the most prestigious and earliest self financing engineering colleges in Kerala. This Institute is owned and managed by the Hindu Matha Dharma Paripalana Sabha. The college is recognized by AICTE and affiliated to Mahatma Gandhi University, Kottayam. </p>
						<a href="http://www.snmimt.edu.in/">http://www.snmimt.edu.in/</a>
					</div>
				</div>
				</div>
            </div> 
			<div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month">March</div>
							<div class="experience-date-end-year blueTxt ">2004</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">June</div>
							<div class="experience-date-start-year ">2002</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">SMHSS, Cherai</div>
					<div class="experience-position text-right">Plus Two in Computer Science</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">SMHSS is a higher secondary school located in Cherai, Kerala. </p>
						<a href="https://www.facebook.com/S.M.H.S.S.C.H.E.R.A.I/">https://www.facebook.com/S.M.H.S.S.C.H.E.R.A.I/</a>
					</div>
				</div>
				</div>
            </div> 
			<div class="experience-item-wrapper">
				<div class="brder hidden-xs"></div>
				<div class="experience-info-holder col-sm-3 noPadding wow slideInRight">
					<div class="experience-date">
						<div class="experience-date-right pull-right">
							<div class="experience-date-end-month">June </div>
							<div class="experience-date-end-year blueTxt ">1993</div>
						</div>
						<div class="experience-date-left pull-right">
							<div class="experience-date-start-month">March</div>
							<div class="experience-date-start-year ">2002</div>
						</div>
					</div>
					<div class="experience-company text-right blueTxt">HIHSS, Edavanakad</div>
					<div class="experience-position text-right">SSLC</div>
				</div>
				<div class="experience-desc-holder">
				 <div class=" wow slideInLeft">
					<div class="experience-desc">
						<p class="excerpt">This is a school located in Edavanakad. This is the largest school in Vypin area.</p>
						<a href="https://www.facebook.com/hihssedavanakad.hihssedavanakad">https://www.facebook.com/hihssedavanakad.hihssedavanakad</a>
					</div>
				</div>
				</div>
            </div>
		</div>
          
        </section>
 
        
        <footer id="contact" class="footer-contact">
          <div class="container-fluid">
            <div class="row">

              <div class="col-lg-6 no-gap section contact-form">
                <header class="sec-heading">
                  <h2>Contact Me</h2>
                  <span class="subheading">Send me a message</span>
				  <span className={msgStatus=='1'?'greenTxt':'redTxt'}>{contactmsg}</span>
				  <form ref={form} onSubmit={sendMail}>
				  <div class="form-group">
					<label for="name">Name*:</label>
					<input type="text" class="form-control" id="name" name="user_name"  required />
				  </div>
				   <div class="form-group">
					<label for="email">Email address*:</label>
					<input type="email" class="form-control" id="email" name="user_email" required />
				  </div>
				  <div class="form-group">
					<label for="message">Message*:</label>
					<textarea class="form-control" id="message" name="message" required></textarea>
				  </div>
				  <div class="form-group">
				  <input type="submit" value="send" class="btn btn-default btn-normal btn-inline costumBtn" disabled={msgStatus=='0'?true:false}/>
				  </div>
				  </form>
                </header>

                
              </div>
              <div class="col-lg-6 no-gap contact-info">

                
                <a href="#" class="show-info-link"><i class="fa fa-info"></i>Show info</a>

                <div id="map-canvas" class="footer-map"></div>

                <address class="contact-info-wrapper wow pulse ">
                  <ul>
                    
                    <li class="contact-group">
                      <span class="adr-heading">Address</span>
                      <span class="adr-info">Eranakulam, Kerala, India</span>
                    </li>
                    
                    <li class="contact-group">
                      <span class="adr-heading">Email</span>
                      <span class="adr-info">varadasajan@gmail.com</span>
                    </li>
                  </ul>
                  <ul>
                    
                    <li class="contact-group">
                      <span class="adr-heading">Phone</span>
                      <span class="adr-info">+91 9746 703 864</span>
                    </li>
                    <li class="contact-group">
					<span class="adr-heading">Message via Twitter</span><br/>
					 <TwitterDMButton id={4125244992} />
					</li>
					
                    
                  </ul>                  
                   
                </address>

              </div>


              
             

            </div>
          </div>


          
          <div class="dark-bg">
            <div class="container footer-social-links">
              <div class="row">
                
                <ul>
                  <li><a href="https://www.facebook.com/varadapraveendas">facebook</a></li>
                  <li><a href="https://twitter.com/varadacs">Twitter</a>
				  </li>
                  <li><a href="https://www.linkedin.com/in/varadacs/">LinkedIn</a></li>
				  {/* <li><a href="#">Skype</a></li>*/}
                </ul>

              </div>
            </div>
          </div>


          
          <div class="copyright">
            <div class="container">
              <div class="row">
                
                <div class="col-md-6">
                  <small>&copy; 2023-VaradaCS</small>
                </div>

                <div class="col-md-6">
                  <small><a href="#page-top" class="pull-right to-the-top">To the top<i class="fa fa-angle-up"></i></a></small>
                </div>

              </div>
            </div>
          </div>
        </footer>

    </div>
  );
}

export default App;
