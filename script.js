/* 
=================================================================
LAB TITLE: Advance JavaScript
INSTRUCTIONS:
• Each task is written as a TODO.
• Read the TODO description.
• Use the Console (F12 → Console) to view outputs.
=================================================================
*/

//You can uncomment the console.log code to check if your js file is connected with html file or not.
//console.log("%cJS Lab Connected — Start completing the TODOs for Advance JavaScript!", "font-weight:bold; font-size:14px");

// ==========================
// TODO-1: OBJECT with GETTERS & SETTERS
// ==========================
/*
Task:
1) Create an object representing a Student with at least: firstName, lastName, and gpa.
2) Add a getter fullName that returns "firstName lastName".
3) Add a setter updateGpa(newGpa) or use a set accessor for gpa that validates 0.0–4.0.
4) Create an instance/object and output its attributes using the getter(s).
*/
const student = {
    firstName: "Maryam",
    lastName: "Al Mobarak",
    GPA: 3.5,

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set gpa(newGpa) {
        if (newGpa >= 0.0 && newGpa <= 4.0) {
            this.GPA = newGpa;
        } else {
            console.log("Invalid GPA! Must be between 0.0 and 4.0");
        }
    },

    get gpa() {
        return this.GPA;
    }
};

console.log("Student Name:", student.fullName);
student.gpa = 3.9;
console.log("Updated GPA:", student.gpa);

// ====================================
// TODO-2: OBJECT AS MAP + for...in LOOP
// ====================================
/*
Task:
1) Make an object used as a "map" (key → value), e.g., course codes → titles.
2) Iterate over it with for...in and display each key and value.
*/
const courses = {
    SWE363: "Web development",
    ICS202: "Data strcture ",
    MATH201: "Calculus III"
};

for (let code in courses) {
    console.log(`${code} + ${courses[code]}`);
}

// =========================================
// TODO-3: STRING OBJECT — charAt() & length
// =========================================
/*
Task:
1) Create a String object or plain string.
2) Use .charAt(index) and .length to output characters and size.
*/
const myString = "JavaScript";
console.log("String:", myString);
console.log("Character at index 0:", myString.charAt(0));
console.log("Length of string:", myString.length);

// ===================================
// TODO-4: DATE — day, month, and year
// ===================================
/*
Task:
1) Create a Date for the current moment (new Date()).
2) Find and display the current day of month, month (0–11), and year.
//    (Hint: getDate(), getMonth(), getFullYear() )
*/
const today = new Date();
console.log("D/M/Y", today.getDate(),"/",today.getMonth() + 1,"/",today.getFullYear());

// ============================================================
// TODO-5: ARRAY + SPREAD — find MIN and MAX from 10 numbers
// ============================================================
/*
Task:
1) Declare an array with 10 numbers (any values).
2) Use spread syntax with Math.min(...) and Math.max(...) to find extremes.
3) Display both values.
*/
const nums = [12, 45, 7, 89, 3, 56, 23, 67, 9, 34];
const minVal = Math.min(...nums);
const maxVal = Math.max(...nums);
console.log("Numbers:", nums);
console.log("Minimum:", minVal);
console.log("Maximum:", maxVal);

// ===================================================================
// TODO-6: EXCEPTIONS — try/catch/finally with EMPTY ARRAY edge case
// ===================================================================
/*
Task:
1) Write a function that expects a non-empty array and returns the maximum element of the array.
2) Intentionally pass an empty array to trigger an error.
3) Handle the error using try { ... } catch (e) { ... } finally { ... } and log messages
   in each block so you can see the flow of control.
*/
function getMax(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty!");
    }
    return Math.max(...arr);
}

try {
    let emptyArr = [];
    console.log("Max:", getMax(emptyArr));
} catch (e) {
    console.log("Error caught:", e.message);
} finally {
    console.log("Execution finished");
}

// ===================================================================================
// TODO-7: REGEX + forEach — find words containing 'ab' and log matches from the list
// ===================================================================================
/*
Task:
Given: const words = ["ban", "babble", "make", "flab"];
1) Create a RegExp that detects the substring "ab" anywhere in a word.
2) Loop with .forEach() and use pattern.test(word) to check matches.
3) For matches, log "<word> matches!".
4) Display the words that matches the pattern.
*/
const words = ["ban", "babble", "make", "flab"];
const pattern = /ab/;

words.forEach(word => {
    if (pattern.test(word)) {
        console.log(`${word} matches!`);
    }
});

// End of Advance JavaScript Lab — good luck!
