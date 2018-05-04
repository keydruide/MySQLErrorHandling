$('document').ready(function(){

    $('head').append('<link rel="stylesheet" href="css/bootstrap.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="css/bootstrap-theme.css" type="text/css" />');
    $('head').append('<link rel="stylesheet" href="css/bootstrap-theme.min.css" type="text/css" />');

    $("body").click(function(){

        if ( $( "div" ).hasClass( "error" ) ) {
            /*
            $(".error").attr("data-toggle", "popover");
            //$(".error").attr("data-trigger", "hover");
            $(".error").attr("data-content", getException());
            $(".error").attr("title", "MySql Fehler");
            */
            $('.error').popover({title: "Header", content: "Blabla", placement: "top"});
        }
    });
});

function getException()
{
    var str,pos,end,res;

    str = $('.error').children().text();
    pos = str.indexOf('#');
    end = str.length - pos;
    res = str.substr(pos, end);

    res = "test";

    return res;
}
