// Finding the largest number from the given array

const age = [40,48,70,87,56,43,57]
let largest = age[0]
for (const num of age)
{
    if(num > largest)
    {
        largest = num
    }
}
console.log(`Most Senior: ${largest}`)