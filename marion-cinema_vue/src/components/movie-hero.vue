<template>
    <div class="sidebar-margin">
        <h1>First Man</h1>
        <p>Hoping to reach the moon by the end of the decade, NASA plans a series of extremely dangerous, unprecedented missions in the early 1960s.</p>
        <div class="running-time-container">
            <img class="stopwatch" src="../assets/stopwatch.svg" alt="stopwatch icon">
            <p><span class="running-time">1hr</span></p>
        </div>
        <div class="showtime-trailer-container">
            <div class="showtime-container trailer-margin">
                <div class="showtime-grid">
                    <ul>
                        <li class="showtime">1:00PM</li>
                        <li class="showtime">1:00PM</li>
                        <li class="showtime">1:00PM</li>
                        <li class="showtime">1:00PM</li>
                        <li class="showtime">1:00PM</li>
                        <li class="showtime">1:00PM</li>
                    </ul>
                </div>
                <div class="more-details">
                    <h5>View More Showtimes</h5>
                    <img class="chevron" src="../assets/chevron.svg" alt="more details arrow">
                </div>
            </div>
            <a href="https://www.youtube.com/watch?v=PSoRx87OO6k" target="_blank"><div class="trailer-container">
                <svg width="38" height="38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="stroke" clip-rule="evenodd" d="M19 37c9.941 0 18-8.059 18-18S28.941 1 19 1 1 9.059 1 19s8.059 18 18 18z" stroke="#fff"/>
                    <path class="fill" fill-rule="evenodd" clip-rule="evenodd" d="M15.66 27.093a.5.5 0 00.828.377l9.244-8.064a.5.5 0 00.001-.752l-9.244-8.115a.5.5 0 00-.83.376v16.178z" fill="#fff"/></svg>
            </div></a>
        </div>
    </div>
</template>


<script>
export default {
    name: "movieHero",
    
}
</script>


<style scoped>
.running-time-container {
    display: flex;
    flex-direction: row;
    margin: 1em 0px;
}

.running-time {
    color: var(--yellow);
    font-size: .75em;
}

.stopwatch {
    display: inline-block;
    margin-right: .3125em;
}

.showtime-trailer-container {
    display: flex;
    flex-wrap: wrap;
}

.trailer-container {
    max-width: 17em;
    min-width: 17em;
    display: flex;
    flex-grow: 2;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    text-align: center;
    transition: .2s ease-out;
    background-image: url(../assets/firstman-trailer.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}

.fill {
    transition: .2s ease-out;
}

.stroke {
    transition: .2s ease-out;
}

.trailer-container svg {
    margin: 3.75em 0;
}

.trailer-container:hover > svg > .fill {
    transition: .2s ease-out;
    fill: var(--yellow);
}

.trailer-container:hover > svg > .stroke {
    transition: .2s ease-out;
    stroke: var(--yellow);
}

.trailer-margin {
    margin-right: 2.5em;
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

.hero p {
    max-width: 50ch;
}

@media screen and (min-width: 1024px) {
    .sidebar-margin {
            margin-left: 11em;
    }
}

</style>