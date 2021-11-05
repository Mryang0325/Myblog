$(function() {
    // 获取用户输入的值，判断
    var useroff = false;
    var pwdoff = false;
    var pwd2off = false;
    // var off = false;

    var yanzheng = {

        a: $("#username").blur(function() {
            // var useroff = false;
            let a = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test($("#username").val())
            let b = new RegExp(/^(?:(?:\+|00)86)?1\d{10}$/).test($("#username").val())
            if (a || b) {
                $(".text-p").text("账号符合格式!").css("color", "green");
                return useroff = true
            } else {
                $(".text-p").text("账号不符合格式!");
                return useroff = false;
            }
        }),

        b: $("#password").blur(function() {
            // var pwdoff = false;
            let b = new RegExp(/^[a-zA-Z]\w{5,17}$/).test($("#password").val())
            if (b) {
                $(".text-p").text("密码符合格式!").css("color", "green");
                return pwdoff = true;
            } else {
                $(".text-p").text("密码不符合格式!");
                return pwdoff = false;
            }
        }),

        c: $("#pwd2").blur(function() {
            // var pwd2off = false;
            if ($("#password").val() == $(this).val() && $(this).val() != '') {
                $(".text-p").text("可以注册").css("color", "green");
                return pwd2off = true;
            } else {
                $(".text-p").text("两次密码不同");
                return pwd2off = false;
            }
        })

    }

    $('.sumit-login').click(function() {

        if (useroff == true && pwdoff == true && pwd2off == true) {
            var user = $("#username").val();
            var pwd = $("#password").val();
            if (user != '' && pwd != '') {
                setCookie('user', user, 2);
                setCookie('pwd', pwd, 2);
                alert("注册成功!3秒后跳转至登录");

                function jumpurl() {
                    window.location.href = 'http://127.0.0.1/SINO/login.html';
                }
                setTimeout(jumpurl(), 3000);
            } else {
                $(".text-p").text("信息不能为空");
            }
        } else {
            $(".text-p").text("信息不符合格式，不能注册");
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

})