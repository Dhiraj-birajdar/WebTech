// 1.Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
let max = 0;
let nums = prompt("Enter 5 numbers: ").split(" ");
for (let i = 0; i <= 4; i++) {
    if (max < parseInt(nums[i]))
        max = parseInt(nums[i])
}
document.write("max : " + max)


// 2.Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
for (let i = 0; i <= 15; i++) {
    document.write(`${i} is ${i % 2 === 1 ? 'even' : 'odd'} <br>`)
}
// _______________________________________________________________________________________________________________________________

// 3.Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Bizz". For numbers multiples of both three and five print "FizzBizz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0)
        document.write('FizzBizz')
    else if (i % 3 === 0)
        document.write('Fizz')
    else if (i % 5 === 0)
        document.write('Bizz')
    else
        document.write(i)
    document.write('<br>')
}

// ______________________________________________________________________________________________________________________________
// 4 - Design Half Faulty Calculator-

// Design a calculator which will correctly solve all the problems except
// # the following ones:

// # 45 * 3 = 555, 56+9 = 77, 56/6 = 4

// # Your program should take operator  and the two numbers as input from the user
// # and then return the result
function faultyCalc() {
    let exp = prompt("Enter expression : ")
    if (exp === '45 * 3') return 555;
    if (exp === '56 + 9') return 77;
    if (exp === '56 / 6') return 4;

    let n1 = parseInt(exp.split(" ")[0])
    let op = exp.split(" ")[1]
    let n2 = parseInt(exp.split(" ")[2])

    switch (op) {
        case '+': return n1 + n2;
            break;
        case '*': return n1 * n2;
            break;
        case '/': return n1 / n2;
            break;
        case '-': return n1 - n2;
            break;
        default: return alert("Enter valid operator")
    }
}
// ___________________________________________________________________________________________________________________________

// 5.To ask user that how many days in a leap year.
// 	a. if user will get correct ans -
//         then print "You have cleared the first level" and ask again another que "What month has an extra day in leap year?" if user will      	get correct answer then display message "Congratulations !!You have cleared the test" otherwise "You have failed the test".

// b.otherwise print following msg-

//       "Your input is wrong, please try again."



// ________________________________________________________________________________________________________________________________











// 2.Write a Python program to find the eligibility of admission for a professional course based on the following criteria:
// Marks in Maths >=65
// Marks in Phy >=55
// Marks in Chem>=50
// Total in all three subject >=180

// _______________________________________________________________________________________________________________________________

// ________________________________________________________________________________________________________________________________________________
// 4. Write a JavaScript program to sum 3 and 5 multiples under 1000.
let sum = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0)
        sum += i;
}
document.write(sum);
// ___________________________________________________________________________________________________________________________________

// 5.Write a JavaScript program to find the Armstrong numbers of 3 digits.
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371.

