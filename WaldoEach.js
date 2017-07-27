// The second argument/parameter is expected to be a function
var findWaldo = ["Alice", "Bob", "Waldo", "Winston"];


findWaldo.forEach(function(element, i) {
  if (element === "Waldo") {
    // var index = 0
    // index = index +1
console.log("Found him at " + i);
}

});


// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       index = i
//       found();   // execute callback


//     }
//   }
// }

// function actionWhenFound() {
//   console.log("Found him at index " + index + "!");
// }

