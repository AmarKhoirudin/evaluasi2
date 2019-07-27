var n=9
for(y=0; y<n; y++){
  for(x=0; x<n; x++){
    if(x % 2 == 1 != y % 2 == 1 ){
      document.write('+')
    }else{
      document.write(' - ')
    }
  }
  document.write('<br>')
}

document.write('<br>')
document.write('===SOAL 3 ===')
document.write('<br>')