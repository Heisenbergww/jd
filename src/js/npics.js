$(document).ready(function () {
    //引入模块
    layui.use(['layer', 'form', 'laypage', 'table', 'upload', 'element'], function () {
        var layer = layui.layer, //提示
            form = layui.form, //表单
            table = layui.table, //表格
            upload = layui.upload; //上传
        element = layui.element; //导航   
        laypage = layui.laypage; //页码     



        indexIn()
        //进入页面渲染
        function indexIn() {
            var datalist = PICS;
            beginView(datalist)
            pagerRander()
            panel()
        }

        function beginView(datalist) {
            //渲染表格   
            var oneTable = table.render({
                elem: '#npics-chart',
                cellMinWidth: 180,
                // height: 512,                
                cols: [
                    [{
                            field: 'picurl',
                            title: '图像',
                            style: "height:150px;"
                        },
                        {
                            field: 'name',
                            title: '姓名',
                            edit: true
                        },
                        {
                            field: 'id',
                            title: 'ID',
                            edit: true
                        },
                        {
                            fixed: 'right',
                            title: '操作',
                            toolbar: '#barDemo'
                        }
                    ]
                ],
                data: datalist,
                // style:"height:60px;color:#000;"
            });
        }

        function pagerRander() {
            laypage.render({
                elem: 'npics-chart-page', //注意，这里的 test1 是 ID，不用加 # 号
                count: 20, //数据总数，从服务端得到
                groups: 4,
                layout: ['prev', 'page', 'next', 'skip'],
            });
        }

        function panel() {
            var panelHTML = 
            '<div class="panel-wrapper" id="hide-panel">'+
                '<form class="layui-form">'+
                   '<div class="layui-form-item">'+
                        '<label class="layui-form-label">图像链接</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="url" lay-verify="url" autocomplete="off" placeholder="请输入图片链接" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                       '<label class="layui-form-label">姓名</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="name" lay-verify="name" autocomplete="off" placeholder="请输入姓名" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                        '<label class="layui-form-label">ID</label>'+
                        '<div class="layui-input-block">'+
                            '<input type="text" name="id" lay-verify="id" autocomplete="off" placeholder="请输入ID" class="layui-input">'+
                        '</div>'+
                    '</div>'+
                    '<div class="layui-form-item">'+
                        '<div class="layui-input-block">'+
                            '<div class="layui-btn" lay-submit="" lay-filter="panel-submit">提交</div>'+
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