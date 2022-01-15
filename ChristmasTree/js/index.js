var args = process.argv.slice(2);

creteTree = (n) => {
    var white_space = 0
    for(var i = 0;i<n;i++){
        white_space = (2*i+1);
        console.log(" ".repeat((n - (i + 1))) + "*".repeat(white_space));       
    }   
    console.log(" ".repeat(white_space/2) + '|');    
}

creteTree(args[0]);