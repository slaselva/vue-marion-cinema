<template>
    <div class="movie-cell">
        <div class="movie-thumbnail-container">
            <img  class="movie-thumbnail" :src="movie.src">
        </div>
        <div class="movie-info">
            <h4>{{movie.title}}</h4>
            <p><span>{{movie.genre}}</span></p>
            <div class="showtime-grid">
                <ul>
                    <li class="showtime">{{movie.showtimeOne}}</li>
                    <li class="showtime">{{movie.showtimeTwo}}</li>
                    <li class="showtime">{{movie.showtimeThree}}</li>
                    <li class="showtime">{{movie.showtimeFour}}</li>
                </ul>
            </div>
            <div class="more-details">
                <h5>View More Showtimes</h5>
                <img class="chevron" src="../assets/chevron.svg" alt="view more showtimes">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: ["movie"],
    name: "movieCell"
    
}
</script>


<style scoped>

.movie-cell {
    max-width: 23.253em;
    display: flex;
    flex-direction: row;
    padding: .625em;
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: .3s ease-out;
    -webkit-box-shadow: 0px 9px 25px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 9px 25px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 9px 25px 0px rgba(0,0,0,0.15);
}

.movie-cell:hover {
    transition: .2s ease-out;
    transform: scale(1.025);
}

.movie-thumbnail-container {
    margin-right: 1em;
    border-radius: 10px;
}

.movie-thumbnail {
    max-width: 8.25em;
    border-radius: 10px;
}

.movie-info {
    padding-top: .625em;
    display: flex;
    flex-direction: column;
}

.movie-info span {
    font: 400 .875em/100% "Source Sans Pro", sans-serif;
    color: var(--light);
}

.movie-info p {
    margin-bottom: 1.25em;
}

.movie-info .showtime-grid ul {
    color: var(--dark);
}

.showtime-grid {
    max-width: 11em;
}

.showtime-grid ul {
    list-style: none;
    color: white;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: .625em;
}

.showtime-grid li {
    border: 1px solid var(--light);
    border-radius: 10px;
    width: 4.5em;
    padding: .375em 0;
    text-align: center;
    cursor: pointer;
}

.showtime-grid li:hover {
    transition: .3s ease-out;
    color: var(--yellow);
    border-color: var(--yellow);
}

::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
}

</style>