if (typeof jQuery == 'undefined') {
    document.write("<script src = 'https://www.toolnb.com/Public/md/js/jquery.js' type = 'text/javascript'><\/script>");
}
var praiseHost = "https://api2.toolnb.com";
var praiseMainHtml = '<style>\n' +
    '    .praise-main {\n' +
    '        direction: ltr;\n' +
    '        display: block;\n' +
    '        opacity: 1;\n' +
    '        text-align: center;\n' +
    '    }\n' +
    '\n' +
    '    .praise-main svg {\n' +
    '        display: block;\n' +
    '        height: 48px;\n' +
    '        margin: auto;\n' +
    '        width: 48px;\n' +
    '        vertical-align: top;\n' +
    '    }\n' +
    '\n' +
    '    .st-btn {\n' +
    '        transition: all 0.2s ease-in;\n' +
    '        display: inline-block;\n' +
    '        font-size: 24px;\n' +
    '        line-height: 24px;\n' +
    '        opacity: 1;\n' +
    '        padding: 5px;\n' +
    '        position: relative;\n' +
    '        text-align: center;\n' +
    '        vertical-align: top;\n' +
    '        white-space: nowrap;\n' +
    '        width: 72px;\n' +
    '        cursor: pointer;\n' +
    '    }\n' +
    '\n' +
    '    #st-1 .st-btn .st-text {\n' +
    '        display: none;\n' +
    '        font-weight: bold;\n' +
    '        line-height: 12px;\n' +
    '        white-space: normal;\n' +
    '        word-break: break-all;\n' +
    '    }\n' +
    '\n' +
    '    #st-1 .st-btn > span {\n' +
    '        color: #555;\n' +
    '        font-size: 14px;\n' +
    '        font-weight: 400;\n' +
    '        letter-spacing: 0.5px;\n' +
    '        vertical-align: top;\n' +
    '    }\n' +
    '\n' +
    '    .praise-main .st-btn:hover svg {\n' +
    '        width: 60px;\n' +
    '        height: 60px;\n' +
    '    }\n' +
    '</style>\n' +
    '<div class="praise-main" id="st-1">\n' +
    '    <div class="st-btn" data-id="zan">\n' +
    '        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">\n' +
    '            <circle cx="32" cy="32" r="30" fill="#ffdd67"></circle>\n' +
    '            <g fill="#664e27">\n' +
    '                <circle cx="20.5" cy="26.6" r="5"></circle>\n' +
    '                <circle cx="43.5" cy="26.6" r="5"></circle>\n' +
    '                <path d="m44.6 40.3c-8.1 5.7-17.1 5.6-25.2 0-1-.7-1.8.5-1.2 1.6 2.5 4 7.4 7.7 13.8 7.7s11.3-3.6 13.8-7.7c.6-1.1-.2-2.3-1.2-1.6"></path>\n' +
    '            </g>\n' +
    '        </svg>\n' +
    '        <span class="st-count">0</span>\n' +
    '        <span class="st-text">赞</span>\n' +
    '    </div>\n' +
    '    <div class="st-btn" data-id="ai">\n' +
    '        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">\n' +
    '            <path d="M62,32c0,16.6-13.4,30-30,30C15.4,62,2,48.6,2,32C2,15.4,15.4,2,32,2C48.6,2,62,15.4,62,32z" fill="#ffdd67"></path>\n' +
    '            <g fill="#f46767">\n' +
    '                <path d="m61.8 13.2c-.5-2.7-2-4.9-4.5-5.6-2.7-.7-5.1.3-7.4 2.7-1.3-3.6-3.3-6.3-6.5-7.7-3.2-1.4-6.4-.4-8.4 2.1-2.1 2.6-2.9 6.7-.7 12 2.1 5 11.4 15 11.7 15.3.4-.2 10.8-6.7 13.3-9.9 2.5-3.1 3-6.2 2.5-8.9"></path>\n' +
    '                <path d="m29 4.7c-2-2.5-5.2-3.5-8.4-2.1-3.2 1.4-5.2 4.1-6.5 7.7-2.4-2.3-4.8-3.4-7.5-2.6-2.4.7-4 2.9-4.5 5.6-.5 2.6.1 5.8 2.5 8.9 2.6 3.1 13 9.6 13.4 9.8.3-.3 9.6-10.3 11.7-15.3 2.2-5.3 1.4-9.3-.7-12"></path>\n' +
    '            </g>\n' +
    '            <path d="m49 38.1c0-.8-.5-1.8-1.8-2.1-3.5-.7-8.6-1.3-15.2-1.3-6.6 0-11.7.7-15.2 1.3-1.4.3-1.8 1.3-1.8 2.1 0 7.3 5.6 14.6 17 14.6 11.4-.1 17-7.4 17-14.6" fill="#664e27"></path>\n' +
    '            <path d="m44.7 38.3c-2.2-.4-6.8-1-12.7-1-5.9 0-10.5.6-12.7 1-1.3.2-1.4.7-1.3 1.5.1.4.1 1 .3 1.6.1.6.3.9 1.3.8 1.9-.2 23-.2 24.9 0 1 .1 1.1-.2 1.3-.8.1-.6.2-1.1.3-1.6 0-.8-.1-1.3-1.4-1.5" fill="#fff"></path>\n' +
    '        </svg>\n' +
    '        <span class="st-count">0</span>\n' +
    '        <span class="st-text">大爱</span>\n' +
    '    </div>\n' +
    '    <div class="st-btn" data-id="daxiao">\n' +
    '        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">\n' +
    '            <circle cx="32" cy="32" r="30" fill="#ffdd67"></circle>\n' +
    '            <g fill="#664e27">\n' +
    '                <path d="m51.7 19.4c.6.3.3 1-.2 1.1-2.7.4-5.5.9-8.3 2.4 4 .7 7.2 2.7 9 4.8.4.5-.1 1.1-.5 1-4.8-1.7-9.7-2.7-15.8-2-.5 0-.9-.2-.8-.7 1.6-7.3 10.9-10 16.6-6.6"></path>\n' +
    '                <path d="m12.3 19.4c-.6.3-.3 1 .2 1.1 2.7.4 5.5.9 8.3 2.4-4 .7-7.2 2.7-9 4.8-.4.5.1 1.1.5 1 4.8-1.7 9.7-2.7 15.8-2 .5 0 .9-.2.8-.7-1.6-7.3-10.9-10-16.6-6.6"></path>\n' +
    '                <path d="m49.7 34.4c-.4-.5-1.1-.4-1.9-.4-15.8 0-15.8 0-31.6 0-.8 0-1.5-.1-1.9.4-3.9 5 .7 19.6 17.7 19.6 17 0 21.6-14.6 17.7-19.6"></path>\n' +
    '            </g>\n' +
    '            <path d="m33.8 41.7c-.6 0-1.5.5-1.1 2 .2.7 1.2 1.6 1.2 2.8 0 2.4-3.8 2.4-3.8 0 0-1.2 1-2 1.2-2.8.3-1.4-.6-2-1.1-2-1.6 0-4.1 1.7-4.1 4.6 0 3.2 2.7 5.8 6 5.8s6-2.6 6-5.8c-.1-2.8-2.7-4.5-4.3-4.6" fill="#4c3526"></path>\n' +
    '            <path d="m24.3 50.7c2.2 1 4.8 1.5 7.7 1.5s5.5-.6 7.7-1.5c-2.1-1.1-4.7-1.7-7.7-1.7s-5.6.6-7.7 1.7" fill="#ff717f"></path>\n' +
    '            <path d="m47 36c-15 0-15 0-29.9 0-2.1 0-2.1 4-.1 4 10.4 0 19.6 0 30 0 2 0 2-4 0-4" fill="#fff"></path>\n' +
    '        </svg>\n' +
    '        <span class="st-count">0</span>\n' +
    '        <span class="st-text">笑趴</span>\n' +
    '    </div>\n' +
    '    <div class="st-btn" data-id="wa">\n' +
    '        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">\n' +
    '            <circle cx="32" cy="32" r="30" fill="#ffdd67"></circle>\n' +
    '            <circle cx="19" cy="29" r="11" fill="#fff"></circle>\n' +
    '            <path d="m24 29c0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5s2.2-5 5-5c2.8 0 5 2.2 5 5" fill="#664e27"></path>\n' +
    '            <path d="m56 29c0 6.1-4.9 11-11 11-6.1 0-11-4.9-11-11 0-6.1 4.9-11 11-11 6.1 0 11 4.9 11 11" fill="#fff"></path>\n' +
    '            <path d="m50 29c0 2.8-2.2 5-5 5-2.8 0-5-2.2-5-5s2.2-5 5-5c2.8 0 5 2.2 5 5" fill="#664e27"></path>\n' +
    '            <g fill="#917524">\n' +
    '                <path d="m50.2 15.8c-3.2-2.7-7.5-3.9-11.7-3.1-.6.1-1.1-2-.4-2.2 4.8-.9 9.8.5 13.5 3.6.6.5-1 2.1-1.4 1.7"></path>\n' +
    '                <path d="m25.5 12.5c-4.2-.7-8.5.4-11.7 3.1-.4.4-2-1.2-1.4-1.7 3.7-3.2 8.7-4.5 13.5-3.6.7.2.2 2.3-.4 2.2"></path>\n' +
    '            </g>\n' +
    '            <circle cx="32" cy="49" r="9" fill="#664e27"></circle>\n' +
    '            <path d="m26 46c1.2-2.4 3.4-4 6-4 2.6 0 4.8 1.6 6 4h-12" fill="#fff"></path>\n' +
    '        </svg>\n' +
    '        <span class="st-count">0</span>\n' +
    '        <span class="st-text">哇</span>\n' +
    '    </div>\n' +
    '    <div class="st-btn" data-id="ku">\n' +
    '        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">\n' +
    '            <g fill="#65b1ef">\n' +
    '                <ellipse cx="17.5" cy="59.9" rx="12.5" ry="1.5"></ellipse>\n' +
    '                <ellipse cx="44" cy="60.2" rx="18" ry="1.8"></ellipse>\n' +
    '            </g>\n' +
    '            <circle cx="32" cy="32" r="30" fill="#ffdd67"></circle>\n' +
    '            <path d="m44.7 46c-1.4-3.6-4.8-6-12.7-6-8 0-11.3 2.4-12.7 6-.7 1.9.3 5 .3 5 1.3 3.9 1.1 5 12.4 5 11.3 0 11.1-1.1 12.4-5 0 0 1.1-3.1.3-5" fill="#664e27"></path>\n' +
    '            <path d="m41 45c.1-.3 0-.6-.2-.8 0 0-2-2.2-8.8-2.2-6.8 0-8.8 2.2-8.8 2.2-.2.1-.2.5-.2.8l.2.6c.1.3.3.5.5.5h16.6c.2 0 .5-.2.5-.5l.2-.6" fill="#fff"></path>\n' +
    '            <g fill="#65b1ef">\n' +
    '                <path d="m44.5 60.5c2.3 0 4.6 0 6.8 0 8.2-9.9-1.5-20 .9-29.8-2.3 0-4.6 2.5-6.8 2.5-3.2 9.5 7.3 17.4-.9 27.3"></path>\n' +
    '                <path d="m19.5 60.5c-2.3 0-4.6 0-6.8 0-8.2-9.9 1.5-20-.9-29.8 2.3 0 4.6 2.5 6.8 2.5 3.2 9.5-7.3 17.4.9 27.3"></path>\n' +
    '            </g>\n' +
    '            <g fill="#917524">\n' +
    '                <path d="m40.7 18.3c3 3 7.2 4.5 11.4 4.1.6-.1.9 2.1.2 2.2-4.9.4-9.7-1.3-13.1-4.8-.6-.5 1.1-1.9 1.5-1.5"></path>\n' +
    '                <path d="m12 22.4c4.2.4 8.4-1.1 11.4-4.1.4-.4 2.1 1 1.6 1.5-3.4 3.5-8.3 5.2-13.1 4.8-.9 0-.5-2.2.1-2.2"></path>\n' +
    '            </g>\n' +
    '            <g fill="#664e27">\n' +
    '                <path d="m35.9 30.3c4.2 8 12.7 8 16.9 0 .2-.4-.3-.6-1-1-4.2 3.3-11.1 3-14.9 0-.6.4-1.2.6-1 1"></path>\n' +
    '                <path d="m11.2 30.3c4.2 8 12.7 8 16.9 0 .2-.4-.3-.6-1-1-4.2 3.3-11.1 3-14.9 0-.7.4-1.2.6-1 1"></path>\n' +
    '            </g>\n' +
    '        </svg>\n' +
    '        <span class="st-count">0</span>\n' +
    '        <span class="st-text">心碎</span>\n' +
    '    </div>\n' +
    '    <div class="st-btn st-last" data-id="nu">\n' +
    '        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enable-background="new 0 0 64 64">\n' +
    '            <circle cx="32" cy="32" r="30" fill="#ef5350"></circle>\n' +
    '            <path d="m41 49.7c-5.8-4.8-12.2-4.8-18 0-.7.6-1.3-.4-.8-1.3 1.8-3.4 5.3-6.5 9.8-6.5s8.1 3.1 9.8 6.5c.5.8-.1 1.8-.8 1.3" fill="#302424"></path>\n' +
    '            <path d="m10.2 24.9c-1.5 4.7.6 10 5.3 12.1 4.6 2.2 10 .5 12.7-3.7l-6.9-7.7-11.1-.7" fill="#fff"></path>\n' +
    '            <g fill="#302424">\n' +
    '                <path d="m14.2 25.8c-1.4 2.9-.1 6.4 2.8 7.7 2.9 1.4 6.4.1 7.7-2.8 1-1.9-9.6-6.8-10.5-4.9"></path>\n' +
    '                <path d="m10.2 24.9c1.6-1 3.5-1.5 5.4-1.5 1.9 0 3.8.5 5.6 1.3 1.7.8 3.3 2 4.6 3.4 1.2 1.5 2.2 3.2 2.4 5.1-1.3-1.3-2.6-2.4-4-3.4-1.4-1-2.8-1.8-4.2-2.4-1.5-.7-3-1.2-4.6-1.7-1.8-.3-3.4-.6-5.2-.8"></path>\n' +
    '            </g>\n' +
    '            <path d="m53.8 24.9c1.5 4.7-.6 10-5.3 12.1-4.6 2.2-10 .5-12.7-3.7l6.9-7.7 11.1-.7" fill="#fff"></path>\n' +
    '            <g fill="#302424">\n' +
    '                <path d="m49.8 25.8c1.4 2.9.1 6.4-2.8 7.7-2.9 1.4-6.4.1-7.7-2.8-1-1.9 9.6-6.8 10.5-4.9"></path>\n' +
    '                <path d="m53.8 24.9c-1.6-1-3.5-1.5-5.4-1.5-1.9 0-3.8.5-5.6 1.3-1.7.8-3.3 2-4.6 3.4-1.2 1.5-2.2 3.2-2.4 5.1 1.3-1.3 2.6-2.4 4-3.4 1.4-1 2.8-1.8 4.2-2.4 1.5-.7 3-1.2 4.6-1.7 1.8-.3 3.4-.6 5.2-.8"></path>\n' +
    '            </g>\n' +
    '        </svg>\n' +
    '        <span class="st-count">0</span>\n' +
    '        <span class="st-text">怒</span>\n' +
    '    </div>\n' +
    '</div>';
