<template>
    <div>
        <!--Hero Grid-->
        <section class="food-hero-grid mobile-margin sidebar-margin">
            <foodMenuHero />
            <foodMenuPromotion />
        </section>
        <!--Food Menu Categories-->
        <section class="food-menu-icon-grid sidebar-margin">
            <foodMenuCategory
                v-for="foodMenuCategory in foodMenuCategories"
                :key="foodMenuCategory.title"
                :foodMenuCategory="foodMenuCategory"
            />
        </section>
        <!--Food Menu-->
        <section class="container food-menu-grid sidebar-margin">
            <ul>
                <foodMenuCell 
                    v-for="foodMenuCell in foodMenuCells"
                    :key="foodMenuCell.title"
                    :foodMenuCell="foodMenuCell"
                />
            </ul>
        </section>
        <!--Special Orders-->
        <section class="container special-order sidebar-margin">
          <h2>Special Orders</h2>
          <div class="special-order-grid">
                <ul>
                    <specialOrderCell 
                        v-for="specialOrder in specialOrders"
                        :key="specialOrder.title"
                        :specialOrder="specialOrder" 
                    />
                </ul>
            </div>
        </section>
    </div>
</template>


<script>
import foodMenuHero from "../components/food-menu-hero.vue"
import foodMenuPromotion from "../components/food-menu-promotion.vue"
import foodMenuCategory from "../components/food-menu-category.vue"
import foodMenuCell from "../components/food-menu-cell.vue"
import specialOrderCell from "../components/special-order-cell.vue"

export default {
    components: { foodMenuHero, foodMenuPromotion, foodMenuCategory, foodMenuCell, specialOrderCell },

    data () {
        return {
            foodMenuCategories: [
                {
                  title: "Burgers",
                  src: `${process.env.BASE_URL}images/burger-icon-active.svg`,
                },
                {
                  title: "Pizza",
                  src: `${process.env.BASE_URL}images/pizza-icon-inactive.svg`,
                },
                {
                  title: "Chicken",
                  src: `${process.env.BASE_URL}images/chicken-icon-inactive.svg`,
                },
                {
                  title: "Desserts",
                  src: `${process.env.BASE_URL}images/icecream-icon-inactive.svg`,
                },
                {
                  title: "Beer",
                  src: `${process.env.BASE_URL}images/beer-icon-inactive.svg`,
                },
            ],
            foodMenuCells: [
                {
                    title: "Bacon Cheeseburger",
                    description: "Hardwood-smoked bacon, lettuce, tomatoes, mayo and choice of cheese.",
                    calories: "990 cal",
                    src: `${process.env.BASE_URL}images/bacon-cheeseburger.jpg`
                },
                {
                    title: "Tavern Double",
                    description: "Brown-sugar-glazed patties topped with hardwood-smoked bacon, lettuce, tomato, bacon crumbles, American cheese and mayo.",
                    calories: "780 cal",
                    src: `${process.env.BASE_URL}images/tavern-double.jpg`
                },
                {
                    title: "The Royal",
                    description: "Hardwood-smoked bacon, egg, American cheese, lettuce, tomatoes and mayo.",
                    calories: "1110 cal",
                    src: `${process.env.BASE_URL}images/royal.jpg`
                },
                {
                    title: "Southern Charm",
                    description: "Brown sugar glaze, candied bacon, Whiskey River® BBQ Sauce, Cheddar, caramelized onions, shredded lettuce and mayo on a toasted brioche bun.",
                    calories: "1130 cal",
                    src: `${process.env.BASE_URL}images/southern-charm.jpg`
                },
                {
                    title: "Whiskey BBQ",
                    description: "Whiskey River® BBQ Sauce, crispy onion straws, Cheddar, lettuce, tomatoes and mayo.",
                    calories: "1140 cal",
                    src: `${process.env.BASE_URL}images/whiskey-bbq.jpg`
                },
                {
                    title: "Veggie",
                    description: "Our custom-blended, ancient-grain-and-quinoa veggie patty is piled high with Swiss cheese, salsa, fresh avocado slices, roasted garlic aioli and shredded lettuce on a sesame bun.",
                    calories: "750 cal",
                    src: `${process.env.BASE_URL}images/veggie-burger.jpg`
                },
                
            ],
            specialOrders: [
                {
                  title: "The Mac Attack",
                  src: `${process.env.BASE_URL}images/mac-attack.jpg`,
                },
                {
                  title: "Meat Lovers",
                  src: `${process.env.BASE_URL}images/meat-pizza.jpg`,
                },
                {
                  title: "Loaded Nachos",
                  src: `${process.env.BASE_URL}images/nachos.jpg`,
                },
                {
                  title: "Beer Flight",
                  src: `${process.env.BASE_URL}images/beer-flight.jpg`,
                },
            ]
        }
    }
}
</script>


<style scoped>
.food-hero-grid {
    display: grid;
    grid-gap: .75em;
    grid-template-areas: 
        "hero"
        "promotion-sidebar";
    grid-template-rows: 1fr;
    padding: .75em;
}

.mobile-margin {
    padding-top: 3.5em;
}

.food-menu-icon-grid {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: 
        .1875em
        repeat(5, minmax(min-content, 12.5em))
        .1875em;
    overflow: auto;
    padding-top: 3.125em;
    padding-bottom: 2.75em;
    justify-content: space-between;
    margin-bottom: 1.5em;
}

.food-menu-icon-grid::before,
.food-menu-icon-grid::after {
    content: '';
}

.container {
    display: grid;
    grid-template-columns: .75em 1fr .75em;
}

.container > * {
    grid-column: 2 / -2;
}

.food-menu-grid ul {
    display: grid;
    column-gap: 1.5em;
    row-gap: 2.25em;
    grid-template-columns: repeat(auto-fit, minmax(21.875em, 1fr));
}

.special-order {
    padding-top: 3.125em;
}
.special-order-grid ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(351px, 1fr));
    grid-gap: 1.5em;
}


@media screen and (min-width: 699px) {
    .food-hero-grid {
        grid-template-columns: 2fr 1fr;
        grid-template-areas: 
            "hero promotion-sidebar";
    }
}

@media screen and (min-width: 1024px) {
    .sidebar-margin {
        margin-left: 11em;
    }

}

</style>