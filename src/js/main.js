$(document).ready(function(){
    init()
    //初始化
    function init() {
        layuiIn();
        treeMenu();
    }

    //引入layUi
    function layuiIn() {
        layui.use('element', function () {
          var element = layui.element;

        //一些事件监听
        element.on('tab(demo)', function (data) {
            console.log(data);
        });
      });
    }

    //开启tree menu
    function treeMenu(){
        $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
        // $('.tree li:has(ul)').addClass('parent_li').find(' > ul li').css({'display':'none'})
        $('.tree li.parent_li > span').on('click', function (e) {    
            var children = $(this).parent('li.parent_li').find(' > ul > li');    
            if (children.is(":visible")) {    
                children.hide('fast');    
                $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-flag').removeClass('icon-minus-sign');    
            } else {    
                children.show('fast');    
                $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-flag');    
            }    
            e.stopPropagation();    
        });    
        $('.tree-leaf').on('click',function(){
            if($(this).hasClass('global-selected')){   
            }else{
                $(".tree-leaf").removeClass('global-selected')
                $(this).addClass('global-selected')
            }
        })
    }

    
})