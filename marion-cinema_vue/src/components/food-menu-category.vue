<template>
    <div class="food-icon-cell inactive-icon">
        <div class="food-icon-content">
            <div class="food-icon">
            <img :src="foodMenuCategory.src" alt="active burger icon">
            </div>
            <h3>{{foodMenuCategory.title}}</h3>
        </div>
    </div>
</template>


<script>
export default {
    name: "foodMenuCategory",
    props: ["foodMenuCategory"]
    
}
</script>


<style scoped>

.food-icon-cell{
    border-radius: 10px;
    padding: .85em .5em .5em;
    max-width: 12.5em;
    padding-bottom: 2em;
    transition: ease-out .2s;
    cursor: pointer;
}

.inactive-icon {
    background-color: white;
    -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.15);
}

.inactive-icon:hover {
    transform: scale(1.025);
    transition: ease-out .2s;
    -webkit-box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 5px 12px 0px rgba(0,0,0,0.15);
}

.food-icon > svg > path {
    transition: var(--transition);
}

.food-icon-cell:hover > .food-icon-content > .food-icon > svg > path {
    fill: var(--pink);
    transition: var(--transition);
}

.active-icon h3,
.inactive-icon h3 {
    font-size: 1em;
}

.active-icon h3 {
    color: white;
}

.inactive-icon h3 {
    color: var(--pink);
}

.active-icon {
    background-color: var(--pink);
    -webkit-box-shadow: 0px 9px 25px 0px rgba(0,0,0,0.17);
    -moz-box-shadow: 0px 9px 25px 0px rgba(0,0,0,0.17);
    box-shadow: 0px 9px 25px 0px rgba(0,0,0,0.17);
}

.food-icon-content {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.food-icon {
    width: 4em;
    height: 4em;
    background-color: #fafafa;
    border-radius: 50%;
    margin-bottom: 1em;
    padding: 1em;
    text-align: center;
    display: flex;
    justify-content: center;
}

</style>