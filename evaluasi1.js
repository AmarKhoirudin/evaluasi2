document.write('<br>')
document.write('===SOAL 1 ===')
document.write('<br>')
var n=9
for(y=0; y<n; y++){
  for(x=0; x<n; x++){
    if(x==y || x == 8-y || x == 4 || y == 4){
      document.write('+')
    }else{
      document.write(' - ')
    }
  }
  document.write('<br>')
}

document.write('<br>')
document.write('===SOAL 2 ===')
document.write('<br>')