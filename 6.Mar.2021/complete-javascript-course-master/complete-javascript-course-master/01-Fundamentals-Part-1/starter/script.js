// var hero = "Ramki";
// var heroine = "Geetha";

// alert(hero + " " + "weds" + " " + heroine);
let day = prompt("Enter the day..!");

switch (day) {
    case "Monday":
    case "monday":
        alert("Go To Gym..!");
        break;
    case "Tuesday":
    case "tuesday":
        alert("Go To Temple..!");
        break;
    case "Wednesday":
    case "wednesday":
        alert("Go To Coimbatore..!");
        break;
    case "Thursday":
    case "thursday":
        alert("Back to home....!");
        break;
    case "Friday":
    case "friday":
        alert("Drive a car...!");
        break;
    case "Saturday":
    case "saturday":
    case "Sunday":
    case "sunday":
        alert("Enjoy Weekend...!");
    default:
        alert("Enter correct day..!");
}