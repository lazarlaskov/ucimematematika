$(document).ready(function() {
    $(":button").click(function () {
        var src1 = $("#prva").attr('src');
        var tarr1 = src1.split('/');
        var file1 = tarr1[tarr1.length-1];
        var data1 = file1.split('.')[0];
        var src2 = $("#vtora").attr('src');
        var tarr2 = src2.split('/');
        var file2 = tarr2[tarr2.length-1];
        var data2 = file2.split('.')[0];
        if(data1>=data2){
            $("#prv").removeClass("btn-default").addClass("btn-success");
            $("#vtor").removeClass("btn-default").addClass("btn-danger");
            location.reload();
        }
        else if(data2>=data1){
            $("#vtor").removeClass("btn-default").addClass("btn-success");
            $("#prv").removeClass("btn-default").addClass("btn-danger");
            location.reload();
        }
    });
});