window.addEventListener('resize',setHtmlFontSize);setHtmlFontSize();function setHtmlFontSize(){var windowWidth=document.documentElement.offsetWidth;var htmlFontSize=windowWidth/3.75;if(htmlFontSize>200){htmlFontSize=200}document.querySelector('html').style.fontSize=htmlFontSize+'px'}