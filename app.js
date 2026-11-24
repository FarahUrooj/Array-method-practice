// q1
var attendance = 80;
if (attendance >= 75) {
    console.log("Eligible for exam");
}

// q2
var walletAmount = 1500;
if (walletAmount >= 1000) {
    console.log("You can buy the dress");
}

// q3
var temperature = 38;
if (temperature > 35) {
    console.log("Drink plenty of water");
}

// q4
var score = 30;
if (score >= 40) {
    console.log("Qualified");
}
console.log("Result checked");

// q5
var marks = 47;
if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// q6
var age = 19;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// q7
var number = 15;
if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

// q8
var orderAmount = 1800;
if (orderAmount >= 2000) {
    console.log("Free shipping");
} else {
    console.log("Shipping charges apply");
}

// q9
var enteredPassword = "abc123";
var correctPassword = "abc123";
if (enteredPassword === correctPassword) {
    console.log("Login successful");
} else {
    console.log("Wrong password");
}

// q10
var marks = 68;
if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 60) {
    console.log("Grade B");
} else if (marks >= 40) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// q11
var units = 250;
if (units > 300) {
    console.log("High usage");
} else if (units > 150) {
    console.log("Medium usage");
} else {
    console.log("Low usage");
}

// q12
var light = "green";
if (light === "red") {
    console.log("Stop");
} else if (light === "yellow") {
    console.log("Get ready");
} else if (light === "green") {
    console.log("Go");
} else {
    console.log("Invalid signal");
}

// q13
var temperature = 100;
if (temperature >= 102) {
    console.log("High fever");
} else if (temperature >= 99) {
    console.log("Mild fever");
} else {
    console.log("Normal");
}

// q14
var membership = "Silver";
if (membership === "Gold") {
    console.log("30% discount");
} else if (membership === "Silver") {
    console.log("20% discount");
} else if (membership === "Bronze") {
    console.log("10% discount");
} else {
    console.log("No discount");
}

// q15
var age = 17;
var hasStudentCard = true;
if (age > 15 && hasStudentCard === true) {
    console.log("Membership approved");
} else {
    console.log("Membership denied");
}

// q16
var internetOn = true;
var battery = 15;
if (internetOn === true && battery > 20) {
    console.log("Join class");
} else {
    console.log("Cannot join");
}

// q17
var marks = 90;
var income = 60000;
if (marks >= 85 && income < 50000) {
    console.log("Scholarship approved");
} else {
    console.log("Scholarship not approved");
}

// q18
var age = 15;
if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else {
    console.log("Not a teenager");
}

// q19
var isTeacher = false;
var hasCoupon = true;
if (isTeacher || hasCoupon) {
    console.log("Discount applied");
} else {
    console.log("No discount");
}

// q20
var day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
    console.log("Family trip");
} else {
    console.log("Normal day");
}

// q21
var hasTicket = false;
var hasInvitation = false;
if (hasTicket || hasInvitation) {
    console.log("Entry allowed");
} else {
    console.log("Entry denied");
}

// q22
var mathMarks = 35;
var englishMarks = 55;
if (mathMarks >= 40 || englishMarks >= 40) {
    console.log("Eligible for competition");
} else {
    console.log("Not eligible");
}

// q23
var marks = 72;
var income = 90000;
if (marks >= 85 && income < 50000) {
    console.log("Full scholarship");
} else if (marks >= 70 && income < 80000) {
    console.log("Half scholarship");
} else {
    console.log("No scholarship");
}

// q24
var age = 25;
var isStudent = true;
if (age < 5 || age >= 60) {
    console.log("Free ticket");
} else if (age < 18 || isStudent) {
    console.log("Half ticket");
} else {
    console.log("Full ticket");
}

// q25
var marks = 85;
var attendance = 80;
if (marks >= 80 && attendance >= 90) {
    console.log("Grade A");
} else if (marks >= 60 && attendance >= 75) {
    console.log("Grade B");
} else {
    console.log("Grade C");
}