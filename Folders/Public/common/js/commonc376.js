var serviceUrl = "https://api2.toolnb.com";

//收藏
function collectTools(e, url) {
    $.ajax({
        type: "post",
        url: "/User/Api/collect.html",
        data: {tool_url: url, sort: 0},
        dataType: 'json',
        success: function (result) {
            if (result.code == 1) {
                $(e).text('已收藏');
            } else if (result.code == 2) {
                $(e).text('收藏');
            } else if (result.code == 0) {
                // alert(result.msg);
                layer.msg(result.msg);
            }
        },
        error: function () {
        }
    });
}

function MyTools() {
    $.ajax({
        type: "get",
        url: "/Home/Index/collectOut.html",
        data: {},
        dataType: 'html',
        success: function (result) {
            if (result.length > 0) {
                $('#MyTools').html(result);
            } else {
                $('#MyTools').html('');
            }
        }
    });
}


var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
    isMobile = isIphone || isAndroid;

document.write('<script src="' + serviceUrl + '/q/userTokenJs.json" type="text/javascript"  async="async"><\/script>');
if (typeof (layer) == "undefined") {
    document.write('<script src="/Public/layer-msg/layer.js" type="text/javascript"  async="async"><\/script>');
}
if (window.location.href == 'http://www.toolnb.com/') {
    window.location.href = 'https://www.toolnb.com/';
}
var index_background_image = "", index_background_on = 0, index_search = 0, index_tab_type = $("#index_search_div").find('.show_index_tab li[class=active]').find('a').attr('data-val'), self_word_list = 0, index_background_css = '', index_search_div = localStorage.getItem('index_search_div');
$(function () {
    // console.clear();
    console.log("%c\n       ", "font-size:30px;background:url('https://www.toolnb.com/Public/logo.png');    background-color: #222;background-size: 100%");
    console.log('https://www.toolnb.com');
    console.log("QQ交流群:%c93069632", "color:red;font-weight:bold;");
    var urlHm = document.URL, refererHm = document.referrer;
    var randNumber = Math.random(1);
    $.ajax({
        type: "post",
        url: serviceUrl + "/q/hm.json?" + randNumber,
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: {url: urlHm, referer: refererHm},
        success: function (data) {
        }
    });
    $("#index_search_div").find('.show_index_tab a').click(function () {
        var url = $("#index_search_div").find('.index-search-form').attr('action'),
            input = $("#index_search_div").find('.index-search-input').attr('name'),
            type = $(this).attr('data-val'), soFieldName = "from", soFieldValue = "toolnb";
        index_tab_type = type;
        localStorage.setItem('index_search_div', type);
        if (type == "index_zhannei") {
            url = "/Home/Search/index.html";
            input = "search";
        }
        if (type == "index_baidu") {
            url = "https://www.baidu.com/s";
            input = "wd";
        }
        if (type == "index_google") {
            url = "https://www.google.com/search";
            input = "q";
        }
        if (type == "index_github") {
            url = "https://github.com/search";
            input = "q";
        }
        if (type == "index_sogou") {
            url = "https://www.sogou.com/web";
            input = "query";
        }
        if (type == "index_taobao") {
            url = "https://s.taobao.com/search";
            input = "q";
        }
        if (type == "index_jd") {
            url = "https://search.jd.com/Search";
            input = "keyword";
            soFieldName = 'enc';
            soFieldValue = 'utf-8';
        }
        if (type == "index_weibo") {
            url = "https://s.weibo.com/weibo";
            input = "q";
        }
        if (type == "index_csdn") {
            url = "https://so.csdn.net/so/search/s.do";
            input = "q";
        }
        if (type == 'index_bing_zt') {
            url = 'https://cn.bing.com/images/search';
            input = 'q';
        }
        if (type == 'index_wx') {
            if (isMobile) {
                url = 'https://weixin.sogou.com/weixinwap';
            } else {
                url = 'https://weixin.sogou.com/weixin';
                soFieldName = "type";
                soFieldValue = 2;
            }
            input = 'query';
        }
        if (type == 'index_so') {
            url = 'https://www.so.com/s';
            input = 'q';
        }
        if (type == 'index_zhihu') {
            url = 'https://www.zhihu.com/search';
            input = 'q';
        }
        if (type == 'index_bing') {
            url = 'https://cn.bing.com/search';
            input = 'q';
        }
        if (type == 'index_stackoverflow') {
            url = 'https://stackoverflow.com/search';
            input = 'q';
        }
        if (type == 'index_iconfont') {
            url = 'https://www.iconfont.cn/search/index?searchType=icon';
            input = 'q';
        }
        if (type == 'index_fanyi') {
            url = 'https://fanyi.sogou.com/?fr=websearch_submit&pid=&from=toolnb.com';
            input = 'keyword';
        }
        if (type == 'index_miji') {
            url = 'https://mijisou.com/';
            input = 'q';
        }
        if (type == 'index_cnblogs') {
            url = 'https://zzk.cnblogs.com/s/blogpost';
            input = 'w';
        }
        if (type == 'index_huaban') {
            url = 'https://huaban.com/search/';
            input = 'q';
        }
        $('#soField').attr('name', soFieldName);
        $('#soField').attr('value', soFieldValue);
        $("#index_search_div").find('.index-search-form').attr('action', url)
        $("#index_search_div").find('#soInput').attr('name', input);
        if (type == 'index_baidu' || type == "index_sogou" || type == "index_google" || type == "index_so") {
            if (self_word_list == 1) {
                $.ajax({
                    type: "get",
                    url: "/Home/Index/getTop.html",
                    data: {},
                    dataType: 'json',
                    success: function (result) {
                        if (result.code == 1) {
                            $("#index_search_div").find('#soInput').val(result.data);
                        }
                    }
                });
            }
        } else if (type == 'index_zhannei') {
            // $("#index_search_div").find('#soInput').val('为所欲为');//热点工具
        } else {
            // $("#index_search_div").find('#soInput').val('');
        }
    });

    //set tab active
    if (index_search_div != null) {
        $('#index_search_div li').removeClass('active');
        $('#index_search_div a[data-val="' + index_search_div + '"]').parent().addClass('active');
        $('#index_search_div a[data-val="' + index_search_div + '"]').click();
    } else {
        $('#index_search_div li').removeClass('active');
        $('#index_search_div a[data-val="index_zhannei"]').parent().addClass('active');
        $('#index_search_div a[data-val="index_zhannei"]').click();
    }

    //show xcx
    $('#wxxcx').click(function () {
        if ($('body').find('.layui-layer-demo').length > 0) {
            return;
        }
        layer.open({
            area: ['430px', '300px'],
            type: 1,
            title: "微信小程序",
            skin: 'layui-layer-demo',
            closeBtn: 0,
            anim: 2,
            shadeClose: true,
            content: '<div class="col-lg-12"><h2 style="text-align: center;margin-top: 12px;margin-bottom: 5px;">爱资料工具 小程序</h2></div><div class="col-lg-6"><img src="/Public/images/xcx.jpg" style="width: 200px;"></div><div class="col-lg-6"><span style="font-weight: 700;color:green;">小程序已有常用工具、站长工具、股市工具、计算器！还在持续更新中哦！</span></div>',
        });
    });

    $.ajax({
        type: "get",
        url: serviceUrl + "/q/userSetting.json",
        data: {},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 0) {
                index_background_image = "https://wstatic.apizl.com/toolnb/index.jpg";
                index_background_on = 1;
                index_search = 1;
                self_word_list = 0;
                index_background_css = '';
                // $('#user-ul').html("<li><a href=\"/User/Init/Login.html\" rel=\"nofollow\">登录</a></li>\n" +
                //     "                    <li><a href=\"/User/Init/Register.html\" rel=\"nofollow\">注册</a></li>  ");
                $('#user-ul').html("  <li role=\"presentation\" class=\"dropdown\">\n" +
                    "                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"  aria-expanded=\"false\" aria-haspopup=\"true\">控制台<span class=\"caret\"></span>\n" +
                    "                        </a>\n" +
                    "                        <ul class=\"dropdown-menu\">\n" +
                    "                            <li><a href=\"/User/Init/Login.html\">登录</a></li>\n" +
                    "                        </ul>\n" +
                    "                    </li>\n");
            } else {
                index_background_image = result.data['image'];
                index_background_on = result.data['background'];
                index_search = result.data['index_search'];
                self_word_list = result.data['self_word_list'];
                index_background_css = result.data['index_background_css'];
                $('#user-ul').html("  <li role=\"presentation\" class=\"dropdown\">\n" +
                    "                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\"  aria-expanded=\"false\" aria-haspopup=\"true\">" + result.data['user_name'] + "<span class=\"caret\"></span>\n" +
                    "                        </a>\n" +
                    "                        <ul class=\"dropdown-menu\">\n" +
                    "                            <li><a href=\"/User/Manage/Index.html\">用户中心</a></li>\n" +
                    "                            <li><a href=\"/User/Index/Order.html\">订单查看</a></li>\n" +
                    "                            <li><a href=\"/User/Init/logout.html\">退出</a></li>\n" +
                    "                        </ul>\n" +
                    "                    </li>\n");
            }
            if ($('#tools_main').length <= 0) {
                return;
            }
            if (result.data == null) {
                // return;
            }
            if (index_background_on == 1) {
                $('body').addClass('index-body-background');
                $('body').css('background-image', "url(" + index_background_image + ")");
                $('body').css('background-repeat', "no-repeat");
                $('body').css('background-position', "center 0");
                $('body').css('background-size', "cover");
                $('body').css('background-attachment', "fixed");
                $('.tab-content').css('background-color', 'transparent');
            }
            if (index_search == 1) {
                var html = $('#show_index_search').html();
                if (isMobile) {
                    // $('#index_search_div').css('margin-top', '25px');
                    // $('#index_search_div').css('padding-bottom', '60px');
                } else {
                    // $('#index_search_div').css('margin-top', '120px');
                    // $('#index_search_div').css('padding-bottom', '120px');
                }
                $('#index_search_div').html(html);
                var autocompleteList = [], autocompleteInput = '';
                $($("#index_search_div").find('#soInput')).autocomplete({
                    source: serviceUrl + "/q/inputSearch.json",
                    minLength: 1,
                    response: function (event, ui) {
                        autocompleteList = ui;
                        autocompleteInput = $($("#index_search_div").find('#soInput')).val();
                    },
                    select: function (event, ui) {
                        var command = ui.item['value'], array = autocompleteList.content;
                        //是否为翻译
                        if (array.length > 1) {
                            var autocomplete_end = array[array.length - 1];
                            autocomplete_end = autocomplete_end.label;
                            if (autocomplete_end == '>>自动翻译结束<<') {
                                if (command == '>>自动翻译结束<<') {
                                    return false;
                                }
                                $($("#index_search_div").find('#soInput')).val(command.substring(6));
                                return false;
                            }
                        }
                        $.ajax({
                            type: "get",
                            url: serviceUrl + "/q/ajaxToolsUrl.json",
                            data: {name: command, type: index_tab_type},
                            dataType: 'json',
                            success: function (result) {
                                if (result.code == 1) {
                                    window.location = result.data['url'];
                                } else {
                                    if (index_tab_type == 'index_zhannei') {
                                        //默认搜狗
                                        $($('#index_search_div .show_index_tab li')[1]).tab('show');
                                        $($('#index_search_div .show_index_tab li a')[1]).click();
                                    }
                                    $('#index_search_div .index-search-form').submit();//自动搜索
                                }
                            }
                        });
                    }
                });
            }
        }
    });

    //顶部搜索
    $("#search").autocomplete({
        source: serviceUrl + "/q/inputSearch.json",
        select: function (event, ui) {
            var command = ui.item['value'];
            $.ajax({
                type: "get",
                url: serviceUrl + "/q/ajaxToolsUrl.json",
                data: {name: command},
                dataType: 'json',
                success: function (result) {
                    if (result.code == 1) {
                        window.location = result.data['url'];
                    }
                }
            });
        }
    });
});

