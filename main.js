document.addEventListener("DOMContentLoaded", function() { 

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

  var cookPotBox = document.querySelector('.cookPotBox');
  var letsCookButton = document.querySelector('.letsCookButton');
  var index = 0;

  letsCookButton.addEventListener('click', function(event) {
    event.preventDefault(); 
    var randomCourse = chooseRandomCourse();
    var randomCourseItem = randomCourse[index];

    // Increment the index
    index = (index + 1) % randomCourse.length;

    cookPotBox.innerHTML = '<p>' + randomCourseItem + '</p>';
  });

  function chooseRandomCourse() {
    var random = index % 3;
    if (random === 0) {
      return desserts;
    } else if (random === 1) {
      return sides;
    } else {
      return mains;
    }
  }
});