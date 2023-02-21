function oblicz(){
    let liczba=parseInt(document.getElementById("liczba").value);
    let wynik="";
    let binarna="";
    let modulo;
    while(liczba>0){
        modulo=parseInt(liczba%2);
        wynik=wynik+modulo;
        liczba=Math.floor(liczba/2);
    }

    document.getElementById("wynik").value=wynik;
}