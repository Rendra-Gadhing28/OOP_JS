class Latian2 {
    constructor(awal, beda,deret){
        this.nilaiAwal = document.getElementById(awal)
        this.beda = document.getElementById(beda)
        this.deret = document.getElementById(deret)
    }
    hitungDeret(){
        const awal = parseInt(this.nilaiAwal.value)
        let proses = awal;
        const beda = parseInt(this.beda.value)
        const deret = parseInt(this.deret.value)
        
        let Index = 0
        let hasil = []
        while(Index < deret){
            hasil.push(proses)
            proses += beda
            Index++
        }
        if(isNaN(awal) || isNaN(beda) || isNaN(deret)){
            console.error(SyntaxError)
        }
        else{
            console.log(`Angka awal : ${awal}`)
            console.log(`Beda : ${beda}`)
            console.log(`Nilai n : ${deret}`)
            console.log(`Deret : ${hasil}`)
            console.log("-------")
            return {
            angkaAwal : awal,
            beda : beda,
            nilaiN : deret,
            deret : hasil,
            }
            
        }
    }
    clearInput(){
        this.nilaiAwal.value = ""
        this.beda.value = ""
        this.deret.value = ""
    }
}

    const angkaAwal = new Latian2('angkaAwal', 'pemBeda', 'nilaiN');
    const display = document.getElementById('hasil')
    const kirim = document.getElementById('kirim')

    kirim.addEventListener('click', ()=>{
        const teksHasil = angkaAwal.hitungDeret()
        const {
            angkaAwal : a, 
            beda : b,
            nilaiN : n,
            deret : d } = teksHasil

            document.getElementById('awal').textContent = a
            document.getElementById('beda').textContent = b 
            document.getElementById('n').textContent = n
            document.getElementById('deret').textContent = d.join(', ')
        // const hasil = Object.entries(awal)
        // .map(([key,value])=> `${key} : ${value}`)
        // .join('\n')
        // Angka Awal : ${teksHasil.angkaAwal}
        // Pembeda : ${teksHasil.beda}
        // Nilai N : ${teksHasil.nilaiN}
        // Deret : ${teksHasil.deret.join(', ')}`
        angkaAwal.clearInput();
    })
