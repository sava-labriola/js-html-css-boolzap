// invio messaggio e risposta dopo un secondo

$('.fa-microphone').click(function() {
    var testo_inserito = $('.write').val();
    $('.write').val('');
    var nuovo_messaggio = $('.template .message-uscita-wrapper').clone();
    $('.chat-wrapper.active').append(nuovo_messaggio);
    $('.message-uscita-wrapper:last-of-type p').text(testo_inserito);
    setTimeout(function(){
        var nuovo_messaggio_arrivo = $('.template .message-arrivo-wrapper').clone();
        $('.chat-wrapper.active').append(nuovo_messaggio_arrivo);
        $('.message-arrivo-wrapper:last-of-type p').text('ok');
    }, 1000);
})

//ricerca utente dinamica (non key sensitive)

$('.search-contact').keyup(function() {
    if($('.search-contact').val()){
        var testo_utente = $('.search-contact').val().toLowerCase();
        $('.user-chat').each(function() {
            var testo_info = $(this).find('.user-info p:first-of-type').text().toLowerCase();
            if (testo_info.includes(testo_utente)) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        })
    }
    else {
        $('.user-chat').show();
    }
})

$('.user-chat').click(function() {
    var indice_contatto = $(this).index();
    $('.chat-container').find('.active').removeClass('active');
    $('.chat-wrapper').eq(indice_contatto).toggleClass('active');
    var nome_contatto = $(this).find('.user-info p:first-of-type').text();
    $('.chat-info p:first-of-type').text(nome_contatto);
})

$('.active .messaggio-in-uscita').click(function () {
    var tendina = $('.template .tendina').clone();
    $(this).append(tendina);
    $('.tendina p').text('cancella messaggio');
})

$('.tendina p').click(function () {
    $('.active .messaggio-in-uscita').hide();
})
