// Print all positions of a numeric array
function loopArray() {
  // Code goes here

  if(array.length == 0)
    return array;
  
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
let array = [1, 2, 3, 4];

loopArray(array);

  function evenNumbers(array){
    let i = 0;
    newArray = [];

    if(array.length == 0) {
      return array;
    }

    while(i < array.length){
      if(array[i] % 2 == 0){

        console.log(array[i]);
        newArray.push(array[i]);
      }
      i++;
    }
    return newArray;
  }

  let myarray = [1, 2, 3, 4, 5, 6];
  console.log(evenNumbers(myarray));