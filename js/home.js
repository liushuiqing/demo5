window.onload=function(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1)||userAgent.indexOf("Trident") > -1; //判断是否IE浏览器
    if(isIE){
        $('#projects').prop('href','css/component2.css')
    }
}
$(function(){
 
    $('#dowebok').fullpage({
        'navigation': true,
        afterLoad: function(anchorLink, index){
            if(index==2){
                $('.section2 h3').addClass('bounceIn animated');
                $('.section2 ul li').addClass('bounceIn');
                $('.section2 ul li:eq(0)').addClass('animate1');
                $('.section2 ul li:eq(1)').addClass('animate2');
                $('.section2 ul li:eq(2)').addClass('animate3');
                $('.section2 ul li:eq(3)').addClass('animate4');

            }
            if(index==3){
                $('#skills ul li:eq(0) mark').addClass('html5');
                $('#skills ul li:eq(1) mark').addClass('javascript');
                $('#skills ul li:eq(2) mark').addClass('jquery');
                $('#skills ul li:eq(3) mark').addClass('photoshop');
                $('#skills ul li:eq(4) mark').addClass('php');
                $('#skills ul li:eq(5) mark').addClass('vue');
//              $('#skills ul li:eq(6) mark').addClass('node');
            }
        }
    });
});
function down(){
    $.fn.fullpage.moveTo(1);
}
