$(function() {

    // 自动登录
    if (getCookie("user")) {
        $("#succeed").removeClass("hiddentime");
        $(".box-body").addClass("hiddentime");
        $("#showuser").text(getCookie("user"));
    } else {
        console.log("没有用户,请注册");
    }


    // 缓存处理
    var dataoff = {};
    $('#search').focus(function() {
        $("#show_search").attr("class", "showtime");
        if (Object.keys(dataoff).length == 0) {
            $.ajax({
                url: "search.php",
                type: "get",
                dataType: "json",
                success: function(dataall) {
                    //插入数据
                    // console.log(dataall.object1);
                    // console.log(dataall.object2);
                    // let data = dataall.object1;
                    // var datanum = dataall.object2;
                    dataoff = dataall.object1;
                    setData(dataoff);
                }
            })
        } else {
            console.log(11);
            setData(dataoff);
        }

    })

    function setData(data) {
        $(".s_s_ul li[class!='bangdan']").each(function(index, element) {
            // console.log();
            $(this).children("p").text(data['span' + (index + 1)]);

            // 后面小标签
            $(this).children("i").each(function(index, element) {
                // console.log(this);
                for (let i = 0; i < 4; i++) {
                    switch ($(this).attr('value')) {
                        case '1':
                            $(this).text('热')
                            break;
                        case '2':
                            $(this).text('爆')
                            break;
                        case '3':
                            $(this).text('新')
                            break;
                        case '4':
                            $(this).text('新')
                            break;
                        default:
                            break;
                    }

                }
            })
        });
    }

    $('#search').blur(function() {
        $("#show_search").attr("class", "hiddentime");
    })




    // search

    $(".themeoff").click(function() {
        $('body').toggleClass("theme");
        $('body').css("background", "#c2c2c2");
        if ($('body').attr("class") == 'theme') {
            $('body').removeAttr("style");
        }
    })


    $(".herder--").click(function() {
        $(".herder--").removeClass("w_fb");
        $(this).toggleClass("w_fb");
        $("#succeed").addClass("hiddentime");

        if ($(this).index() == 0) {
            $(".login-body").removeClass("hiddentime");
            $(".register-body").addClass("hiddentime");
            $(".phoneimg").addClass("hiddentime");
        } else {
            $(".register-body").removeClass("hiddentime");
            $(".login-body").addClass("hiddentime");
            $(".phoneimg").removeClass("hiddentime");
        }

    })

    $(".sumit-remove").click(function() {
        if (confirm("确认要注销用户？")) {
            setCookie('user', getCookie("user"), -1);
            setCookie('pwd', getCookie("pwd"), -1);
            $("#succeed").addClass("hiddentime");
            $(".login-body").removeClass("hiddentime");
            // console.log(123);
        } else {
            // console.log(456);
        }
    })


    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    // 右上角图标切换
    var flag = 0;
    $(".l-img").click(function() {

        if (flag == 0) {
            // $(this).css("background-position", "-40px -191px")
            $(this).animate({
                "background-position-x": "-40px",
                "background-position-y": "-191px"
            }, 300)
            flag = 1;
        } else {
            $(this).animate({
                "background-position-x": "0px",
                "background-position-y": "-150px"
            }, 300)
            flag = 0;
        }

    })


    // 页面登录
    $(".sumit-login").click(function() {

        let user = $("#username").val();
        let pwd = $("#password").val()
        if (user != '' && pwd != '') {
            if (getCookie("user") == user && getCookie("pwd") == pwd) {
                $("#succeed").removeClass("hiddentime");
                $(".box-body").addClass("hiddentime");
                $("#showuser").text(user);
            } else {
                alert("账号或密码错误！");
            }
        } else {
            alert("账号或密码不能为空！")
        }

    })

    // 点击刷新，回到顶部
    var EventUtil = {
        //获取事件对象 
        getEvent: function(event) {
            return event || window.event;
        },
        getTarget: function(event) {
            return event.target || event.srcElement;
        }
    }


    $(".refresh-top").click(function(event) {
        var event = EventUtil.getEvent(event);
        //4.获取目标元素 
        var target = EventUtil.getTarget(event);
        // console.log(target);
        if ($(target).hasClass("bi-arrow-up")) {
            $("html").animate({
                scrollTop: 0
            }, 300)
        } else {
            window.location.href = "index.html";
        }
    })


    // 字段 懒加载 代码实现

    let  newsdates = [        {             src: './imges/new01.jpg',             title: ['#张三', '演员@张三 的这大半年，不停地在人物与作品中穿梭，成为一部又一部作品的一部分。既保有自己的一片净土，又在变幻的光影里做不同的表情。在他看来，拍戏的“困难”和演员自身的“选择”一样多。一样需要投入角色与心血，一样是与另一个跟自己不同的人物打交道。'],             content: ['<i class="bi bi-bootstrap"></i>', '牛马', '今天12:00', '8600', '900', '3050']         },          {             src: './imges/new02.jpg',             title: ['#李四', '演员@李四 的这大半年，不停地在人物与作品中穿梭，成为一部又一部作品的一部分。既保有自己的一片净土，又在变幻的光影里做不同的表情。在他看来，拍戏的“困难”和演员自身的“选择”一样多。一样需要投入角色与心血，一样是与另一个跟自己不同的人物打交道。'],             content: ['<i class="bi bi-bootstrap"></i>', '牛马', '今天13:00', '8000', '9000', '6050']         },          {             src: './imges/new03.jpg',             title: ['#王二', '演员@王二 的这大半年，不停地在人物与作品中穿梭，成为一部又一部作品的一部分。既保有自己的一片净土，又在变幻的光影里做不同的表情。在他看来，拍戏的“困难”和演员自身的“选择”一样多。一样需要投入角色与心血，一样是与另一个跟自己不同的人物打交道。'],             content: ['<i class="bi bi-bootstrap"></i>', '牛马', '今天14:00', '86000', '9000', '3650']         },          {             src: './imges/new04.jpg',             title: ['#赵五', '演员@赵五 的这大半年，不停地在人物与作品中穿梭，成为一部又一部作品的一部分。既保有自己的一片净土，又在变幻的光影里做不同的表情。在他看来，拍戏的“困难”和演员自身的“选择”一样多。一样需要投入角色与心血，一样是与另一个跟自己不同的人物打交道。'],             content: ['<i class="bi bi-bootstrap"></i>', '牛马', '今天15:00', '860', '900', '3605']         }]

    // 加载创建文章
    function lznew(index) {
        var wait = `
        <div class="wait">
            <img src="./imges/rtc.gif" alt="">
        </div>
        `
        $(".content").append()
        for (let i = 0; i < index; i++) {
            let att = `
            <div class="ct-text">
                <img class="left-img" src="${newsdates[i].src}">
                <dl class="ct-right-txt">
                    <dt>
                        <span>${newsdates[i].title[0]}</span>
                        ${newsdates[i].title[1]}
                    </dt>
                    <dd>
                        <span class="i-0">${newsdates[i].content[0]}${newsdates[i].content[1]}</span>
                        <span class="dd-time">${newsdates[i].content[2]}</span>
                        <span class="dd-io i-1"><i class="bi bi-share"></i>${newsdates[i].content[3]}</span> |
                        <span class="dd-io i-2"><i class="bi bi-list-ul"></i>${newsdates[i].content[4]}</span> |
                        <span class="dd-io i-3"><i class="bi bi-star-fill"></i>${newsdates[i].content[5]}</span>
                    </dd>
                </dl>
            </div>
            `
            $(".wait").remove();
            $(".content").append(att);
        }
        $(".content").append(wait);
    }
    lznew(2);
    $(".content").append();

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

    window.addEventListener('scroll', throttle(lazyLoad, 500, 1000), false);

    function lazyLoad() {
        // 文章内容
        var condiv = $(".ct-text");
        // console.log(condiv);
        // var len = condiv.length;

        //   窗口可视高度
        var winH = document.documentElement.clientHeight;
        // 滚轮距顶部高度
        var scrollH = $(document).scrollTop();
        condivH = $(".ct-text:last").offset().top;

        // **********************************************************
        // loginH = $(".page-login").offset().top;
        // console.log(loginH);
        if ($(document).scrollTop() > 450) {
            $(".page-login").css({ "position": "fixed", "top": "10px" });
        } else {
            $(".page-login").css("position", "absolute");
        }
        // **********************************************************

        if (condivH < winH + scrollH) {
            if (condiv.length <= 18) {
                lznew(4);
            } else {
                $(".wait").children().replaceWith("<span>没有更多了</span>")
            }

        }
    }
    // function lazyLoad() {
    //     var condiv = $(".ct-text");
    //     var len = condiv.length;
    //     var divn = 0; // 存储加载的位置
    //     var timer;
    //     return function() {
    //         // 窗口可视高度
    //         var winH = document.documentElement.clientHeight;
    //         // 滚轮距顶部高度
    //         var scrollH = document.documentElement.scrollTop || document.body.scrollTop;
    //         // console.log(condiv[divn].offsetTop);
    //         // for (var i = divn; i < len; i++) {
    //         // 当前元素距离顶部的高度
    //         if (condiv[divn].offsetTop < winH + scrollH) {
    //             // console.log(divn);
    //             divn = divn + 1;
    //             timer = setTimeout(lznew(4), 1000)
    //         }
    //         if (len > 20) {
    //             alert("没有了")
    //             clearTimeout(timer);
    //         }
    //         // }
    //     }
    // }

    // 字段 懒加载 代码结束
})