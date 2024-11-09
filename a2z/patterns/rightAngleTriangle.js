
function prtRightAngleTriangle(n = 6) {
  let line = ''
  for (let i = 0; i < n; i++) {
    line += '*';
    console.log(line);
  }
}

// prtRightAngleTriangle();

function prtRightAngleTrianglePyramid(n = 6) {
  let line = ''
  for (let i = 0; i < n; i++) {
    line += (i+1);
    console.log(line);
  }
}


// let n = 5; 
// for (let i = 1; i <= n; i++) { 
//     let str = "* "; 
//     let space = '  '; 
//     console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// }
prtRightAngleTrianglePyramid()