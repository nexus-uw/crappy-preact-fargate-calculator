!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/crappy-preact-fargate-calculator/",t(t.s="pwNi")}({"0c/n":function(e){e.exports={profile:"profile__1Z9cd"}},JkW7:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){function t(e,t){for(var n=[],o=e;o<=t;o++)n.push(o);return n}switch(e){case.25:return[.5,1,2];case.5:return t(1,3);case 1:return t(2,8);case 2:return t(4,16);case 4:return t(8,30);default:throw new Error("unexpected vcpu value: "+e)}}Object.defineProperty(t,"__esModule",{value:!0});var i=(n("rq4c"),n("lsE6"),n("KM04")),l=n("0c/n"),c=n.n(l),u=.5,s=.25,p=.0506*u+.0127*s,f=Object(i.h)("h1",null,"(a really crummy) Fargate Pricing Calculator"),_=Object(i.h)("label",null,"vpcu"),d=Object(i.h)("option",{value:"0.25"},"0.25"),h=Object(i.h)("option",{value:"0.5"},"0.5"),v=Object(i.h)("option",{selected:!0,value:"1"},"1"),m=Object(i.h)("option",{value:"2"},"2"),b=Object(i.h)("option",{value:"4"},"4"),y=Object(i.h)("label",null,"ram (GB)"),g=Object(i.h)("hr",null),C=Object(i.h)("div",null,Object(i.h)("a",{href:"https://aws.amazon.com/fargate/pricing/"},"aws fargate pricing")),w=Object(i.h)("div",null,"note: these prices are from Dec 10 2017 for us-east-1"),x=Object(i.h)("div",null," source code available at ",Object(i.h)("a",{href:"https://github.com/nexus-uw/crappy-preact-fargate-calculator"},"nexus-uw/crappy-preact-fargate-calculator")),O=Object(i.h)("img",{src:"assets/709.png"}),j=Object(i.h)("footer",null),N=function(e){function t(){for(var t,n,r,i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return t=n=o(this,e.call.apply(e,[this].concat(l))),n.state={time:Date.now(),count:10,vcpu:s,ram:u,cost:p,rams:a(s)},n.updateCost=function(){n.setState({cost:.0506*n.state.ram+.0127*n.state.vcpu})},n.handleVcpuChange=function(e){var t=a(parseFloat(e.target.value)),o=-1===t.indexOf(parseFloat(n.state.ram))?t[0]:n.state.ram;n.setState({vcpu:e.target.value,rams:t,ram:o}),n.updateCost()},n.handleRamChange=function(e){n.setState({ram:parseFloat(e.target.value)}),n.updateCost()},r=t,o(n,r)}return r(t,e),t.prototype.render=function(){return Object(i.h)("div",{id:"app",class:c.a.profile},f,Object(i.h)("div",null,_,Object(i.h)("select",{value:this.state.vcpu,onChange:this.handleVcpuChange},d,h,v,m,b)),Object(i.h)("div",null,y,Object(i.h)("select",{value:this.state.ram,onChange:this.handleRamChange},this.state.rams.map(function(e){return Object(i.h)("option",{key:e,value:e},e)}))),Object(i.h)("div",null," ",Object(i.h)("h3",null,"cost ~$",this.state.cost.toFixed(4)," per hour ")),g,C,w,x,O,j)},t}(i.Component);t.default=N},KM04:function(e){!function(){"use strict";function t(){}function n(e,n){var o,r,a,i,l=P;for(i=arguments.length;i-- >2;)W.push(arguments[i]);for(n&&null!=n.children&&(W.length||W.push(n.children),delete n.children);W.length;)if((r=W.pop())&&void 0!==r.pop)for(i=r.length;i--;)W.push(r[i]);else"boolean"==typeof r&&(r=null),(a="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r+="":"string"!=typeof r&&(a=!1)),a&&o?l[l.length-1]+=r:l===P?l=[r]:l.push(r),o=a;var c=new t;return c.nodeName=e,c.children=l,c.attributes=null==n?void 0:n,c.key=null==n?void 0:n.key,void 0!==E.vnode&&E.vnode(c),c}function o(e,t){for(var n in t)e[n]=t[n];return e}function r(e,t){return n(e.nodeName,o(o({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}function a(e){!e.__d&&(e.__d=!0)&&1==V.push(e)&&(E.debounceRendering||T)(i)}function i(){var e,t=V;for(V=[];e=t.pop();)e.__d&&N(e)}function l(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function u(e){var t=o({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function s(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function p(e){var t=e.parentNode;t&&t.removeChild(e)}function f(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var a in n)a in o||(e.style[a]="");for(var a in o)e.style[a]="number"==typeof o[a]&&!1===L.test(a)?o[a]+"px":o[a]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,d,i):e.removeEventListener(t,d,i),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e)_(e,t,null==o?"":o),null!=o&&!1!==o||e.removeAttribute(t);else{var l=r&&t!==(t=t.replace(/^xlink\:?/,""));null==o||!1===o?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function _(e,t,n){try{e[t]=n}catch(e){}}function d(e){return this.__l[e.type](E.event&&E.event(e)||e)}function h(){for(var e;e=A.pop();)E.afterMount&&E.afterMount(e),e.componentDidMount&&e.componentDidMount()}function v(e,t,n,o,r,a){D++||(R=null!=r&&void 0!==r.ownerSVGElement,F=null!=e&&!("__preactattr_"in e));var i=m(e,t,n,o,a);return r&&i.parentNode!==r&&r.appendChild(i),--D||(F=!1,a||h()),i}function m(e,t,n,o,r){var a=e,i=R;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),y(e,!0))),a.__preactattr_=!0,a;var l=t.nodeName;if("function"==typeof l)return k(e,t,n,o);if(R="svg"===l||"foreignObject"!==l&&R,l+="",(!e||!c(e,l))&&(a=s(l,R),e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),y(e,!0)}var u=a.firstChild,p=a.__preactattr_,f=t.children;if(null==p){p=a.__preactattr_={};for(var _=a.attributes,d=_.length;d--;)p[_[d].name]=_[d].value}return!F&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&b(a,f,n,o,F||null!=p.dangerouslySetInnerHTML),C(a,t.attributes,p),R=i,a}function b(e,t,n,o,r){var a,i,c,u,s,f=e.childNodes,_=[],d={},h=0,v=0,b=f.length,g=0,C=t?t.length:0;if(0!==b)for(var w=0;w<b;w++){var x=f[w],O=x.__preactattr_,j=C&&O?x._component?x._component.__k:O.key:null;null!=j?(h++,d[j]=x):(O||(void 0!==x.splitText?!r||x.nodeValue.trim():r))&&(_[g++]=x)}if(0!==C)for(var w=0;w<C;w++){u=t[w],s=null;var j=u.key;if(null!=j)h&&void 0!==d[j]&&(s=d[j],d[j]=void 0,h--);else if(!s&&v<g)for(a=v;a<g;a++)if(void 0!==_[a]&&l(i=_[a],u,r)){s=i,_[a]=void 0,a===g-1&&g--,a===v&&v++;break}s=m(s,u,n,o),c=f[w],s&&s!==e&&s!==c&&(null==c?e.appendChild(s):s===c.nextSibling?p(c):e.insertBefore(s,c))}if(h)for(var w in d)void 0!==d[w]&&y(d[w],!1);for(;v<=g;)void 0!==(s=_[g--])&&y(s,!1)}function y(e,t){var n=e._component;n?M(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||p(e),g(e))}function g(e){for(e=e.lastChild;e;){var t=e.previousSibling;y(e,!0),e=t}}function C(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||f(e,o,n[o],n[o]=void 0,R);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||f(e,o,n[o],n[o]=t[o],R)}function w(e){var t=e.constructor.name;(H[t]||(H[t]=[])).push(e)}function x(e,t,n){var o,r=H[e.name];if(e.prototype&&e.prototype.render?(o=new e(t,n),S.call(o,t,n)):(o=new S(t,n),o.constructor=e,o.render=O),r)for(var a=r.length;a--;)if(r[a].constructor===e){o.__b=r[a].__b,r.splice(a,1);break}return o}function O(e,t,n){return this.constructor(e,n)}function j(e,t,n,o,r){e.__x||(e.__x=!0,(e.__r=t.ref)&&delete t.ref,(e.__k=t.key)&&delete t.key,!e.base||r?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===E.syncComponentUpdates&&e.base?a(e):N(e,1,r)),e.__r&&e.__r(e))}function N(e,t,n,r){if(!e.__x){var a,i,l,c=e.props,s=e.state,p=e.context,f=e.__p||c,_=e.__s||s,d=e.__c||p,m=e.base,b=e.__b,g=m||b,C=e._component,w=!1;if(m&&(e.props=f,e.state=_,e.context=d,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,s,p)?w=!0:e.componentWillUpdate&&e.componentWillUpdate(c,s,p),e.props=c,e.state=s,e.context=p),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!w){a=e.render(c,s,p),e.getChildContext&&(p=o(o({},p),e.getChildContext()));var O,k,S=a&&a.nodeName;if("function"==typeof S){var U=u(a);i=C,i&&i.constructor===S&&U.key==i.__k?j(i,U,1,p,!1):(O=i,e._component=i=x(S,U,p),i.__b=i.__b||b,i.__u=e,j(i,U,0,p,!1),N(i,1,n,!0)),k=i.base}else l=g,O=C,O&&(l=e._component=null),(g||1===t)&&(l&&(l._component=null),k=v(l,a,p,n||!m,g&&g.parentNode,!0));if(g&&k!==g&&i!==C){var W=g.parentNode;W&&k!==W&&(W.replaceChild(k,g),O||(g._component=null,y(g,!1)))}if(O&&M(O),e.base=k,k&&!r){for(var P=e,T=e;T=T.__u;)(P=T).base=k;k._component=P,k._componentConstructor=P.constructor}}if(!m||n?A.unshift(e):w||(e.componentDidUpdate&&e.componentDidUpdate(f,_,d),E.afterUpdate&&E.afterUpdate(e)),null!=e.__h)for(;e.__h.length;)e.__h.pop().call(e);D||r||h()}}function k(e,t,n,o){for(var r=e&&e._component,a=r,i=e,l=r&&e._componentConstructor===t.nodeName,c=l,s=u(t);r&&!c&&(r=r.__u);)c=r.constructor===t.nodeName;return r&&c&&(!o||r._component)?(j(r,s,3,n,o),e=r.base):(a&&!l&&(M(a),e=i=null),r=x(t.nodeName,s,n),e&&!r.__b&&(r.__b=e,i=null),j(r,s,1,n,o),e=r.base,i&&e!==i&&(i._component=null,y(i,!1))),e}function M(e){E.beforeUnmount&&E.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?M(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,p(t),w(e),g(t)),e.__r&&e.__r(null)}function S(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{}}function U(e,t,n){return v(n,e,{},!1,t,!1)}var E={},W=[],P=[],T="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,L=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,V=[],A=[],D=0,R=!1,F=!1,H={};o(S.prototype,{setState:function(e,t){var n=this.state;this.__s||(this.__s=o({},n)),o(n,"function"==typeof e?e(n,this.props):e),t&&(this.__h=this.__h||[]).push(t),a(this)},forceUpdate:function(e){e&&(this.__h=this.__h||[]).push(e),N(this,2)},render:function(){}});var J={h:n,createElement:n,cloneElement:r,Component:S,render:U,rerender:i,options:E};e.exports=J}()},lsE6:function(){},pwNi:function(e,t,n){"use strict";var o=n("KM04");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var a=document.body.firstElementChild,i=function(){var e=r(n("JkW7"));a=(0,o.render)((0,o.h)(e),document.body,a)};i()}},rq4c:function(){}});
//# sourceMappingURL=bundle.91bb3.js.map