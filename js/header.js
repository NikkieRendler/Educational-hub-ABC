window.onscroll = function() {
    navClass.classList.remove("nav-mobile-visible");
    var header = document.getElementById('header');
    var logo = document.getElementById('logo-pic');
    var currentOffset = window.pageYOffset;

    if(currentOffset > 250) { 
        header.classList.add('fixed-header'); 
        logo.classList.add('invisible')
    } else {
        header.classList.remove('fixed-header'); 
        logo.classList.remove('invisible');
    }
};
/* Mobile navigation toggle */
let navClass = document.querySelector('.navigation');
function showNav() {
    navClass.classList.toggle("nav-mobile-visible");
}
