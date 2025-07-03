<template>
    <Header
            ColorText="black"
            link-about="/#sec-about" 
            linkGuide="/#sec-use-guide" 
            linkPlans="/#sec-plans" 
            linkContact="/#contact-section"
            bgColor='#c8c6c638'
        ></Header>
    <div class="terms-container" >

        <h1 id="sec-major">Términos y Condiciones</h1>
        <p class="updated-date">Última actualización: 8/3/2025</p>
    
        <section>
            <h2>1. Introducción</h2>
            <p>
            Bienvenido a <strong>HiddenPass</strong>. Al utilizar nuestros servicios, aceptas estos términos y condiciones. 
            Si no estás de acuerdo, por favor, no uses la plataforma.
            </p>
        </section>
    
        <section>
            <h2>2. Uso del Servicio</h2>
            <ul>
            <li>HiddenPass es un gestor de contraseñas que almacena y cifra credenciales de forma segura.</li>
            <li>No debes utilizar nuestro servicio para actividades ilegales o no autorizadas.</li>
            <li>HiddenPass no se hace responsable de la pérdida de acceso por olvidos de contraseña maestra.</li>
            </ul>
        </section>
    
        <section>
            <h2>3. Responsabilidad del Usuario</h2>
            <p>
            Eres responsable de mantener segura tu contraseña maestra. HiddenPass no tiene acceso a tu información 
            cifrada, por lo que no podemos recuperar tus contraseñas en caso de pérdida.
            </p>
        </section>
    
        <section>
            <h2>4. Modificaciones</h2>
            <p>
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Se notificará a los usuarios sobre cambios relevantes.
            </p>
        </section>
    
        <section>
            <h2>5. Contacto</h2>
            <p>
            Si tienes preguntas, contáctanos en <a href="mailto:soporte@hiddenpass.com">soporte@hiddenpass.com</a>.
            </p>
        </section>
    </div>
  </template>

<script setup>
import Header from './Header.vue';

</script>
  
  <style scoped>
  /* @import url('https://fonts.googleapis.com/css2?family=Archive+Black&family=Inter:wght@400;600&display=swap'); */
  
  .terms-container {
    max-width: 800px;
    margin: 100px auto;
    padding: 20px;
    background: #fff;
    color: #333;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    height: 100vh;
    width: 100%;
  }
  
  h1 {
    font-family: 'Archive Black', sans-serif;
    font-size: 32px;
    text-align: center;
    margin-bottom: 10px;
  }
  
  h2 {
    font-family: 'Archive Black', sans-serif;
    font-size: 24px;
    margin-top: 20px;
  }
  
  .updated-date {
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 15px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  a {
    color: #007bff;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  