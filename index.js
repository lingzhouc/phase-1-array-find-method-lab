// data for denver broncos football team
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
  ]
  
  // return year when win occurred
  // return undefined if no win found

function superbowlWin(arrayObject) {
    let win = arrayObject.find(obj => obj.result === "W")
    // checking if win is true; true if not undefined
    if (win) {
      return win.year;
    }
    // returning undefined if no win
    return win;
}

console.log(superbowlWin(record));

