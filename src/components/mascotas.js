import Mascota from "./mascota";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from 'react';

function Mascotas(props) {
const mascotas = props.mascotas;
 

 return (
   <div className="container">
     <h2 className="mt-2">Listado de mascotas</h2>
     <hr></hr>
     <Row>
       {mascotas.map((mascota) => (
         <Col key={mascota.id}>
           <Mascota mascota={mascota} />
         </Col>
       ))}
     </Row>
   </div>
 );
}

export default Mascotas;