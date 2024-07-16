//Finding sum of odd numbers from given Array

const Oddnumbers =[5,1,11,7,9,23,15]

let sum = 0;

for(let i=0; i<Oddnumbers.length; i++){
    if(Oddnumbers[i] %2==1){
        sum+= Oddnumbers[i]
    }
}
console.log(`Total: ${sum}`)       