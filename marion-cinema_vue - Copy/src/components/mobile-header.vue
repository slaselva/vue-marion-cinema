<template>
    <div class="mobile-header">
        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
        <label for="openSidebarMenu" class="sidebarIconToggle">
            <div class="spinner diagonal part-1"></div>
            <div class="spinner horizontal"></div>
            <div class="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
            <ul class="sidebarMenuInner">
            <li><a href="index.html"><img src="../assets/logo.svg" alt="marion cinema logo"></a></li>
            <li><a href="#"><img class="avatar" src="../assets/avatar.jpg" alt="user avatar"></a></li>
            <li><a class="active" href="index.html">Home <img src="../assets/home.svg" alt="home icon"></a></li>
            <li><a href="firstman.html">Movies <img src="../assets/movies.svg" alt="movies icon"></a></li>
            <li><a href="food-menu.html">Food <img src="../assets/food.svg" alt="food icon"></a></li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    name: "mobileHeader"
}
</script>


<style scoped>

.mobile-header {
    background-color: white;
    padding-top: 3em;
    position: fixed;
    z-index: 99;
    top: 0;
    width: 100%;
    -webkit-box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 6px 10px 0px rgba(0,0,0,0.15);
}

#sidebarMenu {
    height: 100%;
    position: fixed;
    left: 0;
    width: 50vw;
    max-width: 11em;
    transform: translateX(-50vw);
    transition: transform 250ms ease-in-out;
    background: white;
}

.sidebarMenuInner{
    margin:0;
    padding:0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sidebarMenuInner li{
    list-style: none;
    color: var(--light);
    font: .875rem/100% "Source Sans Pro", sans-serif;
    padding: 1em;
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
}

.sidebarMenuInner li a{
    color: var(--light);
    cursor: pointer;
    text-decoration: none;
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
}

.sidebarMenuInner li a .active {
    color: var(--pink);
}

input[type="checkbox"]:checked ~ #sidebarMenu {
    transform: translateX(0);
}

input[type=checkbox] {
    transition: all 0.3s;
    box-sizing: border-box;
    display: none;
}

.sidebarIconToggle {
    transition: all 0.3s;
    box-sizing: border-box;
    cursor: pointer;
    position: absolute;
    z-index: 99;
    height: 100%;
    width: 100%;
    top: 1.15em;
    left: 1em;
    height: 1.5em;
    width: 1.5em;
}

.spinner {
    transition: all 0.3s;
    box-sizing: border-box;
    position: absolute;
    height: 3px;
    width: 100%;
    background-color: var(--yellow);
}

.horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}

.diagonal.part-1 {
    position: relative;
    transition: all 0.3s;
    box-sizing: border-box;
    float: left;
}

.diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    position: relative;
    float: left;
    margin-top: 3px;
}

input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
    transition: all 0.3s;
    box-sizing: border-box;
    opacity: 0;
}

input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(135deg);
    margin-top: 8px;
}

input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
    transition: all 0.3s;
    box-sizing: border-box;
    transform: rotate(-135deg);
    margin-top: -9px;
}

.avatar {
    border-radius: 50%;
    -webkit-box-shadow: 4px 2px 3px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 4px 2px 3px 0px rgba(0,0,0,0.25);
    box-shadow: 4px 2px 3px 0px rgba(0,0,0,0.25);
}

@media screen and (min-width: 1024px) {

    .mobile-header {
        display: none;
    }
}

</style>