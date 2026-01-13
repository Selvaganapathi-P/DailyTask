let str="haah";
let rev=""
for(let i=str.length-1;i>=0;i--){
    rev+=str[i];
}
if(str===rev){
    console.log("It's palindrome")
}
else{
    console.log("not palindrome")
}
console.log(rev)