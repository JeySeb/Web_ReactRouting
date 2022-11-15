import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const { useEffect, useState } = require("react");


export default function Detail() {
    useEffect(() => {
      const URL =
        "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";
      fetch(URL)
        .then((data) => data.json())
        .then((data) => {
          setMascotas(data);
        });
    }, []);
   
    console.log(params.mascotaId);
    const params = useParams();
    const [mascotas, setMascotas] = useState([]);
    var mascota = mascotas.find(x => x.id === Number(params.mascotaId));
    console.log(mascotas[0].id);
    console.log(params.mascotaId);
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