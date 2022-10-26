const age = parseInt(prompt("how old are you?"));

if (isNaN(age) || age < 0) {
    console.log('Please write');
} else if (age < 18) {
    console.log('young');
} else if (age >= 18 && age < 80) {
    console.log('drink');
} else {
    console.log('you old');
}