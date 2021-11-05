(function(){
    "use strict"
    const theBody = document.querySelector('body');

    window.addEventListener('keydown', function(event){
        let theKey = event.key;
        console.log(`The ${event.key} key was pressed`)

        switch(true){
        
            case theKey == "b": theBody.className = "one"; break;
            case theKey == "v": theBody.className = "two"; break;
            case theKey == "c": theBody.className = "three"; break;
            case theKey == "f": theBody.className = "four"; break;
            case theKey == "g": theBody.className = "five"; break;
        }
    });
})();
