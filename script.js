// function chacha(num){
//     if (num % 2 === 0) {
//         console.log("even");
//     }
//     else{
//         console.log("odd");
        
//     }
// }
// chacha(4);
// function dada(n){
//     for (let i = 1; i <= n; i++) {
//         if(i % 2 === 0){
//             console.log(i);
        
//         }
//     }
// }
// dada(10);
// let name = "areef"
// let repoCount = 3
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// let name = new String ('areef')
// console.log(name.toUpperCase());
// function countEven(a){
//     let count = 0
//     for(let i = 0; i < a.length; i++){
//         if(a[i] % 2 === 0){
//             count++;
//         }
//     }
//     return count;
    
// }
// let finalresult = (countEven([1,2,3,4,5,6,7,8]));
// console.log(finalresult);

// function multiplyArray(number){
//     let multiply = 1;
//     for(let a = 0; a < number.length; a++){
//             multiply = multiply * number[a]
//     }
//     console.log(multiply);
// }
// multiplyArray([2,3,4]);
// function multiplyArrayValues(areef){
//     let b = [];
//     for(let c = 0; c < areef.length; c++){
//         b.push(areef[c] * 2)
//     }
//     console.log(b);
    
// }
// multiplyArrayValues([1,2,3,4,5]);
// function envenNumbers(ee){
//     let blankarray = []
//     for(let f = 0; f < ee.length; f++){
//         if(ee[f] % 2 === 0){
//             blankarray.push(ee[f])
//         }
//     }
//     console.log(blankarray);
    
// }
// envenNumbers([1,2,3,4,5,6]);
// function reverseaArray(ww){
//     let blankarray2 = []
//     for(let e = ww.length - 1; e >= 0; e--){
//         blankarray2.push(ww[e])
//     }
//     console.log(blankarray2);
    
// }
// reverseaArray([1,2,3,4,5])
// function maxnumber(aa){
//     let max = aa[0]
//     for(let z = 1; z < aa.length; z++){
//         if(aa[z] > max){
//             max = aa[z];
//         }
//     }
//     console.log(max);
    
// }
// maxnumber([1,24,56,35,23])
// function addArray(adding){
//     let sum = 0
//     for(let k = 0; k < adding.length; k++){
//         sum += adding[k]
//     }
//     let average = sum / adding.length
//     return average;
    
// }
// let finalaverage = (addArray([10,20,30,40]));
// console.log(finalaverage);




// ========27-Oct-2026========= 
// function arrayValueFind(v1, v2){
//     for(let g = 0; g < v1.length; g++){
//         if(v1[g] === v2){
//             return "true"
//         }
        
//     }
//     return "false"
// }
// let arrnumbers = [10,20,40,30,50]
// console.log(arrayValueFind(arrnumbers, 30));
// // console.log(arrayValueFind(arrnumbers, 99));
// function findIndex(a1, a2){
//     for(let n = 0; n < a1.length; n++){
//         if(a1[n] === a2){
//             return n
//         }
//     }
//     return -1
// }
// let arrnumbers2 = [10,33,45,67,35,2]
// let result1 = findIndex(arrnumbers2, 45)
// console.log(result1);
// let result2 = findIndex(arrnumbers2, 99)
// console.log(result2);
// function findMax(maxnumber){
//     let maxNo = 0
//     for(let m = 1; m < maxnumber.length; m++){
//         if(maxnumber[m] > maxNo){
//             maxNo = maxnumber[m]
//         }
//     }
//     return maxNo
// }
// let maxnumbers = findMax([12,74,2,45])
// console.log(maxnumbers);
// const addition = (c, f) =>{
//     return c + f
// }
// let finalAddition = addition(2, 5)
// console.log(finalAddition);
// const square = (num1, num2) => num1 * num2 
// let squareValue = square(3, 2)
// console.log(squareValue);
// const calcArea = (length, width) => length * width
// let calcAreaValue =  calcArea(23, 10)
// console.log(calcAreaValue);
// const isEven = (evennumber) =>{
//         if(evennumber % 2 === 0){
//             return "true"
//         }
//         else{

