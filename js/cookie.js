function getCookie(name){               // 返回名为name的Cookie     
	var str = document.cookie;          // 获取Cookie字符串     
	if(!str || str.indexOf(name + "=") < 0) // 寻找name=     
		return;     
	var cookies = str.split("; ");      // 用;将所有的Cookie分隔开     
	
	for(var i=0; i<cookies.length; i++){    // 遍历每个Cookie     
		var cookie = cookies[i];        // 当前Cookie     
		if(cookie.indexOf(name + "=") == 0){    // 如果名字为name     
			var value = cookie.substring(name.length + 1);     
										// 获取value     
			return decodeURI(value);    // 将value解码，并返回     
		}     
	}     
}
    
function setCookie(name, value){        // 设置Cookie     
	document.cookie = name + "=" + encodeURI(value);  // 直接设置即可     
}       

//写入 cookie  
//不区分 cookieName 的大小写  
//不考虑子键  
function WriteCookies(cookieName, cookieValue, expires)  
{  
    if (expires)  
    {  
        //指定了 expires  
        document.cookie =   
            WriteCookies_GetCookieName(cookieName) + "=" + escape(cookieValue)   
            + "; expires=" + xpires.toGMTString();  
    }  
    else  
    {  
        document.cookie = WriteCookies_GetCookieName(cookieName) + "=" + escape(cookieValue);  
    }  
} 