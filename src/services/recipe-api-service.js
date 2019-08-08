// import config from '../config'

const RecipeApiService = {
  getRecipes() {
        return (
            [
                {
                  'id': 0,
                  'title': 'Rotisserie Chicken Panzanella',
                  'serves': 4,
                  'prep_time': '10 minutes',
                  'cooking_time': '12 minutes',
                    'ingredients': '1/2 loaf sourdough boule or similar rustic bread\n4 tablespoons extra- virgin olive oil, divided\n1 / 2 small red onion, thinly sliced\n2 ears corn, husks removed\n3 to 4 medium colorful heirloom tomatoes, cut into wedges\n1 rotisserie chicken\n1 tablespoon plus 1 teaspoon balsamic vinegar\n1 / 4 teaspoon freshly ground black pepper, plus more as needed\nFlaky salt, such as Maldon, or kosher salt\n1 / 2 bunch fresh basil',
                  'instructions': 'Arrange a rack in the middle of the oven and heat the oven to 375°F. Cut the 1/2 loaf of bread into cubes. Place on a rimmed baking sheet, drizzle with 2 tablespoons of the olive oil, and toss to coat. Arrange in a single layer. Bake, turning as needed, until golden-brown on all sides, 10 to 12 minutes. Meanwhile, prepare the remaining ingredients. Thinly slice the 1/2 small red onion and cut the kernels from the 2 ears of corn; place together in a medium bowl. Cut the 3 to 4 tomatoes into wedges. Remove the meat from the chicken (save the rest to make stock), then slice into 1/4-inch thick pieces. Place the 1 tablespoon plus 1 teaspoon balsamic vinegar, remaining 2 tablespoons olive oil, 1/4 teaspoon black pepper, and a pinch of salt in a small jar. Seal and shake vigorously until emulsified, about 20 seconds. Arrange the chicken, tomato wedges, and toasted bread on a platter. Scatter the corn and sliced red onion over the top. Drizzle with the dressing. Tear the leaves from the 1/2 bunch basil over the salad. Season with more salt and pepper as needed. Toss and eat immediately.',
                  'notes': 'Make ahead: The tomatoes, corn, and red onion can be prepped and stored in separate containers 1 day in advance.'
                },
                {
                    'id': 1,
                    'title': 'Spicy Dorito® Taco Salad',
                    'serves': 4,
                    'prep_time': '25 minutes',
                    'cooking_time': '10 minutes',
                    'ingredients': '1 pound ground beef<br>1/2 teaspoon garlic powder<br>1/2 teaspoon chili powder<br>1/4 teaspoon ground black pepper<br>1 head lettuce, chopped<br>5 cups crushed nacho cheese-flavored tortilla chips<br>2 cups shredded Colby-Jack cheese<br>1 (15 ounce) can dark red kidney beans, drained and rinsed',
                    'instructions': 'Cook ground beef, garlic powder, chili powder, and black pepper together in a skillet over medium heat until meat is brown and crumbly, about 10 minutes, breaking the meat up into chunks as it cooks. Drain excess grease, remove from heat, and let the meat cool. Toss lettuce, tortilla chips, Colby-Jack cheese, kidney beans, tomato, onion, and pickled jalapeno peppers in a large salad bowl; mix in the beef. Whisk vegetable oil, sugar, ketchup, taco seasoning, cider vinegar, and Worcestershire sauce together in a bowl until sugar has dissolved; pour dressing over the salad and toss again.',
                    'notes': ''
                  }
            ]
   )
  },
  getRecipe(recipeID) {
      let Recipes = this.getRecipes();
      return (Recipes[recipeID]);
  }
}

export default RecipeApiService
