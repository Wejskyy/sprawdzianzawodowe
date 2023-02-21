function oblicz(){
    let a1=parseInt(document.getElementById("a1").value);
    let an=parseInt(document.getElementById("an").value);
    let n=parseInt(document.getElementById("n").value);
    let wynik = (an - a1)/(n-1);
    document.getElementById("wynik").value=wynik;


}