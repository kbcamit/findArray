var arr = [10, 22, 24, 5, 12, 50];

/* var found = arr.find(function(element) {
  return element > 10;
});

console.log(found); */

var trigger = 0;

function find(count) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      console.log(arr[i]);
      trigger++;
      if (trigger == count) {
        break;
      }
    }
  }
}

var result = find(2);
