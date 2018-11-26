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
            var datalist = DEVICES;
            beginView(datalist) 
            pagerRander()
        }   
        
        function beginView(datalist){
            //渲染表格   
            var oneTable =table.render({
                elem: '#devicesm-chart',
                cellMinWidth:120,
                // height: 512,                
                cols: [[
                    { field: 'devicecode', title: '设备编号', edit:true},
                    { field: 'campcode', title: '所属营区'},
                    { field: 'basecode', title: '所属基地'},
                    { field: 'zonecode', title: '所属战区'},
                    { field: 'url', title: '流地址'},
                    { fixed: 'right', title: '操作', toolbar: '#barDemo' }
                ]],
                data:datalist,
                // style:"height:60px;color:#000;"
            });         
        }

        function pagerRander(){
            laypage.render({
                elem: 'devicesm-chart-page', //注意，这里的 test1 是 ID，不用加 # 号
                count: 20, //数据总数，从服务端得到
                groups:4,
                layout:['prev', 'page', 'next','skip'],                
            });     
        }     
             
         
        
      

          

    })

})