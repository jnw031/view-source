function reset() {
    $('#content').val('');
    $('#result').val('');
}

function toPhp() {
    var val = $('#content').val();
    var res = "\<?php\necho \"" + val.replace(/\\/g, "\\\\").replace(/\\/g, "\\/").replace(/\'/g, "\\\'").replace(/\"/g, "\\\"").split('\n').join("\\n\";\necho \"") + "\\n\";\n?>";
    $('#result').val(res);
}

function toHtml() {
    var val = $('#content').val();
    var res = val.replace(/echo \"/g, "").replace(/\\n\";/g, "").replace('\<?php\n', '').replace('\n?>', '').replace(/\\\"/g, "\"").replace(/\\\'/g, "\'").replace(/\\\//g, "\/").replace(/\\\\/g, "\\");
    $('#result').val(res);
}