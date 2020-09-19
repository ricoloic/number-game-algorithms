$(function () {
    let number;
    let tryLeft = $('#numTryLeft')
    let numberRange = $('#number-range');
    let option;
    let bot = $('#bot');
    let guess;
    let algo = $('#algo');
    let submit = $('#submit');
    let select = $('#difficulty');


    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
    };

    function winLose (state) {

        algo.hide();

        // wining or losing state
        if (state == 0) {
            $('#win-lose').text('Great job you Won the game !');
        } else if (state == 1) {
            $('#win-lose').text('Oh no you lost !');
        }

        $('#state').show();
    };

    function checkSubmit (defined) {
        if (guess == defined) {

            winLose(0);

        } else if (guess < defined) {

            return 1;

        } else if (guess > defined) {

            return 2;

        }
    };

    function submitReturn (defined) {
        if (checkSubmit(defined) == 1) {

            bot.text('My number is higher !');

        } else if (checkSubmit(defined) == 2) {

            bot.text('My number is lower !');

        }
    };

    function initialize(min, max) {
        number = getRandomIntInclusive(min, max);
        console.log(number);
        numberRange.text(min + ' and ' + max)

        $('#state').hide();
    };

    select.change(() => {
        option = $('#difficulty option:selected').val();
        
        if (option == 0) {
            initialize(1, 10);

            tryLeft.text('Unlimited');
            algo.show();

            submit.click( () => {
                guess = $('#guess').val();

                submitReturn(number);

            });

        } else if (option == 1) {
            initialize(1, 10);

            algo.show();

            let i = 0;
            tryLeft.text(`You've got ${ 5 - i } tries left`);

            submit.click( () => {
                guess = $('#guess').val();
                i++;

                submitReturn(number);
                tryLeft.text(`You've got ${ 5 - i } tries left`);

                if (i === 5) {

                    winLose(1);
    
                }
            });
        } else if (option == 2) {
            initialize(1, 100);

            algo.show();

            let i = 0;
            tryLeft.text(`You've got ${ 5 - i } tries left`);

            submit.click( () => {
                guess = $('#guess').val();
                i++;

                submitReturn(number);
                tryLeft.text(`You've got ${ 5 - i } tries left`);

                if (i === 5) {

                    winLose(1);
    
                }
            });
        } else if (option == 3) {
            initialize(1, 500);

            algo.show();

            let i = 0;
            tryLeft.text(`You've got ${ 8 - i } tries left`);

            submit.click( () => {
                guess = $('#guess').val();
                i++;

                submitReturn(number);
                tryLeft.text(`You've got ${ 8 - i } tries left`);

                if (i === 8) {

                    winLose(1);
    
                }
            });
        } else if (option == 4) {
            initialize(1, 1000);

            algo.show();

            let i = 0;
            tryLeft.text(`You've got ${ 9 - i } tries left`);

            submit.click( () => {
                guess = $('#guess').val();
                i++;

                submitReturn(number);
                tryLeft.text(`You've got ${ 9 - i } tries left`);

                if (i === 9) {

                    winLose(1);
    
                }
            });
        }
    });

    $('#guess').keyup( () => {
        if ($('#guess').val() > 1000) {
            $('#guess').val('');
        }
    });

    $('#replay').click( () => {
        location.reload();
    });
});