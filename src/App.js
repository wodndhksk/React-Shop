import './App.css'
import { Row, Navbar, Container, Nav, Col } from 'react-bootstrap'
import { useState } from 'react'
import { data } from './data'
import { Card } from './component/item'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail'

function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate()

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/')
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail')
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i} />
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="*" element={<div>없는 페이지 입니다. </div>} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버임</div>} />
          <Route path="locaton" element={<About />} />
        </Route>
      </Routes>
    </div>
  )
}
function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App
