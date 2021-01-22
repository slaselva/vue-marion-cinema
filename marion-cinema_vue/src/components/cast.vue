<template>
    <li>
        <div>
            <img :src="cast.src" alt="Ryan Gosling">
        </div>
        <p>{{ cast.name }}</p>
    </li>
</template>


<script>
export default {
    name: "cast",
    props: ["cast"]
    
}
</script>


<style scoped>

.cast-container p {
    color: var(--dark);
    margin-top: .75em;
}

.cast-avatar-grid li {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 25%;
}

.cast-avatar-grid li div {
    width: 3.125em;
    height: 3.125em;
    border-radius: 50%;
    overflow: hidden;
}

.cast-avatar-grid li div img {
    width: 100%;
    margin-top: -.5em;
}

</style>