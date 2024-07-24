function displayRecipe(response) {
  console.log("Generating recipe");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions").value;
  let apiKey = "628atfa04eb144c5fo14f703eb967e76";
  let context =
    "You are an AI baking recipe generator designed to create unique and delicious baking recipes. You have access to a wide range of ingredients and baking techniques, and you are skilled in creating recipes for various types of baked goods, including cakes, cookies, breads, pastries, and more. Your goal is to provide detailed, easy-to-follow recipes that can be made with common kitchen tools and ingredients. Please create a name for the recipe. The name of the recipe is inside a <strong> and separate it with a <br />. The ingredients are inside a <em>. Separate the ingredients using a <br />. Separate the instructions using a <br />. Make sure to follow the user instructions";
  let prompt = `User instructions: Create a short but detailed baking recipe for ${instructionsInput}. The recipe should include a list of ingredients, step-by-step instructions, and any special tips or variations that can enhance the final product`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating a baking recipe for "${instructionsInput}"</div>`;

  console.log("Generating recipe");
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
