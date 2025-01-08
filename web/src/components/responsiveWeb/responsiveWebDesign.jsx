import React, { useState } from 'react';
import './responsiveWebDesign.css';
import ResponsiveWeb1 from '../../assets/wevdes.jpg';
import ResponsiveWeb2 from './../../images/ResponsiveWeb2.png';
import ResponsiveWeb3 from './../../images/ResponsiveWeb3.webp'
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiDatabase2Fill } from "react-icons/ri";
import { IoTimerOutline } from "react-icons/io5";
import { SiAudiotechnica } from "react-icons/si";
import { BsPersonCircle } from "react-icons/bs";
import { GrServices } from "react-icons/gr";
import QuotationForm from '../form/quotationForm';

const icons = [
  { Component: AiOutlineHtml5, className: 'res_icon' },
  { Component: IoLogoCss3, className: 'res_icon' },
  { Component: FaReact, className: 'res_icon' },
  { Component: RiDatabase2Fill, className: 'res_icon' },
];

const features = [
  { title: "Creative Approach", description: "Price/Cost is obviously one of the main concerns with any venture or small Business man or individual Person", icon: SiAudiotechnica },
  { title: "Experienced Professionals", description: "Price/Const is obviously one of the main concerns with any venture or small Business man or individual person", icon: IoTimerOutline },
  { title: "Experienced Professionals", description: "Price/Const is obviously one of the main concerns any venture or small Business man or individual person ", icon: BsPersonCircle },
  { title: "Technically Sound", description: "Price/Cost is obviously one of the main concerns with any venture or small Business man or individual person ", icon: GrServices },
];

function IconList() {
  return (
    <div style={{ marginTop: "60px" }} className='icon-li'>
      {icons.map(({ Component, className }, index) => (
        <Component key={index} className={className} />
      ))}
    </div>
  );
}

function FeatureList() {

  return (
    <div className="row different-list">
      {features.map(({ title, description, icon: Icon }, index) => (
        <div key={index} className="col-12 col-lg-6 different-item d-flex px-5 py-3">
          <Icon className="different-icon res_diffe_icon me-4" />
          <div className="different-text">
            <h4 className="different-title">{title}</h4>
            <p className="different-description">{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


export default function ResponsiveWebDesign() {
  const [consultactive, setConsultActive] = useState(false)
  const handleConsult = () =>{
    setConsultActive(true);
  }
  return (
    <div style={{ marginTop: "60px" }}>
      <section className="Responsive_top">
        <img src={ResponsiveWeb1} className="responsive1" alt="responsive top" />
        <div className="overlay">
          <h1 className="responsive-header">Responsive Web Designing</h1>
          <h5  className="responsive-description">  Find out what great work can do to your business. At AKS Websoft, we help customize your website  to increase your business visibility worldwide. Find out what great work can do to your business. At AKS Websoft, we help customize your website to increase your business visibility worldwide.  </h5>
          <h4  className="responsive-subheading mt-4">Transform your wesite to match all devices.</h4>
          <h5  className="responsive-description">Find out what great work can do to your business. At AKS Websoft, we help customize your website to increase your business visibility worldwide.</h5>
          <IconList />
        </div>
      </section>

      <section>
  <div className="section-grid">
    <div className="section-text">
      <h2>
        Responsive Web Designing
      </h2>
      <h6 className="fw-bold text-dark">
        Website You Love and Your Customers Love
      </h6>
      <p>
      In the very short way we can say - Web design is the skill of creating presentations of content, 
      color and image that is delivered to an end-user through the World Wide Web. 
      </p>
      <p>
      Website Designing is a process of planning processing and designing of electronic media content delivered via int
      </p>
    </div>
    <div className="section-image">
        <img
          src={ResponsiveWeb2}
          className="process-design"
          alt="design process"
        />
      </div>
  </div>
</section>

      
      <section>
      <div className='web-container' >
            <div style={{width:"70%", margin:"auto"}}>
            <h1 className='web-header'>Responsive Web Designing</h1>
            <p className='web-text'>Understanding what a website needs to do, and who your audience is?
            Suggest domain name and web hosting as per your requirements
            Start designing according to customer's and market requirements in term of
            visualization.
            Website testing, it covers w3c validation / browser compatibility / fast
            downloading and error free site.
            Ready to visible in Search engines.</p>
            <p className='web-text'>Understanding what a website needs to do, and who your audience is?
            Suggest domain name and web hosting as per your requirements
            Start designing according to customer's and market requirements in term of
            .</p>
            </div>
    </div>
      </section>

      <section className="different-section py-5">
  <h2 className="text-primary text-center mb-4">What’s make us different?</h2>
  <div className="feature-container">
    <FeatureList />
  </div>
</section>

<div className="desired-output-container">
  <img 
    src={ResponsiveWeb3} 
    className="w-100 img-fluid" 
    alt="Responsive web design illustration" 
  />
</div>
<section className="consultationn-section"
        style={{ marginBottom: "15px" }}
      >
        <div className="consultationn-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn" onClick={handleConsult}> Consult Now →</button>
        </div>
      </section>
      <section>
      {
          consultactive &&  (
            <div><QuotationForm /></div> 
          )
        }
      </section>
    </div>
  );
}
