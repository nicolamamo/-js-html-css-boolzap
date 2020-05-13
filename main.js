$('#invia').click(invia_messaggio);

$('#send_it').keypress(function(event){
    if (event.wich == 13) {
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
//aggiungo il nuvo messaggio
     $('.dialogo').append(nuovo_messaggio)

    //resetto l imput
    $('#send_it').val('');
}
