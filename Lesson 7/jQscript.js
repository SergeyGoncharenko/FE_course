//jQuery, добавление/изменение атрибута с помощью метода .attr( name, function( [index, attr] ) )

$(document).ready(function () {

    $("input").attr("name", function (i) {
        ++i; // Увеличим на 1, т.к. отсчет идет с 0
        return this.id;
    });

    $('input').each(function (elem) {
        if ($(this).type == "checkbox" || ($(this).type == "radio")) {
            return false;
        } else {
            return $(elem).text();
        }
    });
})