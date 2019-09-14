<template>
    <div class="white z-depth-3">
        <div class="container">
            <nav class="z-depth-0">
                <div class="nav-wrapper white">
                    <a href="#" class="brand-logo"><router-link :to="{ name: 'Index' }" title="Listagem de todos os usuários"><img src="http://www.rdias.com.br/images/logo-rdias.png" /></router-link></a>
                    <small class="brand-logo center black-text">Landersson .A. Araújo</small>
                    <ul id="nav-mobile" class="right hide-on-med-and-down">
                        <li><router-link :to="{ name: 'Index' }" title="Listagem de todos os usuários">Página inicial</router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
nav ul li a {
    color: #000;
}
</style>
