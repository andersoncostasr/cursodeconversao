$(function () {
    // Links para o Checkout
    var linkCheckout = 'https://pay.hotmart.com/N51854403W?off=sx48f02w&checkoutMode=10';
    var url_string = window.location.href;
    var urlparams = new URL(url_string);
    var sck = urlparams.searchParams.get("sck");

    var url = linkCheckout + '&sck=' + sck;

    $('.checkout').wrap($('<a rel="noreferrer" target="_blank">').attr('href', url));
    $('.checkout-text').wrap($('<a rel="noreferrer" target="_blank">').attr('href', url));

    //Rotator do Whatsapp
    var atendente = []
    atendente[0] = 'https://api.whatsapp.com/send?phone=5521990802711&text=Oii!%20Eu%20estava%20no%20P%C3%A1gina%20de%Remarketing%20e%20Fiquei%20com%20Obje%C3%A7%C3%B5es!'
    //atendente[1] = 'https://api.whatsapp.com/send?phone=5521994292234&text=Oii!%20Eu%20estava%20no%20P%C3%A1gina%20de%20Vendas%20e%20Fiquei%20com%20Obje%C3%A7%C3%B5es!'

    var random = Math.floor(Math.random() * atendente.length);

    var whatsapp = atendente[random];
    $('.btn-whatsapp').wrap($('<a rel="noreferrer" target="_blank">').attr('href', whatsapp));
});

document.addEventListener('DOMContentLoaded', () => {
    const end = moment().utc().local().endOf('day').unix();

    var flipdownUm = new FlipDown(end, "flipdownUm", {
        headings: ["Dias", "Horas", "Minutos", "Segundos"],
        theme: "light"
    }).start()

    var flipdownDois = new FlipDown(end, "flipdownDois", {
        headings: ["Dias", "Horas", "Minutos", "Segundos"],
        theme: "dark"
    }).start()

    var flipdownTres = new FlipDown(end, "flipdownTres", {
        headings: ["Dias", "Horas", "Minutos", "Segundos"],
        theme: "light"
    }).start()

    var flipdownQuatro = new FlipDown(end, "flipdownQuatro", {
        headings: ["Dias", "Horas", "Minutos", "Segundos"],
        theme: "dark"
    }).start()

    var flipdownCinco = new FlipDown(end, "flipdownCinco", {
        headings: ["Dias", "Horas", "Minutos", "Segundos"],
        theme: "light"
    }).start()
});