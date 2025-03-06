$(function(){

    $(".ham").click(function(){
        $(this).toggleClass("open")
    })

    let goTop_template = `<div class="goTop" onclick="goTop()"></div>`;

    $("body").append(goTop_template)

    $(window).scroll(function(){
        winH = $(window).height()
        footer_offsetTop = $("footer").offset().top
        scrollTop = $(window).scrollTop()

        goTop_b = (scrollTop+winH-footer_offsetTop<0)?0 : scrollTop+winH-footer_offsetTop;

        $(".goTop").css("bottom",goTop_b)

        if( scrollTop > winH/2 ){
            $(".goTop").show()
        }else{
            $(".goTop").hide()
        }
    })
})

function toggle_menu(mode) {
    if(mode=="close"){
        $(".ham").removeClass("open")
    }else {
        $(".ham").addClass("open")
    }
}

function goTop() {
    $(window).scrollTop(0)
}