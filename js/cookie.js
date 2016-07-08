function getCookie(name){               // ������Ϊname��Cookie     
	var str = document.cookie;          // ��ȡCookie�ַ���     
	if(!str || str.indexOf(name + "=") < 0) // Ѱ��name=     
		return;     
	var cookies = str.split("; ");      // ��;�����е�Cookie�ָ���     
	
	for(var i=0; i<cookies.length; i++){    // ����ÿ��Cookie     
		var cookie = cookies[i];        // ��ǰCookie     
		if(cookie.indexOf(name + "=") == 0){    // �������Ϊname     
			var value = cookie.substring(name.length + 1);     
										// ��ȡvalue     
			return decodeURI(value);    // ��value���룬������     
		}     
	}     
}
    
function setCookie(name, value){        // ����Cookie     
	document.cookie = name + "=" + encodeURI(value);  // ֱ�����ü���     
}       

//д�� cookie  
//������ cookieName �Ĵ�Сд  
//�������Ӽ�  
function WriteCookies(cookieName, cookieValue, expires)  
{  
    if (expires)  
    {  
        //ָ���� expires  
        document.cookie =   
            WriteCookies_GetCookieName(cookieName) + "=" + escape(cookieValue)   
            + "; expires=" + xpires.toGMTString();  
    }  
    else  
    {  
        document.cookie = WriteCookies_GetCookieName(cookieName) + "=" + escape(cookieValue);  
    }  
} 