// https://www.w3schools.com/jquery/event_ready.asp

(function () {
    //Parallax Scrolling
    // https://gist.github.com/omgmog/7198844
    var $el = $('.parallax-background');
    $(window).on('scroll', function () {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position': '5% ' + (-.1 * scroll) + 'px'
        });
    });

    // Typing text
    // https://github.com/mattboldt/typed.js/
    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 30,
        loop: true
    });

    // Image change on hover script
    // https://api.jquery.com/mouseover/
    $('h3.im_quynh').on('mouseenter', function (event) {
        // https://api.jquery.com/hide/#hide
        $('img.girl_bg').hide();
        // https://api.jquery.com/show/#show
        $('img.quynh_bg').show();
    });

    // https://api.jquery.com/mouseleave/#mouseleave-handler
    $('h3.im_quynh').on('mouseleave', function (event) {
        $('img.girl_bg').show();
        $('img.quynh_bg').hide();
    });


    // Burger menu script
    var imageExpandNavigation = $('expandNavigationImage');
    var imageExpandNavigationPathNormal = './assets/images/images_assets/menu.png';
    var asideNavigation = $('#aside');
    var expandNavigation = false;

    function changeButtonExpandNavigationImage(path) {
        // https://api.jquery.com/attr/
        imageExpandNavigation.attr('src', path);
    }

    function setExpandNavigation(expand) {
        expandNavigation = expand;
        if (!expandNavigation) {
            // https://api.jquery.com/css/#css-propertyName
            asideNavigation.css('bottom', '100%');
            setTimeout(() => {
                asideNavigation.css('top', '100%');
                asideNavigation.css('bottom', 0);
            }, 150);
        } else {
            asideNavigation.css('top', 0);
        }
    }

    $('.aside__list__item a').on('click', function (event) {
        setExpandNavigation(false);
    });

    $('#expandNavigation').on('mouseenter', function (event) {
        changeButtonExpandNavigationImage(imageExpandNavigationPathNormal)
    });

    $('#expandNavigation').on('mouseleave', function (event) {
        changeButtonExpandNavigationImage(imageExpandNavigationPathNormal);
    });

    $('#expandNavigation').on('click', function (event) {
        setExpandNavigation(true);
    });

    $('#asideClose').on('click', function (event) {
        setExpandNavigation(false);
    });
})();