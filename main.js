$('#invia').click(invia_messaggio);

$('#send_it').keypress(function(event){
    if (event.which == 13) {
        console.log('13');
        invia_messaggio();
    }
});



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
});

// verifico se corrisponde

//se crorrisponde lo visualizzo

// se non lo nascondo

//clicaando sul contatto utente visualizza la ripsettiva conversazione
//$('#contatto').click(function(){


//})

//intercetto il click su un contatto

$('.contatto').click(function(){
    //tolgo la classe active a tutti i contatti
    $('.contatto').removeClass('active');
    //aggiungo classe activer all' ultimo cliccato
    $(this).addClass('active');
    // recupero il data char
    var chat = $(this).attr('data-chat');
    // tolgo la classe active a tutti i messaggi
    $('.right-messages').removeClass("active");
    //recupero il right messager che ha la stessa data chat del contatto e gli do classe activer
    $('.right-messages[data-chat="' + chat + '"]').addClass('active');
    //recupero il contatto su cui ho cliccato
    var nome_contatto = $(this).find('.amico').text();
    $('.chat').text(nome_contatto);

    // recupero il percorso del file dell'immagine del contatto su cui ho cliccato
    var src_contatto = $(this).find('.conversazione').attr('src');
    // console.log(src_contatto);
    // imposto il percorso del file dell'immagine nella parte di intestazione di destra
    $('.conversazione').attr('src', src_contatto);

});
// intercetto il click sull'icona del dropdown del messaggio
$('.right-messages').on('click', '.message-options', function(){
    // visualizzo il div "message-options-panel" corrispondente al messaggio su cui ho cliccato e aggiungo la classe "z-index-100" per far sì che il pannellino sia sempre visibile
    $(this).siblings('.message-options-panel').toggleClass('active z-index-100');
});

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
     $('.right-message.active').append(nuovo_messaggio)

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

  $(".right-message.active").append(risposta);
}
