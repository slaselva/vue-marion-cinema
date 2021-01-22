<template>
    <div class="food-hero">
        <div class="food-hero-content">
            <div class="food-hero-type">
            <h1>Epic Meals <span>for</span> Epic Movies</h1>
            <p>In addition to playing the best movies, we have a full, multi-course menu where every meal is prepared from scratch specifically for you. Burgers, Pizza, Beer. Forget dinner and a movie, it's all about dinner AT the movie.</p>
            </div>
            <div class="food-hero-image">
            <img src="../assets/food-hero-large.png" 
                alt="giant burger stacked with roast beef and fried onions">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "foodMenuHero"
    
}
</script>


<style scoped>

.food-hero {
    grid-area: hero;
    padding-top: 3.125em;
    padding-left: 5%;
    border-radius: 10px;
    overflow: hidden;
    background-color: var(--light-yellow);
}

.food-hero-content {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.food-hero-type {
    width: 81%;
    max-width: 50ch;
    padding-bottom: 2em;
}

.food-hero-image img {
    width: 100%;
    max-width: 31.25em;
    min-width: 18.75em;
    margin-left: 10em;
    margin-bottom: -1.5em;
}

.food-hero-content h1{
    font-size: 3em;
    margin-bottom: .5em;
}

.food-hero-content h1 span {
    font: 600 .65em/150% "Source Sans Pro", sans-serif;
}

@media screen and (min-width: 1024px) {
    .food-hero-content {
        flex-direction: row;
        justify-content: space-between;
    }

    .food-hero-image {
        margin-top: -3em;
        margin-bottom: -1.5em;
        margin-right: -6em;
        text-align: right;
    }

    .food-hero-image img {
        margin: 0px;
    }
}

</style>