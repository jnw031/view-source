$(document).ready(function () {
    $(".dropdown-lang img.flag").addClass("flagvisibility");

    $(".dropdown-lang dt a").click(function () {
        $(".dropdown-lang dd ul").toggle();
    });

    $(".dropdown-lang dd ul li a").click(function () {
        var text = $(this).html();
        $(".dropdown-lang dt a span").html(text);
        $(".dropdown-lang dd ul").hide();
        var lang = getSelectedValue("sample"), url = window.location.href, urlArray = [];
        urlArray = url.split("/");
        window.location = '/tools-lang-' + lang + "/" + urlArray[4];
        // $("#result").html("Selected value is: " +lang);
    });

    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function (e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown-lang"))
            $(".dropdown-lang dd ul").hide();
    });


    $("#flagSwitcher").click(function () {
        $(".dropdown-lang img.flag").toggleClass("flagvisibility");
    });
});