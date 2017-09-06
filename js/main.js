$(document).ready(function() {
    function aligntext() {
        $('.vid-over-in').css({
            top: ($('.vidbox').height() - $('.vid-over-in').height()) / 2 + 'px'
        });
    }
    function boxsize() {
        if ($('body').width() > 768) {
            $('.box').css({
                'min-height': $('aside').height() + 'px'
            });
        } else {
            $('.box').css({
                'min-height': '0'
            });
        }
    }
    function change_prices(simple, premium, asia){
        if(simple){
            $('#simple').text('$' + simple);
        }
        if(premium){
            $('#premium').text('$' + premium);
        }
        if(asia){
            $('#asia').text('$' + asia);
        }
        return true;
    }
    /*1*/
    aligntext();
	$(window).resize(aligntext);

    /*2*/
    boxsize();
    $(window).resize(boxsize);

    /*3*/
    $("[rel='tooltip']").tooltip();

    /* 4 */
    $("#change").on("click", "#monthly", function(){ 
        change_prices(5, 10, 2.5);
    });

    /* 5 */
    $("#change").on("click", "#yearly", function(){ 
        change_prices(35, 70, 17.5);
    });
    
});