$(function () {
    $('#praise-main').html(praiseMainHtml);
    var url = window.location.href;
    $.post(praiseHost + "/praise/get.json", {url: url}, function (result) {
        if (result.code != 1) {
            return;
        }
        var data = result.data['list'], user = result.data['user'], is_user = result.data['is_user'];
        var list = $('.st-btn');
        for (var i = 0; i < list.length; i++) {
            var dataid = $(list[i]).attr('data-id');
            if (user[dataid] <= 0 && is_user == 1) {
                //    filter: grayscale(100%);
                //    opacity: 0.5 !important;
                $(list[i]).css('filter', ' grayscale(100%)');
                $(list[i]).css('opacity', ' 0.5 !important');
                $(list[i]).find('svg').css('width', '48px');
                $(list[i]).find('svg').css('height', '48px');
            }
            if (user[dataid] >= 1 && is_user == 1) {
                $(list[i]).css('opacity', ' 0.5 !important');
                $(list[i]).find('svg').css('width', '60px');
                $(list[i]).find('svg').css('height', '60px');
            }
            // console.log($(list[i]));
            $(list[i]).find('.st-count').html(data[dataid]);
        }
    });
    $('.st-btn').click(function (e) {
        var dataid = $(this).attr('data-id');
        var btn = $(this);
        var userToken = $('#userToken').val();
        $.post(praiseHost + "/praise/operation.json", {userToken: userToken, operation: dataid, url: url}, function (result) {
            if (result.code == 1) {
                var count = btn.find('.st-count').html();
                btn.find('.st-count').html((parseInt(count) + 1));
                var list = $('.st-btn'), now = btn.attr('data-id');
                for (var i = 0; i < list.length; i++) {
                    var dataid = $(list[i]).attr('data-id');
                    if (dataid != now) {
                        $(list[i]).css('filter', ' grayscale(100%)');
                        $(list[i]).css('opacity', ' 0.5 !important');
                        $(list[i]).find('svg').css('width', '48px');
                        $(list[i]).find('svg').css('height', '48px');
                    }
                    if (dataid == now) {
                        $(list[i]).css('opacity', ' 0.5 !important');
                        $(list[i]).find('svg').css('width', '60px');
                        $(list[i]).find('svg').css('height', '60px');
                    }
                }
            }
        });
    })
});