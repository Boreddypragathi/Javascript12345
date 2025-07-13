/*let Comapanies=["Bloomberg","Microsoft","Uber","Google","Amazon"];
Comapanies.shift("Bloomberg");
Comapanies.splice(2,1,"OLA");
Comapanies.push("Apple");
console.log(Comapanies);*/

/*console.log("apple".toUpperCase());
function myFunction()
{
    console.log("This is function class");
    console.log("Welcome to JS");  
}
myFunction();
//myFunction();
function myFunctionmsg(msg)
{
    console.log(msg);
}
myFunctionmsg("This is my first function with parameter");

function add(a,b)
{
    //a,b are local variables scope is with in the function
    sum=a+b
    //console.log(`The sum of ${a} and ${b} is ${sum}`);
    return sum
}
add(4,7);

function mul(a,b)
{
    return a*b;
}
     const arrowsum= (a,b) =>{
        console.log(a+b);
     }*/

     const printhello = () => console.log("Hello World");
        printhello();

        function findowels()
{
    let vowels = "pragathi";
    let count = 0;
    for(let i = 0; i < vowels.length; i++)
    {
        if(vowels[i] == "a" || vowels[i] == "e" || vowels[i] == "i" || vowels[i] == "o" || vowels[i] == "u")
        {
            count++;
        }
    }
    console.log(`The number of vowels in ${vowels} is ${count}`);
}
/*findowels();
const findVowels = (str) => {
    let count = 0;
    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
        {
            count++;
        }
    }
    console.log(`The number of vowels in ${str} is ${count}`);
}

let Arr=[1,2,4,5,6,7,8,9];
Arr.forEach(function printval(val)
{
    console.log(val);
})
Arr.forEach((val,index,Arr) => {
    console.log(`Value at index ${index} is ${val}`);
})

let numbers = [1, 2, 3, 4, 5];
let evennumbers=numbers.filter((num) => {
    return num %2==0;
});
console.log(evennumbers);   

let arr2=[1,2,4,5,6,7,8,9];
const output=arr2.reduce((res,Curr) => {
    return res + Curr;
});
console.log(output);
*/
let marks3=[23,67,89,90,99];
marks3.filter((mark) => {
     return mark>90;
})
let n=prompt("Enter a number");
let arr=[];
for(let i=1;i<=n;i++)
{
    arr[i-1]=i;
}
console.log(arr);