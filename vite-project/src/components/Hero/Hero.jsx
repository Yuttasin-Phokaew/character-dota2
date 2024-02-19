import React from 'react'
import { useState ,useEffect } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Hero() {
  const [data , setData] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get("https://api.opendota.com/api/heroes");
    setData(response.data);
  }

  useEffect(() => {
    fetchAPI();
  },[])

  console.log(data);

  return (
    <section id='hero'>
      <Container>
        <Row>
          {data.map(val =>(
             <Col xs={6} md={4}>
        <Card>
            <img  src='https://via.placeholder.com/114x114' alt='' />
        <Card.Body>
          <Card.Title>{val.localized_name}</Card.Title>
          <Card.Text>
            <p>{val.attack_type}</p>
            <p>{val.primary_attr}</p>
            <p>{val.roles[0]}</p>
          </Card.Text>
        </Card.Body>
      </Card>
          </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
