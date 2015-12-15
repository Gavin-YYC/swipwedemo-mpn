//初始化垂直swiper
var swiperV = new Swiper('.swiper-container-v', {
    pagination: '.swiper-pagination-v',
    paginationClickable: true,
    direction: 'vertical',
    keyboardControl: true,
    mousewheelControl: true,
    onSlideChangeStart: function(swiper) {
        mousewheelindex = swiper.activeIndex;
        if (mousewheelindex == 1) {
            $(".adg").addClass('animated flipInY');
        }
        $(".nav").find('li').each(function(index, el) {
            if (parseInt($(this).attr('data-index')) == swiper.activeIndex) {
                $(this).addClass('active').siblings().removeClass('active');
            }
        });
    }
});
//初始化水平swiper
var swiperH = new Swiper('.swiper-container-h', {
    // pagination: '.swiper-pagination-h',
    paginationClickable: true,
    mousewheelControl: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 3,
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop: true
});
//初始化第一张
var sectionid=0;
swiperV.slideTo(parseInt(sectionid));
//点击立即申请跳转到申请页面
$("#apply").click(function(){
    swiperV.slideTo(6);
});
//点击菜单跳转
$(".nav").on('click', "li", function(event) {
    swiperV.slideTo(parseInt($(this).attr('data-index')));
});