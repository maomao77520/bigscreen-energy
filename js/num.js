/* 
    调用方法 
    initNum(目标节点,显示的数值，每个数字的宽度，每个数字的高度，每个数字的margintop(非必填))
    initNum($('#target'),1120,38,72,10);
    
    html结构，样式是可以自定义的
    <span class="info-panel-value" id="target"></span>
    .info-panel-value{
        color: #00deff;
        font-size: 70px;
        font-weight: bold;
        font-family: AGENCYB;
    }
*/


function initNum(target,value,width,height,mgt,imgArr,imgSize){
    if(!value){
        return;
    }
    var ems = ''
    for(var i = 0; i < 10 ;i++){
        ems += '<em style="'+
                'height:'+height+'px;'+
                'line-height:'+height+'px;'+
                'margin-top:'+(mgt||0)+'px;';
        if(imgArr){
            ems += 'background:url('+imgArr[i]+') no-repeat center;';
            if(imgSize){
                ems += 'background-size:'+imgSize+';';
            }
            ems += 'text-indent:-9999px;';
        }
        ems += '">'+i+'</em>';
    }
    
    var len = (value+'').length;
    
    var items = itemMaker(len,width,height,ems,mgt);

    var html = '<span class="m-num">'+
        items+
    '</span>';
    
    $(target).html(html);
    ant(target,value,height,mgt);
    return {
        change:function(value){
            if(!value){
                return;
            }
            var len = (value+'').length;
            var oldLen = $(target).find('.m-num-view').length;
            if(len>oldLen) {
                var lang = len - oldLen;
                var items = itemMaker(lang,width,height,ems,mgt);
                $(target).find('.m-num').prepend(items);
            }else if(len<oldLen){
                var lang = oldLen - len;
                $(target).find('.m-num-view:lt('+lang+')').remove();
            }
            ant(target,value,height,mgt);
        }
    }
}

function itemMaker(len,width,height,ems,mgt){
    var items = '';
    for(var i = 0;i<len;i++){
        items += '<span class="m-num-view" style="width:'+width+'px;height:'+(height+(mgt||0))+'px">'+
                    '<span class="m-num-list">'+
                        ems+
                    '</span>'+
                '</span>';
    }
    return items;
}

function ant(target,value,height,mgt){
    if(!value){
        return;
    }
    setTimeout(function(){
        var v = value+'';
        for(var i = 0;i<v.length;i++){
            var s = v[i];
            var top = s * (height+(mgt||0)) * -1;
            target.find('.m-num-list:eq('+i+')').css({
                top:top+'px'
            });
        }
    },20);
   
}

module.exports = initNum;
