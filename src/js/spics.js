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
            var datalist = PICS;
            beginView(datalist) 
            pagerRander()
        }   
        
        function beginView(datalist){
            //渲染表格   
            var oneTable =table.render({
                elem: '#spics-chart',
                cellMinWidth:180,
                // height: 512,                
                cols: [[
                    { field: 'picurl', title: '图像',style:"height:150px;"},
                    { field: 'name', title: '姓名', edit:true },
                    { field: 'id', title: 'ID', edit:true },
                ]],
                data:datalist,
                // style:"height:60px;color:#000;"
            });         
        }

        function pagerRander(){
            laypage.render({
                elem: 'spics-chart-page', //注意，这里的 test1 是 ID，不用加 # 号
                count: 20, //数据总数，从服务端得到
                groups:4,
                layout:['prev', 'page', 'next','skip'],                
            });     
        }     
             
         
        
      

          

    })

})