//open setting
function openSetting() {
    var html = $('#setting-div').html();
    layer.open({
        area: ['400px', '450px'],
        type: 1,
        title: "用户设置（登录可用）",
        skin: 'layui-layer-demo',
        closeBtn: 0,
        anim: 2,
        shadeClose: true,
        content: html,
    });
    $('.layui-layer-demo').find('#setting-div-url').val(index_background_image);
    $('.layui-layer-demo').find("input:radio[name=setting-div-open][value=" + index_background_on + "]").attr("checked", true);
    $('.layui-layer-demo').find("input:radio[name=setting-div-index-s][value=" + index_search + "]").attr("checked", true);
    $('.layui-layer-demo').find("input:radio[name=setting-div-self-word-list][value=" + self_word_list + "]").attr("checked", true);
    $('.layui-layer-demo').find(".index_background_css").val(index_background_css);
}

/**
 * 保存配置
 * @param e
 */
function saveUserSetting(e) {
    var item = $(e).parent().parent();
    var on = item.find('input:radio[name="setting-div-open"]:checked').val(),
        index_search = item.find('input:radio[name="setting-div-index-s"]:checked').val(),
        self_word_list_f = item.find('input:radio[name="setting-div-self-word-list"]:checked').val(),
        index_background_css = item.find('.index_background_css').val(),
        url = item.find('#setting-div-url').val();
    $.ajax({
        type: "post",
        url: serviceUrl + "/q/userSetting.json",
        data: {on: on, image: url, index_search: index_search, self_word_list: self_word_list_f, index_background_css: index_background_css},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (result) {
            if (result.code == 1) {
                layer.msg('保存成功', function () {
                    window.location = '';
                });
            } else {
                layer.msg('保存失败~~或没登录~~', function () {
                    window.location = "/User/Init/Login.html";
                });
            }
        }
    });
}

