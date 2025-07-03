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
        
        <h1 id="sec-major">Política de Privacidad y Seguridad</h1>
        <p class="updated-date">Última actualización: 8/3/2025</p>

        <section>
            <h2>1. Introducción</h2>
            <p>
                En <strong>HiddenPass</strong>, la privacidad y seguridad de nuestros usuarios son nuestra prioridad. 
                Esta política explica cómo protegemos tu información y qué medidas tomamos para garantizar su seguridad.
            </p>
        </section>

        <section>
            <h2>2. Recopilación de Datos</h2>
            <p>
                Solo recopilamos la información necesaria para ofrecerte nuestros servicios de manera segura. 
                Los datos que podríamos almacenar incluyen:
            </p>
            <ul>
                <li>Dirección de correo electrónico para la autenticación.</li>
                <li>Contraseñas cifradas con métodos de seguridad avanzados.</li>
                <li>Registros de actividad en la plataforma para mejorar la experiencia del usuario.</li>
            </ul>
        </section>

        <section>
            <h2>3. Protección y Cifrado</h2>
            <p>
                Implementamos encriptación de extremo a extremo para garantizar la seguridad de tus contraseñas. 
                HiddenPass no puede ver ni recuperar tus contraseñas debido a nuestro sistema de cifrado.
            </p>
        </section>

        <section>
            <h2>4. Compartición de Datos</h2>
            <p>
                No vendemos, alquilamos ni compartimos tu información personal con terceros. Solo podríamos 
                divulgar información si es requerido por ley o para proteger nuestros derechos y la seguridad de los usuarios.
            </p>
        </section>

        <section>
            <h2>5. Seguridad del Usuario</h2>
            <p>
                Recomendamos a nuestros usuarios:
            </p>
            <ul>
                <li>Utilizar una contraseña maestra segura y única.</li>
                <li>No compartir credenciales con terceros.</li>
            </ul>
        </section>

        <section>
            <h2>6. Cambios en la Política</h2>
            <p>
                Nos reservamos el derecho de modificar esta política en cualquier momento. Se notificará a los usuarios sobre cambios importantes en la plataforma.
            </p>
        </section>

        <section>
            <h2>7. Contacto</h2>
            <p>
                Si tienes dudas o inquietudes sobre esta política, contáctanos en 
                <a href="mailto:soporte@hiddenpass.com">soporte@hiddenpass.com</a>.
            </p>
        </section>

    </div>
</template>

<script setup>
import Header from './Header.vue';
</script>

<style scoped>

.terms-container {
    max-width: 800px;
    margin: 100px auto;
    padding: 20px;
    background: #fff;
    color: #333;
    font-family: 'Inter', sans-serif;
    line-height: 1.6;
    /* height: 100vh; */
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
