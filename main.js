 const desserts = [
      'Apple Pie',
      'Lemon Meringue Pie',
      'Black Forest Cake',
      'Banana Bread',
      'Peach Cobbler',
      'Cheesecake',
      'Funfetti Cake',
      'Baklava',
      'Flan',
      'Macarons',
      'Macaroons',
      'Chocolate Cupcakes',
      'Pavlova',
      'Pumpkin Pie',
      'Key Lime Pie',
      'Tart Tatin',
      'Croissants',
      'Eclairs'
    ];
  
    const sides = [
      'Miso Glazed Carrots',
      'Coleslaw',
      'Garden Salad',
      'Crispy Potatoes',
      'Sweet Potato Tots',
      'Coconut Rice',
      'Caeser Salad',
      'Shrimp Summer Rolls',
      'Garlic Butter Mushrooms',
      'Hush Puppies'
    ];
  
    const mains = [
      'Spaghetti and Meatballs',
      'Pineapple Chicken',
      'Shakshuka',
      'Thai Yellow Curry',
      'Bibimbap',
      'Chicken Parmesan',
      'Butternut Squash Soup',
      'BBQ Chicken Burgers',
      'Ramen',
      'Empanadas',
      'Chicken Fried Rice',
      'Sheet Pan Fajitas',
      'Margarita Pizza'
    ];
  
   
// When the document content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to important elements
    var cookPotBox = document.querySelector('.cookPotBox'); // The box where we'll display the chosen course
    var letsCookButton = document.querySelector('.letsCookButton'); // The button that triggers the cooking process
  
    // Add an event listener to the "Let's Cook!" button
    letsCookButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get the selected course type (dessert, main dish, or side)
      var selectedOption = document.querySelector('input[name="courses"]:checked');
      
      // If no course type is selected, do nothing
      if (!selectedOption) {
        return;
      }
  
      // Based on the selected course type, choose a random course from the respective array
      var courseArray;
      if (selectedOption.value === 'dessert') {
        courseArray = desserts;
      } else if (selectedOption.value === 'main dish') {
        courseArray = mains;
      } else if (selectedOption.value === 'side') {
        courseArray = sides;
      } else {
        courseArray = []; // If none of the valid options are selected, set the course array to an empty array
      }
  
      // Display the randomly chosen course in the cook pot box
      var randomCourseItem = getRandomCourseItem(courseArray);
      cookPotBox.innerHTML = '<p>' + randomCourseItem + '</p>';
    });
  });
  
  // Function to get a random item from an array
  function getRandomCourseItem(array) {
    // If the array is empty, return an empty string
    if (array.length === 0) {
      return '';
    }
    // Generate a random index within the range of the array length
    var randomIndex = Math.floor(Math.random() * array.length);
    // Return the item at the random index
    return array[randomIndex];
  }