/**
 * 打赏
 */
function dashang() {
    layer.open({
        area: ['430px', '260px'],
        type: 1,
        title: "<?php echo langText('打赏我们，我们可以做的更多&更好。');?>",
        skin: 'layui-layer-demo',
        closeBtn: 0,
        anim: 2,
        shadeClose: true,
        content: '<a href=\'/Home/Index/dashang.html\' target="_blank"><img src="/Public/dashang.png" alt="打赏我们" title="打赏我们"></a>\n'
    });
}

/**
 * 打开
 */
function openNavAd() {
    layer.open({
        area: ['260px', '260px'],
        type: 1,
        title: "关注公众号反馈与建议",
        skin: 'layui-layer-demo',
        closeBtn: 0,
        anim: 2,
        shadeClose: true,
        content: '<div class="col-lg-12 col-xs-12" style="text-align: center;"><img src="/Public/images/push/wx.jpg" style="width: 200px;"></div>',
    });
}

/**kami**/
/**
 * 充值
 */
function topup() {
    layer.open({
        area: ['450px', '320px'],
        type: 1,
        title: "充值提示",
        skin: 'layui-layer-demo',
        closeBtn: 0,
        anim: 2,
        shadeClose: true,
        content: '<div class="col-lg-12">' +
            '<h2 style="text-align: center;margin-top: 12px;margin-bottom: 5px;">' +
            '<a href="https://w.url.cn/s/AQKH9NL" target="_blank" rel="nofollow">卡密充值</a>' +
            '</h2>' +
            '<div class="col-lg-12 col-xs-12 top15" style="text-align: center;"><div class="col-lg-12 col-xs-12 top15"><label class="control-label">卡号</label><input type="text" id="kami_code" class="form-control kami-input"></div><div class="col-lg-12 col-xs-12 top15"><label class="control-label">卡密</label><input type="text" id="kami_key" class="form-control kami-input"></div><div class="col-lg-12 col-xs-12 top15"><input type="button" class="btn btn-success" value="验证卡密" onclick="kami()"> or <a href="https://w.url.cn/s/AQKH9NL" target="_blank" rel="nofollow" class="btn btn-primary">购买卡密</a></div><div class="col-lg-12 col-xs-12 top15"><span>卡密1元=1金币 验证出现问题加群联系管理或联系QQ:279988014</span></div>' +
            '</div>' +
            '</div>',
    });
}

