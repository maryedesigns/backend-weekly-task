
// Question number 1 solution
let admin;
let guest;

guest = "John";
admin =  guest;

console.log(admin);

//Question number 2 solution
for(i = 1; i <= 100; i++) {

    console.log(i);

}

//Question number 3 solution
function min(a,b){

    if(a < b){
        return a;
    }    

    else {
        return b;
    }
} 

console.log(min(2,5));

//Question number 4 solution
 let arr = [ ];
 for(i = 1; i <=100; i++){
     arr.push(i);
 }

for (i = 0; i < arr.length; i++){
    if(arr[i] % 3 === 0 && arr[i] % 5 === 0){
        arr[i] = "FizzBuzz";
    }

    else if(arr[i] % 5 === 0){
        arr[i] = "Buzz";
    }
    else if(arr[i] % 3 === 0){
        arr[i] = "Fizz";
    }
    else{
        arr[i] = arr[i];
    }

    console.log(arr[i]);
}
    


   