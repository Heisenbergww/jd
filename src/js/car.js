$(document).ready(function(){
    init();
    function init(){
        //显示饼状图
        showPieChart()
        //显示轮播
        showPpt();
        //显示战区导航
        // $(".tree").treemenu({delay:300}).openActive();
        //区域选择
        choseArea();
        //映射摄像头列表        
        showArList();

    }
    //饼状图
    function showPieChart(){
        var ctx = $("#pie-chart");
        var PieChart = new Chart(ctx,{
            type: "pie",
            data: {
                labels: ["进入", "离开"],
                datasets: [{
                    label: '# of Votes',
                    data: [82, 39],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {

            }
        })
    }
 
    //轮播
    function showPpt() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 6,
            slidesPerColumn: 4,
            paginationClickable: true,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 10,
            centeredSlides: true,
            autoplay: 2500,
            autoplayDisableOnInteraction: false,
            // loop:true
        });
    }
    //区域选择
    function choseArea(){
        $(".area-list li").on('click',function(){
            
        })
    }

    //映射营区列表
    function showArList(){
        var aList = DEVICELIST
        Vue.component('arlist-com',{
            props:['content'],
            template:'<li>{{content}}</li>'
        })
        var deviceList = new Vue({
            el:'#ar-list',
            data:{
                els:aList
            },
            methods:{
                reRander:function(item){ 
                    if($('#ar-list li').hasClass('global-selected')){
                        $('#ar-list li').removeClass('global-selected')
                    }
                    var m = '#'+item
                    $(m).addClass('global-selected')
                }
            }
        })
    }
})