$('document').ready(function(){

    $('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
    $('head').append('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">');
    $('head').append('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>');
    $('head').append('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>');
    /*$('head').append('<link rel="stylesheet" href="https://github.com/keydruide/MySQLErrorHandling/blob/master/css/bootstrap-theme.css" type="text/css" />');*/

    $("body").click(function(){

        if ( $( "div" ).hasClass( "error" ) ) {
            /*
            $(".error").attr("data-toggle", "popover");
            //$(".error").attr("data-trigger", "hover");
            $(".error").attr("data-content", getException());
            $(".error").attr("title", "MySql Fehler");
            */
            $('.error').popover({title: "Header", content: "Blabla", placement: "bottom"});
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
