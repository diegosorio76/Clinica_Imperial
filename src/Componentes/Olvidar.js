import React from 'react'
import LogoClinica from '../Imagenes/logo-clinica.png'
import captcha from '../Imagenes/captcha.png'
import NombreClinica from '../Imagenes/nombre-clinica.png'

export const Olvidar = () => {
  return (
    <div className="App">
      <header className="logo-clinica">
       <img src={LogoClinica} alt="logo-clinica" className='img-home' />
      </header>
      
      <header className="nombre-clinica">
      <img src={NombreClinica} alt="logo-clinica" className='img-home' />
      </header>
      <header className="rectagunlo180">
        
        
      </header>
      <header className="Rectan-Login">
      <h1 className='title'>OFICINA VIRTUAL</h1>
        
      </header>
      <header className="TituloIncioSession">
      <h1 className='title'>Olvidé mi contraseña</h1>
      </header>

      <header className='reestablecer'>
      <label for="Reesablecer">Para restablecer la contraseña, registra la siguiente información</label>
      </header>

      <header className="menuselectorr">
      
        <label for="names">Tipo de documento: *</label>
      
      
        <select className="menuselector2">
        <option value="rigatoni">Cedula</option>
        <option value="dave">Tarjeta Identidad</option>
        <option value="pumpernickel">Cedula Extranjeria</option>
        <option value="reeses">Pasaporte</option>
        </select>
        
      </header>
      <header className="numeroidentidadd">
      <label for="Name">Número de Identidad: *</label>
      <input className="labelnumidentidad" type="text" id="Name" name="Name" />
      </header>
      
      
      
      <label className="labelverificarcaptchaa"for="activar">Verifica el captcha: *</label>
      <header className="cuadroverificarcaptchaa">
      <input className="checkbox2" type="checkbox" id= "activar"/> 
      <label className="labelnorobot" for="activar">No soy un Robot</label>
      <img className="imgcaptcha" src={captcha} alt="captcha"  />
      </header>
      <button className="boton36">Iniciar sesión</button>
      <label className="labelolvidecontrass"for="activar">Regresar</label>
    </div>
  )
}
