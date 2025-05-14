import React from 'react';
import { motion } from 'framer-motion';
import img1 from '/gtech.jpg';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div style={{ 
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
      background: '#fafafa', 
      color: '#222',
      overflowX: 'hidden'
    }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 5%',
        background: 'linear-gradient(135deg, #f0f4ff 0%, #f9faff 100%)',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '70%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(91,110,225,0.08) 0%, rgba(255,255,255,0) 70%)',
          zIndex: 0
        }} />
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ zIndex: 1 }}
        >
          <img 
            src={img1} 
            alt="GTech Logo" 
            style={{ 
              width: '180px', 
              marginRight: '60px', 
              borderRadius: '16px', 
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
              border: '1px solid rgba(255,255,255,0.2)'
            }} 
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ zIndex: 1 }}
        >
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '20px', 
            color: '#1a1a1a',
            fontWeight: 700,
            lineHeight: 1.2
          }}>
            Innovating <span style={{ color: '#5b6ee1' }}>Tomorrow's</span> Solutions Today
          </h1>
          <div style={{
            width: '80px',
            height: '4px',
            background: '#5b6ee1',
            marginBottom: '24px',
            borderRadius: '2px'
          }} />
          <p style={{ 
            fontSize: '1.2rem', 
            maxWidth: '700px', 
            lineHeight: 1.7,
            color: '#4a4a4a',
            marginBottom: '32px'
          }}>
            Founded in 2022, <b style={{ color: '#5b6ee1' }}>[Your Company Name]</b> is a dynamic and diversified private limited company driving innovation across multiple industries. Headquartered in Chennai with a state-of-the-art development center in Karaikudi, we deliver excellence through technology, training, and strategic solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(91,110,225,0.3)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: '#5b6ee1',
              color: 'white',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(91,110,225,0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            Explore Our Work
          </motion.button>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section style={{
        padding: '80px 5%',
        background: 'white',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f0f2ff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }} />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}
        >
          <motion.div variants={fadeIn}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.03)',
              height: '100%'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #5b6ee1 0%, #8a9eff 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: 'white',
                fontSize: '24px'
              }}>
                <i className="fas fa-bullseye"></i>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                marginBottom: '16px',
                color: '#1a1a1a'
              }}>
                Our Mission
              </h3>
              <p style={{ 
                color: '#666',
                lineHeight: 1.7,
                fontSize: '1.05rem'
              }}>
                To empower businesses through innovative technology solutions that drive efficiency, growth, and competitive advantage. We combine technical expertise with deep industry knowledge to deliver transformative results.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.03)',
              height: '100%'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #5b6ee1 0%, #8a9eff 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: 'white',
                fontSize: '24px'
              }}>
                <i className="fas fa-eye"></i>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                marginBottom: '16px',
                color: '#1a1a1a'
              }}>
                Our Vision
              </h3>
              <p style={{ 
                color: '#666',
                lineHeight: 1.7,
                fontSize: '1.05rem'
              }}>
                To be recognized as a global leader in technology solutions, known for our commitment to excellence, innovation, and customer success. We aim to redefine industry standards through cutting-edge research and development.
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.03)',
              height: '100%'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #5b6ee1 0%, #8a9eff 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: 'white',
                fontSize: '24px'
              }}>
                <i className="fas fa-handshake"></i>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem',
                marginBottom: '16px',
                color: '#1a1a1a'
              }}>
                Our Values
              </h3>
              <p style={{ 
                color: '#666',
                lineHeight: 1.7,
                fontSize: '1.05rem'
              }}>
                Integrity, Innovation, Excellence, and Collaboration guide everything we do. We believe in building lasting relationships, fostering creativity, and delivering measurable value to our clients and partners.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Leadership Section */}
      <section style={{ 
        padding: '80px 5%',
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9ff 100%)'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '16px',
              color: '#1a1a1a',
              fontWeight: 700
            }}>
              Meet Our <span style={{ color: '#5b6ee1' }}>Leadership</span>
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: '#5b6ee1',
              margin: '0 auto 24px',
              borderRadius: '2px'
            }} />
            <p style={{ 
              maxWidth: '700px',
              margin: '0 auto 60px',
              fontSize: '1.1rem',
              color: '#666',
              lineHeight: 1.7
            }}>
              Our leadership team combines decades of industry experience with visionary thinking to drive innovation and growth across all our business verticals.
            </p>
          </motion.div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '30px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: '#f0f2ff',
                  margin: '0 auto 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  border: '4px solid #e6e9ff'
                }}>
                  <i className="fas fa-user" style={{ 
                    color: '#5b6ee1',
                    fontSize: '48px'
                  }}></i>
                </div>
                <h3 style={{ 
                  fontSize: '1.5rem',
                  marginBottom: '8px',
                  color: '#1a1a1a',
                  textAlign: 'center'
                }}>
                  {index === 0 ? 'Founder, MD & CEO' : index === 1 ? 'Founder, MD & CTO' : 'Founder, MD & CFO'}
                </h3>
                <p style={{ 
                  color: '#5b6ee1',
                  fontWeight: 600,
                  textAlign: 'center',
                  marginBottom: '20px',
                  fontSize: '1.1rem'
                }}>
                  {index === 0 ? '[Founder Name]' : index === 1 ? '[CTO Name]' : '[CFO Name]'}
                </p>
                <p style={{ 
                  color: '#666',
                  lineHeight: 1.7,
                  textAlign: 'center',
                  fontSize: '1rem'
                }}>
                  {index === 0 ? 'With visionary leadership and extensive industry experience, our CEO drives the strategic direction and growth of the company.' : 
                   index === 1 ? 'Our CTO leads technological innovation, ensuring our solutions remain at the cutting edge of industry advancements.' : 
                   'Our CFO oversees financial strategy and operations, ensuring sustainable growth and fiscal responsibility.'}
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '20px',
                  gap: '12px'
                }}>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#f0f2ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#5b6ee1',
                      textDecoration: 'none'
                    }}
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    href="#"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: '#f0f2ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#5b6ee1',
                      textDecoration: 'none'
                    }}
                  >
                    <i className="fas fa-envelope"></i>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section style={{ 
        padding: '80px 5%',
        background: 'white',
        position: 'relative'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '60px' }}
          >
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '16px',
              color: '#1a1a1a',
              fontWeight: 700,
              textAlign: 'center'
            }}>
              Our <span style={{ color: '#5b6ee1' }}>Business Verticals</span>
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: '#5b6ee1',
              margin: '0 auto 24px',
              borderRadius: '2px'
            }} />
            <p style={{ 
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: '1.1rem',
              color: '#666',
              lineHeight: 1.7,
              textAlign: 'center'
            }}>
              We operate across multiple specialized verticals, each delivering unique value to our clients through focused expertise and innovative solutions.
            </p>
          </motion.div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '40px'
          }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.03)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '100px',
                height: '100px',
                background: 'rgba(91,110,225,0.1)',
                borderRadius: '0 0 0 100%',
                zIndex: 0
              }} />
              <h3 style={{ 
                fontSize: '1.8rem',
                marginBottom: '20px',
                color: '#1a1a1a',
                position: 'relative',
                zIndex: 1
              }}>
                <span style={{ color: '#5b6ee1' }}>01.</span> Software Development & AI Solutions
              </h3>
              <p style={{ 
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>
                Our core strength lies in developing intelligent, user-centric software applications. We leverage cutting-edge technologies to build scalable and secure solutions tailored for businesses of all sizes.
              </p>
              <ul style={{ 
                marginLeft: '20px',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>
                <li style={{ marginBottom: '10px', color: '#555' }}><b>Custom Web Applications</b> – Tailor-made platforms designed to match your business workflows.</li>
                <li style={{ marginBottom: '10px', color: '#555' }}><b>AI-Enabled Platforms</b> – Integrating machine learning to automate and enhance decision-making.</li>
                <li style={{ marginBottom: '10px', color: '#555' }}><b>ERP, CRM, Inventory Systems</b> – Streamlined systems to manage business operations.</li>
                <li style={{ color: '#555' }}><b>Business Automation Tools</b> – Solutions to reduce manual tasks and boost productivity.</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'transparent',
                  color: '#5b6ee1',
                  border: '2px solid #5b6ee1',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                border: '1px solid rgba(0,0,0,0.03)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '100px',
                height: '100px',
                background: 'rgba(91,110,225,0.1)',
                borderRadius: '0 0 0 100%',
                zIndex: 0
              }} />
              <h3 style={{ 
                fontSize: '1.8rem',
                marginBottom: '20px',
                color: '#1a1a1a',
                position: 'relative',
                zIndex: 1
              }}>
                <span style={{ color: '#5b6ee1' }}>02.</span> Training & Development
              </h3>
              <p style={{ 
                color: '#666',
                lineHeight: 1.7,
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>
                We offer comprehensive training programs designed to upskill professionals and students in emerging technologies, bridging the gap between academia and industry requirements.
              </p>
              <ul style={{ 
                marginLeft: '20px',
                marginBottom: '20px',
                position: 'relative',
                zIndex: 1
              }}>
                <li style={{ marginBottom: '10px', color: '#555' }}><b>Technical Workshops</b> – Hands-on sessions on cutting-edge technologies.</li>
                <li style={{ marginBottom: '10px', color: '#555' }}><b>Corporate Training</b> – Customized programs for enterprise teams.</li>
                <li style={{ marginBottom: '10px', color: '#555' }}><b>Certification Courses</b> – Industry-recognized credentials.</li>
                <li style={{ color: '#555' }}><b>Internship Programs</b> – Practical experience for students and graduates.</li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: 'transparent',
                  color: '#5b6ee1',
                  border: '2px solid #5b6ee1',
                  padding: '10px 24px',
                  borderRadius: '8px',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '80px 5%',
        background: 'linear-gradient(135deg, #5b6ee1 0%, #8a9eff 100%)',
        color: 'white'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '60px' }}
          >
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '16px',
              fontWeight: 700
            }}>
              By The Numbers
            </h2>
            <div style={{
              width: '80px',
              height: '4px',
              background: 'rgba(255,255,255,0.5)',
              margin: '0 auto 24px',
              borderRadius: '2px'
            }} />
            <p style={{ 
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              opacity: 0.9
            }}>
              Our growth and impact in numbers, showcasing our commitment to excellence and innovation.
            </p>
          </motion.div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginTop: '40px'
          }}>
            {[
              { number: '50+', label: 'Clients Served' },
              { number: '100+', label: 'Projects Completed' },
              { number: '20+', label: 'Team Members' },
              { number: '5', label: 'Business Verticals' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: 700,
                  marginBottom: '10px',
                  lineHeight: 1
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '1.1rem',
                  opacity: 0.9
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;