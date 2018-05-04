$('document').ready(function(){

    /*
    $('body').click(function() {
        alert( $('body').hasClass('error').toString() + " Test" );
    });
    */
    $("body").click(function(){

        alert($( "div" ).hasClass( "error" ).toString());

        if ( $( "div" ).hasClass( "error" ) ) {
            //do something it does have the protected class!
            console.log("i have the error class");
        }
        else
        {
            console.log("is nicht da");
        }
    });

    /*
    if ( $("body").hasClass("error") )
    {
        alert("Tst");

        $(".error").click(function(){

            alert("Test error");
            //getException();
        });

    }
    */

});

function getException()
{
    var str = $('.error').children().text();

    if(str=="")
    {
        str="bjhsjs#wirsindsuper";
    }

    var pos = str.indexOf('#');
    var end = str.length - pos;
    var res = str.substr(pos, end);

    alert(res);
}
