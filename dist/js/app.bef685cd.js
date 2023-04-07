(function(){"use strict";var e={8936:function(e,t,o){var n=o(6369),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},i=[],d=o(1001),a={},c=(0,d.Z)(a,r,i,!1,null,null,null),s=c.exports,u=o(2631),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"publish"},[t("a",{staticStyle:{display:"none"},attrs:{id:"downLoadLink"}}),t("video",{ref:"video"}),t("div",{on:{click:e.recordOrStop}},[e._v("视频录制")])])},f=[],p=(o(7658),{data(){return{mediaStreamTrack:{},video_stream:"",recordedBlobs:[],isRecord:!1}},mounted(){this.getCamera()},methods:{getCamera(){void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia({video:!0}).then((e=>{this.mediaStreamTrack="function"===typeof e.stop?e:e.getTracks()[0],this.video_stream=e,this.$refs.video.srcObject=e,this.$refs.video.play()})).catch((e=>{console.log(e)}))},recordOrStop(){this.isRecord?this.stop():this.record()},record(){let e,t;console.log("record"),this.isRecord=!this.isRecord,this.recordedBlobs=[],"function"===typeof MediaRecorder.isTypeSupported?(MediaRecorder.isTypeSupported("video/webm;codecs=vp9")||MediaRecorder.isTypeSupported("video/webm;codecs=h264")?t={MimeType:"video/webm;codecs=h264"}:MediaRecorder.isTypeSupported("video/webm;codecs=vp8")&&(t={MimeType:"video/webm;codecs=vp8"}),e=new MediaRecorder(this.video_stream,t)):(console.log("当前不支持isTypeSupported，使用浏览器的默认编解码器"),e=new MediaRecorder(this.video_stream)),e.start(),e.ondataavailable=e=>{console.log(e),e.data&&e.data.size>0&&this.recordedBlobs.push(e.data)},e.onstop=()=>{const e=new Blob(this.recordedBlobs,{type:"video/mp4"});this.recordedBlobs=[];const t=window.URL.createObjectURL(e);document.getElementById("downLoadLink").href=t,document.getElementById("downLoadLink").download="media.mp4",document.getElementById("downLoadLink").innerHTML="DownLoad video file";const o=Math.floor(1e6*Math.random()),n=`video${o}.mp4`;document.getElementById("downLoadLink").setAttribute("download",n),document.getElementById("downLoadLink").setAttribute("name",n),setTimeout((()=>{document.getElementById("downLoadLink").click()}),500)}},stop(){if(this.isRecord=!this.isRecord,!this.$refs.video.srcObject)return;const e=this.$refs.video.srcObject,t=e.getTracks();t.forEach((e=>{e.stop()}))}}}),v=p,m=(0,d.Z)(v,l,f,!1,null,"146a98a4",null),h=m.exports;n.ZP.use(u.ZP);const b=[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,5399))}],g=new u.ZP({mode:"history",base:"/",routes:b});var y=g,w=o(3822);n.ZP.use(w.ZP);var k=new w.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});n.ZP.config.productionTip=!1,new n.ZP({router:y,store:k,render:e=>e(s)}).$mount("#app")}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var d=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var a=!0,c=0;c<n.length;c++)(!1&i||d>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[c])}))?n.splice(c--,1):(a=!1,i<d&&(d=i));if(a){e.splice(u--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.e0e6da9e.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="testrl-1:";o.l=function(n,r,i,d){if(e[n])e[n].push(r);else{var a,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var l=s[u];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",t+i),a.src=n),e[n]=[r];var f=function(t,o){a.onerror=a.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(o)})),t)return t(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var e={143:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=i);var d=o.p+o.u(t),a=new Error,c=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+d+")",a.name="ChunkLoadError",a.type=i,a.request=d,r[1](a)}};o.l(d,c,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,d=n[0],a=n[1],c=n[2],s=0;if(d.some((function(t){return 0!==e[t]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var u=c(o)}for(t&&t(n);s<d.length;s++)i=d[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self["webpackChunktestrl_1"]=self["webpackChunktestrl_1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(8936)}));n=o.O(n)})();
//# sourceMappingURL=app.bef685cd.js.map