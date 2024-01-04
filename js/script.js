function hitungLuas() {
    var alas = parseFloat(document.getElementById('inputAlas').value);
    var tinggi = parseFloat(document.getElementById('inputTinggi').value);

    var luas = 0.5 * alas * tinggi;

    var formulaLuas = "Rumus Luas Segitiga: L = 1/2 × a × t";
    var inputValuesLuas = "Alas: " + alas + ", Tinggi: " + tinggi;

    document.querySelector('.hasilLuas').innerHTML = "Hasil Luas: " + luas.toFixed(2);
    document.querySelector('.rumusLuas').innerHTML = formulaLuas + "<br>" + inputValuesLuas;
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('inputSisi1').value);
    var sisi2 = parseFloat(document.getElementById('inputSisi2').value);
    var sisi3 = parseFloat(document.getElementById('inputSisi3').value);

    var keliling = sisi1 + sisi2 + sisi3;

    var formulaKeliling = "Rumus Keliling Segitiga: K = s1 + s2 + s3";
    var inputValuesKeliling = "Sisi 1: " + sisi1 + ", Sisi 2: " + sisi2 + ", Sisi 3: " + sisi3;

    document.querySelector('.hasilKeliling').innerHTML = "Hasil Keliling: " + keliling.toFixed(2);
    document.querySelector('.rumusKeliling').innerHTML = formulaKeliling + "<br>" + inputValuesKeliling;
}

function resetLuas() {
    document.getElementById('inputAlas').value = "";
    document.getElementById('inputTinggi').value = "";
    document.querySelector('.hasilLuas').innerHTML = "";
    document.querySelector('.rumusLuas').innerHTML = "";
}

function resetKeliling() {
    document.getElementById('inputSisi1').value = "";
    document.getElementById('inputSisi2').value = "";
    document.getElementById('inputSisi3').value = "";
    document.querySelector('.hasilKeliling').innerHTML = "";
    document.querySelector('.rumusKeliling').innerHTML = "";
}