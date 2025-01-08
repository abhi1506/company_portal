import React, { Fragment } from "react";
import cloudServicesImage from "../../assets/custom-software-development.gif";
import { FaArrowDown } from "react-icons/fa";
import softwareImage1 from "../../assets/softwareDevelopment1.jpg";
import softwareImage2 from "../../assets/Cloud-2.jpg";
import softwareImage3 from "../../assets/iot.jpg";
import softwareImage4 from "../../assets/integrations.jpg";
import softwareImage5 from "../../assets/learning-and-ai.jpg";
import softwareImage6 from "../../assets/api.jpg";
import softwareImage7 from "../../assets/enterprise1.png";
import "./customSoftwareDevelopment.css"; 
import { FaApple, FaClipboardCheck, FaPaintBrush, FaCode, FaBug,
  FaUserTie, FaUsers, FaDollarSign
} from 'react-icons/fa';
import { GiShakingHands } from "react-icons/gi";
import ProcessCard from "../card/processCard";
import OurCustomersSection from "../card/ourCustomersSection";
import HeroSection from "../card/Hero/heroSection";
import heroImg from "../../assets/software-development.jpg"
const works = [
  {
    Icon: <FaApple size={30} color="#fff" />, 
    title: "Custom iPhone App Development:",
    description: "We craft tailored iOS apps that align with your unique business goals and objectives.",
  },
  {
    Icon: <FaClipboardCheck size={30} color="#fff" />,
    title: "App Consulting",
    description: "Our expert consultants help you define your app requirements, identify target audiences, and determine the best features and functionalities for your app.",
  },
  {
    Icon: <FaPaintBrush size={30} color="#fff" />,
    title: "App Design",
    description: "Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
  },
  {
    Icon: <FaCode size={30} color="#fff" />,
    title: "App Development",
    description: "Our experienced developers build robust, scalable, and secure iOS apps using the latest technologies and frameworks.",
  },
  {
    Icon: <FaBug size={30} color="#fff" />, 
    title: "App Testing and Quality Assurance",
    description: "Our skilled designers create visually stunning and user-friendly app interfaces that reflect your brand and captivate your users.",
  },
];

const boostCards = [
  {
    title: "Mobile App Development",
    description: "Designing and developing user-friendly, feature-rich mobile applications tailored for various platforms such as iOS and Android.",
    img: softwareImage1, 
    Icon: <i className="fa fa-mobile-alt"></i>
  },
  {
    title: "Enterprise Software Development",
    description: "Building scalable and robust software solutions to meet the complex needs of enterprises and businesses.",
    img: softwareImage7,
    Icon: <i className="fa fa-building"></i>
  },
  {
    title: "Software Integration",
    description: "Integrating new software systems seamlessly with existing workflows and applications.",
    img: softwareImage4,
    Icon: <i className="fa fa-sync"></i>
  },
  {
    title: "Internet of Things (IoT)",
    description: "Creating smart IoT solutions for connected devices to enhance automation and data exchange.",
    img:softwareImage3,
    Icon: <i className="fa fa-wifi"></i>
  },
  {
    title: "Cloud Computing",
    description: "Providing cloud-based solutions for secure, scalable, and cost-effective business operations.",
    img: softwareImage2,
    Icon: <i className="fa fa-cloud"></i>
  },
  {
    title: "AI and Machine Learning",
    description: "Developing AI-driven applications and machine learning models to improve decision-making and efficiency.",
    img: softwareImage5,
    Icon: <i className="fa fa-brain"></i>
  },
  {
    title: "API Development",
    description: "Designing and building efficient APIs to enable seamless communication between software applications.",
    img:softwareImage6,
    Icon: <i className="fa fa-code"></i>
  }
];
const cardsData = [
  {
    title: "Expert Team",
    description:
      "Our custom software development team specializes in creating tailored solutions, designed to meet your unique business needs and deliver exceptional results.",
    icon: <FaUsers size={30}  />, 
  },
  {
    title: "Customer-Centric Approach",
    description:
      "We prioritize your goals, objectives, and unique requirements, tailoring our services to meet your needs and ensure your success.",
    icon: <FaUserTie size={30}  />, 
  },
  {
    title: "Agile Methodology",
    description:
      "Our flexible approach adapts to changing requirements, ensuring efficient, timely, and hassle-free project delivery.",
    icon: <GiShakingHands size={30}  />, 
  },
  {
    title: "Cost-Effective",
    description:
      "We optimize resources and streamline processes to deliver high-quality solutions within your budget.",
    icon: <FaDollarSign size={30} />, 
  },
];


const CustomSoftwareDevelopment = () => {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".section-grid");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return(
  <Fragment>
     
      <HeroSection
                    title="Software Development Service"
                    subtitle=" Technology helps things get better!! It helps things get smaller, faster, and easier much and much better. Your android app has to be one that boosts the image of your company. It should have those features that your audience can use with ease. Android applications help
          in boosting the revenue and gaining maximum growth. In this era of tec"
                    onScrollDown={handleScrollDown}
                    heroId="custom-hero"
                    backgroundImage={heroImg}
                    className="gradient-background" 
                  />
   <section className="section-grid">
  <div className="section-text">
    <h2>Software Development Solutions</h2>
    <p>
      In today's fast-paced digital landscape, custom
      software development is crucial for businesses
      to stay ahead of the competition. Our software development services help you design, develop, and deploy robust software solutions
      that meet your unique needs and goals.
    </p>
  </div>
  <div className="section-image">
    <img src={cloudServicesImage} alt="Software Development" />
  </div>
</section>
<section className="solutions-section-wrapper wrapper">
  <div className="solutions-section">
  <div className="wrapper-1000">
    <h2 className="service-heading">Software Development Solutions</h2>
    <p className="service-paragraph">
      In today's fast-paced digital landscape, custom
      software development is crucial for businesses
      to stay ahead of the competition. Our software development services help you design, develop, and deploy robust software solutions
      that meet your unique needs and goals.
    </p>
  </div>
  <div className="solutions-section-card ">
  {works.map((work, index) => (
        <div className="solutions-card" key={index}>
             <div className="">{work.Icon}</div>
          <div className="solutions-details">
            <h4 className="fw-semibold">{work.title}</h4>
            <p className="">{work.description}</p>
          </div>
        </div>
      ))}
  </div>
  </div>
  
</section>

<section className="solutions-section-wrapper wrapper">
  <div className="solutions-section">
  <div className="wrapper-1000">
    <h2 className="service-heading">Boost Your Business with Our Software Development Services</h2>
    <p className="service-paragraph">
    At AmbiSpine Technologies, we specialize in providing cutting-edge software development services tailored to your business needs. From startups to
enterprises, our expert team delivers scalable, high-performance solutions
that empower your business to thrive in today’s digital landscape
    </p>
  </div>
  <div className="boost-card-container">
      {boostCards.map((card, index) => (
        <div className="boost-card" key={index}>
          <div className="boost-icon">{card.Icon}</div>
          <h4 className="boost-title">{card.title}</h4>
          <p className="boost-description">{card.description}</p>
          <img src={card.img} alt={card.title} className="boost-img" />
        </div>
      ))}
    </div>
  </div>
  
</section>


  <ProcessCard cardsData={cardsData}/>
 

<OurCustomersSection/>
  </Fragment>
)
};

export default CustomSoftwareDevelopment;
