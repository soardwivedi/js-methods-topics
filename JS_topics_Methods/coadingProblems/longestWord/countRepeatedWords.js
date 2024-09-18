// function countWords(str){
//    let splitStr = str.split('');
// let letterCount = 0;
// let letter = '';
// for (let i = 0; i < str.length; i++){
// let count = 0;

// for (let j =0; j< str.length; j++){
// if (str[i] == str[j] && i > j){
//     break;
// }
// if (str[i] == str[j]) {
//     count++
// }
// if (count > 0){
//     console.log(`${count} ${str[i]}`);
// }
// }
// }
// }


	// function that count character occurrences in string
	function count_occur( str ){
	// checking string is valid or not
	if( str.length == 0 ){
		console.log("Invalid string")
		return;
	}
	//for loop to iterate over string
	for( let i = 0 ;i < str.length ;i++){
		//variable counting occurrence
        console.log(i);
		let count = 0;

		for( let j = 0 ;j < str.length ;j++){ 
		if( str[i] == str[j] && i > j ){
		break;
		}

		if( str[i] == str[j] ){
			count++;
		}
		}
		if( count > 0)
		console.log(`${count}${str[i]}`);	
	}
	}
	
	// test string
	let test_str = "gfghello";
	count_occur( test_str);

