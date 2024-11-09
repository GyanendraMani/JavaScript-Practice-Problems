console.log("start square");

function prtSquare(n = 6) {
  for (let i = 0; i < n; i++) {
    let line = ''
    for (let j = 0; j < n; j++) {
      line += "*"
    }
    console.log(line)
  }
}

prtSquare();