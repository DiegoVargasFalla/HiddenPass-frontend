<template>
    <div class="container-footer">
        <div class="line-top"></div>
        <div class="footer-content">
            <div class="footer-section">
                <h3 class="tittles text-hidden-content">HiddenPass</h3>
                <p class="text-inter text-hidden-content">Gestor de contraseñas seguro y fácil de usar.</p>
                <p class="text-inter text-hidden-content">© 2025 HiddenPass. Todos los derechos reservados.</p>
                <p class="text-inter text-hidden-content">Hecho por <a target="_blank" class="makeBy" href="https://diegovargasfalla.github.io/Portfolio/">diegodev</a></p>
            </div>
            <div class="footer-section">
                <h3 class="tittles">Enlaces</h3>
                <ul>
                    <li><a class="text-inter" href="/#sec-about">Sobre nosotros</a></li>
                    <li><a class="text-inter" href="/#sec-use-guide">Guia de uso</a></li>
                    <li><a class="text-inter" href="/#sec-plans">Planes</a></li>
                    <li><a class="text-inter" href="/#contact-section">Contacto</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 class="tittles">Legal</h3>
                <ul>
                    <li><RouterLink class="text-inter" to="/TyC">Términos y condiciones</RouterLink></li>
                    <li><RouterLink class="text-inter" to="/policies">Política de privacidad</RouterLink></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 class="tittles">Contacto</h3>
                <p class="text-inter email">Email: soporte@hiddenpass.com</p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>

.line-top {
    position: absolute;
    background-color: #16DB65;
    height: 1px;
    width: 100%;
    top: 0;
}

.tittles {
    font-family: 'Inter';
    font-size: 22px;
}

.container-footer {
    position: relative;
    background: #111;
    color: white;
    padding: 40px 0;
    text-align: center;
    height: 35vh;
    width: 100%;
}
.footer-content {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 100px;
    /* background-color: #16DB65; */
}
.footer-section {
    margin: 10px;
}

.email {
    margin-top: 10px;
}

.footer-section h3 {
    color: #16DB65;
}
.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li a {
    color: #bbb;
    text-decoration: none;
}

.footer-section ul li a:hover {
    color: #16DB65;
}

.text-inter {
    font-family: 'Inter';
    font-size: 15px;
}

.footer-content li {
    margin-top: 10px;
}

.text-hidden-content {
    margin-top: 10px;
}

.makeBy {
    /* text-decoration: none; */
    color: #16DB65;
    font-family: 'Inter';
    font-size: 18px;
}

</style>