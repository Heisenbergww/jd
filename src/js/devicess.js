$(document).ready(function(){
    init();
    function init(){
        //显示饼状图
        showPieChart()
        //显示折线图
        // showLineChart()
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
                labels: ["在线", "离线"],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19],
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
    //折线图
    function showLineChart() {
        var ctx = $("#line-chart");
        var myChart = new Chart(ctx, {
            "type": "line",
            "data": {
                "labels": [
                    "00:00:00",
                    "02:00:00",
                    "04:00:00",
                    "06:00:00",
                    "08:00:00",
                    "10:00:00",
                    "12:00:00",
                    "14:00:00",
                    "16:00:00",
                    "18:00:00",
                    "20:00:00",
                    "22:00:00",
                    "24:00:00"
                ],
                "datasets": [{
                    "label": "不同人脸数",
                    "data": [65, 59, 80, 81, 56, 55, 75, 89, 90, 81, 56, 55, 66],
                    // "fill": true, //是否填充背景颜色
                    "borderColor": "#795548",  //红色
                    // "backgroundColor": "pink", //蓝色
                    "lineTension": 0.1 //曲线锐度
                }]
            },
            "options": {
                //设置仅显示第一象限
                scales: {
                    yAxes: [{
                        ticks: {
                            min: 0
                        }
                    }]
                }
            }
        });
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
                reRander:function(e){
                    console.log(e)
                }
            }
        })
    }
})