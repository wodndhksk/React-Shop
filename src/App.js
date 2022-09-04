import './App.css'
import { Row, Navbar, Container, Nav, Col } from 'react-bootstrap'
import { useState } from 'react'
import { data } from './data'
import { Card } from './component/item'

function App() {
  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          {shoes.map((a, i) => {
            return <Card shoes={shoes[i]} i={i + 1} />
          })}
        </Row>
      </Container>
    </div>
  )
}

export default App
