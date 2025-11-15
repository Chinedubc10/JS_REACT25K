/* 
Write a function named getAnimalDescription:
Take a parameter favoriteAnimal.
Use a switch statement to:
If "fox", return "Foxes are sly and smart!"
If "dog", return "Dogs are loyal friends."
If "cat", return "Cats are curious and independent."
For any other animal, return "All animals are awesome!"
Call the function with different animal names. 
*/

const getAnimalDescription = (favoriteAnimal) => {
  if (favoriteAnimal === "fox") {
    console.log("Foxes are sly and smart!");
  } else if (favoriteAnimal === "dog") {
    console.log("Dogs are loyal friends.");
  } else if (favoriteAnimal === "cat") {
    console.log("Cats are curious and independent.");
  } else {
    console.log("All animals are awesome!");
  }
};

getAnimalDescription("fox");
getAnimalDescription("dog");
getAnimalDescription("cat");
getAnimalDescription();


/*Alternative*/

function getAnimalDescription(animal) {
  const messages = {
    fox: "Foxes are sly and smart!",
    dog: "Dogs are loyal friends.",
    cat: "Cats are curious and independent.",
  };

  console.log(messages[animal] || "All animals are awesome!");
}

getAnimalDescription("fox");
getAnimalDescription("dog");
getAnimalDescription("cat");
getAnimalDescription();