//             return "false"
//         }
    
// }
// let isEvenValue = isEven(4)
// console.log(isEvenValue);
// let maptesting = [2,4,6,8]
// let  mapvalue = maptesting.map(maptesting => maptesting + 2)
// console.log(mapvalue);
// let filtertesting = [200,400,650,823]
// let filtervalue = filtertesting.filter(filtertesting => filtertesting >= 400)
// console.log(filtervalue);


//====== 28-Oct-2026 ======

// const math = 4000000000
// console.log(math);
// const mathValue = typeof new String(100)
// console.log(mathValue);
// console.log(math.toLocaleString('en-PK'));
// console.log(Math.abs(-4));
// console.log(Math.round(6.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.sqrt(30));
// const mysym = Symbol("areef")
// const jsUser = {
//     name: "Areef",
//     [mysym]: "key1",
//     age: 18,
//     location: "Karachi",
//     email: "areefdj123@gmail.com"
// }
// console.log(jsUser[mysym]);
// const areefUser = {}
// areefUser.name = "Areef"
// areefUser.location = "Karachi"
// areefUser.email = "areefdj123@gmail.com"
// console.log(areefUser);


// ====== 29-Oct_2026 =======


// let number = -5
// if (number > 0){
//     console.log("positve");
// }
// else if(number < 0){
//     console.log("negative");
// }
// else{
//     console.log("zero");
    
// }

// let number = 7
// if (number % 2 === 0){
//     console.log("even");
    
// }
// else {
//     console.log("odd");
    
// }

// let marks = 76
// if (marks > 80){
//     console.log("Grade A");
// }
// else if(marks > 60){
//     console.log("Grade B");
    
// }
// else if(marks > 40){
//     console.log("Grade C");
    
// }
// else if(marks > 20){
//     console.log("Grade D");

// }
// else {
//     console.log("Grade Fail");
    
// }

// function chahca(){
//     for(let i = 0; i <= 10; i++){
//         if(i < 5){
//             console.log("Small");
            
//         }
//         else{
//             console.log("Big");
            
//         }
//     }
// }
// chahca()

// function chacha(){
//     for(let i = 1; i <= 15; i++){
//         if(i % 3 === 0){
//             console.log("Divisible by 3");
            
//         }
//         else {
//             console.log("not divisible by 3");
            
//         }
//     }
// }
// chacha()

// function chacha(){
//     for(let i = 1; i <= 10; i++){
//         if(i % 3 === 0){
//             console.log("Divisible by 3");
//         }
//         else if(i % 2 === 0){
//             console.log("Divisible by 2");
            
//         }
//         else{
//             console.log("Neither");
            
//         }
//     }
// }
// chacha()

// function chacha(){
//     for(let i = 1; i <= 15; i++){
//         if(i % 5 === 0){
//         console.log("Five");
//         }
//         else if(i % 3 === 0){
//             console.log("Three");
//         }
//         else{
//             console.log("Others");
            
//         }
//     }
// }
// chacha()

// function chacha(){
//     for(let i = 1; i <= 20; i++){
//         if(i < 10){
//             console.log("small")
//         }
//         else if(i === 10){
//             console.log("Equal");
            
//         }
//         else{
//             console.log("large");
            
//         }
//     }
// }
// chacha()
// function chacha(arr){
//     for(let i = 0; i < arr.length; i++){
//         let target = 30
//         if(arr[i] === target){
//             return true
            
//         }
//         return false
//     }
// }
// console.log(chacha([30,40,50,60]));
// console.log(chacha([40,50,60]));

// function chacha(){
//     for(let i = 1; i <= 20; i++){
//         if(i % 4 === 0){
//             console.log("Four");
            
//         }
//         else if(i % 6 === 0){
//             console.log("Six");
            
//         }
//         else{
//             console.log("Others");
            
//         }
//     }
// }
// chacha()

// function chacha(limit){
//     for(let i = 1; i <= limit; i++){
//         if(i > 10){
//             console.log("Large");
            
