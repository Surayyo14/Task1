let a = 123;

if (a < 1 || a >= 999) {
    console.log('Son 1 dan katta va 999 dan kichik bo\'lishi kerak');
} else {
    const digits = a.toString().length;

    if (digits === 2) {
        console.log('Ikki xonali toq son');
    } else if (digits === 3) {
        if (a % 2 === 0) {
            console.log('Uch xonali juft son');
        } else {
            console.log('Uch xonali toq son');
        }
    }
}