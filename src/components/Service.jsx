import React from 'react';
import { faCogs, faCode, faMobileAlt, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Service = () => {
    
  const services = [
    {
      id: 1,
      icon: faCode,
      title: "Web Development",
      description: "Custom, responsive websites built with modern frameworks and optimized for performance and SEO.",
      features: [
        "React/Next.js Development",
        "Responsive Design",
        "Performance Optimization",
        "SEO Best Practices"
      ]
    },
    {
      id: 2,
      icon: faMobileAlt,
      title: "Mobile Development",
      description: "Cross-platform mobile applications that deliver native-like performance and smooth UX.",
      features: [
        "React Native Apps",
        "iOS & Android",
        "API Integration",
        "App Store Deployment"
      ]
    },
    {
      id: 3,
      icon: faRobot,
      title: "AI Solutions",
      description: "Intelligent systems leveraging machine learning to automate processes and extract insights.",
      features: [
        "Custom AI Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics"
      ]
    }
  ];

  return (
    <>
      <style jsx>{`
        body {
          background: #080808;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          color: white;
        }

        /* Gradient headings */
        h1, h2, h3 {
          background: linear-gradient(90deg, #00d4ff, #0066ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }

        h2 {
          font-size: 2.5em;
          text-align: center;
          margin-bottom: 15px;
        }

        .section-subtitle {
          color: #ccc;
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
          font-size: 1.1em;
          line-height: 1.6;
        }

        /* Services Section */
        .services-section {
          max-width: 1200px;
          margin: 80px auto;
          padding: 0 20px;
        }

        .services-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        /* Service Card */
        .service-card {
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 40px 30px;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(0, 212, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(0,212,255,0.1) 0%, rgba(0,0,0,0) 70%);
          transform: rotate(45deg);
          transition: all 0.6s ease;
          opacity: 0;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 212, 255, 0.15);
          border-color: rgba(0, 212, 255, 0.3);
        }

        .service-card:hover::before {
          opacity: 1;
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: rotate(45deg) translate(-30%, -30%); }
          100% { transform: rotate(45deg) translate(30%, 30%); }
        }

        .service-icon {
          font-size: 3.5rem;
          margin-bottom: 25px;
          background: linear-gradient(135deg, #00d4ff, #0066ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .service-title {
          font-size: 1.5em;
          margin-bottom: 15px;
          position: relative;
          display: inline-block;
        }

        .service-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #00d4ff, #0066ff);
          transition: width 0.3s ease;
        }

        .service-card:hover .service-title::after {
          width: 80px;
        }

        .service-description {
          color: #ccc;
          line-height: 1.7;
          margin-bottom: 25px;
          font-size: 0.95em;
        }

        .service-features {
          text-align: left;
          margin-bottom: 25px;
        }

        .service-features li {
          margin-bottom: 10px;
          position: relative;
          padding-left: 25px;
          color: #a0a0ff;
        }

        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #00d4ff;
        }

        .service-btn {
          display: inline-block;
          padding: 10px 25px;
          background: linear-gradient(90deg, #00d4ff, #0066ff);
          color: white;
          border-radius: 30px;
          text-decoration: none;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .service-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 212, 255, 0.4);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .services-container {
            grid-template-columns: 1fr;
          }
          
          .service-card {
            padding: 30px 20px;
          }
        }
      `}</style>

      <section className="services-section" id="service">
        <h2><FontAwesomeIcon icon={faCogs} /> My Services</h2>
        <p className="section-subtitle">Professional solutions tailored to your needs, combining cutting-edge technology with exceptional user experiences</p>
        
        <div className="services-container">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">
                {service.description}
              </p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              {/* <button className="service-btn">Learn More</button> */}
              <Link to={`/services/${service.id}`} className="service-btn">
  Learn More
</Link>
          

            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Service;