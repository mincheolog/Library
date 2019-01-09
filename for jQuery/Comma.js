var com = /\B(?=(\d{3})+(?!\d))/g;
var delcom = /[,]/g;

function add_comma(comma) {
    if (comma.toString().match(/[.]/g) != null) {
        comma = comma.split(".");
        comma[0] = comma[0].replace(com, ",");
        comma = comma.join('.');
    }
    else {
        comma = comma.toString().replace(com, ",");
    }
    return comma;
};