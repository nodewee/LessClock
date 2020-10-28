/*! LessClock - https://git.io/JJ5aB - NodeWee - Apache License 2.0 */



function insertFile(url, filetype) {
    // 注意：这种方式加载脚本文件是异步加载

    var myHead = document.getElementsByTagName("HEAD").item(0);

    if (filetype == "js") {
        var myfile = document.createElement("script");
        myfile.src = url;
    }
    else if (filetype = "css") {
        var myfile = document.createElement("link");
        myfile.rel = "stylesheet";
        myfile.href = url;
    }

    myHead.appendChild(myfile);
    return true;
}



function readScript(url, callback) {
    /**
     * 动态读取脚本文件（可以是 js, css, html, xml）
     * @param url   脚本文件的资源路径
     * @param callback 如果 callback 被赋值，则认为是异步读取，否则认为是同步读取
     * @return string | null  （仅在同步读取时有效）返回文件内容（文本格式）。如果失败返回 null
     * 
     * @author : NodeWee (https://nodewee.github.io)
     **/

    isasync = typeof callback !== 'undefined' ? true : false //如果 callback 被赋值，则认为是异步读取，否则认为是同步读取


    //创建 XMLHttpRequest
    // XMLHttpRequest 用法参考：https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests
    // 或 xhr 手册：https://xhr.spec.whatwg.org/
    var xhr = null;
    if (window.ActiveXObject)//IE
    {
        try {
            //IE6以及以后版本中可以使用
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            //IE5.5以及以后版本可以使用
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    else if (window.XMLHttpRequest)//Firefox，Opera 8.0+，Safari，Chrome
    {
        xhr = new XMLHttpRequest();
    }

    // document.getElementById("test").innerHTML = xhr;

    //请求资源
    if (isasync) { //如果是异步请求

        xhr.onload = function (e) {
            if (xhr.readyState == 4) {//4代表数据发送完毕
                //0为访问的本地，200到300代表访问服务器成功，304代表没做修改访问的是缓存
                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 0 || xhr.status == 304) {

                    callback(xhr.responseText);

                }
                else {
                    console.error(xhr.statusText);
                }
            }
            else {
                console.error(xhr.statusText);
            }
        };

        xhr.onerror = function (e) {
            console.error(xhr.statusText);
        };


        xhr.open("GET", url, isasync);
        xhr.send(null);
    }
    else { //如果是同步请求
        xhr.open("GET", url, isasync);
        xhr.send(null);

        if (xhr.readyState == 4) { //4代表数据发送完毕
            //0为访问的本地，200到300代表访问服务器成功，304代表没做修改访问的是缓存
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 0 || xhr.status == 304) {

                return xhr.responseText;

            }
            else {
                return null;
            }
        }
        else {
            return null;
        }

    }

}




function insertHTML_fromFile(container, url, type_, isasync, callback) {
    /** 读取脚本文件内容，将内容添加到 dom，使用方式 innerHTML=text */
    isasync = typeof isasync !== 'undefined' ? isasync : true //默认使用异步请求
    type_ = typeof type_ !== 'undefined' ? type_ : 'replace'

    function insert_content(text) {
        if (text) {
            if (type_ == 'replace') {
                container.innerHTML = text;
            }
            else {
                var e = document.createElement('div')
                e.innerHTML = text;
                if (type_ == 'prepend') {
                    container.insertBefore(e, container.firstChild);
                }
                else {
                    container.appendChild(e);
                }
            }
        }

        if (typeof callback !== 'undefined') {
            callback();
        }
    }

    if (isasync) { //异步
        readScript(url, insert_content);
    }
    else { //同步
        insert_content(readScript(url));
    }
}







function insertJS_fromFile(url, isasync, container, callback) {
    isasync = typeof isasync !== 'undefined' ? isasync : true; //默认使用异步请求
    container = typeof container !== 'undefined' ? container : document.getElementsByTagName("HEAD").item(0); //默认容器是 head


    function insert_script(text) {
        if (text) {
            var newscript = document.createElement("script");
            newscript.language = "javascript";
            newscript.type = "text/javascript";
            try {
                newscript.appendChild(document.createTextNode(text));
            }
            catch (ex) {
                //兼容IE8以及以下浏览器，需要通过text属性来设置
                newscript.text = text;
            }
            container.appendChild(newscript);
            return true;
        }

        if (typeof callback !== 'undefined') {
            callback();
        }
    }

    if (isasync) { //异步
        readScript(url, insert_script);
    }
    else { //同步
        insert_script(readScript(url));
    }
}





function insertCSS_fromFile(url, isasync, container) {
    isasync = typeof isasync !== 'undefined' ? isasync : true; //默认使用异步请求
    container = typeof container !== 'undefined' ? container : document.getElementsByTagName("HEAD").item(0); //默认容器是 head


    function insert_script(text) {
        if (text) {
            var newscript = document.createElement("style");
            newscript.type = "text/css";
            try {
                newscript.appendChild(document.createTextNode(text));
            }
            catch (ex) {
                //兼容IE8以及以下浏览器，需要通过text属性来设置
                newscript.text = text;
            }
            container.appendChild(newscript);
            return true;
        }
    }

    if (isasync) { //异步
        readScript(url, insert_script);
    }
    else { //同步
        insert_script(readScript(url));
    }
}


