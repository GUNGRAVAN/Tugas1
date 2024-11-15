function calculate(operation) {
    var angka1 = parseFloat(document.getElementById('angka1').value);
    var angka2 = parseFloat(document.getElementById('angka2').value);
    var hasil;

    if (operation === '+') {
        hasil = angka1 + angka2;
    } else if (operation === '-') {
        hasil = angka1 - angka2;
    } else if (operation === '*') {
        hasil = angka1 * angka2;
    } else if (operation === '/') {
        hasil = angka1 / angka2;
    }
    document.getElementById('hasil').value = hasil;
}