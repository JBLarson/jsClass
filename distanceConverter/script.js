(function(){

    "use strict"

    let convertType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');		


    document.addEventListener('keydown', function(event){
        //handle keypress of K or M key
        let key = event.code;
        if(key=="KeyK"){
            convertType = 'kilometers';
            heading.innerHTML = 'Kilometers to Miles';
            intro.innerHTML = 'Type in a number of kilometers to convert to miles';
        }
        else if(key=="KeyM"){
            convertType = 'miles';
            heading.innerHTML = 'Miles to Kilometers';
            intro.innerHTML = 'Type in a number of miles to convert to kilometers'

        }

    });

    form.addEventListener('submit', function(event){
        event.preventDefault();

        const distance = parseFloat(document.getElementById('distance').value);
        if (distance){
            if(convertType=='kilometers'){
                let convert = (distance*1.609344).toFixed(3);
                answerDiv.innerHTML = `<h2>${distance} miles = ${convert} kilometers</h2>`
            }
            else if (convertType=='miles'){
                let convert = (distance*0.621371192).toFixed(3);
                answerDiv.innerHTML = `<h2>${distance} kilometers = ${convert} miles</h2>`
            }
        }
        else {
            answerDiv.innerHTML = '<h2>Please enter a number!</h2>';
        }
        //handle submission of form & distance conversion
    });


})();
