//myCode

const getRow = (puzzle,rowIndex) => {//Row Function to go through puzzle and find "searchvalue=rowIndex" and bring back what's in rowIndex
  return puzzle[rowIndex]; // Similar to [][] in class where we are calling out first array = puzzle and then second array inside puzzle = rowIndex
};

const getColumn = (puzzle,columnIndex) => { // Column Function to go through puzzle and find "searchvalue=columnIndex" and bring back
    let columnArr = []; // need to assign new array to grab numbers since column isn't array

  for(i = 0; i < puzzle.length; i++){ // looping to go through total puzzle.length for each row to start.
    columnArr.push(puzzle[i][columnIndex]); // pushing into new array using puzzle for row and another array to go deeper similar to let puzzleArray = puzzle[0][1] from class.
  }
  return columnArr;
};

const getSection = (puzzle, x, y) => { // using x and y 
  let sectionArr = []; // turning this into a grid/array of numbers being selected 
 
  x *= 3; // these are offsetting it to give me the starting point to represent (0,1) for example to start section 3x3 subgrid = 0, 1, 2 = row 0, row 3, row 6
  y *= 3;// these are offsetting it to give me the starting point to represent (0,1) for example to start section 3x3 subgrid = 0, 1, 2 = column 0, column 3, column 6

  for (let i = x; i < x + 3; i++) { // looping through 3 numbers due to +3 for x = rows = starting points of subgrid
    for (let j = y; j < y + 3; j++) { //looping through 3 numbers due to +3 for y = columns = starting points of subgrid
      sectionArr.push(puzzle[i][j]);
      }
  }
  return sectionArr;
};

const includes1to9 = (numArray) => {  
  for (let i = 1; i <= 9; i++){ //loop through a new array for 1-9
      let found = false     // assign a variable to false
      for(let j = 0; j <=  numArray.length; j++){ //loop through values in array start wth first index.
        let value = numArray[j] // assign the value of the index's
        if(value === i){ // if value found is same as I then i should be considered true
          found = true
          break
        }
      } 
      if(!found){ // if value was not found true / value===i, then stop all process and return false
        return false
      }
    }
    return true
}

const sudokuIsValid = (puzzle) => {
  // let checks = [] // new array to copy puzzle for verification.
    let isValid = true
  for(let i = 0; i < 9; i++){
    let rowValid = includes1to9(getRow(puzzle,i)); // telling me if all the numbers from getRow = 1 through 9 no duplicates
    if(!rowValid){
      isValid = false;
      break
    }
    let columnValid = includes1to9(getColumn(puzzle,i)) // telling me if all the numbers from getColumn = 1 through 9 no duplicates
    if(!columnValid){
      isValid = false;
      break
    }
  }
  for(let x = 0; x <= 3; x++){
    for(let y = 0; y <=3; y++){
      let sectionValid = includes1to9(getSection(puzzle,x,y))
      if(!sectionValid){
        isValid = false;
       break
      }
    }
  }
  return isValid
}


let puzzle = [
  [8, 9, 5,   7, 4, 2,   1, 3, 6],
  [2, 7, 1,   9, 6, 3,   4, 8, 5],
  [4, 6, 3,   5, 8, 1,   7, 9, 2],

  [9, 3, 4,   6, 1, 7,   2, 5, 8],
  [5, 1, 7,   2, 3, 8,   9, 6, 4],
  [6, 8, 2,   4, 5, 9,   3, 7, 1],

  [1, 5, 9,   8, 7, 4,   6, 2, 3],
  [7, 4, 6,   3, 2, 5,   8, 1, 9],
  [3, 2, 8,   1, 9, 6,   5, 4, 7],
];

// getRow(puzzle, 8);
// // // -> [ 3,2,8,1,9,6,5,4,7 ]

// getRow(puzzle, 0);
// // // -> [ 8,9,5,7,4,2,1,3,6 ]

// getColumn(puzzle, 0);
// // // -> [ 8,2,4,9,5,6,1,7,3 ]

// getColumn(puzzle, 8);
// // // -> [ 6,5,2,8,4,1,3,9,7 ]

// getSection(puzzle, 2, 2);
// // // -> [ 8,9,5,2,7,1,4,6,3 ]

// // // This grabs the values from column 0 and row 1 (second from the top left)
// getSection(puzzle, 0, 1);
// // -> [ 7,4,2,9,6,3,5,8,1 ]

includes1to9([1,2,3,4,5,6,7,8,9]) // => true

includes1to9([1,1,2,3,4,5,6,7,8]) // => false (no 9)

sudokuIsValid(puzzle);
// => true

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

sudokuIsValid(p8zzle);
// => false


