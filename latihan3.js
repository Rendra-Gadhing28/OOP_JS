  class Latian3{
    constructor(inpJudul, inpPengarang, inpTerbit, inpHargaBeli){
        this.judul = document.getElementById(inpJudul)
        this._pengarang = document.getElementById(inpPengarang)
        this._tahunTerbit = document.getElementById(inpTerbit)
        this._hargaBeli = document.getElementById(inpHargaBeli)
    }


    

    clearInput(){
        this.judul.value = ''
        this._pengarang.value = ''
        this._tahunTerbit.value = ''
        this._hargaBeli.value = ''
    }

    hitungHarga(){
        try{
        const judul = this.judul.value.trim()
        const pengarang = this._pengarang.value.trim()
        const tahun = this._tahunTerbit.value.trim()
        let harga = parseInt(this._hargaBeli.value)
        const diskon= 0.2 * harga
        let hargaJual = harga - diskon

            if(isNaN(harga) || judul === "" || pengarang === "" || tahun === ""){
                 throw new Error("error data belum lengkap")
            }
            else {
            console.log(`SELAMAT DATANG!!`)
            console.log(`Anda mengambil buku : ${judul}`)
            console.log(`Nama Pengarangnya : ${pengarang}`)
            console.log(`Diterbitkan pada : ${tahun}`)
            console.log(`Harga Beli : ${harga.toLocaleString('id-ID')}`)
            console.log(`Mendapatkan Diskon : ${diskon.toLocaleString('id-ID')}`)
            console.log(`Total : ${harga.toLocaleString('id-ID')} - ${diskon.toLocaleString('id-ID')} = ${hargaJual.toLocaleString('id-ID')}`)
            console.log(`----Terimakasih----`)
            }

       
          return {
            judul : judul,
            penerbit : pengarang,
            tahun : tahun,
            harga : hargaJual
        }
        } catch{
            console.error("error data belum lengkap")
        }
    }
}


const input = new Latian3('inpJudul', 'inpPengarang', 'inpTerbit', 'inpHargaBeli')


btn.addEventListener("click", ()=>{
    const hasil = input.hitungHarga()
    if(hasil){
        const { judul, penerbit, tahun, harga } = hasil

        document.getElementById('judul').textContent = judul
        document.getElementById('penerbit').textContent = penerbit
        document.getElementById('tahun').textContent = tahun
        document.getElementById('harga').textContent = harga.toLocaleString('id-ID')
       input.clearInput();
    }
   

 
})