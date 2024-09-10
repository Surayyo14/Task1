let temp = 28; 

if (temp < 0) {
    console.log('Freezing');
} else if (temp < 11) {
    console.log('Very Cold');
} else if (temp < 21) {
    console.log('Cold');
} else if (temp < 31) {
    console.log('Normal');
} else if (temp < 41) {
    console.log('Hot');
} else {
    console.log('Very Hot');
}