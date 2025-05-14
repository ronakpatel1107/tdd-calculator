export function add(numbers:string){
    
    if(!numbers) return 0

    let delimiterPattern = /,|\n/; // default delimiter
    let inputs = numbers;
    const match = numbers.match(/^\/\/(.+)\n(.*)/);

    if(match){
        let delimiters = match[1]
        delimiterPattern = new RegExp(delimiters); // support single or multiple character delimiter
        inputs = match[2];
    }

    const parsedNumbers = inputs
        .split(delimiterPattern)
        .map(number => parseInt(number));

    const negativeNumbers = parsedNumbers.filter(n => n < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed`);
    }

    return parsedNumbers.reduce((a, b) => a + b, 0);
    }