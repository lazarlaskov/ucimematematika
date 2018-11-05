$(document).ready(function() {
    $("#ch").click(function(){
        var val = parseInt($("#ta").val(),10);
        var src = $('img').attr('src');
        var tarr = src.split('/');
        var file = tarr[tarr.length-1];
        var data = file.split('.')[0];
        if(val==data){
            alert("ТОЧЕН ОДГОВОР");
            $('#ta').val('');
            location.reload();
        }
        else{
            alert("ПОГРЕШЕН ОДГОВОР");
            $('#ta').val('');
        }
    });
});