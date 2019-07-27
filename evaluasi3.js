var jualMobil = {
 iklan:function(){
     document.write(`BU , saya ${this.nama}, jual mobil ${this.merek} , tahun ${this.tahun} ,bekas`)
 }
}

const amar = Object.create(jualMobil)
amar.nama= 'Tompel'
amar.merek= 'Avanza'
amar.tahun= '2017'
amar.iklan()

document.write('<br>')
document.write('===SOAL 4 ===')
document.write('<br>')