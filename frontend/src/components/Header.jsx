import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/yellow_bg.jpeg';
import '../index.css';

const Header = () => {
  return (
    <header>
      
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/" className="navbar-brand">
            <img
              src={logo}
              alt="360DistinctRealEstate logo"
              width="30"
              height="24"
              style={{ marginRight: '10px' }}
            />
            360 Distinct Real Estate
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/aboutUs" className='mx-3'>
                <strong>About Us</strong>
              </Nav.Link>

              <Nav.Link as={Link} to="/alexandbillapartments" className="mx-3">
                <strong>Alex and Bill Court</strong>
              </Nav.Link>

              <Nav.Link as={Link} to="/ongoingProjects" className="mx-3">
                <strong>David's Hill</strong>
              </Nav.Link>

              <Nav.Link as={Link} to="/alex-and-bill-estate" className='mx-3'>
                <strong>Virtual Tour</strong>
              </Nav.Link>

              <Nav.Link as={Link} to="/blog" className="mx-3">
                <strong>Blog</strong>
              </Nav.Link>

              <Nav.Link as={Link} to="/contactUs" className='mx-3'>
                <strong>Contact Us</strong>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
