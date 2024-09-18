function printRectangle(rows, columns){
    for(let i = 1; i<= rows; i++){
        let row = "*".repeat(columns);
        console.log(row);
    }
}

printRectangle(5, 5);