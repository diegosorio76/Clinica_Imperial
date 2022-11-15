import React from 'react'
import { Inicio } from './Inicio'
import logo_clinica from '../Imagenes/logo_clinica.png'
import nombre_clinica from '../Imagenes/nombre_clinica.png'
import enfermeros from '../Imagenes/medicos.jpg'
import ordenes from '../Imagenes/ordenes.png'
import citas from '../Imagenes/citas.png'
import historia from '../Imagenes/historia.png'
import laboratorio from '../Imagenes/laboratorio.png'
import pagos from '../Imagenes/pagos.png'
import afiliaciones from '../Imagenes/afiliaciones.png'

export const Logueado = () => {
    return (
        <div className="App"> 
        <header className="App-header">
          <img className="logo" src={logo_clinica} alt='' />
          <img className="nombre" src={nombre_clinica} alt='' />
        </header>
        <body className='body'>
            <div className="rectangulo"></div>
            <text className='oficina'><b>Oficina Virtual</b></text>
            <text className='oficina1'>Linea Bogotá 4700000 Nacional 01800789456</text>
            <form method='get'action={Inicio}>
                <button type='submit'className="boton3">Inicio</button>
            </form>
            <button className="boton4">Red de Atención</button>
            <button className="boton5"> Afiliados</button>
            <button className="boton6">Contactanos</button>
            <img className="enfermeros" src={enfermeros} alt='' />
            <text className='servicios'><b>Servicios Destacados</b></text>
    
            <button className="boton7"></button>
            <img className="ordenes" src={ordenes} alt='' />
            <texto className="ordenes1"><b>Ordenes médicas</b></texto>
    
            <button className="boton8"></button>
            <img className="citas" src={citas} alt='' />
            <texto className="citas1"><b>Citas</b></texto>
    
            <button className="boton9"></button>
            <img className="pagos" src={pagos} alt='' />
            <texto className="pagos1"><b>Pagos</b></texto>
    
            <button className="boton10"></button>
            <img className="historia" src={historia} alt='' />
            <texto className="historia1"><b>Historia Clinica</b></texto>
    
            <button className="boton11"></button>
            <img className="laboratorio" src={laboratorio} alt='' />
            <texto className="laboratorio1"><b>Laboratorio</b></texto>
    
            <button className="boton12"></button>
            <img className="afiliaciones" src={afiliaciones} alt='' />
            <texto className="afiliaciones1"><b>Afiliacion</b></texto>
            <footer className='footer23'>Bienvenido(a) DIEGO ALEJANDRO OSORIO HERNANDEZ</footer>
        </body>
      </div>
        )
    }