$( document ).ready(function() {

    //al clic sulla classe next si attiva la funzione prossimaslide
    $(".next").click(prossimaSlide);

    //al clic sulla classe prev si attiva la funzione precedenteslide
    $(".prev").click(precedenteSlide);

    // funzione prossimaslide
    function prossimaSlide(){

        //in una variabile salvo la posizione active dell'immagine e della nav orizz
        var posizioneImg = $(".slider-wrapper .images  img.active");
        var posizioneNav = $(".nav i.active");

        //tolgo la classe active perchè altrimenti rimane sul precedente posizionamento
        posizioneImg.removeClass("active");
        posizioneNav.removeClass("active");



        if(posizioneImg.hasClass("last")){
            $(".slider-wrapper .images  img.first").addClass("active");
            $(".nav i.first").addClass("active");
        } else{

            posizioneImg.next("img").addClass("active");
            posizioneNav.next("i").addClass("active");
        }

    }
    function precedenteSlide(){

            var posizioneImg = $(".slider-wrapper .images  img.active");
            var posizioneNav = $(".nav i.active");

            posizioneImg.removeClass("active");
            posizioneNav.removeClass("active");

            if(posizioneImg.hasClass("first")){
                $(".slider-wrapper .images  img.last").addClass("active");
                $(".nav i.last").addClass("active");
            } else{
                posizioneImg.prev("img").addClass("active");
                posizioneNav.prev("i").addClass("active");
            }

        }
         $(document).keyup(function(event){
           console.log(event.which);
           switch(event.which) {
              case 37:
                precedenteSlide()
                break;
              case 39:
               prossimaSlide();
                break;

            }
         })

    });
