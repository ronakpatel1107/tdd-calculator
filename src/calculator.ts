export function add(numbers:string){
    
    if(!numbers) return 0

    if (numbers.length === 1) return parseInt(numbers)

    const inputs = numbers.split(',')
    console.log(inputs)
    return parseInt(inputs[0])+ parseInt(inputs[1]
)    
}