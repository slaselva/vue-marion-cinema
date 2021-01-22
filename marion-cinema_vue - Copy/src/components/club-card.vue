<template>
    <div class="club-cell">
        <div class="club-content">
            <h1>{{clubCardHeadline}}</h1>
            <p>{{clubCardTagline}}</p>
            <div class="more-details">
                <h5>Find Out More</h5>
                <img class="chevron" src="../assets/chevron-white.svg" alt="find out more arrow">
            </div>
        </div>
        <img class="club-card" src="../assets/card.png" alt="white membership card with Marion Cinema logo">
    </div>
</template>


<script>
export default {
    name: "clubCard",
    props: ["clubCardHeadline", "clubCardTagline"]
    
}
</script>


<style scoped>
.club-cell {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    padding-top: 5.5em;
    padding-left: 5%;
    padding-bottom: 5.5em;
    background-image: url(../assets/popcorn-mobile.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    border-radius: 10px;
}

.club-content {
    display: flex;
    flex-direction: column;
    max-width: 50ch;
    margin-right: 3em;
}

.club-content h1 {
    margin-bottom: .25em;
}

.club-card {
    width: 100%;
    max-width: 18em;
}

.more-details {
    margin-bottom: 1.5em;
}

.club-content .more-details h5 {
    color: white;
}

@media screen and (min-width: 1420px) {
    .club-cell {
        justify-content: center;
        background-image: url(../assets/popcorn.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: left;
    }
}
</style>