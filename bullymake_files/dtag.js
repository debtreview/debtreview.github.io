!function(){'use strict';function t(){const t=`${e}?t=e&message=${encodeURI('failed to load')}&v=${n}`,a=new Image(1,1);return a.src=t,a}const e='https://events.attentivemobile.com/e',n='4-latest_adf239c71a',a='eyJjb21wYW55IjoiYnVsbHltYWtlIiwiY2VpZCI6InVIUiIsInRjIjpmYWxzZSwidWEiOmZhbHNlLCJhcCI6eyJ0cmciOlt7InB0Ijoid2N0IiwiaWQiOiJ0MTEiLCJwdCI6IndjdCIsInBsIjp7ImVuciI6WyJzaGFyZWQiLCJ3b28iLCJqbGQiLCJtZXQiXSwidHJuIjpbImRzIl19fV0sImVuciI6eyJqbGQiOnsicHQiOiJqbGQiLCJwdCI6ImpsZCIsIm1wIjp7InNrdSI6InNrdSIsIm5hbWUiOiJuYW1lIiwiaW1hZ2UiOiJpbWFnZSJ9fSwibHRjIjp7InB0IjoibHRjIiwicHQiOiJsdGMifSwibWV0Ijp7InB0IjoibWV0IiwicHQiOiJtZXQiLCJtcCI6eyJuYW1lIjoib2c6dGl0bGUiLCJpbWFnZSI6Im9nOmltYWdlIiwicHJpY2UiOiJvZzpwcmljZTphbW91bnQiLCJjdXJyZW5jeSI6Im9nOnByaWNlOmN1cnJlbmN5In19LCJ3b28iOnsicHQiOiJ3Y2UiLCJwdCI6IndjZSJ9fSwidHJuIjp7ImRzIjp7InB0IjoiZHMiLCJwdCI6ImRzIiwibXAiOnt9fX19LCJjYyI6eyJpdCI6dHJ1ZX0sImJjdHUiOiIifQ==',o='bullymake.attn.tv',i='https://cdn.attn.tv/tag';const d='4-latest';let c={};try{c=JSON.parse(atob(a))}catch{t()}function r(t,e,n){const a=document.createElement('script');return a.setAttribute('async','true'),a.type='text/javascript',e&&(a.onload=e),n&&(a.onerror=n),a.src=t,((document.getElementsByTagName('head')||[null])[0]||document.getElementsByTagName('script')[0].parentNode).appendChild(a),a}function s(t){return`${i}/${d}/${t}?v=${n}`}function _(){var t;try{return!1!==(null==(t=null==c?void 0:c.cc)?void 0:t.it)}catch{return!1}}function u(e=(()=>{})){r(s(`${_()?'unified-':''}${window.navigator.userAgent.indexOf('MSIE ')>0||navigator.userAgent.match(/Trident.*rv:11\./)?'tag-ie.js':'tag.js'}`),e,t)}!function(e,i){var l;function w(t){return function(){e.attn_d0x0b_evt.push({func:t,args:arguments}),e.dispatchEvent(new Event('attn_queued_sdk_event'))}}function v(){_()||r('https://cdn.attn.tv/attn.js?v='+n),function(){try{const[t]=window.location.hash.split(/\?/);if(t.indexOf('attn')>-1){const t=window.location.hash.slice(5);sessionStorage.setItem('_d0x0b_',t)}const e=sessionStorage.getItem('_d0x0b_');return!!e&&(window.attn_d0x0b_cfg=e,!0)}catch(t){return!1}}()?function(e=(()=>{})){r(s('tag-debug.js'),e,t)}():u(),i.removeEventListener('DOMContentLoaded',v)}e.attn_d0x0b_cfg=a,e.__attentive_cfg=JSON.parse('{\"ceid\":\"uHR\"}'),window.__attentive_domain=o,window.__attentive||(window.__attentive={invoked:!1,show:function(){window.__attentive.invoked=!0}}),(null==(l=null==c?void 0:c.cc)?void 0:l.dap)||function(){if(window.__poll_for_path_change)return;let t=window.location.pathname;const e=()=>{window.__attentive&&window.__attentive.show&&window.__attentive.show()};window.__poll_for_path_change=!0,setInterval((function(){if(t!==window.location.pathname){const n=document.querySelector('#attentive_overlay');null!=n&&n.parentNode&&n.parentNode.removeChild(n),t=window.location.pathname,e()}}),500),e()}(),e.__attnLoaded||(e.__attnLoaded=!0,e.attn_d0x0b_evt=e.attn_d0x0b_evt||[],e.attentive={version:d,analytics:{enable:w('enable'),disable:w('disable'),track:w('track'),pageView:w('pageView'),addToCart:w('addToCart'),productView:w('productView'),purchase:w('purchase')}},'loading'===i.readyState?i.addEventListener('DOMContentLoaded',v):v())}(window,document)}();