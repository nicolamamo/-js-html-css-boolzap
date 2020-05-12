
//cliccando microfono utente visualizza il suo messaggio
    $("#invia").click(function(){

//creo testo utente
     var messaggio_utente = $('#send_it').val();
     console.log(messaggio_utente);
    // $('.dialogo').append( messaggio_utente);
//creo template nuvo messaggio e lo copip
     var nuovo_messaggio = $('.template .messaggio' ).clone();
//aggiungo testo
     nuovo_messaggio.text(messaggio_utente);
//aggiungo il nuvo messaggio
     $('.dialogo').append(nuovo_messaggio)

})
//    var messaggio_utente = $('#mex').val()

    //$('#dialogo').append( '<div id='mio'>' + messaggio_utente + '</div>')


// premendo invio il messaggio viene visualizzato
