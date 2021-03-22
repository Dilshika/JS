function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  var length=arr.length;
  for(var i=0;i<length;i++){
    for(var j=0;j<arr[i].length;j++){
      product*=arr[i][j];
    }
    
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);