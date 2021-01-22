<template>
    <div>
        <!--Movie Hero-->
        <section class="hero movie-page-hero firstman">
            <movieHero />
        </section>
        <!--Movie Details-->
        <section class="movie-details sidebar-margin">
            <div class="movie-details-grid">
                <!--Cast-->
                <div class="cast-container">
                    <h3>Cast</h3>
                    <div class="cast-avatar-grid">
                        <ul>
                            <cast 
                                v-for="cast in castInfo"
                                :key="cast.name"
                                :cast="cast" 
                            />
                            
                        </ul>
                    </div>
                </div>
                <!--Review-->
                <movieReview />
                <!--Similar Movies-->
                <div class="similar-movies">
                    <h3>Similar Movies</h3>
                    <similarMovies />
                </div>
            </div>
        </section>
    </div>
</template>


<script>

import movieHero from "../components/movie-hero";
import cast from "../components/cast.vue"
import movieReview from "../components/movie-review.vue"
import similarMovies from "../components/similar-movies.vue"

export default {
    name: "moviePage",
    components: { movieHero, cast, movieReview, similarMovies },
    data () {
        return {
            castInfo: [
                {
                    name: "Ryan Gosling",
                    src: `${process.env.BASE_URL}images/ryan-gosling.jpg`,
                },
                {
                    name: "Claire Foy",
                    src: `${process.env.BASE_URL}images/claire-foy.jpg`,
                },
                {
                    name: "Jason Clarke",
                    src: `${process.env.BASE_URL}images/jason-clarke.jpg`,
                },
                {
                    name: "Kyle Chandler",
                    src: `${process.env.BASE_URL}images/kyle-chandler.jpg`,
                },
            ]
        }
    }
}
</script>


<style scoped>
.hero {
    display: flex;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.movie-page-hero {
    height: 100vh;
    justify-content: center;
    padding-left: 10%;
}

.firstman {
    background-image: url(../assets/firstman-hero.jpg);
}

.movie-details{
    padding-top: 2em;
    margin-bottom: 3em;
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

.cast-container {
    grid-area: cast;
    max-width: 20em;
}

.cast-container h3 {
    margin-bottom: 1.5em;
    padding-left: .65em;
}

.similar-movies h3 {
    margin-bottom: 1em;
}

.cast-avatar-grid ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
}

.similar-movies {
    grid-area: similar-movies;
    padding: 1em 0em;
    max-width: 23em;
    min-width: 23em;
}

@media screen and (min-width: 1024px) {
    .sidebar-margin {
            margin-left: 11em;
        }

    .movie-details-grid {
        display: grid;
        grid-template-areas: 
            "cast similar-movies"
            "review similar-movies";
        justify-content: space-around; 
    }
}
</style>

