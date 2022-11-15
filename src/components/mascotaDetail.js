import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./mascota.css";
export default function Detail(props) {
 const params = useParams();
   
 const mascotas = props.mascotas;
 const mascota = mascotas.find(x => x.id === Number(params.mascotaId));

 console.log(mascota);
 return (
<div style={{width:"50%", margin:"auto"}}>
            <h1>I am {mascota.nombre}</h1>
            <div className="detail_container">
            <Card className="card_mascota">
                    <Card.Img variant="top" src={mascota.foto}
                        className="card_img" style={{
                            borderRadius:
                                "2%", filter: "brightness(80%)"
                        }} />
                <Card.Body>
                    <Row>
                        <Col>
                            <Card.Title style={{ textAlign: "center" }}>
                                <b className='cyan_format'>{mascota.descripcion}</b>
                            </Card.Title>
                        </Col>
                    </Row>
                    <Card.Text style={{ textAlign: "center" }}>
                        <div className='normal_format'> </div>
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
 );
}