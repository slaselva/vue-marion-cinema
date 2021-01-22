<template>
    <div class="promotion-container">
        <div class="promotion-content">
            <div class="promotion-type">
                <h2>The $5 Shake</h2>
                <p>Add Bourbon free of charge</p>
            </div>
                <div class="promotion-hero">
                <img src="../assets/milkshake-large.png" alt="oreo milkshake in tall glass with whipped cream and oreo crumbles">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "foodMenuPromotion"
    
}
</script>


<style scoped>

.promotion-container {
    grid-area: promotion-sidebar;
    display: flex;
    flex-direction: row;
    padding-left: 5%;
    border-radius: 10px;
    background: rgb(255,127,121); /* Old browsers */
    background: -moz-radial-gradient(center, ellipse cover,  rgba(255,127,121,1) 0%, rgba(221,45,37,1) 86%); /* FF3.6-15 */
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,127,121,1) 0%,rgba(221,45,37,1) 86%); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(ellipse at center,  rgba(255,127,121,1) 0%,rgba(221,45,37,1) 86%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

.promotion-content {
    display: flex;
    align-items: center;
}

.promotion-type {
    display: flex;
    flex-direction: column;
}

.promotion-hero img {
    width: 100%;
    max-width: 10.375em;
}

.promotion-type h2 {
    font: 700 italic 2.3125em/100% "Source Sans Pro", sans-serif;
    color: white;
    margin-bottom: .25em;
}

.promotion-type p {
    font-size: .875em;
}

</style>