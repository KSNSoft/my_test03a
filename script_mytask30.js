
(function(){
    "use strict";

    const my_body01 = document.querySelector('body');
    
    window.addEventListener('keypress', function(my_event01){
        //let my_key01 = my_event01.key;
        const my_key01 = my_event01.key;
    
        my_event01.preventDefault();
    
        switch(my_key01) {
            case 'b':
                my_body01.className = 'one';
                break;
            case 'v':
                my_body01.className = 'two';
                break;
            case "c":
                my_body01.className = 'three';
                break;
            case "f":
                my_body01.className = 'four';
                break;       
            case "g":
                my_body01.className = 'five';
                break;     
            default:
                alert(`${my_key01}   IS WRONG!!!!`);  
        }
    });
})();

