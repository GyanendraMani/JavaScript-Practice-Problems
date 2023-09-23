function sumRange(num){
    if(num === 1) return 1; 
    console.log("printing num", num)
    return num + sumRange(num-1);
 }
  
 console.log("printing  sumRange:",  sumRange(4))   
                                    
                                 