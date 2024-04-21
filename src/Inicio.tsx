import React, { useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './styles/Inicio.css'
import axios from "axios";
import io from "socket.io-client";

export const Inicio = () =>{
  const[nombre_vendedor, setNombre_vendedor]=useState('');
  const[numeroTel_vendedor, setNumeroTel_vendedor]=useState('')
  const[user, setUser]=useState('')
  const[password, setpassword]=useState('')
  // const [errorMessage, setErrorMessage] = useState('');
  // const [successMessage, setSuccessMessage] = useState('');

  const id_Vendedor = Math.floor(Math.random()*100000)

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://api1-event-2.onrender.com/vendedor/agregarVendedor",{
        id_Vendedor,
        nombre_vendedor,
        numeroTel_vendedor,
        user,
        password,
      });

      if (response) {
        // setSuccessMessage('´ agregado exitosamente');
        setNombre_vendedor('');
        setNumeroTel_vendedor('');
        setUser('');
        setpassword('');
        console.log("agregado exitosamente");
      } else {
        // setErrorMessage('Error al agregar Producto');
        console.log("Error al agregar Vendedor")
      }
    } catch (error) {
      // setErrorMessage('Error de red al intentar agregar');
      console.error('Error al agregar', error);
    }
}

    useEffect(()=>{
        const socket = io("https://websocket-ikjz.onrender.com");

        socket.on("newClient", (message)=>{
        console.log("Ciclo concluido");
        
        alert("ciclo concluido " + message);
    });
},[]);

    return(
    
      // <div className='CuadroLlenado'>
       <Form onSubmit={handleSubmit}>

       <Form.Group as={Row} className="mb-3" controlId="formPlaintextNombre" >
        <Form.Label column sm="3">
          Nombre:
        </Form.Label>
        <Col sm="10">
          <Form.Control  type="text" placeholder="Nombre" value={nombre_vendedor}  onChange={(e) => setNombre_vendedor(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="3">
          user:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="user" placeholder="user" value={user}  onChange={(e) => setUser(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="3">
          Password:
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextTel">
        <Form.Label column sm="3">
        Tel:
        </Form.Label>
        <Col sm="10">
          <Form.Control  type="text" placeholder="Num. Telefono" value={numeroTel_vendedor} onChange={(e) => setNumeroTel_vendedor(e.target.value)} />
        </Col>
      </Form.Group>

      <button type='submit'> Pagar</button>
    </Form>

    
    // {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    //   {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

    // </div>
      
    );
}