// Fungsi untuk menambahkan angka/simbol ke input
function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

// Fungsi untuk menghapus semua angka
function clearResult() {
    document.getElementById('result').value = '';
}

// Fungsi untuk menghitung hasil
function calculate() {
    try {
        const resultField = document.getElementById('result');
        resultField.value = eval(resultField.value);
    } catch (error) {
        alert('Input tidak valid!');
    }
}

// Fungsi untuk menghapus satu karakter terakhir
function deleteLast() {
    const resultField = document.getElementById('result');
    resultField.value = resultField.value.slice(0, -1);
}
