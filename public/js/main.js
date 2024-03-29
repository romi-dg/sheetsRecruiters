
// Category selectors
$(document).ready(function() {

    const nav = '<div id="nav-container">\
    <header>\
    <div id="nav-logo"><a href="/"><img src="https://cdn.sheetsforrecruiters.com/assets/sheets-logo-white.png" alt="SFR logo"></a></div>\
    <div>\
        <a class="color--white bold f17 m-r-20" href="/sheets" class="uppercase">SHEETS</a>\
        <a class="color--white bold f17" href="https://www.starred.com/about" target="_blank" class="uppercase">ABOUT</a>\
    </div>\
    </header>\
    </div> \
    <div id="nav-container-mob"> <!-- Mob Navbar -->\
    <header>\
        <div id="nav-logo-mob"><a href="/"><img src="https://cdn.sheetsforrecruiters.com/assets/logo-favicon.svg" alt="SFR logo"></a></div>\
        <div>\
            <a class="bold f17 m-r-20 color--white" href="/sheets" class="uppercase">SHEETS</a>\
            <a class="bold f17 color--white" href="https://www.starred.com/about" target="_blank" class="uppercase">ABOUT</a>\
        </div>\
    </header>\
    </div>';

    const footer = '<div class="row flex--row row-footer">\
    <div class="w-100 footer-video">\
        <div class="circles">\
            <div></div>\
            <div></div>\
            <div></div>\
        </div>\
        <div style="width:100%; height:0; position: relative; padding-bottom:56.25%"><iframe src="https://g16zktcb.videomarketingplatform.co/v.ihtml/player.html?token=b9bd120ab816fc6f1fcb08cf9b4d146a&source=embed&photo%5fid=58710372" style="width:100%; height:100%; position: absolute; top: 0; left: 0;" frameborder="0" border="0" scrolling="no" allowfullscreen="1" mozallowfullscreen="1" webkitallowfullscreen="1" allow="autoplay; fullscreen"></iframe></div>\
    </div>\
    <div class="color--white p-l-80 w-80">\
        <div class="footer-logo"><img src="https://cdn.sheetsforrecruiters.com/assets/starred-white-full.png" alt="Starred"></div>\
        <h2 class="m-t-10">Take Control of your Candidate Experience</h2>\
        <p class="f19">Our feedback solution empowers Talent Acquisition teams to effortlessly gather feedback and get the actionable insights you need to drive change.</p>\
        <a class="btn btn--green" href="https://www.starred.com" target="_blank">Visit Starred.com</a>\
    </div>\
    </div>';

    $('#navbar').html(nav);    
    $('#footer').html(footer);


    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $('#nav-container').css('display', 'none');
            $('#nav-container-mob').addClass('show-nav-mob');
        }
        else {
            $('#nav-container-mob').removeClass('show-nav-mob');
            $('#nav-container').css('display', 'block');
        }
    });

    $('#all').on('click', function(){
        highlight($('#all'))
        setTimeout(function(){
            show($('#1, #2, #3, #4, #5, #6'))
        }, 50)
    })
    $('#content').on('click', function(){
        highlight($('#content'))
        setTimeout(function(){
            show($('#1, #2, #3'))
        }, 50)
    })
    $('#tooling').on('click', function(){
        highlight($('#tooling'))
        setTimeout(function(){
            show($('#4, #5'))
        }, 50)
    })
    $('#metrics').on('click', function(){
        highlight($('#metrics'))
        setTimeout(function(){
            show($('#6'))
        }, 50)
    })
 });

 const hide = (e) => {
    e.removeClass('show')
    e.addClass('hide')
 }

 const show = (e) => {
    e.removeClass('hide')
    e.addClass('show')
 }

 const highlight = (e) => {
    $('.categories').removeClass('highlight')
    e.addClass('highlight')
    hide($('#1, #2, #3, #4, #5, #6'))
 }








