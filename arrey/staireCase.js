function staircase(n) {

    // here we use just one for loop where i tracks the number of rows
    // the number of rows (i) should be less than or equal to n
      for (let i = 1; i <= n; i++) {
        // print out a " " n-i times and append a # i times
        // console log adds a new line by default
        
          console.log(" ".repeat(n-i) + "#".repeat(i))
      }    
  }


  staircase(5)