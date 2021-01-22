<template>
    <div>
        <section class="container mobile-margin sidebar-margin">
            <homeHero />
        </section>
        <section class="now-showing sidebar-margin">
            <movieCell 
            v-for="movie in movies"
            :key="movie.title"
            :movie="movie" 
            />
        </section>
        <div class="swipe-instructions sidebar-margin">
            <p>Swipe For More Movies</p>
            <img src="../assets/swipe-arrow.svg" alt="arrow to swipe left">
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
                        v-for="specialOrder in specialOrders"
                        :key="specialOrder.title"
                        :specialOrder="specialOrder" 
                    />
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
import homeHero from "../components/home-hero.vue";
import movieCell from '../components/movie-cell.vue';
import clubCard from "../components/club-card.vue"
import specialOrderCell from "../components/special-order-cell.vue"
    

export default {
    components: { homeHero, movieCell, clubCard, specialOrderCell, },
    name: 'Home',
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
                  src: `${process.env.BASE_URL}images/hollywood.jpg`,
                },
                {
                  title: "1917",
                  genre: "Action",
                  showtimeOne: "1:30PM",
                  showtimeTwo: "3:45PM",
                  showtimeThree: "5:00PM",
                  showtimeFour: "7:45PM",
                  src: `${process.env.BASE_URL}images/1917.jpg`,
                },
                {
                  title: "John Wick Chapter 3: Parabellum",
                  genre: "Action",
                  showtimeOne: "1:30PM",
                  showtimeTwo: "3:45PM",
                  showtimeThree: "5:00PM",
                  showtimeFour: "7:45PM",
                  src: `${process.env.BASE_URL}images/johnwick.jpg`,
                },
                {
                  title: "Star Wars: Rise of Skywalker",
                  genre: "Action",
                  showtimeOne: "1:30PM",
                  showtimeTwo: "2:15PM",
                  showtimeThree: "5:45PM",
                  showtimeFour: "9:15PM",
                  src: `${process.env.BASE_URL}images/starwars.jpg`,
                },
                {
                  title: "Avengers: Endgame",
                  genre: "Action",
                  showtimeOne: "2:15PM",
                  showtimeTwo: "4:30PM",
                  showtimeThree: "5:15PM",
                  showtimeFour: "8:45PM",
                  src: `${process.env.BASE_URL}images/endgame.jpg`,
                },
                {
                  title: "Mission Impossible: Fallout",
                  genre: "Action",
                  showtimeOne: "3:15PM",
                  showtimeTwo: "5:30PM",
                  showtimeThree: "6:45PM",
                  showtimeFour: "8:30PM",
                  src: `${process.env.BASE_URL}images/fallout.jpg`,
                }
            ],
            specialOrders: [
                {
                  title: "Burgers",
                  src: `${process.env.BASE_URL}images/mac-attack.jpg`,
                },
                {
                  title: "Pizza",
                  src: `${process.env.BASE_URL}images/meat-pizza.jpg`,
                },
                {
                  title: "Desserts",
                  src: `${process.env.BASE_URL}images/dessert.jpg`,
                },
                {
                  title: "Craft Beer",
                  src: `${process.env.BASE_URL}images/beer-flight.jpg`,
                },
            ]
        }
    }
}
        
    


</script>

<style scoped>

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
    margin-bottom: .25em;
    scrollbar-width: none;
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}


.now-showing::before,
.now-showing::after {
    content: '';
}

.swipe-instructions {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 3.75em;
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

@media screen and (min-width: 1024px) {
    .sidebar-margin {
    margin-left: 11em;
}
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