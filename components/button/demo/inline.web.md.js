webpackJsonp([92,158],{13:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function p(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a["default"]=n,a}function e(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function o(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}function c(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function l(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function u(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):e(n,a))}function i(n){return"string"==typeof n}function k(n){return i(n.type)&&j(n.props.children)?m.cloneElement(n,{},n.props.children.split("").join(" ")):i(n)?(j(n)&&(n=n.split("").join(" ")),m.createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var r=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},g=function(){function n(n,a){var s=[],t=!0,p=!1,e=void 0;try{for(var o,c=n[Symbol.iterator]();!(t=(o=c.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(l){p=!0,e=l}finally{try{!t&&c["return"]&&c["return"]()}finally{if(p)throw e}}return s}return function(a,s){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=s(1),m=p(d),f=s(2),y=t(f),h=s(19),v=t(h),b=s(21),w=t(b),E=/^[\u4e00-\u9fa5]{2}$/,j=E.test.bind(E),C=function(n){function a(){c(this,a);for(var s=arguments.length,t=Array(s),p=0;p<s;p++)t[p]=arguments[p];var e=l(this,n.call.apply(n,[this].concat(t)));return e.onClick=function(){e.props.onClick(e)},e}return u(a,n),a.prototype.render=function(){var n,a=(0,w["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),s=g(a,2),t=s[0],p=t.children,e=t.className,c=t.prefixCls,l=t.type,u=t.size,i=t.ghost,d=t.inline,f=t.disabled,h=t.htmlType,b=t.icon,E=t.loading,j=s[1],C=(0,y["default"])((n={},o(n,e,e),o(n,c,!0),o(n,c+"-primary","primary"===l),o(n,c+"-ghost",i),o(n,c+"-warning","warning"===l),o(n,c+"-small","small"===u&&d),o(n,c+"-loading",E),o(n,c+"-inline",d),o(n,c+"-disabled",f),n)),O=E?"loading":b,P=m.Children.map(p,k);return m.createElement("button",r({},j,{type:h||"button",className:C,disabled:f,onClick:this.onClick}),O?m.createElement(v["default"],{type:O}):null,P)},a}(m.Component);a["default"]=C,C.propTypes={prefixCls:d.PropTypes.string,type:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),ghost:d.PropTypes.bool,inline:d.PropTypes.bool,disabled:d.PropTypes.bool,loading:d.PropTypes.bool,icon:d.PropTypes.bool,onClick:d.PropTypes.func},C.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=a["default"]},17:function(n,a,s){"use strict";s(5),s(18)},18:function(n,a){},696:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(17),s(13)),e=t(p),o=(s(92),s(91)),c=t(o),l=s(1),u=t(l),i=s(4);t(i);n.exports={content:[["p","\u652f\u6301\u5927\u5c0f\u4e24\u79cd\u5c3a\u5bf8\u3002"],["p","\u652f\u6301\u662f\u5426\u662f\u884c\u5185\u6309\u94ae\u3002"]],meta:{order:3,title:"\u5c3a\u5bf8/size\u3001\u884c\u5185\u6309\u94ae/inline",filename:"components/button/demo/inline.web.md",id:"components-button-demo-inline.web"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// \u6b64\u5904\u7528\u4f5cdemo\u5c55\u793a\uff0c\u4e0d\u8981\u7528\u5728\u751f\u4ea7\u73af\u5883</span>\n<span class="token keyword" >this</span><span class="token punctuation" >.</span>customNavFlag <span class="token operator" >=</span> <span class="token boolean" >true</span><span class="token punctuation" >;</span>\n\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Button<span class="token punctuation" >,</span> NavBar <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> ButtonExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      dark<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >switchDark</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> dark<span class="token punctuation" >:</span> <span class="token operator" >!</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>dark <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>button-container<span class="token punctuation" >"</span></span>\n        <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> backgroundColor<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>dark <span class="token operator" >?</span> <span class="token string" >\'black\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'white\'</span><span class="token punctuation" >,</span> height<span class="token punctuation" >:</span> <span class="token string" >\'100%\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n      <span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NavBar</span> <span class="token attr-name" >iconName</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >rightContent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token operator" >&lt;</span>span\n          style<span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> cursor<span class="token punctuation" >:</span> <span class="token string" >\'pointer\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>switchDark<span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>dark <span class="token operator" >?</span> <span class="token string" >\'\u767d\u5929\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'\u591c\u95f4\'</span><span class="token punctuation" >}</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n          \u5c3a\u5bf8<span class="token operator" >/</span>\u884c\u5185\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NavBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'0 8px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-p<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e3b\u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>primary \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >inline</span><span class="token punctuation" >></span></span>inline<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >inline</span><span class="token punctuation" >></span></span>inline<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'32px 0\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-p<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u6b21\u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span><span class="token keyword" >default</span> \u6309\u94ae<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> height<span class="token punctuation" >:</span> <span class="token number" >8</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >inline</span><span class="token punctuation" >></span></span>inline<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span><span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>small<span class="token punctuation" >"</span></span> <span class="token attr-name" >inline</span><span class="token punctuation" >></span></span>inline<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ButtonExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){this.customNavFlag=!0;var n=u["default"].createClass({displayName:"ButtonExample",getInitialState:function(){return{dark:!1}},switchDark:function(){this.setState({dark:!this.state.dark})},render:function(){return u["default"].createElement("div",{className:"button-container",style:{backgroundColor:this.state.dark?"black":"white",height:"100%"}},u["default"].createElement(c["default"],{iconName:!1,rightContent:u["default"].createElement("span",{style:{cursor:"pointer"},onClick:this.switchDark},this.state.dark?"\u767d\u5929":"\u591c\u95f4")},"\u5c3a\u5bf8/\u884c\u5185"),u["default"].createElement("div",{style:{margin:"0 8px"}},u["default"].createElement("div",{style:{margin:"32px 0"}},u["default"].createElement("p",{className:"demo-p"},"\u4e3b\u6309\u94ae"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{type:"primary"},"primary \u6309\u94ae"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{type:"primary",inline:!0},"inline"),"\xa0",u["default"].createElement(e["default"],{type:"primary",size:"small",inline:!0},"inline")),u["default"].createElement("div",{style:{margin:"32px 0"}},u["default"].createElement("p",{className:"demo-p"},"\u6b21\u6309\u94ae"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],null,"default \u6309\u94ae"),u["default"].createElement("div",{style:{height:8}}),u["default"].createElement(e["default"],{inline:!0},"inline"),"\xa0",u["default"].createElement(e["default"],{size:"small",inline:!0},"inline"))))}});return u["default"].createElement(n,null)}}}});