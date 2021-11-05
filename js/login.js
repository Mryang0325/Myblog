$(function() {
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
    $(".sumit-login").click(function() {

        let user = $("#username").val();
        let pwd = $("#password").val()
        if (user != '' && pwd != '') {
            if (getCookie("user") == user && getCookie("pwd") == pwd) {
                window.location.href = "http://127.0.0.1/SINO/";
            } else {
                alert("账号或密码错误！");
            }
        } else {
            alert("账号或密码不能为空！")
        }

    })
})