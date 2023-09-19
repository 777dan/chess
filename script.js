function chess() {
    let n = 1;
    for (let i = 0; i <= 64; i++) {
        n *= 2;
    }
    let weight = (n * 0.065) / 1000;
    document.write(`Grain weight: ${weight} kg`);
}

function numPowers() {
    let n = +prompt("Input a number");
    if (!isNaN(n)) {
        let x;
        for (let i = 1; i <= n; i++) {
            x = 2 ** i;
            document.write(`${x} `);
        }
    } else {
        alert("Error");
    }
}