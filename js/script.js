$(function() {

    const CTX = $('#ctx');
    const GLASS = $('#glass');
    const ASSETS = {
        container: $('#assets'),
        nbOfAssets: $('#assets').children().length,
        currentImg: '',
        baseURL: 'https://lucienmary.github.io/host-img-codepen/' // Can be taken from the src.
    };
    
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
        ASSETS.currentImg = ASSETS.container.find("img").first();
        ASSETS.currentImg.addClass('display');

        CTX.width = ASSETS.currentImg.outerWidth() * SETTINGS.zoom;
        CTX.height = ASSETS.currentImg.outerHeight() * SETTINGS.zoom;

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
        stateChange(e);
    });

    function stateChange(e) {
        const DIRECTION = $(e.target).data('direction');

        var nameOfFileTab = ASSETS.currentImg[0].getAttribute('src').split('/');
        ASSETS.currentImg.id = parseInt((nameOfFileTab[nameOfFileTab.length-1].split('.'))[0]);
        ASSETS.currentImg.ext = (nameOfFileTab[nameOfFileTab.length-1].split('.'))[1];

        if (DIRECTION == 'left' || DIRECTION == 'right') {
            horizontalShift(DIRECTION);
        } else {
            verticalShift(DIRECTION);
        }
    }

    function horizontalShift(direction) {
        if (direction == 'right') {
            idNextImg = ASSETS.currentImg.id < (ASSETS.nbOfAssets - 1) ? ASSETS.currentImg.id + 1 : 0;
            selectImg(idNextImg);

        } else {
            idNextImg = ASSETS.currentImg.id > 0 ? ASSETS.currentImg.id - 1 : ASSETS.nbOfAssets - 1;
            selectImg(idNextImg);
        }
    }

    function verticalShift(direction) {
        // To do later.
    }

    function selectImg(id) {
        let nextImg = CTX.find(`img[src="${ASSETS.baseURL + id}.${ASSETS.currentImg.ext}"]`);

        ASSETS.currentImg.removeClass('display');
        ASSETS.currentImg.id = id;
        ASSETS.currentImg = nextImg;
        ASSETS.currentImg.addClass('display');
    }
    
});