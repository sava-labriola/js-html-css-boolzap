//milestone 1

//invio messaggio e risposta dopo un secondo (metodo clone)

// $('.microphone').click(function() {
//     var testo_inserito = $('.write').val();
//     $('.write').val('');
//     var nuovo_messaggio = $('.template .message-uscita-wrapper').clone();
//     $('.chat-wrapper.active').append(nuovo_messaggio);
//     $('.message-uscita-wrapper:last-of-type p').text(testo_inserito);
//     setTimeout(function(){
//         var nuovo_messaggio_arrivo = $('.template .message-arrivo-wrapper').clone();
//         $('.chat-wrapper.active').append(nuovo_messaggio_arrivo);
//         $('.message-arrivo-wrapper:last-of-type p').text('ok');
//     }, 1000);
// })

//invio messaggio e risposta dopo un secondo (metodo template Handlebars)

$('.microphone').click(function() {
//recupero struttura template html
    var template_html = $('#sent').html();
//funzione per utilizzare il template
    var template_function = Handlebars.compile(template_html);
//recupero del messaggio scritto dall' utente
    var testo_inserito = $('.write').val();
    $('.write').val('');
//oggetto con il messaggio inserito dall' utente
    var messaggio_inserito = {
        'messaggio' : testo_inserito
    };
//html finale con Handlebars
    var html_finale = template_function(messaggio_inserito);
//append del messaggio nella chat
    $('.chat-wrapper.active').append(html_finale);
//ricevo un messaggio di risposta dopo un secondo
    setTimeout(function(){
//recupero struttura template html
        var template_html = $('#received').html();
//funzione per utilizzare il template
        var template_function = Handlebars.compile(template_html);
//oggetto con il messaggio inserito dall' utente
        var messaggio_inserito = {
            'messaggio' : 'ok'
        };
//html finale con Handlebars
        var html_finale = template_function(messaggio_inserito);
//append del messaggio nella chat
        $('.chat-wrapper.active').append(html_finale);
    }, 1000);
})

//milestone 2

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

//milestone 3

//cambio chat dei contatti tramite indice

// $('.user-chat').click(function() {
//     var indice_contatto = $(this).index();
//     $('.chat-container').find('.active').removeClass('active');
//     $('.chat-wrapper').eq(indice_contatto).toggleClass('active');
//     var nome_contatto = $(this).find('.user-info p:first-of-type').text();
//     $('.chat-info p:first-of-type').text(nome_contatto);
// })

//cambio chat dei contatti tramite data

$('.user-chat').click(function () {
    $('.user-chat').removeClass('active');
    $(this).addClass('active');
    var data_chat = $(this).attr('data-chat');
    console.log(data_chat);
    $('.chat-container').find('.active').removeClass('active');
    $('.chat-wrapper[data-chat="'+ data_chat +'"]').toggleClass('active');
    var nome_contatto = $(this).find('.user-info p:first-of-type').text();
    $('.chat-info p:first-of-type').text(nome_contatto);
})

//eliminare un messaggio selezionato

$(document).on('click', '.active .messaggio-in-uscita', function () {
    var tendina = $('.template .tendina').clone();
    $(this).append(tendina);
    $(this).next().text('cancella messaggio');
})

$(document).on('click', '.tendina p', function () {
    $(this).closest('.message-uscita-wrapper').remove();
})
