
function closePopup(){
    document.getElementById("jsclosepoup").addEventListener('click',function(){
        // alert('hello NPP');
        document.getElementById('show-mini-cart').style.display= 'none';
        document.getElementsByClassName('show-mini-cart').style.display='none';
    },true);
}