/**
 * 验证卡密
 */
function kami() {
    var code = $('#kami_code').val(), key = $('#kami_key').val();
    $.ajax({
        type: "post",
        url: "/user/kami.html",
        data: {code: code, key: key},
        dataType: 'json',
        success: function (result) {
            if (result.code != 1) {
                layer.msg(result.msg);
                return;
            }
            layer.msg(result.msg, function () {
                window.location = '';
            })
        }, error: function () {
            layer.msg('卡密验证出错，请联系管理员核对!');
        }
    });
}

/**kami**/

/**tool_pay**/
function tool_pay(e) {
    var tool_id = $(e).attr('data-id'), title = $(e).attr('data-title'), money = $(e).attr('data-money'), user_money = $(e).attr('data-user-money'), end_time = $(e).attr('data-end-time');
    layer.open({
        area: ['450px', '360px'],
        type: 1,
        title: "支付工具",
        skin: 'layui-layer-demo',
        closeBtn: 0,
        anim: 2,
        shadeClose: true,
        content: '<div class="col-lg-12">' +
            '<h2 style="text-align: center;margin-top: 12px;margin-bottom: 5px;">' +
            '' + title + '(' + money + '金币/天)' +
            '</h2>' +
            '<div class="col-lg-12 col-xs-12 top15" style="text-align: center;"><div class="col-lg-12 col-xs-12 top15"><label class="control-label">数量</label><select class="form-control pay_number" style="    width: 200px;display: inline-block;"><option value="1">1天</option><option value="2">2天</option><option value="3">3天</option><option value="4">4天</option><option value="5">5天</option></select></div><div class="col-lg-12 col-xs-12 top15"><label class="control-label">金币</label><input type="text" id="" class="form-control kami-input" disabled value="' + user_money + '" style="width: 200px;display: inline-block;"></div><div class="col-lg-12 col-xs-12 top15"><label class="control-label">有效</label><input type="text" id="" class="form-control kami-input" disabled value="' + end_time + '" style="width: 200px;display: inline-block;"></div><div class="col-lg-12 col-xs-12 top15"><input type="button" class="btn btn-success" value="立刻支付" onclick="tool_pay_send(this)" data-id="' + tool_id + '"> or <input type="button" onclick="topup()"  class="btn btn-primary" value="充值金币" ></div><div class="col-lg-12 col-xs-12 top15"><span>卡密1元=1金币 验证出现问题加群联系管理或联系QQ:279988014</span></div>' +
            '</div>' +
            '</div>',
    });
}

