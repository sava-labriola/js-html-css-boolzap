//invio messaggio

$('.fa-microphone').click(function() {
    var testo_inserito = $('.write').val();
    $('.write').val('');
    var nuovo_messaggio = $('.template .message-uscita-wrapper').clone();
    $('.chat-wrapper').append(nuovo_messaggio);
    $('.message-uscita-wrapper:last-of-type p').text(testo_inserito);
})
