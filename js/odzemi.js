$(document).ready(function() {
    $(":button").click(function () {
        var val = parseInt($("#ta").val(),10);
        var src1 = $("#prva").attr('src');
        var tarr1 = src1.split('/');
        var file1 = tarr1[tarr1.length-1];
        var data1 = file1.split('.')[0];
        var src2 = $("#vtora").attr('src');
        var tarr2 = src2.split('/');
        var file2 = tarr2[tarr2.length-1];
        var data2 = file2.split('.')[0];
        var f1 = parseInt(data1);
        var f2 = parseInt(data2);
        if(f1-f2==val){
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