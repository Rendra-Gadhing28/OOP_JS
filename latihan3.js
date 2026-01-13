class Latian3{
    constructor(judul, pengarang, tahunTerbit, hargaBeli){
        this.judul = judul
        this._pengarang = pengarang
        this._tahunTerbit = tahunTerbit
        this._hargaBeli = hargaBeli
    }

    HitungHarga(){
        const judul = this.judul
        const pengarang = this._pengarang
        const tahunTerbit = this._tahunTerbit
        let hargaBeli = this._hargaBeli
        const keuntungan = 0.2 * hargaBeli
        let hargaJual = hargaBeli - keuntungan

        console.log(`SELAMAT DATANG!!`)
        console.log(`Anda mengambil buku : ${judul}`)
        console.log(`Nama Pengarangnya : ${pengarang}`)
        console.log(`Diterbitkan pada : ${tahunTerbit}`)
        console.log(`Harga Beli : ${hargaBeli.toLocaleString('id-ID')}`)
        console.log(`Total : ${hargaBeli.toLocaleString('id-ID')} - ${keuntungan.toLocaleString('id-ID')} = ${hargaJual.toLocaleString('id-ID')}`)
        console.log(`----Terimakasih----`)
    }
}

const data1 = new Latian3("Kimetsu No Yaiba", "Rendra Gadhing", 2016, 100000)
data1.HitungHarga()
const data2 = new Latian3("Naruto Shipudden", "Rendra Gadhing", 2012, 245000)
data2.HitungHarga()
