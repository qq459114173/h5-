$(function () {
    var time;
    $('#demon').fullpage({
        navigation: false,
        scrollOverflow: true,
        scrollOverflowOptions: {
            scrollY: true
        },
        afterLoad: function (a, index) {
            if (index == 13) {
                $('.up-arrow').css('display', 'none')
            } else {
                $('.up-arrow').css('display', 'block')
            }
            if (index == 1) {
                $('.section1 .banner>li').addClass('active');
                $('.section1 .logo').addClass('zoomIn');
                $('.section1 .nav').addClass('fadeInLeft');
                $('.section1 .sub-title').addClass('fadeInRight');
                $('.section1 .content').addClass('fadeInUpBig')
            } else if (index == 2) {
                $('.section2 .banner>li').addClass('active');
                $('.section2 .sub-title').addClass('zoomIn');
                $('.section2 .content p').addClass('fadeInDown');
                $('.section2 .imgs').addClass('fadeInDown')
            } else if (index == 3) {
                $('.section3 .banner>li').addClass('active');
                $('.section3 .sub-title').addClass('zoomIn');
                $('.section3 .content .tite').addClass('fadeInLeft');
                $('.section3 .content ul li img').addClass('fadeInLeft');
                $('.section3 .content ul li span').addClass('fadeInDown');
                $('.section3 .imgs img').addClass('rollIn');
                $('.section3 .content .bg').addClass('fadeInLeft');
            } else if (index == 4) {
                $('.section4 .banner>li').addClass('active');
                $('.section4 .sub-title').addClass('zoomIn');
                $('.section4 .content>ul>li').addClass('zoomIn');
                $('.section4 .content>ul>li .box>img').addClass('fadeInLeft');
                $('.section4 .content>ul>li .box2').addClass('rotateIn');
                $('.section4 .content .wire li').addClass('fadeInDown');
                $('.section4 .resource').addClass('rotateIn')
            } else if (index == 5) {
                $('.section5 .banner>li').addClass('active');
                $('.section5 .sub-title').addClass('zoomIn');
                $('.section5 .content .left').addClass('fadeInDown');
                $('.section5 .content .right').addClass('fadeInUp');
                $('.section5 .imgs img').addClass('rollIn')
            } else if (index == 6) {
                $('.section6 .banner>li').addClass('active');
                $('.section6 .sub-title').addClass('zoomIn');
                $('.section6 .content .title1').addClass('fadeInLeft');
                $('.section6 .content .content1').addClass('fadeInRight');
                $('.section6 .imgs img').addClass('rollIn');
                $('.section6 .resource').addClass('fadeInUp')
            } else if (index == 7) {
                $('.section7 .banner>li').addClass('active');
                $('.section7 .sub-title').addClass('zoomIn');
                $('.section7 .box2>div').addClass('fadeInLeft');
                $('.section7 .imgs').addClass('rotateIn');
                $('.section7 .imgs img').addClass('fadeInRight');
                $('.section7 .imgs p').addClass('fadeInLeft');
                $('.section7 .imgs .box>div').addClass('zoomIn')
            } else if (index == 8) {
                $('.section8 .banner>li').addClass('active');
                $('.section8 .content>img.bg').addClass('rotateIn');
                $('.section8 .content>img.word').addClass('zoomIn');
                $('.section8 .content>.sub-title').addClass('fadeInLeft')
            } else if (index == 9) {
                $('.section9 .banner>li').addClass('active');
                $('.section9 .sub-title').addClass('zoomIn');
                $('.section9 .content li').eq(0).addClass('fadeInDown');
                $('.section9 .content li').eq(1).addClass('fadeInRight');
                $('.section9 .content li').eq(2).addClass('fadeInRight');
                $('.section9 .content li').eq(3).addClass('fadeInUp');
                $('.section9 .content li').eq(4).addClass('fadeInLeft');
                $('.section9 .content li').eq(5).addClass('fadeInLeft');
                $('.section9 .imgs>p').addClass('rotateIn')
            } else if (index == 10) {
                $('.section10 .banner>li').addClass('active');
                $('.section10 .sub-title').addClass('zoomIn');
                $('.section10 .content .title2').addClass('fadeInLeft');
                $('.section10 .content .title3').addClass('fadeInRight');
                $('.section10 .content ul>li').addClass('fadeInDown');
                $('.section10 .content .bg').addClass('fadeInUp')
            } else if (index == 11) {
                $('.section11 .banner>li').addClass('active');
                banner();

                function banner() {
                    var num = 0;
                    $("#j_silder_outer .img-item").each(function (index, el) {
                        $(this).css({
                            "left": $(this).width() * index + "px",
                            "transitionDelay": index * 0.1 + "s",
                        });
                        $(this).find(".img").css({
                            "backgroundPosition": -$(this).width() * index + "px",
                        })
                    });
                    $(".prev").on("click", function () {
                        $("#j_silder_outer .img-item").css("transform", "rotateX(" + (++num * 90) + "deg)")
                    });
                    $(".next").on("click", function () {
                        $("#j_silder_outer .img-item").css("transform", "rotateX(" + (--num * 90) + "deg)")
                    });
                    var timejg = 4000;
                    time = setInterval(move, timejg);

                    function move() {
                        $("#j_silder_outer .img-item").css("transform", "rotateX(" + (--num * 90) + "deg)")
                    }
                    $('.slider-outer').hover(function () {
                        clearInterval(time)
                    }, function () {
                        time = setInterval(move, timejg)
                    })
                }
            } else if (index == 12) {
                $('.section12 .banner>li').addClass('active');
                $('.section12 .sub-title').addClass('zoomIn');
                $('.section12 .content .map').addClass('zoomIn');
                $('.section12 .content li').addClass('fadeInLeft');
                $('.section12 .content li>span').addClass('fadeInLeft');
                $('.section12 .content>a').addClass('rollIn');
                $('.section12 .erweima').addClass('fadeInRight')
            } else {
                $('.section13 .banner>li').addClass('active');
                $('.section13 .sub-title').addClass('zoomIn');
                $('.section13 .content input').addClass('fadeInDown');
                $('.section13 .content>a').addClass('fadeInDown')
            }
        },
        onLeave: function (index, durection) {
            if (index == 1) {
                $('.section1 .logo').removeClass('zoomIn');
                $('.section1 .nav').removeClass('fadeInLeft');
                $('.section1 .sub-title').removeClass('fadeInRight');
                $('.section1 .content').removeClass('fadeInUpBig');
                $('.section1 .banner>li').removeClass('active')
            } else if (index == 2) {
                $('.section2 .sub-title').removeClass('zoomIn');
                $('.section2 .content p').removeClass('fadeInDown');
                $('.section2 .imgs').removeClass('fadeInDown');
                $('.section2 .banner>li').removeClass('active')
            } else if (index == 3) {
                $('.section3 .sub-title').removeClass('zoomIn');
                $('.section3 .content .tite').removeClass('fadeInLeft');
                $('.section3 .content ul li img').removeClass('fadeInLeft');
                $('.section3 .content ul li span').removeClass('fadeInDown');
                $('.section3 .imgs img').removeClass('rollIn');
                $('.section3 .banner>li').removeClass('active');
                $('.section3 .content .bg').removeClass('fadeInLeft');
            } else if (index == 4) {
                $('.section4 .sub-title').removeClass('zoomIn');
                $('.section4 .content>ul>li').removeClass('zoomIn');
                $('.section4 .content>ul>li .box>img').removeClass('fadeInLeft');
                $('.section4 .content>ul>li .box2').removeClass('rotateIn');
                $('.section4 .content .wire li').removeClass('fadeInDown');
                $('.section4 .resource').removeClass('rotateIn');
                $('.section4 .banner>li').removeClass('active')
            } else if (index == 5) {
                $('.section5 .sub-title').removeClass('zoomIn');
                $('.section5 .content .left').removeClass('fadeInDown');
                $('.section5 .content .right').removeClass('fadeInUp');
                $('.section5 .imgs img').removeClass('rollIn');
                $('.section5 .banner>li').removeClass('active')
            } else if (index == 6) {
                $('.section6 .sub-title').removeClass('zoomIn');
                $('.section6 .content .title1').removeClass('fadeInLeft');
                $('.section6 .content .content1').removeClass('fadeInRight');
                $('.section6 .imgs img').removeClass('rollIn');
                $('.section6 .resource').removeClass('fadeInUp');
                $('.section6 .banner>li').removeClass('active')
            } else if (index == 7) {
                $('.section7 .sub-title').removeClass('zoomIn');
                $('.section7 .box2>div').removeClass('fadeInLeft');
                $('.section7 .imgs').removeClass('rotateIn');
                $('.section7 .imgs img').removeClass('fadeInRight');
                $('.section7 .imgs p').removeClass('fadeInLeft');
                $('.section7 .imgs .box>div').removeClass('zoomIn');
                $('.section7 .banner>li').removeClass('active')
            } else if (index == 8) {
                $('.section8 .content>img.bg').removeClass('rotateIn');
                $('.section8 .content>img.word').removeClass('zoomIn');
                $('.section8 .content>.sub-title').removeClass('fadeInLeft');
                $('.section8 .banner>li').removeClass('active')
            } else if (index == 9) {
                $('.section9 .sub-title').removeClass('zoomIn');
                $('.section9 .content li').eq(0).removeClass('fadeInDown');
                $('.section9 .content li').eq(1).removeClass('fadeInRight');
                $('.section9 .content li').eq(2).removeClass('fadeInRight');
                $('.section9 .content li').eq(3).removeClass('fadeInUp');
                $('.section9 .content li').eq(4).removeClass('fadeInLeft');
                $('.section9 .content li').eq(5).removeClass('fadeInLeft');
                $('.section9 .imgs>p').removeClass('rotateIn');
                $('.section9 .banner>li').removeClass('active')
            } else if (index == 10) {
                $('.section10 .sub-title').removeClass('zoomIn');
                $('.section10 .content .title2').removeClass('fadeInLeft');
                $('.section10 .content .title3').removeClass('fadeInRight');
                $('.section10 .content ul>li').removeClass('fadeInDown');
                $('.section10 .content .bg').removeClass('fadeInUp');
                $('.section10 .banner>li').removeClass('active')
            } else if (index == 11) {
                window.clearTimeout(time);
                $('.section11 .banner>li').removeClass('active')
            } else if (index == 12) {
                $('.section12 .sub-title').removeClass('zoomIn');
                $('.section12 .content .map').removeClass('zoomIn');
                $('.section12 .content li').removeClass('fadeInLeft');
                $('.section12 .content>a').removeClass('rollIn');
                $('.section12 .erweima').removeClass('fadeInRight');
                $('.section12 .banner>li').removeClass('active');
                $('.section12 .content li>span').removeClass('fadeInLeft');
            } else {
                $('.section13 .sub-title').removeClass('zoomIn');
                $('.section13 .content input').removeClass('fadeInDown');
                $('.section13 .content>a').removeClass('fadeInDown');
                $('.section13 .banner>li').removeClass('active')
            }
        }
    })
});