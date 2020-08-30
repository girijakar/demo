/*!
 * https://englishextra.github.io/libs/john-locke/js/vendors.min.js
 */
(function(){"use strict";function e(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function t(e,t,i){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),e=n(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}function i(e,t){var i=-1,n=e?e.length:0;if("number"==typeof n&&n>-1&&n<=h)for(;++i<n;)t(e[i],i,e);else r(e,t)}function n(t){return t=b(t),/^(?:webOS|i(?:OS|P))/.test(t)?t:e(t)}function r(e,t){for(var i in e)y.call(e,i)&&t(e[i],i,e)}function o(t){return null==t?e(t):M.call(t).slice(8,-1)}function a(e,t){var i=null!=e?typeof e[t]:"number";return!(/^(?:boolean|number|string|undefined)$/.test(i)||"object"==i&&!e[t])}function l(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function s(e,t){var n=null;return i(e,function(i,r){n=t(n,i,r,e)}),n}function b(e){return String(e).replace(/^ +| +$/g,"")}function c(e){function i(t){return s(t,function(t,i){var r=i.pattern||l(i);return!t&&(t=RegExp("\\b"+r+" *\\d+[.\\w_]*","i").exec(e)||RegExp("\\b"+r+" *\\w+-[\\w]*","i").exec(e)||RegExp("\\b"+r+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(e))&&((t=String(i.label&&!RegExp(r,"i").test(i.label)?i.label:t).split("/"))[1]&&!/[\d.]+/.test(t[0])&&(t[0]+=" "+t[1]),i=i.label||i,t=n(t[0].replace(RegExp(r,"i"),i).replace(RegExp("; *(?:"+i+"[_-])?","i")," ").replace(RegExp("("+i+")[-_.]?(\\w)","i"),"$1 $2"))),t})}var p=u,f=e&&"object"==typeof e&&"String"!=o(e);f&&(p=e,e=null);var S=p.navigator||{},x=S.userAgent||"";e||(e=x);var h,O,y=f||g==d,v=f?!!S.likeChrome:/\bChrome\b/.test(e)&&!/internal|\n/i.test(M.toString()),w=f?"Object":"ScriptBridgingProxyObject",P=f?"Object":"Environment",E=f&&p.java?"JavaPackage":o(p.java),k=f?"Object":"RuntimeObject",C=/\bJava/.test(E)&&p.java,W=C&&o(p.environment)==P,B=C?"a":"α",I=C?"b":"β",A=p.document||{},R=p.operamini||p.opera,T=m.test(T=f&&R?R["[[Class]]"]:o(R))?T:R=null,F=e,G=[],$=null,j=e==x,X=j&&R&&"function"==typeof R.version&&R.version(),N=s([{label:"EdgeHTML",pattern:"Edge"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)}),K=s(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"],function(t,i){return t||RegExp("\\b"+(i.pattern||l(i))+"\\b","i").exec(e)&&(i.label||i)}),V=i([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),z=s({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}},function(t,i,n){return t||(i[V]||i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(V)]||RegExp("\\b"+l(n)+"(?:\\b|\\w*\\d)","i").exec(e))&&n}),L=s(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],function(i,n){var r=n.pattern||l(n);return!i&&(i=RegExp("\\b"+r+"(?:/[\\d.]+|[ \\w.]*)","i").exec(e))&&(i=t(i,r,n.label||n)),i});if(N&&(N=[N]),z&&!V&&(V=i([z])),(h=/\bGoogle TV\b/.exec(V))&&(V=h[0]),/\bSimulator\b/i.test(e)&&(V=(V?V+" ":"")+"Simulator"),"Opera Mini"==K&&/\bOPiOS\b/.test(e)&&G.push("running in Turbo/Uncompressed mode"),"IE"==K&&/\blike iPhone OS\b/.test(e)?(z=(h=c(e.replace(/like iPhone OS/,""))).manufacturer,V=h.product):/^iP/.test(V)?(K||(K="Safari"),L="iOS"+((h=/ OS ([\d_]+)/i.exec(e))?" "+h[1].replace(/_/g,"."):"")):"Konqueror"!=K||/buntu/i.test(L)?z&&"Google"!=z&&(/Chrome/.test(K)&&!/\bMobile Safari\b/i.test(e)||/\bVita\b/.test(V))||/\bAndroid\b/.test(L)&&/^Chrome/.test(K)&&/\bVersion\//i.test(e)?(K="Android Browser",L=/\bAndroid\b/.test(L)?L:"Android"):"Silk"==K?(/\bMobi/i.test(e)||(L="Android",G.unshift("desktop mode")),/Accelerated *= *true/i.test(e)&&G.unshift("accelerated")):"PaleMoon"==K&&(h=/\bFirefox\/([\d.]+)\b/.exec(e))?G.push("identifying as Firefox "+h[1]):"Firefox"==K&&(h=/\b(Mobile|Tablet|TV)\b/i.exec(e))?(L||(L="Firefox OS"),V||(V=h[1])):!K||(h=!/\bMinefield\b/i.test(e)&&/\b(?:Firefox|Safari)\b/.exec(K))?(K&&!V&&/[\/,]|^[^(]+?\)/.test(e.slice(e.indexOf(h+"/")+8))&&(K=null),(h=V||z||L)&&(V||z||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(L))&&(K=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(L)?L:h)+" Browser")):"Electron"==K&&(h=(/\bChrome\/([\d.]+)\b/.exec(e)||0)[1])&&G.push("Chromium "+h):L="Kubuntu",X||(X=s(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",l(K),"(?:Firefox|Minefield|NetFront)"],function(t,i){return t||(RegExp(i+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(e)||0)[1]||null})),(h="iCab"==N&&parseFloat(X)>3&&"WebKit"||/\bOpera\b/.test(K)&&(/\bOPR\b/.test(e)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(e)&&!/^(?:Trident|EdgeHTML)$/.test(N)&&"WebKit"||!N&&/\bMSIE\b/i.test(e)&&("Mac OS"==L?"Tasman":"Trident")||"WebKit"==N&&/\bPlayStation\b(?! Vita\b)/i.test(K)&&"NetFront")&&(N=[h]),"IE"==K&&(h=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(e)||0)[1])?(K+=" Mobile",L="Windows Phone "+(/\+$/.test(h)?h:h+".x"),G.unshift("desktop mode")):/\bWPDesktop\b/i.test(e)?(K="IE Mobile",L="Windows Phone 8.x",G.unshift("desktop mode"),X||(X=(/\brv:([\d.]+)/.exec(e)||0)[1])):"IE"!=K&&"Trident"==N&&(h=/\brv:([\d.]+)/.exec(e))&&(K&&G.push("identifying as "+K+(X?" "+X:"")),K="IE",X=h[1]),j){if(a(p,"global"))if(C&&(F=(h=C.lang.System).getProperty("os.arch"),L=L||h.getProperty("os.name")+" "+h.getProperty("os.version")),y&&a(p,"system")&&(h=[p.system])[0]){L||(L=h[0].os||null);try{h[1]=p.require("ringo/engine").version,X=h[1].join("."),K="RingoJS"}catch(e){h[0].global.system==p.system&&(K="Narwhal")}}else"object"==typeof p.process&&!p.process.browser&&(h=p.process)?"object"==typeof h.versions?"string"==typeof h.versions.electron?(G.push("Node "+h.versions.node),K="Electron",X=h.versions.electron):"string"==typeof h.versions.nw&&(G.push("Chromium "+X,"Node "+h.versions.node),K="NW.js",X=h.versions.nw):(K="Node.js",F=h.arch,L=h.platform,X=(X=/[\d.]+/.exec(h.version))?X[0]:"unknown"):W&&(K="Rhino");else o(h=p.runtime)==w?(K="Adobe AIR",L=h.flash.system.Capabilities.os):o(h=p.phantom)==k?(K="PhantomJS",X=(h=h.version||null)&&h.major+"."+h.minor+"."+h.patch):"number"==typeof A.documentMode&&(h=/\bTrident\/(\d+)/i.exec(e))?(X=[X,A.documentMode],(h=+h[1]+4)!=X[1]&&(G.push("IE "+X[1]+" mode"),N&&(N[1]=""),X[1]=h),X="IE"==K?String(X[1].toFixed(1)):X[0]):"number"==typeof A.documentMode&&/^(?:Chrome|Firefox)\b/.test(K)&&(G.push("masking as "+K+" "+X),K="IE",X="11.0",N=["Trident"],L="Windows");L=L&&n(L)}if(X&&(h=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(X)||/(?:alpha|beta)(?: ?\d)?/i.exec(e+";"+(j&&S.appMinorVersion))||/\bMinefield\b/i.test(e)&&"a")&&($=/b/i.test(h)?"beta":"alpha",X=X.replace(RegExp(h+"\\+?$"),"")+("beta"==$?I:B)+(/\d+\+?/.exec(h)||"")),"Fennec"==K||"Firefox"==K&&/\b(?:Android|Firefox OS)\b/.test(L))K="Firefox Mobile";else if("Maxthon"==K&&X)X=X.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(V))"Xbox 360"==V&&(L=null),"Xbox 360"==V&&/\bIEMobile\b/.test(e)&&G.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(K)&&(!K||V||/Browser|Mobi/.test(K))||"Windows CE"!=L&&!/Mobi/i.test(e))if("IE"==K&&j)try{null===p.external&&G.unshift("platform preview")}catch(e){G.unshift("embedded")}else(/\bBlackBerry\b/.test(V)||/\bBB10\b/.test(e))&&(h=(RegExp(V.replace(/ +/g," *")+"/([.\\d]+)","i").exec(e)||0)[1]||X)?(L=((h=[h,/BB10/.test(e)])[1]?(V=null,z="BlackBerry"):"Device Software")+" "+h[0],X=null):this!=r&&"Wii"!=V&&(j&&R||/Opera/.test(K)&&/\b(?:MSIE|Firefox)\b/i.test(e)||"Firefox"==K&&/\bOS X (?:\d+\.){2,}/.test(L)||"IE"==K&&(L&&!/^Win/.test(L)&&X>5.5||/\bWindows XP\b/.test(L)&&X>8||8==X&&!/\bTrident\b/.test(e)))&&!m.test(h=c.call(r,e.replace(m,"")+";"))&&h.name&&(h="ing as "+h.name+((h=h.version)?" "+h:""),m.test(K)?(/\bIE\b/.test(h)&&"Mac OS"==L&&(L=null),h="identify"+h):(h="mask"+h,K=T?n(T.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(h)&&(L=null),j||(X=null)),N=["Presto"],G.push(h));else K+=" Mobile";(h=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(e)||0)[1])&&(h=[parseFloat(h.replace(/\.(\d)$/,".0$1")),h],"Safari"==K&&"+"==h[1].slice(-1)?(K="WebKit Nightly",$="alpha",X=h[1].slice(0,-1)):X!=h[1]&&X!=(h[2]=(/\bSafari\/([\d.]+\+?)/i.exec(e)||0)[1])||(X=null),h[1]=(/\bChrome\/([\d.]+)/i.exec(e)||0)[1],537.36==h[0]&&537.36==h[2]&&parseFloat(h[1])>=28&&"WebKit"==N&&(N=["Blink"]),j&&(v||h[1])?(N&&(N[1]="like Chrome"),h=h[1]||(h=h[0],h<530?1:h<532?2:h<532.05?3:h<533?4:h<534.03?5:h<534.07?6:h<534.1?7:h<534.13?8:h<534.16?9:h<534.24?10:h<534.3?11:h<535.01?12:h<535.02?"13+":h<535.07?15:h<535.11?16:h<535.19?17:h<536.05?18:h<536.1?19:h<537.01?20:h<537.11?"21+":h<537.13?23:h<537.18?24:h<537.24?25:h<537.36?26:"Blink"!=N?"27":"28")):(N&&(N[1]="like Safari"),h=h[0],h=h<400?1:h<500?2:h<526?3:h<533?4:h<534?"4+":h<535?5:h<537?6:h<538?7:h<601?8:"8"),N&&(N[1]+=" "+(h+="number"==typeof h?".x":/[.+]/.test(h)?"":"+")),"Safari"==K&&(!X||parseInt(X)>45)&&(X=h)),"Opera"==K&&(h=/\bzbov|zvav$/.exec(L))?(K+=" ",G.unshift("desktop mode"),"zvav"==h?(K+="Mini",X=null):K+="Mobile",L=L.replace(RegExp(" *"+h+"$"),"")):"Safari"==K&&/\bChrome\b/.exec(N&&N[1])&&(G.unshift("desktop mode"),K="Chrome Mobile",X=null,/\bOS X\b/.test(L)?(z="Apple",L="iOS 4.3+"):L=null),X&&0==X.indexOf(h=/[\d.]+$/.exec(L))&&e.indexOf("/"+h+"-")>-1&&(L=b(L.replace(h,""))),N&&!/\b(?:Avant|Nook)\b/.test(K)&&(/Browser|Lunascape|Maxthon/.test(K)||"Safari"!=K&&/^iOS/.test(L)&&/\bSafari\b/.test(N[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(K)&&N[1])&&(h=N[N.length-1])&&G.push(h),G.length&&(G=["("+G.join("; ")+")"]),z&&V&&V.indexOf(z)<0&&G.push("on "+z),V&&G.push((/^on /.test(G[G.length-1])?"":"on ")+V),L&&(h=/ ([\d.+]+)$/.exec(L),O=h&&"/"==L.charAt(L.length-h[0].length-1),L={architecture:32,family:h&&!O?L.replace(h[0],""):L,version:h?h[1]:null,toString:function(){var e=this.version;return this.family+(e&&!O?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(h=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(F))&&!/\bi686\b/i.test(F)?(L&&(L.architecture=64,L.family=L.family.replace(RegExp(" *"+h),"")),K&&(/\bWOW64\b/i.test(e)||j&&/\w(?:86|32)$/.test(S.cpuClass||S.platform)&&!/\bWin64; x64\b/i.test(e))&&G.unshift("32-bit")):L&&/^OS X/.test(L.family)&&"Chrome"==K&&parseFloat(X)>=39&&(L.architecture=64),e||(e=null);var _={};return _.description=e,_.layout=N&&N[0],_.manufacturer=z,_.name=K,_.prerelease=$,_.product=V,_.ua=e,_.version=K&&X,_.os=L||{architecture:null,family:null,version:null,toString:function(){return"null"}},_.parse=c,_.toString=function(){return this.description||""},_.version&&G.unshift(X),_.name&&G.unshift(K),L&&K&&(L!=String(L).split(" ")[0]||L!=K.split(" ")[0]&&!V)&&G.push(V?"("+L+")":"on "+L),G.length&&(_.description=G.join(" ")),_}var p={function:!0,object:!0},u=p[typeof window]&&window||this,d=u,f=p[typeof exports]&&exports,S=p[typeof module]&&module&&!module.nodeType&&module,x=f&&S&&"object"==typeof global&&global;!x||x.global!==x&&x.window!==x&&x.self!==x||(u=x);var h=Math.pow(2,53)-1,m=/\bOpera/,g=this,O=Object.prototype,y=O.hasOwnProperty,M=O.toString,v=c();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(u.platform=v,define(function(){return v})):f&&S?r(v,function(e,t){f[t]=e}):u.platform=v}).call(this);
!function(t,i,e){"use strict";function s(t,i){this.element=t,this.layers=t.getElementsByClassName("layer");var e={calibrateX:this.data(this.element,"calibrate-x"),calibrateY:this.data(this.element,"calibrate-y"),invertX:this.data(this.element,"invert-x"),invertY:this.data(this.element,"invert-y"),limitX:this.data(this.element,"limit-x"),limitY:this.data(this.element,"limit-y"),scalarX:this.data(this.element,"scalar-x"),scalarY:this.data(this.element,"scalar-y"),frictionX:this.data(this.element,"friction-x"),frictionY:this.data(this.element,"friction-y"),originX:this.data(this.element,"origin-x"),originY:this.data(this.element,"origin-y"),pointerEvents:this.data(this.element,"pointer-events"),precision:this.data(this.element,"precision")};for(var s in e)null===e[s]&&delete e[s];this.extend(this,o,i,e),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var o={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!0,precision:1};s.prototype.extend=function(){if(arguments.length>1)for(var t=arguments[0],i=1,e=arguments.length;i<e;i++){var s=arguments[i];for(var o in s)s.hasOwnProperty(o)&&(t[o]=s[o])}},s.prototype.data=function(t,i){return this.deserialize(t.getAttribute("data-"+i))},s.prototype.deserialize=function(t){return"true"===t||"false"!==t&&("null"===t?null:!isNaN(parseFloat(t))&&isFinite(t)?parseFloat(t):t)},s.prototype.camelCase=function(t){return t.replace(/-+(.)?/g,function(t,i){return i?i.toUpperCase():""})},s.prototype.transformSupport=function(e){for(var s=i.createElement("div"),o=!1,n=null,r=!1,h=null,a=null,l=0,p=this.vendors.length;l<p;l++)if(null!==this.vendors[l]?(h=this.vendors[l][0]+"transform",a=this.vendors[l][1]+"Transform"):(h="transform",a="transform"),void 0!==s.style[a]){o=!0;break}switch(e){case"2D":r=o;break;case"3D":if(o){var c=i.body||i.createElement("body"),m=i.documentElement,d=m.style.overflow,u=!1;i.body||(u=!0,m.style.overflow="hidden",m.appendChild(c),c.style.overflow="hidden",c.style.background=""),c.appendChild(s),s.style[a]="translate3d(1px,1px,1px)",r=void 0!==(n=t.getComputedStyle(s).getPropertyValue(h))&&n.length>0&&"none"!==n,m.style.overflow=d,c.removeChild(s),u&&(c.removeAttribute("style"),c.parentNode.removeChild(c))}}return r},s.prototype.ww=null,s.prototype.wh=null,s.prototype.wcx=null,s.prototype.wcy=null,s.prototype.wrx=null,s.prototype.wry=null,s.prototype.portrait=null,s.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),s.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],s.prototype.motionSupport=!!t.DeviceMotionEvent,s.prototype.orientationSupport=!!t.DeviceOrientationEvent,s.prototype.orientationStatus=0,s.prototype.motionStatus=0,s.prototype.propertyCache={},s.prototype.initialise=function(){void 0===s.prototype.transform2DSupport&&(s.prototype.transform2DSupport=s.prototype.transformSupport("2D"),s.prototype.transform3DSupport=s.prototype.transformSupport("3D")),this.transform3DSupport&&this.accelerate(this.element),"static"===t.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},s.prototype.updateLayers=function(){this.layers=this.element.getElementsByClassName("layer"),this.depthsX=[],this.depthsY=[];for(var t=0,i=this.layers.length;t<i;t++){var e=this.layers[t];this.transform3DSupport&&this.accelerate(e),e.style.position=t?"absolute":"relative",e.style.display="block",e.style.left=0,e.style.top=0;var s=this.data(e,"depth")||0;this.depthsX.push(this.data(e,"depth-x")||s),this.depthsY.push(this.data(e,"depth-y")||s)}},s.prototype.updateDimensions=function(){this.ww=t.innerWidth,this.wh=t.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},s.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},s.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},s.prototype.enable=function(){this.enabled||(this.enabled=!0,!this.desktop&&this.orientationSupport?(this.portrait=null,t.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):!this.desktop&&this.motionSupport?(this.portrait=null,t.addEventListener("devicemotion",this.onDeviceMotion),setTimeout(this.onMotionTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,t.addEventListener("mousemove",this.onMouseMove)),t.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},s.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?t.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?t.removeEventListener("devicemotion",this.onDeviceMotion):t.removeEventListener("mousemove",this.onMouseMove),t.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},s.prototype.calibrate=function(t,i){this.calibrateX=void 0===t?this.calibrateX:t,this.calibrateY=void 0===i?this.calibrateY:i},s.prototype.invert=function(t,i){this.invertX=void 0===t?this.invertX:t,this.invertY=void 0===i?this.invertY:i},s.prototype.friction=function(t,i){this.frictionX=void 0===t?this.frictionX:t,this.frictionY=void 0===i?this.frictionY:i},s.prototype.scalar=function(t,i){this.scalarX=void 0===t?this.scalarX:t,this.scalarY=void 0===i?this.scalarY:i},s.prototype.limit=function(t,i){this.limitX=void 0===t?this.limitX:t,this.limitY=void 0===i?this.limitY:i},s.prototype.origin=function(t,i){this.originX=void 0===t?this.originX:t,this.originY=void 0===i?this.originY:i},s.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},s.prototype.css=function(t,i,e){var s=this.propertyCache[i];if(!s)for(var o=0,n=this.vendors.length;o<n;o++)if(s=null!==this.vendors[o]?this.camelCase(this.vendors[o][1]+"-"+i):i,void 0!==t.style[s]){this.propertyCache[i]=s;break}t.style[s]=e},s.prototype.accelerate=function(t){this.css(t,"transform","translate3d(0,0,0)"),this.css(t,"transform-style","preserve-3d"),this.css(t,"backface-visibility","hidden")},s.prototype.setPosition=function(t,i,e){i=i.toFixed(this.precision)+"px",e=e.toFixed(this.precision)+"px",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},s.prototype.onOrientationTimer=function(){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},s.prototype.onMotionTimer=function(){this.motionSupport&&0===this.motionStatus&&(this.disable(),this.motionSupport=!1,this.enable())},s.prototype.onCalibrationTimer=function(){this.calibrationFlag=!0},s.prototype.onWindowResize=function(){this.updateDimensions()},s.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?i:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?i:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,s=this.layers.length;e<s;e++){var o=this.layers[e],n=this.depthsX[e],r=this.depthsY[e],h=this.vx*(n*(this.invertX?-1:1)),a=this.vy*(r*(this.invertY?-1:1));this.setPosition(o,h,a)}this.raf=requestAnimationFrame(this.onAnimationFrame)},s.prototype.rotate=function(t,i){var e=(event.beta||0)/30,s=(event.gamma||0)/30,o=this.wh>this.ww;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=e,this.cy=s),this.ix=e,this.iy=s},s.prototype.onDeviceOrientation=function(t){var i=t.beta,e=t.gamma;this.desktop||null===i||null===e||(this.orientationStatus=1,this.rotate(i,e))},s.prototype.onDeviceMotion=function(t){var i=t.rotationRate.beta,e=t.rotationRate.gamma;this.desktop||null===i||null===e||(this.motionStatus=1,this.rotate(i,e))},s.prototype.onMouseMove=function(t){var i=t.clientX,e=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.ex),i=Math.min(i,this.ex+this.ew),e=Math.max(e,this.ey),e=Math.min(e,this.ey+this.eh)),this.ix=(i-this.ex-this.ecx)/this.erx,this.iy=(e-this.ey-this.ecy)/this.ery):(this.ix=(i-this.wcx)/this.wrx,this.iy=(e-this.wcy)/this.wry)},t.Parallax=s}(window,document);
!function(r){"use strict";for(var t="length",e=[null,[[10,7,17,13],[1,1,1,1],[]],[[16,10,28,22],[1,1,1,1],[4,16]],[[26,15,22,18],[1,1,2,2],[4,20]],[[18,20,16,26],[2,1,4,2],[4,24]],[[24,26,22,18],[2,1,4,4],[4,28]],[[16,18,28,24],[4,2,4,4],[4,32]],[[18,20,26,18],[4,2,5,6],[4,20,36]],[[22,24,26,22],[4,2,6,6],[4,22,40]],[[22,30,24,20],[5,2,8,8],[4,24,44]],[[26,18,28,24],[5,4,8,8],[4,26,48]],[[30,20,24,28],[5,4,11,8],[4,28,52]],[[22,24,28,26],[8,4,11,10],[4,30,56]],[[22,26,22,24],[9,4,16,12],[4,32,60]],[[24,30,24,20],[9,4,16,16],[4,24,44,64]],[[24,22,24,30],[10,6,18,12],[4,24,46,68]],[[28,24,30,24],[10,6,16,17],[4,24,48,72]],[[28,28,28,28],[11,6,19,16],[4,28,52,76]],[[26,30,28,28],[13,6,21,18],[4,28,54,80]],[[26,28,26,26],[14,7,25,21],[4,28,56,84]],[[26,28,28,30],[16,8,25,20],[4,32,60,88]],[[26,28,30,28],[17,8,25,23],[4,26,48,70,92]],[[28,28,24,30],[17,9,34,23],[4,24,48,72,96]],[[28,30,30,30],[18,9,30,25],[4,28,52,76,100]],[[28,30,30,30],[20,10,32,27],[4,26,52,78,104]],[[28,26,30,30],[21,12,35,29],[4,30,56,82,108]],[[28,28,30,28],[23,12,37,34],[4,28,56,84,112]],[[28,30,30,30],[25,12,40,34],[4,32,60,88,116]],[[28,30,30,30],[26,13,42,35],[4,24,48,72,96,120]],[[28,30,30,30],[28,14,45,38],[4,28,52,76,100,124]],[[28,30,30,30],[29,15,48,40],[4,24,50,76,102,128]],[[28,30,30,30],[31,16,51,43],[4,28,54,80,106,132]],[[28,30,30,30],[33,17,54,45],[4,32,58,84,110,136]],[[28,30,30,30],[35,18,57,48],[4,28,56,84,112,140]],[[28,30,30,30],[37,19,60,51],[4,32,60,88,116,144]],[[28,30,30,30],[38,19,63,53],[4,28,52,76,100,124,148]],[[28,30,30,30],[40,20,66,56],[4,22,48,74,100,126,152]],[[28,30,30,30],[43,21,70,59],[4,26,52,78,104,130,156]],[[28,30,30,30],[45,22,74,62],[4,30,56,82,108,134,160]],[[28,30,30,30],[47,24,77,65],[4,24,52,80,108,136,164]],[[28,30,30,30],[49,25,81,68],[4,28,56,84,112,140,168]]],n=/^\d*$/,a=/^[A-Za-z0-9 $%*+\-./:] * $ /,o=/^[A-Z0-9 $%*+\-./:] * $ /,u=[],i=[-1],f=0,c=1;f<255;++f)u.push(c),i[c]=f,c=2*c^(c>=128?285:0);for(var l=[[]],s=0;s<30;++s){for(var v=l[s],h=[],d=0;d<=s;++d){var p=d<s?u[v[d]]:0,m=u[(s+(v[d-1]||0))%255];h.push(i[p^m])}l.push(h)}for(var g={},w=0;w<45;++w)g["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".charAt(w)]=w;var b=[function(r,t){return(r+t)%2==0},function(r){return r%2==0},function(r,t){return t%3==0},function(r,t){return(r+t)%3==0},function(r,t){return((r/2|0)+(t/3|0))%2==0},function(r,t){return r*t%2+r*t%3==0},function(r,t){return(r*t%2+r*t%3)%2==0},function(r,t){return((r+t)%2+r*t%3)%2==0}],x=function(r){return r>6},F=function(r){return 4*r+17},N=function(r){var n=e[r],a=16*r*r+128*r+64;return x(r)&&(a-=36),n[2][t]&&(a-=25*n[2][t]*n[2][t]-10*n[2][t]-55),a},A=function(r,t){var n=-8&N(r),a=e[r];return n-=8*a[0][t]*a[1][t]},C=function(r,t){switch(t){case 1:return r<10?10:r<27?12:14;case 2:return r<10?9:r<27?11:13;case 4:return r<10?8:16;case 8:return r<10?8:r<27?10:12}},S=function(r,t,e){var n=A(r,e)-4-C(r,t);switch(t){case 1:return 3*(n/10|0)+(n%10<4?0:n%10<7?1:2);case 2:return 2*(n/11|0)+(n%11<6?0:1);case 4:return n/8|0;case 8:return n/13|0}},y=function(r,e){switch(r){case 1:return e.match(n)?e:null;case 2:return e.match(a)?e.toUpperCase():null;case 4:if("string"==typeof e){for(var o=[],u=0;u<e[t];++u){var i=e.charCodeAt(u);i<128?o.push(i):i<2048?o.push(192|i>>6,128|63&i):i<65536?o.push(224|i>>12,128|i>>6&63,128|63&i):o.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}return o}return e}},M=function(r,e,n,a){var o=[],u=0,i=8,f=n[t],c=function(r,t){if(t>=i){for(o.push(u|r>>(t-=i));t>=8;)o.push(r>>(t-=8)&255);u=0,i=8}t>0&&(u|=(r&(1<<t)-1)<<(i-=t))},l=C(r,e);switch(c(e,4),c(f,l),e){case 1:for(var s=2;s<f;s+=3)c(parseInt(n.substring(s-2,s+1),10),10);c(parseInt(n.substring(s-2),10),[0,4,7][f%3]);break;case 2:for(var v=1;v<f;v+=2)c(45*g[n.charAt(v-1)]+g[n.charAt(v)],11);f%2==1&&c(g[n.charAt(v-1)],6);break;case 4:for(var h=0;h<f;++h)c(n[h],8)}for(c(0,4),i<8&&o.push(u);o[t]+1<a;)o.push(236,17);return o[t]<a&&o.push(236),o},E=function(r,e){for(var n=r.slice(0),a=r[t],o=e[t],f=0;f<o;++f)n.push(0);for(var c=0;c<a;){var l=i[n[c++]];if(l>=0)for(var s=0;s<o;++s)n[c+s]^=u[(l+e[s])%255]}return n.slice(a)},k=function(r,e,n){for(var a=[],o=r[t]/e|0,u=0,i=e-r[t]%e,f=0;f<i;++f)a.push(u),u+=o;for(var c=i;c<e;++c)a.push(u),u+=o+1;a.push(u);for(var l=[],s=0;s<e;++s)l.push(E(r.slice(a[s],a[s+1]),n));for(var v=[],h=r[t]/e|0,d=0;d<h;++d)for(var p=0;p<e;++p)v.push(r[a[p]+d]);for(var m=i;m<e;++m)v.push(r[a[m+1]-1]);for(var g=0;g<n[t];++g)for(var w=0;w<e;++w)v.push(l[w][g]);return v},L=function(r,t,e,n){for(var a=r<<n,o=t-1;o>=0;--o)a>>n+o&1&&(a^=e<<o);return r<<n|a},R=function(r){for(var n=e[r],a=F(r),o=[],u=[],i=0;i<a;++i)o.push([]),u.push([]);var f=function(r,t,e,n,a){for(var i=0;i<e;++i)for(var f=0;f<n;++f)o[r+i][t+f]=a[i]>>f&1,u[r+i][t+f]=1};f(0,0,9,9,[127,65,93,93,93,65,383,0,64]),f(a-8,0,8,9,[256,127,65,93,93,93,65,127]),f(0,a-8,9,8,[254,130,186,186,186,130,254,0,0]);for(var c=9;c<a-8;++c)o[6][c]=o[c][6]=1&~c,u[6][c]=u[c][6]=1;for(var l=n[2],s=l[t],v=0;v<s;++v)for(var h=0===v||v===s-1?1:0,d=0===v?s-1:s,p=h;p<d;++p)f(l[v],l[p],5,5,[31,17,21,17,31]);if(x(r))for(var m=L(r,6,7973,12),g=0,w=0;w<6;++w)for(var b=0;b<3;++b)o[w][a-11+b]=o[a-11+b][w]=m>>g++&1,u[w][a-11+b]=u[a-11+b][w]=1;return{matrix:o,reserved:u}},$=function(r,e,n){for(var a=r[t],o=0,u=-1,i=a-1;i>=0;i-=2){6===i&&--i;for(var f=u<0?a-1:0,c=0;c<a;++c){for(var l=i;l>i-2;--l)e[f][l]||(r[f][l]=n[o>>3]>>(7&~o)&1,++o);f+=u}u=-u}return r},z=function(r,e,n){for(var a=b[n],o=r[t],u=0;u<o;++u)for(var i=0;i<o;++i)e[u][i]||(r[u][i]^=a(u,i));return r},D=function(r,e,n,a){for(var o=r[t],u=21522^L(n<<3|a,5,1335,10),i=0;i<15;++i){var f=[0,1,2,3,4,5,7,8,o-7,o-6,o-5,o-4,o-3,o-2,o-1][i],c=[o-1,o-2,o-3,o-4,o-5,o-6,o-7,o-8,7,5,4,3,2,1,0][i];r[f][8]=r[8][c]=u>>i&1}return r},G=function(r){for(var e=function(r){for(var e=0,n=0;n<r[t];++n)r[n]>=5&&(e+=r[n]-5+3);for(var a=5;a<r[t];a+=2){var o=r[a];r[a-1]===o&&r[a-2]===3*o&&r[a-3]===o&&r[a-4]===o&&(r[a-5]>=4*o||r[a+1]>=4*o)&&(e+=40)}return e},n=r[t],a=0,o=0,u=0;u<n;++u){var i,f=r[u];i=[0];for(var c=0;c<n;){var l;for(l=0;c<n&&f[c];++l)++c;for(i.push(l),l=0;c<n&&!f[c];++l)++c;i.push(l)}a+=e(i),i=[0];for(var s=0;s<n;){var v;for(v=0;s<n&&r[s][u];++v)++s;for(i.push(v),v=0;s<n&&!r[s][u];++v)++s;i.push(v)}a+=e(i);var h=r[u+1]||[];o+=f[0];for(var d=1;d<n;++d){var p=f[d];o+=p,f[d-1]===p&&h[d]===p&&h[d-1]===p&&(a+=3)}}return a+=10*(Math.abs(o/n/n-.5)/.05|0)},U=function(r,t,n,a,o){var u=e[t],i=M(t,n,r,A(t,a)>>3);i=k(i,u[1][a],l[u[0][a]]);var f=R(t),c=f.matrix,s=f.reserved;if($(c,s,i),o<0){z(c,s,0),D(c,0,a,0);var v=0,h=G(c);for(z(c,s,0),o=1;o<8;++o){z(c,s,o),D(c,0,a,o);var d=G(c);h>d&&(h=d,v=o),z(c,s,o)}o=v}return z(c,s,o),D(c,0,a,o),c},H={generate:function(r,e){var a=e||{},u={numeric:1,alphanumeric:2,octet:4},i={L:1,M:0,Q:3,H:2},f=a.version||-1,c=i[(a.ecclevel||"L").toUpperCase()],l=a.mode?u[a.mode.toLowerCase()]:-1,s="mask"in a?a.mask:-1;if(l<0)l="string"==typeof r?r.match(n)?1:r.match(o)?2:4:4;else if(1!==l&&2!==l&&4!==l)throw"invalid or unsupported mode";if(null===(r=y(l,r)))throw"invalid data format";if(c<0||c>3)throw"invalid ECC level";if(f<0){for(f=1;f<=40&&!(r[t]<=S(f,l,c));++f);if(f>40)throw"too large data"}else if(f<1||f>40)throw"invalid version";if(-1!==s&&(s<0||s>8))throw"invalid mask";return U(r,f,l,c,s)},generateHTML:function(r,e){for(var n=e||{},a=n.fillcolor?n.fillcolor:"#FFFFFF",o=n.textcolor?n.textcolor:"#000000",u=H.generate(r,n),i=Math.max(n.modulesize||5,.5),f=Math.max(null!==n.margin?n.margin:4,0),c=document.createElement("div"),l=u[t],s=['<table border="0" cellspacing="0" cellpadding="0" style="border:'+i*f+"px solid "+a+";background:"+a+'">'],v=0;v<l;++v){s.push("<tr>");for(var h=0;h<l;++h)s.push('<td style="width:'+i+"px;height:"+i+"px"+(u[v][h]?";background:"+o:"")+'"></td>');s.push("</tr>")}c.className="qrcode";var d=document.createRange();d.selectNodeContents(c);var p=d.createContextualFragment(s.join("")+"</table>");return c.appendChild(p),c},generateSVG:function(r,e){var n=e||{},a=n.fillcolor?n.fillcolor:"#FFFFFF",o=n.textcolor?n.textcolor:"#000000",u=H.generate(r,n),i=u[t],f=Math.max(n.modulesize||5,.5),c=Math.max(n.margin?n.margin:4,0),l=f*(i+2*c),s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttributeNS(null,"viewBox","0 0 "+l+" "+l),s.setAttributeNS(null,"style","shape-rendering:crispEdges");var v="qrcode"+Date.now();s.setAttributeNS(null,"id",v);var h=document.createDocumentFragment(),d=document.createElementNS("http://www.w3.org/2000/svg","style");d.appendChild(document.createTextNode("#"+v+" .bg{fill:"+a+"}#"+v+" .fg{fill:"+o+"}")),h.appendChild(d);var p=function(r,t,e,n,a){var o=document.createElementNS("http://www.w3.org/2000/svg","rect")||"";return o.setAttributeNS(null,"class",r),o.setAttributeNS(null,"fill",t),o.setAttributeNS(null,"x",e),o.setAttributeNS(null,"y",n),o.setAttributeNS(null,"width",a),o.setAttributeNS(null,"height",a),o};h.appendChild(p("bg","none",0,0,l));for(var m=c*f,g=0;g<i;++g){for(var w=c*f,b=0;b<i;++b)u[g][b]&&h.appendChild(p("fg","none",w,m,f)),w+=f;m+=f}return s.appendChild(h),s},generatePNG:function(r,e){var n,a=e||{},o=a.fillcolor||"#FFFFFF",u=a.textcolor||"#000000",i=H.generate(r,a),f=Math.max(a.modulesize||5,.5),c=Math.max(null!==a.margin&&void 0!==a.margin?a.margin:4,0),l=i[t],s=f*(l+2*c),v=document.createElement("canvas");if(v.width=v.height=s,!(n=v.getContext("2d")))throw"canvas support is needed for PNG output";n.fillStyle=o,n.fillRect(0,0,s,s),n.fillStyle=u;for(var h=0;h<l;++h)for(var d=0;d<l;++d)i[h][d]&&n.fillRect(f*(c+d),f*(c+h),f,f);return v.toDataURL()}};r.QRCode=H}("undefined"!=typeof window?window:this);
var WheelIndicator=function(t,e){function i(t){this._options=h(u,t),this._deltaArray=[0,0,0],this._isAcceleration=!1,this._isStopped=!0,this._direction="",this._timer="",this._isWorking=!0;var e=this;this._wheelHandler=function(t){e._isWorking&&(o.call(e,t),e._options.preventMouse&&r(t))},a(this._options.elem,l,this._wheelHandler)}function n(t){t.direction=this._direction,this._options.callback.call(this,t)}function r(e){(e=e||t.event).preventDefault?e.preventDefault():e.returnValue=!1}function o(t){var e=this,i=d(t);if(0!==i){var r,o=i>0?"down":"up",a=e._deltaArray.length,c=!1,h=0;for(clearTimeout(e._timer),e._timer=setTimeout(function(){e._deltaArray=[0,0,0],e._isStopped=!0,e._direction=o},150),r=0;r<a;r++)0!==e._deltaArray[r]&&(e._deltaArray[r]>0?++h:--h);Math.abs(h)===a&&(h>0?"down":"up")!==e._direction&&(c=!0,e._direction=o),e._isStopped||(c?(e._isAcceleration=!0,n.call(this,t)):Math.abs(h)===a&&s.call(this,t)),e._isStopped&&(e._isStopped=!1,e._isAcceleration=!0,e._direction=o,n.call(this,t)),e._deltaArray.shift(),e._deltaArray.push(i)}}function s(t){var e=Math.abs(this._deltaArray[0]),i=Math.abs(this._deltaArray[1]),r=Math.abs(this._deltaArray[2]),o=Math.abs(d(t));o>r&&r>i&&i>e&&(this._isAcceleration||(n.call(this,t),this._isAcceleration=!0)),o<r&&r<=i&&(this._isAcceleration=!1)}function a(t,e,i){t.addEventListener?t.addEventListener(e,i,!!p&&{passive:!0}):t.attachEvent&&t.attachEvent("on"+e,i)}function c(t,e,i){t.removeEventListener?t.removeEventListener(e,i,!!p&&{passive:!0}):t.detachEvent&&t.detachEvent("on"+e,i)}function h(t,e){var i,n={};for(i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}var l="onwheel"in e?"wheel":"mousewheel",u={callback:function(){},elem:e,preventMouse:!0};i.prototype={constructor:i,turnOn:function(){return this._isWorking=!0,this},turnOff:function(){return this._isWorking=!1,this},setOptions:function(t){return this._options=h(this._options,t),this},getOption:function(t){var e=this._options[t];if(void 0!==e)return e;throw new Error("Unknown option")},destroy:function(){return c(this._options.elem,l,this._wheelHandler),this}};var d=function(t){return(d=t.wheelDelta&&!t.deltaY?function(t){return-1*t.wheelDelta}:function(t){return t.deltaY})(t)},p=function(){var e=!1;try{var i=Object.defineProperty&&Object.defineProperty({},"passive",{get:function(){e=!0}});t.addEventListener("test",function(){},i)}catch(t){}return e}();return i}("undefined"!=typeof window?window:this,document);"object"==typeof exports&&(module.exports=WheelIndicator);
!function(e,t){"use strict";if("function"!=typeof e.createEvent)return!1;var o,n,r,i,s,u,a,h,p,c=0,d=function(e){var t=e.toLowerCase(),o="MS"+e;return navigator.msPointerEnabled?o:window.PointerEvent?t:""},v={useJquery:!t.IGNORE_JQUERY&&"undefined"!=typeof jQuery,swipeThreshold:t.SWIPE_THRESHOLD||100,tapThreshold:t.TAP_THRESHOLD||150,dbltapThreshold:t.DBL_TAP_THRESHOLD||200,longtapThreshold:t.LONG_TAP_THRESHOLD||1e3,tapPrecision:t.TAP_PRECISION/2||30,justTouchEvents:t.JUST_ON_TOUCH_DEVICES},f=!1,T={touchstart:d("PointerDown")||"touchstart",touchend:d("PointerUp")+" touchend",touchmove:d("PointerMove")+" touchmove"},l=function(e){return!e.pointerId||void 0===o||e.pointerId===o},E=function(e,t,o){for(var n=t.split(" "),r=n.length;r--;)e.addEventListener(n[r],o,!1)},g=function(e){return e.targetTouches?e.targetTouches[0]:e},w=function(){return(new Date).getTime()},m=function(t,o,i,s){var u=e.createEvent("Event");if(u.originalEvent=i,s=s||{},s.x=n,s.y=r,s.distance=s.distance,v.useJquery&&(u=jQuery.Event(o,{originalEvent:i}),jQuery(t).trigger(u,s)),u.initEvent){for(var a in s)s.hasOwnProperty(a)&&(u[a]=s[a]);u.initEvent(o,!0,!0),t.dispatchEvent(u)}for(;t;)t["on"+o]&&t["on"+o](u),t=t.parentNode};E(e,T.touchstart+(v.justTouchEvents?"":" mousedown"),function(e){if(l(e)){var t="mousedown"===e.type;if(f=!t,o=e.pointerId,"mousedown"!==e.type||!f){var h=g(e);i=n=h.pageX,s=r=h.pageY,p=setTimeout(function(){m(e.target,"longtap",e),a=e.target},v.longtapThreshold),u=w(),c++}}}),E(e,T.touchend+(v.justTouchEvents?"":" mouseup"),function(e){if(l(e))if(o=void 0,"mouseup"===e.type&&f)f=!1;else{var t=[],d=w(),T=s-r,E=i-n;if(clearTimeout(h),clearTimeout(p),E<=-v.swipeThreshold&&t.push("swiperight"),E>=v.swipeThreshold&&t.push("swipeleft"),T<=-v.swipeThreshold&&t.push("swipedown"),T>=v.swipeThreshold&&t.push("swipeup"),t.length){for(var g=0;g<t.length;g++){var P=t[g];m(e.target,P,e,{distance:{x:Math.abs(E),y:Math.abs(T)}})}c=0}else i>=n-v.tapPrecision&&i<=n+v.tapPrecision&&s>=r-v.tapPrecision&&s<=r+v.tapPrecision&&u+v.tapThreshold-d>=0&&(m(e.target,c>=2&&a===e.target?"dbltap":"tap",e),a=e.target),h=setTimeout(function(){c=0},v.dbltapThreshold)}}),E(e,T.touchmove+(v.justTouchEvents?"":" mousemove"),function(e){if(l(e)&&("mousemove"!==e.type||!f)){var t=g(e);n=t.pageX,r=t.pageY}}),t.tocca=function(e){for(var t in e)e.hasOwnProperty(t)&&(v[t]=e[t]);return v}}(document,"undefined"!=typeof window?window:this);



/*jslint browser: true */
/*jslint node: true */
/*global doesFontExist, loadCSS, loadJsCss, Parallax, platform, QRCode,
ToProgress, unescape, VK, WheelIndicator, Ya*/
/*property console, join, split */
/*!
 * safe way to handle console.log
 * @see {@link https://github.com/paulmillr/console-polyfill}
 */
(function(root){
	"use strict";
	if (!root.console) {
		root.console = {};
	}
	var con = root.console;
	var prop;
	var method;
	var dummy = function () {};
	var properties = ["memory"];
	var methods = ["assert,clear,count,debug,dir,dirxml,error,exception,group,",
		"groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,",
		"show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn"];
	methods.join("").split(",");
	for (; (prop = properties.pop()); ) {
		if (!con[prop]) {
			con[prop] = {};
		}
	}
	for (; (method = methods.pop()); ) {
		if (!con[method]) {
			con[method] = dummy;
		}
	}
	prop = method = dummy = properties = methods = null;
}("undefined" !== typeof window ? window : this));
/*!
 * modified ToProgress v0.1.1
 * arguments.callee changed to TP, a local wrapper function,
 * so that public function name is now customizable;
 * wrapped in curly brackets:
 * else{document.body.appendChild(this.progressBar);};
 * removed module check
 * @see {@link http://github.com/djyde/ToProgress}
 * @see {@link https://github.com/djyde/ToProgress/blob/master/ToProgress.js}
 * @see {@link https://gist.github.com/englishextra/6a8c79c9efbf1f2f50523d46a918b785}
 * @see {@link https://jsfiddle.net/englishextra/z5xhjde8/}
 * passes jshint
 */
(function (root, document, undefined) {
	"use strict";
	var ToProgress = (function () {
		var TP = function () {
			var _addEventListener = "addEventListener";
			var appendChild = "appendChild";
			var createElement = "createElement";
			var firstChild = "firstChild";
			var getElementById = "getElementById";
			var getElementsByClassName = "getElementsByClassName";
			var hasOwnProperty = "hasOwnProperty";
			var opacity = "opacity";
			var prototype = "prototype";
			var _removeEventListener = "removeEventListener";
			var style = "style";
			function whichTransitionEvent() {
				var t,
				el = document[createElement]("fakeelement");
				var transitions = {
					"transition": "transitionend",
					"OTransition": "oTransitionEnd",
					"MozTransition": "transitionend",
					"WebkitTransition": "webkitTransitionEnd"
				};
				for (t in transitions) {
					if (transitions[hasOwnProperty](t)) {
						if (el[style][t] !== undefined) {
							return transitions[t];
						}
					}
				}
			}
			var transitionEvent = whichTransitionEvent();
			function ToProgress(opt, selector) {
				this.progress = 0;
				this.options = {
					id: "top-progress-bar",
					color: "#F44336",
					height: "2px",
					duration: 0.2,
					zIndex: "auto"
				};
				if (opt && typeof opt === "object") {
					for (var key in opt) {
						if (opt[hasOwnProperty](key)) {
							this.options[key] = opt[key];
						}
					}
				}
				this.options.opacityDuration = this.options.duration * 3;
				this.progressBar = document[createElement]("div");
				this.progressBar.id = this.options.id;
				this.progressBar.setCSS = function (style) {
					for (var property in style) {
						if (style[hasOwnProperty](property)) {
							this.style[property] = style[property];
						}
					}
				};
				this.progressBar.setCSS({
					"position": selector ? "relative" : "fixed",
					"top": "0",
					"left": "0",
					"right": "0",
					"background-color": this.options.color,
					"height": this.options.height,
					"width": "0%",
					"transition": "width " + this.options.duration + "s" + ", opacity " + this.options.opacityDuration + "s",
					"-moz-transition": "width " + this.options.duration + "s" + ", opacity " + this.options.opacityDuration + "s",
					"-webkit-transition": "width " + this.options.duration + "s" + ", opacity " + this.options.opacityDuration + "s",
					"z-index": this.options.zIndex
				});
				if (selector) {
					var el;
					if (selector.indexOf("#", 0) !== -1) {
						el = document[getElementById](selector) || "";
					} else {
						if (selector.indexOf(".", 0) !== -1) {
							el = document[getElementsByClassName](selector)[0] || "";
						}
					}
					if (el) {
						if (el.hasChildNodes()) {
							el.insertBefore(this.progressBar, el[firstChild]);
						} else {
							el[appendChild](this.progressBar);
						}
					}
				} else {
					document.body[appendChild](this.progressBar);
				}
			}
			ToProgress[prototype].transit = function () {
				this.progressBar[style].width = this.progress + "%";
			};
			ToProgress[prototype].getProgress = function () {
				return this.progress;
			};
			ToProgress[prototype].setProgress = function (progress, callback) {
				this.show();
				if (progress > 100) {
					this.progress = 100;
				} else if (progress < 0) {
					this.progress = 0;
				} else {
					this.progress = progress;
				}
				this.transit();
				if (callback) {
					callback();
				}
			};
			ToProgress[prototype].increase = function (toBeIncreasedProgress, callback) {
				this.show();
				this.setProgress(this.progress + toBeIncreasedProgress, callback);
			};
			ToProgress[prototype].decrease = function (toBeDecreasedProgress, callback) {
				this.show();
				this.setProgress(this.progress - toBeDecreasedProgress, callback);
			};
			ToProgress[prototype].finish = function (callback) {
				var that = this;
				this.setProgress(100, callback);
				this.hide();
				if (transitionEvent) {
					this.progressBar[_addEventListener](transitionEvent, function (e) {
						that.reset();
						that.progressBar[_removeEventListener](e.type, TP);
					});
				}
			};
			ToProgress[prototype].reset = function (callback) {
				this.progress = 0;
				this.transit();
				if (callback) {
					callback();
				}
			};
			ToProgress[prototype].hide = function () {
				this.progressBar[style][opacity] = "0";
			};
			ToProgress[prototype].show = function () {
				this.progressBar[style][opacity] = "1";
			};
			return ToProgress;
		};
		return TP();
	})();
	root.ToProgress = ToProgress;
})("undefined" !== typeof window ? window : this, document);
/*!
 * modified Detect Whether a Font is Installed
 * @param {String} fontName The name of the font to check
 * @return {Boolean}
 * @author Kirupa <sam@samclarke.com>
 * @see {@link https://www.kirupa.com/html5/detect_whether_font_is_installed.htm}
 * passes jshint
 */
(function (root, document) {
	"use strict";
	var doesFontExist = function (fontName) {
		var createElement = "createElement";
		var getContext = "getContext";
		var measureText = "measureText";
		var width = "width";
		var canvas = document[createElement]("canvas");
		var context = canvas[getContext]("2d");
		var text = "abcdefghijklmnopqrstuvwxyz0123456789";
		context.font = "72px monospace";
		var baselineSize = context[measureText](text)[width];
		context.font = "72px '" + fontName + "', monospace";
		var newSize = context[measureText](text)[width];
		canvas = null;
		if (newSize === baselineSize) {
			return false;
		} else {
			return true;
		}
	};
	root.doesFontExist = doesFontExist;
})("undefined" !== typeof window ? window : this, document);
/*!
 * load CSS async
 * modified order of arguments, added callback option, removed CommonJS stuff
 * @see {@link https://github.com/filamentgroup/loadCSS}
 * @see {@link https://gist.github.com/englishextra/50592e9944bd2edc46fe5a82adec3396}
 * @param {String} hrefString path string
 * @param {Object} callback callback function
 * @param {String} media media attribute string value
 * @param {Object} [before] target HTML element
 * loadCSS(hrefString,callback,media,before)
 */
(function (root, document) {
	"use strict";
	var loadCSS = function (_href, callback) {
		var ref = document.getElementsByTagName("head")[0] || "";
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = _href;
		link.media = "all";
		if (ref) {
			ref.appendChild(link);
			if (callback && "function" === typeof callback) {
				link.onload = callback;
			}
			return link;
		}
		return;
	};
	root.loadCSS = loadCSS;
})("undefined" !== typeof window ? window : this, document);
/*!
 * modified loadExt
 * @see {@link https://gist.github.com/englishextra/ff9dc7ab002312568742861cb80865c9}
 * passes jshint
 */
(function (root, document) {
	"use strict";
	var loadJsCss = function (files, callback) {
		var _this = this;
		var appendChild = "appendChild";
		var body = "body";
		var createElement = "createElement";
		var getElementsByTagName = "getElementsByTagName";
		var insertBefore = "insertBefore";
		var _length = "length";
		var parentNode = "parentNode";
		_this.files = files;
		_this.js = [];
		_this.head = document[getElementsByTagName]("head")[0] || "";
		_this.body = document[body] || "";
		_this.ref = document[getElementsByTagName]("script")[0] || "";
		_this.callback = callback || function () {};
		_this.loadStyle = function (file) {
			var link = document[createElement]("link");
			link.rel = "stylesheet";
			link.type = "text/css";
			link.href = file;
			_this.head[appendChild](link);
		};
		_this.loadScript = function (i) {
			var script = document[createElement]("script");
			script.type = "text/javascript";
			script.async = true;
			script.src = _this.js[i];
			var loadNextScript = function () {
				if (++i < _this.js[_length]) {
					_this.loadScript(i);
				} else {
					_this.callback();
				}
			};
			script.onload = function () {
				loadNextScript();
			};
			_this.head[appendChild](script);
			if (_this.ref[parentNode]) {
				_this.ref[parentNode][insertBefore](script, _this.ref);
			} else {
				(_this.body || _this.head)[appendChild](script);
			}
		};
		var i,
		l;
		for (i = 0, l = _this.files[_length]; i < l; i += 1) {
			if ((/\.js$|\.js\?/).test(_this.files[i])) {
				_this.js.push(_this.files[i]);
			}
			if ((/\.css$|\.css\?|\/css\?/).test(_this.files[i])) {
				_this.loadStyle(_this.files[i]);
			}
		}
		i = l = null;
		if (_this.js[_length] > 0) {
			_this.loadScript(0);
		} else {
			_this.callback();
		}
	};
	root.loadJsCss = loadJsCss;
})("undefined" !== typeof window ? window : this, document);
/*!
 * app logic
 */
(function (root, document, undefined) {
	"use strict";

	var docElem = document.documentElement || "";

	var alt = "alt";
	var className = "className";
	var createElement = "createElement";
	var createElementNS = "createElementNS";
	var defineProperty = "defineProperty";
	var getAttribute = "getAttribute";
	var getElementsByClassName = "getElementsByClassName";
	var getElementsByTagName = "getElementsByTagName";
	var getOwnPropertyDescriptor = "getOwnPropertyDescriptor";
	var height = "height";
	var parentNode = "parentNode";
	var querySelector = "querySelector";
	var querySelectorAll = "querySelectorAll";
	var remove = "remove";
	var removeChild = "removeChild";
	var src = "src";
	var style = "style";
	var styleSheets = "styleSheets";
	var width = "width";
	var _addEventListener = "addEventListener";
	var _length = "length";

	var progressBar = new ToProgress({
			id: "top-progress-bar",
			color: "#FF2C40",
			height: "0.200rem",
			duration: 0.2,
			zIndex: 999
		});

	var hideProgressBar = function () {
		progressBar.finish();
		progressBar.hide();
	};

	/* progressBar.complete = function () {
		return this.finish(),
		this.hide();
	}; */

	var toStringFn = {}.toString;
	var supportsSvgSmilAnimation = !!document[createElementNS] && (/SVGAnimate/).test(toStringFn.call(document[createElementNS]("http://www.w3.org/2000/svg", "animate"))) || "";

	if (!supportsSvgSmilAnimation) {

		progressBar.increase(20);

		root[_addEventListener]("load", hideProgressBar);
	}

	var removeElement = function (elem) {
		if (elem) {
			if ("undefined" !== typeof elem[remove]) {
				return elem[remove]();
			} else {
				return elem[parentNode] && elem[parentNode][removeChild](elem);
			}
		}
	};

	var ripple = document[getElementsByClassName]("ripple")[0] || "";

	var removeRipple = function () {
		removeElement(ripple);
	};

	var timerDeferRemoveRipple;
	var deferRemoveRipple = function () {
		clearTimeout(timerDeferRemoveRipple);
		timerDeferRemoveRipple = null;
		removeRipple();
	};

	var loading = document[getElementsByClassName]("loading")[0] || "";

	var removeLoading = function () {
		removeElement(loading);
	};

	var timerDeferRemoveLoading;
	var deferRemoveLoading = function () {
		clearTimeout(timerDeferRemoveLoading);
		timerDeferRemoveLoading = null;
		removeLoading();
	};

	var bounceOutUpClass = "bounceOutUp";

	var hidePreloaders = function () {
		if (ripple) {
			ripple[className] += " " + bounceOutUpClass;
			timerDeferRemoveRipple = setTimeout(deferRemoveRipple, 5000);
		}
		if (loading) {
			loading[className] += " " + bounceOutUpClass;
			timerDeferRemoveLoading = setTimeout(deferRemoveLoading, 5000);
		}
	};

	if (!supportsSvgSmilAnimation) {
		removeRipple();
		removeLoading();
	} else {
		root[_addEventListener]("load", hidePreloaders);
	}

	var supportsSvgAsImg = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || "";

	if (!supportsSvgAsImg) {
		var svgNosmilImages = document[getElementsByClassName]("svg-nosmil-img") || "";
		if (svgNosmilImages) {
			var i,
			l;
			for (i = 0, l = svgNosmilImages[_length]; i < l; i += 1) {
				svgNosmilImages[i][src] = svgNosmilImages[i][getAttribute]("data-fallback-src");
			}
			i = l = null;
		}
	}

	if (!supportsSvgSmilAnimation) {
		var svgSmilImages = document[getElementsByClassName]("svg-smil-img") || "";
		if (svgSmilImages) {
			var j,
			m;
			for (j = 0, m = svgSmilImages[_length]; j < m; j += 1) {
				svgSmilImages[j][src] = svgSmilImages[j][getAttribute]("data-fallback-src");
			}
			j = m = null;
		}
	}

	var drawImageFromUrl = function (canvasObj, url) {
		if (!canvasObj || !url) {
			return;
		}
		var img = new Image();
		img[_addEventListener]("load", function () {
			var ctx = canvasObj.getContext("2d");
			if (ctx) {
				ctx.drawImage(img, 0, 0, canvasObj[width], canvasObj[height]);
			}
		});
		img[src] = url;
	};

	var replaceCanvasWithImg = function (canvasObj, url) {
		if (!canvasObj || !url) {
			return;
		}
		var img = document[createElement]("img");
		img[src] = url;
		img[alt] = "";
		img[className] = canvasObj[className].split(" ").join(" ");
		img[width] = canvasObj[width];
		img[height] = canvasObj[height];
		if (canvasObj[parentNode]) {
			canvasObj[parentNode].insertBefore(img, canvasObj.nextSibling);
		}
		canvasObj[style].display = "none";
	};

	var canvasAll = document[getElementsByTagName]("canvas") || "";

	var styleSheetsLength = document[styleSheets][_length] || 0;

	var supportsCanvas = (function () {
		var elem = document[createElement]("canvas");
		return !!(elem.getContext && elem.getContext("2d"));
	})();

	var slotDrawCanvasAll;
	var drawCanvasAll = function () {
		if (document[styleSheets][_length] > styleSheetsLength) {
			clearInterval(slotDrawCanvasAll);
			slotDrawCanvasAll = null;
			var i,
			l,
			canvasObj,
			url;
			for (i = 0, l = canvasAll[_length]; i < l; i += 1) {
				if (canvasAll[i][getAttribute]("data-src")) {
					canvasObj = canvasAll[i];
					url = canvasAll[i][getAttribute]("data-src");
					if (supportsCanvas) {
						drawImageFromUrl(canvasObj, url);
					} else {
						replaceCanvasWithImg(canvasObj, url);
					}

				}
			}
			i = l = canvasObj = url = null;
		}
	};

	if (canvasAll && styleSheetsLength) {
		slotDrawCanvasAll = setInterval(drawCanvasAll, 100);
	}

	var hasTouch = "ontouchstart" in docElem || "";

	var hasWheel = "onwheel" in document[createElement]("div") || void 0 !== document.onmousewheel || "";

	var getHTTP = function (force) {
		var any = force || "";
		var locationProtocol = root.location.protocol || "";
		return "http:" === locationProtocol ? "http" : "https:" === locationProtocol ? "https" : any ? "http" : "";
	};

	var forcedHTTP = getHTTP(true);

	var run = function () {

		var appendChild = "appendChild";
		var classList = "classList";
		var dataset = "dataset";
		var getElementById = "getElementById";
		var href = "href";
		var opacity = "opacity";
		var title = "title";
		var visibility = "visibility";

		var bounceInUpClass = "bounceInUp";
		var bounceOutDownClass = "bounceOutDown";

		var isActiveClass = "is-active";
		var isBindedClass = "is-binded";

		var documentTitle = document[title] || "";
		var locationHref = root.location[href] || "";
		var navigatorUserAgent = navigator.userAgent || "";

		if (!supportsSvgSmilAnimation) {
			progressBar.increase(20);
		}

		if (docElem && docElem[classList]) {
			docElem[classList].remove("no-js");
			docElem[classList].add("js");
		}

		var getHumanDate = (function () {
			var newDate = (new Date());
			var newDay = newDate.getDate();
			var newYear = newDate.getFullYear();
			var newMonth = newDate.getMonth();
			(newMonth += 1);
			if (10 > newDay) {
				newDay = "0" + newDay;
			}
			if (10 > newMonth) {
				newMonth = "0" + newMonth;
			}
			return newYear + "-" + newMonth + "-" + newDay;
		})();

		var platformName = "";
		var platformDescription = "";
		if (navigatorUserAgent && root.platform) {
			platformName = platform.name || "";
			platformDescription = platform.description || "";
			document[title] = documentTitle +
			" [" +
			(getHumanDate ? " " + getHumanDate : "") +
			(platformDescription ? " " + platformDescription : "") +
			((hasTouch || hasWheel) ? " with" : "") +
			(hasTouch ? " touch" : "") +
			((hasTouch && hasWheel) ? "," : "") +
			(hasWheel ? " mousewheel" : "") +
			"]";
		}

		/*jshint bitwise: false */
		var parseLink = function (url, full) {
			var _full = full || "";
			return (function () {
				var _replace = function (s) {
					return s.replace(/^(#|\?)/, "").replace(/\:$/, "");
				};
				var _location = location || "";
				var _protocol = function (protocol) {
					switch (protocol) {
					case "http:":
						return _full ? ":" + 80 : 80;
					case "https:":
						return _full ? ":" + 443 : 443;
					default:
						return _full ? ":" + _location.port : _location.port;
					}
				};
				var _isAbsolute = (0 === url.indexOf("//") || !!~url.indexOf("://"));
				var _locationHref = root.location || "";
				var _origin = function () {
					var o = _locationHref.protocol + "//" + _locationHref.hostname + (_locationHref.port ? ":" + _locationHref.port : "");
					return o || "";
				};
				var _isCrossDomain = function () {
					var c = document[createElement]("a");
					c.href = url;
					var v = c.protocol + "//" + c.hostname + (c.port ? ":" + c.port : "");
					return v !== _origin();
				};
				var _link = document[createElement]("a");
				_link.href = url;
				return {
					href: _link.href,
					origin: _origin(),
					host: _link.host || _location.host,
					port: ("0" === _link.port || "" === _link.port) ? _protocol(_link.protocol) : (_full ? _link.port : _replace(_link.port)),
					hash: _full ? _link.hash : _replace(_link.hash),
					hostname: _link.hostname || _location.hostname,
					pathname: _link.pathname.charAt(0) !== "/" ? (_full ? "/" + _link.pathname : _link.pathname) : (_full ? _link.pathname : _link.pathname.slice(1)),
					protocol: !_link.protocol || ":" === _link.protocol ? (_full ? _location.protocol : _replace(_location.protocol)) : (_full ? _link.protocol : _replace(_link.protocol)),
					search: _full ? _link.search : _replace(_link.search),
					query: _full ? _link.search : _replace(_link.search),
					isAbsolute: _isAbsolute,
					isRelative: !_isAbsolute,
					isCrossDomain: _isCrossDomain(),
					hasHTTP: (/^(http|https):\/\//i).test(url) ? true : false
				};
			})();
		};
		/*jshint bitwise: true */

		var isNodejs = "undefined" !== typeof process && "undefined" !== typeof require || "";
		var isElectron = "undefined" !== typeof root && root.process && "renderer" === root.process.type || "";
		var isNwjs = (function () {
			if ("undefined" !== typeof isNodejs && isNodejs) {
				try {
					if ("undefined" !== typeof require("nw.gui")) {
						return true;
					}
				} catch (e) {
					return false;
				}
			}
			return false;
		})();

		var openDeviceBrowser = function (url) {
			var triggerForElectron = function () {
				var es = isElectron ? require("electron").shell : "";
				return es ? es.openExternal(url) : "";
			};
			var triggerForNwjs = function () {
				var ns = isNwjs ? require("nw.gui").Shell : "";
				return ns ? ns.openExternal(url) : "";
			};
			var triggerForHTTP = function () {
				return true;
			};
			var triggerForLocal = function () {
				return root.open(url, "_system", "scrollbars=1,location=no");
			};
			if (isElectron) {
				triggerForElectron();
			} else if (isNwjs) {
				triggerForNwjs();
			} else {
				var locationProtocol = root.location.protocol || "",
				hasHTTP = locationProtocol ? "http:" === locationProtocol ? "http" : "https:" === locationProtocol ? "https" : "" : "";
				if (hasHTTP) {
					triggerForHTTP();
				} else {
					triggerForLocal();
				}
			}
		};

		var debounce = function (func, wait) {
			var timeout;
			var args;
			var context;
			var timestamp;
			return function () {
				context = this;
				args = [].slice.call(arguments, 0);
				timestamp = new Date();
				var later = function () {
					var last = (new Date()) - timestamp;
					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func.apply(context, args);
					}
				};
				if (!timeout) {
					timeout = setTimeout(later, wait);
				}
			};
		};

		var scriptIsLoaded = function (scriptSrc) {
			var scriptAll,
			i,
			l;
			for (scriptAll = document[getElementsByTagName]("script") || "", i = 0, l = scriptAll[_length]; i < l; i += 1) {
				if (scriptAll[i][getAttribute]("src") === scriptSrc) {
					scriptAll = i = l = null;
					return true;
				}
			}
			scriptAll = i = l = null;
			return false;
		};

		var manageExternalLinkAll = function (scope) {
			var context = scope && scope.nodeName ? scope : "";
			var linkTag = "a";
			var externalLinks = context ? context[getElementsByTagName](linkTag) || "" : document[getElementsByTagName](linkTag) || "";
			var arrange = function (e) {
				var handleExternalLink = function (url, evt) {
					evt.stopPropagation();
					evt.preventDefault();
					var logic = openDeviceBrowser.bind(null, url);
					var debounceLogic = debounce(logic, 200);
					debounceLogic();
				};
				if (!e[classList].contains(isBindedClass) &&
						!e.target &&
						!e.rel) {
					var url = e[getAttribute]("href") || "";
					if (url &&
						parseLink(url).isCrossDomain &&
						parseLink(url).hasHTTP) {
						e.title = "" + (parseLink(url).hostname || "") + " откроется в новой вкладке";
						if ("undefined" !== typeof getHTTP && getHTTP()) {
							e.target = "_blank";
							e.rel = "noopener";
						} else {
							e[_addEventListener]("click", handleExternalLink.bind(null, url));
						}
						e[classList].add(isBindedClass);
					}
				}
			};
			if (externalLinks) {
				var i;
				var l;
				for (i = 0, l = externalLinks[_length]; i < l; i += 1) {
					arrange(externalLinks[i]);
				}
				i = l = null;
			}
		};

		var wrapper = document[getElementsByClassName]("wrapper")[0] || "";

		manageExternalLinkAll(wrapper);

		var qrcode = document[getElementsByClassName]("qrcode")[0] || "";

		var timerShowQrcode;
		var showQrcode = function () {
			clearTimeout(timerShowQrcode);
			timerShowQrcode = null;
			qrcode[style][visibility] = "visible";
			qrcode[style][opacity] = 1;
		};

		if (qrcode) {
			var qrcodeImg = document[createElement]("img");
			var qrcodeImgTitle = documentTitle ? ("Ссылка на страницу «" + documentTitle.replace(/\[[^\]]*?\]/g, "").trim() + "»") : "";
			var qrcodeImgSrc = forcedHTTP + "://chart.googleapis.com/chart?cht=qr&chld=M%7C4&choe=UTF-8&chs=512x512&chl=" + encodeURIComponent(locationHref);
			qrcodeImg[alt] = qrcodeImgTitle;
			if (root.QRCode) {
				if (supportsSvgAsImg) {
					qrcodeImgSrc = QRCode.generateSVG(locationHref, {
							ecclevel: "M",
							fillcolor: "#FFFFFF",
							textcolor: "#191919",
							margin: 4,
							modulesize: 8
						});
					var XMLS = new XMLSerializer();
					qrcodeImgSrc = XMLS.serializeToString(qrcodeImgSrc);
					qrcodeImgSrc = "data:image/svg+xml;base64," + root.btoa(unescape(encodeURIComponent(qrcodeImgSrc)));
					qrcodeImg[src] = qrcodeImgSrc;
				} else {
					qrcodeImgSrc = QRCode.generatePNG(locationHref, {
							ecclevel: "M",
							format: "html",
							fillcolor: "#FFFFFF",
							textcolor: "#1F1F1F",
							margin: 4,
							modulesize: 8
						});
					qrcodeImg[src] = qrcodeImgSrc;
				}
			} else {
				qrcodeImg[src] = qrcodeImgSrc;
			}
			qrcodeImg[title] = qrcodeImgTitle;
			qrcode[appendChild](qrcodeImg);
			timerShowQrcode = setTimeout(showQrcode, 2000);
		}

		var downloadApp = document[getElementsByClassName]("download-app")[0] || "";
		var downloadAppLink = downloadApp ? downloadApp[getElementsByTagName]("a")[0] || "" : "";
		var downloadAppImg = downloadApp ? downloadApp[getElementsByTagName]("img")[0] || "" : "";

		var timerhowDownloadApp;
		var showDownloadApp = function () {
			clearTimeout(timerhowDownloadApp);
			timerhowDownloadApp = null;
			downloadApp[style][visibility] = "visible";
			downloadApp[style][opacity] = 1;
		};

		if (navigatorUserAgent && downloadApp && downloadAppLink && downloadAppImg && root.platform) {
			var platformOsFamily = platform.os.family || "";
			var platformOsVersion = platform.os.version || "";
			var platformOsArchitecture = platform.os.architecture || "";
			/* console.log(navigatorUserAgent);
			console.log(platform.os);
			console.log(platformName + "|" + platformOsFamily + "|" + platformOsVersion + "|" + platformOsArchitecture + "|" + platformDescription); */
			var downloadAppImgSrc;
			var downloadAppLinkHref;
			if (platformOsFamily.indexOf("Windows Phone", 0) !== -1 && "10.0" === platformOsVersion) {
				downloadAppImgSrc = "./libs/products/img/download_wp_app_144x52.svg";
				downloadAppLinkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra.Windows10_1.0.0.0_x86_debug.appx";
			} else if (platformName.indexOf("IE Mobile", 0) !== -1 && ("7.5" === platformOsVersion || "8.0" === platformOsVersion || "8.1" === platformOsVersion)) {
				downloadAppImgSrc = "./libs/products/img/download_wp_app_144x52.svg";
				downloadAppLinkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra_app-debug.xap";
			} else if (platformOsFamily.indexOf("Windows", 0) !== -1 && 64 === platformOsArchitecture) {
				downloadAppImgSrc = "./libs/products/img/download_windows_app_144x52.svg";
				downloadAppLinkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-win32-x64-setup.exe";
			} else if (platformOsFamily.indexOf("Windows", 0) !== -1 && 32 === platformOsArchitecture) {
				downloadAppImgSrc = "./libs/products/img/download_windows_app_144x52.svg";
				downloadAppLinkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-win32-ia32-setup.exe";
			} else if (navigatorUserAgent.indexOf("armv7l", 0) !== -1) {
				downloadAppImgSrc = "./libs/products/img/download_linux_app_144x52.svg";
				downloadAppLinkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-linux-armv7l.tar.gz";
			} else if (navigatorUserAgent.indexOf("X11", 0) !== -1 && navigatorUserAgent.indexOf("Linux") !== -1 && 64 === platformOsArchitecture) {
				downloadAppImgSrc = "./libs/products/img/download_linux_app_144x52.svg";
				downloadAppLinkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-linux-x64.tar.gz";
			} else if (navigatorUserAgent.indexOf("X11", 0) !== -1 && navigatorUserAgent.indexOf("Linux") !== -1 && 32 === platformOsArchitecture) {
				downloadAppImgSrc = "./libs/products/img/download_linux_app_144x52.svg";
				downloadAppLinkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-linux-ia32.tar.gz";
			} else {
				if (platformOsFamily.indexOf("Android", 0) !== -1) {
					downloadAppImgSrc = "./libs/products/img/download_android_app_144x52.svg";
					downloadAppLinkHref = "https://github.com/englishextra/englishextra-app/releases/download/v1.0.0/englishextra-debug.apk";
				}
			}
			if (downloadAppImgSrc && downloadAppLinkHref) {
				downloadAppLink[href] = downloadAppLinkHref;
				downloadAppLink.rel = "noopener";
				downloadAppLink.target = "_blank";
				downloadAppLink[title] = "Скачать приложение";
				if (!supportsSvgAsImg) {
					downloadAppImgSrc = [downloadAppImgSrc.slice(0, -3), "png"].join("");
				}
				downloadAppImg[src] = downloadAppImgSrc;
				timerhowDownloadApp = setTimeout(showDownloadApp, 1000);
			}
		}

		var scene = document[getElementById]("scene") || "";
		var parallax;
		if (scene && root.Parallax) {
			parallax = new Parallax(scene);
		}

		var guesture = document[getElementsByClassName]("guesture")[0] || "";

		var start = document[getElementsByClassName]("start")[0] || "";
		var hand = document[getElementsByClassName]("hand")[0] || "";

		var revealStart = function () {
			if (start) {
				start[classList].remove(bounceOutDownClass);
				start[classList].add(bounceInUpClass);
				start[style].display = "block";
			}
			if (hand) {
				hand[classList].remove(bounceOutDownClass);
				hand[classList].add(bounceInUpClass);
				hand[style].display = "block";
			}
			if (guesture) {
				guesture[classList].add(bounceOutUpClass);
			}
		};

		var concealStart = function () {
			if (start) {
				start[classList].remove(bounceInUpClass);
				start[classList].add(bounceOutDownClass);
			}
			if (hand) {
				hand[classList].remove(bounceInUpClass);
				hand[classList].add(bounceOutDownClass);
			}
			var timerHideStart;
			var hideStart = function () {
				clearTimeout(timerHideStart);
				timerHideStart = null;
				start[style].display = "none";
				hand[style].display = "none";
			};
			timerHideStart = setTimeout(hideStart, 1000);
		};

		var mousewheeldown = document[getElementsByClassName]("mousewheeldown")[0] || "";
		var swipeup = document[getElementsByClassName]("swipeup")[0] || "";
		if (mousewheeldown && swipeup) {
			if (hasTouch) {
				mousewheeldown[style].display = "none";
				if (root.tocca) {
					root[_addEventListener]("swipeup", revealStart, {passive: true});
					root[_addEventListener]("swipedown", concealStart, {passive: true});
				}
			} else {
				if (hasWheel) {
					swipeup[style].display = "none";
					if (root.WheelIndicator) {
						var indicator;
						indicator = new WheelIndicator({
								elem: root,
								callback: function (e) {
									if ("down" === e.direction) {
										revealStart();
									}
									if ("up" === e.direction) {
										concealStart();
									}
								},
								preventMouse: false
							});
					}
				}
			}
			if (hasTouch || hasWheel) {
				guesture[classList].add(bounceInUpClass);
				guesture[style].display = "block";
			}
		}

		var hideOtherIsSocial = function (thisObj) {
			var _thisObj = thisObj || this;
			var isSocialAll = document[getElementsByClassName]("is-social") || "";
			if (isSocialAll) {
				var k,
				n;
				for (k = 0, n = isSocialAll[_length]; k < n; k += 1) {
					if (_thisObj !== isSocialAll[k]) {
						isSocialAll[k][classList].remove(isActiveClass);
					}
				}
				k = n = null;
			}
		};
		root[_addEventListener]("click", hideOtherIsSocial);

		var yaShare2Id = "ya-share2";

		var yaShare2 = document[getElementById](yaShare2Id) || "";

		var btnShare = document[getElementsByClassName]("btn-share")[0] || "";
		var btnShareLink = btnShare ? btnShare[getElementsByTagName]("a")[0] || "" : "";
		var yshare;
		var showYaShare2 = function (ev) {
			ev.preventDefault();
			ev.stopPropagation();
			var logic = function () {
				yaShare2[classList].toggle(isActiveClass);
				hideOtherIsSocial(yaShare2);
				var initScript = function () {
					if (root.Ya) {
						try {
							if (yshare) {
								yshare.updateContent({
									title: documentTitle,
									description: documentTitle,
									url: locationHref
								});
							} else {
								yshare = Ya.share2(yaShare2Id, {
									content: {
										title: documentTitle,
										description: documentTitle,
										url: locationHref
									}
								});
							}
						} catch (err) {
							/* console.log("cannot update or init Ya", err); */
						}
					}
				};
				var jsUrl = forcedHTTP + "://yastatic.net/share2/share.js";
				if (!scriptIsLoaded(jsUrl)) {
					var load;
					load = new loadJsCss([jsUrl], initScript);
				} else {
					initScript();
				}
			};
			var debounceLogic = debounce(logic, 200);
			debounceLogic();
		};

		if (btnShare && btnShareLink && yaShare2) {
			btnShareLink[_addEventListener]("click", showYaShare2);
		}

		var vkLikeClass = "vk-like";
		var vkLike = document[getElementsByClassName](vkLikeClass)[0] || "";

		var holderVkLikeClass = "holder-vk-like";
		var holderVkLike = document[getElementsByClassName](holderVkLikeClass)[0] || "";

		var btnLike = document[getElementsByClassName]("btn-like")[0] || "";
		var btnLikeLink = btnLike ? btnLike[getElementsByTagName]("a")[0] || "" : "";
		var vkLikeId = "vk-like";

		var vlike;
		var showVkLike = function (ev) {
			ev.preventDefault();
			ev.stopPropagation();
			var logic = function () {
				holderVkLike[classList].toggle(isActiveClass);
				hideOtherIsSocial(holderVkLike);
				var initScript = function () {
					if (root.VK) {
						if (!vlike) {
							try {
								VK.init({
									apiId: (vkLike[dataset].apiid || ""),
									nameTransportPath: "/xd_receiver.htm",
									onlyWidgets: true
								});
								VK.Widgets.Like(vkLikeId, {
									type: "button",
									height: 24
								});
								vlike = true;
							} catch (err) {
								/* console.log("cannot init VK", err); */
							}
						}
					}
				};
				var jsUrl = forcedHTTP + "://vk.com/js/api/openapi.js?147";
				if (!scriptIsLoaded(jsUrl)) {
					var load;
					load = new loadJsCss([jsUrl], initScript);
				} else {
					initScript();
				}
			};
			var debounceLogic = debounce(logic, 200);
			debounceLogic();
		};

		if (btnLike && btnLikeLink && vkLike) {
			btnLikeLink[_addEventListener]("click", showVkLike);
		}
	};

	var scripts = [
		forcedHTTP + "://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.2/gh-fork-ribbon.min.css",
		"./libs/john-locke/css/bundle.min.css"];

	var supportsPassive = (function () {
		var support = false;
		try {
			var opts = Object[defineProperty] && Object[defineProperty]({}, "passive", {
					get: function () {
						support = true;
					}
				});
			root[_addEventListener]("test", function () {}, opts);
		} catch (err) {}
		return support;
	})();

	var needsPolyfills = (function () {
		return !String.prototype.startsWith ||
		!supportsPassive ||
		!root.requestAnimationFrame ||
		!root.matchMedia ||
		("undefined" === typeof root.Element && !("dataset" in docElem)) ||
		!("classList" in document[createElement]("_")) ||
		document[createElementNS] && !("classList" in document[createElementNS]("http://www.w3.org/2000/svg", "g")) ||
		/* !document.importNode || */
		/* !("content" in document[createElement]("template")) || */
		(root.attachEvent && !root[_addEventListener]) ||
		!("onhashchange" in root) ||
		!Array.prototype.indexOf ||
		!root.Promise ||
		!root.fetch ||
		!document[querySelectorAll] ||
		!document[querySelector] ||
		!Function.prototype.bind ||
		(Object[defineProperty] &&
			Object[getOwnPropertyDescriptor] &&
			Object[getOwnPropertyDescriptor](Element.prototype, "textContent") &&
			!Object[getOwnPropertyDescriptor](Element.prototype, "textContent").get) ||
		!("undefined" !== typeof root.localStorage && "undefined" !== typeof root.sessionStorage) ||
		!root.WeakMap ||
		!root.MutationObserver;
	})();

	if (needsPolyfills) {
		scripts.push("../../cdn/polyfills/js/polyfills.fixed.min.js");
	}

	/* scripts.push("./cdn/platform/1.3.4/js/platform.fixed.min.js",
		"./cdn/qrjs2/0.1.6/js/qrjs2.fixed.min.js",
		"./cdn/parallax-js/3.1.0/js/parallax.fixed.min.js",
		"./cdn/Tocca.js/2.0.1/js/Tocca.fixed.min.js",
		"./cdn/wheel-indicator/1.1.4/js/wheel-indicator.fixed.min.js"); */

	/* scripts.push("./libs/john-locke/js/vendors.min.js"); */

	/*!
	 * load scripts after webfonts loaded using doesFontExist
	 */

	var onFontsLoadedCallback = function () {

		var slot;
		var onFontsLoaded = function () {
			clearInterval(slot);
			slot = null;

			if (!supportsSvgSmilAnimation) {
				progressBar.increase(20);
			}

			var load;
			load = new loadJsCss(scripts, run);
		};

		var checkFontIsLoaded = function () {
			/*!
			 * check only for fonts that are used in current page
			 */
			if (doesFontExist("Roboto") && doesFontExist("Roboto Condensed") && doesFontExist("PT Serif")) {
				onFontsLoaded();
			}
		};

		if (supportsCanvas) {
			slot = setInterval(checkFontIsLoaded, 100);
		} else {
			slot = null;
			onFontsLoaded();
		}
	};

	loadCSS(
			forcedHTTP + "://fonts.googleapis.com/css?family=PT+Serif:400%7CRoboto:400,700%7CRoboto+Condensed:700&subset=cyrillic",
			onFontsLoadedCallback
		);

	/*!
	 * load scripts after webfonts loaded using webfontloader
	 */

	/* root.WebFontConfig = {
		google: {
			families: [
				"PT Serif:400:cyrillic",
				"Roboto:400,700:cyrillic",
				"Roboto Condensed:700:cyrillic"
			]
		},
		listeners: [],
		active: function () {
			this.called_ready = true;
			for (var i = 0; i < this.listeners[_length]; i++) {
				this.listeners[i]();
			}
		},
		ready: function (callback) {
			if (this.called_ready) {
				callback();
			} else {
				this.listeners.push(callback);
			}
		}
	};

	var onFontsLoadedCallback = function () {

		var onFontsLoaded = function () {
			if (!supportsSvgSmilAnimation) {
				progressBar.increase(20);
			}

			var load;
			load = new loadJsCss(scripts, run);
		};

		root.WebFontConfig.ready(onFontsLoaded);
	};

	var load;
	load = new loadJsCss(
			[forcedHTTP + "://cdn.jsdelivr.net/npm/webfontloader@1.6.28/webfontloader.min.js"],
			onFontsLoadedCallback
		); */
})("undefined" !== typeof window ? window : this, document);