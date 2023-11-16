import { IPost } from "../interfaces/post.interface";


export const blogPosts: IPost[] = [
    {
        id: 1,
        title: "Francesco's Tiramisu",
        content: `
    <h5>Ingredients:</h5>
    <ul>
        <li>Ladyfinger cookies</li>
        <li>1.5 kg mascarpone cheese</li>
        <li>8 eggs</li>
        <li>300 g sugar</li>
        <li>A shot glass of Vermouth, coffee liqueur, or a similar spirit</li>
        <li>Coffee (the better the quality of the coffee, the better the tiramisu)</li>
        <li>Cocoa powder</li>
    </ul>

    <h5>Instructions:</h5>

    <ol>
        <li>Prepare the coffee (I use approximately 3 Italian stovetop espresso makers with 6 cups each) and let it cool in a wide-mouthed bowl. You can use ice cubes to speed up the cooling process.</li>

        <li>Separate egg yolks and whites.</li>

        <li>Mix egg yolks and sugar, then beat with an electric mixer at maximum power until the mixture has grown, become dense and thick, and the color has lightened. Beat for about 4 minutes.</li>

        <li>Add the mascarpone and vermouth to the yolk mixture. Beat with an electric mixer at medium power, just enough to incorporate.</li>

        <li>In another bowl, beat the egg whites until stiff peaks form.</li>

        <li>Gradually fold the beaten egg whites into the yolk and mascarpone mixture using gentle, folding motions, being careful not to lose the air.</li>

        <li>Create the first layer with the mascarpone mixture in the container where you will assemble the tiramisu.</li>

        <li>Dip the ladyfinger cookies in the coffee, submerging them for a few seconds until well soaked for the first layer.</li>

        <li>Alternate layers of mascarpone with layers of dipped ladyfinger cookies. For subsequent layers, soak the cookies for only 3 seconds.</li>

        <li>Finish with a layer of mascarpone and sprinkle cocoa powder on top.</li>
    </ol>


`,
        author: "Francesco",
        author_image: "",
        image: "/assets/images/tiramisu.PNG",
        date: new Date("2023-11-01"),
        category: "Desserts",
        tags: "sweets, italian"
    },
    {
        id: 2,
        title: "Claire Saffitz' Carrot Cake",
        content: `

<p>16 servings</p>
    <h4>Ingredients</h4>

    <h5>For the Cake:</h5>
    <ul>
        <li>1 cup (240 milliliters) well-shaken buttermilk</li>
        <li>4 tablespoons finely grated fresh ginger</li>
        <li>2 teaspoons vanilla extract</li>
        <li>300 grams pecan halves, plus more for decorating the cake (optional)</li>
        <li>1 1/2 cups (360 milliliters) canola oil or another neutral oil, plus more for greasing pans</li>
        <li>2 1/2 cups (315 grams) all-purpose flour</li>
        <li>1/2 cup (60 grams) whole wheat flour</li>
        <li>2 teaspoons baking powder</li>
        <li>2 teaspoons baking soda, sifted</li>
        <li>2 teaspoons kosher salt</li>
        <li>2 teaspoons ground cinnamon</li>
        <li>2 teaspoons ground ginger</li>
        <li>1 teaspoon ground cardamom</li>
        <li>1/2 teaspoon grated nutmeg</li>
        <li>1/2 teaspoon ground clove</li>
        <li>6 large eggs, at room temperature</li>
        <li>1 1/2 cups (300 grams) granulated sugar</li>
        <li>1/2 cup packed (110 grams) dark brown sugar</li>
        <li>11 ounces (620 grams) carrots (9 to 10 medium), scrubbed and trimmed</li>
    </ul>

    <h5>For the Frosting:</h5>
    <ul>
        <li>1 1/2 sticks (6 ounces/170 grams) unsalted butter</li>
        <li>600 grams cream cheese, at room temperature</li>
        <li>Seeds scraped from 1 vanilla bean</li>
        <li>1/2 teaspoon kosher salt</li>
        <li>2 cups (240 grams) confectioners’ sugar, sifted if very lumpy</li>
    </ul>

    <p><strong>Tips:</strong> If you can, prepare the carrot and buttermilk mixture ahead of time (anywhere from 15 minutes to several hours), since the buttermilk will tenderize the carrots and lead to a more tender cake.</p>
    <p>These layers bake fairly flat, but for a truly level cake, use a serrated knife to slice off the domes. You might not get a clean cut due to all the carrots and pecans, though, so I usually don’t bother!</p>

    <p><strong>Substitutes for buttermilk:</strong></p>
    <ul>
        <li>1 cup buttermilk = 1 cup plain yogurt or Greek yogurt</li>
        <li>1 cup buttermilk = 1 cup plain kefir</li>
        <li>1 cup buttermilk = 3/4 cup sour cream + 1/4 cup water or milk</li>
        <li>1 cup buttermilk = 1 cup milk + 1 tablespoon lemon juice</li>
        <li>1 cup buttermilk = 1 cup milk + 1 tablespoon vinegar (distilled white vinegar or apple cider vinegar)</li>
        <li>1 cup buttermilk = 1 cup milk + 1 3/4 teaspoons cream of tartar</li>
        <li>1 cup buttermilk = 1 cup water + 1/4 cup buttermilk powder</li>
    </ul>

    <h5>Step 1</h5>
    <p>Make the cake layers: Position a rack in the middle of the oven and preheat to 350 degrees.</p>
    <p>Grate the carrots. In a liquid measuring cup, combine the buttermilk, carrots, fresh ginger, and vanilla.</p>

        <h5>Step 2</h5>
    <p>Remove from the oven (leave the oven on) and transfer the nuts to a plate to cool. Once the pecans are cool, crush them. Place about two-thirds of the cooled pecans in a resealable plastic bag and seal, pressing out all the air. Use a rolling pin to lightly beat the nuts, breaking them up into smaller pieces. Transfer the broken-up nuts to a small bowl and set aside. Place the remaining nuts in the same bag and seal, then beat thoroughly with the rolling pin to finely crush the nuts into a coarse meal. Transfer the nut meal to a medium bowl.</p>

    <h5>Step 3</h5>
    <p>While the nuts are toasting, lightly brush the bottom and sides of two (8-by-2-inch) cake pans with oil. Line the bottom of the pans with parchment paper and brush the paper with oil. In a medium bowl, whisk together the flour, baking powder, baking soda, salt, cinnamon, ground ginger, cardamom, nutmeg, and clove until combined.</p>

    <h5>Step 4</h5>
    <p>In the bowl of a stand mixer fitted with the whisk attachment, combine the eggs with the granulated and brown sugars and beat on medium-low speed to break up the eggs. Increase the speed to medium-high and beat until the mixture forms thick ribbons as it falls off the whisk, about 5 minutes.</p>

    <h5>Step 5</h5>
    <p>When the egg-sugar mixture is ready, slowly add the oil in a thin stream and beat until the mixture is glossy, plush, and emulsified.</p>

    <h5>Step 6</h5>
    <p>Switch to the paddle attachment and add about a third of the flour mixture to the egg mixture. Mix on low speed just to combine. Stop the mixer, add half of the buttermilk mixture and then return the mixer to low speed just to combine. Add the remaining dry ingredients in two more additions, alternating with the remaining buttermilk mixture. When the last whisper of flour disappears, stop the mixer and use a spatula to scrape down the sides and bottom of the bowl, then fold the batter to ensure it is evenly mixed. Add the carrots and mix on low until just combined. Unlock the mixer bowl and, using a spatula, gently fold in the pecans and raisins. Evenly divide the batter between the cake pans. (Each portion should weigh around 700 grams, depending on the weight of your carrots.) If needed, smooth out the tops of the cakes with a small offset spatula.</p>

    <h5>Step 7</h5>
    <p>Bake for 30 to 35 minutes, or until a cake tester inserted into the middle of the cakes comes out clean, and the cakes spring back when lightly pressed on top and start to pull away from the sides of the pan. Transfer the cake pans to a wire rack and let cool completely. Run a thin offset spatula or butter knife around the perimeter of each pan, place a plate over each cake layer and gently invert. Discard the parchment paper.</p>

    <h5>Step 8</h5>
    <p>Make the frosting: While the cakes are baking, in a medium bowl, prepare an ice bath. In a small saucepan over medium heat, melt the butter and cook, stirring and scraping the bottom and sides constantly, until the solids turn brown, 8 to 10 minutes. Scrape the butter with the browned bits into a bowl and set the bowl over the prepared ice bath; stir every couple of minutes until the butter returns to solid, 13 to 15 minutes. Do not let it get too hard; you want the consistency of room-temperature butter.</p>

    <h5>Step 9</h5>
    <p>In a stand mixer fitted with the paddle attachment, beat the cream cheese and butter on medium-high speed, stopping the mixer and scraping down the sides and bottom of the bowl from time to time, until the mixture is completely smooth, about 2 minutes. Add the vanilla and salt and mix on medium-high to incorporate.</p>

    <h5>Step 10</h5>
    <p>Turn off the mixer and add about a third of the confectioners’ sugar. Start with the mixer on low to incorporate the sugar, and then add the remaining sugar in two more increments, pausing the mixer between additions and scraping the sides and bottom of the bowl. Once all of the confectioners’ sugar has been incorporated, increase the speed to medium-high and beat until the frosting is smooth, thick and fluffy, 1 to 2 minutes. Check the bottom of the bowl to make sure all of the confectioners’ sugar has been incorporated; if not, briefly beat to recombine. The frosting will be soft and spreadable; if it feels too soft for spreading, refrigerate for about 20 minutes to firm it up.</p>

    <h5>Step 11</h5>
    <p>Assemble the cake: If your cake layers have prominent domes, use a long, serrated knife to trim the tops (you can eat them as a cook’s treat), so the layers are even and level. Place a cake layer bottom side down on a cake stand or serving plate, and slide strips of parchment paper partially underneath and all around the cake to keep your work area neat during frosting.</p>

    <h5>Step 12</h5>
    <p>Using a small offset spatula, place about 1 cup of frosting in the center and spread it out to the edges. Place the second cake layer, bottom side up, on top of the first and top with another 1 cup of the frosting in the center. Using the offset spatula, spread the frosting in a thin layer over the top and sides of the cake to form a crumb coat, adding a little more frosting at a time as needed.</p>

    <h5>Step 13</h5>
    <p>Transfer the cake to the refrigerator and let the coating set up (it will be soft and somewhat tacky), about 30 minutes. (You can leave the remaining frosting at room temperature in the meantime, though if it gets too soft, refrigerate it as well while the crumb coat chills.)</p>

    <h5>Step 14</h5>
    <p>Remove the cake from the refrigerator and use more frosting to generously cover the top and sides of the cake. (Leftover frosting can be frozen.) To make decorative swirls, move the offset spatula in a figure-eight shape all over the frosting. Refrigerate the cake just until the frosting is set, at least 1 hour and up to 1 day in advance, then slice and serve.</p>

    <p><strong>Variation:</strong> To make traditional cream cheese frosting, follow the instructions above, skipping the butter browning process. Be sure to have the butter at room temperature.</p>`,
        author: "Marcelle",
        author_image: "/assets/images/marcelle.jpg",
        image: "/assets/images/carrot-cake.jpg",
        date: new Date("2023-10-25"),
        category: "Desserts",
        tags: "sweets, winter, american"
    },
    {
        id: 3,
        title: "Pears, Peas, Pesto, Pistachios and Burrata Bowl",
        content: `

    <h4>Ingredients:</h4>
    <ul>
        <li>2 cups frozen peas, boiled</li>
        <li>2 ripe but firm pears, sliced</li>
        <li>2 tablespoons butter</li>
        <li>1 tablespoon brown sugar</li>
        <li>1 burrata cheese ball</li>
        <li>1/4 cup chopped pistachios</li>
        <li>Homemade Pesto (see recipe below)</li>
        <li>Salt and pepper to taste</li>
    </ul>

    <h4>Homemade Pesto:</h4>
    <ul>
        <li>2 cups fresh basil leaves, packed</li>
        <li>1/2 cup grated Parmesan cheese</li>
        <li>1/2 cup pine nuts or any other nut</li>
        <li>3 garlic cloves</li>
        <li>1/2 cup extra-virgin olive oil</li>
        <li>Salt and pepper to taste</li>
    </ul>

    <h4>Instructions:</h4>

    <h5>Homemade Pesto:</h5>
    <ol>
        <li>In a food processor, combine basil, Parmesan cheese, pine nuts, and garlic.</li>
        <li>Pulse until coarsely chopped.</li>
        <li>With the processor running, slowly pour in the olive oil until the mixture is well blended.</li>
        <li>Season with salt and pepper to taste. Set aside.</li>
    </ol>

    <h5>Bowl:</h5>
    <ol>
        <li>Boil frozen peas according to package instructions. Drain and set aside.</li>
        <li>In a pan over medium heat, melt butter. Add sliced pears and sprinkle brown sugar. Cook until pears are caramelized and tender, about 5 minutes. Set aside.</li>
        <li>Assemble the bowl: Start with a base of boiled peas. Arrange the caramelized pear slices around the peas.</li>
        <li>Place a burrata cheese ball in the center of the bowl.</li>
        <li>Sprinkle chopped pistachios over the peas and pears.</li>
        <li>Drizzle the homemade pesto over the entire bowl.</li>
        <li>Season with salt and pepper to taste.</li>
        <li>Serve immediately, allowing the burrata to meld with the warm peas and pears.</li>
    </ol>`,
        author: "Camille",
        author_image: "/assets/images/camille.jpg",
        image: "/assets/images/burrata.jpg",
        date: new Date("2023-10-15"),
        category: "Main courses",
        tags: "vegetarian, italian, bowls, salads"
    },
    {
        id: 4,
        title: "Greek Summer Salad",
        content: `

<h4>Ingredients:</h4>
<ul>
    <li>1 cup cherry tomatoes, halved</li>
    <li>1 cup baby cucumbers, sliced</li>
    <li>1/2 cup Kalamata olives, pitted</li>
    <li>1/2 cup dates, pitted and chopped</li>
    <li>1/4 cup pistachios, chopped</li>
    <li>1/2 cup feta cheese, crumbled</li>
    <li>1/4 cup very finely sliced red onion</li>
    <li>Fresh mint leaves, chopped</li>
    <li>Fresh basil leaves, torn</li>
    <li>Optional: Arugula (rocket), Avocado</li>
</ul>

<h5>For the Dressing:</h5>
<ul>
    <li>1/4 cup extra-virgin olive oil</li>
    <li>2 tablespoons apple cider vinegar</li>
    <li>Juice of 1 yellow lemon</li>
    <li>1 teaspoon honey</li>
    <li>1 teaspoon Dijon mustard (optional, add to taste)</li>
    <li>Salt and pepper to taste</li>
</ul>

<h4><strong>Instructions:</strong></h4>

<p><strong>1. Prepare the Salad:</strong></p>
<ul>
    <li>In a large bowl, combine cherry tomatoes, baby cucumbers, Kalamata olives, dates, pistachios, feta cheese, finely sliced red onion, mint leaves, and torn basil leaves.</li>
    <li>If using, add arugula and sliced avocado for an extra touch of freshness and creaminess.</li>
</ul>

<p><strong>2. Prepare the Dressing:</strong></p>
<ul>
    <li>In a small bowl, whisk together olive oil, apple cider vinegar, lemon juice, honey, Dijon mustard (if using), salt, and pepper. Adjust the ingredients to taste.</li>
</ul>

<p><strong>3. Assemble the Salad:</strong></p>
<ul>
    <li>Pour the dressing over the salad ingredients.</li>
    <li>Gently toss the salad until all the ingredients are well coated with the dressing.</li>
</ul>

<p><strong>4. Serve:</strong></p>
<ul>
    <li>Serve the Greek Summer Salad immediately, allowing the flavors to meld together.</li>
</ul>


`,
        author: "Marcelle",
        author_image: "/assets/images/marcelle.jpg",
        image: "",
        date: new Date("2023-09-30"),
        category: "Main courses",
        tags: "salads, bowls, vegetarian, summer"
    },
    {
        id: 5,
        title: "Gochujang Peanut Butter Noodles",
        content: `

    <h4>Ingredients:</h4>
    <ul>
        <li>8 ounces noodles (e.g., udon or soba)</li>
        <li>1 cup reserved cooking water</li>
        <li>1/3 cup peanut butter</li>
        <li>2 tablespoons Gochujang (Korean red pepper paste)</li>
        <li>1 tablespoon ginger, minced</li>
        <li>2 tablespoons rice vinegar</li>
        <li>2 tablespoons sesame oil</li>
        <li>1 tablespoon sugar</li>
        <li>1 tablespoon miso paste</li>
    </ul>

    <h4>Toppings:</h4>
    <ul>
        <li>Soft-boiled 6-minute eggs (optional)</li>
        <li>Lots of cucumber, thinly sliced</li>
        <li>Fresh cilantro leaves</li>
        <li>Peanuts, chopped</li>
        <li>Sesame seeds</li>
        <li>Chives, chopped</li>
    </ul>

    <h3>Instructions:</h3>

    <p><strong>1. Cook Noodles:</strong></p>
    <ul>
        <li>Cook the noodles according to the package instructions. Reserve 1 cup of cooking water before draining.</li>
    </ul>

    <p><strong>2. Prepare Sauce:</strong></p>
    <ul>
        <li>In a separate bowl, mix peanut butter, Gochujang, minced ginger, rice vinegar, sesame oil, sugar, and miso paste. Gradually whisk in the reserved cooking water until the sauce reaches your desired consistency.</li>
    </ul>

    <p><strong>3. Combine Noodles and Sauce:</strong></p>
    <ul>
        <li>Once the noodles are cooked, drain them and toss them in the prepared sauce. Ensure the noodles are well coated with the flavorful sauce.</li>
    </ul>

    <p><strong>4. Prepare Toppings:</strong></p>
    <ul>
        <li>Soft-boil eggs for 6 minutes, peel, and slice them in half.</li>
        <li>Slice cucumber thinly.</li>
        <li>Chop fresh cilantro, peanuts, and chives.</li>
    </ul>

    <p><strong>5. Assemble:</strong></p>
    <ul>
        <li>Serve the Gochujang Peanut Butter Noodles in bowls.</li>
        <li>Top with soft-boiled eggs, lots of sliced cucumber, fresh cilantro leaves, chopped peanuts, sesame seeds, and chopped chives.</li>
    </ul>

    <p><strong>6. Enjoy:</strong></p>
    <ul>
        <li>Mix the toppings into the noodles before eating to combine all the flavors.</li>
        <li>Enjoy your Gochujang Peanut Butter Noodles with a delightful combination of spicy, savory, and nutty notes!</li>
    </ul>
`,
        author: "Marcelle",
        author_image: "/assets/images/marcelle.jpg",
        image: "/assets/images/gochujang-noodles.jpg",
        date: new Date("2023-09-18"),
        category: "Main courses",
        tags: "bowls, asian, vegetarian, spicy"
    },
    {
        id: 6,
        title: "Guilia's Comfort Lentil Soup",
        content: `
    <h4>Ingredients:</h4>
    <ul>
        <li>1 cup dried lentils, washed</li>
        <li>1 onion, finely chopped</li>
        <li>2 cloves garlic, minced</li>
        <li>1 carrot, diced</li>
        <li>1 cup Mutti passata (tomato puree)</li>
        <li>1 bay leaf</li>
        <li>1 teaspoon dried oregano</li>
        <li>1/2 teaspoon curry powder</li>
        <li>1/2 teaspoon black pepper</li>
        <li>Water (enough to cover lentils by two fingers)</li>
        <li>Salt to taste</li>
        <li>1 cup small pasta or your choice of noodles</li>
        <li>Extra virgin olive oil (AOVE) for finishing</li>
    </ul>

    <h4>Instructions:</h4>

    <p><strong>1. Prepare Vegetables:</strong></p>
    <ul>
        <li>Finely chop the onion, mince the garlic, and dice the carrot.</li>
    </ul>

    <p><strong>2. Cook Lentils:</strong></p>
    <ul>
        <li>In a pot, combine the chopped onion, minced garlic, diced carrot, washed lentils, Mutti passata, bay leaf, dried oregano, curry powder, black pepper, and enough water to cover the lentils by about two fingers.</li>
        <li>Bring the mixture to a boil and then reduce the heat to a simmer. Cover and cook until the lentils are tender.</li>
    </ul>

    <p><strong>3. Add Pasta and Salt:</strong></p>
    <ul>
        <li>Once the lentils are cooked, add the small pasta or your choice of noodles to the pot.</li>
        <li>Season with salt to taste. Continue cooking until the pasta is al dente.</li>
    </ul>

    <p><strong>4. Finish with Olive Oil:</strong></p>
    <ul>
        <li>Before serving, drizzle the cooked Lentejas alla Giulia with good-quality extra virgin olive oil (AOVE). This adds a rich and flavorful finish to the dish.</li>
    </ul>

    <p><strong>5. Serve:</strong></p>
    <ul>
        <li>Ladle the Lentejas alla Giulia into bowls and serve hot.</li>
    </ul>



`,
        author: "Giulia",
        author_image: "",
        image: "",
        date: new Date("2023-09-05"),
        category: "Main courses",
        tags: "italian, comfort, winter, soup, vegetarian"
    },
    {
        id: 7,
        title: "Diego's Poke Bowl",
        content: `

    <h4>Ingredients:</h4>

    <h5>For the Sushi Bowl:</h5>
    <ul>
        <li>2 cups sushi rice, cooked and seasoned with rice vinegar</li>
        <li>1 cucumber, julienned</li>
        <li>1 cup edamame, steamed</li>
        <li>1 cup wakame salad</li>
        <li>200g tuna or salmon, sashimi-grade, thinly sliced</li>
        <li>1/2 cup cashews, toasted</li>
        <li>1 mango, thinly sliced</li>
        <li>1 avocado, sliced</li>
        <li>Nori sheets, shredded</li>
        <li>Sriracha Mayo (store-bought or homemade)</li>
    </ul>

    <h5>For the Asian-Style Sesame Cucumber Salad:</h5>
    <ul>
        <li>2 cucumbers, thinly sliced</li>
        <li>2 tablespoons sesame oil</li>
        <li>1 tablespoon mirin</li>
        <li>1 teaspoon chili oil (adjust to taste)</li>
        <li>1 tablespoon soy sauce</li>
        <li>1 teaspoon sesame seeds</li>
        <li>1 tablespoon chopped green onions for garnish</li>
    </ul>

    <h5>For the Sauce:</h5>
    <ul>
        <li>1/4 cup soy sauce</li>
        <li>2 tablespoons mirin</li>
        <li>1 teaspoon garlic chili paste</li>
        <li>1 tablespoon sesame oil</li>
        <li>1 tablespoon rice vinegar</li>
        <li>1 tablespoon honey</li>
        <li>1 tablespoon sesame seeds</li>
        <li>Chopped chives for garnish</li>
    </ul>

    <h4>Instructions:</h4>

    <p><strong>1. Prepare the Cucumbers:</strong></p>
    <ul>
        <li>Wash and thinly slice the cucumbers for the Asian-Style Sesame Cucumber Salad.</li>
    </ul>

    <p><strong>2. Make the Dressing for Cucumber Salad:</strong></p>
    <ul>
        <li>In a small bowl, whisk together sesame oil, mirin, chili oil, soy sauce, and sesame seeds.</li>
    </ul>

    <p><strong>3. Marinate the Cucumbers:</strong></p>
    <ul>
        <li>Place the sliced cucumbers in a bowl.</li>
        <li>Pour the dressing over the cucumbers and toss to coat evenly.</li>
        <li>Allow the cucumbers to marinate for at least 15-20 minutes to absorb the flavors.</li>
    </ul>

    <p><strong>4. Prepare the Sushi Bowl Components:</strong></p>
    <ul>
        <li>Cook sushi rice according to package instructions, season with rice vinegar, and let it cool.</li>
        <li>Julienne the cucumber.</li>
        <li>Steam the edamame and let them cool.</li>
        <li>Prepare the wakame salad according to package instructions.</li>
        <li>Thinly slice the tuna or salmon.</li>
    </ul>

    <p><strong>5. Make the Sauce for Sushi Bowl:</strong></p>
    <ul>
        <li>In a small bowl, whisk together soy sauce, mirin, garlic chili paste, sesame oil, rice vinegar, honey, and sesame seeds. Adjust the ingredients to taste.</li>
    </ul>

    <p><strong>6. Assemble the Sushi Bowl:</strong></p>
    <ul>
        <li>In individual bowls, arrange a portion of sushi rice.</li>
        <li>Top with julienned cucumber, steamed edamame, wakame salad, sliced tuna or salmon, cashews, mango slices, avocado slices, and shredded nori.</li>
        <li>Drizzle Sriracha Mayo over the toppings.</li>
    </ul>

    <p><strong>7. Drizzle with Sauce and Garnish:</strong></p>
    <ul>
        <li>Spoon the sauce over the sushi bowl.</li>
        <li>Garnish with chopped chives for added freshness.</li>
    </ul>

    <p><strong>8. Enjoy:</strong></p>
    <ul>
        <li>Toss the ingredients together before eating to combine all the flavors.</li>
        <li>Enjoy your Sushi Bowl with Cucumber Salad and Sriracha Mayo, along with the refreshing Asian-Style Sesame Cucumber Salad!</li>
    </ul>
`,
        author: "Diego",
        author_image: "/assets/images/diego.jpg",
        image: "/assets/images/poke.jpg",
        date: new Date("2023-08-22"),
        category: "Main courses",
        tags: "bowls, asian, pescatarian, summer"
    },
    {
        id: 8,
        title: "My favorite chicken soup",
        content: `
    <h4>Ingredients:</h4>
    <ul>
        <li>Chicken broth</li>
        <li>4 chicken thighs</li>
        <li>1 onion, diced</li>
        <li>1-inch piece of ginger, grated</li>
        <li>1 teaspoon turmeric</li>
        <li>3 cloves garlic, minced</li>
        <li>2 carrots, sliced</li>
        <li>2 potatoes, diced</li>
        <li>1 cup cauliflower florets</li>
        <li>1/4 cup parsley, chopped</li>
        <li>1 cup shredded cabbage</li>
        <li>1 cup noodles of your choice</li>
        <li>Pepper to taste</li>
        <li>1 teaspoon coriander seeds</li>
        <li>1 teaspoon Ají panca (Peruvian red chili paste)</li>
    </ul>

    <h5>Recommended toppings:</h5>
    <ul>
        <li>Lime wedges</li>
        <li>Tajin seasoning</li>
        <li>Parsley</li>
    </ul>

    <h4>Instructions:</h4>

    <p><strong>1. Prepare the Chicken Broth:</strong></p>
    <ul>
        <li>Begin by preparing a flavorful chicken broth. Simmer chicken thighs with diced onions, grated ginger, turmeric, and minced garlic in the broth.</li>
    </ul>

    <p><strong>2. Add Vegetables and Noodles:</strong></p>
    <ul>
        <li>Once the broth is well-flavored, add sliced carrots, diced potatoes, cauliflower florets, and shredded cabbage to create a hearty and nutritious base.</li>
        <li>Include 1 cup of your favorite noodles to make the soup more substantial. Cook until the vegetables and noodles are tender.</li>
    </ul>

    <p><strong>3. Season the Soup:</strong></p>
    <ul>
        <li>Season the soup with salt, pepper, coriander seeds, and Ají panca for a delicious and aromatic flavor profile. Adjust the seasoning according to your taste preferences.</li>
    </ul>

    <p><strong>4. Prepare Toppings:</strong></p>
    <ul>
        <li>Serve the soup hot and top it with a squeeze of lime juice for a zesty kick. Sprinkle Tajin over the soup to add a hint of spice and a burst of citrusy flavor.</li>
    </ul>

    <p><strong>5. Garnish and Serve:</strong></p>
    <ul>
        <li>Garnish the soup with fresh parsley, lime juice, and tajin seasoning and enjoy this comforting and flavorful Chicken Soup!</li>
    </ul>
`,
        author: "Marcelle",
        author_image: "/assets/images/marcelle.jpg",
        image: "/assets/images/chicken-soup.jpeg",
        date: new Date("2023-08-08"),
        category: "Main courses",
        tags: "soup, winter, comfort"
    },
    {
        id: 9,
        title: "Mexican spicy pickled red onion",
        content: `

    <h4>Ingredients:</h4>
    <ul>
        <li>2 red onions</li>
        <li>15g salt</li>
        <li>100 ml lime juice</li>
        <li>30ml orange juice</li>
        <li>1 Habanero chile</li>
        <li>1g dried oregano</li>
    </ul>

    <h4>Instructions:</h4>

    <p><strong>1. Prepare the Onions:</strong></p>
    <ul>
        <li>Cut the red onions into 3mm rings.</li>
        <li>Transfer the onions to a bowl, season with salt, and energetically stir with hands. Leave aside for 10 minutes.</li>
    </ul>

    <p><strong>2. Prepare the Ingredients:</strong></p>
    <ul>
        <li>Meanwhile, juice the lime and oranges.</li>
        <li>Cut the Habanero chile in brunoise.</li>
    </ul>

    <p><strong>3. Pickling Process:</strong></p>
    <ul>
        <li>Cover the onions with the lime and orange juice.</li>
        <li>Add dried oregano and the diced Habanero chile.</li>
        <li>Transfer the mixture to a glass jar and cover.</li>
        <li>Let it macerate for at least 4 hours in the fridge.</li>
    </ul>

    <p><strong>4. Enjoy:</strong></p>
    <ul>
        <li>Retrieve from the fridge and enjoy your Mexican Spicy Pickled Red Onions as a topping for literally anything!</li>
    </ul>

`,
        author: "Gabriel",
        image: "",
        author_image: "/assets/images/gabriel.jpg",
        date: new Date("2023-11-16"),
        category: "Toppings",
        tags: "topping, mexican, spicy"
    }
];


