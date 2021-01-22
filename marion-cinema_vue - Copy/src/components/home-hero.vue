<template>
    <div class="hero home-hero">
        <h1>First Man</h1>
        <p>Hoping to reach the moon by the end of the decade, NASA plans a series of extremely dangerous, unprecedented missions in the early 1960s.</p>
        <div class="running-time-container">
            <img class="stopwatch" src="../assets/stopwatch.svg" alt="stopwatch icon">
            <p><span class="running-time">2h 21m</span></p>
        </div>
        <div class="showtime-grid">
            <ul>
                <li class="showtime">1:30PM</li>
                <li class="showtime">3:45PM</li>
                <li class="showtime">5:00PM</li>
                <li class="showtime">7:45PM</li>
                <li class="showtime">8:30PM</li>
                <li class="showtime">10:00PM</li>
            </ul>
        </div>
        <div class="more-details">
            <h5>More Details</h5>
            <img class="chevron" src="../assets/chevron.svg" alt="more details arrow">
        </div>
    </div>
</template>


<script>
export default {
    name: "homeHero"
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

.home-hero {
    background-image: url(../assets/home-hero.jpg);
    padding-top: 3.125em;
    padding-left: 5%;
    padding-bottom: 8em;
    border-radius: 10px;
}

.movie-page-hero {
    height: 100vh;
    justify-content: center;
    padding-left: 10%;
}

.firstman {
    background-image: url(../assets/firstman-hero.jpg);
}

.running-time-container {
    display: flex;
    flex-direction: row;
    margin: 1em 0px;
}

.stopwatch {
    display: inline-block;
    margin-right: .3125em;
}

.running-time {
    color: var(--yellow);
    font-size: .75em;
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

.more-details {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    cursor: pointer;
    transition: .3s ease-out;
}

.more-details:hover > .chevron {
    margin-left: .75em;
    transition: .2s ease-out;
}

.chevron {
    margin-left: .625em;
    transition: .2s ease-out;
}

.hero h1 {
    margin-bottom: .25em;
}

.hero p {
    max-width: 50ch;
}

@media
only screen and (-webkit-min-device-pixel-ratio: 2),
only screen and (   min--moz-device-pixel-ratio: 2),
only screen and (     -o-min-device-pixel-ratio: 2/1),
only screen and (        min-device-pixel-ratio: 2),
only screen and (                min-resolution: 192dpi),
only screen and (                min-resolution: 2dppx) {
    

    .home-hero {
        background-image: url(../assets/home-hero2x.jpg);
        background-size: 2200px 788px;
        background-repeat: no-repeat;
        background-position: center;
    }

}

</style>