//         }
//         else if(i % 2 === 0){
//             console.log("Even");
//         }
//         else {
//             console.log("Odd");
            
//         }
//     }
// }
// chacha(15)

// function chacha(limit){
//     for(let i = 1; i <= limit; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("both");
//         }
//         else if(i % 3 === 0){
//             console.log("Three");
            
//         }
//         else if(i % 5 === 0){
//             console.log("five");
            
//         }
//         else if(i % 2 === 0){
//             console.log("Even");
            
//     }
//     else{
//         console.log("Other");
        
//     }

// }
// }
// chacha(25)

// function chacha(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 5 === 0){
//             console.log("Divsible by 5");
            
//         }
//         else if(arr[i] % 2 === 0){
//             console.log("Even");
            
//         }
//         else if(arr[i] > 10){
//             console.log("Greater than 10");
            
//         }
//         else {
//             console.log("Other");
            
//         }
//     }
// }
// chacha([4,7,10,15,18,21,25,30])

// function chacha(a1, a2){
//     return a1 + a2
// }
// let insertValues = chacha(3, 5)
// console.log(insertValues);

// function chacha(arr){
//     let total = 0
//     for(let i = 0; i < arr.length; i++){
//         total = total + arr[i]
//     }
//     return total
// }
// let result = chacha([1,2,3,4,5,6,7,8,9,10])
// console.log(result);

// function chacha(arr){
//     let total = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             total = total + 1
//         }
//     }
//     return total
// }
// let result = chacha([1,2,3,4,5,6,7,8])
// console.log(result);

// function chacha(arr){
//     let total = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0 && arr[i] > 10){
//             total = total + 1
//         }
//     }
//     return total
// }
// let result = chacha([5, 12, 7, 18, 21, 30, 9, 40])
// console.log(result);

// function chacha(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             console.log("Even");
            
//         }
//         else{
//             console.log("Odd");
            
//         }
//     }
    
// }
// chacha([4, 7, 10, 13, 16, 21, 24, 30])

// ====== 30-Oct-2026 ======

// const objects = {
//     email: "areefdj@gmail.com",
//     fullname: {
//         username: {
//             firstname: "Areef",
//             lastname: "Danish"
//         }
//     }
// }
// console.log(objects);

// const obj = {
//     name: "Areef",
//     age: 18,
//     city: "Karachi"
// }
// const {city} = obj
// console.log(city);

// function one(){
//     const name = "Areef"
//     function two(){
//         const channelName = "Chai aur code"
//         console.log("Name: " + name);
//         console.log("Channel name: " + channelName);
//     }
//     two()
    
// }
// one()

// function one(arr){
//     let result = []
//     for(let i = 0; i <arr.length; i++){
//         function two(){
//             if(arr[i].marks >= 50){
//                 return "Pass"
//             }
//             else{
//                 return "Fail"
//             }
//         }
        
//         result.push({
//             name: arr[i].name,
//             result: two()
//         })
//     }
//     return result
// }

// let finalResult = one( [
//     { name: "Ali", marks: 85 },
//     { name: "Ahmed", marks: 42 },
//     { name: "Usman", marks: 72 },
//     { name: "Hassan", marks: 30 },
//     { name: "Danish", marks: 95 }
// ])
// console.log(finalResult);

