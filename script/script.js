function kirimData(){
    var nama = document.getElementById("nama").value
    var NIM = document.getElementById("NIM").value
    var peminatan = document.querySelector('input[name="peminatan"]:checked').value
    var alamat = document.getElementById("alamat").value

    alert(
        "Nama : " + nama + 
        "\nNIM : " + NIM + 
        "\nPeminatan : " + peminatan + 
        "\nAlamat : " + alamat
    )
}