(this["webpackJsonparduino-web-oscilloscope"]=this["webpackJsonparduino-web-oscilloscope"]||[]).push([[0],{149:function(e,t,n){"use strict";var r=n(11),a=n(3),c=n(9),i=n.n(c),u=n(17),o=n(20),l=n(36),s=n(237),f=new(function(){function e(){Object(o.a)(this,e),this.port=void 0,this.reader=void 0,this.writer=void 0}return Object(l.a)(e,[{key:"close",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("closing"),!this.reader){e.next=6;break}return t=this.reader,this.reader=void 0,e.next=6,t.reader.cancel();case 6:if(!this.writer){e.next=11;break}return n=this.writer,this.writer=void 0,e.next=11,n.close();case 11:if(!this.port){e.next=16;break}return r=this.port,this.port=void 0,e.next=16,r.close();case 16:console.log("closed");case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"connectWithPaired",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serial.getPorts();case 2:if(n=e.sent,r=Object(a.a)(n,1),c=r[0]){e.next=7;break}throw new Error("no paired");case 7:return e.abrupt("return",this._connect(t,c));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serial.requestPort({});case 2:return n=e.sent,e.abrupt("return",this._connect(t,n));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_connect",value:function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,c=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(r.a)({baudRate:9600,dataBits:8,stopBits:1,parity:"none",bufferSize:255,rtscts:!1,xon:!1,xoff:!1},t),!this.port){e.next=4;break}return e.next=4,this.close();case 4:return this.port=n,e.next=7,this.port.open(t);case 7:return this.reader=new s.ReadableWebToNodeStream(this.port.readable),this.writer=this.port.writable.getWriter(),(a=this.reader).write=function(e,t){return c.writer.write(e).then((function(){return t(null)}),t),!0},e.abrupt("return",a);case 12:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}());t.a=f,window.serial2=f},236:function(e,t,n){"use strict";(function(e){var r=n(3),a=n(9),c=n.n(a),i=n(17),u=n(0),o=n.n(u),l=n(71),s=n(150),f=n(487),d=n(149),m=n(238),p=n(239),v=n.n(p),b=n(240),h=new(n.n(b).a),g=function(){var e=Object(i.a)(c.a.mark((function e(t,n,r,a){var i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=0,h.log=function(e){if("loaded page"===e){i+=1;var t=Math.round(100*i/(n.length/r.pageSize));a(t)}},e.next=4,m.a.series([h.sync.bind(h,t,3,r.timeout),h.sync.bind(h,t,3,r.timeout),h.sync.bind(h,t,3,r.timeout),h.verifySignature.bind(h,t,r.signature,r.timeout),h.setOptions.bind(h,t,{},r.timeout),h.enterProgrammingMode.bind(h,t,r.timeout),h.upload.bind(h,t,n,r.pageSize,r.timeout),h.exitProgrammingMode.bind(h,t,r.timeout)]);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),y={baudRate:57600,bufferSize:2e4},E={signature:e.from([30,149,15]),pageSize:128,timeout:400};t.a=function(){var e=Object(u.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],m=Object(u.useState)("active"),p=Object(r.a)(m,2),b=p[0],h=p[1],O=Object(u.useState)(!0),j=Object(r.a)(O,2),x=j[0],w=j[1],k=Object(u.useState)(""),S=Object(r.a)(k,2),M=S[0],C=S[1],N=function(){var e=Object(i.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C("Uploading..."),e.prev=1,w(!0),e.next=5,fetch("/arduino-web-oscilloscope/src.ino.hex").then((function(e){return e.text()})).then((function(e){return v.a.parse(e).data}));case 5:return t=e.sent,e.next=8,d.a.connect(y);case 8:return n=e.sent,h("active"),a(0),w(!1),e.next=14,g(n,t,E,a);case 14:h("success"),C("Uploaded ".concat(t.length," bytes.")),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0),C(e.t0.toString()),h("fail");case 23:d.a.close();case 24:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement(o.a.Fragment,null,o.a.createElement("br",null),o.a.createElement(l.a,{color:"green",onClick:N},o.a.createElement(s.a,{icon:"upload2"})," Upload lgt328p Firmware"),!x&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a.Line,{percent:n,status:b}),M))}}).call(this,n(39).Buffer)},291:function(e,t,n){e.exports=n(484)},292:function(e,t,n){},470:function(e,t){},472:function(e,t){},484:function(e,t,n){"use strict";n.r(t);n(292);var r=n(0),a=n.n(r),c=n(28),i=n.n(c),u=n(3),o=n(242),l=n(10),s=n(4);function f(e,t){var n=e.data.slice(e.i,e.i+t);return e.i+=t,Array.from(n)}function d(e){var t=e.data[e.i];return e.i++,t}var m=d;function p(e){var t=e.data[e.i];e.i++;var n=e.data[e.i];return e.i++,n<<8|t}function v(e){var t={data:e,i:0},n=d(t),r=d(t),a=function(e){var t=e.data.slice(e.i,e.i+4);e.i+=4;var n=t.reverse().reduce((function(e,t){return(e<<8)+t}));if(0===n)return 0;for(var r=n>>>31?-1:1,a=(n>>>23&255)-127,c=(8388608+(8388607&n)).toString(2),i=0,u=0;u<c.length;u+=1)i+=parseInt(c[u])?Math.pow(2,a):0,a--;return i*r}(t),c=p(t),i=d(t),u=d(t),o=d(t),s=d(t),v=m(t),b=m(t),h=m(t),g=p(t),y=p(t),E=p(t),O=[1&s?f(t,y):[],2&s?f(t,y):[]],j=252&s?f(t,y):[],x=[4,8,16,32].map((function(e){return s&e?j.map((function(t){return t&e&&1})):[]})),w=V[i],k=[].concat(Object(l.a)(O.map((function(e){return e.map((function(e){return e/256*w}))}))),Object(l.a)(x.map((function(e,t){return e.map((function(e){return e*w/8+(t+.25)*w/4}))})))).map((function(e){return e.map((function(e,t){return{v:e,t:(t+1)*a}}))}));return{triggerVoltage:n,triggerDir:r,secPerSample:a,triggerPos:c,amplifier:i,triggerMode:u,triggerChannel:o,isChannelOn:s,needData:v,forceUIUpdate:b,didTrigger:h,freeMemory:g,samplesPerBuffer:E,buffers:k}}var b=n(11),h=n(9),g=n.n(h),y=n(17),E=n(20),O=n(36),j=[0,1,255,253],x=function(e,t){var n=e.map((function(e){return String.fromCharCode(e)})).join(""),r=t.map((function(e){return String.fromCharCode(e)})).join(""),a=r.indexOf(n);return[a,r.indexOf(n,a+n.length)]},w=function(e){return new Promise((function(t){return setTimeout(t,e)}))},k=new(function(){function e(){var t=this;Object(E.a)(this,e),this.reader=void 0,this.writer=void 0,this.port=void 0,this.readbuffer=[],this.outputDone=void 0,this.write=function(){var e=Object(y.a)(g.a.mark((function e(n){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.writer){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.writer.write(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(O.a)(e,[{key:"close",value:function(){var e=Object(y.a)(g.a.mark((function e(){var t,n,r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("closing"),!this.reader){e.next=6;break}return t=this.reader,this.reader=void 0,e.next=6,t.cancel();case 6:if(!this.writer){e.next=11;break}return n=this.writer,this.writer=void 0,e.next=11,n.close();case 11:if(!this.outputDone){e.next=16;break}return r=this.outputDone,this.outputDone=void 0,e.next=16,r;case 16:if(!this.port){e.next=21;break}return a=this.port,this.port=void 0,e.next=21,a.close();case 21:console.log("closed");case 22:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"connectWithPaired",value:function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serial.getPorts();case 2:if(n=e.sent,console.log(n),n.length){e.next=6;break}throw new Error("no paired");case 6:this._connect(t,n[0]);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serial.requestPort({});case 2:n=e.sent,this._connect(t,n);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_connect",value:function(){var e=Object(y.a)(g.a.mark((function e(t,n){var r,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Object(b.a)({baudRate:9600,dataBits:8,stopBits:1,parity:"none",bufferSize:255,rtscts:!1,xon:!1,xoff:!1},t),!this.port){e.next=4;break}return e.next=4,this.close();case 4:return this.port=n,e.next=7,this.port.open(t);case 7:this.readbuffer=[],this.reader=this.port.readable.getReader(),r=new TextEncoderStream,this.outputDone=r.readable.pipeTo(this.port.writable),a=r.writable,this.writer=a.getWriter();case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onData",value:function(e){var t=this,n=function(){for(var n=!0;n;){var r=x(j,t.readbuffer),a=Object(u.a)(r,2),c=a[0],i=a[1];if(c>-1&&i>-1){var o=t.readbuffer.slice(c+j.length,i);t.readbuffer=t.readbuffer.slice(i);var l=(o.pop()<<8)+o.pop(),s=o.reduce((function(e,t){return e+t}),0)%Math.pow(2,16);l===s?e(o):console.error("Checksum error: ".concat(s,"\u2260").concat(l))}else n=!1}},r=!0;return function(){var e=Object(y.a)(g.a.mark((function e(){var a,c,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}return e.next=3,w(16);case 3:if(t.reader){e.next=5;break}return e.abrupt("continue",0);case 5:return e.next=7,t.reader.read();case 7:a=e.sent,void 0!==(c=a.value)&&((i=t.readbuffer).push.apply(i,Object(l.a)(c)),n()),e.next=0;break;case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){r=!1}}}]),e}()),S=k;function M(e){return Object(s.d)({key:"memo"+e.key,get:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(t){return(0,t.get)(e)})),set:function(t,n){var r=t.set;(0,t.get)(e)!==n&&r(e,n)}})}function C(e){var t=e.key,n=e.ui2mcu,r=e.mcu2ui,a=e.default,c=M(Object(s.c)({key:t,default:n(a,null)})),i=S.write;return{send:Object(s.d)({key:t+"-selector",get:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){var t=e.get;return r(t(c),t)})),set:function(e,r){var a=e.set,u=e.get,o=e.reset;if(r instanceof s.a)return o(c);a(c,n(r,u)),i(t+n(r,u)+">")}}),receive:Object(s.d)({key:t+"-receive-selector",get:function(){throw new Error("cant get here")},set:function(e,t){var n=e.set;if(t instanceof s.a)throw new Error("no reset allowed");n(c,t)}})}}window.serial=k,window.addEventListener("beforeunload",(function(){return k.close()}));var N=n(218),A=n.n(N);function D(e){var t=e.map((function(e){return e.v}));if(0===t.length)return[];if(t.length<2)return console.log("fix me"),[];var n,r=e.length,a=e[r-1].t-e[r-2].t,c=(n=t).reduce((function(e,t){return e+t}),0)/n.length;t=t.map((function(e){return e-c}));var i=Math.ceil(Math.log2(512)),u=Math.pow(2,i)-t.length,o=t;return u>0&&(o=[].concat(Object(l.a)(t),Object(l.a)(Array(u).fill(0)))),u<0&&(o=t.slice(0,512)),A()(o).map((function(e){return 512*e/t.length})).map((function(e,t){return{v:e,t:a*t}}))}var z,I=window,F=C({key:"V",ui2mcu:function(e,t){var n=t?t(re):[0,5,5],r=Object(u.a)(n,3),a=r[0],c=r[2];return Math.ceil((e+a)/c*255)},mcu2ui:function(e,t){var n=t?t(re):[0,5,5],r=Object(u.a)(n,3),a=r[0];return e/255*r[2]+a},default:1}),R=(Object(s.d)({key:"50% trigger voltage",get:function(){return!1},set:function(e){var t=e.set,n=(0,e.get)(ne).vavr;t(F.send,n)}}),C({key:"P",ui2mcu:function(e,t){var n=t?t(q.send):512,r=e*n;return r<0?0:r>n-1?n-1:r},mcu2ui:function(e,t){return e/(t?t(q.send):512)},default:.5})),P=C({key:"C",ui2mcu:function(e){return e},mcu2ui:function(e){return e},default:275e-8}),L=C({key:"R",ui2mcu:function(e){return e},mcu2ui:function(e){return e},default:0});!function(e){e.FALLING="Falling",e.RISING="Rising"}(z||(z={}));var T,U=C({key:"D",ui2mcu:function(e){return e===z.RISING?0:1},mcu2ui:function(e){return e?z.FALLING:z.RISING},default:z.FALLING}),B=C({key:"T",ui2mcu:function(e){return e},mcu2ui:function(e){return e},default:0}),W=C({key:"B",ui2mcu:function(e){return e.map((function(e){return e?1:0})).reduce((function(e,t,n){return e+(t<<n)}),0)},mcu2ui:function(e){return Array(8).fill(0).map((function(t,n){return Boolean(e&1<<n)}))},default:[!0,!1,!1,!1,!1,!1]}),G=function(e,t,n){return e<t?t:e>n?n:e},V=[25,6.25,5,3.125,1.5625,.78125,.78125,.625,.390625,.3125,.1953125,.15625],H=C({key:"A",ui2mcu:function(e){return G(e,0,V.length-1)},mcu2ui:function(e){return e},default:1}),q=C({key:"S",ui2mcu:function(e){return e},mcu2ui:function(e){return e},default:512});!function(e){e.AUTO="Auto",e.NORMAL="Normal",e.SINGLE="Single",e.SLOW="Slow"}(T||(T={}));var X=C({key:"M",ui2mcu:function(e){return Object.values(T).indexOf(e)},mcu2ui:function(e){return Object.values(T)[e]},default:T.AUTO}),Y=Object(s.c)({key:"data",default:Object(l.a)(new Array(8)).map((function(){return[]}))}),_=M(Object(s.c)({key:"is-running",default:!0})),J=M(Object(s.c)({key:"oversampling-factor",default:0})),K=Object(s.c)({key:"xy-mode",default:!1}),$=Object(s.c)({key:"fft0",default:!1}),Q=Object(s.c)({key:"fft1",default:!1}),Z=M(Object(s.c)({key:"did-trigger",default:!1})),ee=M(Object(s.c)({key:"free-memory",default:0})),te=Object(s.d)({key:"frequency",get:function(e){return function(e){if(e.length<2)return 0;for(var t=function(e){var t=e[0];return e.map((function(e){return t=.5*t+.5*e}))}(e.map((function(e){return e.v}))),n=(Math.max.apply(Math,Object(l.a)(t))+Math.min.apply(Math,Object(l.a)(t)))/2,r=-1,a=0,c=0,i=1;i<e.length;i++){e[i-1].v<n&&e[i].v>=n&&(c++,r<0&&(r=e[i].t),a=e[i].t)}return(c-1)/(a-r)}((0,e.get)(Y)[0])}}),ne=Object(s.d)({key:"voltages",get:function(e){var t=(0,e.get)(Y)[0].map((function(e){return e.v})),n=Math.max.apply(Math,Object(l.a)(t)),r=Math.min.apply(Math,Object(l.a)(t)),a=n-r;return{vavr:function(e){return e.reduce((function(e,t){return e+t}),0)}(t)/t.length,vpp:a,vmin:r,vmax:n}}}),re=Object(s.d)({key:"voltage-range",get:function(e){var t=e.get,n=V[t(H.send)];return[0,n,n-0]}}),ae=Object(s.d)({key:"sendFullState-this shouldnt be a selector",get:function(){return null},set:function(e){var t=e.get,n=e.set;n(R.send,t(R.send)),n(P.send,t(P.send)),n(q.send,t(q.send)),n(H.send,t(H.send)),n(F.send,t(F.send)),n(U.send,t(U.send)),n(B.send,t(B.send)),n(X.send,t(X.send)),n(W.send,t(W.send))}}),ce=Object(s.d)({key:"receiveFullState-this shouldnt be a selector",get:function(){throw new Error("write only selector")},set:function(e,t){var n=e.set;t instanceof s.a||(n(R.receive,t.triggerPos),n(P.receive,t.secPerSample),n(q.receive,t.samplesPerBuffer),n(H.receive,t.amplifier),n(F.receive,t.triggerVoltage),n(U.receive,t.triggerDir),n(B.receive,t.triggerChannel),n(X.receive,t.triggerMode),n(W.receive,t.isChannelOn))}}),ie=Object(s.d)({key:"all-data-this shouldnt be a selector",get:function(){return[]},set:function(e,t){var n=e.set,r=e.get;if(I.$recoilDebugStates=[],!(t instanceof s.a)&&0!==t.length){var a=v(t);a.needData&&n(ae,null),a.forceUIUpdate&&n(ce,a);var c=a.buffers;if(n(ee,a.freeMemory),n(Z,!!a.didTrigger),r(_)&&c.some((function(e){return e.length>0}))){var i=r(Y),u=r(J);if(u>0){var o=1-2/(u+1);c=c.map((function(e,t){return function(e,t,n){return t.map((function(t,r){var a,c=t.v;return{t:t.t,v:((null===(a=n[r])||void 0===a?void 0:a.v)||0)*e+c*(1-e)}}))}(o,c[t],i[t])}))}if(r(X.send)===T.SLOW){var f=Math.max.apply(Math,Object(l.a)(i.map((function(e){var t;return(null===(t=e[e.length-1])||void 0===t?void 0:t.t)||0}))));c=c.map((function(e,t){return[].concat(Object(l.a)(i[t]),Object(l.a)(e.map((function(e){return{v:e.v,t:e.t+f}}))))}));var d=r(P.send)*r(q.send);Math.max.apply(Math,Object(l.a)(c.map((function(e){var t;return(null===(t=e[e.length-1])||void 0===t?void 0:t.t)||0}))))>d&&(c=c.map((function(){return[]})))}var m=[].concat(Object(l.a)(c),[r($)?D(c[0]):[],r(Q)?D(c[1]):[]]);n(Y,m),r(X.send)===T.SINGLE&&n(_,!1)}}}}),ue=n(27),oe=20,le=50,se=30,fe=50,de=Object(s.d)({key:"xDomain",get:function(e){var t=e.get;return[0,t(P.send)*t(q.send)]}}),me=re,pe=M(Object(s.c)({key:"plot-width",default:0})),ve=M(Object(s.c)({key:"plot-height",default:0})),be=Object(s.d)({key:"xScale",get:function(e){var t=e.get,n=t(de),r=t(pe);return ue.d().domain(n).range([fe,r-le])}}),he=Object(s.d)({key:"yScale",get:function(e){var t=e.get,n=t(me),r=t(ve);return ue.d().domain(n).rangeRound([r-se,oe])}}),ge=Object(s.d)({key:"line",get:function(e){var t=e.get,n=t(be),r=t(he);return ue.c().x((function(e){var t=e.t;return n(t)})).y((function(e){var t=e.v;return r(t)}))}}),ye=Object(s.d)({key:"xy-line",get:function(e){var t=e.get,n=t(he),r=t(be),a=t(de),c=Object(u.a)(a,2)[1],i=t(me),o=Object(u.a)(i,2)[1];return ue.c().x((function(e){return r(e[1]/o*c)})).y((function(e){return n(-e[0])}))}}),Ee=(Object(s.d)({key:"plot-data",get:function(e){var t=e.get,n=t(Y),r=t(ge);return n.map((function(e){return r(e)||void 0}))}}),Object(r.forwardRef)((function(e,t){var n=Object(r.useState)(!1),c=Object(u.a)(n,2),i=c[0],o=c[1],l=Object(s.f)(he),f=Object(s.f)(pe),d=Object(s.e)(F.send),m=Object(u.a)(d,2),p=m[0],v=m[1];Object(r.useImperativeHandle)(t,(function(){return{onMouseUp:function(){o(!1)},onMouseMove:function(e){i&&v(l.invert(e.nativeEvent.offsetY))}}}));var b=l(p);return a.a.createElement(a.a.Fragment,null,a.a.createElement("line",{className:"triggerVoltage",x1:fe,x2:f-le,y1:b,y2:b}),a.a.createElement("line",{className:"triggerVoltageHandle",onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),o(!0)},x1:fe,x2:f-le,y1:b,y2:b}),a.a.createElement("text",{fill:"currentColor",y:b,x:f-le,dy:".32em",dx:"10"},p.toFixed(2),"v"))})));Ee.displayName="TriggerVoltageHandle";var Oe=Ee,je=Object(r.forwardRef)((function(e,t){var n=Object(r.useState)(!1),c=Object(u.a)(n,2),i=c[0],o=c[1],l=Object(s.f)(be),f=Object(s.f)(ve),d=Object(s.e)(R.send),m=Object(u.a)(d,2),p=m[0],v=m[1],b=Object(s.f)(de);Object(r.useImperativeHandle)(t,(function(){return{onMouseUp:function(){o(!1)},onMouseMove:function(e){i&&v(l.invert(e.nativeEvent.offsetX)/b[1])}}}));var h=l(p*b[1]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("line",{className:"triggerPos",x1:h,x2:h,y1:f-se,y2:oe}),a.a.createElement("line",{className:"triggerPosHandle",onMouseDown:function(e){e.preventDefault(),e.stopPropagation(),o(!0)},x1:h,x2:h,y1:f-se,y2:oe}),a.a.createElement("text",{fill:"currentColor",x:h,dx:"-1em",dy:"1em"},Math.round(100*p),"%"))}));je.displayName="TriggerPosHandle";var xe=je,we=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.pow(10,t);return(Math.round(e*n)/n).toFixed(t)};function ke(e){if(e=Number(e),Number.isNaN(e))return"--";var t=e/60,n=e/60/60,r=1e3*e,a=1e3*r;return a<1e3?we(a,0)+"\u03bcs":r<10?we(r,2)+"ms":r<1e3?we(r)+"ms":e<10?we(e,1)+"s":n>1?we(n,0)+"h"+we(t%60,1)+"m":t>5?we(t,0)+"m"+we(e%60,1)+"s":we(e,0)+"s"}function Se(e){if(e<0)return"-"+Se(-e);var t=1e3*e,n=1e3*t;return n<10?we(n,2)+"\xb5v":n<50?we(n,1)+"\xb5v":n<1e3?we(n,0)+"\xb5v":t<10?we(t,2)+"mv":t<50?we(t,1)+"mv":t<1e3?we(t,0)+"mv":we(e,2)+"v"}function Me(){var e=Object(r.useRef)(null),t=Object(s.f)(ve),n=Object(s.f)(be),c=e.current;return Object(r.useLayoutEffect)((function(){if(c){var e=ue.f(n.domain()[0],n.domain()[1],10);ue.e(c).call((function(r){return r.attr("transform","translate(0,".concat(t-se,")")).call(ue.a(n).tickValues(e).tickPadding(10).tickSize(-t+oe+se).tickFormat(ke).tickSizeOuter(0)).call((function(e){return e.select(".domain").remove()}))}))}}),[c,n,t]),a.a.createElement("g",{className:"x axis",ref:e})}function Ce(){var e=Object(r.useRef)(null),t=Object(s.f)(pe),n=Object(s.f)(he),c=e.current;return Object(r.useLayoutEffect)((function(){if(c){var e=ue.f(n.domain()[0],n.domain()[1],10);ue.e(c).call((function(r){return r.attr("transform","translate(".concat(fe,",0)")).call(ue.b(n).tickValues(e).tickPadding(10).tickSize(-t+le+fe-1).tickFormat((function(e){return e+"v"})))})).call((function(e){return e.select(".domain").attr("d",(function(e,t,n){return ue.e(n[0]).attr("d")+"z"}))}))}}),[c,n,t]),a.a.createElement("g",{className:"y axis",ref:e})}var Ne=n(219),Ae=Object(r.forwardRef)((function(e,t){var n=Object(r.useState)(!1),c=Object(u.a)(n,2),i=c[0],o=c[1],l=Object(s.f)(be),f=Object(s.f)(he),d=Object(r.useState)({x:-1,y:-1}),m=Object(u.a)(d,2),p=m[0],v=m[1],b=Object(r.useState)({x:-1,y:-1}),h=Object(u.a)(b,2),g=h[0],y=h[1];return Object(r.useImperativeHandle)(t,(function(){return{onMouseDown:function(e){v({x:l.invert(e.nativeEvent.offsetX),y:f.invert(e.nativeEvent.offsetY)}),y({x:l.invert(e.nativeEvent.offsetX),y:f.invert(e.nativeEvent.offsetY)}),o(!0)},onMouseUp:function(e){i&&(y({x:l.invert(e.nativeEvent.offsetX),y:f.invert(e.nativeEvent.offsetY)}),o(!1))},onMouseMove:function(e){i&&y({x:l.invert(e.nativeEvent.offsetX),y:f.invert(e.nativeEvent.offsetY)})}}})),Object(Ne.isEqual)(p,g)?a.a.createElement(a.a.Fragment,null):a.a.createElement("g",{className:"Measure"},a.a.createElement("line",{className:"measureCap",x1:l(p.x)-5,x2:l(p.x)+5,y1:f(p.y)-5,y2:f(p.y)+5}),a.a.createElement("line",{className:"measureCap",x1:l(p.x)-5,x2:l(p.x)+5,y1:f(p.y)+5,y2:f(p.y)-5}),a.a.createElement("line",{className:"measureX",x1:l(p.x),x2:l(g.x),y1:f(p.y),y2:f(p.y)}),a.a.createElement("text",{fill:"currentColor",x:l((p.x+g.x)/2),y:f(p.y),dx:"-1em",dy:"1.5em"},ke(g.x-p.x)),a.a.createElement("line",{className:"measureCap",x1:l(g.x)-5,x2:l(g.x)+5,y1:f(g.y)-5,y2:f(g.y)+5}),a.a.createElement("line",{className:"measureCap",x1:l(g.x)-5,x2:l(g.x)+5,y1:f(g.y)+5,y2:f(g.y)-5}),a.a.createElement("line",{className:"measureY",x1:l(g.x),x2:l(g.x),y1:f(p.y),y2:f(g.y)}),a.a.createElement("text",{fill:"currentColor",x:l(g.x),y:f((p.y+g.y)/2),dx:"1em",dy:"0"},Se(g.y-p.y)))}));Ae.displayName="Measure";var De=Ae;function ze(){var e=Object(s.f)(K),t=Object(s.f)(W.send),n=Object(s.f)(ye),r=Object(s.f)(Y),c=r[0].map((function(e,t){var n;return[-(null===(n=r[1][t])||void 0===n?void 0:n.v)||0,e.v]}));return e&&t[0]&&t[1]?a.a.createElement(a.a.Fragment,null,a.a.createElement("path",{className:"plot-area-xy",d:n(c)||void 0})):a.a.createElement(a.a.Fragment,null)}function Ie(){var e=Object(s.f)(ge),t=Object(s.f)(Y).map((function(t){return e(t)||void 0})),n=t.slice(0,2),r=t.slice(2,6),c=t.slice(6,8);return a.a.createElement(a.a.Fragment,null,n.map((function(e,t){return a.a.createElement("path",{key:t,className:"plot-area-a".concat(t),d:e})})),r.map((function(e,t){return a.a.createElement("path",{key:t,className:"plot-area-d".concat(t),d:e})})),c.map((function(e,t){return a.a.createElement("path",{key:t,className:"plot-area-fft".concat(t),d:e})})))}function Fe(){var e=Object(r.useRef)(null),t=Object(r.useRef)(null),n=Object(r.useRef)(null),c=Object(r.useRef)(null),i=Object(r.useRef)(null),l=Object(o.a)(i),f=Object(u.a)(l,2),d=f[0],m=f[1],p=Object(s.g)(ve),v=Object(s.g)(pe);return Object(r.useEffect)((function(){p(m),v(d)}),[m,p,v,d]),a.a.createElement("div",{className:"plotContainer",ref:i},a.a.createElement("svg",{className:"plot",ref:e,onMouseMove:function(e){var r,a,i;null===(r=t.current)||void 0===r||r.onMouseMove(e),null===(a=n.current)||void 0===a||a.onMouseMove(e),null===(i=c.current)||void 0===i||i.onMouseMove(e),e.preventDefault()},onMouseLeave:function(e){var r,a,i;null===(r=t.current)||void 0===r||r.onMouseUp(e),null===(a=n.current)||void 0===a||a.onMouseUp(e),null===(i=c.current)||void 0===i||i.onMouseUp(e),e.preventDefault()},onMouseUp:function(e){var r,a,i;null===(r=t.current)||void 0===r||r.onMouseUp(e),null===(a=n.current)||void 0===a||a.onMouseUp(e),null===(i=c.current)||void 0===i||i.onMouseUp(e),e.preventDefault()},onMouseDown:function(e){var t;null===(t=c.current)||void 0===t||t.onMouseDown(e),e.preventDefault()}},a.a.createElement(Me,null),a.a.createElement(Ce,null),a.a.createElement(Ie,null),a.a.createElement(ze,null),a.a.createElement(De,{ref:c}),a.a.createElement(Oe,{ref:n}),a.a.createElement(xe,{ref:t})))}var Re=n(495),Pe=n(496),Le=n(497),Te=n(71),Ue=n(498),Be=n(150),We=n(499),Ge={marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center"};function Ve(){var e=Object(s.f)(_);I.requestData=Object(s.g)(L.send);var t=Object(s.e)(X.send),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(s.e)(B.send),o=Object(u.a)(i,2),l=o[0],f=o[1],d=Object(s.f)(Z),m=Object(s.e)(U.send),p=Object(u.a)(m,2),v=p[0],b=p[1],h=Object(s.f)(P.send)<.003;return a.a.createElement(Re.a,{header:"Trigger",shaded:!0,collapsible:!0,defaultExpanded:!0},a.a.createElement(Pe.a,{style:Ge},a.a.createElement(Le.a,null,["A0","AS","A2","A3","A4","A5"].map((function(e,t){return a.a.createElement(Te.a,{key:t,appearance:l===t?"primary":"default",disabled:["A2","A3"].includes(e),size:"sm",onClick:function(){return f(t)}},e)})))),a.a.createElement(Pe.a,{style:Ge},a.a.createElement(Le.a,null,Object.values(T).map((function(e){return a.a.createElement(Te.a,{key:e,appearance:r===e?"primary":"default",color:e===T.SLOW&&h?"red":void 0,size:"sm",onClick:function(){return c(e)}},e)})))),a.a.createElement(Pe.a,{style:Ge},a.a.createElement("div",null,"Direction:"),a.a.createElement(Le.a,null,a.a.createElement(Ue.a,{size:"sm",appearance:v===z.FALLING?"primary":"default",icon:a.a.createElement(Be.a,{icon:"level-down"}),onClick:function(){return b(z.FALLING)}}),a.a.createElement(Ue.a,{size:"sm",appearance:v===z.RISING?"primary":"default",icon:a.a.createElement(Be.a,{icon:"level-up"}),onClick:function(){return b(z.RISING)}}))),a.a.createElement(Pe.a,{style:Ge},"State:\xa0",e?d?a.a.createElement(We.a,{color:"green"},"Triggered"):a.a.createElement(We.a,{color:"yellow"},"Searching"):a.a.createElement(We.a,{color:"red"},"Hold")))}var He=n(492),qe={marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center"};function Xe(){var e=Object(s.e)(J),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(s.e)(K),i=Object(u.a)(c,2),o=i[0],l=i[1],f=Object(s.e)($),d=Object(u.a)(f,2),m=d[0],p=d[1],v=Object(s.e)(Q),b=Object(u.a)(v,2),h=b[0],g=b[1],y=Object(s.e)(W.send),E=Object(u.a)(y,2),O=E[0],j=E[1];return a.a.createElement(Re.a,{header:"Channels",shaded:!0,collapsible:!0,defaultExpanded:!0},a.a.createElement(Pe.a,{style:qe},a.a.createElement(Le.a,null,["A0","AS","A2","A3","A4","A5"].map((function(e,t){return a.a.createElement(Te.a,{key:t,appearance:O[t]?"primary":"default",size:"sm",disabled:["A2","A3"].includes(e),onClick:function(){var e=O.slice();e[t]=!e[t],j(e)}},e)})))),a.a.createElement("div",{style:qe},"Oversample",a.a.createElement(He.a,{style:{width:"50%"},value:n,onChange:r,max:30,min:0,step:.1})),a.a.createElement(Le.a,null,a.a.createElement(Te.a,{appearance:m?"primary":"default",disabled:!O[0],size:"sm",onClick:function(){p(!m)}},"FFT A0"),a.a.createElement(Te.a,{appearance:h?"primary":"default",disabled:!O[1],size:"sm",onClick:function(){g(!h)}},"FFT AS"),a.a.createElement(Te.a,{appearance:o?"primary":"default",disabled:!(O[1]&&O[0]),size:"sm",onClick:function(){l(!o)}},"XY")))}var Ye=n(29),_e=n.n(Ye),Je=n(491);function Ke(){var e=Object(r.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(-1),i=Object(u.a)(c,2),o=i[0],l=i[1];return[n,function(){a(!0),clearTimeout(o);var e=window.setTimeout((function(){return a(!1)}),200);l(e)}]}var $e=function(){var e=Object(s.e)(H.send),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Ke(),o=Object(u.a)(i,2),l=o[0],f=o[1],d=Ke(),m=Object(u.a)(d,2),p=m[0],v=m[1];return Object(r.useEffect)((function(){return _e.a.bind("up",(function(e){e.preventDefault(),f(),c(n-1)})),_e.a.bind("down",(function(e){e.preventDefault(),v(),c(n+1)})),function(){_e.a.unbind("up"),_e.a.unbind("down")}}),[n,c,v,f]),a.a.createElement("div",{style:{width:" 100%",display:" flex",justifyContent:" space-between",marginBottom:5}},a.a.createElement(Ue.a,{active:p,size:"md",icon:a.a.createElement(Be.a,{icon:"down"}),onClick:function(){return c(n+1)}}),a.a.createElement(Je.a,{searchable:!1,value:n,cleanable:!1,onChange:c,data:V.map((function(e,t){return{label:Se(e/10)+" / div",value:t}})),style:{flex:1,marginLeft:5,marginRight:5}}),a.a.createElement(Ue.a,{active:l,size:"md",icon:a.a.createElement(Be.a,{icon:"up"}),onClick:function(){return c(n-1)}}))},Qe=function(e){return e/1e6},Ze=function(e){return e/1e3},et=function(e,t,n){var r=e.map((function(e){return e.value})).indexOf(t)+n;return e[r=G(r,0,e.length-1)].value};function tt(){var e=Object(s.e)(P.send),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(s.f)(q.send),o=Ke(),l=Object(u.a)(o,2),f=l[0],d=l[1],m=Ke(),p=Object(u.a)(m,2),v=p[0],b=p[1],h=[Qe(100.8),Qe(140.8),Qe(200),Qe(500),Qe(1e3),Ze(2),Ze(5),Ze(10),Ze(20),Ze(50),.1,.2,.5,1,2,5,10,20,50,100,1e3].map((function(e){var t=10*e/i;return{label:ke(e)+" / div",value:t}}));return Object(r.useEffect)((function(){return _e.a.bind("right",(function(e){e.preventDefault(),b(),c(et(h,n,1))})),_e.a.bind("left",(function(e){e.preventDefault(),d(),c(et(h,n,-1))})),function(){_e.a.unbind("right"),_e.a.unbind("left")}}),[c,n,h,b,d]),I.setSecPerSample=c,a.a.createElement("div",{style:{width:" 100%",display:" flex",justifyContent:" space-between",marginBottom:5}},a.a.createElement(Ue.a,{active:f,size:"md",icon:a.a.createElement(Be.a,{icon:"left"}),onClick:function(){return c(et(h,n,-1))}}),a.a.createElement(Je.a,{searchable:!0,value:n,cleanable:!1,onChange:function(e){c(e)},data:h,style:{flex:1,marginLeft:5,marginRight:5}}),a.a.createElement(Ue.a,{active:v,size:"md",icon:a.a.createElement(Be.a,{icon:"right"}),onClick:function(){return c(et(h,n,1))}}))}function nt(){var e=Object(s.e)(_),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Ke(),o=Object(u.a)(i,2),l=o[0],f=o[1];return Object(r.useEffect)((function(){return _e.a.bind("space",(function(e){e.preventDefault(),f(),c((function(e){return!e}))})),function(){_e.a.unbind("space")}}),[c,f]),a.a.createElement(Re.a,{header:"Scales",shaded:!0,collapsible:!0,defaultExpanded:!0},a.a.createElement(Te.a,{active:l,style:{color:"white",backgroundColor:n?"green":"red",width:"100%",marginBottom:"10px"},size:"sm",onClick:function(){c(!n)}},(n?"Run":"Hold")+" [space]"),a.a.createElement(tt,null),a.a.createElement($e,null))}var rt=n(236),at={baudRate:115200,bufferSize:2e4},ct={marginTop:10,display:"flex",justifyContent:"space-between",alignItems:"center"};var it=function(){var e=Object(r.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)("Disconnected"),o=Object(u.a)(i,2),l=o[0],f=o[1],d=Object(s.g)(ie);return Object(r.useEffect)((function(){"Error"!==l&&c("")}),[l]),Object(r.useEffect)((function(){return S.onData((function(e){d(e)}))}),[d]),Object(r.useEffect)((function(){f("Connecting..."),S.connectWithPaired(at).then((function(){return f("Connected")})).catch((function(){return f("Disconnected")}))}),[]),a.a.createElement(Re.a,{shaded:!0,header:"Serial"},a.a.createElement(Le.a,{style:ct},a.a.createElement(Ue.a,{style:{flex:1},appearance:"Connected"===l?"primary":void 0,size:"md",onClick:Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.connect(at).then((function(){return f("Connected")})).catch((function(e){f("Error"),c(e.toString())}));case 1:case"end":return e.stop()}}),e)}))),icon:a.a.createElement(Be.a,{icon:"arrow-right",style:{width:" 100%"}}),placement:"right"}),a.a.createElement(Ue.a,{style:{flex:1},size:"md",appearance:"Connected"!==l?"primary":void 0,onClick:Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S.close().then((function(){return f("Disconnected")})).catch((function(){return f("Error")}));case 1:case"end":return e.stop()}}),e)}))),icon:a.a.createElement(Be.a,{icon:"stop",style:{width:" 100%"}}),placement:"right"}),a.a.createElement(Ue.a,{style:{flex:1},size:"md",onClick:Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f("Connecting..."),e.next=3,S.connectWithPaired(at).catch((function(){return S.connect(at)})).then((function(){return f("Connected")})).catch((function(){return f("Error")}));case 3:case"end":return e.stop()}}),e)}))),icon:a.a.createElement(Be.a,{icon:"recycle",style:{width:" 100%"}}),placement:"right"})),a.a.createElement(Pe.a,{style:ct},"State:\xa0",function(){var e={Connected:"green","Connecting...":"yellow",Error:"red",Disconnected:void 0}[l];return a.a.createElement(We.a,{color:e},l," ",n)}()),"Disconnected"===l&&a.a.createElement(rt.a,null))};function ut(){var e=Object(s.f)(ee);return a.a.createElement(We.a,null,"Mem: ",e,"bytes")}function ot(){var e=Object(s.f)(te);return a.a.createElement(We.a,null,"Freq: ",function(e){if(e>0){var t=e/1e3;return e<1e3?we(e)+"Hz":t<10?we(t,2)+"KHz":we(t)+"KHz"}return"--"}(e))}function lt(){var e=Object(s.f)(te);return a.a.createElement(We.a,null,"Wavelength: ",ke(1/e))}var st={width:" 100%",display:" flex",justifyContent:" space-between"};function ft(){var e=Object(s.f)(ne);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:st},a.a.createElement(We.a,null,"Vmin: ",Se(e.vmin)),a.a.createElement(We.a,null,"Vmax: ",Se(e.vmax))),a.a.createElement("div",{style:st},a.a.createElement(We.a,null,"Vavr: ",Se(e.vavr)),a.a.createElement(We.a,null,"Vp-p: ",Se(e.vpp))))}function dt(){return a.a.createElement("div",null,a.a.createElement(Re.a,{header:"Voltages",shaded:!0,collapsible:!0,defaultExpanded:!0},a.a.createElement(ft,null),a.a.createElement("div",{style:st},a.a.createElement(ut,null),a.a.createElement(ot,null),a.a.createElement(lt,null))))}var mt=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(it,null),a.a.createElement(nt,null),a.a.createElement(Xe,null),a.a.createElement(Ve,null),a.a.createElement(dt,null))},pt=n(490),vt=n(500),bt=n(501);function ht(){return a.a.createElement(Re.a,{header:"About",shaded:!0,collapsible:!0,defaultExpanded:!0},a.a.createElement("p",null,"David Buezas 2020"),a.a.createElement("a",{href:"https://github.com/dbuezas/arduino-web-oscilloscope"},"https://github.com/dbuezas/arduino-web-oscilloscope"))}var gt=n(493),yt=n(494),Et=n(241),Ot="chrome://flags/#enable-experimental-web-platform-features",jt={width:"200px",display:"inline-table",verticalAlign:"top"};var xt=function(){var e=Object(Et.a)(Ot).copy;return a.a.createElement("div",{className:"App"},a.a.createElement(Re.a,{shaded:!0,bordered:!0,style:{margin:"20px auto",overflow:"scroll",height:"100%",zoom:.8}},a.a.createElement(Re.a,{header:a.a.createElement(a.a.Fragment,null,a.a.createElement("p",{style:{fontSize:30}},"Enable experimental web platform features to activate the Web Serial API"," "),a.a.createElement("br",null))},a.a.createElement(gt.a,{vertical:!0,style:jt},a.a.createElement(gt.a.Item,{title:"Copy the chrome flags url",description:a.a.createElement(Te.a,{color:"green",onClick:function(){e(),yt.a.success({title:"It is now in your clipboard",description:Ot})}},Ot)}),a.a.createElement(gt.a.Item,{title:"Paste it in the address bar of the browser and press [enter]",description:a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{alt:"",src:"/arduino-web-oscilloscope/address-bar.png"}),a.a.createElement("p",null,"Right there. This will take you to the the page where you can support for the serial port."))}),a.a.createElement(gt.a.Item,{title:"Enable the experimental web platform features",description:a.a.createElement("img",{alt:"",src:"/arduino-web-oscilloscope/ExperimentalWebPlatformFeatures.png"})}),a.a.createElement(gt.a.Item,{title:"Reload this page",description:"And you'll be ready to use the oscilloscope"}),a.a.createElement(gt.a.Item,{title:"Enjoy",description:a.a.createElement(a.a.Fragment,null,a.a.createElement("img",{width:"500px",alt:"",src:"/arduino-web-oscilloscope/screenshot.png"}),a.a.createElement("p",null,"Do not do something stupid, the board is connected to your computer so it shares Ground with it, also do not push more than 5v to it."))})))))},wt=a.a.lazy((function(){return n.e(3).then(n.bind(null,503))})),kt=navigator.userAgent.toLowerCase().indexOf("android")>-1;var St=function(){return!kt&&function(){var e=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return Number(!!e&&parseInt(e[2],10))}()<86?a.a.createElement("p",null,"Requires an updated version of Chrome (\u2265 86.x.x)"):kt||navigator.serial?a.a.createElement("div",{className:"App"},kt&&wt,a.a.createElement(pt.a,null,a.a.createElement(vt.a,null,a.a.createElement(Re.a,{shaded:!0},a.a.createElement(Fe,null))),a.a.createElement(bt.a,{width:261},a.a.createElement(mt,null),a.a.createElement(ht,null)))):a.a.createElement(xt,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s.b,null,a.a.createElement(St,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[291,1,2]]]);
//# sourceMappingURL=main.17fa7e35.chunk.js.map