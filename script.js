window.onload = _=>{
    const game = document.getElementById('game');
    const resetButton = document.getElementById('resetButton');
    const cardsNumber = 12;

    function fIllArray(n){

        let nCards = n/2;
        let pairs = [];
        let count = 0;

        for(let i = 0; i < 2; i++){
            for(let j = 0; j < nCards; j++){

                pairs[count] = j + 1;
                count += 1;
            }
        }

       
        console.log(pairs);  // point control
        return pairs;
    }

    function getRandomInt(n){
        return Math.floor(Math.random() * n);
    }

    function printCards(arr){
        let element = 0;
        let elements = arr;
        let longArr = arr.length;
        let int = 0;

        console.log(arr.length); // point control
       
        for(let i = 0; i < longArr; i++){

            int = getRandomInt(elements.length);
            element = elements.splice(int, 1);

            game.innerHTML += `
            <div class="game__card card pair${element[0]}">
                <div class="card__back">
                    <div class="card__border">
                        <div class="card__wrapper-img">
                            <i class="card__icon fa-solid fa-question"></i>
                        </div>
                    </div>
                </div>

                <div class="card__front">
                    <div class="card__border">
                        <div class="card__wrapper-img">
                            <img src="./img/0${element[0]}.jpg" alt="" class="card__img">
                        </div>
                    </div>
                </div>
            </div>`;

            console.log(i); // point control
        }
        
    }

    function showCard(card){
        card.childNodes[1].classList.toggle('show-card');
    }

    function leadTime(result){

        setTimeout(_=>{

            if(!result){
                showCard(pairs[0]);
                showCard(pairs[1]);
            }
            pairs = [];
            openCard = true;
            endGame();
        }, 500);
    }

    let elements = document.getElementsByClassName('card');
    let pairs = [];
    let resultPair = false;

    function compareCards(card){
        pairs.push(card);

        if(pairs.length === 2){

            openCard = false;

            if(pairs[0].classList[2] === pairs[1].classList[2]){
                resultPair = true;
                // alert('son iguales');
            }else{
                // alert('son distintas');
                resultPair = false;
            }
            
            leadTime(resultPair);
        }
    }

    let openCard = true; 

    function addEvent(arr){
        let cards = arr;
        
        for(let i = 0; i < cards.length; i++){
            cards[i].addEventListener('click', _=>{

                if(openCard){
                    if(!cards[i].childNodes[1].classList.contains('show-card')){
                        showCard(cards[i]);
                        compareCards(cards[i]);
    
                        // alert('hola');
                    }
                }
                
            });
        }
    }

    function endGame(){
        let cardsOpened = document.getElementsByClassName('show-card');

        if(cardsOpened.length === cardsNumber){
            // alert('end game');
            document.querySelector('.reset-game').style.display = 'flex';
            console.log('hola');
        }
    }

    resetButton.addEventListener('click',_=>{
        document.location.reload();
    });

    console.log(elements);

    // call functions::
    // ------------------------------------------------

    printCards(fIllArray(cardsNumber));

    addEvent(elements);

}
