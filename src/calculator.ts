export function add(numbers:string){
    
    if(!numbers) return 0

    const match = numbers.match(/^\/\/(.+)\n(.*)/);

    if(match){
        let delimiters = match[1]
        numbers = numbers.substring(4).replace(delimiters,',') 
    }

    const inputs = numbers.replace(/\n/g,',').split(',')

    return inputs.map(number => parseInt(number)).reduce((a, b) => a + b, 0)
       
}