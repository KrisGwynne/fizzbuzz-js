const readline = require('readline');

// Here, we create our main function.
function fizzbuzz(max) {
  

    for (let i = 1; i < max + 1; i++) {

        //Create a blank array that each word will be added to
        let arr = [];

        
        if (i % 3 == 0) {
            arr.push('Fizz')    //If the number is divisble by 3 the add Fizz to the end
        }
        if (i % 5 == 0) {
            arr.push('Buzz')    //If the number is divisble by 5 the add Buzz to the end
        }     
        if (i % 7 == 0) {
            arr.push('Bang')    //If the number is divisble by 7 the add Bang to the end
        }
        if (i % 11 == 0) {  
            arr = ['Bong']      //If the number is divisble by 11 then replace the array with Bong only!
        }
        if (i % 13 == 0) {
            if (arr[0] == 'Fizz') {
                arr.splice(1,0,'Fezz')  //If the number is divisble by 13 and the first element is Fizz add Fezz in as the second element
            } else {
                arr.splice(0,0,'Fezz')  //Otherwise add Fezz in at the start
            }
        }
        if (i % 17 == 0) {
            arr.reverse();      //If the number is divisble by 17 then reverse the array
        }
        

        let string = '';

        //Concatenate the array into a string
        for (let i = 0; i < arr.length; i++) {
            string += arr[i];
        }

        if (string != '') {
            console.log(string);
        } else {
            console.log(i);
        }
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.question('Please enter the maximum number:', (max) => { 
    rl.question('What rules do you want to implement? i.e 3, 5, 7 etc: ', (rules) => {

        console.log(`Implementing rules ${rules}`);
        
        

        fizzbuzz(parseInt(max));
        console.log(`This is FizzBuzz up to ${max}`);
        rl.close();
    });
});

