const promt = require('prompt-sync')();
const colors = require('colors');
try {
    /* const number1 = promt(colors.rainbow('ENTER NUMBER 1 : '))
     const number2 = promt(colors.rainbow('ENTER NUMBER 2 : '))
     const number_1 = parseInt(number1)
     const number_2 = parseInt(number2)
     const result = number_1 + number_2
         //const _1 = 1
         //console.log(colors.rainbow(result))
     console.log(result) */
    console.log('1 = บวก 2 = ลบ 3 = คูณ 4 = บวก 5 = หาร')
    const method = promt(colors.rainbow('ENTER METHOD : '))
    if (method === '1') {
        const number1 = promt(colors.rainbow('ENTER NUMBER 1 : '))
        const number2 = promt(colors.rainbow('ENTER NUMBER 2 : '))
        const number_1 = parseInt(number1)
        const number_2 = parseInt(number2)
        const result = number_1 + number_2
        console.log(result)
    } else if (method === '2') {
        const number1 = promt(colors.rainbow('ENTER NUMBER 1 : '))
        const number2 = promt(colors.rainbow('ENTER NUMBER 2 : '))
        const number_1 = parseInt(number1)
        const number_2 = parseInt(number2)
        const result = number_1 - number_2
        console.log(result)
    } else if (method === '3') {
        const number1 = promt(colors.rainbow('ENTER NUMBER 1 : '))
        const number2 = promt(colors.rainbow('ENTER NUMBER 2 : '))
        const number_1 = parseInt(number1)
        const number_2 = parseInt(number2)
        const result = number_1 * number_2
        console.log(result)
    } else if (method === '4') {
        const number1 = promt(colors.rainbow('ENTER NUMBER 1 : '))
        const number2 = promt(colors.rainbow('ENTER NUMBER 2 : '))
        const number_1 = parseInt(number1)
        const number_2 = parseInt(number2)
        const result = number_1 + number_2
        console.log(result)
    } else if (method === '5') {
        const number1 = promt(colors.rainbow('ENTER NUMBER 1 : '))
        const number2 = promt(colors.rainbow('ENTER NUMBER 2 : '))
        const number_1 = parseInt(number1)
        const number_2 = parseInt(number2)
        const result = number_1 / number_2
        console.log(result)
    } else {
        console.log('method error try again Good Bye')
            //const method = promt(colors.rainbow('ENTER METHOD'))

    }

} catch (e) {
    console.log(e)
}