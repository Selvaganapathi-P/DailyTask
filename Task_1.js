//electricity bill calculating

let units=120
let bill=0

if(units<=100){
    bill=units*1.5;
}
else if(units>=101 && units<=200){
    bill=units*2.5;
}
else if(units>=201 && units<=300){
    bill=units*4
}
else if(units>=301){
    bill=units*5
}
else{
    bill=0
}
console.log(bill)