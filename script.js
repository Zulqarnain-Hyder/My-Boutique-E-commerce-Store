function sendVal1(){
    // var card1val = document.getElementById("Card1Val").innerHTML;
    // alert(card1val);

    var mainCart = document.getElementById("mainCartVal1").innerHTML;
    // mainCart.innerHTML = mainCart + 1;
    var result = parseInt(mainCart) + 1;
    document.getElementById("mainCartVal1").innerHTML = result;
    // alert(result);
}