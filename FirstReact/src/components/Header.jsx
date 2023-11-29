import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">users</Nav.Link>
      </Nav.Item>
      <Nav.Item>
     <Nav.Link href="/register">add</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Header;