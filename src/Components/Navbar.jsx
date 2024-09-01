import React, { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import './nav.css';
import DarkMode from './DarkMode';

function Navbar() {
  const [activeLink, setActiveLink] = useState('home');
  const [openBasic, setOpenBasic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [ 'about', 'skills', 'projects','education', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveLink(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSetActive = (section) => {
    setActiveLink(section);
  };

  return (
    <>
      <MDBNavbar expand='lg' sticky className='w-100 mainNavbar'>
        <MDBContainer className='container w-100' fluid>
          <MDBNavbarBrand href='/' className='titleText text-start' style={{ color: '#d50f9f', fontWeight: '900', fontSize: '30px' }}>
            <span className='me-2'>
            &lt;
            </span>
            ASHWIN JOSEPH
            <span className='ms-2'>
            / &gt;
            </span>
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded={openBasic}
            aria-label='Toggle navigation'
            onClick={() => setOpenBasic(!openBasic)}
            style={{ color: '#d50f9f' }}
            
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler >

          <MDBCollapse navbar className='me-auto' open={openBasic}>
          <MDBNavbarNav className='ms-auto navList mb-2 mb-lg-0 text-light'>
          {['about', 'skills', 'projects','education', 'services', 'contact'].map((section) => (
                <MDBNavbarItem key={section} className='nav-item'>
                  <MDBNavbarLink
                    className={`nav-link textLight ${activeLink === section ? 'active-link' : ''}`}
                    href={`#${section}`}
                    onClick={() => handleSetActive(section)}
                  >
                    {section.toUpperCase()}
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ))}
              <MDBNavbarItem className='m-auto'>
                <MDBNavbarLink>
                    <DarkMode/>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Navbar;
