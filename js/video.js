window.onload = function() {
    // 在页面加载完调用该函数
    warterfall("main", "box");
    // 数据段
    var dataInt = {
        "data": [{
                "src": './imges/video01.jpg'
            },
            {
                "src": './imges/video02.jpg'
            },
            {
                "src": './imges/video03.jpg'
            },
            {
                "src": './imges/video04.jpg'
            },
            {
                "src": './imges/video05.jpg'
            }
        ]
    }

    // 监听滚动事件
    function throttle(fn, delay, atleast) {
        var timeout = null,
            startTime = new Date();
        return function() {
            var curTime = new Date();
            clearTimeout(timeout);
            if (curTime - startTime >= atleast) {
                fn();
                startTime = curTime;
            } else {
                timeout = setTimeout(fn, delay);
            }
        }
    }
    window.addEventListener('scroll', throttle(lazyLoad, 100, 500), false)

    function lazyLoad() {
        if (checkScrollSlide()) {
            // console.log(123);
            var oPt = document.getElementById('main');

            for (let i = 0; i < dataInt.data.length; i++) {
                var pimg = `
            <div class="box">
                <div class="pic"> 
                    <img src="${dataInt.data[i].src}" alt="">
                </div>
            </div>`;

                $(oPt).append(pimg);
                $('.pic:last').addClass("layui-anim layui-anim-scale");
            }
            warterfall("main", "box");
        }
    }
}

function warterfall(parent, box) {

    var oParent = document.getElementById(parent);
    var oBoxs = document.getElementsByClassName(box);
    // console.log(oBoxs);

    // 一个box图的宽度
    var oBoxw = oBoxs[0].offsetWidth;
    // 窗口文档显示区域的宽度 除于单个宽度 取整就是列数
    var cols = Math.floor(document.documentElement.clientWidth / oBoxw);
    // main宽度
    oParent.style.cssText = 'width:' + oBoxw * cols + 'px;margin:0 auto;';

    var arr = [];
    for (let i = 0; i < oBoxs.length; i++) {
        if (i < cols) {
            arr.push(oBoxs[i].offsetHeight);
        } else {
            var minH = Math.min.apply(null, arr);
            var index = getMinhIndex(arr, minH);

            oBoxs[i].style.position = 'absolute';
            oBoxs[i].style.top = minH + 'px';
            oBoxs[i].style.left = oBoxw * index + 'px';
            arr[index] += oBoxs[i].offsetHeight;
        }
    }
}

function getMinhIndex(arr, val) {
    for (var i in arr) {
        if (arr[i] == val) {
            return i;
        }
    }
}

function checkScrollSlide() {
    var oParent = document.getElementById('main');
    let oBoxs = $('.box');
    //获取最后一块数据到顶部的距离 + 它自身一半的距离
    var lastBoxH = oBoxs[oBoxs.length - 1].offsetTop; // + Math.floor($(".box:last").offsetHeight / 2)
    // console.log(lastBoxH);
    lastBoxH += Math.floor(oBoxs[oBoxs.length - 1].offsetHeight / 2);
    // console.log(lastBoxH);

    //获取滚动条滚动距离 
    var scrollTop = document.documentElement.scrollTop;
    // console.log(scrollTop);

    // 获取window可视化的高度 
    var height = document.documentElement.clientHeight;
    if (lastBoxH - 100 < scrollTop + height) {
        return true;
    } else {
        return false;
    }
}