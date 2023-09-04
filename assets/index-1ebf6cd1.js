(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="154",zr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},fh=0,eu=1,hh=2,Cc=1,dh=2,kn=3,Zn=0,Qt=1,_n=2,ar=0,li=1,tu=2,nu=3,ru=4,ph=5,ii=100,mh=101,gh=102,iu=103,au=104,vh=200,_h=201,xh=202,Eh=203,Fc=204,Rc=205,yh=206,Mh=207,Ah=208,Sh=209,wh=210,Dh=0,bh=1,Th=2,to=3,Ch=4,Fh=5,Rh=6,Nh=7,Nc=0,Lh=1,Ph=2,qn=0,Ih=1,Uh=2,Bh=3,Oh=4,zh=5,Lc=300,hi=301,di=302,no=303,ro=304,Za=306,io=1e3,Cn=1001,ao=1002,Zt=1003,su=1004,_s=1005,gn=1006,Gh=1007,Pi=1008,sr=1009,Hh=1010,Vh=1011,To=1012,Pc=1013,nr=1014,rr=1015,Ii=1016,Ic=1017,Uc=1018,Mr=1020,Wh=1021,Fn=1023,kh=1024,Xh=1025,Ar=1026,pi=1027,$h=1028,Bc=1029,qh=1030,Oc=1031,zc=1033,xs=33776,Es=33777,ys=33778,Ms=33779,ou=35840,uu=35841,lu=35842,cu=35843,Yh=36196,fu=37492,hu=37496,du=37808,pu=37809,mu=37810,gu=37811,vu=37812,_u=37813,xu=37814,Eu=37815,yu=37816,Mu=37817,Au=37818,Su=37819,wu=37820,Du=37821,As=36492,Zh=36283,bu=36284,Tu=36285,Cu=36286,Gc=3e3,Sr=3001,Kh=3200,Jh=3201,Co=0,Qh=1,wr="",qe="srgb",In="srgb-linear",Hc="display-p3",Ss=7680,jh=519,ed=512,td=513,nd=514,rd=515,id=516,ad=517,sd=518,od=519,Fu=35044,Ru="300 es",so=1035,Xn=2e3,La=2001;class Fr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,oo=180/Math.PI;function Wi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[r&255]+Ot[r>>8&255]+Ot[r>>16&255]+Ot[r>>24&255]).toLowerCase()}function Vt(n,e,t){return Math.max(e,Math.min(t,n))}function ud(n,e){return(n%e+e)%e}function Ds(n,e,t){return(1-t)*n+t*e}function Nu(n){return(n&n-1)===0&&n!==0}function uo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ta(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*i+e.x,this.y=a*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,r,i,a,s,o,c,h){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,a,s,o,c,h)}set(e,t,r,i,a,s,o,c,h){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=a,u[5]=c,u[6]=r,u[7]=s,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,a=this.elements,s=r[0],o=r[3],c=r[6],h=r[1],u=r[4],l=r[7],f=r[2],d=r[5],v=r[8],p=i[0],g=i[3],m=i[6],w=i[1],_=i[4],S=i[7],E=i[2],D=i[5],b=i[8];return a[0]=s*p+o*w+c*E,a[3]=s*g+o*_+c*D,a[6]=s*m+o*S+c*b,a[1]=h*p+u*w+l*E,a[4]=h*g+u*_+l*D,a[7]=h*m+u*S+l*b,a[2]=f*p+d*w+v*E,a[5]=f*g+d*_+v*D,a[8]=f*m+d*S+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],h=e[7],u=e[8];return t*s*u-t*o*h-r*a*u+r*o*c+i*a*h-i*s*c}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],h=e[7],u=e[8],l=u*s-o*h,f=o*c-u*a,d=h*a-s*c,v=t*l+r*f+i*d;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/v;return e[0]=l*p,e[1]=(i*h-u*r)*p,e[2]=(o*r-i*s)*p,e[3]=f*p,e[4]=(u*t-i*c)*p,e[5]=(i*a-o*t)*p,e[6]=d*p,e[7]=(r*c-h*t)*p,e[8]=(s*t-r*a)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,a,s,o){const c=Math.cos(a),h=Math.sin(a);return this.set(r*c,r*h,-r*(c*s+h*o)+s+e,-i*h,i*c,-i*(-h*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bs.makeScale(e,t)),this}rotate(e){return this.premultiply(bs.makeRotation(-e)),this}translate(e,t){return this.premultiply(bs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bs=new Ke;function Vc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Lu={};function Li(n){n in Lu||(Lu[n]=!0,console.warn(n))}function ci(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const ld=new Ke().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cd=new Ke().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function fd(n){return n.convertSRGBToLinear().applyMatrix3(cd)}function hd(n){return n.applyMatrix3(ld).convertLinearToSRGB()}const dd={[In]:n=>n,[qe]:n=>n.convertSRGBToLinear(),[Hc]:fd},pd={[In]:n=>n,[qe]:n=>n.convertLinearToSRGB(),[Hc]:hd},yn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return In},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=dd[e],i=pd[t];if(r===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Hr;class Wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hr===void 0&&(Hr=Pa("canvas")),Hr.width=e.width,Hr.height=e.height;const r=Hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=ci(a[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ci(t[r]/255)*255):t[r]=ci(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let md=0;class kc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=Wi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(Cs(i[s].image)):a.push(Cs(i[s]))}else a=Cs(i);r.url=a}return t||(e.images[this.uuid]=r),r}}function Cs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gd=0;class jt extends Fr{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,r=Cn,i=Cn,a=gn,s=Pi,o=Fn,c=sr,h=jt.DEFAULT_ANISOTROPY,u=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=Wi(),this.name="",this.source=new kc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Sr?qe:wr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case io:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case io:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===qe?Sr:Gc}set encoding(e){Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Sr?qe:wr}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Lc;jt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,r=0,i=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,a;const c=e.elements,h=c[0],u=c[4],l=c[8],f=c[1],d=c[5],v=c[9],p=c[2],g=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(l-p)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(l+p)<.1&&Math.abs(v+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(h+1)/2,S=(d+1)/2,E=(m+1)/2,D=(u+f)/4,b=(l+p)/4,T=(v+g)/4;return _>S&&_>E?_<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(_),i=D/r,a=b/r):S>E?S<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(S),r=D/i,a=T/i):E<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(E),r=b/a,i=T/a),this.set(r,i,a,t),this}let w=Math.sqrt((g-v)*(g-v)+(l-p)*(l-p)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(g-v)/w,this.y=(l-p)/w,this.z=(f-u)/w,this.w=Math.acos((h+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class br extends Fr{constructor(e=1,t=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const i={width:e,height:t,depth:1};r.encoding!==void 0&&(Li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Sr?qe:wr),this.texture=new jt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:gn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xc extends jt{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vd extends jt{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,s,o){let c=r[i+0],h=r[i+1],u=r[i+2],l=r[i+3];const f=a[s+0],d=a[s+1],v=a[s+2],p=a[s+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=u,e[t+3]=l;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=v,e[t+3]=p;return}if(l!==p||c!==f||h!==d||u!==v){let g=1-o;const m=c*f+h*d+u*v+l*p,w=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const E=Math.sqrt(_),D=Math.atan2(E,m*w);g=Math.sin(g*D)/E,o=Math.sin(o*D)/E}const S=o*w;if(c=c*g+f*S,h=h*g+d*S,u=u*g+v*S,l=l*g+p*S,g===1-o){const E=1/Math.sqrt(c*c+h*h+u*u+l*l);c*=E,h*=E,u*=E,l*=E}}e[t]=c,e[t+1]=h,e[t+2]=u,e[t+3]=l}static multiplyQuaternionsFlat(e,t,r,i,a,s){const o=r[i],c=r[i+1],h=r[i+2],u=r[i+3],l=a[s],f=a[s+1],d=a[s+2],v=a[s+3];return e[t]=o*v+u*l+c*d-h*f,e[t+1]=c*v+u*f+h*l-o*d,e[t+2]=h*v+u*d+o*f-c*l,e[t+3]=u*v-o*l-c*f-h*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,h=o(r/2),u=o(i/2),l=o(a/2),f=c(r/2),d=c(i/2),v=c(a/2);switch(s){case"XYZ":this._x=f*u*l+h*d*v,this._y=h*d*l-f*u*v,this._z=h*u*v+f*d*l,this._w=h*u*l-f*d*v;break;case"YXZ":this._x=f*u*l+h*d*v,this._y=h*d*l-f*u*v,this._z=h*u*v-f*d*l,this._w=h*u*l+f*d*v;break;case"ZXY":this._x=f*u*l-h*d*v,this._y=h*d*l+f*u*v,this._z=h*u*v+f*d*l,this._w=h*u*l-f*d*v;break;case"ZYX":this._x=f*u*l-h*d*v,this._y=h*d*l+f*u*v,this._z=h*u*v-f*d*l,this._w=h*u*l+f*d*v;break;case"YZX":this._x=f*u*l+h*d*v,this._y=h*d*l+f*u*v,this._z=h*u*v-f*d*l,this._w=h*u*l-f*d*v;break;case"XZY":this._x=f*u*l-h*d*v,this._y=h*d*l-f*u*v,this._z=h*u*v+f*d*l,this._w=h*u*l+f*d*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],a=t[8],s=t[1],o=t[5],c=t[9],h=t[2],u=t[6],l=t[10],f=r+o+l;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(a-h)*d,this._z=(s-i)*d}else if(r>o&&r>l){const d=2*Math.sqrt(1+r-o-l);this._w=(u-c)/d,this._x=.25*d,this._y=(i+s)/d,this._z=(a+h)/d}else if(o>l){const d=2*Math.sqrt(1+o-r-l);this._w=(a-h)/d,this._x=(i+s)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+l-r-o);this._w=(s-i)/d,this._x=(a+h)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,a=e._z,s=e._w,o=t._x,c=t._y,h=t._z,u=t._w;return this._x=r*u+s*o+i*h-a*c,this._y=i*u+s*c+a*o-r*h,this._z=a*u+s*h+r*c-i*o,this._w=s*u-r*o-i*c-a*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=i,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*s+t*this._w,this._x=d*r+t*this._x,this._y=d*i+t*this._y,this._z=d*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),l=Math.sin((1-t)*u)/h,f=Math.sin(t*u)/h;return this._w=s*l+this._w*f,this._x=r*l+this._x*f,this._y=i*l+this._y*f,this._z=a*l+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),r*Math.sin(a),r*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*i,this.y=a[1]*t+a[4]*r+a[7]*i,this.z=a[2]*t+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,a=e.x,s=e.y,o=e.z,c=e.w,h=c*t+s*i-o*r,u=c*r+o*t-a*i,l=c*i+a*r-s*t,f=-a*t-s*r-o*i;return this.x=h*c+f*-a+u*-o-l*-s,this.y=u*c+f*-s+l*-a-h*-o,this.z=l*c+f*-o+h*-s-u*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i,this.y=a[1]*t+a[5]*r+a[9]*i,this.z=a[2]*t+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=i*c-a*o,this.y=a*s-r*c,this.z=r*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fs.copy(this).projectOnVector(e),this.sub(Fs)}reflect(e){return this.sub(Fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fs=new ee,Pu=new Tr;class ki{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Vr.copy(e.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const a=i.attributes.position;for(let s=0,o=a.count;s<o;s++)On.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(On)}else i.boundingBox===null&&i.computeBoundingBox(),Vr.copy(i.boundingBox),Vr.applyMatrix4(e.matrixWorld),this.union(Vr)}const r=e.children;for(let i=0,a=r.length;i<a;i++)this.expandByObject(r[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wi),na.subVectors(this.max,wi),Wr.subVectors(e.a,wi),kr.subVectors(e.b,wi),Xr.subVectors(e.c,wi),Jn.subVectors(kr,Wr),Qn.subVectors(Xr,kr),mr.subVectors(Wr,Xr);let t=[0,-Jn.z,Jn.y,0,-Qn.z,Qn.y,0,-mr.z,mr.y,Jn.z,0,-Jn.x,Qn.z,0,-Qn.x,mr.z,0,-mr.x,-Jn.y,Jn.x,0,-Qn.y,Qn.x,0,-mr.y,mr.x,0];return!Rs(t,Wr,kr,Xr,na)||(t=[1,0,0,0,1,0,0,0,1],!Rs(t,Wr,kr,Xr,na))?!1:(ra.crossVectors(Jn,Qn),t=[ra.x,ra.y,ra.z],Rs(t,Wr,kr,Xr,na))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bn=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],On=new ee,Vr=new ki,Wr=new ee,kr=new ee,Xr=new ee,Jn=new ee,Qn=new ee,mr=new ee,wi=new ee,na=new ee,ra=new ee,gr=new ee;function Rs(n,e,t,r,i){for(let a=0,s=n.length-3;a<=s;a+=3){gr.fromArray(n,a);const o=i.x*Math.abs(gr.x)+i.y*Math.abs(gr.y)+i.z*Math.abs(gr.z),c=e.dot(gr),h=t.dot(gr),u=r.dot(gr);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const _d=new ki,Di=new ee,Ns=new ee;class Xi{constructor(e=new ee,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):_d.setFromPoints(e).getCenter(r);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Di,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ns.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(Ns)),this.expandByPoint(Di.copy(e.center).sub(Ns))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zn=new ee,Ls=new ee,ia=new ee,jn=new ee,Ps=new ee,aa=new ee,Is=new ee;class Fo{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){Ls.copy(e).add(t).multiplyScalar(.5),ia.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(Ls);const a=e.distanceTo(t)*.5,s=-this.direction.dot(ia),o=jn.dot(this.direction),c=-jn.dot(ia),h=jn.lengthSq(),u=Math.abs(1-s*s);let l,f,d,v;if(u>0)if(l=s*c-o,f=s*o-c,v=a*u,l>=0)if(f>=-v)if(f<=v){const p=1/u;l*=p,f*=p,d=l*(l+s*f+2*o)+f*(s*l+f+2*c)+h}else f=a,l=Math.max(0,-(s*f+o)),d=-l*l+f*(f+2*c)+h;else f=-a,l=Math.max(0,-(s*f+o)),d=-l*l+f*(f+2*c)+h;else f<=-v?(l=Math.max(0,-(-s*a+o)),f=l>0?-a:Math.min(Math.max(-a,-c),a),d=-l*l+f*(f+2*c)+h):f<=v?(l=0,f=Math.min(Math.max(-a,-c),a),d=f*(f+2*c)+h):(l=Math.max(0,-(s*a+o)),f=l>0?a:Math.min(Math.max(-a,-c),a),d=-l*l+f*(f+2*c)+h);else f=s>0?-a:a,l=Math.max(0,-(s*f+o)),d=-l*l+f*(f+2*c)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,l),i&&i.copy(Ls).addScaledVector(ia,f),d}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const r=zn.dot(this.direction),i=zn.dot(zn)-r*r,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=r-s,c=r+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,s,o,c;const h=1/this.direction.x,u=1/this.direction.y,l=1/this.direction.z,f=this.origin;return h>=0?(r=(e.min.x-f.x)*h,i=(e.max.x-f.x)*h):(r=(e.max.x-f.x)*h,i=(e.min.x-f.x)*h),u>=0?(a=(e.min.y-f.y)*u,s=(e.max.y-f.y)*u):(a=(e.max.y-f.y)*u,s=(e.min.y-f.y)*u),r>s||a>i||((a>r||isNaN(r))&&(r=a),(s<i||isNaN(i))&&(i=s),l>=0?(o=(e.min.z-f.z)*l,c=(e.max.z-f.z)*l):(o=(e.max.z-f.z)*l,c=(e.min.z-f.z)*l),r>c||o>i)||((o>r||r!==r)&&(r=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,r,i,a){Ps.subVectors(t,e),aa.subVectors(r,e),Is.crossVectors(Ps,aa);let s=this.direction.dot(Is),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;jn.subVectors(this.origin,e);const c=o*this.direction.dot(aa.crossVectors(jn,aa));if(c<0)return null;const h=o*this.direction.dot(Ps.cross(jn));if(h<0||c+h>s)return null;const u=-o*jn.dot(Is);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,t,r,i,a,s,o,c,h,u,l,f,d,v,p,g){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,a,s,o,c,h,u,l,f,d,v,p,g)}set(e,t,r,i,a,s,o,c,h,u,l,f,d,v,p,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=i,m[1]=a,m[5]=s,m[9]=o,m[13]=c,m[2]=h,m[6]=u,m[10]=l,m[14]=f,m[3]=d,m[7]=v,m[11]=p,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/$r.setFromMatrixColumn(e,0).length(),a=1/$r.setFromMatrixColumn(e,1).length(),s=1/$r.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),c=Math.cos(i),h=Math.sin(i),u=Math.cos(a),l=Math.sin(a);if(e.order==="XYZ"){const f=s*u,d=s*l,v=o*u,p=o*l;t[0]=c*u,t[4]=-c*l,t[8]=h,t[1]=d+v*h,t[5]=f-p*h,t[9]=-o*c,t[2]=p-f*h,t[6]=v+d*h,t[10]=s*c}else if(e.order==="YXZ"){const f=c*u,d=c*l,v=h*u,p=h*l;t[0]=f+p*o,t[4]=v*o-d,t[8]=s*h,t[1]=s*l,t[5]=s*u,t[9]=-o,t[2]=d*o-v,t[6]=p+f*o,t[10]=s*c}else if(e.order==="ZXY"){const f=c*u,d=c*l,v=h*u,p=h*l;t[0]=f-p*o,t[4]=-s*l,t[8]=v+d*o,t[1]=d+v*o,t[5]=s*u,t[9]=p-f*o,t[2]=-s*h,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const f=s*u,d=s*l,v=o*u,p=o*l;t[0]=c*u,t[4]=v*h-d,t[8]=f*h+p,t[1]=c*l,t[5]=p*h+f,t[9]=d*h-v,t[2]=-h,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const f=s*c,d=s*h,v=o*c,p=o*h;t[0]=c*u,t[4]=p-f*l,t[8]=v*l+d,t[1]=l,t[5]=s*u,t[9]=-o*u,t[2]=-h*u,t[6]=d*l+v,t[10]=f-p*l}else if(e.order==="XZY"){const f=s*c,d=s*h,v=o*c,p=o*h;t[0]=c*u,t[4]=-l,t[8]=h*u,t[1]=f*l+p,t[5]=s*u,t[9]=d*l-v,t[2]=v*l-d,t[6]=o*u,t[10]=p*l+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,Ed)}lookAt(e,t,r){const i=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),er.crossVectors(r,un),er.lengthSq()===0&&(Math.abs(r.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),er.crossVectors(r,un)),er.normalize(),sa.crossVectors(un,er),i[0]=er.x,i[4]=sa.x,i[8]=un.x,i[1]=er.y,i[5]=sa.y,i[9]=un.y,i[2]=er.z,i[6]=sa.z,i[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,a=this.elements,s=r[0],o=r[4],c=r[8],h=r[12],u=r[1],l=r[5],f=r[9],d=r[13],v=r[2],p=r[6],g=r[10],m=r[14],w=r[3],_=r[7],S=r[11],E=r[15],D=i[0],b=i[4],T=i[8],y=i[12],x=i[1],P=i[5],C=i[9],F=i[13],N=i[2],L=i[6],U=i[10],G=i[14],H=i[3],X=i[7],z=i[11],O=i[15];return a[0]=s*D+o*x+c*N+h*H,a[4]=s*b+o*P+c*L+h*X,a[8]=s*T+o*C+c*U+h*z,a[12]=s*y+o*F+c*G+h*O,a[1]=u*D+l*x+f*N+d*H,a[5]=u*b+l*P+f*L+d*X,a[9]=u*T+l*C+f*U+d*z,a[13]=u*y+l*F+f*G+d*O,a[2]=v*D+p*x+g*N+m*H,a[6]=v*b+p*P+g*L+m*X,a[10]=v*T+p*C+g*U+m*z,a[14]=v*y+p*F+g*G+m*O,a[3]=w*D+_*x+S*N+E*H,a[7]=w*b+_*P+S*L+E*X,a[11]=w*T+_*C+S*U+E*z,a[15]=w*y+_*F+S*G+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],a=e[12],s=e[1],o=e[5],c=e[9],h=e[13],u=e[2],l=e[6],f=e[10],d=e[14],v=e[3],p=e[7],g=e[11],m=e[15];return v*(+a*c*l-i*h*l-a*o*f+r*h*f+i*o*d-r*c*d)+p*(+t*c*d-t*h*f+a*s*f-i*s*d+i*h*u-a*c*u)+g*(+t*h*l-t*o*d-a*s*l+r*s*d+a*o*u-r*h*u)+m*(-i*o*u-t*c*l+t*o*f+i*s*l-r*s*f+r*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],h=e[7],u=e[8],l=e[9],f=e[10],d=e[11],v=e[12],p=e[13],g=e[14],m=e[15],w=l*g*h-p*f*h+p*c*d-o*g*d-l*c*m+o*f*m,_=v*f*h-u*g*h-v*c*d+s*g*d+u*c*m-s*f*m,S=u*p*h-v*l*h+v*o*d-s*p*d-u*o*m+s*l*m,E=v*l*c-u*p*c-v*o*f+s*p*f+u*o*g-s*l*g,D=t*w+r*_+i*S+a*E;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/D;return e[0]=w*b,e[1]=(p*f*a-l*g*a-p*i*d+r*g*d+l*i*m-r*f*m)*b,e[2]=(o*g*a-p*c*a+p*i*h-r*g*h-o*i*m+r*c*m)*b,e[3]=(l*c*a-o*f*a-l*i*h+r*f*h+o*i*d-r*c*d)*b,e[4]=_*b,e[5]=(u*g*a-v*f*a+v*i*d-t*g*d-u*i*m+t*f*m)*b,e[6]=(v*c*a-s*g*a-v*i*h+t*g*h+s*i*m-t*c*m)*b,e[7]=(s*f*a-u*c*a+u*i*h-t*f*h-s*i*d+t*c*d)*b,e[8]=S*b,e[9]=(v*l*a-u*p*a-v*r*d+t*p*d+u*r*m-t*l*m)*b,e[10]=(s*p*a-v*o*a+v*r*h-t*p*h-s*r*m+t*o*m)*b,e[11]=(u*o*a-s*l*a-u*r*h+t*l*h+s*r*d-t*o*d)*b,e[12]=E*b,e[13]=(u*p*i-v*l*i+v*r*f-t*p*f-u*r*g+t*l*g)*b,e[14]=(v*o*i-s*p*i-v*r*c+t*p*c+s*r*g-t*o*g)*b,e[15]=(s*l*i-u*o*i+u*r*c-t*l*c-s*r*f+t*o*f)*b,this}scale(e){const t=this.elements,r=e.x,i=e.y,a=e.z;return t[0]*=r,t[4]*=i,t[8]*=a,t[1]*=r,t[5]*=i,t[9]*=a,t[2]*=r,t[6]*=i,t[10]*=a,t[3]*=r,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),a=1-r,s=e.x,o=e.y,c=e.z,h=a*s,u=a*o;return this.set(h*s+r,h*o-i*c,h*c+i*o,0,h*o+i*c,u*o+r,u*c-i*s,0,h*c-i*o,u*c+i*s,a*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,a,s){return this.set(1,r,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,h=a+a,u=s+s,l=o+o,f=a*h,d=a*u,v=a*l,p=s*u,g=s*l,m=o*l,w=c*h,_=c*u,S=c*l,E=r.x,D=r.y,b=r.z;return i[0]=(1-(p+m))*E,i[1]=(d+S)*E,i[2]=(v-_)*E,i[3]=0,i[4]=(d-S)*D,i[5]=(1-(f+m))*D,i[6]=(g+w)*D,i[7]=0,i[8]=(v+_)*b,i[9]=(g-w)*b,i[10]=(1-(f+p))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let a=$r.set(i[0],i[1],i[2]).length();const s=$r.set(i[4],i[5],i[6]).length(),o=$r.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Mn.copy(this);const h=1/a,u=1/s,l=1/o;return Mn.elements[0]*=h,Mn.elements[1]*=h,Mn.elements[2]*=h,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=l,Mn.elements[9]*=l,Mn.elements[10]*=l,t.setFromRotationMatrix(Mn),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,i,a,s,o=Xn){const c=this.elements,h=2*a/(t-e),u=2*a/(r-i),l=(t+e)/(t-e),f=(r+i)/(r-i);let d,v;if(o===Xn)d=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===La)d=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=l,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,i,a,s,o=Xn){const c=this.elements,h=1/(t-e),u=1/(r-i),l=1/(s-a),f=(t+e)*h,d=(r+i)*u;let v,p;if(o===Xn)v=(s+a)*l,p=-2*l;else if(o===La)v=a*l,p=-1*l;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=p,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const $r=new ee,Mn=new Tt,xd=new ee(0,0,0),Ed=new ee(1,1,1),er=new ee,sa=new ee,un=new ee,Iu=new Tt,Uu=new Tr;class Ka{constructor(e=0,t=0,r=0,i=Ka.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],c=i[1],h=i[5],u=i[9],l=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-l,a),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-l,d),this._z=Math.atan2(-s,h)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,h));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-l,a)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ka.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yd=0;const Bu=new ee,qr=new Tr,Gn=new Tt,oa=new ee,bi=new ee,Md=new ee,Ad=new Tr,Ou=new ee(1,0,0),zu=new ee(0,1,0),Gu=new ee(0,0,1),Sd={type:"added"},Hu={type:"removed"};class Bt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bt.DEFAULT_UP.clone();const e=new ee,t=new Ka,r=new Tr,i=new ee(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Tt},normalMatrix:{value:new Ke}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Ou,e)}rotateY(e){return this.rotateOnAxis(zu,e)}rotateZ(e){return this.rotateOnAxis(Gu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ou,e)}translateY(e){return this.translateOnAxis(zu,e)}translateZ(e){return this.translateOnAxis(Gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?oa.copy(e):oa.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(bi,oa,this.up):Gn.lookAt(oa,bi,this.up),this.quaternion.setFromRotationMatrix(Gn),i&&(Gn.extractRotation(i.matrixWorld),qr.setFromRotationMatrix(Gn),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Hu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(r=r.concat(s))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,e,Md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bi,Ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const l=c[h];a(e.shapes,l)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(a(e.materials,this.material[c]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),h=s(e.textures),u=s(e.images),l=s(e.shapes),f=s(e.skeletons),d=s(e.animations),v=s(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),l.length>0&&(r.shapes=l),f.length>0&&(r.skeletons=f),d.length>0&&(r.animations=d),v.length>0&&(r.nodes=v)}return r.object=i,r;function s(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Bt.DEFAULT_UP=new ee(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new ee,Hn=new ee,Us=new ee,Vn=new ee,Yr=new ee,Zr=new ee,Vu=new ee,Bs=new ee,Os=new ee,zs=new ee;let ua=!1;class bn{constructor(e=new ee,t=new ee,r=new ee){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),An.subVectors(e,t),i.cross(An);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,r,i,a){An.subVectors(i,t),Hn.subVectors(r,t),Us.subVectors(e,t);const s=An.dot(An),o=An.dot(Hn),c=An.dot(Us),h=Hn.dot(Hn),u=Hn.dot(Us),l=s*h-o*o;if(l===0)return a.set(-2,-1,-1);const f=1/l,d=(h*c-o*u)*f,v=(s*u-o*c)*f;return a.set(1-d-v,v,d)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,Vn),Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getUV(e,t,r,i,a,s,o,c){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),this.getInterpolation(e,t,r,i,a,s,o,c)}static getInterpolation(e,t,r,i,a,s,o,c){return this.getBarycoord(e,t,r,i,Vn),c.setScalar(0),c.addScaledVector(a,Vn.x),c.addScaledVector(s,Vn.y),c.addScaledVector(o,Vn.z),c}static isFrontFacing(e,t,r,i){return An.subVectors(r,t),Hn.subVectors(e,t),An.cross(Hn).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),An.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,i,a){return ua===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ua=!0),bn.getInterpolation(e,this.a,this.b,this.c,t,r,i,a)}getInterpolation(e,t,r,i,a){return bn.getInterpolation(e,this.a,this.b,this.c,t,r,i,a)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,a=this.c;let s,o;Yr.subVectors(i,r),Zr.subVectors(a,r),Bs.subVectors(e,r);const c=Yr.dot(Bs),h=Zr.dot(Bs);if(c<=0&&h<=0)return t.copy(r);Os.subVectors(e,i);const u=Yr.dot(Os),l=Zr.dot(Os);if(u>=0&&l<=u)return t.copy(i);const f=c*l-u*h;if(f<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(r).addScaledVector(Yr,s);zs.subVectors(e,a);const d=Yr.dot(zs),v=Zr.dot(zs);if(v>=0&&d<=v)return t.copy(a);const p=d*h-c*v;if(p<=0&&h>=0&&v<=0)return o=h/(h-v),t.copy(r).addScaledVector(Zr,o);const g=u*v-d*l;if(g<=0&&l-u>=0&&d-v>=0)return Vu.subVectors(a,i),o=(l-u)/(l-u+(d-v)),t.copy(i).addScaledVector(Vu,o);const m=1/(g+p+f);return s=p*m,o=f*m,t.copy(r).addScaledVector(Yr,s).addScaledVector(Zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let wd=0;class lr extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=li,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fc,this.blendDst=Rc,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=to,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==li&&(r.blending=this.blending),this.side!==Zn&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=i(e.textures),s=i(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},la={h:0,s:0,l:0};function Gs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yn.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=yn.workingColorSpace){return this.r=e,this.g=t,this.b=r,yn.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=yn.workingColorSpace){if(e=ud(e,1),t=Vt(t,0,1),r=Vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=Gs(s,a,e+1/3),this.g=Gs(s,a,e),this.b=Gs(s,a,e-1/3)}return yn.toWorkingColorSpace(this,i),this}setStyle(e,t=qe){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qe){const r=qc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qe){return yn.fromWorkingColorSpace(zt.copy(this),e),Math.round(Vt(zt.r*255,0,255))*65536+Math.round(Vt(zt.g*255,0,255))*256+Math.round(Vt(zt.b*255,0,255))}getHexString(e=qe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yn.workingColorSpace){yn.fromWorkingColorSpace(zt.copy(this),t);const r=zt.r,i=zt.g,a=zt.b,s=Math.max(r,i,a),o=Math.min(r,i,a);let c,h;const u=(o+s)/2;if(o===s)c=0,h=0;else{const l=s-o;switch(h=u<=.5?l/(s+o):l/(2-s-o),s){case r:c=(i-a)/l+(i<a?6:0);break;case i:c=(a-r)/l+2;break;case a:c=(r-i)/l+4;break}c/=6}return e.h=c,e.s=h,e.l=u,e}getRGB(e,t=yn.workingColorSpace){return yn.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=qe){yn.fromWorkingColorSpace(zt.copy(this),e);const t=zt.r,r=zt.g,i=zt.b;return e!==qe?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Sn),Sn.h+=e,Sn.s+=t,Sn.l+=r,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Sn),e.getHSL(la);const r=Ds(Sn.h,la.h,t),i=Ds(Sn.s,la.s,t),a=Ds(Sn.l,la.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new rt;rt.NAMES=qc;class Ro extends lr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new ee,ca=new Je;class Mt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Fu,this.updateRange={offset:0,count:-1},this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ca.fromBufferAttribute(this,t),ca.applyMatrix3(e),this.setXY(t,ca.x,ca.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),r=on(r,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),r=on(r,this.array),i=on(i,this.array),a=on(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Yc extends Mt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Zc extends Mt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class En extends Mt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Dd=0;const dn=new Tt,Hs=new Bt,Kr=new ee,ln=new ki,Ti=new ki,Rt=new ee;class Nt extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vc(e)?Zc:Yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Ke().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,r){return dn.makeTranslation(e,t,r),this.applyMatrix4(dn),this}scale(e,t,r){return dn.makeScale(e,t,r),this.applyMatrix4(dn),this}lookAt(e){return Hs.lookAt(e),Hs.updateMatrix(),this.applyMatrix4(Hs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const t=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new En(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ki);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const a=t[r];ln.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(ln.min,Ti.min),ln.expandByPoint(Rt),Rt.addVectors(ln.max,Ti.max),ln.expandByPoint(Rt)):(ln.expandByPoint(Ti.min),ln.expandByPoint(Ti.max))}ln.getCenter(r);let i=0;for(let a=0,s=e.count;a<s;a++)Rt.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(Rt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Rt.fromBufferAttribute(o,h),c&&(Kr.fromBufferAttribute(e,h),Rt.add(Kr)),i=Math.max(i,r.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let x=0;x<o;x++)h[x]=new ee,u[x]=new ee;const l=new ee,f=new ee,d=new ee,v=new Je,p=new Je,g=new Je,m=new ee,w=new ee;function _(x,P,C){l.fromArray(i,x*3),f.fromArray(i,P*3),d.fromArray(i,C*3),v.fromArray(s,x*2),p.fromArray(s,P*2),g.fromArray(s,C*2),f.sub(l),d.sub(l),p.sub(v),g.sub(v);const F=1/(p.x*g.y-g.x*p.y);isFinite(F)&&(m.copy(f).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(F),w.copy(d).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(F),h[x].add(m),h[P].add(m),h[C].add(m),u[x].add(w),u[P].add(w),u[C].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:r.length}]);for(let x=0,P=S.length;x<P;++x){const C=S[x],F=C.start,N=C.count;for(let L=F,U=F+N;L<U;L+=3)_(r[L+0],r[L+1],r[L+2])}const E=new ee,D=new ee,b=new ee,T=new ee;function y(x){b.fromArray(a,x*3),T.copy(b);const P=h[x];E.copy(P),E.sub(b.multiplyScalar(b.dot(P))).normalize(),D.crossVectors(T,P);const F=D.dot(u[x])<0?-1:1;c[x*4]=E.x,c[x*4+1]=E.y,c[x*4+2]=E.z,c[x*4+3]=F}for(let x=0,P=S.length;x<P;++x){const C=S[x],F=C.start,N=C.count;for(let L=F,U=F+N;L<U;L+=3)y(r[L+0]),y(r[L+1]),y(r[L+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,d=r.count;f<d;f++)r.setXYZ(f,0,0,0);const i=new ee,a=new ee,s=new ee,o=new ee,c=new ee,h=new ee,u=new ee,l=new ee;if(e)for(let f=0,d=e.count;f<d;f+=3){const v=e.getX(f+0),p=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,v),a.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),u.subVectors(s,a),l.subVectors(i,a),u.cross(l),o.fromBufferAttribute(r,v),c.fromBufferAttribute(r,p),h.fromBufferAttribute(r,g),o.add(u),c.add(u),h.add(u),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(p,c.x,c.y,c.z),r.setXYZ(g,h.x,h.y,h.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),u.subVectors(s,a),l.subVectors(i,a),u.cross(l),r.setXYZ(f+0,u.x,u.y,u.z),r.setXYZ(f+1,u.x,u.y,u.z),r.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const h=o.array,u=o.itemSize,l=o.normalized,f=new h.constructor(c.length*u);let d=0,v=0;for(let p=0,g=c.length;p<g;p++){o.isInterleavedBufferAttribute?d=c[p]*o.data.stride+o.offset:d=c[p]*u;for(let m=0;m<u;m++)f[v++]=h[d++]}return new Mt(f,u,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,r=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=e(c,r);t.setAttribute(o,h)}const a=this.morphAttributes;for(const o in a){const c=[],h=a[o];for(let u=0,l=h.length;u<l;u++){const f=h[u],d=e(f,r);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const h=s[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const h=r[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let a=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let l=0,f=h.length;l<f;l++){const d=h[l];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(t))}const a=e.morphAttributes;for(const h in a){const u=[],l=a[h];for(let f=0,d=l.length;f<d;f++)u.push(l[f].clone(t));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let h=0,u=s.length;h<u;h++){const l=s[h];this.addGroup(l.start,l.count,l.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new Tt,vr=new Fo,fa=new Xi,ku=new ee,Jr=new ee,Qr=new ee,jr=new ee,Vs=new ee,ha=new ee,da=new Je,pa=new Je,ma=new Je,Xu=new ee,$u=new ee,qu=new ee,ga=new ee,va=new ee;class xn extends Bt{constructor(e=new Nt,t=new Ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){ha.set(0,0,0);for(let c=0,h=a.length;c<h;c++){const u=o[c],l=a[c];u!==0&&(Vs.fromBufferAttribute(l,e),s?ha.addScaledVector(Vs,u):ha.addScaledVector(Vs.sub(t),u))}t.add(ha)}return t}raycast(e,t){const r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),fa.copy(r.boundingSphere),fa.applyMatrix4(a),vr.copy(e.ray).recast(e.near),!(fa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(fa,ku)===null||vr.origin.distanceToSquared(ku)>(e.far-e.near)**2))&&(Wu.copy(a).invert(),vr.copy(e.ray).applyMatrix4(Wu),!(r.boundingBox!==null&&vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,vr)))}_computeIntersections(e,t,r){let i;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,h=a.attributes.uv,u=a.attributes.uv1,l=a.attributes.normal,f=a.groups,d=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,p=f.length;v<p;v++){const g=f[v],m=s[g.materialIndex],w=Math.max(g.start,d.start),_=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let S=w,E=_;S<E;S+=3){const D=o.getX(S),b=o.getX(S+1),T=o.getX(S+2);i=_a(this,m,e,r,h,u,l,D,b,T),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),p=Math.min(o.count,d.start+d.count);for(let g=v,m=p;g<m;g+=3){const w=o.getX(g),_=o.getX(g+1),S=o.getX(g+2);i=_a(this,s,e,r,h,u,l,w,_,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,p=f.length;v<p;v++){const g=f[v],m=s[g.materialIndex],w=Math.max(g.start,d.start),_=Math.min(c.count,Math.min(g.start+g.count,d.start+d.count));for(let S=w,E=_;S<E;S+=3){const D=S,b=S+1,T=S+2;i=_a(this,m,e,r,h,u,l,D,b,T),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const v=Math.max(0,d.start),p=Math.min(c.count,d.start+d.count);for(let g=v,m=p;g<m;g+=3){const w=g,_=g+1,S=g+2;i=_a(this,s,e,r,h,u,l,w,_,S),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function bd(n,e,t,r,i,a,s,o){let c;if(e.side===Qt?c=r.intersectTriangle(s,a,i,!0,o):c=r.intersectTriangle(i,a,s,e.side===Zn,o),c===null)return null;va.copy(o),va.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(va);return h<t.near||h>t.far?null:{distance:h,point:va.clone(),object:n}}function _a(n,e,t,r,i,a,s,o,c,h){n.getVertexPosition(o,Jr),n.getVertexPosition(c,Qr),n.getVertexPosition(h,jr);const u=bd(n,e,t,r,Jr,Qr,jr,ga);if(u){i&&(da.fromBufferAttribute(i,o),pa.fromBufferAttribute(i,c),ma.fromBufferAttribute(i,h),u.uv=bn.getInterpolation(ga,Jr,Qr,jr,da,pa,ma,new Je)),a&&(da.fromBufferAttribute(a,o),pa.fromBufferAttribute(a,c),ma.fromBufferAttribute(a,h),u.uv1=bn.getInterpolation(ga,Jr,Qr,jr,da,pa,ma,new Je),u.uv2=u.uv1),s&&(Xu.fromBufferAttribute(s,o),$u.fromBufferAttribute(s,c),qu.fromBufferAttribute(s,h),u.normal=bn.getInterpolation(ga,Jr,Qr,jr,Xu,$u,qu,new ee),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const l={a:o,b:c,c:h,normal:new ee,materialIndex:0};bn.getNormal(Jr,Qr,jr,l.normal),u.face=l}return u}class $i extends Nt{constructor(e=1,t=1,r=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const c=[],h=[],u=[],l=[];let f=0,d=0;v("z","y","x",-1,-1,r,t,e,s,a,0),v("z","y","x",1,-1,r,t,-e,s,a,1),v("x","z","y",1,1,e,r,t,i,s,2),v("x","z","y",1,-1,e,r,-t,i,s,3),v("x","y","z",1,-1,e,t,r,i,a,4),v("x","y","z",-1,-1,e,t,-r,i,a,5),this.setIndex(c),this.setAttribute("position",new En(h,3)),this.setAttribute("normal",new En(u,3)),this.setAttribute("uv",new En(l,2));function v(p,g,m,w,_,S,E,D,b,T,y){const x=S/b,P=E/T,C=S/2,F=E/2,N=D/2,L=b+1,U=T+1;let G=0,H=0;const X=new ee;for(let z=0;z<U;z++){const O=z*P-F;for(let W=0;W<L;W++){const K=W*x-C;X[p]=K*w,X[g]=O*_,X[m]=N,h.push(X.x,X.y,X.z),X[p]=0,X[g]=0,X[m]=D>0?1:-1,u.push(X.x,X.y,X.z),l.push(W/b),l.push(1-z/T),G+=1}}for(let z=0;z<T;z++)for(let O=0;O<b;O++){const W=f+O+L*z,K=f+O+L*(z+1),Z=f+(O+1)+L*(z+1),j=f+(O+1)+L*z;c.push(W,K,j),c.push(K,Z,j),H+=6}o.addGroup(d,H,y),d+=H,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mi(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function Yt(n){const e={};for(let t=0;t<n.length;t++){const r=mi(n[t]);for(const i in r)e[i]=r[i]}return e}function Td(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kc(n){return n.getRenderTarget()===null?n.outputColorSpace:In}const Cd={clone:mi,merge:Yt};var Fd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends lr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fd,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Td(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Jc extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends Jc{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oo*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,h=s.fullHeight;a+=s.offsetX*i/c,t-=s.offsetY*r/h,i*=s.width/c,r*=s.height/h}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ei=-90,ti=1;class Nd extends Bt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const i=new vn(ei,ti,e,t);i.layers=this.layers,this.add(i);const a=new vn(ei,ti,e,t);a.layers=this.layers,this.add(a);const s=new vn(ei,ti,e,t);s.layers=this.layers,this.add(s);const o=new vn(ei,ti,e,t);o.layers=this.layers,this.add(o);const c=new vn(ei,ti,e,t);c.layers=this.layers,this.add(c);const h=new vn(ei,ti,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,a,s,o,c]=t;for(const h of t)this.remove(h);if(e===Xn)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===La)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,s,o,c,h]=this.children,u=e.getRenderTarget(),l=e.toneMapping,f=e.xr.enabled;e.toneMapping=qn,e.xr.enabled=!1;const d=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,i),e.setRenderTarget(r,1),e.render(t,a),e.setRenderTarget(r,2),e.render(t,s),e.setRenderTarget(r,3),e.render(t,o),e.setRenderTarget(r,4),e.render(t,c),r.texture.generateMipmaps=d,e.setRenderTarget(r,5),e.render(t,h),e.setRenderTarget(u),e.toneMapping=l,e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}}class Qc extends jt{constructor(e,t,r,i,a,s,o,c,h,u){e=e!==void 0?e:[],t=t!==void 0?t:hi,super(e,t,r,i,a,s,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ld extends br{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];t.encoding!==void 0&&(Li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Sr?qe:wr),this.texture=new Qc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new $i(5,5,5),a=new Cr({name:"CubemapFromEquirect",uniforms:mi(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qt,blending:ar});a.uniforms.tEquirect.value=t;const s=new xn(i,a),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=gn),new Nd(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(a)}}const Ws=new ee,Pd=new ee,Id=new Ke;class xr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=Ws.subVectors(r,t).cross(Pd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ws),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Id.getNormalMatrix(e),i=this.coplanarPoint(Ws).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Xi,xa=new ee;class jc{constructor(e=new xr,t=new xr,r=new xr,i=new xr,a=new xr,s=new xr){this.planes=[e,t,r,i,a,s]}set(e,t,r,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xn){const r=this.planes,i=e.elements,a=i[0],s=i[1],o=i[2],c=i[3],h=i[4],u=i[5],l=i[6],f=i[7],d=i[8],v=i[9],p=i[10],g=i[11],m=i[12],w=i[13],_=i[14],S=i[15];if(r[0].setComponents(c-a,f-h,g-d,S-m).normalize(),r[1].setComponents(c+a,f+h,g+d,S+m).normalize(),r[2].setComponents(c+s,f+u,g+v,S+w).normalize(),r[3].setComponents(c-s,f-u,g-v,S-w).normalize(),r[4].setComponents(c-o,f-l,g-p,S-_).normalize(),t===Xn)r[5].setComponents(c+o,f+l,g+p,S+_).normalize();else if(t===La)r[5].setComponents(o,l,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){return _r.center.set(0,0,0),_r.radius=.7071067811865476,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(xa.x=i.normal.x>0?e.max.x:e.min.x,xa.y=i.normal.y>0?e.max.y:e.min.y,xa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(xa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ef(){let n=null,e=!1,t=null,r=null;function i(a,s){t(a,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Ud(n,e){const t=e.isWebGL2,r=new WeakMap;function i(h,u){const l=h.array,f=h.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,l,f),h.onUploadCallback();let v;if(l instanceof Float32Array)v=n.FLOAT;else if(l instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)v=n.SHORT;else if(l instanceof Uint32Array)v=n.UNSIGNED_INT;else if(l instanceof Int32Array)v=n.INT;else if(l instanceof Int8Array)v=n.BYTE;else if(l instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:v,bytesPerElement:l.BYTES_PER_ELEMENT,version:h.version}}function a(h,u,l){const f=u.array,d=u.updateRange;n.bindBuffer(l,h),d.count===-1?n.bufferSubData(l,0,f):(t?n.bufferSubData(l,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(l,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function s(h){return h.isInterleavedBufferAttribute&&(h=h.data),r.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=r.get(h);u&&(n.deleteBuffer(u.buffer),r.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const f=r.get(h);(!f||f.version<h.version)&&r.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const l=r.get(h);l===void 0?r.set(h,i(h,u)):l.version<h.version&&(a(l.buffer,h,u),l.version=h.version)}return{get:s,remove:o,update:c}}class Ja extends Nt{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const a=e/2,s=t/2,o=Math.floor(r),c=Math.floor(i),h=o+1,u=c+1,l=e/o,f=t/c,d=[],v=[],p=[],g=[];for(let m=0;m<u;m++){const w=m*f-s;for(let _=0;_<h;_++){const S=_*l-a;v.push(S,-w,0),p.push(0,0,1),g.push(_/o),g.push(1-m/c)}}for(let m=0;m<c;m++)for(let w=0;w<o;w++){const _=w+h*m,S=w+h*(m+1),E=w+1+h*(m+1),D=w+1+h*m;d.push(_,S,D),d.push(S,E,D)}this.setIndex(d),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(p,3)),this.setAttribute("uv",new En(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var Bd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Od=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ip=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",hp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ap=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Pp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ip=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Up=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Vp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Kp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ym=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Mm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Am=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Hm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Vm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ym=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Km=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,h0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:Bd,alphahash_pars_fragment:Od,alphamap_fragment:zd,alphamap_pars_fragment:Gd,alphatest_fragment:Hd,alphatest_pars_fragment:Vd,aomap_fragment:Wd,aomap_pars_fragment:kd,begin_vertex:Xd,beginnormal_vertex:$d,bsdfs:qd,iridescence_fragment:Yd,bumpmap_pars_fragment:Zd,clipping_planes_fragment:Kd,clipping_planes_pars_fragment:Jd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:jd,color_fragment:ep,color_pars_fragment:tp,color_pars_vertex:np,color_vertex:rp,common:ip,cube_uv_reflection_fragment:ap,defaultnormal_vertex:sp,displacementmap_pars_vertex:op,displacementmap_vertex:up,emissivemap_fragment:lp,emissivemap_pars_fragment:cp,colorspace_fragment:fp,colorspace_pars_fragment:hp,envmap_fragment:dp,envmap_common_pars_fragment:pp,envmap_pars_fragment:mp,envmap_pars_vertex:gp,envmap_physical_pars_fragment:Tp,envmap_vertex:vp,fog_vertex:_p,fog_pars_vertex:xp,fog_fragment:Ep,fog_pars_fragment:yp,gradientmap_pars_fragment:Mp,lightmap_fragment:Ap,lightmap_pars_fragment:Sp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Dp,lights_pars_begin:bp,lights_toon_fragment:Cp,lights_toon_pars_fragment:Fp,lights_phong_fragment:Rp,lights_phong_pars_fragment:Np,lights_physical_fragment:Lp,lights_physical_pars_fragment:Pp,lights_fragment_begin:Ip,lights_fragment_maps:Up,lights_fragment_end:Bp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:zp,logdepthbuf_pars_vertex:Gp,logdepthbuf_vertex:Hp,map_fragment:Vp,map_pars_fragment:Wp,map_particle_fragment:kp,map_particle_pars_fragment:Xp,metalnessmap_fragment:$p,metalnessmap_pars_fragment:qp,morphcolor_vertex:Yp,morphnormal_vertex:Zp,morphtarget_pars_vertex:Kp,morphtarget_vertex:Jp,normal_fragment_begin:Qp,normal_fragment_maps:jp,normal_pars_fragment:em,normal_pars_vertex:tm,normal_vertex:nm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:im,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:sm,iridescence_pars_fragment:om,opaque_fragment:um,packing:lm,premultiplied_alpha_fragment:cm,project_vertex:fm,dithering_fragment:hm,dithering_pars_fragment:dm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:vm,shadowmap_vertex:_m,shadowmask_pars_fragment:xm,skinbase_vertex:Em,skinning_pars_vertex:ym,skinning_vertex:Mm,skinnormal_vertex:Am,specularmap_fragment:Sm,specularmap_pars_fragment:wm,tonemapping_fragment:Dm,tonemapping_pars_fragment:bm,transmission_fragment:Tm,transmission_pars_fragment:Cm,uv_pars_fragment:Fm,uv_pars_vertex:Rm,uv_vertex:Nm,worldpos_vertex:Lm,background_vert:Pm,background_frag:Im,backgroundCube_vert:Um,backgroundCube_frag:Bm,cube_vert:Om,cube_frag:zm,depth_vert:Gm,depth_frag:Hm,distanceRGBA_vert:Vm,distanceRGBA_frag:Wm,equirect_vert:km,equirect_frag:Xm,linedashed_vert:$m,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:Zm,meshlambert_vert:Km,meshlambert_frag:Jm,meshmatcap_vert:Qm,meshmatcap_frag:jm,meshnormal_vert:e0,meshnormal_frag:t0,meshphong_vert:n0,meshphong_frag:r0,meshphysical_vert:i0,meshphysical_frag:a0,meshtoon_vert:s0,meshtoon_frag:o0,points_vert:u0,points_frag:l0,shadow_vert:c0,shadow_frag:f0,sprite_vert:h0,sprite_frag:d0},De={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ln={basic:{uniforms:Yt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Yt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new rt(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Yt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Yt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Yt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new rt(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Yt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Yt([De.points,De.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Yt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Yt([De.common,De.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Yt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Yt([De.sprite,De.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Yt([De.common,De.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Yt([De.lights,De.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Ln.physical={uniforms:Yt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Ea={r:0,b:0,g:0};function p0(n,e,t,r,i,a,s){const o=new rt(0);let c=a===!0?0:1,h,u,l=null,f=0,d=null;function v(g,m){let w=!1,_=m.isScene===!0?m.background:null;switch(_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_===null?p(o,c):_&&_.isColor&&(p(_,1),w=!0),n.xr.getEnvironmentBlendMode()){case"opaque":w=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,s),w=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,s),w=!0;break}(n.autoClear||w)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Za)?(u===void 0&&(u=new xn(new $i(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:mi(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,b,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=_.colorSpace!==qe,(l!==_||f!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,l=_,f=_.version,d=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new xn(new Ja(2,2),new Cr({name:"BackgroundMaterial",uniforms:mi(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=_.colorSpace!==qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(l!==_||f!==_.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,l=_,f=_.version,d=n.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function p(g,m){g.getRGB(Ea,Kc(n)),r.buffers.color.setClear(Ea.r,Ea.g,Ea.b,m,s)}return{getClearColor:function(){return o},setClearColor:function(g,m=1){o.set(g),c=m,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,p(o,c)},render:v}}function m0(n,e,t,r){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||a!==null,o={},c=g(null);let h=c,u=!1;function l(N,L,U,G,H){let X=!1;if(s){const z=p(G,U,L);h!==z&&(h=z,d(h.object)),X=m(N,G,U,H),X&&w(N,G,U,H)}else{const z=L.wireframe===!0;(h.geometry!==G.id||h.program!==U.id||h.wireframe!==z)&&(h.geometry=G.id,h.program=U.id,h.wireframe=z,X=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,T(N,L,U,G),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function f(){return r.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function d(N){return r.isWebGL2?n.bindVertexArray(N):a.bindVertexArrayOES(N)}function v(N){return r.isWebGL2?n.deleteVertexArray(N):a.deleteVertexArrayOES(N)}function p(N,L,U){const G=U.wireframe===!0;let H=o[N.id];H===void 0&&(H={},o[N.id]=H);let X=H[L.id];X===void 0&&(X={},H[L.id]=X);let z=X[G];return z===void 0&&(z=g(f()),X[G]=z),z}function g(N){const L=[],U=[],G=[];for(let H=0;H<i;H++)L[H]=0,U[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:G,object:N,attributes:{},index:null}}function m(N,L,U,G){const H=h.attributes,X=L.attributes;let z=0;const O=U.getAttributes();for(const W in O)if(O[W].location>=0){const Z=H[W];let j=X[W];if(j===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),Z===void 0||Z.attribute!==j||j&&Z.data!==j.data)return!0;z++}return h.attributesNum!==z||h.index!==G}function w(N,L,U,G){const H={},X=L.attributes;let z=0;const O=U.getAttributes();for(const W in O)if(O[W].location>=0){let Z=X[W];Z===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));const j={};j.attribute=Z,Z&&Z.data&&(j.data=Z.data),H[W]=j,z++}h.attributes=H,h.attributesNum=z,h.index=G}function _(){const N=h.newAttributes;for(let L=0,U=N.length;L<U;L++)N[L]=0}function S(N){E(N,0)}function E(N,L){const U=h.newAttributes,G=h.enabledAttributes,H=h.attributeDivisors;U[N]=1,G[N]===0&&(n.enableVertexAttribArray(N),G[N]=1),H[N]!==L&&((r.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,L),H[N]=L)}function D(){const N=h.newAttributes,L=h.enabledAttributes;for(let U=0,G=L.length;U<G;U++)L[U]!==N[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function b(N,L,U,G,H,X,z){z===!0?n.vertexAttribIPointer(N,L,U,H,X):n.vertexAttribPointer(N,L,U,G,H,X)}function T(N,L,U,G){if(r.isWebGL2===!1&&(N.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const H=G.attributes,X=U.getAttributes(),z=L.defaultAttributeValues;for(const O in X){const W=X[O];if(W.location>=0){let K=H[O];if(K===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(K=N.instanceColor)),K!==void 0){const Z=K.normalized,j=K.itemSize,re=t.get(K);if(re===void 0)continue;const oe=re.buffer,le=re.type,me=re.bytesPerElement,fe=r.isWebGL2===!0&&(le===n.INT||le===n.UNSIGNED_INT||K.gpuType===Pc);if(K.isInterleavedBufferAttribute){const pe=K.data,k=pe.stride,ye=K.offset;if(pe.isInstancedInterleavedBuffer){for(let he=0;he<W.locationSize;he++)E(W.location+he,pe.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let he=0;he<W.locationSize;he++)S(W.location+he);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let he=0;he<W.locationSize;he++)b(W.location+he,j/W.locationSize,le,Z,k*me,(ye+j/W.locationSize*he)*me,fe)}else{if(K.isInstancedBufferAttribute){for(let pe=0;pe<W.locationSize;pe++)E(W.location+pe,K.meshPerAttribute);N.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<W.locationSize;pe++)S(W.location+pe);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let pe=0;pe<W.locationSize;pe++)b(W.location+pe,j/W.locationSize,le,Z,j*me,j/W.locationSize*pe*me,fe)}}else if(z!==void 0){const Z=z[O];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(W.location,Z);break;case 3:n.vertexAttrib3fv(W.location,Z);break;case 4:n.vertexAttrib4fv(W.location,Z);break;default:n.vertexAttrib1fv(W.location,Z)}}}}D()}function y(){C();for(const N in o){const L=o[N];for(const U in L){const G=L[U];for(const H in G)v(G[H].object),delete G[H];delete L[U]}delete o[N]}}function x(N){if(o[N.id]===void 0)return;const L=o[N.id];for(const U in L){const G=L[U];for(const H in G)v(G[H].object),delete G[H];delete L[U]}delete o[N.id]}function P(N){for(const L in o){const U=o[L];if(U[N.id]===void 0)continue;const G=U[N.id];for(const H in G)v(G[H].object),delete G[H];delete U[N.id]}}function C(){F(),u=!0,h!==c&&(h=c,d(h.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:l,reset:C,resetDefaultState:F,dispose:y,releaseStatesOfGeometry:x,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:S,disableUnusedAttributes:D}}function g0(n,e,t,r){const i=r.isWebGL2;let a;function s(h){a=h}function o(h,u){n.drawArrays(a,h,u),t.update(u,a,1)}function c(h,u,l){if(l===0)return;let f,d;if(i)f=n,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](a,h,u,l),t.update(u,a,l)}this.setMode=s,this.render=o,this.renderInstances=c}function v0(n,e,t){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){if(b==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const h=s||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,l=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,S=s||e.has("OES_texture_float"),E=_&&S,D=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:u,maxTextures:l,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:g,maxVaryings:m,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:E,maxSamples:D}}function _0(n){const e=this;let t=null,r=0,i=!1,a=!1;const s=new xr,o=new Ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(l,f){const d=l.length!==0||f||r!==0||i;return i=f,r=l.length,d},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(l,f){t=u(l,f,0)},this.setState=function(l,f,d){const v=l.clippingPlanes,p=l.clipIntersection,g=l.clipShadows,m=n.get(l);if(!i||v===null||v.length===0||a&&!g)a?u(null):h();else{const w=a?0:r,_=w*4;let S=m.clippingState||null;c.value=S,S=u(v,f,_,d);for(let E=0;E!==_;++E)S[E]=t[E];m.clippingState=S,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(l,f,d,v){const p=l!==null?l.length:0;let g=null;if(p!==0){if(g=c.value,v!==!0||g===null){const m=d+p*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,S=d;_!==p;++_,S+=4)s.copy(l[_]).applyMatrix4(w,o),s.normal.toArray(g,S),g[S+3]=s.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}function x0(n){let e=new WeakMap;function t(s,o){return o===no?s.mapping=hi:o===ro&&(s.mapping=di),s}function r(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===no||o===ro)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const h=new Ld(c.height/2);return h.fromEquirectangularTexture(n,s),e.set(s,h),s.addEventListener("dispose",i),t(h.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class tf extends Jc{constructor(e=-1,t=1,r=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,s=a+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ai=4,Yu=[.125,.215,.35,.446,.526,.582],yr=20,ks=new tf,Zu=new rt;let Xs=null;const Er=(1+Math.sqrt(5))/2,ni=1/Er,Ku=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,Er,ni),new ee(0,Er,-ni),new ee(ni,0,Er),new ee(-ni,0,Er),new ee(Er,ni,0),new ee(-Er,ni,0)];class Ju{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Xs=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xs),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xs=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Ii,format:Fn,colorSpace:In,depthBuffer:!1},i=Qu(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=E0(a)),this._blurMaterial=y0(a,e,t)}return i}_compileMaterial(e){const t=new xn(this._lodPlanes[0],e);this._renderer.compile(t,ks)}_sceneToCubeUV(e,t,r,i){const o=new vn(90,1,t,r),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,l=u.autoClear,f=u.toneMapping;u.getClearColor(Zu),u.toneMapping=qn,u.autoClear=!1;const d=new Ro({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),v=new xn(new $i,d);let p=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,p=!0):(d.color.copy(Zu),p=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(o.up.set(0,c[m],0),o.lookAt(h[m],0,0)):w===1?(o.up.set(0,0,c[m]),o.lookAt(0,h[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,h[m]));const _=this._cubeSize;ya(i,w*_,m>2?_:0,_,_),u.setRenderTarget(i),p&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=l,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===hi||e.mapping===di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new xn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ya(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(s,ks)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Ku[(i-1)%Ku.length];this._blur(e,i-1,i,a,s)}t.autoClear=r}_blur(e,t,r,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",a),this._halfBlur(s,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,s,o){const c=this._renderer,h=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,l=new xn(this._lodPlanes[i],h),f=h.uniforms,d=this._sizeLods[r]-1,v=isFinite(a)?Math.PI/(2*d):2*Math.PI/(2*yr-1),p=a/v,g=isFinite(a)?1+Math.floor(u*p):yr;g>yr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${yr}`);const m=[];let w=0;for(let b=0;b<yr;++b){const T=b/p,y=Math.exp(-T*T/2);m.push(y),b===0?w+=y:b<g&&(w+=2*y)}for(let b=0;b<m.length;b++)m[b]=m[b]/w;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-r;const S=this._sizeLods[i],E=3*S*(i>_-ai?i-_+ai:0),D=4*(this._cubeSize-S);ya(t,E,D,3*S,2*S),c.setRenderTarget(t),c.render(l,ks)}}function E0(n){const e=[],t=[],r=[];let i=n;const a=n-ai+1+Yu.length;for(let s=0;s<a;s++){const o=Math.pow(2,i);t.push(o);let c=1/o;s>n-ai?c=Yu[s-n+ai-1]:s===0&&(c=0),r.push(c);const h=1/(o-2),u=-h,l=1+h,f=[u,u,l,u,l,l,u,u,l,l,u,l],d=6,v=6,p=3,g=2,m=1,w=new Float32Array(p*v*d),_=new Float32Array(g*v*d),S=new Float32Array(m*v*d);for(let D=0;D<d;D++){const b=D%3*2/3-1,T=D>2?0:-1,y=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];w.set(y,p*v*D),_.set(f,g*v*D);const x=[D,D,D,D,D,D];S.set(x,m*v*D)}const E=new Nt;E.setAttribute("position",new Mt(w,p)),E.setAttribute("uv",new Mt(_,g)),E.setAttribute("faceIndex",new Mt(S,m)),e.push(E),i>ai&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Qu(n,e,t){const r=new br(n,e,t);return r.texture.mapping=Za,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ya(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function y0(n,e,t){const r=new Float32Array(yr),i=new ee(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ju(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function el(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:No(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function No(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M0(n){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const c=o.mapping,h=c===no||c===ro,u=c===hi||c===di;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let l=e.get(o);return t===null&&(t=new Ju(n)),l=h?t.fromEquirectangular(o,l):t.fromCubemap(o,l),e.set(o,l),l.texture}else{if(e.has(o))return e.get(o).texture;{const l=o.image;if(h&&l&&l.height>0||u&&l&&i(l)){t===null&&(t=new Ju(n));const f=h?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function i(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function a(o){const c=o.target;c.removeEventListener("dispose",a);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function A0(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const i=t(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function S0(n,e,t,r){const i={},a=new WeakMap;function s(l){const f=l.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const p=f.morphAttributes[v];for(let g=0,m=p.length;g<m;g++)e.remove(p[g])}f.removeEventListener("dispose",s),delete i[f.id];const d=a.get(f);d&&(e.remove(d),a.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(l,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function c(l){const f=l.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const d=l.morphAttributes;for(const v in d){const p=d[v];for(let g=0,m=p.length;g<m;g++)e.update(p[g],n.ARRAY_BUFFER)}}function h(l){const f=[],d=l.index,v=l.attributes.position;let p=0;if(d!==null){const w=d.array;p=d.version;for(let _=0,S=w.length;_<S;_+=3){const E=w[_+0],D=w[_+1],b=w[_+2];f.push(E,D,D,b,b,E)}}else{const w=v.array;p=v.version;for(let _=0,S=w.length/3-1;_<S;_+=3){const E=_+0,D=_+1,b=_+2;f.push(E,D,D,b,b,E)}}const g=new(Vc(f)?Zc:Yc)(f,1);g.version=p;const m=a.get(l);m&&e.remove(m),a.set(l,g)}function u(l){const f=a.get(l);if(f){const d=l.index;d!==null&&f.version<d.version&&h(l)}else h(l);return a.get(l)}return{get:o,update:c,getWireframeAttribute:u}}function w0(n,e,t,r){const i=r.isWebGL2;let a;function s(f){a=f}let o,c;function h(f){o=f.type,c=f.bytesPerElement}function u(f,d){n.drawElements(a,d,o,f*c),t.update(d,a,1)}function l(f,d,v){if(v===0)return;let p,g;if(i)p=n,g="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,d,o,f*c,v),t.update(d,a,v)}this.setMode=s,this.setIndex=h,this.render=u,this.renderInstances=l}function D0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function b0(n,e){return n[0]-e[0]}function T0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function C0(n,e,t){const r={},i=new Float32Array(8),a=new WeakMap,s=new It,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,l){const f=h.morphTargetInfluences;if(e.isWebGL2===!0){const v=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=v!==void 0?v.length:0;let g=a.get(u);if(g===void 0||g.count!==p){let L=function(){F.dispose(),a.delete(u),u.removeEventListener("dispose",L)};var d=L;g!==void 0&&g.texture.dispose();const _=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,D=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let y=0;_===!0&&(y=1),S===!0&&(y=2),E===!0&&(y=3);let x=u.attributes.position.count*y,P=1;x>e.maxTextureSize&&(P=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const C=new Float32Array(x*P*4*p),F=new Xc(C,x,P,p);F.type=rr,F.needsUpdate=!0;const N=y*4;for(let U=0;U<p;U++){const G=D[U],H=b[U],X=T[U],z=x*P*4*U;for(let O=0;O<G.count;O++){const W=O*N;_===!0&&(s.fromBufferAttribute(G,O),C[z+W+0]=s.x,C[z+W+1]=s.y,C[z+W+2]=s.z,C[z+W+3]=0),S===!0&&(s.fromBufferAttribute(H,O),C[z+W+4]=s.x,C[z+W+5]=s.y,C[z+W+6]=s.z,C[z+W+7]=0),E===!0&&(s.fromBufferAttribute(X,O),C[z+W+8]=s.x,C[z+W+9]=s.y,C[z+W+10]=s.z,C[z+W+11]=X.itemSize===4?s.w:1)}}g={count:p,texture:F,size:new Je(x,P)},a.set(u,g),u.addEventListener("dispose",L)}let m=0;for(let _=0;_<f.length;_++)m+=f[_];const w=u.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",w),l.getUniforms().setValue(n,"morphTargetInfluences",f),l.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const v=f===void 0?0:f.length;let p=r[u.id];if(p===void 0||p.length!==v){p=[];for(let S=0;S<v;S++)p[S]=[S,0];r[u.id]=p}for(let S=0;S<v;S++){const E=p[S];E[0]=S,E[1]=f[S]}p.sort(T0);for(let S=0;S<8;S++)S<v&&p[S][1]?(o[S][0]=p[S][0],o[S][1]=p[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(b0);const g=u.morphAttributes.position,m=u.morphAttributes.normal;let w=0;for(let S=0;S<8;S++){const E=o[S],D=E[0],b=E[1];D!==Number.MAX_SAFE_INTEGER&&b?(g&&u.getAttribute("morphTarget"+S)!==g[D]&&u.setAttribute("morphTarget"+S,g[D]),m&&u.getAttribute("morphNormal"+S)!==m[D]&&u.setAttribute("morphNormal"+S,m[D]),i[S]=b,w+=b):(g&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),i[S]=0)}const _=u.morphTargetsRelative?1:1-w;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:c}}function F0(n,e,t,r){let i=new WeakMap;function a(c){const h=r.render.frame,u=c.geometry,l=e.get(c,u);if(i.get(l)!==h&&(e.update(l),i.set(l,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==h&&(f.update(),i.set(f,h))}return l}function s(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:s}}const nf=new jt,rf=new Xc,af=new vd,sf=new Qc,tl=[],nl=[],rl=new Float32Array(16),il=new Float32Array(9),al=new Float32Array(4);function xi(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let a=tl[i];if(a===void 0&&(a=new Float32Array(i),tl[i]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Ct(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Ft(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Qa(n,e){let t=nl[e];t===void 0&&(t=new Int32Array(e),nl[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function R0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function N0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2fv(this.addr,e),Ft(t,e)}}function L0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;n.uniform3fv(this.addr,e),Ft(t,e)}}function P0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4fv(this.addr,e),Ft(t,e)}}function I0(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ct(t,r))return;al.set(r),n.uniformMatrix2fv(this.addr,!1,al),Ft(t,r)}}function U0(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ct(t,r))return;il.set(r),n.uniformMatrix3fv(this.addr,!1,il),Ft(t,r)}}function B0(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ct(t,r))return;rl.set(r),n.uniformMatrix4fv(this.addr,!1,rl),Ft(t,r)}}function O0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2iv(this.addr,e),Ft(t,e)}}function G0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3iv(this.addr,e),Ft(t,e)}}function H0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4iv(this.addr,e),Ft(t,e)}}function V0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function W0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;n.uniform2uiv(this.addr,e),Ft(t,e)}}function k0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;n.uniform3uiv(this.addr,e),Ft(t,e)}}function X0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;n.uniform4uiv(this.addr,e),Ft(t,e)}}function $0(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2D(e||nf,i)}function q0(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||af,i)}function Y0(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||sf,i)}function Z0(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||rf,i)}function K0(n){switch(n){case 5126:return R0;case 35664:return N0;case 35665:return L0;case 35666:return P0;case 35674:return I0;case 35675:return U0;case 35676:return B0;case 5124:case 35670:return O0;case 35667:case 35671:return z0;case 35668:case 35672:return G0;case 35669:case 35673:return H0;case 5125:return V0;case 36294:return W0;case 36295:return k0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return $0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return Y0;case 36289:case 36303:case 36311:case 36292:return Z0}}function J0(n,e){n.uniform1fv(this.addr,e)}function Q0(n,e){const t=xi(e,this.size,2);n.uniform2fv(this.addr,t)}function j0(n,e){const t=xi(e,this.size,3);n.uniform3fv(this.addr,t)}function eg(n,e){const t=xi(e,this.size,4);n.uniform4fv(this.addr,t)}function tg(n,e){const t=xi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ng(n,e){const t=xi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rg(n,e){const t=xi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ig(n,e){n.uniform1iv(this.addr,e)}function ag(n,e){n.uniform2iv(this.addr,e)}function sg(n,e){n.uniform3iv(this.addr,e)}function og(n,e){n.uniform4iv(this.addr,e)}function ug(n,e){n.uniform1uiv(this.addr,e)}function lg(n,e){n.uniform2uiv(this.addr,e)}function cg(n,e){n.uniform3uiv(this.addr,e)}function fg(n,e){n.uniform4uiv(this.addr,e)}function hg(n,e,t){const r=this.cache,i=e.length,a=Qa(t,i);Ct(r,a)||(n.uniform1iv(this.addr,a),Ft(r,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||nf,a[s])}function dg(n,e,t){const r=this.cache,i=e.length,a=Qa(t,i);Ct(r,a)||(n.uniform1iv(this.addr,a),Ft(r,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||af,a[s])}function pg(n,e,t){const r=this.cache,i=e.length,a=Qa(t,i);Ct(r,a)||(n.uniform1iv(this.addr,a),Ft(r,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||sf,a[s])}function mg(n,e,t){const r=this.cache,i=e.length,a=Qa(t,i);Ct(r,a)||(n.uniform1iv(this.addr,a),Ft(r,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||rf,a[s])}function gg(n){switch(n){case 5126:return J0;case 35664:return Q0;case 35665:return j0;case 35666:return eg;case 35674:return tg;case 35675:return ng;case 35676:return rg;case 5124:case 35670:return ig;case 35667:case 35671:return ag;case 35668:case 35672:return sg;case 35669:case 35673:return og;case 5125:return ug;case 36294:return lg;case 36295:return cg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return dg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}class vg{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=K0(t.type)}}class _g{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=gg(t.type)}}class xg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,t[o.id],r)}}}const $s=/(\w+)(\])?(\[|\.)?/g;function sl(n,e){n.seq.push(e),n.map[e.id]=e}function Eg(n,e,t){const r=n.name,i=r.length;for($s.lastIndex=0;;){const a=$s.exec(r),s=$s.lastIndex;let o=a[1];const c=a[2]==="]",h=a[3];if(c&&(o=o|0),h===void 0||h==="["&&s+2===i){sl(t,h===void 0?new vg(o,n,e):new _g(o,n,e));break}else{let l=t.map[o];l===void 0&&(l=new xg(o),sl(t,l)),t=l}}}class Ca{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const a=e.getActiveUniform(t,i),s=e.getUniformLocation(t,a.name);Eg(a,s,this)}}setValue(e,t,r,i){const a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&r.push(s)}return r}}function ol(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}let yg=0;function Mg(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=i;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function Ag(n){switch(n){case In:return["Linear","( value )"];case qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function ul(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+Mg(n.getShaderSource(e),s)}else return i}function Sg(n,e){const t=Ag(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wg(n,e){let t;switch(e){case Ih:t="Linear";break;case Uh:t="Reinhard";break;case Bh:t="OptimizedCineon";break;case Oh:t="ACESFilmic";break;case zh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Dg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ni).join(`
`)}function bg(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Tg(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const a=n.getActiveAttrib(e,i),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Ni(n){return n!==""}function ll(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function lo(n){return n.replace(Cg,Rg)}const Fg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rg(n,e){let t=$e[e];if(t===void 0){const r=Fg.get(e);if(r!==void 0)t=$e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return lo(t)}const Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(n){return n.replace(Ng,Lg)}function Lg(n,e,t,r){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function hl(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Cc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Ig(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hi:case di:e="ENVMAP_TYPE_CUBE";break;case Za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ug(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case di:e="ENVMAP_MODE_REFRACTION";break}return e}function Bg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Nc:e="ENVMAP_BLENDING_MULTIPLY";break;case Lh:e="ENVMAP_BLENDING_MIX";break;case Ph:e="ENVMAP_BLENDING_ADD";break}return e}function Og(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function zg(n,e,t,r){const i=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Pg(t),h=Ig(t),u=Ug(t),l=Bg(t),f=Og(t),d=t.isWebGL2?"":Dg(t),v=bg(a),p=i.createProgram();let g,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ni).join(`
`),g.length>0&&(g+=`
`),m=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ni).join(`
`),m.length>0&&(m+=`
`)):(g=[hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),m=[d,hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMap?"#define "+l:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?$e.tonemapping_pars_fragment:"",t.toneMapping!==qn?wg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Sg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),s=lo(s),s=ll(s,t),s=cl(s,t),o=lo(o),o=ll(o,t),o=cl(o,t),s=fl(s),o=fl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=w+g+s,S=w+m+o,E=ol(i,i.VERTEX_SHADER,_),D=ol(i,i.FRAGMENT_SHADER,S);if(i.attachShader(p,E),i.attachShader(p,D),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),n.debug.checkShaderErrors){const y=i.getProgramInfoLog(p).trim(),x=i.getShaderInfoLog(E).trim(),P=i.getShaderInfoLog(D).trim();let C=!0,F=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(C=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,p,E,D);else{const N=ul(i,E,"vertex"),L=ul(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+N+`
`+L)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(x===""||P==="")&&(F=!1);F&&(this.diagnostics={runnable:C,programLog:y,vertexShader:{log:x,prefix:g},fragmentShader:{log:P,prefix:m}})}i.deleteShader(E),i.deleteShader(D);let b;this.getUniforms=function(){return b===void 0&&(b=new Ca(i,p)),b};let T;return this.getAttributes=function(){return T===void 0&&(T=Tg(i,p)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yg++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=D,this}let Gg=0;class Hg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Vg(e),t.set(e,r)),r}}class Vg{constructor(e){this.id=Gg++,this.code=e,this.usedTimes=0}}function Wg(n,e,t,r,i,a,s){const o=new $c,c=new Hg,h=[],u=i.isWebGL2,l=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return y===0?"uv":`uv${y}`}function g(y,x,P,C,F){const N=C.fog,L=F.geometry,U=y.isMeshStandardMaterial?C.environment:null,G=(y.isMeshStandardMaterial?t:e).get(y.envMap||U),H=G&&G.mapping===Za?G.image.height:null,X=v[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,O=z!==void 0?z.length:0;let W=0;L.morphAttributes.position!==void 0&&(W=1),L.morphAttributes.normal!==void 0&&(W=2),L.morphAttributes.color!==void 0&&(W=3);let K,Z,j,re;if(X){const Xt=Ln[X];K=Xt.vertexShader,Z=Xt.fragmentShader}else K=y.vertexShader,Z=y.fragmentShader,c.update(y),j=c.getVertexShaderID(y),re=c.getFragmentShaderID(y);const oe=n.getRenderTarget(),le=F.isInstancedMesh===!0,me=!!y.map,fe=!!y.matcap,pe=!!G,k=!!y.aoMap,ye=!!y.lightMap,he=!!y.bumpMap,Me=!!y.normalMap,Ee=!!y.displacementMap,Ie=!!y.emissiveMap,Te=!!y.metalnessMap,be=!!y.roughnessMap,Pe=y.anisotropy>0,je=y.clearcoat>0,et=y.iridescence>0,A=y.sheen>0,M=y.transmission>0,I=Pe&&!!y.anisotropyMap,q=je&&!!y.clearcoatMap,Q=je&&!!y.clearcoatNormalMap,R=je&&!!y.clearcoatRoughnessMap,J=et&&!!y.iridescenceMap,Y=et&&!!y.iridescenceThicknessMap,V=A&&!!y.sheenColorMap,ce=A&&!!y.sheenRoughnessMap,ve=!!y.specularMap,ae=!!y.specularColorMap,we=!!y.specularIntensityMap,Se=M&&!!y.transmissionMap,Fe=M&&!!y.thicknessMap,Ne=!!y.gradientMap,$=!!y.alphaMap,_e=y.alphaTest>0,ie=!!y.alphaHash,ge=!!y.extensions,xe=!!L.attributes.uv1,Xe=!!L.attributes.uv2,Qe=!!L.attributes.uv3;return{isWebGL2:u,shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:K,fragmentShader:Z,defines:y.defines,customVertexShaderID:j,customFragmentShaderID:re,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,instancing:le,instancingColor:le&&F.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:In,map:me,matcap:fe,envMap:pe,envMapMode:pe&&G.mapping,envMapCubeUVHeight:H,aoMap:k,lightMap:ye,bumpMap:he,normalMap:Me,displacementMap:f&&Ee,emissiveMap:Ie,normalMapObjectSpace:Me&&y.normalMapType===Qh,normalMapTangentSpace:Me&&y.normalMapType===Co,metalnessMap:Te,roughnessMap:be,anisotropy:Pe,anisotropyMap:I,clearcoat:je,clearcoatMap:q,clearcoatNormalMap:Q,clearcoatRoughnessMap:R,iridescence:et,iridescenceMap:J,iridescenceThicknessMap:Y,sheen:A,sheenColorMap:V,sheenRoughnessMap:ce,specularMap:ve,specularColorMap:ae,specularIntensityMap:we,transmission:M,transmissionMap:Se,thicknessMap:Fe,gradientMap:Ne,opaque:y.transparent===!1&&y.blending===li,alphaMap:$,alphaTest:_e,alphaHash:ie,combine:y.combine,mapUv:me&&p(y.map.channel),aoMapUv:k&&p(y.aoMap.channel),lightMapUv:ye&&p(y.lightMap.channel),bumpMapUv:he&&p(y.bumpMap.channel),normalMapUv:Me&&p(y.normalMap.channel),displacementMapUv:Ee&&p(y.displacementMap.channel),emissiveMapUv:Ie&&p(y.emissiveMap.channel),metalnessMapUv:Te&&p(y.metalnessMap.channel),roughnessMapUv:be&&p(y.roughnessMap.channel),anisotropyMapUv:I&&p(y.anisotropyMap.channel),clearcoatMapUv:q&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Q&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:V&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:ce&&p(y.sheenRoughnessMap.channel),specularMapUv:ve&&p(y.specularMap.channel),specularColorMapUv:ae&&p(y.specularColorMap.channel),specularIntensityMapUv:we&&p(y.specularIntensityMap.channel),transmissionMapUv:Se&&p(y.transmissionMap.channel),thicknessMapUv:Fe&&p(y.thicknessMap.channel),alphaMapUv:$&&p(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Me||Pe),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:xe,vertexUv2s:Xe,vertexUv3s:Qe,pointsUvs:F.isPoints===!0&&!!L.attributes.uv&&(me||$),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:l,skinning:F.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:W,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:qn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===_n,flipSided:y.side===Qt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ge&&y.extensions.derivatives===!0,extensionFragDepth:ge&&y.extensions.fragDepth===!0,extensionDrawBuffers:ge&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ge&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||r.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(w(x,y),_(x,y),x.push(n.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function w(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function _(y,x){o.disableAll(),x.isWebGL2&&o.enable(0),x.supportsVertexTextures&&o.enable(1),x.instancing&&o.enable(2),x.instancingColor&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.useLegacyLights&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),y.push(o.mask)}function S(y){const x=v[y.type];let P;if(x){const C=Ln[x];P=Cd.clone(C.uniforms)}else P=y.uniforms;return P}function E(y,x){let P;for(let C=0,F=h.length;C<F;C++){const N=h[C];if(N.cacheKey===x){P=N,++P.usedTimes;break}}return P===void 0&&(P=new zg(n,x,y,a),h.push(P)),P}function D(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function b(y){c.remove(y)}function T(){c.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:E,releaseProgram:D,releaseShaderCache:b,programs:h,dispose:T}}function kg(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function r(a,s,o){n.get(a)[s]=o}function i(){n=new WeakMap}return{get:e,remove:t,update:r,dispose:i}}function Xg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pl(){const n=[];let e=0;const t=[],r=[],i=[];function a(){e=0,t.length=0,r.length=0,i.length=0}function s(l,f,d,v,p,g){let m=n[e];return m===void 0?(m={id:l.id,object:l,geometry:f,material:d,groupOrder:v,renderOrder:l.renderOrder,z:p,group:g},n[e]=m):(m.id=l.id,m.object=l,m.geometry=f,m.material=d,m.groupOrder=v,m.renderOrder=l.renderOrder,m.z=p,m.group=g),e++,m}function o(l,f,d,v,p,g){const m=s(l,f,d,v,p,g);d.transmission>0?r.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(l,f,d,v,p,g){const m=s(l,f,d,v,p,g);d.transmission>0?r.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function h(l,f){t.length>1&&t.sort(l||Xg),r.length>1&&r.sort(f||dl),i.length>1&&i.sort(f||dl)}function u(){for(let l=e,f=n.length;l<f;l++){const d=n[l];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:r,transparent:i,init:a,push:o,unshift:c,finish:u,sort:h}}function $g(){let n=new WeakMap;function e(r,i){const a=n.get(r);let s;return a===void 0?(s=new pl,n.set(r,[s])):i>=a.length?(s=new pl,a.push(s)):s=a[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function qg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new rt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function Yg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Zg=0;function Kg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Jg(n,e){const t=new qg,r=Yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new ee);const a=new ee,s=new Tt,o=new Tt;function c(u,l){let f=0,d=0,v=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let p=0,g=0,m=0,w=0,_=0,S=0,E=0,D=0,b=0,T=0;u.sort(Kg);const y=l===!0?Math.PI:1;for(let P=0,C=u.length;P<C;P++){const F=u[P],N=F.color,L=F.intensity,U=F.distance,G=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)f+=N.r*L*y,d+=N.g*L*y,v+=N.b*L*y;else if(F.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(F.sh.coefficients[H],L);else if(F.isDirectionalLight){const H=t.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity*y),F.castShadow){const X=F.shadow,z=r.get(F);z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.directionalShadow[p]=z,i.directionalShadowMap[p]=G,i.directionalShadowMatrix[p]=F.shadow.matrix,S++}i.directional[p]=H,p++}else if(F.isSpotLight){const H=t.get(F);H.position.setFromMatrixPosition(F.matrixWorld),H.color.copy(N).multiplyScalar(L*y),H.distance=U,H.coneCos=Math.cos(F.angle),H.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),H.decay=F.decay,i.spot[m]=H;const X=F.shadow;if(F.map&&(i.spotLightMap[b]=F.map,b++,X.updateMatrices(F),F.castShadow&&T++),i.spotLightMatrix[m]=X.matrix,F.castShadow){const z=r.get(F);z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.spotShadow[m]=z,i.spotShadowMap[m]=G,D++}m++}else if(F.isRectAreaLight){const H=t.get(F);H.color.copy(N).multiplyScalar(L),H.halfWidth.set(F.width*.5,0,0),H.halfHeight.set(0,F.height*.5,0),i.rectArea[w]=H,w++}else if(F.isPointLight){const H=t.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity*y),H.distance=F.distance,H.decay=F.decay,F.castShadow){const X=F.shadow,z=r.get(F);z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=F.shadow.matrix,E++}i.point[g]=H,g++}else if(F.isHemisphereLight){const H=t.get(F);H.skyColor.copy(F.color).multiplyScalar(L*y),H.groundColor.copy(F.groundColor).multiplyScalar(L*y),i.hemi[_]=H,_++}}w>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=v;const x=i.hash;(x.directionalLength!==p||x.pointLength!==g||x.spotLength!==m||x.rectAreaLength!==w||x.hemiLength!==_||x.numDirectionalShadows!==S||x.numPointShadows!==E||x.numSpotShadows!==D||x.numSpotMaps!==b)&&(i.directional.length=p,i.spot.length=m,i.rectArea.length=w,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=D+b-T,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=T,x.directionalLength=p,x.pointLength=g,x.spotLength=m,x.rectAreaLength=w,x.hemiLength=_,x.numDirectionalShadows=S,x.numPointShadows=E,x.numSpotShadows=D,x.numSpotMaps=b,i.version=Zg++)}function h(u,l){let f=0,d=0,v=0,p=0,g=0;const m=l.matrixWorldInverse;for(let w=0,_=u.length;w<_;w++){const S=u[w];if(S.isDirectionalLight){const E=i.directional[f];E.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),f++}else if(S.isSpotLight){const E=i.spot[v];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(m),v++}else if(S.isRectAreaLight){const E=i.rectArea[p];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),E.halfWidth.set(S.width*.5,0,0),E.halfHeight.set(0,S.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),p++}else if(S.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(S.matrixWorld),E.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const E=i.hemi[g];E.direction.setFromMatrixPosition(S.matrixWorld),E.direction.transformDirection(m),g++}}}return{setup:c,setupView:h,state:i}}function ml(n,e){const t=new Jg(n,e),r=[],i=[];function a(){r.length=0,i.length=0}function s(l){r.push(l)}function o(l){i.push(l)}function c(l){t.setup(r,l)}function h(l){t.setupView(r,l)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:t},setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o}}function Qg(n,e){let t=new WeakMap;function r(a,s=0){const o=t.get(a);let c;return o===void 0?(c=new ml(n,e),t.set(a,[c])):s>=o.length?(c=new ml(n,e),o.push(c)):c=o[s],c}function i(){t=new WeakMap}return{get:r,dispose:i}}class jg extends lr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ev extends lr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rv(n,e,t){let r=new jc;const i=new Je,a=new Je,s=new It,o=new jg({depthPacking:Jh}),c=new ev,h={},u=t.maxTextureSize,l={[Zn]:Qt,[Qt]:Zn,[_n]:_n},f=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:tv,fragmentShader:nv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const v=new Nt;v.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new xn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let m=this.type;this.render=function(E,D,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const T=n.getRenderTarget(),y=n.getActiveCubeFace(),x=n.getActiveMipmapLevel(),P=n.state;P.setBlending(ar),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const C=m!==kn&&this.type===kn,F=m===kn&&this.type!==kn;for(let N=0,L=E.length;N<L;N++){const U=E[N],G=U.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const H=G.getFrameExtents();if(i.multiply(H),a.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/H.x),i.x=a.x*H.x,G.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/H.y),i.y=a.y*H.y,G.mapSize.y=a.y)),G.map===null||C===!0||F===!0){const z=this.type!==kn?{minFilter:Zt,magFilter:Zt}:{};G.map!==null&&G.map.dispose(),G.map=new br(i.x,i.y,z),G.map.texture.name=U.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const X=G.getViewportCount();for(let z=0;z<X;z++){const O=G.getViewport(z);s.set(a.x*O.x,a.y*O.y,a.x*O.z,a.y*O.w),P.viewport(s),G.updateMatrices(U,z),r=G.getFrustum(),S(D,b,G.camera,U,this.type)}G.isPointLightShadow!==!0&&this.type===kn&&w(G,b),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(T,y,x)};function w(E,D){const b=e.update(p);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new br(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(D,null,b,f,p,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(D,null,b,d,p,null)}function _(E,D,b,T){let y=null;const x=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(x!==void 0)y=x;else if(y=b.isPointLight===!0?c:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const P=y.uuid,C=D.uuid;let F=h[P];F===void 0&&(F={},h[P]=F);let N=F[C];N===void 0&&(N=y.clone(),F[C]=N),y=N}if(y.visible=D.visible,y.wireframe=D.wireframe,T===kn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:l[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const P=n.properties.get(y);P.light=b}return y}function S(E,D,b,T,y){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===kn)&&(!E.frustumCulled||r.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const C=e.update(E),F=E.material;if(Array.isArray(F)){const N=C.groups;for(let L=0,U=N.length;L<U;L++){const G=N[L],H=F[G.materialIndex];if(H&&H.visible){const X=_(E,H,T,y);n.renderBufferDirect(b,null,C,X,E,G)}}}else if(F.visible){const N=_(E,F,T,y);n.renderBufferDirect(b,null,C,N,E,null)}}const P=E.children;for(let C=0,F=P.length;C<F;C++)S(P[C],D,b,T,y)}}function iv(n,e,t){const r=t.isWebGL2;function i(){let $=!1;const _e=new It;let ie=null;const ge=new It(0,0,0,0);return{setMask:function(xe){ie!==xe&&!$&&(n.colorMask(xe,xe,xe,xe),ie=xe)},setLocked:function(xe){$=xe},setClear:function(xe,Xe,Qe,ft,Xt){Xt===!0&&(xe*=ft,Xe*=ft,Qe*=ft),_e.set(xe,Xe,Qe,ft),ge.equals(_e)===!1&&(n.clearColor(xe,Xe,Qe,ft),ge.copy(_e))},reset:function(){$=!1,ie=null,ge.set(-1,0,0,0)}}}function a(){let $=!1,_e=null,ie=null,ge=null;return{setTest:function(xe){xe?oe(n.DEPTH_TEST):le(n.DEPTH_TEST)},setMask:function(xe){_e!==xe&&!$&&(n.depthMask(xe),_e=xe)},setFunc:function(xe){if(ie!==xe){switch(xe){case Dh:n.depthFunc(n.NEVER);break;case bh:n.depthFunc(n.ALWAYS);break;case Th:n.depthFunc(n.LESS);break;case to:n.depthFunc(n.LEQUAL);break;case Ch:n.depthFunc(n.EQUAL);break;case Fh:n.depthFunc(n.GEQUAL);break;case Rh:n.depthFunc(n.GREATER);break;case Nh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=xe}},setLocked:function(xe){$=xe},setClear:function(xe){ge!==xe&&(n.clearDepth(xe),ge=xe)},reset:function(){$=!1,_e=null,ie=null,ge=null}}}function s(){let $=!1,_e=null,ie=null,ge=null,xe=null,Xe=null,Qe=null,ft=null,Xt=null;return{setTest:function(ot){$||(ot?oe(n.STENCIL_TEST):le(n.STENCIL_TEST))},setMask:function(ot){_e!==ot&&!$&&(n.stencilMask(ot),_e=ot)},setFunc:function(ot,fn,Lt){(ie!==ot||ge!==fn||xe!==Lt)&&(n.stencilFunc(ot,fn,Lt),ie=ot,ge=fn,xe=Lt)},setOp:function(ot,fn,Lt){(Xe!==ot||Qe!==fn||ft!==Lt)&&(n.stencilOp(ot,fn,Lt),Xe=ot,Qe=fn,ft=Lt)},setLocked:function(ot){$=ot},setClear:function(ot){Xt!==ot&&(n.clearStencil(ot),Xt=ot)},reset:function(){$=!1,_e=null,ie=null,ge=null,xe=null,Xe=null,Qe=null,ft=null,Xt=null}}}const o=new i,c=new a,h=new s,u=new WeakMap,l=new WeakMap;let f={},d={},v=new WeakMap,p=[],g=null,m=!1,w=null,_=null,S=null,E=null,D=null,b=null,T=null,y=!1,x=null,P=null,C=null,F=null,N=null;const L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,G=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),U=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),U=G>=2);let X=null,z={};const O=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),K=new It().fromArray(O),Z=new It().fromArray(W);function j($,_e,ie,ge){const xe=new Uint8Array(4),Xe=n.createTexture();n.bindTexture($,Xe),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qe=0;Qe<ie;Qe++)r&&($===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY)?n.texImage3D(_e,0,n.RGBA,1,1,ge,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(_e+Qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return Xe}const re={};re[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(re[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),oe(n.DEPTH_TEST),c.setFunc(to),Ee(!1),Ie(eu),oe(n.CULL_FACE),he(ar);function oe($){f[$]!==!0&&(n.enable($),f[$]=!0)}function le($){f[$]!==!1&&(n.disable($),f[$]=!1)}function me($,_e){return d[$]!==_e?(n.bindFramebuffer($,_e),d[$]=_e,r&&($===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=_e),$===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=_e)),!0):!1}function fe($,_e){let ie=p,ge=!1;if($)if(ie=v.get(_e),ie===void 0&&(ie=[],v.set(_e,ie)),$.isWebGLMultipleRenderTargets){const xe=$.texture;if(ie.length!==xe.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let Xe=0,Qe=xe.length;Xe<Qe;Xe++)ie[Xe]=n.COLOR_ATTACHMENT0+Xe;ie.length=xe.length,ge=!0}}else ie[0]!==n.COLOR_ATTACHMENT0&&(ie[0]=n.COLOR_ATTACHMENT0,ge=!0);else ie[0]!==n.BACK&&(ie[0]=n.BACK,ge=!0);ge&&(t.isWebGL2?n.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function pe($){return g!==$?(n.useProgram($),g=$,!0):!1}const k={[ii]:n.FUNC_ADD,[mh]:n.FUNC_SUBTRACT,[gh]:n.FUNC_REVERSE_SUBTRACT};if(r)k[iu]=n.MIN,k[au]=n.MAX;else{const $=e.get("EXT_blend_minmax");$!==null&&(k[iu]=$.MIN_EXT,k[au]=$.MAX_EXT)}const ye={[vh]:n.ZERO,[_h]:n.ONE,[xh]:n.SRC_COLOR,[Fc]:n.SRC_ALPHA,[wh]:n.SRC_ALPHA_SATURATE,[Ah]:n.DST_COLOR,[yh]:n.DST_ALPHA,[Eh]:n.ONE_MINUS_SRC_COLOR,[Rc]:n.ONE_MINUS_SRC_ALPHA,[Sh]:n.ONE_MINUS_DST_COLOR,[Mh]:n.ONE_MINUS_DST_ALPHA};function he($,_e,ie,ge,xe,Xe,Qe,ft){if($===ar){m===!0&&(le(n.BLEND),m=!1);return}if(m===!1&&(oe(n.BLEND),m=!0),$!==ph){if($!==w||ft!==y){if((_!==ii||D!==ii)&&(n.blendEquation(n.FUNC_ADD),_=ii,D=ii),ft)switch($){case li:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.ONE,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case li:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case tu:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case nu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ru:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}S=null,E=null,b=null,T=null,w=$,y=ft}return}xe=xe||_e,Xe=Xe||ie,Qe=Qe||ge,(_e!==_||xe!==D)&&(n.blendEquationSeparate(k[_e],k[xe]),_=_e,D=xe),(ie!==S||ge!==E||Xe!==b||Qe!==T)&&(n.blendFuncSeparate(ye[ie],ye[ge],ye[Xe],ye[Qe]),S=ie,E=ge,b=Xe,T=Qe),w=$,y=!1}function Me($,_e){$.side===_n?le(n.CULL_FACE):oe(n.CULL_FACE);let ie=$.side===Qt;_e&&(ie=!ie),Ee(ie),$.blending===li&&$.transparent===!1?he(ar):he($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),o.setMask($.colorWrite);const ge=$.stencilWrite;h.setTest(ge),ge&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),be($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee($){x!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),x=$)}function Ie($){$!==fh?(oe(n.CULL_FACE),$!==P&&($===eu?n.cullFace(n.BACK):$===hh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):le(n.CULL_FACE),P=$}function Te($){$!==C&&(U&&n.lineWidth($),C=$)}function be($,_e,ie){$?(oe(n.POLYGON_OFFSET_FILL),(F!==_e||N!==ie)&&(n.polygonOffset(_e,ie),F=_e,N=ie)):le(n.POLYGON_OFFSET_FILL)}function Pe($){$?oe(n.SCISSOR_TEST):le(n.SCISSOR_TEST)}function je($){$===void 0&&($=n.TEXTURE0+L-1),X!==$&&(n.activeTexture($),X=$)}function et($,_e,ie){ie===void 0&&(X===null?ie=n.TEXTURE0+L-1:ie=X);let ge=z[ie];ge===void 0&&(ge={type:void 0,texture:void 0},z[ie]=ge),(ge.type!==$||ge.texture!==_e)&&(X!==ie&&(n.activeTexture(ie),X=ie),n.bindTexture($,_e||re[$]),ge.type=$,ge.texture=_e)}function A(){const $=z[X];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function M(){try{n.compressedTexImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function I(){try{n.compressedTexImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function q(){try{n.texSubImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Q(){try{n.texSubImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function R(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function J(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Y(){try{n.texStorage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function V(){try{n.texStorage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ve(){try{n.texImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ae($){K.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),K.copy($))}function we($){Z.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),Z.copy($))}function Se($,_e){let ie=l.get(_e);ie===void 0&&(ie=new WeakMap,l.set(_e,ie));let ge=ie.get($);ge===void 0&&(ge=n.getUniformBlockIndex(_e,$.name),ie.set($,ge))}function Fe($,_e){const ge=l.get(_e).get($);u.get(_e)!==ge&&(n.uniformBlockBinding(_e,ge,$.__bindingPointIndex),u.set(_e,ge))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),r===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},X=null,z={},d={},v=new WeakMap,p=[],g=null,m=!1,w=null,_=null,S=null,E=null,D=null,b=null,T=null,y=!1,x=null,P=null,C=null,F=null,N=null,K.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:oe,disable:le,bindFramebuffer:me,drawBuffers:fe,useProgram:pe,setBlending:he,setMaterial:Me,setFlipSided:Ee,setCullFace:Ie,setLineWidth:Te,setPolygonOffset:be,setScissorTest:Pe,activeTexture:je,bindTexture:et,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:I,texImage2D:ce,texImage3D:ve,updateUBOMapping:Se,uniformBlockBinding:Fe,texStorage2D:Y,texStorage3D:V,texSubImage2D:q,texSubImage3D:Q,compressedTexSubImage2D:R,compressedTexSubImage3D:J,scissor:ae,viewport:we,reset:Ne}}function av(n,e,t,r,i,a,s){const o=i.isWebGL2,c=i.maxTextures,h=i.maxCubemapSize,u=i.maxTextureSize,l=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let p;const g=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(A,M){return m?new OffscreenCanvas(A,M):Pa("canvas")}function _(A,M,I,q){let Q=1;if((A.width>q||A.height>q)&&(Q=q/Math.max(A.width,A.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const R=M?uo:Math.floor,J=R(Q*A.width),Y=R(Q*A.height);p===void 0&&(p=w(J,Y));const V=I?w(J,Y):p;return V.width=J,V.height=Y,V.getContext("2d").drawImage(A,0,0,J,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+J+"x"+Y+")."),V}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Nu(A.width)&&Nu(A.height)}function E(A){return o?!1:A.wrapS!==Cn||A.wrapT!==Cn||A.minFilter!==Zt&&A.minFilter!==gn}function D(A,M){return A.generateMipmaps&&M&&A.minFilter!==Zt&&A.minFilter!==gn}function b(A){n.generateMipmap(A)}function T(A,M,I,q,Q=!1){if(o===!1)return M;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let R=M;return M===n.RED&&(I===n.FLOAT&&(R=n.R32F),I===n.HALF_FLOAT&&(R=n.R16F),I===n.UNSIGNED_BYTE&&(R=n.R8)),M===n.RG&&(I===n.FLOAT&&(R=n.RG32F),I===n.HALF_FLOAT&&(R=n.RG16F),I===n.UNSIGNED_BYTE&&(R=n.RG8)),M===n.RGBA&&(I===n.FLOAT&&(R=n.RGBA32F),I===n.HALF_FLOAT&&(R=n.RGBA16F),I===n.UNSIGNED_BYTE&&(R=q===qe&&Q===!1?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(R=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(R=n.RGB5_A1)),(R===n.R16F||R===n.R32F||R===n.RG16F||R===n.RG32F||R===n.RGBA16F||R===n.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function y(A,M,I){return D(A,I)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==gn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function x(A){return A===Zt||A===su||A===_s?n.NEAREST:n.LINEAR}function P(A){const M=A.target;M.removeEventListener("dispose",P),F(M),M.isVideoTexture&&v.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),L(M)}function F(A){const M=r.get(A);if(M.__webglInit===void 0)return;const I=A.source,q=g.get(I);if(q){const Q=q[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(A),Object.keys(q).length===0&&g.delete(I)}r.remove(A)}function N(A){const M=r.get(A);n.deleteTexture(M.__webglTexture);const I=A.source,q=g.get(I);delete q[M.__cacheKey],s.memory.textures--}function L(A){const M=A.texture,I=r.get(A),q=r.get(M);if(q.__webglTexture!==void 0&&(n.deleteTexture(q.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)n.deleteFramebuffer(I.__webglFramebuffer[Q]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[Q]);else{if(n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let Q=0;Q<I.__webglColorRenderbuffer.length;Q++)I.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[Q]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,R=M.length;Q<R;Q++){const J=r.get(M[Q]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),s.memory.textures--),r.remove(M[Q])}r.remove(M),r.remove(A)}let U=0;function G(){U=0}function H(){const A=U;return A>=c&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+c),U+=1,A}function X(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function z(A,M){const I=r.get(A);if(A.isVideoTexture&&je(A),A.isRenderTargetTexture===!1&&A.version>0&&I.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(I,A,M);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+M)}function O(A,M){const I=r.get(A);if(A.version>0&&I.__version!==A.version){me(I,A,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+M)}function W(A,M){const I=r.get(A);if(A.version>0&&I.__version!==A.version){me(I,A,M);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+M)}function K(A,M){const I=r.get(A);if(A.version>0&&I.__version!==A.version){fe(I,A,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+M)}const Z={[io]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[ao]:n.MIRRORED_REPEAT},j={[Zt]:n.NEAREST,[su]:n.NEAREST_MIPMAP_NEAREST,[_s]:n.NEAREST_MIPMAP_LINEAR,[gn]:n.LINEAR,[Gh]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},re={[ed]:n.NEVER,[od]:n.ALWAYS,[td]:n.LESS,[rd]:n.LEQUAL,[nd]:n.EQUAL,[sd]:n.GEQUAL,[id]:n.GREATER,[ad]:n.NOTEQUAL};function oe(A,M,I){if(I?(n.texParameteri(A,n.TEXTURE_WRAP_S,Z[M.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,Z[M.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,Z[M.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,j[M.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,j[M.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(M.wrapS!==Cn||M.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,x(M.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,x(M.minFilter)),M.minFilter!==Zt&&M.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Zt||M.minFilter!==_s&&M.minFilter!==Pi||M.type===rr&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ii&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||r.get(M).__currentAnisotropy)&&(n.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy)}}function le(A,M){let I=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));const q=M.source;let Q=g.get(q);Q===void 0&&(Q={},g.set(q,Q));const R=X(M);if(R!==A.__cacheKey){Q[R]===void 0&&(Q[R]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,I=!0),Q[R].usedTimes++;const J=Q[A.__cacheKey];J!==void 0&&(Q[A.__cacheKey].usedTimes--,J.usedTimes===0&&N(M)),A.__cacheKey=R,A.__webglTexture=Q[R].texture}return I}function me(A,M,I){let q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=n.TEXTURE_3D);const Q=le(A,M),R=M.source;t.bindTexture(q,A.__webglTexture,n.TEXTURE0+I);const J=r.get(R);if(R.version!==J.__version||Q===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Y=E(M)&&S(M.image)===!1;let V=_(M.image,Y,!1,u);V=et(M,V);const ce=S(V)||o,ve=a.convert(M.format,M.colorSpace);let ae=a.convert(M.type),we=T(M.internalFormat,ve,ae,M.colorSpace);oe(q,M,ce);let Se;const Fe=M.mipmaps,Ne=o&&M.isVideoTexture!==!0,$=J.__version===void 0||Q===!0,_e=y(M,V,ce);if(M.isDepthTexture)we=n.DEPTH_COMPONENT,o?M.type===rr?we=n.DEPTH_COMPONENT32F:M.type===nr?we=n.DEPTH_COMPONENT24:M.type===Mr?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:M.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Ar&&we===n.DEPTH_COMPONENT&&M.type!==To&&M.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=nr,ae=a.convert(M.type)),M.format===pi&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,M.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Mr,ae=a.convert(M.type))),$&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,we,V.width,V.height):t.texImage2D(n.TEXTURE_2D,0,we,V.width,V.height,0,ve,ae,null));else if(M.isDataTexture)if(Fe.length>0&&ce){Ne&&$&&t.texStorage2D(n.TEXTURE_2D,_e,we,Fe[0].width,Fe[0].height);for(let ie=0,ge=Fe.length;ie<ge;ie++)Se=Fe[ie],Ne?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Se.width,Se.height,ve,ae,Se.data):t.texImage2D(n.TEXTURE_2D,ie,we,Se.width,Se.height,0,ve,ae,Se.data);M.generateMipmaps=!1}else Ne?($&&t.texStorage2D(n.TEXTURE_2D,_e,we,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,V.width,V.height,ve,ae,V.data)):t.texImage2D(n.TEXTURE_2D,0,we,V.width,V.height,0,ve,ae,V.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&$&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,we,Fe[0].width,Fe[0].height,V.depth);for(let ie=0,ge=Fe.length;ie<ge;ie++)Se=Fe[ie],M.format!==Fn?ve!==null?Ne?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,V.depth,ve,Se.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,we,Se.width,Se.height,V.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,Se.width,Se.height,V.depth,ve,ae,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,we,Se.width,Se.height,V.depth,0,ve,ae,Se.data)}else{Ne&&$&&t.texStorage2D(n.TEXTURE_2D,_e,we,Fe[0].width,Fe[0].height);for(let ie=0,ge=Fe.length;ie<ge;ie++)Se=Fe[ie],M.format!==Fn?ve!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,we,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,Se.width,Se.height,ve,ae,Se.data):t.texImage2D(n.TEXTURE_2D,ie,we,Se.width,Se.height,0,ve,ae,Se.data)}else if(M.isDataArrayTexture)Ne?($&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,we,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,V.width,V.height,V.depth,ve,ae,V.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,V.width,V.height,V.depth,0,ve,ae,V.data);else if(M.isData3DTexture)Ne?($&&t.texStorage3D(n.TEXTURE_3D,_e,we,V.width,V.height,V.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,V.width,V.height,V.depth,ve,ae,V.data)):t.texImage3D(n.TEXTURE_3D,0,we,V.width,V.height,V.depth,0,ve,ae,V.data);else if(M.isFramebufferTexture){if($)if(Ne)t.texStorage2D(n.TEXTURE_2D,_e,we,V.width,V.height);else{let ie=V.width,ge=V.height;for(let xe=0;xe<_e;xe++)t.texImage2D(n.TEXTURE_2D,xe,we,ie,ge,0,ve,ae,null),ie>>=1,ge>>=1}}else if(Fe.length>0&&ce){Ne&&$&&t.texStorage2D(n.TEXTURE_2D,_e,we,Fe[0].width,Fe[0].height);for(let ie=0,ge=Fe.length;ie<ge;ie++)Se=Fe[ie],Ne?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ve,ae,Se):t.texImage2D(n.TEXTURE_2D,ie,we,ve,ae,Se);M.generateMipmaps=!1}else Ne?($&&t.texStorage2D(n.TEXTURE_2D,_e,we,V.width,V.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,ae,V)):t.texImage2D(n.TEXTURE_2D,0,we,ve,ae,V);D(M,ce)&&b(q),J.__version=R.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function fe(A,M,I){if(M.image.length!==6)return;const q=le(A,M),Q=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+I);const R=r.get(Q);if(Q.version!==R.__version||q===!0){t.activeTexture(n.TEXTURE0+I),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const J=M.isCompressedTexture||M.image[0].isCompressedTexture,Y=M.image[0]&&M.image[0].isDataTexture,V=[];for(let ie=0;ie<6;ie++)!J&&!Y?V[ie]=_(M.image[ie],!1,!0,h):V[ie]=Y?M.image[ie].image:M.image[ie],V[ie]=et(M,V[ie]);const ce=V[0],ve=S(ce)||o,ae=a.convert(M.format,M.colorSpace),we=a.convert(M.type),Se=T(M.internalFormat,ae,we,M.colorSpace),Fe=o&&M.isVideoTexture!==!0,Ne=R.__version===void 0||q===!0;let $=y(M,ce,ve);oe(n.TEXTURE_CUBE_MAP,M,ve);let _e;if(J){Fe&&Ne&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$,Se,ce.width,ce.height);for(let ie=0;ie<6;ie++){_e=V[ie].mipmaps;for(let ge=0;ge<_e.length;ge++){const xe=_e[ge];M.format!==Fn?ae!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,xe.width,xe.height,ae,xe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Se,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,0,0,xe.width,xe.height,ae,we,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge,Se,xe.width,xe.height,0,ae,we,xe.data)}}}else{_e=M.mipmaps,Fe&&Ne&&(_e.length>0&&$++,t.texStorage2D(n.TEXTURE_CUBE_MAP,$,Se,V[0].width,V[0].height));for(let ie=0;ie<6;ie++)if(Y){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,V[ie].width,V[ie].height,ae,we,V[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Se,V[ie].width,V[ie].height,0,ae,we,V[ie].data);for(let ge=0;ge<_e.length;ge++){const Xe=_e[ge].image[ie].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,Xe.width,Xe.height,ae,we,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Se,Xe.width,Xe.height,0,ae,we,Xe.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ae,we,V[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Se,ae,we,V[ie]);for(let ge=0;ge<_e.length;ge++){const xe=_e[ge];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,0,0,ae,we,xe.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge+1,Se,ae,we,xe.image[ie])}}}D(M,ve)&&b(n.TEXTURE_CUBE_MAP),R.__version=Q.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pe(A,M,I,q,Q){const R=a.convert(I.format,I.colorSpace),J=a.convert(I.type),Y=T(I.internalFormat,R,J,I.colorSpace);r.get(M).__hasExternalTextures||(Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,Y,M.width,M.height,M.depth,0,R,J,null):t.texImage2D(Q,0,Y,M.width,M.height,0,R,J,null)),t.bindFramebuffer(n.FRAMEBUFFER,A),Pe(M)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,r.get(I).__webglTexture,0,be(M)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,r.get(I).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(A,M,I){if(n.bindRenderbuffer(n.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let q=n.DEPTH_COMPONENT16;if(I||Pe(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===rr?q=n.DEPTH_COMPONENT32F:Q.type===nr&&(q=n.DEPTH_COMPONENT24));const R=be(M);Pe(M)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,R,q,M.width,M.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,R,q,M.width,M.height)}else n.renderbufferStorage(n.RENDERBUFFER,q,M.width,M.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const q=be(M);I&&Pe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,M.width,M.height):Pe(M)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{const q=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<q.length;Q++){const R=q[Q],J=a.convert(R.format,R.colorSpace),Y=a.convert(R.type),V=T(R.internalFormat,J,Y,R.colorSpace),ce=be(M);I&&Pe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,V,M.width,M.height):Pe(M)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,V,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,V,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);const q=r.get(M.depthTexture).__webglTexture,Q=be(M);if(M.depthTexture.format===Ar)Pe(M)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(M.depthTexture.format===pi)Pe(M)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function he(A){const M=r.get(A),I=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");ye(M.__webglFramebuffer,A)}else if(I){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]=n.createRenderbuffer(),k(M.__webglDepthbuffer[q],A,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=n.createRenderbuffer(),k(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(A,M,I){const q=r.get(A);M!==void 0&&pe(q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),I!==void 0&&he(A)}function Ee(A){const M=A.texture,I=r.get(A),q=r.get(M);A.addEventListener("dispose",C),A.isWebGLMultipleRenderTargets!==!0&&(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=M.version,s.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,R=A.isWebGLMultipleRenderTargets===!0,J=S(A)||o;if(Q){I.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)I.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(I.__webglFramebuffer=n.createFramebuffer(),R)if(i.drawBuffers){const Y=A.texture;for(let V=0,ce=Y.length;V<ce;V++){const ve=r.get(Y[V]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Pe(A)===!1){const Y=R?M:[M];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let V=0;V<Y.length;V++){const ce=Y[V];I.__webglColorRenderbuffer[V]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[V]);const ve=a.convert(ce.format,ce.colorSpace),ae=a.convert(ce.type),we=T(ce.internalFormat,ve,ae,ce.colorSpace,A.isXRRenderTarget===!0),Se=be(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,we,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+V,n.RENDERBUFFER,I.__webglColorRenderbuffer[V])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),k(I.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),oe(n.TEXTURE_CUBE_MAP,M,J);for(let Y=0;Y<6;Y++)pe(I.__webglFramebuffer[Y],A,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y);D(M,J)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(R){const Y=A.texture;for(let V=0,ce=Y.length;V<ce;V++){const ve=Y[V],ae=r.get(ve);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),oe(n.TEXTURE_2D,ve,J),pe(I.__webglFramebuffer,A,ve,n.COLOR_ATTACHMENT0+V,n.TEXTURE_2D),D(ve,J)&&b(n.TEXTURE_2D)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?Y=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Y,q.__webglTexture),oe(Y,M,J),pe(I.__webglFramebuffer,A,M,n.COLOR_ATTACHMENT0,Y),D(M,J)&&b(Y),t.unbindTexture()}A.depthBuffer&&he(A)}function Ie(A){const M=S(A)||o,I=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let q=0,Q=I.length;q<Q;q++){const R=I[q];if(D(R,M)){const J=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Y=r.get(R).__webglTexture;t.bindTexture(J,Y),b(J),t.unbindTexture()}}}function Te(A){if(o&&A.samples>0&&Pe(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],I=A.width,q=A.height;let Q=n.COLOR_BUFFER_BIT;const R=[],J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=r.get(A),V=A.isWebGLMultipleRenderTargets===!0;if(V)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){R.push(n.COLOR_ATTACHMENT0+ce),A.depthBuffer&&R.push(J);const ve=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(ve===!1&&(A.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),V&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]),ve===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[J]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[J])),V){const ae=r.get(M[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,I,q,0,0,I,q,Q,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,R)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),V)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);const ve=r.get(M[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}}function be(A){return Math.min(l,A.samples)}function Pe(A){const M=r.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function je(A){const M=s.render.frame;v.get(A)!==M&&(v.set(A,M),A.update())}function et(A,M){const I=A.colorSpace,q=A.format,Q=A.type;return A.isCompressedTexture===!0||A.format===so||I!==In&&I!==wr&&(I===qe?o===!1?e.has("EXT_sRGB")===!0&&q===Fn?(A.format=so,A.minFilter=gn,A.generateMipmaps=!1):M=Wc.sRGBToLinear(M):(q!==Fn||Q!==sr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),M}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Me,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Pe}function sv(n,e,t){const r=t.isWebGL2;function i(a,s=wr){let o;if(a===sr)return n.UNSIGNED_BYTE;if(a===Ic)return n.UNSIGNED_SHORT_4_4_4_4;if(a===Uc)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Hh)return n.BYTE;if(a===Vh)return n.SHORT;if(a===To)return n.UNSIGNED_SHORT;if(a===Pc)return n.INT;if(a===nr)return n.UNSIGNED_INT;if(a===rr)return n.FLOAT;if(a===Ii)return r?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Wh)return n.ALPHA;if(a===Fn)return n.RGBA;if(a===kh)return n.LUMINANCE;if(a===Xh)return n.LUMINANCE_ALPHA;if(a===Ar)return n.DEPTH_COMPONENT;if(a===pi)return n.DEPTH_STENCIL;if(a===so)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===$h)return n.RED;if(a===Bc)return n.RED_INTEGER;if(a===qh)return n.RG;if(a===Oc)return n.RG_INTEGER;if(a===zc)return n.RGBA_INTEGER;if(a===xs||a===Es||a===ys||a===Ms)if(s===qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===xs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ms)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===xs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Es)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ys)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ms)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===ou||a===uu||a===lu||a===cu)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===ou)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===uu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===lu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===cu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Yh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===fu||a===hu)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===fu)return s===qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===hu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===du||a===pu||a===mu||a===gu||a===vu||a===_u||a===xu||a===Eu||a===yu||a===Mu||a===Au||a===Su||a===wu||a===Du)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===du)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===pu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===mu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===gu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===vu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===_u)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===xu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Eu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===yu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Mu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Au)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Su)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===wu)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Du)return s===qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===As)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===As)return s===qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Zh||a===bu||a===Tu||a===Cu)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===As)return o.COMPRESSED_RED_RGTC1_EXT;if(a===bu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Tu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Cu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Mr?r?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:i}}class ov extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ma extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uv={type:"move"};class qs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,s=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){s=!0;for(const p of e.hand.values()){const g=t.getJointPose(p,r),m=this._getHandJoint(h,p);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=h.joints["index-finger-tip"],l=h.joints["thumb-tip"],f=u.position.distanceTo(l.position),d=.02,v=.005;h.inputState.pinching&&f>d+v?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&f<=d-v&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uv)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),h!==null&&(h.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ma;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class lv extends jt{constructor(e,t,r,i,a,s,o,c,h,u){if(u=u!==void 0?u:Ar,u!==Ar&&u!==pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ar&&(r=nr),r===void 0&&u===pi&&(r=Mr),super(null,i,a,s,o,c,u,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=c!==void 0?c:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class cv extends Fr{constructor(e,t){super();const r=this;let i=null,a=1,s=null,o="local-floor",c=1,h=null,u=null,l=null,f=null,d=null,v=null;const p=t.getContextAttributes();let g=null,m=null;const w=[],_=[],S=new vn;S.layers.enable(1),S.viewport=new It;const E=new vn;E.layers.enable(2),E.viewport=new It;const D=[S,E],b=new ov;b.layers.enable(1),b.layers.enable(2);let T=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=w[O];return W===void 0&&(W=new qs,w[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=w[O];return W===void 0&&(W=new qs,w[O]=W),W.getGripSpace()},this.getHand=function(O){let W=w[O];return W===void 0&&(W=new qs,w[O]=W),W.getHandSpace()};function x(O){const W=_.indexOf(O.inputSource);if(W===-1)return;const K=w[W];K!==void 0&&(K.update(O.inputSource,O.frame,h||s),K.dispatchEvent({type:O.type,data:O.inputSource}))}function P(){i.removeEventListener("select",x),i.removeEventListener("selectstart",x),i.removeEventListener("selectend",x),i.removeEventListener("squeeze",x),i.removeEventListener("squeezestart",x),i.removeEventListener("squeezeend",x),i.removeEventListener("end",P),i.removeEventListener("inputsourceschange",C);for(let O=0;O<w.length;O++){const W=_[O];W!==null&&(_[O]=null,w[O].disconnect(W))}T=null,y=null,e.setRenderTarget(g),d=null,f=null,l=null,i=null,m=null,z.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){a=O,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||s},this.setReferenceSpace=function(O){h=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return l},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",x),i.addEventListener("selectstart",x),i.addEventListener("selectend",x),i.addEventListener("squeeze",x),i.addEventListener("squeezestart",x),i.addEventListener("squeezeend",x),i.addEventListener("end",P),i.addEventListener("inputsourceschange",C),p.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};d=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:d}),m=new br(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:sr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let W=null,K=null,Z=null;p.depth&&(Z=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=p.stencil?pi:Ar,K=p.stencil?Mr:nr);const j={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:a};l=new XRWebGLBinding(i,t),f=l.createProjectionLayer(j),i.updateRenderState({layers:[f]}),m=new br(f.textureWidth,f.textureHeight,{format:Fn,type:sr,depthTexture:new lv(f.textureWidth,f.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const re=e.properties.get(m);re.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(c),h=null,s=await i.requestReferenceSpace(o),z.setContext(i),z.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(O){for(let W=0;W<O.removed.length;W++){const K=O.removed[W],Z=_.indexOf(K);Z>=0&&(_[Z]=null,w[Z].disconnect(K))}for(let W=0;W<O.added.length;W++){const K=O.added[W];let Z=_.indexOf(K);if(Z===-1){for(let re=0;re<w.length;re++)if(re>=_.length){_.push(K),Z=re;break}else if(_[re]===null){_[re]=K,Z=re;break}if(Z===-1)break}const j=w[Z];j&&j.connect(K)}}const F=new ee,N=new ee;function L(O,W,K){F.setFromMatrixPosition(W.matrixWorld),N.setFromMatrixPosition(K.matrixWorld);const Z=F.distanceTo(N),j=W.projectionMatrix.elements,re=K.projectionMatrix.elements,oe=j[14]/(j[10]-1),le=j[14]/(j[10]+1),me=(j[9]+1)/j[5],fe=(j[9]-1)/j[5],pe=(j[8]-1)/j[0],k=(re[8]+1)/re[0],ye=oe*pe,he=oe*k,Me=Z/(-pe+k),Ee=Me*-pe;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ee),O.translateZ(Me),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Ie=oe+Me,Te=le+Me,be=ye-Ee,Pe=he+(Z-Ee),je=me*le/Te*Ie,et=fe*le/Te*Ie;O.projectionMatrix.makePerspective(be,Pe,je,et,Ie,Te),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function U(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;b.near=E.near=S.near=O.near,b.far=E.far=S.far=O.far,(T!==b.near||y!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,y=b.far);const W=O.parent,K=b.cameras;U(b,W);for(let Z=0;Z<K.length;Z++)U(K[Z],W);K.length===2?L(b,S,E):b.projectionMatrix.copy(S.projectionMatrix),G(O,b,W)};function G(O,W,K){K===null?O.matrix.copy(W.matrixWorld):(O.matrix.copy(K.matrixWorld),O.matrix.invert(),O.matrix.multiply(W.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0);const Z=O.children;for(let j=0,re=Z.length;j<re;j++)Z[j].updateMatrixWorld(!0);O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=oo*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(O){c=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let H=null;function X(O,W){if(u=W.getViewerPose(h||s),v=W,u!==null){const K=u.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let Z=!1;K.length!==b.cameras.length&&(b.cameras.length=0,Z=!0);for(let j=0;j<K.length;j++){const re=K[j];let oe=null;if(d!==null)oe=d.getViewport(re);else{const me=l.getViewSubImage(f,re);oe=me.viewport,j===0&&(e.setRenderTargetTextures(m,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),e.setRenderTarget(m))}let le=D[j];le===void 0&&(le=new vn,le.layers.enable(j),le.viewport=new It,D[j]=le),le.matrix.fromArray(re.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(re.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(oe.x,oe.y,oe.width,oe.height),j===0&&(b.matrix.copy(le.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Z===!0&&b.cameras.push(le)}}for(let K=0;K<w.length;K++){const Z=_[K],j=w[K];Z!==null&&j!==void 0&&j.update(Z,W,h||s)}H&&H(O,W),W.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:W}),v=null}const z=new ef;z.setAnimationLoop(X),this.setAnimationLoop=function(O){H=O},this.dispose=function(){}}}function fv(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function r(g,m){m.color.getRGB(g.fogColor.value,Kc(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,w,_,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(g,m):m.isMeshToonMaterial?(a(g,m),l(g,m)):m.isMeshPhongMaterial?(a(g,m),u(g,m)):m.isMeshStandardMaterial?(a(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,S)):m.isMeshMatcapMaterial?(a(g,m),v(g,m)):m.isMeshDepthMaterial?a(g,m):m.isMeshDistanceMaterial?(a(g,m),p(g,m)):m.isMeshNormalMaterial?a(g,m):m.isLineBasicMaterial?(s(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?c(g,m,w,_):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const w=e.get(m).envMap;if(w&&(g.envMap.value=w,g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap){g.lightMap.value=m.lightMap;const _=n.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=m.lightMapIntensity*_,t(m.lightMap,g.lightMapTransform)}m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function s(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function c(g,m,w,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*w,g.scale.value=_*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function l(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),e.get(m).envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,w){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&g.clearcoatNormalScale.value.negate())),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function p(g,m){const w=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function hv(n,e,t,r){let i={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,_){const S=_.program;r.uniformBlockBinding(w,S)}function h(w,_){let S=i[w.id];S===void 0&&(v(w),S=u(w),i[w.id]=S,w.addEventListener("dispose",g));const E=_.program;r.updateUBOMapping(w,E);const D=e.render.frame;a[w.id]!==D&&(f(w),a[w.id]=D)}function u(w){const _=l();w.__bindingPointIndex=_;const S=n.createBuffer(),E=w.__size,D=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function l(){for(let w=0;w<o;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const _=i[w.id],S=w.uniforms,E=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let D=0,b=S.length;D<b;D++){const T=S[D];if(d(T,D,E)===!0){const y=T.__offset,x=Array.isArray(T.value)?T.value:[T.value];let P=0;for(let C=0;C<x.length;C++){const F=x[C],N=p(F);typeof F=="number"?(T.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,y+P,T.__data)):F.isMatrix3?(T.__data[0]=F.elements[0],T.__data[1]=F.elements[1],T.__data[2]=F.elements[2],T.__data[3]=F.elements[0],T.__data[4]=F.elements[3],T.__data[5]=F.elements[4],T.__data[6]=F.elements[5],T.__data[7]=F.elements[0],T.__data[8]=F.elements[6],T.__data[9]=F.elements[7],T.__data[10]=F.elements[8],T.__data[11]=F.elements[0]):(F.toArray(T.__data,P),P+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,T.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(w,_,S){const E=w.value;if(S[_]===void 0){if(typeof E=="number")S[_]=E;else{const D=Array.isArray(E)?E:[E],b=[];for(let T=0;T<D.length;T++)b.push(D[T].clone());S[_]=b}return!0}else if(typeof E=="number"){if(S[_]!==E)return S[_]=E,!0}else{const D=Array.isArray(S[_])?S[_]:[S[_]],b=Array.isArray(E)?E:[E];for(let T=0;T<D.length;T++){const y=D[T];if(y.equals(b[T])===!1)return y.copy(b[T]),!0}}return!1}function v(w){const _=w.uniforms;let S=0;const E=16;let D=0;for(let b=0,T=_.length;b<T;b++){const y=_[b],x={boundary:0,storage:0},P=Array.isArray(y.value)?y.value:[y.value];for(let C=0,F=P.length;C<F;C++){const N=P[C],L=p(N);x.boundary+=L.boundary,x.storage+=L.storage}if(y.__data=new Float32Array(x.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,b>0){D=S%E;const C=E-D;D!==0&&C-x.boundary<0&&(S+=E-D,y.__offset=S)}S+=x.storage}return D=S%E,D>0&&(S+=E-D),w.__size=S,w.__cache={},this}function p(w){const _={boundary:0,storage:0};return typeof w=="number"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function g(w){const _=w.target;_.removeEventListener("dispose",g);const S=s.indexOf(_.__bindingPointIndex);s.splice(S,1),n.deleteBuffer(i[_.id]),delete i[_.id],delete a[_.id]}function m(){for(const w in i)n.deleteBuffer(i[w]);s=[],i={},a={}}return{bind:c,update:h,dispose:m}}function dv(){const n=Pa("canvas");return n.style.display="block",n}class of{constructor(e={}){const{canvas:t=dv(),context:r=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:l=!1}=e;this.isWebGLRenderer=!0;let f;r!==null?f=r.getContextAttributes().alpha:f=s;const d=new Uint32Array(4),v=new Int32Array(4);let p=null,g=null;const m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=qe,this.useLegacyLights=!0,this.toneMapping=qn,this.toneMappingExposure=1;const _=this;let S=!1,E=0,D=0,b=null,T=-1,y=null;const x=new It,P=new It;let C=null;const F=new rt(0);let N=0,L=t.width,U=t.height,G=1,H=null,X=null;const z=new It(0,0,L,U),O=new It(0,0,L,U);let W=!1;const K=new jc;let Z=!1,j=!1,re=null;const oe=new Tt,le=new Je,me=new ee,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return b===null?G:1}let k=r;function ye(B,ne){for(let se=0;se<B.length;se++){const te=B[se],ue=t.getContext(te,ne);if(ue!==null)return ue}return null}try{const B={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bo}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",ge,!1),k===null){const ne=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&ne.shift(),k=ye(ne,B),k===null)throw ye(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let he,Me,Ee,Ie,Te,be,Pe,je,et,A,M,I,q,Q,R,J,Y,V,ce,ve,ae,we,Se,Fe;function Ne(){he=new A0(k),Me=new v0(k,he,e),he.init(Me),we=new sv(k,he,Me),Ee=new iv(k,he,Me),Ie=new D0(k),Te=new kg,be=new av(k,he,Ee,Te,Me,we,Ie),Pe=new x0(_),je=new M0(_),et=new Ud(k,Me),Se=new m0(k,he,et,Me),A=new S0(k,et,Ie,Se),M=new F0(k,A,et,Ie),ce=new C0(k,Me,be),J=new _0(Te),I=new Wg(_,Pe,je,he,Me,Se,J),q=new fv(_,Te),Q=new $g,R=new Qg(he,Me),V=new p0(_,Pe,je,Ee,M,f,c),Y=new rv(_,M,Me),Fe=new hv(k,Ie,Me,Ee),ve=new g0(k,he,Ie,Me),ae=new w0(k,he,Ie,Me),Ie.programs=I.programs,_.capabilities=Me,_.extensions=he,_.properties=Te,_.renderLists=Q,_.shadowMap=Y,_.state=Ee,_.info=Ie}Ne();const $=new cv(_,k);this.xr=$,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const B=he.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=he.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(B){B!==void 0&&(G=B,this.setSize(L,U,!1))},this.getSize=function(B){return B.set(L,U)},this.setSize=function(B,ne,se=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=B,U=ne,t.width=Math.floor(B*G),t.height=Math.floor(ne*G),se===!0&&(t.style.width=B+"px",t.style.height=ne+"px"),this.setViewport(0,0,B,ne)},this.getDrawingBufferSize=function(B){return B.set(L*G,U*G).floor()},this.setDrawingBufferSize=function(B,ne,se){L=B,U=ne,G=se,t.width=Math.floor(B*se),t.height=Math.floor(ne*se),this.setViewport(0,0,B,ne)},this.getCurrentViewport=function(B){return B.copy(x)},this.getViewport=function(B){return B.copy(z)},this.setViewport=function(B,ne,se,te){B.isVector4?z.set(B.x,B.y,B.z,B.w):z.set(B,ne,se,te),Ee.viewport(x.copy(z).multiplyScalar(G).floor())},this.getScissor=function(B){return B.copy(O)},this.setScissor=function(B,ne,se,te){B.isVector4?O.set(B.x,B.y,B.z,B.w):O.set(B,ne,se,te),Ee.scissor(P.copy(O).multiplyScalar(G).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(B){Ee.setScissorTest(W=B)},this.setOpaqueSort=function(B){H=B},this.setTransparentSort=function(B){X=B},this.getClearColor=function(B){return B.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor.apply(V,arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha.apply(V,arguments)},this.clear=function(B=!0,ne=!0,se=!0){let te=0;if(B){let ue=!1;if(b!==null){const Ce=b.texture.format;ue=Ce===zc||Ce===Oc||Ce===Bc}if(ue){const Ce=b.texture.type,Be=Ce===sr||Ce===nr||Ce===To||Ce===Mr||Ce===Ic||Ce===Uc,Ge=V.getClearColor(),He=V.getClearAlpha(),Ye=Ge.r,We=Ge.g,ke=Ge.b;Be?(d[0]=Ye,d[1]=We,d[2]=ke,d[3]=He,k.clearBufferuiv(k.COLOR,0,d)):(v[0]=Ye,v[1]=We,v[2]=ke,v[3]=He,k.clearBufferiv(k.COLOR,0,v))}else te|=k.COLOR_BUFFER_BIT}ne&&(te|=k.DEPTH_BUFFER_BIT),se&&(te|=k.STENCIL_BUFFER_BIT),k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Q.dispose(),R.dispose(),Te.dispose(),Pe.dispose(),je.dispose(),M.dispose(),Se.dispose(),Fe.dispose(),I.dispose(),$.dispose(),$.removeEventListener("sessionstart",ot),$.removeEventListener("sessionend",fn),re&&(re.dispose(),re=null),Lt.stop()};function _e(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const B=Ie.autoReset,ne=Y.enabled,se=Y.autoUpdate,te=Y.needsUpdate,ue=Y.type;Ne(),Ie.autoReset=B,Y.enabled=ne,Y.autoUpdate=se,Y.needsUpdate=te,Y.type=ue}function ge(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function xe(B){const ne=B.target;ne.removeEventListener("dispose",xe),Xe(ne)}function Xe(B){Qe(B),Te.remove(B)}function Qe(B){const ne=Te.get(B).programs;ne!==void 0&&(ne.forEach(function(se){I.releaseProgram(se)}),B.isShaderMaterial&&I.releaseShaderCache(B))}this.renderBufferDirect=function(B,ne,se,te,ue,Ce){ne===null&&(ne=fe);const Be=ue.isMesh&&ue.matrixWorld.determinant()<0,Ge=hr(B,ne,se,te,ue);Ee.setMaterial(te,Be);let He=se.index,Ye=1;te.wireframe===!0&&(He=A.getWireframeAttribute(se),Ye=2);const We=se.drawRange,ke=se.attributes.position;let vt=We.start*Ye,xt=(We.start+We.count)*Ye;Ce!==null&&(vt=Math.max(vt,Ce.start*Ye),xt=Math.min(xt,(Ce.start+Ce.count)*Ye)),He!==null?(vt=Math.max(vt,0),xt=Math.min(xt,He.count)):ke!=null&&(vt=Math.max(vt,0),xt=Math.min(xt,ke.count));const an=xt-vt;if(an<0||an===1/0)return;Se.setup(ue,te,Ge,se,He);let $t,tt=ve;if(He!==null&&($t=et.get(He),tt=ae,tt.setIndex($t)),ue.isMesh)te.wireframe===!0?(Ee.setLineWidth(te.wireframeLinewidth*pe()),tt.setMode(k.LINES)):tt.setMode(k.TRIANGLES);else if(ue.isLine){let Oe=te.linewidth;Oe===void 0&&(Oe=1),Ee.setLineWidth(Oe*pe()),ue.isLineSegments?tt.setMode(k.LINES):ue.isLineLoop?tt.setMode(k.LINE_LOOP):tt.setMode(k.LINE_STRIP)}else ue.isPoints?tt.setMode(k.POINTS):ue.isSprite&&tt.setMode(k.TRIANGLES);if(ue.isInstancedMesh)tt.renderInstances(vt,an,ue.count);else if(se.isInstancedBufferGeometry){const Oe=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Br=Math.min(se.instanceCount,Oe);tt.renderInstances(vt,an,Br)}else tt.render(vt,an)},this.compile=function(B,ne){function se(te,ue,Ce){te.transparent===!0&&te.side===_n&&te.forceSinglePass===!1?(te.side=Qt,te.needsUpdate=!0,Ur(te,ue,Ce),te.side=Zn,te.needsUpdate=!0,Ur(te,ue,Ce),te.side=_n):Ur(te,ue,Ce)}g=R.get(B),g.init(),w.push(g),B.traverseVisible(function(te){te.isLight&&te.layers.test(ne.layers)&&(g.pushLight(te),te.castShadow&&g.pushShadow(te))}),g.setupLights(_.useLegacyLights),B.traverse(function(te){const ue=te.material;if(ue)if(Array.isArray(ue))for(let Ce=0;Ce<ue.length;Ce++){const Be=ue[Ce];se(Be,B,te)}else se(ue,B,te)}),w.pop(),g=null};let ft=null;function Xt(B){ft&&ft(B)}function ot(){Lt.stop()}function fn(){Lt.start()}const Lt=new ef;Lt.setAnimationLoop(Xt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(B){ft=B,$.setAnimationLoop(B),B===null?Lt.stop():Lt.start()},$.addEventListener("sessionstart",ot),$.addEventListener("sessionend",fn),this.render=function(B,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(ne),ne=$.getCamera()),B.isScene===!0&&B.onBeforeRender(_,B,ne,b),g=R.get(B,w.length),g.init(),w.push(g),oe.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),K.setFromProjectionMatrix(oe),j=this.localClippingEnabled,Z=J.init(this.clippingPlanes,j),p=Q.get(B,m.length),p.init(),m.push(p),Ji(B,ne,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(H,X),this.info.render.frame++,Z===!0&&J.beginShadows();const se=g.state.shadowsArray;if(Y.render(se,B,ne),Z===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset(),V.render(p,B),g.setupLights(_.useLegacyLights),ne.isArrayCamera){const te=ne.cameras;for(let ue=0,Ce=te.length;ue<Ce;ue++){const Be=te[ue];Qi(p,B,Be,Be.viewport)}}else Qi(p,B,ne);b!==null&&(be.updateMultisampleRenderTarget(b),be.updateRenderTargetMipmap(b)),B.isScene===!0&&B.onAfterRender(_,B,ne),Se.resetDefaultState(),T=-1,y=null,w.pop(),w.length>0?g=w[w.length-1]:g=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function Ji(B,ne,se,te){if(B.visible===!1)return;if(B.layers.test(ne.layers)){if(B.isGroup)se=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(ne);else if(B.isLight)g.pushLight(B),B.castShadow&&g.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||K.intersectsSprite(B)){te&&me.setFromMatrixPosition(B.matrixWorld).applyMatrix4(oe);const Be=M.update(B),Ge=B.material;Ge.visible&&p.push(B,Be,Ge,se,me.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||K.intersectsObject(B))){const Be=M.update(B),Ge=B.material;if(te&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),me.copy(B.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),me.copy(Be.boundingSphere.center)),me.applyMatrix4(B.matrixWorld).applyMatrix4(oe)),Array.isArray(Ge)){const He=Be.groups;for(let Ye=0,We=He.length;Ye<We;Ye++){const ke=He[Ye],vt=Ge[ke.materialIndex];vt&&vt.visible&&p.push(B,Be,vt,se,me.z,ke)}}else Ge.visible&&p.push(B,Be,Ge,se,me.z,null)}}const Ce=B.children;for(let Be=0,Ge=Ce.length;Be<Ge;Be++)Ji(Ce[Be],ne,se,te)}function Qi(B,ne,se,te){const ue=B.opaque,Ce=B.transmissive,Be=B.transparent;g.setupLightsView(se),Z===!0&&J.setGlobalState(_.clippingPlanes,se),Ce.length>0&&ds(ue,Ce,ne,se),te&&Ee.viewport(x.copy(te)),ue.length>0&&Ir(ue,ne,se),Ce.length>0&&Ir(Ce,ne,se),Be.length>0&&Ir(Be,ne,se),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ds(B,ne,se,te){const ue=Me.isWebGL2;re===null&&(re=new br(1,1,{generateMipmaps:!0,type:he.has("EXT_color_buffer_half_float")?Ii:sr,minFilter:Pi,samples:ue?4:0})),_.getDrawingBufferSize(le),ue?re.setSize(le.x,le.y):re.setSize(uo(le.x),uo(le.y));const Ce=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(F),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();const Be=_.toneMapping;_.toneMapping=qn,Ir(B,se,te),be.updateMultisampleRenderTarget(re),be.updateRenderTargetMipmap(re);let Ge=!1;for(let He=0,Ye=ne.length;He<Ye;He++){const We=ne[He],ke=We.object,vt=We.geometry,xt=We.material,an=We.group;if(xt.side===_n&&ke.layers.test(te.layers)){const $t=xt.side;xt.side=Qt,xt.needsUpdate=!0,ji(ke,se,te,vt,xt,an),xt.side=$t,xt.needsUpdate=!0,Ge=!0}}Ge===!0&&(be.updateMultisampleRenderTarget(re),be.updateRenderTargetMipmap(re)),_.setRenderTarget(Ce),_.setClearColor(F,N),_.toneMapping=Be}function Ir(B,ne,se){const te=ne.isScene===!0?ne.overrideMaterial:null;for(let ue=0,Ce=B.length;ue<Ce;ue++){const Be=B[ue],Ge=Be.object,He=Be.geometry,Ye=te===null?Be.material:te,We=Be.group;Ge.layers.test(se.layers)&&ji(Ge,ne,se,He,Ye,We)}}function ji(B,ne,se,te,ue,Ce){B.onBeforeRender(_,ne,se,te,ue,Ce),B.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),ue.onBeforeRender(_,ne,se,te,B,Ce),ue.transparent===!0&&ue.side===_n&&ue.forceSinglePass===!1?(ue.side=Qt,ue.needsUpdate=!0,_.renderBufferDirect(se,ne,te,ue,B,Ce),ue.side=Zn,ue.needsUpdate=!0,_.renderBufferDirect(se,ne,te,ue,B,Ce),ue.side=_n):_.renderBufferDirect(se,ne,te,ue,B,Ce),B.onAfterRender(_,ne,se,te,ue,Ce)}function Ur(B,ne,se){ne.isScene!==!0&&(ne=fe);const te=Te.get(B),ue=g.state.lights,Ce=g.state.shadowsArray,Be=ue.state.version,Ge=I.getParameters(B,ue.state,Ce,ne,se),He=I.getProgramCacheKey(Ge);let Ye=te.programs;te.environment=B.isMeshStandardMaterial?ne.environment:null,te.fog=ne.fog,te.envMap=(B.isMeshStandardMaterial?je:Pe).get(B.envMap||te.environment),Ye===void 0&&(B.addEventListener("dispose",xe),Ye=new Map,te.programs=Ye);let We=Ye.get(He);if(We!==void 0){if(te.currentProgram===We&&te.lightsStateVersion===Be)return ea(B,Ge),We}else Ge.uniforms=I.getUniforms(B),B.onBuild(se,Ge,_),B.onBeforeCompile(Ge,_),We=I.acquireProgram(Ge,He),Ye.set(He,We),te.uniforms=Ge.uniforms;const ke=te.uniforms;(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(ke.clippingPlanes=J.uniform),ea(B,Ge),te.needsLights=ms(B),te.lightsStateVersion=Be,te.needsLights&&(ke.ambientLightColor.value=ue.state.ambient,ke.lightProbe.value=ue.state.probe,ke.directionalLights.value=ue.state.directional,ke.directionalLightShadows.value=ue.state.directionalShadow,ke.spotLights.value=ue.state.spot,ke.spotLightShadows.value=ue.state.spotShadow,ke.rectAreaLights.value=ue.state.rectArea,ke.ltc_1.value=ue.state.rectAreaLTC1,ke.ltc_2.value=ue.state.rectAreaLTC2,ke.pointLights.value=ue.state.point,ke.pointLightShadows.value=ue.state.pointShadow,ke.hemisphereLights.value=ue.state.hemi,ke.directionalShadowMap.value=ue.state.directionalShadowMap,ke.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,ke.spotShadowMap.value=ue.state.spotShadowMap,ke.spotLightMatrix.value=ue.state.spotLightMatrix,ke.spotLightMap.value=ue.state.spotLightMap,ke.pointShadowMap.value=ue.state.pointShadowMap,ke.pointShadowMatrix.value=ue.state.pointShadowMatrix);const vt=We.getUniforms(),xt=Ca.seqWithValue(vt.seq,ke);return te.currentProgram=We,te.uniformsList=xt,We}function ea(B,ne){const se=Te.get(B);se.outputColorSpace=ne.outputColorSpace,se.instancing=ne.instancing,se.skinning=ne.skinning,se.morphTargets=ne.morphTargets,se.morphNormals=ne.morphNormals,se.morphColors=ne.morphColors,se.morphTargetsCount=ne.morphTargetsCount,se.numClippingPlanes=ne.numClippingPlanes,se.numIntersection=ne.numClipIntersection,se.vertexAlphas=ne.vertexAlphas,se.vertexTangents=ne.vertexTangents,se.toneMapping=ne.toneMapping}function hr(B,ne,se,te,ue){ne.isScene!==!0&&(ne=fe),be.resetTextureUnits();const Ce=ne.fog,Be=te.isMeshStandardMaterial?ne.environment:null,Ge=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:In,He=(te.isMeshStandardMaterial?je:Pe).get(te.envMap||Be),Ye=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,We=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),ke=!!se.morphAttributes.position,vt=!!se.morphAttributes.normal,xt=!!se.morphAttributes.color,an=te.toneMapped?_.toneMapping:qn,$t=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,tt=$t!==void 0?$t.length:0,Oe=Te.get(te),Br=g.state.lights;if(Z===!0&&(j===!0||B!==y)){const sn=B===y&&te.id===T;J.setState(te,B,sn)}let At=!1;te.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Br.state.version||Oe.outputColorSpace!==Ge||ue.isInstancedMesh&&Oe.instancing===!1||!ue.isInstancedMesh&&Oe.instancing===!0||ue.isSkinnedMesh&&Oe.skinning===!1||!ue.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==He||te.fog===!0&&Oe.fog!==Ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==J.numPlanes||Oe.numIntersection!==J.numIntersection)||Oe.vertexAlphas!==Ye||Oe.vertexTangents!==We||Oe.morphTargets!==ke||Oe.morphNormals!==vt||Oe.morphColors!==xt||Oe.toneMapping!==an||Me.isWebGL2===!0&&Oe.morphTargetsCount!==tt)&&(At=!0):(At=!0,Oe.__version=te.version);let hn=Oe.currentProgram;At===!0&&(hn=Ur(te,ne,ue));let dr=!1,Kn=!1,Or=!1;const Et=hn.getUniforms(),pr=Oe.uniforms;if(Ee.useProgram(hn.program)&&(dr=!0,Kn=!0,Or=!0),te.id!==T&&(T=te.id,Kn=!0),dr||y!==B){if(Et.setValue(k,"projectionMatrix",B.projectionMatrix),Me.logarithmicDepthBuffer&&Et.setValue(k,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),y!==B&&(y=B,Kn=!0,Or=!0),te.isShaderMaterial||te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshStandardMaterial||te.envMap){const sn=Et.map.cameraPosition;sn!==void 0&&sn.setValue(k,me.setFromMatrixPosition(B.matrixWorld))}(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Et.setValue(k,"isOrthographic",B.isOrthographicCamera===!0),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial||te.isShadowMaterial||ue.isSkinnedMesh)&&Et.setValue(k,"viewMatrix",B.matrixWorldInverse)}if(ue.isSkinnedMesh){Et.setOptional(k,ue,"bindMatrix"),Et.setOptional(k,ue,"bindMatrixInverse");const sn=ue.skeleton;sn&&(Me.floatVertexTextures?(sn.boneTexture===null&&sn.computeBoneTexture(),Et.setValue(k,"boneTexture",sn.boneTexture,be),Et.setValue(k,"boneTextureSize",sn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gs=se.morphAttributes;if((gs.position!==void 0||gs.normal!==void 0||gs.color!==void 0&&Me.isWebGL2===!0)&&ce.update(ue,se,hn),(Kn||Oe.receiveShadow!==ue.receiveShadow)&&(Oe.receiveShadow=ue.receiveShadow,Et.setValue(k,"receiveShadow",ue.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(pr.envMap.value=He,pr.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),Kn&&(Et.setValue(k,"toneMappingExposure",_.toneMappingExposure),Oe.needsLights&&ps(pr,Or),Ce&&te.fog===!0&&q.refreshFogUniforms(pr,Ce),q.refreshMaterialUniforms(pr,te,G,U,re),Ca.upload(k,Oe.uniformsList,pr,be)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ca.upload(k,Oe.uniformsList,pr,be),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Et.setValue(k,"center",ue.center),Et.setValue(k,"modelViewMatrix",ue.modelViewMatrix),Et.setValue(k,"normalMatrix",ue.normalMatrix),Et.setValue(k,"modelMatrix",ue.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const sn=te.uniformsGroups;for(let vs=0,ch=sn.length;vs<ch;vs++)if(Me.isWebGL2){const jo=sn[vs];Fe.update(jo,hn),Fe.bind(jo,hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hn}function ps(B,ne){B.ambientLightColor.needsUpdate=ne,B.lightProbe.needsUpdate=ne,B.directionalLights.needsUpdate=ne,B.directionalLightShadows.needsUpdate=ne,B.pointLights.needsUpdate=ne,B.pointLightShadows.needsUpdate=ne,B.spotLights.needsUpdate=ne,B.spotLightShadows.needsUpdate=ne,B.rectAreaLights.needsUpdate=ne,B.hemisphereLights.needsUpdate=ne}function ms(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(B,ne,se){Te.get(B.texture).__webglTexture=ne,Te.get(B.depthTexture).__webglTexture=se;const te=Te.get(B);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=se===void 0,te.__autoAllocateDepthBuffer||he.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,ne){const se=Te.get(B);se.__webglFramebuffer=ne,se.__useDefaultFramebuffer=ne===void 0},this.setRenderTarget=function(B,ne=0,se=0){b=B,E=ne,D=se;let te=!0,ue=null,Ce=!1,Be=!1;if(B){const He=Te.get(B);He.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(k.FRAMEBUFFER,null),te=!1):He.__webglFramebuffer===void 0?be.setupRenderTarget(B):He.__hasExternalTextures&&be.rebindTextures(B,Te.get(B.texture).__webglTexture,Te.get(B.depthTexture).__webglTexture);const Ye=B.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Be=!0);const We=Te.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(ue=We[ne],Ce=!0):Me.isWebGL2&&B.samples>0&&be.useMultisampledRTT(B)===!1?ue=Te.get(B).__webglMultisampledFramebuffer:ue=We,x.copy(B.viewport),P.copy(B.scissor),C=B.scissorTest}else x.copy(z).multiplyScalar(G).floor(),P.copy(O).multiplyScalar(G).floor(),C=W;if(Ee.bindFramebuffer(k.FRAMEBUFFER,ue)&&Me.drawBuffers&&te&&Ee.drawBuffers(B,ue),Ee.viewport(x),Ee.scissor(P),Ee.setScissorTest(C),Ce){const He=Te.get(B.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+ne,He.__webglTexture,se)}else if(Be){const He=Te.get(B.texture),Ye=ne||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,He.__webglTexture,se||0,Ye)}T=-1},this.readRenderTargetPixels=function(B,ne,se,te,ue,Ce,Be){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Te.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Be!==void 0&&(Ge=Ge[Be]),Ge){Ee.bindFramebuffer(k.FRAMEBUFFER,Ge);try{const He=B.texture,Ye=He.format,We=He.type;if(Ye!==Fn&&we.convert(Ye)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=We===Ii&&(he.has("EXT_color_buffer_half_float")||Me.isWebGL2&&he.has("EXT_color_buffer_float"));if(We!==sr&&we.convert(We)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===rr&&(Me.isWebGL2||he.has("OES_texture_float")||he.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=B.width-te&&se>=0&&se<=B.height-ue&&k.readPixels(ne,se,te,ue,we.convert(Ye),we.convert(We),Ce)}finally{const He=b!==null?Te.get(b).__webglFramebuffer:null;Ee.bindFramebuffer(k.FRAMEBUFFER,He)}}},this.copyFramebufferToTexture=function(B,ne,se=0){const te=Math.pow(2,-se),ue=Math.floor(ne.image.width*te),Ce=Math.floor(ne.image.height*te);be.setTexture2D(ne,0),k.copyTexSubImage2D(k.TEXTURE_2D,se,0,0,B.x,B.y,ue,Ce),Ee.unbindTexture()},this.copyTextureToTexture=function(B,ne,se,te=0){const ue=ne.image.width,Ce=ne.image.height,Be=we.convert(se.format),Ge=we.convert(se.type);be.setTexture2D(se,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,se.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,se.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,se.unpackAlignment),ne.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,te,B.x,B.y,ue,Ce,Be,Ge,ne.image.data):ne.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,te,B.x,B.y,ne.mipmaps[0].width,ne.mipmaps[0].height,Be,ne.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,te,B.x,B.y,Be,Ge,ne.image),te===0&&se.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(B,ne,se,te,ue=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=B.max.x-B.min.x+1,Be=B.max.y-B.min.y+1,Ge=B.max.z-B.min.z+1,He=we.convert(te.format),Ye=we.convert(te.type);let We;if(te.isData3DTexture)be.setTexture3D(te,0),We=k.TEXTURE_3D;else if(te.isDataArrayTexture)be.setTexture2DArray(te,0),We=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,te.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,te.unpackAlignment);const ke=k.getParameter(k.UNPACK_ROW_LENGTH),vt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),xt=k.getParameter(k.UNPACK_SKIP_PIXELS),an=k.getParameter(k.UNPACK_SKIP_ROWS),$t=k.getParameter(k.UNPACK_SKIP_IMAGES),tt=se.isCompressedTexture?se.mipmaps[0]:se.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,tt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,tt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,B.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,B.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,B.min.z),se.isDataTexture||se.isData3DTexture?k.texSubImage3D(We,ue,ne.x,ne.y,ne.z,Ce,Be,Ge,He,Ye,tt.data):se.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(We,ue,ne.x,ne.y,ne.z,Ce,Be,Ge,He,tt.data)):k.texSubImage3D(We,ue,ne.x,ne.y,ne.z,Ce,Be,Ge,He,Ye,tt),k.pixelStorei(k.UNPACK_ROW_LENGTH,ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,vt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,xt),k.pixelStorei(k.UNPACK_SKIP_ROWS,an),k.pixelStorei(k.UNPACK_SKIP_IMAGES,$t),ue===0&&te.generateMipmaps&&k.generateMipmap(We),Ee.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?be.setTextureCube(B,0):B.isData3DTexture?be.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?be.setTexture2DArray(B,0):be.setTexture2D(B,0),Ee.unbindTexture()},this.resetState=function(){E=0,D=0,b=null,Ee.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===qe?Sr:Gc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Sr?qe:In}}class pv extends of{}pv.prototype.isWebGL1Renderer=!0;class mv extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ei extends lr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const gl=new ee,vl=new ee,_l=new Tt,Ys=new Fo,Aa=new Xi;class uf extends Bt{constructor(e=new Nt,t=new Ei){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let i=1,a=t.count;i<a;i++)gl.fromBufferAttribute(t,i-1),vl.fromBufferAttribute(t,i),r[i]=r[i-1],r[i]+=gl.distanceTo(vl);e.setAttribute("lineDistance",new En(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Aa.copy(r.boundingSphere),Aa.applyMatrix4(i),Aa.radius+=a,e.ray.intersectsSphere(Aa)===!1)return;_l.copy(i).invert(),Ys.copy(e.ray).applyMatrix4(_l);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new ee,u=new ee,l=new ee,f=new ee,d=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const m=Math.max(0,s.start),w=Math.min(v.count,s.start+s.count);for(let _=m,S=w-1;_<S;_+=d){const E=v.getX(_),D=v.getX(_+1);if(h.fromBufferAttribute(g,E),u.fromBufferAttribute(g,D),Ys.distanceSqToSegment(h,u,f,l)>c)continue;f.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(f);T<e.near||T>e.far||t.push({distance:T,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,s.start),w=Math.min(g.count,s.start+s.count);for(let _=m,S=w-1;_<S;_+=d){if(h.fromBufferAttribute(g,_),u.fromBufferAttribute(g,_+1),Ys.distanceSqToSegment(h,u,f,l)>c)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:l.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}const xl=new ee,El=new ee;class ja extends uf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let i=0,a=t.count;i<a;i+=2)xl.fromBufferAttribute(t,i),El.fromBufferAttribute(t,i+1),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+xl.distanceTo(El);e.setAttribute("lineDistance",new En(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lo extends lr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const yl=new Tt,co=new Fo,Sa=new Xi,wa=new ee;class lf extends Bt{constructor(e=new Nt,t=new Lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Sa.copy(r.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=a,e.ray.intersectsSphere(Sa)===!1)return;yl.copy(i).invert(),co.copy(e.ray).applyMatrix4(yl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=r.index,l=r.attributes.position;if(h!==null){const f=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let v=f,p=d;v<p;v++){const g=h.getX(v);wa.fromBufferAttribute(l,g),Ml(wa,g,c,i,e,t,this)}}else{const f=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let v=f,p=d;v<p;v++)wa.fromBufferAttribute(l,v),Ml(wa,v,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Ml(n,e,t,r,i,a,s){const o=co.distanceSqToPoint(n);if(o<t){const c=new ee;co.closestPointToPoint(n,c),c.applyMatrix4(r);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;a.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:s})}}class gv extends jt{constructor(e,t,r,i,a,s,o,c,h){super(e,t,r,i,a,s,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cf extends lr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new rt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class vv extends lr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Co,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class _v extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Al extends _v{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}class Sl{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const wl=new ee,Da=new ee;class xv{constructor(e=new ee,t=new ee){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){wl.subVectors(e,this.start),Da.subVectors(this.end,this.start);const r=Da.dot(Da);let a=Da.dot(wl)/r;return t&&(a=Vt(a,0,1)),a}closestPointToPoint(e,t,r){const i=this.closestPointToPointParameter(e,t);return this.delta(r).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Ev extends ja{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Nt;i.setAttribute("position",new En(t,3)),i.setAttribute("color",new En(r,3));const a=new Ei({vertexColors:!0,toneMapped:!1});super(i,a),this.type="AxesHelper"}setColors(e,t,r){const i=new rt,a=this.geometry.attributes.color.array;return i.set(e),i.toArray(a,0),i.toArray(a,3),i.set(t),i.toArray(a,6),i.toArray(a,9),i.set(r),i.toArray(a,12),i.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);function Ui(){return Ui=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ui.apply(this,arguments)}var ff={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function gt(n){return typeof n=="number"}function bt(n){return!n||typeof n!="object"||typeof n.constructor!="function"?!1:n.isBigNumber===!0&&typeof n.constructor.prototype=="object"&&n.constructor.prototype.isBigNumber===!0||typeof n.constructor.isDecimal=="function"&&n.constructor.isDecimal(n)===!0}function Po(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isComplex===!0||!1}function Io(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isFraction===!0||!1}function hf(n){return n&&n.constructor.prototype.isUnit===!0||!1}function Tn(n){return typeof n=="string"}var ut=Array.isArray;function pt(n){return n&&n.constructor.prototype.isMatrix===!0||!1}function Ia(n){return Array.isArray(n)||pt(n)}function df(n){return n&&n.isDenseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function pf(n){return n&&n.isSparseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function mf(n){return n&&n.constructor.prototype.isRange===!0||!1}function Uo(n){return n&&n.constructor.prototype.isIndex===!0||!1}function yv(n){return typeof n=="boolean"}function Mv(n){return n&&n.constructor.prototype.isResultSet===!0||!1}function Av(n){return n&&n.constructor.prototype.isHelp===!0||!1}function Sv(n){return typeof n=="function"}function wv(n){return n instanceof Date}function Dv(n){return n instanceof RegExp}function bv(n){return!!(n&&typeof n=="object"&&n.constructor===Object&&!Po(n)&&!Io(n))}function Tv(n){return n===null}function Cv(n){return n===void 0}function Fv(n){return n&&n.isAccessorNode===!0&&n.constructor.prototype.isNode===!0||!1}function Rv(n){return n&&n.isArrayNode===!0&&n.constructor.prototype.isNode===!0||!1}function Nv(n){return n&&n.isAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function Lv(n){return n&&n.isBlockNode===!0&&n.constructor.prototype.isNode===!0||!1}function Pv(n){return n&&n.isConditionalNode===!0&&n.constructor.prototype.isNode===!0||!1}function Iv(n){return n&&n.isConstantNode===!0&&n.constructor.prototype.isNode===!0||!1}function Uv(n){return n&&n.isFunctionAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function Bv(n){return n&&n.isFunctionNode===!0&&n.constructor.prototype.isNode===!0||!1}function Ov(n){return n&&n.isIndexNode===!0&&n.constructor.prototype.isNode===!0||!1}function zv(n){return n&&n.isNode===!0&&n.constructor.prototype.isNode===!0||!1}function Gv(n){return n&&n.isObjectNode===!0&&n.constructor.prototype.isNode===!0||!1}function Hv(n){return n&&n.isOperatorNode===!0&&n.constructor.prototype.isNode===!0||!1}function Vv(n){return n&&n.isParenthesisNode===!0&&n.constructor.prototype.isNode===!0||!1}function Wv(n){return n&&n.isRangeNode===!0&&n.constructor.prototype.isNode===!0||!1}function kv(n){return n&&n.isRelationalNode===!0&&n.constructor.prototype.isNode===!0||!1}function Xv(n){return n&&n.isSymbolNode===!0&&n.constructor.prototype.isNode===!0||!1}function $v(n){return n&&n.constructor.prototype.isChain===!0||!1}function Yn(n){var e=typeof n;return e==="object"?n===null?"null":bt(n)?"BigNumber":n.constructor&&n.constructor.name?n.constructor.name:"Object":e}function nt(n){var e=typeof n;if(e==="number"||e==="string"||e==="boolean"||n===null||n===void 0)return n;if(typeof n.clone=="function")return n.clone();if(Array.isArray(n))return n.map(function(t){return nt(t)});if(n instanceof Date)return new Date(n.valueOf());if(bt(n))return n;if(n instanceof RegExp)throw new TypeError("Cannot clone "+n);return qv(n,nt)}function qv(n,e){var t={};for(var r in n)Bi(n,r)&&(t[r]=e(n[r]));return t}function Yv(n,e){for(var t in e)Bi(e,t)&&(n[t]=e[t]);return n}function gi(n,e){var t,r,i;if(Array.isArray(n)){if(!Array.isArray(e)||n.length!==e.length)return!1;for(r=0,i=n.length;r<i;r++)if(!gi(n[r],e[r]))return!1;return!0}else{if(typeof n=="function")return n===e;if(n instanceof Object){if(Array.isArray(e)||!(e instanceof Object))return!1;for(t in n)if(!(t in e)||!gi(n[t],e[t]))return!1;for(t in e)if(!(t in n))return!1;return!0}else return n===e}}function Bi(n,e){return n&&Object.hasOwnProperty.call(n,e)}function Zv(n,e){for(var t={},r=0;r<e.length;r++){var i=e[r],a=n[i];a!==void 0&&(t[i]=a)}return t}var Kv=["Matrix","Array"],Jv=["number","BigNumber","Fraction"],tn=function(e){if(e)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(ff)};Ui(tn,ff,{MATRIX_OPTIONS:Kv,NUMBER_OPTIONS:Jv});function wn(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=Qv(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(h){throw h},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,s=!1,o;return{s:function(){t=t.call(n)},n:function(){var h=t.next();return a=h.done,h},e:function(h){s=!0,o=h},f:function(){try{!a&&t.return!=null&&t.return()}finally{if(s)throw o}}}}function Qv(n,e){if(n){if(typeof n=="string")return Dl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Dl(n,e)}}function Dl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function si(n){"@babel/helpers - typeof";return si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},si(n)}function bl(){return!0}function pn(){return!1}function ri(){}var Tl="Argument is not a typed-function.";function gf(){function n(A){return si(A)==="object"&&A!==null&&A.constructor===Object}var e=[{name:"number",test:function(M){return typeof M=="number"}},{name:"string",test:function(M){return typeof M=="string"}},{name:"boolean",test:function(M){return typeof M=="boolean"}},{name:"Function",test:function(M){return typeof M=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(M){return M instanceof Date}},{name:"RegExp",test:function(M){return M instanceof RegExp}},{name:"Object",test:n},{name:"null",test:function(M){return M===null}},{name:"undefined",test:function(M){return M===void 0}}],t={name:"any",test:bl,isAny:!0},r,i,a=0,s={createCount:0};function o(A){var M=r.get(A);if(M)return M;var I='Unknown type "'+A+'"',q=A.toLowerCase(),Q,R=wn(i),J;try{for(R.s();!(J=R.n()).done;)if(Q=J.value,Q.toLowerCase()===q){I+='. Did you mean "'+Q+'" ?';break}}catch(Y){R.e(Y)}finally{R.f()}throw new TypeError(I)}function c(A){for(var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any",I=M?o(M).index:i.length,q=[],Q=0;Q<A.length;++Q){if(!A[Q]||typeof A[Q].name!="string"||typeof A[Q].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");var R=A[Q].name;if(r.has(R))throw new TypeError('Duplicate type name "'+R+'"');q.push(R),r.set(R,{name:R,test:A[Q].test,isAny:A[Q].isAny,index:I+Q,conversionsTo:[]})}var J=i.slice(I);i=i.slice(0,I).concat(q).concat(J);for(var Y=I+q.length;Y<i.length;++Y)r.get(i[Y]).index=Y}function h(){r=new Map,i=[],a=0,c([t],!1)}h(),c(e);function u(){var A,M=wn(i),I;try{for(M.s();!(I=M.n()).done;)A=I.value,r.get(A).conversionsTo=[]}catch(q){M.e(q)}finally{M.f()}a=0}function l(A){var M=i.filter(function(I){var q=r.get(I);return!q.isAny&&q.test(A)});return M.length?M:["any"]}function f(A){return A&&typeof A=="function"&&"_typedFunctionData"in A}function d(A,M,I){if(!f(A))throw new TypeError(Tl);var q=I&&I.exact,Q=Array.isArray(M)?M.join(","):M,R=S(Q),J=g(R);if(!q||J in A.signatures){var Y=A._typedFunctionData.signatureMap.get(J);if(Y)return Y}var V=R.length,ce;if(q){ce=[];var ve;for(ve in A.signatures)ce.push(A._typedFunctionData.signatureMap.get(ve))}else ce=A._typedFunctionData.signatures;for(var ae=0;ae<V;++ae){var we=R[ae],Se=[],Fe=void 0,Ne=wn(ce),$;try{for(Ne.s();!($=Ne.n()).done;){Fe=$.value;var _e=T(Fe.params,ae);if(!(!_e||we.restParam&&!_e.restParam)){if(!_e.hasAny){var ie=function(){var Qe=_(_e);if(we.types.some(function(ft){return!Qe.has(ft.name)}))return"continue"}();if(ie==="continue")continue}Se.push(Fe)}}}catch(Qe){Ne.e(Qe)}finally{Ne.f()}if(ce=Se,ce.length===0)break}var ge,xe=wn(ce),Xe;try{for(xe.s();!(Xe=xe.n()).done;)if(ge=Xe.value,ge.params.length<=V)return ge}catch(Qe){xe.e(Qe)}finally{xe.f()}throw new TypeError("Signature not found (signature: "+(A.name||"unnamed")+"("+g(R,", ")+"))")}function v(A,M,I){return d(A,M,I).implementation}function p(A,M){var I=o(M);if(I.test(A))return A;var q=I.conversionsTo;if(q.length===0)throw new Error("There are no conversions to "+M+" defined.");for(var Q=0;Q<q.length;Q++){var R=o(q[Q].from);if(R.test(A))return q[Q].convert(A)}throw new Error("Cannot convert "+A+" to "+M)}function g(A){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return A.map(function(I){return I.name}).join(M)}function m(A){var M=A.indexOf("...")===0,I=M?A.length>3?A.slice(3):"any":A,q=I.split("|").map(function(Y){return o(Y.trim())}),Q=!1,R=M?"...":"",J=q.map(function(Y){return Q=Y.isAny||Q,R+=Y.name+"|",{name:Y.name,typeIndex:Y.index,test:Y.test,isAny:Y.isAny,conversion:null,conversionIndex:-1}});return{types:J,name:R.slice(0,-1),hasAny:Q,hasConversion:!1,restParam:M}}function w(A){var M=A.types.map(function(J){return J.name}),I=G(M),q=A.hasAny,Q=A.name,R=I.map(function(J){var Y=o(J.from);return q=Y.isAny||q,Q+="|"+J.from,{name:J.from,typeIndex:Y.index,test:Y.test,isAny:Y.isAny,conversion:J,conversionIndex:J.index}});return{types:A.types.concat(R),name:Q,hasAny:q,hasConversion:R.length>0,restParam:A.restParam}}function _(A){return A.typeSet||(A.typeSet=new Set,A.types.forEach(function(M){return A.typeSet.add(M.name)})),A.typeSet}function S(A){var M=[];if(typeof A!="string")throw new TypeError("Signatures must be strings");var I=A.trim();if(I==="")return M;for(var q=I.split(","),Q=0;Q<q.length;++Q){var R=m(q[Q].trim());if(R.restParam&&Q!==q.length-1)throw new SyntaxError('Unexpected rest parameter "'+q[Q]+'": only allowed for the last parameter');if(R.types.length===0)return null;M.push(R)}return M}function E(A){var M=me(A);return M?M.restParam:!1}function D(A){if(!A||A.types.length===0)return bl;if(A.types.length===1)return o(A.types[0].name).test;if(A.types.length===2){var M=o(A.types[0].name).test,I=o(A.types[1].name).test;return function(R){return M(R)||I(R)}}else{var q=A.types.map(function(Q){return o(Q.name).test});return function(R){for(var J=0;J<q.length;J++)if(q[J](R))return!0;return!1}}}function b(A){var M,I,q;if(E(A)){M=le(A).map(D);var Q=M.length,R=D(me(A)),J=function(V){for(var ce=Q;ce<V.length;ce++)if(!R(V[ce]))return!1;return!0};return function(V){for(var ce=0;ce<M.length;ce++)if(!M[ce](V[ce]))return!1;return J(V)&&V.length>=Q+1}}else return A.length===0?function(V){return V.length===0}:A.length===1?(I=D(A[0]),function(V){return I(V[0])&&V.length===1}):A.length===2?(I=D(A[0]),q=D(A[1]),function(V){return I(V[0])&&q(V[1])&&V.length===2}):(M=A.map(D),function(V){for(var ce=0;ce<M.length;ce++)if(!M[ce](V[ce]))return!1;return V.length===M.length})}function T(A,M){return M<A.length?A[M]:E(A)?me(A):null}function y(A,M){var I=T(A,M);return I?_(I):new Set}function x(A){return A.conversion===null||A.conversion===void 0}function P(A,M){var I=new Set;return A.forEach(function(q){var Q=y(q.params,M),R,J=wn(Q),Y;try{for(J.s();!(Y=J.n()).done;)R=Y.value,I.add(R)}catch(V){J.e(V)}finally{J.f()}}),I.has("any")?["any"]:Array.from(I)}function C(A,M,I){var q,Q,R=A||"unnamed",J=I,Y,V=function(){var Ne=[];if(J.forEach(function(_e){var ie=T(_e.params,Y),ge=D(ie);(Y<_e.params.length||E(_e.params))&&ge(M[Y])&&Ne.push(_e)}),Ne.length===0){if(Q=P(J,Y),Q.length>0){var $=l(M[Y]);return q=new TypeError("Unexpected type of argument in function "+R+" (expected: "+Q.join(" or ")+", actual: "+$.join(" | ")+", index: "+Y+")"),q.data={category:"wrongType",fn:R,index:Y,actual:$,expected:Q},{v:q}}}else J=Ne};for(Y=0;Y<M.length;Y++){var ce=V();if(si(ce)==="object")return ce.v}var ve=J.map(function(Fe){return E(Fe.params)?1/0:Fe.params.length});if(M.length<Math.min.apply(null,ve))return Q=P(J,Y),q=new TypeError("Too few arguments in function "+R+" (expected: "+Q.join(" or ")+", index: "+M.length+")"),q.data={category:"tooFewArgs",fn:R,index:M.length,expected:Q},q;var ae=Math.max.apply(null,ve);if(M.length>ae)return q=new TypeError("Too many arguments in function "+R+" (expected: "+ae+", actual: "+M.length+")"),q.data={category:"tooManyArgs",fn:R,index:M.length,expectedLength:ae},q;for(var we=[],Se=0;Se<M.length;++Se)we.push(l(M[Se]).join("|"));return q=new TypeError('Arguments of type "'+we.join(", ")+'" do not match any of the defined signatures of function '+R+"."),q.data={category:"mismatch",actual:we},q}function F(A){for(var M=i.length+1,I=0;I<A.types.length;I++)x(A.types[I])&&(M=Math.min(M,A.types[I].typeIndex));return M}function N(A){for(var M=a+1,I=0;I<A.types.length;I++)x(A.types[I])||(M=Math.min(M,A.types[I].conversionIndex));return M}function L(A,M){if(A.hasAny){if(!M.hasAny)return 1}else if(M.hasAny)return-1;if(A.restParam){if(!M.restParam)return 1}else if(M.restParam)return-1;if(A.hasConversion){if(!M.hasConversion)return 1}else if(M.hasConversion)return-1;var I=F(A)-F(M);if(I<0)return-1;if(I>0)return 1;var q=N(A)-N(M);return q<0?-1:q>0?1:0}function U(A,M){var I=A.params,q=M.params,Q=me(I),R=me(q),J=E(I),Y=E(q);if(J&&Q.hasAny){if(!Y||!R.hasAny)return 1}else if(Y&&R.hasAny)return-1;var V=0,ce=0,ve,ae=wn(I),we;try{for(ae.s();!(we=ae.n()).done;)ve=we.value,ve.hasAny&&++V,ve.hasConversion&&++ce}catch(ot){ae.e(ot)}finally{ae.f()}var Se=0,Fe=0,Ne=wn(q),$;try{for(Ne.s();!($=Ne.n()).done;)ve=$.value,ve.hasAny&&++Se,ve.hasConversion&&++Fe}catch(ot){Ne.e(ot)}finally{Ne.f()}if(V!==Se)return V-Se;if(J&&Q.hasConversion){if(!Y||!R.hasConversion)return 1}else if(Y&&R.hasConversion)return-1;if(ce!==Fe)return ce-Fe;if(J){if(!Y)return 1}else if(Y)return-1;var _e=(I.length-q.length)*(J?-1:1);if(_e!==0)return _e;for(var ie=[],ge=0,xe=0;xe<I.length;++xe){var Xe=L(I[xe],q[xe]);ie.push(Xe),ge+=Xe}if(ge!==0)return ge;for(var Qe,ft=0,Xt=ie;ft<Xt.length;ft++)if(Qe=Xt[ft],Qe!==0)return Qe;return 0}function G(A){if(A.length===0)return[];var M=A.map(o);A.length>1&&M.sort(function(V,ce){return V.index-ce.index});var I=M[0].conversionsTo;if(A.length===1)return I;I=I.concat([]);for(var q=new Set(A),Q=1;Q<M.length;++Q){var R=void 0,J=wn(M[Q].conversionsTo),Y;try{for(J.s();!(Y=J.n()).done;)R=Y.value,q.has(R.from)||(I.push(R),q.add(R.from))}catch(V){J.e(V)}finally{J.f()}}return I}function H(A,M){var I=M;if(A.some(function(Y){return Y.hasConversion})){var q=E(A),Q=A.map(X);I=function(){for(var V=[],ce=q?arguments.length-1:arguments.length,ve=0;ve<ce;ve++)V[ve]=Q[ve](arguments[ve]);return q&&(V[ce]=arguments[ce].map(Q[ce])),M.apply(this,V)}}var R=I;if(E(A)){var J=A.length-1;R=function(){return I.apply(this,fe(arguments,0,J).concat([fe(arguments,J)]))}}return R}function X(A){var M,I,q,Q,R=[],J=[];switch(A.types.forEach(function(Y){Y.conversion&&(R.push(o(Y.conversion.from).test),J.push(Y.conversion.convert))}),J.length){case 0:return function(V){return V};case 1:return M=R[0],q=J[0],function(V){return M(V)?q(V):V};case 2:return M=R[0],I=R[1],q=J[0],Q=J[1],function(V){return M(V)?q(V):I(V)?Q(V):V};default:return function(V){for(var ce=0;ce<J.length;ce++)if(R[ce](V))return J[ce](V);return V}}}function z(A){function M(I,q,Q){if(q<I.length){var R=I[q],J=[];if(R.restParam){var Y=R.types.filter(x);Y.length<R.types.length&&J.push({types:Y,name:"..."+Y.map(function(V){return V.name}).join("|"),hasAny:Y.some(function(V){return V.isAny}),hasConversion:!1,restParam:!0}),J.push(R)}else J=R.types.map(function(V){return{types:[V],name:V.name,hasAny:V.isAny,hasConversion:V.conversion,restParam:!1}});return k(J,function(V){return M(I,q+1,Q.concat([V]))})}else return[Q]}return M(A,0,[])}function O(A,M){for(var I=Math.max(A.length,M.length),q=0;q<I;q++){var Q=y(A,q),R=y(M,q),J=!1,Y=void 0,V=wn(R),ce;try{for(V.s();!(ce=V.n()).done;)if(Y=ce.value,Q.has(Y)){J=!0;break}}catch(Fe){V.e(Fe)}finally{V.f()}if(!J)return!1}var ve=A.length,ae=M.length,we=E(A),Se=E(M);return we?Se?ve===ae:ae>=ve:Se?ve>=ae:ve===ae}function W(A){return A.map(function(M){return Ie(M)?Me(M.referToSelf.callback):Ee(M)?he(M.referTo.references,M.referTo.callback):M})}function K(A,M,I){var q=[],Q,R=wn(A),J;try{for(R.s();!(J=R.n()).done;){Q=J.value;var Y=I[Q];if(typeof Y!="number")throw new TypeError('No definition for referenced signature "'+Q+'"');if(Y=M[Y],typeof Y!="function")return!1;q.push(Y)}}catch(V){R.e(V)}finally{R.f()}return q}function Z(A,M,I){for(var q=W(A),Q=new Array(q.length).fill(!1),R=!0;R;){R=!1;for(var J=!0,Y=0;Y<q.length;++Y)if(!Q[Y]){var V=q[Y];if(Ie(V))q[Y]=V.referToSelf.callback(I),q[Y].referToSelf=V.referToSelf,Q[Y]=!0,J=!1;else if(Ee(V)){var ce=K(V.referTo.references,q,M);ce?(q[Y]=V.referTo.callback.apply(this,ce),q[Y].referTo=V.referTo,Q[Y]=!0,J=!1):R=!0}}if(J&&R)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return q}function j(A){var M=/\bthis(\(|\.signatures\b)/;Object.keys(A).forEach(function(I){var q=A[I];if(M.test(q.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function re(A,M){if(s.createCount++,Object.keys(M).length===0)throw new SyntaxError("No signatures provided");s.warnAgainstDeprecatedThis&&j(M);var I=[],q=[],Q={},R=[],J,Y=function(){if(!Object.prototype.hasOwnProperty.call(M,J))return"continue";var Oe=S(J);if(!Oe)return"continue";I.forEach(function(Et){if(O(Et,Oe))throw new TypeError('Conflicting signatures "'+g(Et)+'" and "'+g(Oe)+'".')}),I.push(Oe);var Br=q.length;q.push(M[J]);var At=Oe.map(w),hn=void 0,dr=wn(z(At)),Kn;try{for(dr.s();!(Kn=dr.n()).done;){hn=Kn.value;var Or=g(hn);R.push({params:hn,name:Or,fn:Br}),hn.every(function(Et){return!Et.hasConversion})&&(Q[Or]=Br)}}catch(Et){dr.e(Et)}finally{dr.f()}};for(J in M)var V=Y();R.sort(U);var ce=Z(q,Q,$t),ve;for(ve in Q)Object.prototype.hasOwnProperty.call(Q,ve)&&(Q[ve]=ce[Q[ve]]);for(var ae=[],we=new Map,Se=0,Fe=R;Se<Fe.length;Se++)ve=Fe[Se],we.has(ve.name)||(ve.fn=ce[ve.fn],ae.push(ve),we.set(ve.name,ve));for(var Ne=ae[0]&&ae[0].params.length<=2&&!E(ae[0].params),$=ae[1]&&ae[1].params.length<=2&&!E(ae[1].params),_e=ae[2]&&ae[2].params.length<=2&&!E(ae[2].params),ie=ae[3]&&ae[3].params.length<=2&&!E(ae[3].params),ge=ae[4]&&ae[4].params.length<=2&&!E(ae[4].params),xe=ae[5]&&ae[5].params.length<=2&&!E(ae[5].params),Xe=Ne&&$&&_e&&ie&&ge&&xe,Qe=0;Qe<ae.length;++Qe)ae[Qe].test=b(ae[Qe].params);for(var ft=Ne?D(ae[0].params[0]):pn,Xt=$?D(ae[1].params[0]):pn,ot=_e?D(ae[2].params[0]):pn,fn=ie?D(ae[3].params[0]):pn,Lt=ge?D(ae[4].params[0]):pn,Ji=xe?D(ae[5].params[0]):pn,Qi=Ne?D(ae[0].params[1]):pn,ds=$?D(ae[1].params[1]):pn,Ir=_e?D(ae[2].params[1]):pn,ji=ie?D(ae[3].params[1]):pn,Ur=ge?D(ae[4].params[1]):pn,ea=xe?D(ae[5].params[1]):pn,hr=0;hr<ae.length;++hr)ae[hr].implementation=H(ae[hr].params,ae[hr].fn);var ps=Ne?ae[0].implementation:ri,ms=$?ae[1].implementation:ri,B=_e?ae[2].implementation:ri,ne=ie?ae[3].implementation:ri,se=ge?ae[4].implementation:ri,te=xe?ae[5].implementation:ri,ue=Ne?ae[0].params.length:-1,Ce=$?ae[1].params.length:-1,Be=_e?ae[2].params.length:-1,Ge=ie?ae[3].params.length:-1,He=ge?ae[4].params.length:-1,Ye=xe?ae[5].params.length:-1,We=Xe?6:0,ke=ae.length,vt=ae.map(function(tt){return tt.test}),xt=ae.map(function(tt){return tt.implementation}),an=function(){for(var Oe=We;Oe<ke;Oe++)if(vt[Oe](arguments))return xt[Oe].apply(this,arguments);return s.onMismatch(A,arguments,ae)};function $t(tt,Oe){return arguments.length===ue&&ft(tt)&&Qi(Oe)?ps.apply(this,arguments):arguments.length===Ce&&Xt(tt)&&ds(Oe)?ms.apply(this,arguments):arguments.length===Be&&ot(tt)&&Ir(Oe)?B.apply(this,arguments):arguments.length===Ge&&fn(tt)&&ji(Oe)?ne.apply(this,arguments):arguments.length===He&&Lt(tt)&&Ur(Oe)?se.apply(this,arguments):arguments.length===Ye&&Ji(tt)&&ea(Oe)?te.apply(this,arguments):an.apply(this,arguments)}try{Object.defineProperty($t,"name",{value:A})}catch{}return $t.signatures=Q,$t._typedFunctionData={signatures:ae,signatureMap:we},$t}function oe(A,M,I){throw C(A,M,I)}function le(A){return fe(A,0,A.length-1)}function me(A){return A[A.length-1]}function fe(A,M,I){return Array.prototype.slice.call(A,M,I)}function pe(A,M){for(var I=0;I<A.length;I++)if(M(A[I]))return A[I]}function k(A,M){return Array.prototype.concat.apply([],A.map(M))}function ye(){var A=le(arguments).map(function(I){return g(S(I))}),M=me(arguments);if(typeof M!="function")throw new TypeError("Callback function expected as last argument");return he(A,M)}function he(A,M){return{referTo:{references:A,callback:M}}}function Me(A){if(typeof A!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:A}}}function Ee(A){return A&&si(A.referTo)==="object"&&Array.isArray(A.referTo.references)&&typeof A.referTo.callback=="function"}function Ie(A){return A&&si(A.referToSelf)==="object"&&typeof A.referToSelf.callback=="function"}function Te(A,M){if(!A)return M;if(M&&M!==A){var I=new Error("Function names do not match (expected: "+A+", actual: "+M+")");throw I.data={actual:M,expected:A},I}return A}function be(A){var M;for(var I in A)Object.prototype.hasOwnProperty.call(A,I)&&(f(A[I])||typeof A[I].signature=="string")&&(M=Te(M,A[I].name));return M}function Pe(A,M){var I;for(I in M)if(Object.prototype.hasOwnProperty.call(M,I)){if(I in A&&M[I]!==A[I]){var q=new Error('Signature "'+I+'" is defined twice');throw q.data={signature:I,sourceFunction:M[I],destFunction:A[I]},q}A[I]=M[I]}}var je=s;s=function(M){for(var I=typeof M=="string",q=I?1:0,Q=I?M:"",R={},J=q;J<arguments.length;++J){var Y=arguments[J],V={},ce=void 0;if(typeof Y=="function"?(ce=Y.name,typeof Y.signature=="string"?V[Y.signature]=Y:f(Y)&&(V=Y.signatures)):n(Y)&&(V=Y,I||(ce=be(Y))),Object.keys(V).length===0){var ve=new TypeError("Argument to 'typed' at index "+J+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw ve.data={index:J,argument:Y},ve}I||(Q=Te(Q,ce)),Pe(R,V)}return re(Q||"",R)},s.create=gf,s.createCount=je.createCount,s.onMismatch=oe,s.throwMismatchError=oe,s.createError=C,s.clear=h,s.clearConversions=u,s.addTypes=c,s._findType=o,s.referTo=ye,s.referToSelf=Me,s.convert=p,s.findSignature=d,s.find=v,s.isTypedFunction=f,s.warnAgainstDeprecatedThis=!0,s.addType=function(A,M){var I="any";M!==!1&&r.has("Object")&&(I="Object"),s.addTypes([A],I)};function et(A){if(!A||typeof A.from!="string"||typeof A.to!="string"||typeof A.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(A.to===A.from)throw new SyntaxError('Illegal to define conversion from "'+A.from+'" to itself.')}return s.addConversion=function(A){et(A);var M=o(A.to);if(M.conversionsTo.every(function(I){return I.from!==A.from}))M.conversionsTo.push({from:A.from,convert:A.convert,index:a++});else throw new Error('There is already a conversion from "'+A.from+'" to "'+M.name+'"')},s.addConversions=function(A){A.forEach(s.addConversion)},s.removeConversion=function(A){et(A);var M=o(A.to),I=pe(M.conversionsTo,function(Q){return Q.from===A.from});if(!I)throw new Error("Attempt to remove nonexistent conversion from "+A.from+" to "+A.to);if(I.convert!==A.convert)throw new Error("Conversion to remove does not match existing conversion");var q=M.conversionsTo.indexOf(I);M.conversionsTo.splice(q,1)},s.resolve=function(A,M){if(!f(A))throw new TypeError(Tl);for(var I=A._typedFunctionData.signatures,q=0;q<I.length;++q)if(I[q].test(M))return I[q];return null},s}const Cl=gf();function ht(n){return typeof n=="boolean"?!0:isFinite(n)?n===Math.round(n):!1}var jv=Math.sign||function(n){return n>0?1:n<0?-1:0};function Zs(n,e,t){var r={2:"0b",8:"0o",16:"0x"},i=r[e],a="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!ht(t))throw new Error("size must be an integer");if(n>2**(t-1)-1||n<-(2**(t-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!ht(n))throw new Error("Value must be an integer");n<0&&(n=n+2**t),a="i".concat(t)}var s="";return n<0&&(n=-n,s="-"),"".concat(s).concat(i).concat(n.toString(e)).concat(a)}function fo(n,e){if(typeof e=="function")return e(n);if(n===1/0)return"Infinity";if(n===-1/0)return"-Infinity";if(isNaN(n))return"NaN";var t="auto",r,i;if(e&&(e.notation&&(t=e.notation),gt(e)?r=e:gt(e.precision)&&(r=e.precision),e.wordSize&&(i=e.wordSize,typeof i!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return t_(n,r);case"exponential":return vf(n,r);case"engineering":return e_(n,r);case"bin":return Zs(n,2,i);case"oct":return Zs(n,8,i);case"hex":return Zs(n,16,i);case"auto":return n_(n,r,e&&e).replace(/((\.\d*?)(0+))($|e)/,function(){var a=arguments[2],s=arguments[4];return a!=="."?a+s:s});default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function es(n){var e=String(n).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!e)throw new SyntaxError("Invalid number "+n);var t=e[1],r=e[2],i=parseFloat(e[4]||"0"),a=r.indexOf(".");i+=a!==-1?a-1:r.length-1;var s=r.replace(".","").replace(/^0*/,function(o){return i-=o.length,""}).replace(/0*$/,"").split("").map(function(o){return parseInt(o)});return s.length===0&&(s.push(0),i++),{sign:t,coefficients:s,exponent:i}}function e_(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=es(n),r=ts(t,e),i=r.exponent,a=r.coefficients,s=i%3===0?i:i<0?i-3-i%3:i-i%3;if(gt(e))for(;e>a.length||i-s+1>a.length;)a.push(0);else for(var o=Math.abs(i-s)-(a.length-1),c=0;c<o;c++)a.push(0);for(var h=Math.abs(i-s),u=1;h>0;)u++,h--;var l=a.slice(u).join(""),f=gt(e)&&l.length||l.match(/[1-9]/)?"."+l:"",d=a.slice(0,u).join("")+f+"e"+(i>=0?"+":"")+s.toString();return r.sign+d}function t_(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=es(n),r=typeof e=="number"?ts(t,t.exponent+1+e):t,i=r.coefficients,a=r.exponent+1,s=a+(e||0);return i.length<s&&(i=i.concat(fi(s-i.length))),a<0&&(i=fi(-a+1).concat(i),a=1),a<i.length&&i.splice(a,0,a===0?"0.":"."),r.sign+i.join("")}function vf(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=es(n),r=e?ts(t,e):t,i=r.coefficients,a=r.exponent;i.length<e&&(i=i.concat(fi(e-i.length)));var s=i.shift();return r.sign+s+(i.length>0?"."+i.join(""):"")+"e"+(a>=0?"+":"")+a}function n_(n,e,t){if(isNaN(n)||!isFinite(n))return String(n);var r=t&&t.lowerExp!==void 0?t.lowerExp:-3,i=t&&t.upperExp!==void 0?t.upperExp:5,a=es(n),s=e?ts(a,e):a;if(s.exponent<r||s.exponent>=i)return vf(n,e);var o=s.coefficients,c=s.exponent;o.length<e&&(o=o.concat(fi(e-o.length))),o=o.concat(fi(c-o.length+1+(o.length<e?e-o.length:0))),o=fi(-c).concat(o);var h=c>0?c:0;return h<o.length-1&&o.splice(h+1,0,"."),s.sign+o.join("")}function ts(n,e){for(var t={sign:n.sign,coefficients:n.coefficients,exponent:n.exponent},r=t.coefficients;e<=0;)r.unshift(0),t.exponent++,e++;if(r.length>e){var i=r.splice(e,r.length-e);if(i[0]>=5){var a=e-1;for(r[a]++;r[a]===10;)r.pop(),a===0&&(r.unshift(0),t.exponent++,a++),a--,r[a]++}}return t}function fi(n){for(var e=[],t=0;t<n;t++)e.push(0);return e}function r_(n){return n.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}var i_=Number.EPSILON||2220446049250313e-31;function or(n,e,t){if(t==null)return n===e;if(n===e)return!0;if(isNaN(n)||isNaN(e))return!1;if(isFinite(n)&&isFinite(e)){var r=Math.abs(n-e);return r<i_?!0:r<=Math.max(Math.abs(n),Math.abs(e))*t}return!1}function Ks(n,e,t){var r=n.constructor,i=new r(2),a="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!ht(t))throw new Error("size must be an integer");if(n.greaterThan(i.pow(t-1).sub(1))||n.lessThan(i.pow(t-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!n.isInteger())throw new Error("Value must be an integer");n.lessThan(0)&&(n=n.add(i.pow(t))),a="i".concat(t)}switch(e){case 2:return"".concat(n.toBinary()).concat(a);case 8:return"".concat(n.toOctal()).concat(a);case 16:return"".concat(n.toHexadecimal()).concat(a);default:throw new Error("Base ".concat(e," not supported "))}}function a_(n,e){if(typeof e=="function")return e(n);if(!n.isFinite())return n.isNaN()?"NaN":n.gt(0)?"Infinity":"-Infinity";var t="auto",r,i;if(e!==void 0&&(e.notation&&(t=e.notation),typeof e=="number"?r=e:e.precision!==void 0&&(r=e.precision),e.wordSize&&(i=e.wordSize,typeof i!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return o_(n,r);case"exponential":return Fl(n,r);case"engineering":return s_(n,r);case"bin":return Ks(n,2,i);case"oct":return Ks(n,8,i);case"hex":return Ks(n,16,i);case"auto":{var a=e&&e.lowerExp!==void 0?e.lowerExp:-3,s=e&&e.upperExp!==void 0?e.upperExp:5;if(n.isZero())return"0";var o,c=n.toSignificantDigits(r),h=c.e;return h>=a&&h<s?o=c.toFixed():o=Fl(n,r),o.replace(/((\.\d*?)(0+))($|e)/,function(){var u=arguments[2],l=arguments[4];return u!=="."?u+l:l})}default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function s_(n,e){var t=n.e,r=t%3===0?t:t<0?t-3-t%3:t-t%3,i=n.mul(Math.pow(10,-r)),a=i.toPrecision(e);if(a.indexOf("e")!==-1){var s=n.constructor;a=new s(a).toFixed()}return a+"e"+(t>=0?"+":"")+r.toString()}function Fl(n,e){return e!==void 0?n.toExponential(e-1):n.toExponential()}function o_(n,e){return n.toFixed(e)}function mt(n,e){var t=u_(n,e);return e&&typeof e=="object"&&"truncate"in e&&t.length>e.truncate?t.substring(0,e.truncate-3)+"...":t}function u_(n,e){if(typeof n=="number")return fo(n,e);if(bt(n))return a_(n,e);if(l_(n))return!e||e.fraction!=="decimal"?n.s*n.n+"/"+n.d:n.toString();if(Array.isArray(n))return _f(n,e);if(Tn(n))return'"'+n+'"';if(typeof n=="function")return n.syntax?String(n.syntax):"function";if(n&&typeof n=="object"){if(typeof n.format=="function")return n.format(e);if(n&&n.toString(e)!=={}.toString())return n.toString(e);var t=Object.keys(n).map(r=>'"'+r+'": '+mt(n[r],e));return"{"+t.join(", ")+"}"}return String(n)}function _f(n,e){if(Array.isArray(n)){for(var t="[",r=n.length,i=0;i<r;i++)i!==0&&(t+=", "),t+=_f(n[i],e);return t+="]",t}else return mt(n,e)}function l_(n){return n&&typeof n=="object"&&typeof n.s=="number"&&typeof n.n=="number"&&typeof n.d=="number"||!1}function st(n,e,t){if(!(this instanceof st))throw new SyntaxError("Constructor must be called with the new operator");this.actual=n,this.expected=e,this.relation=t,this.message="Dimension mismatch ("+(Array.isArray(n)?"["+n.join(", ")+"]":n)+" "+(this.relation||"!=")+" "+(Array.isArray(e)?"["+e.join(", ")+"]":e)+")",this.stack=new Error().stack}st.prototype=new RangeError;st.prototype.constructor=RangeError;st.prototype.name="DimensionError";st.prototype.isDimensionError=!0;function Rr(n,e,t){if(!(this instanceof Rr))throw new SyntaxError("Constructor must be called with the new operator");this.index=n,arguments.length<3?(this.min=0,this.max=e):(this.min=e,this.max=t),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}Rr.prototype=new RangeError;Rr.prototype.constructor=RangeError;Rr.prototype.name="IndexError";Rr.prototype.isIndexError=!0;function dt(n){for(var e=[];Array.isArray(n);)e.push(n.length),n=n[0];return e}function xf(n,e,t){var r,i=n.length;if(i!==e[t])throw new st(i,e[t]);if(t<e.length-1){var a=t+1;for(r=0;r<i;r++){var s=n[r];if(!Array.isArray(s))throw new st(e.length-1,e.length,"<");xf(n[r],e,a)}}else for(r=0;r<i;r++)if(Array.isArray(n[r]))throw new st(e.length+1,e.length,">")}function Rl(n,e){var t=e.length===0;if(t){if(Array.isArray(n))throw new st(n.length,0)}else xf(n,e,0)}function _t(n,e){if(n!==void 0){if(!gt(n)||!ht(n))throw new TypeError("Index must be an integer (value: "+n+")");if(n<0||typeof e=="number"&&n>=e)throw new Rr(n,e)}}function Ua(n,e,t){if(!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Error("Resizing to scalar is not supported");e.forEach(function(i){if(!gt(i)||!ht(i)||i<0)throw new TypeError("Invalid size, must contain positive integers (size: "+mt(e)+")")}),(gt(n)||bt(n))&&(n=[n]);var r=t!==void 0?t:0;return ho(n,e,0,r),n}function ho(n,e,t,r){var i,a,s=n.length,o=e[t],c=Math.min(s,o);if(n.length=o,t<e.length-1){var h=t+1;for(i=0;i<c;i++)a=n[i],Array.isArray(a)||(a=[a],n[i]=a),ho(a,e,h,r);for(i=c;i<o;i++)a=[],n[i]=a,ho(a,e,h,r)}else{for(i=0;i<c;i++)for(;Array.isArray(n[i]);)n[i]=n[i][0];for(i=c;i<o;i++)n[i]=r}}function Ef(n,e){var t=po(n),r=t.length;if(!Array.isArray(n)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new st(0,r,"!=");e=Bo(e,r);var i=yf(e);if(r!==i)throw new st(i,r,"!=");try{return c_(t,e)}catch(a){throw a instanceof st?new st(i,r,"!="):a}}function Bo(n,e){var t=yf(n),r=n.slice(),i=-1,a=n.indexOf(i),s=n.indexOf(i,a+1)>=0;if(s)throw new Error("More than one wildcard in sizes");var o=a>=0,c=e%t===0;if(o)if(c)r[a]=-e/t;else throw new Error("Could not replace wildcard, since "+e+" is no multiple of "+-t);return r}function yf(n){return n.reduce((e,t)=>e*t,1)}function c_(n,e){for(var t=n,r,i=e.length-1;i>0;i--){var a=e[i];r=[];for(var s=t.length/a,o=0;o<s;o++)r.push(t.slice(o*a,(o+1)*a));t=r}return t}function Nl(n,e){for(var t=e||dt(n);Array.isArray(n)&&n.length===1;)n=n[0],t.shift();for(var r=t.length;t[r-1]===1;)r--;return r<t.length&&(n=Mf(n,r,0),t.length=r),n}function Mf(n,e,t){var r,i;if(t<e){var a=t+1;for(r=0,i=n.length;r<i;r++)n[r]=Mf(n[r],e,a)}else for(;Array.isArray(n);)n=n[0];return n}function Af(n,e,t,r){var i=r||dt(n);if(t)for(var a=0;a<t;a++)n=[n],i.unshift(1);for(n=Sf(n,e,0);i.length<e;)i.push(1);return n}function Sf(n,e,t){var r,i;if(Array.isArray(n)){var a=t+1;for(r=0,i=n.length;r<i;r++)n[r]=Sf(n[r],e,a)}else for(var s=t;s<e;s++)n=[n];return n}function po(n){if(!Array.isArray(n))return n;var e=[];return n.forEach(function t(r){Array.isArray(r)?r.forEach(t):e.push(r)}),e}function Oi(n,e){for(var t,r=0,i=0;i<n.length;i++){var a=n[i],s=Array.isArray(a);if(i===0&&s&&(r=a.length),s&&a.length!==r)return;var o=s?Oi(a,e):e(a);if(t===void 0)t=o;else if(t!==o)return"mixed"}return t}function wf(n,e,t,r){if(r<t){if(n.length!==e.length)throw new st(n.length,e.length);for(var i=[],a=0;a<n.length;a++)i[a]=wf(n[a],e[a],t,r+1);return i}else return n.concat(e)}function Df(){var n=Array.prototype.slice.call(arguments,0,-1),e=Array.prototype.slice.call(arguments,-1);if(n.length===1)return n[0];if(n.length>1)return n.slice(1).reduce(function(t,r){return wf(t,r,e,0)},n[0]);throw new Error("Wrong number of arguments in function concat")}function f_(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];for(var r=e.map(f=>f.length),i=Math.max(...r),a=new Array(i).fill(null),s=0;s<e.length;s++)for(var o=e[s],c=r[s],h=0;h<c;h++){var u=i-c+h;o[h]>a[u]&&(a[u]=o[h])}for(var l=0;l<e.length;l++)Ba(e[l],a);return a}function Ba(n,e){for(var t=e.length,r=n.length,i=0;i<r;i++){var a=t-r+i;if(n[i]<e[a]&&n[i]>1||n[i]>e[a])throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(n,") not possible to broadcast dimension ").concat(r," with size ").concat(n[i]," to size ").concat(e[a]))}}function Ll(n,e){var t=dt(n);if(gi(t,e))return n;Ba(t,e);var r=f_(t,e),i=r.length,a=[...Array(i-t.length).fill(1),...t],s=d_(n);t.length<i&&(s=Ef(s,a),t=dt(s));for(var o=0;o<i;o++)t[o]<r[o]&&(s=h_(s,r[o],o),t=dt(s));return s}function h_(n,e,t){return Df(...Array(e).fill(n),t)}function d_(n){return Ui([],n)}function Ae(n,e,t,r){function i(a){var s=Zv(a,e.map(g_));return p_(n,e,a),t(s)}return i.isFactory=!0,i.fn=n,i.dependencies=e.slice().sort(),r&&(i.meta=r),i}function p_(n,e,t){var r=e.filter(a=>!m_(a)).every(a=>t[a]!==void 0);if(!r){var i=e.filter(a=>t[a]===void 0);throw new Error('Cannot create function "'.concat(n,'", ')+"some dependencies are missing: ".concat(i.map(a=>'"'.concat(a,'"')).join(", "),"."))}}function m_(n){return n&&n[0]==="?"}function g_(n){return n&&n[0]==="?"?n.slice(1):n}function v_(n,e){if(Tf(n)&&bf(n,e))return n[e];throw typeof n[e]=="function"&&E_(n,e)?new Error('Cannot access method "'+e+'" as a property'):new Error('No access to property "'+e+'"')}function __(n,e,t){if(Tf(n)&&bf(n,e))return n[e]=t,t;throw new Error('No access to property "'+e+'"')}function x_(n,e){return e in n}function bf(n,e){return!n||typeof n!="object"?!1:Bi(y_,e)?!0:!(e in Object.prototype||e in Function.prototype)}function E_(n,e){return n==null||typeof n[e]!="function"||Bi(n,e)&&Object.getPrototypeOf&&e in Object.getPrototypeOf(n)?!1:Bi(M_,e)?!0:!(e in Object.prototype||e in Function.prototype)}function Tf(n){return typeof n=="object"&&n&&n.constructor===Object}var y_={length:!0,name:!0},M_={toString:!0,valueOf:!0,toLocaleString:!0};class A_{constructor(e){this.wrappedObject=e}keys(){return Object.keys(this.wrappedObject)}get(e){return v_(this.wrappedObject,e)}set(e,t){return __(this.wrappedObject,e,t),this}has(e){return x_(this.wrappedObject,e)}}function S_(n){return n?n instanceof Map||n instanceof A_||typeof n.set=="function"&&typeof n.get=="function"&&typeof n.keys=="function"&&typeof n.has=="function":!1}var Cf=function(){return Cf=Cl.create,Cl},w_=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],D_=Ae("typed",w_,function(e){var{BigNumber:t,Complex:r,DenseMatrix:i,Fraction:a}=e,s=Cf();return s.clear(),s.addTypes([{name:"number",test:gt},{name:"Complex",test:Po},{name:"BigNumber",test:bt},{name:"Fraction",test:Io},{name:"Unit",test:hf},{name:"identifier",test:o=>Tn&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(o)},{name:"string",test:Tn},{name:"Chain",test:$v},{name:"Array",test:ut},{name:"Matrix",test:pt},{name:"DenseMatrix",test:df},{name:"SparseMatrix",test:pf},{name:"Range",test:mf},{name:"Index",test:Uo},{name:"boolean",test:yv},{name:"ResultSet",test:Mv},{name:"Help",test:Av},{name:"function",test:Sv},{name:"Date",test:wv},{name:"RegExp",test:Dv},{name:"null",test:Tv},{name:"undefined",test:Cv},{name:"AccessorNode",test:Fv},{name:"ArrayNode",test:Rv},{name:"AssignmentNode",test:Nv},{name:"BlockNode",test:Lv},{name:"ConditionalNode",test:Pv},{name:"ConstantNode",test:Iv},{name:"FunctionNode",test:Bv},{name:"FunctionAssignmentNode",test:Uv},{name:"IndexNode",test:Ov},{name:"Node",test:zv},{name:"ObjectNode",test:Gv},{name:"OperatorNode",test:Hv},{name:"ParenthesisNode",test:Vv},{name:"RangeNode",test:Wv},{name:"RelationalNode",test:kv},{name:"SymbolNode",test:Xv},{name:"Map",test:S_},{name:"Object",test:bv}]),s.addConversions([{from:"number",to:"BigNumber",convert:function(c){if(t||Js(c),r_(c)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+c+"). Use function bignumber(x) to convert to BigNumber.");return new t(c)}},{from:"number",to:"Complex",convert:function(c){return r||ba(c),new r(c,0)}},{from:"BigNumber",to:"Complex",convert:function(c){return r||ba(c),new r(c.toNumber(),0)}},{from:"Fraction",to:"BigNumber",convert:function(c){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(c){return r||ba(c),new r(c.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(c){a||Qs(c);var h=new a(c);if(h.valueOf()!==c)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+c+"). Use function fraction(x) to convert to Fraction.");return h}},{from:"string",to:"number",convert:function(c){var h=Number(c);if(isNaN(h))throw new Error('Cannot convert "'+c+'" to a number');return h}},{from:"string",to:"BigNumber",convert:function(c){t||Js(c);try{return new t(c)}catch{throw new Error('Cannot convert "'+c+'" to BigNumber')}}},{from:"string",to:"Fraction",convert:function(c){a||Qs(c);try{return new a(c)}catch{throw new Error('Cannot convert "'+c+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(c){r||ba(c);try{return new r(c)}catch{throw new Error('Cannot convert "'+c+'" to Complex')}}},{from:"boolean",to:"number",convert:function(c){return+c}},{from:"boolean",to:"BigNumber",convert:function(c){return t||Js(c),new t(+c)}},{from:"boolean",to:"Fraction",convert:function(c){return a||Qs(c),new a(+c)}},{from:"boolean",to:"string",convert:function(c){return String(c)}},{from:"Array",to:"Matrix",convert:function(c){return i||b_(),new i(c)}},{from:"Matrix",to:"Array",convert:function(c){return c.valueOf()}}]),s.onMismatch=(o,c,h)=>{var u=s.createError(o,c,h);if(["wrongType","mismatch"].includes(u.data.category)&&c.length===1&&Ia(c[0])&&h.some(f=>!f.params.includes(","))){var l=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw l.data=u.data,l}throw u},s.onMismatch=(o,c,h)=>{var u=s.createError(o,c,h);if(["wrongType","mismatch"].includes(u.data.category)&&c.length===1&&Ia(c[0])&&h.some(f=>!f.params.includes(","))){var l=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw l.data=u.data,l}throw u},s});function Js(n){throw new Error("Cannot convert value ".concat(n," into a BigNumber: no class 'BigNumber' provided"))}function ba(n){throw new Error("Cannot convert value ".concat(n," into a Complex number: no class 'Complex' provided"))}function b_(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function Qs(n){throw new Error("Cannot convert value ".concat(n," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var oi=9e15,cr=1e9,mo="0123456789abcdef",Oa="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",za="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",go={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-oi,maxE:oi,crypto:!1},Ff,$n,Ve=!0,ns="[DecimalError] ",ur=ns+"Invalid argument: ",Rf=ns+"Precision limit exceeded",Nf=ns+"crypto unavailable",Lf="[object Decimal]",kt=Math.floor,Dt=Math.pow,T_=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,C_=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,F_=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,Pf=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,Nn=1e7,ze=7,R_=9007199254740991,N_=Oa.length-1,vo=za.length-1,de={toStringTag:Lf};de.absoluteValue=de.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),Le(n)};de.ceil=function(){return Le(new this.constructor(this),this.e+1,2)};de.clampedTo=de.clamp=function(n,e){var t,r=this,i=r.constructor;if(n=new i(n),e=new i(e),!n.s||!e.s)return new i(NaN);if(n.gt(e))throw Error(ur+e);return t=r.cmp(n),t<0?n:r.cmp(e)>0?e:new i(r)};de.comparedTo=de.cmp=function(n){var e,t,r,i,a=this,s=a.d,o=(n=new a.constructor(n)).d,c=a.s,h=n.s;if(!s||!o)return!c||!h?NaN:c!==h?c:s===o?0:!s^c<0?1:-1;if(!s[0]||!o[0])return s[0]?c:o[0]?-h:0;if(c!==h)return c;if(a.e!==n.e)return a.e>n.e^c<0?1:-1;for(r=s.length,i=o.length,e=0,t=r<i?r:i;e<t;++e)if(s[e]!==o[e])return s[e]>o[e]^c<0?1:-1;return r===i?0:r>i^c<0?1:-1};de.cosine=de.cos=function(){var n,e,t=this,r=t.constructor;return t.d?t.d[0]?(n=r.precision,e=r.rounding,r.precision=n+Math.max(t.e,t.sd())+ze,r.rounding=1,t=L_(r,zf(r,t)),r.precision=n,r.rounding=e,Le($n==2||$n==3?t.neg():t,n,e,!0)):new r(1):new r(NaN)};de.cubeRoot=de.cbrt=function(){var n,e,t,r,i,a,s,o,c,h,u=this,l=u.constructor;if(!u.isFinite()||u.isZero())return new l(u);for(Ve=!1,a=u.s*Dt(u.s*u,1/3),!a||Math.abs(a)==1/0?(t=Ut(u.d),n=u.e,(a=(n-t.length+1)%3)&&(t+=a==1||a==-2?"0":"00"),a=Dt(t,1/3),n=kt((n+1)/3)-(n%3==(n<0?-1:2)),a==1/0?t="5e"+n:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+n),r=new l(t),r.s=u.s):r=new l(a.toString()),s=(n=l.precision)+3;;)if(o=r,c=o.times(o).times(o),h=c.plus(u),r=lt(h.plus(u).times(o),h.plus(c),s+2,1),Ut(o.d).slice(0,s)===(t=Ut(r.d)).slice(0,s))if(t=t.slice(s-3,s+1),t=="9999"||!i&&t=="4999"){if(!i&&(Le(o,n+1,0),o.times(o).times(o).eq(u))){r=o;break}s+=4,i=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(Le(r,n+1,1),e=!r.times(r).times(r).eq(u));break}return Ve=!0,Le(r,n,l.rounding,e)};de.decimalPlaces=de.dp=function(){var n,e=this.d,t=NaN;if(e){if(n=e.length-1,t=(n-kt(this.e/ze))*ze,n=e[n],n)for(;n%10==0;n/=10)t--;t<0&&(t=0)}return t};de.dividedBy=de.div=function(n){return lt(this,new this.constructor(n))};de.dividedToIntegerBy=de.divToInt=function(n){var e=this,t=e.constructor;return Le(lt(e,new t(n),0,1,1),t.precision,t.rounding)};de.equals=de.eq=function(n){return this.cmp(n)===0};de.floor=function(){return Le(new this.constructor(this),this.e+1,3)};de.greaterThan=de.gt=function(n){return this.cmp(n)>0};de.greaterThanOrEqualTo=de.gte=function(n){var e=this.cmp(n);return e==1||e===0};de.hyperbolicCosine=de.cosh=function(){var n,e,t,r,i,a=this,s=a.constructor,o=new s(1);if(!a.isFinite())return new s(a.s?1/0:NaN);if(a.isZero())return o;t=s.precision,r=s.rounding,s.precision=t+Math.max(a.e,a.sd())+4,s.rounding=1,i=a.d.length,i<32?(n=Math.ceil(i/3),e=(1/is(4,n)).toString()):(n=16,e="2.3283064365386962890625e-10"),a=vi(s,1,a.times(e),new s(1),!0);for(var c,h=n,u=new s(8);h--;)c=a.times(a),a=o.minus(c.times(u.minus(c.times(u))));return Le(a,s.precision=t,s.rounding=r,!0)};de.hyperbolicSine=de.sinh=function(){var n,e,t,r,i=this,a=i.constructor;if(!i.isFinite()||i.isZero())return new a(i);if(e=a.precision,t=a.rounding,a.precision=e+Math.max(i.e,i.sd())+4,a.rounding=1,r=i.d.length,r<3)i=vi(a,2,i,i,!0);else{n=1.4*Math.sqrt(r),n=n>16?16:n|0,i=i.times(1/is(5,n)),i=vi(a,2,i,i,!0);for(var s,o=new a(5),c=new a(16),h=new a(20);n--;)s=i.times(i),i=i.times(o.plus(s.times(c.times(s).plus(h))))}return a.precision=e,a.rounding=t,Le(i,e,t,!0)};de.hyperbolicTangent=de.tanh=function(){var n,e,t=this,r=t.constructor;return t.isFinite()?t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+7,r.rounding=1,lt(t.sinh(),t.cosh(),r.precision=n,r.rounding=e)):new r(t.s)};de.inverseCosine=de.acos=function(){var n,e=this,t=e.constructor,r=e.abs().cmp(1),i=t.precision,a=t.rounding;return r!==-1?r===0?e.isNeg()?Rn(t,i,a):new t(0):new t(NaN):e.isZero()?Rn(t,i+4,a).times(.5):(t.precision=i+6,t.rounding=1,e=e.asin(),n=Rn(t,i+4,a).times(.5),t.precision=i,t.rounding=a,n.minus(e))};de.inverseHyperbolicCosine=de.acosh=function(){var n,e,t=this,r=t.constructor;return t.lte(1)?new r(t.eq(1)?0:NaN):t.isFinite()?(n=r.precision,e=r.rounding,r.precision=n+Math.max(Math.abs(t.e),t.sd())+4,r.rounding=1,Ve=!1,t=t.times(t).minus(1).sqrt().plus(t),Ve=!0,r.precision=n,r.rounding=e,t.ln()):new r(t)};de.inverseHyperbolicSine=de.asinh=function(){var n,e,t=this,r=t.constructor;return!t.isFinite()||t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+2*Math.max(Math.abs(t.e),t.sd())+6,r.rounding=1,Ve=!1,t=t.times(t).plus(1).sqrt().plus(t),Ve=!0,r.precision=n,r.rounding=e,t.ln())};de.inverseHyperbolicTangent=de.atanh=function(){var n,e,t,r,i=this,a=i.constructor;return i.isFinite()?i.e>=0?new a(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(n=a.precision,e=a.rounding,r=i.sd(),Math.max(r,n)<2*-i.e-1?Le(new a(i),n,e,!0):(a.precision=t=r-i.e,i=lt(i.plus(1),new a(1).minus(i),t+n,1),a.precision=n+4,a.rounding=1,i=i.ln(),a.precision=n,a.rounding=e,i.times(.5))):new a(NaN)};de.inverseSine=de.asin=function(){var n,e,t,r,i=this,a=i.constructor;return i.isZero()?new a(i):(e=i.abs().cmp(1),t=a.precision,r=a.rounding,e!==-1?e===0?(n=Rn(a,t+4,r).times(.5),n.s=i.s,n):new a(NaN):(a.precision=t+6,a.rounding=1,i=i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(),a.precision=t,a.rounding=r,i.times(2)))};de.inverseTangent=de.atan=function(){var n,e,t,r,i,a,s,o,c,h=this,u=h.constructor,l=u.precision,f=u.rounding;if(h.isFinite()){if(h.isZero())return new u(h);if(h.abs().eq(1)&&l+4<=vo)return s=Rn(u,l+4,f).times(.25),s.s=h.s,s}else{if(!h.s)return new u(NaN);if(l+4<=vo)return s=Rn(u,l+4,f).times(.5),s.s=h.s,s}for(u.precision=o=l+10,u.rounding=1,t=Math.min(28,o/ze+2|0),n=t;n;--n)h=h.div(h.times(h).plus(1).sqrt().plus(1));for(Ve=!1,e=Math.ceil(o/ze),r=1,c=h.times(h),s=new u(h),i=h;n!==-1;)if(i=i.times(c),a=s.minus(i.div(r+=2)),i=i.times(c),s=a.plus(i.div(r+=2)),s.d[e]!==void 0)for(n=e;s.d[n]===a.d[n]&&n--;);return t&&(s=s.times(2<<t-1)),Ve=!0,Le(s,u.precision=l,u.rounding=f,!0)};de.isFinite=function(){return!!this.d};de.isInteger=de.isInt=function(){return!!this.d&&kt(this.e/ze)>this.d.length-2};de.isNaN=function(){return!this.s};de.isNegative=de.isNeg=function(){return this.s<0};de.isPositive=de.isPos=function(){return this.s>0};de.isZero=function(){return!!this.d&&this.d[0]===0};de.lessThan=de.lt=function(n){return this.cmp(n)<0};de.lessThanOrEqualTo=de.lte=function(n){return this.cmp(n)<1};de.logarithm=de.log=function(n){var e,t,r,i,a,s,o,c,h=this,u=h.constructor,l=u.precision,f=u.rounding,d=5;if(n==null)n=new u(10),e=!0;else{if(n=new u(n),t=n.d,n.s<0||!t||!t[0]||n.eq(1))return new u(NaN);e=n.eq(10)}if(t=h.d,h.s<0||!t||!t[0]||h.eq(1))return new u(t&&!t[0]?-1/0:h.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)a=!0;else{for(i=t[0];i%10===0;)i/=10;a=i!==1}if(Ve=!1,o=l+d,s=ir(h,o),r=e?Ga(u,o+10):ir(n,o),c=lt(s,r,o,1),zi(c.d,i=l,f))do if(o+=10,s=ir(h,o),r=e?Ga(u,o+10):ir(n,o),c=lt(s,r,o,1),!a){+Ut(c.d).slice(i+1,i+15)+1==1e14&&(c=Le(c,l+1,0));break}while(zi(c.d,i+=10,f));return Ve=!0,Le(c,l,f)};de.minus=de.sub=function(n){var e,t,r,i,a,s,o,c,h,u,l,f,d=this,v=d.constructor;if(n=new v(n),!d.d||!n.d)return!d.s||!n.s?n=new v(NaN):d.d?n.s=-n.s:n=new v(n.d||d.s!==n.s?d:NaN),n;if(d.s!=n.s)return n.s=-n.s,d.plus(n);if(h=d.d,f=n.d,o=v.precision,c=v.rounding,!h[0]||!f[0]){if(f[0])n.s=-n.s;else if(h[0])n=new v(d);else return new v(c===3?-0:0);return Ve?Le(n,o,c):n}if(t=kt(n.e/ze),u=kt(d.e/ze),h=h.slice(),a=u-t,a){for(l=a<0,l?(e=h,a=-a,s=f.length):(e=f,t=u,s=h.length),r=Math.max(Math.ceil(o/ze),s)+2,a>r&&(a=r,e.length=1),e.reverse(),r=a;r--;)e.push(0);e.reverse()}else{for(r=h.length,s=f.length,l=r<s,l&&(s=r),r=0;r<s;r++)if(h[r]!=f[r]){l=h[r]<f[r];break}a=0}for(l&&(e=h,h=f,f=e,n.s=-n.s),s=h.length,r=f.length-s;r>0;--r)h[s++]=0;for(r=f.length;r>a;){if(h[--r]<f[r]){for(i=r;i&&h[--i]===0;)h[i]=Nn-1;--h[i],h[r]+=Nn}h[r]-=f[r]}for(;h[--s]===0;)h.pop();for(;h[0]===0;h.shift())--t;return h[0]?(n.d=h,n.e=rs(h,t),Ve?Le(n,o,c):n):new v(c===3?-0:0)};de.modulo=de.mod=function(n){var e,t=this,r=t.constructor;return n=new r(n),!t.d||!n.s||n.d&&!n.d[0]?new r(NaN):!n.d||t.d&&!t.d[0]?Le(new r(t),r.precision,r.rounding):(Ve=!1,r.modulo==9?(e=lt(t,n.abs(),0,3,1),e.s*=n.s):e=lt(t,n,0,r.modulo,1),e=e.times(n),Ve=!0,t.minus(e))};de.naturalExponential=de.exp=function(){return _o(this)};de.naturalLogarithm=de.ln=function(){return ir(this)};de.negated=de.neg=function(){var n=new this.constructor(this);return n.s=-n.s,Le(n)};de.plus=de.add=function(n){var e,t,r,i,a,s,o,c,h,u,l=this,f=l.constructor;if(n=new f(n),!l.d||!n.d)return!l.s||!n.s?n=new f(NaN):l.d||(n=new f(n.d||l.s===n.s?l:NaN)),n;if(l.s!=n.s)return n.s=-n.s,l.minus(n);if(h=l.d,u=n.d,o=f.precision,c=f.rounding,!h[0]||!u[0])return u[0]||(n=new f(l)),Ve?Le(n,o,c):n;if(a=kt(l.e/ze),r=kt(n.e/ze),h=h.slice(),i=a-r,i){for(i<0?(t=h,i=-i,s=u.length):(t=u,r=a,s=h.length),a=Math.ceil(o/ze),s=a>s?a+1:s+1,i>s&&(i=s,t.length=1),t.reverse();i--;)t.push(0);t.reverse()}for(s=h.length,i=u.length,s-i<0&&(i=s,t=u,u=h,h=t),e=0;i;)e=(h[--i]=h[i]+u[i]+e)/Nn|0,h[i]%=Nn;for(e&&(h.unshift(e),++r),s=h.length;h[--s]==0;)h.pop();return n.d=h,n.e=rs(h,r),Ve?Le(n,o,c):n};de.precision=de.sd=function(n){var e,t=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(ur+n);return t.d?(e=If(t.d),n&&t.e+1>e&&(e=t.e+1)):e=NaN,e};de.round=function(){var n=this,e=n.constructor;return Le(new e(n),n.e+1,e.rounding)};de.sine=de.sin=function(){var n,e,t=this,r=t.constructor;return t.isFinite()?t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+Math.max(t.e,t.sd())+ze,r.rounding=1,t=I_(r,zf(r,t)),r.precision=n,r.rounding=e,Le($n>2?t.neg():t,n,e,!0)):new r(NaN)};de.squareRoot=de.sqrt=function(){var n,e,t,r,i,a,s=this,o=s.d,c=s.e,h=s.s,u=s.constructor;if(h!==1||!o||!o[0])return new u(!h||h<0&&(!o||o[0])?NaN:o?s:1/0);for(Ve=!1,h=Math.sqrt(+s),h==0||h==1/0?(e=Ut(o),(e.length+c)%2==0&&(e+="0"),h=Math.sqrt(e),c=kt((c+1)/2)-(c<0||c%2),h==1/0?e="5e"+c:(e=h.toExponential(),e=e.slice(0,e.indexOf("e")+1)+c),r=new u(e)):r=new u(h.toString()),t=(c=u.precision)+3;;)if(a=r,r=a.plus(lt(s,a,t+2,1)).times(.5),Ut(a.d).slice(0,t)===(e=Ut(r.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!i&&e=="4999"){if(!i&&(Le(a,c+1,0),a.times(a).eq(s))){r=a;break}t+=4,i=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(Le(r,c+1,1),n=!r.times(r).eq(s));break}return Ve=!0,Le(r,c,u.rounding,n)};de.tangent=de.tan=function(){var n,e,t=this,r=t.constructor;return t.isFinite()?t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+10,r.rounding=1,t=t.sin(),t.s=1,t=lt(t,new r(1).minus(t.times(t)).sqrt(),n+10,0),r.precision=n,r.rounding=e,Le($n==2||$n==4?t.neg():t,n,e,!0)):new r(NaN)};de.times=de.mul=function(n){var e,t,r,i,a,s,o,c,h,u=this,l=u.constructor,f=u.d,d=(n=new l(n)).d;if(n.s*=u.s,!f||!f[0]||!d||!d[0])return new l(!n.s||f&&!f[0]&&!d||d&&!d[0]&&!f?NaN:!f||!d?n.s/0:n.s*0);for(t=kt(u.e/ze)+kt(n.e/ze),c=f.length,h=d.length,c<h&&(a=f,f=d,d=a,s=c,c=h,h=s),a=[],s=c+h,r=s;r--;)a.push(0);for(r=h;--r>=0;){for(e=0,i=c+r;i>r;)o=a[i]+d[r]*f[i-r-1]+e,a[i--]=o%Nn|0,e=o/Nn|0;a[i]=(a[i]+e)%Nn|0}for(;!a[--s];)a.pop();return e?++t:a.shift(),n.d=a,n.e=rs(a,t),Ve?Le(n,l.precision,l.rounding):n};de.toBinary=function(n,e){return Oo(this,2,n,e)};de.toDecimalPlaces=de.toDP=function(n,e){var t=this,r=t.constructor;return t=new r(t),n===void 0?t:(en(n,0,cr),e===void 0?e=r.rounding:en(e,0,8),Le(t,n+t.e+1,e))};de.toExponential=function(n,e){var t,r=this,i=r.constructor;return n===void 0?t=Un(r,!0):(en(n,0,cr),e===void 0?e=i.rounding:en(e,0,8),r=Le(new i(r),n+1,e),t=Un(r,!0,n+1)),r.isNeg()&&!r.isZero()?"-"+t:t};de.toFixed=function(n,e){var t,r,i=this,a=i.constructor;return n===void 0?t=Un(i):(en(n,0,cr),e===void 0?e=a.rounding:en(e,0,8),r=Le(new a(i),n+i.e+1,e),t=Un(r,!1,n+r.e+1)),i.isNeg()&&!i.isZero()?"-"+t:t};de.toFraction=function(n){var e,t,r,i,a,s,o,c,h,u,l,f,d=this,v=d.d,p=d.constructor;if(!v)return new p(d);if(h=t=new p(1),r=c=new p(0),e=new p(r),a=e.e=If(v)-d.e-1,s=a%ze,e.d[0]=Dt(10,s<0?ze+s:s),n==null)n=a>0?e:h;else{if(o=new p(n),!o.isInt()||o.lt(h))throw Error(ur+o);n=o.gt(e)?a>0?e:h:o}for(Ve=!1,o=new p(Ut(v)),u=p.precision,p.precision=a=v.length*ze*2;l=lt(o,e,0,1,1),i=t.plus(l.times(r)),i.cmp(n)!=1;)t=r,r=i,i=h,h=c.plus(l.times(i)),c=i,i=e,e=o.minus(l.times(i)),o=i;return i=lt(n.minus(t),r,0,1,1),c=c.plus(i.times(h)),t=t.plus(i.times(r)),c.s=h.s=d.s,f=lt(h,r,a,1).minus(d).abs().cmp(lt(c,t,a,1).minus(d).abs())<1?[h,r]:[c,t],p.precision=u,Ve=!0,f};de.toHexadecimal=de.toHex=function(n,e){return Oo(this,16,n,e)};de.toNearest=function(n,e){var t=this,r=t.constructor;if(t=new r(t),n==null){if(!t.d)return t;n=new r(1),e=r.rounding}else{if(n=new r(n),e===void 0?e=r.rounding:en(e,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(Ve=!1,t=lt(t,n,0,e,1).times(n),Ve=!0,Le(t)):(n.s=t.s,t=n),t};de.toNumber=function(){return+this};de.toOctal=function(n,e){return Oo(this,8,n,e)};de.toPower=de.pow=function(n){var e,t,r,i,a,s,o=this,c=o.constructor,h=+(n=new c(n));if(!o.d||!n.d||!o.d[0]||!n.d[0])return new c(Dt(+o,h));if(o=new c(o),o.eq(1))return o;if(r=c.precision,a=c.rounding,n.eq(1))return Le(o,r,a);if(e=kt(n.e/ze),e>=n.d.length-1&&(t=h<0?-h:h)<=R_)return i=Uf(c,o,t,r),n.s<0?new c(1).div(i):Le(i,r,a);if(s=o.s,s<0){if(e<n.d.length-1)return new c(NaN);if(n.d[e]&1||(s=1),o.e==0&&o.d[0]==1&&o.d.length==1)return o.s=s,o}return t=Dt(+o,h),e=t==0||!isFinite(t)?kt(h*(Math.log("0."+Ut(o.d))/Math.LN10+o.e+1)):new c(t+"").e,e>c.maxE+1||e<c.minE-1?new c(e>0?s/0:0):(Ve=!1,c.rounding=o.s=1,t=Math.min(12,(e+"").length),i=_o(n.times(ir(o,r+t)),r),i.d&&(i=Le(i,r+5,1),zi(i.d,r,a)&&(e=r+10,i=Le(_o(n.times(ir(o,e+t)),e),e+5,1),+Ut(i.d).slice(r+1,r+15)+1==1e14&&(i=Le(i,r+1,0)))),i.s=s,Ve=!0,c.rounding=a,Le(i,r,a))};de.toPrecision=function(n,e){var t,r=this,i=r.constructor;return n===void 0?t=Un(r,r.e<=i.toExpNeg||r.e>=i.toExpPos):(en(n,1,cr),e===void 0?e=i.rounding:en(e,0,8),r=Le(new i(r),n,e),t=Un(r,n<=r.e||r.e<=i.toExpNeg,n)),r.isNeg()&&!r.isZero()?"-"+t:t};de.toSignificantDigits=de.toSD=function(n,e){var t=this,r=t.constructor;return n===void 0?(n=r.precision,e=r.rounding):(en(n,1,cr),e===void 0?e=r.rounding:en(e,0,8)),Le(new r(t),n,e)};de.toString=function(){var n=this,e=n.constructor,t=Un(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+t:t};de.truncated=de.trunc=function(){return Le(new this.constructor(this),this.e+1,1)};de.valueOf=de.toJSON=function(){var n=this,e=n.constructor,t=Un(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+t:t};function Ut(n){var e,t,r,i=n.length-1,a="",s=n[0];if(i>0){for(a+=s,e=1;e<i;e++)r=n[e]+"",t=ze-r.length,t&&(a+=tr(t)),a+=r;s=n[e],r=s+"",t=ze-r.length,t&&(a+=tr(t))}else if(s===0)return"0";for(;s%10===0;)s/=10;return a+s}function en(n,e,t){if(n!==~~n||n<e||n>t)throw Error(ur+n)}function zi(n,e,t,r){var i,a,s,o;for(a=n[0];a>=10;a/=10)--e;return--e<0?(e+=ze,i=0):(i=Math.ceil((e+1)/ze),e%=ze),a=Dt(10,ze-e),o=n[i]%a|0,r==null?e<3?(e==0?o=o/100|0:e==1&&(o=o/10|0),s=t<4&&o==99999||t>3&&o==49999||o==5e4||o==0):s=(t<4&&o+1==a||t>3&&o+1==a/2)&&(n[i+1]/a/100|0)==Dt(10,e-2)-1||(o==a/2||o==0)&&(n[i+1]/a/100|0)==0:e<4?(e==0?o=o/1e3|0:e==1?o=o/100|0:e==2&&(o=o/10|0),s=(r||t<4)&&o==9999||!r&&t>3&&o==4999):s=((r||t<4)&&o+1==a||!r&&t>3&&o+1==a/2)&&(n[i+1]/a/1e3|0)==Dt(10,e-3)-1,s}function Fa(n,e,t){for(var r,i=[0],a,s=0,o=n.length;s<o;){for(a=i.length;a--;)i[a]*=e;for(i[0]+=mo.indexOf(n.charAt(s++)),r=0;r<i.length;r++)i[r]>t-1&&(i[r+1]===void 0&&(i[r+1]=0),i[r+1]+=i[r]/t|0,i[r]%=t)}return i.reverse()}function L_(n,e){var t,r,i;if(e.isZero())return e;r=e.d.length,r<32?(t=Math.ceil(r/3),i=(1/is(4,t)).toString()):(t=16,i="2.3283064365386962890625e-10"),n.precision+=t,e=vi(n,1,e.times(i),new n(1));for(var a=t;a--;){var s=e.times(e);e=s.times(s).minus(s).times(8).plus(1)}return n.precision-=t,e}var lt=function(){function n(r,i,a){var s,o=0,c=r.length;for(r=r.slice();c--;)s=r[c]*i+o,r[c]=s%a|0,o=s/a|0;return o&&r.unshift(o),r}function e(r,i,a,s){var o,c;if(a!=s)c=a>s?1:-1;else for(o=c=0;o<a;o++)if(r[o]!=i[o]){c=r[o]>i[o]?1:-1;break}return c}function t(r,i,a,s){for(var o=0;a--;)r[a]-=o,o=r[a]<i[a]?1:0,r[a]=o*s+r[a]-i[a];for(;!r[0]&&r.length>1;)r.shift()}return function(r,i,a,s,o,c){var h,u,l,f,d,v,p,g,m,w,_,S,E,D,b,T,y,x,P,C,F=r.constructor,N=r.s==i.s?1:-1,L=r.d,U=i.d;if(!L||!L[0]||!U||!U[0])return new F(!r.s||!i.s||(L?U&&L[0]==U[0]:!U)?NaN:L&&L[0]==0||!U?N*0:N/0);for(c?(d=1,u=r.e-i.e):(c=Nn,d=ze,u=kt(r.e/d)-kt(i.e/d)),P=U.length,y=L.length,m=new F(N),w=m.d=[],l=0;U[l]==(L[l]||0);l++);if(U[l]>(L[l]||0)&&u--,a==null?(D=a=F.precision,s=F.rounding):o?D=a+(r.e-i.e)+1:D=a,D<0)w.push(1),v=!0;else{if(D=D/d+2|0,l=0,P==1){for(f=0,U=U[0],D++;(l<y||f)&&D--;l++)b=f*c+(L[l]||0),w[l]=b/U|0,f=b%U|0;v=f||l<y}else{for(f=c/(U[0]+1)|0,f>1&&(U=n(U,f,c),L=n(L,f,c),P=U.length,y=L.length),T=P,_=L.slice(0,P),S=_.length;S<P;)_[S++]=0;C=U.slice(),C.unshift(0),x=U[0],U[1]>=c/2&&++x;do f=0,h=e(U,_,P,S),h<0?(E=_[0],P!=S&&(E=E*c+(_[1]||0)),f=E/x|0,f>1?(f>=c&&(f=c-1),p=n(U,f,c),g=p.length,S=_.length,h=e(p,_,g,S),h==1&&(f--,t(p,P<g?C:U,g,c))):(f==0&&(h=f=1),p=U.slice()),g=p.length,g<S&&p.unshift(0),t(_,p,S,c),h==-1&&(S=_.length,h=e(U,_,P,S),h<1&&(f++,t(_,P<S?C:U,S,c))),S=_.length):h===0&&(f++,_=[0]),w[l++]=f,h&&_[0]?_[S++]=L[T]||0:(_=[L[T]],S=1);while((T++<y||_[0]!==void 0)&&D--);v=_[0]!==void 0}w[0]||w.shift()}if(d==1)m.e=u,Ff=v;else{for(l=1,f=w[0];f>=10;f/=10)l++;m.e=l+u*d-1,Le(m,o?a+m.e+1:a,s,v)}return m}}();function Le(n,e,t,r){var i,a,s,o,c,h,u,l,f,d=n.constructor;e:if(e!=null){if(l=n.d,!l)return n;for(i=1,o=l[0];o>=10;o/=10)i++;if(a=e-i,a<0)a+=ze,s=e,u=l[f=0],c=u/Dt(10,i-s-1)%10|0;else if(f=Math.ceil((a+1)/ze),o=l.length,f>=o)if(r){for(;o++<=f;)l.push(0);u=c=0,i=1,a%=ze,s=a-ze+1}else break e;else{for(u=o=l[f],i=1;o>=10;o/=10)i++;a%=ze,s=a-ze+i,c=s<0?0:u/Dt(10,i-s-1)%10|0}if(r=r||e<0||l[f+1]!==void 0||(s<0?u:u%Dt(10,i-s-1)),h=t<4?(c||r)&&(t==0||t==(n.s<0?3:2)):c>5||c==5&&(t==4||r||t==6&&(a>0?s>0?u/Dt(10,i-s):0:l[f-1])%10&1||t==(n.s<0?8:7)),e<1||!l[0])return l.length=0,h?(e-=n.e+1,l[0]=Dt(10,(ze-e%ze)%ze),n.e=-e||0):l[0]=n.e=0,n;if(a==0?(l.length=f,o=1,f--):(l.length=f+1,o=Dt(10,ze-a),l[f]=s>0?(u/Dt(10,i-s)%Dt(10,s)|0)*o:0),h)for(;;)if(f==0){for(a=1,s=l[0];s>=10;s/=10)a++;for(s=l[0]+=o,o=1;s>=10;s/=10)o++;a!=o&&(n.e++,l[0]==Nn&&(l[0]=1));break}else{if(l[f]+=o,l[f]!=Nn)break;l[f--]=0,o=1}for(a=l.length;l[--a]===0;)l.pop()}return Ve&&(n.e>d.maxE?(n.d=null,n.e=NaN):n.e<d.minE&&(n.e=0,n.d=[0])),n}function Un(n,e,t){if(!n.isFinite())return Of(n);var r,i=n.e,a=Ut(n.d),s=a.length;return e?(t&&(r=t-s)>0?a=a.charAt(0)+"."+a.slice(1)+tr(r):s>1&&(a=a.charAt(0)+"."+a.slice(1)),a=a+(n.e<0?"e":"e+")+n.e):i<0?(a="0."+tr(-i-1)+a,t&&(r=t-s)>0&&(a+=tr(r))):i>=s?(a+=tr(i+1-s),t&&(r=t-i-1)>0&&(a=a+"."+tr(r))):((r=i+1)<s&&(a=a.slice(0,r)+"."+a.slice(r)),t&&(r=t-s)>0&&(i+1===s&&(a+="."),a+=tr(r))),a}function rs(n,e){var t=n[0];for(e*=ze;t>=10;t/=10)e++;return e}function Ga(n,e,t){if(e>N_)throw Ve=!0,t&&(n.precision=t),Error(Rf);return Le(new n(Oa),e,1,!0)}function Rn(n,e,t){if(e>vo)throw Error(Rf);return Le(new n(za),e,t,!0)}function If(n){var e=n.length-1,t=e*ze+1;if(e=n[e],e){for(;e%10==0;e/=10)t--;for(e=n[0];e>=10;e/=10)t++}return t}function tr(n){for(var e="";n--;)e+="0";return e}function Uf(n,e,t,r){var i,a=new n(1),s=Math.ceil(r/ze+4);for(Ve=!1;;){if(t%2&&(a=a.times(e),Il(a.d,s)&&(i=!0)),t=kt(t/2),t===0){t=a.d.length-1,i&&a.d[t]===0&&++a.d[t];break}e=e.times(e),Il(e.d,s)}return Ve=!0,a}function Pl(n){return n.d[n.d.length-1]&1}function Bf(n,e,t){for(var r,i=new n(e[0]),a=0;++a<e.length;)if(r=new n(e[a]),r.s)i[t](r)&&(i=r);else{i=r;break}return i}function _o(n,e){var t,r,i,a,s,o,c,h=0,u=0,l=0,f=n.constructor,d=f.rounding,v=f.precision;if(!n.d||!n.d[0]||n.e>17)return new f(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:0/0);for(e==null?(Ve=!1,c=v):c=e,o=new f(.03125);n.e>-2;)n=n.times(o),l+=5;for(r=Math.log(Dt(2,l))/Math.LN10*2+5|0,c+=r,t=a=s=new f(1),f.precision=c;;){if(a=Le(a.times(n),c,1),t=t.times(++u),o=s.plus(lt(a,t,c,1)),Ut(o.d).slice(0,c)===Ut(s.d).slice(0,c)){for(i=l;i--;)s=Le(s.times(s),c,1);if(e==null)if(h<3&&zi(s.d,c-r,d,h))f.precision=c+=10,t=a=o=new f(1),u=0,h++;else return Le(s,f.precision=v,d,Ve=!0);else return f.precision=v,s}s=o}}function ir(n,e){var t,r,i,a,s,o,c,h,u,l,f,d=1,v=10,p=n,g=p.d,m=p.constructor,w=m.rounding,_=m.precision;if(p.s<0||!g||!g[0]||!p.e&&g[0]==1&&g.length==1)return new m(g&&!g[0]?-1/0:p.s!=1?NaN:g?0:p);if(e==null?(Ve=!1,u=_):u=e,m.precision=u+=v,t=Ut(g),r=t.charAt(0),Math.abs(a=p.e)<15e14){for(;r<7&&r!=1||r==1&&t.charAt(1)>3;)p=p.times(n),t=Ut(p.d),r=t.charAt(0),d++;a=p.e,r>1?(p=new m("0."+t),a++):p=new m(r+"."+t.slice(1))}else return h=Ga(m,u+2,_).times(a+""),p=ir(new m(r+"."+t.slice(1)),u-v).plus(h),m.precision=_,e==null?Le(p,_,w,Ve=!0):p;for(l=p,c=s=p=lt(p.minus(1),p.plus(1),u,1),f=Le(p.times(p),u,1),i=3;;){if(s=Le(s.times(f),u,1),h=c.plus(lt(s,new m(i),u,1)),Ut(h.d).slice(0,u)===Ut(c.d).slice(0,u))if(c=c.times(2),a!==0&&(c=c.plus(Ga(m,u+2,_).times(a+""))),c=lt(c,new m(d),u,1),e==null)if(zi(c.d,u-v,w,o))m.precision=u+=v,h=s=p=lt(l.minus(1),l.plus(1),u,1),f=Le(p.times(p),u,1),i=o=1;else return Le(c,m.precision=_,w,Ve=!0);else return m.precision=_,c;c=h,i+=2}}function Of(n){return String(n.s*n.s/0)}function xo(n,e){var t,r,i;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(t<0&&(t=r),t+=+e.slice(r+1),e=e.substring(0,r)):t<0&&(t=e.length),r=0;e.charCodeAt(r)===48;r++);for(i=e.length;e.charCodeAt(i-1)===48;--i);if(e=e.slice(r,i),e){if(i-=r,n.e=t=t-r-1,n.d=[],r=(t+1)%ze,t<0&&(r+=ze),r<i){for(r&&n.d.push(+e.slice(0,r)),i-=ze;r<i;)n.d.push(+e.slice(r,r+=ze));e=e.slice(r),r=ze-e.length}else r-=i;for(;r--;)e+="0";n.d.push(+e),Ve&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function P_(n,e){var t,r,i,a,s,o,c,h,u;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),Pf.test(e))return xo(n,e)}else if(e==="Infinity"||e==="NaN")return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(C_.test(e))t=16,e=e.toLowerCase();else if(T_.test(e))t=2;else if(F_.test(e))t=8;else throw Error(ur+e);for(a=e.search(/p/i),a>0?(c=+e.slice(a+1),e=e.substring(2,a)):e=e.slice(2),a=e.indexOf("."),s=a>=0,r=n.constructor,s&&(e=e.replace(".",""),o=e.length,a=o-a,i=Uf(r,new r(t),a,a*2)),h=Fa(e,t,Nn),u=h.length-1,a=u;h[a]===0;--a)h.pop();return a<0?new r(n.s*0):(n.e=rs(h,u),n.d=h,Ve=!1,s&&(n=lt(n,i,o*4)),c&&(n=n.times(Math.abs(c)<54?Dt(2,c):_i.pow(2,c))),Ve=!0,n)}function I_(n,e){var t,r=e.d.length;if(r<3)return e.isZero()?e:vi(n,2,e,e);t=1.4*Math.sqrt(r),t=t>16?16:t|0,e=e.times(1/is(5,t)),e=vi(n,2,e,e);for(var i,a=new n(5),s=new n(16),o=new n(20);t--;)i=e.times(e),e=e.times(a.plus(i.times(s.times(i).minus(o))));return e}function vi(n,e,t,r,i){var a,s,o,c,h=n.precision,u=Math.ceil(h/ze);for(Ve=!1,c=t.times(t),o=new n(r);;){if(s=lt(o.times(c),new n(e++*e++),h,1),o=i?r.plus(s):r.minus(s),r=lt(s.times(c),new n(e++*e++),h,1),s=o.plus(r),s.d[u]!==void 0){for(a=u;s.d[a]===o.d[a]&&a--;);if(a==-1)break}a=o,o=r,r=s,s=a}return Ve=!0,s.d.length=u+1,s}function is(n,e){for(var t=n;--e;)t*=n;return t}function zf(n,e){var t,r=e.s<0,i=Rn(n,n.precision,1),a=i.times(.5);if(e=e.abs(),e.lte(a))return $n=r?4:1,e;if(t=e.divToInt(i),t.isZero())$n=r?3:2;else{if(e=e.minus(t.times(i)),e.lte(a))return $n=Pl(t)?r?2:3:r?4:1,e;$n=Pl(t)?r?1:4:r?3:2}return e.minus(i).abs()}function Oo(n,e,t,r){var i,a,s,o,c,h,u,l,f,d=n.constructor,v=t!==void 0;if(v?(en(t,1,cr),r===void 0?r=d.rounding:en(r,0,8)):(t=d.precision,r=d.rounding),!n.isFinite())u=Of(n);else{for(u=Un(n),s=u.indexOf("."),v?(i=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):i=e,s>=0&&(u=u.replace(".",""),f=new d(1),f.e=u.length-s,f.d=Fa(Un(f),10,i),f.e=f.d.length),l=Fa(u,10,i),a=c=l.length;l[--c]==0;)l.pop();if(!l[0])u=v?"0p+0":"0";else{if(s<0?a--:(n=new d(n),n.d=l,n.e=a,n=lt(n,f,t,r,0,i),l=n.d,a=n.e,h=Ff),s=l[t],o=i/2,h=h||l[t+1]!==void 0,h=r<4?(s!==void 0||h)&&(r===0||r===(n.s<0?3:2)):s>o||s===o&&(r===4||h||r===6&&l[t-1]&1||r===(n.s<0?8:7)),l.length=t,h)for(;++l[--t]>i-1;)l[t]=0,t||(++a,l.unshift(1));for(c=l.length;!l[c-1];--c);for(s=0,u="";s<c;s++)u+=mo.charAt(l[s]);if(v){if(c>1)if(e==16||e==8){for(s=e==16?4:3,--c;c%s;c++)u+="0";for(l=Fa(u,i,e),c=l.length;!l[c-1];--c);for(s=1,u="1.";s<c;s++)u+=mo.charAt(l[s])}else u=u.charAt(0)+"."+u.slice(1);u=u+(a<0?"p":"p+")+a}else if(a<0){for(;++a;)u="0"+u;u="0."+u}else if(++a>c)for(a-=c;a--;)u+="0";else a<c&&(u=u.slice(0,a)+"."+u.slice(a))}u=(e==16?"0x":e==2?"0b":e==8?"0o":"")+u}return n.s<0?"-"+u:u}function Il(n,e){if(n.length>e)return n.length=e,!0}function U_(n){return new this(n).abs()}function B_(n){return new this(n).acos()}function O_(n){return new this(n).acosh()}function z_(n,e){return new this(n).plus(e)}function G_(n){return new this(n).asin()}function H_(n){return new this(n).asinh()}function V_(n){return new this(n).atan()}function W_(n){return new this(n).atanh()}function k_(n,e){n=new this(n),e=new this(e);var t,r=this.precision,i=this.rounding,a=r+4;return!n.s||!e.s?t=new this(NaN):!n.d&&!e.d?(t=Rn(this,a,1).times(e.s>0?.25:.75),t.s=n.s):!e.d||n.isZero()?(t=e.s<0?Rn(this,r,i):new this(0),t.s=n.s):!n.d||e.isZero()?(t=Rn(this,a,1).times(.5),t.s=n.s):e.s<0?(this.precision=a,this.rounding=1,t=this.atan(lt(n,e,a,1)),e=Rn(this,a,1),this.precision=r,this.rounding=i,t=n.s<0?t.minus(e):t.plus(e)):t=this.atan(lt(n,e,a,1)),t}function X_(n){return new this(n).cbrt()}function $_(n){return Le(n=new this(n),n.e+1,2)}function q_(n,e,t){return new this(n).clamp(e,t)}function Y_(n){if(!n||typeof n!="object")throw Error(ns+"Object expected");var e,t,r,i=n.defaults===!0,a=["precision",1,cr,"rounding",0,8,"toExpNeg",-oi,0,"toExpPos",0,oi,"maxE",0,oi,"minE",-oi,0,"modulo",0,9];for(e=0;e<a.length;e+=3)if(t=a[e],i&&(this[t]=go[t]),(r=n[t])!==void 0)if(kt(r)===r&&r>=a[e+1]&&r<=a[e+2])this[t]=r;else throw Error(ur+t+": "+r);if(t="crypto",i&&(this[t]=go[t]),(r=n[t])!==void 0)if(r===!0||r===!1||r===0||r===1)if(r)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(Nf);else this[t]=!1;else throw Error(ur+t+": "+r);return this}function Z_(n){return new this(n).cos()}function K_(n){return new this(n).cosh()}function Gf(n){var e,t,r;function i(a){var s,o,c,h=this;if(!(h instanceof i))return new i(a);if(h.constructor=i,Ul(a)){h.s=a.s,Ve?!a.d||a.e>i.maxE?(h.e=NaN,h.d=null):a.e<i.minE?(h.e=0,h.d=[0]):(h.e=a.e,h.d=a.d.slice()):(h.e=a.e,h.d=a.d?a.d.slice():a.d);return}if(c=typeof a,c==="number"){if(a===0){h.s=1/a<0?-1:1,h.e=0,h.d=[0];return}if(a<0?(a=-a,h.s=-1):h.s=1,a===~~a&&a<1e7){for(s=0,o=a;o>=10;o/=10)s++;Ve?s>i.maxE?(h.e=NaN,h.d=null):s<i.minE?(h.e=0,h.d=[0]):(h.e=s,h.d=[a]):(h.e=s,h.d=[a]);return}else if(a*0!==0){a||(h.s=NaN),h.e=NaN,h.d=null;return}return xo(h,a.toString())}else if(c!=="string")throw Error(ur+a);return(o=a.charCodeAt(0))===45?(a=a.slice(1),h.s=-1):(o===43&&(a=a.slice(1)),h.s=1),Pf.test(a)?xo(h,a):P_(h,a)}if(i.prototype=de,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.EUCLID=9,i.config=i.set=Y_,i.clone=Gf,i.isDecimal=Ul,i.abs=U_,i.acos=B_,i.acosh=O_,i.add=z_,i.asin=G_,i.asinh=H_,i.atan=V_,i.atanh=W_,i.atan2=k_,i.cbrt=X_,i.ceil=$_,i.clamp=q_,i.cos=Z_,i.cosh=K_,i.div=J_,i.exp=Q_,i.floor=j_,i.hypot=ex,i.ln=tx,i.log=nx,i.log10=ix,i.log2=rx,i.max=ax,i.min=sx,i.mod=ox,i.mul=ux,i.pow=lx,i.random=cx,i.round=fx,i.sign=hx,i.sin=dx,i.sinh=px,i.sqrt=mx,i.sub=gx,i.sum=vx,i.tan=_x,i.tanh=xx,i.trunc=Ex,n===void 0&&(n={}),n&&n.defaults!==!0)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<r.length;)n.hasOwnProperty(t=r[e++])||(n[t]=this[t]);return i.config(n),i}function J_(n,e){return new this(n).div(e)}function Q_(n){return new this(n).exp()}function j_(n){return Le(n=new this(n),n.e+1,3)}function ex(){var n,e,t=new this(0);for(Ve=!1,n=0;n<arguments.length;)if(e=new this(arguments[n++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return Ve=!0,new this(1/0);t=e}return Ve=!0,t.sqrt()}function Ul(n){return n instanceof _i||n&&n.toStringTag===Lf||!1}function tx(n){return new this(n).ln()}function nx(n,e){return new this(n).log(e)}function rx(n){return new this(n).log(2)}function ix(n){return new this(n).log(10)}function ax(){return Bf(this,arguments,"lt")}function sx(){return Bf(this,arguments,"gt")}function ox(n,e){return new this(n).mod(e)}function ux(n,e){return new this(n).mul(e)}function lx(n,e){return new this(n).pow(e)}function cx(n){var e,t,r,i,a=0,s=new this(1),o=[];if(n===void 0?n=this.precision:en(n,1,cr),r=Math.ceil(n/ze),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));a<r;)i=e[a],i>=429e7?e[a]=crypto.getRandomValues(new Uint32Array(1))[0]:o[a++]=i%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(r*=4);a<r;)i=e[a]+(e[a+1]<<8)+(e[a+2]<<16)+((e[a+3]&127)<<24),i>=214e7?crypto.randomBytes(4).copy(e,a):(o.push(i%1e7),a+=4);a=r/4}else throw Error(Nf);else for(;a<r;)o[a++]=Math.random()*1e7|0;for(r=o[--a],n%=ze,r&&n&&(i=Dt(10,ze-n),o[a]=(r/i|0)*i);o[a]===0;a--)o.pop();if(a<0)t=0,o=[0];else{for(t=-1;o[0]===0;t-=ze)o.shift();for(r=1,i=o[0];i>=10;i/=10)r++;r<ze&&(t-=ze-r)}return s.e=t,s.d=o,s}function fx(n){return Le(n=new this(n),n.e+1,this.rounding)}function hx(n){return n=new this(n),n.d?n.d[0]?n.s:0*n.s:n.s||NaN}function dx(n){return new this(n).sin()}function px(n){return new this(n).sinh()}function mx(n){return new this(n).sqrt()}function gx(n,e){return new this(n).sub(e)}function vx(){var n=0,e=arguments,t=new this(e[n]);for(Ve=!1;t.s&&++n<e.length;)t=t.plus(e[n]);return Ve=!0,Le(t,this.precision,this.rounding)}function _x(n){return new this(n).tan()}function xx(n){return new this(n).tanh()}function Ex(n){return Le(n=new this(n),n.e+1,1)}de[Symbol.for("nodejs.util.inspect.custom")]=de.toString;de[Symbol.toStringTag]="Decimal";var _i=de.constructor=Gf(go);Oa=new _i(Oa);za=new _i(za);var yx="BigNumber",Mx=["?on","config"],Ax=Ae(yx,Mx,n=>{var{on:e,config:t}=n,r=_i.clone({precision:t.precision,modulo:_i.EUCLID});return r.prototype=Object.create(r.prototype),r.prototype.type="BigNumber",r.prototype.isBigNumber=!0,r.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},r.fromJSON=function(i){return new r(i.value)},e&&e("config",function(i,a){i.precision!==a.precision&&r.config({precision:i.precision})}),r},{isClass:!0});function Sx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hf={exports:{}};/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(n,e){(function(t){var r=Math.cosh||function(l){return Math.abs(l)<1e-9?1-l:(Math.exp(l)+Math.exp(-l))*.5},i=Math.sinh||function(l){return Math.abs(l)<1e-9?l:(Math.exp(l)-Math.exp(-l))*.5},a=function(l){var f=Math.PI/4;if(-f>l||l>f)return Math.cos(l)-1;var d=l*l;return d*(d*(d*(d*(d*(d*(d*(d/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},s=function(l,f){var d=Math.abs(l),v=Math.abs(f);return d<3e3&&v<3e3?Math.sqrt(d*d+v*v):(d<v?(d=v,v=l/f):v=f/l,d*Math.sqrt(1+v*v))},o=function(){throw SyntaxError("Invalid Param")};function c(l,f){var d=Math.abs(l),v=Math.abs(f);return l===0?Math.log(v):f===0?Math.log(d):d<3e3&&v<3e3?Math.log(l*l+f*f)*.5:(l=l/2,f=f/2,.5*Math.log(l*l+f*f)+Math.LN2)}var h=function(l,f){var d={re:0,im:0};if(l==null)d.re=d.im=0;else if(f!==void 0)d.re=l,d.im=f;else switch(typeof l){case"object":if("im"in l&&"re"in l)d.re=l.re,d.im=l.im;else if("abs"in l&&"arg"in l){if(!Number.isFinite(l.abs)&&Number.isFinite(l.arg))return u.INFINITY;d.re=l.abs*Math.cos(l.arg),d.im=l.abs*Math.sin(l.arg)}else if("r"in l&&"phi"in l){if(!Number.isFinite(l.r)&&Number.isFinite(l.phi))return u.INFINITY;d.re=l.r*Math.cos(l.phi),d.im=l.r*Math.sin(l.phi)}else l.length===2?(d.re=l[0],d.im=l[1]):o();break;case"string":d.im=d.re=0;var v=l.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),p=1,g=0;v===null&&o();for(var m=0;m<v.length;m++){var w=v[m];w===" "||w==="	"||w===`
`||(w==="+"?p++:w==="-"?g++:w==="i"||w==="I"?(p+g===0&&o(),v[m+1]!==" "&&!isNaN(v[m+1])?(d.im+=parseFloat((g%2?"-":"")+v[m+1]),m++):d.im+=parseFloat((g%2?"-":"")+"1"),p=g=0):((p+g===0||isNaN(w))&&o(),v[m+1]==="i"||v[m+1]==="I"?(d.im+=parseFloat((g%2?"-":"")+w),m++):d.re+=parseFloat((g%2?"-":"")+w),p=g=0))}p+g>0&&o();break;case"number":d.im=0,d.re=l;break;default:o()}return isNaN(d.re)||isNaN(d.im),d};function u(l,f){if(!(this instanceof u))return new u(l,f);var d=h(l,f);this.re=d.re,this.im=d.im}u.prototype={re:0,im:0,sign:function(){var l=this.abs();return new u(this.re/l,this.im/l)},add:function(l,f){var d=new u(l,f);return this.isInfinite()&&d.isInfinite()?u.NAN:this.isInfinite()||d.isInfinite()?u.INFINITY:new u(this.re+d.re,this.im+d.im)},sub:function(l,f){var d=new u(l,f);return this.isInfinite()&&d.isInfinite()?u.NAN:this.isInfinite()||d.isInfinite()?u.INFINITY:new u(this.re-d.re,this.im-d.im)},mul:function(l,f){var d=new u(l,f);return this.isInfinite()&&d.isZero()||this.isZero()&&d.isInfinite()?u.NAN:this.isInfinite()||d.isInfinite()?u.INFINITY:d.im===0&&this.im===0?new u(this.re*d.re,0):new u(this.re*d.re-this.im*d.im,this.re*d.im+this.im*d.re)},div:function(l,f){var d=new u(l,f);if(this.isZero()&&d.isZero()||this.isInfinite()&&d.isInfinite())return u.NAN;if(this.isInfinite()||d.isZero())return u.INFINITY;if(this.isZero()||d.isInfinite())return u.ZERO;l=this.re,f=this.im;var v=d.re,p=d.im,g,m;return p===0?new u(l/v,f/v):Math.abs(v)<Math.abs(p)?(m=v/p,g=v*m+p,new u((l*m+f)/g,(f*m-l)/g)):(m=p/v,g=p*m+v,new u((l+f*m)/g,(f-l*m)/g))},pow:function(l,f){var d=new u(l,f);if(l=this.re,f=this.im,d.isZero())return u.ONE;if(d.im===0){if(f===0&&l>0)return new u(Math.pow(l,d.re),0);if(l===0)switch((d.re%4+4)%4){case 0:return new u(Math.pow(f,d.re),0);case 1:return new u(0,Math.pow(f,d.re));case 2:return new u(-Math.pow(f,d.re),0);case 3:return new u(0,-Math.pow(f,d.re))}}if(l===0&&f===0&&d.re>0&&d.im>=0)return u.ZERO;var v=Math.atan2(f,l),p=c(l,f);return l=Math.exp(d.re*p-d.im*v),f=d.im*p+d.re*v,new u(l*Math.cos(f),l*Math.sin(f))},sqrt:function(){var l=this.re,f=this.im,d=this.abs(),v,p;if(l>=0){if(f===0)return new u(Math.sqrt(l),0);v=.5*Math.sqrt(2*(d+l))}else v=Math.abs(f)/Math.sqrt(2*(d-l));return l<=0?p=.5*Math.sqrt(2*(d-l)):p=Math.abs(f)/Math.sqrt(2*(d+l)),new u(v,f<0?-p:p)},exp:function(){var l=Math.exp(this.re);return this.im,new u(l*Math.cos(this.im),l*Math.sin(this.im))},expm1:function(){var l=this.re,f=this.im;return new u(Math.expm1(l)*Math.cos(f)+a(f),Math.exp(l)*Math.sin(f))},log:function(){var l=this.re,f=this.im;return new u(c(l,f),Math.atan2(f,l))},abs:function(){return s(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var l=this.re,f=this.im;return new u(Math.sin(l)*r(f),Math.cos(l)*i(f))},cos:function(){var l=this.re,f=this.im;return new u(Math.cos(l)*r(f),-Math.sin(l)*i(f))},tan:function(){var l=2*this.re,f=2*this.im,d=Math.cos(l)+r(f);return new u(Math.sin(l)/d,i(f)/d)},cot:function(){var l=2*this.re,f=2*this.im,d=Math.cos(l)-r(f);return new u(-Math.sin(l)/d,i(f)/d)},sec:function(){var l=this.re,f=this.im,d=.5*r(2*f)+.5*Math.cos(2*l);return new u(Math.cos(l)*r(f)/d,Math.sin(l)*i(f)/d)},csc:function(){var l=this.re,f=this.im,d=.5*r(2*f)-.5*Math.cos(2*l);return new u(Math.sin(l)*r(f)/d,-Math.cos(l)*i(f)/d)},asin:function(){var l=this.re,f=this.im,d=new u(f*f-l*l+1,-2*l*f).sqrt(),v=new u(d.re-f,d.im+l).log();return new u(v.im,-v.re)},acos:function(){var l=this.re,f=this.im,d=new u(f*f-l*l+1,-2*l*f).sqrt(),v=new u(d.re-f,d.im+l).log();return new u(Math.PI/2-v.im,v.re)},atan:function(){var l=this.re,f=this.im;if(l===0){if(f===1)return new u(0,1/0);if(f===-1)return new u(0,-1/0)}var d=l*l+(1-f)*(1-f),v=new u((1-f*f-l*l)/d,-2*l/d).log();return new u(-.5*v.im,.5*v.re)},acot:function(){var l=this.re,f=this.im;if(f===0)return new u(Math.atan2(1,l),0);var d=l*l+f*f;return d!==0?new u(l/d,-f/d).atan():new u(l!==0?l/0:0,f!==0?-f/0:0).atan()},asec:function(){var l=this.re,f=this.im;if(l===0&&f===0)return new u(0,1/0);var d=l*l+f*f;return d!==0?new u(l/d,-f/d).acos():new u(l!==0?l/0:0,f!==0?-f/0:0).acos()},acsc:function(){var l=this.re,f=this.im;if(l===0&&f===0)return new u(Math.PI/2,1/0);var d=l*l+f*f;return d!==0?new u(l/d,-f/d).asin():new u(l!==0?l/0:0,f!==0?-f/0:0).asin()},sinh:function(){var l=this.re,f=this.im;return new u(i(l)*Math.cos(f),r(l)*Math.sin(f))},cosh:function(){var l=this.re,f=this.im;return new u(r(l)*Math.cos(f),i(l)*Math.sin(f))},tanh:function(){var l=2*this.re,f=2*this.im,d=r(l)+Math.cos(f);return new u(i(l)/d,Math.sin(f)/d)},coth:function(){var l=2*this.re,f=2*this.im,d=r(l)-Math.cos(f);return new u(i(l)/d,-Math.sin(f)/d)},csch:function(){var l=this.re,f=this.im,d=Math.cos(2*f)-r(2*l);return new u(-2*i(l)*Math.cos(f)/d,2*r(l)*Math.sin(f)/d)},sech:function(){var l=this.re,f=this.im,d=Math.cos(2*f)+r(2*l);return new u(2*r(l)*Math.cos(f)/d,-2*i(l)*Math.sin(f)/d)},asinh:function(){var l=this.im;this.im=-this.re,this.re=l;var f=this.asin();return this.re=-this.im,this.im=l,l=f.re,f.re=-f.im,f.im=l,f},acosh:function(){var l=this.acos();if(l.im<=0){var f=l.re;l.re=-l.im,l.im=f}else{var f=l.im;l.im=-l.re,l.re=f}return l},atanh:function(){var l=this.re,f=this.im,d=l>1&&f===0,v=1-l,p=1+l,g=v*v+f*f,m=g!==0?new u((p*v-f*f)/g,(f*v+p*f)/g):new u(l!==-1?l/0:0,f!==0?f/0:0),w=m.re;return m.re=c(m.re,m.im)/2,m.im=Math.atan2(m.im,w)/2,d&&(m.im=-m.im),m},acoth:function(){var l=this.re,f=this.im;if(l===0&&f===0)return new u(0,Math.PI/2);var d=l*l+f*f;return d!==0?new u(l/d,-f/d).atanh():new u(l!==0?l/0:0,f!==0?-f/0:0).atanh()},acsch:function(){var l=this.re,f=this.im;if(f===0)return new u(l!==0?Math.log(l+Math.sqrt(l*l+1)):1/0,0);var d=l*l+f*f;return d!==0?new u(l/d,-f/d).asinh():new u(l!==0?l/0:0,f!==0?-f/0:0).asinh()},asech:function(){var l=this.re,f=this.im;if(this.isZero())return u.INFINITY;var d=l*l+f*f;return d!==0?new u(l/d,-f/d).acosh():new u(l!==0?l/0:0,f!==0?-f/0:0).acosh()},inverse:function(){if(this.isZero())return u.INFINITY;if(this.isInfinite())return u.ZERO;var l=this.re,f=this.im,d=l*l+f*f;return new u(l/d,-f/d)},conjugate:function(){return new u(this.re,-this.im)},neg:function(){return new u(-this.re,-this.im)},ceil:function(l){return l=Math.pow(10,l||0),new u(Math.ceil(this.re*l)/l,Math.ceil(this.im*l)/l)},floor:function(l){return l=Math.pow(10,l||0),new u(Math.floor(this.re*l)/l,Math.floor(this.im*l)/l)},round:function(l){return l=Math.pow(10,l||0),new u(Math.round(this.re*l)/l,Math.round(this.im*l)/l)},equals:function(l,f){var d=new u(l,f);return Math.abs(d.re-this.re)<=u.EPSILON&&Math.abs(d.im-this.im)<=u.EPSILON},clone:function(){return new u(this.re,this.im)},toString:function(){var l=this.re,f=this.im,d="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(l)<u.EPSILON&&(l=0),Math.abs(f)<u.EPSILON&&(f=0),f===0?d+l:(l!==0?(d+=l,d+=" ",f<0?(f=-f,d+="-"):d+="+",d+=" "):f<0&&(f=-f,d+="-"),f!==1&&(d+=f),d+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}},u.ZERO=new u(0,0),u.ONE=new u(1,0),u.I=new u(0,1),u.PI=new u(Math.PI,0),u.E=new u(Math.E,0),u.INFINITY=new u(1/0,1/0),u.NAN=new u(NaN,NaN),u.EPSILON=1e-15,Object.defineProperty(u,"__esModule",{value:!0}),u.default=u,u.Complex=u,n.exports=u})()})(Hf);var wx=Hf.exports;const Pt=Sx(wx);var Dx="Complex",bx=[],Tx=Ae(Dx,bx,()=>(Object.defineProperty(Pt,"name",{value:"Complex"}),Pt.prototype.constructor=Pt,Pt.prototype.type="Complex",Pt.prototype.isComplex=!0,Pt.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},Pt.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},Pt.prototype.format=function(n){var e="",t=this.im,r=this.re,i=fo(this.re,n),a=fo(this.im,n),s=gt(n)?n:n?n.precision:null;if(s!==null){var o=Math.pow(10,-s);Math.abs(r/t)<o&&(r=0),Math.abs(t/r)<o&&(t=0)}return t===0?e=i:r===0?t===1?e="i":t===-1?e="-i":e=a+"i":t<0?t===-1?e=i+" - i":e=i+" - "+a.substring(1)+"i":t===1?e=i+" + i":e=i+" + "+a+"i",e},Pt.fromPolar=function(n){switch(arguments.length){case 1:{var e=arguments[0];if(typeof e=="object")return Pt(e);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var t=arguments[0],r=arguments[1];if(gt(t)){if(hf(r)&&r.hasBase("ANGLE")&&(r=r.toNumber("rad")),gt(r))return new Pt({r:t,phi:r});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},Pt.prototype.valueOf=Pt.prototype.toString,Pt.fromJSON=function(n){return new Pt(n)},Pt.compare=function(n,e){return n.re>e.re?1:n.re<e.re?-1:n.im>e.im?1:n.im<e.im?-1:0},Pt),{isClass:!0});/**
 * @license Fraction.js v4.3.5 31/08/2023
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2023, Robert Eisele (robert@raw.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/var Cx=2e3,Re={s:1,n:0,d:1};function Wn(n,e){if(isNaN(n=parseInt(n,10)))throw Ra();return n*e}function yt(n,e){if(e===0)throw zo();var t=Object.create(Ht.prototype);t.s=n<0?-1:1,n=n<0?-n:n;var r=ui(n,e);return t.n=n/r,t.d=e/r,t}function Bl(n){for(var e={},t=n,r=2,i=4;i<=t;){for(;t%r===0;)t/=r,e[r]=(e[r]||0)+1;i+=1+2*r++}return t!==n?t>1&&(e[t]=(e[t]||0)+1):e[n]=(e[n]||0)+1,e}var mn=function(n,e){var t=0,r=1,i=1,a=0,s=0,o=0,c=1,h=1,u=0,l=1,f=1,d=1,v=1e7,p;if(n!=null)if(e!==void 0){if(t=n,r=e,i=t*r,t%1!==0||r%1!==0)throw Lx()}else switch(typeof n){case"object":{if("d"in n&&"n"in n)t=n.n,r=n.d,"s"in n&&(t*=n.s);else if(0 in n)t=n[0],1 in n&&(r=n[1]);else throw Ra();i=t*r;break}case"number":{if(n<0&&(i=n,n=-n),n%1===0)t=n;else if(n>0){for(n>=1&&(h=Math.pow(10,Math.floor(1+Math.log(n)/Math.LN10)),n/=h);l<=v&&d<=v;)if(p=(u+f)/(l+d),n===p){l+d<=v?(t=u+f,r=l+d):d>l?(t=f,r=d):(t=u,r=l);break}else n>p?(u+=f,l+=d):(f+=u,d+=l),l>v?(t=f,r=d):(t=u,r=l);t*=h}else(isNaN(n)||isNaN(e))&&(r=t=NaN);break}case"string":{if(l=n.match(/\d+|./g),l===null)throw Ra();if(l[u]==="-"?(i=-1,u++):l[u]==="+"&&u++,l.length===u+1?s=Wn(l[u++],i):l[u+1]==="."||l[u]==="."?(l[u]!=="."&&(a=Wn(l[u++],i)),u++,(u+1===l.length||l[u+1]==="("&&l[u+3]===")"||l[u+1]==="'"&&l[u+3]==="'")&&(s=Wn(l[u],i),c=Math.pow(10,l[u].length),u++),(l[u]==="("&&l[u+2]===")"||l[u]==="'"&&l[u+2]==="'")&&(o=Wn(l[u+1],i),h=Math.pow(10,l[u+1].length)-1,u+=3)):l[u+1]==="/"||l[u+1]===":"?(s=Wn(l[u],i),c=Wn(l[u+2],1),u+=3):l[u+3]==="/"&&l[u+1]===" "&&(a=Wn(l[u],i),s=Wn(l[u+2],i),c=Wn(l[u+4],1),u+=5),l.length<=u){r=c*h,i=t=o+r*a+h*s;break}}default:throw Ra()}if(r===0)throw zo();Re.s=i<0?-1:1,Re.n=Math.abs(t),Re.d=Math.abs(r)};function Fx(n,e,t){for(var r=1;e>0;n=n*n%t,e>>=1)e&1&&(r=r*n%t);return r}function Rx(n,e){for(;e%2===0;e/=2);for(;e%5===0;e/=5);if(e===1)return 0;for(var t=10%e,r=1;t!==1;r++)if(t=t*10%e,r>Cx)return 0;return r}function Nx(n,e,t){for(var r=1,i=Fx(10,t,e),a=0;a<300;a++){if(r===i)return a;r=r*10%e,i=i*10%e}return 0}function ui(n,e){if(!n)return e;if(!e)return n;for(;;){if(n%=e,!n)return e;if(e%=n,!e)return n}}function Ht(n,e){if(mn(n,e),this instanceof Ht)n=ui(Re.d,Re.n),this.s=Re.s,this.n=Re.n/n,this.d=Re.d/n;else return yt(Re.s*Re.n,Re.d)}var zo=function(){return new Error("Division by Zero")},Ra=function(){return new Error("Invalid argument")},Lx=function(){return new Error("Parameters must be integer")};Ht.prototype={s:1,n:0,d:1,abs:function(){return yt(this.n,this.d)},neg:function(){return yt(-this.s*this.n,this.d)},add:function(n,e){return mn(n,e),yt(this.s*this.n*Re.d+Re.s*this.d*Re.n,this.d*Re.d)},sub:function(n,e){return mn(n,e),yt(this.s*this.n*Re.d-Re.s*this.d*Re.n,this.d*Re.d)},mul:function(n,e){return mn(n,e),yt(this.s*Re.s*this.n*Re.n,this.d*Re.d)},div:function(n,e){return mn(n,e),yt(this.s*Re.s*this.n*Re.d,this.d*Re.n)},clone:function(){return yt(this.s*this.n,this.d)},mod:function(n,e){if(isNaN(this.n)||isNaN(this.d))return new Ht(NaN);if(n===void 0)return yt(this.s*this.n%this.d,1);if(mn(n,e),Re.n===0&&this.d===0)throw zo();return yt(this.s*(Re.d*this.n)%(Re.n*this.d),Re.d*this.d)},gcd:function(n,e){return mn(n,e),yt(ui(Re.n,this.n)*ui(Re.d,this.d),Re.d*this.d)},lcm:function(n,e){return mn(n,e),Re.n===0&&this.n===0?yt(0,1):yt(Re.n*this.n,ui(Re.n,this.n)*ui(Re.d,this.d))},ceil:function(n){return n=Math.pow(10,n||0),isNaN(this.n)||isNaN(this.d)?new Ht(NaN):yt(Math.ceil(n*this.s*this.n/this.d),n)},floor:function(n){return n=Math.pow(10,n||0),isNaN(this.n)||isNaN(this.d)?new Ht(NaN):yt(Math.floor(n*this.s*this.n/this.d),n)},round:function(n){return n=Math.pow(10,n||0),isNaN(this.n)||isNaN(this.d)?new Ht(NaN):yt(Math.round(n*this.s*this.n/this.d),n)},inverse:function(){return yt(this.s*this.d,this.n)},pow:function(n,e){if(mn(n,e),Re.d===1)return Re.s<0?yt(Math.pow(this.s*this.d,Re.n),Math.pow(this.n,Re.n)):yt(Math.pow(this.s*this.n,Re.n),Math.pow(this.d,Re.n));if(this.s<0)return null;var t=Bl(this.n),r=Bl(this.d),i=1,a=1;for(var s in t)if(s!=="1"){if(s==="0"){i=0;break}if(t[s]*=Re.n,t[s]%Re.d===0)t[s]/=Re.d;else return null;i*=Math.pow(s,t[s])}for(var s in r)if(s!=="1"){if(r[s]*=Re.n,r[s]%Re.d===0)r[s]/=Re.d;else return null;a*=Math.pow(s,r[s])}return Re.s<0?yt(a,i):yt(i,a)},equals:function(n,e){return mn(n,e),this.s*this.n*Re.d===Re.s*Re.n*this.d},compare:function(n,e){mn(n,e);var t=this.s*this.n*Re.d-Re.s*Re.n*this.d;return(0<t)-(t<0)},simplify:function(n){if(isNaN(this.n)||isNaN(this.d))return this;n=n||.001;for(var e=this.abs(),t=e.toContinued(),r=1;r<t.length;r++){for(var i=yt(t[r-1],1),a=r-2;a>=0;a--)i=i.inverse().add(t[a]);if(Math.abs(i.sub(e).valueOf())<n)return i.mul(this.s)}return this},divisible:function(n,e){return mn(n,e),!(!(Re.n*this.d)||this.n*Re.d%(Re.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(n){var e,t="",r=this.n,i=this.d;return this.s<0&&(t+="-"),i===1?t+=r:(n&&(e=Math.floor(r/i))>0&&(t+=e,t+=" ",r%=i),t+=r,t+="/",t+=i),t},toLatex:function(n){var e,t="",r=this.n,i=this.d;return this.s<0&&(t+="-"),i===1?t+=r:(n&&(e=Math.floor(r/i))>0&&(t+=e,r%=i),t+="\\frac{",t+=r,t+="}{",t+=i,t+="}"),t},toContinued:function(){var n,e=this.n,t=this.d,r=[];if(isNaN(e)||isNaN(t))return r;do r.push(Math.floor(e/t)),n=e%t,e=t,t=n;while(e!==1);return r},toString:function(n){var e=this.n,t=this.d;if(isNaN(e)||isNaN(t))return"NaN";n=n||15;var r=Rx(e,t),i=Nx(e,t,r),a=this.s<0?"-":"";if(a+=e/t|0,e%=t,e*=10,e&&(a+="."),r){for(var s=i;s--;)a+=e/t|0,e%=t,e*=10;a+="(";for(var s=r;s--;)a+=e/t|0,e%=t,e*=10;a+=")"}else for(var s=n;e&&s--;)a+=e/t|0,e%=t,e*=10;return a}};var Px="Fraction",Ix=[],Ux=Ae(Px,Ix,()=>(Object.defineProperty(Ht,"name",{value:"Fraction"}),Ht.prototype.constructor=Ht,Ht.prototype.type="Fraction",Ht.prototype.isFraction=!0,Ht.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},Ht.fromJSON=function(n){return new Ht(n)},Ht),{isClass:!0}),Bx="Matrix",Ox=[],zx=Ae(Bx,Ox,()=>{function n(){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator")}return n.prototype.type="Matrix",n.prototype.isMatrix=!0,n.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},n.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},n.prototype.create=function(e,t){throw new Error("Cannot invoke create on a Matrix interface")},n.prototype.subset=function(e,t,r){throw new Error("Cannot invoke subset on a Matrix interface")},n.prototype.get=function(e){throw new Error("Cannot invoke get on a Matrix interface")},n.prototype.set=function(e,t,r){throw new Error("Cannot invoke set on a Matrix interface")},n.prototype.resize=function(e,t){throw new Error("Cannot invoke resize on a Matrix interface")},n.prototype.reshape=function(e,t){throw new Error("Cannot invoke reshape on a Matrix interface")},n.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},n.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},n.prototype.map=function(e,t){throw new Error("Cannot invoke map on a Matrix interface")},n.prototype.forEach=function(e){throw new Error("Cannot invoke forEach on a Matrix interface")},n.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},n.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},n.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},n.prototype.format=function(e){throw new Error("Cannot invoke format on a Matrix interface")},n.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},n},{isClass:!0});function Vf(n){return Object.keys(n.signatures||{}).reduce(function(e,t){var r=(t.match(/,/g)||[]).length+1;return Math.max(e,r)},-1)}var Gx="DenseMatrix",Hx=["Matrix"],Vx=Ae(Gx,Hx,n=>{var{Matrix:e}=n;function t(u,l){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if(l&&!Tn(l))throw new Error("Invalid datatype: "+l);if(pt(u))u.type==="DenseMatrix"?(this._data=nt(u._data),this._size=nt(u._size),this._datatype=l||u._datatype):(this._data=u.toArray(),this._size=u.size(),this._datatype=l||u._datatype);else if(u&&ut(u.data)&&ut(u.size))this._data=u.data,this._size=u.size,Rl(this._data,this._size),this._datatype=l||u.datatype;else if(ut(u))this._data=h(u),this._size=dt(this._data),Rl(this._data,this._size),this._datatype=l;else{if(u)throw new TypeError("Unsupported type of data ("+Yn(u)+")");this._data=[],this._size=[0],this._datatype=l}}t.prototype=new e,t.prototype.createDenseMatrix=function(u,l){return new t(u,l)},Object.defineProperty(t,"name",{value:"DenseMatrix"}),t.prototype.constructor=t,t.prototype.type="DenseMatrix",t.prototype.isDenseMatrix=!0,t.prototype.getDataType=function(){return Oi(this._data,Yn)},t.prototype.storage=function(){return"dense"},t.prototype.datatype=function(){return this._datatype},t.prototype.create=function(u,l){return new t(u,l)},t.prototype.subset=function(u,l,f){switch(arguments.length){case 1:return r(this,u);case 2:case 3:return a(this,u,l,f);default:throw new SyntaxError("Wrong number of arguments")}},t.prototype.get=function(u){if(!ut(u))throw new TypeError("Array expected");if(u.length!==this._size.length)throw new st(u.length,this._size.length);for(var l=0;l<u.length;l++)_t(u[l],this._size[l]);for(var f=this._data,d=0,v=u.length;d<v;d++){var p=u[d];_t(p,f.length),f=f[p]}return f},t.prototype.set=function(u,l,f){if(!ut(u))throw new TypeError("Array expected");if(u.length<this._size.length)throw new st(u.length,this._size.length,"<");var d,v,p,g=u.map(function(w){return w+1});c(this,g,f);var m=this._data;for(d=0,v=u.length-1;d<v;d++)p=u[d],_t(p,m.length),m=m[p];return p=u[u.length-1],_t(p,m.length),m[p]=l,this};function r(u,l){if(!Uo(l))throw new TypeError("Invalid index");var f=l.isScalar();if(f)return u.get(l.min());var d=l.size();if(d.length!==u._size.length)throw new st(d.length,u._size.length);for(var v=l.min(),p=l.max(),g=0,m=u._size.length;g<m;g++)_t(v[g],u._size[g]),_t(p[g],u._size[g]);return new t(i(u._data,l,d.length,0),u._datatype)}function i(u,l,f,d){var v=d===f-1,p=l.dimension(d);return v?p.map(function(g){return _t(g,u.length),u[g]}).valueOf():p.map(function(g){_t(g,u.length);var m=u[g];return i(m,l,f,d+1)}).valueOf()}function a(u,l,f,d){if(!l||l.isIndex!==!0)throw new TypeError("Invalid index");var v=l.size(),p=l.isScalar(),g;if(pt(f)?(g=f.size(),f=f.valueOf()):g=dt(f),p){if(g.length!==0)throw new TypeError("Scalar expected");u.set(l.min(),f,d)}else{if(!gi(g,v))try{g.length===0?f=Ll([f],v):f=Ll(f,v),g=dt(f)}catch{}if(v.length<u._size.length)throw new st(v.length,u._size.length,"<");if(g.length<v.length){for(var m=0,w=0;v[m]===1&&g[m]===1;)m++;for(;v[m]===1;)w++,m++;f=Af(f,v.length,w,g)}if(!gi(v,g))throw new st(v,g,">");var _=l.max().map(function(D){return D+1});c(u,_,d);var S=v.length,E=0;s(u._data,l,f,S,E)}return u}function s(u,l,f,d,v){var p=v===d-1,g=l.dimension(v);p?g.forEach(function(m,w){_t(m),u[m]=f[w[0]]}):g.forEach(function(m,w){_t(m),s(u[m],l,f[w[0]],d,v+1)})}t.prototype.resize=function(u,l,f){if(!Ia(u))throw new TypeError("Array or Matrix expected");var d=u.valueOf().map(p=>Array.isArray(p)&&p.length===1?p[0]:p),v=f?this.clone():this;return o(v,d,l)};function o(u,l,f){if(l.length===0){for(var d=u._data;ut(d);)d=d[0];return d}return u._size=l.slice(0),u._data=Ua(u._data,u._size,f),u}t.prototype.reshape=function(u,l){var f=l?this.clone():this;f._data=Ef(f._data,u);var d=f._size.reduce((v,p)=>v*p);return f._size=Bo(u,d),f};function c(u,l,f){for(var d=u._size.slice(0),v=!1;d.length<l.length;)d.push(0),v=!0;for(var p=0,g=l.length;p<g;p++)l[p]>d[p]&&(d[p]=l[p],v=!0);v&&o(u,d,f)}t.prototype.clone=function(){var u=new t({data:nt(this._data),size:nt(this._size),datatype:this._datatype});return u},t.prototype.size=function(){return this._size.slice(0)},t.prototype.map=function(u){var l=this,f=Vf(u),d=function g(m,w){return ut(m)?m.map(function(_,S){return g(_,w.concat(S))}):f===1?u(m):f===2?u(m,w):u(m,w,l)},v=d(this._data,[]),p=this._datatype!==void 0?Oi(v,Yn):void 0;return new t(v,p)},t.prototype.forEach=function(u){var l=this,f=function d(v,p){ut(v)?v.forEach(function(g,m){d(g,p.concat(m))}):u(v,p,l)};f(this._data,[])},t.prototype[Symbol.iterator]=function*(){var u=function*l(f,d){if(ut(f))for(var v=0;v<f.length;v++)yield*l(f[v],d.concat(v));else yield{value:f,index:d}};yield*u(this._data,[])},t.prototype.rows=function(){var u=[],l=this.size();if(l.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var f=this._data;for(var d of f)u.push(new t([d],this._datatype));return u},t.prototype.columns=function(){var u=this,l=[],f=this.size();if(f.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var d=this._data,v=function(m){var w=d.map(_=>[_[m]]);l.push(new t(w,u._datatype))},p=0;p<f[1];p++)v(p);return l},t.prototype.toArray=function(){return nt(this._data)},t.prototype.valueOf=function(){return this._data},t.prototype.format=function(u){return mt(this._data,u)},t.prototype.toString=function(){return mt(this._data)},t.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},t.prototype.diagonal=function(u){if(u){if(bt(u)&&(u=u.toNumber()),!gt(u)||!ht(u))throw new TypeError("The parameter k must be an integer number")}else u=0;for(var l=u>0?u:0,f=u<0?-u:0,d=this._size[0],v=this._size[1],p=Math.min(d-f,v-l),g=[],m=0;m<p;m++)g[m]=this._data[m+f][m+l];return new t({data:g,size:[p],datatype:this._datatype})},t.diagonal=function(u,l,f,d){if(!ut(u))throw new TypeError("Array expected, size parameter");if(u.length!==2)throw new Error("Only two dimensions matrix are supported");if(u=u.map(function(b){if(bt(b)&&(b=b.toNumber()),!gt(b)||!ht(b)||b<1)throw new Error("Size values must be positive integers");return b}),f){if(bt(f)&&(f=f.toNumber()),!gt(f)||!ht(f))throw new TypeError("The parameter k must be an integer number")}else f=0;var v=f>0?f:0,p=f<0?-f:0,g=u[0],m=u[1],w=Math.min(g-p,m-v),_;if(ut(l)){if(l.length!==w)throw new Error("Invalid value array length");_=function(T){return l[T]}}else if(pt(l)){var S=l.size();if(S.length!==1||S[0]!==w)throw new Error("Invalid matrix length");_=function(T){return l.get([T])}}else _=function(){return l};d||(d=bt(_(0))?_(0).mul(0):0);var E=[];if(u.length>0){E=Ua(E,u,d);for(var D=0;D<w;D++)E[D+p][D+v]=_(D)}return new t({data:E,size:[g,m]})},t.fromJSON=function(u){return new t(u)},t.prototype.swapRows=function(u,l){if(!gt(u)||!ht(u)||!gt(l)||!ht(l))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return _t(u,this._size[0]),_t(l,this._size[0]),t._swapRows(u,l,this._data),this},t._swapRows=function(u,l,f){var d=f[u];f[u]=f[l],f[l]=d};function h(u){return pt(u)?h(u.valueOf()):ut(u)?u.map(h):u}return t},{isClass:!0});function nn(n,e,t){return n&&typeof n.map=="function"?n.map(function(r){return nn(r,e)}):e(n)}var Ol="isInteger",Wx=["typed"],kx=Ae(Ol,Wx,n=>{var{typed:e}=n;return e(Ol,{number:ht,BigNumber:function(r){return r.isInt()},Fraction:function(r){return r.d===1&&isFinite(r.n)},"Array | Matrix":e.referToSelf(t=>r=>nn(r,t))})}),Go="number",Ho="number, number";function Wf(n){return Math.abs(n)}Wf.signature=Go;function kf(n,e){return n+e}kf.signature=Ho;function Xf(n,e){return n*e}Xf.signature=Ho;function $f(n){return-n}$f.signature=Go;function Eo(n){return jv(n)}Eo.signature=Go;function qf(n,e){return n*n<1&&e===1/0||n*n>1&&e===-1/0?0:Math.pow(n,e)}qf.signature=Ho;var Yf="number";function Zf(n){return n>0}Zf.signature=Yf;function Kf(n){return n===0}Kf.signature=Yf;var zl="isPositive",Xx=["typed"],$x=Ae(zl,Xx,n=>{var{typed:e}=n;return e(zl,{number:Zf,BigNumber:function(r){return!r.isNeg()&&!r.isZero()&&!r.isNaN()},Fraction:function(r){return r.s>0&&r.n>0},Unit:e.referToSelf(t=>r=>e.find(t,r.valueType())(r.value)),"Array | Matrix":e.referToSelf(t=>r=>nn(r,t))})}),Gl="isZero",qx=["typed"],Yx=Ae(Gl,qx,n=>{var{typed:e}=n;return e(Gl,{number:Kf,BigNumber:function(r){return r.isZero()},Complex:function(r){return r.re===0&&r.im===0},Fraction:function(r){return r.d===1&&r.n===0},Unit:e.referToSelf(t=>r=>e.find(t,r.valueType())(r.value)),"Array | Matrix":e.referToSelf(t=>r=>nn(r,t))})});function qi(n,e,t){if(t==null)return n.eq(e);if(n.eq(e))return!0;if(n.isNaN()||e.isNaN())return!1;if(n.isFinite()&&e.isFinite()){var r=n.minus(e).abs();if(r.isZero())return!0;var i=n.constructor.max(n.abs(),e.abs());return r.lte(i.times(t))}return!1}function Zx(n,e,t){return or(n.re,e.re,t)&&or(n.im,e.im,t)}var Yi=Ae("compareUnits",["typed"],n=>{var{typed:e}=n;return{"Unit, Unit":e.referToSelf(t=>(r,i)=>{if(!r.equalBase(i))throw new Error("Cannot compare units with different base");return e.find(t,[r.valueType(),i.valueType()])(r.value,i.value)})}}),Ha="equalScalar",Kx=["typed","config"],Jx=Ae(Ha,Kx,n=>{var{typed:e,config:t}=n,r=Yi({typed:e});return e(Ha,{"boolean, boolean":function(a,s){return a===s},"number, number":function(a,s){return or(a,s,t.epsilon)},"BigNumber, BigNumber":function(a,s){return a.eq(s)||qi(a,s,t.epsilon)},"Fraction, Fraction":function(a,s){return a.equals(s)},"Complex, Complex":function(a,s){return Zx(a,s,t.epsilon)}},r)});Ae(Ha,["typed","config"],n=>{var{typed:e,config:t}=n;return e(Ha,{"number, number":function(i,a){return or(i,a,t.epsilon)}})});var Qx="SparseMatrix",jx=["typed","equalScalar","Matrix"],eE=Ae(Qx,jx,n=>{var{typed:e,equalScalar:t,Matrix:r}=n;function i(p,g){if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if(g&&!Tn(g))throw new Error("Invalid datatype: "+g);if(pt(p))a(this,p,g);else if(p&&ut(p.index)&&ut(p.ptr)&&ut(p.size))this._values=p.values,this._index=p.index,this._ptr=p.ptr,this._size=p.size,this._datatype=g||p.datatype;else if(ut(p))s(this,p,g);else{if(p)throw new TypeError("Unsupported type of data ("+Yn(p)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=g}}function a(p,g,m){g.type==="SparseMatrix"?(p._values=g._values?nt(g._values):void 0,p._index=nt(g._index),p._ptr=nt(g._ptr),p._size=nt(g._size),p._datatype=m||g._datatype):s(p,g.valueOf(),m||g._datatype)}function s(p,g,m){p._values=[],p._index=[],p._ptr=[],p._datatype=m;var w=g.length,_=0,S=t,E=0;if(Tn(m)&&(S=e.find(t,[m,m])||t,E=e.convert(0,m)),w>0){var D=0;do{p._ptr.push(p._index.length);for(var b=0;b<w;b++){var T=g[b];if(ut(T)){if(D===0&&_<T.length&&(_=T.length),D<T.length){var y=T[D];S(y,E)||(p._values.push(y),p._index.push(b))}}else D===0&&_<1&&(_=1),S(T,E)||(p._values.push(T),p._index.push(b))}D++}while(D<_)}p._ptr.push(p._index.length),p._size=[w,_]}i.prototype=new r,i.prototype.createSparseMatrix=function(p,g){return new i(p,g)},Object.defineProperty(i,"name",{value:"SparseMatrix"}),i.prototype.constructor=i,i.prototype.type="SparseMatrix",i.prototype.isSparseMatrix=!0,i.prototype.getDataType=function(){return Oi(this._values,Yn)},i.prototype.storage=function(){return"sparse"},i.prototype.datatype=function(){return this._datatype},i.prototype.create=function(p,g){return new i(p,g)},i.prototype.density=function(){var p=this._size[0],g=this._size[1];return p!==0&&g!==0?this._index.length/(p*g):0},i.prototype.subset=function(p,g,m){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return o(this,p);case 2:case 3:return c(this,p,g,m);default:throw new SyntaxError("Wrong number of arguments")}};function o(p,g){if(!Uo(g))throw new TypeError("Invalid index");var m=g.isScalar();if(m)return p.get(g.min());var w=g.size();if(w.length!==p._size.length)throw new st(w.length,p._size.length);var _,S,E,D,b=g.min(),T=g.max();for(_=0,S=p._size.length;_<S;_++)_t(b[_],p._size[_]),_t(T[_],p._size[_]);var y=p._values,x=p._index,P=p._ptr,C=g.dimension(0),F=g.dimension(1),N=[],L=[];C.forEach(function(X,z){L[X]=z[0],N[X]=!0});var U=y?[]:void 0,G=[],H=[];return F.forEach(function(X){for(H.push(G.length),E=P[X],D=P[X+1];E<D;E++)_=x[E],N[_]===!0&&(G.push(L[_]),U&&U.push(y[E]))}),H.push(G.length),new i({values:U,index:G,ptr:H,size:w,datatype:p._datatype})}function c(p,g,m,w){if(!g||g.isIndex!==!0)throw new TypeError("Invalid index");var _=g.size(),S=g.isScalar(),E;if(pt(m)?(E=m.size(),m=m.toArray()):E=dt(m),S){if(E.length!==0)throw new TypeError("Scalar expected");p.set(g.min(),m,w)}else{if(_.length!==1&&_.length!==2)throw new st(_.length,p._size.length,"<");if(E.length<_.length){for(var D=0,b=0;_[D]===1&&E[D]===1;)D++;for(;_[D]===1;)b++,D++;m=Af(m,_.length,b,E)}if(!gi(_,E))throw new st(_,E,">");if(_.length===1){var T=g.dimension(0);T.forEach(function(P,C){_t(P),p.set([P,0],m[C[0]],w)})}else{var y=g.dimension(0),x=g.dimension(1);y.forEach(function(P,C){_t(P),x.forEach(function(F,N){_t(F),p.set([P,F],m[C[0]][N[0]],w)})})}}return p}i.prototype.get=function(p){if(!ut(p))throw new TypeError("Array expected");if(p.length!==this._size.length)throw new st(p.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var g=p[0],m=p[1];_t(g,this._size[0]),_t(m,this._size[1]);var w=h(g,this._ptr[m],this._ptr[m+1],this._index);return w<this._ptr[m+1]&&this._index[w]===g?this._values[w]:0},i.prototype.set=function(p,g,m){if(!ut(p))throw new TypeError("Array expected");if(p.length!==this._size.length)throw new st(p.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var w=p[0],_=p[1],S=this._size[0],E=this._size[1],D=t,b=0;Tn(this._datatype)&&(D=e.find(t,[this._datatype,this._datatype])||t,b=e.convert(0,this._datatype)),(w>S-1||_>E-1)&&(f(this,Math.max(w+1,S),Math.max(_+1,E),m),S=this._size[0],E=this._size[1]),_t(w,S),_t(_,E);var T=h(w,this._ptr[_],this._ptr[_+1],this._index);return T<this._ptr[_+1]&&this._index[T]===w?D(g,b)?u(T,_,this._values,this._index,this._ptr):this._values[T]=g:D(g,b)||l(T,w,_,g,this._values,this._index,this._ptr),this};function h(p,g,m,w){if(m-g===0)return m;for(var _=g;_<m;_++)if(w[_]===p)return _;return g}function u(p,g,m,w,_){m.splice(p,1),w.splice(p,1);for(var S=g+1;S<_.length;S++)_[S]--}function l(p,g,m,w,_,S,E){_.splice(p,0,w),S.splice(p,0,g);for(var D=m+1;D<E.length;D++)E[D]++}i.prototype.resize=function(p,g,m){if(!Ia(p))throw new TypeError("Array or Matrix expected");var w=p.valueOf().map(S=>Array.isArray(S)&&S.length===1?S[0]:S);if(w.length!==2)throw new Error("Only two dimensions matrix are supported");w.forEach(function(S){if(!gt(S)||!ht(S)||S<0)throw new TypeError("Invalid size, must contain positive integers (size: "+mt(w)+")")});var _=m?this.clone():this;return f(_,w[0],w[1],g)};function f(p,g,m,w){var _=w||0,S=t,E=0;Tn(p._datatype)&&(S=e.find(t,[p._datatype,p._datatype])||t,E=e.convert(0,p._datatype),_=e.convert(_,p._datatype));var D=!S(_,E),b=p._size[0],T=p._size[1],y,x,P;if(m>T){for(x=T;x<m;x++)if(p._ptr[x]=p._values.length,D)for(y=0;y<b;y++)p._values.push(_),p._index.push(y);p._ptr[m]=p._values.length}else m<T&&(p._ptr.splice(m+1,T-m),p._values.splice(p._ptr[m],p._values.length),p._index.splice(p._ptr[m],p._index.length));if(T=m,g>b){if(D){var C=0;for(x=0;x<T;x++){p._ptr[x]=p._ptr[x]+C,P=p._ptr[x+1]+C;var F=0;for(y=b;y<g;y++,F++)p._values.splice(P+F,0,_),p._index.splice(P+F,0,y),C++}p._ptr[T]=p._values.length}}else if(g<b){var N=0;for(x=0;x<T;x++){p._ptr[x]=p._ptr[x]-N;var L=p._ptr[x],U=p._ptr[x+1]-N;for(P=L;P<U;P++)y=p._index[P],y>g-1&&(p._values.splice(P,1),p._index.splice(P,1),N++)}p._ptr[x]=p._values.length}return p._size[0]=g,p._size[1]=m,p}i.prototype.reshape=function(p,g){if(!ut(p))throw new TypeError("Array expected");if(p.length!==2)throw new Error("Sparse matrices can only be reshaped in two dimensions");p.forEach(function(X){if(!gt(X)||!ht(X)||X<=-2||X===0)throw new TypeError("Invalid size, must contain positive integers or -1 (size: "+mt(p)+")")});var m=this._size[0]*this._size[1];p=Bo(p,m);var w=p[0]*p[1];if(m!==w)throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var _=g?this.clone():this;if(this._size[0]===p[0]&&this._size[1]===p[1])return _;for(var S=[],E=0;E<_._ptr.length;E++)for(var D=0;D<_._ptr[E+1]-_._ptr[E];D++)S.push(E);for(var b=_._values.slice(),T=_._index.slice(),y=0;y<_._index.length;y++){var x=T[y],P=S[y],C=x*_._size[1]+P;S[y]=C%p[1],T[y]=Math.floor(C/p[1])}_._values.length=0,_._index.length=0,_._ptr.length=p[1]+1,_._size=p.slice();for(var F=0;F<_._ptr.length;F++)_._ptr[F]=0;for(var N=0;N<b.length;N++){var L=T[N],U=S[N],G=b[N],H=h(L,_._ptr[U],_._ptr[U+1],_._index);l(H,L,U,G,_._values,_._index,_._ptr)}return _},i.prototype.clone=function(){var p=new i({values:this._values?nt(this._values):void 0,index:nt(this._index),ptr:nt(this._ptr),size:nt(this._size),datatype:this._datatype});return p},i.prototype.size=function(){return this._size.slice(0)},i.prototype.map=function(p,g){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var m=this,w=this._size[0],_=this._size[1],S=Vf(p),E=function(b,T,y){return S===1?p(b):S===2?p(b,[T,y]):p(b,[T,y],m)};return d(this,0,w-1,0,_-1,E,g)};function d(p,g,m,w,_,S,E){var D=[],b=[],T=[],y=t,x=0;Tn(p._datatype)&&(y=e.find(t,[p._datatype,p._datatype])||t,x=e.convert(0,p._datatype));for(var P=function(K,Z,j){K=S(K,Z,j),y(K,x)||(D.push(K),b.push(Z))},C=w;C<=_;C++){T.push(D.length);var F=p._ptr[C],N=p._ptr[C+1];if(E)for(var L=F;L<N;L++){var U=p._index[L];U>=g&&U<=m&&P(p._values[L],U-g,C-w)}else{for(var G={},H=F;H<N;H++){var X=p._index[H];G[X]=p._values[H]}for(var z=g;z<=m;z++){var O=z in G?G[z]:0;P(O,z-g,C-w)}}}return T.push(D.length),new i({values:D,index:b,ptr:T,size:[m-g+1,_-w+1]})}i.prototype.forEach=function(p,g){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var m=this,w=this._size[0],_=this._size[1],S=0;S<_;S++){var E=this._ptr[S],D=this._ptr[S+1];if(g)for(var b=E;b<D;b++){var T=this._index[b];p(this._values[b],[T,S],m)}else{for(var y={},x=E;x<D;x++){var P=this._index[x];y[P]=this._values[x]}for(var C=0;C<w;C++){var F=C in y?y[C]:0;p(F,[C,S],m)}}}},i.prototype[Symbol.iterator]=function*(){if(!this._values)throw new Error("Cannot iterate a Pattern only matrix");for(var p=this._size[1],g=0;g<p;g++)for(var m=this._ptr[g],w=this._ptr[g+1],_=m;_<w;_++){var S=this._index[_];yield{value:this._values[_],index:[S,g]}}},i.prototype.toArray=function(){return v(this._values,this._index,this._ptr,this._size,!0)},i.prototype.valueOf=function(){return v(this._values,this._index,this._ptr,this._size,!1)};function v(p,g,m,w,_){var S=w[0],E=w[1],D=[],b,T;for(b=0;b<S;b++)for(D[b]=[],T=0;T<E;T++)D[b][T]=0;for(T=0;T<E;T++)for(var y=m[T],x=m[T+1],P=y;P<x;P++)b=g[P],D[b][T]=p?_?nt(p[P]):p[P]:1;return D}return i.prototype.format=function(p){for(var g=this._size[0],m=this._size[1],w=this.density(),_="Sparse Matrix ["+mt(g,p)+" x "+mt(m,p)+"] density: "+mt(w,p)+`
`,S=0;S<m;S++)for(var E=this._ptr[S],D=this._ptr[S+1],b=E;b<D;b++){var T=this._index[b];_+=`
    (`+mt(T,p)+", "+mt(S,p)+") ==> "+(this._values?mt(this._values[b],p):"X")}return _},i.prototype.toString=function(){return mt(this.toArray())},i.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},i.prototype.diagonal=function(p){if(p){if(bt(p)&&(p=p.toNumber()),!gt(p)||!ht(p))throw new TypeError("The parameter k must be an integer number")}else p=0;var g=p>0?p:0,m=p<0?-p:0,w=this._size[0],_=this._size[1],S=Math.min(w-m,_-g),E=[],D=[],b=[];b[0]=0;for(var T=g;T<_&&E.length<S;T++)for(var y=this._ptr[T],x=this._ptr[T+1],P=y;P<x;P++){var C=this._index[P];if(C===T-g+m){E.push(this._values[P]),D[E.length-1]=C-m;break}}return b.push(E.length),new i({values:E,index:D,ptr:b,size:[S,1]})},i.fromJSON=function(p){return new i(p)},i.diagonal=function(p,g,m,w,_){if(!ut(p))throw new TypeError("Array expected, size parameter");if(p.length!==2)throw new Error("Only two dimensions matrix are supported");if(p=p.map(function(X){if(bt(X)&&(X=X.toNumber()),!gt(X)||!ht(X)||X<1)throw new Error("Size values must be positive integers");return X}),m){if(bt(m)&&(m=m.toNumber()),!gt(m)||!ht(m))throw new TypeError("The parameter k must be an integer number")}else m=0;var S=t,E=0;Tn(_)&&(S=e.find(t,[_,_])||t,E=e.convert(0,_));var D=m>0?m:0,b=m<0?-m:0,T=p[0],y=p[1],x=Math.min(T-b,y-D),P;if(ut(g)){if(g.length!==x)throw new Error("Invalid value array length");P=function(z){return g[z]}}else if(pt(g)){var C=g.size();if(C.length!==1||C[0]!==x)throw new Error("Invalid matrix length");P=function(z){return g.get([z])}}else P=function(){return g};for(var F=[],N=[],L=[],U=0;U<y;U++){L.push(F.length);var G=U-D;if(G>=0&&G<x){var H=P(G);S(H,E)||(N.push(G+b),F.push(H))}}return L.push(F.length),new i({values:F,index:N,ptr:L,size:[T,y]})},i.prototype.swapRows=function(p,g){if(!gt(p)||!ht(p)||!gt(g)||!ht(g))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return _t(p,this._size[0]),_t(g,this._size[0]),i._swapRows(p,g,this._size[1],this._values,this._index,this._ptr),this},i._forEachRow=function(p,g,m,w,_){for(var S=w[p],E=w[p+1],D=S;D<E;D++)_(m[D],g[D])},i._swapRows=function(p,g,m,w,_,S){for(var E=0;E<m;E++){var D=S[E],b=S[E+1],T=h(p,D,b,_),y=h(g,D,b,_);if(T<b&&y<b&&_[T]===p&&_[y]===g){if(w){var x=w[T];w[T]=w[y],w[y]=x}continue}if(T<b&&_[T]===p&&(y>=b||_[y]!==g)){var P=w?w[T]:void 0;_.splice(y,0,g),w&&w.splice(y,0,P),_.splice(y<=T?T+1:T,1),w&&w.splice(y<=T?T+1:T,1);continue}if(y<b&&_[y]===g&&(T>=b||_[T]!==p)){var C=w?w[y]:void 0;_.splice(T,0,p),w&&w.splice(T,0,C),_.splice(T<=y?y+1:y,1),w&&w.splice(T<=y?y+1:y,1)}}},i},{isClass:!0}),tE="number",nE=["typed"];function rE(n){var e=n.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);if(e){var t={"0b":2,"0o":8,"0x":16}[e[1]],r=e[2],i=e[3];return{input:n,radix:t,integerPart:r,fractionalPart:i}}else return null}function iE(n){for(var e=parseInt(n.integerPart,n.radix),t=0,r=0;r<n.fractionalPart.length;r++){var i=parseInt(n.fractionalPart[r],n.radix);t+=i/Math.pow(n.radix,r+1)}var a=e+t;if(isNaN(a))throw new SyntaxError('String "'+n.input+'" is no valid number');return a}var aE=Ae(tE,nE,n=>{var{typed:e}=n,t=e("number",{"":function(){return 0},number:function(i){return i},string:function(i){if(i==="NaN")return NaN;var a=rE(i);if(a)return iE(a);var s=0,o=i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);o&&(s=Number(o[2]),i=o[1]);var c=Number(i);if(isNaN(c))throw new SyntaxError('String "'+i+'" is no valid number');if(o){if(c>2**s-1)throw new SyntaxError('String "'.concat(i,'" is out of range'));c>=2**(s-1)&&(c=c-2**s)}return c},BigNumber:function(i){return i.toNumber()},Fraction:function(i){return i.valueOf()},Unit:e.referToSelf(r=>i=>{var a=i.clone();return a.value=r(i.value),a}),null:function(i){return 0},"Unit, string | Unit":function(i,a){return i.toNumber(a)},"Array | Matrix":e.referToSelf(r=>i=>nn(i,r))});return t.fromJSON=function(r){return parseFloat(r.value)},t}),sE="bignumber",oE=["typed","BigNumber"],uE=Ae(sE,oE,n=>{var{typed:e,BigNumber:t}=n;return e("bignumber",{"":function(){return new t(0)},number:function(i){return new t(i+"")},string:function(i){var a=i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);if(a){var s=a[2],o=t(a[1]),c=new t(2).pow(Number(s));if(o.gt(c.sub(1)))throw new SyntaxError('String "'.concat(i,'" is out of range'));var h=new t(2).pow(Number(s)-1);return o.gte(h)?o.sub(c):o}return new t(i)},BigNumber:function(i){return i},Unit:e.referToSelf(r=>i=>{var a=i.clone();return a.value=r(i.value),a}),Fraction:function(i){return new t(i.n).div(i.d).times(i.s)},null:function(i){return new t(0)},"Array | Matrix":e.referToSelf(r=>i=>nn(i,r))})}),lE="complex",cE=["typed","Complex"],fE=Ae(lE,cE,n=>{var{typed:e,Complex:t}=n;return e("complex",{"":function(){return t.ZERO},number:function(i){return new t(i,0)},"number, number":function(i,a){return new t(i,a)},"BigNumber, BigNumber":function(i,a){return new t(i.toNumber(),a.toNumber())},Fraction:function(i){return new t(i.valueOf(),0)},Complex:function(i){return i.clone()},string:function(i){return t(i)},null:function(i){return t(0)},Object:function(i){if("re"in i&&"im"in i)return new t(i.re,i.im);if("r"in i&&"phi"in i||"abs"in i&&"arg"in i)return new t(i);throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)")},"Array | Matrix":e.referToSelf(r=>i=>nn(i,r))})}),hE="fraction",dE=["typed","Fraction"],pE=Ae(hE,dE,n=>{var{typed:e,Fraction:t}=n;return e("fraction",{number:function(i){if(!isFinite(i)||isNaN(i))throw new Error(i+" cannot be represented as a fraction");return new t(i)},string:function(i){return new t(i)},"number, number":function(i,a){return new t(i,a)},null:function(i){return new t(0)},BigNumber:function(i){return new t(i.toString())},Fraction:function(i){return i},Unit:e.referToSelf(r=>i=>{var a=i.clone();return a.value=r(i.value),a}),Object:function(i){return new t(i)},"Array | Matrix":e.referToSelf(r=>i=>nn(i,r))})}),Hl="matrix",mE=["typed","Matrix","DenseMatrix","SparseMatrix"],gE=Ae(Hl,mE,n=>{var{typed:e,Matrix:t,DenseMatrix:r,SparseMatrix:i}=n;return e(Hl,{"":function(){return a([])},string:function(o){return a([],o)},"string, string":function(o,c){return a([],o,c)},Array:function(o){return a(o)},Matrix:function(o){return a(o,o.storage())},"Array | Matrix, string":a,"Array | Matrix, string, string":a});function a(s,o,c){if(o==="dense"||o==="default"||o===void 0)return new r(s,c);if(o==="sparse")return new i(s,c);throw new TypeError("Unknown matrix type "+JSON.stringify(o)+".")}}),Vl="matrixFromColumns",vE=["typed","matrix","flatten","size"],_E=Ae(Vl,vE,n=>{var{typed:e,matrix:t,flatten:r,size:i}=n;return e(Vl,{"...Array":function(c){return a(c)},"...Matrix":function(c){return t(a(c.map(h=>h.toArray())))}});function a(o){if(o.length===0)throw new TypeError("At least one column is needed to construct a matrix.");for(var c=s(o[0]),h=[],u=0;u<c;u++)h[u]=[];for(var l of o){var f=s(l);if(f!==c)throw new TypeError("The vectors had different length: "+(c|0)+" ≠ "+(f|0));for(var d=r(l),v=0;v<c;v++)h[v].push(d[v])}return h}function s(o){var c=i(o);if(c.length===1)return c[0];if(c.length===2){if(c[0]===1)return c[1];if(c[1]===1)return c[0];throw new TypeError("At least one of the arguments is not a vector.")}else throw new TypeError("Only one- or two-dimensional vectors are supported.")}}),Wl="unaryMinus",xE=["typed"],EE=Ae(Wl,xE,n=>{var{typed:e}=n;return e(Wl,{number:$f,"Complex | BigNumber | Fraction":t=>t.neg(),Unit:e.referToSelf(t=>r=>{var i=r.clone();return i.value=e.find(t,i.valueType())(r.value),i}),"Array | Matrix":e.referToSelf(t=>r=>nn(r,t))})}),kl="abs",yE=["typed"],ME=Ae(kl,yE,n=>{var{typed:e}=n;return e(kl,{number:Wf,"Complex | BigNumber | Fraction | Unit":t=>t.abs(),"Array | Matrix":e.referToSelf(t=>r=>nn(r,t))})}),Xl="addScalar",AE=["typed"],SE=Ae(Xl,AE,n=>{var{typed:e}=n;return e(Xl,{"number, number":kf,"Complex, Complex":function(r,i){return r.add(i)},"BigNumber, BigNumber":function(r,i){return r.plus(i)},"Fraction, Fraction":function(r,i){return r.add(i)},"Unit, Unit":e.referToSelf(t=>(r,i)=>{if(r.value===null||r.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(i.value===null||i.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!r.equalBase(i))throw new Error("Units do not match");var a=r.clone();return a.value=e.find(t,[a.valueType(),i.valueType()])(a.value,i.value),a.fixPrefix=!1,a})})}),wE="matAlgo11xS0s",DE=["typed","equalScalar"],bE=Ae(wE,DE,n=>{var{typed:e,equalScalar:t}=n;return function(i,a,s,o){var c=i._values,h=i._index,u=i._ptr,l=i._size,f=i._datatype;if(!c)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var d=l[0],v=l[1],p,g=t,m=0,w=s;typeof f=="string"&&(p=f,g=e.find(t,[p,p]),m=e.convert(0,p),a=e.convert(a,p),w=e.find(s,[p,p]));for(var _=[],S=[],E=[],D=0;D<v;D++){E[D]=S.length;for(var b=u[D],T=u[D+1],y=b;y<T;y++){var x=h[y],P=o?w(a,c[y]):w(c[y],a);g(P,m)||(S.push(x),_.push(P))}}return E[v]=S.length,i.createSparseMatrix({values:_,index:S,ptr:E,size:[d,v],datatype:p})}}),TE="matAlgo12xSfs",CE=["typed","DenseMatrix"],yi=Ae(TE,CE,n=>{var{typed:e,DenseMatrix:t}=n;return function(i,a,s,o){var c=i._values,h=i._index,u=i._ptr,l=i._size,f=i._datatype;if(!c)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var d=l[0],v=l[1],p,g=s;typeof f=="string"&&(p=f,a=e.convert(a,p),g=e.find(s,[p,p]));for(var m=[],w=[],_=[],S=0;S<v;S++){for(var E=S+1,D=u[S],b=u[S+1],T=D;T<b;T++){var y=h[T];w[y]=c[T],_[y]=E}for(var x=0;x<d;x++)S===0&&(m[x]=[]),_[x]===E?m[x][S]=o?g(a,w[x]):g(w[x],a):m[x][S]=o?g(a,0):g(0,a)}return new t({data:m,size:[d,v],datatype:p})}}),FE="matAlgo14xDs",RE=["typed"],Jf=Ae(FE,RE,n=>{var{typed:e}=n;return function(i,a,s,o){var c=i._data,h=i._size,u=i._datatype,l,f=s;typeof u=="string"&&(l=u,a=e.convert(a,l),f=e.find(s,[l,l]));var d=h.length>0?t(f,0,h,h[0],c,a,o):[];return i.createDenseMatrix({data:d,size:nt(h),datatype:l})};function t(r,i,a,s,o,c,h){var u=[];if(i===a.length-1)for(var l=0;l<s;l++)u[l]=h?r(c,o[l]):r(o[l],c);else for(var f=0;f<s;f++)u[f]=t(r,i+1,a,a[i+1],o[f],c,h);return u}}),NE="matAlgo01xDSid",LE=["typed"],Qf=Ae(NE,LE,n=>{var{typed:e}=n;return function(r,i,a,s){var o=r._data,c=r._size,h=r._datatype,u=i._values,l=i._index,f=i._ptr,d=i._size,v=i._datatype;if(c.length!==d.length)throw new st(c.length,d.length);if(c[0]!==d[0]||c[1]!==d[1])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+d+")");if(!u)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var p=c[0],g=c[1],m=typeof h=="string"&&h===v?h:void 0,w=m?e.find(a,[m,m]):a,_,S,E=[];for(_=0;_<p;_++)E[_]=[];var D=[],b=[];for(S=0;S<g;S++){for(var T=S+1,y=f[S],x=f[S+1],P=y;P<x;P++)_=l[P],D[_]=s?w(u[P],o[_][S]):w(o[_][S],u[P]),b[_]=T;for(_=0;_<p;_++)b[_]===T?E[_][S]=D[_]:E[_][S]=o[_][S]}return r.createDenseMatrix({data:E,size:[p,g],datatype:m})}}),PE="matAlgo04xSidSid",IE=["typed","equalScalar"],UE=Ae(PE,IE,n=>{var{typed:e,equalScalar:t}=n;return function(i,a,s){var o=i._values,c=i._index,h=i._ptr,u=i._size,l=i._datatype,f=a._values,d=a._index,v=a._ptr,p=a._size,g=a._datatype;if(u.length!==p.length)throw new st(u.length,p.length);if(u[0]!==p[0]||u[1]!==p[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+p+")");var m=u[0],w=u[1],_,S=t,E=0,D=s;typeof l=="string"&&l===g&&(_=l,S=e.find(t,[_,_]),E=e.convert(0,_),D=e.find(s,[_,_]));var b=o&&f?[]:void 0,T=[],y=[],x=o&&f?[]:void 0,P=o&&f?[]:void 0,C=[],F=[],N,L,U,G,H;for(L=0;L<w;L++){y[L]=T.length;var X=L+1;for(G=h[L],H=h[L+1],U=G;U<H;U++)N=c[U],T.push(N),C[N]=X,x&&(x[N]=o[U]);for(G=v[L],H=v[L+1],U=G;U<H;U++)if(N=d[U],C[N]===X){if(x){var z=D(x[N],f[U]);S(z,E)?C[N]=null:x[N]=z}}else T.push(N),F[N]=X,P&&(P[N]=f[U]);if(x&&P)for(U=y[L];U<T.length;)N=T[U],C[N]===X?(b[U]=x[N],U++):F[N]===X?(b[U]=P[N],U++):T.splice(U,1)}return y[w]=T.length,i.createSparseMatrix({values:b,index:T,ptr:y,size:[m,w],datatype:_})}}),BE="matAlgo10xSids",OE=["typed","DenseMatrix"],jf=Ae(BE,OE,n=>{var{typed:e,DenseMatrix:t}=n;return function(i,a,s,o){var c=i._values,h=i._index,u=i._ptr,l=i._size,f=i._datatype;if(!c)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var d=l[0],v=l[1],p,g=s;typeof f=="string"&&(p=f,a=e.convert(a,p),g=e.find(s,[p,p]));for(var m=[],w=[],_=[],S=0;S<v;S++){for(var E=S+1,D=u[S],b=u[S+1],T=D;T<b;T++){var y=h[T];w[y]=c[T],_[y]=E}for(var x=0;x<d;x++)S===0&&(m[x]=[]),_[x]===E?m[x][S]=o?g(a,w[x]):g(w[x],a):m[x][S]=a}return new t({data:m,size:[d,v],datatype:p})}}),zE="matAlgo13xDD",GE=["typed"],HE=Ae(zE,GE,n=>{var{typed:e}=n;return function(i,a,s){var o=i._data,c=i._size,h=i._datatype,u=a._data,l=a._size,f=a._datatype,d=[];if(c.length!==l.length)throw new st(c.length,l.length);for(var v=0;v<c.length;v++){if(c[v]!==l[v])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+l+")");d[v]=c[v]}var p,g=s;typeof h=="string"&&h===f&&(p=h,g=e.find(s,[p,p]));var m=d.length>0?t(g,0,d,d[0],o,u):[];return i.createDenseMatrix({data:m,size:d,datatype:p})};function t(r,i,a,s,o,c){var h=[];if(i===a.length-1)for(var u=0;u<s;u++)h[u]=r(o[u],c[u]);else for(var l=0;l<s;l++)h[l]=t(r,i+1,a,a[i+1],o[l],c[l]);return h}}),VE="broadcast",WE=["concat"],kE=Ae(VE,WE,n=>{var{concat:e}=n;return function(i,a){var s=Math.max(i._size.length,a._size.length);if(i._size.length===a._size.length&&i._size.every((v,p)=>v===a._size[p]))return[i,a];for(var o=t(i._size,s,0),c=t(a._size,s,0),h=[],u=0;u<s;u++)h[u]=Math.max(o[u],c[u]);Ba(o,h),Ba(c,h);var l=i.clone(),f=a.clone();l._size.length<s?l.reshape(t(l._size,s,1)):f._size.length<s&&f.reshape(t(f._size,s,1));for(var d=0;d<s;d++)l._size[d]<h[d]&&(l=r(l,h[d],d)),f._size[d]<h[d]&&(f=r(f,h[d],d));return[l,f]};function t(i,a,s){return[...Array(a-i.length).fill(s),...i]}function r(i,a,s){return e(...Array(a).fill(i),s)}}),XE="matrixAlgorithmSuite",$E=["typed","matrix","concat"],Nr=Ae(XE,$E,n=>{var{typed:e,matrix:t,concat:r}=n,i=HE({typed:e}),a=Jf({typed:e}),s=kE({concat:r});return function(c){var h=c.elop,u=c.SD||c.DS,l;h?(l={"DenseMatrix, DenseMatrix":(p,g)=>i(...s(p,g),h),"Array, Array":(p,g)=>i(...s(t(p),t(g)),h).valueOf(),"Array, DenseMatrix":(p,g)=>i(...s(t(p),g),h),"DenseMatrix, Array":(p,g)=>i(...s(p,t(g)),h)},c.SS&&(l["SparseMatrix, SparseMatrix"]=(p,g)=>c.SS(...s(p,g),h,!1)),c.DS&&(l["DenseMatrix, SparseMatrix"]=(p,g)=>c.DS(...s(p,g),h,!1),l["Array, SparseMatrix"]=(p,g)=>c.DS(...s(t(p),g),h,!1)),u&&(l["SparseMatrix, DenseMatrix"]=(p,g)=>u(...s(g,p),h,!0),l["SparseMatrix, Array"]=(p,g)=>u(...s(t(g),p),h,!0))):(l={"DenseMatrix, DenseMatrix":e.referToSelf(p=>(g,m)=>i(...s(g,m),p)),"Array, Array":e.referToSelf(p=>(g,m)=>i(...s(t(g),t(m)),p).valueOf()),"Array, DenseMatrix":e.referToSelf(p=>(g,m)=>i(...s(t(g),m),p)),"DenseMatrix, Array":e.referToSelf(p=>(g,m)=>i(...s(g,t(m)),p))},c.SS&&(l["SparseMatrix, SparseMatrix"]=e.referToSelf(p=>(g,m)=>c.SS(...s(g,m),p,!1))),c.DS&&(l["DenseMatrix, SparseMatrix"]=e.referToSelf(p=>(g,m)=>c.DS(...s(g,m),p,!1)),l["Array, SparseMatrix"]=e.referToSelf(p=>(g,m)=>c.DS(...s(t(g),m),p,!1))),u&&(l["SparseMatrix, DenseMatrix"]=e.referToSelf(p=>(g,m)=>u(...s(m,g),p,!0)),l["SparseMatrix, Array"]=e.referToSelf(p=>(g,m)=>u(...s(t(m),g),p,!0))));var f=c.scalar||"any",d=c.Ds||c.Ss;d&&(h?(l["DenseMatrix,"+f]=(p,g)=>a(p,g,h,!1),l[f+", DenseMatrix"]=(p,g)=>a(g,p,h,!0),l["Array,"+f]=(p,g)=>a(t(p),g,h,!1).valueOf(),l[f+", Array"]=(p,g)=>a(t(g),p,h,!0).valueOf()):(l["DenseMatrix,"+f]=e.referToSelf(p=>(g,m)=>a(g,m,p,!1)),l[f+", DenseMatrix"]=e.referToSelf(p=>(g,m)=>a(m,g,p,!0)),l["Array,"+f]=e.referToSelf(p=>(g,m)=>a(t(g),m,p,!1).valueOf()),l[f+", Array"]=e.referToSelf(p=>(g,m)=>a(t(m),g,p,!0).valueOf())));var v=c.sS!==void 0?c.sS:c.Ss;return h?(c.Ss&&(l["SparseMatrix,"+f]=(p,g)=>c.Ss(p,g,h,!1)),v&&(l[f+", SparseMatrix"]=(p,g)=>v(g,p,h,!0))):(c.Ss&&(l["SparseMatrix,"+f]=e.referToSelf(p=>(g,m)=>c.Ss(g,m,p,!1))),v&&(l[f+", SparseMatrix"]=e.referToSelf(p=>(g,m)=>v(m,g,p,!0)))),h&&h.signatures&&Yv(l,h.signatures),l}}),qE="matAlgo03xDSf",YE=["typed"],Mi=Ae(qE,YE,n=>{var{typed:e}=n;return function(r,i,a,s){var o=r._data,c=r._size,h=r._datatype,u=i._values,l=i._index,f=i._ptr,d=i._size,v=i._datatype;if(c.length!==d.length)throw new st(c.length,d.length);if(c[0]!==d[0]||c[1]!==d[1])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+d+")");if(!u)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var p=c[0],g=c[1],m,w=0,_=a;typeof h=="string"&&h===v&&(m=h,w=e.convert(0,m),_=e.find(a,[m,m]));for(var S=[],E=0;E<p;E++)S[E]=[];for(var D=[],b=[],T=0;T<g;T++){for(var y=T+1,x=f[T],P=f[T+1],C=x;C<P;C++){var F=l[C];D[F]=s?_(u[C],o[F][T]):_(o[F][T],u[C]),b[F]=y}for(var N=0;N<p;N++)b[N]===y?S[N][T]=D[N]:S[N][T]=s?_(w,o[N][T]):_(o[N][T],w)}return r.createDenseMatrix({data:S,size:[p,g],datatype:m})}}),ZE="matAlgo05xSfSf",KE=["typed","equalScalar"],JE=Ae(ZE,KE,n=>{var{typed:e,equalScalar:t}=n;return function(i,a,s){var o=i._values,c=i._index,h=i._ptr,u=i._size,l=i._datatype,f=a._values,d=a._index,v=a._ptr,p=a._size,g=a._datatype;if(u.length!==p.length)throw new st(u.length,p.length);if(u[0]!==p[0]||u[1]!==p[1])throw new RangeError("Dimension mismatch. Matrix A ("+u+") must match Matrix B ("+p+")");var m=u[0],w=u[1],_,S=t,E=0,D=s;typeof l=="string"&&l===g&&(_=l,S=e.find(t,[_,_]),E=e.convert(0,_),D=e.find(s,[_,_]));var b=o&&f?[]:void 0,T=[],y=[],x=b?[]:void 0,P=b?[]:void 0,C=[],F=[],N,L,U,G;for(L=0;L<w;L++){y[L]=T.length;var H=L+1;for(U=h[L],G=h[L+1];U<G;U++)N=c[U],T.push(N),C[N]=H,x&&(x[N]=o[U]);for(U=v[L],G=v[L+1];U<G;U++)N=d[U],C[N]!==H&&T.push(N),F[N]=H,P&&(P[N]=f[U]);if(b)for(U=y[L];U<T.length;){N=T[U];var X=C[N],z=F[N];if(X===H||z===H){var O=X===H?x[N]:E,W=z===H?P[N]:E,K=D(O,W);S(K,E)?T.splice(U,1):(b.push(K),U++)}}}return y[w]=T.length,i.createSparseMatrix({values:b,index:T,ptr:y,size:[m,w],datatype:_})}}),QE="multiplyScalar",jE=["typed"],ey=Ae(QE,jE,n=>{var{typed:e}=n;return e("multiplyScalar",{"number, number":Xf,"Complex, Complex":function(r,i){return r.mul(i)},"BigNumber, BigNumber":function(r,i){return r.times(i)},"Fraction, Fraction":function(r,i){return r.mul(i)},"number | Fraction | BigNumber | Complex, Unit":(t,r)=>r.multiply(t),"Unit, number | Fraction | BigNumber | Complex | Unit":(t,r)=>t.multiply(r)})}),$l="multiply",ty=["typed","matrix","addScalar","multiplyScalar","equalScalar","dot"],ny=Ae($l,ty,n=>{var{typed:e,matrix:t,addScalar:r,multiplyScalar:i,equalScalar:a,dot:s}=n,o=bE({typed:e,equalScalar:a}),c=Jf({typed:e});function h(E,D){switch(E.length){case 1:switch(D.length){case 1:if(E[0]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(E[0]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+E[0]+") must match Matrix rows ("+D[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+D.length+" dimensions)")}break;case 2:switch(D.length){case 1:if(E[1]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+E[1]+") must match Vector length ("+D[0]+")");break;case 2:if(E[1]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+E[1]+") must match Matrix B rows ("+D[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+D.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+E.length+" dimensions)")}}function u(E,D,b){if(b===0)throw new Error("Cannot multiply two empty vectors");return s(E,D)}function l(E,D){if(D.storage()!=="dense")throw new Error("Support for SparseMatrix not implemented");return f(E,D)}function f(E,D){var b=E._data,T=E._size,y=E._datatype,x=D._data,P=D._size,C=D._datatype,F=T[0],N=P[1],L,U=r,G=i;y&&C&&y===C&&typeof y=="string"&&(L=y,U=e.find(r,[L,L]),G=e.find(i,[L,L]));for(var H=[],X=0;X<N;X++){for(var z=G(b[0],x[0][X]),O=1;O<F;O++)z=U(z,G(b[O],x[O][X]));H[X]=z}return E.createDenseMatrix({data:H,size:[N],datatype:L})}var d=e("_multiplyMatrixVector",{"DenseMatrix, any":p,"SparseMatrix, any":w}),v=e("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":g,"DenseMatrix, SparseMatrix":m,"SparseMatrix, DenseMatrix":_,"SparseMatrix, SparseMatrix":S});function p(E,D){var b=E._data,T=E._size,y=E._datatype,x=D._data,P=D._datatype,C=T[0],F=T[1],N,L=r,U=i;y&&P&&y===P&&typeof y=="string"&&(N=y,L=e.find(r,[N,N]),U=e.find(i,[N,N]));for(var G=[],H=0;H<C;H++){for(var X=b[H],z=U(X[0],x[0]),O=1;O<F;O++)z=L(z,U(X[O],x[O]));G[H]=z}return E.createDenseMatrix({data:G,size:[C],datatype:N})}function g(E,D){var b=E._data,T=E._size,y=E._datatype,x=D._data,P=D._size,C=D._datatype,F=T[0],N=T[1],L=P[1],U,G=r,H=i;y&&C&&y===C&&typeof y=="string"&&(U=y,G=e.find(r,[U,U]),H=e.find(i,[U,U]));for(var X=[],z=0;z<F;z++){var O=b[z];X[z]=[];for(var W=0;W<L;W++){for(var K=H(O[0],x[0][W]),Z=1;Z<N;Z++)K=G(K,H(O[Z],x[Z][W]));X[z][W]=K}}return E.createDenseMatrix({data:X,size:[F,L],datatype:U})}function m(E,D){var b=E._data,T=E._size,y=E._datatype,x=D._values,P=D._index,C=D._ptr,F=D._size,N=D._datatype;if(!x)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var L=T[0],U=F[1],G,H=r,X=i,z=a,O=0;y&&N&&y===N&&typeof y=="string"&&(G=y,H=e.find(r,[G,G]),X=e.find(i,[G,G]),z=e.find(a,[G,G]),O=e.convert(0,G));for(var W=[],K=[],Z=[],j=D.createSparseMatrix({values:W,index:K,ptr:Z,size:[L,U],datatype:G}),re=0;re<U;re++){Z[re]=K.length;var oe=C[re],le=C[re+1];if(le>oe)for(var me=0,fe=0;fe<L;fe++){for(var pe=fe+1,k=void 0,ye=oe;ye<le;ye++){var he=P[ye];me!==pe?(k=X(b[fe][he],x[ye]),me=pe):k=H(k,X(b[fe][he],x[ye]))}me===pe&&!z(k,O)&&(K.push(fe),W.push(k))}}return Z[U]=K.length,j}function w(E,D){var b=E._values,T=E._index,y=E._ptr,x=E._datatype;if(!b)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var P=D._data,C=D._datatype,F=E._size[0],N=D._size[0],L=[],U=[],G=[],H,X=r,z=i,O=a,W=0;x&&C&&x===C&&typeof x=="string"&&(H=x,X=e.find(r,[H,H]),z=e.find(i,[H,H]),O=e.find(a,[H,H]),W=e.convert(0,H));var K=[],Z=[];G[0]=0;for(var j=0;j<N;j++){var re=P[j];if(!O(re,W))for(var oe=y[j],le=y[j+1],me=oe;me<le;me++){var fe=T[me];Z[fe]?K[fe]=X(K[fe],z(re,b[me])):(Z[fe]=!0,U.push(fe),K[fe]=z(re,b[me]))}}for(var pe=U.length,k=0;k<pe;k++){var ye=U[k];L[k]=K[ye]}return G[1]=U.length,E.createSparseMatrix({values:L,index:U,ptr:G,size:[F,1],datatype:H})}function _(E,D){var b=E._values,T=E._index,y=E._ptr,x=E._datatype;if(!b)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var P=D._data,C=D._datatype,F=E._size[0],N=D._size[0],L=D._size[1],U,G=r,H=i,X=a,z=0;x&&C&&x===C&&typeof x=="string"&&(U=x,G=e.find(r,[U,U]),H=e.find(i,[U,U]),X=e.find(a,[U,U]),z=e.convert(0,U));for(var O=[],W=[],K=[],Z=E.createSparseMatrix({values:O,index:W,ptr:K,size:[F,L],datatype:U}),j=[],re=[],oe=0;oe<L;oe++){K[oe]=W.length;for(var le=oe+1,me=0;me<N;me++){var fe=P[me][oe];if(!X(fe,z))for(var pe=y[me],k=y[me+1],ye=pe;ye<k;ye++){var he=T[ye];re[he]!==le?(re[he]=le,W.push(he),j[he]=H(fe,b[ye])):j[he]=G(j[he],H(fe,b[ye]))}}for(var Me=K[oe],Ee=W.length,Ie=Me;Ie<Ee;Ie++){var Te=W[Ie];O[Ie]=j[Te]}}return K[L]=W.length,Z}function S(E,D){var b=E._values,T=E._index,y=E._ptr,x=E._datatype,P=D._values,C=D._index,F=D._ptr,N=D._datatype,L=E._size[0],U=D._size[1],G=b&&P,H,X=r,z=i;x&&N&&x===N&&typeof x=="string"&&(H=x,X=e.find(r,[H,H]),z=e.find(i,[H,H]));for(var O=G?[]:void 0,W=[],K=[],Z=E.createSparseMatrix({values:O,index:W,ptr:K,size:[L,U],datatype:H}),j=G?[]:void 0,re=[],oe,le,me,fe,pe,k,ye,he,Me=0;Me<U;Me++){K[Me]=W.length;var Ee=Me+1;for(pe=F[Me],k=F[Me+1],fe=pe;fe<k;fe++)if(he=C[fe],G)for(le=y[he],me=y[he+1],oe=le;oe<me;oe++)ye=T[oe],re[ye]!==Ee?(re[ye]=Ee,W.push(ye),j[ye]=z(P[fe],b[oe])):j[ye]=X(j[ye],z(P[fe],b[oe]));else for(le=y[he],me=y[he+1],oe=le;oe<me;oe++)ye=T[oe],re[ye]!==Ee&&(re[ye]=Ee,W.push(ye));if(G)for(var Ie=K[Me],Te=W.length,be=Ie;be<Te;be++){var Pe=W[be];O[be]=j[Pe]}}return K[U]=W.length,Z}return e($l,i,{"Array, Array":e.referTo("Matrix, Matrix",E=>(D,b)=>{h(dt(D),dt(b));var T=E(t(D),t(b));return pt(T)?T.valueOf():T}),"Matrix, Matrix":function(D,b){var T=D.size(),y=b.size();return h(T,y),T.length===1?y.length===1?u(D,b,T[0]):l(D,b):y.length===1?d(D,b):v(D,b)},"Matrix, Array":e.referTo("Matrix,Matrix",E=>(D,b)=>E(D,t(b))),"Array, Matrix":e.referToSelf(E=>(D,b)=>E(t(D,b.storage()),b)),"SparseMatrix, any":function(D,b){return o(D,b,i,!1)},"DenseMatrix, any":function(D,b){return c(D,b,i,!1)},"any, SparseMatrix":function(D,b){return o(b,D,i,!0)},"any, DenseMatrix":function(D,b){return c(b,D,i,!0)},"Array, any":function(D,b){return c(t(D),b,i,!1).valueOf()},"any, Array":function(D,b){return c(t(b),D,i,!0).valueOf()},"any, any":i,"any, any, ...any":e.referToSelf(E=>(D,b,T)=>{for(var y=E(D,b),x=0;x<T.length;x++)y=E(y,T[x]);return y})})}),ql="sign",ry=["typed","BigNumber","Fraction","complex"],iy=Ae(ql,ry,n=>{var{typed:e,BigNumber:t,complex:r,Fraction:i}=n;return e(ql,{number:Eo,Complex:function(s){return s.im===0?r(Eo(s.re)):s.sign()},BigNumber:function(s){return new t(s.cmp(0))},Fraction:function(s){return new i(s.s,1)},"Array | Matrix":e.referToSelf(a=>s=>nn(s,a)),Unit:e.referToSelf(a=>s=>{if(!s._isDerived()&&s.units[0].unit.offset!==0)throw new TypeError("sign is ambiguous for units with offset");return e.find(a,s.valueType())(s.value)})})}),ay="sqrt",sy=["config","typed","Complex"],oy=Ae(ay,sy,n=>{var{config:e,typed:t,Complex:r}=n;return t("sqrt",{number:i,Complex:function(s){return s.sqrt()},BigNumber:function(s){return!s.isNegative()||e.predictable?s.sqrt():i(s.toNumber())},Unit:function(s){return s.pow(.5)}});function i(a){return isNaN(a)?NaN:a>=0||e.predictable?Math.sqrt(a):new r(a,0).sqrt()}}),Yl="subtract",uy=["typed","matrix","equalScalar","addScalar","unaryMinus","DenseMatrix","concat"],ly=Ae(Yl,uy,n=>{var{typed:e,matrix:t,equalScalar:r,addScalar:i,unaryMinus:a,DenseMatrix:s,concat:o}=n,c=Qf({typed:e}),h=Mi({typed:e}),u=JE({typed:e,equalScalar:r}),l=jf({typed:e,DenseMatrix:s}),f=yi({typed:e,DenseMatrix:s}),d=Nr({typed:e,matrix:t,concat:o});return e(Yl,{"number, number":(v,p)=>v-p,"Complex, Complex":(v,p)=>v.sub(p),"BigNumber, BigNumber":(v,p)=>v.minus(p),"Fraction, Fraction":(v,p)=>v.sub(p),"Unit, Unit":e.referToSelf(v=>(p,g)=>{if(p.value===null)throw new Error("Parameter x contains a unit with undefined value");if(g.value===null)throw new Error("Parameter y contains a unit with undefined value");if(!p.equalBase(g))throw new Error("Units do not match");var m=p.clone();return m.value=e.find(v,[m.valueType(),g.valueType()])(m.value,g.value),m.fixPrefix=!1,m})},d({SS:u,DS:c,SD:h,Ss:f,sS:l}))}),cy="matAlgo07xSSf",fy=["typed","DenseMatrix"],Zi=Ae(cy,fy,n=>{var{typed:e,DenseMatrix:t}=n;return function(a,s,o){var c=a._size,h=a._datatype,u=s._size,l=s._datatype;if(c.length!==u.length)throw new st(c.length,u.length);if(c[0]!==u[0]||c[1]!==u[1])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+u+")");var f=c[0],d=c[1],v,p=0,g=o;typeof h=="string"&&h===l&&(v=h,p=e.convert(0,v),g=e.find(o,[v,v]));var m,w,_=[];for(m=0;m<f;m++)_[m]=[];var S=[],E=[],D=[],b=[];for(w=0;w<d;w++){var T=w+1;for(r(a,w,D,S,T),r(s,w,b,E,T),m=0;m<f;m++){var y=D[m]===T?S[m]:p,x=b[m]===T?E[m]:p;_[m][w]=g(y,x)}}return new t({data:_,size:[f,d],datatype:v})};function r(i,a,s,o,c){for(var h=i._values,u=i._index,l=i._ptr,f=l[a],d=l[a+1];f<d;f++){var v=u[f];s[v]=c,o[v]=h[f]}}}),Zl="conj",hy=["typed"],dy=Ae(Zl,hy,n=>{var{typed:e}=n;return e(Zl,{"number | BigNumber | Fraction":t=>t,Complex:t=>t.conjugate(),"Array | Matrix":e.referToSelf(t=>r=>nn(r,t))})}),Kl="im",py=["typed"],my=Ae(Kl,py,n=>{var{typed:e}=n;return e(Kl,{number:()=>0,"BigNumber | Fraction":t=>t.mul(0),Complex:t=>t.im,"Array | Matrix":e.referToSelf(t=>r=>nn(r,t))})}),Jl="re",gy=["typed"],vy=Ae(Jl,gy,n=>{var{typed:e}=n;return e(Jl,{"number | BigNumber | Fraction":t=>t,Complex:t=>t.re,"Array | Matrix":e.referToSelf(t=>r=>nn(r,t))})}),Ql="concat",_y=["typed","matrix","isInteger"],xy=Ae(Ql,_y,n=>{var{typed:e,matrix:t,isInteger:r}=n;return e(Ql,{"...Array | Matrix | number | BigNumber":function(a){var s,o=a.length,c=-1,h,u=!1,l=[];for(s=0;s<o;s++){var f=a[s];if(pt(f)&&(u=!0),gt(f)||bt(f)){if(s!==o-1)throw new Error("Dimension must be specified as last argument");if(h=c,c=f.valueOf(),!r(c))throw new TypeError("Integer number expected for dimension");if(c<0||s>0&&c>h)throw new Rr(c,h+1)}else{var d=nt(f).valueOf(),v=dt(d);if(l[s]=d,h=c,c=v.length-1,s>0&&c!==h)throw new st(h+1,c+1)}}if(l.length===0)throw new SyntaxError("At least one matrix expected");for(var p=l.shift();l.length;)p=Df(p,l.shift(),c);return u?t(p):p},"...string":function(a){return a.join("")}})}),jl="column",Ey=["typed","Index","matrix","range"],yy=Ae(jl,Ey,n=>{var{typed:e,Index:t,matrix:r,range:i}=n;return e(jl,{"Matrix, number":a,"Array, number":function(o,c){return a(r(nt(o)),c).valueOf()}});function a(s,o){if(s.size().length!==2)throw new Error("Only two dimensional matrix is supported");_t(o,s.size()[1]);var c=i(0,s.size()[0]),h=new t(c,o),u=s.subset(h);return pt(u)?u:r([[u]])}}),ec="cross",My=["typed","matrix","subtract","multiply"],Ay=Ae(ec,My,n=>{var{typed:e,matrix:t,subtract:r,multiply:i}=n;return e(ec,{"Matrix, Matrix":function(o,c){return t(a(o.toArray(),c.toArray()))},"Matrix, Array":function(o,c){return t(a(o.toArray(),c))},"Array, Matrix":function(o,c){return t(a(o,c.toArray()))},"Array, Array":a});function a(s,o){var c=Math.max(dt(s).length,dt(o).length);s=Nl(s),o=Nl(o);var h=dt(s),u=dt(o);if(h.length!==1||u.length!==1||h[0]!==3||u[0]!==3)throw new RangeError("Vectors with length 3 expected (Size A = ["+h.join(", ")+"], B = ["+u.join(", ")+"])");var l=[r(i(s[1],o[2]),i(s[2],o[1])),r(i(s[2],o[0]),i(s[0],o[2])),r(i(s[0],o[1]),i(s[1],o[0]))];return c>1?[l]:l}}),tc="diag",Sy=["typed","matrix","DenseMatrix","SparseMatrix"],wy=Ae(tc,Sy,n=>{var{typed:e,matrix:t,DenseMatrix:r,SparseMatrix:i}=n;return e(tc,{Array:function(h){return a(h,0,dt(h),null)},"Array, number":function(h,u){return a(h,u,dt(h),null)},"Array, BigNumber":function(h,u){return a(h,u.toNumber(),dt(h),null)},"Array, string":function(h,u){return a(h,0,dt(h),u)},"Array, number, string":function(h,u,l){return a(h,u,dt(h),l)},"Array, BigNumber, string":function(h,u,l){return a(h,u.toNumber(),dt(h),l)},Matrix:function(h){return a(h,0,h.size(),h.storage())},"Matrix, number":function(h,u){return a(h,u,h.size(),h.storage())},"Matrix, BigNumber":function(h,u){return a(h,u.toNumber(),h.size(),h.storage())},"Matrix, string":function(h,u){return a(h,0,h.size(),u)},"Matrix, number, string":function(h,u,l){return a(h,u,h.size(),l)},"Matrix, BigNumber, string":function(h,u,l){return a(h,u.toNumber(),h.size(),l)}});function a(c,h,u,l){if(!ht(h))throw new TypeError("Second parameter in function diag must be an integer");var f=h>0?h:0,d=h<0?-h:0;switch(u.length){case 1:return s(c,h,l,u[0],d,f);case 2:return o(c,h,l,u,d,f)}throw new RangeError("Matrix for function diag must be 2 dimensional")}function s(c,h,u,l,f,d){var v=[l+f,l+d];if(u&&u!=="sparse"&&u!=="dense")throw new TypeError("Unknown matrix type ".concat(u,'"'));var p=u==="sparse"?i.diagonal(v,c,h):r.diagonal(v,c,h);return u!==null?p:p.valueOf()}function o(c,h,u,l,f,d){if(pt(c)){var v=c.diagonal(h);return u!==null?u!==v.storage()?t(v,u):v:v.valueOf()}for(var p=Math.min(l[0]-f,l[1]-d),g=[],m=0;m<p;m++)g[m]=c[m+f][m+d];return u!==null?t(g):g}}),nc="flatten",Dy=["typed","matrix"],by=Ae(nc,Dy,n=>{var{typed:e,matrix:t}=n;return e(nc,{Array:function(i){return po(i)},Matrix:function(i){var a=po(i.toArray());return t(a)}})}),rc="getMatrixDataType",Ty=["typed"],Cy=Ae(rc,Ty,n=>{var{typed:e}=n;return e(rc,{Array:function(r){return Oi(r,Yn)},Matrix:function(r){return r.getDataType()}})}),ic="identity",Fy=["typed","config","matrix","BigNumber","DenseMatrix","SparseMatrix"],Ry=Ae(ic,Fy,n=>{var{typed:e,config:t,matrix:r,BigNumber:i,DenseMatrix:a,SparseMatrix:s}=n;return e(ic,{"":function(){return t.matrix==="Matrix"?r([]):[]},string:function(u){return r(u)},"number | BigNumber":function(u){return c(u,u,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, string":function(u,l){return c(u,u,l)},"number | BigNumber, number | BigNumber":function(u,l){return c(u,l,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, number | BigNumber, string":function(u,l,f){return c(u,l,f)},Array:function(u){return o(u)},"Array, string":function(u,l){return o(u,l)},Matrix:function(u){return o(u.valueOf(),u.storage())},"Matrix, string":function(u,l){return o(u.valueOf(),l)}});function o(h,u){switch(h.length){case 0:return u?r(u):[];case 1:return c(h[0],h[0],u);case 2:return c(h[0],h[1],u);default:throw new Error("Vector containing two values expected")}}function c(h,u,l){var f=bt(h)||bt(u)?i:null;if(bt(h)&&(h=h.toNumber()),bt(u)&&(u=u.toNumber()),!ht(h)||h<1)throw new Error("Parameters in function identity must be positive integers");if(!ht(u)||u<1)throw new Error("Parameters in function identity must be positive integers");var d=f?new i(1):1,v=f?new f(0):0,p=[h,u];if(l){if(l==="sparse")return s.diagonal(p,d,0,v);if(l==="dense")return a.diagonal(p,d,0,v);throw new TypeError('Unknown matrix type "'.concat(l,'"'))}for(var g=Ua([],p,v),m=h<u?h:u,w=0;w<m;w++)g[w][w]=d;return g}});function eh(){throw new Error('No "bignumber" implementation available')}function Ny(){throw new Error('No "fraction" implementation available')}function th(){throw new Error('No "matrix" implementation available')}var ac="range",Ly=["typed","config","?matrix","?bignumber","smaller","smallerEq","larger","largerEq","add","isPositive"],Py=Ae(ac,Ly,n=>{var{typed:e,config:t,matrix:r,bignumber:i,smaller:a,smallerEq:s,larger:o,largerEq:c,add:h,isPositive:u}=n;return e(ac,{string:f,"string, boolean":f,"number, number":function(g,m){return l(d(g,m,1,!1))},"number, number, number":function(g,m,w){return l(d(g,m,w,!1))},"number, number, boolean":function(g,m,w){return l(d(g,m,1,w))},"number, number, number, boolean":function(g,m,w,_){return l(d(g,m,w,_))},"BigNumber, BigNumber":function(g,m){var w=g.constructor;return l(d(g,m,new w(1),!1))},"BigNumber, BigNumber, BigNumber":function(g,m,w){return l(d(g,m,w,!1))},"BigNumber, BigNumber, boolean":function(g,m,w){var _=g.constructor;return l(d(g,m,new _(1),w))},"BigNumber, BigNumber, BigNumber, boolean":function(g,m,w,_){return l(d(g,m,w,_))},"Unit, Unit, Unit":function(g,m,w){return l(d(g,m,w,!1))},"Unit, Unit, Unit, boolean":function(g,m,w,_){return l(d(g,m,w,_))}});function l(p){return t.matrix==="Matrix"?r?r(p):th():p}function f(p,g){var m=v(p);if(!m)throw new SyntaxError('String "'+p+'" is no valid range');return t.number==="BigNumber"?(i===void 0&&eh(),l(d(i(m.start),i(m.end),i(m.step)))):l(d(m.start,m.end,m.step,g))}function d(p,g,m,w){for(var _=[],S=u(m)?w?s:a:w?c:o,E=p;S(E,g);)_.push(E),E=h(E,m);return _}function v(p){var g=p.split(":"),m=g.map(function(_){return Number(_)}),w=m.some(function(_){return isNaN(_)});if(w)return null;switch(m.length){case 2:return{start:m[0],end:m[1],step:1};case 3:return{start:m[0],end:m[2],step:m[1]};default:return null}}}),sc="size",Iy=["typed","config","?matrix"],Uy=Ae(sc,Iy,n=>{var{typed:e,config:t,matrix:r}=n;return e(sc,{Matrix:function(a){return a.create(a.size())},Array:dt,string:function(a){return t.matrix==="Array"?[a.length]:r([a.length])},"number | Complex | BigNumber | Unit | boolean | null":function(a){return t.matrix==="Array"?[]:r?r([]):th()}})}),oc="transpose",By=["typed","matrix"],Oy=Ae(oc,By,n=>{var{typed:e,matrix:t}=n;return e(oc,{Array:s=>r(t(s)).valueOf(),Matrix:r,any:nt});function r(s){var o=s.size(),c;switch(o.length){case 1:c=s.clone();break;case 2:{var h=o[0],u=o[1];if(u===0)throw new RangeError("Cannot transpose a 2D matrix with no columns (size: "+mt(o)+")");switch(s.storage()){case"dense":c=i(s,h,u);break;case"sparse":c=a(s,h,u);break}}break;default:throw new RangeError("Matrix must be a vector or two dimensional (size: "+mt(o)+")")}return c}function i(s,o,c){for(var h=s._data,u=[],l,f=0;f<c;f++){l=u[f]=[];for(var d=0;d<o;d++)l[d]=nt(h[d][f])}return s.createDenseMatrix({data:u,size:[c,o],datatype:s._datatype})}function a(s,o,c){for(var h=s._values,u=s._index,l=s._ptr,f=h?[]:void 0,d=[],v=[],p=[],g=0;g<o;g++)p[g]=0;var m,w,_;for(m=0,w=u.length;m<w;m++)p[u[m]]++;for(var S=0,E=0;E<o;E++)v.push(S),S+=p[E],p[E]=v[E];for(v.push(S),_=0;_<c;_++)for(var D=l[_],b=l[_+1],T=D;T<b;T++){var y=p[u[T]]++;d[y]=_,h&&(f[y]=nt(h[T]))}return s.createSparseMatrix({values:f,index:d,ptr:v,size:[c,o],datatype:s._datatype})}}),uc="ctranspose",zy=["typed","transpose","conj"],Gy=Ae(uc,zy,n=>{var{typed:e,transpose:t,conj:r}=n;return e(uc,{any:function(a){return r(t(a))}})}),lc="zeros",Hy=["typed","config","matrix","BigNumber"],Vy=Ae(lc,Hy,n=>{var{typed:e,config:t,matrix:r,BigNumber:i}=n;return e(lc,{"":function(){return t.matrix==="Array"?a([]):a([],"default")},"...number | BigNumber | string":function(h){var u=h[h.length-1];if(typeof u=="string"){var l=h.pop();return a(h,l)}else return t.matrix==="Array"?a(h):a(h,"default")},Array:a,Matrix:function(h){var u=h.storage();return a(h.valueOf(),u)},"Array | Matrix, string":function(h,u){return a(h.valueOf(),u)}});function a(c,h){var u=s(c),l=u?new i(0):0;if(o(c),h){var f=r(h);return c.length>0?f.resize(c,l):f}else{var d=[];return c.length>0?Ua(d,c,l):d}}function s(c){var h=!1;return c.forEach(function(u,l,f){bt(u)&&(h=!0,f[l]=u.toNumber())}),h}function o(c){c.forEach(function(h){if(typeof h!="number"||!ht(h)||h<0)throw new Error("Parameters in function zeros must be positive integers")})}}),Wy="numeric",ky=["number","?bignumber","?fraction"],Xy=Ae(Wy,ky,n=>{var{number:e,bignumber:t,fraction:r}=n,i={string:!0,number:!0,BigNumber:!0,Fraction:!0},a={number:s=>e(s),BigNumber:t?s=>t(s):eh,Fraction:r?s=>r(s):Ny};return function(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"number",h=arguments.length>2?arguments[2]:void 0;if(h!==void 0)throw new SyntaxError("numeric() takes one or two arguments");var u=Yn(o);if(!(u in i))throw new TypeError("Cannot convert "+o+' of type "'+u+'"; valid input types are '+Object.keys(i).join(", "));if(!(c in a))throw new TypeError("Cannot convert "+o+' to type "'+c+'"; valid output types are '+Object.keys(a).join(", "));return c===u?o:a[c](o)}}),cc="divideScalar",$y=["typed","numeric"],qy=Ae(cc,$y,n=>{var{typed:e,numeric:t}=n;return e(cc,{"number, number":function(i,a){return i/a},"Complex, Complex":function(i,a){return i.div(a)},"BigNumber, BigNumber":function(i,a){return i.div(a)},"Fraction, Fraction":function(i,a){return i.div(a)},"Unit, number | Complex | Fraction | BigNumber | Unit":(r,i)=>r.divide(i),"number | Fraction | Complex | BigNumber, Unit":(r,i)=>i.divideInto(r)})}),fc="pow",Yy=["typed","config","identity","multiply","matrix","inv","fraction","number","Complex"],Zy=Ae(fc,Yy,n=>{var{typed:e,config:t,identity:r,multiply:i,matrix:a,inv:s,number:o,fraction:c,Complex:h}=n;return e(fc,{"number, number":u,"Complex, Complex":function(v,p){return v.pow(p)},"BigNumber, BigNumber":function(v,p){return p.isInteger()||v>=0||t.predictable?v.pow(p):new h(v.toNumber(),0).pow(p.toNumber(),0)},"Fraction, Fraction":function(v,p){var g=v.pow(p);if(g!=null)return g;if(t.predictable)throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");return u(v.valueOf(),p.valueOf())},"Array, number":l,"Array, BigNumber":function(v,p){return l(v,p.toNumber())},"Matrix, number":f,"Matrix, BigNumber":function(v,p){return f(v,p.toNumber())},"Unit, number | BigNumber":function(v,p){return v.pow(p)}});function u(d,v){if(t.predictable&&!ht(v)&&d<0)try{var p=c(v),g=o(p);if((v===g||Math.abs((v-g)/v)<1e-14)&&p.d%2===1)return(p.n%2===0?1:-1)*Math.pow(-d,v)}catch{}return t.predictable&&(d<-1&&v===1/0||d>-1&&d<0&&v===-1/0)?NaN:ht(v)||d>=0||t.predictable?qf(d,v):d*d<1&&v===1/0||d*d>1&&v===-1/0?0:new h(d,0).pow(v,0)}function l(d,v){if(!ht(v))throw new TypeError("For A^b, b must be an integer (value is "+v+")");var p=dt(d);if(p.length!==2)throw new Error("For A^b, A must be 2 dimensional (A has "+p.length+" dimensions)");if(p[0]!==p[1])throw new Error("For A^b, A must be square (size is "+p[0]+"x"+p[1]+")");if(v<0)try{return l(s(d),-v)}catch(w){throw w.message==="Cannot calculate inverse, determinant is zero"?new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is "+v+")"):w}for(var g=r(p[0]).valueOf(),m=d;v>=1;)(v&1)===1&&(g=i(m,g)),v>>=1,m=i(m,m);return g}function f(d,v){return a(l(d.valueOf(),v))}});function nh(n){var{DenseMatrix:e}=n;return function(r,i,a){var s=r.size();if(s.length!==2)throw new RangeError("Matrix must be two dimensional (size: "+mt(s)+")");var o=s[0],c=s[1];if(o!==c)throw new RangeError("Matrix must be square (size: "+mt(s)+")");var h=[];if(pt(i)){var u=i.size(),l=i._data;if(u.length===1){if(u[0]!==o)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(var f=0;f<o;f++)h[f]=[l[f]];return new e({data:h,size:[o,1],datatype:i._datatype})}if(u.length===2){if(u[0]!==o||u[1]!==1)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");if(df(i)){if(a){h=[];for(var d=0;d<o;d++)h[d]=[l[d][0]];return new e({data:h,size:[o,1],datatype:i._datatype})}return i}if(pf(i)){for(var v=0;v<o;v++)h[v]=[0];for(var p=i._values,g=i._index,m=i._ptr,w=m[1],_=m[0];_<w;_++){var S=g[_];h[S][0]=p[_]}return new e({data:h,size:[o,1],datatype:i._datatype})}}throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")}if(ut(i)){var E=dt(i);if(E.length===1){if(E[0]!==o)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(var D=0;D<o;D++)h[D]=[i[D]];return new e({data:h,size:[o,1]})}if(E.length===2){if(E[0]!==o||E[1]!==1)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(var b=0;b<o;b++)h[b]=[i[b][0]];return new e({data:h,size:[o,1]})}throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")}}}var hc="usolve",Ky=["typed","matrix","divideScalar","multiplyScalar","subtract","equalScalar","DenseMatrix"],Jy=Ae(hc,Ky,n=>{var{typed:e,matrix:t,divideScalar:r,multiplyScalar:i,subtract:a,equalScalar:s,DenseMatrix:o}=n,c=nh({DenseMatrix:o});return e(hc,{"SparseMatrix, Array | Matrix":function(f,d){return u(f,d)},"DenseMatrix, Array | Matrix":function(f,d){return h(f,d)},"Array, Array | Matrix":function(f,d){var v=t(f),p=h(v,d);return p.valueOf()}});function h(l,f){f=c(l,f,!0);for(var d=f._data,v=l._size[0],p=l._size[1],g=[],m=l._data,w=p-1;w>=0;w--){var _=d[w][0]||0,S=void 0;if(s(_,0))S=0;else{var E=m[w][w];if(s(E,0))throw new Error("Linear system cannot be solved since matrix is singular");S=r(_,E);for(var D=w-1;D>=0;D--)d[D]=[a(d[D][0]||0,i(S,m[D][w]))]}g[w]=[S]}return new o({data:g,size:[v,1]})}function u(l,f){f=c(l,f,!0);for(var d=f._data,v=l._size[0],p=l._size[1],g=l._values,m=l._index,w=l._ptr,_=[],S=p-1;S>=0;S--){var E=d[S][0]||0;if(s(E,0))_[S]=[0];else{for(var D=0,b=[],T=[],y=w[S],x=w[S+1],P=x-1;P>=y;P--){var C=m[P];C===S?D=g[P]:C<S&&(b.push(g[P]),T.push(C))}if(s(D,0))throw new Error("Linear system cannot be solved since matrix is singular");for(var F=r(E,D),N=0,L=T.length;N<L;N++){var U=T[N];d[U]=[a(d[U][0],i(F,b[N]))]}_[S]=[F]}}return new o({data:_,size:[v,1]})}}),dc="usolveAll",Qy=["typed","matrix","divideScalar","multiplyScalar","subtract","equalScalar","DenseMatrix"],jy=Ae(dc,Qy,n=>{var{typed:e,matrix:t,divideScalar:r,multiplyScalar:i,subtract:a,equalScalar:s,DenseMatrix:o}=n,c=nh({DenseMatrix:o});return e(dc,{"SparseMatrix, Array | Matrix":function(f,d){return u(f,d)},"DenseMatrix, Array | Matrix":function(f,d){return h(f,d)},"Array, Array | Matrix":function(f,d){var v=t(f),p=h(v,d);return p.map(g=>g.valueOf())}});function h(l,f){for(var d=[c(l,f,!0)._data.map(T=>T[0])],v=l._data,p=l._size[0],g=l._size[1],m=g-1;m>=0;m--)for(var w=d.length,_=0;_<w;_++){var S=d[_];if(s(v[m][m],0))if(s(S[m],0)){if(_===0){var D=[...S];D[m]=1;for(var b=m-1;b>=0;b--)D[b]=a(D[b],v[b][m]);d.push(D)}}else{if(_===0)return[];d.splice(_,1),_-=1,w-=1}else{S[m]=r(S[m],v[m][m]);for(var E=m-1;E>=0;E--)S[E]=a(S[E],i(S[m],v[E][m]))}}return d.map(T=>new o({data:T.map(y=>[y]),size:[p,1]}))}function u(l,f){for(var d=[c(l,f,!0)._data.map(O=>O[0])],v=l._size[0],p=l._size[1],g=l._values,m=l._index,w=l._ptr,_=p-1;_>=0;_--)for(var S=d.length,E=0;E<S;E++){for(var D=d[E],b=[],T=[],y=w[_],x=w[_+1],P=0,C=x-1;C>=y;C--){var F=m[C];F===_?P=g[C]:F<_&&(b.push(g[C]),T.push(F))}if(s(P,0))if(s(D[_],0)){if(E===0){var G=[...D];G[_]=1;for(var H=0,X=T.length;H<X;H++){var z=T[H];G[z]=a(G[z],b[H])}d.push(G)}}else{if(E===0)return[];d.splice(E,1),E-=1,S-=1}else{D[_]=r(D[_],P);for(var N=0,L=T.length;N<L;N++){var U=T[N];D[U]=a(D[U],i(D[_],b[N]))}}}return d.map(O=>new o({data:O.map(W=>[W]),size:[v,1]}))}}),Va="equal",eM=["typed","matrix","equalScalar","DenseMatrix","concat"],tM=Ae(Va,eM,n=>{var{typed:e,matrix:t,equalScalar:r,DenseMatrix:i,concat:a}=n,s=Mi({typed:e}),o=Zi({typed:e,DenseMatrix:i}),c=yi({typed:e,DenseMatrix:i}),h=Nr({typed:e,matrix:t,concat:a});return e(Va,nM({typed:e,equalScalar:r}),h({elop:r,SS:o,DS:s,Ss:c}))}),nM=Ae(Va,["typed","equalScalar"],n=>{var{typed:e,equalScalar:t}=n;return e(Va,{"any, any":function(i,a){return i===null?a===null:a===null?i===null:i===void 0?a===void 0:a===void 0?i===void 0:t(i,a)}})}),Wa="smaller",rM=["typed","config","matrix","DenseMatrix","concat"],iM=Ae(Wa,rM,n=>{var{typed:e,config:t,matrix:r,DenseMatrix:i,concat:a}=n,s=Mi({typed:e}),o=Zi({typed:e,DenseMatrix:i}),c=yi({typed:e,DenseMatrix:i}),h=Nr({typed:e,matrix:r,concat:a}),u=Yi({typed:e});return e(Wa,aM({typed:e,config:t}),{"boolean, boolean":(l,f)=>l<f,"BigNumber, BigNumber":function(f,d){return f.lt(d)&&!qi(f,d,t.epsilon)},"Fraction, Fraction":(l,f)=>l.compare(f)===-1,"Complex, Complex":function(f,d){throw new TypeError("No ordering relation is defined for complex numbers")}},u,h({SS:o,DS:s,Ss:c}))}),aM=Ae(Wa,["typed","config"],n=>{var{typed:e,config:t}=n;return e(Wa,{"number, number":function(i,a){return i<a&&!or(i,a,t.epsilon)}})}),ka="smallerEq",sM=["typed","config","matrix","DenseMatrix","concat"],oM=Ae(ka,sM,n=>{var{typed:e,config:t,matrix:r,DenseMatrix:i,concat:a}=n,s=Mi({typed:e}),o=Zi({typed:e,DenseMatrix:i}),c=yi({typed:e,DenseMatrix:i}),h=Nr({typed:e,matrix:r,concat:a}),u=Yi({typed:e});return e(ka,uM({typed:e,config:t}),{"boolean, boolean":(l,f)=>l<=f,"BigNumber, BigNumber":function(f,d){return f.lte(d)||qi(f,d,t.epsilon)},"Fraction, Fraction":(l,f)=>l.compare(f)!==1,"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},u,h({SS:o,DS:s,Ss:c}))}),uM=Ae(ka,["typed","config"],n=>{var{typed:e,config:t}=n;return e(ka,{"number, number":function(i,a){return i<=a||or(i,a,t.epsilon)}})}),Xa="larger",lM=["typed","config","matrix","DenseMatrix","concat"],cM=Ae(Xa,lM,n=>{var{typed:e,config:t,matrix:r,DenseMatrix:i,concat:a}=n,s=Mi({typed:e}),o=Zi({typed:e,DenseMatrix:i}),c=yi({typed:e,DenseMatrix:i}),h=Nr({typed:e,matrix:r,concat:a}),u=Yi({typed:e});return e(Xa,fM({typed:e,config:t}),{"boolean, boolean":(l,f)=>l>f,"BigNumber, BigNumber":function(f,d){return f.gt(d)&&!qi(f,d,t.epsilon)},"Fraction, Fraction":(l,f)=>l.compare(f)===1,"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},u,h({SS:o,DS:s,Ss:c}))}),fM=Ae(Xa,["typed","config"],n=>{var{typed:e,config:t}=n;return e(Xa,{"number, number":function(i,a){return i>a&&!or(i,a,t.epsilon)}})}),$a="largerEq",hM=["typed","config","matrix","DenseMatrix","concat"],dM=Ae($a,hM,n=>{var{typed:e,config:t,matrix:r,DenseMatrix:i,concat:a}=n,s=Mi({typed:e}),o=Zi({typed:e,DenseMatrix:i}),c=yi({typed:e,DenseMatrix:i}),h=Nr({typed:e,matrix:r,concat:a}),u=Yi({typed:e});return e($a,pM({typed:e,config:t}),{"boolean, boolean":(l,f)=>l>=f,"BigNumber, BigNumber":function(f,d){return f.gte(d)||qi(f,d,t.epsilon)},"Fraction, Fraction":(l,f)=>l.compare(f)!==-1,"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},u,h({SS:o,DS:s,Ss:c}))}),pM=Ae($a,["typed","config"],n=>{var{typed:e,config:t}=n;return e($a,{"number, number":function(i,a){return i>=a||or(i,a,t.epsilon)}})}),mM="ImmutableDenseMatrix",gM=["smaller","DenseMatrix"],vM=Ae(mM,gM,n=>{var{smaller:e,DenseMatrix:t}=n;function r(i,a){if(!(this instanceof r))throw new SyntaxError("Constructor must be called with the new operator");if(a&&!Tn(a))throw new Error("Invalid datatype: "+a);if(pt(i)||ut(i)){var s=new t(i,a);this._data=s._data,this._size=s._size,this._datatype=s._datatype,this._min=null,this._max=null}else if(i&&ut(i.data)&&ut(i.size))this._data=i.data,this._size=i.size,this._datatype=i.datatype,this._min=typeof i.min<"u"?i.min:null,this._max=typeof i.max<"u"?i.max:null;else{if(i)throw new TypeError("Unsupported type of data ("+Yn(i)+")");this._data=[],this._size=[0],this._datatype=a,this._min=null,this._max=null}}return r.prototype=new t,r.prototype.type="ImmutableDenseMatrix",r.prototype.isImmutableDenseMatrix=!0,r.prototype.subset=function(i){switch(arguments.length){case 1:{var a=t.prototype.subset.call(this,i);return pt(a)?new r({data:a._data,size:a._size,datatype:a._datatype}):a}case 2:case 3:throw new Error("Cannot invoke set subset on an Immutable Matrix instance");default:throw new SyntaxError("Wrong number of arguments")}},r.prototype.set=function(){throw new Error("Cannot invoke set on an Immutable Matrix instance")},r.prototype.resize=function(){throw new Error("Cannot invoke resize on an Immutable Matrix instance")},r.prototype.reshape=function(){throw new Error("Cannot invoke reshape on an Immutable Matrix instance")},r.prototype.clone=function(){return new r({data:nt(this._data),size:nt(this._size),datatype:this._datatype})},r.prototype.toJSON=function(){return{mathjs:"ImmutableDenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},r.fromJSON=function(i){return new r(i)},r.prototype.swapRows=function(){throw new Error("Cannot invoke swapRows on an Immutable Matrix instance")},r.prototype.min=function(){if(this._min===null){var i=null;this.forEach(function(a){(i===null||e(a,i))&&(i=a)}),this._min=i!==null?i:void 0}return this._min},r.prototype.max=function(){if(this._max===null){var i=null;this.forEach(function(a){(i===null||e(i,a))&&(i=a)}),this._max=i!==null?i:void 0}return this._max},r},{isClass:!0}),_M="Index",xM=["ImmutableDenseMatrix","getMatrixDataType"],EM=Ae(_M,xM,n=>{var{ImmutableDenseMatrix:e,getMatrixDataType:t}=n;function r(a){if(!(this instanceof r))throw new SyntaxError("Constructor must be called with the new operator");this._dimensions=[],this._sourceSize=[],this._isScalar=!0;for(var s=0,o=arguments.length;s<o;s++){var c=arguments[s],h=ut(c),u=pt(c),l=null;if(mf(c))this._dimensions.push(c),this._isScalar=!1;else if(h||u){var f=void 0;t(c)==="boolean"?(h&&(f=i(pc(c).valueOf())),u&&(f=i(pc(c._data).valueOf())),l=c.valueOf().length):f=i(c.valueOf()),this._dimensions.push(f);var d=f.size();(d.length!==1||d[0]!==1||l!==null)&&(this._isScalar=!1)}else if(typeof c=="number")this._dimensions.push(i([c]));else if(typeof c=="string")this._dimensions.push(c);else throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range");this._sourceSize.push(l)}}r.prototype.type="Index",r.prototype.isIndex=!0;function i(a){for(var s=0,o=a.length;s<o;s++)if(typeof a[s]!="number"||!ht(a[s]))throw new TypeError("Index parameters must be positive integer numbers");return new e(a)}return r.prototype.clone=function(){var a=new r;return a._dimensions=nt(this._dimensions),a._isScalar=this._isScalar,a._sourceSize=this._sourceSize,a},r.create=function(a){var s=new r;return r.apply(s,a),s},r.prototype.size=function(){for(var a=[],s=0,o=this._dimensions.length;s<o;s++){var c=this._dimensions[s];a[s]=typeof c=="string"?1:c.size()[0]}return a},r.prototype.max=function(){for(var a=[],s=0,o=this._dimensions.length;s<o;s++){var c=this._dimensions[s];a[s]=typeof c=="string"?c:c.max()}return a},r.prototype.min=function(){for(var a=[],s=0,o=this._dimensions.length;s<o;s++){var c=this._dimensions[s];a[s]=typeof c=="string"?c:c.min()}return a},r.prototype.forEach=function(a){for(var s=0,o=this._dimensions.length;s<o;s++)a(this._dimensions[s],s,this)},r.prototype.dimension=function(a){return this._dimensions[a]||null},r.prototype.isObjectProperty=function(){return this._dimensions.length===1&&typeof this._dimensions[0]=="string"},r.prototype.getObjectProperty=function(){return this.isObjectProperty()?this._dimensions[0]:null},r.prototype.isScalar=function(){return this._isScalar},r.prototype.toArray=function(){for(var a=[],s=0,o=this._dimensions.length;s<o;s++){var c=this._dimensions[s];a.push(typeof c=="string"?c:c.toArray())}return a},r.prototype.valueOf=r.prototype.toArray,r.prototype.toString=function(){for(var a=[],s=0,o=this._dimensions.length;s<o;s++){var c=this._dimensions[s];typeof c=="string"?a.push(JSON.stringify(c)):a.push(c.toString())}return"["+a.join(", ")+"]"},r.prototype.toJSON=function(){return{mathjs:"Index",dimensions:this._dimensions}},r.fromJSON=function(a){return r.create(a.dimensions)},r},{isClass:!0});function pc(n){var e=[];return n.forEach((t,r)=>{t&&e.push(r)}),e}var yM="atan",MM=["typed"],AM=Ae(yM,MM,n=>{var{typed:e}=n;return e("atan",{number:function(r){return Math.atan(r)},Complex:function(r){return r.atan()},BigNumber:function(r){return r.atan()}})}),rh=Ae("trigUnit",["typed"],n=>{var{typed:e}=n;return{Unit:e.referToSelf(t=>r=>{if(!r.hasBase(r.constructor.BASE_UNITS.ANGLE))throw new TypeError("Unit in function cot is no angle");return e.find(t,r.valueType())(r.value)})}}),mc="cos",SM=["typed"],wM=Ae(mc,SM,n=>{var{typed:e}=n,t=rh({typed:e});return e(mc,{number:Math.cos,"Complex | BigNumber":r=>r.cos()},t)}),gc="sin",DM=["typed"],bM=Ae(gc,DM,n=>{var{typed:e}=n,t=rh({typed:e});return e(gc,{number:Math.sin,"Complex | BigNumber":r=>r.sin()},t)}),vc="add",TM=["typed","matrix","addScalar","equalScalar","DenseMatrix","SparseMatrix","concat"],CM=Ae(vc,TM,n=>{var{typed:e,matrix:t,addScalar:r,equalScalar:i,DenseMatrix:a,SparseMatrix:s,concat:o}=n,c=Qf({typed:e}),h=UE({typed:e,equalScalar:i}),u=jf({typed:e,DenseMatrix:a}),l=Nr({typed:e,matrix:t,concat:o});return e(vc,{"any, any":r,"any, any, ...any":e.referToSelf(f=>(d,v,p)=>{for(var g=f(d,v),m=0;m<p.length;m++)g=f(g,p[m]);return g})},l({elop:r,DS:c,SS:h,Ss:u}))}),_c="norm",FM=["typed","abs","add","pow","conj","sqrt","multiply","equalScalar","larger","smaller","matrix","ctranspose","eigs"],RM=Ae(_c,FM,n=>{var{typed:e,abs:t,add:r,pow:i,conj:a,sqrt:s,multiply:o,equalScalar:c,larger:h,smaller:u,matrix:l,ctranspose:f,eigs:d}=n;return e(_c,{number:Math.abs,Complex:function(T){return T.abs()},BigNumber:function(T){return T.abs()},boolean:function(T){return Math.abs(T)},Array:function(T){return D(l(T),2)},Matrix:function(T){return D(T,2)},"Array, number | BigNumber | string":function(T,y){return D(l(T),y)},"Matrix, number | BigNumber | string":function(T,y){return D(T,y)}});function v(b){var T=0;return b.forEach(function(y){var x=t(y);h(x,T)&&(T=x)},!0),T}function p(b){var T;return b.forEach(function(y){var x=t(y);(!T||u(x,T))&&(T=x)},!0),T||0}function g(b,T){if(T===Number.POSITIVE_INFINITY||T==="inf")return v(b);if(T===Number.NEGATIVE_INFINITY||T==="-inf")return p(b);if(T==="fro")return D(b,2);if(typeof T=="number"&&!isNaN(T)){if(!c(T,0)){var y=0;return b.forEach(function(x){y=r(i(t(x),T),y)},!0),i(y,1/T)}return Number.POSITIVE_INFINITY}throw new Error("Unsupported parameter value")}function m(b){var T=0;return b.forEach(function(y,x){T=r(T,o(y,a(y)))}),t(s(T))}function w(b){var T=[],y=0;return b.forEach(function(x,P){var C=P[1],F=r(T[C]||0,t(x));h(F,y)&&(y=F),T[C]=F},!0),y}function _(b){var T=b.size();if(T[0]!==T[1])throw new RangeError("Invalid matrix dimensions");var y=f(b),x=o(y,b),P=d(x).values.toArray(),C=P[P.length-1];return t(s(C))}function S(b){var T=[],y=0;return b.forEach(function(x,P){var C=P[0],F=r(T[C]||0,t(x));h(F,y)&&(y=F),T[C]=F},!0),y}function E(b,T){if(T===1)return w(b);if(T===Number.POSITIVE_INFINITY||T==="inf")return S(b);if(T==="fro")return m(b);if(T===2)return _(b);throw new Error("Unsupported parameter value "+T)}function D(b,T){var y=b.size();if(y.length===1)return g(b,T);if(y.length===2){if(y[0]&&y[1])return E(b,T);throw new RangeError("Invalid matrix dimensions")}}}),xc="dot",NM=["typed","addScalar","multiplyScalar","conj","size"],LM=Ae(xc,NM,n=>{var{typed:e,addScalar:t,multiplyScalar:r,conj:i,size:a}=n;return e(xc,{"Array | DenseMatrix, Array | DenseMatrix":o,"SparseMatrix, SparseMatrix":c});function s(u,l){var f=h(u),d=h(l),v,p;if(f.length===1)v=f[0];else if(f.length===2&&f[1]===1)v=f[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+f.join(", ")+")");if(d.length===1)p=d[0];else if(d.length===2&&d[1]===1)p=d[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+d.join(", ")+")");if(v!==p)throw new RangeError("Vectors must have equal length ("+v+" != "+p+")");if(v===0)throw new RangeError("Cannot calculate the dot product of empty vectors");return v}function o(u,l){var f=s(u,l),d=pt(u)?u._data:u,v=pt(u)?u._datatype:void 0,p=pt(l)?l._data:l,g=pt(l)?l._datatype:void 0,m=h(u).length===2,w=h(l).length===2,_=t,S=r;if(v&&g&&v===g&&typeof v=="string"){var E=v;_=e.find(t,[E,E]),S=e.find(r,[E,E])}if(!m&&!w){for(var D=S(i(d[0]),p[0]),b=1;b<f;b++)D=_(D,S(i(d[b]),p[b]));return D}if(!m&&w){for(var T=S(i(d[0]),p[0][0]),y=1;y<f;y++)T=_(T,S(i(d[y]),p[y][0]));return T}if(m&&!w){for(var x=S(i(d[0][0]),p[0]),P=1;P<f;P++)x=_(x,S(i(d[P][0]),p[P]));return x}if(m&&w){for(var C=S(i(d[0][0]),p[0][0]),F=1;F<f;F++)C=_(C,S(i(d[F][0]),p[F][0]));return C}}function c(u,l){s(u,l);for(var f=u._index,d=u._values,v=l._index,p=l._values,g=0,m=t,w=r,_=0,S=0;_<f.length&&S<v.length;){var E=f[_],D=v[S];if(E<D){_++;continue}if(E>D){S++;continue}E===D&&(g=m(g,w(d[_],p[S])),_++,S++)}return g}function h(u){return pt(u)?u.size():a(u)}}),Ec="qr",PM=["typed","matrix","zeros","identity","isZero","equal","sign","sqrt","conj","unaryMinus","addScalar","divideScalar","multiplyScalar","subtract","complex"],IM=Ae(Ec,PM,n=>{var{typed:e,matrix:t,zeros:r,identity:i,isZero:a,equal:s,sign:o,sqrt:c,conj:h,unaryMinus:u,addScalar:l,divideScalar:f,multiplyScalar:d,subtract:v,complex:p}=n;return Ui(e(Ec,{DenseMatrix:function(S){return m(S)},SparseMatrix:function(S){return w()},Array:function(S){var E=t(S),D=m(E);return{Q:D.Q.valueOf(),R:D.R.valueOf()}}}),{_denseQRimpl:g});function g(_){var S=_._size[0],E=_._size[1],D=i([S],"dense"),b=D._data,T=_.clone(),y=T._data,x,P,C,F=r([S],"");for(C=0;C<Math.min(E,S);++C){var N=y[C][C],L=u(s(N,0)?1:o(N)),U=h(L),G=0;for(x=C;x<S;x++)G=l(G,d(y[x][C],h(y[x][C])));var H=d(L,c(G));if(!a(H)){var X=v(N,H);for(F[C]=1,x=C+1;x<S;x++)F[x]=f(y[x][C],X);var z=u(h(f(X,H))),O=void 0;for(P=C;P<E;P++){for(O=0,x=C;x<S;x++)O=l(O,d(h(F[x]),y[x][P]));for(O=d(O,z),x=C;x<S;x++)y[x][P]=d(v(y[x][P],d(F[x],O)),U)}for(x=0;x<S;x++){for(O=0,P=C;P<S;P++)O=l(O,d(b[x][P],F[P]));for(O=d(O,z),P=C;P<S;++P)b[x][P]=f(v(b[x][P],d(O,h(F[P]))),U)}}}return{Q:D,R:T,toString:function(){return"Q: "+this.Q.toString()+`
R: `+this.R.toString()}}}function m(_){var S=g(_),E=S.R._data;if(_._data.length>0)for(var D=E[0][0].type==="Complex"?p(0):0,b=0;b<E.length;++b)for(var T=0;T<b&&T<(E[0]||[]).length;++T)E[b][T]=D;return S}function w(_){throw new Error("qr not implemented for sparse matrices yet")}}),yc="det",UM=["typed","matrix","subtract","multiply","divideScalar","isZero","unaryMinus"],BM=Ae(yc,UM,n=>{var{typed:e,matrix:t,subtract:r,multiply:i,divideScalar:a,isZero:s,unaryMinus:o}=n;return e(yc,{any:function(u){return nt(u)},"Array | Matrix":function(u){var l;switch(pt(u)?l=u.size():Array.isArray(u)?(u=t(u),l=u.size()):l=[],l.length){case 0:return nt(u);case 1:if(l[0]===1)return nt(u.valueOf()[0]);if(l[0]===0)return 1;throw new RangeError("Matrix must be square (size: "+mt(l)+")");case 2:{var f=l[0],d=l[1];if(f===d)return c(u.clone().valueOf(),f);if(d===0)return 1;throw new RangeError("Matrix must be square (size: "+mt(l)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+mt(l)+")")}}});function c(h,u,l){if(u===1)return nt(h[0][0]);if(u===2)return r(i(h[0][0],h[1][1]),i(h[1][0],h[0][1]));for(var f=!1,d=new Array(u).fill(0).map((b,T)=>T),v=0;v<u;v++){var p=d[v];if(s(h[p][v])){var g=void 0;for(g=v+1;g<u;g++)if(!s(h[d[g]][v])){p=d[g],d[g]=d[v],d[v]=p,f=!f;break}if(g===u)return h[p][v]}for(var m=h[p][v],w=v===0?1:h[d[v-1]][v-1],_=v+1;_<u;_++)for(var S=d[_],E=v+1;E<u;E++)h[S][E]=a(r(i(h[S][E],m),i(h[S][v],h[p][E])),w)}var D=h[d[u-1]][u-1];return f?o(D):D}}),Mc="inv",OM=["typed","matrix","divideScalar","addScalar","multiply","unaryMinus","det","identity","abs"],zM=Ae(Mc,OM,n=>{var{typed:e,matrix:t,divideScalar:r,addScalar:i,multiply:a,unaryMinus:s,det:o,identity:c,abs:h}=n;return e(Mc,{"Array | Matrix":function(f){var d=pt(f)?f.size():dt(f);switch(d.length){case 1:if(d[0]===1)return pt(f)?t([r(1,f.valueOf()[0])]):[r(1,f[0])];throw new RangeError("Matrix must be square (size: "+mt(d)+")");case 2:{var v=d[0],p=d[1];if(v===p)return pt(f)?t(u(f.valueOf(),v,p),f.storage()):u(f,v,p);throw new RangeError("Matrix must be square (size: "+mt(d)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+mt(d)+")")}},any:function(f){return r(1,f)}});function u(l,f,d){var v,p,g,m,w;if(f===1){if(m=l[0][0],m===0)throw Error("Cannot calculate inverse, determinant is zero");return[[r(1,m)]]}else if(f===2){var _=o(l);if(_===0)throw Error("Cannot calculate inverse, determinant is zero");return[[r(l[1][1],_),r(s(l[0][1]),_)],[r(s(l[1][0]),_),r(l[0][0],_)]]}else{var S=l.concat();for(v=0;v<f;v++)S[v]=S[v].concat();for(var E=c(f).valueOf(),D=0;D<d;D++){var b=h(S[D][D]),T=D;for(v=D+1;v<f;)h(S[v][D])>b&&(b=h(S[v][D]),T=v),v++;if(b===0)throw Error("Cannot calculate inverse, determinant is zero");v=T,v!==D&&(w=S[D],S[D]=S[v],S[v]=w,w=E[D],E[D]=E[v],E[v]=w);var y=S[D],x=E[D];for(v=0;v<f;v++){var P=S[v],C=E[v];if(v!==D){if(P[D]!==0){for(g=r(s(P[D]),y[D]),p=D;p<d;p++)P[p]=i(P[p],a(g,y[p]));for(p=0;p<d;p++)C[p]=i(C[p],a(g,x[p]))}}else{for(g=y[D],p=D;p<d;p++)P[p]=r(P[p],g);for(p=0;p<d;p++)C[p]=r(C[p],g)}}}return E}}});function GM(n){var{addScalar:e,subtract:t,flatten:r,multiply:i,multiplyScalar:a,divideScalar:s,sqrt:o,abs:c,bignumber:h,diag:u,inv:l,qr:f,usolve:d,usolveAll:v,equal:p,complex:g,larger:m,smaller:w,matrixFromColumns:_,dot:S}=n;function E(z,O,W,K,Z){Z===void 0&&(Z=!0);var j=D(z,O,W,K,Z);b(z,O,W,K,Z,j);var{values:re,C:oe}=T(z,O,W,K,Z),le;return Z&&(le=y(z,O,oe,j,re,W,K),le=_(...le)),{values:re,vectors:le}}function D(z,O,W,K,Z){var j=K==="BigNumber",re=K==="Complex",oe=j?h(0):0,le=j?h(1):re?g(1):1,me=j?h(1):1,fe=j?h(10):2,pe=a(fe,fe),k;Z&&(k=Array(O).fill(le));for(var ye=!1;!ye;){ye=!0;for(var he=0;he<O;he++){for(var Me=oe,Ee=oe,Ie=0;Ie<O;Ie++)if(he!==Ie){var Te=c(z[he][Ie]);Me=e(Me,Te),Ee=e(Ee,Te)}if(!p(Me,0)&&!p(Ee,0)){for(var be=me,Pe=Me,je=s(Ee,fe),et=a(Ee,fe);w(Pe,je);)Pe=a(Pe,pe),be=a(be,fe);for(;m(Pe,et);)Pe=s(Pe,pe),be=s(be,fe);var A=w(s(e(Pe,Ee),be),a(e(Me,Ee),.95));if(A){ye=!1;for(var M=s(1,be),I=0;I<O;I++)he!==I&&(z[he][I]=a(z[he][I],be),z[I][he]=a(z[I][he],M));Z&&(k[he]=a(k[he],be))}}}}return u(k)}function b(z,O,W,K,Z,j){var re=K==="BigNumber",oe=K==="Complex",le=re?h(0):oe?g(0):0;re&&(W=h(W));for(var me=0;me<O-2;me++){for(var fe=0,pe=le,k=me+1;k<O;k++){var ye=z[k][me];w(c(pe),c(ye))&&(pe=ye,fe=k)}if(!w(c(pe),W)){if(fe!==me+1){var he=z[fe];z[fe]=z[me+1],z[me+1]=he;for(var Me=0;Me<O;Me++){var Ee=z[Me][fe];z[Me][fe]=z[Me][me+1],z[Me][me+1]=Ee}if(Z){var Ie=j[fe];j[fe]=j[me+1],j[me+1]=Ie}}for(var Te=me+2;Te<O;Te++){var be=s(z[Te][me],pe);if(be!==0){for(var Pe=0;Pe<O;Pe++)z[Te][Pe]=t(z[Te][Pe],a(be,z[me+1][Pe]));for(var je=0;je<O;je++)z[je][me+1]=e(z[je][me+1],a(be,z[je][Te]));if(Z)for(var et=0;et<O;et++)j[Te][et]=t(j[Te][et],a(be,j[me+1][et]))}}}}return j}function T(z,O,W,K,Z){var j=K==="BigNumber",re=K==="Complex",oe=j?h(1):re?g(1):1;j&&(W=h(W));for(var le=nt(z),me=[],fe=O,pe=[],k=Z?u(Array(O).fill(oe)):void 0,ye=Z?u(Array(fe).fill(oe)):void 0,he=0;he<=100;){he+=1;for(var Me=0,Ee=0;Ee<fe;Ee++)le[Ee][Ee]=t(le[Ee][Ee],Me);var{Q:Ie,R:Te}=f(le);le=i(Te,Ie);for(var be=0;be<fe;be++)le[be][be]=e(le[be][be],Me);if(Z&&(ye=i(ye,Ie)),fe===1||w(c(le[fe-1][fe-2]),W)){he=0,me.push(le[fe-1][fe-1]),Z&&(pe.unshift([[1]]),C(ye,O),k=i(k,ye),fe>1&&(ye=u(Array(fe-1).fill(oe)))),fe-=1,le.pop();for(var Pe=0;Pe<fe;Pe++)le[Pe].pop()}else if(fe===2||w(c(le[fe-2][fe-3]),W)){he=0;var je=x(le[fe-2][fe-2],le[fe-2][fe-1],le[fe-1][fe-2],le[fe-1][fe-1]);me.push(...je),Z&&(pe.unshift(P(le[fe-2][fe-2],le[fe-2][fe-1],le[fe-1][fe-2],le[fe-1][fe-1],je[0],je[1],W,K)),C(ye,O),k=i(k,ye),fe>2&&(ye=u(Array(fe-2).fill(oe)))),fe-=2,le.pop(),le.pop();for(var et=0;et<fe;et++)le[et].pop(),le[et].pop()}if(fe===0)break}if(me.sort((I,q)=>+t(c(I),c(q))),he>100){var A=Error("The eigenvalues failed to converge. Only found these eigenvalues: "+me.join(", "));throw A.values=me,A.vectors=[],A}var M=Z?i(k,F(pe,O)):void 0;return{values:me,C:M}}function y(z,O,W,K,Z,j,re){var oe=l(W),le=i(oe,z,W),me=re==="BigNumber",fe=re==="Complex",pe=me?h(0):fe?g(0):0,k=me?h(1):fe?g(1):1,ye=[],he=[];for(var Me of Z){var Ee=N(ye,Me,p);Ee===-1?(ye.push(Me),he.push(1)):he[Ee]+=1}for(var Ie=[],Te=ye.length,be=Array(O).fill(pe),Pe=u(Array(O).fill(k)),je=[],et=function(){var q=ye[A],Q=t(le,i(q,Pe)),R=v(Q,be);for(R.shift();R.length<he[A];){var J=L(Q,O,R,j,re);if(J==null){je.push(q);break}R.push(J)}var Y=i(l(K),W);R=R.map(V=>i(Y,V)),Ie.push(...R.map(V=>r(V)))},A=0;A<Te;A++)et();if(je.length!==0){var M=new Error("Failed to find eigenvectors for the following eigenvalues: "+je.join(", "));throw M.values=Z,M.vectors=Ie,M}return Ie}function x(z,O,W,K){var Z=e(z,K),j=t(a(z,K),a(O,W)),re=a(Z,.5),oe=a(o(t(a(Z,Z),a(4,j))),.5);return[e(re,oe),t(re,oe)]}function P(z,O,W,K,Z,j,re,oe){var le=oe==="BigNumber",me=oe==="Complex",fe=le?h(0):me?g(0):0,pe=le?h(1):me?g(1):1;if(w(c(W),re))return[[pe,fe],[fe,pe]];if(m(c(t(Z,j)),re))return[[t(Z,K),t(j,K)],[W,W]];var k=t(z,Z),ye=t(O,Z),he=t(W,Z),Me=t(K,Z);return w(c(ye),re)?[[k,pe],[he,fe]]:[[ye,fe],[Me,pe]]}function C(z,O){for(var W=0;W<z.length;W++)z[W].push(...Array(O-z[W].length).fill(0));for(var K=z.length;K<O;K++)z.push(Array(O).fill(0)),z[K][K]=1;return z}function F(z,O){for(var W=[],K=0;K<O;K++)W[K]=Array(O).fill(0);var Z=0;for(var j of z){for(var re=j.length,oe=0;oe<re;oe++)for(var le=0;le<re;le++)W[Z+oe][Z+le]=j[oe][le];Z+=re}return W}function N(z,O,W){for(var K=0;K<z.length;K++)if(W(z[K],O))return K;return-1}function L(z,O,W,K,Z){for(var j=Z==="BigNumber"?h(1e3):1e3,re,oe=0;re=U(O,W,Z),re=d(z,re),!m(H(re),j);)if(++oe>=5)return null;for(oe=0;;){var le=d(z,re);if(w(H(G(re,[le])),K))break;if(++oe>=10)return null;re=X(le)}return re}function U(z,O,W){var K=W==="BigNumber",Z=W==="Complex",j=Array(z).fill(0).map(re=>2*Math.random()-1);return K&&(j=j.map(re=>h(re))),Z&&(j=j.map(re=>g(re))),j=G(j,O),X(j,W)}function G(z,O){for(var W of O)z=t(z,i(s(S(W,z),S(W,W)),W));return z}function H(z){return c(o(S(z,z)))}function X(z,O){var W=O==="BigNumber",K=O==="Complex",Z=W?h(1):K?g(1):1;return i(s(Z,H(z)),z)}return E}function HM(n){var{config:e,addScalar:t,subtract:r,abs:i,atan:a,cos:s,sin:o,multiplyScalar:c,inv:h,bignumber:u,multiply:l,add:f}=n;function d(x,P){var C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e.epsilon,F=arguments.length>3?arguments[3]:void 0;if(F==="number")return v(x,C);if(F==="BigNumber")return p(x,C);throw TypeError("Unsupported data type: "+F)}function v(x,P){for(var C=x.length,F=Math.abs(P/C),N,L=new Array(C),U=0;U<C;U++)L[U]=y(C,0),L[U][U]=1;for(var G=D(x);Math.abs(G[1])>=Math.abs(F);){var H=G[0][0],X=G[0][1];N=g(x[H][H],x[X][X],x[H][X]),x=E(x,N,H,X),L=w(L,N,H,X),G=D(x)}for(var z=y(C,0),O=0;O<C;O++)z[O]=x[O][O];return T(nt(z),nt(L))}function p(x,P){for(var C=x.length,F=i(P/C),N,L=new Array(C),U=0;U<C;U++)L[U]=y(C,0),L[U][U]=1;for(var G=b(x);i(G[1])>=i(F);){var H=G[0][0],X=G[0][1];N=m(x[H][H],x[X][X],x[H][X]),x=S(x,N,H,X),L=_(L,N,H,X),G=b(x)}for(var z=y(C,0),O=0;O<C;O++)z[O]=x[O][O];return T(nt(z),nt(L))}function g(x,P,C){var F=P-x;return Math.abs(F)<=e.epsilon?Math.PI/4:.5*Math.atan(2*C/(P-x))}function m(x,P,C){var F=r(P,x);return i(F)<=e.epsilon?u(-1).acos().div(4):c(.5,a(l(2,C,h(F))))}function w(x,P,C,F){for(var N=x.length,L=Math.cos(P),U=Math.sin(P),G=y(N,0),H=y(N,0),X=0;X<N;X++)G[X]=L*x[X][C]-U*x[X][F],H[X]=U*x[X][C]+L*x[X][F];for(var z=0;z<N;z++)x[z][C]=G[z],x[z][F]=H[z];return x}function _(x,P,C,F){for(var N=x.length,L=s(P),U=o(P),G=y(N,u(0)),H=y(N,u(0)),X=0;X<N;X++)G[X]=r(c(L,x[X][C]),c(U,x[X][F])),H[X]=t(c(U,x[X][C]),c(L,x[X][F]));for(var z=0;z<N;z++)x[z][C]=G[z],x[z][F]=H[z];return x}function S(x,P,C,F){for(var N=x.length,L=u(s(P)),U=u(o(P)),G=c(L,L),H=c(U,U),X=y(N,u(0)),z=y(N,u(0)),O=l(u(2),L,U,x[C][F]),W=t(r(c(G,x[C][C]),O),c(H,x[F][F])),K=f(c(H,x[C][C]),O,c(G,x[F][F])),Z=0;Z<N;Z++)X[Z]=r(c(L,x[C][Z]),c(U,x[F][Z])),z[Z]=t(c(U,x[C][Z]),c(L,x[F][Z]));x[C][C]=W,x[F][F]=K,x[C][F]=u(0),x[F][C]=u(0);for(var j=0;j<N;j++)j!==C&&j!==F&&(x[C][j]=X[j],x[j][C]=X[j],x[F][j]=z[j],x[j][F]=z[j]);return x}function E(x,P,C,F){for(var N=x.length,L=Math.cos(P),U=Math.sin(P),G=L*L,H=U*U,X=y(N,0),z=y(N,0),O=G*x[C][C]-2*L*U*x[C][F]+H*x[F][F],W=H*x[C][C]+2*L*U*x[C][F]+G*x[F][F],K=0;K<N;K++)X[K]=L*x[C][K]-U*x[F][K],z[K]=U*x[C][K]+L*x[F][K];x[C][C]=O,x[F][F]=W,x[C][F]=0,x[F][C]=0;for(var Z=0;Z<N;Z++)Z!==C&&Z!==F&&(x[C][Z]=X[Z],x[Z][C]=X[Z],x[F][Z]=z[Z],x[Z][F]=z[Z]);return x}function D(x){for(var P=x.length,C=0,F=[0,1],N=0;N<P;N++)for(var L=N+1;L<P;L++)Math.abs(C)<Math.abs(x[N][L])&&(C=Math.abs(x[N][L]),F=[N,L]);return[F,C]}function b(x){for(var P=x.length,C=0,F=[0,1],N=0;N<P;N++)for(var L=N+1;L<P;L++)i(C)<i(x[N][L])&&(C=i(x[N][L]),F=[N,L]);return[F,C]}function T(x,P){for(var C=x.length,F=Array(C),N=Array(C),L=0;L<C;L++)N[L]=Array(C);for(var U=0;U<C;U++){for(var G=0,H=x[0],X=0;X<x.length;X++)i(x[X])<i(H)&&(G=X,H=x[G]);F[U]=x.splice(G,1)[0];for(var z=0;z<C;z++)N[z][U]=P[z][G],P[z].splice(G,1)}return{values:F,vectors:N}}function y(x,P){for(var C=new Array(x),F=0;F<x;F++)C[F]=P;return C}return d}var VM="eigs",WM=["config","typed","matrix","addScalar","equal","subtract","abs","atan","cos","sin","multiplyScalar","divideScalar","inv","bignumber","multiply","add","larger","column","flatten","number","complex","sqrt","diag","qr","usolve","usolveAll","im","re","smaller","matrixFromColumns","dot"],kM=Ae(VM,WM,n=>{var{config:e,typed:t,matrix:r,addScalar:i,subtract:a,equal:s,abs:o,atan:c,cos:h,sin:u,multiplyScalar:l,divideScalar:f,inv:d,bignumber:v,multiply:p,add:g,larger:m,column:w,flatten:_,number:S,complex:E,sqrt:D,diag:b,qr:T,usolve:y,usolveAll:x,im:P,re:C,smaller:F,matrixFromColumns:N,dot:L}=n,U=HM({config:e,addScalar:i,subtract:a,column:w,flatten:_,equal:s,abs:o,atan:c,cos:h,sin:u,multiplyScalar:l,inv:d,bignumber:v,complex:E,multiply:p,add:g}),G=GM({config:e,addScalar:i,subtract:a,multiply:p,multiplyScalar:l,flatten:_,divideScalar:f,sqrt:D,abs:o,bignumber:v,diag:b,qr:T,inv:d,usolve:y,usolveAll:x,equal:s,complex:E,larger:m,smaller:F,matrixFromColumns:N,dot:L});return t("eigs",{Array:function(Z){var j=r(Z);return H(j)},"Array, number|BigNumber":function(Z,j){var re=r(Z);return H(re,j)},Matrix:function(Z){var{values:j,vectors:re}=H(Z);return{values:r(j),vectors:r(re)}},"Matrix, number|BigNumber":function(Z,j){var{values:re,vectors:oe}=H(Z,j);return{values:r(re),vectors:r(oe)}}});function H(K,Z){Z===void 0&&(Z=e.epsilon);var j=K.size();if(j.length!==2||j[0]!==j[1])throw new RangeError("Matrix must be square (size: "+mt(j)+")");var re=K.toArray(),oe=j[0];if(z(re,oe,Z)&&(O(re,oe),X(re,oe,Z))){var le=W(K,re,oe);return U(re,oe,Z,le)}var me=W(K,re,oe);return G(re,oe,Z,me)}function X(K,Z,j){for(var re=0;re<Z;re++)for(var oe=re;oe<Z;oe++)if(m(v(o(a(K[re][oe],K[oe][re]))),j))return!1;return!0}function z(K,Z,j){for(var re=0;re<Z;re++)for(var oe=0;oe<Z;oe++)if(m(v(o(P(K[re][oe]))),j))return!1;return!0}function O(K,Z){for(var j=0;j<Z;j++)for(var re=0;re<Z;re++)K[j][re]=C(K[j][re])}function W(K,Z,j){var re=K.datatype();if(re==="number"||re==="BigNumber"||re==="Complex")return re;for(var oe=!1,le=!1,me=!1,fe=0;fe<j;fe++)for(var pe=0;pe<j;pe++){var k=Z[fe][pe];if(gt(k)||Io(k))oe=!0;else if(bt(k))le=!0;else if(Po(k))me=!0;else throw TypeError("Unsupported type in Matrix: "+Yn(k))}if(le&&me&&console.warn("Complex BigNumbers not supported, this operation will lose precission."),me){for(var ye=0;ye<j;ye++)for(var he=0;he<j;he++)Z[ye][he]=E(Z[ye][he]);return"Complex"}if(le){for(var Me=0;Me<j;Me++)for(var Ee=0;Ee<j;Ee++)Z[Me][Ee]=v(Z[Me][Ee]);return"BigNumber"}if(oe){for(var Ie=0;Ie<j;Ie++)for(var Te=0;Te<j;Te++)Z[Ie][Te]=S(Z[Ie][Te]);return"number"}else throw TypeError("Matrix contains unsupported types only.")}}),Ki=Ax({config:tn}),as=Tx({}),Vo=Ux({}),Wo=zx({}),rn=Vx({Matrix:Wo}),Ue=D_({BigNumber:Ki,Complex:as,DenseMatrix:rn,Fraction:Vo}),ko=ME({typed:Ue}),Lr=SE({typed:Ue}),XM=AM({typed:Ue}),Xo=uE({BigNumber:Ki,typed:Ue}),$o=fE({Complex:as,typed:Ue}),ss=dy({typed:Ue}),fr=Jx({config:tn,typed:Ue}),$M=Cy({typed:Ue}),qM=my({typed:Ue}),YM=kx({typed:Ue}),ZM=$x({typed:Ue}),ih=Yx({typed:Ue}),Ai=ey({typed:Ue}),qo=aE({typed:Ue}),KM=vy({typed:Ue}),JM=iy({BigNumber:Ki,Fraction:Vo,complex:$o,typed:Ue}),QM=bM({typed:Ue}),os=eE({Matrix:Wo,equalScalar:fr,typed:Ue}),jM=wM({typed:Ue}),Yo=oy({Complex:as,config:tn,typed:Ue}),us=EE({typed:Ue}),ah=pE({Fraction:Vo,typed:Ue}),ct=gE({DenseMatrix:rn,Matrix:Wo,SparseMatrix:os,typed:Ue}),e1=Xy({bignumber:Xo,fraction:ah,number:qo}),sh=Uy({matrix:ct,config:tn,typed:Ue}),Dr=Oy({matrix:ct,typed:Ue}),t1=Vy({BigNumber:Ki,config:tn,matrix:ct,typed:Ue}),Pr=xy({isInteger:YM,matrix:ct,typed:Ue}),n1=Gy({conj:ss,transpose:Dr,typed:Ue}),r1=wy({DenseMatrix:rn,SparseMatrix:os,matrix:ct,typed:Ue}),Si=qy({numeric:e1,typed:Ue}),oh=tM({DenseMatrix:rn,concat:Pr,equalScalar:fr,matrix:ct,typed:Ue}),Ze=by({matrix:ct,typed:Ue}),Zo=Ry({BigNumber:Ki,DenseMatrix:rn,SparseMatrix:os,config:tn,matrix:ct,typed:Ue}),i1=dM({DenseMatrix:rn,concat:Pr,config:tn,matrix:ct,typed:Ue}),a1=_E({flatten:Ze,matrix:ct,size:sh,typed:Ue}),ls=iM({DenseMatrix:rn,concat:Pr,config:tn,matrix:ct,typed:Ue}),Wt=ly({DenseMatrix:rn,addScalar:Lr,concat:Pr,equalScalar:fr,matrix:ct,typed:Ue,unaryMinus:us}),s1=Jy({DenseMatrix:rn,divideScalar:Si,equalScalar:fr,matrix:ct,multiplyScalar:Ai,subtract:Wt,typed:Ue}),cs=CM({DenseMatrix:rn,SparseMatrix:os,addScalar:Lr,concat:Pr,equalScalar:fr,matrix:ct,typed:Ue}),fs=LM({addScalar:Lr,conj:ss,multiplyScalar:Ai,size:sh,typed:Ue}),o1=vM({DenseMatrix:rn,smaller:ls}),u1=EM({ImmutableDenseMatrix:o1,getMatrixDataType:$M}),Ko=cM({DenseMatrix:rn,concat:Pr,config:tn,matrix:ct,typed:Ue}),Jt=ny({addScalar:Lr,dot:fs,equalScalar:fr,matrix:ct,multiplyScalar:Ai,typed:Ue}),l1=IM({addScalar:Lr,complex:$o,conj:ss,divideScalar:Si,equal:oh,identity:Zo,isZero:ih,matrix:ct,multiplyScalar:Ai,sign:JM,sqrt:Yo,subtract:Wt,typed:Ue,unaryMinus:us,zeros:t1}),c1=jy({DenseMatrix:rn,divideScalar:Si,equalScalar:fr,matrix:ct,multiplyScalar:Ai,subtract:Wt,typed:Ue}),Gi=Ay({matrix:ct,multiply:Jt,subtract:Wt,typed:Ue}),f1=BM({divideScalar:Si,isZero:ih,matrix:ct,multiply:Jt,subtract:Wt,typed:Ue,unaryMinus:us}),h1=oM({DenseMatrix:rn,concat:Pr,config:tn,matrix:ct,typed:Ue}),d1=Py({bignumber:Xo,matrix:ct,add:cs,config:tn,isPositive:ZM,larger:Ko,largerEq:i1,smaller:ls,smallerEq:h1,typed:Ue}),at=yy({Index:u1,matrix:ct,range:d1,typed:Ue}),qa=zM({abs:ko,addScalar:Lr,det:f1,divideScalar:Si,identity:Zo,matrix:ct,multiply:Jt,typed:Ue,unaryMinus:us}),p1=Zy({Complex:as,config:tn,fraction:ah,identity:Zo,inv:qa,matrix:ct,multiply:Jt,number:qo,typed:Ue}),m1=kM({abs:ko,add:cs,addScalar:Lr,atan:XM,bignumber:Xo,column:at,complex:$o,config:tn,cos:jM,diag:r1,divideScalar:Si,dot:fs,equal:oh,flatten:Ze,im:qM,inv:qa,larger:Ko,matrix:ct,matrixFromColumns:a1,multiply:Jt,multiplyScalar:Ai,number:qo,qr:l1,re:KM,sin:QM,smaller:ls,sqrt:Yo,subtract:Wt,typed:Ue,usolve:s1,usolveAll:c1}),Na=RM({abs:ko,add:cs,conj:ss,ctranspose:n1,eigs:m1,equalScalar:fr,larger:Ko,matrix:ct,multiply:Jt,pow:p1,smaller:ls,sqrt:Yo,typed:Ue});class g1{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},r={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let i='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const a=document.createElement("div");return a.id="webglmessage",a.style.fontFamily="monospace",a.style.fontSize="13px",a.style.fontWeight="normal",a.style.textAlign="center",a.style.background="#fff",a.style.color="#000",a.style.padding="1.5em",a.style.width="400px",a.style.margin="5em auto 0",r[e]?i=i.replace("$0","graphics card"):i=i.replace("$0","browser"),i=i.replace("$1",t[e]),a.innerHTML=i,a}}const Ac=g1;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Pn{constructor(e,t,r,i,a="div"){this.parent=e,this.object=t,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Pn.nextNameID=Pn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Pn.nextNameID,this.$widget=document.createElement(a),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class v1 extends Pn{constructor(e,t,r){super(e,t,r,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function yo(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const _1={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:yo,toHexString:yo},Hi={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},x1={isPrimitive:!1,match:Array.isArray,fromHexString(n,e,t=1){const r=Hi.fromHexString(n);e[0]=(r>>16&255)/255*t,e[1]=(r>>8&255)/255*t,e[2]=(255&r)/255*t},toHexString:([n,e,t],r=1)=>Hi.toHexString(n*(r=255/r)<<16^e*r<<8^t*r<<0)},E1={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const r=Hi.fromHexString(n);e.r=(r>>16&255)/255*t,e.g=(r>>8&255)/255*t,e.b=(255&r)/255*t},toHexString:({r:n,g:e,b:t},r=1)=>Hi.toHexString(n*(r=255/r)<<16^e*r<<8^t*r<<0)},y1=[_1,Hi,x1,E1];class M1 extends Pn{constructor(e,t,r,i){var a;super(e,t,r,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(a=this.initialValue,y1.find(s=>s.match(a))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=yo(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class js extends Pn{constructor(e,t,r){super(e,t,r,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class A1 extends Pn{constructor(e,t,r,i,a,s){super(e,t,r,"number"),this._initInput(),this.min(i),this.max(a);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=u=>{const l=parseFloat(this.$input.value);isNaN(l)||(this._snapClampSetValue(l+u),this.$input.value=this.getValue())};let t,r,i,a,s,o=!1;const c=u=>{if(o){const l=u.clientX-t,f=u.clientY-r;Math.abs(f)>5?(u.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(l)>5&&h()}if(!o){const l=u.clientY-i;s-=l*this._step*this._arrowKeyMultiplier(u),a+s>this._max?s=this._max-a:a+s<this._min&&(s=this._min-a),this._snapClampSetValue(a+s)}i=u.clientY},h=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",h)};this.$input.addEventListener("input",()=>{let u=parseFloat(this.$input.value);isNaN(u)||(this._stepExplicit&&(u=this._snap(u)),this.setValue(this._clamp(u)))}),this.$input.addEventListener("keydown",u=>{u.code==="Enter"&&this.$input.blur(),u.code==="ArrowUp"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u))),u.code==="ArrowDown"&&(u.preventDefault(),e(this._step*this._arrowKeyMultiplier(u)*-1))}),this.$input.addEventListener("wheel",u=>{this._inputFocused&&(u.preventDefault(),e(this._step*this._normalizeMouseWheel(u)))},{passive:!1}),this.$input.addEventListener("mousedown",u=>{t=u.clientX,r=i=u.clientY,o=!0,a=this.getValue(),s=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",h)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=f=>{const d=this.$slider.getBoundingClientRect();let v=(p=f,g=d.left,m=d.right,w=this._min,_=this._max,(p-g)/(m-g)*(_-w)+w);var p,g,m,w,_;this._snapClampSetValue(v)},t=f=>{e(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",r)};let i,a,s=!1;const o=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),s=!1},c=f=>{if(s){const d=f.touches[0].clientX-i,v=f.touches[0].clientY-a;Math.abs(d)>Math.abs(v)?o(f):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",h))}else f.preventDefault(),e(f.touches[0].clientX)},h=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",h)},u=this._callOnFinishChange.bind(this);let l;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",r)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(i=f.touches[0].clientX,a=f.touches[0].clientY,s=!0):o(f),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",h))},{passive:!1}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const d=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+d),this.$input.value=this.getValue(),clearTimeout(l),l=setTimeout(u,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:r}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,r=-e.wheelDelta/120,r*=this._stepExplicit?1:10),t+-r}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class S1 extends Pn{constructor(e,t,r,i){super(e,t,r,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(a=>{const s=document.createElement("option");s.innerHTML=a,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class w1 extends Pn{constructor(e,t,r){super(e,t,r,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Sc=!1;class Jo{constructor({parent:e,autoPlace:t=e===void 0,container:r,width:i,title:a="Controls",injectStyles:s=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Sc&&s&&(function(c){const h=document.createElement("style");h.innerHTML=c;const u=document.querySelector("head link[rel=stylesheet], head style");u?document.head.insertBefore(h,u):document.head.appendChild(h)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Sc=!0),r?r.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,r,i,a){if(Object(r)===r)return new S1(this,e,t,r);const s=e[t];switch(typeof s){case"number":return new A1(this,e,t,r,i,a);case"boolean":return new v1(this,e,t);case"string":return new w1(this,e,t);case"function":return new js(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,r=1){return new M1(this,e,t,r)}addFolder(e){return new Jo({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(r=>{r instanceof js||r._name in e.controllers&&r.load(e.controllers[r._name])}),t&&e.folders&&this.folders.forEach(r=>{r._title in e.folders&&r.load(e.folders[r._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(r=>{if(!(r instanceof js)){if(r._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${r._name}"`);t.controllers[r._name]=r.save()}}),e&&this.folders.forEach(r=>{if(r._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${r._title}"`);t.folders[r._title]=r.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const r=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",r))};this.$children.addEventListener("transitionend",r);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const wc={type:"change"},eo={type:"start"},Dc={type:"end"};class D1 extends Fr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zr.ROTATE,MIDDLE:zr.DOLLY,RIGHT:zr.PAN},this.touches={ONE:Gr.ROTATE,TWO:Gr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Pe),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Pe),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(wc),r.update(),a=i.NONE},this.update=function(){const R=new ee,J=new Tr().setFromUnitVectors(e.up,new ee(0,1,0)),Y=J.clone().invert(),V=new ee,ce=new Tr,ve=new ee,ae=2*Math.PI;return function(){const Se=r.object.position;R.copy(Se).sub(r.target),R.applyQuaternion(J),o.setFromVector3(R),r.autoRotate&&a===i.NONE&&y(b()),r.enableDamping?(o.theta+=c.theta*r.dampingFactor,o.phi+=c.phi*r.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Fe=r.minAzimuthAngle,Ne=r.maxAzimuthAngle;return isFinite(Fe)&&isFinite(Ne)&&(Fe<-Math.PI?Fe+=ae:Fe>Math.PI&&(Fe-=ae),Ne<-Math.PI?Ne+=ae:Ne>Math.PI&&(Ne-=ae),Fe<=Ne?o.theta=Math.max(Fe,Math.min(Ne,o.theta)):o.theta=o.theta>(Fe+Ne)/2?Math.max(Fe,o.theta):Math.min(Ne,o.theta)),o.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=h,o.radius=Math.max(r.minDistance,Math.min(r.maxDistance,o.radius)),r.enableDamping===!0?r.target.addScaledVector(u,r.dampingFactor):r.target.add(u),R.setFromSpherical(o),R.applyQuaternion(Y),Se.copy(r.target).add(R),r.object.lookAt(r.target),r.enableDamping===!0?(c.theta*=1-r.dampingFactor,c.phi*=1-r.dampingFactor,u.multiplyScalar(1-r.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),h=1,l||V.distanceToSquared(r.object.position)>s||8*(1-ce.dot(r.object.quaternion))>s||ve.distanceToSquared(r.target)>0?(r.dispatchEvent(wc),V.copy(r.object.position),ce.copy(r.object.quaternion),ve.copy(r.target),l=!1,!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",A),r.domElement.removeEventListener("pointerdown",he),r.domElement.removeEventListener("pointercancel",Ee),r.domElement.removeEventListener("wheel",be),r.domElement.removeEventListener("pointermove",Me),r.domElement.removeEventListener("pointerup",Ee),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Pe),r._domElementKeyEvents=null)};const r=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const s=1e-6,o=new Sl,c=new Sl;let h=1;const u=new ee;let l=!1;const f=new Je,d=new Je,v=new Je,p=new Je,g=new Je,m=new Je,w=new Je,_=new Je,S=new Je,E=[],D={};function b(){return 2*Math.PI/60/60*r.autoRotateSpeed}function T(){return Math.pow(.95,r.zoomSpeed)}function y(R){c.theta-=R}function x(R){c.phi-=R}const P=function(){const R=new ee;return function(Y,V){R.setFromMatrixColumn(V,0),R.multiplyScalar(-Y),u.add(R)}}(),C=function(){const R=new ee;return function(Y,V){r.screenSpacePanning===!0?R.setFromMatrixColumn(V,1):(R.setFromMatrixColumn(V,0),R.crossVectors(r.object.up,R)),R.multiplyScalar(Y),u.add(R)}}(),F=function(){const R=new ee;return function(Y,V){const ce=r.domElement;if(r.object.isPerspectiveCamera){const ve=r.object.position;R.copy(ve).sub(r.target);let ae=R.length();ae*=Math.tan(r.object.fov/2*Math.PI/180),P(2*Y*ae/ce.clientHeight,r.object.matrix),C(2*V*ae/ce.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(P(Y*(r.object.right-r.object.left)/r.object.zoom/ce.clientWidth,r.object.matrix),C(V*(r.object.top-r.object.bottom)/r.object.zoom/ce.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function N(R){r.object.isPerspectiveCamera?h/=R:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom*R)),r.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function L(R){r.object.isPerspectiveCamera?h*=R:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/R)),r.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function U(R){f.set(R.clientX,R.clientY)}function G(R){w.set(R.clientX,R.clientY)}function H(R){p.set(R.clientX,R.clientY)}function X(R){d.set(R.clientX,R.clientY),v.subVectors(d,f).multiplyScalar(r.rotateSpeed);const J=r.domElement;y(2*Math.PI*v.x/J.clientHeight),x(2*Math.PI*v.y/J.clientHeight),f.copy(d),r.update()}function z(R){_.set(R.clientX,R.clientY),S.subVectors(_,w),S.y>0?N(T()):S.y<0&&L(T()),w.copy(_),r.update()}function O(R){g.set(R.clientX,R.clientY),m.subVectors(g,p).multiplyScalar(r.panSpeed),F(m.x,m.y),p.copy(g),r.update()}function W(R){R.deltaY<0?L(T()):R.deltaY>0&&N(T()),r.update()}function K(R){let J=!1;switch(R.code){case r.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?x(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(0,r.keyPanSpeed),J=!0;break;case r.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?x(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(0,-r.keyPanSpeed),J=!0;break;case r.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?y(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(r.keyPanSpeed,0),J=!0;break;case r.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?y(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):F(-r.keyPanSpeed,0),J=!0;break}J&&(R.preventDefault(),r.update())}function Z(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const R=.5*(E[0].pageX+E[1].pageX),J=.5*(E[0].pageY+E[1].pageY);f.set(R,J)}}function j(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const R=.5*(E[0].pageX+E[1].pageX),J=.5*(E[0].pageY+E[1].pageY);p.set(R,J)}}function re(){const R=E[0].pageX-E[1].pageX,J=E[0].pageY-E[1].pageY,Y=Math.sqrt(R*R+J*J);w.set(0,Y)}function oe(){r.enableZoom&&re(),r.enablePan&&j()}function le(){r.enableZoom&&re(),r.enableRotate&&Z()}function me(R){if(E.length==1)d.set(R.pageX,R.pageY);else{const Y=Q(R),V=.5*(R.pageX+Y.x),ce=.5*(R.pageY+Y.y);d.set(V,ce)}v.subVectors(d,f).multiplyScalar(r.rotateSpeed);const J=r.domElement;y(2*Math.PI*v.x/J.clientHeight),x(2*Math.PI*v.y/J.clientHeight),f.copy(d)}function fe(R){if(E.length===1)g.set(R.pageX,R.pageY);else{const J=Q(R),Y=.5*(R.pageX+J.x),V=.5*(R.pageY+J.y);g.set(Y,V)}m.subVectors(g,p).multiplyScalar(r.panSpeed),F(m.x,m.y),p.copy(g)}function pe(R){const J=Q(R),Y=R.pageX-J.x,V=R.pageY-J.y,ce=Math.sqrt(Y*Y+V*V);_.set(0,ce),S.set(0,Math.pow(_.y/w.y,r.zoomSpeed)),N(S.y),w.copy(_)}function k(R){r.enableZoom&&pe(R),r.enablePan&&fe(R)}function ye(R){r.enableZoom&&pe(R),r.enableRotate&&me(R)}function he(R){r.enabled!==!1&&(E.length===0&&(r.domElement.setPointerCapture(R.pointerId),r.domElement.addEventListener("pointermove",Me),r.domElement.addEventListener("pointerup",Ee)),M(R),R.pointerType==="touch"?je(R):Ie(R))}function Me(R){r.enabled!==!1&&(R.pointerType==="touch"?et(R):Te(R))}function Ee(R){I(R),E.length===0&&(r.domElement.releasePointerCapture(R.pointerId),r.domElement.removeEventListener("pointermove",Me),r.domElement.removeEventListener("pointerup",Ee)),r.dispatchEvent(Dc),a=i.NONE}function Ie(R){let J;switch(R.button){case 0:J=r.mouseButtons.LEFT;break;case 1:J=r.mouseButtons.MIDDLE;break;case 2:J=r.mouseButtons.RIGHT;break;default:J=-1}switch(J){case zr.DOLLY:if(r.enableZoom===!1)return;G(R),a=i.DOLLY;break;case zr.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(r.enablePan===!1)return;H(R),a=i.PAN}else{if(r.enableRotate===!1)return;U(R),a=i.ROTATE}break;case zr.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(r.enableRotate===!1)return;U(R),a=i.ROTATE}else{if(r.enablePan===!1)return;H(R),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&r.dispatchEvent(eo)}function Te(R){switch(a){case i.ROTATE:if(r.enableRotate===!1)return;X(R);break;case i.DOLLY:if(r.enableZoom===!1)return;z(R);break;case i.PAN:if(r.enablePan===!1)return;O(R);break}}function be(R){r.enabled===!1||r.enableZoom===!1||a!==i.NONE||(R.preventDefault(),r.dispatchEvent(eo),W(R),r.dispatchEvent(Dc))}function Pe(R){r.enabled===!1||r.enablePan===!1||K(R)}function je(R){switch(q(R),E.length){case 1:switch(r.touches.ONE){case Gr.ROTATE:if(r.enableRotate===!1)return;Z(),a=i.TOUCH_ROTATE;break;case Gr.PAN:if(r.enablePan===!1)return;j(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(r.touches.TWO){case Gr.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;oe(),a=i.TOUCH_DOLLY_PAN;break;case Gr.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;le(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&r.dispatchEvent(eo)}function et(R){switch(q(R),a){case i.TOUCH_ROTATE:if(r.enableRotate===!1)return;me(R),r.update();break;case i.TOUCH_PAN:if(r.enablePan===!1)return;fe(R),r.update();break;case i.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;k(R),r.update();break;case i.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;ye(R),r.update();break;default:a=i.NONE}}function A(R){r.enabled!==!1&&R.preventDefault()}function M(R){E.push(R)}function I(R){delete D[R.pointerId];for(let J=0;J<E.length;J++)if(E[J].pointerId==R.pointerId){E.splice(J,1);return}}function q(R){let J=D[R.pointerId];J===void 0&&(J=new Je,D[R.pointerId]=J),J.set(R.pageX,R.pageY)}function Q(R){const J=R.pointerId===E[0].pointerId?E[1]:E[0];return D[J.pointerId]}r.domElement.addEventListener("contextmenu",A),r.domElement.addEventListener("pointerdown",he),r.domElement.addEventListener("pointercancel",Ee),r.domElement.addEventListener("wheel",be,{passive:!1}),this.update()}}class b1{parse(e,t={}){t=Object.assign({binary:!1},t);const r=t.binary,i=[];let a=0;e.traverse(function(m){if(m.isMesh){const w=m.geometry,_=w.index,S=w.getAttribute("position");a+=_!==null?_.count/3:S.count/3,i.push({object3d:m,geometry:w})}});let s,o=80;if(r===!0){const m=a*2+a*3*4*4+80+4,w=new ArrayBuffer(m);s=new DataView(w),s.setUint32(o,a,!0),o+=4}else s="",s+=`solid exported
`;const c=new ee,h=new ee,u=new ee,l=new ee,f=new ee,d=new ee;for(let m=0,w=i.length;m<w;m++){const _=i[m].object3d,S=i[m].geometry,E=S.index,D=S.getAttribute("position");if(E!==null)for(let b=0;b<E.count;b+=3){const T=E.getX(b+0),y=E.getX(b+1),x=E.getX(b+2);v(T,y,x,D,_)}else for(let b=0;b<D.count;b+=3){const T=b+0,y=b+1,x=b+2;v(T,y,x,D,_)}}return r===!1&&(s+=`endsolid exported
`),s;function v(m,w,_,S,E){c.fromBufferAttribute(S,m),h.fromBufferAttribute(S,w),u.fromBufferAttribute(S,_),E.isSkinnedMesh===!0&&(E.applyBoneTransform(m,c),E.applyBoneTransform(w,h),E.applyBoneTransform(_,u)),c.applyMatrix4(E.matrixWorld),h.applyMatrix4(E.matrixWorld),u.applyMatrix4(E.matrixWorld),p(c,h,u),g(c),g(h),g(u),r===!0?(s.setUint16(o,0,!0),o+=2):(s+=`		endloop
`,s+=`	endfacet
`)}function p(m,w,_){l.subVectors(_,w),f.subVectors(m,w),l.cross(f).normalize(),d.copy(l).normalize(),r===!0?(s.setFloat32(o,d.x,!0),o+=4,s.setFloat32(o,d.y,!0),o+=4,s.setFloat32(o,d.z,!0),o+=4):(s+="	facet normal "+d.x+" "+d.y+" "+d.z+`
`,s+=`		outer loop
`)}function g(m){r===!0?(s.setFloat32(o,m.x,!0),o+=4,s.setFloat32(o,m.y,!0),o+=4,s.setFloat32(o,m.z,!0),o+=4):s+="			vertex "+m.x+" "+m.y+" "+m.z+`
`}}}const Ci=new ee,Fi=new ee,bc=new Ke;class T1 extends ja{constructor(e,t=1,r=16711680){const i=new Nt,a=e.geometry.attributes.normal.count,s=new En(a*2*3,3);i.setAttribute("position",s),super(i,new Ei({color:r,toneMapped:!1})),this.object=e,this.size=t,this.type="VertexNormalsHelper",this.matrixAutoUpdate=!1,this.update()}update(){this.object.updateMatrixWorld(!0),bc.getNormalMatrix(this.object.matrixWorld);const e=this.object.matrixWorld,t=this.geometry.attributes.position,r=this.object.geometry;if(r){const i=r.attributes.position,a=r.attributes.normal;let s=0;for(let o=0,c=i.count;o<c;o++)Ci.fromBufferAttribute(i,o).applyMatrix4(e),Fi.fromBufferAttribute(a,o),Fi.applyMatrix3(bc).normalize().multiplyScalar(this.size).add(Ci),t.setXYZ(s,Ci.x,Ci.y,Ci.z),s=s+1,t.setXYZ(s,Fi.x,Fi.y,Fi.z),s=s+1}t.needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}const Qo=0,C1=1;let Vi,Kt,Dn,Ri,Mo,Ao,So,wo;const cn=12,Tc=30;let Ya=[],Do=[],uh=0,lh=()=>alert("Not yet generated.");const qt=document.cookie.split("; ").reduce((n,e)=>{const[t,r]=e.split("=");return t==="params"?JSON.parse(decodeURIComponent(r)):n},{}),it={v_num:1,showHelpers:qt.showHelpers??!1,showText:qt.showText??!1,camera:qt.camera??Qo,drawFaces:qt.drawFaces??!0,drawEdges:qt.drawEdges??!0,drawPoints:qt.drawPoints??!1,drawNormals:qt.drawNormals??!1,drawIcoFaces:qt.drawIcoFaces??!1,drawIcoEdges:qt.drawIcoEdges??!1,drawIcoPoints:qt.drawIcoPoints??!1,drawIcoNormals:qt.drawIcoNormals??!1,drawFinalFaces:qt.drawFinalFaces??!0,drawFinalNormals:qt.drawFinalNormals??!1,normalizeToSphere:qt.normalizeToSphere??!0,domeDiameter:qt.domeDiameter??2},wt={vertices:void 0,edges:void 0,triangles:void 0,normals:void 0,centroids:void 0,drawPoints:void 0,drawEdges:void 0,drawFaces:void 0,drawNormals:void 0,transformationMatrices:void 0};if(Ac.isWebGLAvailable())F1(),hs();else{const n=Ac.getWebGLErrorMessage();document.getElementById("container").appendChild(n)}function F1(){Dn=new of({antialias:!0}),Dn.setPixelRatio(window.devicePixelRatio),Dn.setSize(window.innerWidth,window.innerHeight),Dn.useLegacyLights=!1,Dn.localClippingEnabled=!0,document.body.contains(Dn.domElement)&&document.body.removeChild(Dn.domElement),document.body.appendChild(Dn.domElement),Kt=new mv,R1(),N1();const n=new Jo;n.add(it,"camera",{perspective:Qo,orthographic:C1}).name("camera").onChange(Gt),n.add(it,"v_num",0,100).step(1).onChange(Gt),Mo=new Ev(5),n.add(it,"showHelpers").name("show helpers").onChange(Gt),n.add(it,"drawFaces").name("draw faces").onChange(Gt),n.add(it,"drawEdges").name("draw edges").onChange(Gt),n.add(it,"drawPoints").name("draw points").onChange(Gt),n.add(it,"drawNormals").name("draw normals").onChange(Gt),n.add(it,"drawIcoFaces").name("draw icosahedron faces").onChange(Gt),n.add(it,"drawIcoEdges").name("draw icosahedron edges").onChange(Gt),n.add(it,"drawIcoPoints").name("draw icosahedron points").onChange(Gt),n.add(it,"drawIcoNormals").name("draw icosahedron normals").onChange(Gt),n.add(it,"drawFinalFaces").name("draw final faces").onChange(Gt),n.add(it,"drawFinalNormals").name("draw final normals").onChange(Gt),n.add(it,"normalizeToSphere").name("normalize to sphere").onChange(Gt),n.add(it,"domeDiameter").name("dome diameter (mm)").onChange(Gt),n.add({downloadSTL:()=>lh()},"downloadSTL").name("download STL"),P1(),Gt(),window.addEventListener("resize",L1)}function R1(){const n=new Al(16777215,526344,4.5);n.position.set(-1.25,1,1.25),n.intensity=1.1;const e=new Al(16777215,526344,4.5);e.position.set(1.25,1,-1.25),e.intensity=.5,Do.push(n),Do.push(e)}function N1(){Ao=new vn(40,window.innerWidth/window.innerHeight,1,200),So=new tf(window.innerWidth/-600,window.innerWidth/600,window.innerHeight/600,window.innerHeight/-600,1,200),wo=[Ao,So],wo.forEach(n=>{n.position.set(-1.5,2.5,3),Ri=new D1(n,Dn.domElement),Ri.addEventListener("change",hs),Ri.minDistance=1,Ri.maxDistance=10,Ri.enablePan=!1})}function L1(){wo.forEach(n=>{Vi.aspect=window.innerWidth/window.innerHeight,Vi.updateProjectionMatrix()}),Dn.setSize(window.innerWidth,window.innerHeight),hs()}function Gt(){document.cookie=`params=${encodeURIComponent(JSON.stringify(it))}`,Vi=it.camera===Qo?Ao:So,Kt.children=[],Do.forEach(n=>Kt.add(n)),Mo.visible=it.showHelpers,Kt.add(Mo),it.drawIcoPoints&&wt.drawPoints(),it.drawIcoEdges&&wt.drawEdges(),it.drawIcoPointOrder&&wt.drawPointOrder(),it.drawIcoFaces&&wt.drawFaces(),it.drawIcoNormals&&wt.drawNormals(),I1(),hs()}function hs(){if(it.showText&&Ya.length>0)for(let n=0;n<cn;n++)Ya[n].lookAt(Vi.position);Dn.render(Kt,Vi)}function Ta(n,e=!0){const t=Math.atan2(n[1],n[0]);let r=Math.acos(n[2]);isNaN(r)&&(r=1);const i=t/(2*Math.PI)+.5,a=e?r/Math.PI/4+.6:.5,s=.5,o=new rt;return o.setHSL(i,a,s),[o.r,o.g,o.b]}function P1(){let n=performance.now();var e=new Lo({vertexColors:!0,size:.1}),t=new Nt;const r=[1/2,(1+Math.sqrt(5))/4,0],i=[],a=[],s=new Float32Array(cn*3),o=new Float32Array(cn*3);for(let C=0;C<cn;C++){let F,N,L;F=parseInt(C/4),N=F+1,L=N+1,F%=3,N%=3,L%=3;const U=-2*((C+0)/2%2>=1)+1,G=-2*((C+1)/2%2>=1)+1;let H=r[0]*U,X=r[1]*G,z=r[2],O=[H,X,z];O=Jt(O,1/Na(O));const W=[O[F],O[N],O[L]];s[C*3+0]=O[F],s[C*3+1]=O[N],s[C*3+2]=O[L],i.push(new ee(W[0],W[1],W[2]));const K=new rt;K.setHSL(C/cn,1,.5),o[C*3+0]=K.r,o[C*3+1]=K.g,o[C*3+2]=K.b,a.push(K)}t.setAttribute("position",new Mt(s,3)),t.setAttribute("color",new Mt(o,3));var c=new lf(t,e);if(it.showText){Ya=[];for(let C=0;C<cn;C++){const F=H1(C.toString(),"white");F.position.copy(i[C]),F.position.add(new ee(.05,.05,0)),Kt.add(F),Ya.push(F)}}wt.vertices=s,wt.drawPoints=()=>Kt.add(c);const h=new Ei({vertexColors:!0}),u=new Nt,l=[],f=[],d=[],v=[],p=(C,F)=>{if(C===F)return;const N=[C,F].sort().toString();if(d.includes(N))throw new Error("Edge already exists");d.push([C,F].sort().toString()),v.push([C,F].sort()),l.push(new xv(i[C],i[F])),f.push(a[C]),f.push(a[F])};for(let C=0;C<cn;C++)p(C,(C+3)%cn),C%2===0&&p(C,(C+4)%cn),C%4===0&&p(C,(C+7)%cn),C%4===1&&p(C,(C+1)%cn),C%4===3&&(p(C,(C+2)%cn),p(C,(C+6)%cn));v.sort();const g=new Float32Array(Tc*2*3),m=new Float32Array(Tc*2*3);for(let C=0;C<l.length;C++){const F=l[C],N=f[C*2],L=f[C*2+1];g[C*2*3+0]=F.start.x,g[C*2*3+1]=F.start.y,g[C*2*3+2]=F.start.z,g[C*2*3+3]=F.end.x,g[C*2*3+4]=F.end.y,g[C*2*3+5]=F.end.z,m[C*2*3+0]=N.r,m[C*2*3+1]=N.g,m[C*2*3+2]=N.b,m[C*2*3+3]=L.r,m[C*2*3+4]=L.g,m[C*2*3+5]=L.b}u.setAttribute("position",new Mt(g,3)),u.setAttribute("color",new Mt(m,3));const w=new ja(u,h);wt.edges=w,wt.drawEdges=()=>Kt.add(w);const _=[];let S=[];for(let C=0;C<v.length;C++)for(let F=0;F<v.length;F++){if(C===F)continue;const N=v[C],L=v[F];let U=-1,G=[-1,-1];for(let X=0;X<2;X++)if((G[1]=L.indexOf(N[X]))!==-1){U=N[X],G[0]=N[(X+1)%2],G[1]=L[(G[1]+1)%2];break}if(G[0]===-1)continue;if(G.sort(),v.map(X=>X.toString()).indexOf(G.toString())!==-1){const X=[U,G[0],G[1]];if(X.sort(),S.indexOf(X.sort().toString())!==-1)continue;S.push(X.sort().toString()),_.push(X)}}_.sort(),_.forEach(C=>{const F=i[C[0]],N=i[C[1]],L=i[C[2]];F.x,F.y,F.z,N.x,N.y,N.z,L.x,L.y,L.z});const E=new Uint16Array(_.length);for(let C=0;C<_.length;C++)E[C*3]=_[C][0],E[C*3+1]=_[C][1],E[C*3+2]=_[C][2];const D=new cf({side:_n,vertexColors:!0});D.flatShading=!0,t.setIndex(_.flat());const b=new xn(t,D);wt.drawFaces=()=>Kt.add(b);let T=_.map(C=>[i[C[0]],i[C[1]],i[C[2]]]);T=T.map(C=>C.map(F=>[F.x,F.y,F.z])),T=T.map(C=>Dr(C));const y=T.map(C=>G1(C)),x=T.map(C=>V1(C));wt.triangles=T,wt.normals=y,wt.centroids=x,wt.drawNormals=()=>T.forEach((C,F)=>W1(x[F],y[F],.1));let P=performance.now();console.log(`Time to create icosahedron: ${P-n} ms`)}function I1(){let n=performance.now();const e=it.v_num,t=O1(e),r=t.points;console.log(r[0]);const i=t.lines,a=t.triangles,s=r.map(b=>[...b,1]),o=Dr([[0,0,0],[1,0,0],[1/2,Math.sqrt(3)/2,0]]);(wt.transformationMatrices??1)&&(wt.transformationMatrices=wt.triangles.map(b=>U1(o,b))),console.log(wt.transformationMatrices),console.log(`Generating Transformation Matrices took ${uh} ms.`);let c=[];wt.triangles.forEach((b,T)=>{const y=wt.transformationMatrices[T];let x=Jt(y,Dr(s));x=Dr(x).map(pe=>pe.slice(0,3));let P=i.map(pe=>pe.map(k=>x[k])),C=a.map(pe=>pe.map(k=>x[k]));it.normalizeToSphere&&(x=x.map(pe=>Jt(pe,1/Na(pe)*1.0002)),P=P.map(pe=>pe.map(k=>Jt(k,1/Na(k)*1.0001))),C=C.map(pe=>pe.map(k=>Jt(k,1/Na(k)))));let F=x.map(pe=>Ta(pe,!1)),N=new Float32Array(F.length*3);F.forEach((pe,k)=>{N[k*3+0]=pe[0],N[k*3+1]=pe[1],N[k*3+2]=pe[2]});let L=P.map(pe=>pe.map(k=>Ta(k),!1)),U=new Float32Array(L.length*3*2);L.forEach((pe,k)=>{pe.forEach((ye,he)=>{U[k*3*2+he*3+0]=ye[0],U[k*3*2+he*3+1]=ye[1],U[k*3*2+he*3+2]=ye[2]})});let G=C.map(pe=>pe.map(k=>Ta(k))),H=new Float32Array(G.length*3*3);G.forEach((pe,k)=>{pe.forEach((ye,he)=>{H[k*3*3+he*3+0]=ye[0],H[k*3*3+he*3+1]=ye[1],H[k*3*3+he*3+2]=ye[2]})});const X=new Lo({vertexColors:!0,size:.1}),z=new Nt,O=new Float32Array(x.flat());z.setAttribute("position",new Mt(O,3)),z.setAttribute("color",new Mt(N,3));const W=new lf(z,X),K=new Ei({vertexColors:!0,linewidth:6}),Z=new Nt,j=new Float32Array(Ze(P));Z.setAttribute("position",new Mt(j,3)),Z.setAttribute("color",new Mt(U,3));const re=new ja(Z,K);c.push(C);const oe=new cf({side:_n,vertexColors:!0}),le=new Nt,me=new Float32Array(Ze(C));le.setAttribute("position",new Mt(me,3)),le.setAttribute("color",new Mt(H,3)),oe.flatShading=!0;const fe=new xn(le,oe);it.drawFaces&&Kt.add(fe),it.drawEdges&&Kt.add(re),it.drawPoints&&Kt.add(W)}),c=c.map(b=>b.map(T=>{const[y,x]=z1(T);return x?[T[1],T[0],T[2]]:T}));const h=new vv({side:Zn,vertexColors:!0}),u=new Nt,l=new Float32Array(Ze(c)),f=new Float32Array(Ze(c.map(b=>b.map(T=>T.map(y=>Ta(y,!1))))));h.flatShading=!0,u.setAttribute("position",new Mt(l,3)),u.setAttribute("color",new Mt(f,3)),u.computeVertexNormals(),u.normalizeNormals();const d=new xn(u,h),v=d.clone(),p=it.domeDiameter/2;v.scale.set(p,p,p);const g=new b1,m={binary:!0},w=g.parse(v,m),_=new Blob([w],{type:"application/octet-stream"}),S=document.createElement("a");S.href=URL.createObjectURL(_),S.download="dome.stl",lh=()=>S.click();const E=new T1(d,.2,65280);it.drawFinalFaces&&Kt.add(d),it.drawFinalNormals&&Kt.add(E);let D=performance.now();console.log(`Rendered in ${D-n} ms`)}function U1(n,e){let t=performance.now();const r=Dr([[...Ze(at(n,0)),1],[...Ze(at(n,1)),1],[...Ze(at(n,2)),1],[...Ze(Gi(Wt(Ze(at(n,2)),Ze(at(n,0))),Wt(Ze(at(n,1)),Ze(at(n,0))))),0]]),i=Dr([[...Ze(at(e,0)),1],[...Ze(at(e,1)),1],[...Ze(at(e,2)),1],[...Ze(Gi(Wt(Ze(at(e,2)),Ze(at(e,0))),Wt(Ze(at(e,1)),Ze(at(e,0))))),0]]),a=qa(r);qa(i);let s=Jt(i,a),o=performance.now();return uh+=o-t,s}function B1(n,e){const t=1/Math.sqrt(3),r=(e-n)/2/t;return[(n+e)/2,-r,0]}function O1(n){let e=performance.now();const t=[],r=[],i=[],a=[];for(let h=0;h<=n+1;h++){a.push([]);const u=a[h];for(let l=0;l<=n+1;l++){if(h<l)continue;const f=B1(h,l),d=Jt(f,1/(n+1));u.push(t.length),t.push(d)}}const s=(h,u,l,f)=>{i.push([h,u,l])};for(let h=0;h<a.length-1;h++){const u=a[h],l=a[h+1];for(let f=0;f<l.length-1;f++)s(u[f],l[f],l[f+1]),h>f&&s(u[f],u[f+1],l[f+1])}const o=(h,u)=>{r.push([h,u])};for(let h=1;h<a.length;h++){const u=a[h];for(let f=0;f<u.length-1;f++)o(u[f],u[f+1]);const l=a[h-1];for(let f=0;f<l.length;f++)o(l[f],u[f]),o(l[f],u[f+1])}let c=performance.now();return console.log(`generateDomeFace took ${c-e} ms.`),{points:t,lines:r,triangles:i}}function z1(n){const e=Gi(Wt(Ze(at(n,2)),Ze(at(n,0))),Wt(Ze(at(n,1)),Ze(at(n,0)))),t=Ze(at(n,0));return[e,fs(e,t)>0]}function G1(n){const e=Gi(Wt(Ze(at(n,2)),Ze(at(n,0))),Wt(Ze(at(n,1)),Ze(at(n,0))));Gi(Wt(Ze(at(n,1)),Ze(at(n,0))),Wt(Ze(at(n,2)),Ze(at(n,0))));const t=Ze(at(n,0));let r=e;return fs(e,t)>0?r:Jt(r,-1)}function H1(n,e){const t=document.createElement("canvas"),r=t.getContext("2d");r.clearRect(0,0,t.width,t.height),r.font="50px Arial",r.fillStyle=e,r.fillText(n,t.width/2,t.height/2);const i=new gv(t),a=new Ro({map:i,side:_n}),s=new Ja(1,.5);return new xn(s,a)}function V1(n){return Jt(cs(Ze(at(n,0)),Ze(at(n,1)),Ze(at(n,2))),.3333333333333333)}function W1(n,e,t,r=16711680){const i=new ee(...n);let a=new ee(...e);a.normalize(),a.multiplyScalar(t);const s=i.clone().add(a),o=new Nt().setFromPoints([i,s]),c=new Ei({color:r}),h=new uf(o,c);Kt.add(h)}
