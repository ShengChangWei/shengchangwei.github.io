webpackJsonp([28,32],{2:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b.Mark=void 0;var d=c(7),e=function(g){return g&&g.__esModule?g:{default:g}}(d);b.Mark=e.default},3:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var c=function(e){var f=document.createElement('div');return f.innerHTML=e,f.innerText||f.textContent};b.default={data:function(){return{mark:''}},ready:function(){this.mark=window.marked(c(this.$el.getElementsByClassName('ex-mark-text')[0].innerHTML))}}},4:function(a,b,c){b=a.exports=c(9)(),b.push([a.id,'\r\n.ex-mark-text {\r\n    display: none;\r\n}\r\n.marked p{\r\n    max-width: 40rem;\r\n}\r\n.marked code {\r\n    background: #f7f7f7;\r\n    color: #FF5722;\r\n}\r\n.marked pre code {\r\n    display: block;\r\n    background: #f7f7f7;\r\n    padding: 1rem;\r\n    color: #999;\r\n    font-size: .8rem;\r\n    line-height: 1.2;\r\n    overflow-x: auto;\r\n}\r\n.marked pre {\r\n    line-height: 1.5em;\r\n    margin: 1rem 0;\r\n}\r\n.marked {\r\n    font-size: .9rem;\r\n    line-height: 1.8;\r\n    color: #666;\r\n    max-width: 40rem;\r\n}\r\n.marked h1 {\r\n    font-size: 1.6rem;\r\n}\r\n.marked h2 {\r\n    font-size: 1.2rem;\r\n    position: relative;\r\n}\r\n.marked h3 {\r\n    position: relative;\r\n}\r\n.marked h3::before {\r\n    content: "#";\r\n    color: #00BCD4;\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    margin-right: .5rem;\r\n}\r\n.marked blockquote {\r\n    position: relative;\r\n    font-size: 90%;\r\n    color: #404040;\r\n    border-left: 4px solid #67cdfb;\r\n    padding-left: .8em;\r\n    margin: 1em 0;\r\n    background: #f8f8f8;\r\n    padding: 1rem;\r\n}\r\n.marked blockquote p {\r\n    margin: 0;\r\n}\r\n.marked blockquote::before {\r\n    position: absolute;\r\n    top: 14px;\r\n    left: -12px;\r\n    background-color: #67cdfb;\r\n    color: #fff;\r\n    content: "?";\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 100%;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\r\n    font-size: 14px;\r\n}\r\n.marked ul, ol {\r\n    padding: 0 2rem;\r\n    list-style: inherit;\r\n}\r\n.marked table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    text-align: left;\r\n    border-radius: 6px;\r\n}\r\n.marked thead {\r\n    background: #e0f5ff;\r\n}\r\n.marked th {\r\n    color: rgba(0,0,0,.870588);\r\n    height: 3rem;\r\n    border-bottom: 1px solid #e9e9e9;\r\n}\r\n.marked tr > td:first-child, .marked tr > th:first-child {\r\n    padding-left: .5rem\r\n}\r\n.marked tr > td:last-child, .marked tr > th:last-child {\r\n    padding-right: .5rem\r\n}\r\n.marked tr > td {\r\n    height: 2rem;\r\n    line-height: 1rem;\r\n    border-bottom: 1px solid #ececec;\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .ex-card {\r\n        margin: 0;\r\n    }\r\n}\r\n','',{version:3,sources:['/./docs/views/mark.vue'],names:[],mappings:';AACA;IACI,cAAc;CACjB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,oBAAoB;IACpB,eAAe;CAClB;AACD;IACI,eAAe;IACf,oBAAoB;IACpB,cAAc;IACd,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,mBAAmB;IACnB,eAAe;CAClB;AACD;IACI,iBAAiB;IACjB,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;CACpB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,kBAAkB;IAClB,mBAAmB;CACtB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,oBAAoB;CACvB;AACD;IACI,mBAAmB;IACnB,eAAe;IACf,eAAe;IACf,+BAA+B;IAC/B,mBAAmB;IACnB,cAAc;IACd,oBAAoB;IACpB,cAAc;CACjB;AACD;IACI,UAAU;CACb;AACD;IACI,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,0BAA0B;IAC1B,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,6EAA6E;IAC7E,gBAAgB;CACnB;AACD;IACI,gBAAgB;IAChB,oBAAoB;CACvB;AACD;IACI,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,2BAA2B;IAC3B,aAAa;IACb,iCAAiC;CACpC;AACD;IACI,mBAAmB;CACtB;AACD;IACI,oBAAoB;CACvB;AACD;IACI,aAAa;IACb,kBAAkB;IAClB,iCAAiC;CACpC;AACD;IACI;QACI,UAAU;KACb;CACJ',file:'mark.vue',sourcesContent:['\r\n.ex-mark-text {\r\n    display: none;\r\n}\r\n.marked p{\r\n    max-width: 40rem;\r\n}\r\n.marked code {\r\n    background: #f7f7f7;\r\n    color: #FF5722;\r\n}\r\n.marked pre code {\r\n    display: block;\r\n    background: #f7f7f7;\r\n    padding: 1rem;\r\n    color: #999;\r\n    font-size: .8rem;\r\n    line-height: 1.2;\r\n    overflow-x: auto;\r\n}\r\n.marked pre {\r\n    line-height: 1.5em;\r\n    margin: 1rem 0;\r\n}\r\n.marked {\r\n    font-size: .9rem;\r\n    line-height: 1.8;\r\n    color: #666;\r\n    max-width: 40rem;\r\n}\r\n.marked h1 {\r\n    font-size: 1.6rem;\r\n}\r\n.marked h2 {\r\n    font-size: 1.2rem;\r\n    position: relative;\r\n}\r\n.marked h3 {\r\n    position: relative;\r\n}\r\n.marked h3::before {\r\n    content: "#";\r\n    color: #00BCD4;\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    margin-right: .5rem;\r\n}\r\n.marked blockquote {\r\n    position: relative;\r\n    font-size: 90%;\r\n    color: #404040;\r\n    border-left: 4px solid #67cdfb;\r\n    padding-left: .8em;\r\n    margin: 1em 0;\r\n    background: #f8f8f8;\r\n    padding: 1rem;\r\n}\r\n.marked blockquote p {\r\n    margin: 0;\r\n}\r\n.marked blockquote::before {\r\n    position: absolute;\r\n    top: 14px;\r\n    left: -12px;\r\n    background-color: #67cdfb;\r\n    color: #fff;\r\n    content: "?";\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 100%;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    font-weight: bold;\r\n    font-family: \'Dosis\', \'Source Sans Pro\', \'Helvetica Neue\', Arial, sans-serif;\r\n    font-size: 14px;\r\n}\r\n.marked ul, ol {\r\n    padding: 0 2rem;\r\n    list-style: inherit;\r\n}\r\n.marked table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    text-align: left;\r\n    border-radius: 6px;\r\n}\r\n.marked thead {\r\n    background: #e0f5ff;\r\n}\r\n.marked th {\r\n    color: rgba(0,0,0,.870588);\r\n    height: 3rem;\r\n    border-bottom: 1px solid #e9e9e9;\r\n}\r\n.marked tr > td:first-child, .marked tr > th:first-child {\r\n    padding-left: .5rem\r\n}\r\n.marked tr > td:last-child, .marked tr > th:last-child {\r\n    padding-right: .5rem\r\n}\r\n.marked tr > td {\r\n    height: 2rem;\r\n    line-height: 1rem;\r\n    border-bottom: 1px solid #ececec;\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .ex-card {\r\n        margin: 0;\r\n    }\r\n}\r\n'],sourceRoot:'webpack://'}])},5:function(a,b,c){var d=c(4);'string'==typeof d&&(d=[[a.id,d,'']]);var e=c(10)(d,{});d.locals&&(a.exports=d.locals)},6:function(a,b){a.exports='\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<div class="marked">\n    <div>\n        {{{mark}}}\n    </div>\n    <slot></slot>\n</div>\n'},7:function(a,b,c){var d,e,f={};c(5),d=c(3),Object.keys(d).some(function(h){return'default'!==h&&'__esModule'!==h})&&console.warn('[vue-loader] docs\\views\\mark.vue: named exports in *.vue files are ignored.'),e=c(6),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default);var g='function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;e&&(g.template=e),g.computed||(g.computed={}),Object.keys(f).forEach(function(h){var i=f[h];g.computed[h]=function(){return i}})},371:function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(2);b.default={components:{Mark:d.Mark}}},648:function(a,b){a.exports='\r\n<div class="ex-content">\r\n    <div class="ex-card">\r\n    <mark>\r\n        <textarea class="ex-mark-text">\r\n> 1\u3001CSS3 \u65B0\u7279\u6027\u6709\u54EA\u4E9B\uFF1F\r\n\r\n1.\u989C\u8272\uFF1A\u65B0\u589E RGBA\uFF0CHSLA \u6A21\u5F0F<br>\r\n2.\u6587\u5B57\u9634\u5F71\uFF08text-shadow\uFF09<br>\r\n3.\u8FB9\u6846\uFF1A \u5706\u89D2\uFF08border-radius\uFF09 \u8FB9\u6846\u9634\u5F71\uFF1A box-shadow<br>\r\n4.\u76D2\u5B50\u6A21\u578B\uFF1Abox-sizing<br>\r\n5.\u80CC\u666F\uFF1Abackground-size \u8BBE\u7F6E\u80CC\u666F\u56FE\u7247\u7684\u5C3A\u5BF8 background-origin \u8BBE\u7F6E\u80CC\u666F\u56FE\u7247\u7684\r\n\u539F\u70B9 background-clip \u8BBE\u7F6E\u80CC\u666F\u56FE\u7247\u7684\u88C1\u5207\u533A\u57DF\uFF0C\u4EE5\u201D\uFF0C\u201D\u5206\u9694\u53EF\u4EE5\u8BBE\u7F6E\u591A\u80CC\u666F\uFF0C\u7528\u4E8E\r\n\u81EA\u9002\u5E94\u5E03\u5C40<br>\r\n6.\u6E10\u53D8\uFF1Alinear-gradient\u3001radial-gradient<br>\r\n7.\u8FC7\u6E21\uFF1Atransition\uFF0C\u53EF\u5B9E\u73B0\u52A8\u753B<br>\r\n8.\u81EA\u5B9A\u4E49\u52A8\u753B<br>\r\n9.\u5728 CSS3 \u4E2D\u552F\u4E00\u5F15\u5165\u7684\u4F2A\u5143\u7D20\u662F \uFF1Aselection. 10. \u5A92\u4F53\u67E5\u8BE2\uFF0C\u591A\u680F\u5E03\u5C40<br>\r\n11.border-image\r\n12.2D \u8F6C\u6362\uFF1Atransform\uFF1Atranslate(x\uFF0Cy) rotate(x\uFF0Cy) skew(x\uFF0Cy) scale(x\uFF0Cy)<br>\r\n13.3D \u8F6C\u6362\r\n\r\n> 2\u3001\u5BF9 BFC \u89C4\u8303\u7684\u7406\u89E3\u6709\u54EA\u4E9B\uFF1F\r\n\r\n* \u5B9A\u4E49\uFF1A<br>\r\n\r\nBFC(Block formatting context)\u76F4\u8BD1\u4E3A"\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587"\u3002\u5B83\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u6E32\u67D3\u533A\u57DF\uFF0C\r\n\u53EA\u6709 Block-level box \u53C2\u4E0E\uFF0C\u5B83\u89C4\u5B9A\u4E86\u5185\u90E8\u7684 Block-level Box \u5982\u4F55\u5E03\u5C40\uFF0C\u5E76\u4E14\u4E0E\u8FD9\u4E2A\u533A\u57DF\r\n\u5916\u90E8\u6BEB\u4E0D\u76F8\u5E72\u3002<br>\r\n\r\n* \u5E03\u5C40\u89C4\u5219\uFF1A<br>\r\n\r\nA. \u5185\u90E8\u7684 Box \u4F1A\u5728\u5782\u76F4\u65B9\u5411\uFF0C\u4E00\u4E2A\u63A5\u4E00\u4E2A\u5730\u653E\u7F6E\u3002<br>\r\nB. Box \u5782\u76F4\u65B9\u5411\u7684\u8DDD\u79BB\u7531 margin \u51B3\u5B9A\u3002\u5C5E\u4E8E\u540C\u4E00\u4E2A BFC \u7684\u4E24\u4E2A\u76F8\u90BB Box \u7684 margin \u4F1A\u53D1\r\n\u751F\u91CD\u53E0\u3002<br>\r\nC. \u6BCF\u4E2A\u5143\u7D20\u7684 margin box \u7684\u5DE6\u8FB9\uFF0C \u4E0E\u5305\u542B\u5757 border box \u7684\u5DE6\u8FB9\u76F8\u63A5\u89E6(\u5BF9\u4E8E\u4ECE\u5DE6\u5F80\u53F3\u7684\r\n\u683C\u5F0F\u5316\uFF0C\u5426\u5219\u76F8\u53CD)\u3002\u5373\u4F7F\u5B58\u5728\u6D6E\u52A8\u4E5F\u662F\u5982\u6B64\u3002<br>\r\nD. BFC \u7684\u533A\u57DF\u4E0D\u4F1A\u4E0E float box \u91CD\u53E0\u3002<br>\r\nE. BFC \u5C31\u662F\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u9694\u79BB\u7684\u72EC\u7ACB\u5BB9\u5668\uFF0C\u5BB9\u5668\u91CC\u9762\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u9762\u7684\u5143\u7D20\u3002\u53CD\r\n\u4E4B\u4E5F\u5982\u6B64\u3002<br>\r\nF. \u8BA1\u7B97 BFC \u7684\u9AD8\u5EA6\u65F6\uFF0C\u6D6E\u52A8\u5143\u7D20\u4E5F\u53C2\u4E0E\u8BA1\u7B97\u3002<br>\r\n\r\n* \u54EA\u4E9B\u5143\u7D20\u4F1A\u751F\u6210 BFC\uFF1A<br>\r\n\r\nA. \u6839\u5143\u7D20<br>\r\nB. float \u5C5E\u6027\u4E0D\u4E3A none<br>\r\nC. position \u4E3A absolute \u6216 fixed<br>\r\nD. display \u4E3A inline-block\uFF0C table-cell\uFF0C table-caption\uFF0C flex\uFF0C inline-flex<br>\r\nF. overflow \u4E0D\u4E3A visible\r\n\r\n> 3\u3001\u4EC0\u4E48\u662F CSS reset \u662F\u4EC0\u4E48\uFF1Fnormalize.css \u662F\u4EC0\u4E48\uFF1F\r\n\r\n- Reset \u91CD\u7F6E\u6D4F\u89C8\u5668\u7684 css \u9ED8\u8BA4\u5C5E\u6027 \uFF0C\u6D4F\u89C8\u5668\u7684\u54C1\u79CD\u4E0D\u540C\uFF0C\u6837\u5F0F\u4E0D\u540C\uFF0C\u7136\u540E\u91CD\u7F6E\uFF0C\u8BA9\u4ED6\u4EEC\u7EDF\r\n\u4E00\u3002\uFF08\u66B4\u529B\u7684\uFF0C\u5F3A\u5236\u7684\uFF09\r\n- Normalize.css \u662F css reset \u7684\u66FF\u4EE3\u65B9\u6848\uFF0C\u4FDD\u62A4\u6709\u7528\u7684\u6D4F\u89C8\u5668\u9ED8\u8BA4\u6837\u5F0F\u800C\u4E0D\u662F\u5B8C\u5168\u53BB\r\n\u6389\u5B83\u4EEC\uFF08\u6E29\u548C\u7684\uFF0C\u6839\u636E\u6D4F\u89C8\u5668\u7279\u6027\u7684\uFF09\r\n- \u4E00\u822C\u5316\u7684\u6837\u5F0F\uFF1A\u4E3A\u5927\u90E8\u5206 HTML \u5143\u7D20\u63D0\u4F9B\r\n- \u4FEE\u590D\u6D4F\u89C8\u5668\u81EA\u8EAB\u7684 bug \u5E76\u4FDD\u8BC1\u5404\u6D4F\u89C8\u5668\u7684\u4E00\u81F4\u6027\r\n- \u4F18\u5316 CSS \u53EF\u7528\u6027\uFF1A\u7528\u4E00\u4E9B\u5C0F\u6280\u5DE7\r\n- \u89E3\u91CA\u4EE3\u7801\uFF1A\u7528\u6CE8\u91CA\u548C\u8BE6\u7EC6\u7684\u6587\u6863\u6765\u3002\r\n\r\n> 4\u3001\u6E05\u9664\u6D6E\u52A8\u6709\u51E0\u79CD\u65B9\u5F0F?\r\n\r\n* \u7236\u7EA7 div \u5B9A\u4E49 height <br>\r\n\u539F\u7406\uFF1A\u7236\u7EA7 div \u624B\u52A8\u5B9A\u4E49 height\uFF0C\u5C31\u89E3\u51B3\u4E86\u7236\u7EA7 div \u65E0\u6CD5\u81EA\u52A8\u83B7\u53D6\u5230\u9AD8\u5EA6\u7684\u95EE\u9898\u3002 \u7B80\u5355\u3001\r\n\u4EE3\u7801\u5C11\u3001\u5BB9\u6613\u638C\u63E1 \uFF0C\u4F46\u53EA\u9002\u5408\u9AD8\u5EA6\u56FA\u5B9A\u7684\u5E03\u5C40\r\n- \u7ED3\u5C3E\u5904\u52A0\u7A7A div \u6807\u7B7E clear\uFF1Aboth<br>\r\n\u539F\u7406\uFF1A\u5728\u6D6E\u52A8\u5143\u7D20\u7684\u540E\u9762\u6DFB\u52A0\u4E00\u4E2A\u7A7A div \u5144\u5F1F\u5143\u7D20\uFF0C\u5229\u7528 css \u63D0\u9AD8\u7684 clear\uFF1Aboth \u6E05\u9664\u6D6E\u52A8\uFF0C\r\n\u8BA9\u7236\u7EA7 div \u80FD\u81EA\u52A8\u83B7\u53D6\u5230\u9AD8\u5EA6 \uFF0C\u5982\u679C\u9875\u9762\u6D6E\u52A8\u5E03\u5C40\u591A\uFF0C\u5C31\u8981\u589E\u52A0\u5F88\u591A\u7A7A div\uFF0C\u8BA9\u4EBA\u611F\u89C9\u5F88\r\n\u4E0D\u597D \r\n* \u7236\u7EA7 div \u5B9A\u4E49 \u4F2A\u7C7B\uFF1Aafter \u548C zoom <br>\r\n\u539F\u7406\uFF1AIE8 \u4EE5\u4E0A\u548C\u975E IE \u6D4F\u89C8\u5668\u624D\u652F\u6301\uFF1Aafter\uFF0C\u539F\u7406\u548C\u65B9\u6CD5 2 \u6709\u70B9\u7C7B\u4F3C\uFF0Czoom(IE \u4E13\u6709\u5C5E\u6027)\r\n\u53EF\u89E3\u51B3 ie6\uFF0Cie7 \u6D6E\u52A8\u95EE\u9898 \uFF0C\u63A8\u8350\u4F7F\u7528\uFF0C\u5EFA\u8BAE\u5B9A\u4E49\u516C\u5171\u7C7B\uFF0C\u4EE5\u51CF\u5C11 CSS \u4EE3\u7801\u3002<br>\r\n\u6E05\u9664\u6D6E\u52A8\u4EE3\u7801:\r\n```css\r\n.clearfix:after {\r\n    content: "";\r\n    display: block;\r\n    visibility: hidden;\r\n    height: 0;\r\n    line-height: 0;\r\n    clear: both;\r\n}\r\n.clearfix {zoom: 1}\r\n```\r\n- \u7236\u7EA7 div \u5B9A\u4E49 overflow\uFF1Ahidden <br>\r\n\u8D85\u51FA\u76D2\u5B50\u90E8\u5206\u4F1A\u88AB\u9690\u85CF\uFF0C\u4E0D\u63A8\u8350\u4F7F\u7528. \r\n- \u53CC\u4F2A\u5143\u7D20\u6CD5\uFF1A<br>\r\n\r\n```css\r\n    .clearfix:before,.clearfix:after {\r\n        content: "";\r\n        display: block;\r\n        clear: both;\r\n    }\r\n    .clearfix {\r\n        zoom: 1;\r\n    }\r\n```\r\n>  5\u3001\u8981\u4F60\u51FA\u4E00\u5957\u9002\u5E94\u4E0D\u540C\u5206\u8FA8\u7387\uFF0C\u4E0D\u540C\u7EC8\u7AEF\u7684\u524D\u7AEF\u5B9E\u73B0\u65B9\u6848\u4F60\u6709\u4EC0\u4E48\u601D\u8DEF\uFF1F\r\n\r\n- \u6D41\u5F0F\u5E03\u5C40\uFF1A\r\n\u4F7F\u7528\u975E\u56FA\u5B9A\u50CF\u7D20\u6765\u5B9A\u4E49\u7F51\u9875\u5185\u5BB9\uFF0C\u4E5F\u5C31\u662F\u767E\u5206\u6BD4\u5E03\u5C40\uFF0C\u901A\u8FC7\u76D2\u5B50\u7684\u5BBD\u5EA6\u8BBE\u7F6E\u6210\u767E\u5206\u6BD4\u6765\r\n\u6839\u636E\u5C4F\u5E55\u7684\u5BBD\u5EA6\u6765\u8FDB\u884C\u4F38\u7F29\uFF0C\u4E0D\u53D7\u56FA\u5B9A\u50CF\u7D20\u7684\u9650\u5236\uFF0C\u5185\u5BB9\u5411\u4E24\u4FA7\u586B\u5145\u3002\u8FD9\u6837\u7684\u5E03\u5C40\u65B9\u5F0F\uFF0C\u5C31\r\n\u662F\u79FB\u52A8 web \u5F00\u53D1\u4F7F\u7528\u7684\u5E38\u7528\u5E03\u5C40\u65B9\u5F0F\u3002\u8FD9\u6837\u7684\u5E03\u5C40\u53EF\u4EE5\u9002\u914D\u79FB\u52A8\u7AEF\u4E0D\u540C\u7684\u5206\u8FA8\u7387\u8BBE\u5907\u3002\r\n- \u54CD\u5E94\u5F0F\u5F00\u53D1\uFF1A\r\n\u90A3\u4E48 Ethan Marcotte \u5728 2010 \u5E74 5 \u6708\u4EFD\u63D0\u51FA\u7684\u4E00\u4E2A\u6982\u5FF5\uFF0C\u7B80\u800C\u8A00\u4E4B\uFF0C\u5C31\u662F\u4E00\u4E2A\u7F51\u7AD9\u80FD\r\n\u591F\u517C\u5BB9\u591A\u4E2A\u7EC8\u7AEF\u3002\u8D8A\u6765\u8D8A\u591A\u7684\u8BBE\u8BA1\u5E08\u4E5F\u91C7\u7528\u4E86\u8FD9\u79CD\u8BBE\u8BA1\u3002\r\nCSS3 \u4E2D\u7684 Media Query\uFF08\u5A92\u4ECB\u67E5\u8BE2\uFF09\uFF0C\u901A\u8FC7\u67E5\u8BE2 screen \u7684\u5BBD\u5EA6\u6765\u6307\u5B9A\u67D0\u4E2A\u5BBD\r\n\u5EA6\u533A\u95F4\u7684\u7F51\u9875\u5E03\u5C40\u3002\r\n\r\n<table>\r\n    <tr>\r\n        <td>\u8D85\u5C0F\u5C4F\u5E55\uFF08\u79FB\u52A8\u8BBE\u5907\uFF09</td>\r\n        <td>768px \u4EE5\u4E0B</td>\r\n    </tr>\r\n    <tr>\r\n        <td>\u5C0F\u5C4F\u8BBE\u5907</td>\r\n        <td>768px-992px</td>\r\n    </tr>\r\n    <tr>\r\n        <td>\u4E2D\u7B49\u5C4F\u5E55</td>\r\n        <td>992px-1200px</td>\r\n    </tr>\r\n    <tr>\r\n        <td>\u5BBD\u5C4F\u8BBE\u5907</td>\r\n        <td>1200px \u4EE5\u4E0A</td>\r\n    </tr>\r\n</table>\r\n\u7531\u4E8E\u54CD\u5E94\u5F0F\u5F00\u53D1\u663E\u5F97\u7E41\u7410\u4E9B\uFF0C\u4E00\u822C\u4F7F\u7528\u7B2C\u4E09\u65B9\u54CD\u5E94\u5F0F\u6846\u67B6\u6765\u5B8C\u6210\uFF0C\u6BD4\u5982 bootstrap \u6765\r\n\u5B8C\u6210\u4E00\u90E8\u5206\u5DE5\u4F5C\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u81EA\u5DF1\u5199\u54CD\u5E94\u5F0F\u3002\r\n> 6\u3001\u79FB\u52A8 WEB \u548C\u54CD\u5E94\u5F0F\u6709\u4EC0\u4E48\u5206\u522B\uFF1F\r\n\r\n| \u5F00\u53D1\u65B9\u5F0F        | \u79FB\u52A8web\u5F00\u53D1+PC\u5F00\u53D1 | \u54CD\u5E94\u5F0F\u5F00\u53D1  |\r\n| :------------- |:-------------|:--------------|\r\n| \u5E94\u7528\u573A\u666F\uFF1A      | \u4E00\u822C\u5728\u5DF2\u7ECF\u6709pc\u7AEF\u7684\u7F51\u7AD9\uFF0C\u5F00\u53D1\u79FB\u52A8\u7AD9\u7684\u65F6\u5019\uFF0C\u53EA\u9700\u5355\u72EC\u5F00\u53D1\u79FB\u52A8\u7AEF      | \u9488\u5BF9\u65B0\u5EFA\u7AD9\u7684\u4E00\u4E9B\u7F51\u7AD9\uFF0C\u73B0\u5728\u8981\u6C42\u9002\u914D\u79FB\u52A8\u7AEF\uFF0C\u6240\u4EE5\u5C31\u4E00\u5957\u9875\u9762\u517C\u5BB9\u5404\u79CD\u7EC8\u7AEF\uFF0C\u7075\u6D3B      |\r\n| \u5F00\u53D1\uFF1A      | \u9488\u5BF9\u6027\u5F3A\uFF0C\u5F00\u53D1\u6548\u7387\u9AD8\u3002       | \u517C\u5BB9\u5404\u79CD\u7EC8\u7AEF\uFF0C\u6548\u7387\u4F4E      |\r\n| \u9002\u914D:    | \u53EA\u9002\u914D\u79FB\u52A8\u8BBE\u5907\uFF0Cpad\u4E0A\u4F53\u9A8C\u76F8\u5BF9\u8F83\u5DEE       | \u53EF\u4EE5\u9002\u914D\u5404\u79CD\u7EC8\u7AEF    |\r\n| \u6548\u7387:    | \u4EE3\u7801\u7B80\u6D01\uFF0C\u52A0\u8F7D\u5757       | \u4EE3\u7801\u76F8\u5BF9\u590D\u6742\uFF0C\u52A0\u8F7D\u6162    |\r\n\r\n> 7\u3001px em rem \u53D6\u7528\u9009\u62E9\u4F9D\u636E\uFF1F\r\n\r\n- px \u50CF\u7D20\uFF08Pixel\uFF09\u3002\u7EDD\u5BF9\u5355\u4F4D\u3002\u50CF\u7D20 px \u662F\u76F8\u5BF9\u4E8E\u663E\u793A\u5668\u5C4F\u5E55\u5206\u8FA8\u7387\u800C\u8A00\u7684\uFF0C\u662F\u4E00\r\n\u4E2A\u865A\u62DF\u957F\u5EA6\u5355\u4F4D\uFF0C\u662F\u8BA1\u7B97\u673A\u7CFB\u7EDF\u7684\u6570\u5B57\u5316\u56FE\u50CF\u957F\u5EA6\u5355\u4F4D\uFF0C\u5982\u679C px \u8981\u6362\u7B97\u6210\u7269\u7406\u957F\u5EA6\uFF0C\u9700\u8981\r\n\u6307\u5B9A\u7CBE\u5EA6 DPI\u3002\r\n- em \u662F\u76F8\u5BF9\u957F\u5EA6\u5355\u4F4D\uFF0C\u76F8\u5BF9\u4E8E\u5F53\u524D\u5BF9\u8C61\u5185\u6587\u672C\u7684\u5B57\u4F53\u5C3A\u5BF8\u3002\u5982\u5F53\u524D\u5BF9\u884C\u5185\u6587\u672C\u7684\u5B57\r\n\u4F53\u5C3A\u5BF8\u672A\u88AB\u4EBA\u4E3A\u8BBE\u7F6E\uFF0C\u5219\u76F8\u5BF9\u4E8E\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u5B57\u4F53\u5C3A\u5BF8\u3002\u5B83\u4F1A\u7EE7\u627F\u7236\u7EA7\u5143\u7D20\u7684\u5B57\u4F53\u5927\u5C0F\uFF0C\u56E0\r\n\u6B64\u5E76\u4E0D\u662F\u4E00\u4E2A\u56FA\u5B9A\u7684\u503C\u3002\r\n- rem \u662F CSS3 \u65B0\u589E\u7684\u4E00\u4E2A\u76F8\u5BF9\u5355\u4F4D\uFF08root em\uFF0C\u6839 em\uFF09\uFF0C\u4F7F\u7528 rem \u4E3A\u5143\u7D20\u8BBE\u5B9A\u5B57\r\n\u4F53\u5927\u5C0F\u65F6\uFF0C\u4ECD\u7136\u662F\u76F8\u5BF9\u5927\u5C0F\uFF0C\u4F46\u76F8\u5BF9\u7684\u53EA\u662F HTML \u6839\u5143\u7D20\u3002\r\n- \u533A\u522B\uFF1AIE \u65E0\u6CD5\u8C03\u6574\u90A3\u4E9B\u4F7F\u7528 px \u4F5C\u4E3A\u5355\u4F4D\u7684\u5B57\u4F53\u5927\u5C0F\uFF0C\u800C em \u548C rem \u53EF\u4EE5\u7F29\u653E\uFF0Crem\r\n\u76F8\u5BF9\u7684\u53EA\u662F HTML \u6839\u5143\u7D20\u3002\u8FD9\u4E2A\u5355\u4F4D\u53EF\u8C13\u96C6\u76F8\u5BF9\u5927\u5C0F\u548C\u7EDD\u5BF9\u5927\u5C0F\u7684\u4F18\u70B9\u4E8E\u4E00\u8EAB\uFF0C\u901A\u8FC7\u5B83\u65E2\r\n\u53EF\u4EE5\u505A\u5230\u53EA\u4FEE\u6539\u6839\u5143\u7D20\u5C31\u6210\u6BD4\u4F8B\u5730\u8C03\u6574\u6240\u6709\u5B57\u4F53\u5927\u5C0F\uFF0C\u53C8\u53EF\u4EE5\u907F\u514D\u5B57\u4F53\u5927\u5C0F\u9010\u5C42\u590D\u5408\u7684\u8FDE\u9501\r\n\u53CD\u5E94\u3002\u76EE\u524D\uFF0C\u9664\u4E86 IE8 \u53CA\u66F4\u65E9\u7248\u672C\u5916\uFF0C\u6240\u6709\u6D4F\u89C8\u5668\u5747\u5DF2\u652F\u6301 rem\u3002\r\n\r\n>  8\u3001\u6C34\u5E73\u5782\u76F4\u5C45\u4E2D\u7684\u65B9\u5F0F\u6709\u51E0\u79CD\uFF1F\r\n\r\n```html\r\n<div class="parent">\r\n    <div class="child">Demo</div>\r\n</div>\r\n```\r\n- 1.absolute + transform\uFF1A\u7EDD\u5BF9\u5B9A\u4F4D\u52A0+\u8F6C\u6362<br>\r\n\r\n```CSS\r\n.parent {\r\n    position: relative;\r\n}\r\n.child {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n```\r\n- 2.inline-block + text-align + table-cell + vertical-align\uFF08\u5355\u5143\u683C\u65B9\u5F0F\uFF09<br>\r\n\r\n```css\r\n.parent {\r\n    display\uFF1Atable-cell;\r\n    text-align\uFF1Acenter;\r\n    vertical-align\uFF1Amiddle;\r\n}\r\n.child {\r\n    display\uFF1A inline-block;\r\n}\r\n```\r\n- 3.flex + justify-content + align-items\uFF08\u5F39\u6027\u6A21\u578B\uFF09\r\n\r\n```css\r\n.parent {\r\n    display\uFF1A flex;\r\n    justify-content\uFF1A center; /* \u6C34\u5E73\u5C45\u4E2D */\r\n    align-items\uFF1Acenter; /*\u5782\u76F4\u5C45\u4E2D*/\r\n}\r\n```\r\n> 9\u3001\u5982\u4F55\u5B9E\u73B0\u5355\u884C\u548C\u591A\u884C\u51FA\u73B0\u7701\u7565\u53F7?\r\n\r\n- \u5355\u884C\u51FA\u73B0\u7701\u7565\u53F7.....\r\n\r\n```css\r\np{\r\n\u3000//\u6CE8\u610F\u4E00\u5B9A\u8981\u8BBE\u7F6E\u5BBD\u5EA6\r\n  width:110px;\r\n  //\u5F3A\u5236\u6587\u5B57\u6362\u884C\r\n white-space:nowrap;\r\n //\u6EA2\u51FA\u9690\u85CF\r\n overflow:hidden;\r\n //\u51FA\u73B0\u7701\u7565\u53F7\r\n text-overflow:ellipsis;\r\n}\r\n```\r\n- \u591A\u884C\u51FA\u73B0\u7701\u7565\u53F7......\r\n\r\n```css\r\np{\r\n  //\u7C7B\u4F3C\u4E8Edisplay:flex;\r\n  display:-webkit-box;\r\n  //\u5782\u76F4\u7684\uFF0C\u7AD6\u7ACB\u7684\r\n  -webkit-box-orient:vertical;\r\n  //\u8BBE\u5B9A\u6587\u5B57\u663E\u793A\u51E0\u884C\r\n  -webkit-line-clamp:3;\r\n  //\u6EA2\u51FA\u9690\u85CF\r\n  overflow:hidden;\r\n}\r\n```\r\n> 10\u3001\u89E3\u91CA\u5723\u676F\u5E03\u5C40\u3001\u53CC\u98DE\u7FFC\u5E03\u5C40\u5B9E\u73B0\u4E09\u680F\u6C34\u5E73\u5E03\u5C40\r\n\r\n- \u8981\u6C42\uFF1A\u5141\u8BB8\u589E\u52A0\u989D\u5916\u7684DOM\u8282\u70B9\uFF0C\u4F46\u4E0D\u80FD\u4FEE\u6539\u73B0\u6709\u8282\u70B9\u987A\u5E8F\u3002\r\n\r\n```html\r\n<div class="container"> \r\n\u3000\u3000<div class="main">main</div> \r\n\u3000\u3000<div class="left">left</div> \r\n\u3000\u3000<div class="right">right</div> \r\n</div>\r\n```\r\n\r\n- \u65B9\u6CD5\u4E00\uFF1A\u5723\u676F\u5E03\u5C40\r\n\r\n```css\r\n.container {\r\n    padding: 0 300px 0 200px;\r\n}\r\n.left, .main, .right {\r\n    position: relative;\r\n    min-height: 130px;\r\n    float: left;\r\n}\r\n.left {\r\n    left: -200px;\r\n    margin-left: -100%;\r\n    background: green;\r\n    width: 200px;\r\n}\r\n.right {\r\n    right: -300px;\r\n    margin-left: -300px;\r\n    background-color: red;\r\n    width: 300px;\r\n}\r\n.main {\r\n    background-color: blue;\r\n    width: 100%;\r\n}\r\n```\r\n- \u65B9\u6CD5\u4E8C\uFF1A\u53CC\u98DE\u7FFC\u5E03\u5C40 <br>\r\n\r\n\u4ED6\u7684HTML\u7ED3\u6784\u53D1\u751F\u4E86\u53D8\u5316\uFF1A\r\n\r\n```html\r\n<div class="container"> \r\n\u3000\u3000<div class="main">\r\n    \u3000\u3000<div class="content">main</div> \r\n    </div>\r\n\u3000\u3000<div class="left">left</div> \r\n\u3000\u3000<div class="right">right</div> \r\n</div>\r\n```\r\n\r\n```css\r\n.left, .main, .right {\r\n    float: left;\r\n    min-height: 130px;\r\n    text-align: center;\r\n}\r\n.left {\r\n    margin-left: -100%;\r\n    background: green;\r\n    width: 200px;\r\n}\r\n\r\n.right {\r\n    margin-left: -300px;\r\n    background-color: red;\r\n    width: 300px;\r\n}\r\n.main {\r\n    background-color: blue;\r\n    width: 100%;\r\n}\r\n.content{\r\n    margin: 0 300px 0 200px;\r\n}\r\n```\r\n\r\n\r\n> 11\u3001src \u4E0E href \u7684\u533A\u522B\r\n\r\n- src\uFF08source\uFF09\u6307\u5411\u5916\u90E8\u8D44\u6E90\u7684\u4F4D\u7F6E\uFF0C\u6307\u5411\u7684\u5185\u5BB9\u5C06\u4F1A\u5D4C\u5165\u5230\u6587\u6863\u4E2D\u5F53\u524D\u6807\u7B7E\u6240\u5728\u4F4D\u7F6E\uFF1B\u5728\r\n\u8BF7\u6C42 src \u8D44\u6E90\u65F6\u4F1A\u5C06\u5176\u6307\u5411\u7684\u8D44\u6E90\u4E0B\u8F7D\u5E76\u5E94\u7528\u5230\u6587\u6863\u4E2D\uFF0C\u5982 js \u811A\u672C\uFF0Cimg \u56FE\u7247\u548C iframe \u7B49\r\n\u5143\u7D20\u3002\r\n- \u5F53\u6D4F\u89C8\u5668\u89E3\u6790\u5230\u8BE5\u5143\u7D20\u65F6\uFF0C\u4F1A\u6682\u505C\u5176\u4ED6\u8D44\u6E90\u7684\u4E0B\u8F7D\u548C\u5904\u7406\uFF0C\u76F4\u5230\u5C06\u8BE5\u8D44\u6E90\u52A0\u8F7D\u3001\u7F16\u8BD1\u3001\u6267\u884C\r\n\u5B8C\u6BD5\uFF0C\u7C7B\u4F3C\u4E8E\u5C06\u6240\u6307\u5411\u8D44\u6E90\u5D4C\u5165\u5F53\u524D\u6807\u7B7E\u5185\u3002\r\n- href\uFF08hypertext reference/\u8D85\u6587\u672C\u5F15\u7528\uFF09\u6307\u5411\u7F51\u7EDC\u8D44\u6E90\u6240\u5728\u4F4D\u7F6E\uFF0C\u5EFA\u7ACB\u548C\u5F53\u524D\u5143\u7D20\uFF08\u951A\u70B9\uFF09\r\n\u6216\u5F53\u524D\u6587\u6863\uFF08\u94FE\u63A5\uFF09\u4E4B\u95F4\u7684\u94FE\u63A5\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u6587\u6863\u4E2D\u6DFB\u52A0<link href="common.css" rel="stylesheet"/>\u90A3\u4E48\u6D4F\u89C8\u5668\u4F1A\u8BC6\u522B\u8BE5\u6587\u6863\u4E3A css \u6587\u4EF6\uFF0C\u5C31\u4F1A\u5E76\u884C\u4E0B\u8F7D\u8D44\u6E90\u5E76\u4E14\u4E0D\u4F1A\u505C\u6B62\r\n\u5BF9\u5F53\u524D\u6587\u6863\u7684\u5904\u7406\u3002\r\n        </textarea>\r\n    </mark>\r\n    </div>\r\n</div>\r\n'},683:function(a,b,c){var d,e,f={};d=c(371),Object.keys(d).some(function(h){return'default'!==h&&'__esModule'!==h})&&console.warn('[vue-loader] docs\\views\\basic\\table.vue: named exports in *.vue files are ignored.'),e=c(648),a.exports=d||{},a.exports.__esModule&&(a.exports=a.exports.default);var g='function'==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports;e&&(g.template=e),g.computed||(g.computed={}),Object.keys(f).forEach(function(h){var i=f[h];g.computed[h]=function(){return i}})}});