class Latian2 {
    constructor(nilaiAwal, Beda, Deret){
        this.nilaiAwal = nilaiAwal
        this.Beda = Beda
        this.Deret = Deret
    }
    hitungDeret(){
        const a = this.nilaiAwal
        let angka = a ;
        const b = this.Beda
        const n = this.Deret
        let Index = 0
        let hasil = []
        while(Index < n){
            hasil.push(angka)
            angka += b
            Index++
        }
        console.log(`Angka awal : ${a}`)
        console.log(`Beda : ${b}`)
        console.log(`Nilai n : ${n}`)
        console.log(`Deret : ${hasil}`)
        console.log("-------")
    }
}
const data1 = new Latian2(2, 5, 5)
const data2 = new Latian2(5,2,4)

data1.hitungDeret()
data2.hitungDeret()