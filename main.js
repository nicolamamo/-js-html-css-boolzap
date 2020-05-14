$('#invia').click(invia_messaggio);

$('#send_it').keypress(function(event){
    if (event.which == 13) {
        console.log('13');
        invia_messaggio();
    }
})


function invia_messaggio() {

//creo testo utente
     var messaggio_utente = $('#send_it').val();
     console.log(messaggio_utente);
    // $('.dialogo').append( messaggio_utente);
//creo template nuvo messaggio e lo copip
     var nuovo_messaggio = $('.template .messaggio' ).clone();
//aggiungo testo
     nuovo_messaggio.text(messaggio_utente);

     nuovo_messaggio.addClass('mio')
//aggiungo il nuvo messaggio
     $('.dialogo').append(nuovo_messaggio)

    //resetto l imput
    $('#send_it').val('');
//ogni messaggio risposts ok fopo un secondo
    setTimeout(rispondi, 1000);
}

// milestone 2
//ogni messaggio risposts ok fopo un secondo



function rispondi(){

  var risposta = $(".template .messaggio").clone();
  console.log(risposta);
  risposta.text("ok")
  risposta.addClass("suo");
  console.log(risposta);

  $(".dialogo").append(risposta);
}

//funzione cerca : scrivedno nell' imput visualizzo solo i nomi che iniziano con le lettere scritte

$('#lente').click(function(){
//recupero testo input
var trova_contatto = $('#ricerca').val();
//recupero tutti i contatti
$('.contatto').each(function(){
    //recupero nome contatto
    var nome_contatto = $(this).find('.amico').text().toLowerCase()
    console.log(nome_contatto);
    if ( trova_contatto == nome_contatto) {
        $(this).show();
    }
    else {
        $(this).hide();
    }
});
// verifico se corrisponde

//se crorrisponde lo visualizzo

// se non lo nascondo






})
