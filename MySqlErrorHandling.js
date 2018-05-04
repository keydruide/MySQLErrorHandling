$(document).ready(function(){
    $(".error").click(function(){
        getException();
    });

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
