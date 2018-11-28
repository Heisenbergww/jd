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
            panel()
        }   
        
        function beginView(datalist){
            //渲染表格   
            var oneTable =table.render({
                elem: '#devicesm-chart',
                cellMinWidth:120,
                // height: 512,                
                cols: [[
                    { field: 'devicecode', title: '设备编号', edit:true},
                    { field: 'areacode', title: '所属区域'},
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
        
        function panel() {
            var panelHTML = 
            '<div class="panel-wrapper" id="hide-panel">'+
                '<form class="layui-form">'+
                    '<div class="layui-form-item">'+
                        '<label class="layui-form-label">设备编号</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="devicecode" lay-verify="number" autocomplete="off" placeholder="请输入设备编号" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                        '<label class="layui-form-label">所属区域</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="area" lay-verify="text" autocomplete="off" placeholder="请输入所属区域" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                   '<div class="layui-form-item">'+
                        '<label class="layui-form-label">所属营区</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="camp" lay-verify="text" autocomplete="off" placeholder="请输入所属营区" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                       '<label class="layui-form-label">所属基地</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="base" lay-verify="text" autocomplete="off" placeholder="请输入所属基地" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                        '<label class="layui-form-label">所属战区</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="zone" lay-verify="text" autocomplete="off" placeholder="请输入所属战区" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                        '<label class="layui-form-label">设备链接</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="url" lay-verify="url" autocomplete="off" placeholder="请输入设备链接" class="layui-input">'+
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