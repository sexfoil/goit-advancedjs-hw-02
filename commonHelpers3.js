import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as m}from"./assets/vendor-651d7991.js";function c(t,e){const n=Math.random()>.3;return new Promise((u,s)=>{setTimeout(()=>{n?u({position:t,delay:e}):s({position:t,delay:e})},e)})}function a(t,e){return`'${t}' must be not empty and more than ${e}!`}const i="disabled",o={delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),button:document.querySelector("button")};function d(t){m.show({title:"⛔",message:t,messageColor:"white",backgroundColor:"red",timeout:5e3,position:"center"})}function l(t,e){m.show({message:t,backgroundColor:e,position:"topRight"})}function p({delay:t,step:e,amount:n}){let r="";return(!t||t<0)&&(r+=a("delay",-1)+"<br>"),(!e||e<0)&&(r+=a("step",-1)+"<br>"),(!n||n<=0)&&(r+=a("amount",0)+"<br>"),r.length===0?!0:(d(r),!1)}function b(){o.delay.value="",o.step.value="",o.amount.value=""}function f(){const t=o.button,e=Number(o.delay.value)+Number(o.step.value)*Number(o.amount.value);console.log(e),t.setAttribute(i,""),setTimeout(()=>{t.removeAttribute(i)},e)}const v=t=>{t.preventDefault();const e={delay:o.delay.value,step:o.step.value,amount:o.amount.value};if(p(e)){f(),b();for(let n=1;n<=Number(e.amount);n+=1){const r=Number(e.delay)+(n-1)*Number(e.step);c(n,r).then(({position:u,delay:s})=>{l(`✅ Fulfilled promise ${u} in ${s}ms`,"lime")}).catch(({position:u,delay:s})=>{l(`❌ Rejected promise ${u} in ${s}ms`,"tomato")})}}};o.button.addEventListener("click",v);
//# sourceMappingURL=commonHelpers3.js.map
