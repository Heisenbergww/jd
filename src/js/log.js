$(document).ready(function(){
    //引入模块
    layui.use(['layer','form','laypage','table','upload','element'],function(){
        var layer = layui.layer,//提示
        form = layui.form,//表单
        table = layui.table,//表格
        upload = layui.upload;//上传
        element = layui.element;//导航   
        laypage = layui.laypage;//页码     

       

        indexIn()
        //进入页面渲染
        function indexIn(){
            var datalist = LOG;
            beginView(datalist) 
            pagerRander()
        }   
        
        function beginView(datalist){
            //渲染表格   
            var oneTable =table.render({
                elem: '#log-chart',
                cellMinWidth:180,
                // height: 512,                
                cols: [[
                    { field: 'devicecode', title: '设备id',},
                    { field: 'picurl', title: '图片', style:"height:150px;" },
                    { field: 'time', title: '时间', },
                    { field: 'result', title: '结果代号', },
                    { field: 'rate', title: '相似率', },
                ]],
                data:datalist,
                // style:"height:60px;color:#000;"
            });         
        }

        function pagerRander(){
            laypage.render({
                elem: 'log-chart-page', //注意，这里的 test1 是 ID，不用加 # 号
                count: 20, //数据总数，从服务端得到
                groups:4,
                layout:['prev', 'page', 'next','skip'],                
            });     
        }     
             
         
        
      

          

    })

})