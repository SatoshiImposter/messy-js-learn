let i = 0;
while (i < 6) {
    i++;
    if (i === 2){
        continue;   //aqui se salta el valor
    } 
    if (i === 5){
        break;      //aqui se detiene cuando llega a 5
    }
    console.log(i);
}