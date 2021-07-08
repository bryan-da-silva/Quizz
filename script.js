let i = 0, good = 0, bad = 0, result = 0, reponse = 0, affichage = 1, question = -1;

$(document).ready(function(){
    $.getJSON("document.json", function(req){
        $('button').click(function() {
            affichage = 1;
            reponse = 0;
            question++;
            var but = $(this).attr('id');
            $('#questions').text(req[question].question);
            if(question <= 8) {
                while (affichage <= 4) {
                    $(".button" + affichage).text(req[question].reponses[reponse]);
                    affichage++;
                    reponse++;
                }
                $('.compteur').text(question + 1);
                if(but === req[question].solution) {
                    console.log("coucou");
                }
                console.log(req[question].solution);
            }
        });
    });
});