<template>
    <div class="review-container">
        <div class="review-avatar">
            <img src="../assets/review-avatar.jpg" alt="avatar of reviewer">
        </div>
        <div class="review-box">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
            <div class="more-details">
                <h5>Read Full Review</h5>
                <img class="chevron" src="../assets/chevron.svg" alt="more details arrow">
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "movieReview"
    
}
</script>


<style scoped>
.review-avatar {
    width: 3.125em;
    height: 3.125em;
    border-radius: 50%;
    overflow: hidden;
}

.review-container {
    grid-area: review;
    max-width: 22em;
    position: relative;
    padding-left: 2em;
    margin-top: 1.5em;
}

.review-avatar {
    position: absolute;
    top: -1.75em;
    left: .5em;
}

.review-avatar img {
    width: 100%;
    margin-top: -1em;
}

.review-box {
    padding: 1.875em 1.5em;
    border: 4px solid var(--yellow);
}

.review-box p {
    color: var(--black);
    max-width: 30ch;
}

.more-details {
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    cursor: pointer;
    transition: .3s ease-out;
}

.more-details:hover > .chevron {
    margin-left: .75em;
    transition: .2s ease-out;
}

.chevron {
    margin-left: .625em;
    transition: .2s ease-out;
}
</style>