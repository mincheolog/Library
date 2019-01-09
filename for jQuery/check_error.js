function check_err() {
    var checknum = $('#save').text().replace(delcom, '').replace(/-/g, '')
    if (checknum.indexOf(".") == -1) {
        var numlength = checknum.substring(0)
    }
    else if (checknum.indexOf(".") != -1) {
        var numlength = checknum.substring(0, checknum.indexOf("."))
    }
    if ($('#save').text() == "Infinity" || $('#save').text() == "∞" || $('#save').text() == "NaN" || numlength.length >= 13 || $('#number').text() == "E") {
        $('#number').text("E");
        $('#save').text('');
        $('#calc').text('');
        num="";
        mathsave = "";
        savenum = "";
        math_expression = "";
        flag = false;
        $('.math').attr('disabled', true);
    }
};