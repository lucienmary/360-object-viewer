$(function() {

    const CTX = $('#ctx');
    const GLASS = $('#glass');
    const ASSETS_CONTAINER = $('#assets');

    const SETTINGS = {
        zoom: 0.66666666
    }

    function init(params) {
        const FIRST_IMG = ASSETS_CONTAINER.find("img").first();
        FIRST_IMG.addClass('display');

        CTX.width = FIRST_IMG.outerWidth() * SETTINGS.zoom;
        CTX.height = FIRST_IMG.outerHeight() * SETTINGS.zoom;

        CTX.css({'width' : CTX.width, 'height' : CTX.height});
        GLASS.css({'width' : CTX.width, 'height' : CTX.height});
    }

    init();
    
});