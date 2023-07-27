(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fo="154",Nr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ir={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vf=0,Oo=1,Wf=2,cc=1,kf=2,zn=3,tr=0,qt=1,hn=2,Qn=0,ri=1,zo=2,Go=3,Ho=4,Xf=5,jr=100,qf=101,$f=102,Vo=103,Wo=104,Yf=200,Zf=201,Kf=202,Jf=203,fc=204,hc=205,Qf=206,jf=207,eh=208,th=209,nh=210,rh=0,ih=1,ah=2,Gs=3,sh=4,oh=5,uh=6,lh=7,dc=0,ch=1,fh=2,Vn=0,hh=1,dh=2,ph=3,mh=4,gh=5,pc=300,si=301,oi=302,Hs=303,Vs=304,Ba=306,Ws=1e3,Mn=1001,ks=1002,Wt=1003,ko=1004,rs=1005,cn=1006,vh=1007,Si=1008,jn=1009,_h=1010,xh=1011,ho=1012,mc=1013,Zn=1014,Kn=1015,wi=1016,gc=1017,vc=1018,gr=1020,Eh=1021,An=1023,yh=1024,Mh=1025,vr=1026,ui=1027,Ah=1028,_c=1029,Sh=1030,xc=1031,Ec=1033,is=33776,as=33777,ss=33778,os=33779,Xo=35840,qo=35841,$o=35842,Yo=35843,wh=36196,Zo=37492,Ko=37496,Jo=37808,Qo=37809,jo=37810,eu=37811,tu=37812,nu=37813,ru=37814,iu=37815,au=37816,su=37817,ou=37818,uu=37819,lu=37820,cu=37821,us=36492,Dh=36283,fu=36284,hu=36285,du=36286,yc=3e3,_r=3001,bh=3200,Th=3201,Mc=0,Ch=1,xr="",Ye="srgb",Fn="srgb-linear",Ac="display-p3",ls=7680,Fh=519,Rh=512,Lh=513,Ph=514,Nh=515,Ih=516,Uh=517,Bh=518,Oh=519,pu=35044,mu="300 es",Xs=1035,Gn=2e3,_a=2001;class Sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,qs=180/Math.PI;function Fi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function zh(n,e){return(n%e+e)%e}function fs(n,e,t){return(1-t)*n+t*e}function gu(n){return(n&n-1)===0&&n!==0}function $s(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Vi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function en(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*i+e.x,this.y=a*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,r,i,a,s,o,c,f){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,a,s,o,c,f)}set(e,t,r,i,a,s,o,c,f){const l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=a,l[5]=c,l[6]=r,l[7]=s,l[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,a=this.elements,s=r[0],o=r[3],c=r[6],f=r[1],l=r[4],u=r[7],h=r[2],m=r[5],v=r[8],d=i[0],p=i[3],g=i[6],M=i[1],_=i[4],A=i[7],y=i[2],D=i[5],T=i[8];return a[0]=s*d+o*M+c*y,a[3]=s*p+o*_+c*D,a[6]=s*g+o*A+c*T,a[1]=f*d+l*M+u*y,a[4]=f*p+l*_+u*D,a[7]=f*g+l*A+u*T,a[2]=h*d+m*M+v*y,a[5]=h*p+m*_+v*D,a[8]=h*g+m*A+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],f=e[7],l=e[8];return t*s*l-t*o*f-r*a*l+r*o*c+i*a*f-i*s*c}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],f=e[7],l=e[8],u=l*s-o*f,h=o*c-l*a,m=f*a-s*c,v=t*u+r*h+i*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/v;return e[0]=u*d,e[1]=(i*f-l*r)*d,e[2]=(o*r-i*s)*d,e[3]=h*d,e[4]=(l*t-i*c)*d,e[5]=(i*a-o*t)*d,e[6]=m*d,e[7]=(r*c-f*t)*d,e[8]=(s*t-r*a)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,a,s,o){const c=Math.cos(a),f=Math.sin(a);return this.set(r*c,r*f,-r*(c*s+f*o)+s+e,-i*f,i*c,-i*(-f*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hs.makeScale(e,t)),this}rotate(e){return this.premultiply(hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hs=new Je;function Sc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const vu={};function Ai(n){n in vu||(vu[n]=!0,console.warn(n))}function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Gh=new Je().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Hh=new Je().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Vh(n){return n.convertSRGBToLinear().applyMatrix3(Hh)}function Wh(n){return n.applyMatrix3(Gh).convertLinearToSRGB()}const kh={[Fn]:n=>n,[Ye]:n=>n.convertSRGBToLinear(),[Ac]:Vh},Xh={[Fn]:n=>n,[Ye]:n=>n.convertLinearToSRGB(),[Ac]:Wh},dn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Fn},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=kh[e],i=Xh[t];if(r===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ur;class wc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=xa("canvas")),Ur.width=e.width,Ur.height=e.height;const r=Ur.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Ur}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xa("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=ii(a[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ii(t[r]/255)*255):t[r]=ii(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qh=0;class Dc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(ps(i[s].image)):a.push(ps(i[s]))}else a=ps(i);r.url=a}return t||(e.images[this.uuid]=r),r}}function ps(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $h=0;class $t extends Sr{constructor(e=$t.DEFAULT_IMAGE,t=$t.DEFAULT_MAPPING,r=Mn,i=Mn,a=cn,s=Si,o=An,c=jn,f=$t.DEFAULT_ANISOTROPY,l=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Fi(),this.name="",this.source=new Dc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=f,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof l=="string"?this.colorSpace=l:(Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=l===_r?Ye:xr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case Mn:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case Mn:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ye?_r:yc}set encoding(e){Ai("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===_r?Ye:xr}}$t.DEFAULT_IMAGE=null;$t.DEFAULT_MAPPING=pc;$t.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,r=0,i=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,a;const c=e.elements,f=c[0],l=c[4],u=c[8],h=c[1],m=c[5],v=c[9],d=c[2],p=c[6],g=c[10];if(Math.abs(l-h)<.01&&Math.abs(u-d)<.01&&Math.abs(v-p)<.01){if(Math.abs(l+h)<.1&&Math.abs(u+d)<.1&&Math.abs(v+p)<.1&&Math.abs(f+m+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(f+1)/2,A=(m+1)/2,y=(g+1)/2,D=(l+h)/4,T=(u+d)/4,b=(v+p)/4;return _>A&&_>y?_<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(_),i=D/r,a=T/r):A>y?A<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(A),r=D/i,a=b/i):y<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(y),r=T/a,i=b/a),this.set(r,i,a,t),this}let M=Math.sqrt((p-v)*(p-v)+(u-d)*(u-d)+(h-l)*(h-l));return Math.abs(M)<.001&&(M=1),this.x=(p-v)/M,this.y=(u-d)/M,this.z=(h-l)/M,this.w=Math.acos((f+m+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yr extends Sr{constructor(e=1,t=1,r={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const i={width:e,height:t,depth:1};r.encoding!==void 0&&(Ai("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===_r?Ye:xr),this.texture=new $t(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps!==void 0?r.generateMipmaps:!1,this.texture.internalFormat=r.internalFormat!==void 0?r.internalFormat:null,this.texture.minFilter=r.minFilter!==void 0?r.minFilter:cn,this.depthBuffer=r.depthBuffer!==void 0?r.depthBuffer:!0,this.stencilBuffer=r.stencilBuffer!==void 0?r.stencilBuffer:!1,this.depthTexture=r.depthTexture!==void 0?r.depthTexture:null,this.samples=r.samples!==void 0?r.samples:0}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Dc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bc extends $t{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yh extends $t{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,s,o){let c=r[i+0],f=r[i+1],l=r[i+2],u=r[i+3];const h=a[s+0],m=a[s+1],v=a[s+2],d=a[s+3];if(o===0){e[t+0]=c,e[t+1]=f,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=d;return}if(u!==d||c!==h||f!==m||l!==v){let p=1-o;const g=c*h+f*m+l*v+u*d,M=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){const y=Math.sqrt(_),D=Math.atan2(y,g*M);p=Math.sin(p*D)/y,o=Math.sin(o*D)/y}const A=o*M;if(c=c*p+h*A,f=f*p+m*A,l=l*p+v*A,u=u*p+d*A,p===1-o){const y=1/Math.sqrt(c*c+f*f+l*l+u*u);c*=y,f*=y,l*=y,u*=y}}e[t]=c,e[t+1]=f,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,r,i,a,s){const o=r[i],c=r[i+1],f=r[i+2],l=r[i+3],u=a[s],h=a[s+1],m=a[s+2],v=a[s+3];return e[t]=o*v+l*u+c*m-f*h,e[t+1]=c*v+l*h+f*u-o*m,e[t+2]=f*v+l*m+o*h-c*u,e[t+3]=l*v-o*u-c*h-f*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,f=o(r/2),l=o(i/2),u=o(a/2),h=c(r/2),m=c(i/2),v=c(a/2);switch(s){case"XYZ":this._x=h*l*u+f*m*v,this._y=f*m*u-h*l*v,this._z=f*l*v+h*m*u,this._w=f*l*u-h*m*v;break;case"YXZ":this._x=h*l*u+f*m*v,this._y=f*m*u-h*l*v,this._z=f*l*v-h*m*u,this._w=f*l*u+h*m*v;break;case"ZXY":this._x=h*l*u-f*m*v,this._y=f*m*u+h*l*v,this._z=f*l*v+h*m*u,this._w=f*l*u-h*m*v;break;case"ZYX":this._x=h*l*u-f*m*v,this._y=f*m*u+h*l*v,this._z=f*l*v-h*m*u,this._w=f*l*u+h*m*v;break;case"YZX":this._x=h*l*u+f*m*v,this._y=f*m*u+h*l*v,this._z=f*l*v-h*m*u,this._w=f*l*u-h*m*v;break;case"XZY":this._x=h*l*u-f*m*v,this._y=f*m*u-h*l*v,this._z=f*l*v+h*m*u,this._w=f*l*u+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],a=t[8],s=t[1],o=t[5],c=t[9],f=t[2],l=t[6],u=t[10],h=r+o+u;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(l-c)*m,this._y=(a-f)*m,this._z=(s-i)*m}else if(r>o&&r>u){const m=2*Math.sqrt(1+r-o-u);this._w=(l-c)/m,this._x=.25*m,this._y=(i+s)/m,this._z=(a+f)/m}else if(o>u){const m=2*Math.sqrt(1+o-r-u);this._w=(a-f)/m,this._x=(i+s)/m,this._y=.25*m,this._z=(c+l)/m}else{const m=2*Math.sqrt(1+u-r-o);this._w=(s-i)/m,this._x=(a+f)/m,this._y=(c+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,a=e._z,s=e._w,o=t._x,c=t._y,f=t._z,l=t._w;return this._x=r*l+s*o+i*f-a*c,this._y=i*l+s*c+a*o-r*f,this._z=a*l+s*f+r*c-i*o,this._w=s*l-r*o-i*c-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=i,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*s+t*this._w,this._x=m*r+t*this._x,this._y=m*i+t*this._y,this._z=m*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const f=Math.sqrt(c),l=Math.atan2(f,o),u=Math.sin((1-t)*l)/f,h=Math.sin(t*l)/f;return this._w=s*u+this._w*h,this._x=r*u+this._x*h,this._y=i*u+this._y*h,this._z=a*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),r*Math.sin(a),r*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*i,this.y=a[1]*t+a[4]*r+a[7]*i,this.z=a[2]*t+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,a=e.x,s=e.y,o=e.z,c=e.w,f=c*t+s*i-o*r,l=c*r+o*t-a*i,u=c*i+a*r-s*t,h=-a*t-s*r-o*i;return this.x=f*c+h*-a+l*-o-u*-s,this.y=l*c+h*-s+u*-a-f*-o,this.z=u*c+h*-o+f*-s-l*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i,this.y=a[1]*t+a[5]*r+a[9]*i,this.z=a[2]*t+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=i*c-a*o,this.y=a*s-r*c,this.z=r*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ms.copy(this).projectOnVector(e),this.sub(ms)}reflect(e){return this.sub(ms.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ms=new ee,_u=new Mr;class Ri{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const a=i.attributes.position;for(let s=0,o=a.count;s<o;s++)Pn.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(Pn)}else i.boundingBox===null&&i.computeBoundingBox(),Br.copy(i.boundingBox),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const r=e.children;for(let i=0,a=r.length;i<a;i++)this.expandByObject(r[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vi),Wi.subVectors(this.max,vi),Or.subVectors(e.a,vi),zr.subVectors(e.b,vi),Gr.subVectors(e.c,vi),kn.subVectors(zr,Or),Xn.subVectors(Gr,zr),lr.subVectors(Or,Gr);let t=[0,-kn.z,kn.y,0,-Xn.z,Xn.y,0,-lr.z,lr.y,kn.z,0,-kn.x,Xn.z,0,-Xn.x,lr.z,0,-lr.x,-kn.y,kn.x,0,-Xn.y,Xn.x,0,-lr.y,lr.x,0];return!gs(t,Or,zr,Gr,Wi)||(t=[1,0,0,0,1,0,0,0,1],!gs(t,Or,zr,Gr,Wi))?!1:(ki.crossVectors(kn,Xn),t=[ki.x,ki.y,ki.z],gs(t,Or,zr,Gr,Wi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ln=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Pn=new ee,Br=new Ri,Or=new ee,zr=new ee,Gr=new ee,kn=new ee,Xn=new ee,lr=new ee,vi=new ee,Wi=new ee,ki=new ee,cr=new ee;function gs(n,e,t,r,i){for(let a=0,s=n.length-3;a<=s;a+=3){cr.fromArray(n,a);const o=i.x*Math.abs(cr.x)+i.y*Math.abs(cr.y)+i.z*Math.abs(cr.z),c=e.dot(cr),f=t.dot(cr),l=r.dot(cr);if(Math.max(-Math.max(c,f,l),Math.min(c,f,l))>o)return!1}return!0}const Zh=new Ri,_i=new ee,vs=new ee;class Li{constructor(e=new ee,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Zh.setFromPoints(e).getCenter(r);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_i.subVectors(e,this.center);const t=_i.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(_i,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_i.copy(e.center).add(vs)),this.expandByPoint(_i.copy(e.center).sub(vs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new ee,_s=new ee,Xi=new ee,qn=new ee,xs=new ee,qi=new ee,Es=new ee;class po{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){_s.copy(e).add(t).multiplyScalar(.5),Xi.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(_s);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Xi),o=qn.dot(this.direction),c=-qn.dot(Xi),f=qn.lengthSq(),l=Math.abs(1-s*s);let u,h,m,v;if(l>0)if(u=s*c-o,h=s*o-c,v=a*l,u>=0)if(h>=-v)if(h<=v){const d=1/l;u*=d,h*=d,m=u*(u+s*h+2*o)+h*(s*u+h+2*c)+f}else h=a,u=Math.max(0,-(s*h+o)),m=-u*u+h*(h+2*c)+f;else h=-a,u=Math.max(0,-(s*h+o)),m=-u*u+h*(h+2*c)+f;else h<=-v?(u=Math.max(0,-(-s*a+o)),h=u>0?-a:Math.min(Math.max(-a,-c),a),m=-u*u+h*(h+2*c)+f):h<=v?(u=0,h=Math.min(Math.max(-a,-c),a),m=h*(h+2*c)+f):(u=Math.max(0,-(s*a+o)),h=u>0?a:Math.min(Math.max(-a,-c),a),m=-u*u+h*(h+2*c)+f);else h=s>0?-a:a,u=Math.max(0,-(s*h+o)),m=-u*u+h*(h+2*c)+f;return r&&r.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_s).addScaledVector(Xi,h),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const r=Nn.dot(this.direction),i=Nn.dot(Nn)-r*r,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=r-s,c=r+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,s,o,c;const f=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,h=this.origin;return f>=0?(r=(e.min.x-h.x)*f,i=(e.max.x-h.x)*f):(r=(e.max.x-h.x)*f,i=(e.min.x-h.x)*f),l>=0?(a=(e.min.y-h.y)*l,s=(e.max.y-h.y)*l):(a=(e.max.y-h.y)*l,s=(e.min.y-h.y)*l),r>s||a>i||((a>r||isNaN(r))&&(r=a),(s<i||isNaN(i))&&(i=s),u>=0?(o=(e.min.z-h.z)*u,c=(e.max.z-h.z)*u):(o=(e.max.z-h.z)*u,c=(e.min.z-h.z)*u),r>c||o>i)||((o>r||r!==r)&&(r=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,r,i,a){xs.subVectors(t,e),qi.subVectors(r,e),Es.crossVectors(xs,qi);let s=this.direction.dot(Es),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;qn.subVectors(this.origin,e);const c=o*this.direction.dot(qi.crossVectors(qn,qi));if(c<0)return null;const f=o*this.direction.dot(xs.cross(qn));if(f<0||c+f>s)return null;const l=-o*qn.dot(Es);return l<0?null:this.at(l/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,t,r,i,a,s,o,c,f,l,u,h,m,v,d,p){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,a,s,o,c,f,l,u,h,m,v,d,p)}set(e,t,r,i,a,s,o,c,f,l,u,h,m,v,d,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=i,g[1]=a,g[5]=s,g[9]=o,g[13]=c,g[2]=f,g[6]=l,g[10]=u,g[14]=h,g[3]=m,g[7]=v,g[11]=d,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/Hr.setFromMatrixColumn(e,0).length(),a=1/Hr.setFromMatrixColumn(e,1).length(),s=1/Hr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),c=Math.cos(i),f=Math.sin(i),l=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const h=s*l,m=s*u,v=o*l,d=o*u;t[0]=c*l,t[4]=-c*u,t[8]=f,t[1]=m+v*f,t[5]=h-d*f,t[9]=-o*c,t[2]=d-h*f,t[6]=v+m*f,t[10]=s*c}else if(e.order==="YXZ"){const h=c*l,m=c*u,v=f*l,d=f*u;t[0]=h+d*o,t[4]=v*o-m,t[8]=s*f,t[1]=s*u,t[5]=s*l,t[9]=-o,t[2]=m*o-v,t[6]=d+h*o,t[10]=s*c}else if(e.order==="ZXY"){const h=c*l,m=c*u,v=f*l,d=f*u;t[0]=h-d*o,t[4]=-s*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=s*l,t[9]=d-h*o,t[2]=-s*f,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const h=s*l,m=s*u,v=o*l,d=o*u;t[0]=c*l,t[4]=v*f-m,t[8]=h*f+d,t[1]=c*u,t[5]=d*f+h,t[9]=m*f-v,t[2]=-f,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const h=s*c,m=s*f,v=o*c,d=o*f;t[0]=c*l,t[4]=d-h*u,t[8]=v*u+m,t[1]=u,t[5]=s*l,t[9]=-o*l,t[2]=-f*l,t[6]=m*u+v,t[10]=h-d*u}else if(e.order==="XZY"){const h=s*c,m=s*f,v=o*c,d=o*f;t[0]=c*l,t[4]=-u,t[8]=f*l,t[1]=h*u+d,t[5]=s*l,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*l,t[10]=d*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kh,e,Jh)}lookAt(e,t,r){const i=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),$n.crossVectors(r,tn),$n.lengthSq()===0&&(Math.abs(r.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),$n.crossVectors(r,tn)),$n.normalize(),$i.crossVectors(tn,$n),i[0]=$n.x,i[4]=$i.x,i[8]=tn.x,i[1]=$n.y,i[5]=$i.y,i[9]=tn.y,i[2]=$n.z,i[6]=$i.z,i[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,a=this.elements,s=r[0],o=r[4],c=r[8],f=r[12],l=r[1],u=r[5],h=r[9],m=r[13],v=r[2],d=r[6],p=r[10],g=r[14],M=r[3],_=r[7],A=r[11],y=r[15],D=i[0],T=i[4],b=i[8],x=i[12],E=i[1],N=i[5],L=i[9],P=i[13],I=i[2],z=i[6],O=i[10],R=i[14],G=i[3],X=i[7],U=i[11],H=i[15];return a[0]=s*D+o*E+c*I+f*G,a[4]=s*T+o*N+c*z+f*X,a[8]=s*b+o*L+c*O+f*U,a[12]=s*x+o*P+c*R+f*H,a[1]=l*D+u*E+h*I+m*G,a[5]=l*T+u*N+h*z+m*X,a[9]=l*b+u*L+h*O+m*U,a[13]=l*x+u*P+h*R+m*H,a[2]=v*D+d*E+p*I+g*G,a[6]=v*T+d*N+p*z+g*X,a[10]=v*b+d*L+p*O+g*U,a[14]=v*x+d*P+p*R+g*H,a[3]=M*D+_*E+A*I+y*G,a[7]=M*T+_*N+A*z+y*X,a[11]=M*b+_*L+A*O+y*U,a[15]=M*x+_*P+A*R+y*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],a=e[12],s=e[1],o=e[5],c=e[9],f=e[13],l=e[2],u=e[6],h=e[10],m=e[14],v=e[3],d=e[7],p=e[11],g=e[15];return v*(+a*c*u-i*f*u-a*o*h+r*f*h+i*o*m-r*c*m)+d*(+t*c*m-t*f*h+a*s*h-i*s*m+i*f*l-a*c*l)+p*(+t*f*u-t*o*m-a*s*u+r*s*m+a*o*l-r*f*l)+g*(-i*o*l-t*c*u+t*o*h+i*s*u-r*s*h+r*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],f=e[7],l=e[8],u=e[9],h=e[10],m=e[11],v=e[12],d=e[13],p=e[14],g=e[15],M=u*p*f-d*h*f+d*c*m-o*p*m-u*c*g+o*h*g,_=v*h*f-l*p*f-v*c*m+s*p*m+l*c*g-s*h*g,A=l*d*f-v*u*f+v*o*m-s*d*m-l*o*g+s*u*g,y=v*u*c-l*d*c-v*o*h+s*d*h+l*o*p-s*u*p,D=t*M+r*_+i*A+a*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/D;return e[0]=M*T,e[1]=(d*h*a-u*p*a-d*i*m+r*p*m+u*i*g-r*h*g)*T,e[2]=(o*p*a-d*c*a+d*i*f-r*p*f-o*i*g+r*c*g)*T,e[3]=(u*c*a-o*h*a-u*i*f+r*h*f+o*i*m-r*c*m)*T,e[4]=_*T,e[5]=(l*p*a-v*h*a+v*i*m-t*p*m-l*i*g+t*h*g)*T,e[6]=(v*c*a-s*p*a-v*i*f+t*p*f+s*i*g-t*c*g)*T,e[7]=(s*h*a-l*c*a+l*i*f-t*h*f-s*i*m+t*c*m)*T,e[8]=A*T,e[9]=(v*u*a-l*d*a-v*r*m+t*d*m+l*r*g-t*u*g)*T,e[10]=(s*d*a-v*o*a+v*r*f-t*d*f-s*r*g+t*o*g)*T,e[11]=(l*o*a-s*u*a-l*r*f+t*u*f+s*r*m-t*o*m)*T,e[12]=y*T,e[13]=(l*d*i-v*u*i+v*r*h-t*d*h-l*r*p+t*u*p)*T,e[14]=(v*o*i-s*d*i-v*r*c+t*d*c+s*r*p-t*o*p)*T,e[15]=(s*u*i-l*o*i+l*r*c-t*u*c-s*r*h+t*o*h)*T,this}scale(e){const t=this.elements,r=e.x,i=e.y,a=e.z;return t[0]*=r,t[4]*=i,t[8]*=a,t[1]*=r,t[5]*=i,t[9]*=a,t[2]*=r,t[6]*=i,t[10]*=a,t[3]*=r,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),a=1-r,s=e.x,o=e.y,c=e.z,f=a*s,l=a*o;return this.set(f*s+r,f*o-i*c,f*c+i*o,0,f*o+i*c,l*o+r,l*c-i*s,0,f*c-i*o,l*c+i*s,a*c*c+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,a,s){return this.set(1,r,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,f=a+a,l=s+s,u=o+o,h=a*f,m=a*l,v=a*u,d=s*l,p=s*u,g=o*u,M=c*f,_=c*l,A=c*u,y=r.x,D=r.y,T=r.z;return i[0]=(1-(d+g))*y,i[1]=(m+A)*y,i[2]=(v-_)*y,i[3]=0,i[4]=(m-A)*D,i[5]=(1-(h+g))*D,i[6]=(p+M)*D,i[7]=0,i[8]=(v+_)*T,i[9]=(p-M)*T,i[10]=(1-(h+d))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let a=Hr.set(i[0],i[1],i[2]).length();const s=Hr.set(i[4],i[5],i[6]).length(),o=Hr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],pn.copy(this);const f=1/a,l=1/s,u=1/o;return pn.elements[0]*=f,pn.elements[1]*=f,pn.elements[2]*=f,pn.elements[4]*=l,pn.elements[5]*=l,pn.elements[6]*=l,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,t.setFromRotationMatrix(pn),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,i,a,s,o=Gn){const c=this.elements,f=2*a/(t-e),l=2*a/(r-i),u=(t+e)/(t-e),h=(r+i)/(r-i);let m,v;if(o===Gn)m=-(s+a)/(s-a),v=-2*s*a/(s-a);else if(o===_a)m=-s/(s-a),v=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=l,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,i,a,s,o=Gn){const c=this.elements,f=1/(t-e),l=1/(r-i),u=1/(s-a),h=(t+e)*f,m=(r+i)*l;let v,d;if(o===Gn)v=(s+a)*u,d=-2*u;else if(o===_a)v=a*u,d=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*f,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=d,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Hr=new ee,pn=new St,Kh=new ee(0,0,0),Jh=new ee(1,1,1),$n=new ee,$i=new ee,tn=new ee,xu=new St,Eu=new Mr;class Oa{constructor(e=0,t=0,r=0,i=Oa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],c=i[1],f=i[5],l=i[9],u=i[2],h=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,f)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-s,f)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-Bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,f));break;case"YZX":this._z=Math.asin(Bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,f),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,f),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xu,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eu.setFromEuler(this),this.setFromQuaternion(Eu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oa.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qh=0;const yu=new ee,Vr=new Mr,In=new St,Yi=new ee,xi=new ee,jh=new ee,ed=new Mr,Mu=new ee(1,0,0),Au=new ee(0,1,0),Su=new ee(0,0,1),td={type:"added"},wu={type:"removed"};class Pt extends Sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new ee,t=new Oa,r=new Mr,i=new ee(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new St},normalMatrix:{value:new Je}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(e,t){return Vr.setFromAxisAngle(e,t),this.quaternion.premultiply(Vr),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(Au,e)}rotateZ(e){return this.rotateOnAxis(Su,e)}translateOnAxis(e,t){return yu.copy(e).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(Au,e)}translateZ(e){return this.translateOnAxis(Su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Yi.copy(e):Yi.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(xi,Yi,this.up):In.lookAt(Yi,xi,this.up),this.quaternion.setFromRotationMatrix(In),i&&(In.extractRotation(i.matrixWorld),Vr.setFromRotationMatrix(In),this.quaternion.premultiply(Vr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(td)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(wu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t){let r=[];this[e]===t&&r.push(this);for(let i=0,a=this.children.length;i<a;i++){const s=this.children[i].getObjectsByProperty(e,t);s.length>0&&(r=r.concat(s))}return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,jh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let f=0,l=c.length;f<l;f++){const u=c[f];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,f=this.material.length;c<f;c++)o.push(a(e.materials,this.material[c]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),f=s(e.textures),l=s(e.images),u=s(e.shapes),h=s(e.skeletons),m=s(e.animations),v=s(e.nodes);o.length>0&&(r.geometries=o),c.length>0&&(r.materials=c),f.length>0&&(r.textures=f),l.length>0&&(r.images=l),u.length>0&&(r.shapes=u),h.length>0&&(r.skeletons=h),m.length>0&&(r.animations=m),v.length>0&&(r.nodes=v)}return r.object=i,r;function s(o){const c=[];for(const f in o){const l=o[f];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}Pt.DEFAULT_UP=new ee(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new ee,Un=new ee,ys=new ee,Bn=new ee,Wr=new ee,kr=new ee,Du=new ee,Ms=new ee,As=new ee,Ss=new ee;let Zi=!1;class En{constructor(e=new ee,t=new ee,r=new ee){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),mn.subVectors(e,t),i.cross(mn);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,r,i,a){mn.subVectors(i,t),Un.subVectors(r,t),ys.subVectors(e,t);const s=mn.dot(mn),o=mn.dot(Un),c=mn.dot(ys),f=Un.dot(Un),l=Un.dot(ys),u=s*f-o*o;if(u===0)return a.set(-2,-1,-1);const h=1/u,m=(f*c-o*l)*h,v=(s*l-o*c)*h;return a.set(1-m-v,v,m)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,Bn),Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,r,i,a,s,o,c){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),this.getInterpolation(e,t,r,i,a,s,o,c)}static getInterpolation(e,t,r,i,a,s,o,c){return this.getBarycoord(e,t,r,i,Bn),c.setScalar(0),c.addScaledVector(a,Bn.x),c.addScaledVector(s,Bn.y),c.addScaledVector(o,Bn.z),c}static isFrontFacing(e,t,r,i){return mn.subVectors(r,t),Un.subVectors(e,t),mn.cross(Un).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,i,a){return Zi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zi=!0),En.getInterpolation(e,this.a,this.b,this.c,t,r,i,a)}getInterpolation(e,t,r,i,a){return En.getInterpolation(e,this.a,this.b,this.c,t,r,i,a)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,a=this.c;let s,o;Wr.subVectors(i,r),kr.subVectors(a,r),Ms.subVectors(e,r);const c=Wr.dot(Ms),f=kr.dot(Ms);if(c<=0&&f<=0)return t.copy(r);As.subVectors(e,i);const l=Wr.dot(As),u=kr.dot(As);if(l>=0&&u<=l)return t.copy(i);const h=c*u-l*f;if(h<=0&&c>=0&&l<=0)return s=c/(c-l),t.copy(r).addScaledVector(Wr,s);Ss.subVectors(e,a);const m=Wr.dot(Ss),v=kr.dot(Ss);if(v>=0&&m<=v)return t.copy(a);const d=m*f-c*v;if(d<=0&&f>=0&&v<=0)return o=f/(f-v),t.copy(r).addScaledVector(kr,o);const p=l*v-m*u;if(p<=0&&u-l>=0&&m-v>=0)return Du.subVectors(a,i),o=(u-l)/(u-l+(m-v)),t.copy(i).addScaledVector(Du,o);const g=1/(p+d+h);return s=d*g,o=h*g,t.copy(r).addScaledVector(Wr,s).addScaledVector(kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let nd=0;class wr extends Sr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Fi(),this.name="",this.type="Material",this.blending=ri,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fc,this.blendDst=hc,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(r.blending=this.blending),this.side!==tr&&(r.side=this.side),this.vertexColors&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=this.transparent),r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.stencilWrite=this.stencilWrite,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(r.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(r.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(r.wireframe=this.wireframe),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=this.flatShading),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=i(e.textures),s=i(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gn={h:0,s:0,l:0},Ki={h:0,s:0,l:0};function ws(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=dn.workingColorSpace){return this.r=e,this.g=t,this.b=r,dn.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=dn.workingColorSpace){if(e=zh(e,1),t=Bt(t,0,1),r=Bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=ws(s,a,e+1/3),this.g=ws(s,a,e),this.b=ws(s,a,e-1/3)}return dn.toWorkingColorSpace(this,i),this}setStyle(e,t=Ye){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ye){const r=Cc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ii(e.r),this.g=ii(e.g),this.b=ii(e.b),this}copyLinearToSRGB(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ye){return dn.fromWorkingColorSpace(It.copy(this),e),Math.round(Bt(It.r*255,0,255))*65536+Math.round(Bt(It.g*255,0,255))*256+Math.round(Bt(It.b*255,0,255))}getHexString(e=Ye){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dn.workingColorSpace){dn.fromWorkingColorSpace(It.copy(this),t);const r=It.r,i=It.g,a=It.b,s=Math.max(r,i,a),o=Math.min(r,i,a);let c,f;const l=(o+s)/2;if(o===s)c=0,f=0;else{const u=s-o;switch(f=l<=.5?u/(s+o):u/(2-s-o),s){case r:c=(i-a)/u+(i<a?6:0);break;case i:c=(a-r)/u+2;break;case a:c=(r-i)/u+4;break}c/=6}return e.h=c,e.s=f,e.l=l,e}getRGB(e,t=dn.workingColorSpace){return dn.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=Ye){dn.fromWorkingColorSpace(It.copy(this),e);const t=It.r,r=It.g,i=It.b;return e!==Ye?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(gn),gn.h+=e,gn.s+=t,gn.l+=r,this.setHSL(gn.h,gn.s,gn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(gn),e.getHSL(Ki);const r=fs(gn.h,Ki.h,t),i=fs(gn.s,Ki.s,t),a=fs(gn.l,Ki.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new je;je.NAMES=Cc;class mo extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new ee,Ji=new Qe;class Mt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=pu,this.updateRange={offset:0,count:-1},this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ji.fromBufferAttribute(this,t),Ji.applyMatrix3(e),this.setXY(t,Ji.x,Ji.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=en(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),r=en(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),r=en(r,this.array),i=en(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=en(t,this.array),r=en(r,this.array),i=en(i,this.array),a=en(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Fc extends Mt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rc extends Mt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Dn extends Mt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let rd=0;const un=new St,Ds=new Pt,Xr=new ee,nn=new Ri,Ei=new Ri,bt=new ee;class Ot extends Sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sc(e)?Rc:Fc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new Je().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,r){return un.makeTranslation(e,t,r),this.applyMatrix4(un),this}scale(e,t,r){return un.makeScale(e,t,r),this.applyMatrix4(un),this}lookAt(e){return Ds.lookAt(e),Ds.updateMatrix(),this.applyMatrix4(Ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xr).negate(),this.translate(Xr.x,Xr.y,Xr.z),this}setFromPoints(e){const t=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const a=t[r];nn.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(nn.min,Ei.min),nn.expandByPoint(bt),bt.addVectors(nn.max,Ei.max),nn.expandByPoint(bt)):(nn.expandByPoint(Ei.min),nn.expandByPoint(Ei.max))}nn.getCenter(r);let i=0;for(let a=0,s=e.count;a<s;a++)bt.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(bt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let f=0,l=o.count;f<l;f++)bt.fromBufferAttribute(o,f),c&&(Xr.fromBufferAttribute(e,f),bt.add(Xr)),i=Math.max(i,r.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,f=[],l=[];for(let E=0;E<o;E++)f[E]=new ee,l[E]=new ee;const u=new ee,h=new ee,m=new ee,v=new Qe,d=new Qe,p=new Qe,g=new ee,M=new ee;function _(E,N,L){u.fromArray(i,E*3),h.fromArray(i,N*3),m.fromArray(i,L*3),v.fromArray(s,E*2),d.fromArray(s,N*2),p.fromArray(s,L*2),h.sub(u),m.sub(u),d.sub(v),p.sub(v);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(g.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(P),M.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(P),f[E].add(g),f[N].add(g),f[L].add(g),l[E].add(M),l[N].add(M),l[L].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:r.length}]);for(let E=0,N=A.length;E<N;++E){const L=A[E],P=L.start,I=L.count;for(let z=P,O=P+I;z<O;z+=3)_(r[z+0],r[z+1],r[z+2])}const y=new ee,D=new ee,T=new ee,b=new ee;function x(E){T.fromArray(a,E*3),b.copy(T);const N=f[E];y.copy(N),y.sub(T.multiplyScalar(T.dot(N))).normalize(),D.crossVectors(b,N);const P=D.dot(l[E])<0?-1:1;c[E*4]=y.x,c[E*4+1]=y.y,c[E*4+2]=y.z,c[E*4+3]=P}for(let E=0,N=A.length;E<N;++E){const L=A[E],P=L.start,I=L.count;for(let z=P,O=P+I;z<O;z+=3)x(r[z+0]),x(r[z+1]),x(r[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let h=0,m=r.count;h<m;h++)r.setXYZ(h,0,0,0);const i=new ee,a=new ee,s=new ee,o=new ee,c=new ee,f=new ee,l=new ee,u=new ee;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,v),a.fromBufferAttribute(t,d),s.fromBufferAttribute(t,p),l.subVectors(s,a),u.subVectors(i,a),l.cross(u),o.fromBufferAttribute(r,v),c.fromBufferAttribute(r,d),f.fromBufferAttribute(r,p),o.add(l),c.add(l),f.add(l),r.setXYZ(v,o.x,o.y,o.z),r.setXYZ(d,c.x,c.y,c.z),r.setXYZ(p,f.x,f.y,f.z)}else for(let h=0,m=t.count;h<m;h+=3)i.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),l.subVectors(s,a),u.subVectors(i,a),l.cross(u),r.setXYZ(h+0,l.x,l.y,l.z),r.setXYZ(h+1,l.x,l.y,l.z),r.setXYZ(h+2,l.x,l.y,l.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,c){const f=o.array,l=o.itemSize,u=o.normalized,h=new f.constructor(c.length*l);let m=0,v=0;for(let d=0,p=c.length;d<p;d++){o.isInterleavedBufferAttribute?m=c[d]*o.data.stride+o.offset:m=c[d]*l;for(let g=0;g<l;g++)h[v++]=f[m++]}return new Mt(h,l,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ot,r=this.index.array,i=this.attributes;for(const o in i){const c=i[o],f=e(c,r);t.setAttribute(o,f)}const a=this.morphAttributes;for(const o in a){const c=[],f=a[o];for(let l=0,u=f.length;l<u;l++){const h=f[l],m=e(h,r);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const f=s[o];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const f in c)c[f]!==void 0&&(e[f]=c[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const c in r){const f=r[c];e.data.attributes[c]=f.toJSON(e.data)}const i={};let a=!1;for(const c in this.morphAttributes){const f=this.morphAttributes[c],l=[];for(let u=0,h=f.length;u<h;u++){const m=f[u];l.push(m.toJSON(e.data))}l.length>0&&(i[c]=l,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const f in i){const l=i[f];this.setAttribute(f,l.clone(t))}const a=e.morphAttributes;for(const f in a){const l=[],u=a[f];for(let h=0,m=u.length;h<m;h++)l.push(u[h].clone(t));this.morphAttributes[f]=l}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let f=0,l=s.length;f<l;f++){const u=s[f];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new St,fr=new po,Qi=new Li,Tu=new ee,qr=new ee,$r=new ee,Yr=new ee,bs=new ee,ji=new ee,ea=new Qe,ta=new Qe,na=new Qe,Cu=new ee,Fu=new ee,Ru=new ee,ra=new ee,ia=new ee;class Sn extends Pt{constructor(e=new Ot,t=new mo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){ji.set(0,0,0);for(let c=0,f=a.length;c<f;c++){const l=o[c],u=a[c];l!==0&&(bs.fromBufferAttribute(u,e),s?ji.addScaledVector(bs,l):ji.addScaledVector(bs.sub(t),l))}t.add(ji)}return t}raycast(e,t){const r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Qi.copy(r.boundingSphere),Qi.applyMatrix4(a),fr.copy(e.ray).recast(e.near),!(Qi.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Qi,Tu)===null||fr.origin.distanceToSquared(Tu)>(e.far-e.near)**2))&&(bu.copy(a).invert(),fr.copy(e.ray).applyMatrix4(bu),!(r.boundingBox!==null&&fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fr)))}_computeIntersections(e,t,r){let i;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,f=a.attributes.uv,l=a.attributes.uv1,u=a.attributes.normal,h=a.groups,m=a.drawRange;if(o!==null)if(Array.isArray(s))for(let v=0,d=h.length;v<d;v++){const p=h[v],g=s[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,y=_;A<y;A+=3){const D=o.getX(A),T=o.getX(A+1),b=o.getX(A+2);i=aa(this,g,e,r,f,l,u,D,T,b),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),d=Math.min(o.count,m.start+m.count);for(let p=v,g=d;p<g;p+=3){const M=o.getX(p),_=o.getX(p+1),A=o.getX(p+2);i=aa(this,s,e,r,f,l,u,M,_,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(s))for(let v=0,d=h.length;v<d;v++){const p=h[v],g=s[p.materialIndex],M=Math.max(p.start,m.start),_=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=M,y=_;A<y;A+=3){const D=A,T=A+1,b=A+2;i=aa(this,g,e,r,f,l,u,D,T,b),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const v=Math.max(0,m.start),d=Math.min(c.count,m.start+m.count);for(let p=v,g=d;p<g;p+=3){const M=p,_=p+1,A=p+2;i=aa(this,s,e,r,f,l,u,M,_,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function id(n,e,t,r,i,a,s,o){let c;if(e.side===qt?c=r.intersectTriangle(s,a,i,!0,o):c=r.intersectTriangle(i,a,s,e.side===tr,o),c===null)return null;ia.copy(o),ia.applyMatrix4(n.matrixWorld);const f=t.ray.origin.distanceTo(ia);return f<t.near||f>t.far?null:{distance:f,point:ia.clone(),object:n}}function aa(n,e,t,r,i,a,s,o,c,f){n.getVertexPosition(o,qr),n.getVertexPosition(c,$r),n.getVertexPosition(f,Yr);const l=id(n,e,t,r,qr,$r,Yr,ra);if(l){i&&(ea.fromBufferAttribute(i,o),ta.fromBufferAttribute(i,c),na.fromBufferAttribute(i,f),l.uv=En.getInterpolation(ra,qr,$r,Yr,ea,ta,na,new Qe)),a&&(ea.fromBufferAttribute(a,o),ta.fromBufferAttribute(a,c),na.fromBufferAttribute(a,f),l.uv1=En.getInterpolation(ra,qr,$r,Yr,ea,ta,na,new Qe),l.uv2=l.uv1),s&&(Cu.fromBufferAttribute(s,o),Fu.fromBufferAttribute(s,c),Ru.fromBufferAttribute(s,f),l.normal=En.getInterpolation(ra,qr,$r,Yr,Cu,Fu,Ru,new ee),l.normal.dot(r.direction)>0&&l.normal.multiplyScalar(-1));const u={a:o,b:c,c:f,normal:new ee,materialIndex:0};En.getNormal(qr,$r,Yr,u.normal),l.face=u}return l}class Pi extends Ot{constructor(e=1,t=1,r=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const c=[],f=[],l=[],u=[];let h=0,m=0;v("z","y","x",-1,-1,r,t,e,s,a,0),v("z","y","x",1,-1,r,t,-e,s,a,1),v("x","z","y",1,1,e,r,t,i,s,2),v("x","z","y",1,-1,e,r,-t,i,s,3),v("x","y","z",1,-1,e,t,r,i,a,4),v("x","y","z",-1,-1,e,t,-r,i,a,5),this.setIndex(c),this.setAttribute("position",new Dn(f,3)),this.setAttribute("normal",new Dn(l,3)),this.setAttribute("uv",new Dn(u,2));function v(d,p,g,M,_,A,y,D,T,b,x){const E=A/T,N=y/b,L=A/2,P=y/2,I=D/2,z=T+1,O=b+1;let R=0,G=0;const X=new ee;for(let U=0;U<O;U++){const H=U*N-P;for(let W=0;W<z;W++){const J=W*E-L;X[d]=J*M,X[p]=H*_,X[g]=I,f.push(X.x,X.y,X.z),X[d]=0,X[p]=0,X[g]=D>0?1:-1,l.push(X.x,X.y,X.z),u.push(W/T),u.push(1-U/b),R+=1}}for(let U=0;U<b;U++)for(let H=0;H<T;H++){const W=h+H+z*U,J=h+H+z*(U+1),q=h+(H+1)+z*(U+1),j=h+(H+1)+z*U;c.push(W,J,j),c.push(J,q,j),G+=6}o.addGroup(m,G,x),m+=G,h+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function li(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const r=li(n[t]);for(const i in r)e[i]=r[i]}return e}function ad(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Lc(n){return n.getRenderTarget()===null?n.outputColorSpace:Fn}const sd={clone:li,merge:Vt};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ar extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=li(e.uniforms),this.uniformsGroups=ad(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Pc extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends Pc{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,f=s.fullHeight;a+=s.offsetX*i/c,t-=s.offsetY*r/f,i*=s.width/c,r*=s.height/f}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Zr=-90,Kr=1;class ld extends Pt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null;const i=new fn(Zr,Kr,e,t);i.layers=this.layers,this.add(i);const a=new fn(Zr,Kr,e,t);a.layers=this.layers,this.add(a);const s=new fn(Zr,Kr,e,t);s.layers=this.layers,this.add(s);const o=new fn(Zr,Kr,e,t);o.layers=this.layers,this.add(o);const c=new fn(Zr,Kr,e,t);c.layers=this.layers,this.add(c);const f=new fn(Zr,Kr,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,a,s,o,c]=t;for(const f of t)this.remove(f);if(e===Gn)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_a)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const r=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,a,s,o,c,f]=this.children,l=e.getRenderTarget(),u=e.toneMapping,h=e.xr.enabled;e.toneMapping=Vn,e.xr.enabled=!1;const m=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0),e.render(t,i),e.setRenderTarget(r,1),e.render(t,a),e.setRenderTarget(r,2),e.render(t,s),e.setRenderTarget(r,3),e.render(t,o),e.setRenderTarget(r,4),e.render(t,c),r.texture.generateMipmaps=m,e.setRenderTarget(r,5),e.render(t,f),e.setRenderTarget(l),e.toneMapping=u,e.xr.enabled=h,r.texture.needsPMREMUpdate=!0}}class Nc extends $t{constructor(e,t,r,i,a,s,o,c,f,l){e=e!==void 0?e:[],t=t!==void 0?t:si,super(e,t,r,i,a,s,o,c,f,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cd extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];t.encoding!==void 0&&(Ai("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===_r?Ye:xr),this.texture=new Nc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pi(5,5,5),a=new Ar({name:"CubemapFromEquirect",uniforms:li(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qt,blending:Qn});a.uniforms.tEquirect.value=t;const s=new Sn(i,a),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=cn),new ld(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(a)}}const Ts=new ee,fd=new ee,hd=new Je;class dr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=Ts.subVectors(r,t).cross(fd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ts),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||hd.getNormalMatrix(e),i=this.coplanarPoint(Ts).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Li,sa=new ee;class Ic{constructor(e=new dr,t=new dr,r=new dr,i=new dr,a=new dr,s=new dr){this.planes=[e,t,r,i,a,s]}set(e,t,r,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Gn){const r=this.planes,i=e.elements,a=i[0],s=i[1],o=i[2],c=i[3],f=i[4],l=i[5],u=i[6],h=i[7],m=i[8],v=i[9],d=i[10],p=i[11],g=i[12],M=i[13],_=i[14],A=i[15];if(r[0].setComponents(c-a,h-f,p-m,A-g).normalize(),r[1].setComponents(c+a,h+f,p+m,A+g).normalize(),r[2].setComponents(c+s,h+l,p+v,A+M).normalize(),r[3].setComponents(c-s,h-l,p-v,A-M).normalize(),r[4].setComponents(c-o,h-u,p-d,A-_).normalize(),t===Gn)r[5].setComponents(c+o,h+u,p+d,A+_).normalize();else if(t===_a)r[5].setComponents(o,u,d,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(sa.x=i.normal.x>0?e.max.x:e.min.x,sa.y=i.normal.y>0?e.max.y:e.min.y,sa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(sa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uc(){let n=null,e=!1,t=null,r=null;function i(a,s){t(a,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function dd(n,e){const t=e.isWebGL2,r=new WeakMap;function i(f,l){const u=f.array,h=f.usage,m=n.createBuffer();n.bindBuffer(l,m),n.bufferData(l,u,h),f.onUploadCallback();let v;if(u instanceof Float32Array)v=n.FLOAT;else if(u instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=n.SHORT;else if(u instanceof Uint32Array)v=n.UNSIGNED_INT;else if(u instanceof Int32Array)v=n.INT;else if(u instanceof Int8Array)v=n.BYTE;else if(u instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:f.version}}function a(f,l,u){const h=l.array,m=l.updateRange;n.bindBuffer(u,f),m.count===-1?n.bufferSubData(u,0,h):(t?n.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(u,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),l.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),r.get(f)}function o(f){f.isInterleavedBufferAttribute&&(f=f.data);const l=r.get(f);l&&(n.deleteBuffer(l.buffer),r.delete(f))}function c(f,l){if(f.isGLBufferAttribute){const h=r.get(f);(!h||h.version<f.version)&&r.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const u=r.get(f);u===void 0?r.set(f,i(f,l)):u.version<f.version&&(a(u.buffer,f,l),u.version=f.version)}return{get:s,remove:o,update:c}}class za extends Ot{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const a=e/2,s=t/2,o=Math.floor(r),c=Math.floor(i),f=o+1,l=c+1,u=e/o,h=t/c,m=[],v=[],d=[],p=[];for(let g=0;g<l;g++){const M=g*h-s;for(let _=0;_<f;_++){const A=_*u-a;v.push(A,-M,0),d.push(0,0,1),p.push(_/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<o;M++){const _=M+f*g,A=M+f*(g+1),y=M+1+f*(g+1),D=M+1+f*g;m.push(_,A,D),m.push(A,y,D)}this.setIndex(m),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(d,3)),this.setAttribute("uv",new Dn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.widthSegments,e.heightSegments)}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ed=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,Dd=`#ifdef USE_BUMPMAP
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Id=`#define PI 3.141592653589793
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
} // validated`,Ud=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kd=`#ifdef USE_ENVMAP
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
#endif`,Xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,qd=`#ifdef USE_ENVMAP
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
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
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
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jd=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ip=`uniform bool receiveShadow;
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
#endif`,ap=`#ifdef USE_ENVMAP
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
#endif`,sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cp=`PhysicalMaterial material;
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
#endif`,fp=`struct PhysicalMaterial {
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
}`,hp=`
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
#endif`,dp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mp=`#if defined( USE_POINTS_UV )
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
#endif`,Ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Np=`#ifdef USE_NORMALMAP
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
#endif`,Ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Up=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kp=`float getShadowMask() {
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
}`,Jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,tm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,im=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,am=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,xm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Dm=`uniform vec3 diffuse;
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
}`,bm=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
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
}`,Cm=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Rm=`#define NORMAL
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
}`,Lm=`#define NORMAL
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
}`,Pm=`#define PHONG
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
}`,Nm=`#define PHONG
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
}`,Im=`#define STANDARD
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
}`,Um=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,Om=`#define TOON
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
}`,zm=`uniform float size;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Hm=`#include <common>
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
}`,Vm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,km=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:vd,alphatest_fragment:_d,alphatest_pars_fragment:xd,aomap_fragment:Ed,aomap_pars_fragment:yd,begin_vertex:Md,beginnormal_vertex:Ad,bsdfs:Sd,iridescence_fragment:wd,bumpmap_pars_fragment:Dd,clipping_planes_fragment:bd,clipping_planes_pars_fragment:Td,clipping_planes_pars_vertex:Cd,clipping_planes_vertex:Fd,color_fragment:Rd,color_pars_fragment:Ld,color_pars_vertex:Pd,color_vertex:Nd,common:Id,cube_uv_reflection_fragment:Ud,defaultnormal_vertex:Bd,displacementmap_pars_vertex:Od,displacementmap_vertex:zd,emissivemap_fragment:Gd,emissivemap_pars_fragment:Hd,colorspace_fragment:Vd,colorspace_pars_fragment:Wd,envmap_fragment:kd,envmap_common_pars_fragment:Xd,envmap_pars_fragment:qd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:ap,envmap_vertex:Yd,fog_vertex:Zd,fog_pars_vertex:Kd,fog_fragment:Jd,fog_pars_fragment:Qd,gradientmap_pars_fragment:jd,lightmap_fragment:ep,lightmap_pars_fragment:tp,lights_lambert_fragment:np,lights_lambert_pars_fragment:rp,lights_pars_begin:ip,lights_toon_fragment:sp,lights_toon_pars_fragment:op,lights_phong_fragment:up,lights_phong_pars_fragment:lp,lights_physical_fragment:cp,lights_physical_pars_fragment:fp,lights_fragment_begin:hp,lights_fragment_maps:dp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:vp,logdepthbuf_vertex:_p,map_fragment:xp,map_pars_fragment:Ep,map_particle_fragment:yp,map_particle_pars_fragment:Mp,metalnessmap_fragment:Ap,metalnessmap_pars_fragment:Sp,morphcolor_vertex:wp,morphnormal_vertex:Dp,morphtarget_pars_vertex:bp,morphtarget_vertex:Tp,normal_fragment_begin:Cp,normal_fragment_maps:Fp,normal_pars_fragment:Rp,normal_pars_vertex:Lp,normal_vertex:Pp,normalmap_pars_fragment:Np,clearcoat_normal_fragment_begin:Ip,clearcoat_normal_fragment_maps:Up,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:Op,opaque_fragment:zp,packing:Gp,premultiplied_alpha_fragment:Hp,project_vertex:Vp,dithering_fragment:Wp,dithering_pars_fragment:kp,roughnessmap_fragment:Xp,roughnessmap_pars_fragment:qp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Yp,shadowmap_vertex:Zp,shadowmask_pars_fragment:Kp,skinbase_vertex:Jp,skinning_pars_vertex:Qp,skinning_vertex:jp,skinnormal_vertex:em,specularmap_fragment:tm,specularmap_pars_fragment:nm,tonemapping_fragment:rm,tonemapping_pars_fragment:im,transmission_fragment:am,transmission_pars_fragment:sm,uv_pars_fragment:om,uv_pars_vertex:um,uv_vertex:lm,worldpos_vertex:cm,background_vert:fm,background_frag:hm,backgroundCube_vert:dm,backgroundCube_frag:pm,cube_vert:mm,cube_frag:gm,depth_vert:vm,depth_frag:_m,distanceRGBA_vert:xm,distanceRGBA_frag:Em,equirect_vert:ym,equirect_frag:Mm,linedashed_vert:Am,linedashed_frag:Sm,meshbasic_vert:wm,meshbasic_frag:Dm,meshlambert_vert:bm,meshlambert_frag:Tm,meshmatcap_vert:Cm,meshmatcap_frag:Fm,meshnormal_vert:Rm,meshnormal_frag:Lm,meshphong_vert:Pm,meshphong_frag:Nm,meshphysical_vert:Im,meshphysical_frag:Um,meshtoon_vert:Bm,meshtoon_frag:Om,points_vert:zm,points_frag:Gm,shadow_vert:Hm,shadow_frag:Vm,sprite_vert:Wm,sprite_frag:km},De={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Tn={basic:{uniforms:Vt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Vt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Vt([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Vt([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Vt([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Vt([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Vt([De.points,De.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Vt([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Vt([De.common,De.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Vt([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Vt([De.sprite,De.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Vt([De.common,De.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Vt([De.lights,De.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Tn.physical={uniforms:Vt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const oa={r:0,b:0,g:0};function Xm(n,e,t,r,i,a,s){const o=new je(0);let c=a===!0?0:1,f,l,u=null,h=0,m=null;function v(p,g){let M=!1,_=g.isScene===!0?g.background:null;switch(_&&_.isTexture&&(_=(g.backgroundBlurriness>0?t:e).get(_)),_===null?d(o,c):_&&_.isColor&&(d(_,1),M=!0),n.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":r.buffers.color.setClear(0,0,0,1,s),M=!0;break;case"alpha-blend":r.buffers.color.setClear(0,0,0,0,s),M=!0;break}(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ba)?(l===void 0&&(l=new Sn(new Pi(1,1,1),new Ar({name:"BackgroundCubeMaterial",uniforms:li(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(D,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,l.material.toneMapped=_.colorSpace!==Ye,(u!==_||h!==_.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=_,h=_.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(f===void 0&&(f=new Sn(new za(2,2),new Ar({name:"BackgroundMaterial",uniforms:li(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=_,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=_.colorSpace!==Ye,_.matrixAutoUpdate===!0&&_.updateMatrix(),f.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||h!==_.version||m!==n.toneMapping)&&(f.material.needsUpdate=!0,u=_,h=_.version,m=n.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null))}function d(p,g){p.getRGB(oa,Lc(n)),r.buffers.color.setClear(oa.r,oa.g,oa.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(p,g=1){o.set(p),c=g,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,d(o,c)},render:v}}function qm(n,e,t,r){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||a!==null,o={},c=p(null);let f=c,l=!1;function u(I,z,O,R,G){let X=!1;if(s){const U=d(R,O,z);f!==U&&(f=U,m(f.object)),X=g(I,R,O,G),X&&M(I,R,O,G)}else{const U=z.wireframe===!0;(f.geometry!==R.id||f.program!==O.id||f.wireframe!==U)&&(f.geometry=R.id,f.program=O.id,f.wireframe=U,X=!0)}G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(X||l)&&(l=!1,b(I,z,O,R),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function h(){return r.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function m(I){return r.isWebGL2?n.bindVertexArray(I):a.bindVertexArrayOES(I)}function v(I){return r.isWebGL2?n.deleteVertexArray(I):a.deleteVertexArrayOES(I)}function d(I,z,O){const R=O.wireframe===!0;let G=o[I.id];G===void 0&&(G={},o[I.id]=G);let X=G[z.id];X===void 0&&(X={},G[z.id]=X);let U=X[R];return U===void 0&&(U=p(h()),X[R]=U),U}function p(I){const z=[],O=[],R=[];for(let G=0;G<i;G++)z[G]=0,O[G]=0,R[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:R,object:I,attributes:{},index:null}}function g(I,z,O,R){const G=f.attributes,X=z.attributes;let U=0;const H=O.getAttributes();for(const W in H)if(H[W].location>=0){const q=G[W];let j=X[W];if(j===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),q===void 0||q.attribute!==j||j&&q.data!==j.data)return!0;U++}return f.attributesNum!==U||f.index!==R}function M(I,z,O,R){const G={},X=z.attributes;let U=0;const H=O.getAttributes();for(const W in H)if(H[W].location>=0){let q=X[W];q===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(q=I.instanceColor));const j={};j.attribute=q,q&&q.data&&(j.data=q.data),G[W]=j,U++}f.attributes=G,f.attributesNum=U,f.index=R}function _(){const I=f.newAttributes;for(let z=0,O=I.length;z<O;z++)I[z]=0}function A(I){y(I,0)}function y(I,z){const O=f.newAttributes,R=f.enabledAttributes,G=f.attributeDivisors;O[I]=1,R[I]===0&&(n.enableVertexAttribArray(I),R[I]=1),G[I]!==z&&((r.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),G[I]=z)}function D(){const I=f.newAttributes,z=f.enabledAttributes;for(let O=0,R=z.length;O<R;O++)z[O]!==I[O]&&(n.disableVertexAttribArray(O),z[O]=0)}function T(I,z,O,R,G,X,U){U===!0?n.vertexAttribIPointer(I,z,O,G,X):n.vertexAttribPointer(I,z,O,R,G,X)}function b(I,z,O,R){if(r.isWebGL2===!1&&(I.isInstancedMesh||R.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const G=R.attributes,X=O.getAttributes(),U=z.defaultAttributeValues;for(const H in X){const W=X[H];if(W.location>=0){let J=G[H];if(J===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),J!==void 0){const q=J.normalized,j=J.itemSize,ne=t.get(J);if(ne===void 0)continue;const oe=ne.buffer,se=ne.type,pe=ne.bytesPerElement,fe=r.isWebGL2===!0&&(se===n.INT||se===n.UNSIGNED_INT||J.gpuType===mc);if(J.isInterleavedBufferAttribute){const Ae=J.data,Z=Ae.stride,Se=J.offset;if(Ae.isInstancedInterleavedBuffer){for(let de=0;de<W.locationSize;de++)y(W.location+de,Ae.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let de=0;de<W.locationSize;de++)A(W.location+de);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let de=0;de<W.locationSize;de++)T(W.location+de,j/W.locationSize,se,q,Z*pe,(Se+j/W.locationSize*de)*pe,fe)}else{if(J.isInstancedBufferAttribute){for(let Ae=0;Ae<W.locationSize;Ae++)y(W.location+Ae,J.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ae=0;Ae<W.locationSize;Ae++)A(W.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,oe);for(let Ae=0;Ae<W.locationSize;Ae++)T(W.location+Ae,j/W.locationSize,se,q,j*pe,j/W.locationSize*Ae*pe,fe)}}else if(U!==void 0){const q=U[H];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(W.location,q);break;case 3:n.vertexAttrib3fv(W.location,q);break;case 4:n.vertexAttrib4fv(W.location,q);break;default:n.vertexAttrib1fv(W.location,q)}}}}D()}function x(){L();for(const I in o){const z=o[I];for(const O in z){const R=z[O];for(const G in R)v(R[G].object),delete R[G];delete z[O]}delete o[I]}}function E(I){if(o[I.id]===void 0)return;const z=o[I.id];for(const O in z){const R=z[O];for(const G in R)v(R[G].object),delete R[G];delete z[O]}delete o[I.id]}function N(I){for(const z in o){const O=o[z];if(O[I.id]===void 0)continue;const R=O[I.id];for(const G in R)v(R[G].object),delete R[G];delete O[I.id]}}function L(){P(),l=!0,f!==c&&(f=c,m(f.object))}function P(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:L,resetDefaultState:P,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:N,initAttributes:_,enableAttribute:A,disableUnusedAttributes:D}}function $m(n,e,t,r){const i=r.isWebGL2;let a;function s(f){a=f}function o(f,l){n.drawArrays(a,f,l),t.update(l,a,1)}function c(f,l,u){if(u===0)return;let h,m;if(i)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](a,f,l,u),t.update(l,a,u)}this.setMode=s,this.render=o,this.renderInstances=c}function Ym(n,e,t){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const c=a(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const f=s||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,A=s||e.has("OES_texture_float"),y=_&&A,D=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:f,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:l,maxTextures:u,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:A,floatVertexTextures:y,maxSamples:D}}function Zm(n){const e=this;let t=null,r=0,i=!1,a=!1;const s=new dr,o=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const m=u.length!==0||h||r!==0||i;return i=h,r=u.length,m},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,h){t=l(u,h,0)},this.setState=function(u,h,m){const v=u.clippingPlanes,d=u.clipIntersection,p=u.clipShadows,g=n.get(u);if(!i||v===null||v.length===0||a&&!p)a?l(null):f();else{const M=a?0:r,_=M*4;let A=g.clippingState||null;c.value=A,A=l(v,h,_,m);for(let y=0;y!==_;++y)A[y]=t[y];g.clippingState=A,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=M}};function f(){c.value!==t&&(c.value=t,c.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function l(u,h,m,v){const d=u!==null?u.length:0;let p=null;if(d!==0){if(p=c.value,v!==!0||p===null){const g=m+d*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<g)&&(p=new Float32Array(g));for(let _=0,A=m;_!==d;++_,A+=4)s.copy(u[_]).applyMatrix4(M,o),s.normal.toArray(p,A),p[A+3]=s.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function Km(n){let e=new WeakMap;function t(s,o){return o===Hs?s.mapping=si:o===Vs&&(s.mapping=oi),s}function r(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===Hs||o===Vs)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const f=new cd(c.height/2);return f.fromEquirectangularTexture(n,s),e.set(s,f),s.addEventListener("dispose",i),t(f.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class Bc extends Pc{constructor(e=-1,t=1,r=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,s=a+f*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ei=4,Lu=[.125,.215,.35,.446,.526,.582],mr=20,Cs=new Bc,Pu=new je;let Fs=null;const pr=(1+Math.sqrt(5))/2,Jr=1/pr,Nu=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,pr,Jr),new ee(0,pr,-Jr),new ee(Jr,0,pr),new ee(-Jr,0,pr),new ee(pr,Jr,0),new ee(-pr,Jr,0)];class Iu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){Fs=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fs),e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===si||e.mapping===oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fs=this._renderer.getRenderTarget();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:wi,format:An,colorSpace:Fn,depthBuffer:!1},i=Uu(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uu(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(a)),this._blurMaterial=Qm(a,e,t)}return i}_compileMaterial(e){const t=new Sn(this._lodPlanes[0],e);this._renderer.compile(t,Cs)}_sceneToCubeUV(e,t,r,i){const o=new fn(90,1,t,r),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],l=this._renderer,u=l.autoClear,h=l.toneMapping;l.getClearColor(Pu),l.toneMapping=Vn,l.autoClear=!1;const m=new mo({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),v=new Sn(new Pi,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(Pu),d=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(o.up.set(0,c[g],0),o.lookAt(f[g],0,0)):M===1?(o.up.set(0,0,c[g]),o.lookAt(0,f[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,f[g]));const _=this._cubeSize;ua(i,M*_,g>2?_:0,_,_),l.setRenderTarget(i),d&&l.render(v,o),l.render(e,o)}v.geometry.dispose(),v.material.dispose(),l.toneMapping=h,l.autoClear=u,e.background=p}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===si||e.mapping===oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new Sn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ua(t,0,0,3*c,2*c),r.setRenderTarget(t),r.render(s,Cs)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Nu[(i-1)%Nu.length];this._blur(e,i-1,i,a,s)}t.autoClear=r}_blur(e,t,r,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",a),this._halfBlur(s,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,s,o){const c=this._renderer,f=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,u=new Sn(this._lodPlanes[i],f),h=f.uniforms,m=this._sizeLods[r]-1,v=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*mr-1),d=a/v,p=isFinite(a)?1+Math.floor(l*d):mr;p>mr&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mr}`);const g=[];let M=0;for(let T=0;T<mr;++T){const b=T/d,x=Math.exp(-b*b/2);g.push(x),T===0?M+=x:T<p&&(M+=2*x)}for(let T=0;T<g.length;T++)g[T]=g[T]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=g,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-r;const A=this._sizeLods[i],y=3*A*(i>_-ei?i-_+ei:0),D=4*(this._cubeSize-A);ua(t,y,D,3*A,2*A),c.setRenderTarget(t),c.render(u,Cs)}}function Jm(n){const e=[],t=[],r=[];let i=n;const a=n-ei+1+Lu.length;for(let s=0;s<a;s++){const o=Math.pow(2,i);t.push(o);let c=1/o;s>n-ei?c=Lu[s-n+ei-1]:s===0&&(c=0),r.push(c);const f=1/(o-2),l=-f,u=1+f,h=[l,l,u,l,u,u,l,l,u,u,l,u],m=6,v=6,d=3,p=2,g=1,M=new Float32Array(d*v*m),_=new Float32Array(p*v*m),A=new Float32Array(g*v*m);for(let D=0;D<m;D++){const T=D%3*2/3-1,b=D>2?0:-1,x=[T,b,0,T+2/3,b,0,T+2/3,b+1,0,T,b,0,T+2/3,b+1,0,T,b+1,0];M.set(x,d*v*D),_.set(h,p*v*D);const E=[D,D,D,D,D,D];A.set(E,g*v*D)}const y=new Ot;y.setAttribute("position",new Mt(M,d)),y.setAttribute("uv",new Mt(_,p)),y.setAttribute("faceIndex",new Mt(A,g)),e.push(y),i>ei&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Uu(n,e,t){const r=new yr(n,e,t);return r.texture.mapping=Ba,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ua(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function Qm(n,e,t){const r=new Float32Array(mr),i=new ee(0,1,0);return new Ar({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:go(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Bu(){return new Ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:go(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ou(){return new Ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:go(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function go(){return`

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
	`}function jm(n){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const c=o.mapping,f=c===Hs||c===Vs,l=c===si||c===oi;if(f||l)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Iu(n)),u=f?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(f&&u&&u.height>0||l&&u&&i(u)){t===null&&(t=new Iu(n));const h=f?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",a),h.texture}else return null}}}return o}function i(o){let c=0;const f=6;for(let l=0;l<f;l++)o[l]!==void 0&&c++;return c===f}function a(o){const c=o.target;c.removeEventListener("dispose",a);const f=e.get(c);f!==void 0&&(e.delete(c),f.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function e0(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const i=t(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function t0(n,e,t,r){const i={},a=new WeakMap;function s(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const d=h.morphAttributes[v];for(let p=0,g=d.length;p<g;p++)e.remove(d[p])}h.removeEventListener("dispose",s),delete i[h.id];const m=a.get(h);m&&(e.remove(m),a.delete(h)),r.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(u,h){return i[h.id]===!0||(h.addEventListener("dispose",s),i[h.id]=!0,t.memory.geometries++),h}function c(u){const h=u.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const v in m){const d=m[v];for(let p=0,g=d.length;p<g;p++)e.update(d[p],n.ARRAY_BUFFER)}}function f(u){const h=[],m=u.index,v=u.attributes.position;let d=0;if(m!==null){const M=m.array;d=m.version;for(let _=0,A=M.length;_<A;_+=3){const y=M[_+0],D=M[_+1],T=M[_+2];h.push(y,D,D,T,T,y)}}else{const M=v.array;d=v.version;for(let _=0,A=M.length/3-1;_<A;_+=3){const y=_+0,D=_+1,T=_+2;h.push(y,D,D,T,T,y)}}const p=new(Sc(h)?Rc:Fc)(h,1);p.version=d;const g=a.get(u);g&&e.remove(g),a.set(u,p)}function l(u){const h=a.get(u);if(h){const m=u.index;m!==null&&h.version<m.version&&f(u)}else f(u);return a.get(u)}return{get:o,update:c,getWireframeAttribute:l}}function n0(n,e,t,r){const i=r.isWebGL2;let a;function s(h){a=h}let o,c;function f(h){o=h.type,c=h.bytesPerElement}function l(h,m){n.drawElements(a,m,o,h*c),t.update(m,a,1)}function u(h,m,v){if(v===0)return;let d,p;if(i)d=n,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](a,m,o,h*c,v),t.update(m,a,v)}this.setMode=s,this.setIndex=f,this.render=l,this.renderInstances=u}function r0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function i0(n,e){return n[0]-e[0]}function a0(n,e){return Math.abs(e[1])-Math.abs(n[1])}function s0(n,e,t){const r={},i=new Float32Array(8),a=new WeakMap,s=new Rt,o=[];for(let f=0;f<8;f++)o[f]=[f,0];function c(f,l,u){const h=f.morphTargetInfluences;if(e.isWebGL2===!0){const v=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,d=v!==void 0?v.length:0;let p=a.get(l);if(p===void 0||p.count!==d){let z=function(){P.dispose(),a.delete(l),l.removeEventListener("dispose",z)};var m=z;p!==void 0&&p.texture.dispose();const _=l.morphAttributes.position!==void 0,A=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,D=l.morphAttributes.position||[],T=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let x=0;_===!0&&(x=1),A===!0&&(x=2),y===!0&&(x=3);let E=l.attributes.position.count*x,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const L=new Float32Array(E*N*4*d),P=new bc(L,E,N,d);P.type=Kn,P.needsUpdate=!0;const I=x*4;for(let O=0;O<d;O++){const R=D[O],G=T[O],X=b[O],U=E*N*4*O;for(let H=0;H<R.count;H++){const W=H*I;_===!0&&(s.fromBufferAttribute(R,H),L[U+W+0]=s.x,L[U+W+1]=s.y,L[U+W+2]=s.z,L[U+W+3]=0),A===!0&&(s.fromBufferAttribute(G,H),L[U+W+4]=s.x,L[U+W+5]=s.y,L[U+W+6]=s.z,L[U+W+7]=0),y===!0&&(s.fromBufferAttribute(X,H),L[U+W+8]=s.x,L[U+W+9]=s.y,L[U+W+10]=s.z,L[U+W+11]=X.itemSize===4?s.w:1)}}p={count:d,texture:P,size:new Qe(E,N)},a.set(l,p),l.addEventListener("dispose",z)}let g=0;for(let _=0;_<h.length;_++)g+=h[_];const M=l.morphTargetsRelative?1:1-g;u.getUniforms().setValue(n,"morphTargetBaseInfluence",M),u.getUniforms().setValue(n,"morphTargetInfluences",h),u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const v=h===void 0?0:h.length;let d=r[l.id];if(d===void 0||d.length!==v){d=[];for(let A=0;A<v;A++)d[A]=[A,0];r[l.id]=d}for(let A=0;A<v;A++){const y=d[A];y[0]=A,y[1]=h[A]}d.sort(a0);for(let A=0;A<8;A++)A<v&&d[A][1]?(o[A][0]=d[A][0],o[A][1]=d[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(i0);const p=l.morphAttributes.position,g=l.morphAttributes.normal;let M=0;for(let A=0;A<8;A++){const y=o[A],D=y[0],T=y[1];D!==Number.MAX_SAFE_INTEGER&&T?(p&&l.getAttribute("morphTarget"+A)!==p[D]&&l.setAttribute("morphTarget"+A,p[D]),g&&l.getAttribute("morphNormal"+A)!==g[D]&&l.setAttribute("morphNormal"+A,g[D]),i[A]=T,M+=T):(p&&l.hasAttribute("morphTarget"+A)===!0&&l.deleteAttribute("morphTarget"+A),g&&l.hasAttribute("morphNormal"+A)===!0&&l.deleteAttribute("morphNormal"+A),i[A]=0)}const _=l.morphTargetsRelative?1:1-M;u.getUniforms().setValue(n,"morphTargetBaseInfluence",_),u.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:c}}function o0(n,e,t,r){let i=new WeakMap;function a(c){const f=r.render.frame,l=c.geometry,u=e.get(c,l);if(i.get(u)!==f&&(e.update(u),i.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),i.set(c,f))),c.isSkinnedMesh){const h=c.skeleton;i.get(h)!==f&&(h.update(),i.set(h,f))}return u}function s(){i=new WeakMap}function o(c){const f=c.target;f.removeEventListener("dispose",o),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:s}}const Oc=new $t,zc=new bc,Gc=new Yh,Hc=new Nc,zu=[],Gu=[],Hu=new Float32Array(16),Vu=new Float32Array(9),Wu=new Float32Array(4);function hi(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let a=zu[i];if(a===void 0&&(a=new Float32Array(i),zu[i]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Ga(n,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function u0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function l0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function c0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function f0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function h0(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(wt(t,r))return;Wu.set(r),n.uniformMatrix2fv(this.addr,!1,Wu),Dt(t,r)}}function d0(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(wt(t,r))return;Vu.set(r),n.uniformMatrix3fv(this.addr,!1,Vu),Dt(t,r)}}function p0(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(wt(t,r))return;Hu.set(r),n.uniformMatrix4fv(this.addr,!1,Hu),Dt(t,r)}}function m0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function v0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function _0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function x0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function y0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function M0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function A0(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2D(e||Oc,i)}function S0(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||Gc,i)}function w0(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||Hc,i)}function D0(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||zc,i)}function b0(n){switch(n){case 5126:return u0;case 35664:return l0;case 35665:return c0;case 35666:return f0;case 35674:return h0;case 35675:return d0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return v0;case 35669:case 35673:return _0;case 5125:return x0;case 36294:return E0;case 36295:return y0;case 36296:return M0;case 35678:case 36198:case 36298:case 36306:case 35682:return A0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return D0}}function T0(n,e){n.uniform1fv(this.addr,e)}function C0(n,e){const t=hi(e,this.size,2);n.uniform2fv(this.addr,t)}function F0(n,e){const t=hi(e,this.size,3);n.uniform3fv(this.addr,t)}function R0(n,e){const t=hi(e,this.size,4);n.uniform4fv(this.addr,t)}function L0(n,e){const t=hi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function P0(n,e){const t=hi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function N0(n,e){const t=hi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function I0(n,e){n.uniform1iv(this.addr,e)}function U0(n,e){n.uniform2iv(this.addr,e)}function B0(n,e){n.uniform3iv(this.addr,e)}function O0(n,e){n.uniform4iv(this.addr,e)}function z0(n,e){n.uniform1uiv(this.addr,e)}function G0(n,e){n.uniform2uiv(this.addr,e)}function H0(n,e){n.uniform3uiv(this.addr,e)}function V0(n,e){n.uniform4uiv(this.addr,e)}function W0(n,e,t){const r=this.cache,i=e.length,a=Ga(t,i);wt(r,a)||(n.uniform1iv(this.addr,a),Dt(r,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Oc,a[s])}function k0(n,e,t){const r=this.cache,i=e.length,a=Ga(t,i);wt(r,a)||(n.uniform1iv(this.addr,a),Dt(r,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Gc,a[s])}function X0(n,e,t){const r=this.cache,i=e.length,a=Ga(t,i);wt(r,a)||(n.uniform1iv(this.addr,a),Dt(r,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Hc,a[s])}function q0(n,e,t){const r=this.cache,i=e.length,a=Ga(t,i);wt(r,a)||(n.uniform1iv(this.addr,a),Dt(r,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||zc,a[s])}function $0(n){switch(n){case 5126:return T0;case 35664:return C0;case 35665:return F0;case 35666:return R0;case 35674:return L0;case 35675:return P0;case 35676:return N0;case 5124:case 35670:return I0;case 35667:case 35671:return U0;case 35668:case 35672:return B0;case 35669:case 35673:return O0;case 5125:return z0;case 36294:return G0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return k0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}class Y0{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.setValue=b0(t.type)}}class Z0{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.size=t.size,this.setValue=$0(t.type)}}class K0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,t[o.id],r)}}}const Rs=/(\w+)(\])?(\[|\.)?/g;function ku(n,e){n.seq.push(e),n.map[e.id]=e}function J0(n,e,t){const r=n.name,i=r.length;for(Rs.lastIndex=0;;){const a=Rs.exec(r),s=Rs.lastIndex;let o=a[1];const c=a[2]==="]",f=a[3];if(c&&(o=o|0),f===void 0||f==="["&&s+2===i){ku(t,f===void 0?new Y0(o,n,e):new Z0(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new K0(o),ku(t,u)),t=u}}}class ga{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const a=e.getActiveUniform(t,i),s=e.getUniformLocation(t,a.name);J0(a,s,this)}}setValue(e,t,r,i){const a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=r[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&r.push(s)}return r}}function Xu(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}let Q0=0;function j0(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=i;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function eg(n){switch(n){case Fn:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function qu(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+j0(n.getShaderSource(e),s)}else return i}function tg(n,e){const t=eg(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ng(n,e){let t;switch(e){case hh:t="Linear";break;case dh:t="Reinhard";break;case ph:t="OptimizedCineon";break;case mh:t="ACESFilmic";break;case gh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function ig(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function ag(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const a=n.getActiveAttrib(e,i),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Mi(n){return n!==""}function $u(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ys(n){return n.replace(sg,ug)}const og=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ug(n,e){let t=$e[e];if(t===void 0){const r=og.get(e);if(r!==void 0)t=$e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ys(t)}const lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zu(n){return n.replace(lg,cg)}function cg(n,e,t,r){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function Ku(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===kf?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function hg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case si:case oi:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function dg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case oi:e="ENVMAP_MODE_REFRACTION";break}return e}function pg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case dc:e="ENVMAP_BLENDING_MULTIPLY";break;case ch:e="ENVMAP_BLENDING_MIX";break;case fh:e="ENVMAP_BLENDING_ADD";break}return e}function mg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function gg(n,e,t,r){const i=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=fg(t),f=hg(t),l=dg(t),u=pg(t),h=mg(t),m=t.isWebGL2?"":rg(t),v=ig(a),d=i.createProgram();let p,g,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Mi).join(`
`),p.length>0&&(p+=`
`),g=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Mi).join(`
`),g.length>0&&(g+=`
`)):(p=[Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),g=[m,Ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Vn?ng("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,tg("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),s=Ys(s),s=$u(s,t),s=Yu(s,t),o=Ys(o),o=$u(o,t),o=Yu(o,t),s=Zu(s),o=Zu(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const _=M+p+s,A=M+g+o,y=Xu(i,i.VERTEX_SHADER,_),D=Xu(i,i.FRAGMENT_SHADER,A);if(i.attachShader(d,y),i.attachShader(d,D),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),n.debug.checkShaderErrors){const x=i.getProgramInfoLog(d).trim(),E=i.getShaderInfoLog(y).trim(),N=i.getShaderInfoLog(D).trim();let L=!0,P=!0;if(i.getProgramParameter(d,i.LINK_STATUS)===!1)if(L=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,d,y,D);else{const I=qu(i,y,"vertex"),z=qu(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+I+`
`+z)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(E===""||N==="")&&(P=!1);P&&(this.diagnostics={runnable:L,programLog:x,vertexShader:{log:E,prefix:p},fragmentShader:{log:N,prefix:g}})}i.deleteShader(y),i.deleteShader(D);let T;this.getUniforms=function(){return T===void 0&&(T=new ga(i,d)),T};let b;return this.getAttributes=function(){return b===void 0&&(b=ag(i,d)),b},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q0++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=D,this}let vg=0;class _g{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new xg(e),t.set(e,r)),r}}class xg{constructor(e){this.id=vg++,this.code=e,this.usedTimes=0}}function Eg(n,e,t,r,i,a,s){const o=new Tc,c=new _g,f=[],l=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return x===0?"uv":`uv${x}`}function p(x,E,N,L,P){const I=L.fog,z=P.geometry,O=x.isMeshStandardMaterial?L.environment:null,R=(x.isMeshStandardMaterial?t:e).get(x.envMap||O),G=R&&R.mapping===Ba?R.image.height:null,X=v[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const U=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,H=U!==void 0?U.length:0;let W=0;z.morphAttributes.position!==void 0&&(W=1),z.morphAttributes.normal!==void 0&&(W=2),z.morphAttributes.color!==void 0&&(W=3);let J,q,j,ne;if(X){const Gt=Tn[X];J=Gt.vertexShader,q=Gt.fragmentShader}else J=x.vertexShader,q=x.fragmentShader,c.update(x),j=c.getVertexShaderID(x),ne=c.getFragmentShaderID(x);const oe=n.getRenderTarget(),se=P.isInstancedMesh===!0,pe=!!x.map,fe=!!x.matcap,Ae=!!R,Z=!!x.aoMap,Se=!!x.lightMap,de=!!x.bumpMap,Ee=!!x.normalMap,xe=!!x.displacementMap,Le=!!x.emissiveMap,Te=!!x.metalnessMap,be=!!x.roughnessMap,Re=x.anisotropy>0,ke=x.clearcoat>0,Xe=x.iridescence>0,w=x.sheen>0,S=x.transmission>0,F=Re&&!!x.anisotropyMap,V=ke&&!!x.clearcoatMap,K=ke&&!!x.clearcoatNormalMap,C=ke&&!!x.clearcoatRoughnessMap,Q=Xe&&!!x.iridescenceMap,Y=Xe&&!!x.iridescenceThicknessMap,k=w&&!!x.sheenColorMap,ce=w&&!!x.sheenRoughnessMap,ge=!!x.specularMap,ae=!!x.specularColorMap,we=!!x.specularIntensityMap,ye=S&&!!x.transmissionMap,Fe=S&&!!x.thicknessMap,Pe=!!x.gradientMap,$=!!x.alphaMap,ve=x.alphaTest>0,ie=!!x.alphaHash,me=!!x.extensions,_e=!!z.attributes.uv1,qe=!!z.attributes.uv2,Ke=!!z.attributes.uv3;return{isWebGL2:l,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:q,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,instancing:se,instancingColor:se&&P.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Fn,map:pe,matcap:fe,envMap:Ae,envMapMode:Ae&&R.mapping,envMapCubeUVHeight:G,aoMap:Z,lightMap:Se,bumpMap:de,normalMap:Ee,displacementMap:h&&xe,emissiveMap:Le,normalMapObjectSpace:Ee&&x.normalMapType===Ch,normalMapTangentSpace:Ee&&x.normalMapType===Mc,metalnessMap:Te,roughnessMap:be,anisotropy:Re,anisotropyMap:F,clearcoat:ke,clearcoatMap:V,clearcoatNormalMap:K,clearcoatRoughnessMap:C,iridescence:Xe,iridescenceMap:Q,iridescenceThicknessMap:Y,sheen:w,sheenColorMap:k,sheenRoughnessMap:ce,specularMap:ge,specularColorMap:ae,specularIntensityMap:we,transmission:S,transmissionMap:ye,thicknessMap:Fe,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===ri,alphaMap:$,alphaTest:ve,alphaHash:ie,combine:x.combine,mapUv:pe&&d(x.map.channel),aoMapUv:Z&&d(x.aoMap.channel),lightMapUv:Se&&d(x.lightMap.channel),bumpMapUv:de&&d(x.bumpMap.channel),normalMapUv:Ee&&d(x.normalMap.channel),displacementMapUv:xe&&d(x.displacementMap.channel),emissiveMapUv:Le&&d(x.emissiveMap.channel),metalnessMapUv:Te&&d(x.metalnessMap.channel),roughnessMapUv:be&&d(x.roughnessMap.channel),anisotropyMapUv:F&&d(x.anisotropyMap.channel),clearcoatMapUv:V&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:K&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:C&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:k&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&d(x.sheenRoughnessMap.channel),specularMapUv:ge&&d(x.specularMap.channel),specularColorMapUv:ae&&d(x.specularColorMap.channel),specularIntensityMapUv:we&&d(x.specularIntensityMap.channel),transmissionMapUv:ye&&d(x.transmissionMap.channel),thicknessMapUv:Fe&&d(x.thicknessMap.channel),alphaMapUv:$&&d(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ee||Re),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:_e,vertexUv2s:qe,vertexUv3s:Ke,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(pe||$),fog:!!I,useFog:x.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:W,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:Vn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===hn,flipSided:x.side===qt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:me&&x.extensions.derivatives===!0,extensionFragDepth:me&&x.extensions.fragDepth===!0,extensionDrawBuffers:me&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:l||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:l||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:l||r.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function g(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const N in x.defines)E.push(N),E.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(M(E,x),_(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function M(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function _(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),x.push(o.mask)}function A(x){const E=v[x.type];let N;if(E){const L=Tn[E];N=sd.clone(L.uniforms)}else N=x.uniforms;return N}function y(x,E){let N;for(let L=0,P=f.length;L<P;L++){const I=f[L];if(I.cacheKey===E){N=I,++N.usedTimes;break}}return N===void 0&&(N=new gg(n,E,x,a),f.push(N)),N}function D(x){if(--x.usedTimes===0){const E=f.indexOf(x);f[E]=f[f.length-1],f.pop(),x.destroy()}}function T(x){c.remove(x)}function b(){c.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:A,acquireProgram:y,releaseProgram:D,releaseShaderCache:T,programs:f,dispose:b}}function yg(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function r(a,s,o){n.get(a)[s]=o}function i(){n=new WeakMap}return{get:e,remove:t,update:r,dispose:i}}function Mg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ju(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Qu(){const n=[];let e=0;const t=[],r=[],i=[];function a(){e=0,t.length=0,r.length=0,i.length=0}function s(u,h,m,v,d,p){let g=n[e];return g===void 0?(g={id:u.id,object:u,geometry:h,material:m,groupOrder:v,renderOrder:u.renderOrder,z:d,group:p},n[e]=g):(g.id=u.id,g.object=u,g.geometry=h,g.material=m,g.groupOrder=v,g.renderOrder=u.renderOrder,g.z=d,g.group=p),e++,g}function o(u,h,m,v,d,p){const g=s(u,h,m,v,d,p);m.transmission>0?r.push(g):m.transparent===!0?i.push(g):t.push(g)}function c(u,h,m,v,d,p){const g=s(u,h,m,v,d,p);m.transmission>0?r.unshift(g):m.transparent===!0?i.unshift(g):t.unshift(g)}function f(u,h){t.length>1&&t.sort(u||Mg),r.length>1&&r.sort(h||Ju),i.length>1&&i.sort(h||Ju)}function l(){for(let u=e,h=n.length;u<h;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:r,transparent:i,init:a,push:o,unshift:c,finish:l,sort:f}}function Ag(){let n=new WeakMap;function e(r,i){const a=n.get(r);let s;return a===void 0?(s=new Qu,n.set(r,[s])):i>=a.length?(s=new Qu,a.push(s)):s=a[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Sg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new je};break;case"SpotLight":t={position:new ee,direction:new ee,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return n[e.id]=t,t}}}function wg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Dg=0;function bg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Tg(n,e){const t=new Sg,r=wg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let l=0;l<9;l++)i.probe.push(new ee);const a=new ee,s=new St,o=new St;function c(l,u){let h=0,m=0,v=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let d=0,p=0,g=0,M=0,_=0,A=0,y=0,D=0,T=0,b=0;l.sort(bg);const x=u===!0?Math.PI:1;for(let N=0,L=l.length;N<L;N++){const P=l[N],I=P.color,z=P.intensity,O=P.distance,R=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*z*x,m+=I.g*z*x,v+=I.b*z*x;else if(P.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],z);else if(P.isDirectionalLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*x),P.castShadow){const X=P.shadow,U=r.get(P);U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=R,i.directionalShadowMatrix[d]=P.shadow.matrix,A++}i.directional[d]=G,d++}else if(P.isSpotLight){const G=t.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(I).multiplyScalar(z*x),G.distance=O,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[g]=G;const X=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,X.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[g]=X.matrix,P.castShadow){const U=r.get(P);U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,i.spotShadow[g]=U,i.spotShadowMap[g]=R,D++}g++}else if(P.isRectAreaLight){const G=t.get(P);G.color.copy(I).multiplyScalar(z),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=G,M++}else if(P.isPointLight){const G=t.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity*x),G.distance=P.distance,G.decay=P.decay,P.castShadow){const X=P.shadow,U=r.get(P);U.shadowBias=X.bias,U.shadowNormalBias=X.normalBias,U.shadowRadius=X.radius,U.shadowMapSize=X.mapSize,U.shadowCameraNear=X.camera.near,U.shadowCameraFar=X.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=R,i.pointShadowMatrix[p]=P.shadow.matrix,y++}i.point[p]=G,p++}else if(P.isHemisphereLight){const G=t.get(P);G.skyColor.copy(P.color).multiplyScalar(z*x),G.groundColor.copy(P.groundColor).multiplyScalar(z*x),i.hemi[_]=G,_++}}M>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=De.LTC_FLOAT_1,i.rectAreaLTC2=De.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=De.LTC_HALF_1,i.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=v;const E=i.hash;(E.directionalLength!==d||E.pointLength!==p||E.spotLength!==g||E.rectAreaLength!==M||E.hemiLength!==_||E.numDirectionalShadows!==A||E.numPointShadows!==y||E.numSpotShadows!==D||E.numSpotMaps!==T)&&(i.directional.length=d,i.spot.length=g,i.rectArea.length=M,i.point.length=p,i.hemi.length=_,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=D+T-b,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=b,E.directionalLength=d,E.pointLength=p,E.spotLength=g,E.rectAreaLength=M,E.hemiLength=_,E.numDirectionalShadows=A,E.numPointShadows=y,E.numSpotShadows=D,E.numSpotMaps=T,i.version=Dg++)}function f(l,u){let h=0,m=0,v=0,d=0,p=0;const g=u.matrixWorldInverse;for(let M=0,_=l.length;M<_;M++){const A=l[M];if(A.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(g),h++}else if(A.isSpotLight){const y=i.spot[v];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(A.matrixWorld),a.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(g),v++}else if(A.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(A.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),d++}else if(A.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(g),m++}else if(A.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(g),p++}}}return{setup:c,setupView:f,state:i}}function ju(n,e){const t=new Tg(n,e),r=[],i=[];function a(){r.length=0,i.length=0}function s(u){r.push(u)}function o(u){i.push(u)}function c(u){t.setup(r,u)}function f(u){t.setupView(r,u)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:t},setupLights:c,setupLightsView:f,pushLight:s,pushShadow:o}}function Cg(n,e){let t=new WeakMap;function r(a,s=0){const o=t.get(a);let c;return o===void 0?(c=new ju(n,e),t.set(a,[c])):s>=o.length?(c=new ju(n,e),o.push(c)):c=o[s],c}function i(){t=new WeakMap}return{get:r,dispose:i}}class Fg extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rg extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pg=`uniform sampler2D shadow_pass;
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
}`;function Ng(n,e,t){let r=new Ic;const i=new Qe,a=new Qe,s=new Rt,o=new Fg({depthPacking:Th}),c=new Rg,f={},l=t.maxTextureSize,u={[tr]:qt,[qt]:tr,[hn]:hn},h=new Ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:Lg,fragmentShader:Pg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new Ot;v.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Sn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cc;let g=this.type;this.render=function(y,D,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const b=n.getRenderTarget(),x=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Qn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const L=g!==zn&&this.type===zn,P=g===zn&&this.type!==zn;for(let I=0,z=y.length;I<z;I++){const O=y[I],R=O.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const G=R.getFrameExtents();if(i.multiply(G),a.copy(R.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(a.x=Math.floor(l/G.x),i.x=a.x*G.x,R.mapSize.x=a.x),i.y>l&&(a.y=Math.floor(l/G.y),i.y=a.y*G.y,R.mapSize.y=a.y)),R.map===null||L===!0||P===!0){const U=this.type!==zn?{minFilter:Wt,magFilter:Wt}:{};R.map!==null&&R.map.dispose(),R.map=new yr(i.x,i.y,U),R.map.texture.name=O.name+".shadowMap",R.camera.updateProjectionMatrix()}n.setRenderTarget(R.map),n.clear();const X=R.getViewportCount();for(let U=0;U<X;U++){const H=R.getViewport(U);s.set(a.x*H.x,a.y*H.y,a.x*H.z,a.y*H.w),N.viewport(s),R.updateMatrices(O,U),r=R.getFrustum(),A(D,T,R.camera,O,this.type)}R.isPointLightShadow!==!0&&this.type===zn&&M(R,T),R.needsUpdate=!1}g=this.type,p.needsUpdate=!1,n.setRenderTarget(b,x,E)};function M(y,D){const T=e.update(d);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new yr(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(D,null,T,h,d,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(D,null,T,m,d,null)}function _(y,D,T,b){let x=null;const E=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(E!==void 0)x=E;else if(x=T.isPointLight===!0?c:o,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const N=x.uuid,L=D.uuid;let P=f[N];P===void 0&&(P={},f[N]=P);let I=P[L];I===void 0&&(I=x.clone(),P[L]=I),x=I}if(x.visible=D.visible,x.wireframe=D.wireframe,b===zn?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:u[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,T.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const N=n.properties.get(x);N.light=T}return x}function A(y,D,T,b,x){if(y.visible===!1)return;if(y.layers.test(D.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===zn)&&(!y.frustumCulled||r.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const L=e.update(y),P=y.material;if(Array.isArray(P)){const I=L.groups;for(let z=0,O=I.length;z<O;z++){const R=I[z],G=P[R.materialIndex];if(G&&G.visible){const X=_(y,G,b,x);n.renderBufferDirect(T,null,L,X,y,R)}}}else if(P.visible){const I=_(y,P,b,x);n.renderBufferDirect(T,null,L,I,y,null)}}const N=y.children;for(let L=0,P=N.length;L<P;L++)A(N[L],D,T,b,x)}}function Ig(n,e,t){const r=t.isWebGL2;function i(){let $=!1;const ve=new Rt;let ie=null;const me=new Rt(0,0,0,0);return{setMask:function(_e){ie!==_e&&!$&&(n.colorMask(_e,_e,_e,_e),ie=_e)},setLocked:function(_e){$=_e},setClear:function(_e,qe,Ke,lt,Gt){Gt===!0&&(_e*=lt,qe*=lt,Ke*=lt),ve.set(_e,qe,Ke,lt),me.equals(ve)===!1&&(n.clearColor(_e,qe,Ke,lt),me.copy(ve))},reset:function(){$=!1,ie=null,me.set(-1,0,0,0)}}}function a(){let $=!1,ve=null,ie=null,me=null;return{setTest:function(_e){_e?oe(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(_e){ve!==_e&&!$&&(n.depthMask(_e),ve=_e)},setFunc:function(_e){if(ie!==_e){switch(_e){case rh:n.depthFunc(n.NEVER);break;case ih:n.depthFunc(n.ALWAYS);break;case ah:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case sh:n.depthFunc(n.EQUAL);break;case oh:n.depthFunc(n.GEQUAL);break;case uh:n.depthFunc(n.GREATER);break;case lh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=_e}},setLocked:function(_e){$=_e},setClear:function(_e){me!==_e&&(n.clearDepth(_e),me=_e)},reset:function(){$=!1,ve=null,ie=null,me=null}}}function s(){let $=!1,ve=null,ie=null,me=null,_e=null,qe=null,Ke=null,lt=null,Gt=null;return{setTest:function(it){$||(it?oe(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(it){ve!==it&&!$&&(n.stencilMask(it),ve=it)},setFunc:function(it,sn,Ct){(ie!==it||me!==sn||_e!==Ct)&&(n.stencilFunc(it,sn,Ct),ie=it,me=sn,_e=Ct)},setOp:function(it,sn,Ct){(qe!==it||Ke!==sn||lt!==Ct)&&(n.stencilOp(it,sn,Ct),qe=it,Ke=sn,lt=Ct)},setLocked:function(it){$=it},setClear:function(it){Gt!==it&&(n.clearStencil(it),Gt=it)},reset:function(){$=!1,ve=null,ie=null,me=null,_e=null,qe=null,Ke=null,lt=null,Gt=null}}}const o=new i,c=new a,f=new s,l=new WeakMap,u=new WeakMap;let h={},m={},v=new WeakMap,d=[],p=null,g=!1,M=null,_=null,A=null,y=null,D=null,T=null,b=null,x=!1,E=null,N=null,L=null,P=null,I=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,R=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(R=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=R>=1):G.indexOf("OpenGL ES")!==-1&&(R=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=R>=2);let X=null,U={};const H=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),J=new Rt().fromArray(H),q=new Rt().fromArray(W);function j($,ve,ie,me){const _e=new Uint8Array(4),qe=n.createTexture();n.bindTexture($,qe),n.texParameteri($,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri($,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ke=0;Ke<ie;Ke++)r&&($===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(ve+Ke,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return qe}const ne={};ne[n.TEXTURE_2D]=j(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=j(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(ne[n.TEXTURE_2D_ARRAY]=j(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=j(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),f.setClear(0),oe(n.DEPTH_TEST),c.setFunc(Gs),xe(!1),Le(Oo),oe(n.CULL_FACE),de(Qn);function oe($){h[$]!==!0&&(n.enable($),h[$]=!0)}function se($){h[$]!==!1&&(n.disable($),h[$]=!1)}function pe($,ve){return m[$]!==ve?(n.bindFramebuffer($,ve),m[$]=ve,r&&($===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),$===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function fe($,ve){let ie=d,me=!1;if($)if(ie=v.get(ve),ie===void 0&&(ie=[],v.set(ve,ie)),$.isWebGLMultipleRenderTargets){const _e=$.texture;if(ie.length!==_e.length||ie[0]!==n.COLOR_ATTACHMENT0){for(let qe=0,Ke=_e.length;qe<Ke;qe++)ie[qe]=n.COLOR_ATTACHMENT0+qe;ie.length=_e.length,me=!0}}else ie[0]!==n.COLOR_ATTACHMENT0&&(ie[0]=n.COLOR_ATTACHMENT0,me=!0);else ie[0]!==n.BACK&&(ie[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Ae($){return p!==$?(n.useProgram($),p=$,!0):!1}const Z={[jr]:n.FUNC_ADD,[qf]:n.FUNC_SUBTRACT,[$f]:n.FUNC_REVERSE_SUBTRACT};if(r)Z[Vo]=n.MIN,Z[Wo]=n.MAX;else{const $=e.get("EXT_blend_minmax");$!==null&&(Z[Vo]=$.MIN_EXT,Z[Wo]=$.MAX_EXT)}const Se={[Yf]:n.ZERO,[Zf]:n.ONE,[Kf]:n.SRC_COLOR,[fc]:n.SRC_ALPHA,[nh]:n.SRC_ALPHA_SATURATE,[eh]:n.DST_COLOR,[Qf]:n.DST_ALPHA,[Jf]:n.ONE_MINUS_SRC_COLOR,[hc]:n.ONE_MINUS_SRC_ALPHA,[th]:n.ONE_MINUS_DST_COLOR,[jf]:n.ONE_MINUS_DST_ALPHA};function de($,ve,ie,me,_e,qe,Ke,lt){if($===Qn){g===!0&&(se(n.BLEND),g=!1);return}if(g===!1&&(oe(n.BLEND),g=!0),$!==Xf){if($!==M||lt!==x){if((_!==jr||D!==jr)&&(n.blendEquation(n.FUNC_ADD),_=jr,D=jr),lt)switch($){case ri:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zo:n.blendFunc(n.ONE,n.ONE);break;case Go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ho:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case ri:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case zo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Go:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ho:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}A=null,y=null,T=null,b=null,M=$,x=lt}return}_e=_e||ve,qe=qe||ie,Ke=Ke||me,(ve!==_||_e!==D)&&(n.blendEquationSeparate(Z[ve],Z[_e]),_=ve,D=_e),(ie!==A||me!==y||qe!==T||Ke!==b)&&(n.blendFuncSeparate(Se[ie],Se[me],Se[qe],Se[Ke]),A=ie,y=me,T=qe,b=Ke),M=$,x=!1}function Ee($,ve){$.side===hn?se(n.CULL_FACE):oe(n.CULL_FACE);let ie=$.side===qt;ve&&(ie=!ie),xe(ie),$.blending===ri&&$.transparent===!1?de(Qn):de($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),o.setMask($.colorWrite);const me=$.stencilWrite;f.setTest(me),me&&(f.setMask($.stencilWriteMask),f.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),f.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),be($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?oe(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function xe($){E!==$&&($?n.frontFace(n.CW):n.frontFace(n.CCW),E=$)}function Le($){$!==Vf?(oe(n.CULL_FACE),$!==N&&($===Oo?n.cullFace(n.BACK):$===Wf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),N=$}function Te($){$!==L&&(O&&n.lineWidth($),L=$)}function be($,ve,ie){$?(oe(n.POLYGON_OFFSET_FILL),(P!==ve||I!==ie)&&(n.polygonOffset(ve,ie),P=ve,I=ie)):se(n.POLYGON_OFFSET_FILL)}function Re($){$?oe(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function ke($){$===void 0&&($=n.TEXTURE0+z-1),X!==$&&(n.activeTexture($),X=$)}function Xe($,ve,ie){ie===void 0&&(X===null?ie=n.TEXTURE0+z-1:ie=X);let me=U[ie];me===void 0&&(me={type:void 0,texture:void 0},U[ie]=me),(me.type!==$||me.texture!==ve)&&(X!==ie&&(n.activeTexture(ie),X=ie),n.bindTexture($,ve||ne[$]),me.type=$,me.texture=ve)}function w(){const $=U[X];$!==void 0&&$.type!==void 0&&(n.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function S(){try{n.compressedTexImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function F(){try{n.compressedTexImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function K(){try{n.texSubImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function C(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Q(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Y(){try{n.texStorage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function k(){try{n.texStorage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ge(){try{n.texImage3D.apply(n,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ae($){J.equals($)===!1&&(n.scissor($.x,$.y,$.z,$.w),J.copy($))}function we($){q.equals($)===!1&&(n.viewport($.x,$.y,$.z,$.w),q.copy($))}function ye($,ve){let ie=u.get(ve);ie===void 0&&(ie=new WeakMap,u.set(ve,ie));let me=ie.get($);me===void 0&&(me=n.getUniformBlockIndex(ve,$.name),ie.set($,me))}function Fe($,ve){const me=u.get(ve).get($);l.get(ve)!==me&&(n.uniformBlockBinding(ve,me,$.__bindingPointIndex),l.set(ve,me))}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),r===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},X=null,U={},m={},v=new WeakMap,d=[],p=null,g=!1,M=null,_=null,A=null,y=null,D=null,T=null,b=null,x=!1,E=null,N=null,L=null,P=null,I=null,J.set(0,0,n.canvas.width,n.canvas.height),q.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),f.reset()}return{buffers:{color:o,depth:c,stencil:f},enable:oe,disable:se,bindFramebuffer:pe,drawBuffers:fe,useProgram:Ae,setBlending:de,setMaterial:Ee,setFlipSided:xe,setCullFace:Le,setLineWidth:Te,setPolygonOffset:be,setScissorTest:Re,activeTexture:ke,bindTexture:Xe,unbindTexture:w,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:ce,texImage3D:ge,updateUBOMapping:ye,uniformBlockBinding:Fe,texStorage2D:Y,texStorage3D:k,texSubImage2D:V,texSubImage3D:K,compressedTexSubImage2D:C,compressedTexSubImage3D:Q,scissor:ae,viewport:we,reset:Pe}}function Ug(n,e,t,r,i,a,s){const o=i.isWebGL2,c=i.maxTextures,f=i.maxCubemapSize,l=i.maxTextureSize,u=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,S){return g?new OffscreenCanvas(w,S):xa("canvas")}function _(w,S,F,V){let K=1;if((w.width>V||w.height>V)&&(K=V/Math.max(w.width,w.height)),K<1||S===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const C=S?$s:Math.floor,Q=C(K*w.width),Y=C(K*w.height);d===void 0&&(d=M(Q,Y));const k=F?M(Q,Y):d;return k.width=Q,k.height=Y,k.getContext("2d").drawImage(w,0,0,Q,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Q+"x"+Y+")."),k}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function A(w){return gu(w.width)&&gu(w.height)}function y(w){return o?!1:w.wrapS!==Mn||w.wrapT!==Mn||w.minFilter!==Wt&&w.minFilter!==cn}function D(w,S){return w.generateMipmaps&&S&&w.minFilter!==Wt&&w.minFilter!==cn}function T(w){n.generateMipmap(w)}function b(w,S,F,V,K=!1){if(o===!1)return S;if(w!==null){if(n[w]!==void 0)return n[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let C=S;return S===n.RED&&(F===n.FLOAT&&(C=n.R32F),F===n.HALF_FLOAT&&(C=n.R16F),F===n.UNSIGNED_BYTE&&(C=n.R8)),S===n.RG&&(F===n.FLOAT&&(C=n.RG32F),F===n.HALF_FLOAT&&(C=n.RG16F),F===n.UNSIGNED_BYTE&&(C=n.RG8)),S===n.RGBA&&(F===n.FLOAT&&(C=n.RGBA32F),F===n.HALF_FLOAT&&(C=n.RGBA16F),F===n.UNSIGNED_BYTE&&(C=V===Ye&&K===!1?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(C=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(C=n.RGB5_A1)),(C===n.R16F||C===n.R32F||C===n.RG16F||C===n.RG32F||C===n.RGBA16F||C===n.RGBA32F)&&e.get("EXT_color_buffer_float"),C}function x(w,S,F){return D(w,F)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function E(w){return w===Wt||w===ko||w===rs?n.NEAREST:n.LINEAR}function N(w){const S=w.target;S.removeEventListener("dispose",N),P(S),S.isVideoTexture&&v.delete(S)}function L(w){const S=w.target;S.removeEventListener("dispose",L),z(S)}function P(w){const S=r.get(w);if(S.__webglInit===void 0)return;const F=w.source,V=p.get(F);if(V){const K=V[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(w),Object.keys(V).length===0&&p.delete(F)}r.remove(w)}function I(w){const S=r.get(w);n.deleteTexture(S.__webglTexture);const F=w.source,V=p.get(F);delete V[S.__cacheKey],s.memory.textures--}function z(w){const S=w.texture,F=r.get(w),V=r.get(S);if(V.__webglTexture!==void 0&&(n.deleteTexture(V.__webglTexture),s.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++)n.deleteFramebuffer(F.__webglFramebuffer[K]),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[K]);else{if(n.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let K=0;K<F.__webglColorRenderbuffer.length;K++)F.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[K]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let K=0,C=S.length;K<C;K++){const Q=r.get(S[K]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),s.memory.textures--),r.remove(S[K])}r.remove(S),r.remove(w)}let O=0;function R(){O=0}function G(){const w=O;return w>=c&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+c),O+=1,w}function X(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function U(w,S){const F=r.get(w);if(w.isVideoTexture&&ke(w),w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){const V=w.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(F,w,S);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+S)}function H(w,S){const F=r.get(w);if(w.version>0&&F.__version!==w.version){pe(F,w,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+S)}function W(w,S){const F=r.get(w);if(w.version>0&&F.__version!==w.version){pe(F,w,S);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+S)}function J(w,S){const F=r.get(w);if(w.version>0&&F.__version!==w.version){fe(F,w,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+S)}const q={[Ws]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[ks]:n.MIRRORED_REPEAT},j={[Wt]:n.NEAREST,[ko]:n.NEAREST_MIPMAP_NEAREST,[rs]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[vh]:n.LINEAR_MIPMAP_NEAREST,[Si]:n.LINEAR_MIPMAP_LINEAR},ne={[Rh]:n.NEVER,[Oh]:n.ALWAYS,[Lh]:n.LESS,[Nh]:n.LEQUAL,[Ph]:n.EQUAL,[Bh]:n.GEQUAL,[Ih]:n.GREATER,[Uh]:n.NOTEQUAL};function oe(w,S,F){if(F?(n.texParameteri(w,n.TEXTURE_WRAP_S,q[S.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,q[S.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,q[S.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,j[S.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,j[S.minFilter])):(n.texParameteri(w,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(w,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==Mn||S.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(w,n.TEXTURE_MAG_FILTER,E(S.magFilter)),n.texParameteri(w,n.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==Wt&&S.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,ne[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===Wt||S.minFilter!==rs&&S.minFilter!==Si||S.type===Kn&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||r.get(S).__currentAnisotropy)&&(n.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),r.get(S).__currentAnisotropy=S.anisotropy)}}function se(w,S){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",N));const V=S.source;let K=p.get(V);K===void 0&&(K={},p.set(V,K));const C=X(S);if(C!==w.__cacheKey){K[C]===void 0&&(K[C]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),K[C].usedTimes++;const Q=K[w.__cacheKey];Q!==void 0&&(K[w.__cacheKey].usedTimes--,Q.usedTimes===0&&I(S)),w.__cacheKey=C,w.__webglTexture=K[C].texture}return F}function pe(w,S,F){let V=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=n.TEXTURE_3D);const K=se(w,S),C=S.source;t.bindTexture(V,w.__webglTexture,n.TEXTURE0+F);const Q=r.get(C);if(C.version!==Q.__version||K===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Y=y(S)&&A(S.image)===!1;let k=_(S.image,Y,!1,l);k=Xe(S,k);const ce=A(k)||o,ge=a.convert(S.format,S.colorSpace);let ae=a.convert(S.type),we=b(S.internalFormat,ge,ae,S.colorSpace);oe(V,S,ce);let ye;const Fe=S.mipmaps,Pe=o&&S.isVideoTexture!==!0,$=Q.__version===void 0||K===!0,ve=x(S,k,ce);if(S.isDepthTexture)we=n.DEPTH_COMPONENT,o?S.type===Kn?we=n.DEPTH_COMPONENT32F:S.type===Zn?we=n.DEPTH_COMPONENT24:S.type===gr?we=n.DEPTH24_STENCIL8:we=n.DEPTH_COMPONENT16:S.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===vr&&we===n.DEPTH_COMPONENT&&S.type!==ho&&S.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Zn,ae=a.convert(S.type)),S.format===ui&&we===n.DEPTH_COMPONENT&&(we=n.DEPTH_STENCIL,S.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=gr,ae=a.convert(S.type))),$&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,we,k.width,k.height):t.texImage2D(n.TEXTURE_2D,0,we,k.width,k.height,0,ge,ae,null));else if(S.isDataTexture)if(Fe.length>0&&ce){Pe&&$&&t.texStorage2D(n.TEXTURE_2D,ve,we,Fe[0].width,Fe[0].height);for(let ie=0,me=Fe.length;ie<me;ie++)ye=Fe[ie],Pe?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,ge,ae,ye.data):t.texImage2D(n.TEXTURE_2D,ie,we,ye.width,ye.height,0,ge,ae,ye.data);S.generateMipmaps=!1}else Pe?($&&t.texStorage2D(n.TEXTURE_2D,ve,we,k.width,k.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,k.width,k.height,ge,ae,k.data)):t.texImage2D(n.TEXTURE_2D,0,we,k.width,k.height,0,ge,ae,k.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Pe&&$&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,we,Fe[0].width,Fe[0].height,k.depth);for(let ie=0,me=Fe.length;ie<me;ie++)ye=Fe[ie],S.format!==An?ge!==null?Pe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,k.depth,ge,ye.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ie,we,ye.width,ye.height,k.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,ie,0,0,0,ye.width,ye.height,k.depth,ge,ae,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ie,we,ye.width,ye.height,k.depth,0,ge,ae,ye.data)}else{Pe&&$&&t.texStorage2D(n.TEXTURE_2D,ve,we,Fe[0].width,Fe[0].height);for(let ie=0,me=Fe.length;ie<me;ie++)ye=Fe[ie],S.format!==An?ge!==null?Pe?t.compressedTexSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,ie,we,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ye.width,ye.height,ge,ae,ye.data):t.texImage2D(n.TEXTURE_2D,ie,we,ye.width,ye.height,0,ge,ae,ye.data)}else if(S.isDataArrayTexture)Pe?($&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,we,k.width,k.height,k.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,ge,ae,k.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,we,k.width,k.height,k.depth,0,ge,ae,k.data);else if(S.isData3DTexture)Pe?($&&t.texStorage3D(n.TEXTURE_3D,ve,we,k.width,k.height,k.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,ge,ae,k.data)):t.texImage3D(n.TEXTURE_3D,0,we,k.width,k.height,k.depth,0,ge,ae,k.data);else if(S.isFramebufferTexture){if($)if(Pe)t.texStorage2D(n.TEXTURE_2D,ve,we,k.width,k.height);else{let ie=k.width,me=k.height;for(let _e=0;_e<ve;_e++)t.texImage2D(n.TEXTURE_2D,_e,we,ie,me,0,ge,ae,null),ie>>=1,me>>=1}}else if(Fe.length>0&&ce){Pe&&$&&t.texStorage2D(n.TEXTURE_2D,ve,we,Fe[0].width,Fe[0].height);for(let ie=0,me=Fe.length;ie<me;ie++)ye=Fe[ie],Pe?t.texSubImage2D(n.TEXTURE_2D,ie,0,0,ge,ae,ye):t.texImage2D(n.TEXTURE_2D,ie,we,ge,ae,ye);S.generateMipmaps=!1}else Pe?($&&t.texStorage2D(n.TEXTURE_2D,ve,we,k.width,k.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,ae,k)):t.texImage2D(n.TEXTURE_2D,0,we,ge,ae,k);D(S,ce)&&T(V),Q.__version=C.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function fe(w,S,F){if(S.image.length!==6)return;const V=se(w,S),K=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+F);const C=r.get(K);if(K.version!==C.__version||V===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const Q=S.isCompressedTexture||S.image[0].isCompressedTexture,Y=S.image[0]&&S.image[0].isDataTexture,k=[];for(let ie=0;ie<6;ie++)!Q&&!Y?k[ie]=_(S.image[ie],!1,!0,f):k[ie]=Y?S.image[ie].image:S.image[ie],k[ie]=Xe(S,k[ie]);const ce=k[0],ge=A(ce)||o,ae=a.convert(S.format,S.colorSpace),we=a.convert(S.type),ye=b(S.internalFormat,ae,we,S.colorSpace),Fe=o&&S.isVideoTexture!==!0,Pe=C.__version===void 0||V===!0;let $=x(S,ce,ge);oe(n.TEXTURE_CUBE_MAP,S,ge);let ve;if(Q){Fe&&Pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,$,ye,ce.width,ce.height);for(let ie=0;ie<6;ie++){ve=k[ie].mipmaps;for(let me=0;me<ve.length;me++){const _e=ve[me];S.format!==An?ae!==null?Fe?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,0,0,_e.width,_e.height,ae,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,ye,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,0,0,_e.width,_e.height,ae,we,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me,ye,_e.width,_e.height,0,ae,we,_e.data)}}}else{ve=S.mipmaps,Fe&&Pe&&(ve.length>0&&$++,t.texStorage2D(n.TEXTURE_CUBE_MAP,$,ye,k[0].width,k[0].height));for(let ie=0;ie<6;ie++)if(Y){Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,k[ie].width,k[ie].height,ae,we,k[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ye,k[ie].width,k[ie].height,0,ae,we,k[ie].data);for(let me=0;me<ve.length;me++){const qe=ve[me].image[ie].image;Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,0,0,qe.width,qe.height,ae,we,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,ye,qe.width,qe.height,0,ae,we,qe.data)}}else{Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ae,we,k[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ye,ae,we,k[ie]);for(let me=0;me<ve.length;me++){const _e=ve[me];Fe?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,0,0,ae,we,_e.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,me+1,ye,ae,we,_e.image[ie])}}}D(S,ge)&&T(n.TEXTURE_CUBE_MAP),C.__version=K.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function Ae(w,S,F,V,K){const C=a.convert(F.format,F.colorSpace),Q=a.convert(F.type),Y=b(F.internalFormat,C,Q,F.colorSpace);r.get(S).__hasExternalTextures||(K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,0,Y,S.width,S.height,S.depth,0,C,Q,null):t.texImage2D(K,0,Y,S.width,S.height,0,C,Q,null)),t.bindFramebuffer(n.FRAMEBUFFER,w),Re(S)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,r.get(F).__webglTexture,0,be(S)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,r.get(F).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Z(w,S,F){if(n.bindRenderbuffer(n.RENDERBUFFER,w),S.depthBuffer&&!S.stencilBuffer){let V=n.DEPTH_COMPONENT16;if(F||Re(S)){const K=S.depthTexture;K&&K.isDepthTexture&&(K.type===Kn?V=n.DEPTH_COMPONENT32F:K.type===Zn&&(V=n.DEPTH_COMPONENT24));const C=be(S);Re(S)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,V,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,C,V,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,V,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,w)}else if(S.depthBuffer&&S.stencilBuffer){const V=be(S);F&&Re(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,S.width,S.height):Re(S)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,w)}else{const V=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0;K<V.length;K++){const C=V[K],Q=a.convert(C.format,C.colorSpace),Y=a.convert(C.type),k=b(C.internalFormat,Q,Y,C.colorSpace),ce=be(S);F&&Re(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,k,S.width,S.height):Re(S)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,k,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,k,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Se(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),U(S.depthTexture,0);const V=r.get(S.depthTexture).__webglTexture,K=be(S);if(S.depthTexture.format===vr)Re(S)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,V,0);else if(S.depthTexture.format===ui)Re(S)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function de(w){const S=r.get(w),F=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Se(S.__webglFramebuffer,w)}else if(F){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]=n.createRenderbuffer(),Z(S.__webglDepthbuffer[V],w,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),Z(S.__webglDepthbuffer,w,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ee(w,S,F){const V=r.get(w);S!==void 0&&Ae(V.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),F!==void 0&&de(w)}function xe(w){const S=w.texture,F=r.get(w),V=r.get(S);w.addEventListener("dispose",L),w.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=S.version,s.memory.textures++);const K=w.isWebGLCubeRenderTarget===!0,C=w.isWebGLMultipleRenderTargets===!0,Q=A(w)||o;if(K){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)F.__webglFramebuffer[Y]=n.createFramebuffer()}else{if(F.__webglFramebuffer=n.createFramebuffer(),C)if(i.drawBuffers){const Y=w.texture;for(let k=0,ce=Y.length;k<ce;k++){const ge=r.get(Y[k]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&Re(w)===!1){const Y=C?S:[S];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let k=0;k<Y.length;k++){const ce=Y[k];F.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[k]);const ge=a.convert(ce.format,ce.colorSpace),ae=a.convert(ce.type),we=b(ce.internalFormat,ge,ae,ce.colorSpace,w.isXRRenderTarget===!0),ye=be(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,we,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+k,n.RENDERBUFFER,F.__webglColorRenderbuffer[k])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Z(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),oe(n.TEXTURE_CUBE_MAP,S,Q);for(let Y=0;Y<6;Y++)Ae(F.__webglFramebuffer[Y],w,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Y);D(S,Q)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(C){const Y=w.texture;for(let k=0,ce=Y.length;k<ce;k++){const ge=Y[k],ae=r.get(ge);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),oe(n.TEXTURE_2D,ge,Q),Ae(F.__webglFramebuffer,w,ge,n.COLOR_ATTACHMENT0+k,n.TEXTURE_2D),D(ge,Q)&&T(n.TEXTURE_2D)}t.unbindTexture()}else{let Y=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?Y=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Y,V.__webglTexture),oe(Y,S,Q),Ae(F.__webglFramebuffer,w,S,n.COLOR_ATTACHMENT0,Y),D(S,Q)&&T(Y),t.unbindTexture()}w.depthBuffer&&de(w)}function Le(w){const S=A(w)||o,F=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let V=0,K=F.length;V<K;V++){const C=F[V];if(D(C,S)){const Q=w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Y=r.get(C).__webglTexture;t.bindTexture(Q,Y),T(Q),t.unbindTexture()}}}function Te(w){if(o&&w.samples>0&&Re(w)===!1){const S=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],F=w.width,V=w.height;let K=n.COLOR_BUFFER_BIT;const C=[],Q=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Y=r.get(w),k=w.isWebGLMultipleRenderTargets===!0;if(k)for(let ce=0;ce<S.length;ce++)t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){C.push(n.COLOR_ATTACHMENT0+ce),w.depthBuffer&&C.push(Q);const ge=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(ge===!1&&(w.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),k&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]),ge===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Q]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Q])),k){const ae=r.get(S[ce]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,F,V,0,0,F,V,K,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),k)for(let ce=0;ce<S.length;ce++){t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,Y.__webglColorRenderbuffer[ce]);const ge=r.get(S[ce]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}}function be(w){return Math.min(u,w.samples)}function Re(w){const S=r.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ke(w){const S=s.render.frame;v.get(w)!==S&&(v.set(w,S),w.update())}function Xe(w,S){const F=w.colorSpace,V=w.format,K=w.type;return w.isCompressedTexture===!0||w.format===Xs||F!==Fn&&F!==xr&&(F===Ye?o===!1?e.has("EXT_sRGB")===!0&&V===An?(w.format=Xs,w.minFilter=cn,w.generateMipmaps=!1):S=wc.sRGBToLinear(S):(V!==An||K!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}this.allocateTextureUnit=G,this.resetTextureUnits=R,this.setTexture2D=U,this.setTexture2DArray=H,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=Ee,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Re}function Bg(n,e,t){const r=t.isWebGL2;function i(a,s=xr){let o;if(a===jn)return n.UNSIGNED_BYTE;if(a===gc)return n.UNSIGNED_SHORT_4_4_4_4;if(a===vc)return n.UNSIGNED_SHORT_5_5_5_1;if(a===_h)return n.BYTE;if(a===xh)return n.SHORT;if(a===ho)return n.UNSIGNED_SHORT;if(a===mc)return n.INT;if(a===Zn)return n.UNSIGNED_INT;if(a===Kn)return n.FLOAT;if(a===wi)return r?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Eh)return n.ALPHA;if(a===An)return n.RGBA;if(a===yh)return n.LUMINANCE;if(a===Mh)return n.LUMINANCE_ALPHA;if(a===vr)return n.DEPTH_COMPONENT;if(a===ui)return n.DEPTH_STENCIL;if(a===Xs)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Ah)return n.RED;if(a===_c)return n.RED_INTEGER;if(a===Sh)return n.RG;if(a===xc)return n.RG_INTEGER;if(a===Ec)return n.RGBA_INTEGER;if(a===is||a===as||a===ss||a===os)if(s===Ye)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===is)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===as)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===ss)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===is)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===as)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===ss)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===os)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Xo||a===qo||a===$o||a===Yo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Xo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===qo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===$o)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Yo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===wh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Zo||a===Ko)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===Zo)return s===Ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Ko)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Jo||a===Qo||a===jo||a===eu||a===tu||a===nu||a===ru||a===iu||a===au||a===su||a===ou||a===uu||a===lu||a===cu)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Jo)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Qo)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===jo)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===eu)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===tu)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===nu)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===ru)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===iu)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===au)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===su)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ou)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===uu)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===lu)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===cu)return s===Ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===us)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===us)return s===Ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===Dh||a===fu||a===hu||a===du)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===us)return o.COMPRESSED_RED_RGTC1_EXT;if(a===fu)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===hu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===du)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===gr?r?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:i}}class Og extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class la extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zg={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new la,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new la,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new la,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,s=null;const o=this._targetRay,c=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){s=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,r),g=this._getHandJoint(f,d);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const l=f.joints["index-finger-tip"],u=f.joints["thumb-tip"],h=l.position.distanceTo(u.position),m=.02,v=.005;f.inputState.pinching&&h>m+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&h<=m-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),f!==null&&(f.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new la;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Gg extends $t{constructor(e,t,r,i,a,s,o,c,f,l){if(l=l!==void 0?l:vr,l!==vr&&l!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&l===vr&&(r=Zn),r===void 0&&l===ui&&(r=gr),super(null,i,a,s,o,c,l,r,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hg extends Sr{constructor(e,t){super();const r=this;let i=null,a=1,s=null,o="local-floor",c=1,f=null,l=null,u=null,h=null,m=null,v=null;const d=t.getContextAttributes();let p=null,g=null;const M=[],_=[],A=new fn;A.layers.enable(1),A.viewport=new Rt;const y=new fn;y.layers.enable(2),y.viewport=new Rt;const D=[A,y],T=new Og;T.layers.enable(1),T.layers.enable(2);let b=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let W=M[H];return W===void 0&&(W=new Ls,M[H]=W),W.getTargetRaySpace()},this.getControllerGrip=function(H){let W=M[H];return W===void 0&&(W=new Ls,M[H]=W),W.getGripSpace()},this.getHand=function(H){let W=M[H];return W===void 0&&(W=new Ls,M[H]=W),W.getHandSpace()};function E(H){const W=_.indexOf(H.inputSource);if(W===-1)return;const J=M[W];J!==void 0&&(J.update(H.inputSource,H.frame,f||s),J.dispatchEvent({type:H.type,data:H.inputSource}))}function N(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",L);for(let H=0;H<M.length;H++){const W=_[H];W!==null&&(_[H]=null,M[H].disconnect(W))}b=null,x=null,e.setRenderTarget(p),m=null,h=null,u=null,i=null,g=null,U.stop(),r.isPresenting=!1,r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||s},this.setReferenceSpace=function(H){f=H},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return i},this.setSession=async function(H){if(i=H,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",N),i.addEventListener("inputsourceschange",L),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(i,t,W),i.updateRenderState({baseLayer:m}),g=new yr(m.framebufferWidth,m.framebufferHeight,{format:An,type:jn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let W=null,J=null,q=null;d.depth&&(q=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=d.stencil?ui:vr,J=d.stencil?gr:Zn);const j={colorFormat:t.RGBA8,depthFormat:q,scaleFactor:a};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(j),i.updateRenderState({layers:[h]}),g=new yr(h.textureWidth,h.textureHeight,{format:An,type:jn,depthTexture:new Gg(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0});const ne=e.properties.get(g);ne.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(c),f=null,s=await i.requestReferenceSpace(o),U.setContext(i),U.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(H){for(let W=0;W<H.removed.length;W++){const J=H.removed[W],q=_.indexOf(J);q>=0&&(_[q]=null,M[q].disconnect(J))}for(let W=0;W<H.added.length;W++){const J=H.added[W];let q=_.indexOf(J);if(q===-1){for(let ne=0;ne<M.length;ne++)if(ne>=_.length){_.push(J),q=ne;break}else if(_[ne]===null){_[ne]=J,q=ne;break}if(q===-1)break}const j=M[q];j&&j.connect(J)}}const P=new ee,I=new ee;function z(H,W,J){P.setFromMatrixPosition(W.matrixWorld),I.setFromMatrixPosition(J.matrixWorld);const q=P.distanceTo(I),j=W.projectionMatrix.elements,ne=J.projectionMatrix.elements,oe=j[14]/(j[10]-1),se=j[14]/(j[10]+1),pe=(j[9]+1)/j[5],fe=(j[9]-1)/j[5],Ae=(j[8]-1)/j[0],Z=(ne[8]+1)/ne[0],Se=oe*Ae,de=oe*Z,Ee=q/(-Ae+Z),xe=Ee*-Ae;W.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(xe),H.translateZ(Ee),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Le=oe+Ee,Te=se+Ee,be=Se-xe,Re=de+(q-xe),ke=pe*se/Te*Le,Xe=fe*se/Te*Le;H.projectionMatrix.makePerspective(be,Re,ke,Xe,Le,Te),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function O(H,W){W===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(W.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(i===null)return;T.near=y.near=A.near=H.near,T.far=y.far=A.far=H.far,(b!==T.near||x!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),b=T.near,x=T.far);const W=H.parent,J=T.cameras;O(T,W);for(let q=0;q<J.length;q++)O(J[q],W);J.length===2?z(T,A,y):T.projectionMatrix.copy(A.projectionMatrix),R(H,T,W)};function R(H,W,J){J===null?H.matrix.copy(W.matrixWorld):(H.matrix.copy(J.matrixWorld),H.matrix.invert(),H.matrix.multiply(W.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const q=H.children;for(let j=0,ne=q.length;j<ne;j++)q[j].updateMatrixWorld(!0);H.projectionMatrix.copy(W.projectionMatrix),H.projectionMatrixInverse.copy(W.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=qs*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(H){c=H,h!==null&&(h.fixedFoveation=H),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=H)};let G=null;function X(H,W){if(l=W.getViewerPose(f||s),v=W,l!==null){const J=l.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let q=!1;J.length!==T.cameras.length&&(T.cameras.length=0,q=!0);for(let j=0;j<J.length;j++){const ne=J[j];let oe=null;if(m!==null)oe=m.getViewport(ne);else{const pe=u.getViewSubImage(h,ne);oe=pe.viewport,j===0&&(e.setRenderTargetTextures(g,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(g))}let se=D[j];se===void 0&&(se=new fn,se.layers.enable(j),se.viewport=new Rt,D[j]=se),se.matrix.fromArray(ne.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(ne.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(oe.x,oe.y,oe.width,oe.height),j===0&&(T.matrix.copy(se.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),q===!0&&T.cameras.push(se)}}for(let J=0;J<M.length;J++){const q=_[J],j=M[J];q!==null&&j!==void 0&&j.update(q,W,f||s)}G&&G(H,W),W.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:W}),v=null}const U=new Uc;U.setAnimationLoop(X),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}}function Vg(n,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function r(p,g){g.color.getRGB(p.fogColor.value,Lc(n)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,M,_,A){g.isMeshBasicMaterial||g.isMeshLambertMaterial?a(p,g):g.isMeshToonMaterial?(a(p,g),u(p,g)):g.isMeshPhongMaterial?(a(p,g),l(p,g)):g.isMeshStandardMaterial?(a(p,g),h(p,g),g.isMeshPhysicalMaterial&&m(p,g,A)):g.isMeshMatcapMaterial?(a(p,g),v(p,g)):g.isMeshDepthMaterial?a(p,g):g.isMeshDistanceMaterial?(a(p,g),d(p,g)):g.isMeshNormalMaterial?a(p,g):g.isLineBasicMaterial?(s(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,M,_):g.isSpriteMaterial?f(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===qt&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===qt&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const M=e.get(g).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap){p.lightMap.value=g.lightMap;const _=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=g.lightMapIntensity*_,t(g.lightMap,p.lightMapTransform)}g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function s(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,M,_){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*M,p.scale.value=_*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function f(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function u(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function h(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),e.get(g).envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function m(p,g,M){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qt&&p.clearcoatNormalScale.value.negate())),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,g){g.matcap&&(p.matcap.value=g.matcap)}function d(p,g){const M=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Wg(n,e,t,r){let i={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){const A=_.program;r.uniformBlockBinding(M,A)}function f(M,_){let A=i[M.id];A===void 0&&(v(M),A=l(M),i[M.id]=A,M.addEventListener("dispose",p));const y=_.program;r.updateUBOMapping(M,y);const D=e.render.frame;a[M.id]!==D&&(h(M),a[M.id]=D)}function l(M){const _=u();M.__bindingPointIndex=_;const A=n.createBuffer(),y=M.__size,D=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,y,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,A),A}function u(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const _=i[M.id],A=M.uniforms,y=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let D=0,T=A.length;D<T;D++){const b=A[D];if(m(b,D,y)===!0){const x=b.__offset,E=Array.isArray(b.value)?b.value:[b.value];let N=0;for(let L=0;L<E.length;L++){const P=E[L],I=d(P);typeof P=="number"?(b.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,x+N,b.__data)):P.isMatrix3?(b.__data[0]=P.elements[0],b.__data[1]=P.elements[1],b.__data[2]=P.elements[2],b.__data[3]=P.elements[0],b.__data[4]=P.elements[3],b.__data[5]=P.elements[4],b.__data[6]=P.elements[5],b.__data[7]=P.elements[0],b.__data[8]=P.elements[6],b.__data[9]=P.elements[7],b.__data[10]=P.elements[8],b.__data[11]=P.elements[0]):(P.toArray(b.__data,N),N+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,x,b.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,_,A){const y=M.value;if(A[_]===void 0){if(typeof y=="number")A[_]=y;else{const D=Array.isArray(y)?y:[y],T=[];for(let b=0;b<D.length;b++)T.push(D[b].clone());A[_]=T}return!0}else if(typeof y=="number"){if(A[_]!==y)return A[_]=y,!0}else{const D=Array.isArray(A[_])?A[_]:[A[_]],T=Array.isArray(y)?y:[y];for(let b=0;b<D.length;b++){const x=D[b];if(x.equals(T[b])===!1)return x.copy(T[b]),!0}}return!1}function v(M){const _=M.uniforms;let A=0;const y=16;let D=0;for(let T=0,b=_.length;T<b;T++){const x=_[T],E={boundary:0,storage:0},N=Array.isArray(x.value)?x.value:[x.value];for(let L=0,P=N.length;L<P;L++){const I=N[L],z=d(I);E.boundary+=z.boundary,E.storage+=z.storage}if(x.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=A,T>0){D=A%y;const L=y-D;D!==0&&L-E.boundary<0&&(A+=y-D,x.__offset=A)}A+=E.storage}return D=A%y,D>0&&(A+=y-D),M.__size=A,M.__cache={},this}function d(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function p(M){const _=M.target;_.removeEventListener("dispose",p);const A=s.indexOf(_.__bindingPointIndex);s.splice(A,1),n.deleteBuffer(i[_.id]),delete i[_.id],delete a[_.id]}function g(){for(const M in i)n.deleteBuffer(i[M]);s=[],i={},a={}}return{bind:c,update:f,dispose:g}}function kg(){const n=xa("canvas");return n.style.display="block",n}class Vc{constructor(e={}){const{canvas:t=kg(),context:r=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:f=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let h;r!==null?h=r.getContextAttributes().alpha:h=s;const m=new Uint32Array(4),v=new Int32Array(4);let d=null,p=null;const g=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ye,this.useLegacyLights=!0,this.toneMapping=Vn,this.toneMappingExposure=1;const _=this;let A=!1,y=0,D=0,T=null,b=-1,x=null;const E=new Rt,N=new Rt;let L=null;const P=new je(0);let I=0,z=t.width,O=t.height,R=1,G=null,X=null;const U=new Rt(0,0,z,O),H=new Rt(0,0,z,O);let W=!1;const J=new Ic;let q=!1,j=!1,ne=null;const oe=new St,se=new Qe,pe=new ee,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ae(){return T===null?R:1}let Z=r;function Se(B,re){for(let ue=0;ue<B.length;ue++){const te=B[ue],le=t.getContext(te,re);if(le!==null)return le}return null}try{const B={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:f,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fo}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",ie,!1),t.addEventListener("webglcontextcreationerror",me,!1),Z===null){const re=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&re.shift(),Z=Se(re,B),Z===null)throw Se(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let de,Ee,xe,Le,Te,be,Re,ke,Xe,w,S,F,V,K,C,Q,Y,k,ce,ge,ae,we,ye,Fe;function Pe(){de=new e0(Z),Ee=new Ym(Z,de,e),de.init(Ee),we=new Bg(Z,de,Ee),xe=new Ig(Z,de,Ee),Le=new r0(Z),Te=new yg,be=new Ug(Z,de,xe,Te,Ee,we,Le),Re=new Km(_),ke=new jm(_),Xe=new dd(Z,Ee),ye=new qm(Z,de,Xe,Ee),w=new t0(Z,Xe,Le,ye),S=new o0(Z,w,Xe,Le),ce=new s0(Z,Ee,be),Q=new Zm(Te),F=new Eg(_,Re,ke,de,Ee,ye,Q),V=new Vg(_,Te),K=new Ag,C=new Cg(de,Ee),k=new Xm(_,Re,ke,xe,S,h,c),Y=new Ng(_,S,Ee),Fe=new Wg(Z,Le,Ee,xe),ge=new $m(Z,de,Le,Ee),ae=new n0(Z,de,Le,Ee),Le.programs=F.programs,_.capabilities=Ee,_.extensions=de,_.properties=Te,_.renderLists=K,_.shadowMap=Y,_.state=xe,_.info=Le}Pe();const $=new Hg(_,Z);this.xr=$,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const B=de.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=de.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return R},this.setPixelRatio=function(B){B!==void 0&&(R=B,this.setSize(z,O,!1))},this.getSize=function(B){return B.set(z,O)},this.setSize=function(B,re,ue=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=B,O=re,t.width=Math.floor(B*R),t.height=Math.floor(re*R),ue===!0&&(t.style.width=B+"px",t.style.height=re+"px"),this.setViewport(0,0,B,re)},this.getDrawingBufferSize=function(B){return B.set(z*R,O*R).floor()},this.setDrawingBufferSize=function(B,re,ue){z=B,O=re,R=ue,t.width=Math.floor(B*ue),t.height=Math.floor(re*ue),this.setViewport(0,0,B,re)},this.getCurrentViewport=function(B){return B.copy(E)},this.getViewport=function(B){return B.copy(U)},this.setViewport=function(B,re,ue,te){B.isVector4?U.set(B.x,B.y,B.z,B.w):U.set(B,re,ue,te),xe.viewport(E.copy(U).multiplyScalar(R).floor())},this.getScissor=function(B){return B.copy(H)},this.setScissor=function(B,re,ue,te){B.isVector4?H.set(B.x,B.y,B.z,B.w):H.set(B,re,ue,te),xe.scissor(N.copy(H).multiplyScalar(R).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(B){xe.setScissorTest(W=B)},this.setOpaqueSort=function(B){G=B},this.setTransparentSort=function(B){X=B},this.getClearColor=function(B){return B.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(B=!0,re=!0,ue=!0){let te=0;if(B){let le=!1;if(T!==null){const Ce=T.texture.format;le=Ce===Ec||Ce===xc||Ce===_c}if(le){const Ce=T.texture.type,Ie=Ce===jn||Ce===Zn||Ce===ho||Ce===gr||Ce===gc||Ce===vc,ze=k.getClearColor(),Ge=k.getClearAlpha(),Ze=ze.r,Ve=ze.g,We=ze.b;Ie?(m[0]=Ze,m[1]=Ve,m[2]=We,m[3]=Ge,Z.clearBufferuiv(Z.COLOR,0,m)):(v[0]=Ze,v[1]=Ve,v[2]=We,v[3]=Ge,Z.clearBufferiv(Z.COLOR,0,v))}else te|=Z.COLOR_BUFFER_BIT}re&&(te|=Z.DEPTH_BUFFER_BIT),ue&&(te|=Z.STENCIL_BUFFER_BIT),Z.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",ie,!1),t.removeEventListener("webglcontextcreationerror",me,!1),K.dispose(),C.dispose(),Te.dispose(),Re.dispose(),ke.dispose(),S.dispose(),ye.dispose(),Fe.dispose(),F.dispose(),$.dispose(),$.removeEventListener("sessionstart",it),$.removeEventListener("sessionend",sn),ne&&(ne.dispose(),ne=null),Ct.stop()};function ve(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const B=Le.autoReset,re=Y.enabled,ue=Y.autoUpdate,te=Y.needsUpdate,le=Y.type;Pe(),Le.autoReset=B,Y.enabled=re,Y.autoUpdate=ue,Y.needsUpdate=te,Y.type=le}function me(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function _e(B){const re=B.target;re.removeEventListener("dispose",_e),qe(re)}function qe(B){Ke(B),Te.remove(B)}function Ke(B){const re=Te.get(B).programs;re!==void 0&&(re.forEach(function(ue){F.releaseProgram(ue)}),B.isShaderMaterial&&F.releaseShaderCache(B))}this.renderBufferDirect=function(B,re,ue,te,le,Ce){re===null&&(re=fe);const Ie=le.isMesh&&le.matrixWorld.determinant()<0,ze=sr(B,re,ue,te,le);xe.setMaterial(te,Ie);let Ge=ue.index,Ze=1;te.wireframe===!0&&(Ge=w.getWireframeAttribute(ue),Ze=2);const Ve=ue.drawRange,We=ue.attributes.position;let dt=Ve.start*Ze,vt=(Ve.start+Ve.count)*Ze;Ce!==null&&(dt=Math.max(dt,Ce.start*Ze),vt=Math.min(vt,(Ce.start+Ce.count)*Ze)),Ge!==null?(dt=Math.max(dt,0),vt=Math.min(vt,Ge.count)):We!=null&&(dt=Math.max(dt,0),vt=Math.min(vt,We.count));const Qt=vt-dt;if(Qt<0||Qt===1/0)return;ye.setup(le,te,ze,ue,Ge);let Ht,et=ge;if(Ge!==null&&(Ht=Xe.get(Ge),et=ae,et.setIndex(Ht)),le.isMesh)te.wireframe===!0?(xe.setLineWidth(te.wireframeLinewidth*Ae()),et.setMode(Z.LINES)):et.setMode(Z.TRIANGLES);else if(le.isLine){let Ue=te.linewidth;Ue===void 0&&(Ue=1),xe.setLineWidth(Ue*Ae()),le.isLineSegments?et.setMode(Z.LINES):le.isLineLoop?et.setMode(Z.LINE_LOOP):et.setMode(Z.LINE_STRIP)}else le.isPoints?et.setMode(Z.POINTS):le.isSprite&&et.setMode(Z.TRIANGLES);if(le.isInstancedMesh)et.renderInstances(dt,Qt,le.count);else if(ue.isInstancedBufferGeometry){const Ue=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Lr=Math.min(ue.instanceCount,Ue);et.renderInstances(dt,Qt,Lr)}else et.render(dt,Qt)},this.compile=function(B,re){function ue(te,le,Ce){te.transparent===!0&&te.side===hn&&te.forceSinglePass===!1?(te.side=qt,te.needsUpdate=!0,Rr(te,le,Ce),te.side=tr,te.needsUpdate=!0,Rr(te,le,Ce),te.side=hn):Rr(te,le,Ce)}p=C.get(B),p.init(),M.push(p),B.traverseVisible(function(te){te.isLight&&te.layers.test(re.layers)&&(p.pushLight(te),te.castShadow&&p.pushShadow(te))}),p.setupLights(_.useLegacyLights),B.traverse(function(te){const le=te.material;if(le)if(Array.isArray(le))for(let Ce=0;Ce<le.length;Ce++){const Ie=le[Ce];ue(Ie,B,te)}else ue(le,B,te)}),M.pop(),p=null};let lt=null;function Gt(B){lt&&lt(B)}function it(){Ct.stop()}function sn(){Ct.start()}const Ct=new Uc;Ct.setAnimationLoop(Gt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(B){lt=B,$.setAnimationLoop(B),B===null?Ct.stop():Ct.start()},$.addEventListener("sessionstart",it),$.addEventListener("sessionend",sn),this.render=function(B,re){if(re!==void 0&&re.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(re),re=$.getCamera()),B.isScene===!0&&B.onBeforeRender(_,B,re,T),p=C.get(B,M.length),p.init(),M.push(p),oe.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),J.setFromProjectionMatrix(oe),j=this.localClippingEnabled,q=Q.init(this.clippingPlanes,j),d=K.get(B,g.length),d.init(),g.push(d),Oi(B,re,0,_.sortObjects),d.finish(),_.sortObjects===!0&&d.sort(G,X),this.info.render.frame++,q===!0&&Q.beginShadows();const ue=p.state.shadowsArray;if(Y.render(ue,B,re),q===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(d,B),p.setupLights(_.useLegacyLights),re.isArrayCamera){const te=re.cameras;for(let le=0,Ce=te.length;le<Ce;le++){const Ie=te[le];zi(d,B,Ie,Ie.viewport)}}else zi(d,B,re);T!==null&&(be.updateMultisampleRenderTarget(T),be.updateRenderTargetMipmap(T)),B.isScene===!0&&B.onAfterRender(_,B,re),ye.resetDefaultState(),b=-1,x=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Oi(B,re,ue,te){if(B.visible===!1)return;if(B.layers.test(re.layers)){if(B.isGroup)ue=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(re);else if(B.isLight)p.pushLight(B),B.castShadow&&p.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||J.intersectsSprite(B)){te&&pe.setFromMatrixPosition(B.matrixWorld).applyMatrix4(oe);const Ie=S.update(B),ze=B.material;ze.visible&&d.push(B,Ie,ze,ue,pe.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(!B.frustumCulled||J.intersectsObject(B))){const Ie=S.update(B),ze=B.material;if(te&&(B.boundingSphere!==void 0?(B.boundingSphere===null&&B.computeBoundingSphere(),pe.copy(B.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),pe.copy(Ie.boundingSphere.center)),pe.applyMatrix4(B.matrixWorld).applyMatrix4(oe)),Array.isArray(ze)){const Ge=Ie.groups;for(let Ze=0,Ve=Ge.length;Ze<Ve;Ze++){const We=Ge[Ze],dt=ze[We.materialIndex];dt&&dt.visible&&d.push(B,Ie,dt,ue,pe.z,We)}}else ze.visible&&d.push(B,Ie,ze,ue,pe.z,null)}}const Ce=B.children;for(let Ie=0,ze=Ce.length;Ie<ze;Ie++)Oi(Ce[Ie],re,ue,te)}function zi(B,re,ue,te){const le=B.opaque,Ce=B.transmissive,Ie=B.transparent;p.setupLightsView(ue),q===!0&&Q.setGlobalState(_.clippingPlanes,ue),Ce.length>0&&Qa(le,Ce,re,ue),te&&xe.viewport(E.copy(te)),le.length>0&&Fr(le,re,ue),Ce.length>0&&Fr(Ce,re,ue),Ie.length>0&&Fr(Ie,re,ue),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function Qa(B,re,ue,te){const le=Ee.isWebGL2;ne===null&&(ne=new yr(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?wi:jn,minFilter:Si,samples:le?4:0})),_.getDrawingBufferSize(se),le?ne.setSize(se.x,se.y):ne.setSize($s(se.x),$s(se.y));const Ce=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(P),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Ie=_.toneMapping;_.toneMapping=Vn,Fr(B,ue,te),be.updateMultisampleRenderTarget(ne),be.updateRenderTargetMipmap(ne);let ze=!1;for(let Ge=0,Ze=re.length;Ge<Ze;Ge++){const Ve=re[Ge],We=Ve.object,dt=Ve.geometry,vt=Ve.material,Qt=Ve.group;if(vt.side===hn&&We.layers.test(te.layers)){const Ht=vt.side;vt.side=qt,vt.needsUpdate=!0,Gi(We,ue,te,dt,vt,Qt),vt.side=Ht,vt.needsUpdate=!0,ze=!0}}ze===!0&&(be.updateMultisampleRenderTarget(ne),be.updateRenderTargetMipmap(ne)),_.setRenderTarget(Ce),_.setClearColor(P,I),_.toneMapping=Ie}function Fr(B,re,ue){const te=re.isScene===!0?re.overrideMaterial:null;for(let le=0,Ce=B.length;le<Ce;le++){const Ie=B[le],ze=Ie.object,Ge=Ie.geometry,Ze=te===null?Ie.material:te,Ve=Ie.group;ze.layers.test(ue.layers)&&Gi(ze,re,ue,Ge,Ze,Ve)}}function Gi(B,re,ue,te,le,Ce){B.onBeforeRender(_,re,ue,te,le,Ce),B.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),le.onBeforeRender(_,re,ue,te,B,Ce),le.transparent===!0&&le.side===hn&&le.forceSinglePass===!1?(le.side=qt,le.needsUpdate=!0,_.renderBufferDirect(ue,re,te,le,B,Ce),le.side=tr,le.needsUpdate=!0,_.renderBufferDirect(ue,re,te,le,B,Ce),le.side=hn):_.renderBufferDirect(ue,re,te,le,B,Ce),B.onAfterRender(_,re,ue,te,le,Ce)}function Rr(B,re,ue){re.isScene!==!0&&(re=fe);const te=Te.get(B),le=p.state.lights,Ce=p.state.shadowsArray,Ie=le.state.version,ze=F.getParameters(B,le.state,Ce,re,ue),Ge=F.getProgramCacheKey(ze);let Ze=te.programs;te.environment=B.isMeshStandardMaterial?re.environment:null,te.fog=re.fog,te.envMap=(B.isMeshStandardMaterial?ke:Re).get(B.envMap||te.environment),Ze===void 0&&(B.addEventListener("dispose",_e),Ze=new Map,te.programs=Ze);let Ve=Ze.get(Ge);if(Ve!==void 0){if(te.currentProgram===Ve&&te.lightsStateVersion===Ie)return Hi(B,ze),Ve}else ze.uniforms=F.getUniforms(B),B.onBuild(ue,ze,_),B.onBeforeCompile(ze,_),Ve=F.acquireProgram(ze,Ge),Ze.set(Ge,Ve),te.uniforms=ze.uniforms;const We=te.uniforms;(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(We.clippingPlanes=Q.uniform),Hi(B,ze),te.needsLights=es(B),te.lightsStateVersion=Ie,te.needsLights&&(We.ambientLightColor.value=le.state.ambient,We.lightProbe.value=le.state.probe,We.directionalLights.value=le.state.directional,We.directionalLightShadows.value=le.state.directionalShadow,We.spotLights.value=le.state.spot,We.spotLightShadows.value=le.state.spotShadow,We.rectAreaLights.value=le.state.rectArea,We.ltc_1.value=le.state.rectAreaLTC1,We.ltc_2.value=le.state.rectAreaLTC2,We.pointLights.value=le.state.point,We.pointLightShadows.value=le.state.pointShadow,We.hemisphereLights.value=le.state.hemi,We.directionalShadowMap.value=le.state.directionalShadowMap,We.directionalShadowMatrix.value=le.state.directionalShadowMatrix,We.spotShadowMap.value=le.state.spotShadowMap,We.spotLightMatrix.value=le.state.spotLightMatrix,We.spotLightMap.value=le.state.spotLightMap,We.pointShadowMap.value=le.state.pointShadowMap,We.pointShadowMatrix.value=le.state.pointShadowMatrix);const dt=Ve.getUniforms(),vt=ga.seqWithValue(dt.seq,We);return te.currentProgram=Ve,te.uniformsList=vt,Ve}function Hi(B,re){const ue=Te.get(B);ue.outputColorSpace=re.outputColorSpace,ue.instancing=re.instancing,ue.skinning=re.skinning,ue.morphTargets=re.morphTargets,ue.morphNormals=re.morphNormals,ue.morphColors=re.morphColors,ue.morphTargetsCount=re.morphTargetsCount,ue.numClippingPlanes=re.numClippingPlanes,ue.numIntersection=re.numClipIntersection,ue.vertexAlphas=re.vertexAlphas,ue.vertexTangents=re.vertexTangents,ue.toneMapping=re.toneMapping}function sr(B,re,ue,te,le){re.isScene!==!0&&(re=fe),be.resetTextureUnits();const Ce=re.fog,Ie=te.isMeshStandardMaterial?re.environment:null,ze=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Fn,Ge=(te.isMeshStandardMaterial?ke:Re).get(te.envMap||Ie),Ze=te.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,Ve=!!ue.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!ue.morphAttributes.position,dt=!!ue.morphAttributes.normal,vt=!!ue.morphAttributes.color,Qt=te.toneMapped?_.toneMapping:Vn,Ht=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,et=Ht!==void 0?Ht.length:0,Ue=Te.get(te),Lr=p.state.lights;if(q===!0&&(j===!0||B!==x)){const jt=B===x&&te.id===b;Q.setState(te,B,jt)}let Et=!1;te.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Lr.state.version||Ue.outputColorSpace!==ze||le.isInstancedMesh&&Ue.instancing===!1||!le.isInstancedMesh&&Ue.instancing===!0||le.isSkinnedMesh&&Ue.skinning===!1||!le.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Ge||te.fog===!0&&Ue.fog!==Ce||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==Q.numPlanes||Ue.numIntersection!==Q.numIntersection)||Ue.vertexAlphas!==Ze||Ue.vertexTangents!==Ve||Ue.morphTargets!==We||Ue.morphNormals!==dt||Ue.morphColors!==vt||Ue.toneMapping!==Qt||Ee.isWebGL2===!0&&Ue.morphTargetsCount!==et)&&(Et=!0):(Et=!0,Ue.__version=te.version);let on=Ue.currentProgram;Et===!0&&(on=Rr(te,re,le));let or=!1,Wn=!1,Pr=!1;const _t=on.getUniforms(),ur=Ue.uniforms;if(xe.useProgram(on.program)&&(or=!0,Wn=!0,Pr=!0),te.id!==b&&(b=te.id,Wn=!0),or||x!==B){if(_t.setValue(Z,"projectionMatrix",B.projectionMatrix),Ee.logarithmicDepthBuffer&&_t.setValue(Z,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),x!==B&&(x=B,Wn=!0,Pr=!0),te.isShaderMaterial||te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshStandardMaterial||te.envMap){const jt=_t.map.cameraPosition;jt!==void 0&&jt.setValue(Z,pe.setFromMatrixPosition(B.matrixWorld))}(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&_t.setValue(Z,"isOrthographic",B.isOrthographicCamera===!0),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial||te.isShadowMaterial||le.isSkinnedMesh)&&_t.setValue(Z,"viewMatrix",B.matrixWorldInverse)}if(le.isSkinnedMesh){_t.setOptional(Z,le,"bindMatrix"),_t.setOptional(Z,le,"bindMatrixInverse");const jt=le.skeleton;jt&&(Ee.floatVertexTextures?(jt.boneTexture===null&&jt.computeBoneTexture(),_t.setValue(Z,"boneTexture",jt.boneTexture,be),_t.setValue(Z,"boneTextureSize",jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ts=ue.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0&&Ee.isWebGL2===!0)&&ce.update(le,ue,on),(Wn||Ue.receiveShadow!==le.receiveShadow)&&(Ue.receiveShadow=le.receiveShadow,_t.setValue(Z,"receiveShadow",le.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(ur.envMap.value=Ge,ur.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Wn&&(_t.setValue(Z,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&ja(ur,Pr),Ce&&te.fog===!0&&V.refreshFogUniforms(ur,Ce),V.refreshMaterialUniforms(ur,te,R,O,ne),ga.upload(Z,Ue.uniformsList,ur,be)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ga.upload(Z,Ue.uniformsList,ur,be),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&_t.setValue(Z,"center",le.center),_t.setValue(Z,"modelViewMatrix",le.modelViewMatrix),_t.setValue(Z,"normalMatrix",le.normalMatrix),_t.setValue(Z,"modelMatrix",le.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const jt=te.uniformsGroups;for(let ns=0,Hf=jt.length;ns<Hf;ns++)if(Ee.isWebGL2){const Bo=jt[ns];Fe.update(Bo,on),Fe.bind(Bo,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function ja(B,re){B.ambientLightColor.needsUpdate=re,B.lightProbe.needsUpdate=re,B.directionalLights.needsUpdate=re,B.directionalLightShadows.needsUpdate=re,B.pointLights.needsUpdate=re,B.pointLightShadows.needsUpdate=re,B.spotLights.needsUpdate=re,B.spotLightShadows.needsUpdate=re,B.rectAreaLights.needsUpdate=re,B.hemisphereLights.needsUpdate=re}function es(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(B,re,ue){Te.get(B.texture).__webglTexture=re,Te.get(B.depthTexture).__webglTexture=ue;const te=Te.get(B);te.__hasExternalTextures=!0,te.__hasExternalTextures&&(te.__autoAllocateDepthBuffer=ue===void 0,te.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,re){const ue=Te.get(B);ue.__webglFramebuffer=re,ue.__useDefaultFramebuffer=re===void 0},this.setRenderTarget=function(B,re=0,ue=0){T=B,y=re,D=ue;let te=!0,le=null,Ce=!1,Ie=!1;if(B){const Ge=Te.get(B);Ge.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(Z.FRAMEBUFFER,null),te=!1):Ge.__webglFramebuffer===void 0?be.setupRenderTarget(B):Ge.__hasExternalTextures&&be.rebindTextures(B,Te.get(B.texture).__webglTexture,Te.get(B.depthTexture).__webglTexture);const Ze=B.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ie=!0);const Ve=Te.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(le=Ve[re],Ce=!0):Ee.isWebGL2&&B.samples>0&&be.useMultisampledRTT(B)===!1?le=Te.get(B).__webglMultisampledFramebuffer:le=Ve,E.copy(B.viewport),N.copy(B.scissor),L=B.scissorTest}else E.copy(U).multiplyScalar(R).floor(),N.copy(H).multiplyScalar(R).floor(),L=W;if(xe.bindFramebuffer(Z.FRAMEBUFFER,le)&&Ee.drawBuffers&&te&&xe.drawBuffers(B,le),xe.viewport(E),xe.scissor(N),xe.setScissorTest(L),Ce){const Ge=Te.get(B.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ge.__webglTexture,ue)}else if(Ie){const Ge=Te.get(B.texture),Ze=re||0;Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ge.__webglTexture,ue||0,Ze)}b=-1},this.readRenderTargetPixels=function(B,re,ue,te,le,Ce,Ie){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Te.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){xe.bindFramebuffer(Z.FRAMEBUFFER,ze);try{const Ge=B.texture,Ze=Ge.format,Ve=Ge.type;if(Ze!==An&&we.convert(Ze)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Ve===wi&&(de.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&de.has("EXT_color_buffer_float"));if(Ve!==jn&&we.convert(Ve)!==Z.getParameter(Z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Kn&&(Ee.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=B.width-te&&ue>=0&&ue<=B.height-le&&Z.readPixels(re,ue,te,le,we.convert(Ze),we.convert(Ve),Ce)}finally{const Ge=T!==null?Te.get(T).__webglFramebuffer:null;xe.bindFramebuffer(Z.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(B,re,ue=0){const te=Math.pow(2,-ue),le=Math.floor(re.image.width*te),Ce=Math.floor(re.image.height*te);be.setTexture2D(re,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ue,0,0,B.x,B.y,le,Ce),xe.unbindTexture()},this.copyTextureToTexture=function(B,re,ue,te=0){const le=re.image.width,Ce=re.image.height,Ie=we.convert(ue.format),ze=we.convert(ue.type);be.setTexture2D(ue,0),Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,ue.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ue.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,ue.unpackAlignment),re.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,te,B.x,B.y,le,Ce,Ie,ze,re.image.data):re.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,te,B.x,B.y,re.mipmaps[0].width,re.mipmaps[0].height,Ie,re.mipmaps[0].data):Z.texSubImage2D(Z.TEXTURE_2D,te,B.x,B.y,Ie,ze,re.image),te===0&&ue.generateMipmaps&&Z.generateMipmap(Z.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(B,re,ue,te,le=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=B.max.x-B.min.x+1,Ie=B.max.y-B.min.y+1,ze=B.max.z-B.min.z+1,Ge=we.convert(te.format),Ze=we.convert(te.type);let Ve;if(te.isData3DTexture)be.setTexture3D(te,0),Ve=Z.TEXTURE_3D;else if(te.isDataArrayTexture)be.setTexture2DArray(te,0),Ve=Z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,te.flipY),Z.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Z.pixelStorei(Z.UNPACK_ALIGNMENT,te.unpackAlignment);const We=Z.getParameter(Z.UNPACK_ROW_LENGTH),dt=Z.getParameter(Z.UNPACK_IMAGE_HEIGHT),vt=Z.getParameter(Z.UNPACK_SKIP_PIXELS),Qt=Z.getParameter(Z.UNPACK_SKIP_ROWS),Ht=Z.getParameter(Z.UNPACK_SKIP_IMAGES),et=ue.isCompressedTexture?ue.mipmaps[0]:ue.image;Z.pixelStorei(Z.UNPACK_ROW_LENGTH,et.width),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,et.height),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,B.min.x),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,B.min.y),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,B.min.z),ue.isDataTexture||ue.isData3DTexture?Z.texSubImage3D(Ve,le,re.x,re.y,re.z,Ce,Ie,ze,Ge,Ze,et.data):ue.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Ve,le,re.x,re.y,re.z,Ce,Ie,ze,Ge,et.data)):Z.texSubImage3D(Ve,le,re.x,re.y,re.z,Ce,Ie,ze,Ge,Ze,et),Z.pixelStorei(Z.UNPACK_ROW_LENGTH,We),Z.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,dt),Z.pixelStorei(Z.UNPACK_SKIP_PIXELS,vt),Z.pixelStorei(Z.UNPACK_SKIP_ROWS,Qt),Z.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ht),le===0&&te.generateMipmaps&&Z.generateMipmap(Ve),xe.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?be.setTextureCube(B,0):B.isData3DTexture?be.setTexture3D(B,0):B.isDataArrayTexture||B.isCompressedArrayTexture?be.setTexture2DArray(B,0):be.setTexture2D(B,0),xe.unbindTexture()},this.resetState=function(){y=0,D=0,T=null,xe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ye?_r:yc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===_r?Ye:Fn}}class Xg extends Vc{}Xg.prototype.isWebGL1Renderer=!0;class qg extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Di extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const el=new ee,tl=new ee,nl=new St,Ps=new po,ca=new Li;class vo extends Pt{constructor(e=new Ot,t=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let i=1,a=t.count;i<a;i++)el.fromBufferAttribute(t,i-1),tl.fromBufferAttribute(t,i),r[i]=r[i-1],r[i]+=el.distanceTo(tl);e.setAttribute("lineDistance",new Dn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ca.copy(r.boundingSphere),ca.applyMatrix4(i),ca.radius+=a,e.ray.intersectsSphere(ca)===!1)return;nl.copy(i).invert(),Ps.copy(e.ray).applyMatrix4(nl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,f=new ee,l=new ee,u=new ee,h=new ee,m=this.isLineSegments?2:1,v=r.index,p=r.attributes.position;if(v!==null){const g=Math.max(0,s.start),M=Math.min(v.count,s.start+s.count);for(let _=g,A=M-1;_<A;_+=m){const y=v.getX(_),D=v.getX(_+1);if(f.fromBufferAttribute(p,y),l.fromBufferAttribute(p,D),Ps.distanceSqToSegment(f,l,h,u)>c)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const g=Math.max(0,s.start),M=Math.min(p.count,s.start+s.count);for(let _=g,A=M-1;_<A;_+=m){if(f.fromBufferAttribute(p,_),l.fromBufferAttribute(p,_+1),Ps.distanceSqToSegment(f,l,h,u)>c)continue;h.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(h);D<e.near||D>e.far||t.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}const rl=new ee,il=new ee;class Zs extends vo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let i=0,a=t.count;i<a;i+=2)rl.fromBufferAttribute(t,i),il.fromBufferAttribute(t,i+1),r[i]=i===0?0:r[i-1],r[i+1]=r[i]+rl.distanceTo(il);e.setAttribute("lineDistance",new Dn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ks extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const al=new St,Js=new po,fa=new Li,ha=new ee;class sl extends Pt{constructor(e=new Ot,t=new Ks){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fa.copy(r.boundingSphere),fa.applyMatrix4(i),fa.radius+=a,e.ray.intersectsSphere(fa)===!1)return;al.copy(i).invert(),Js.copy(e.ray).applyMatrix4(al);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,f=r.index,u=r.attributes.position;if(f!==null){const h=Math.max(0,s.start),m=Math.min(f.count,s.start+s.count);for(let v=h,d=m;v<d;v++){const p=f.getX(v);ha.fromBufferAttribute(u,p),ol(ha,p,c,i,e,t,this)}}else{const h=Math.max(0,s.start),m=Math.min(u.count,s.start+s.count);for(let v=h,d=m;v<d;v++)ha.fromBufferAttribute(u,v),ol(ha,v,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ol(n,e,t,r,i,a,s){const o=Js.distanceSqToPoint(n);if(o<t){const c=new ee;Js.closestPointToPoint(n,c),c.applyMatrix4(r);const f=i.ray.origin.distanceTo(c);if(f<i.near||f>i.far)return;a.push({distance:f,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:s})}}class $g extends $t{constructor(e,t,r,i,a,s,o,c,f){super(e,t,r,i,a,s,o,c,f),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ul extends wr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mc,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Yg extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class ll extends Yg{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}class cl{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const fl=new ee,da=new ee;class Zg{constructor(e=new ee,t=new ee){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){fl.subVectors(e,this.start),da.subVectors(this.end,this.start);const r=da.dot(da);let a=da.dot(fl)/r;return t&&(a=Bt(a,0,1)),a}closestPointToPoint(e,t,r){const i=this.closestPointToPointParameter(e,t);return this.delta(r).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Kg extends Zs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],r=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Ot;i.setAttribute("position",new Dn(t,3)),i.setAttribute("color",new Dn(r,3));const a=new Di({vertexColors:!0,toneMapped:!1});super(i,a),this.type="AxesHelper"}setColors(e,t,r){const i=new je,a=this.geometry.attributes.color.array;return i.set(e),i.toArray(a,0),i.toArray(a,3),i.set(t),i.toArray(a,6),i.toArray(a,9),i.set(r),i.toArray(a,12),i.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fo);function Ea(){return Ea=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Ea.apply(this,arguments)}var Wc={epsilon:1e-12,matrix:"Matrix",number:"number",precision:64,predictable:!1,randomSeed:null};function gt(n){return typeof n=="number"}function Tt(n){return!n||typeof n!="object"||typeof n.constructor!="function"?!1:n.isBigNumber===!0&&typeof n.constructor.prototype=="object"&&n.constructor.prototype.isBigNumber===!0||typeof n.constructor.isDecimal=="function"&&n.constructor.isDecimal(n)===!0}function _o(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isComplex===!0||!1}function xo(n){return n&&typeof n=="object"&&Object.getPrototypeOf(n).isFraction===!0||!1}function kc(n){return n&&n.constructor.prototype.isUnit===!0||!1}function yn(n){return typeof n=="string"}var st=Array.isArray;function ht(n){return n&&n.constructor.prototype.isMatrix===!0||!1}function ya(n){return Array.isArray(n)||ht(n)}function Xc(n){return n&&n.isDenseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function qc(n){return n&&n.isSparseMatrix&&n.constructor.prototype.isMatrix===!0||!1}function $c(n){return n&&n.constructor.prototype.isRange===!0||!1}function Eo(n){return n&&n.constructor.prototype.isIndex===!0||!1}function Jg(n){return typeof n=="boolean"}function Qg(n){return n&&n.constructor.prototype.isResultSet===!0||!1}function jg(n){return n&&n.constructor.prototype.isHelp===!0||!1}function ev(n){return typeof n=="function"}function tv(n){return n instanceof Date}function nv(n){return n instanceof RegExp}function rv(n){return!!(n&&typeof n=="object"&&n.constructor===Object&&!_o(n)&&!xo(n))}function iv(n){return n===null}function av(n){return n===void 0}function sv(n){return n&&n.isAccessorNode===!0&&n.constructor.prototype.isNode===!0||!1}function ov(n){return n&&n.isArrayNode===!0&&n.constructor.prototype.isNode===!0||!1}function uv(n){return n&&n.isAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function lv(n){return n&&n.isBlockNode===!0&&n.constructor.prototype.isNode===!0||!1}function cv(n){return n&&n.isConditionalNode===!0&&n.constructor.prototype.isNode===!0||!1}function fv(n){return n&&n.isConstantNode===!0&&n.constructor.prototype.isNode===!0||!1}function hv(n){return n&&n.isFunctionAssignmentNode===!0&&n.constructor.prototype.isNode===!0||!1}function dv(n){return n&&n.isFunctionNode===!0&&n.constructor.prototype.isNode===!0||!1}function pv(n){return n&&n.isIndexNode===!0&&n.constructor.prototype.isNode===!0||!1}function mv(n){return n&&n.isNode===!0&&n.constructor.prototype.isNode===!0||!1}function gv(n){return n&&n.isObjectNode===!0&&n.constructor.prototype.isNode===!0||!1}function vv(n){return n&&n.isOperatorNode===!0&&n.constructor.prototype.isNode===!0||!1}function _v(n){return n&&n.isParenthesisNode===!0&&n.constructor.prototype.isNode===!0||!1}function xv(n){return n&&n.isRangeNode===!0&&n.constructor.prototype.isNode===!0||!1}function Ev(n){return n&&n.isRelationalNode===!0&&n.constructor.prototype.isNode===!0||!1}function yv(n){return n&&n.isSymbolNode===!0&&n.constructor.prototype.isNode===!0||!1}function Mv(n){return n&&n.constructor.prototype.isChain===!0||!1}function er(n){var e=typeof n;return e==="object"?n===null?"null":Tt(n)?"BigNumber":n.constructor&&n.constructor.name?n.constructor.name:"Object":e}function tt(n){var e=typeof n;if(e==="number"||e==="string"||e==="boolean"||n===null||n===void 0)return n;if(typeof n.clone=="function")return n.clone();if(Array.isArray(n))return n.map(function(t){return tt(t)});if(n instanceof Date)return new Date(n.valueOf());if(Tt(n))return n;if(n instanceof RegExp)throw new TypeError("Cannot clone "+n);return Av(n,tt)}function Av(n,e){var t={};for(var r in n)bi(n,r)&&(t[r]=e(n[r]));return t}function Sv(n,e){for(var t in e)bi(e,t)&&(n[t]=e[t]);return n}function Ma(n,e){var t,r,i;if(Array.isArray(n)){if(!Array.isArray(e)||n.length!==e.length)return!1;for(r=0,i=n.length;r<i;r++)if(!Ma(n[r],e[r]))return!1;return!0}else{if(typeof n=="function")return n===e;if(n instanceof Object){if(Array.isArray(e)||!(e instanceof Object))return!1;for(t in n)if(!(t in e)||!Ma(n[t],e[t]))return!1;for(t in e)if(!(t in n))return!1;return!0}else return n===e}}function bi(n,e){return n&&Object.hasOwnProperty.call(n,e)}function wv(n,e){for(var t={},r=0;r<e.length;r++){var i=e[r],a=n[i];a!==void 0&&(t[i]=a)}return t}var Dv=["Matrix","Array"],bv=["number","BigNumber","Fraction"],Zt=function(e){if(e)throw new Error(`The global config is readonly. 
Please create a mathjs instance if you want to change the default configuration. 
Example:

  import { create, all } from 'mathjs';
  const mathjs = create(all);
  mathjs.config({ number: 'BigNumber' });
`);return Object.freeze(Wc)};Ea(Zt,Wc,{MATRIX_OPTIONS:Dv,NUMBER_OPTIONS:bv});function vn(n,e){var t=typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=Tv(n))||e&&n&&typeof n.length=="number"){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(f){throw f},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a=!0,s=!1,o;return{s:function(){t=t.call(n)},n:function(){var f=t.next();return a=f.done,f},e:function(f){s=!0,o=f},f:function(){try{!a&&t.return!=null&&t.return()}finally{if(s)throw o}}}}function Tv(n,e){if(n){if(typeof n=="string")return hl(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return hl(n,e)}}function hl(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function ti(n){"@babel/helpers - typeof";return ti=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ti(n)}function dl(){return!0}function ln(){return!1}function Qr(){}var pl="Argument is not a typed-function.";function Yc(){function n(w){return ti(w)==="object"&&w!==null&&w.constructor===Object}var e=[{name:"number",test:function(S){return typeof S=="number"}},{name:"string",test:function(S){return typeof S=="string"}},{name:"boolean",test:function(S){return typeof S=="boolean"}},{name:"Function",test:function(S){return typeof S=="function"}},{name:"Array",test:Array.isArray},{name:"Date",test:function(S){return S instanceof Date}},{name:"RegExp",test:function(S){return S instanceof RegExp}},{name:"Object",test:n},{name:"null",test:function(S){return S===null}},{name:"undefined",test:function(S){return S===void 0}}],t={name:"any",test:dl,isAny:!0},r,i,a=0,s={createCount:0};function o(w){var S=r.get(w);if(S)return S;var F='Unknown type "'+w+'"',V=w.toLowerCase(),K,C=vn(i),Q;try{for(C.s();!(Q=C.n()).done;)if(K=Q.value,K.toLowerCase()===V){F+='. Did you mean "'+K+'" ?';break}}catch(Y){C.e(Y)}finally{C.f()}throw new TypeError(F)}function c(w){for(var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"any",F=S?o(S).index:i.length,V=[],K=0;K<w.length;++K){if(!w[K]||typeof w[K].name!="string"||typeof w[K].test!="function")throw new TypeError("Object with properties {name: string, test: function} expected");var C=w[K].name;if(r.has(C))throw new TypeError('Duplicate type name "'+C+'"');V.push(C),r.set(C,{name:C,test:w[K].test,isAny:w[K].isAny,index:F+K,conversionsTo:[]})}var Q=i.slice(F);i=i.slice(0,F).concat(V).concat(Q);for(var Y=F+V.length;Y<i.length;++Y)r.get(i[Y]).index=Y}function f(){r=new Map,i=[],a=0,c([t],!1)}f(),c(e);function l(){var w,S=vn(i),F;try{for(S.s();!(F=S.n()).done;)w=F.value,r.get(w).conversionsTo=[]}catch(V){S.e(V)}finally{S.f()}a=0}function u(w){var S=i.filter(function(F){var V=r.get(F);return!V.isAny&&V.test(w)});return S.length?S:["any"]}function h(w){return w&&typeof w=="function"&&"_typedFunctionData"in w}function m(w,S,F){if(!h(w))throw new TypeError(pl);var V=F&&F.exact,K=Array.isArray(S)?S.join(","):S,C=A(K),Q=p(C);if(!V||Q in w.signatures){var Y=w._typedFunctionData.signatureMap.get(Q);if(Y)return Y}var k=C.length,ce;if(V){ce=[];var ge;for(ge in w.signatures)ce.push(w._typedFunctionData.signatureMap.get(ge))}else ce=w._typedFunctionData.signatures;for(var ae=0;ae<k;++ae){var we=C[ae],ye=[],Fe=void 0,Pe=vn(ce),$;try{for(Pe.s();!($=Pe.n()).done;){Fe=$.value;var ve=b(Fe.params,ae);if(!(!ve||we.restParam&&!ve.restParam)){if(!ve.hasAny){var ie=function(){var Ke=_(ve);if(we.types.some(function(lt){return!Ke.has(lt.name)}))return"continue"}();if(ie==="continue")continue}ye.push(Fe)}}}catch(Ke){Pe.e(Ke)}finally{Pe.f()}if(ce=ye,ce.length===0)break}var me,_e=vn(ce),qe;try{for(_e.s();!(qe=_e.n()).done;)if(me=qe.value,me.params.length<=k)return me}catch(Ke){_e.e(Ke)}finally{_e.f()}throw new TypeError("Signature not found (signature: "+(w.name||"unnamed")+"("+p(C,", ")+"))")}function v(w,S,F){return m(w,S,F).implementation}function d(w,S){var F=o(S);if(F.test(w))return w;var V=F.conversionsTo;if(V.length===0)throw new Error("There are no conversions to "+S+" defined.");for(var K=0;K<V.length;K++){var C=o(V[K].from);if(C.test(w))return V[K].convert(w)}throw new Error("Cannot convert "+w+" to "+S)}function p(w){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:",";return w.map(function(F){return F.name}).join(S)}function g(w){var S=w.indexOf("...")===0,F=S?w.length>3?w.slice(3):"any":w,V=F.split("|").map(function(Y){return o(Y.trim())}),K=!1,C=S?"...":"",Q=V.map(function(Y){return K=Y.isAny||K,C+=Y.name+"|",{name:Y.name,typeIndex:Y.index,test:Y.test,isAny:Y.isAny,conversion:null,conversionIndex:-1}});return{types:Q,name:C.slice(0,-1),hasAny:K,hasConversion:!1,restParam:S}}function M(w){var S=w.types.map(function(Q){return Q.name}),F=R(S),V=w.hasAny,K=w.name,C=F.map(function(Q){var Y=o(Q.from);return V=Y.isAny||V,K+="|"+Q.from,{name:Q.from,typeIndex:Y.index,test:Y.test,isAny:Y.isAny,conversion:Q,conversionIndex:Q.index}});return{types:w.types.concat(C),name:K,hasAny:V,hasConversion:C.length>0,restParam:w.restParam}}function _(w){return w.typeSet||(w.typeSet=new Set,w.types.forEach(function(S){return w.typeSet.add(S.name)})),w.typeSet}function A(w){var S=[];if(typeof w!="string")throw new TypeError("Signatures must be strings");var F=w.trim();if(F==="")return S;for(var V=F.split(","),K=0;K<V.length;++K){var C=g(V[K].trim());if(C.restParam&&K!==V.length-1)throw new SyntaxError('Unexpected rest parameter "'+V[K]+'": only allowed for the last parameter');if(C.types.length===0)return null;S.push(C)}return S}function y(w){var S=pe(w);return S?S.restParam:!1}function D(w){if(!w||w.types.length===0)return dl;if(w.types.length===1)return o(w.types[0].name).test;if(w.types.length===2){var S=o(w.types[0].name).test,F=o(w.types[1].name).test;return function(C){return S(C)||F(C)}}else{var V=w.types.map(function(K){return o(K.name).test});return function(C){for(var Q=0;Q<V.length;Q++)if(V[Q](C))return!0;return!1}}}function T(w){var S,F,V;if(y(w)){S=se(w).map(D);var K=S.length,C=D(pe(w)),Q=function(k){for(var ce=K;ce<k.length;ce++)if(!C(k[ce]))return!1;return!0};return function(k){for(var ce=0;ce<S.length;ce++)if(!S[ce](k[ce]))return!1;return Q(k)&&k.length>=K+1}}else return w.length===0?function(k){return k.length===0}:w.length===1?(F=D(w[0]),function(k){return F(k[0])&&k.length===1}):w.length===2?(F=D(w[0]),V=D(w[1]),function(k){return F(k[0])&&V(k[1])&&k.length===2}):(S=w.map(D),function(k){for(var ce=0;ce<S.length;ce++)if(!S[ce](k[ce]))return!1;return k.length===S.length})}function b(w,S){return S<w.length?w[S]:y(w)?pe(w):null}function x(w,S){var F=b(w,S);return F?_(F):new Set}function E(w){return w.conversion===null||w.conversion===void 0}function N(w,S){var F=new Set;return w.forEach(function(V){var K=x(V.params,S),C,Q=vn(K),Y;try{for(Q.s();!(Y=Q.n()).done;)C=Y.value,F.add(C)}catch(k){Q.e(k)}finally{Q.f()}}),F.has("any")?["any"]:Array.from(F)}function L(w,S,F){var V,K,C=w||"unnamed",Q=F,Y,k=function(){var Pe=[];if(Q.forEach(function(ve){var ie=b(ve.params,Y),me=D(ie);(Y<ve.params.length||y(ve.params))&&me(S[Y])&&Pe.push(ve)}),Pe.length===0){if(K=N(Q,Y),K.length>0){var $=u(S[Y]);return V=new TypeError("Unexpected type of argument in function "+C+" (expected: "+K.join(" or ")+", actual: "+$.join(" | ")+", index: "+Y+")"),V.data={category:"wrongType",fn:C,index:Y,actual:$,expected:K},{v:V}}}else Q=Pe};for(Y=0;Y<S.length;Y++){var ce=k();if(ti(ce)==="object")return ce.v}var ge=Q.map(function(Fe){return y(Fe.params)?1/0:Fe.params.length});if(S.length<Math.min.apply(null,ge))return K=N(Q,Y),V=new TypeError("Too few arguments in function "+C+" (expected: "+K.join(" or ")+", index: "+S.length+")"),V.data={category:"tooFewArgs",fn:C,index:S.length,expected:K},V;var ae=Math.max.apply(null,ge);if(S.length>ae)return V=new TypeError("Too many arguments in function "+C+" (expected: "+ae+", actual: "+S.length+")"),V.data={category:"tooManyArgs",fn:C,index:S.length,expectedLength:ae},V;for(var we=[],ye=0;ye<S.length;++ye)we.push(u(S[ye]).join("|"));return V=new TypeError('Arguments of type "'+we.join(", ")+'" do not match any of the defined signatures of function '+C+"."),V.data={category:"mismatch",actual:we},V}function P(w){for(var S=i.length+1,F=0;F<w.types.length;F++)E(w.types[F])&&(S=Math.min(S,w.types[F].typeIndex));return S}function I(w){for(var S=a+1,F=0;F<w.types.length;F++)E(w.types[F])||(S=Math.min(S,w.types[F].conversionIndex));return S}function z(w,S){if(w.hasAny){if(!S.hasAny)return 1}else if(S.hasAny)return-1;if(w.restParam){if(!S.restParam)return 1}else if(S.restParam)return-1;if(w.hasConversion){if(!S.hasConversion)return 1}else if(S.hasConversion)return-1;var F=P(w)-P(S);if(F<0)return-1;if(F>0)return 1;var V=I(w)-I(S);return V<0?-1:V>0?1:0}function O(w,S){var F=w.params,V=S.params,K=pe(F),C=pe(V),Q=y(F),Y=y(V);if(Q&&K.hasAny){if(!Y||!C.hasAny)return 1}else if(Y&&C.hasAny)return-1;var k=0,ce=0,ge,ae=vn(F),we;try{for(ae.s();!(we=ae.n()).done;)ge=we.value,ge.hasAny&&++k,ge.hasConversion&&++ce}catch(it){ae.e(it)}finally{ae.f()}var ye=0,Fe=0,Pe=vn(V),$;try{for(Pe.s();!($=Pe.n()).done;)ge=$.value,ge.hasAny&&++ye,ge.hasConversion&&++Fe}catch(it){Pe.e(it)}finally{Pe.f()}if(k!==ye)return k-ye;if(Q&&K.hasConversion){if(!Y||!C.hasConversion)return 1}else if(Y&&C.hasConversion)return-1;if(ce!==Fe)return ce-Fe;if(Q){if(!Y)return 1}else if(Y)return-1;var ve=(F.length-V.length)*(Q?-1:1);if(ve!==0)return ve;for(var ie=[],me=0,_e=0;_e<F.length;++_e){var qe=z(F[_e],V[_e]);ie.push(qe),me+=qe}if(me!==0)return me;for(var Ke,lt=0,Gt=ie;lt<Gt.length;lt++)if(Ke=Gt[lt],Ke!==0)return Ke;return 0}function R(w){if(w.length===0)return[];var S=w.map(o);w.length>1&&S.sort(function(k,ce){return k.index-ce.index});var F=S[0].conversionsTo;if(w.length===1)return F;F=F.concat([]);for(var V=new Set(w),K=1;K<S.length;++K){var C=void 0,Q=vn(S[K].conversionsTo),Y;try{for(Q.s();!(Y=Q.n()).done;)C=Y.value,V.has(C.from)||(F.push(C),V.add(C.from))}catch(k){Q.e(k)}finally{Q.f()}}return F}function G(w,S){var F=S;if(w.some(function(Y){return Y.hasConversion})){var V=y(w),K=w.map(X);F=function(){for(var k=[],ce=V?arguments.length-1:arguments.length,ge=0;ge<ce;ge++)k[ge]=K[ge](arguments[ge]);return V&&(k[ce]=arguments[ce].map(K[ce])),S.apply(this,k)}}var C=F;if(y(w)){var Q=w.length-1;C=function(){return F.apply(this,fe(arguments,0,Q).concat([fe(arguments,Q)]))}}return C}function X(w){var S,F,V,K,C=[],Q=[];switch(w.types.forEach(function(Y){Y.conversion&&(C.push(o(Y.conversion.from).test),Q.push(Y.conversion.convert))}),Q.length){case 0:return function(k){return k};case 1:return S=C[0],V=Q[0],function(k){return S(k)?V(k):k};case 2:return S=C[0],F=C[1],V=Q[0],K=Q[1],function(k){return S(k)?V(k):F(k)?K(k):k};default:return function(k){for(var ce=0;ce<Q.length;ce++)if(C[ce](k))return Q[ce](k);return k}}}function U(w){function S(F,V,K){if(V<F.length){var C=F[V],Q=[];if(C.restParam){var Y=C.types.filter(E);Y.length<C.types.length&&Q.push({types:Y,name:"..."+Y.map(function(k){return k.name}).join("|"),hasAny:Y.some(function(k){return k.isAny}),hasConversion:!1,restParam:!0}),Q.push(C)}else Q=C.types.map(function(k){return{types:[k],name:k.name,hasAny:k.isAny,hasConversion:k.conversion,restParam:!1}});return Z(Q,function(k){return S(F,V+1,K.concat([k]))})}else return[K]}return S(w,0,[])}function H(w,S){for(var F=Math.max(w.length,S.length),V=0;V<F;V++){var K=x(w,V),C=x(S,V),Q=!1,Y=void 0,k=vn(C),ce;try{for(k.s();!(ce=k.n()).done;)if(Y=ce.value,K.has(Y)){Q=!0;break}}catch(Fe){k.e(Fe)}finally{k.f()}if(!Q)return!1}var ge=w.length,ae=S.length,we=y(w),ye=y(S);return we?ye?ge===ae:ae>=ge:ye?ge>=ae:ge===ae}function W(w){return w.map(function(S){return Le(S)?Ee(S.referToSelf.callback):xe(S)?de(S.referTo.references,S.referTo.callback):S})}function J(w,S,F){var V=[],K,C=vn(w),Q;try{for(C.s();!(Q=C.n()).done;){K=Q.value;var Y=F[K];if(typeof Y!="number")throw new TypeError('No definition for referenced signature "'+K+'"');if(Y=S[Y],typeof Y!="function")return!1;V.push(Y)}}catch(k){C.e(k)}finally{C.f()}return V}function q(w,S,F){for(var V=W(w),K=new Array(V.length).fill(!1),C=!0;C;){C=!1;for(var Q=!0,Y=0;Y<V.length;++Y)if(!K[Y]){var k=V[Y];if(Le(k))V[Y]=k.referToSelf.callback(F),V[Y].referToSelf=k.referToSelf,K[Y]=!0,Q=!1;else if(xe(k)){var ce=J(k.referTo.references,V,S);ce?(V[Y]=k.referTo.callback.apply(this,ce),V[Y].referTo=k.referTo,K[Y]=!0,Q=!1):C=!0}}if(Q&&C)throw new SyntaxError("Circular reference detected in resolving typed.referTo")}return V}function j(w){var S=/\bthis(\(|\.signatures\b)/;Object.keys(w).forEach(function(F){var V=w[F];if(S.test(V.toString()))throw new SyntaxError("Using `this` to self-reference a function is deprecated since typed-function@3. Use typed.referTo and typed.referToSelf instead.")})}function ne(w,S){if(s.createCount++,Object.keys(S).length===0)throw new SyntaxError("No signatures provided");s.warnAgainstDeprecatedThis&&j(S);var F=[],V=[],K={},C=[],Q,Y=function(){if(!Object.prototype.hasOwnProperty.call(S,Q))return"continue";var Ue=A(Q);if(!Ue)return"continue";F.forEach(function(_t){if(H(_t,Ue))throw new TypeError('Conflicting signatures "'+p(_t)+'" and "'+p(Ue)+'".')}),F.push(Ue);var Lr=V.length;V.push(S[Q]);var Et=Ue.map(M),on=void 0,or=vn(U(Et)),Wn;try{for(or.s();!(Wn=or.n()).done;){on=Wn.value;var Pr=p(on);C.push({params:on,name:Pr,fn:Lr}),on.every(function(_t){return!_t.hasConversion})&&(K[Pr]=Lr)}}catch(_t){or.e(_t)}finally{or.f()}};for(Q in S)var k=Y();C.sort(O);var ce=q(V,K,Ht),ge;for(ge in K)Object.prototype.hasOwnProperty.call(K,ge)&&(K[ge]=ce[K[ge]]);for(var ae=[],we=new Map,ye=0,Fe=C;ye<Fe.length;ye++)ge=Fe[ye],we.has(ge.name)||(ge.fn=ce[ge.fn],ae.push(ge),we.set(ge.name,ge));for(var Pe=ae[0]&&ae[0].params.length<=2&&!y(ae[0].params),$=ae[1]&&ae[1].params.length<=2&&!y(ae[1].params),ve=ae[2]&&ae[2].params.length<=2&&!y(ae[2].params),ie=ae[3]&&ae[3].params.length<=2&&!y(ae[3].params),me=ae[4]&&ae[4].params.length<=2&&!y(ae[4].params),_e=ae[5]&&ae[5].params.length<=2&&!y(ae[5].params),qe=Pe&&$&&ve&&ie&&me&&_e,Ke=0;Ke<ae.length;++Ke)ae[Ke].test=T(ae[Ke].params);for(var lt=Pe?D(ae[0].params[0]):ln,Gt=$?D(ae[1].params[0]):ln,it=ve?D(ae[2].params[0]):ln,sn=ie?D(ae[3].params[0]):ln,Ct=me?D(ae[4].params[0]):ln,Oi=_e?D(ae[5].params[0]):ln,zi=Pe?D(ae[0].params[1]):ln,Qa=$?D(ae[1].params[1]):ln,Fr=ve?D(ae[2].params[1]):ln,Gi=ie?D(ae[3].params[1]):ln,Rr=me?D(ae[4].params[1]):ln,Hi=_e?D(ae[5].params[1]):ln,sr=0;sr<ae.length;++sr)ae[sr].implementation=G(ae[sr].params,ae[sr].fn);var ja=Pe?ae[0].implementation:Qr,es=$?ae[1].implementation:Qr,B=ve?ae[2].implementation:Qr,re=ie?ae[3].implementation:Qr,ue=me?ae[4].implementation:Qr,te=_e?ae[5].implementation:Qr,le=Pe?ae[0].params.length:-1,Ce=$?ae[1].params.length:-1,Ie=ve?ae[2].params.length:-1,ze=ie?ae[3].params.length:-1,Ge=me?ae[4].params.length:-1,Ze=_e?ae[5].params.length:-1,Ve=qe?6:0,We=ae.length,dt=ae.map(function(et){return et.test}),vt=ae.map(function(et){return et.implementation}),Qt=function(){for(var Ue=Ve;Ue<We;Ue++)if(dt[Ue](arguments))return vt[Ue].apply(this,arguments);return s.onMismatch(w,arguments,ae)};function Ht(et,Ue){return arguments.length===le&&lt(et)&&zi(Ue)?ja.apply(this,arguments):arguments.length===Ce&&Gt(et)&&Qa(Ue)?es.apply(this,arguments):arguments.length===Ie&&it(et)&&Fr(Ue)?B.apply(this,arguments):arguments.length===ze&&sn(et)&&Gi(Ue)?re.apply(this,arguments):arguments.length===Ge&&Ct(et)&&Rr(Ue)?ue.apply(this,arguments):arguments.length===Ze&&Oi(et)&&Hi(Ue)?te.apply(this,arguments):Qt.apply(this,arguments)}try{Object.defineProperty(Ht,"name",{value:w})}catch{}return Ht.signatures=K,Ht._typedFunctionData={signatures:ae,signatureMap:we},Ht}function oe(w,S,F){throw L(w,S,F)}function se(w){return fe(w,0,w.length-1)}function pe(w){return w[w.length-1]}function fe(w,S,F){return Array.prototype.slice.call(w,S,F)}function Ae(w,S){for(var F=0;F<w.length;F++)if(S(w[F]))return w[F]}function Z(w,S){return Array.prototype.concat.apply([],w.map(S))}function Se(){var w=se(arguments).map(function(F){return p(A(F))}),S=pe(arguments);if(typeof S!="function")throw new TypeError("Callback function expected as last argument");return de(w,S)}function de(w,S){return{referTo:{references:w,callback:S}}}function Ee(w){if(typeof w!="function")throw new TypeError("Callback function expected as first argument");return{referToSelf:{callback:w}}}function xe(w){return w&&ti(w.referTo)==="object"&&Array.isArray(w.referTo.references)&&typeof w.referTo.callback=="function"}function Le(w){return w&&ti(w.referToSelf)==="object"&&typeof w.referToSelf.callback=="function"}function Te(w,S){if(!w)return S;if(S&&S!==w){var F=new Error("Function names do not match (expected: "+w+", actual: "+S+")");throw F.data={actual:S,expected:w},F}return w}function be(w){var S;for(var F in w)Object.prototype.hasOwnProperty.call(w,F)&&(h(w[F])||typeof w[F].signature=="string")&&(S=Te(S,w[F].name));return S}function Re(w,S){var F;for(F in S)if(Object.prototype.hasOwnProperty.call(S,F)){if(F in w&&S[F]!==w[F]){var V=new Error('Signature "'+F+'" is defined twice');throw V.data={signature:F,sourceFunction:S[F],destFunction:w[F]},V}w[F]=S[F]}}var ke=s;s=function(S){for(var F=typeof S=="string",V=F?1:0,K=F?S:"",C={},Q=V;Q<arguments.length;++Q){var Y=arguments[Q],k={},ce=void 0;if(typeof Y=="function"?(ce=Y.name,typeof Y.signature=="string"?k[Y.signature]=Y:h(Y)&&(k=Y.signatures)):n(Y)&&(k=Y,F||(ce=be(Y))),Object.keys(k).length===0){var ge=new TypeError("Argument to 'typed' at index "+Q+" is not a (typed) function, nor an object with signatures as keys and functions as values.");throw ge.data={index:Q,argument:Y},ge}F||(K=Te(K,ce)),Re(C,k)}return ne(K||"",C)},s.create=Yc,s.createCount=ke.createCount,s.onMismatch=oe,s.throwMismatchError=oe,s.createError=L,s.clear=f,s.clearConversions=l,s.addTypes=c,s._findType=o,s.referTo=Se,s.referToSelf=Ee,s.convert=d,s.findSignature=m,s.find=v,s.isTypedFunction=h,s.warnAgainstDeprecatedThis=!0,s.addType=function(w,S){var F="any";S!==!1&&r.has("Object")&&(F="Object"),s.addTypes([w],F)};function Xe(w){if(!w||typeof w.from!="string"||typeof w.to!="string"||typeof w.convert!="function")throw new TypeError("Object with properties {from: string, to: string, convert: function} expected");if(w.to===w.from)throw new SyntaxError('Illegal to define conversion from "'+w.from+'" to itself.')}return s.addConversion=function(w){Xe(w);var S=o(w.to);if(S.conversionsTo.every(function(F){return F.from!==w.from}))S.conversionsTo.push({from:w.from,convert:w.convert,index:a++});else throw new Error('There is already a conversion from "'+w.from+'" to "'+S.name+'"')},s.addConversions=function(w){w.forEach(s.addConversion)},s.removeConversion=function(w){Xe(w);var S=o(w.to),F=Ae(S.conversionsTo,function(K){return K.from===w.from});if(!F)throw new Error("Attempt to remove nonexistent conversion from "+w.from+" to "+w.to);if(F.convert!==w.convert)throw new Error("Conversion to remove does not match existing conversion");var V=S.conversionsTo.indexOf(F);S.conversionsTo.splice(V,1)},s.resolve=function(w,S){if(!h(w))throw new TypeError(pl);for(var F=w._typedFunctionData.signatures,V=0;V<F.length;++V)if(F[V].test(S))return F[V];return null},s}const ml=Yc();function ct(n){return typeof n=="boolean"?!0:isFinite(n)?n===Math.round(n):!1}var Cv=Math.sign||function(n){return n>0?1:n<0?-1:0};function Ns(n,e,t){var r={2:"0b",8:"0o",16:"0x"},i=r[e],a="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!ct(t))throw new Error("size must be an integer");if(n>2**(t-1)-1||n<-(2**(t-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!ct(n))throw new Error("Value must be an integer");n<0&&(n=n+2**t),a="i".concat(t)}var s="";return n<0&&(n=-n,s="-"),"".concat(s).concat(i).concat(n.toString(e)).concat(a)}function Qs(n,e){if(typeof e=="function")return e(n);if(n===1/0)return"Infinity";if(n===-1/0)return"-Infinity";if(isNaN(n))return"NaN";var t="auto",r,i;if(e&&(e.notation&&(t=e.notation),gt(e)?r=e:gt(e.precision)&&(r=e.precision),e.wordSize&&(i=e.wordSize,typeof i!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return Rv(n,r);case"exponential":return Zc(n,r);case"engineering":return Fv(n,r);case"bin":return Ns(n,2,i);case"oct":return Ns(n,8,i);case"hex":return Ns(n,16,i);case"auto":return Lv(n,r,e&&e).replace(/((\.\d*?)(0+))($|e)/,function(){var a=arguments[2],s=arguments[4];return a!=="."?a+s:s});default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function Ha(n){var e=String(n).toLowerCase().match(/^(-?)(\d+\.?\d*)(e([+-]?\d+))?$/);if(!e)throw new SyntaxError("Invalid number "+n);var t=e[1],r=e[2],i=parseFloat(e[4]||"0"),a=r.indexOf(".");i+=a!==-1?a-1:r.length-1;var s=r.replace(".","").replace(/^0*/,function(o){return i-=o.length,""}).replace(/0*$/,"").split("").map(function(o){return parseInt(o)});return s.length===0&&(s.push(0),i++),{sign:t,coefficients:s,exponent:i}}function Fv(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=Ha(n),r=Va(t,e),i=r.exponent,a=r.coefficients,s=i%3===0?i:i<0?i-3-i%3:i-i%3;if(gt(e))for(;e>a.length||i-s+1>a.length;)a.push(0);else for(var o=Math.abs(i-s)-(a.length-1),c=0;c<o;c++)a.push(0);for(var f=Math.abs(i-s),l=1;f>0;)l++,f--;var u=a.slice(l).join(""),h=gt(e)&&u.length||u.match(/[1-9]/)?"."+u:"",m=a.slice(0,l).join("")+h+"e"+(i>=0?"+":"")+s.toString();return r.sign+m}function Rv(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=Ha(n),r=typeof e=="number"?Va(t,t.exponent+1+e):t,i=r.coefficients,a=r.exponent+1,s=a+(e||0);return i.length<s&&(i=i.concat(ai(s-i.length))),a<0&&(i=ai(-a+1).concat(i),a=1),a<i.length&&i.splice(a,0,a===0?"0.":"."),r.sign+i.join("")}function Zc(n,e){if(isNaN(n)||!isFinite(n))return String(n);var t=Ha(n),r=e?Va(t,e):t,i=r.coefficients,a=r.exponent;i.length<e&&(i=i.concat(ai(e-i.length)));var s=i.shift();return r.sign+s+(i.length>0?"."+i.join(""):"")+"e"+(a>=0?"+":"")+a}function Lv(n,e,t){if(isNaN(n)||!isFinite(n))return String(n);var r=t&&t.lowerExp!==void 0?t.lowerExp:-3,i=t&&t.upperExp!==void 0?t.upperExp:5,a=Ha(n),s=e?Va(a,e):a;if(s.exponent<r||s.exponent>=i)return Zc(n,e);var o=s.coefficients,c=s.exponent;o.length<e&&(o=o.concat(ai(e-o.length))),o=o.concat(ai(c-o.length+1+(o.length<e?e-o.length:0))),o=ai(-c).concat(o);var f=c>0?c:0;return f<o.length-1&&o.splice(f+1,0,"."),s.sign+o.join("")}function Va(n,e){for(var t={sign:n.sign,coefficients:n.coefficients,exponent:n.exponent},r=t.coefficients;e<=0;)r.unshift(0),t.exponent++,e++;if(r.length>e){var i=r.splice(e,r.length-e);if(i[0]>=5){var a=e-1;for(r[a]++;r[a]===10;)r.pop(),a===0&&(r.unshift(0),t.exponent++,a++),a--,r[a]++}}return t}function ai(n){for(var e=[],t=0;t<n;t++)e.push(0);return e}function Pv(n){return n.toExponential().replace(/e.*$/,"").replace(/^0\.?0*|\./,"").length}var Nv=Number.EPSILON||2220446049250313e-31;function nr(n,e,t){if(t==null)return n===e;if(n===e)return!0;if(isNaN(n)||isNaN(e))return!1;if(isFinite(n)&&isFinite(e)){var r=Math.abs(n-e);return r<Nv?!0:r<=Math.max(Math.abs(n),Math.abs(e))*t}return!1}function Is(n,e,t){var r=n.constructor,i=new r(2),a="";if(t){if(t<1)throw new Error("size must be in greater than 0");if(!ct(t))throw new Error("size must be an integer");if(n.greaterThan(i.pow(t-1).sub(1))||n.lessThan(i.pow(t-1).mul(-1)))throw new Error("Value must be in range [-2^".concat(t-1,", 2^").concat(t-1,"-1]"));if(!n.isInteger())throw new Error("Value must be an integer");n.lessThan(0)&&(n=n.add(i.pow(t))),a="i".concat(t)}switch(e){case 2:return"".concat(n.toBinary()).concat(a);case 8:return"".concat(n.toOctal()).concat(a);case 16:return"".concat(n.toHexadecimal()).concat(a);default:throw new Error("Base ".concat(e," not supported "))}}function Iv(n,e){if(typeof e=="function")return e(n);if(!n.isFinite())return n.isNaN()?"NaN":n.gt(0)?"Infinity":"-Infinity";var t="auto",r,i;if(e!==void 0&&(e.notation&&(t=e.notation),typeof e=="number"?r=e:e.precision!==void 0&&(r=e.precision),e.wordSize&&(i=e.wordSize,typeof i!="number")))throw new Error('Option "wordSize" must be a number');switch(t){case"fixed":return Bv(n,r);case"exponential":return gl(n,r);case"engineering":return Uv(n,r);case"bin":return Is(n,2,i);case"oct":return Is(n,8,i);case"hex":return Is(n,16,i);case"auto":{var a=e&&e.lowerExp!==void 0?e.lowerExp:-3,s=e&&e.upperExp!==void 0?e.upperExp:5;if(n.isZero())return"0";var o,c=n.toSignificantDigits(r),f=c.e;return f>=a&&f<s?o=c.toFixed():o=gl(n,r),o.replace(/((\.\d*?)(0+))($|e)/,function(){var l=arguments[2],u=arguments[4];return l!=="."?l+u:u})}default:throw new Error('Unknown notation "'+t+'". Choose "auto", "exponential", "fixed", "bin", "oct", or "hex.')}}function Uv(n,e){var t=n.e,r=t%3===0?t:t<0?t-3-t%3:t-t%3,i=n.mul(Math.pow(10,-r)),a=i.toPrecision(e);if(a.indexOf("e")!==-1){var s=n.constructor;a=new s(a).toFixed()}return a+"e"+(t>=0?"+":"")+r.toString()}function gl(n,e){return e!==void 0?n.toExponential(e-1):n.toExponential()}function Bv(n,e){return n.toFixed(e)}function ft(n,e){var t=Ov(n,e);return e&&typeof e=="object"&&"truncate"in e&&t.length>e.truncate?t.substring(0,e.truncate-3)+"...":t}function Ov(n,e){if(typeof n=="number")return Qs(n,e);if(Tt(n))return Iv(n,e);if(zv(n))return!e||e.fraction!=="decimal"?n.s*n.n+"/"+n.d:n.toString();if(Array.isArray(n))return Kc(n,e);if(yn(n))return'"'+n+'"';if(typeof n=="function")return n.syntax?String(n.syntax):"function";if(n&&typeof n=="object"){if(typeof n.format=="function")return n.format(e);if(n&&n.toString(e)!=={}.toString())return n.toString(e);var t=Object.keys(n).map(r=>'"'+r+'": '+ft(n[r],e));return"{"+t.join(", ")+"}"}return String(n)}function Kc(n,e){if(Array.isArray(n)){for(var t="[",r=n.length,i=0;i<r;i++)i!==0&&(t+=", "),t+=Kc(n[i],e);return t+="]",t}else return ft(n,e)}function zv(n){return n&&typeof n=="object"&&typeof n.s=="number"&&typeof n.n=="number"&&typeof n.d=="number"||!1}function rt(n,e,t){if(!(this instanceof rt))throw new SyntaxError("Constructor must be called with the new operator");this.actual=n,this.expected=e,this.relation=t,this.message="Dimension mismatch ("+(Array.isArray(n)?"["+n.join(", ")+"]":n)+" "+(this.relation||"!=")+" "+(Array.isArray(e)?"["+e.join(", ")+"]":e)+")",this.stack=new Error().stack}rt.prototype=new RangeError;rt.prototype.constructor=RangeError;rt.prototype.name="DimensionError";rt.prototype.isDimensionError=!0;function Dr(n,e,t){if(!(this instanceof Dr))throw new SyntaxError("Constructor must be called with the new operator");this.index=n,arguments.length<3?(this.min=0,this.max=e):(this.min=e,this.max=t),this.min!==void 0&&this.index<this.min?this.message="Index out of range ("+this.index+" < "+this.min+")":this.max!==void 0&&this.index>=this.max?this.message="Index out of range ("+this.index+" > "+(this.max-1)+")":this.message="Index out of range ("+this.index+")",this.stack=new Error().stack}Dr.prototype=new RangeError;Dr.prototype.constructor=RangeError;Dr.prototype.name="IndexError";Dr.prototype.isIndexError=!0;function xt(n){for(var e=[];Array.isArray(n);)e.push(n.length),n=n[0];return e}function Jc(n,e,t){var r,i=n.length;if(i!==e[t])throw new rt(i,e[t]);if(t<e.length-1){var a=t+1;for(r=0;r<i;r++){var s=n[r];if(!Array.isArray(s))throw new rt(e.length-1,e.length,"<");Jc(n[r],e,a)}}else for(r=0;r<i;r++)if(Array.isArray(n[r]))throw new rt(e.length+1,e.length,">")}function vl(n,e){var t=e.length===0;if(t){if(Array.isArray(n))throw new rt(n.length,0)}else Jc(n,e,0)}function pt(n,e){if(!gt(n)||!ct(n))throw new TypeError("Index must be an integer (value: "+n+")");if(n<0||typeof e=="number"&&n>=e)throw new Dr(n,e)}function Aa(n,e,t){if(!Array.isArray(n)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new Error("Resizing to scalar is not supported");e.forEach(function(i){if(!gt(i)||!ct(i)||i<0)throw new TypeError("Invalid size, must contain positive integers (size: "+ft(e)+")")});var r=t!==void 0?t:0;return js(n,e,0,r),n}function js(n,e,t,r){var i,a,s=n.length,o=e[t],c=Math.min(s,o);if(n.length=o,t<e.length-1){var f=t+1;for(i=0;i<c;i++)a=n[i],Array.isArray(a)||(a=[a],n[i]=a),js(a,e,f,r);for(i=c;i<o;i++)a=[],n[i]=a,js(a,e,f,r)}else{for(i=0;i<c;i++)for(;Array.isArray(n[i]);)n[i]=n[i][0];for(i=c;i<o;i++)n[i]=r}}function Gv(n,e){var t=eo(n),r=t.length;if(!Array.isArray(n)||!Array.isArray(e))throw new TypeError("Array expected");if(e.length===0)throw new rt(0,r,"!=");e=yo(e,r);var i=Qc(e);if(r!==i)throw new rt(i,r,"!=");try{return Hv(t,e)}catch(a){throw a instanceof rt?new rt(i,r,"!="):a}}function yo(n,e){var t=Qc(n),r=n.slice(),i=-1,a=n.indexOf(i),s=n.indexOf(i,a+1)>=0;if(s)throw new Error("More than one wildcard in sizes");var o=a>=0,c=e%t===0;if(o)if(c)r[a]=-e/t;else throw new Error("Could not replace wildcard, since "+e+" is no multiple of "+-t);return r}function Qc(n){return n.reduce((e,t)=>e*t,1)}function Hv(n,e){for(var t=n,r,i=e.length-1;i>0;i--){var a=e[i];r=[];for(var s=t.length/a,o=0;o<s;o++)r.push(t.slice(o*a,(o+1)*a));t=r}return t}function _l(n,e){for(var t=e||xt(n);Array.isArray(n)&&n.length===1;)n=n[0],t.shift();for(var r=t.length;t[r-1]===1;)r--;return r<t.length&&(n=jc(n,r,0),t.length=r),n}function jc(n,e,t){var r,i;if(t<e){var a=t+1;for(r=0,i=n.length;r<i;r++)n[r]=jc(n[r],e,a)}else for(;Array.isArray(n);)n=n[0];return n}function ef(n,e,t,r){var i=r||xt(n);if(t)for(var a=0;a<t;a++)n=[n],i.unshift(1);for(n=tf(n,e,0);i.length<e;)i.push(1);return n}function tf(n,e,t){var r,i;if(Array.isArray(n)){var a=t+1;for(r=0,i=n.length;r<i;r++)n[r]=tf(n[r],e,a)}else for(var s=t;s<e;s++)n=[n];return n}function eo(n){if(!Array.isArray(n))return n;var e=[];return n.forEach(function t(r){Array.isArray(r)?r.forEach(t):e.push(r)}),e}function Sa(n,e){for(var t,r=0,i=0;i<n.length;i++){var a=n[i],s=Array.isArray(a);if(i===0&&s&&(r=a.length),s&&a.length!==r)return;var o=s?Sa(a,e):e(a);if(t===void 0)t=o;else if(t!==o)return"mixed"}return t}function Me(n,e,t,r){function i(a){var s=wv(a,e.map(kv));return Vv(n,e,a),t(s)}return i.isFactory=!0,i.fn=n,i.dependencies=e.slice().sort(),r&&(i.meta=r),i}function Vv(n,e,t){var r=e.filter(a=>!Wv(a)).every(a=>t[a]!==void 0);if(!r){var i=e.filter(a=>t[a]===void 0);throw new Error('Cannot create function "'.concat(n,'", ')+"some dependencies are missing: ".concat(i.map(a=>'"'.concat(a,'"')).join(", "),"."))}}function Wv(n){return n&&n[0]==="?"}function kv(n){return n&&n[0]==="?"?n.slice(1):n}function Xv(n,e){if(rf(n)&&nf(n,e))return n[e];throw typeof n[e]=="function"&&Yv(n,e)?new Error('Cannot access method "'+e+'" as a property'):new Error('No access to property "'+e+'"')}function qv(n,e,t){if(rf(n)&&nf(n,e))return n[e]=t,t;throw new Error('No access to property "'+e+'"')}function $v(n,e){return e in n}function nf(n,e){return!n||typeof n!="object"?!1:bi(Zv,e)?!0:!(e in Object.prototype||e in Function.prototype)}function Yv(n,e){return n==null||typeof n[e]!="function"||bi(n,e)&&Object.getPrototypeOf&&e in Object.getPrototypeOf(n)?!1:bi(Kv,e)?!0:!(e in Object.prototype||e in Function.prototype)}function rf(n){return typeof n=="object"&&n&&n.constructor===Object}var Zv={length:!0,name:!0},Kv={toString:!0,valueOf:!0,toLocaleString:!0};class Jv{constructor(e){this.wrappedObject=e}keys(){return Object.keys(this.wrappedObject)}get(e){return Xv(this.wrappedObject,e)}set(e,t){return qv(this.wrappedObject,e,t),this}has(e){return $v(this.wrappedObject,e)}}function Qv(n){return n?n instanceof Map||n instanceof Jv||typeof n.set=="function"&&typeof n.get=="function"&&typeof n.keys=="function"&&typeof n.has=="function":!1}var af=function(){return af=ml.create,ml},jv=["?BigNumber","?Complex","?DenseMatrix","?Fraction"],e_=Me("typed",jv,function(e){var{BigNumber:t,Complex:r,DenseMatrix:i,Fraction:a}=e,s=af();return s.clear(),s.addTypes([{name:"number",test:gt},{name:"Complex",test:_o},{name:"BigNumber",test:Tt},{name:"Fraction",test:xo},{name:"Unit",test:kc},{name:"identifier",test:o=>yn&&/^(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE3F\uDE40\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDF02\uDF04-\uDF10\uDF12-\uDF33\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883\uD885-\uD887][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2F\uDC41-\uDC46]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD32\uDD50-\uDD52\uDD55\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E\uDF25-\uDF2A]|\uD838[\uDC30-\uDC6D\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDCD0-\uDCEB\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF39\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A\uDF50-\uDFFF]|\uD888[\uDC00-\uDFAF])*$/.test(o)},{name:"string",test:yn},{name:"Chain",test:Mv},{name:"Array",test:st},{name:"Matrix",test:ht},{name:"DenseMatrix",test:Xc},{name:"SparseMatrix",test:qc},{name:"Range",test:$c},{name:"Index",test:Eo},{name:"boolean",test:Jg},{name:"ResultSet",test:Qg},{name:"Help",test:jg},{name:"function",test:ev},{name:"Date",test:tv},{name:"RegExp",test:nv},{name:"null",test:iv},{name:"undefined",test:av},{name:"AccessorNode",test:sv},{name:"ArrayNode",test:ov},{name:"AssignmentNode",test:uv},{name:"BlockNode",test:lv},{name:"ConditionalNode",test:cv},{name:"ConstantNode",test:fv},{name:"FunctionNode",test:dv},{name:"FunctionAssignmentNode",test:hv},{name:"IndexNode",test:pv},{name:"Node",test:mv},{name:"ObjectNode",test:gv},{name:"OperatorNode",test:vv},{name:"ParenthesisNode",test:_v},{name:"RangeNode",test:xv},{name:"RelationalNode",test:Ev},{name:"SymbolNode",test:yv},{name:"Map",test:Qv},{name:"Object",test:rv}]),s.addConversions([{from:"number",to:"BigNumber",convert:function(c){if(t||Us(c),Pv(c)>15)throw new TypeError("Cannot implicitly convert a number with >15 significant digits to BigNumber (value: "+c+"). Use function bignumber(x) to convert to BigNumber.");return new t(c)}},{from:"number",to:"Complex",convert:function(c){return r||pa(c),new r(c,0)}},{from:"BigNumber",to:"Complex",convert:function(c){return r||pa(c),new r(c.toNumber(),0)}},{from:"Fraction",to:"BigNumber",convert:function(c){throw new TypeError("Cannot implicitly convert a Fraction to BigNumber or vice versa. Use function bignumber(x) to convert to BigNumber or fraction(x) to convert to Fraction.")}},{from:"Fraction",to:"Complex",convert:function(c){return r||pa(c),new r(c.valueOf(),0)}},{from:"number",to:"Fraction",convert:function(c){a||Bs(c);var f=new a(c);if(f.valueOf()!==c)throw new TypeError("Cannot implicitly convert a number to a Fraction when there will be a loss of precision (value: "+c+"). Use function fraction(x) to convert to Fraction.");return f}},{from:"string",to:"number",convert:function(c){var f=Number(c);if(isNaN(f))throw new Error('Cannot convert "'+c+'" to a number');return f}},{from:"string",to:"BigNumber",convert:function(c){t||Us(c);try{return new t(c)}catch{throw new Error('Cannot convert "'+c+'" to BigNumber')}}},{from:"string",to:"Fraction",convert:function(c){a||Bs(c);try{return new a(c)}catch{throw new Error('Cannot convert "'+c+'" to Fraction')}}},{from:"string",to:"Complex",convert:function(c){r||pa(c);try{return new r(c)}catch{throw new Error('Cannot convert "'+c+'" to Complex')}}},{from:"boolean",to:"number",convert:function(c){return+c}},{from:"boolean",to:"BigNumber",convert:function(c){return t||Us(c),new t(+c)}},{from:"boolean",to:"Fraction",convert:function(c){return a||Bs(c),new a(+c)}},{from:"boolean",to:"string",convert:function(c){return String(c)}},{from:"Array",to:"Matrix",convert:function(c){return i||t_(),new i(c)}},{from:"Matrix",to:"Array",convert:function(c){return c.valueOf()}}]),s.onMismatch=(o,c,f)=>{var l=s.createError(o,c,f);if(["wrongType","mismatch"].includes(l.data.category)&&c.length===1&&ya(c[0])&&f.some(h=>!h.params.includes(","))){var u=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw u.data=l.data,u}throw l},s.onMismatch=(o,c,f)=>{var l=s.createError(o,c,f);if(["wrongType","mismatch"].includes(l.data.category)&&c.length===1&&ya(c[0])&&f.some(h=>!h.params.includes(","))){var u=new TypeError("Function '".concat(o,"' doesn't apply to matrices. To call it ")+"elementwise on a matrix 'M', try 'map(M, ".concat(o,")'."));throw u.data=l.data,u}throw l},s});function Us(n){throw new Error("Cannot convert value ".concat(n," into a BigNumber: no class 'BigNumber' provided"))}function pa(n){throw new Error("Cannot convert value ".concat(n," into a Complex number: no class 'Complex' provided"))}function t_(){throw new Error("Cannot convert array into a Matrix: no class 'DenseMatrix' provided")}function Bs(n){throw new Error("Cannot convert value ".concat(n," into a Fraction, no class 'Fraction' provided."))}/*!
 *  decimal.js v10.4.3
 *  An arbitrary-precision Decimal type for JavaScript.
 *  https://github.com/MikeMcl/decimal.js
 *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
 *  MIT Licence
 */var ni=9e15,ir=1e9,to="0123456789abcdef",wa="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",Da="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",no={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-ni,maxE:ni,crypto:!1},sf,Hn,He=!0,Wa="[DecimalError] ",rr=Wa+"Invalid argument: ",of=Wa+"Precision limit exceeded",uf=Wa+"crypto unavailable",lf="[object Decimal]",zt=Math.floor,At=Math.pow,n_=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,r_=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,i_=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,cf=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,bn=1e7,Oe=7,a_=9007199254740991,s_=wa.length-1,ro=Da.length-1,he={toStringTag:lf};he.absoluteValue=he.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),Ne(n)};he.ceil=function(){return Ne(new this.constructor(this),this.e+1,2)};he.clampedTo=he.clamp=function(n,e){var t,r=this,i=r.constructor;if(n=new i(n),e=new i(e),!n.s||!e.s)return new i(NaN);if(n.gt(e))throw Error(rr+e);return t=r.cmp(n),t<0?n:r.cmp(e)>0?e:new i(r)};he.comparedTo=he.cmp=function(n){var e,t,r,i,a=this,s=a.d,o=(n=new a.constructor(n)).d,c=a.s,f=n.s;if(!s||!o)return!c||!f?NaN:c!==f?c:s===o?0:!s^c<0?1:-1;if(!s[0]||!o[0])return s[0]?c:o[0]?-f:0;if(c!==f)return c;if(a.e!==n.e)return a.e>n.e^c<0?1:-1;for(r=s.length,i=o.length,e=0,t=r<i?r:i;e<t;++e)if(s[e]!==o[e])return s[e]>o[e]^c<0?1:-1;return r===i?0:r>i^c<0?1:-1};he.cosine=he.cos=function(){var n,e,t=this,r=t.constructor;return t.d?t.d[0]?(n=r.precision,e=r.rounding,r.precision=n+Math.max(t.e,t.sd())+Oe,r.rounding=1,t=o_(r,mf(r,t)),r.precision=n,r.rounding=e,Ne(Hn==2||Hn==3?t.neg():t,n,e,!0)):new r(1):new r(NaN)};he.cubeRoot=he.cbrt=function(){var n,e,t,r,i,a,s,o,c,f,l=this,u=l.constructor;if(!l.isFinite()||l.isZero())return new u(l);for(He=!1,a=l.s*At(l.s*l,1/3),!a||Math.abs(a)==1/0?(t=Lt(l.d),n=l.e,(a=(n-t.length+1)%3)&&(t+=a==1||a==-2?"0":"00"),a=At(t,1/3),n=zt((n+1)/3)-(n%3==(n<0?-1:2)),a==1/0?t="5e"+n:(t=a.toExponential(),t=t.slice(0,t.indexOf("e")+1)+n),r=new u(t),r.s=l.s):r=new u(a.toString()),s=(n=u.precision)+3;;)if(o=r,c=o.times(o).times(o),f=c.plus(l),r=ot(f.plus(l).times(o),f.plus(c),s+2,1),Lt(o.d).slice(0,s)===(t=Lt(r.d)).slice(0,s))if(t=t.slice(s-3,s+1),t=="9999"||!i&&t=="4999"){if(!i&&(Ne(o,n+1,0),o.times(o).times(o).eq(l))){r=o;break}s+=4,i=1}else{(!+t||!+t.slice(1)&&t.charAt(0)=="5")&&(Ne(r,n+1,1),e=!r.times(r).times(r).eq(l));break}return He=!0,Ne(r,n,u.rounding,e)};he.decimalPlaces=he.dp=function(){var n,e=this.d,t=NaN;if(e){if(n=e.length-1,t=(n-zt(this.e/Oe))*Oe,n=e[n],n)for(;n%10==0;n/=10)t--;t<0&&(t=0)}return t};he.dividedBy=he.div=function(n){return ot(this,new this.constructor(n))};he.dividedToIntegerBy=he.divToInt=function(n){var e=this,t=e.constructor;return Ne(ot(e,new t(n),0,1,1),t.precision,t.rounding)};he.equals=he.eq=function(n){return this.cmp(n)===0};he.floor=function(){return Ne(new this.constructor(this),this.e+1,3)};he.greaterThan=he.gt=function(n){return this.cmp(n)>0};he.greaterThanOrEqualTo=he.gte=function(n){var e=this.cmp(n);return e==1||e===0};he.hyperbolicCosine=he.cosh=function(){var n,e,t,r,i,a=this,s=a.constructor,o=new s(1);if(!a.isFinite())return new s(a.s?1/0:NaN);if(a.isZero())return o;t=s.precision,r=s.rounding,s.precision=t+Math.max(a.e,a.sd())+4,s.rounding=1,i=a.d.length,i<32?(n=Math.ceil(i/3),e=(1/Xa(4,n)).toString()):(n=16,e="2.3283064365386962890625e-10"),a=ci(s,1,a.times(e),new s(1),!0);for(var c,f=n,l=new s(8);f--;)c=a.times(a),a=o.minus(c.times(l.minus(c.times(l))));return Ne(a,s.precision=t,s.rounding=r,!0)};he.hyperbolicSine=he.sinh=function(){var n,e,t,r,i=this,a=i.constructor;if(!i.isFinite()||i.isZero())return new a(i);if(e=a.precision,t=a.rounding,a.precision=e+Math.max(i.e,i.sd())+4,a.rounding=1,r=i.d.length,r<3)i=ci(a,2,i,i,!0);else{n=1.4*Math.sqrt(r),n=n>16?16:n|0,i=i.times(1/Xa(5,n)),i=ci(a,2,i,i,!0);for(var s,o=new a(5),c=new a(16),f=new a(20);n--;)s=i.times(i),i=i.times(o.plus(s.times(c.times(s).plus(f))))}return a.precision=e,a.rounding=t,Ne(i,e,t,!0)};he.hyperbolicTangent=he.tanh=function(){var n,e,t=this,r=t.constructor;return t.isFinite()?t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+7,r.rounding=1,ot(t.sinh(),t.cosh(),r.precision=n,r.rounding=e)):new r(t.s)};he.inverseCosine=he.acos=function(){var n,e=this,t=e.constructor,r=e.abs().cmp(1),i=t.precision,a=t.rounding;return r!==-1?r===0?e.isNeg()?wn(t,i,a):new t(0):new t(NaN):e.isZero()?wn(t,i+4,a).times(.5):(t.precision=i+6,t.rounding=1,e=e.asin(),n=wn(t,i+4,a).times(.5),t.precision=i,t.rounding=a,n.minus(e))};he.inverseHyperbolicCosine=he.acosh=function(){var n,e,t=this,r=t.constructor;return t.lte(1)?new r(t.eq(1)?0:NaN):t.isFinite()?(n=r.precision,e=r.rounding,r.precision=n+Math.max(Math.abs(t.e),t.sd())+4,r.rounding=1,He=!1,t=t.times(t).minus(1).sqrt().plus(t),He=!0,r.precision=n,r.rounding=e,t.ln()):new r(t)};he.inverseHyperbolicSine=he.asinh=function(){var n,e,t=this,r=t.constructor;return!t.isFinite()||t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+2*Math.max(Math.abs(t.e),t.sd())+6,r.rounding=1,He=!1,t=t.times(t).plus(1).sqrt().plus(t),He=!0,r.precision=n,r.rounding=e,t.ln())};he.inverseHyperbolicTangent=he.atanh=function(){var n,e,t,r,i=this,a=i.constructor;return i.isFinite()?i.e>=0?new a(i.abs().eq(1)?i.s/0:i.isZero()?i:NaN):(n=a.precision,e=a.rounding,r=i.sd(),Math.max(r,n)<2*-i.e-1?Ne(new a(i),n,e,!0):(a.precision=t=r-i.e,i=ot(i.plus(1),new a(1).minus(i),t+n,1),a.precision=n+4,a.rounding=1,i=i.ln(),a.precision=n,a.rounding=e,i.times(.5))):new a(NaN)};he.inverseSine=he.asin=function(){var n,e,t,r,i=this,a=i.constructor;return i.isZero()?new a(i):(e=i.abs().cmp(1),t=a.precision,r=a.rounding,e!==-1?e===0?(n=wn(a,t+4,r).times(.5),n.s=i.s,n):new a(NaN):(a.precision=t+6,a.rounding=1,i=i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan(),a.precision=t,a.rounding=r,i.times(2)))};he.inverseTangent=he.atan=function(){var n,e,t,r,i,a,s,o,c,f=this,l=f.constructor,u=l.precision,h=l.rounding;if(f.isFinite()){if(f.isZero())return new l(f);if(f.abs().eq(1)&&u+4<=ro)return s=wn(l,u+4,h).times(.25),s.s=f.s,s}else{if(!f.s)return new l(NaN);if(u+4<=ro)return s=wn(l,u+4,h).times(.5),s.s=f.s,s}for(l.precision=o=u+10,l.rounding=1,t=Math.min(28,o/Oe+2|0),n=t;n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(He=!1,e=Math.ceil(o/Oe),r=1,c=f.times(f),s=new l(f),i=f;n!==-1;)if(i=i.times(c),a=s.minus(i.div(r+=2)),i=i.times(c),s=a.plus(i.div(r+=2)),s.d[e]!==void 0)for(n=e;s.d[n]===a.d[n]&&n--;);return t&&(s=s.times(2<<t-1)),He=!0,Ne(s,l.precision=u,l.rounding=h,!0)};he.isFinite=function(){return!!this.d};he.isInteger=he.isInt=function(){return!!this.d&&zt(this.e/Oe)>this.d.length-2};he.isNaN=function(){return!this.s};he.isNegative=he.isNeg=function(){return this.s<0};he.isPositive=he.isPos=function(){return this.s>0};he.isZero=function(){return!!this.d&&this.d[0]===0};he.lessThan=he.lt=function(n){return this.cmp(n)<0};he.lessThanOrEqualTo=he.lte=function(n){return this.cmp(n)<1};he.logarithm=he.log=function(n){var e,t,r,i,a,s,o,c,f=this,l=f.constructor,u=l.precision,h=l.rounding,m=5;if(n==null)n=new l(10),e=!0;else{if(n=new l(n),t=n.d,n.s<0||!t||!t[0]||n.eq(1))return new l(NaN);e=n.eq(10)}if(t=f.d,f.s<0||!t||!t[0]||f.eq(1))return new l(t&&!t[0]?-1/0:f.s!=1?NaN:t?0:1/0);if(e)if(t.length>1)a=!0;else{for(i=t[0];i%10===0;)i/=10;a=i!==1}if(He=!1,o=u+m,s=Jn(f,o),r=e?ba(l,o+10):Jn(n,o),c=ot(s,r,o,1),Ti(c.d,i=u,h))do if(o+=10,s=Jn(f,o),r=e?ba(l,o+10):Jn(n,o),c=ot(s,r,o,1),!a){+Lt(c.d).slice(i+1,i+15)+1==1e14&&(c=Ne(c,u+1,0));break}while(Ti(c.d,i+=10,h));return He=!0,Ne(c,u,h)};he.minus=he.sub=function(n){var e,t,r,i,a,s,o,c,f,l,u,h,m=this,v=m.constructor;if(n=new v(n),!m.d||!n.d)return!m.s||!n.s?n=new v(NaN):m.d?n.s=-n.s:n=new v(n.d||m.s!==n.s?m:NaN),n;if(m.s!=n.s)return n.s=-n.s,m.plus(n);if(f=m.d,h=n.d,o=v.precision,c=v.rounding,!f[0]||!h[0]){if(h[0])n.s=-n.s;else if(f[0])n=new v(m);else return new v(c===3?-0:0);return He?Ne(n,o,c):n}if(t=zt(n.e/Oe),l=zt(m.e/Oe),f=f.slice(),a=l-t,a){for(u=a<0,u?(e=f,a=-a,s=h.length):(e=h,t=l,s=f.length),r=Math.max(Math.ceil(o/Oe),s)+2,a>r&&(a=r,e.length=1),e.reverse(),r=a;r--;)e.push(0);e.reverse()}else{for(r=f.length,s=h.length,u=r<s,u&&(s=r),r=0;r<s;r++)if(f[r]!=h[r]){u=f[r]<h[r];break}a=0}for(u&&(e=f,f=h,h=e,n.s=-n.s),s=f.length,r=h.length-s;r>0;--r)f[s++]=0;for(r=h.length;r>a;){if(f[--r]<h[r]){for(i=r;i&&f[--i]===0;)f[i]=bn-1;--f[i],f[r]+=bn}f[r]-=h[r]}for(;f[--s]===0;)f.pop();for(;f[0]===0;f.shift())--t;return f[0]?(n.d=f,n.e=ka(f,t),He?Ne(n,o,c):n):new v(c===3?-0:0)};he.modulo=he.mod=function(n){var e,t=this,r=t.constructor;return n=new r(n),!t.d||!n.s||n.d&&!n.d[0]?new r(NaN):!n.d||t.d&&!t.d[0]?Ne(new r(t),r.precision,r.rounding):(He=!1,r.modulo==9?(e=ot(t,n.abs(),0,3,1),e.s*=n.s):e=ot(t,n,0,r.modulo,1),e=e.times(n),He=!0,t.minus(e))};he.naturalExponential=he.exp=function(){return io(this)};he.naturalLogarithm=he.ln=function(){return Jn(this)};he.negated=he.neg=function(){var n=new this.constructor(this);return n.s=-n.s,Ne(n)};he.plus=he.add=function(n){var e,t,r,i,a,s,o,c,f,l,u=this,h=u.constructor;if(n=new h(n),!u.d||!n.d)return!u.s||!n.s?n=new h(NaN):u.d||(n=new h(n.d||u.s===n.s?u:NaN)),n;if(u.s!=n.s)return n.s=-n.s,u.minus(n);if(f=u.d,l=n.d,o=h.precision,c=h.rounding,!f[0]||!l[0])return l[0]||(n=new h(u)),He?Ne(n,o,c):n;if(a=zt(u.e/Oe),r=zt(n.e/Oe),f=f.slice(),i=a-r,i){for(i<0?(t=f,i=-i,s=l.length):(t=l,r=a,s=f.length),a=Math.ceil(o/Oe),s=a>s?a+1:s+1,i>s&&(i=s,t.length=1),t.reverse();i--;)t.push(0);t.reverse()}for(s=f.length,i=l.length,s-i<0&&(i=s,t=l,l=f,f=t),e=0;i;)e=(f[--i]=f[i]+l[i]+e)/bn|0,f[i]%=bn;for(e&&(f.unshift(e),++r),s=f.length;f[--s]==0;)f.pop();return n.d=f,n.e=ka(f,r),He?Ne(n,o,c):n};he.precision=he.sd=function(n){var e,t=this;if(n!==void 0&&n!==!!n&&n!==1&&n!==0)throw Error(rr+n);return t.d?(e=ff(t.d),n&&t.e+1>e&&(e=t.e+1)):e=NaN,e};he.round=function(){var n=this,e=n.constructor;return Ne(new e(n),n.e+1,e.rounding)};he.sine=he.sin=function(){var n,e,t=this,r=t.constructor;return t.isFinite()?t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+Math.max(t.e,t.sd())+Oe,r.rounding=1,t=l_(r,mf(r,t)),r.precision=n,r.rounding=e,Ne(Hn>2?t.neg():t,n,e,!0)):new r(NaN)};he.squareRoot=he.sqrt=function(){var n,e,t,r,i,a,s=this,o=s.d,c=s.e,f=s.s,l=s.constructor;if(f!==1||!o||!o[0])return new l(!f||f<0&&(!o||o[0])?NaN:o?s:1/0);for(He=!1,f=Math.sqrt(+s),f==0||f==1/0?(e=Lt(o),(e.length+c)%2==0&&(e+="0"),f=Math.sqrt(e),c=zt((c+1)/2)-(c<0||c%2),f==1/0?e="5e"+c:(e=f.toExponential(),e=e.slice(0,e.indexOf("e")+1)+c),r=new l(e)):r=new l(f.toString()),t=(c=l.precision)+3;;)if(a=r,r=a.plus(ot(s,a,t+2,1)).times(.5),Lt(a.d).slice(0,t)===(e=Lt(r.d)).slice(0,t))if(e=e.slice(t-3,t+1),e=="9999"||!i&&e=="4999"){if(!i&&(Ne(a,c+1,0),a.times(a).eq(s))){r=a;break}t+=4,i=1}else{(!+e||!+e.slice(1)&&e.charAt(0)=="5")&&(Ne(r,c+1,1),n=!r.times(r).eq(s));break}return He=!0,Ne(r,c,l.rounding,n)};he.tangent=he.tan=function(){var n,e,t=this,r=t.constructor;return t.isFinite()?t.isZero()?new r(t):(n=r.precision,e=r.rounding,r.precision=n+10,r.rounding=1,t=t.sin(),t.s=1,t=ot(t,new r(1).minus(t.times(t)).sqrt(),n+10,0),r.precision=n,r.rounding=e,Ne(Hn==2||Hn==4?t.neg():t,n,e,!0)):new r(NaN)};he.times=he.mul=function(n){var e,t,r,i,a,s,o,c,f,l=this,u=l.constructor,h=l.d,m=(n=new u(n)).d;if(n.s*=l.s,!h||!h[0]||!m||!m[0])return new u(!n.s||h&&!h[0]&&!m||m&&!m[0]&&!h?NaN:!h||!m?n.s/0:n.s*0);for(t=zt(l.e/Oe)+zt(n.e/Oe),c=h.length,f=m.length,c<f&&(a=h,h=m,m=a,s=c,c=f,f=s),a=[],s=c+f,r=s;r--;)a.push(0);for(r=f;--r>=0;){for(e=0,i=c+r;i>r;)o=a[i]+m[r]*h[i-r-1]+e,a[i--]=o%bn|0,e=o/bn|0;a[i]=(a[i]+e)%bn|0}for(;!a[--s];)a.pop();return e?++t:a.shift(),n.d=a,n.e=ka(a,t),He?Ne(n,u.precision,u.rounding):n};he.toBinary=function(n,e){return Mo(this,2,n,e)};he.toDecimalPlaces=he.toDP=function(n,e){var t=this,r=t.constructor;return t=new r(t),n===void 0?t:(Yt(n,0,ir),e===void 0?e=r.rounding:Yt(e,0,8),Ne(t,n+t.e+1,e))};he.toExponential=function(n,e){var t,r=this,i=r.constructor;return n===void 0?t=Rn(r,!0):(Yt(n,0,ir),e===void 0?e=i.rounding:Yt(e,0,8),r=Ne(new i(r),n+1,e),t=Rn(r,!0,n+1)),r.isNeg()&&!r.isZero()?"-"+t:t};he.toFixed=function(n,e){var t,r,i=this,a=i.constructor;return n===void 0?t=Rn(i):(Yt(n,0,ir),e===void 0?e=a.rounding:Yt(e,0,8),r=Ne(new a(i),n+i.e+1,e),t=Rn(r,!1,n+r.e+1)),i.isNeg()&&!i.isZero()?"-"+t:t};he.toFraction=function(n){var e,t,r,i,a,s,o,c,f,l,u,h,m=this,v=m.d,d=m.constructor;if(!v)return new d(m);if(f=t=new d(1),r=c=new d(0),e=new d(r),a=e.e=ff(v)-m.e-1,s=a%Oe,e.d[0]=At(10,s<0?Oe+s:s),n==null)n=a>0?e:f;else{if(o=new d(n),!o.isInt()||o.lt(f))throw Error(rr+o);n=o.gt(e)?a>0?e:f:o}for(He=!1,o=new d(Lt(v)),l=d.precision,d.precision=a=v.length*Oe*2;u=ot(o,e,0,1,1),i=t.plus(u.times(r)),i.cmp(n)!=1;)t=r,r=i,i=f,f=c.plus(u.times(i)),c=i,i=e,e=o.minus(u.times(i)),o=i;return i=ot(n.minus(t),r,0,1,1),c=c.plus(i.times(f)),t=t.plus(i.times(r)),c.s=f.s=m.s,h=ot(f,r,a,1).minus(m).abs().cmp(ot(c,t,a,1).minus(m).abs())<1?[f,r]:[c,t],d.precision=l,He=!0,h};he.toHexadecimal=he.toHex=function(n,e){return Mo(this,16,n,e)};he.toNearest=function(n,e){var t=this,r=t.constructor;if(t=new r(t),n==null){if(!t.d)return t;n=new r(1),e=r.rounding}else{if(n=new r(n),e===void 0?e=r.rounding:Yt(e,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(He=!1,t=ot(t,n,0,e,1).times(n),He=!0,Ne(t)):(n.s=t.s,t=n),t};he.toNumber=function(){return+this};he.toOctal=function(n,e){return Mo(this,8,n,e)};he.toPower=he.pow=function(n){var e,t,r,i,a,s,o=this,c=o.constructor,f=+(n=new c(n));if(!o.d||!n.d||!o.d[0]||!n.d[0])return new c(At(+o,f));if(o=new c(o),o.eq(1))return o;if(r=c.precision,a=c.rounding,n.eq(1))return Ne(o,r,a);if(e=zt(n.e/Oe),e>=n.d.length-1&&(t=f<0?-f:f)<=a_)return i=hf(c,o,t,r),n.s<0?new c(1).div(i):Ne(i,r,a);if(s=o.s,s<0){if(e<n.d.length-1)return new c(NaN);if(n.d[e]&1||(s=1),o.e==0&&o.d[0]==1&&o.d.length==1)return o.s=s,o}return t=At(+o,f),e=t==0||!isFinite(t)?zt(f*(Math.log("0."+Lt(o.d))/Math.LN10+o.e+1)):new c(t+"").e,e>c.maxE+1||e<c.minE-1?new c(e>0?s/0:0):(He=!1,c.rounding=o.s=1,t=Math.min(12,(e+"").length),i=io(n.times(Jn(o,r+t)),r),i.d&&(i=Ne(i,r+5,1),Ti(i.d,r,a)&&(e=r+10,i=Ne(io(n.times(Jn(o,e+t)),e),e+5,1),+Lt(i.d).slice(r+1,r+15)+1==1e14&&(i=Ne(i,r+1,0)))),i.s=s,He=!0,c.rounding=a,Ne(i,r,a))};he.toPrecision=function(n,e){var t,r=this,i=r.constructor;return n===void 0?t=Rn(r,r.e<=i.toExpNeg||r.e>=i.toExpPos):(Yt(n,1,ir),e===void 0?e=i.rounding:Yt(e,0,8),r=Ne(new i(r),n,e),t=Rn(r,n<=r.e||r.e<=i.toExpNeg,n)),r.isNeg()&&!r.isZero()?"-"+t:t};he.toSignificantDigits=he.toSD=function(n,e){var t=this,r=t.constructor;return n===void 0?(n=r.precision,e=r.rounding):(Yt(n,1,ir),e===void 0?e=r.rounding:Yt(e,0,8)),Ne(new r(t),n,e)};he.toString=function(){var n=this,e=n.constructor,t=Rn(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+t:t};he.truncated=he.trunc=function(){return Ne(new this.constructor(this),this.e+1,1)};he.valueOf=he.toJSON=function(){var n=this,e=n.constructor,t=Rn(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+t:t};function Lt(n){var e,t,r,i=n.length-1,a="",s=n[0];if(i>0){for(a+=s,e=1;e<i;e++)r=n[e]+"",t=Oe-r.length,t&&(a+=Yn(t)),a+=r;s=n[e],r=s+"",t=Oe-r.length,t&&(a+=Yn(t))}else if(s===0)return"0";for(;s%10===0;)s/=10;return a+s}function Yt(n,e,t){if(n!==~~n||n<e||n>t)throw Error(rr+n)}function Ti(n,e,t,r){var i,a,s,o;for(a=n[0];a>=10;a/=10)--e;return--e<0?(e+=Oe,i=0):(i=Math.ceil((e+1)/Oe),e%=Oe),a=At(10,Oe-e),o=n[i]%a|0,r==null?e<3?(e==0?o=o/100|0:e==1&&(o=o/10|0),s=t<4&&o==99999||t>3&&o==49999||o==5e4||o==0):s=(t<4&&o+1==a||t>3&&o+1==a/2)&&(n[i+1]/a/100|0)==At(10,e-2)-1||(o==a/2||o==0)&&(n[i+1]/a/100|0)==0:e<4?(e==0?o=o/1e3|0:e==1?o=o/100|0:e==2&&(o=o/10|0),s=(r||t<4)&&o==9999||!r&&t>3&&o==4999):s=((r||t<4)&&o+1==a||!r&&t>3&&o+1==a/2)&&(n[i+1]/a/1e3|0)==At(10,e-3)-1,s}function va(n,e,t){for(var r,i=[0],a,s=0,o=n.length;s<o;){for(a=i.length;a--;)i[a]*=e;for(i[0]+=to.indexOf(n.charAt(s++)),r=0;r<i.length;r++)i[r]>t-1&&(i[r+1]===void 0&&(i[r+1]=0),i[r+1]+=i[r]/t|0,i[r]%=t)}return i.reverse()}function o_(n,e){var t,r,i;if(e.isZero())return e;r=e.d.length,r<32?(t=Math.ceil(r/3),i=(1/Xa(4,t)).toString()):(t=16,i="2.3283064365386962890625e-10"),n.precision+=t,e=ci(n,1,e.times(i),new n(1));for(var a=t;a--;){var s=e.times(e);e=s.times(s).minus(s).times(8).plus(1)}return n.precision-=t,e}var ot=function(){function n(r,i,a){var s,o=0,c=r.length;for(r=r.slice();c--;)s=r[c]*i+o,r[c]=s%a|0,o=s/a|0;return o&&r.unshift(o),r}function e(r,i,a,s){var o,c;if(a!=s)c=a>s?1:-1;else for(o=c=0;o<a;o++)if(r[o]!=i[o]){c=r[o]>i[o]?1:-1;break}return c}function t(r,i,a,s){for(var o=0;a--;)r[a]-=o,o=r[a]<i[a]?1:0,r[a]=o*s+r[a]-i[a];for(;!r[0]&&r.length>1;)r.shift()}return function(r,i,a,s,o,c){var f,l,u,h,m,v,d,p,g,M,_,A,y,D,T,b,x,E,N,L,P=r.constructor,I=r.s==i.s?1:-1,z=r.d,O=i.d;if(!z||!z[0]||!O||!O[0])return new P(!r.s||!i.s||(z?O&&z[0]==O[0]:!O)?NaN:z&&z[0]==0||!O?I*0:I/0);for(c?(m=1,l=r.e-i.e):(c=bn,m=Oe,l=zt(r.e/m)-zt(i.e/m)),N=O.length,x=z.length,g=new P(I),M=g.d=[],u=0;O[u]==(z[u]||0);u++);if(O[u]>(z[u]||0)&&l--,a==null?(D=a=P.precision,s=P.rounding):o?D=a+(r.e-i.e)+1:D=a,D<0)M.push(1),v=!0;else{if(D=D/m+2|0,u=0,N==1){for(h=0,O=O[0],D++;(u<x||h)&&D--;u++)T=h*c+(z[u]||0),M[u]=T/O|0,h=T%O|0;v=h||u<x}else{for(h=c/(O[0]+1)|0,h>1&&(O=n(O,h,c),z=n(z,h,c),N=O.length,x=z.length),b=N,_=z.slice(0,N),A=_.length;A<N;)_[A++]=0;L=O.slice(),L.unshift(0),E=O[0],O[1]>=c/2&&++E;do h=0,f=e(O,_,N,A),f<0?(y=_[0],N!=A&&(y=y*c+(_[1]||0)),h=y/E|0,h>1?(h>=c&&(h=c-1),d=n(O,h,c),p=d.length,A=_.length,f=e(d,_,p,A),f==1&&(h--,t(d,N<p?L:O,p,c))):(h==0&&(f=h=1),d=O.slice()),p=d.length,p<A&&d.unshift(0),t(_,d,A,c),f==-1&&(A=_.length,f=e(O,_,N,A),f<1&&(h++,t(_,N<A?L:O,A,c))),A=_.length):f===0&&(h++,_=[0]),M[u++]=h,f&&_[0]?_[A++]=z[b]||0:(_=[z[b]],A=1);while((b++<x||_[0]!==void 0)&&D--);v=_[0]!==void 0}M[0]||M.shift()}if(m==1)g.e=l,sf=v;else{for(u=1,h=M[0];h>=10;h/=10)u++;g.e=u+l*m-1,Ne(g,o?a+g.e+1:a,s,v)}return g}}();function Ne(n,e,t,r){var i,a,s,o,c,f,l,u,h,m=n.constructor;e:if(e!=null){if(u=n.d,!u)return n;for(i=1,o=u[0];o>=10;o/=10)i++;if(a=e-i,a<0)a+=Oe,s=e,l=u[h=0],c=l/At(10,i-s-1)%10|0;else if(h=Math.ceil((a+1)/Oe),o=u.length,h>=o)if(r){for(;o++<=h;)u.push(0);l=c=0,i=1,a%=Oe,s=a-Oe+1}else break e;else{for(l=o=u[h],i=1;o>=10;o/=10)i++;a%=Oe,s=a-Oe+i,c=s<0?0:l/At(10,i-s-1)%10|0}if(r=r||e<0||u[h+1]!==void 0||(s<0?l:l%At(10,i-s-1)),f=t<4?(c||r)&&(t==0||t==(n.s<0?3:2)):c>5||c==5&&(t==4||r||t==6&&(a>0?s>0?l/At(10,i-s):0:u[h-1])%10&1||t==(n.s<0?8:7)),e<1||!u[0])return u.length=0,f?(e-=n.e+1,u[0]=At(10,(Oe-e%Oe)%Oe),n.e=-e||0):u[0]=n.e=0,n;if(a==0?(u.length=h,o=1,h--):(u.length=h+1,o=At(10,Oe-a),u[h]=s>0?(l/At(10,i-s)%At(10,s)|0)*o:0),f)for(;;)if(h==0){for(a=1,s=u[0];s>=10;s/=10)a++;for(s=u[0]+=o,o=1;s>=10;s/=10)o++;a!=o&&(n.e++,u[0]==bn&&(u[0]=1));break}else{if(u[h]+=o,u[h]!=bn)break;u[h--]=0,o=1}for(a=u.length;u[--a]===0;)u.pop()}return He&&(n.e>m.maxE?(n.d=null,n.e=NaN):n.e<m.minE&&(n.e=0,n.d=[0])),n}function Rn(n,e,t){if(!n.isFinite())return pf(n);var r,i=n.e,a=Lt(n.d),s=a.length;return e?(t&&(r=t-s)>0?a=a.charAt(0)+"."+a.slice(1)+Yn(r):s>1&&(a=a.charAt(0)+"."+a.slice(1)),a=a+(n.e<0?"e":"e+")+n.e):i<0?(a="0."+Yn(-i-1)+a,t&&(r=t-s)>0&&(a+=Yn(r))):i>=s?(a+=Yn(i+1-s),t&&(r=t-i-1)>0&&(a=a+"."+Yn(r))):((r=i+1)<s&&(a=a.slice(0,r)+"."+a.slice(r)),t&&(r=t-s)>0&&(i+1===s&&(a+="."),a+=Yn(r))),a}function ka(n,e){var t=n[0];for(e*=Oe;t>=10;t/=10)e++;return e}function ba(n,e,t){if(e>s_)throw He=!0,t&&(n.precision=t),Error(of);return Ne(new n(wa),e,1,!0)}function wn(n,e,t){if(e>ro)throw Error(of);return Ne(new n(Da),e,t,!0)}function ff(n){var e=n.length-1,t=e*Oe+1;if(e=n[e],e){for(;e%10==0;e/=10)t--;for(e=n[0];e>=10;e/=10)t++}return t}function Yn(n){for(var e="";n--;)e+="0";return e}function hf(n,e,t,r){var i,a=new n(1),s=Math.ceil(r/Oe+4);for(He=!1;;){if(t%2&&(a=a.times(e),El(a.d,s)&&(i=!0)),t=zt(t/2),t===0){t=a.d.length-1,i&&a.d[t]===0&&++a.d[t];break}e=e.times(e),El(e.d,s)}return He=!0,a}function xl(n){return n.d[n.d.length-1]&1}function df(n,e,t){for(var r,i=new n(e[0]),a=0;++a<e.length;)if(r=new n(e[a]),r.s)i[t](r)&&(i=r);else{i=r;break}return i}function io(n,e){var t,r,i,a,s,o,c,f=0,l=0,u=0,h=n.constructor,m=h.rounding,v=h.precision;if(!n.d||!n.d[0]||n.e>17)return new h(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:0/0);for(e==null?(He=!1,c=v):c=e,o=new h(.03125);n.e>-2;)n=n.times(o),u+=5;for(r=Math.log(At(2,u))/Math.LN10*2+5|0,c+=r,t=a=s=new h(1),h.precision=c;;){if(a=Ne(a.times(n),c,1),t=t.times(++l),o=s.plus(ot(a,t,c,1)),Lt(o.d).slice(0,c)===Lt(s.d).slice(0,c)){for(i=u;i--;)s=Ne(s.times(s),c,1);if(e==null)if(f<3&&Ti(s.d,c-r,m,f))h.precision=c+=10,t=a=o=new h(1),l=0,f++;else return Ne(s,h.precision=v,m,He=!0);else return h.precision=v,s}s=o}}function Jn(n,e){var t,r,i,a,s,o,c,f,l,u,h,m=1,v=10,d=n,p=d.d,g=d.constructor,M=g.rounding,_=g.precision;if(d.s<0||!p||!p[0]||!d.e&&p[0]==1&&p.length==1)return new g(p&&!p[0]?-1/0:d.s!=1?NaN:p?0:d);if(e==null?(He=!1,l=_):l=e,g.precision=l+=v,t=Lt(p),r=t.charAt(0),Math.abs(a=d.e)<15e14){for(;r<7&&r!=1||r==1&&t.charAt(1)>3;)d=d.times(n),t=Lt(d.d),r=t.charAt(0),m++;a=d.e,r>1?(d=new g("0."+t),a++):d=new g(r+"."+t.slice(1))}else return f=ba(g,l+2,_).times(a+""),d=Jn(new g(r+"."+t.slice(1)),l-v).plus(f),g.precision=_,e==null?Ne(d,_,M,He=!0):d;for(u=d,c=s=d=ot(d.minus(1),d.plus(1),l,1),h=Ne(d.times(d),l,1),i=3;;){if(s=Ne(s.times(h),l,1),f=c.plus(ot(s,new g(i),l,1)),Lt(f.d).slice(0,l)===Lt(c.d).slice(0,l))if(c=c.times(2),a!==0&&(c=c.plus(ba(g,l+2,_).times(a+""))),c=ot(c,new g(m),l,1),e==null)if(Ti(c.d,l-v,M,o))g.precision=l+=v,f=s=d=ot(u.minus(1),u.plus(1),l,1),h=Ne(d.times(d),l,1),i=o=1;else return Ne(c,g.precision=_,M,He=!0);else return g.precision=_,c;c=f,i+=2}}function pf(n){return String(n.s*n.s/0)}function ao(n,e){var t,r,i;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(t<0&&(t=r),t+=+e.slice(r+1),e=e.substring(0,r)):t<0&&(t=e.length),r=0;e.charCodeAt(r)===48;r++);for(i=e.length;e.charCodeAt(i-1)===48;--i);if(e=e.slice(r,i),e){if(i-=r,n.e=t=t-r-1,n.d=[],r=(t+1)%Oe,t<0&&(r+=Oe),r<i){for(r&&n.d.push(+e.slice(0,r)),i-=Oe;r<i;)n.d.push(+e.slice(r,r+=Oe));e=e.slice(r),r=Oe-e.length}else r-=i;for(;r--;)e+="0";n.d.push(+e),He&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function u_(n,e){var t,r,i,a,s,o,c,f,l;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),cf.test(e))return ao(n,e)}else if(e==="Infinity"||e==="NaN")return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(r_.test(e))t=16,e=e.toLowerCase();else if(n_.test(e))t=2;else if(i_.test(e))t=8;else throw Error(rr+e);for(a=e.search(/p/i),a>0?(c=+e.slice(a+1),e=e.substring(2,a)):e=e.slice(2),a=e.indexOf("."),s=a>=0,r=n.constructor,s&&(e=e.replace(".",""),o=e.length,a=o-a,i=hf(r,new r(t),a,a*2)),f=va(e,t,bn),l=f.length-1,a=l;f[a]===0;--a)f.pop();return a<0?new r(n.s*0):(n.e=ka(f,l),n.d=f,He=!1,s&&(n=ot(n,i,o*4)),c&&(n=n.times(Math.abs(c)<54?At(2,c):fi.pow(2,c))),He=!0,n)}function l_(n,e){var t,r=e.d.length;if(r<3)return e.isZero()?e:ci(n,2,e,e);t=1.4*Math.sqrt(r),t=t>16?16:t|0,e=e.times(1/Xa(5,t)),e=ci(n,2,e,e);for(var i,a=new n(5),s=new n(16),o=new n(20);t--;)i=e.times(e),e=e.times(a.plus(i.times(s.times(i).minus(o))));return e}function ci(n,e,t,r,i){var a,s,o,c,f=n.precision,l=Math.ceil(f/Oe);for(He=!1,c=t.times(t),o=new n(r);;){if(s=ot(o.times(c),new n(e++*e++),f,1),o=i?r.plus(s):r.minus(s),r=ot(s.times(c),new n(e++*e++),f,1),s=o.plus(r),s.d[l]!==void 0){for(a=l;s.d[a]===o.d[a]&&a--;);if(a==-1)break}a=o,o=r,r=s,s=a}return He=!0,s.d.length=l+1,s}function Xa(n,e){for(var t=n;--e;)t*=n;return t}function mf(n,e){var t,r=e.s<0,i=wn(n,n.precision,1),a=i.times(.5);if(e=e.abs(),e.lte(a))return Hn=r?4:1,e;if(t=e.divToInt(i),t.isZero())Hn=r?3:2;else{if(e=e.minus(t.times(i)),e.lte(a))return Hn=xl(t)?r?2:3:r?4:1,e;Hn=xl(t)?r?1:4:r?3:2}return e.minus(i).abs()}function Mo(n,e,t,r){var i,a,s,o,c,f,l,u,h,m=n.constructor,v=t!==void 0;if(v?(Yt(t,1,ir),r===void 0?r=m.rounding:Yt(r,0,8)):(t=m.precision,r=m.rounding),!n.isFinite())l=pf(n);else{for(l=Rn(n),s=l.indexOf("."),v?(i=2,e==16?t=t*4-3:e==8&&(t=t*3-2)):i=e,s>=0&&(l=l.replace(".",""),h=new m(1),h.e=l.length-s,h.d=va(Rn(h),10,i),h.e=h.d.length),u=va(l,10,i),a=c=u.length;u[--c]==0;)u.pop();if(!u[0])l=v?"0p+0":"0";else{if(s<0?a--:(n=new m(n),n.d=u,n.e=a,n=ot(n,h,t,r,0,i),u=n.d,a=n.e,f=sf),s=u[t],o=i/2,f=f||u[t+1]!==void 0,f=r<4?(s!==void 0||f)&&(r===0||r===(n.s<0?3:2)):s>o||s===o&&(r===4||f||r===6&&u[t-1]&1||r===(n.s<0?8:7)),u.length=t,f)for(;++u[--t]>i-1;)u[t]=0,t||(++a,u.unshift(1));for(c=u.length;!u[c-1];--c);for(s=0,l="";s<c;s++)l+=to.charAt(u[s]);if(v){if(c>1)if(e==16||e==8){for(s=e==16?4:3,--c;c%s;c++)l+="0";for(u=va(l,i,e),c=u.length;!u[c-1];--c);for(s=1,l="1.";s<c;s++)l+=to.charAt(u[s])}else l=l.charAt(0)+"."+l.slice(1);l=l+(a<0?"p":"p+")+a}else if(a<0){for(;++a;)l="0"+l;l="0."+l}else if(++a>c)for(a-=c;a--;)l+="0";else a<c&&(l=l.slice(0,a)+"."+l.slice(a))}l=(e==16?"0x":e==2?"0b":e==8?"0o":"")+l}return n.s<0?"-"+l:l}function El(n,e){if(n.length>e)return n.length=e,!0}function c_(n){return new this(n).abs()}function f_(n){return new this(n).acos()}function h_(n){return new this(n).acosh()}function d_(n,e){return new this(n).plus(e)}function p_(n){return new this(n).asin()}function m_(n){return new this(n).asinh()}function g_(n){return new this(n).atan()}function v_(n){return new this(n).atanh()}function __(n,e){n=new this(n),e=new this(e);var t,r=this.precision,i=this.rounding,a=r+4;return!n.s||!e.s?t=new this(NaN):!n.d&&!e.d?(t=wn(this,a,1).times(e.s>0?.25:.75),t.s=n.s):!e.d||n.isZero()?(t=e.s<0?wn(this,r,i):new this(0),t.s=n.s):!n.d||e.isZero()?(t=wn(this,a,1).times(.5),t.s=n.s):e.s<0?(this.precision=a,this.rounding=1,t=this.atan(ot(n,e,a,1)),e=wn(this,a,1),this.precision=r,this.rounding=i,t=n.s<0?t.minus(e):t.plus(e)):t=this.atan(ot(n,e,a,1)),t}function x_(n){return new this(n).cbrt()}function E_(n){return Ne(n=new this(n),n.e+1,2)}function y_(n,e,t){return new this(n).clamp(e,t)}function M_(n){if(!n||typeof n!="object")throw Error(Wa+"Object expected");var e,t,r,i=n.defaults===!0,a=["precision",1,ir,"rounding",0,8,"toExpNeg",-ni,0,"toExpPos",0,ni,"maxE",0,ni,"minE",-ni,0,"modulo",0,9];for(e=0;e<a.length;e+=3)if(t=a[e],i&&(this[t]=no[t]),(r=n[t])!==void 0)if(zt(r)===r&&r>=a[e+1]&&r<=a[e+2])this[t]=r;else throw Error(rr+t+": "+r);if(t="crypto",i&&(this[t]=no[t]),(r=n[t])!==void 0)if(r===!0||r===!1||r===0||r===1)if(r)if(typeof crypto<"u"&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(uf);else this[t]=!1;else throw Error(rr+t+": "+r);return this}function A_(n){return new this(n).cos()}function S_(n){return new this(n).cosh()}function gf(n){var e,t,r;function i(a){var s,o,c,f=this;if(!(f instanceof i))return new i(a);if(f.constructor=i,yl(a)){f.s=a.s,He?!a.d||a.e>i.maxE?(f.e=NaN,f.d=null):a.e<i.minE?(f.e=0,f.d=[0]):(f.e=a.e,f.d=a.d.slice()):(f.e=a.e,f.d=a.d?a.d.slice():a.d);return}if(c=typeof a,c==="number"){if(a===0){f.s=1/a<0?-1:1,f.e=0,f.d=[0];return}if(a<0?(a=-a,f.s=-1):f.s=1,a===~~a&&a<1e7){for(s=0,o=a;o>=10;o/=10)s++;He?s>i.maxE?(f.e=NaN,f.d=null):s<i.minE?(f.e=0,f.d=[0]):(f.e=s,f.d=[a]):(f.e=s,f.d=[a]);return}else if(a*0!==0){a||(f.s=NaN),f.e=NaN,f.d=null;return}return ao(f,a.toString())}else if(c!=="string")throw Error(rr+a);return(o=a.charCodeAt(0))===45?(a=a.slice(1),f.s=-1):(o===43&&(a=a.slice(1)),f.s=1),cf.test(a)?ao(f,a):u_(f,a)}if(i.prototype=he,i.ROUND_UP=0,i.ROUND_DOWN=1,i.ROUND_CEIL=2,i.ROUND_FLOOR=3,i.ROUND_HALF_UP=4,i.ROUND_HALF_DOWN=5,i.ROUND_HALF_EVEN=6,i.ROUND_HALF_CEIL=7,i.ROUND_HALF_FLOOR=8,i.EUCLID=9,i.config=i.set=M_,i.clone=gf,i.isDecimal=yl,i.abs=c_,i.acos=f_,i.acosh=h_,i.add=d_,i.asin=p_,i.asinh=m_,i.atan=g_,i.atanh=v_,i.atan2=__,i.cbrt=x_,i.ceil=E_,i.clamp=y_,i.cos=A_,i.cosh=S_,i.div=w_,i.exp=D_,i.floor=b_,i.hypot=T_,i.ln=C_,i.log=F_,i.log10=L_,i.log2=R_,i.max=P_,i.min=N_,i.mod=I_,i.mul=U_,i.pow=B_,i.random=O_,i.round=z_,i.sign=G_,i.sin=H_,i.sinh=V_,i.sqrt=W_,i.sub=k_,i.sum=X_,i.tan=q_,i.tanh=$_,i.trunc=Y_,n===void 0&&(n={}),n&&n.defaults!==!0)for(r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],e=0;e<r.length;)n.hasOwnProperty(t=r[e++])||(n[t]=this[t]);return i.config(n),i}function w_(n,e){return new this(n).div(e)}function D_(n){return new this(n).exp()}function b_(n){return Ne(n=new this(n),n.e+1,3)}function T_(){var n,e,t=new this(0);for(He=!1,n=0;n<arguments.length;)if(e=new this(arguments[n++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return He=!0,new this(1/0);t=e}return He=!0,t.sqrt()}function yl(n){return n instanceof fi||n&&n.toStringTag===lf||!1}function C_(n){return new this(n).ln()}function F_(n,e){return new this(n).log(e)}function R_(n){return new this(n).log(2)}function L_(n){return new this(n).log(10)}function P_(){return df(this,arguments,"lt")}function N_(){return df(this,arguments,"gt")}function I_(n,e){return new this(n).mod(e)}function U_(n,e){return new this(n).mul(e)}function B_(n,e){return new this(n).pow(e)}function O_(n){var e,t,r,i,a=0,s=new this(1),o=[];if(n===void 0?n=this.precision:Yt(n,1,ir),r=Math.ceil(n/Oe),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));a<r;)i=e[a],i>=429e7?e[a]=crypto.getRandomValues(new Uint32Array(1))[0]:o[a++]=i%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(r*=4);a<r;)i=e[a]+(e[a+1]<<8)+(e[a+2]<<16)+((e[a+3]&127)<<24),i>=214e7?crypto.randomBytes(4).copy(e,a):(o.push(i%1e7),a+=4);a=r/4}else throw Error(uf);else for(;a<r;)o[a++]=Math.random()*1e7|0;for(r=o[--a],n%=Oe,r&&n&&(i=At(10,Oe-n),o[a]=(r/i|0)*i);o[a]===0;a--)o.pop();if(a<0)t=0,o=[0];else{for(t=-1;o[0]===0;t-=Oe)o.shift();for(r=1,i=o[0];i>=10;i/=10)r++;r<Oe&&(t-=Oe-r)}return s.e=t,s.d=o,s}function z_(n){return Ne(n=new this(n),n.e+1,this.rounding)}function G_(n){return n=new this(n),n.d?n.d[0]?n.s:0*n.s:n.s||NaN}function H_(n){return new this(n).sin()}function V_(n){return new this(n).sinh()}function W_(n){return new this(n).sqrt()}function k_(n,e){return new this(n).sub(e)}function X_(){var n=0,e=arguments,t=new this(e[n]);for(He=!1;t.s&&++n<e.length;)t=t.plus(e[n]);return He=!0,Ne(t,this.precision,this.rounding)}function q_(n){return new this(n).tan()}function $_(n){return new this(n).tanh()}function Y_(n){return Ne(n=new this(n),n.e+1,1)}he[Symbol.for("nodejs.util.inspect.custom")]=he.toString;he[Symbol.toStringTag]="Decimal";var fi=he.constructor=gf(no);wa=new fi(wa);Da=new fi(Da);var Z_="BigNumber",K_=["?on","config"],J_=Me(Z_,K_,n=>{var{on:e,config:t}=n,r=fi.clone({precision:t.precision,modulo:fi.EUCLID});return r.prototype=Object.create(r.prototype),r.prototype.type="BigNumber",r.prototype.isBigNumber=!0,r.prototype.toJSON=function(){return{mathjs:"BigNumber",value:this.toString()}},r.fromJSON=function(i){return new r(i.value)},e&&e("config",function(i,a){i.precision!==a.precision&&r.config({precision:i.precision})}),r},{isClass:!0});function vf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _f={exports:{}};/**
 * @license Complex.js v2.1.1 12/05/2020
 *
 * Copyright (c) 2020, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(n,e){(function(t){var r=Math.cosh||function(u){return Math.abs(u)<1e-9?1-u:(Math.exp(u)+Math.exp(-u))*.5},i=Math.sinh||function(u){return Math.abs(u)<1e-9?u:(Math.exp(u)-Math.exp(-u))*.5},a=function(u){var h=Math.PI/4;if(-h>u||u>h)return Math.cos(u)-1;var m=u*u;return m*(m*(m*(m*(m*(m*(m*(m/20922789888e3-1/87178291200)+1/479001600)-1/3628800)+1/40320)-1/720)+1/24)-1/2)},s=function(u,h){var m=Math.abs(u),v=Math.abs(h);return m<3e3&&v<3e3?Math.sqrt(m*m+v*v):(m<v?(m=v,v=u/h):v=h/u,m*Math.sqrt(1+v*v))},o=function(){throw SyntaxError("Invalid Param")};function c(u,h){var m=Math.abs(u),v=Math.abs(h);return u===0?Math.log(v):h===0?Math.log(m):m<3e3&&v<3e3?Math.log(u*u+h*h)*.5:(u=u/2,h=h/2,.5*Math.log(u*u+h*h)+Math.LN2)}var f=function(u,h){var m={re:0,im:0};if(u==null)m.re=m.im=0;else if(h!==void 0)m.re=u,m.im=h;else switch(typeof u){case"object":if("im"in u&&"re"in u)m.re=u.re,m.im=u.im;else if("abs"in u&&"arg"in u){if(!Number.isFinite(u.abs)&&Number.isFinite(u.arg))return l.INFINITY;m.re=u.abs*Math.cos(u.arg),m.im=u.abs*Math.sin(u.arg)}else if("r"in u&&"phi"in u){if(!Number.isFinite(u.r)&&Number.isFinite(u.phi))return l.INFINITY;m.re=u.r*Math.cos(u.phi),m.im=u.r*Math.sin(u.phi)}else u.length===2?(m.re=u[0],m.im=u[1]):o();break;case"string":m.im=m.re=0;var v=u.match(/\d+\.?\d*e[+-]?\d+|\d+\.?\d*|\.\d+|./g),d=1,p=0;v===null&&o();for(var g=0;g<v.length;g++){var M=v[g];M===" "||M==="	"||M===`
`||(M==="+"?d++:M==="-"?p++:M==="i"||M==="I"?(d+p===0&&o(),v[g+1]!==" "&&!isNaN(v[g+1])?(m.im+=parseFloat((p%2?"-":"")+v[g+1]),g++):m.im+=parseFloat((p%2?"-":"")+"1"),d=p=0):((d+p===0||isNaN(M))&&o(),v[g+1]==="i"||v[g+1]==="I"?(m.im+=parseFloat((p%2?"-":"")+M),g++):m.re+=parseFloat((p%2?"-":"")+M),d=p=0))}d+p>0&&o();break;case"number":m.im=0,m.re=u;break;default:o()}return isNaN(m.re)||isNaN(m.im),m};function l(u,h){if(!(this instanceof l))return new l(u,h);var m=f(u,h);this.re=m.re,this.im=m.im}l.prototype={re:0,im:0,sign:function(){var u=this.abs();return new l(this.re/u,this.im/u)},add:function(u,h){var m=new l(u,h);return this.isInfinite()&&m.isInfinite()?l.NAN:this.isInfinite()||m.isInfinite()?l.INFINITY:new l(this.re+m.re,this.im+m.im)},sub:function(u,h){var m=new l(u,h);return this.isInfinite()&&m.isInfinite()?l.NAN:this.isInfinite()||m.isInfinite()?l.INFINITY:new l(this.re-m.re,this.im-m.im)},mul:function(u,h){var m=new l(u,h);return this.isInfinite()&&m.isZero()||this.isZero()&&m.isInfinite()?l.NAN:this.isInfinite()||m.isInfinite()?l.INFINITY:m.im===0&&this.im===0?new l(this.re*m.re,0):new l(this.re*m.re-this.im*m.im,this.re*m.im+this.im*m.re)},div:function(u,h){var m=new l(u,h);if(this.isZero()&&m.isZero()||this.isInfinite()&&m.isInfinite())return l.NAN;if(this.isInfinite()||m.isZero())return l.INFINITY;if(this.isZero()||m.isInfinite())return l.ZERO;u=this.re,h=this.im;var v=m.re,d=m.im,p,g;return d===0?new l(u/v,h/v):Math.abs(v)<Math.abs(d)?(g=v/d,p=v*g+d,new l((u*g+h)/p,(h*g-u)/p)):(g=d/v,p=d*g+v,new l((u+h*g)/p,(h-u*g)/p))},pow:function(u,h){var m=new l(u,h);if(u=this.re,h=this.im,m.isZero())return l.ONE;if(m.im===0){if(h===0&&u>0)return new l(Math.pow(u,m.re),0);if(u===0)switch((m.re%4+4)%4){case 0:return new l(Math.pow(h,m.re),0);case 1:return new l(0,Math.pow(h,m.re));case 2:return new l(-Math.pow(h,m.re),0);case 3:return new l(0,-Math.pow(h,m.re))}}if(u===0&&h===0&&m.re>0&&m.im>=0)return l.ZERO;var v=Math.atan2(h,u),d=c(u,h);return u=Math.exp(m.re*d-m.im*v),h=m.im*d+m.re*v,new l(u*Math.cos(h),u*Math.sin(h))},sqrt:function(){var u=this.re,h=this.im,m=this.abs(),v,d;if(u>=0){if(h===0)return new l(Math.sqrt(u),0);v=.5*Math.sqrt(2*(m+u))}else v=Math.abs(h)/Math.sqrt(2*(m-u));return u<=0?d=.5*Math.sqrt(2*(m-u)):d=Math.abs(h)/Math.sqrt(2*(m+u)),new l(v,h<0?-d:d)},exp:function(){var u=Math.exp(this.re);return this.im,new l(u*Math.cos(this.im),u*Math.sin(this.im))},expm1:function(){var u=this.re,h=this.im;return new l(Math.expm1(u)*Math.cos(h)+a(h),Math.exp(u)*Math.sin(h))},log:function(){var u=this.re,h=this.im;return new l(c(u,h),Math.atan2(h,u))},abs:function(){return s(this.re,this.im)},arg:function(){return Math.atan2(this.im,this.re)},sin:function(){var u=this.re,h=this.im;return new l(Math.sin(u)*r(h),Math.cos(u)*i(h))},cos:function(){var u=this.re,h=this.im;return new l(Math.cos(u)*r(h),-Math.sin(u)*i(h))},tan:function(){var u=2*this.re,h=2*this.im,m=Math.cos(u)+r(h);return new l(Math.sin(u)/m,i(h)/m)},cot:function(){var u=2*this.re,h=2*this.im,m=Math.cos(u)-r(h);return new l(-Math.sin(u)/m,i(h)/m)},sec:function(){var u=this.re,h=this.im,m=.5*r(2*h)+.5*Math.cos(2*u);return new l(Math.cos(u)*r(h)/m,Math.sin(u)*i(h)/m)},csc:function(){var u=this.re,h=this.im,m=.5*r(2*h)-.5*Math.cos(2*u);return new l(Math.sin(u)*r(h)/m,-Math.cos(u)*i(h)/m)},asin:function(){var u=this.re,h=this.im,m=new l(h*h-u*u+1,-2*u*h).sqrt(),v=new l(m.re-h,m.im+u).log();return new l(v.im,-v.re)},acos:function(){var u=this.re,h=this.im,m=new l(h*h-u*u+1,-2*u*h).sqrt(),v=new l(m.re-h,m.im+u).log();return new l(Math.PI/2-v.im,v.re)},atan:function(){var u=this.re,h=this.im;if(u===0){if(h===1)return new l(0,1/0);if(h===-1)return new l(0,-1/0)}var m=u*u+(1-h)*(1-h),v=new l((1-h*h-u*u)/m,-2*u/m).log();return new l(-.5*v.im,.5*v.re)},acot:function(){var u=this.re,h=this.im;if(h===0)return new l(Math.atan2(1,u),0);var m=u*u+h*h;return m!==0?new l(u/m,-h/m).atan():new l(u!==0?u/0:0,h!==0?-h/0:0).atan()},asec:function(){var u=this.re,h=this.im;if(u===0&&h===0)return new l(0,1/0);var m=u*u+h*h;return m!==0?new l(u/m,-h/m).acos():new l(u!==0?u/0:0,h!==0?-h/0:0).acos()},acsc:function(){var u=this.re,h=this.im;if(u===0&&h===0)return new l(Math.PI/2,1/0);var m=u*u+h*h;return m!==0?new l(u/m,-h/m).asin():new l(u!==0?u/0:0,h!==0?-h/0:0).asin()},sinh:function(){var u=this.re,h=this.im;return new l(i(u)*Math.cos(h),r(u)*Math.sin(h))},cosh:function(){var u=this.re,h=this.im;return new l(r(u)*Math.cos(h),i(u)*Math.sin(h))},tanh:function(){var u=2*this.re,h=2*this.im,m=r(u)+Math.cos(h);return new l(i(u)/m,Math.sin(h)/m)},coth:function(){var u=2*this.re,h=2*this.im,m=r(u)-Math.cos(h);return new l(i(u)/m,-Math.sin(h)/m)},csch:function(){var u=this.re,h=this.im,m=Math.cos(2*h)-r(2*u);return new l(-2*i(u)*Math.cos(h)/m,2*r(u)*Math.sin(h)/m)},sech:function(){var u=this.re,h=this.im,m=Math.cos(2*h)+r(2*u);return new l(2*r(u)*Math.cos(h)/m,-2*i(u)*Math.sin(h)/m)},asinh:function(){var u=this.im;this.im=-this.re,this.re=u;var h=this.asin();return this.re=-this.im,this.im=u,u=h.re,h.re=-h.im,h.im=u,h},acosh:function(){var u=this.acos();if(u.im<=0){var h=u.re;u.re=-u.im,u.im=h}else{var h=u.im;u.im=-u.re,u.re=h}return u},atanh:function(){var u=this.re,h=this.im,m=u>1&&h===0,v=1-u,d=1+u,p=v*v+h*h,g=p!==0?new l((d*v-h*h)/p,(h*v+d*h)/p):new l(u!==-1?u/0:0,h!==0?h/0:0),M=g.re;return g.re=c(g.re,g.im)/2,g.im=Math.atan2(g.im,M)/2,m&&(g.im=-g.im),g},acoth:function(){var u=this.re,h=this.im;if(u===0&&h===0)return new l(0,Math.PI/2);var m=u*u+h*h;return m!==0?new l(u/m,-h/m).atanh():new l(u!==0?u/0:0,h!==0?-h/0:0).atanh()},acsch:function(){var u=this.re,h=this.im;if(h===0)return new l(u!==0?Math.log(u+Math.sqrt(u*u+1)):1/0,0);var m=u*u+h*h;return m!==0?new l(u/m,-h/m).asinh():new l(u!==0?u/0:0,h!==0?-h/0:0).asinh()},asech:function(){var u=this.re,h=this.im;if(this.isZero())return l.INFINITY;var m=u*u+h*h;return m!==0?new l(u/m,-h/m).acosh():new l(u!==0?u/0:0,h!==0?-h/0:0).acosh()},inverse:function(){if(this.isZero())return l.INFINITY;if(this.isInfinite())return l.ZERO;var u=this.re,h=this.im,m=u*u+h*h;return new l(u/m,-h/m)},conjugate:function(){return new l(this.re,-this.im)},neg:function(){return new l(-this.re,-this.im)},ceil:function(u){return u=Math.pow(10,u||0),new l(Math.ceil(this.re*u)/u,Math.ceil(this.im*u)/u)},floor:function(u){return u=Math.pow(10,u||0),new l(Math.floor(this.re*u)/u,Math.floor(this.im*u)/u)},round:function(u){return u=Math.pow(10,u||0),new l(Math.round(this.re*u)/u,Math.round(this.im*u)/u)},equals:function(u,h){var m=new l(u,h);return Math.abs(m.re-this.re)<=l.EPSILON&&Math.abs(m.im-this.im)<=l.EPSILON},clone:function(){return new l(this.re,this.im)},toString:function(){var u=this.re,h=this.im,m="";return this.isNaN()?"NaN":this.isInfinite()?"Infinity":(Math.abs(u)<l.EPSILON&&(u=0),Math.abs(h)<l.EPSILON&&(h=0),h===0?m+u:(u!==0?(m+=u,m+=" ",h<0?(h=-h,m+="-"):m+="+",m+=" "):h<0&&(h=-h,m+="-"),h!==1&&(m+=h),m+"i"))},toVector:function(){return[this.re,this.im]},valueOf:function(){return this.im===0?this.re:null},isNaN:function(){return isNaN(this.re)||isNaN(this.im)},isZero:function(){return this.im===0&&this.re===0},isFinite:function(){return isFinite(this.re)&&isFinite(this.im)},isInfinite:function(){return!(this.isNaN()||this.isFinite())}},l.ZERO=new l(0,0),l.ONE=new l(1,0),l.I=new l(0,1),l.PI=new l(Math.PI,0),l.E=new l(Math.E,0),l.INFINITY=new l(1/0,1/0),l.NAN=new l(NaN,NaN),l.EPSILON=1e-15,Object.defineProperty(l,"__esModule",{value:!0}),l.default=l,l.Complex=l,n.exports=l})()})(_f);var Q_=_f.exports;const Ft=vf(Q_);var j_="Complex",ex=[],tx=Me(j_,ex,()=>(Object.defineProperty(Ft,"name",{value:"Complex"}),Ft.prototype.constructor=Ft,Ft.prototype.type="Complex",Ft.prototype.isComplex=!0,Ft.prototype.toJSON=function(){return{mathjs:"Complex",re:this.re,im:this.im}},Ft.prototype.toPolar=function(){return{r:this.abs(),phi:this.arg()}},Ft.prototype.format=function(n){var e="",t=this.im,r=this.re,i=Qs(this.re,n),a=Qs(this.im,n),s=gt(n)?n:n?n.precision:null;if(s!==null){var o=Math.pow(10,-s);Math.abs(r/t)<o&&(r=0),Math.abs(t/r)<o&&(t=0)}return t===0?e=i:r===0?t===1?e="i":t===-1?e="-i":e=a+"i":t<0?t===-1?e=i+" - i":e=i+" - "+a.substring(1)+"i":t===1?e=i+" + i":e=i+" + "+a+"i",e},Ft.fromPolar=function(n){switch(arguments.length){case 1:{var e=arguments[0];if(typeof e=="object")return Ft(e);throw new TypeError("Input has to be an object with r and phi keys.")}case 2:{var t=arguments[0],r=arguments[1];if(gt(t)){if(kc(r)&&r.hasBase("ANGLE")&&(r=r.toNumber("rad")),gt(r))return new Ft({r:t,phi:r});throw new TypeError("Phi is not a number nor an angle unit.")}else throw new TypeError("Radius r is not a number.")}default:throw new SyntaxError("Wrong number of arguments in function fromPolar")}},Ft.prototype.valueOf=Ft.prototype.toString,Ft.fromJSON=function(n){return new Ft(n)},Ft.compare=function(n,e){return n.re>e.re?1:n.re<e.re?-1:n.im>e.im?1:n.im<e.im?-1:0},Ft),{isClass:!0}),xf={exports:{}};/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/(function(n,e){(function(t){var r=2e3,i={s:1,n:0,d:1};function a(v,d){if(isNaN(v=parseInt(v,10)))throw m.InvalidParameter;return v*d}function s(v,d){if(d===0)throw m.DivisionByZero;var p=Object.create(m.prototype);p.s=v<0?-1:1,v=v<0?-v:v;var g=h(v,d);return p.n=v/g,p.d=d/g,p}function o(v){for(var d={},p=v,g=2,M=4;M<=p;){for(;p%g===0;)p/=g,d[g]=(d[g]||0)+1;M+=1+2*g++}return p!==v?p>1&&(d[p]=(d[p]||0)+1):d[v]=(d[v]||0)+1,d}var c=function(v,d){var p=0,g=1,M=1,_=0,A=0,y=0,D=1,T=1,b=0,x=1,E=1,N=1,L=1e7,P;if(v!=null)if(d!==void 0){if(p=v,g=d,M=p*g,p%1!==0||g%1!==0)throw m.NonIntegerParameter}else switch(typeof v){case"object":{if("d"in v&&"n"in v)p=v.n,g=v.d,"s"in v&&(p*=v.s);else if(0 in v)p=v[0],1 in v&&(g=v[1]);else throw m.InvalidParameter;M=p*g;break}case"number":{if(v<0&&(M=v,v=-v),v%1===0)p=v;else if(v>0){for(v>=1&&(T=Math.pow(10,Math.floor(1+Math.log(v)/Math.LN10)),v/=T);x<=L&&N<=L;)if(P=(b+E)/(x+N),v===P){x+N<=L?(p=b+E,g=x+N):N>x?(p=E,g=N):(p=b,g=x);break}else v>P?(b+=E,x+=N):(E+=b,N+=x),x>L?(p=E,g=N):(p=b,g=x);p*=T}else(isNaN(v)||isNaN(d))&&(g=p=NaN);break}case"string":{if(x=v.match(/\d+|./g),x===null)throw m.InvalidParameter;if(x[b]==="-"?(M=-1,b++):x[b]==="+"&&b++,x.length===b+1?A=a(x[b++],M):x[b+1]==="."||x[b]==="."?(x[b]!=="."&&(_=a(x[b++],M)),b++,(b+1===x.length||x[b+1]==="("&&x[b+3]===")"||x[b+1]==="'"&&x[b+3]==="'")&&(A=a(x[b],M),D=Math.pow(10,x[b].length),b++),(x[b]==="("&&x[b+2]===")"||x[b]==="'"&&x[b+2]==="'")&&(y=a(x[b+1],M),T=Math.pow(10,x[b+1].length)-1,b+=3)):x[b+1]==="/"||x[b+1]===":"?(A=a(x[b],M),D=a(x[b+2],1),b+=3):x[b+3]==="/"&&x[b+1]===" "&&(_=a(x[b],M),A=a(x[b+2],M),D=a(x[b+4],1),b+=5),x.length<=b){g=D*T,M=p=y+g*_+T*A;break}}default:throw m.InvalidParameter}if(g===0)throw m.DivisionByZero;i.s=M<0?-1:1,i.n=Math.abs(p),i.d=Math.abs(g)};function f(v,d,p){for(var g=1;d>0;v=v*v%p,d>>=1)d&1&&(g=g*v%p);return g}function l(v,d){for(;d%2===0;d/=2);for(;d%5===0;d/=5);if(d===1)return 0;for(var p=10%d,g=1;p!==1;g++)if(p=p*10%d,g>r)return 0;return g}function u(v,d,p){for(var g=1,M=f(10,p,d),_=0;_<300;_++){if(g===M)return _;g=g*10%d,M=M*10%d}return 0}function h(v,d){if(!v)return d;if(!d)return v;for(;;){if(v%=d,!v)return d;if(d%=v,!d)return v}}function m(v,d){if(c(v,d),this instanceof m)v=h(i.d,i.n),this.s=i.s,this.n=i.n/v,this.d=i.d/v;else return s(i.s*i.n,i.d)}m.DivisionByZero=new Error("Division by Zero"),m.InvalidParameter=new Error("Invalid argument"),m.NonIntegerParameter=new Error("Parameters must be integer"),m.prototype={s:1,n:0,d:1,abs:function(){return s(this.n,this.d)},neg:function(){return s(-this.s*this.n,this.d)},add:function(v,d){return c(v,d),s(this.s*this.n*i.d+i.s*this.d*i.n,this.d*i.d)},sub:function(v,d){return c(v,d),s(this.s*this.n*i.d-i.s*this.d*i.n,this.d*i.d)},mul:function(v,d){return c(v,d),s(this.s*i.s*this.n*i.n,this.d*i.d)},div:function(v,d){return c(v,d),s(this.s*i.s*this.n*i.d,this.d*i.n)},clone:function(){return s(this.s*this.n,this.d)},mod:function(v,d){if(isNaN(this.n)||isNaN(this.d))return new m(NaN);if(v===void 0)return s(this.s*this.n%this.d,1);if(c(v,d),i.n===0&&this.d===0)throw m.DivisionByZero;return s(this.s*(i.d*this.n)%(i.n*this.d),i.d*this.d)},gcd:function(v,d){return c(v,d),s(h(i.n,this.n)*h(i.d,this.d),i.d*this.d)},lcm:function(v,d){return c(v,d),i.n===0&&this.n===0?s(0,1):s(i.n*this.n,h(i.n,this.n)*h(i.d,this.d))},ceil:function(v){return v=Math.pow(10,v||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):s(Math.ceil(v*this.s*this.n/this.d),v)},floor:function(v){return v=Math.pow(10,v||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):s(Math.floor(v*this.s*this.n/this.d),v)},round:function(v){return v=Math.pow(10,v||0),isNaN(this.n)||isNaN(this.d)?new m(NaN):s(Math.round(v*this.s*this.n/this.d),v)},inverse:function(){return s(this.s*this.d,this.n)},pow:function(v,d){if(c(v,d),i.d===1)return i.s<0?s(Math.pow(this.s*this.d,i.n),Math.pow(this.n,i.n)):s(Math.pow(this.s*this.n,i.n),Math.pow(this.d,i.n));if(this.s<0)return null;var p=o(this.n),g=o(this.d),M=1,_=1;for(var A in p)if(A!=="1"){if(A==="0"){M=0;break}if(p[A]*=i.n,p[A]%i.d===0)p[A]/=i.d;else return null;M*=Math.pow(A,p[A])}for(var A in g)if(A!=="1"){if(g[A]*=i.n,g[A]%i.d===0)g[A]/=i.d;else return null;_*=Math.pow(A,g[A])}return i.s<0?s(_,M):s(M,_)},equals:function(v,d){return c(v,d),this.s*this.n*i.d===i.s*i.n*this.d},compare:function(v,d){c(v,d);var p=this.s*this.n*i.d-i.s*i.n*this.d;return(0<p)-(p<0)},simplify:function(v){if(isNaN(this.n)||isNaN(this.d))return this;v=v||.001;for(var d=this.abs(),p=d.toContinued(),g=1;g<p.length;g++){for(var M=s(p[g-1],1),_=g-2;_>=0;_--)M=M.inverse().add(p[_]);if(M.sub(d).abs().valueOf()<v)return M.mul(this.s)}return this},divisible:function(v,d){return c(v,d),!(!(i.n*this.d)||this.n*i.d%(i.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(v){var d,p="",g=this.n,M=this.d;return this.s<0&&(p+="-"),M===1?p+=g:(v&&(d=Math.floor(g/M))>0&&(p+=d,p+=" ",g%=M),p+=g,p+="/",p+=M),p},toLatex:function(v){var d,p="",g=this.n,M=this.d;return this.s<0&&(p+="-"),M===1?p+=g:(v&&(d=Math.floor(g/M))>0&&(p+=d,g%=M),p+="\\frac{",p+=g,p+="}{",p+=M,p+="}"),p},toContinued:function(){var v,d=this.n,p=this.d,g=[];if(isNaN(d)||isNaN(p))return g;do g.push(Math.floor(d/p)),v=d%p,d=p,p=v;while(d!==1);return g},toString:function(v){var d=this.n,p=this.d;if(isNaN(d)||isNaN(p))return"NaN";v=v||15;var g=l(d,p),M=u(d,p,g),_=this.s<0?"-":"";if(_+=d/p|0,d%=p,d*=10,d&&(_+="."),g){for(var A=M;A--;)_+=d/p|0,d%=p,d*=10;_+="(";for(var A=g;A--;)_+=d/p|0,d%=p,d*=10;_+=")"}else for(var A=v;d&&A--;)_+=d/p|0,d%=p,d*=10;return _}},Object.defineProperty(m,"__esModule",{value:!0}),m.default=m,m.Fraction=m,n.exports=m})()})(xf);var nx=xf.exports;const On=vf(nx);var rx="Fraction",ix=[],ax=Me(rx,ix,()=>(Object.defineProperty(On,"name",{value:"Fraction"}),On.prototype.constructor=On,On.prototype.type="Fraction",On.prototype.isFraction=!0,On.prototype.toJSON=function(){return{mathjs:"Fraction",n:this.s*this.n,d:this.d}},On.fromJSON=function(n){return new On(n)},On),{isClass:!0}),sx="Matrix",ox=[],ux=Me(sx,ox,()=>{function n(){if(!(this instanceof n))throw new SyntaxError("Constructor must be called with the new operator")}return n.prototype.type="Matrix",n.prototype.isMatrix=!0,n.prototype.storage=function(){throw new Error("Cannot invoke storage on a Matrix interface")},n.prototype.datatype=function(){throw new Error("Cannot invoke datatype on a Matrix interface")},n.prototype.create=function(e,t){throw new Error("Cannot invoke create on a Matrix interface")},n.prototype.subset=function(e,t,r){throw new Error("Cannot invoke subset on a Matrix interface")},n.prototype.get=function(e){throw new Error("Cannot invoke get on a Matrix interface")},n.prototype.set=function(e,t,r){throw new Error("Cannot invoke set on a Matrix interface")},n.prototype.resize=function(e,t){throw new Error("Cannot invoke resize on a Matrix interface")},n.prototype.reshape=function(e,t){throw new Error("Cannot invoke reshape on a Matrix interface")},n.prototype.clone=function(){throw new Error("Cannot invoke clone on a Matrix interface")},n.prototype.size=function(){throw new Error("Cannot invoke size on a Matrix interface")},n.prototype.map=function(e,t){throw new Error("Cannot invoke map on a Matrix interface")},n.prototype.forEach=function(e){throw new Error("Cannot invoke forEach on a Matrix interface")},n.prototype[Symbol.iterator]=function(){throw new Error("Cannot iterate a Matrix interface")},n.prototype.toArray=function(){throw new Error("Cannot invoke toArray on a Matrix interface")},n.prototype.valueOf=function(){throw new Error("Cannot invoke valueOf on a Matrix interface")},n.prototype.format=function(e){throw new Error("Cannot invoke format on a Matrix interface")},n.prototype.toString=function(){throw new Error("Cannot invoke toString on a Matrix interface")},n},{isClass:!0});function Ef(n){return Object.keys(n.signatures||{}).reduce(function(e,t){var r=(t.match(/,/g)||[]).length+1;return Math.max(e,r)},-1)}var lx="DenseMatrix",cx=["Matrix"],fx=Me(lx,cx,n=>{var{Matrix:e}=n;function t(l,u){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");if(u&&!yn(u))throw new Error("Invalid datatype: "+u);if(ht(l))l.type==="DenseMatrix"?(this._data=tt(l._data),this._size=tt(l._size),this._datatype=u||l._datatype):(this._data=l.toArray(),this._size=l.size(),this._datatype=u||l._datatype);else if(l&&st(l.data)&&st(l.size))this._data=l.data,this._size=l.size,vl(this._data,this._size),this._datatype=u||l.datatype;else if(st(l))this._data=f(l),this._size=xt(this._data),vl(this._data,this._size),this._datatype=u;else{if(l)throw new TypeError("Unsupported type of data ("+er(l)+")");this._data=[],this._size=[0],this._datatype=u}}t.prototype=new e,t.prototype.createDenseMatrix=function(l,u){return new t(l,u)},Object.defineProperty(t,"name",{value:"DenseMatrix"}),t.prototype.constructor=t,t.prototype.type="DenseMatrix",t.prototype.isDenseMatrix=!0,t.prototype.getDataType=function(){return Sa(this._data,er)},t.prototype.storage=function(){return"dense"},t.prototype.datatype=function(){return this._datatype},t.prototype.create=function(l,u){return new t(l,u)},t.prototype.subset=function(l,u,h){switch(arguments.length){case 1:return r(this,l);case 2:case 3:return a(this,l,u,h);default:throw new SyntaxError("Wrong number of arguments")}},t.prototype.get=function(l){if(!st(l))throw new TypeError("Array expected");if(l.length!==this._size.length)throw new rt(l.length,this._size.length);for(var u=0;u<l.length;u++)pt(l[u],this._size[u]);for(var h=this._data,m=0,v=l.length;m<v;m++){var d=l[m];pt(d,h.length),h=h[d]}return h},t.prototype.set=function(l,u,h){if(!st(l))throw new TypeError("Array expected");if(l.length<this._size.length)throw new rt(l.length,this._size.length,"<");var m,v,d,p=l.map(function(M){return M+1});c(this,p,h);var g=this._data;for(m=0,v=l.length-1;m<v;m++)d=l[m],pt(d,g.length),g=g[d];return d=l[l.length-1],pt(d,g.length),g[d]=u,this};function r(l,u){if(!Eo(u))throw new TypeError("Invalid index");var h=u.isScalar();if(h)return l.get(u.min());var m=u.size();if(m.length!==l._size.length)throw new rt(m.length,l._size.length);for(var v=u.min(),d=u.max(),p=0,g=l._size.length;p<g;p++)pt(v[p],l._size[p]),pt(d[p],l._size[p]);return new t(i(l._data,u,m.length,0),l._datatype)}function i(l,u,h,m){var v=m===h-1,d=u.dimension(m);return v?d.map(function(p){return pt(p,l.length),l[p]}).valueOf():d.map(function(p){pt(p,l.length);var g=l[p];return i(g,u,h,m+1)}).valueOf()}function a(l,u,h,m){if(!u||u.isIndex!==!0)throw new TypeError("Invalid index");var v=u.size(),d=u.isScalar(),p;if(ht(h)?(p=h.size(),h=h.valueOf()):p=xt(h),d){if(p.length!==0)throw new TypeError("Scalar expected");l.set(u.min(),h,m)}else{if(v.length<l._size.length)throw new rt(v.length,l._size.length,"<");if(p.length<v.length){for(var g=0,M=0;v[g]===1&&p[g]===1;)g++;for(;v[g]===1;)M++,g++;h=ef(h,v.length,M,p)}if(!Ma(v,p))throw new rt(v,p,">");var _=u.max().map(function(D){return D+1});c(l,_,m);var A=v.length,y=0;s(l._data,u,h,A,y)}return l}function s(l,u,h,m,v){var d=v===m-1,p=u.dimension(v);d?p.forEach(function(g,M){pt(g),l[g]=h[M[0]]}):p.forEach(function(g,M){pt(g),s(l[g],u,h[M[0]],m,v+1)})}t.prototype.resize=function(l,u,h){if(!ya(l))throw new TypeError("Array or Matrix expected");var m=l.valueOf().map(d=>Array.isArray(d)&&d.length===1?d[0]:d),v=h?this.clone():this;return o(v,m,u)};function o(l,u,h){if(u.length===0){for(var m=l._data;st(m);)m=m[0];return m}return l._size=u.slice(0),l._data=Aa(l._data,l._size,h),l}t.prototype.reshape=function(l,u){var h=u?this.clone():this;h._data=Gv(h._data,l);var m=h._size.reduce((v,d)=>v*d);return h._size=yo(l,m),h};function c(l,u,h){for(var m=l._size.slice(0),v=!1;m.length<u.length;)m.push(0),v=!0;for(var d=0,p=u.length;d<p;d++)u[d]>m[d]&&(m[d]=u[d],v=!0);v&&o(l,m,h)}t.prototype.clone=function(){var l=new t({data:tt(this._data),size:tt(this._size),datatype:this._datatype});return l},t.prototype.size=function(){return this._size.slice(0)},t.prototype.map=function(l){var u=this,h=Ef(l),m=function p(g,M){return st(g)?g.map(function(_,A){return p(_,M.concat(A))}):h===1?l(g):h===2?l(g,M):l(g,M,u)},v=m(this._data,[]),d=this._datatype!==void 0?Sa(v,er):void 0;return new t(v,d)},t.prototype.forEach=function(l){var u=this,h=function m(v,d){st(v)?v.forEach(function(p,g){m(p,d.concat(g))}):l(v,d,u)};h(this._data,[])},t.prototype[Symbol.iterator]=function*(){var l=function*u(h,m){if(st(h))for(var v=0;v<h.length;v++)yield*u(h[v],m.concat(v));else yield{value:h,index:m}};yield*l(this._data,[])},t.prototype.rows=function(){var l=[],u=this.size();if(u.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");var h=this._data;for(var m of h)l.push(new t([m],this._datatype));return l},t.prototype.columns=function(){var l=this,u=[],h=this.size();if(h.length!==2)throw new TypeError("Rows can only be returned for a 2D matrix.");for(var m=this._data,v=function(g){var M=m.map(_=>[_[g]]);u.push(new t(M,l._datatype))},d=0;d<h[1];d++)v(d);return u},t.prototype.toArray=function(){return tt(this._data)},t.prototype.valueOf=function(){return this._data},t.prototype.format=function(l){return ft(this._data,l)},t.prototype.toString=function(){return ft(this._data)},t.prototype.toJSON=function(){return{mathjs:"DenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},t.prototype.diagonal=function(l){if(l){if(Tt(l)&&(l=l.toNumber()),!gt(l)||!ct(l))throw new TypeError("The parameter k must be an integer number")}else l=0;for(var u=l>0?l:0,h=l<0?-l:0,m=this._size[0],v=this._size[1],d=Math.min(m-h,v-u),p=[],g=0;g<d;g++)p[g]=this._data[g+h][g+u];return new t({data:p,size:[d],datatype:this._datatype})},t.diagonal=function(l,u,h,m){if(!st(l))throw new TypeError("Array expected, size parameter");if(l.length!==2)throw new Error("Only two dimensions matrix are supported");if(l=l.map(function(T){if(Tt(T)&&(T=T.toNumber()),!gt(T)||!ct(T)||T<1)throw new Error("Size values must be positive integers");return T}),h){if(Tt(h)&&(h=h.toNumber()),!gt(h)||!ct(h))throw new TypeError("The parameter k must be an integer number")}else h=0;var v=h>0?h:0,d=h<0?-h:0,p=l[0],g=l[1],M=Math.min(p-d,g-v),_;if(st(u)){if(u.length!==M)throw new Error("Invalid value array length");_=function(b){return u[b]}}else if(ht(u)){var A=u.size();if(A.length!==1||A[0]!==M)throw new Error("Invalid matrix length");_=function(b){return u.get([b])}}else _=function(){return u};m||(m=Tt(_(0))?_(0).mul(0):0);var y=[];if(l.length>0){y=Aa(y,l,m);for(var D=0;D<M;D++)y[D+d][D+v]=_(D)}return new t({data:y,size:[p,g]})},t.fromJSON=function(l){return new t(l)},t.prototype.swapRows=function(l,u){if(!gt(l)||!ct(l)||!gt(u)||!ct(u))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return pt(l,this._size[0]),pt(u,this._size[0]),t._swapRows(l,u,this._data),this},t._swapRows=function(l,u,h){var m=h[l];h[l]=h[u],h[u]=m};function f(l){for(var u=0,h=l.length;u<h;u++){var m=l[u];st(m)?l[u]=f(m):m&&m.isMatrix===!0&&(l[u]=f(m.valueOf()))}return l}return t},{isClass:!0});function Kt(n,e,t){return n&&typeof n.map=="function"?n.map(function(r){return Kt(r,e)}):e(n)}var Ml="isInteger",hx=["typed"],dx=Me(Ml,hx,n=>{var{typed:e}=n;return e(Ml,{number:ct,BigNumber:function(r){return r.isInt()},Fraction:function(r){return r.d===1&&isFinite(r.n)},"Array | Matrix":e.referToSelf(t=>r=>Kt(r,t))})}),Ao="number",So="number, number";function yf(n){return Math.abs(n)}yf.signature=Ao;function Mf(n,e){return n+e}Mf.signature=So;function Af(n,e){return n*e}Af.signature=So;function Sf(n){return-n}Sf.signature=Ao;function so(n){return Cv(n)}so.signature=Ao;function wf(n,e){return n*n<1&&e===1/0||n*n>1&&e===-1/0?0:Math.pow(n,e)}wf.signature=So;var Df="number";function bf(n){return n>0}bf.signature=Df;function Tf(n){return n===0}Tf.signature=Df;var Al="isPositive",px=["typed"],mx=Me(Al,px,n=>{var{typed:e}=n;return e(Al,{number:bf,BigNumber:function(r){return!r.isNeg()&&!r.isZero()&&!r.isNaN()},Fraction:function(r){return r.s>0&&r.n>0},Unit:e.referToSelf(t=>r=>e.find(t,r.valueType())(r.value)),"Array | Matrix":e.referToSelf(t=>r=>Kt(r,t))})}),Sl="isZero",gx=["typed"],vx=Me(Sl,gx,n=>{var{typed:e}=n;return e(Sl,{number:Tf,BigNumber:function(r){return r.isZero()},Complex:function(r){return r.re===0&&r.im===0},Fraction:function(r){return r.d===1&&r.n===0},Unit:e.referToSelf(t=>r=>e.find(t,r.valueType())(r.value)),"Array | Matrix":e.referToSelf(t=>r=>Kt(r,t))})});function Ni(n,e,t){if(t==null)return n.eq(e);if(n.eq(e))return!0;if(n.isNaN()||e.isNaN())return!1;if(n.isFinite()&&e.isFinite()){var r=n.minus(e).abs();if(r.isZero())return!0;var i=n.constructor.max(n.abs(),e.abs());return r.lte(i.times(t))}return!1}function _x(n,e,t){return nr(n.re,e.re,t)&&nr(n.im,e.im,t)}var Ii=Me("compareUnits",["typed"],n=>{var{typed:e}=n;return{"Unit, Unit":e.referToSelf(t=>(r,i)=>{if(!r.equalBase(i))throw new Error("Cannot compare units with different base");return e.find(t,[r.valueType(),i.valueType()])(r.value,i.value)})}}),Ta="equalScalar",xx=["typed","config"],Ex=Me(Ta,xx,n=>{var{typed:e,config:t}=n,r=Ii({typed:e});return e(Ta,{"boolean, boolean":function(a,s){return a===s},"number, number":function(a,s){return nr(a,s,t.epsilon)},"BigNumber, BigNumber":function(a,s){return a.eq(s)||Ni(a,s,t.epsilon)},"Fraction, Fraction":function(a,s){return a.equals(s)},"Complex, Complex":function(a,s){return _x(a,s,t.epsilon)}},r)});Me(Ta,["typed","config"],n=>{var{typed:e,config:t}=n;return e(Ta,{"number, number":function(i,a){return nr(i,a,t.epsilon)}})});var yx="SparseMatrix",Mx=["typed","equalScalar","Matrix"],Ax=Me(yx,Mx,n=>{var{typed:e,equalScalar:t,Matrix:r}=n;function i(d,p){if(!(this instanceof i))throw new SyntaxError("Constructor must be called with the new operator");if(p&&!yn(p))throw new Error("Invalid datatype: "+p);if(ht(d))a(this,d,p);else if(d&&st(d.index)&&st(d.ptr)&&st(d.size))this._values=d.values,this._index=d.index,this._ptr=d.ptr,this._size=d.size,this._datatype=p||d.datatype;else if(st(d))s(this,d,p);else{if(d)throw new TypeError("Unsupported type of data ("+er(d)+")");this._values=[],this._index=[],this._ptr=[0],this._size=[0,0],this._datatype=p}}function a(d,p,g){p.type==="SparseMatrix"?(d._values=p._values?tt(p._values):void 0,d._index=tt(p._index),d._ptr=tt(p._ptr),d._size=tt(p._size),d._datatype=g||p._datatype):s(d,p.valueOf(),g||p._datatype)}function s(d,p,g){d._values=[],d._index=[],d._ptr=[],d._datatype=g;var M=p.length,_=0,A=t,y=0;if(yn(g)&&(A=e.find(t,[g,g])||t,y=e.convert(0,g)),M>0){var D=0;do{d._ptr.push(d._index.length);for(var T=0;T<M;T++){var b=p[T];if(st(b)){if(D===0&&_<b.length&&(_=b.length),D<b.length){var x=b[D];A(x,y)||(d._values.push(x),d._index.push(T))}}else D===0&&_<1&&(_=1),A(b,y)||(d._values.push(b),d._index.push(T))}D++}while(D<_)}d._ptr.push(d._index.length),d._size=[M,_]}i.prototype=new r,i.prototype.createSparseMatrix=function(d,p){return new i(d,p)},Object.defineProperty(i,"name",{value:"SparseMatrix"}),i.prototype.constructor=i,i.prototype.type="SparseMatrix",i.prototype.isSparseMatrix=!0,i.prototype.getDataType=function(){return Sa(this._values,er)},i.prototype.storage=function(){return"sparse"},i.prototype.datatype=function(){return this._datatype},i.prototype.create=function(d,p){return new i(d,p)},i.prototype.density=function(){var d=this._size[0],p=this._size[1];return d!==0&&p!==0?this._index.length/(d*p):0},i.prototype.subset=function(d,p,g){if(!this._values)throw new Error("Cannot invoke subset on a Pattern only matrix");switch(arguments.length){case 1:return o(this,d);case 2:case 3:return c(this,d,p,g);default:throw new SyntaxError("Wrong number of arguments")}};function o(d,p){if(!Eo(p))throw new TypeError("Invalid index");var g=p.isScalar();if(g)return d.get(p.min());var M=p.size();if(M.length!==d._size.length)throw new rt(M.length,d._size.length);var _,A,y,D,T=p.min(),b=p.max();for(_=0,A=d._size.length;_<A;_++)pt(T[_],d._size[_]),pt(b[_],d._size[_]);var x=d._values,E=d._index,N=d._ptr,L=p.dimension(0),P=p.dimension(1),I=[],z=[];L.forEach(function(X,U){z[X]=U[0],I[X]=!0});var O=x?[]:void 0,R=[],G=[];return P.forEach(function(X){for(G.push(R.length),y=N[X],D=N[X+1];y<D;y++)_=E[y],I[_]===!0&&(R.push(z[_]),O&&O.push(x[y]))}),G.push(R.length),new i({values:O,index:R,ptr:G,size:M,datatype:d._datatype})}function c(d,p,g,M){if(!p||p.isIndex!==!0)throw new TypeError("Invalid index");var _=p.size(),A=p.isScalar(),y;if(ht(g)?(y=g.size(),g=g.toArray()):y=xt(g),A){if(y.length!==0)throw new TypeError("Scalar expected");d.set(p.min(),g,M)}else{if(_.length!==1&&_.length!==2)throw new rt(_.length,d._size.length,"<");if(y.length<_.length){for(var D=0,T=0;_[D]===1&&y[D]===1;)D++;for(;_[D]===1;)T++,D++;g=ef(g,_.length,T,y)}if(!Ma(_,y))throw new rt(_,y,">");if(_.length===1){var b=p.dimension(0);b.forEach(function(N,L){pt(N),d.set([N,0],g[L[0]],M)})}else{var x=p.dimension(0),E=p.dimension(1);x.forEach(function(N,L){pt(N),E.forEach(function(P,I){pt(P),d.set([N,P],g[L[0]][I[0]],M)})})}}return d}i.prototype.get=function(d){if(!st(d))throw new TypeError("Array expected");if(d.length!==this._size.length)throw new rt(d.length,this._size.length);if(!this._values)throw new Error("Cannot invoke get on a Pattern only matrix");var p=d[0],g=d[1];pt(p,this._size[0]),pt(g,this._size[1]);var M=f(p,this._ptr[g],this._ptr[g+1],this._index);return M<this._ptr[g+1]&&this._index[M]===p?this._values[M]:0},i.prototype.set=function(d,p,g){if(!st(d))throw new TypeError("Array expected");if(d.length!==this._size.length)throw new rt(d.length,this._size.length);if(!this._values)throw new Error("Cannot invoke set on a Pattern only matrix");var M=d[0],_=d[1],A=this._size[0],y=this._size[1],D=t,T=0;yn(this._datatype)&&(D=e.find(t,[this._datatype,this._datatype])||t,T=e.convert(0,this._datatype)),(M>A-1||_>y-1)&&(h(this,Math.max(M+1,A),Math.max(_+1,y),g),A=this._size[0],y=this._size[1]),pt(M,A),pt(_,y);var b=f(M,this._ptr[_],this._ptr[_+1],this._index);return b<this._ptr[_+1]&&this._index[b]===M?D(p,T)?l(b,_,this._values,this._index,this._ptr):this._values[b]=p:D(p,T)||u(b,M,_,p,this._values,this._index,this._ptr),this};function f(d,p,g,M){if(g-p===0)return g;for(var _=p;_<g;_++)if(M[_]===d)return _;return p}function l(d,p,g,M,_){g.splice(d,1),M.splice(d,1);for(var A=p+1;A<_.length;A++)_[A]--}function u(d,p,g,M,_,A,y){_.splice(d,0,M),A.splice(d,0,p);for(var D=g+1;D<y.length;D++)y[D]++}i.prototype.resize=function(d,p,g){if(!ya(d))throw new TypeError("Array or Matrix expected");var M=d.valueOf().map(A=>Array.isArray(A)&&A.length===1?A[0]:A);if(M.length!==2)throw new Error("Only two dimensions matrix are supported");M.forEach(function(A){if(!gt(A)||!ct(A)||A<0)throw new TypeError("Invalid size, must contain positive integers (size: "+ft(M)+")")});var _=g?this.clone():this;return h(_,M[0],M[1],p)};function h(d,p,g,M){var _=M||0,A=t,y=0;yn(d._datatype)&&(A=e.find(t,[d._datatype,d._datatype])||t,y=e.convert(0,d._datatype),_=e.convert(_,d._datatype));var D=!A(_,y),T=d._size[0],b=d._size[1],x,E,N;if(g>b){for(E=b;E<g;E++)if(d._ptr[E]=d._values.length,D)for(x=0;x<T;x++)d._values.push(_),d._index.push(x);d._ptr[g]=d._values.length}else g<b&&(d._ptr.splice(g+1,b-g),d._values.splice(d._ptr[g],d._values.length),d._index.splice(d._ptr[g],d._index.length));if(b=g,p>T){if(D){var L=0;for(E=0;E<b;E++){d._ptr[E]=d._ptr[E]+L,N=d._ptr[E+1]+L;var P=0;for(x=T;x<p;x++,P++)d._values.splice(N+P,0,_),d._index.splice(N+P,0,x),L++}d._ptr[b]=d._values.length}}else if(p<T){var I=0;for(E=0;E<b;E++){d._ptr[E]=d._ptr[E]-I;var z=d._ptr[E],O=d._ptr[E+1]-I;for(N=z;N<O;N++)x=d._index[N],x>p-1&&(d._values.splice(N,1),d._index.splice(N,1),I++)}d._ptr[E]=d._values.length}return d._size[0]=p,d._size[1]=g,d}i.prototype.reshape=function(d,p){if(!st(d))throw new TypeError("Array expected");if(d.length!==2)throw new Error("Sparse matrices can only be reshaped in two dimensions");d.forEach(function(X){if(!gt(X)||!ct(X)||X<=-2||X===0)throw new TypeError("Invalid size, must contain positive integers or -1 (size: "+ft(d)+")")});var g=this._size[0]*this._size[1];d=yo(d,g);var M=d[0]*d[1];if(g!==M)throw new Error("Reshaping sparse matrix will result in the wrong number of elements");var _=p?this.clone():this;if(this._size[0]===d[0]&&this._size[1]===d[1])return _;for(var A=[],y=0;y<_._ptr.length;y++)for(var D=0;D<_._ptr[y+1]-_._ptr[y];D++)A.push(y);for(var T=_._values.slice(),b=_._index.slice(),x=0;x<_._index.length;x++){var E=b[x],N=A[x],L=E*_._size[1]+N;A[x]=L%d[1],b[x]=Math.floor(L/d[1])}_._values.length=0,_._index.length=0,_._ptr.length=d[1]+1,_._size=d.slice();for(var P=0;P<_._ptr.length;P++)_._ptr[P]=0;for(var I=0;I<T.length;I++){var z=b[I],O=A[I],R=T[I],G=f(z,_._ptr[O],_._ptr[O+1],_._index);u(G,z,O,R,_._values,_._index,_._ptr)}return _},i.prototype.clone=function(){var d=new i({values:this._values?tt(this._values):void 0,index:tt(this._index),ptr:tt(this._ptr),size:tt(this._size),datatype:this._datatype});return d},i.prototype.size=function(){return this._size.slice(0)},i.prototype.map=function(d,p){if(!this._values)throw new Error("Cannot invoke map on a Pattern only matrix");var g=this,M=this._size[0],_=this._size[1],A=Ef(d),y=function(T,b,x){return A===1?d(T):A===2?d(T,[b,x]):d(T,[b,x],g)};return m(this,0,M-1,0,_-1,y,p)};function m(d,p,g,M,_,A,y){var D=[],T=[],b=[],x=t,E=0;yn(d._datatype)&&(x=e.find(t,[d._datatype,d._datatype])||t,E=e.convert(0,d._datatype));for(var N=function(J,q,j){J=A(J,q,j),x(J,E)||(D.push(J),T.push(q))},L=M;L<=_;L++){b.push(D.length);var P=d._ptr[L],I=d._ptr[L+1];if(y)for(var z=P;z<I;z++){var O=d._index[z];O>=p&&O<=g&&N(d._values[z],O-p,L-M)}else{for(var R={},G=P;G<I;G++){var X=d._index[G];R[X]=d._values[G]}for(var U=p;U<=g;U++){var H=U in R?R[U]:0;N(H,U-p,L-M)}}}return b.push(D.length),new i({values:D,index:T,ptr:b,size:[g-p+1,_-M+1]})}i.prototype.forEach=function(d,p){if(!this._values)throw new Error("Cannot invoke forEach on a Pattern only matrix");for(var g=this,M=this._size[0],_=this._size[1],A=0;A<_;A++){var y=this._ptr[A],D=this._ptr[A+1];if(p)for(var T=y;T<D;T++){var b=this._index[T];d(this._values[T],[b,A],g)}else{for(var x={},E=y;E<D;E++){var N=this._index[E];x[N]=this._values[E]}for(var L=0;L<M;L++){var P=L in x?x[L]:0;d(P,[L,A],g)}}}},i.prototype[Symbol.iterator]=function*(){if(!this._values)throw new Error("Cannot iterate a Pattern only matrix");for(var d=this._size[1],p=0;p<d;p++)for(var g=this._ptr[p],M=this._ptr[p+1],_=g;_<M;_++){var A=this._index[_];yield{value:this._values[_],index:[A,p]}}},i.prototype.toArray=function(){return v(this._values,this._index,this._ptr,this._size,!0)},i.prototype.valueOf=function(){return v(this._values,this._index,this._ptr,this._size,!1)};function v(d,p,g,M,_){var A=M[0],y=M[1],D=[],T,b;for(T=0;T<A;T++)for(D[T]=[],b=0;b<y;b++)D[T][b]=0;for(b=0;b<y;b++)for(var x=g[b],E=g[b+1],N=x;N<E;N++)T=p[N],D[T][b]=d?_?tt(d[N]):d[N]:1;return D}return i.prototype.format=function(d){for(var p=this._size[0],g=this._size[1],M=this.density(),_="Sparse Matrix ["+ft(p,d)+" x "+ft(g,d)+"] density: "+ft(M,d)+`
`,A=0;A<g;A++)for(var y=this._ptr[A],D=this._ptr[A+1],T=y;T<D;T++){var b=this._index[T];_+=`
    (`+ft(b,d)+", "+ft(A,d)+") ==> "+(this._values?ft(this._values[T],d):"X")}return _},i.prototype.toString=function(){return ft(this.toArray())},i.prototype.toJSON=function(){return{mathjs:"SparseMatrix",values:this._values,index:this._index,ptr:this._ptr,size:this._size,datatype:this._datatype}},i.prototype.diagonal=function(d){if(d){if(Tt(d)&&(d=d.toNumber()),!gt(d)||!ct(d))throw new TypeError("The parameter k must be an integer number")}else d=0;var p=d>0?d:0,g=d<0?-d:0,M=this._size[0],_=this._size[1],A=Math.min(M-g,_-p),y=[],D=[],T=[];T[0]=0;for(var b=p;b<_&&y.length<A;b++)for(var x=this._ptr[b],E=this._ptr[b+1],N=x;N<E;N++){var L=this._index[N];if(L===b-p+g){y.push(this._values[N]),D[y.length-1]=L-g;break}}return T.push(y.length),new i({values:y,index:D,ptr:T,size:[A,1]})},i.fromJSON=function(d){return new i(d)},i.diagonal=function(d,p,g,M,_){if(!st(d))throw new TypeError("Array expected, size parameter");if(d.length!==2)throw new Error("Only two dimensions matrix are supported");if(d=d.map(function(X){if(Tt(X)&&(X=X.toNumber()),!gt(X)||!ct(X)||X<1)throw new Error("Size values must be positive integers");return X}),g){if(Tt(g)&&(g=g.toNumber()),!gt(g)||!ct(g))throw new TypeError("The parameter k must be an integer number")}else g=0;var A=t,y=0;yn(_)&&(A=e.find(t,[_,_])||t,y=e.convert(0,_));var D=g>0?g:0,T=g<0?-g:0,b=d[0],x=d[1],E=Math.min(b-T,x-D),N;if(st(p)){if(p.length!==E)throw new Error("Invalid value array length");N=function(U){return p[U]}}else if(ht(p)){var L=p.size();if(L.length!==1||L[0]!==E)throw new Error("Invalid matrix length");N=function(U){return p.get([U])}}else N=function(){return p};for(var P=[],I=[],z=[],O=0;O<x;O++){z.push(P.length);var R=O-D;if(R>=0&&R<E){var G=N(R);A(G,y)||(I.push(R+T),P.push(G))}}return z.push(P.length),new i({values:P,index:I,ptr:z,size:[b,x]})},i.prototype.swapRows=function(d,p){if(!gt(d)||!ct(d)||!gt(p)||!ct(p))throw new Error("Row index must be positive integers");if(this._size.length!==2)throw new Error("Only two dimensional matrix is supported");return pt(d,this._size[0]),pt(p,this._size[0]),i._swapRows(d,p,this._size[1],this._values,this._index,this._ptr),this},i._forEachRow=function(d,p,g,M,_){for(var A=M[d],y=M[d+1],D=A;D<y;D++)_(g[D],p[D])},i._swapRows=function(d,p,g,M,_,A){for(var y=0;y<g;y++){var D=A[y],T=A[y+1],b=f(d,D,T,_),x=f(p,D,T,_);if(b<T&&x<T&&_[b]===d&&_[x]===p){if(M){var E=M[b];M[b]=M[x],M[x]=E}continue}if(b<T&&_[b]===d&&(x>=T||_[x]!==p)){var N=M?M[b]:void 0;_.splice(x,0,p),M&&M.splice(x,0,N),_.splice(x<=b?b+1:b,1),M&&M.splice(x<=b?b+1:b,1);continue}if(x<T&&_[x]===p&&(b>=T||_[b]!==d)){var L=M?M[x]:void 0;_.splice(b,0,d),M&&M.splice(b,0,L),_.splice(b<=x?x+1:x,1),M&&M.splice(b<=x?x+1:x,1)}}},i},{isClass:!0}),Sx="number",wx=["typed"];function Dx(n){var e=n.match(/(0[box])([0-9a-fA-F]*)\.([0-9a-fA-F]*)/);if(e){var t={"0b":2,"0o":8,"0x":16}[e[1]],r=e[2],i=e[3];return{input:n,radix:t,integerPart:r,fractionalPart:i}}else return null}function bx(n){for(var e=parseInt(n.integerPart,n.radix),t=0,r=0;r<n.fractionalPart.length;r++){var i=parseInt(n.fractionalPart[r],n.radix);t+=i/Math.pow(n.radix,r+1)}var a=e+t;if(isNaN(a))throw new SyntaxError('String "'+n.input+'" is no valid number');return a}var Tx=Me(Sx,wx,n=>{var{typed:e}=n,t=e("number",{"":function(){return 0},number:function(i){return i},string:function(i){if(i==="NaN")return NaN;var a=Dx(i);if(a)return bx(a);var s=0,o=i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);o&&(s=Number(o[2]),i=o[1]);var c=Number(i);if(isNaN(c))throw new SyntaxError('String "'+i+'" is no valid number');if(o){if(c>2**s-1)throw new SyntaxError('String "'.concat(i,'" is out of range'));c>=2**(s-1)&&(c=c-2**s)}return c},BigNumber:function(i){return i.toNumber()},Fraction:function(i){return i.valueOf()},Unit:e.referToSelf(r=>i=>{var a=i.clone();return a.value=r(i.value),a}),null:function(i){return 0},"Unit, string | Unit":function(i,a){return i.toNumber(a)},"Array | Matrix":e.referToSelf(r=>i=>Kt(i,r))});return t.fromJSON=function(r){return parseFloat(r.value)},t}),Cx="bignumber",Fx=["typed","BigNumber"],Rx=Me(Cx,Fx,n=>{var{typed:e,BigNumber:t}=n;return e("bignumber",{"":function(){return new t(0)},number:function(i){return new t(i+"")},string:function(i){var a=i.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);if(a){var s=a[2],o=t(a[1]),c=new t(2).pow(Number(s));if(o.gt(c.sub(1)))throw new SyntaxError('String "'.concat(i,'" is out of range'));var f=new t(2).pow(Number(s)-1);return o.gte(f)?o.sub(c):o}return new t(i)},BigNumber:function(i){return i},Unit:e.referToSelf(r=>i=>{var a=i.clone();return a.value=r(i.value),a}),Fraction:function(i){return new t(i.n).div(i.d).times(i.s)},null:function(i){return new t(0)},"Array | Matrix":e.referToSelf(r=>i=>Kt(i,r))})}),Lx="complex",Px=["typed","Complex"],Nx=Me(Lx,Px,n=>{var{typed:e,Complex:t}=n;return e("complex",{"":function(){return t.ZERO},number:function(i){return new t(i,0)},"number, number":function(i,a){return new t(i,a)},"BigNumber, BigNumber":function(i,a){return new t(i.toNumber(),a.toNumber())},Fraction:function(i){return new t(i.valueOf(),0)},Complex:function(i){return i.clone()},string:function(i){return t(i)},null:function(i){return t(0)},Object:function(i){if("re"in i&&"im"in i)return new t(i.re,i.im);if("r"in i&&"phi"in i||"abs"in i&&"arg"in i)return new t(i);throw new Error("Expected object with properties (re and im) or (r and phi) or (abs and arg)")},"Array | Matrix":e.referToSelf(r=>i=>Kt(i,r))})}),Ix="fraction",Ux=["typed","Fraction"],Bx=Me(Ix,Ux,n=>{var{typed:e,Fraction:t}=n;return e("fraction",{number:function(i){if(!isFinite(i)||isNaN(i))throw new Error(i+" cannot be represented as a fraction");return new t(i)},string:function(i){return new t(i)},"number, number":function(i,a){return new t(i,a)},null:function(i){return new t(0)},BigNumber:function(i){return new t(i.toString())},Fraction:function(i){return i},Unit:e.referToSelf(r=>i=>{var a=i.clone();return a.value=r(i.value),a}),Object:function(i){return new t(i)},"Array | Matrix":e.referToSelf(r=>i=>Kt(i,r))})}),wl="matrix",Ox=["typed","Matrix","DenseMatrix","SparseMatrix"],zx=Me(wl,Ox,n=>{var{typed:e,Matrix:t,DenseMatrix:r,SparseMatrix:i}=n;return e(wl,{"":function(){return a([])},string:function(o){return a([],o)},"string, string":function(o,c){return a([],o,c)},Array:function(o){return a(o)},Matrix:function(o){return a(o,o.storage())},"Array | Matrix, string":a,"Array | Matrix, string, string":a});function a(s,o,c){if(o==="dense"||o==="default"||o===void 0)return new r(s,c);if(o==="sparse")return new i(s,c);throw new TypeError("Unknown matrix type "+JSON.stringify(o)+".")}}),Dl="matrixFromColumns",Gx=["typed","matrix","flatten","size"],Hx=Me(Dl,Gx,n=>{var{typed:e,matrix:t,flatten:r,size:i}=n;return e(Dl,{"...Array":function(c){return a(c)},"...Matrix":function(c){return t(a(c.map(f=>f.toArray())))}});function a(o){if(o.length===0)throw new TypeError("At least one column is needed to construct a matrix.");for(var c=s(o[0]),f=[],l=0;l<c;l++)f[l]=[];for(var u of o){var h=s(u);if(h!==c)throw new TypeError("The vectors had different length: "+(c|0)+" ≠ "+(h|0));for(var m=r(u),v=0;v<c;v++)f[v].push(m[v])}return f}function s(o){var c=i(o);if(c.length===1)return c[0];if(c.length===2){if(c[0]===1)return c[1];if(c[1]===1)return c[0];throw new TypeError("At least one of the arguments is not a vector.")}else throw new TypeError("Only one- or two-dimensional vectors are supported.")}}),bl="unaryMinus",Vx=["typed"],Wx=Me(bl,Vx,n=>{var{typed:e}=n;return e(bl,{number:Sf,"Complex | BigNumber | Fraction":t=>t.neg(),Unit:e.referToSelf(t=>r=>{var i=r.clone();return i.value=e.find(t,i.valueType())(r.value),i}),"Array | Matrix":e.referToSelf(t=>r=>Kt(r,t))})}),Tl="abs",kx=["typed"],Xx=Me(Tl,kx,n=>{var{typed:e}=n;return e(Tl,{number:yf,"Complex | BigNumber | Fraction | Unit":t=>t.abs(),"Array | Matrix":e.referToSelf(t=>r=>Kt(r,t))})}),Cl="addScalar",qx=["typed"],$x=Me(Cl,qx,n=>{var{typed:e}=n;return e(Cl,{"number, number":Mf,"Complex, Complex":function(r,i){return r.add(i)},"BigNumber, BigNumber":function(r,i){return r.plus(i)},"Fraction, Fraction":function(r,i){return r.add(i)},"Unit, Unit":e.referToSelf(t=>(r,i)=>{if(r.value===null||r.value===void 0)throw new Error("Parameter x contains a unit with undefined value");if(i.value===null||i.value===void 0)throw new Error("Parameter y contains a unit with undefined value");if(!r.equalBase(i))throw new Error("Units do not match");var a=r.clone();return a.value=e.find(t,[a.valueType(),i.valueType()])(a.value,i.value),a.fixPrefix=!1,a})})}),Yx="matAlgo11xS0s",Zx=["typed","equalScalar"],Kx=Me(Yx,Zx,n=>{var{typed:e,equalScalar:t}=n;return function(i,a,s,o){var c=i._values,f=i._index,l=i._ptr,u=i._size,h=i._datatype;if(!c)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=u[0],v=u[1],d,p=t,g=0,M=s;typeof h=="string"&&(d=h,p=e.find(t,[d,d]),g=e.convert(0,d),a=e.convert(a,d),M=e.find(s,[d,d]));for(var _=[],A=[],y=[],D=0;D<v;D++){y[D]=A.length;for(var T=l[D],b=l[D+1],x=T;x<b;x++){var E=f[x],N=o?M(a,c[x]):M(c[x],a);p(N,g)||(A.push(E),_.push(N))}}return y[v]=A.length,i.createSparseMatrix({values:_,index:A,ptr:y,size:[m,v],datatype:d})}}),Jx="matAlgo12xSfs",Qx=["typed","DenseMatrix"],di=Me(Jx,Qx,n=>{var{typed:e,DenseMatrix:t}=n;return function(i,a,s,o){var c=i._values,f=i._index,l=i._ptr,u=i._size,h=i._datatype;if(!c)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=u[0],v=u[1],d,p=s;typeof h=="string"&&(d=h,a=e.convert(a,d),p=e.find(s,[d,d]));for(var g=[],M=[],_=[],A=0;A<v;A++){for(var y=A+1,D=l[A],T=l[A+1],b=D;b<T;b++){var x=f[b];M[x]=c[b],_[x]=y}for(var E=0;E<m;E++)A===0&&(g[E]=[]),_[E]===y?g[E][A]=o?p(a,M[E]):p(M[E],a):g[E][A]=o?p(a,0):p(0,a)}return new t({data:g,size:[m,v],datatype:d})}}),jx="matAlgo14xDs",eE=["typed"],Cf=Me(jx,eE,n=>{var{typed:e}=n;return function(i,a,s,o){var c=i._data,f=i._size,l=i._datatype,u,h=s;typeof l=="string"&&(u=l,a=e.convert(a,u),h=e.find(s,[u,u]));var m=f.length>0?t(h,0,f,f[0],c,a,o):[];return i.createDenseMatrix({data:m,size:tt(f),datatype:u})};function t(r,i,a,s,o,c,f){var l=[];if(i===a.length-1)for(var u=0;u<s;u++)l[u]=f?r(c,o[u]):r(o[u],c);else for(var h=0;h<s;h++)l[h]=t(r,i+1,a,a[i+1],o[h],c,f);return l}}),tE="matAlgo01xDSid",nE=["typed"],Ff=Me(tE,nE,n=>{var{typed:e}=n;return function(r,i,a,s){var o=r._data,c=r._size,f=r._datatype,l=i._values,u=i._index,h=i._ptr,m=i._size,v=i._datatype;if(c.length!==m.length)throw new rt(c.length,m.length);if(c[0]!==m[0]||c[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+m+")");if(!l)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var d=c[0],p=c[1],g=typeof f=="string"&&f===v?f:void 0,M=g?e.find(a,[g,g]):a,_,A,y=[];for(_=0;_<d;_++)y[_]=[];var D=[],T=[];for(A=0;A<p;A++){for(var b=A+1,x=h[A],E=h[A+1],N=x;N<E;N++)_=u[N],D[_]=s?M(l[N],o[_][A]):M(o[_][A],l[N]),T[_]=b;for(_=0;_<d;_++)T[_]===b?y[_][A]=D[_]:y[_][A]=o[_][A]}return r.createDenseMatrix({data:y,size:[d,p],datatype:g})}}),rE="matAlgo04xSidSid",iE=["typed","equalScalar"],aE=Me(rE,iE,n=>{var{typed:e,equalScalar:t}=n;return function(i,a,s){var o=i._values,c=i._index,f=i._ptr,l=i._size,u=i._datatype,h=a._values,m=a._index,v=a._ptr,d=a._size,p=a._datatype;if(l.length!==d.length)throw new rt(l.length,d.length);if(l[0]!==d[0]||l[1]!==d[1])throw new RangeError("Dimension mismatch. Matrix A ("+l+") must match Matrix B ("+d+")");var g=l[0],M=l[1],_,A=t,y=0,D=s;typeof u=="string"&&u===p&&(_=u,A=e.find(t,[_,_]),y=e.convert(0,_),D=e.find(s,[_,_]));var T=o&&h?[]:void 0,b=[],x=[],E=o&&h?[]:void 0,N=o&&h?[]:void 0,L=[],P=[],I,z,O,R,G;for(z=0;z<M;z++){x[z]=b.length;var X=z+1;for(R=f[z],G=f[z+1],O=R;O<G;O++)I=c[O],b.push(I),L[I]=X,E&&(E[I]=o[O]);for(R=v[z],G=v[z+1],O=R;O<G;O++)if(I=m[O],L[I]===X){if(E){var U=D(E[I],h[O]);A(U,y)?L[I]=null:E[I]=U}}else b.push(I),P[I]=X,N&&(N[I]=h[O]);if(E&&N)for(O=x[z];O<b.length;)I=b[O],L[I]===X?(T[O]=E[I],O++):P[I]===X?(T[O]=N[I],O++):b.splice(O,1)}return x[M]=b.length,i.createSparseMatrix({values:T,index:b,ptr:x,size:[g,M],datatype:_})}}),sE="matAlgo10xSids",oE=["typed","DenseMatrix"],Rf=Me(sE,oE,n=>{var{typed:e,DenseMatrix:t}=n;return function(i,a,s,o){var c=i._values,f=i._index,l=i._ptr,u=i._size,h=i._datatype;if(!c)throw new Error("Cannot perform operation on Pattern Sparse Matrix and Scalar value");var m=u[0],v=u[1],d,p=s;typeof h=="string"&&(d=h,a=e.convert(a,d),p=e.find(s,[d,d]));for(var g=[],M=[],_=[],A=0;A<v;A++){for(var y=A+1,D=l[A],T=l[A+1],b=D;b<T;b++){var x=f[b];M[x]=c[b],_[x]=y}for(var E=0;E<m;E++)A===0&&(g[E]=[]),_[E]===y?g[E][A]=o?p(a,M[E]):p(M[E],a):g[E][A]=a}return new t({data:g,size:[m,v],datatype:d})}}),uE="matAlgo13xDD",lE=["typed"],cE=Me(uE,lE,n=>{var{typed:e}=n;return function(i,a,s){var o=i._data,c=i._size,f=i._datatype,l=a._data,u=a._size,h=a._datatype,m=[];if(c.length!==u.length)throw new rt(c.length,u.length);for(var v=0;v<c.length;v++){if(c[v]!==u[v])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+u+")");m[v]=c[v]}var d,p=s;typeof f=="string"&&f===h&&(d=f,p=e.find(s,[d,d]));var g=m.length>0?t(p,0,m,m[0],o,l):[];return i.createDenseMatrix({data:g,size:m,datatype:d})};function t(r,i,a,s,o,c){var f=[];if(i===a.length-1)for(var l=0;l<s;l++)f[l]=r(o[l],c[l]);else for(var u=0;u<s;u++)f[u]=t(r,i+1,a,a[i+1],o[u],c[u]);return f}}),fE="broadcast",hE=["concat"],dE=Me(fE,hE,n=>{var{concat:e}=n;return function(a,s){var o=Math.max(a._size.length,s._size.length);if(a._size.length===s._size.length&&a._size.every((p,g)=>p===s._size[g]))return[a,s];for(var c=t(a._size,o,0),f=t(s._size,o,0),l=[],u=0;u<o;u++)l[u]=Math.max(c[u],f[u]);for(var h=0;h<o;h++)i(c,l,h),i(f,l,h);var m=a.clone(),v=s.clone();m._size.length<o?m.reshape(t(m._size,o,1)):v._size.length<o&&v.reshape(t(v._size,o,1));for(var d=0;d<o;d++)m._size[d]<l[d]&&(m=r(m,l[d],d)),v._size[d]<l[d]&&(v=r(v,l[d],d));return[m,v]};function t(a,s,o){return[...Array(s-a.length).fill(o),...a]}function r(a,s,o){return e(...Array(s).fill(a),o)}function i(a,s,o){if(a[o]<s[o]&a[o]>1)throw new Error("shape missmatch: missmatch is found in arg with shape (".concat(a,") not possible to broadcast dimension ").concat(o," with size ").concat(a[o]," to size ").concat(s[o]))}}),pE="matrixAlgorithmSuite",mE=["typed","matrix","concat"],br=Me(pE,mE,n=>{var{typed:e,matrix:t,concat:r}=n,i=cE({typed:e}),a=Cf({typed:e}),s=dE({concat:r});return function(c){var f=c.elop,l=c.SD||c.DS,u;f?(u={"DenseMatrix, DenseMatrix":(d,p)=>i(...s(d,p),f),"Array, Array":(d,p)=>i(...s(t(d),t(p)),f).valueOf(),"Array, DenseMatrix":(d,p)=>i(...s(t(d),p),f),"DenseMatrix, Array":(d,p)=>i(...s(d,t(p)),f)},c.SS&&(u["SparseMatrix, SparseMatrix"]=(d,p)=>c.SS(...s(d,p),f,!1)),c.DS&&(u["DenseMatrix, SparseMatrix"]=(d,p)=>c.DS(...s(d,p),f,!1),u["Array, SparseMatrix"]=(d,p)=>c.DS(...s(t(d),p),f,!1)),l&&(u["SparseMatrix, DenseMatrix"]=(d,p)=>l(...s(p,d),f,!0),u["SparseMatrix, Array"]=(d,p)=>l(...s(t(p),d),f,!0))):(u={"DenseMatrix, DenseMatrix":e.referToSelf(d=>(p,g)=>i(...s(p,g),d)),"Array, Array":e.referToSelf(d=>(p,g)=>i(...s(t(p),t(g)),d).valueOf()),"Array, DenseMatrix":e.referToSelf(d=>(p,g)=>i(...s(t(p),g),d)),"DenseMatrix, Array":e.referToSelf(d=>(p,g)=>i(...s(p,t(g)),d))},c.SS&&(u["SparseMatrix, SparseMatrix"]=e.referToSelf(d=>(p,g)=>c.SS(...s(p,g),d,!1))),c.DS&&(u["DenseMatrix, SparseMatrix"]=e.referToSelf(d=>(p,g)=>c.DS(...s(p,g),d,!1)),u["Array, SparseMatrix"]=e.referToSelf(d=>(p,g)=>c.DS(...s(t(p),g),d,!1))),l&&(u["SparseMatrix, DenseMatrix"]=e.referToSelf(d=>(p,g)=>l(...s(g,p),d,!0)),u["SparseMatrix, Array"]=e.referToSelf(d=>(p,g)=>l(...s(t(g),p),d,!0))));var h=c.scalar||"any",m=c.Ds||c.Ss;m&&(f?(u["DenseMatrix,"+h]=(d,p)=>a(d,p,f,!1),u[h+", DenseMatrix"]=(d,p)=>a(p,d,f,!0),u["Array,"+h]=(d,p)=>a(t(d),p,f,!1).valueOf(),u[h+", Array"]=(d,p)=>a(t(p),d,f,!0).valueOf()):(u["DenseMatrix,"+h]=e.referToSelf(d=>(p,g)=>a(p,g,d,!1)),u[h+", DenseMatrix"]=e.referToSelf(d=>(p,g)=>a(g,p,d,!0)),u["Array,"+h]=e.referToSelf(d=>(p,g)=>a(t(p),g,d,!1).valueOf()),u[h+", Array"]=e.referToSelf(d=>(p,g)=>a(t(g),p,d,!0).valueOf())));var v=c.sS!==void 0?c.sS:c.Ss;return f?(c.Ss&&(u["SparseMatrix,"+h]=(d,p)=>c.Ss(d,p,f,!1)),v&&(u[h+", SparseMatrix"]=(d,p)=>v(p,d,f,!0))):(c.Ss&&(u["SparseMatrix,"+h]=e.referToSelf(d=>(p,g)=>c.Ss(p,g,d,!1))),v&&(u[h+", SparseMatrix"]=e.referToSelf(d=>(p,g)=>v(g,p,d,!0)))),f&&f.signatures&&Sv(u,f.signatures),u}}),gE="matAlgo03xDSf",vE=["typed"],pi=Me(gE,vE,n=>{var{typed:e}=n;return function(r,i,a,s){var o=r._data,c=r._size,f=r._datatype,l=i._values,u=i._index,h=i._ptr,m=i._size,v=i._datatype;if(c.length!==m.length)throw new rt(c.length,m.length);if(c[0]!==m[0]||c[1]!==m[1])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+m+")");if(!l)throw new Error("Cannot perform operation on Dense Matrix and Pattern Sparse Matrix");var d=c[0],p=c[1],g,M=0,_=a;typeof f=="string"&&f===v&&(g=f,M=e.convert(0,g),_=e.find(a,[g,g]));for(var A=[],y=0;y<d;y++)A[y]=[];for(var D=[],T=[],b=0;b<p;b++){for(var x=b+1,E=h[b],N=h[b+1],L=E;L<N;L++){var P=u[L];D[P]=s?_(l[L],o[P][b]):_(o[P][b],l[L]),T[P]=x}for(var I=0;I<d;I++)T[I]===x?A[I][b]=D[I]:A[I][b]=s?_(M,o[I][b]):_(o[I][b],M)}return r.createDenseMatrix({data:A,size:[d,p],datatype:g})}}),_E="matAlgo05xSfSf",xE=["typed","equalScalar"],EE=Me(_E,xE,n=>{var{typed:e,equalScalar:t}=n;return function(i,a,s){var o=i._values,c=i._index,f=i._ptr,l=i._size,u=i._datatype,h=a._values,m=a._index,v=a._ptr,d=a._size,p=a._datatype;if(l.length!==d.length)throw new rt(l.length,d.length);if(l[0]!==d[0]||l[1]!==d[1])throw new RangeError("Dimension mismatch. Matrix A ("+l+") must match Matrix B ("+d+")");var g=l[0],M=l[1],_,A=t,y=0,D=s;typeof u=="string"&&u===p&&(_=u,A=e.find(t,[_,_]),y=e.convert(0,_),D=e.find(s,[_,_]));var T=o&&h?[]:void 0,b=[],x=[],E=T?[]:void 0,N=T?[]:void 0,L=[],P=[],I,z,O,R;for(z=0;z<M;z++){x[z]=b.length;var G=z+1;for(O=f[z],R=f[z+1];O<R;O++)I=c[O],b.push(I),L[I]=G,E&&(E[I]=o[O]);for(O=v[z],R=v[z+1];O<R;O++)I=m[O],L[I]!==G&&b.push(I),P[I]=G,N&&(N[I]=h[O]);if(T)for(O=x[z];O<b.length;){I=b[O];var X=L[I],U=P[I];if(X===G||U===G){var H=X===G?E[I]:y,W=U===G?N[I]:y,J=D(H,W);A(J,y)?b.splice(O,1):(T.push(J),O++)}}}return x[M]=b.length,i.createSparseMatrix({values:T,index:b,ptr:x,size:[g,M],datatype:_})}}),yE="multiplyScalar",ME=["typed"],AE=Me(yE,ME,n=>{var{typed:e}=n;return e("multiplyScalar",{"number, number":Af,"Complex, Complex":function(r,i){return r.mul(i)},"BigNumber, BigNumber":function(r,i){return r.times(i)},"Fraction, Fraction":function(r,i){return r.mul(i)},"number | Fraction | BigNumber | Complex, Unit":(t,r)=>r.multiply(t),"Unit, number | Fraction | BigNumber | Complex | Unit":(t,r)=>t.multiply(r)})}),Fl="multiply",SE=["typed","matrix","addScalar","multiplyScalar","equalScalar","dot"],wE=Me(Fl,SE,n=>{var{typed:e,matrix:t,addScalar:r,multiplyScalar:i,equalScalar:a,dot:s}=n,o=Kx({typed:e,equalScalar:a}),c=Cf({typed:e});function f(y,D){switch(y.length){case 1:switch(D.length){case 1:if(y[0]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Vectors must have the same length");break;case 2:if(y[0]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Vector length ("+y[0]+") must match Matrix rows ("+D[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+D.length+" dimensions)")}break;case 2:switch(D.length){case 1:if(y[1]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Matrix columns ("+y[1]+") must match Vector length ("+D[0]+")");break;case 2:if(y[1]!==D[0])throw new RangeError("Dimension mismatch in multiplication. Matrix A columns ("+y[1]+") must match Matrix B rows ("+D[0]+")");break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix B has "+D.length+" dimensions)")}break;default:throw new Error("Can only multiply a 1 or 2 dimensional matrix (Matrix A has "+y.length+" dimensions)")}}function l(y,D,T){if(T===0)throw new Error("Cannot multiply two empty vectors");return s(y,D)}function u(y,D){if(D.storage()!=="dense")throw new Error("Support for SparseMatrix not implemented");return h(y,D)}function h(y,D){var T=y._data,b=y._size,x=y._datatype,E=D._data,N=D._size,L=D._datatype,P=b[0],I=N[1],z,O=r,R=i;x&&L&&x===L&&typeof x=="string"&&(z=x,O=e.find(r,[z,z]),R=e.find(i,[z,z]));for(var G=[],X=0;X<I;X++){for(var U=R(T[0],E[0][X]),H=1;H<P;H++)U=O(U,R(T[H],E[H][X]));G[X]=U}return y.createDenseMatrix({data:G,size:[I],datatype:z})}var m=e("_multiplyMatrixVector",{"DenseMatrix, any":d,"SparseMatrix, any":M}),v=e("_multiplyMatrixMatrix",{"DenseMatrix, DenseMatrix":p,"DenseMatrix, SparseMatrix":g,"SparseMatrix, DenseMatrix":_,"SparseMatrix, SparseMatrix":A});function d(y,D){var T=y._data,b=y._size,x=y._datatype,E=D._data,N=D._datatype,L=b[0],P=b[1],I,z=r,O=i;x&&N&&x===N&&typeof x=="string"&&(I=x,z=e.find(r,[I,I]),O=e.find(i,[I,I]));for(var R=[],G=0;G<L;G++){for(var X=T[G],U=O(X[0],E[0]),H=1;H<P;H++)U=z(U,O(X[H],E[H]));R[G]=U}return y.createDenseMatrix({data:R,size:[L],datatype:I})}function p(y,D){var T=y._data,b=y._size,x=y._datatype,E=D._data,N=D._size,L=D._datatype,P=b[0],I=b[1],z=N[1],O,R=r,G=i;x&&L&&x===L&&typeof x=="string"&&(O=x,R=e.find(r,[O,O]),G=e.find(i,[O,O]));for(var X=[],U=0;U<P;U++){var H=T[U];X[U]=[];for(var W=0;W<z;W++){for(var J=G(H[0],E[0][W]),q=1;q<I;q++)J=R(J,G(H[q],E[q][W]));X[U][W]=J}}return y.createDenseMatrix({data:X,size:[P,z],datatype:O})}function g(y,D){var T=y._data,b=y._size,x=y._datatype,E=D._values,N=D._index,L=D._ptr,P=D._size,I=D._datatype;if(!E)throw new Error("Cannot multiply Dense Matrix times Pattern only Matrix");var z=b[0],O=P[1],R,G=r,X=i,U=a,H=0;x&&I&&x===I&&typeof x=="string"&&(R=x,G=e.find(r,[R,R]),X=e.find(i,[R,R]),U=e.find(a,[R,R]),H=e.convert(0,R));for(var W=[],J=[],q=[],j=D.createSparseMatrix({values:W,index:J,ptr:q,size:[z,O],datatype:R}),ne=0;ne<O;ne++){q[ne]=J.length;var oe=L[ne],se=L[ne+1];if(se>oe)for(var pe=0,fe=0;fe<z;fe++){for(var Ae=fe+1,Z=void 0,Se=oe;Se<se;Se++){var de=N[Se];pe!==Ae?(Z=X(T[fe][de],E[Se]),pe=Ae):Z=G(Z,X(T[fe][de],E[Se]))}pe===Ae&&!U(Z,H)&&(J.push(fe),W.push(Z))}}return q[O]=J.length,j}function M(y,D){var T=y._values,b=y._index,x=y._ptr,E=y._datatype;if(!T)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var N=D._data,L=D._datatype,P=y._size[0],I=D._size[0],z=[],O=[],R=[],G,X=r,U=i,H=a,W=0;E&&L&&E===L&&typeof E=="string"&&(G=E,X=e.find(r,[G,G]),U=e.find(i,[G,G]),H=e.find(a,[G,G]),W=e.convert(0,G));var J=[],q=[];R[0]=0;for(var j=0;j<I;j++){var ne=N[j];if(!H(ne,W))for(var oe=x[j],se=x[j+1],pe=oe;pe<se;pe++){var fe=b[pe];q[fe]?J[fe]=X(J[fe],U(ne,T[pe])):(q[fe]=!0,O.push(fe),J[fe]=U(ne,T[pe]))}}for(var Ae=O.length,Z=0;Z<Ae;Z++){var Se=O[Z];z[Z]=J[Se]}return R[1]=O.length,y.createSparseMatrix({values:z,index:O,ptr:R,size:[P,1],datatype:G})}function _(y,D){var T=y._values,b=y._index,x=y._ptr,E=y._datatype;if(!T)throw new Error("Cannot multiply Pattern only Matrix times Dense Matrix");var N=D._data,L=D._datatype,P=y._size[0],I=D._size[0],z=D._size[1],O,R=r,G=i,X=a,U=0;E&&L&&E===L&&typeof E=="string"&&(O=E,R=e.find(r,[O,O]),G=e.find(i,[O,O]),X=e.find(a,[O,O]),U=e.convert(0,O));for(var H=[],W=[],J=[],q=y.createSparseMatrix({values:H,index:W,ptr:J,size:[P,z],datatype:O}),j=[],ne=[],oe=0;oe<z;oe++){J[oe]=W.length;for(var se=oe+1,pe=0;pe<I;pe++){var fe=N[pe][oe];if(!X(fe,U))for(var Ae=x[pe],Z=x[pe+1],Se=Ae;Se<Z;Se++){var de=b[Se];ne[de]!==se?(ne[de]=se,W.push(de),j[de]=G(fe,T[Se])):j[de]=R(j[de],G(fe,T[Se]))}}for(var Ee=J[oe],xe=W.length,Le=Ee;Le<xe;Le++){var Te=W[Le];H[Le]=j[Te]}}return J[z]=W.length,q}function A(y,D){var T=y._values,b=y._index,x=y._ptr,E=y._datatype,N=D._values,L=D._index,P=D._ptr,I=D._datatype,z=y._size[0],O=D._size[1],R=T&&N,G,X=r,U=i;E&&I&&E===I&&typeof E=="string"&&(G=E,X=e.find(r,[G,G]),U=e.find(i,[G,G]));for(var H=R?[]:void 0,W=[],J=[],q=y.createSparseMatrix({values:H,index:W,ptr:J,size:[z,O],datatype:G}),j=R?[]:void 0,ne=[],oe,se,pe,fe,Ae,Z,Se,de,Ee=0;Ee<O;Ee++){J[Ee]=W.length;var xe=Ee+1;for(Ae=P[Ee],Z=P[Ee+1],fe=Ae;fe<Z;fe++)if(de=L[fe],R)for(se=x[de],pe=x[de+1],oe=se;oe<pe;oe++)Se=b[oe],ne[Se]!==xe?(ne[Se]=xe,W.push(Se),j[Se]=U(N[fe],T[oe])):j[Se]=X(j[Se],U(N[fe],T[oe]));else for(se=x[de],pe=x[de+1],oe=se;oe<pe;oe++)Se=b[oe],ne[Se]!==xe&&(ne[Se]=xe,W.push(Se));if(R)for(var Le=J[Ee],Te=W.length,be=Le;be<Te;be++){var Re=W[be];H[be]=j[Re]}}return J[O]=W.length,q}return e(Fl,i,{"Array, Array":e.referTo("Matrix, Matrix",y=>(D,T)=>{f(xt(D),xt(T));var b=y(t(D),t(T));return ht(b)?b.valueOf():b}),"Matrix, Matrix":function(D,T){var b=D.size(),x=T.size();return f(b,x),b.length===1?x.length===1?l(D,T,b[0]):u(D,T):x.length===1?m(D,T):v(D,T)},"Matrix, Array":e.referTo("Matrix,Matrix",y=>(D,T)=>y(D,t(T))),"Array, Matrix":e.referToSelf(y=>(D,T)=>y(t(D,T.storage()),T)),"SparseMatrix, any":function(D,T){return o(D,T,i,!1)},"DenseMatrix, any":function(D,T){return c(D,T,i,!1)},"any, SparseMatrix":function(D,T){return o(T,D,i,!0)},"any, DenseMatrix":function(D,T){return c(T,D,i,!0)},"Array, any":function(D,T){return c(t(D),T,i,!1).valueOf()},"any, Array":function(D,T){return c(t(T),D,i,!0).valueOf()},"any, any":i,"any, any, ...any":e.referToSelf(y=>(D,T,b)=>{for(var x=y(D,T),E=0;E<b.length;E++)x=y(x,b[E]);return x})})}),Rl="sign",DE=["typed","BigNumber","Fraction","complex"],bE=Me(Rl,DE,n=>{var{typed:e,BigNumber:t,complex:r,Fraction:i}=n;return e(Rl,{number:so,Complex:function(s){return s.im===0?r(so(s.re)):s.sign()},BigNumber:function(s){return new t(s.cmp(0))},Fraction:function(s){return new i(s.s,1)},"Array | Matrix":e.referToSelf(a=>s=>Kt(s,a)),Unit:e.referToSelf(a=>s=>{if(!s._isDerived()&&s.units[0].unit.offset!==0)throw new TypeError("sign is ambiguous for units with offset");return e.find(a,s.valueType())(s.value)})})}),TE="sqrt",CE=["config","typed","Complex"],FE=Me(TE,CE,n=>{var{config:e,typed:t,Complex:r}=n;return t("sqrt",{number:i,Complex:function(s){return s.sqrt()},BigNumber:function(s){return!s.isNegative()||e.predictable?s.sqrt():i(s.toNumber())},Unit:function(s){return s.pow(.5)}});function i(a){return isNaN(a)?NaN:a>=0||e.predictable?Math.sqrt(a):new r(a,0).sqrt()}}),Ll="subtract",RE=["typed","matrix","equalScalar","addScalar","unaryMinus","DenseMatrix","concat"],LE=Me(Ll,RE,n=>{var{typed:e,matrix:t,equalScalar:r,addScalar:i,unaryMinus:a,DenseMatrix:s,concat:o}=n,c=Ff({typed:e}),f=pi({typed:e}),l=EE({typed:e,equalScalar:r}),u=Rf({typed:e,DenseMatrix:s}),h=di({typed:e,DenseMatrix:s}),m=br({typed:e,matrix:t,concat:o});return e(Ll,{"number, number":(v,d)=>v-d,"Complex, Complex":(v,d)=>v.sub(d),"BigNumber, BigNumber":(v,d)=>v.minus(d),"Fraction, Fraction":(v,d)=>v.sub(d),"Unit, Unit":e.referToSelf(v=>(d,p)=>{if(d.value===null)throw new Error("Parameter x contains a unit with undefined value");if(p.value===null)throw new Error("Parameter y contains a unit with undefined value");if(!d.equalBase(p))throw new Error("Units do not match");var g=d.clone();return g.value=e.find(v,[g.valueType(),p.valueType()])(g.value,p.value),g.fixPrefix=!1,g})},m({SS:l,DS:c,SD:f,Ss:h,sS:u}))}),PE="matAlgo07xSSf",NE=["typed","DenseMatrix"],Ui=Me(PE,NE,n=>{var{typed:e,DenseMatrix:t}=n;return function(a,s,o){var c=a._size,f=a._datatype,l=s._size,u=s._datatype;if(c.length!==l.length)throw new rt(c.length,l.length);if(c[0]!==l[0]||c[1]!==l[1])throw new RangeError("Dimension mismatch. Matrix A ("+c+") must match Matrix B ("+l+")");var h=c[0],m=c[1],v,d=0,p=o;typeof f=="string"&&f===u&&(v=f,d=e.convert(0,v),p=e.find(o,[v,v]));var g,M,_=[];for(g=0;g<h;g++)_[g]=[];var A=[],y=[],D=[],T=[];for(M=0;M<m;M++){var b=M+1;for(r(a,M,D,A,b),r(s,M,T,y,b),g=0;g<h;g++){var x=D[g]===b?A[g]:d,E=T[g]===b?y[g]:d;_[g][M]=p(x,E)}}return new t({data:_,size:[h,m],datatype:v})};function r(i,a,s,o,c){for(var f=i._values,l=i._index,u=i._ptr,h=u[a],m=u[a+1];h<m;h++){var v=l[h];s[v]=c,o[v]=f[h]}}}),Pl="conj",IE=["typed"],UE=Me(Pl,IE,n=>{var{typed:e}=n;return e(Pl,{"number | BigNumber | Fraction":t=>t,Complex:t=>t.conjugate(),"Array | Matrix":e.referToSelf(t=>r=>Kt(r,t))})}),Nl="im",BE=["typed"],OE=Me(Nl,BE,n=>{var{typed:e}=n;return e(Nl,{number:()=>0,"BigNumber | Fraction":t=>t.mul(0),Complex:t=>t.im,"Array | Matrix":e.referToSelf(t=>r=>Kt(r,t))})}),Il="re",zE=["typed"],GE=Me(Il,zE,n=>{var{typed:e}=n;return e(Il,{"number | BigNumber | Fraction":t=>t,Complex:t=>t.re,"Array | Matrix":e.referToSelf(t=>r=>Kt(r,t))})}),Ul="concat",HE=["typed","matrix","isInteger"],VE=Me(Ul,HE,n=>{var{typed:e,matrix:t,isInteger:r}=n;return e(Ul,{"...Array | Matrix | number | BigNumber":function(a){var s,o=a.length,c=-1,f,l=!1,u=[];for(s=0;s<o;s++){var h=a[s];if(ht(h)&&(l=!0),gt(h)||Tt(h)){if(s!==o-1)throw new Error("Dimension must be specified as last argument");if(f=c,c=h.valueOf(),!r(c))throw new TypeError("Integer number expected for dimension");if(c<0||s>0&&c>f)throw new Dr(c,f+1)}else{var m=tt(h).valueOf(),v=xt(m);if(u[s]=m,f=c,c=v.length-1,s>0&&c!==f)throw new rt(f+1,c+1)}}if(u.length===0)throw new SyntaxError("At least one matrix expected");for(var d=u.shift();u.length;)d=Lf(d,u.shift(),c,0);return l?t(d):d},"...string":function(a){return a.join("")}})});function Lf(n,e,t,r){if(r<t){if(n.length!==e.length)throw new rt(n.length,e.length);for(var i=[],a=0;a<n.length;a++)i[a]=Lf(n[a],e[a],t,r+1);return i}else return n.concat(e)}var Bl="column",WE=["typed","Index","matrix","range"],kE=Me(Bl,WE,n=>{var{typed:e,Index:t,matrix:r,range:i}=n;return e(Bl,{"Matrix, number":a,"Array, number":function(o,c){return a(r(tt(o)),c).valueOf()}});function a(s,o){if(s.size().length!==2)throw new Error("Only two dimensional matrix is supported");pt(o,s.size()[1]);var c=i(0,s.size()[0]),f=new t(c,o),l=s.subset(f);return ht(l)?l:r([[l]])}}),Ol="cross",XE=["typed","matrix","subtract","multiply"],qE=Me(Ol,XE,n=>{var{typed:e,matrix:t,subtract:r,multiply:i}=n;return e(Ol,{"Matrix, Matrix":function(o,c){return t(a(o.toArray(),c.toArray()))},"Matrix, Array":function(o,c){return t(a(o.toArray(),c))},"Array, Matrix":function(o,c){return t(a(o,c.toArray()))},"Array, Array":a});function a(s,o){var c=Math.max(xt(s).length,xt(o).length);s=_l(s),o=_l(o);var f=xt(s),l=xt(o);if(f.length!==1||l.length!==1||f[0]!==3||l[0]!==3)throw new RangeError("Vectors with length 3 expected (Size A = ["+f.join(", ")+"], B = ["+l.join(", ")+"])");var u=[r(i(s[1],o[2]),i(s[2],o[1])),r(i(s[2],o[0]),i(s[0],o[2])),r(i(s[0],o[1]),i(s[1],o[0]))];return c>1?[u]:u}}),zl="diag",$E=["typed","matrix","DenseMatrix","SparseMatrix"],YE=Me(zl,$E,n=>{var{typed:e,matrix:t,DenseMatrix:r,SparseMatrix:i}=n;return e(zl,{Array:function(f){return a(f,0,xt(f),null)},"Array, number":function(f,l){return a(f,l,xt(f),null)},"Array, BigNumber":function(f,l){return a(f,l.toNumber(),xt(f),null)},"Array, string":function(f,l){return a(f,0,xt(f),l)},"Array, number, string":function(f,l,u){return a(f,l,xt(f),u)},"Array, BigNumber, string":function(f,l,u){return a(f,l.toNumber(),xt(f),u)},Matrix:function(f){return a(f,0,f.size(),f.storage())},"Matrix, number":function(f,l){return a(f,l,f.size(),f.storage())},"Matrix, BigNumber":function(f,l){return a(f,l.toNumber(),f.size(),f.storage())},"Matrix, string":function(f,l){return a(f,0,f.size(),l)},"Matrix, number, string":function(f,l,u){return a(f,l,f.size(),u)},"Matrix, BigNumber, string":function(f,l,u){return a(f,l.toNumber(),f.size(),u)}});function a(c,f,l,u){if(!ct(f))throw new TypeError("Second parameter in function diag must be an integer");var h=f>0?f:0,m=f<0?-f:0;switch(l.length){case 1:return s(c,f,u,l[0],m,h);case 2:return o(c,f,u,l,m,h)}throw new RangeError("Matrix for function diag must be 2 dimensional")}function s(c,f,l,u,h,m){var v=[u+h,u+m];if(l&&l!=="sparse"&&l!=="dense")throw new TypeError("Unknown matrix type ".concat(l,'"'));var d=l==="sparse"?i.diagonal(v,c,f):r.diagonal(v,c,f);return l!==null?d:d.valueOf()}function o(c,f,l,u,h,m){if(ht(c)){var v=c.diagonal(f);return l!==null?l!==v.storage()?t(v,l):v:v.valueOf()}for(var d=Math.min(u[0]-h,u[1]-m),p=[],g=0;g<d;g++)p[g]=c[g+h][g+m];return l!==null?t(p):p}}),Gl="flatten",ZE=["typed","matrix"],KE=Me(Gl,ZE,n=>{var{typed:e,matrix:t}=n;return e(Gl,{Array:function(i){return eo(i)},Matrix:function(i){var a=eo(i.toArray());return t(a)}})}),Hl="identity",JE=["typed","config","matrix","BigNumber","DenseMatrix","SparseMatrix"],QE=Me(Hl,JE,n=>{var{typed:e,config:t,matrix:r,BigNumber:i,DenseMatrix:a,SparseMatrix:s}=n;return e(Hl,{"":function(){return t.matrix==="Matrix"?r([]):[]},string:function(l){return r(l)},"number | BigNumber":function(l){return c(l,l,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, string":function(l,u){return c(l,l,u)},"number | BigNumber, number | BigNumber":function(l,u){return c(l,u,t.matrix==="Matrix"?"dense":void 0)},"number | BigNumber, number | BigNumber, string":function(l,u,h){return c(l,u,h)},Array:function(l){return o(l)},"Array, string":function(l,u){return o(l,u)},Matrix:function(l){return o(l.valueOf(),l.storage())},"Matrix, string":function(l,u){return o(l.valueOf(),u)}});function o(f,l){switch(f.length){case 0:return l?r(l):[];case 1:return c(f[0],f[0],l);case 2:return c(f[0],f[1],l);default:throw new Error("Vector containing two values expected")}}function c(f,l,u){var h=Tt(f)||Tt(l)?i:null;if(Tt(f)&&(f=f.toNumber()),Tt(l)&&(l=l.toNumber()),!ct(f)||f<1)throw new Error("Parameters in function identity must be positive integers");if(!ct(l)||l<1)throw new Error("Parameters in function identity must be positive integers");var m=h?new i(1):1,v=h?new h(0):0,d=[f,l];if(u){if(u==="sparse")return s.diagonal(d,m,0,v);if(u==="dense")return a.diagonal(d,m,0,v);throw new TypeError('Unknown matrix type "'.concat(u,'"'))}for(var p=Aa([],d,v),g=f<l?f:l,M=0;M<g;M++)p[M][M]=m;return p}});function Pf(){throw new Error('No "bignumber" implementation available')}function jE(){throw new Error('No "fraction" implementation available')}function Nf(){throw new Error('No "matrix" implementation available')}var Vl="range",ey=["typed","config","?matrix","?bignumber","smaller","smallerEq","larger","largerEq","add","isPositive"],ty=Me(Vl,ey,n=>{var{typed:e,config:t,matrix:r,bignumber:i,smaller:a,smallerEq:s,larger:o,largerEq:c,add:f,isPositive:l}=n;return e(Vl,{string:h,"string, boolean":h,"number, number":function(p,g){return u(m(p,g,1,!1))},"number, number, number":function(p,g,M){return u(m(p,g,M,!1))},"number, number, boolean":function(p,g,M){return u(m(p,g,1,M))},"number, number, number, boolean":function(p,g,M,_){return u(m(p,g,M,_))},"BigNumber, BigNumber":function(p,g){var M=p.constructor;return u(m(p,g,new M(1),!1))},"BigNumber, BigNumber, BigNumber":function(p,g,M){return u(m(p,g,M,!1))},"BigNumber, BigNumber, boolean":function(p,g,M){var _=p.constructor;return u(m(p,g,new _(1),M))},"BigNumber, BigNumber, BigNumber, boolean":function(p,g,M,_){return u(m(p,g,M,_))},"Unit, Unit, Unit":function(p,g,M){return u(m(p,g,M,!1))},"Unit, Unit, Unit, boolean":function(p,g,M,_){return u(m(p,g,M,_))}});function u(d){return t.matrix==="Matrix"?r?r(d):Nf():d}function h(d,p){var g=v(d);if(!g)throw new SyntaxError('String "'+d+'" is no valid range');return t.number==="BigNumber"?(i===void 0&&Pf(),u(m(i(g.start),i(g.end),i(g.step)))):u(m(g.start,g.end,g.step,p))}function m(d,p,g,M){for(var _=[],A=l(g)?M?s:a:M?c:o,y=d;A(y,p);)_.push(y),y=f(y,g);return _}function v(d){var p=d.split(":"),g=p.map(function(_){return Number(_)}),M=g.some(function(_){return isNaN(_)});if(M)return null;switch(g.length){case 2:return{start:g[0],end:g[1],step:1};case 3:return{start:g[0],end:g[2],step:g[1]};default:return null}}}),Wl="size",ny=["typed","config","?matrix"],ry=Me(Wl,ny,n=>{var{typed:e,config:t,matrix:r}=n;return e(Wl,{Matrix:function(a){return a.create(a.size())},Array:xt,string:function(a){return t.matrix==="Array"?[a.length]:r([a.length])},"number | Complex | BigNumber | Unit | boolean | null":function(a){return t.matrix==="Array"?[]:r?r([]):Nf()}})}),kl="transpose",iy=["typed","matrix"],ay=Me(kl,iy,n=>{var{typed:e,matrix:t}=n;return e(kl,{Array:s=>r(t(s)).valueOf(),Matrix:r,any:tt});function r(s){var o=s.size(),c;switch(o.length){case 1:c=s.clone();break;case 2:{var f=o[0],l=o[1];if(l===0)throw new RangeError("Cannot transpose a 2D matrix with no columns (size: "+ft(o)+")");switch(s.storage()){case"dense":c=i(s,f,l);break;case"sparse":c=a(s,f,l);break}}break;default:throw new RangeError("Matrix must be a vector or two dimensional (size: "+ft(o)+")")}return c}function i(s,o,c){for(var f=s._data,l=[],u,h=0;h<c;h++){u=l[h]=[];for(var m=0;m<o;m++)u[m]=tt(f[m][h])}return s.createDenseMatrix({data:l,size:[c,o],datatype:s._datatype})}function a(s,o,c){for(var f=s._values,l=s._index,u=s._ptr,h=f?[]:void 0,m=[],v=[],d=[],p=0;p<o;p++)d[p]=0;var g,M,_;for(g=0,M=l.length;g<M;g++)d[l[g]]++;for(var A=0,y=0;y<o;y++)v.push(A),A+=d[y],d[y]=v[y];for(v.push(A),_=0;_<c;_++)for(var D=u[_],T=u[_+1],b=D;b<T;b++){var x=d[l[b]]++;m[x]=_,f&&(h[x]=tt(f[b]))}return s.createSparseMatrix({values:h,index:m,ptr:v,size:[c,o],datatype:s._datatype})}}),Xl="ctranspose",sy=["typed","transpose","conj"],oy=Me(Xl,sy,n=>{var{typed:e,transpose:t,conj:r}=n;return e(Xl,{any:function(a){return r(t(a))}})}),ql="zeros",uy=["typed","config","matrix","BigNumber"],ly=Me(ql,uy,n=>{var{typed:e,config:t,matrix:r,BigNumber:i}=n;return e(ql,{"":function(){return t.matrix==="Array"?a([]):a([],"default")},"...number | BigNumber | string":function(f){var l=f[f.length-1];if(typeof l=="string"){var u=f.pop();return a(f,u)}else return t.matrix==="Array"?a(f):a(f,"default")},Array:a,Matrix:function(f){var l=f.storage();return a(f.valueOf(),l)},"Array | Matrix, string":function(f,l){return a(f.valueOf(),l)}});function a(c,f){var l=s(c),u=l?new i(0):0;if(o(c),f){var h=r(f);return c.length>0?h.resize(c,u):h}else{var m=[];return c.length>0?Aa(m,c,u):m}}function s(c){var f=!1;return c.forEach(function(l,u,h){Tt(l)&&(f=!0,h[u]=l.toNumber())}),f}function o(c){c.forEach(function(f){if(typeof f!="number"||!ct(f)||f<0)throw new Error("Parameters in function zeros must be positive integers")})}}),cy="numeric",fy=["number","?bignumber","?fraction"],hy=Me(cy,fy,n=>{var{number:e,bignumber:t,fraction:r}=n,i={string:!0,number:!0,BigNumber:!0,Fraction:!0},a={number:s=>e(s),BigNumber:t?s=>t(s):Pf,Fraction:r?s=>r(s):jE};return function(o){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"number",f=arguments.length>2?arguments[2]:void 0;if(f!==void 0)throw new SyntaxError("numeric() takes one or two arguments");var l=er(o);if(!(l in i))throw new TypeError("Cannot convert "+o+' of type "'+l+'"; valid input types are '+Object.keys(i).join(", "));if(!(c in a))throw new TypeError("Cannot convert "+o+' to type "'+c+'"; valid output types are '+Object.keys(a).join(", "));return c===l?o:a[c](o)}}),$l="divideScalar",dy=["typed","numeric"],py=Me($l,dy,n=>{var{typed:e,numeric:t}=n;return e($l,{"number, number":function(i,a){return i/a},"Complex, Complex":function(i,a){return i.div(a)},"BigNumber, BigNumber":function(i,a){return i.div(a)},"Fraction, Fraction":function(i,a){return i.div(a)},"Unit, number | Complex | Fraction | BigNumber | Unit":(r,i)=>r.divide(i),"number | Fraction | Complex | BigNumber, Unit":(r,i)=>i.divideInto(r)})}),Yl="pow",my=["typed","config","identity","multiply","matrix","inv","fraction","number","Complex"],gy=Me(Yl,my,n=>{var{typed:e,config:t,identity:r,multiply:i,matrix:a,inv:s,number:o,fraction:c,Complex:f}=n;return e(Yl,{"number, number":l,"Complex, Complex":function(v,d){return v.pow(d)},"BigNumber, BigNumber":function(v,d){return d.isInteger()||v>=0||t.predictable?v.pow(d):new f(v.toNumber(),0).pow(d.toNumber(),0)},"Fraction, Fraction":function(v,d){var p=v.pow(d);if(p!=null)return p;if(t.predictable)throw new Error("Result of pow is non-rational and cannot be expressed as a fraction");return l(v.valueOf(),d.valueOf())},"Array, number":u,"Array, BigNumber":function(v,d){return u(v,d.toNumber())},"Matrix, number":h,"Matrix, BigNumber":function(v,d){return h(v,d.toNumber())},"Unit, number | BigNumber":function(v,d){return v.pow(d)}});function l(m,v){if(t.predictable&&!ct(v)&&m<0)try{var d=c(v),p=o(d);if((v===p||Math.abs((v-p)/v)<1e-14)&&d.d%2===1)return(d.n%2===0?1:-1)*Math.pow(-m,v)}catch{}return t.predictable&&(m<-1&&v===1/0||m>-1&&m<0&&v===-1/0)?NaN:ct(v)||m>=0||t.predictable?wf(m,v):m*m<1&&v===1/0||m*m>1&&v===-1/0?0:new f(m,0).pow(v,0)}function u(m,v){if(!ct(v))throw new TypeError("For A^b, b must be an integer (value is "+v+")");var d=xt(m);if(d.length!==2)throw new Error("For A^b, A must be 2 dimensional (A has "+d.length+" dimensions)");if(d[0]!==d[1])throw new Error("For A^b, A must be square (size is "+d[0]+"x"+d[1]+")");if(v<0)try{return u(s(m),-v)}catch(M){throw M.message==="Cannot calculate inverse, determinant is zero"?new TypeError("For A^b, when A is not invertible, b must be a positive integer (value is "+v+")"):M}for(var p=r(d[0]).valueOf(),g=m;v>=1;)(v&1)===1&&(p=i(g,p)),v>>=1,g=i(g,g);return p}function h(m,v){return a(u(m.valueOf(),v))}});function If(n){var{DenseMatrix:e}=n;return function(r,i,a){var s=r.size();if(s.length!==2)throw new RangeError("Matrix must be two dimensional (size: "+ft(s)+")");var o=s[0],c=s[1];if(o!==c)throw new RangeError("Matrix must be square (size: "+ft(s)+")");var f=[];if(ht(i)){var l=i.size(),u=i._data;if(l.length===1){if(l[0]!==o)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(var h=0;h<o;h++)f[h]=[u[h]];return new e({data:f,size:[o,1],datatype:i._datatype})}if(l.length===2){if(l[0]!==o||l[1]!==1)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");if(Xc(i)){if(a){f=[];for(var m=0;m<o;m++)f[m]=[u[m][0]];return new e({data:f,size:[o,1],datatype:i._datatype})}return i}if(qc(i)){for(var v=0;v<o;v++)f[v]=[0];for(var d=i._values,p=i._index,g=i._ptr,M=g[1],_=g[0];_<M;_++){var A=p[_];f[A][0]=d[_]}return new e({data:f,size:[o,1],datatype:i._datatype})}}throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")}if(st(i)){var y=xt(i);if(y.length===1){if(y[0]!==o)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(var D=0;D<o;D++)f[D]=[i[D]];return new e({data:f,size:[o,1]})}if(y.length===2){if(y[0]!==o||y[1]!==1)throw new RangeError("Dimension mismatch. Matrix columns must match vector length.");for(var T=0;T<o;T++)f[T]=[i[T][0]];return new e({data:f,size:[o,1]})}throw new RangeError("Dimension mismatch. The right side has to be either 1- or 2-dimensional vector.")}}}var Zl="usolve",vy=["typed","matrix","divideScalar","multiplyScalar","subtract","equalScalar","DenseMatrix"],_y=Me(Zl,vy,n=>{var{typed:e,matrix:t,divideScalar:r,multiplyScalar:i,subtract:a,equalScalar:s,DenseMatrix:o}=n,c=If({DenseMatrix:o});return e(Zl,{"SparseMatrix, Array | Matrix":function(h,m){return l(h,m)},"DenseMatrix, Array | Matrix":function(h,m){return f(h,m)},"Array, Array | Matrix":function(h,m){var v=t(h),d=f(v,m);return d.valueOf()}});function f(u,h){h=c(u,h,!0);for(var m=h._data,v=u._size[0],d=u._size[1],p=[],g=u._data,M=d-1;M>=0;M--){var _=m[M][0]||0,A=void 0;if(s(_,0))A=0;else{var y=g[M][M];if(s(y,0))throw new Error("Linear system cannot be solved since matrix is singular");A=r(_,y);for(var D=M-1;D>=0;D--)m[D]=[a(m[D][0]||0,i(A,g[D][M]))]}p[M]=[A]}return new o({data:p,size:[v,1]})}function l(u,h){h=c(u,h,!0);for(var m=h._data,v=u._size[0],d=u._size[1],p=u._values,g=u._index,M=u._ptr,_=[],A=d-1;A>=0;A--){var y=m[A][0]||0;if(s(y,0))_[A]=[0];else{for(var D=0,T=[],b=[],x=M[A],E=M[A+1],N=E-1;N>=x;N--){var L=g[N];L===A?D=p[N]:L<A&&(T.push(p[N]),b.push(L))}if(s(D,0))throw new Error("Linear system cannot be solved since matrix is singular");for(var P=r(y,D),I=0,z=b.length;I<z;I++){var O=b[I];m[O]=[a(m[O][0],i(P,T[I]))]}_[A]=[P]}}return new o({data:_,size:[v,1]})}}),Kl="usolveAll",xy=["typed","matrix","divideScalar","multiplyScalar","subtract","equalScalar","DenseMatrix"],Ey=Me(Kl,xy,n=>{var{typed:e,matrix:t,divideScalar:r,multiplyScalar:i,subtract:a,equalScalar:s,DenseMatrix:o}=n,c=If({DenseMatrix:o});return e(Kl,{"SparseMatrix, Array | Matrix":function(h,m){return l(h,m)},"DenseMatrix, Array | Matrix":function(h,m){return f(h,m)},"Array, Array | Matrix":function(h,m){var v=t(h),d=f(v,m);return d.map(p=>p.valueOf())}});function f(u,h){for(var m=[c(u,h,!0)._data.map(b=>b[0])],v=u._data,d=u._size[0],p=u._size[1],g=p-1;g>=0;g--)for(var M=m.length,_=0;_<M;_++){var A=m[_];if(s(v[g][g],0))if(s(A[g],0)){if(_===0){var D=[...A];D[g]=1;for(var T=g-1;T>=0;T--)D[T]=a(D[T],v[T][g]);m.push(D)}}else{if(_===0)return[];m.splice(_,1),_-=1,M-=1}else{A[g]=r(A[g],v[g][g]);for(var y=g-1;y>=0;y--)A[y]=a(A[y],i(A[g],v[y][g]))}}return m.map(b=>new o({data:b.map(x=>[x]),size:[d,1]}))}function l(u,h){for(var m=[c(u,h,!0)._data.map(H=>H[0])],v=u._size[0],d=u._size[1],p=u._values,g=u._index,M=u._ptr,_=d-1;_>=0;_--)for(var A=m.length,y=0;y<A;y++){for(var D=m[y],T=[],b=[],x=M[_],E=M[_+1],N=0,L=E-1;L>=x;L--){var P=g[L];P===_?N=p[L]:P<_&&(T.push(p[L]),b.push(P))}if(s(N,0))if(s(D[_],0)){if(y===0){var R=[...D];R[_]=1;for(var G=0,X=b.length;G<X;G++){var U=b[G];R[U]=a(R[U],T[G])}m.push(R)}}else{if(y===0)return[];m.splice(y,1),y-=1,A-=1}else{D[_]=r(D[_],N);for(var I=0,z=b.length;I<z;I++){var O=b[I];D[O]=a(D[O],i(D[_],T[I]))}}}return m.map(H=>new o({data:H.map(W=>[W]),size:[v,1]}))}}),Ca="equal",yy=["typed","matrix","equalScalar","DenseMatrix","concat"],My=Me(Ca,yy,n=>{var{typed:e,matrix:t,equalScalar:r,DenseMatrix:i,concat:a}=n,s=pi({typed:e}),o=Ui({typed:e,DenseMatrix:i}),c=di({typed:e,DenseMatrix:i}),f=br({typed:e,matrix:t,concat:a});return e(Ca,Ay({typed:e,equalScalar:r}),f({elop:r,SS:o,DS:s,Ss:c}))}),Ay=Me(Ca,["typed","equalScalar"],n=>{var{typed:e,equalScalar:t}=n;return e(Ca,{"any, any":function(i,a){return i===null?a===null:a===null?i===null:i===void 0?a===void 0:a===void 0?i===void 0:t(i,a)}})}),Fa="smaller",Sy=["typed","config","matrix","DenseMatrix","concat"],wy=Me(Fa,Sy,n=>{var{typed:e,config:t,matrix:r,DenseMatrix:i,concat:a}=n,s=pi({typed:e}),o=Ui({typed:e,DenseMatrix:i}),c=di({typed:e,DenseMatrix:i}),f=br({typed:e,matrix:r,concat:a}),l=Ii({typed:e});return e(Fa,Dy({typed:e,config:t}),{"boolean, boolean":(u,h)=>u<h,"BigNumber, BigNumber":function(h,m){return h.lt(m)&&!Ni(h,m,t.epsilon)},"Fraction, Fraction":(u,h)=>u.compare(h)===-1,"Complex, Complex":function(h,m){throw new TypeError("No ordering relation is defined for complex numbers")}},l,f({SS:o,DS:s,Ss:c}))}),Dy=Me(Fa,["typed","config"],n=>{var{typed:e,config:t}=n;return e(Fa,{"number, number":function(i,a){return i<a&&!nr(i,a,t.epsilon)}})}),Ra="smallerEq",by=["typed","config","matrix","DenseMatrix","concat"],Ty=Me(Ra,by,n=>{var{typed:e,config:t,matrix:r,DenseMatrix:i,concat:a}=n,s=pi({typed:e}),o=Ui({typed:e,DenseMatrix:i}),c=di({typed:e,DenseMatrix:i}),f=br({typed:e,matrix:r,concat:a}),l=Ii({typed:e});return e(Ra,Cy({typed:e,config:t}),{"boolean, boolean":(u,h)=>u<=h,"BigNumber, BigNumber":function(h,m){return h.lte(m)||Ni(h,m,t.epsilon)},"Fraction, Fraction":(u,h)=>u.compare(h)!==1,"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},l,f({SS:o,DS:s,Ss:c}))}),Cy=Me(Ra,["typed","config"],n=>{var{typed:e,config:t}=n;return e(Ra,{"number, number":function(i,a){return i<=a||nr(i,a,t.epsilon)}})}),La="larger",Fy=["typed","config","matrix","DenseMatrix","concat"],Ry=Me(La,Fy,n=>{var{typed:e,config:t,matrix:r,DenseMatrix:i,concat:a}=n,s=pi({typed:e}),o=Ui({typed:e,DenseMatrix:i}),c=di({typed:e,DenseMatrix:i}),f=br({typed:e,matrix:r,concat:a}),l=Ii({typed:e});return e(La,Ly({typed:e,config:t}),{"boolean, boolean":(u,h)=>u>h,"BigNumber, BigNumber":function(h,m){return h.gt(m)&&!Ni(h,m,t.epsilon)},"Fraction, Fraction":(u,h)=>u.compare(h)===1,"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},l,f({SS:o,DS:s,Ss:c}))}),Ly=Me(La,["typed","config"],n=>{var{typed:e,config:t}=n;return e(La,{"number, number":function(i,a){return i>a&&!nr(i,a,t.epsilon)}})}),Pa="largerEq",Py=["typed","config","matrix","DenseMatrix","concat"],Ny=Me(Pa,Py,n=>{var{typed:e,config:t,matrix:r,DenseMatrix:i,concat:a}=n,s=pi({typed:e}),o=Ui({typed:e,DenseMatrix:i}),c=di({typed:e,DenseMatrix:i}),f=br({typed:e,matrix:r,concat:a}),l=Ii({typed:e});return e(Pa,Iy({typed:e,config:t}),{"boolean, boolean":(u,h)=>u>=h,"BigNumber, BigNumber":function(h,m){return h.gte(m)||Ni(h,m,t.epsilon)},"Fraction, Fraction":(u,h)=>u.compare(h)!==-1,"Complex, Complex":function(){throw new TypeError("No ordering relation is defined for complex numbers")}},l,f({SS:o,DS:s,Ss:c}))}),Iy=Me(Pa,["typed","config"],n=>{var{typed:e,config:t}=n;return e(Pa,{"number, number":function(i,a){return i>=a||nr(i,a,t.epsilon)}})}),Uy="ImmutableDenseMatrix",By=["smaller","DenseMatrix"],Oy=Me(Uy,By,n=>{var{smaller:e,DenseMatrix:t}=n;function r(i,a){if(!(this instanceof r))throw new SyntaxError("Constructor must be called with the new operator");if(a&&!yn(a))throw new Error("Invalid datatype: "+a);if(ht(i)||st(i)){var s=new t(i,a);this._data=s._data,this._size=s._size,this._datatype=s._datatype,this._min=null,this._max=null}else if(i&&st(i.data)&&st(i.size))this._data=i.data,this._size=i.size,this._datatype=i.datatype,this._min=typeof i.min<"u"?i.min:null,this._max=typeof i.max<"u"?i.max:null;else{if(i)throw new TypeError("Unsupported type of data ("+er(i)+")");this._data=[],this._size=[0],this._datatype=a,this._min=null,this._max=null}}return r.prototype=new t,r.prototype.type="ImmutableDenseMatrix",r.prototype.isImmutableDenseMatrix=!0,r.prototype.subset=function(i){switch(arguments.length){case 1:{var a=t.prototype.subset.call(this,i);return ht(a)?new r({data:a._data,size:a._size,datatype:a._datatype}):a}case 2:case 3:throw new Error("Cannot invoke set subset on an Immutable Matrix instance");default:throw new SyntaxError("Wrong number of arguments")}},r.prototype.set=function(){throw new Error("Cannot invoke set on an Immutable Matrix instance")},r.prototype.resize=function(){throw new Error("Cannot invoke resize on an Immutable Matrix instance")},r.prototype.reshape=function(){throw new Error("Cannot invoke reshape on an Immutable Matrix instance")},r.prototype.clone=function(){return new r({data:tt(this._data),size:tt(this._size),datatype:this._datatype})},r.prototype.toJSON=function(){return{mathjs:"ImmutableDenseMatrix",data:this._data,size:this._size,datatype:this._datatype}},r.fromJSON=function(i){return new r(i)},r.prototype.swapRows=function(){throw new Error("Cannot invoke swapRows on an Immutable Matrix instance")},r.prototype.min=function(){if(this._min===null){var i=null;this.forEach(function(a){(i===null||e(a,i))&&(i=a)}),this._min=i!==null?i:void 0}return this._min},r.prototype.max=function(){if(this._max===null){var i=null;this.forEach(function(a){(i===null||e(i,a))&&(i=a)}),this._max=i!==null?i:void 0}return this._max},r},{isClass:!0}),zy="Index",Gy=["ImmutableDenseMatrix"],Hy=Me(zy,Gy,n=>{var{ImmutableDenseMatrix:e}=n;function t(i){if(!(this instanceof t))throw new SyntaxError("Constructor must be called with the new operator");this._dimensions=[],this._isScalar=!0;for(var a=0,s=arguments.length;a<s;a++){var o=arguments[a];if($c(o))this._dimensions.push(o),this._isScalar=!1;else if(Array.isArray(o)||ht(o)){var c=r(o.valueOf());this._dimensions.push(c);var f=c.size();(f.length!==1||f[0]!==1)&&(this._isScalar=!1)}else if(typeof o=="number")this._dimensions.push(r([o]));else if(typeof o=="string")this._dimensions.push(o);else throw new TypeError("Dimension must be an Array, Matrix, number, string, or Range")}}t.prototype.type="Index",t.prototype.isIndex=!0;function r(i){for(var a=0,s=i.length;a<s;a++)if(typeof i[a]!="number"||!ct(i[a]))throw new TypeError("Index parameters must be positive integer numbers");return new e(i)}return t.prototype.clone=function(){var i=new t;return i._dimensions=tt(this._dimensions),i._isScalar=this._isScalar,i},t.create=function(i){var a=new t;return t.apply(a,i),a},t.prototype.size=function(){for(var i=[],a=0,s=this._dimensions.length;a<s;a++){var o=this._dimensions[a];i[a]=typeof o=="string"?1:o.size()[0]}return i},t.prototype.max=function(){for(var i=[],a=0,s=this._dimensions.length;a<s;a++){var o=this._dimensions[a];i[a]=typeof o=="string"?o:o.max()}return i},t.prototype.min=function(){for(var i=[],a=0,s=this._dimensions.length;a<s;a++){var o=this._dimensions[a];i[a]=typeof o=="string"?o:o.min()}return i},t.prototype.forEach=function(i){for(var a=0,s=this._dimensions.length;a<s;a++)i(this._dimensions[a],a,this)},t.prototype.dimension=function(i){return this._dimensions[i]||null},t.prototype.isObjectProperty=function(){return this._dimensions.length===1&&typeof this._dimensions[0]=="string"},t.prototype.getObjectProperty=function(){return this.isObjectProperty()?this._dimensions[0]:null},t.prototype.isScalar=function(){return this._isScalar},t.prototype.toArray=function(){for(var i=[],a=0,s=this._dimensions.length;a<s;a++){var o=this._dimensions[a];i.push(typeof o=="string"?o:o.toArray())}return i},t.prototype.valueOf=t.prototype.toArray,t.prototype.toString=function(){for(var i=[],a=0,s=this._dimensions.length;a<s;a++){var o=this._dimensions[a];typeof o=="string"?i.push(JSON.stringify(o)):i.push(o.toString())}return"["+i.join(", ")+"]"},t.prototype.toJSON=function(){return{mathjs:"Index",dimensions:this._dimensions}},t.fromJSON=function(i){return t.create(i.dimensions)},t},{isClass:!0}),Vy="atan",Wy=["typed"],ky=Me(Vy,Wy,n=>{var{typed:e}=n;return e("atan",{number:function(r){return Math.atan(r)},Complex:function(r){return r.atan()},BigNumber:function(r){return r.atan()}})}),Uf=Me("trigUnit",["typed"],n=>{var{typed:e}=n;return{Unit:e.referToSelf(t=>r=>{if(!r.hasBase(r.constructor.BASE_UNITS.ANGLE))throw new TypeError("Unit in function cot is no angle");return e.find(t,r.valueType())(r.value)})}}),Jl="cos",Xy=["typed"],qy=Me(Jl,Xy,n=>{var{typed:e}=n,t=Uf({typed:e});return e(Jl,{number:Math.cos,"Complex | BigNumber":r=>r.cos()},t)}),Ql="sin",$y=["typed"],Yy=Me(Ql,$y,n=>{var{typed:e}=n,t=Uf({typed:e});return e(Ql,{number:Math.sin,"Complex | BigNumber":r=>r.sin()},t)}),jl="add",Zy=["typed","matrix","addScalar","equalScalar","DenseMatrix","SparseMatrix","concat"],Ky=Me(jl,Zy,n=>{var{typed:e,matrix:t,addScalar:r,equalScalar:i,DenseMatrix:a,SparseMatrix:s,concat:o}=n,c=Ff({typed:e}),f=aE({typed:e,equalScalar:i}),l=Rf({typed:e,DenseMatrix:a}),u=br({typed:e,matrix:t,concat:o});return e(jl,{"any, any":r,"any, any, ...any":e.referToSelf(h=>(m,v,d)=>{for(var p=h(m,v),g=0;g<d.length;g++)p=h(p,d[g]);return p})},u({elop:r,DS:c,SS:f,Ss:l}))}),ec="norm",Jy=["typed","abs","add","pow","conj","sqrt","multiply","equalScalar","larger","smaller","matrix","ctranspose","eigs"],Qy=Me(ec,Jy,n=>{var{typed:e,abs:t,add:r,pow:i,conj:a,sqrt:s,multiply:o,equalScalar:c,larger:f,smaller:l,matrix:u,ctranspose:h,eigs:m}=n;return e(ec,{number:Math.abs,Complex:function(b){return b.abs()},BigNumber:function(b){return b.abs()},boolean:function(b){return Math.abs(b)},Array:function(b){return D(u(b),2)},Matrix:function(b){return D(b,2)},"Array, number | BigNumber | string":function(b,x){return D(u(b),x)},"Matrix, number | BigNumber | string":function(b,x){return D(b,x)}});function v(T){var b=0;return T.forEach(function(x){var E=t(x);f(E,b)&&(b=E)},!0),b}function d(T){var b;return T.forEach(function(x){var E=t(x);(!b||l(E,b))&&(b=E)},!0),b||0}function p(T,b){if(b===Number.POSITIVE_INFINITY||b==="inf")return v(T);if(b===Number.NEGATIVE_INFINITY||b==="-inf")return d(T);if(b==="fro")return D(T,2);if(typeof b=="number"&&!isNaN(b)){if(!c(b,0)){var x=0;return T.forEach(function(E){x=r(i(t(E),b),x)},!0),i(x,1/b)}return Number.POSITIVE_INFINITY}throw new Error("Unsupported parameter value")}function g(T){var b=0;return T.forEach(function(x,E){b=r(b,o(x,a(x)))}),t(s(b))}function M(T){var b=[],x=0;return T.forEach(function(E,N){var L=N[1],P=r(b[L]||0,t(E));f(P,x)&&(x=P),b[L]=P},!0),x}function _(T){var b=T.size();if(b[0]!==b[1])throw new RangeError("Invalid matrix dimensions");var x=h(T),E=o(x,T),N=m(E).values.toArray(),L=N[N.length-1];return t(s(L))}function A(T){var b=[],x=0;return T.forEach(function(E,N){var L=N[0],P=r(b[L]||0,t(E));f(P,x)&&(x=P),b[L]=P},!0),x}function y(T,b){if(b===1)return M(T);if(b===Number.POSITIVE_INFINITY||b==="inf")return A(T);if(b==="fro")return g(T);if(b===2)return _(T);throw new Error("Unsupported parameter value "+b)}function D(T,b){var x=T.size();if(x.length===1)return p(T,b);if(x.length===2){if(x[0]&&x[1])return y(T,b);throw new RangeError("Invalid matrix dimensions")}}}),tc="dot",jy=["typed","addScalar","multiplyScalar","conj","size"],eM=Me(tc,jy,n=>{var{typed:e,addScalar:t,multiplyScalar:r,conj:i,size:a}=n;return e(tc,{"Array | DenseMatrix, Array | DenseMatrix":o,"SparseMatrix, SparseMatrix":c});function s(l,u){var h=f(l),m=f(u),v,d;if(h.length===1)v=h[0];else if(h.length===2&&h[1]===1)v=h[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+h.join(", ")+")");if(m.length===1)d=m[0];else if(m.length===2&&m[1]===1)d=m[0];else throw new RangeError("Expected a column vector, instead got a matrix of size ("+m.join(", ")+")");if(v!==d)throw new RangeError("Vectors must have equal length ("+v+" != "+d+")");if(v===0)throw new RangeError("Cannot calculate the dot product of empty vectors");return v}function o(l,u){var h=s(l,u),m=ht(l)?l._data:l,v=ht(l)?l._datatype:void 0,d=ht(u)?u._data:u,p=ht(u)?u._datatype:void 0,g=f(l).length===2,M=f(u).length===2,_=t,A=r;if(v&&p&&v===p&&typeof v=="string"){var y=v;_=e.find(t,[y,y]),A=e.find(r,[y,y])}if(!g&&!M){for(var D=A(i(m[0]),d[0]),T=1;T<h;T++)D=_(D,A(i(m[T]),d[T]));return D}if(!g&&M){for(var b=A(i(m[0]),d[0][0]),x=1;x<h;x++)b=_(b,A(i(m[x]),d[x][0]));return b}if(g&&!M){for(var E=A(i(m[0][0]),d[0]),N=1;N<h;N++)E=_(E,A(i(m[N][0]),d[N]));return E}if(g&&M){for(var L=A(i(m[0][0]),d[0][0]),P=1;P<h;P++)L=_(L,A(i(m[P][0]),d[P][0]));return L}}function c(l,u){s(l,u);for(var h=l._index,m=l._values,v=u._index,d=u._values,p=0,g=t,M=r,_=0,A=0;_<h.length&&A<v.length;){var y=h[_],D=v[A];if(y<D){_++;continue}if(y>D){A++;continue}y===D&&(p=g(p,M(m[_],d[A])),_++,A++)}return p}function f(l){return ht(l)?l.size():a(l)}}),nc="qr",tM=["typed","matrix","zeros","identity","isZero","equal","sign","sqrt","conj","unaryMinus","addScalar","divideScalar","multiplyScalar","subtract","complex"],nM=Me(nc,tM,n=>{var{typed:e,matrix:t,zeros:r,identity:i,isZero:a,equal:s,sign:o,sqrt:c,conj:f,unaryMinus:l,addScalar:u,divideScalar:h,multiplyScalar:m,subtract:v,complex:d}=n;return Ea(e(nc,{DenseMatrix:function(A){return g(A)},SparseMatrix:function(A){return M()},Array:function(A){var y=t(A),D=g(y);return{Q:D.Q.valueOf(),R:D.R.valueOf()}}}),{_denseQRimpl:p});function p(_){var A=_._size[0],y=_._size[1],D=i([A],"dense"),T=D._data,b=_.clone(),x=b._data,E,N,L,P=r([A],"");for(L=0;L<Math.min(y,A);++L){var I=x[L][L],z=l(s(I,0)?1:o(I)),O=f(z),R=0;for(E=L;E<A;E++)R=u(R,m(x[E][L],f(x[E][L])));var G=m(z,c(R));if(!a(G)){var X=v(I,G);for(P[L]=1,E=L+1;E<A;E++)P[E]=h(x[E][L],X);var U=l(f(h(X,G))),H=void 0;for(N=L;N<y;N++){for(H=0,E=L;E<A;E++)H=u(H,m(f(P[E]),x[E][N]));for(H=m(H,U),E=L;E<A;E++)x[E][N]=m(v(x[E][N],m(P[E],H)),O)}for(E=0;E<A;E++){for(H=0,N=L;N<A;N++)H=u(H,m(T[E][N],P[N]));for(H=m(H,U),N=L;N<A;++N)T[E][N]=h(v(T[E][N],m(H,f(P[N]))),O)}}}return{Q:D,R:b,toString:function(){return"Q: "+this.Q.toString()+`
R: `+this.R.toString()}}}function g(_){var A=p(_),y=A.R._data;if(_._data.length>0)for(var D=y[0][0].type==="Complex"?d(0):0,T=0;T<y.length;++T)for(var b=0;b<T&&b<(y[0]||[]).length;++b)y[T][b]=D;return A}function M(_){throw new Error("qr not implemented for sparse matrices yet")}}),rc="det",rM=["typed","matrix","subtract","multiply","divideScalar","isZero","unaryMinus"],iM=Me(rc,rM,n=>{var{typed:e,matrix:t,subtract:r,multiply:i,divideScalar:a,isZero:s,unaryMinus:o}=n;return e(rc,{any:function(l){return tt(l)},"Array | Matrix":function(l){var u;switch(ht(l)?u=l.size():Array.isArray(l)?(l=t(l),u=l.size()):u=[],u.length){case 0:return tt(l);case 1:if(u[0]===1)return tt(l.valueOf()[0]);if(u[0]===0)return 1;throw new RangeError("Matrix must be square (size: "+ft(u)+")");case 2:{var h=u[0],m=u[1];if(h===m)return c(l.clone().valueOf(),h);if(m===0)return 1;throw new RangeError("Matrix must be square (size: "+ft(u)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+ft(u)+")")}}});function c(f,l,u){if(l===1)return tt(f[0][0]);if(l===2)return r(i(f[0][0],f[1][1]),i(f[1][0],f[0][1]));for(var h=!1,m=new Array(l).fill(0).map((T,b)=>b),v=0;v<l;v++){var d=m[v];if(s(f[d][v])){var p=void 0;for(p=v+1;p<l;p++)if(!s(f[m[p]][v])){d=m[p],m[p]=m[v],m[v]=d,h=!h;break}if(p===l)return f[d][v]}for(var g=f[d][v],M=v===0?1:f[m[v-1]][v-1],_=v+1;_<l;_++)for(var A=m[_],y=v+1;y<l;y++)f[A][y]=a(r(i(f[A][y],g),i(f[A][v],f[d][y])),M)}var D=f[m[l-1]][l-1];return h?o(D):D}}),ic="inv",aM=["typed","matrix","divideScalar","addScalar","multiply","unaryMinus","det","identity","abs"],sM=Me(ic,aM,n=>{var{typed:e,matrix:t,divideScalar:r,addScalar:i,multiply:a,unaryMinus:s,det:o,identity:c,abs:f}=n;return e(ic,{"Array | Matrix":function(h){var m=ht(h)?h.size():xt(h);switch(m.length){case 1:if(m[0]===1)return ht(h)?t([r(1,h.valueOf()[0])]):[r(1,h[0])];throw new RangeError("Matrix must be square (size: "+ft(m)+")");case 2:{var v=m[0],d=m[1];if(v===d)return ht(h)?t(l(h.valueOf(),v,d),h.storage()):l(h,v,d);throw new RangeError("Matrix must be square (size: "+ft(m)+")")}default:throw new RangeError("Matrix must be two dimensional (size: "+ft(m)+")")}},any:function(h){return r(1,h)}});function l(u,h,m){var v,d,p,g,M;if(h===1){if(g=u[0][0],g===0)throw Error("Cannot calculate inverse, determinant is zero");return[[r(1,g)]]}else if(h===2){var _=o(u);if(_===0)throw Error("Cannot calculate inverse, determinant is zero");return[[r(u[1][1],_),r(s(u[0][1]),_)],[r(s(u[1][0]),_),r(u[0][0],_)]]}else{var A=u.concat();for(v=0;v<h;v++)A[v]=A[v].concat();for(var y=c(h).valueOf(),D=0;D<m;D++){var T=f(A[D][D]),b=D;for(v=D+1;v<h;)f(A[v][D])>T&&(T=f(A[v][D]),b=v),v++;if(T===0)throw Error("Cannot calculate inverse, determinant is zero");v=b,v!==D&&(M=A[D],A[D]=A[v],A[v]=M,M=y[D],y[D]=y[v],y[v]=M);var x=A[D],E=y[D];for(v=0;v<h;v++){var N=A[v],L=y[v];if(v!==D){if(N[D]!==0){for(p=r(s(N[D]),x[D]),d=D;d<m;d++)N[d]=i(N[d],a(p,x[d]));for(d=0;d<m;d++)L[d]=i(L[d],a(p,E[d]))}}else{for(p=x[D],d=D;d<m;d++)N[d]=r(N[d],p);for(d=0;d<m;d++)L[d]=r(L[d],p)}}}return y}}});function oM(n){var{addScalar:e,subtract:t,flatten:r,multiply:i,multiplyScalar:a,divideScalar:s,sqrt:o,abs:c,bignumber:f,diag:l,inv:u,qr:h,usolve:m,usolveAll:v,equal:d,complex:p,larger:g,smaller:M,matrixFromColumns:_,dot:A}=n;function y(U,H,W,J,q){q===void 0&&(q=!0);var j=D(U,H,W,J,q);T(U,H,W,J,q,j);var{values:ne,C:oe}=b(U,H,W,J,q),se;return q&&(se=x(U,H,oe,j,ne,W,J),se=_(...se)),{values:ne,vectors:se}}function D(U,H,W,J,q){var j=J==="BigNumber",ne=J==="Complex",oe=j?f(0):0,se=j?f(1):ne?p(1):1,pe=j?f(1):1,fe=j?f(10):2,Ae=a(fe,fe),Z;q&&(Z=Array(H).fill(se));for(var Se=!1;!Se;){Se=!0;for(var de=0;de<H;de++){for(var Ee=oe,xe=oe,Le=0;Le<H;Le++)if(de!==Le){var Te=c(U[de][Le]);Ee=e(Ee,Te),xe=e(xe,Te)}if(!d(Ee,0)&&!d(xe,0)){for(var be=pe,Re=Ee,ke=s(xe,fe),Xe=a(xe,fe);M(Re,ke);)Re=a(Re,Ae),be=a(be,fe);for(;g(Re,Xe);)Re=s(Re,Ae),be=s(be,fe);var w=M(s(e(Re,xe),be),a(e(Ee,xe),.95));if(w){Se=!1;for(var S=s(1,be),F=0;F<H;F++)de!==F&&(U[de][F]=a(U[de][F],be),U[F][de]=a(U[F][de],S));q&&(Z[de]=a(Z[de],be))}}}}return l(Z)}function T(U,H,W,J,q,j){var ne=J==="BigNumber",oe=J==="Complex",se=ne?f(0):oe?p(0):0;ne&&(W=f(W));for(var pe=0;pe<H-2;pe++){for(var fe=0,Ae=se,Z=pe+1;Z<H;Z++){var Se=U[Z][pe];M(c(Ae),c(Se))&&(Ae=Se,fe=Z)}if(!M(c(Ae),W)){if(fe!==pe+1){var de=U[fe];U[fe]=U[pe+1],U[pe+1]=de;for(var Ee=0;Ee<H;Ee++){var xe=U[Ee][fe];U[Ee][fe]=U[Ee][pe+1],U[Ee][pe+1]=xe}if(q){var Le=j[fe];j[fe]=j[pe+1],j[pe+1]=Le}}for(var Te=pe+2;Te<H;Te++){var be=s(U[Te][pe],Ae);if(be!==0){for(var Re=0;Re<H;Re++)U[Te][Re]=t(U[Te][Re],a(be,U[pe+1][Re]));for(var ke=0;ke<H;ke++)U[ke][pe+1]=e(U[ke][pe+1],a(be,U[ke][Te]));if(q)for(var Xe=0;Xe<H;Xe++)j[Te][Xe]=t(j[Te][Xe],a(be,j[pe+1][Xe]))}}}}return j}function b(U,H,W,J,q){var j=J==="BigNumber",ne=J==="Complex",oe=j?f(1):ne?p(1):1;j&&(W=f(W));for(var se=tt(U),pe=[],fe=H,Ae=[],Z=q?l(Array(H).fill(oe)):void 0,Se=q?l(Array(fe).fill(oe)):void 0,de=0;de<=100;){de+=1;for(var Ee=0,xe=0;xe<fe;xe++)se[xe][xe]=t(se[xe][xe],Ee);var{Q:Le,R:Te}=h(se);se=i(Te,Le);for(var be=0;be<fe;be++)se[be][be]=e(se[be][be],Ee);if(q&&(Se=i(Se,Le)),fe===1||M(c(se[fe-1][fe-2]),W)){de=0,pe.push(se[fe-1][fe-1]),q&&(Ae.unshift([[1]]),L(Se,H),Z=i(Z,Se),fe>1&&(Se=l(Array(fe-1).fill(oe)))),fe-=1,se.pop();for(var Re=0;Re<fe;Re++)se[Re].pop()}else if(fe===2||M(c(se[fe-2][fe-3]),W)){de=0;var ke=E(se[fe-2][fe-2],se[fe-2][fe-1],se[fe-1][fe-2],se[fe-1][fe-1]);pe.push(...ke),q&&(Ae.unshift(N(se[fe-2][fe-2],se[fe-2][fe-1],se[fe-1][fe-2],se[fe-1][fe-1],ke[0],ke[1],W,J)),L(Se,H),Z=i(Z,Se),fe>2&&(Se=l(Array(fe-2).fill(oe)))),fe-=2,se.pop(),se.pop();for(var Xe=0;Xe<fe;Xe++)se[Xe].pop(),se[Xe].pop()}if(fe===0)break}if(pe.sort((F,V)=>+t(c(F),c(V))),de>100){var w=Error("The eigenvalues failed to converge. Only found these eigenvalues: "+pe.join(", "));throw w.values=pe,w.vectors=[],w}var S=q?i(Z,P(Ae,H)):void 0;return{values:pe,C:S}}function x(U,H,W,J,q,j,ne){var oe=u(W),se=i(oe,U,W),pe=ne==="BigNumber",fe=ne==="Complex",Ae=pe?f(0):fe?p(0):0,Z=pe?f(1):fe?p(1):1,Se=[],de=[];for(var Ee of q){var xe=I(Se,Ee,d);xe===-1?(Se.push(Ee),de.push(1)):de[xe]+=1}for(var Le=[],Te=Se.length,be=Array(H).fill(Ae),Re=l(Array(H).fill(Z)),ke=[],Xe=function(){var V=Se[w],K=t(se,i(V,Re)),C=v(K,be);for(C.shift();C.length<de[w];){var Q=z(K,H,C,j,ne);if(Q==null){ke.push(V);break}C.push(Q)}var Y=i(u(J),W);C=C.map(k=>i(Y,k)),Le.push(...C.map(k=>r(k)))},w=0;w<Te;w++)Xe();if(ke.length!==0){var S=new Error("Failed to find eigenvectors for the following eigenvalues: "+ke.join(", "));throw S.values=q,S.vectors=Le,S}return Le}function E(U,H,W,J){var q=e(U,J),j=t(a(U,J),a(H,W)),ne=a(q,.5),oe=a(o(t(a(q,q),a(4,j))),.5);return[e(ne,oe),t(ne,oe)]}function N(U,H,W,J,q,j,ne,oe){var se=oe==="BigNumber",pe=oe==="Complex",fe=se?f(0):pe?p(0):0,Ae=se?f(1):pe?p(1):1;if(M(c(W),ne))return[[Ae,fe],[fe,Ae]];if(g(c(t(q,j)),ne))return[[t(q,J),t(j,J)],[W,W]];var Z=t(U,q),Se=t(H,q),de=t(W,q),Ee=t(J,q);return M(c(Se),ne)?[[Z,Ae],[de,fe]]:[[Se,fe],[Ee,Ae]]}function L(U,H){for(var W=0;W<U.length;W++)U[W].push(...Array(H-U[W].length).fill(0));for(var J=U.length;J<H;J++)U.push(Array(H).fill(0)),U[J][J]=1;return U}function P(U,H){for(var W=[],J=0;J<H;J++)W[J]=Array(H).fill(0);var q=0;for(var j of U){for(var ne=j.length,oe=0;oe<ne;oe++)for(var se=0;se<ne;se++)W[q+oe][q+se]=j[oe][se];q+=ne}return W}function I(U,H,W){for(var J=0;J<U.length;J++)if(W(U[J],H))return J;return-1}function z(U,H,W,J,q){for(var j=q==="BigNumber"?f(1e3):1e3,ne,oe=0;ne=O(H,W,q),ne=m(U,ne),!g(G(ne),j);)if(++oe>=5)return null;for(oe=0;;){var se=m(U,ne);if(M(G(R(ne,[se])),J))break;if(++oe>=10)return null;ne=X(se)}return ne}function O(U,H,W){var J=W==="BigNumber",q=W==="Complex",j=Array(U).fill(0).map(ne=>2*Math.random()-1);return J&&(j=j.map(ne=>f(ne))),q&&(j=j.map(ne=>p(ne))),j=R(j,H),X(j,W)}function R(U,H){for(var W of H)U=t(U,i(s(A(W,U),A(W,W)),W));return U}function G(U){return c(o(A(U,U)))}function X(U,H){var W=H==="BigNumber",J=H==="Complex",q=W?f(1):J?p(1):1;return i(s(q,G(U)),U)}return y}function uM(n){var{config:e,addScalar:t,subtract:r,abs:i,atan:a,cos:s,sin:o,multiplyScalar:c,inv:f,bignumber:l,multiply:u,add:h}=n;function m(E,N){var L=arguments.length>2&&arguments[2]!==void 0?arguments[2]:e.epsilon,P=arguments.length>3?arguments[3]:void 0;if(P==="number")return v(E,L);if(P==="BigNumber")return d(E,L);throw TypeError("Unsupported data type: "+P)}function v(E,N){for(var L=E.length,P=Math.abs(N/L),I,z=new Array(L),O=0;O<L;O++)z[O]=x(L,0),z[O][O]=1;for(var R=D(E);Math.abs(R[1])>=Math.abs(P);){var G=R[0][0],X=R[0][1];I=p(E[G][G],E[X][X],E[G][X]),E=y(E,I,G,X),z=M(z,I,G,X),R=D(E)}for(var U=x(L,0),H=0;H<L;H++)U[H]=E[H][H];return b(tt(U),tt(z))}function d(E,N){for(var L=E.length,P=i(N/L),I,z=new Array(L),O=0;O<L;O++)z[O]=x(L,0),z[O][O]=1;for(var R=T(E);i(R[1])>=i(P);){var G=R[0][0],X=R[0][1];I=g(E[G][G],E[X][X],E[G][X]),E=A(E,I,G,X),z=_(z,I,G,X),R=T(E)}for(var U=x(L,0),H=0;H<L;H++)U[H]=E[H][H];return b(tt(U),tt(z))}function p(E,N,L){var P=N-E;return Math.abs(P)<=e.epsilon?Math.PI/4:.5*Math.atan(2*L/(N-E))}function g(E,N,L){var P=r(N,E);return i(P)<=e.epsilon?l(-1).acos().div(4):c(.5,a(u(2,L,f(P))))}function M(E,N,L,P){for(var I=E.length,z=Math.cos(N),O=Math.sin(N),R=x(I,0),G=x(I,0),X=0;X<I;X++)R[X]=z*E[X][L]-O*E[X][P],G[X]=O*E[X][L]+z*E[X][P];for(var U=0;U<I;U++)E[U][L]=R[U],E[U][P]=G[U];return E}function _(E,N,L,P){for(var I=E.length,z=s(N),O=o(N),R=x(I,l(0)),G=x(I,l(0)),X=0;X<I;X++)R[X]=r(c(z,E[X][L]),c(O,E[X][P])),G[X]=t(c(O,E[X][L]),c(z,E[X][P]));for(var U=0;U<I;U++)E[U][L]=R[U],E[U][P]=G[U];return E}function A(E,N,L,P){for(var I=E.length,z=l(s(N)),O=l(o(N)),R=c(z,z),G=c(O,O),X=x(I,l(0)),U=x(I,l(0)),H=u(l(2),z,O,E[L][P]),W=t(r(c(R,E[L][L]),H),c(G,E[P][P])),J=h(c(G,E[L][L]),H,c(R,E[P][P])),q=0;q<I;q++)X[q]=r(c(z,E[L][q]),c(O,E[P][q])),U[q]=t(c(O,E[L][q]),c(z,E[P][q]));E[L][L]=W,E[P][P]=J,E[L][P]=l(0),E[P][L]=l(0);for(var j=0;j<I;j++)j!==L&&j!==P&&(E[L][j]=X[j],E[j][L]=X[j],E[P][j]=U[j],E[j][P]=U[j]);return E}function y(E,N,L,P){for(var I=E.length,z=Math.cos(N),O=Math.sin(N),R=z*z,G=O*O,X=x(I,0),U=x(I,0),H=R*E[L][L]-2*z*O*E[L][P]+G*E[P][P],W=G*E[L][L]+2*z*O*E[L][P]+R*E[P][P],J=0;J<I;J++)X[J]=z*E[L][J]-O*E[P][J],U[J]=O*E[L][J]+z*E[P][J];E[L][L]=H,E[P][P]=W,E[L][P]=0,E[P][L]=0;for(var q=0;q<I;q++)q!==L&&q!==P&&(E[L][q]=X[q],E[q][L]=X[q],E[P][q]=U[q],E[q][P]=U[q]);return E}function D(E){for(var N=E.length,L=0,P=[0,1],I=0;I<N;I++)for(var z=I+1;z<N;z++)Math.abs(L)<Math.abs(E[I][z])&&(L=Math.abs(E[I][z]),P=[I,z]);return[P,L]}function T(E){for(var N=E.length,L=0,P=[0,1],I=0;I<N;I++)for(var z=I+1;z<N;z++)i(L)<i(E[I][z])&&(L=i(E[I][z]),P=[I,z]);return[P,L]}function b(E,N){for(var L=E.length,P=Array(L),I=Array(L),z=0;z<L;z++)I[z]=Array(L);for(var O=0;O<L;O++){for(var R=0,G=E[0],X=0;X<E.length;X++)i(E[X])<i(G)&&(R=X,G=E[R]);P[O]=E.splice(R,1)[0];for(var U=0;U<L;U++)I[U][O]=N[U][R],N[U].splice(R,1)}return{values:P,vectors:I}}function x(E,N){for(var L=new Array(E),P=0;P<E;P++)L[P]=N;return L}return m}var lM="eigs",cM=["config","typed","matrix","addScalar","equal","subtract","abs","atan","cos","sin","multiplyScalar","divideScalar","inv","bignumber","multiply","add","larger","column","flatten","number","complex","sqrt","diag","qr","usolve","usolveAll","im","re","smaller","matrixFromColumns","dot"],fM=Me(lM,cM,n=>{var{config:e,typed:t,matrix:r,addScalar:i,subtract:a,equal:s,abs:o,atan:c,cos:f,sin:l,multiplyScalar:u,divideScalar:h,inv:m,bignumber:v,multiply:d,add:p,larger:g,column:M,flatten:_,number:A,complex:y,sqrt:D,diag:T,qr:b,usolve:x,usolveAll:E,im:N,re:L,smaller:P,matrixFromColumns:I,dot:z}=n,O=uM({config:e,addScalar:i,subtract:a,column:M,flatten:_,equal:s,abs:o,atan:c,cos:f,sin:l,multiplyScalar:u,inv:m,bignumber:v,complex:y,multiply:d,add:p}),R=oM({config:e,addScalar:i,subtract:a,multiply:d,multiplyScalar:u,flatten:_,divideScalar:h,sqrt:D,abs:o,bignumber:v,diag:T,qr:b,inv:m,usolve:x,usolveAll:E,equal:s,complex:y,larger:g,smaller:P,matrixFromColumns:I,dot:z});return t("eigs",{Array:function(q){var j=r(q);return G(j)},"Array, number|BigNumber":function(q,j){var ne=r(q);return G(ne,j)},Matrix:function(q){var{values:j,vectors:ne}=G(q);return{values:r(j),vectors:r(ne)}},"Matrix, number|BigNumber":function(q,j){var{values:ne,vectors:oe}=G(q,j);return{values:r(ne),vectors:r(oe)}}});function G(J,q){q===void 0&&(q=e.epsilon);var j=J.size();if(j.length!==2||j[0]!==j[1])throw new RangeError("Matrix must be square (size: "+ft(j)+")");var ne=J.toArray(),oe=j[0];if(U(ne,oe,q)&&(H(ne,oe),X(ne,oe,q))){var se=W(J,ne,oe);return O(ne,oe,q,se)}var pe=W(J,ne,oe);return R(ne,oe,q,pe)}function X(J,q,j){for(var ne=0;ne<q;ne++)for(var oe=ne;oe<q;oe++)if(g(v(o(a(J[ne][oe],J[oe][ne]))),j))return!1;return!0}function U(J,q,j){for(var ne=0;ne<q;ne++)for(var oe=0;oe<q;oe++)if(g(v(o(N(J[ne][oe]))),j))return!1;return!0}function H(J,q){for(var j=0;j<q;j++)for(var ne=0;ne<q;ne++)J[j][ne]=L(J[j][ne])}function W(J,q,j){var ne=J.datatype();if(ne==="number"||ne==="BigNumber"||ne==="Complex")return ne;for(var oe=!1,se=!1,pe=!1,fe=0;fe<j;fe++)for(var Ae=0;Ae<j;Ae++){var Z=q[fe][Ae];if(gt(Z)||xo(Z))oe=!0;else if(Tt(Z))se=!0;else if(_o(Z))pe=!0;else throw TypeError("Unsupported type in Matrix: "+er(Z))}if(se&&pe&&console.warn("Complex BigNumbers not supported, this operation will lose precission."),pe){for(var Se=0;Se<j;Se++)for(var de=0;de<j;de++)q[Se][de]=y(q[Se][de]);return"Complex"}if(se){for(var Ee=0;Ee<j;Ee++)for(var xe=0;xe<j;xe++)q[Ee][xe]=v(q[Ee][xe]);return"BigNumber"}if(oe){for(var Le=0;Le<j;Le++)for(var Te=0;Te<j;Te++)q[Le][Te]=A(q[Le][Te]);return"number"}else throw TypeError("Matrix contains unsupported types only.")}}),Bi=J_({config:Zt}),qa=tx({}),wo=ax({}),Do=ux({}),Jt=fx({Matrix:Do}),Be=e_({BigNumber:Bi,Complex:qa,DenseMatrix:Jt,Fraction:wo}),bo=Xx({typed:Be}),Tr=$x({typed:Be}),hM=ky({typed:Be}),To=Rx({BigNumber:Bi,typed:Be}),Co=Nx({Complex:qa,typed:Be}),$a=UE({typed:Be}),ar=Ex({config:Zt,typed:Be}),dM=OE({typed:Be}),pM=dx({typed:Be}),mM=mx({typed:Be}),Bf=vx({typed:Be}),mi=AE({typed:Be}),Fo=Tx({typed:Be}),gM=GE({typed:Be}),vM=bE({BigNumber:Bi,Fraction:wo,complex:Co,typed:Be}),_M=Yy({typed:Be}),Ya=Ax({Matrix:Do,equalScalar:ar,typed:Be}),xM=qy({typed:Be}),Ro=FE({Complex:qa,config:Zt,typed:Be}),Za=Wx({typed:Be}),Of=Bx({Fraction:wo,typed:Be}),ut=zx({DenseMatrix:Jt,Matrix:Do,SparseMatrix:Ya,typed:Be}),EM=hy({bignumber:To,fraction:Of,number:Fo}),zf=ry({matrix:ut,config:Zt,typed:Be}),_n=ay({matrix:ut,typed:Be}),yM=ly({BigNumber:Bi,config:Zt,matrix:ut,typed:Be}),Cr=VE({isInteger:pM,matrix:ut,typed:Be}),MM=oy({conj:$a,transpose:_n,typed:Be}),AM=YE({DenseMatrix:Jt,SparseMatrix:Ya,matrix:ut,typed:Be}),gi=py({numeric:EM,typed:Be}),Gf=My({DenseMatrix:Jt,concat:Cr,equalScalar:ar,matrix:ut,typed:Be}),nt=KE({matrix:ut,typed:Be}),Lo=QE({BigNumber:Bi,DenseMatrix:Jt,SparseMatrix:Ya,config:Zt,matrix:ut,typed:Be}),SM=Ny({DenseMatrix:Jt,concat:Cr,config:Zt,matrix:ut,typed:Be}),wM=Hx({flatten:nt,matrix:ut,size:zf,typed:Be}),Ka=wy({DenseMatrix:Jt,concat:Cr,config:Zt,matrix:ut,typed:Be}),Ja=Ky({DenseMatrix:Jt,SparseMatrix:Ya,addScalar:Tr,concat:Cr,equalScalar:ar,matrix:ut,typed:Be}),Po=eM({addScalar:Tr,conj:$a,multiplyScalar:mi,size:zf,typed:Be}),DM=Oy({DenseMatrix:Jt,smaller:Ka}),bM=Hy({ImmutableDenseMatrix:DM}),No=Ry({DenseMatrix:Jt,concat:Cr,config:Zt,matrix:ut,typed:Be}),Ut=wE({addScalar:Tr,dot:Po,equalScalar:ar,matrix:ut,multiplyScalar:mi,typed:Be}),TM=Ty({DenseMatrix:Jt,concat:Cr,config:Zt,matrix:ut,typed:Be}),Xt=LE({DenseMatrix:Jt,addScalar:Tr,concat:Cr,equalScalar:ar,matrix:ut,typed:Be,unaryMinus:Za}),CM=_y({DenseMatrix:Jt,divideScalar:gi,equalScalar:ar,matrix:ut,multiplyScalar:mi,subtract:Xt,typed:Be}),Na=qE({matrix:ut,multiply:Ut,subtract:Xt,typed:Be}),FM=iM({divideScalar:gi,isZero:Bf,matrix:ut,multiply:Ut,subtract:Xt,typed:Be,unaryMinus:Za}),RM=nM({addScalar:Tr,complex:Co,conj:$a,divideScalar:gi,equal:Gf,identity:Lo,isZero:Bf,matrix:ut,multiplyScalar:mi,sign:vM,sqrt:Ro,subtract:Xt,typed:Be,unaryMinus:Za,zeros:yM}),LM=ty({bignumber:To,matrix:ut,add:Ja,config:Zt,isPositive:mM,larger:No,largerEq:SM,smaller:Ka,smallerEq:TM,typed:Be}),PM=Ey({DenseMatrix:Jt,divideScalar:gi,equalScalar:ar,matrix:ut,multiplyScalar:mi,subtract:Xt,typed:Be}),at=kE({Index:bM,matrix:ut,range:LM,typed:Be}),Ia=sM({abs:bo,addScalar:Tr,det:FM,divideScalar:gi,identity:Lo,matrix:ut,multiply:Ut,typed:Be,unaryMinus:Za}),NM=gy({Complex:qa,config:Zt,fraction:Of,identity:Lo,inv:Ia,matrix:ut,multiply:Ut,number:Fo,typed:Be}),IM=fM({abs:bo,add:Ja,addScalar:Tr,atan:hM,bignumber:To,column:at,complex:Co,config:Zt,cos:xM,diag:AM,divideScalar:gi,dot:Po,equal:Gf,flatten:nt,im:dM,inv:Ia,larger:No,matrix:ut,matrixFromColumns:wM,multiply:Ut,multiplyScalar:mi,number:Fo,qr:RM,re:gM,sin:_M,smaller:Ka,sqrt:Ro,subtract:Xt,typed:Be,usolve:CM,usolveAll:PM}),ma=Qy({abs:bo,add:Ja,conj:$a,ctranspose:MM,eigs:IM,equalScalar:ar,larger:No,matrix:ut,multiply:Ut,pow:NM,smaller:Ka,sqrt:Ro,typed:Be});class UM{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},r={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let i='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const a=document.createElement("div");return a.id="webglmessage",a.style.fontFamily="monospace",a.style.fontSize="13px",a.style.fontWeight="normal",a.style.textAlign="center",a.style.background="#fff",a.style.color="#000",a.style.padding="1.5em",a.style.width="400px",a.style.margin="5em auto 0",r[e]?i=i.replace("$0","graphics card"):i=i.replace("$0","browser"),i=i.replace("$1",t[e]),a.innerHTML=i,a}}const ac=UM;/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Cn{constructor(e,t,r,i,a="div"){this.parent=e,this.object=t,this.property=r,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),Cn.nextNameID=Cn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Cn.nextNameID,this.$widget=document.createElement(a),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(r)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class BM extends Cn{constructor(e,t,r){super(e,t,r,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function oo(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const OM={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:oo,toHexString:oo},Ci={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},zM={isPrimitive:!1,match:Array.isArray,fromHexString(n,e,t=1){const r=Ci.fromHexString(n);e[0]=(r>>16&255)/255*t,e[1]=(r>>8&255)/255*t,e[2]=(255&r)/255*t},toHexString:([n,e,t],r=1)=>Ci.toHexString(n*(r=255/r)<<16^e*r<<8^t*r<<0)},GM={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const r=Ci.fromHexString(n);e.r=(r>>16&255)/255*t,e.g=(r>>8&255)/255*t,e.b=(255&r)/255*t},toHexString:({r:n,g:e,b:t},r=1)=>Ci.toHexString(n*(r=255/r)<<16^e*r<<8^t*r<<0)},HM=[OM,Ci,zM,GM];class VM extends Cn{constructor(e,t,r,i){var a;super(e,t,r,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(a=this.initialValue,HM.find(s=>s.match(a))),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=oo(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Os extends Cn{constructor(e,t,r){super(e,t,r,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class WM extends Cn{constructor(e,t,r,i,a,s){super(e,t,r,"number"),this._initInput(),this.min(i),this.max(a);const o=s!==void 0;this.step(o?s:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=l=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+l),this.$input.value=this.getValue())};let t,r,i,a,s,o=!1;const c=l=>{if(o){const u=l.clientX-t,h=l.clientY-r;Math.abs(h)>5?(l.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&f()}if(!o){const u=l.clientY-i;s-=u*this._step*this._arrowKeyMultiplier(l),a+s>this._max?s=this._max-a:a+s<this._min&&(s=this._min-a),this._snapClampSetValue(a+s)}i=l.clientY},f=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",f)};this.$input.addEventListener("input",()=>{let l=parseFloat(this.$input.value);isNaN(l)||(this._stepExplicit&&(l=this._snap(l)),this.setValue(this._clamp(l)))}),this.$input.addEventListener("keydown",l=>{l.code==="Enter"&&this.$input.blur(),l.code==="ArrowUp"&&(l.preventDefault(),e(this._step*this._arrowKeyMultiplier(l))),l.code==="ArrowDown"&&(l.preventDefault(),e(this._step*this._arrowKeyMultiplier(l)*-1))}),this.$input.addEventListener("wheel",l=>{this._inputFocused&&(l.preventDefault(),e(this._step*this._normalizeMouseWheel(l)))},{passive:!1}),this.$input.addEventListener("mousedown",l=>{t=l.clientX,r=i=l.clientY,o=!0,a=this.getValue(),s=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",f)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=h=>{const m=this.$slider.getBoundingClientRect();let v=(d=h,p=m.left,g=m.right,M=this._min,_=this._max,(d-p)/(g-p)*(_-M)+M);var d,p,g,M,_;this._snapClampSetValue(v)},t=h=>{e(h.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",r)};let i,a,s=!1;const o=h=>{h.preventDefault(),this._setDraggingStyle(!0),e(h.touches[0].clientX),s=!1},c=h=>{if(s){const m=h.touches[0].clientX-i,v=h.touches[0].clientY-a;Math.abs(m)>Math.abs(v)?o(h):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",f))}else h.preventDefault(),e(h.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",f)},l=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",h=>{this._setDraggingStyle(!0),e(h.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",r)}),this.$slider.addEventListener("touchstart",h=>{h.touches.length>1||(this._hasScrollBar?(i=h.touches[0].clientX,a=h.touches[0].clientY,s=!0):o(h),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",f))},{passive:!1}),this.$slider.addEventListener("wheel",h=>{if(Math.abs(h.deltaX)<Math.abs(h.deltaY)&&this._hasScrollBar)return;h.preventDefault();const m=this._normalizeMouseWheel(h)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(l,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:r}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,r=-e.wheelDelta/120,r*=this._stepExplicit?1:10),t+-r}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class kM extends Cn{constructor(e,t,r,i){super(e,t,r,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(a=>{const s=document.createElement("option");s.innerHTML=a,this.$select.appendChild(s)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class XM extends Cn{constructor(e,t,r){super(e,t,r,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let sc=!1;class Io{constructor({parent:e,autoPlace:t=e===void 0,container:r,width:i,title:a="Controls",injectStyles:s=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{c.code!=="Enter"&&c.code!=="Space"||(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(a),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!sc&&s&&(function(c){const f=document.createElement("style");f.innerHTML=c;const l=document.querySelector("head link[rel=stylesheet], head style");l?document.head.insertBefore(f,l):document.head.appendChild(f)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),sc=!0),r?r.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",c=>c.stopPropagation()),this.domElement.addEventListener("keyup",c=>c.stopPropagation())}add(e,t,r,i,a){if(Object(r)===r)return new kM(this,e,t,r);const s=e[t];switch(typeof s){case"number":return new WM(this,e,t,r,i,a);case"boolean":return new BM(this,e,t);case"string":return new XM(this,e,t);case"function":return new Os(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,s)}addColor(e,t,r=1){return new VM(this,e,t,r)}addFolder(e){return new Io({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(r=>{r instanceof Os||r._name in e.controllers&&r.load(e.controllers[r._name])}),t&&e.folders&&this.folders.forEach(r=>{r._title in e.folders&&r.load(e.folders[r._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(r=>{if(!(r instanceof Os)){if(r._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${r._name}"`);t.controllers[r._name]=r.save()}}),e&&this.folders.forEach(r=>{if(r._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${r._title}"`);t.folders[r._title]=r.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const r=a=>{a.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",r))};this.$children.addEventListener("transitionend",r);const i=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const oc={type:"change"},zs={type:"start"},uc={type:"end"};class qM extends Sr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Ir.ROTATE,TWO:Ir.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Re),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Re),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(oc),r.update(),a=i.NONE},this.update=function(){const C=new ee,Q=new Mr().setFromUnitVectors(e.up,new ee(0,1,0)),Y=Q.clone().invert(),k=new ee,ce=new Mr,ge=new ee,ae=2*Math.PI;return function(){const ye=r.object.position;C.copy(ye).sub(r.target),C.applyQuaternion(Q),o.setFromVector3(C),r.autoRotate&&a===i.NONE&&x(T()),r.enableDamping?(o.theta+=c.theta*r.dampingFactor,o.phi+=c.phi*r.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let Fe=r.minAzimuthAngle,Pe=r.maxAzimuthAngle;return isFinite(Fe)&&isFinite(Pe)&&(Fe<-Math.PI?Fe+=ae:Fe>Math.PI&&(Fe-=ae),Pe<-Math.PI?Pe+=ae:Pe>Math.PI&&(Pe-=ae),Fe<=Pe?o.theta=Math.max(Fe,Math.min(Pe,o.theta)):o.theta=o.theta>(Fe+Pe)/2?Math.max(Fe,o.theta):Math.min(Pe,o.theta)),o.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=f,o.radius=Math.max(r.minDistance,Math.min(r.maxDistance,o.radius)),r.enableDamping===!0?r.target.addScaledVector(l,r.dampingFactor):r.target.add(l),C.setFromSpherical(o),C.applyQuaternion(Y),ye.copy(r.target).add(C),r.object.lookAt(r.target),r.enableDamping===!0?(c.theta*=1-r.dampingFactor,c.phi*=1-r.dampingFactor,l.multiplyScalar(1-r.dampingFactor)):(c.set(0,0,0),l.set(0,0,0)),f=1,u||k.distanceToSquared(r.object.position)>s||8*(1-ce.dot(r.object.quaternion))>s||ge.distanceToSquared(r.target)>0?(r.dispatchEvent(oc),k.copy(r.object.position),ce.copy(r.object.quaternion),ge.copy(r.target),u=!1,!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",w),r.domElement.removeEventListener("pointerdown",de),r.domElement.removeEventListener("pointercancel",xe),r.domElement.removeEventListener("wheel",be),r.domElement.removeEventListener("pointermove",Ee),r.domElement.removeEventListener("pointerup",xe),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",Re),r._domElementKeyEvents=null)};const r=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const s=1e-6,o=new cl,c=new cl;let f=1;const l=new ee;let u=!1;const h=new Qe,m=new Qe,v=new Qe,d=new Qe,p=new Qe,g=new Qe,M=new Qe,_=new Qe,A=new Qe,y=[],D={};function T(){return 2*Math.PI/60/60*r.autoRotateSpeed}function b(){return Math.pow(.95,r.zoomSpeed)}function x(C){c.theta-=C}function E(C){c.phi-=C}const N=function(){const C=new ee;return function(Y,k){C.setFromMatrixColumn(k,0),C.multiplyScalar(-Y),l.add(C)}}(),L=function(){const C=new ee;return function(Y,k){r.screenSpacePanning===!0?C.setFromMatrixColumn(k,1):(C.setFromMatrixColumn(k,0),C.crossVectors(r.object.up,C)),C.multiplyScalar(Y),l.add(C)}}(),P=function(){const C=new ee;return function(Y,k){const ce=r.domElement;if(r.object.isPerspectiveCamera){const ge=r.object.position;C.copy(ge).sub(r.target);let ae=C.length();ae*=Math.tan(r.object.fov/2*Math.PI/180),N(2*Y*ae/ce.clientHeight,r.object.matrix),L(2*k*ae/ce.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(N(Y*(r.object.right-r.object.left)/r.object.zoom/ce.clientWidth,r.object.matrix),L(k*(r.object.top-r.object.bottom)/r.object.zoom/ce.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function I(C){r.object.isPerspectiveCamera?f/=C:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom*C)),r.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function z(C){r.object.isPerspectiveCamera?f*=C:r.object.isOrthographicCamera?(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/C)),r.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function O(C){h.set(C.clientX,C.clientY)}function R(C){M.set(C.clientX,C.clientY)}function G(C){d.set(C.clientX,C.clientY)}function X(C){m.set(C.clientX,C.clientY),v.subVectors(m,h).multiplyScalar(r.rotateSpeed);const Q=r.domElement;x(2*Math.PI*v.x/Q.clientHeight),E(2*Math.PI*v.y/Q.clientHeight),h.copy(m),r.update()}function U(C){_.set(C.clientX,C.clientY),A.subVectors(_,M),A.y>0?I(b()):A.y<0&&z(b()),M.copy(_),r.update()}function H(C){p.set(C.clientX,C.clientY),g.subVectors(p,d).multiplyScalar(r.panSpeed),P(g.x,g.y),d.copy(p),r.update()}function W(C){C.deltaY<0?z(b()):C.deltaY>0&&I(b()),r.update()}function J(C){let Q=!1;switch(C.code){case r.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?E(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):P(0,r.keyPanSpeed),Q=!0;break;case r.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?E(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):P(0,-r.keyPanSpeed),Q=!0;break;case r.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?x(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):P(r.keyPanSpeed,0),Q=!0;break;case r.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?x(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):P(-r.keyPanSpeed,0),Q=!0;break}Q&&(C.preventDefault(),r.update())}function q(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),Q=.5*(y[0].pageY+y[1].pageY);h.set(C,Q)}}function j(){if(y.length===1)d.set(y[0].pageX,y[0].pageY);else{const C=.5*(y[0].pageX+y[1].pageX),Q=.5*(y[0].pageY+y[1].pageY);d.set(C,Q)}}function ne(){const C=y[0].pageX-y[1].pageX,Q=y[0].pageY-y[1].pageY,Y=Math.sqrt(C*C+Q*Q);M.set(0,Y)}function oe(){r.enableZoom&&ne(),r.enablePan&&j()}function se(){r.enableZoom&&ne(),r.enableRotate&&q()}function pe(C){if(y.length==1)m.set(C.pageX,C.pageY);else{const Y=K(C),k=.5*(C.pageX+Y.x),ce=.5*(C.pageY+Y.y);m.set(k,ce)}v.subVectors(m,h).multiplyScalar(r.rotateSpeed);const Q=r.domElement;x(2*Math.PI*v.x/Q.clientHeight),E(2*Math.PI*v.y/Q.clientHeight),h.copy(m)}function fe(C){if(y.length===1)p.set(C.pageX,C.pageY);else{const Q=K(C),Y=.5*(C.pageX+Q.x),k=.5*(C.pageY+Q.y);p.set(Y,k)}g.subVectors(p,d).multiplyScalar(r.panSpeed),P(g.x,g.y),d.copy(p)}function Ae(C){const Q=K(C),Y=C.pageX-Q.x,k=C.pageY-Q.y,ce=Math.sqrt(Y*Y+k*k);_.set(0,ce),A.set(0,Math.pow(_.y/M.y,r.zoomSpeed)),I(A.y),M.copy(_)}function Z(C){r.enableZoom&&Ae(C),r.enablePan&&fe(C)}function Se(C){r.enableZoom&&Ae(C),r.enableRotate&&pe(C)}function de(C){r.enabled!==!1&&(y.length===0&&(r.domElement.setPointerCapture(C.pointerId),r.domElement.addEventListener("pointermove",Ee),r.domElement.addEventListener("pointerup",xe)),S(C),C.pointerType==="touch"?ke(C):Le(C))}function Ee(C){r.enabled!==!1&&(C.pointerType==="touch"?Xe(C):Te(C))}function xe(C){F(C),y.length===0&&(r.domElement.releasePointerCapture(C.pointerId),r.domElement.removeEventListener("pointermove",Ee),r.domElement.removeEventListener("pointerup",xe)),r.dispatchEvent(uc),a=i.NONE}function Le(C){let Q;switch(C.button){case 0:Q=r.mouseButtons.LEFT;break;case 1:Q=r.mouseButtons.MIDDLE;break;case 2:Q=r.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case Nr.DOLLY:if(r.enableZoom===!1)return;R(C),a=i.DOLLY;break;case Nr.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(r.enablePan===!1)return;G(C),a=i.PAN}else{if(r.enableRotate===!1)return;O(C),a=i.ROTATE}break;case Nr.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(r.enableRotate===!1)return;O(C),a=i.ROTATE}else{if(r.enablePan===!1)return;G(C),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&r.dispatchEvent(zs)}function Te(C){switch(a){case i.ROTATE:if(r.enableRotate===!1)return;X(C);break;case i.DOLLY:if(r.enableZoom===!1)return;U(C);break;case i.PAN:if(r.enablePan===!1)return;H(C);break}}function be(C){r.enabled===!1||r.enableZoom===!1||a!==i.NONE||(C.preventDefault(),r.dispatchEvent(zs),W(C),r.dispatchEvent(uc))}function Re(C){r.enabled===!1||r.enablePan===!1||J(C)}function ke(C){switch(V(C),y.length){case 1:switch(r.touches.ONE){case Ir.ROTATE:if(r.enableRotate===!1)return;q(),a=i.TOUCH_ROTATE;break;case Ir.PAN:if(r.enablePan===!1)return;j(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(r.touches.TWO){case Ir.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;oe(),a=i.TOUCH_DOLLY_PAN;break;case Ir.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;se(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&r.dispatchEvent(zs)}function Xe(C){switch(V(C),a){case i.TOUCH_ROTATE:if(r.enableRotate===!1)return;pe(C),r.update();break;case i.TOUCH_PAN:if(r.enablePan===!1)return;fe(C),r.update();break;case i.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;Z(C),r.update();break;case i.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;Se(C),r.update();break;default:a=i.NONE}}function w(C){r.enabled!==!1&&C.preventDefault()}function S(C){y.push(C)}function F(C){delete D[C.pointerId];for(let Q=0;Q<y.length;Q++)if(y[Q].pointerId==C.pointerId){y.splice(Q,1);return}}function V(C){let Q=D[C.pointerId];Q===void 0&&(Q=new Qe,D[C.pointerId]=Q),Q.set(C.pageX,C.pageY)}function K(C){const Q=C.pointerId===y[0].pointerId?y[1]:y[0];return D[Q.pointerId]}r.domElement.addEventListener("contextmenu",w),r.domElement.addEventListener("pointerdown",de),r.domElement.addEventListener("pointercancel",xe),r.domElement.addEventListener("wheel",be,{passive:!1}),this.update()}}const Uo=0,$M=1;let Er,kt,xn,yi,uo;const mt={v_num:1,showHelpers:!1,showText:!1,camera:Uo,drawFaces:!0,drawLines:!0,drawPoints:!1,drawIcoFaces:!1,drawIcoLines:!1,drawIcoPoints:!1,drawIcoNormals:!1,drawIcoPointOrder:!1},an=12;new je(16711680);new je(255);const lc=30;let lo=[],co=[];if(ac.isWebGLAvailable())YM(),Ua();else{const n=ac.getWebGLErrorMessage();document.getElementById("container").appendChild(n)}function YM(){xn=new Vc({antialias:!0}),xn.setPixelRatio(window.devicePixelRatio),xn.setSize(window.innerWidth,window.innerHeight),xn.useLegacyLights=!1,xn.localClippingEnabled=!0,document.body.contains(xn.domElement)&&document.body.removeChild(xn.domElement),document.body.appendChild(xn.domElement),kt=new qg,ZM();const n=new Io;n.add(mt,"camera",{perspective:Uo,orthographic:$M}).name("camera").onChange(rn),n.add(mt,"v_num",0,100).step(1).onChange(rn),uo=new Kg(5),n.add(mt,"showHelpers").name("show helpers").onChange(rn),n.add(mt,"showText").name("show text").onChange(rn),n.add(mt,"drawFaces").name("draw faces").onChange(rn),n.add(mt,"drawLines").name("draw lines").onChange(rn),n.add(mt,"drawPoints").name("draw points").onChange(rn),n.add(mt,"drawIcoFaces").name("draw icosahedron faces").onChange(rn),n.add(mt,"drawIcoLines").name("draw icosahedron lines").onChange(rn),n.add(mt,"drawIcoPoints").name("draw icosahedron points").onChange(rn),n.add(mt,"drawIcoNormals").name("draw icosahedron normals").onChange(rn),n.add(mt,"drawIcoPointOrder").name("draw icosahedron point order").onChange(rn),rn(),window.addEventListener("resize",KM)}function ZM(){const n=new ll(16777215,526344,4.5);n.position.set(-1.25,1,1.25),n.intensity=1.1;const e=new ll(16777215,526344,4.5);e.position.set(1.25,1,-1.25),e.intensity=.5,co.push(n),co.push(e)}function KM(){Er.aspect=window.innerWidth/window.innerHeight,Er.updateProjectionMatrix(),xn.setSize(window.innerWidth,window.innerHeight),Ua()}function rn(){const n=new fn(40,window.innerWidth/window.innerHeight,1,200),e=new Bc(window.innerWidth/-600,window.innerWidth/600,window.innerHeight/600,window.innerHeight/-600,1,200);Er=mt.camera===Uo?n:e,Er.position.set(-1.5,2.5,3),yi=new qM(Er,xn.domElement),yi.addEventListener("change",Ua),yi.minDistance=1,yi.maxDistance=10,yi.enablePan=!1,kt.children=[],co.forEach(t=>kt.add(t)),uo.visible=mt.showHelpers,kt.add(uo),JM(),Ua()}function Ua(){if(lo.length>0)for(let n=0;n<an;n++)lo[n].lookAt(Er.position);xn.render(kt,Er)}function JM(){var n=new Ks({vertexColors:!0,size:.1}),e=new Ot;const t=[1/2,(1+Math.sqrt(5))/4,0],r=[],i=[],a=new Float32Array(an*3),s=new Float32Array(an*3);for(let R=0;R<an;R++){let G,X,U;G=parseInt(R/4),X=G+1,U=X+1,G%=3,X%=3,U%=3;const H=-2*((R+0)/2%2>=1)+1,W=-2*((R+1)/2%2>=1)+1;let J=t[0]*H,q=t[1]*W,j=t[2],ne=[J,q,j];ne=Ut(ne,1/ma(ne));const oe=[ne[G],ne[X],ne[U]];a[R*3+0]=ne[G],a[R*3+1]=ne[X],a[R*3+2]=ne[U],r.push(new ee(oe[0],oe[1],oe[2]));const se=new je;se.setHSL(R/an,1,.5),s[R*3+0]=se.r,s[R*3+1]=se.g,s[R*3+2]=se.b,i.push(se)}e.setAttribute("position",new Mt(a,3)),e.setAttribute("color",new Mt(s,3));var o=new sl(e,n);if(mt.showText)for(let R=0;R<an;R++){const G=n1(R.toString(),"white");G.position.copy(r[R]),G.position.add(new ee(.05,.05,0)),kt.add(G),lo.push(G)}mt.drawIcoPoints&&kt.add(o);const c=new Di({vertexColors:!0}),f=new Ot,l=[],u=[],h=[],m=[],v=(R,G)=>{if(R===G)return;const X=[R,G].sort().toString();if(h.includes(X))throw new Error("Edge already exists");h.push([R,G].sort().toString()),m.push([R,G].sort()),l.push(new Zg(r[R],r[G])),u.push(i[R]),u.push(i[G])};for(let R=0;R<an;R++)v(R,(R+3)%an),R%2===0&&v(R,(R+4)%an),R%4===0&&v(R,(R+7)%an),R%4===1&&v(R,(R+1)%an),R%4===3&&(v(R,(R+2)%an),v(R,(R+6)%an));m.sort();const d=new Float32Array(lc*2*3),p=new Float32Array(lc*2*3);for(let R=0;R<l.length;R++){const G=l[R],X=u[R*2],U=u[R*2+1];d[R*2*3+0]=G.start.x,d[R*2*3+1]=G.start.y,d[R*2*3+2]=G.start.z,d[R*2*3+3]=G.end.x,d[R*2*3+4]=G.end.y,d[R*2*3+5]=G.end.z,p[R*2*3+0]=X.r,p[R*2*3+1]=X.g,p[R*2*3+2]=X.b,p[R*2*3+3]=U.r,p[R*2*3+4]=U.g,p[R*2*3+5]=U.b}f.setAttribute("position",new Mt(d,3)),f.setAttribute("color",new Mt(p,3));const g=new Zs(f,c),M=new vo(e,c);mt.drawIcoLines&&kt.add(g),mt.drawIcoPointOrder&&kt.add(M);const _=[];let A=[];for(let R=0;R<m.length;R++)for(let G=0;G<m.length;G++){if(R===G)continue;const X=m[R],U=m[G];let H=-1,W=[-1,-1];for(let q=0;q<2;q++)if((W[1]=U.indexOf(X[q]))!==-1){H=X[q],W[0]=X[(q+1)%2],W[1]=U[(W[1]+1)%2];break}if(W[0]===-1)continue;if(W.sort(),m.map(q=>q.toString()).indexOf(W.toString())!==-1){const q=[H,W[0],W[1]];if(q.sort(),A.indexOf(q.sort().toString())!==-1)continue;A.push(q.sort().toString()),_.push(q)}}_.sort(),_.forEach(R=>{const G=r[R[0]],X=r[R[1]],U=r[R[2]];G.x,G.y,G.z,X.x,X.y,X.z,U.x,U.y,U.z});const y=new Uint16Array(_.length);for(let R=0;R<_.length;R++)y[R*3]=_[R][0],y[R*3+1]=_[R][1],y[R*3+2]=_[R][2];const D=new ul({side:hn,vertexColors:!0});D.flatShading=!0,e.setIndex(_.flat());const T=new Sn(e,D);mt.drawIcoFaces&&kt.add(T);let b=_.map(R=>[r[R[0]],r[R[1]],r[R[2]]]);b=b.map(R=>R.map(G=>[G.x,G.y,G.z])),b=b.map(R=>_n(R));const x=b.map(R=>t1(R)),E=b.map(R=>r1(R));mt.drawIcoNormals&&b.forEach((R,G)=>i1(E[G],x[G],.1));const N=mt.v_num,L=e1(N),P=L.points,I=L.lines,z=L.triangles,O=_n([[0,0,0],[1,0,0],[1/2,Math.sqrt(3)/2,0]]);b.forEach((R,G)=>{const X=QM(O,R),U=P.map(F=>[...F,1]),H=I.map(F=>F.map(V=>[...V,1])),W=z.map(F=>F.map(V=>[...V,1]));let J=Ut(X,_n(U)),q=H.map(F=>Ut(X,_n(F))),j=W.map(F=>Ut(X,_n(F)));J=_n(J).map(F=>F.slice(0,3)),q=q.map(F=>_n(F).map(V=>V.slice(0,3))),j=j.map(F=>_n(F).map(V=>V.slice(0,3))),J=J.map(F=>Ut(F,1/ma(F)*1.0002)),q=q.map(F=>F.map(V=>Ut(V,1/ma(V)*1.0001))),j=j.map(F=>F.map(V=>Ut(V,1/ma(V))));const ne=(F,V=!0)=>{const K=Math.atan2(F[1],F[0]);let C=Math.acos(F[2]);isNaN(C)&&(C=1);const Q=K/(2*Math.PI)+.5,Y=V?C/Math.PI/4+.6:.5,k=.5,ce=new je;return ce.setHSL(Q,Y,k),[ce.r,ce.g,ce.b]};let oe=J.map(F=>ne(F,!1)),se=new Float32Array(oe.length*3);oe.forEach((F,V)=>{se[V*3+0]=F[0],se[V*3+1]=F[1],se[V*3+2]=F[2]});let pe=q.map(F=>F.map(V=>ne(V),!1)),fe=new Float32Array(pe.length*3*2);pe.forEach((F,V)=>{F.forEach((K,C)=>{fe[V*3*2+C*3+0]=K[0],fe[V*3*2+C*3+1]=K[1],fe[V*3*2+C*3+2]=K[2]})});let Ae=j.map(F=>F.map(V=>ne(V))),Z=new Float32Array(Ae.length*3*3);Ae.forEach((F,V)=>{F.forEach((K,C)=>{Z[V*3*3+C*3+0]=K[0],Z[V*3*3+C*3+1]=K[1],Z[V*3*3+C*3+2]=K[2]})});const Se=new Ks({vertexColors:!0,size:.1}),de=new Ot,Ee=new Float32Array(J.flat());de.setAttribute("position",new Mt(Ee,3)),de.setAttribute("color",new Mt(se,3));const xe=new sl(de,Se),Le=new Di({vertexColors:!0,linewidth:6}),Te=new Ot,be=new Float32Array(nt(q));Te.setAttribute("position",new Mt(be,3)),Te.setAttribute("color",new Mt(fe,3));const Re=new Zs(Te,Le),ke=new ul({side:hn,vertexColors:!0}),Xe=new Ot,w=new Float32Array(nt(j));Xe.setAttribute("position",new Mt(w,3)),Xe.setAttribute("color",new Mt(Z,3)),ke.flatShading=!0;const S=new Sn(Xe,ke);mt.drawFaces&&kt.add(S),mt.drawLines&&kt.add(Re),mt.drawPoints&&kt.add(xe)})}function QM(n,e){const t=_n([[...nt(at(n,0)),1],[...nt(at(n,1)),1],[...nt(at(n,2)),1],[...nt(Na(Xt(nt(at(n,2)),nt(at(n,0))),Xt(nt(at(n,1)),nt(at(n,0))))),0]]),r=_n([[...nt(at(e,0)),1],[...nt(at(e,1)),1],[...nt(at(e,2)),1],[...nt(Na(Xt(nt(at(e,2)),nt(at(e,0))),Xt(nt(at(e,1)),nt(at(e,0))))),0]]),i=Ia(t);return Ia(r),Ut(r,i)}function jM(n,e){const t=1/Math.sqrt(3),r=(e-n)/2/t;return[(n+e)/2,-r,0]}function e1(n){const e=[];for(let c=0;c<=n+1;c++){e.push([]);const f=e[c];for(let l=0;l<=n+1;l++){if(c<l)continue;const u=jM(c,l);f.push(Ut(u,1/(n+1)))}}const t=[],r=(c,f,l,u)=>{t.push([c,f,l])};for(let c=0;c<e.length-1;c++){const f=e[c],l=e[c+1];for(let u=0;u<l.length-1;u++)r(f[u],l[u],l[u+1]),c>u&&r(f[u],f[u+1],l[u+1])}const i=[],a=(c,f)=>{i.push([c,f])};for(let c=1;c<e.length;c++){const f=e[c];for(let u=0;u<f.length-1;u++)a(f[u],f[u+1]);const l=e[c-1];for(let u=0;u<l.length;u++)a(l[u],f[u]),a(l[u],f[u+1])}const s=[],o=c=>{s.push(c)};for(let c=0;c<e.length;c++){const f=e[c];for(let l=0;l<f.length;l++)o(f[l])}return{points:s,lines:i,triangles:t}}function t1(n){const e=Na(Xt(nt(at(n,2)),nt(at(n,0))),Xt(nt(at(n,1)),nt(at(n,0)))),t=Na(Xt(nt(at(n,1)),nt(at(n,0))),Xt(nt(at(n,2)),nt(at(n,0)))),r=nt(at(n,0));return Po(e,r)>0?e:t}function n1(n,e){const t=document.createElement("canvas"),r=t.getContext("2d");r.clearRect(0,0,t.width,t.height),r.font="50px Arial",r.fillStyle=e,r.fillText(n,t.width/2,t.height/2);const i=new $g(t),a=new mo({map:i,side:hn}),s=new za(1,.5);return new Sn(s,a)}function r1(n){return Ut(Ja(nt(at(n,0)),nt(at(n,1)),nt(at(n,2))),.3333333333333333)}function i1(n,e,t,r=16711680){const i=new ee(...n);let a=new ee(...e);a.normalize(),a.multiplyScalar(t);const s=i.clone().add(a),o=new Ot().setFromPoints([i,s]),c=new Di({color:r}),f=new vo(o,c);kt.add(f)}
