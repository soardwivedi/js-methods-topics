//closure
// anonymous function below.
var sum = function(a,b,c){
  
    return {
        getSumTwo: function(){
            return a+b;
        },
        getSumThree: function(){
            return a+b+c;
        }
    }
    
    }
var store = sum(3,4,5); //calling
   console.log(store.getSumTwo());
   console.log(store.getSumThree());