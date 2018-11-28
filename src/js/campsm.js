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
            var datalist = CAMPS;
            beginView(datalist) 
            pagerRander()
            panel()
        }   
        
        function beginView(datalist){
            //渲染表格   
            var oneTable =table.render({
                elem: '#campsm-chart',
                cellMinWidth:180,
                // height: 512,                
                cols: [[
                    { field: 'campcode', title: '营区', edit:true },
                    { field: 'basecode', title: '基地', edit:true },
                    { field: 'zonecode', title: '战区', edit:true },
                    { fixed: 'right', title: '操作', toolbar: '#barDemo' }
                ]],
                data:datalist,
                // style:"height:60px;color:#000;"
            });         
        }

        function pagerRander(){
            laypage.render({
                elem: 'campsm-chart-page', //注意，这里的 test1 是 ID，不用加 # 号
                count: 20, //数据总数，从服务端得到
                groups:4,
                layout:['prev', 'page', 'next','skip'],                
            });     
        }
        
        function panel() {
            var panelHTML = 
            '<div class="panel-wrapper" id="hide-panel">'+
                '<form class="layui-form">'+
                   '<div class="layui-form-item">'+
                        '<label class="layui-form-label">营区</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="camp" lay-verify="text" autocomplete="off" placeholder="请输入营区" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                       '<label class="layui-form-label">基地</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="base" lay-verify="text" autocomplete="off" placeholder="请输入基地" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                        '<label class="layui-form-label">战区</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="zone" lay-verify="text" autocomplete="off" placeholder="请输入战区" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                        '<div class="layui-input-block">'+
                            '<div class="layui-btn" lay-submit="" lay-filter="" id="panel-submit">提交</div>'+
                        '</div>'+
                    '</div>'+
                '</form>'+
            '</div>';
            $('#add-btn').on('click', function () {
                layer.open({
                    type: 1,
                    title: false,
                    closeBtn: 1,
                    shadeClose: true,
                    skin: 'yourclass',
                    content: panelHTML
                });
                $('#panel-submit').on('click',function(){
                    
                })
            })
        }
             
         
        
      

          

    })

})