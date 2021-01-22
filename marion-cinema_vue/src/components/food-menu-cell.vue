<template>
    <li class="food-menu-cell">
        <div class="food-image">
            <img :src="foodMenuCell.src" alt="bacon cheeseburger with lettuce and tomato on a sesame seed bun">
        </div>
        <div class="food-menu-content">
            <h4>{{foodMenuCell.title}}</h4>
            <p>{{foodMenuCell.description}}</p>
            <p class="calories">{{foodMenuCell.calories}}</p>
        </div>
    </li>
</template>


<script>
export default {
    name: "foodMenuCell",
    props: ["foodMenuCell"]
    
}
</script>


<style scoped>

.food-menu-cell {
    display: flex;
    flex-direction: row;
    min-width: 21.875em;
    border-radius: 10px;
    overflow: hidden;
    background-color: white;
    transition: .2s ease-out;
    cursor: pointer;
    -webkit-box-shadow: 0px 9px 25px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 9px 25px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 9px 25px 0px rgba(0,0,0,0.15);
}

.food-menu-cell:hover .food-image {
    transition: .2s ease-out;
    margin-left: 4em;
    margin-right: 5em;
}

.food-menu-cell:hover .food-menu-content {
    max-height: 271px;
    transition: .2s ease-out;
}

.food-menu-content {
    display: flex;
    flex-direction: column;
    margin-left: 1em;
    padding-top: 1.25em;
    padding-right: .625em;
    max-height: 271px;
}

.food-image {
    margin-left: -7em;
    align-self: center;
    transition: .2s ease-out;
}

.food-menu-content h4 {
    color: var(--black);
    margin-bottom: .625em;
}

.food-menu-content p {
    font-size: .875em;
    color: var(--light);
    margin-bottom: .5em;
    max-width: 45ch;
}

.food-menu-content .calories {
    font: 400 italic .875em/100% "Source Sans Pro", sans-serif;
    color: var(--pink);
}

</style>