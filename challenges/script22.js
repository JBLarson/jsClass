(function(){
    "use strict";
    const btn = document.querySelector('button');
    console.log(btn)
    btn.addEventListener('click', function(){
        btn.style.backgroundColor = 'green';
    });
})();
