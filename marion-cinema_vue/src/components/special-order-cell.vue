<template>
    <li class="special-order-cell">
        <img :src="specialOrder.src" alt="giant burger with macaroni and cheese as a topping">
        <div class="food-label">
            <h5>{{specialOrder.title}}</h5>
        </div>
    </li>
</template>


<script>
export default {
    name: "specialOrderCell",
    props: ["specialOrder"]
    
}
</script>


<style scoped>
.special-order-grid li {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
}

.special-order-grid li img {
    width: 100%;
    border-radius: 10px;
    transition: .3s ease-out;
}

.special-order-grid li:hover img {
    transform: scale(1.2);
    transition: .3s ease-out;
}

.food-label {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--yellow);
    padding: .5em 3em;
    border-top-right-radius: 10px;
}

.food-label h5 {
    color: white;
}

.special-order-cell {
    width: 100%;
}
</style>