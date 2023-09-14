"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[303],{456:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var o=n(457),s=n(239),r=n(435),a=n(378),l=n(703),i=n(0),c=n(66),d=n(1),u=n(466),p=n(7),m=function(e){var t=e.active,n=void 0===t||t,s=e.className,a=e.lang,l=60,c=(0,i.useState)(l),d=(0,r.Z)(c,2),m=d[0],f=d[1];(0,i.useEffect)((function(){var e={val:l},t=u.p8.timeline({repeat:-1}).to(e,{duration:l,val:0,roundProps:"val",ease:"linear",onUpdate:function(){f(e.val)}},0).fromTo(g.current,{scaleX:1},{duration:l,scaleX:0,ease:"linear"},0).fromTo(h.current,{width:"100%"},{duration:l,width:"0%",ease:"linear"},0);return n?t.restart():t.pause(),function(){t.kill()}}),[n,f,l]);var g=(0,i.useRef)(),h=(0,i.useRef)();return(0,o.BX)("div",{className:"mt-6 flex flex-col items-center ".concat(s),children:[(0,o.tZ)("p",{className:"text-sm font-bold uppercase tracking-wider",children:a.top}),(0,o.BX)("div",{className:"my-2 h-0.5 w-64",children:[(0,o.tZ)("div",{className:"h-full w-full overflow-hidden rounded-full bg-navy-800",children:(0,o.tZ)("div",{ref:g,className:"h-full w-full origin-left bg-green"})}),(0,o.tZ)("div",{ref:h,className:"-mt-0.5 h-full rounded-full bg-transparent",style:{boxShadow:"0 0 8px ".concat(p.O.green.DEFAULT)}})]}),(0,o.BX)("div",{className:"text-sm font-light uppercase",children:[a.bottom,(0,o.BX)("span",{className:"inline-block w-10 whitespace-nowrap font-bold tracking-wider text-green",children:["00:",1===String(m).length?"0".concat(m):m]})]})]})},f=n(117),g=n(230),h=n(6),y={status:!0,bonus:{value:.55,currency:"USD"},goldBonus:0,depositBonus:.05,history:[{title:"Kod promocyjny",promoCode:"WEGLARZ",depositBonus:.05,date:"2020-08-04 12:58:57"}]},v={status:!1,info:"Invalid promo code"},b={recaptcha:"",promoCode:window.__promoCode.initialPromoCode,history:[],response:{status:!0,info:null,goldBonus:null,bonus:null,depositBonus:null,history:[]}},x=(0,f.C)({id:"promoCodeMachine",initial:"init",tsTypes:{},schema:{context:{},events:{},services:{}},context:b,on:{RESTART:{actions:["resetContext","resetInput"],target:".idle"},RESET:{actions:["resetContext","resetInput"],target:".typing"}},states:{init:{exit:["openModal"],invoke:{src:"loadPromoCodeHistory",onDone:{actions:["assignInitialHistory"],target:"typing"},onError:"typing"}},idle:{on:{OPEN_MODAL:{actions:["assignPromoCode","openModal"],target:"typing"}}},typing:{on:{GET_BONUS:{actions:["assignPromoCode"],target:"loading"}}},loading:{exit:["assignResponse"],invoke:{src:"submitPromoCode",onDone:[{cond:"hasOnlyGoldBonus",actions:["assignFreshHistory"],target:"success.onlyGoldBonus"},{cond:"hasFullBonus",actions:["assignFreshHistory"],target:"success.fullBonus"},{cond:"hasOnlyDepositBonus",actions:["assignFreshHistory"],target:"success.onlyDepositBonus"},{target:"failure"}],onError:{target:"failure"}}},success:{entry:["updateBalance","resetCaptcha"],states:{onlyGoldBonus:{type:"final"},fullBonus:{type:"final"},onlyDepositBonus:{type:"final"}}},failure:{entry:["assignResponse","notifyError","resetCaptcha"],on:{GET_BONUS:{actions:["assignPromoCode"],target:"loading"}}}}},{guards:{hasOnlyGoldBonus:function(e,t){var n;return Boolean(null===(n=t.data)||void 0===n?void 0:n.goldBonus)},hasFullBonus:function(e,t){var n,o;return Boolean((null==t||null===(n=t.data)||void 0===n||null===(o=n.bonus)||void 0===o?void 0:o.value)&&t.data.depositBonus)},hasOnlyDepositBonus:function(e,t){var n;return Boolean(null==t||null===(n=t.data)||void 0===n?void 0:n.depositBonus)}},actions:{assignPromoCode:(0,g.assign)({promoCode:function(e,t){if("GET_BONUS"===t.type)return t.data},recaptcha:function(e,t){if("GET_BONUS"===t.type)return t.recaptcha}}),assignResponse:(0,g.assign)({response:function(e,t){if("data"in t)return t.data}}),resetContext:(0,g.assign)({promoCode:"",response:b.response}),assignInitialHistory:(0,g.assign)({history:function(e,t){return t.data||[]}}),assignFreshHistory:(0,g.assign)({history:function(e,t){return t.data.history||e.history}}),openModal:function(){console.error("Forgot to implement openModal() action")},resetInput:function(){console.error("Forgot to implement resetInput() action")},updateBalance:function(){var e,t;window.__layout.updateBalance(),window.__layout.updateCoinBalance(),null===(e=(t=window.__layout).updateSkinsBalance)||void 0===e||e.call(t)},notifyError:function(e,t){var n,o=t;new Toast({type:"failure",title:window.__promoCode.lang.genericError.title,message:(null===(n=o.data)||void 0===n?void 0:n.info)||window.__promoCode.lang.genericError.message})}},services:{submitPromoCode:function(e){return window.__promoCode.endpoints.submit?(n=(t=e).promoCode,o=t.recaptcha,(0,h.L)(window.__promoCode.endpoints.submit,{body:{promoCode:n,recaptcha:o}}).then((function(e){return e.status?e:Promise.reject(e)}))):function(e){return new Promise((function(t,n){setTimeout((function(){"kd"===e.promoCode?t(y):n(v)}),1e3)}))}(e);var t,n,o},loadPromoCodeHistory:function(){return(0,h.L)(window.__promoCode.endpoints.history).then((function(e){return e&&e.length?e:Promise.reject(e)}))}}});function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t,n=e.initialData,s=(0,i.useState)(window.__promoCode.initialPromoCode||""),u=(0,r.Z)(s,2),p=u[0],f=u[1],g=(0,i.useState)(null),h=(0,r.Z)(g,2),y=h[0],v=h[1],b=(0,i.useRef)(null),B=(0,a.e)(x,{actions:{resetInput:function(){return f("")},openModal:function(){window.MicroModal&&window.MicroModal.show("promo-code-modal",{onClose:function(){_&&_.send("RESTART")}})},resetCaptcha:function(){var e;null==b||null===(e=b.current)||void 0===e||e.reset()}}}),N=(0,r.Z)(B,3),C=N[0],Z=N[1],_=N[2],S=C.matches,E=C.context;(0,i.useEffect)((function(){window.__promoCodeService=_}),[_]);var O=(0,i.useRef)();(0,i.useEffect)((function(){S("failure")&&O.current.focus()}),[S,O.current]);var P,k,X,D,T=!window.__promoCode.useRecaptcha||y,j=""!==p&&T,R=function(){return j&&Z("GET_BONUS",{data:p,recaptcha:y})},M=E.response.bonus?(0,d.L6)(E.response.bonus.currency)(E.response.bonus.value):"",G=(0,l.Z)(100*(null===(t=E.response)||void 0===t?void 0:t.depositBonus),1)+"%";return(0,o.BX)("div",{children:[(0,o.BX)("div",{className:"relative grid",css:{minHeight:330},children:[S("success")&&(0,o.tZ)("button",{onClick:function(){return Z("RESET")},className:"will-change absolute left-0 top-0 z-10 -rotate-90 transform rounded-lg p-6 text-xl leading-none opacity-75 transition-all duration-200 hover:scale-125 hover:opacity-100",children:"âŒƒ"}),(0,o.tZ)("button",{"aria-label":"Close modal","data-micromodal-close":!0,className:"will-change absolute right-0 top-0 z-10 transform rounded-lg p-6 text-lg leading-none opacity-75 transition-all duration-200 hover:scale-125 hover:opacity-100",children:"âœ•"}),(0,o.tZ)("div",{className:(0,d.cn)("absolute left-0 top-0 h-full w-full rounded-xl border border-solid bg-navy-700 transition duration-300",S("success")?"border-green-200 border-opacity-50":"border-navy-400")}),(0,o.BX)("div",{className:"relative col-start-1 row-start-1 flex flex-col items-center justify-center px-10 py-5 text-center transition-opacity duration-500 md:px-20",style:w({},S("success")?{opacity:0,pointerEvents:"none"}:{opacity:1,pointerEvents:"all"}),children:[(0,o.tZ)("h3",{className:"mt-8 text-3xl font-bold uppercase leading-none",children:n.lang.startScreen.title}),(0,o.tZ)("p",{className:"mt-8 text-base font-bold uppercase leading-snug text-gold-400",children:n.lang.startScreen.subtitle}),(0,o.tZ)("p",{className:"text-sm font-medium leading-snug text-navy-200",children:n.lang.startScreen.paragraph}),(0,o.tZ)("input",{ref:O,value:p,onChange:function(e){return f(e.target.value)},onKeyDown:function(e){return 13===e.keyCode&&R()},className:"mt-6 w-full rounded-lg border border-solid border-navy-500 bg-navy-800 p-4 text-center text-lg text-white placeholder-navy-300 focus:outline-none md:text-sm",placeholder:n.lang.startScreen.inputPlaceholder}),window.__promoCode.useRecaptcha?(0,o.tZ)("div",{className:"mt-4",children:(0,o.tZ)(c.Z,{ref:b,sitekey:window.__recaptchaApiKey,onChange:function(e){return v(e)}})}):null,(0,o.tZ)("button",{disabled:!j,className:"disabled:pointer-events-none",onClick:R,children:(0,o.BX)("div",{className:"button button-primary mb-4 mt-6 grid h-auto cursor-pointer items-center rounded-lg px-12 py-4 text-sm font-bold text-white transition-opacity duration-200",children:[(0,o.tZ)("div",{className:"col-start-1 row-start-1 flex items-center transition-opacity duration-200",style:{opacity:S("loading")?0:1},children:n.lang.startScreen.submitButton}),(0,o.BX)("div",{style:{opacity:S("loading")?1:0},className:"dot-loader col-start-1 row-start-1 transition-opacity duration-200",children:[(0,o.tZ)("span",{}),(0,o.tZ)("span",{}),(0,o.tZ)("span",{})]})]})})]}),(0,o.BX)("div",{className:"relative col-start-1 row-start-1 flex flex-col items-center justify-center px-10 text-center transition-opacity duration-500 md:px-20",style:w({},S("success")?{opacity:1,pointerEvents:"all"}:{opacity:0,pointerEvents:"none"}),children:[(0,o.tZ)("h3",{className:"text-3xl font-bold uppercase leading-none",children:n.lang.resultScreen.title}),(0,o.tZ)("p",{className:"mt-6 rounded-lg bg-navy-800 p-5 font-light ".concat(S("success.onlyGoldBonus")?"text-xl":"text-sm"),dangerouslySetInnerHTML:{__html:S("success")?(k={onlyGoldBonus:n.lang.resultScreen.goldBonusMessage,fullBonus:n.lang.resultScreen.fullBonusMessage,onlyDepositBonus:n.lang.resultScreen.depositBonusMessage}[C.value.success],X=function(e){return'<span class="font-bold text-green">'.concat(e,"</span>")},D='\n      <span class="inline-flex items-center font-bold text-gold">\n        '.concat(null===(P=E.response)||void 0===P?void 0:P.goldBonus,'\n        <img src="').concat((0,d.$o)("gold-coin.svg"),'" alt="" class="inline-block object-contain w-4 h-4 ml-1">\n      </span>\n    '),k.replace("{goldBonus}",X(D)).replace("{bonus}",X(M)).replace("{depositBonus}",X(G))):""}}),(S("success.fullBonus")||S("success.onlyDepositBonus"))&&(0,o.BX)(i.Fragment,{children:[(0,o.BX)("a",{href:n.prepaidLink,className:"mt-6 flex transform items-center rounded-lg bg-navy-800 transition-transform duration-200 hover:-translate-y-1",children:[(0,o.tZ)("span",{className:"px-5 text-sm font-bold text-green",children:(0,o.BX)("span",{className:"relative",children:[G,(0,o.tZ)("span",{className:"absolute left-0 top-0",css:{opacity:.15,transform:"translate(1px, -1px) scale(2.2)"},children:G})]})}),(0,o.tZ)("span",{className:"rounded-lg bg-green px-5 py-4 text-sm font-bold text-navy-800",children:n.lang.resultScreen.prepaidLink})]}),n.showCounter&&(0,o.tZ)(m,{lang:{top:n.lang.resultScreen.counterTop,bottom:n.lang.resultScreen.counterBottom},className:S("success.fullBonus")||S("success.onlyDepositBonus")?"":"invisible"})]})]})]}),E.history&&E.history.length?(0,o.BX)("div",{className:"bg-navy-700 pb-3 pt-6",children:[(0,o.tZ)("h3",{className:"mb-3 text-center text-xl font-bold uppercase",children:n.lang.history.title}),(0,o.tZ)("div",{className:"scroll-container custom-scrollbar overflow-auto",css:{maxHeight:155,overscrollBehavior:"contain"},children:(0,o.BX)("table",{className:"w-full table-fixed text-xs leading-none text-navy-200",css:{minWidth:320},children:[(0,o.tZ)("thead",{children:(0,o.BX)("tr",{className:"text-left uppercase",children:[(0,o.tZ)("th",{className:"px-2 py-4 text-left text-xs font-semibold md:pl-10",children:n.lang.history.headers.type}),(0,o.tZ)("th",{className:"break-all px-2 py-4 text-center text-xs font-semibold",children:n.lang.history.headers.promoCode}),(0,o.tZ)("th",{className:"px-2 py-4 text-center text-xs font-semibold",children:n.lang.history.headers.value}),(0,o.tZ)("th",{className:"px-2 py-4 text-right text-xs font-semibold md:pr-10",children:n.lang.history.headers.date})]})}),(0,o.tZ)("tbody",{children:E.history.map((function(e,t){return(0,o.BX)("tr",{className:"odd:bg-navy-800",children:[(0,o.tZ)("td",{className:"px-2 py-4 text-left md:pl-10",children:e.title}),(0,o.tZ)("td",{className:"px-2 py-4 text-center",children:e.promoCode}),(0,o.tZ)("td",{className:"px-2 py-4 text-center",children:e.goldBonus?(0,o.BX)("span",{className:"inline-flex items-center font-bold",children:[e.goldBonus,(0,o.tZ)("img",{src:(0,d.$o)("gold-coin.svg"),alt:"",className:"ml-1 inline-block h-3 w-3 object-contain"})]}):e.bonus&&e.bonus.value&&e.depositBonus?"".concat((0,d.L6)(e.bonus.currency)(e.bonus.value),", ").concat(Number(100*e.depositBonus).toFixed(0),"%"):e.depositBonus?"".concat((0,l.Z)(100*e.depositBonus,1),"%"):""}),(0,o.tZ)("td",{className:"px-2 py-4 text-right md:pr-10",children:e.date})]},t)}))})]})})]}):null]})},C=n(74),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};return(0,C.s)((0,o.tZ)(N,{initialData:window.__promoCode}),document.querySelector("#promo-code-root"),e)}}}]);