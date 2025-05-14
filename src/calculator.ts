export function add(numbers:string){
    
    if(!numbers) return 0

    if(numbers.startsWith('//')){
       numbers = numbers.substring(4).replace(';',',') 
    }

    const inputs = numbers.replace(/\n/g,',').split(',')

    return inputs.map(number => parseInt(number)).reduce((a, b) => a + b, 0)
       
}