<template>

  <div id="app">
    <header>
      <mobileHeader />
      <desktopSidebar />
    </header>
    <section class="container mobile-margin sidebar-margin">
      <homeHero />
    </section>
    <section class="now-showing sidebar-margin">
        <movieCell 
           v-for="movie in movies"
           :key="movie.title"
           :movie="movie" 
        />


        <!--<movieCell
            movie-thumbnail="hollywood.jpg"
            movie-title="Once Upon a Time in Hollywood"
            movie-genre="Drama"
            showtime-one="1:30PM"
            showtime-two="3:45PM"
            showtime-three="5:00PM"
            showtime-four="7:45PM" />
        <movieCell
            movie-thumbnail="hollywood.jpg"
            movie-title="1917"
            movie-genre="Drama"
            showtime-one="1:45PM"
            showtime-two="3:30PM"
            showtime-three="5:15PM"
            showtime-four="7:45PM" />
        <movieCell
            movie-thumbnail="hollywood.jpg"
            movie-title="John Wick Chapter 3: Parabellum"
            movie-genre="Action"
            showtime-one="2:45PM"
            showtime-two="3:15PM"
            showtime-three="4:30PM"
            showtime-four="8:30PM" />
        <movieCell
            movie-thumbnail="hollywood.jpg"
            movie-title="Star Wars: Rise of Skywalker"
            movie-genre="Action"
            showtime-one="1:30PM"
            showtime-two="2:15PM"
            showtime-three="5:45PM"
            showtime-four="9:15PM" />
        <movieCell
            movie-thumbnail="hollywood.jpg"
            movie-title="Avengers: Endgame"
            movie-genre="Action"
            showtime-one="2:15PM"
            showtime-two="4:30PM"
            showtime-three="5:15PM"
            showtime-four="8:45PM" />
        <movieCell
            movie-thumbnail="hollywood.jpg"
            movie-title="Mission Impossible: Fallout"
            movie-genre="Action"
            showtime-one="3:15PM"
            showtime-two="5:30PM"
            showtime-three="6:45PM"
            showtime-four="8:30PM" />-->
    </section>
    <div class="swipe-instructions sidebar-margin">
        <p>Swipe For More Movies</p>
        <img src="./assets/swipe-arrow.svg" alt="arrow to swipe left">
    </div>
    <section class="container sidebar-margin">
        <clubCard 
            club-card-headline="Join the Club"
            club-card-tagline="3 FREE movies a week, discounts on food and the occasional free beer. What more could you want?"
        />
    </section>
    <section class="container special-order sidebar-margin">
        <h2>View the Menu</h2>
        <div class="special-order-grid">
            <ul>
                <specialOrderCell 
                    specialOrderLabel="Burgers"/>
                <specialOrderCell 
                    specialOrderLabel="Pizza"/>
                <specialOrderCell 
                    specialOrderLabel="Desserts"/>
                <specialOrderCell 
                    specialOrderLabel="Craft Beer"/>
            </ul>
        </div>
    </section>
    <footer>
        <footerLinks />
    </footer>
    


  </div>

</template>

<script>
import mobileHeader from './components/mobile-header.vue';
import desktopSidebar from "./components/desktop-sidebar.vue";
import homeHero from "./components/home-hero.vue";
import movieCell from './components/movie-cell.vue';
import clubCard from "./components/club-card.vue"
import specialOrderCell from "./components/special-order-cell.vue"
import footerLinks from "./components/footer-links.vue"
    

export default {
  components: { mobileHeader, desktopSidebar, homeHero, movieCell, clubCard, specialOrderCell, footerLinks },
  name: 'App',
  data () {
      return {
          movies: [
              {
                  title: "Once Upon a Time in Hollywood",
                  genre: "Drama",
                  showtimeOne: "1:30PM",
                  showtimeTwo: "3:45PM",
                  showtimeThree: "5:00PM",
                  showtimeFour: "7:45PM",
                  src: "@/assets/hollywood.jpg"
              },
              {
                  title: "1917",
                  genre: "Action",
                  showtimeOne: "1:30PM",
                  showtimeTwo: "3:45PM",
                  showtimeThree: "5:00PM",
                  showtimeFour: "7:45PM",
                  src: require("./assets/1917.jpg")
              },
              {
                  title: "John Wick Chapter 3: Parabellum",
                  genre: "Action",
                  showtimeOne: "1:30PM",
                  showtimeTwo: "3:45PM",
                  showtimeThree: "5:00PM",
                  showtimeFour: "7:45PM",
                  src: require("./assets/johnwick.jpg")
              },
          ]
      }
  }
  
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
    2. TYPOGRAPHY 
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
    3. MAIN CONTAINERS AND GRIDS 
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

.sidebar-margin {
    margin-left: 11em;
}

.food-hero-grid {
    display: grid;
    grid-gap: .75em;
    grid-template-areas: 
        "hero"
        "promotion-sidebar";
    grid-template-rows: 1fr;
    padding: .75em;
}

.food-menu-icon-grid {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 
        .1875em
        repeat(5, minmax(min-content, 12.5em))
        .1875em;
    overflow: auto;
    padding-top: 3.125em;
    padding-bottom: 2.75em;
    justify-content: space-between;
    margin-bottom: 1.5em;
}

.food-menu-icon-grid::before,
.food-menu-icon-grid::after {
    content: '';
}

.food-menu-grid ul {
    display: grid;
    column-gap: 1.5em;
    row-gap: 2.25em;
    grid-template-columns: repeat(auto-fit, minmax(21.875em, 1fr));
}

.movie-details-grid {
    display: grid;
    grid-template-areas: 
        "cast"
        "review"
        "similar-movies";
    grid-template-rows: 1fr;
    gap: 3.75em;
    padding: .75em;
    justify-content: center; 
}

.now-showing {
    display: grid;
    grid-gap: .75em;
    grid-template-columns: 
        .1875em
        repeat(6, minmax(min-content, 23.25em))
        .1875em;
    overflow: auto;
    padding-top: 3.125em;
    padding-bottom: 2.75em;
    justify-content: space-between;
    margin-bottom: 1.5em;
    scrollbar-width: none;
}

.now-showing::before,
.now-showing::after {
    content: '';
}

.swipe-instructions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 2.75em;
}

.swipe-instructions p {
    font: 400 .875em/100% "Source Sans Pro", sans-serif;
    color: var(--light);
    margin-right: .625em;
}

.special-order {
    padding-top: 3.125em;
}

.special-order-grid ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(351px, 1fr));
    grid-gap: 1.5em;
}

.special-order h2 {
    color: var(--yellow);
    margin-bottom: 1em;
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
