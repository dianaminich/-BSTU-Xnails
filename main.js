(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header');
    const menuCloseItem = document.querySelector('.header-close');
   burgerItem.addEventListener('click', () => {
       menu.classList.add('header_active') ;
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_active') ;  
    });
}());