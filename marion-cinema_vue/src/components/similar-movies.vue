<template>
    <div class="similar-movies-grid">
        <!--Once Upon A Time in Hollywood-->
        <div class="similar-movies-thumbnail">
            <img src="../assets/hollywood.jpg" alt="Once Upon A Time in Hollywood starring Leonardo DiCaprio and Brad Pitt">
        </div>
        <!--1917-->
        <div class="similar-movies-thumbnail">
            <img src="../assets/1917.jpg" alt="Once Upon A Time in Hollywood starring Leonardo DiCaprio and Brad Pitt">
        </div>
    </div>
</template>


<script>
export default {
    name: "similarMovies"
    
}
</script>


<style scoped>
.similar-movies-grid {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.similar-movies-thumbnail {
    max-width: 10em;
}

.similar-movies-thumbnail:hover > img {
    transition: .2s ease-out;
    transform: scale(1.025);
    -webkit-box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);
    box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);
}

.similar-movies-thumbnail img {
    width: 100%;
    border-radius: 10px;
    cursor: pointer;
    transition: .2s ease-out;
}
</style>