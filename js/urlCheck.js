var hrefArray=document.getElementsByTagName("a");
var str = new Array(".zip",".rar",".rmvb",".rm",".mp4",".mp3",".doc",".txt",".pdf",".zip",".avi"); 

for(i=0;i<hrefArray.length;i++)
{
  hrefArray[i].addEventListener("click",showMsg,false);
}
function showMsg()
{
    var Checkflag=0;
    for(i=0;i<str.length;i++)
    	{
        	var v=str[i];
        	var reg=new RegExp(v);
        	if((this.href.search(reg))!=-1)
        	{
			++Checkflag;
			break;
		}
	}
	return Checkflag==0?alert("区配不成功"+this.href):alert("区配成功!"+this.href);	
}
for(j=0;j<hrefArray.length;j++)
	hrefArray[j].style.background="yellow";