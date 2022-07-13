
(function(){
    "use strict";

    const my_body01 = document.querySelector('body');

    window.addEventListener('scroll', function(){
        const my_int01 = ~~(window.pageYOffset/500);

        switch(my_int01) {
            case 0:
                my_body01.className = 'one';
                break;
            case 1:
                my_body01.className = 'two';
                break;
            case 2:
                my_body01.className = 'three';
                break;
            case 3:
                my_body01.className = 'four';
                break;        
            default:
                my_body01.className = 'five'; 
        } 
    });
})();

