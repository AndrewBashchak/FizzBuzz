// for loop & function v2
function fizzbuzz(number) {
    if (number % 3 === 0) {
        if (number % 5 === 0) {
            return "FizzBuzz";
        }
        return "Fizz";
    }

    if (number % 5 === 0) {
        return "Buzz";
    }

    return number;
}

for (let i = 1; i <= 100; i++) {
    console.log(fizzbuzz(i))
}
