
function closePopup(){
    document.getElementById("jsclosepoup").addEventListener('click',function(){
        alert('You are will close popup');
        document.getElementById("show-mini-cart").style.display= 'none';
        document.getElementsByClassName('show-mini-cart').style.display='none';
    },true);
}

function loadMiniCart(){
    document.getElementById("load-cart").addEventListener('click',function(){
        alert('hello NPP');
        document.getElementById('show-mini-cart').style.display= 'none';
        document.getElementsByClassName('show-mini-cart').style.display='none';
    },true);
}
