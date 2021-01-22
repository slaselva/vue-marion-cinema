<template>
  <div id="app">
    <header>
      <mobileHeader />
      <desktopSidebar />
    </header>
    <router-view/>
    <footer>
        <footerLinks />
    </footer>
  </div>
</template>

<script>
import mobileHeader from './components/mobile-header.vue';
import desktopSidebar from "./components/desktop-sidebar.vue";
import footerLinks from "./components/footer-links.vue"
    

export default {
  components: { mobileHeader, desktopSidebar, footerLinks },
  name: 'App',
  
}
</script>


<style>

@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,700,700i&display=swap');

:root {
    --yellow: #FFC700;
    --light-yellow: #FCD561;
    --pink: #FF7F79;
    --black: #252525;
    --dark: #979797;
    --light: #C4C4C4;
    --transition: ease-out .2s;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    box-sizing: border-box;
}

/* ===============
    TYPOGRAPHY 
   =============== */

body {
    font-family: "Source Sans Pro", sans-serif;
}

h1 {
    font: 700 4em/100% "Source Sans Pro", sans-serif;
    color: white;
}

h2 {
    font: 600 2.25em/100% "Source Sans Pro", sans-serif;
}

h3 {
    font: 600 1.625em/100% "Source Sans Pro", sans-serif;
    color: var(--dark);
}

h4 {
    font: 700 1.125em/115% "Source Sans Pro", sans-serif;
    color: var(--black)
}

h5 {
    font: 600 .875em/100% "Source Sans Pro", sans-serif;
    color: var(--yellow);
}

p {
    font: 1em/150% "Source Sans Pro", sans-serif;
    color: white;
}


/* ===============
    MAIN CONTAINERS AND GRIDS 
   =============== */

.container {
    display: grid;
    grid-template-columns: .75em 1fr .75em;
}

.container > * {
    grid-column: 2 / -2;
}

.mobile-margin {
    padding-top: 3.5em;
}

footer {
    padding-top: 1.5em;
    padding-bottom: 10em;
    background-image: url(./assets/popcorn-footer.jpg);
    background-size: contain;
    background-position: right bottom;
    background-repeat: no-repeat;
}

@media screen and (min-width: 2000px) {
    body {
        font-size: 1.25rem; /*Increases size of all components for larger screens*/
    }
}

@media screen and (min-width: 2500px) {
    body {
        font-size: 1.35rem; /*Increases size of all components for larger screens*/
    }
}

</style>
