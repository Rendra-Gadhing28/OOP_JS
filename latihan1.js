class Latian1 {
    constructor(input){
             this.inputEl = document.getElementById(input)
    }

    getValue(){
        const ubah = parseInt(this.inputEl.value);
        return ubah
    }


    clearInput(){
        this.inputEl.value = ""
    }

        cekAngka() {
            const n = this.getValue();
            let hasil = "";

            if(n > 0 && n % 2 === 0){
                hasil = "Positif Genap"
            }
            else if(n < 0 && n % 2 === 0) {
                hasil = "Negatif Genap"
            }
            else if(n > 0 && n % 2 !== 0){
                hasil = "Positif Ganjil"
            }
            else if(n < 0 && n % 2 !== 0){
                hasil = "Negatif Ganjil" 
            }
            else{
                hasil = "angka belum benar"
            }
            console.log(`Angka ${n} adalah : ${hasil}`)
            return {
                angka : n,
                status : hasil
            }
    }
}

const input = new Latian1('input');
// input.cekAngka()
const display = document.getElementById('hasil')
const kirim = document.getElementById('kirim');

kirim.addEventListener('click', ()=>{
    const teksHasil = input.cekAngka()
    const a = `Angka ${teksHasil.angka} adalah angka ${teksHasil.status}`

    //menampilkan ke user
    display.textContent = a
    console.log(a)
    input.clearInput()
})

