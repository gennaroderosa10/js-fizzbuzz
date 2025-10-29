// DATI
// tutti i numeri da 1 a 100
// ESECUZIONE LOGICA
// 1 creo un ciclo for che mi stampa tutti i numeri da 1 a 100
// 2 altro else if in cui i numeri divisibili sia per 3 che per 5 si chiamano fizzbuzz
// 3 creo un if in cui tutti i numneri divisibili per 3 si chiamano Fizz
// 4 creo un else if in cui tutti i numeri divisibili per 5 si chiamano buzz
//  

for (let i = 1; i <= 100; i++) {
    let resoult = ""
    if (i % 3 === 0 && i % 5 === 0) {
        resoult = "FizzBuzz"
    } else if (i % 3 === 0) {
        resoult = "Fizz"
    } else if (i % 5 === 0) {
        resoult = "Buzz";
    } else {
        resoult = i

    }
    console.log(resoult);

} 