// function one(arr){
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         function two(){
//             if(arr[i].price >= 10000){
//             return "Expensive"
//         }
//         else{
//             return "Affordable"
//         }
        
//         }
//         result.push({
//             name: arr[i].name,
//             price: two()
//         })
//     }
//     return result
// }
// let finalResult = one([
//     { name: "Laptop", price: 80000 },
//     { name: "Mouse", price: 1500 },
//     { name: "Keyboard", price: 3000 },
//     { name: "Monitor", price: 25000 },
//     { name: "Headphones", price: 5000 }
// ])
// console.log(finalResult);

// function one(arr){
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         function two(){
//             if(arr[i].salary >= 50000 && arr[i].experience >= 3){
//                 return "Eligible"
//             }
//             else{
//                 return "Not eligible"
//             }
//         }
//         result.push({
//             name: arr[i].name,
//             status: two()
//         })
//     }
//     return result
// }
// let finalResult = one([
//     { name: "Ali", salary: 50000, experience: 3 },
//     { name: "Ahmed", salary: 30000, experience: 1 },
//     { name: "Usman", salary: 80000, experience: 5 },
//     { name: "Hassan", salary: 45000, experience: 2 },
//     { name: "Danish", salary: 90000, experience: 6 }
// ])
// console.log(finalResult);

// function one(arr){
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         function two(){
//             if(arr[i].marks >= 80 && arr[i].attendance >= 75 || arr[i].marks >= 70 && arr[i].attendance >= 90){
//             return "Scholarship Eligible"
//         }
//         else{
//             return "Not Eligible"
//         }
//         }
//         result.push({
//             name: arr[i].name,
//             status: two()
//         })

//     }
//     return result
// }
// let finalResult = one([
//     { name: "Ali", marks: 85, attendance: 90 },
//     { name: "Ahmed", marks: 65, attendance: 95 },
//     { name: "Usman", marks: 75, attendance: 70 },
//     { name: "Hassan", marks: 45, attendance: 85 },
//     { name: "Danish", marks: 90, attendance: 80 }
// ])
// console.log(finalResult);

// let number = [1,2,3,4,5,6,7,8]
// number.forEach(function(vlaue){
//     console.log(vlaue);
    
// })

// let number = [1,2,3,4,5,6,7,8]
// number.forEach(function(value){
//     if(value % 2 === 0){
//         console.log(value + " Even");
        
//     }
//     else if(value % 2 !== 0){
//         console.log(value + " Odd");
        
//     }
// })

// let numbers = [-5, 10, -3, 0, 8, -12, 15];
// numbers.forEach(function(value){
//     if(value > 0){
//         console.log(value + " Positive");
//     }
//     else if(value < 0){
//         console.log(value + " Negative");
//     }
//     else {
//         console.log(value + " Zero");
        
//     }
// })

// let students = [
//     {name: "Ali", marks: 85},
//     {name: "Ahmed", marks: 42},
//     {name: "Usman", marks: 65},
//     {name: "Hamza", marks: 30},
//     {name: "Bilal", marks: 90}
// ];
// students.forEach(function(value){
//     if(value.marks >= 50){
//         console.log(value.name + " Pass");
//     }
//     else {
//         console.log(value.name + ' Fail');
        
//     }
// })

// function one(arr){

//     let result = []

//     for(let i = 0; i < arr.length; i++){

//         function checkEgiliblity(){
//             for(let j = 0; j <= i; j++){

//                 let bonusEmployee = (arr[j].salary >= 50000 && arr[j].experience >= 3 && ((arr[j].performance >= 80 && arr[j].attendance >= 85) || (arr[j].performance >= 90 && arr[j].attendance >= 75)));

//                 let promotionEmployee = (arr[j].experience >= 5 && arr[j].performance >= 85 && (arr[j].salary >= 60000) || (arr[j].attendance >= 95));

//                 if(bonusEmployee && promotionEmployee){
//                     return "Both Eligible"
//                 }

//                 else if(bonusEmployee){
//                     return "Bonus Eligible"
//                 }

//                 else if(promotionEmployee){
//                     return "Promtion Eligible"
//                 }

//                 else{
//                     return "Not Eligible"
//                 }
//             }
//         }
//         result.push({
//             name: arr[i].name,
//             status: checkEgiliblity()
//         })
//     }
//     return result

// }
// let finalResult = one([
//     {name: "Ali", salary: 60000, experience: 4, performance: 85, attendance: 90},
//     {name: "Ahmed", salary: 45000, experience: 5, performance: 75, attendance: 95},
//     {name: "Usman", salary: 70000, experience: 2, performance: 90, attendance: 85},
//     {name: "Hassan", salary: 55000, experience: 3, performance: 65, attendance: 80},
//     {name: "Danish", salary: 80000, experience: 6, performance: 95, attendance: 98}
// ])
// console.log(finalResult);

// (function one(){
//     console.log("Areef");
// })();
// ((name) => {
//     console.log(`my name is ${name}`);
    
// })("AREEF")

function studentEvaluation(arr){
    let result = []
    function calculateAverage(student){
        let total = 0
        for(let i = 0; i < student.marks.length; i++){
            total += student.marks[i]
        }
        let average = total / student.marks.length
        return average
    }
    function checkScholarship(student, average){
        let merit = false
        let excellence = false
        let financialAid = false
        
        if(average >= 95 && student.attendance >= 90 && student.warnings === 0){
            excellence = true;
        }
        if(average >= 85 && student.attendance >= 85 && student.warnings === 0){
            merit = true
        }
        if(student.familyIncome < 40000 && student.attendance >= 80 && average >= 65){
            financialAid = true
        }
        return {
            excellence: excellence,
            merit: merit,
            financialAid: financialAid
        };
    }
    function checkActivities(student){
        let count = 0
        for(let i = 0; i < student.activities.length; i++){
            count++;
        }
            if(count >= 2 && student.attendance >= 85 && student.warnings === 0){
                return "LeaderShip Award Eligible"
            }
            else{
                return "LeaderShip Award Not Eligible"
            }
    }
    for(let i = 0; i < arr.length; i++){
        let average = calculateAverage(arr[i]);
        let scholarship = checkScholarship(arr[i], average);
        let activities = checkActivities(arr[i]);
        let status = "Not Eligible"
        if(scholarship.excellence === true && activities === "Leadership Award Eligible"){
            status = "Excellence + Leadership"
        }
        else if (scholarship.excellence === true){
            status = "Excellence Scholarship"
        }
        else if(scholarship.merit === true && scholarship.financialAid === true){
            status = "Merit + Financial Aid"
        }
        else if(scholarship.merit === true && scholarship.excellence === false && scholarship.financialAid === false){
            status = "Merit ScholarShip"
        }
        else if(scholarship.financialAid === true && scholarship.merit === false && scholarship.excellence === false){
            status = "Financial Aid"
        }
        else if(activities === "Leadership Award Eligible" && scholarship.excellence === false && scholarship.merit === false && scholarship.financialAid === false){
            status = "Leadership Award"
        }
        let studentResults = {
            name: arr[i].name,
            average: average,
            status: status
        }
        result.push(studentResults)
    }
    return result
}
let finalResult = studentEvaluation([
    {
        name: "Ali",
        marks: [85, 90, 88, 92],
        attendance: 95,
        warnings: 0,
        familyIncome: 45000,
        activities: ["Sports", "Debate", "Coding"]
    },
    {
        name: "Ahmed",
        marks: [75, 80, 78, 82],
        attendance: 90,
        warnings: 0,
        familyIncome: 35000,
        activities: ["Sports"]
    },
    {
        name: "Usman",
        marks: [95, 98, 96, 97],
        attendance: 98,
        warnings: 0,
        familyIncome: 80000,
        activities: ["Debate", "Coding", "Sports"]
    },
    {
        name: "Hassan",
        marks: [60, 65, 70, 68],
        attendance: 75,
        warnings: 2,
        familyIncome: 30000,
        activities: ["Sports", "Art"]
    },
    {
        name: "Danish",
        marks: [90, 92, 94, 96],
        attendance: 92,
        warnings: 0,
        familyIncome: 55000,
        activities: ["Coding", "Debate"]
    },
    {
        name: "Bilal",
            marks: [70, 75, 80, 85],
            attendance: 88,
            warnings: 0,
            familyIncome: 30000,
            activities: ["Sports", "Art"]
        }
    ])
console.log(finalResult);
// let date = new Date()
// console.log(date.toLocaleTimeString());
let test = [1,2,3,4,5,6,7,8,9,10]
test.splice(2, 3, 20);
console.log(test);


