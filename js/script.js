$(window).ready(function () {
    var menu = $('.menu');
    var container = $('#menu-container');

    menu.on('click', function () {
        container.addClass('active');
    });
});
