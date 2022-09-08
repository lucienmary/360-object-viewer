$(function() {

    const CTX = $('#ctx');
    const GLASS = $('#glass');
    const ASSETS_CONTAINER = $('#assets');
    
    const COMMAND = {
        top: $('.arrow-top'), // useless by default.
        right: $('.arrow-right'),
        bottom: $('.arrow-bottom'), // useless by default.
        left: $('.arrow-left')
    }

    const SETTINGS = {
        zoom: 0.66666666,
        axis: 'xy' // x, y, xy.
    }

    function init(params) {
        const FIRST_IMG = ASSETS_CONTAINER.find("img").first();
        FIRST_IMG.addClass('display');

        CTX.width = FIRST_IMG.outerWidth() * SETTINGS.zoom;
        CTX.height = FIRST_IMG.outerHeight() * SETTINGS.zoom;

        CTX.css({'width' : CTX.width, 'height' : CTX.height});
        GLASS.css({'width' : CTX.width, 'height' : CTX.height});

        switch (SETTINGS.axis) {
            case 'x':
                COMMAND.right.css('display', 'unset');
                COMMAND.left.css('display', 'unset');
                break;
            case 'y':
                COMMAND.top.css('display', 'unset');
                COMMAND.bottom.css('display', 'unset');
                break;
            case 'xy':
                COMMAND.top.css('display', 'unset').addClass('arrow-y-top-tiny');
                COMMAND.right.css('display', 'unset');
                COMMAND.bottom.css('display', 'unset').addClass('arrow-y-bottom-tiny');
                COMMAND.left.css('display', 'unset');
                break;
            default:
                COMMAND.right.css('display', 'unset');
                COMMAND.left.css('display', 'unset');

                console.error('SETTINGS.axis is not defined. X axis is by default at init function.');
                SETTINGS.axis = 'x';
                break;
        }
    }

    init();

    GLASS.on('click', (e) => {
        move(e);
    });

    function move(e) {
        const DIRECTION = $(e.target).data('direction');
        console.log(DIRECTION);
    }
    
});