function tool_pay_send(e) {
    var tool_id = $(e).attr('data-id'), number = $(e).parent().parent().find('.pay_number').val();
    if (!confirm('确定支付?')) {
        return;
    }
    $.ajax({
        type: "post",
        url: "/user/tool_pay.html",
        data: {tool_id: tool_id, use_pay_tool: 'pay', use_pay_tool_number: number},
        dataType: 'json',
        success: function (result) {
            if (result.code != 1) {
                layer.msg(result.msg);
                return;
            }
            layer.msg(result.msg, function () {
                window.location = '';
            })
        }, error: function () {
            layer.msg('请联系管理员核对!');
        }
    });
}

/**tool_pay**/


/**重写ajax**/
jQuery(function ($) {
// 备份jquery的ajax方法
    var _ajax = $.ajax;
// 重写ajax方法，先判断登录在执行success函数
    $.ajax = function (opt) {
        var _opt = $.extend(opt, {
            xhrFields: {
                withCredentials: true
            },
            beforeSend: function (xhr) {
                let userToken = $('#userToken').val();
                if (userToken == undefined) {
                    userToken = '';
                }
                xhr.setRequestHeader('userToken', userToken);
            },
        });
        return _ajax(_opt);
    };
});

//格式化金额 使用方式 number_format(m, 2, '.', ',')
function number_format(number, decimals, dec_point, thousands_sep, roundtag) {
    /*
    * 参数说明：
    * number：要格式化的数字
    * decimals：保留几位小数
    * dec_point：小数点符号
    * thousands_sep：千分位符号
    * roundtag:舍入参数，默认 "ceil" 向上取,"floor"向下取,"round" 四舍五入
    * */
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    roundtag = roundtag || "ceil"; //"ceil","floor","round"
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {

            var k = Math.pow(10, prec);
            console.log();

            return '' + parseFloat(Math[roundtag](parseFloat((n * k).toFixed(prec * 2))).toFixed(prec * 2)) / k;
        };
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    var re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}