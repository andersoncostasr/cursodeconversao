$(function () {
    // Links para o Checkout
    var linkCheckout = 'https://pay.hotmart.com/N51854403W?off=wlvonm69';
    var url_string = window.location.href;
    var urlparams = new URL(url_string);
    var sck = urlparams.searchParams.get("sck");

    var url = linkCheckout + '?sck=' + sck;

    $('.checkout').wrap($('<a rel="noreferrer" target="_blank">').attr('href', url));

    // Carrosel de Depoimentos
    $(".owl-carousel").owlCarousel({
        loop: true,
        responsiveClass: true,
        // autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            768: {
                items: 3,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });

    //Rotator do Whatsapp
    var atendente = []
    atendente[0] = 'https://api.whatsapp.com/send?phone=5521990802711&text=Eu%20quero%20saber%20mais%20Curso%20o%20de%20Dieta%20Conversão'
    atendente[1] = 'https://api.whatsapp.com/send?phone=5521994292234&text=Eu%20quero%20saber%20mais%20Curso%20o%20de%20Dieta%20Conversão'

    var random = Math.floor(Math.random() * atendente.length);

    var whatsapp = atendente[random];
    $('.btn-whatsapp').wrap($('<a rel="noreferrer" target="_blank">').attr('href', whatsapp));
});