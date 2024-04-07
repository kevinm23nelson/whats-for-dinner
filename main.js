 var desserts = [
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
  
    var sides = [
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
  
    var mains = [
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
  
   


document.addEventListener('DOMContentLoaded', function() {
    
    var cookPotBox = document.querySelector('.cookPotBox'); 
    var letsCookButton = document.querySelector('.letsCookButton'); 
    letsCookButton.addEventListener('click', function(event) {
      event.preventDefault(); 
      var selectedOption = document.querySelector('input[name="courses"]:checked');
      if (!selectedOption) {
        return;
      }
      var randomDessert, randomMainDish, randomSide;
      if (selectedOption.value === 'entire Meal') {
        randomDessert = getRandomCourseItem(desserts);
        randomMainDish = getRandomCourseItem(mains);
        randomSide = getRandomCourseItem(sides);
        cookPotBox.innerHTML = "<p class='cookBoxSingleCourseTitle'>You should make: </p><p>" + randomMainDish + " with a side of " + randomSide + " and " + randomDessert + " for dessert!</p>";
                                                      
      } else {
        var courseArray;
        if (selectedOption.value === 'dessert') {
          courseArray = desserts;
        } else if (selectedOption.value === 'main dish') {
          courseArray = mains;
        } else if (selectedOption.value === 'side') {
          courseArray = sides;
        } else {
          courseArray = []; 
        }
        var randomCourseItem = getRandomCourseItem(courseArray);
        cookPotBox.innerHTML = "<p class='cookBoxTitle'>You should make:</p> <p>" + randomCourseItem + "!" + "</p>";
      }
    });
  });
  function getRandomCourseItem(array) {
    if (!array || array.length === 0) {
      return '';
    }
    var randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
