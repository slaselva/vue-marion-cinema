<template>
    <div class="footer-content sidebar-margin">
        <ul>
            <li><a href="#">Site Map</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Copyright</a></li>
        </ul>
    </div>
</template>


<script>
export default {
    name:"footerLinks"
    
}
</script>


<style scoped>

.sidebar-margin {
    margin-left: 11em;
}

.footer-content ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
}

.footer-content li {
    padding: .875em 0;
    font: 600 1em/100% "Source Sans Pro", sans-serif;
    flex: 1 0 20ch;
    max-width: 175px;
}

.footer-content li a {
    text-decoration: none;
    color: var(--dark);
    transition: .2s ease-out;
}

.footer-content li a:hover {
    transition: .2s ease-out;
    color: var(--yellow);
}
</style>