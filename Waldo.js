// The second argument/parameter is expected to be a function
var index = "0"

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      index = i
      found();   // execute callback


    }
  }
}

function actionWhenFound() {
  console.log("Found him at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);