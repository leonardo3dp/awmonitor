var _t=Object.defineProperty,ft=Object.defineProperties;var xt=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var F=(t,e,s)=>e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,A=(t,e)=>{for(var s in e||(e={}))gt.call(e,s)&&F(t,s,e[s]);if(E)for(var s of E(e))yt.call(e,s)&&F(t,s,e[s]);return t},j=(t,e)=>ft(t,xt(e));import{k as B,u as M,a as wt,c as f,d as bt,e as vt,b as $t,r as H,f as L,g as R,h as kt,i as Ct,j as At,l as Mt,m as St,n as q,o as X,p as l,q as x,s as u,t as $,v as a,w as i,x as S,y as h,z as N,A as y,B as w,F as k,C as J,D as Tt,E as jt,G as Bt,H as Lt,Q as Nt,I as O,J as Ot,K as Dt,L as Pt,M as I,N as Rt,O as It,P as Vt,R as Ut}from"./vendor.a6ee33be.js";const Wt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};Wt();const V=B.create({prefixUrl:"https://waxapi.ledgerwise.io/v1"}),zt=B.create({prefixUrl:"https://wax.greymass.com/v1"}),C={async getAccount(t){const e=JSON.stringify({account_name:t});return await V.post("chain/get_account",{body:e}).json()},async getBalance(t,e){const s=JSON.stringify(A({account:t},e));return await V.post("chain/get_currency_balance",{body:s}).json()},async getTableRows(t,e,s){const r=JSON.stringify({json:!0,code:e,scope:e,table:s,lower_bound:t,upper_bound:t});return await V.post("chain/get_table_rows",{body:r}).json()},async getTransaction(t){const e=JSON.stringify({id:t});return await zt.post("history/get_transaction",{body:e}).json()},getTLM(t){return this.getBalance(t,{code:"alien.worlds",symbol:"TLM"})},getWAX(t){return this.getBalance(t,{code:"eosio.token",symbol:"WAX"})},getPlayer(t){return this.getTableRows(t,"federation","players")},getMiner(t){return this.getTableRows(t,"m.federation","miners")},getClaims(t){return this.getTableRows(t,"m.federation","claims")}},Et=B.create({prefixUrl:"https://api.alienworlds.io/v1/alienworlds"}),Ft={async getMines(t){return await Et.get("mines",{searchParams:t}).json()},async getLastMine(t){return(await this.getMines({miner:t,limit:1})).results[0]}},Ht=B.create({prefixUrl:"https://wax.api.atomicassets.io/atomicassets/v1"}),qt={async getAsset(t){return await Ht.get(`assets/${t}`).json()}},Xt=B.create({prefixUrl:"https://api.binance.com/api/v3"}),Jt={async avgPrice(t){const e=`TLM${t}`.toUpperCase();return await Xt.get("avgPrice",{searchParams:{symbol:e}}).json()}},K="https://awmonitor.netlify.app",Kt="https://github.com/jonian/awmonitor",Qt="la1dk.wam",D=M("color-schema","auto"),Q=M("money-type","USDT"),Y=M("account-names",[]),G=M("show-tip",!0),Z=M("tlm-price",0),tt=M("updated-at",null),et=wt(),Yt=f({get(){return D.value==="auto"?et.value:D.value==="dark"},set(t){t===et.value?D.value="auto":D.value=t?"dark":"light"}}),Gt=f({get(){return Q.value},set(t){Q.value=t}}),st=f({get(){return Y.value||[]},set(t){Y.value=t}}),Zt={encode:t=>vt(JSON.stringify(t)),decode:t=>JSON.parse(bt(t))},{copy:te}=$t({read:!1}),ee=te,se=H({xxs:L("(min-width: 360px)"),xs:L("(min-width: 480px)"),sm:L("(min-width: 640px)"),md:L("(min-width: 768px)"),lg:L("(min-width: 1024px)")});R.extend(kt);R.extend(Ct);const T=R,ne=t=>{const e=T.utc(t),s=H(e.fromNow());return At(()=>s.value=e.fromNow(),{immediate:!0}),s.value},ae=(t,e,s="second")=>t?T().diff(t,s)>e:!0,nt=Mt(),U=t=>t?parseFloat(t.slice(0,-4)):0,at=t=>t?{quantity:t,amount:U(t)}:{quantity:"0.0000 TLM",amount:0},ot=async t=>{try{const s=(await C.getTransaction(t.last_mine_tx)).traces[1].act.data;t.info=j(A({},s),{amount:U(s.quantity)})}catch{t.info={quantity:"0.0000 TLM",amount:0}}try{const e=await qt.getAsset(t.current_land);t.land=e.data.data}catch{t.land={commission:0}}return t},rt=(t,e)=>{const s=e[`${t}_limit`];if(s!=null){const r=Object(e.self_delegated_bandwidth||e.total_resources),o=U(r[`${t}_weight`]),n=s.max?Math.round(s.used/s.max*100):100;return j(A({},s),{percent:n,staked:o})}else return{used:0,available:0,max:0,percent:100,staked:0}},oe=({ram_quota:t,ram_usage:e,total_resources:s})=>{if(e!=null){const r=Math.round(e/t*100),o=s.ram_bytes;return{used:e,available:o,max:t,percent:r,staked:0}}else return{used:0,available:0,max:0,percent:0,staked:0}};class ct{constructor(e){this.name=e,this.data=St({loading:!1,error:null,account:{},history:[],claims:[],lastMine:null,nextMine:null,player:{},tlm:{},wax:{}}),this.tag=f(()=>this.data.player.tag),this.tlm=f(()=>this.data.tlm.amount),this.wax=f(()=>this.data.wax.amount),this.cpu=f(()=>rt("cpu",this.data.account)),this.net=f(()=>rt("net",this.data.account)),this.ram=f(()=>oe(this.data.account)),this.loading=f(()=>this.data.loading),this.error=f(()=>this.data.error),this.history=f(()=>this.data.history),this.lastMine=f(()=>this.data.lastMine),this.nextMine=f(()=>this.data.nextMine),this.claims=f(()=>this.data.claims),this.init()}loadState(){const e=localStorage.getItem(`store-${this.name}`),s=JSON.parse(e||"{}");nt.value&&(s.history=[],s.lastMine=null),Object.keys(s).forEach(r=>{r.match(/error|loading/)||(this.data[r]=s[r])})}saveState(){const e=Object.keys(this.data).reduce((s,r)=>(r=="history"&&this.data.lastMine?s[r]=[j(A({},this.data.lastMine),{stale:!0})]:r.match(/error|loading/)||(s[r]=this.data[r]),s),{});localStorage.setItem(`store-${this.name}`,JSON.stringify(e))}async init(){this.loadState(),this.data.error=null,this.data.loading=!0;try{await q.range(500,800),await this._updatePlayer()}catch(e){this.data.error=e}finally{this.data.loading=!1,this.saveState()}}async update(e){this.data.error=null,this.data.loading=!0;try{await q.range(500,800),await this._updateAccount(),await this._updateTLM(),await this._updateWAX(),await this._updateMiner(),await this._updateNext(),await this._updateClaims(),await this._updateHistory()}catch(s){this.data.error=s}finally{this.data.loading=!1,this.saveState()}e&&e(this)}async _updateAccount(){this.data.account=await C.getAccount(this.name)}async _updateTLM(){const e=await C.getTLM(this.name);this.data.tlm=at(e[0])}async _updateWAX(){const e=await C.getWAX(this.name);this.data.wax=at(e[0])}async _updatePlayer(){const e=await C.getPlayer(this.name);this.data.player=e.rows[0]}async _updateMiner(){const s=(await C.getMiner(this.name)).rows[0],r=this.data.history.find(o=>o.last_mine_tx==s.last_mine_tx);r==null?(this.data.lastMine=await ot(s),this.data.history=[...this.data.history,this.data.lastMine].splice(-5)):r.stale=!1,this.data.history.length==2&&this.data.history[0].stale&&(this.data.history=Array.of(this.data.history[1]))}async _updateHistory(){this.data.history.forEach(async e=>{e.info.amount==0&&await ot(e)})}async _updateNext(){const e=await Ft.getLastMine(this.name),s=T.utc(this.data.lastMine.last_mine);this.data.nextMine=s.add(e.params.delay,"second").toString()}async _updateClaims(){const e=await C.getClaims(this.name);this.data.claims=e.rows.reduce((s,r)=>[...s,...r.template_ids],[])}}var m=(t,e)=>{for(const[s,r]of e)t[s]=r;return t};const re={name:"App",provide(){return{$app:this,$screen:se.value}},watch:{isDark:{handler(t){document.documentElement.classList.toggle("dark",t)},immediate:!0},isOnline:{handler(){ae(this.updatedAt,60)&&this.scheduleRefresh(3e3)}},accountNames:{handler(){this._saveAccounts||(this.accounts=this.accountNames.map(t=>new ct(t)),this.refresh())},immediate:!0}},data(){return{updateId:null,totalTLM:null,totalWAX:null,accounts:[]}},computed:{isDark(){return Yt.value},isOnline(){return nt.value},moneyType(){return Gt.value},tlmPrice(){return Z.value},updatedAt(){return tt.value},accountNames(){return st.value},hasAccounts(){return this.accountNames.length>0},loading(){return this.accounts.some(({loading:t})=>t)},totalMoney(){return this.totalTLM==null?null:this.totalTLM*this.tlmPrice}},methods:{async updateTlmPrice(){try{const t=await Jt.avgPrice(this.moneyType);Z.value=parseFloat(t.price)}catch{return}},async updateAccounts(){for(const t of this.accounts)await t.update();this.updateTotals()},saveAccountNames(){this._saveAccounts=!0,st.value=this.accounts.map(({name:t})=>t),this.$nextTick(()=>this._saveAccounts=!1)},sumAmounts(t){return this.accounts.reduce((e,s)=>{const r=s[t]||0;return e+r},0)},updateTotals(){this.totalTLM=this.sumAmounts("tlm"),this.totalWAX=this.sumAmounts("wax")},refresh(){this.updateTotals(),this.isOnline&&(this.updateTlmPrice(),this.updateAccounts(),tt.value=new Date,this.scheduleRefresh())},scheduleRefresh(t=6e4){clearTimeout(this.updateId),this.updateId=setTimeout(()=>this.refresh(),t)},addAccount(t){if(!this.accountNames.includes(t)){const e=new ct(t);e.update(()=>this.updateTotals()),this.accounts.push(e),this.saveAccountNames()}},removeAccount(t){const e=this.accounts.findIndex(s=>s.name==t);this.accounts.splice(e,1),this.saveAccountNames(),this.updateTotals()}}};function ce(t,e,s,r,o,n){const c=X("router-view");return l(),x(c)}var ie=m(re,[["render",ce]]);const le={name:"Icon",props:{name:{type:String,required:!0}},computed:{iconClass(){return`uil-${this.name}`}}};function ue(t,e,s,r,o,n){return l(),u("i",{class:$([n.iconClass,"uil"])},null,2)}var b=m(le,[["render",ue]]);const de={name:"Footer",data(){return{githubURL:Kt}}},me={class:"border-t text-gray-dark dark:bg-black dark:border-gray-darkest"},he={class:"flex items-center justify-between container py-4"},pe=["href"],_e=a("span",{class:"text-sm"},"View on GitHub",-1),fe={href:"https://vuejs.org",target:"_blank",rel:"noreferrer",class:"flex flex-nowrap items-center space-x-2"},xe=a("span",{class:"text-sm"},"Created with",-1),ge=a("span",{class:"text-sm"},"Vue.js",-1);function ye(t,e,s,r,o,n){const c=b;return l(),u("footer",me,[a("div",he,[a("a",{href:o.githubURL,target:"_blank",rel:"noreferrer",class:"flex flex-nowrap items-center space-x-2"},[i(c,{name:"github",class:"text-gray-light dark:text-gray-darker transform scale-125"}),_e],8,pe),a("a",fe,[xe,i(c,{name:"vuejs",class:"text-gray-light dark:text-gray-darker transform scale-125"}),ge])])])}var we=m(de,[["render",ye]]);const be={name:"Balance",props:{type:{type:String,required:!0},amount:{type:Number,default:null},decimals:{type:Number,default:2},expanded:{type:Boolean,default:!0}},watch:{amount(t,e){e==null||t==e?this.change=0:t>e?this.change=1:this.change=-1}},data(){return{change:0}},computed:{value(){return this.amount||0},imagePath(){return`/${this.type.toLowerCase()}.png`},iconAttrs(){return this.change<0?{name:"angle-down",class:"text-danger"}:this.change>0?{name:"angle-up",class:"text-success"}:{name:"angle-up",class:"text-gray-light"}}}},ve={class:"flex flex-nowrap items-center space-x-2"},$e=["src","alt"],ke={class:"text-sm"};function Ce(t,e,s,r,o,n){const c=b;return l(),u("div",ve,[S(t.$slots,"default",{},()=>[a("img",{src:n.imagePath,alt:s.type,style:{width:"1rem",height:"1rem"}},null,8,$e)]),a("span",{class:$([{"flex-grow":s.expanded},"text-sm whitespace-nowrap"])},h(s.type)+" Total ",3),a("strong",ke,h(n.value.toFixed(s.decimals)),1),i(c,N(n.iconAttrs,{class:"transform scale-150"}),null,16)])}var it=m(be,[["render",Ce]]);const Ae={name:"InfoBar",inject:["$app"]},Me={key:0,class:"border-b dark:bg-black dark:border-gray-darkest"},Se={class:"flex flex-col items-stretch justify-between container py-4 lg:flex-row"},Te={class:"flex flex-col justify-between sm:flex-row lg:space-x-6"},je={class:"flex flex-col-reverse items-justify justify-between sm:items-center sm:flex-row-reverse lg:flex-row lg:space-x-4"},Be={class:"flex justify-between text-gray-dark text-sm space-x-2 mt-2 mr-1 sm:mt-0 lg:mr-0"},Le=a("span",null,"Binance TLM Price:",-1);function Ne(t,e,s,r,o,n){const c=it,d=b;return n.$app.hasAccounts?(l(),u("div",Me,[a("div",Se,[a("div",Te,[i(c,{amount:n.$app.totalTLM,decimals:4,type:"TLM"},null,8,["amount"]),i(c,{amount:n.$app.totalWAX,type:"WAX"},null,8,["amount"])]),a("div",je,[a("span",Be,[Le,a("span",null,h(n.$app.tlmPrice)+" "+h(n.$app.moneyType),1)]),i(c,{amount:n.$app.totalMoney,type:n.$app.moneyType},{default:y(()=>[i(d,{name:"setting",class:"text-gray-light"})]),_:1},8,["amount","type"])])])])):w("",!0)}var Oe=m(Ae,[["render",Ne]]);const De={name:"OnlineStatus",inject:["$app"],watch:{isOnline(t){t?(this.visible=!0,setTimeout(()=>this.visible=!1,2e3)):this.visible=!0}},data(){return{visible:!1}},computed:{isOnline(){return this.$app.isOnline}},mounted(){this.isOnline||(this.visible=!0)}},Pe={class:"container flex items-center space-x-2"},Re=a("span",null,"Application is online again. Updates are enabled.",-1),Ie=a("span",null,"Application is offline. Updates are disabled.",-1);function Ve(t,e,s,r,o,n){const c=b;return o.visible?(l(),u("div",{key:0,class:$([{"bg-danger":!n.isOnline,"bg-success":n.isOnline},"py-2 text-white"])},[a("div",Pe,[n.isOnline?(l(),u(k,{key:0},[i(c,{name:"wifi",class:"text-lg"}),Re],64)):(l(),u(k,{key:1},[i(c,{name:"wifi-slash",class:"text-lg"}),Ie],64))])],2)):w("",!0)}var Ue=m(De,[["render",Ve]]);const We={name:"LinkButton",props:{disabled:{type:Boolean,default:!1},text:{type:String,default:"Button"},icon:{type:String,default:null},iconClass:{type:[String,Array,Object],default:null}}},ze=["aria-label"],Ee={class:"flex flex-nowrap items-baseline justify-center space-x-2"},Fe={key:0};function He(t,e,s,r,o,n){const c=b;return l(),u("button",{class:$([{"opacity-50":s.disabled,"pointer-events-none":s.disabled},"p-2 outline-none focus:outline-none"]),"aria-label":s.text},[a("span",Ee,[s.icon?(l(),x(c,{key:0,name:s.icon,class:$(s.iconClass)},null,8,["name","class"])):w("",!0),S(t.$slots,"default",{},()=>[s.text?(l(),u("span",Fe,h(s.text),1)):w("",!0)])])],10,ze)}var W=m(We,[["render",He]]);const qe={name:"RoundedButton",inheritAttrs:!1};function Xe(t,e,s,r,o,n){const c=W;return l(),x(c,N(t.$attrs,{style:{borderColor:"currentColor"},class:"rounded-full border px-6"}),{default:y(()=>[S(t.$slots,"default")]),_:3},16)}var P=m(qe,[["render",Xe]]);const Je={name:"ReloadButton",inject:["$app"],props:{tag:{type:[String,Object],default:()=>P},showText:{type:Boolean,default:!0}},computed:{text(){return this.showText?"Refresh":null}},methods:{onClick(){this.$app.refresh()}}};function Ke(t,e,s,r,o,n){return n.$app.hasAccounts?(l(),x(J(s.tag),{key:0,text:n.text,disabled:n.$app.loading||!n.$app.isOnline,"icon-class":{"animate-spin":n.$app.loading},icon:"refresh",class:"text-success",onClick:n.onClick},null,8,["text","disabled","icon-class","onClick"])):w("",!0)}var Qe=m(Je,[["render",Ke]]);const Ye={name:"SimpleButton",inheritAttrs:!1};function Ge(t,e,s,r,o,n){const c=W;return l(),x(c,N(t.$attrs,{class:"rounded-md px-4"}),{default:y(()=>[S(t.$slots,"default")]),_:3},16)}var lt=m(Ye,[["render",Ge]]);const Ze={name:"Dialog",props:{modelValue:{type:Boolean,default:!1},title:{type:String,required:!0},panelMode:{type:Boolean,default:!1},size:{type:String,default:"medium"},cancelButton:{type:[Boolean,String],default:"Cancel"},confirmButton:{type:[Boolean,String],default:"Confirm"}},watch:{modelValue:{handler(t){this.$nextTick(()=>{document.body.classList.toggle("overflow-hidden",t)})},immediate:!0}},computed:{buttons(){return[this.confirmButton,this.cancelButton].filter(e=>!!e).length},buttonClass(){return this.buttons==1&&this.small?"w-full":null},small(){return this.size=="small"},medium(){return this.size=="medium"},large(){return this.size=="large"}},methods:{onConfirm(){this.$emit("update:modelValue",!1),this.$emit("confirm")},onCancel(){this.$emit("update:modelValue",!1),this.$emit("close"),this.$emit("cancel")}}},ts={class:"text-lg font-bold"},es={key:0,class:"flex items-center justify-between p-4 border-t dark:border-gray-darkest"};function ss(t,e,s,r,o,n){const c=Tt,d=b,p=jt,_=Bt,g=lt,v=Lt;return l(),x(v,{open:s.modelValue,class:"fixed inset-0 z-50 text-black dark:text-white",onClose:n.onCancel},{default:y(()=>[a("div",{class:$([{"items-stretch":!s.panelMode,"items-end":s.panelMode},"flex justify-center h-full sm:items-center"])},[i(c,{class:"fixed inset-0 bg-black opacity-75"}),a("div",{class:$([{"sm:max-w-md":n.small,"sm:max-w-2xl":n.medium,"sm:max-w-6xl":n.large,"border-t":s.panelMode},"flex flex-col w-full m-0 sm:m-6 bg-white border-white z-10 sm:border sm:shadow-md sm:rounded dark:bg-black dark:border-gray-darkest"])},[i(p,{class:"flex items-center justify-between p-4 border-b dark:border-gray-darkest"},{default:y(()=>[a("span",ts,h(s.title),1),i(d,{name:"times-circle",class:"cursor-pointer opacity-50 hover:opacity-75",onClick:n.onCancel},null,8,["onClick"])]),_:1}),i(_,{class:"flex-grow p-4 overflow-y-auto"},{default:y(()=>[S(t.$slots,"default")]),_:3}),n.buttons?(l(),u("div",es,[s.cancelButton?(l(),x(g,{key:0,text:s.cancelButton,class:$([n.buttonClass,"text-danger border border-danger"]),onClick:n.onCancel},null,8,["text","class","onClick"])):w("",!0),s.confirmButton?(l(),x(g,{key:1,text:s.confirmButton,class:$([n.buttonClass,"text-white bg-primary"]),onClick:n.onConfirm},null,8,["text","class","onClick"])):w("",!0)])):w("",!0)],2)],2)]),_:3},8,["open","onClose"])}var z=m(Ze,[["render",ss]]);const ns={name:"QrCode",props:{value:{type:String,required:!0},size:{type:String,default:"250px"}},watch:{value:"updateCanvas"},methods:{updateCanvas(){const t={text:this.value,radius:0,ecLevel:"M",fill:"#000000",background:null,size:186};Nt.render(t,this.$refs.code)}},mounted(){this.updateCanvas()}},as={class:"aspect-w-1 aspect-h-1 h-0 w-full",ref:"code"};function os(t,e,s,r,o,n){return l(),u("div",{style:O({width:s.size}),class:"max-w-full rounded-3xl bg-white p-8"},[a("div",as,null,512)],4)}var ut=m(ns,[["render",os]]);const rs={name:"ShareButton",inject:["$app"],props:{tag:{type:[String,Object],default:()=>P},showText:{type:Boolean,default:!0}},data(){return{visible:!1}},computed:{text(){return this.showText?"Share":null},shareUrl(){if(this.$app.hasAccounts){const t=Zt.encode(this.$app.accountNames);return`${K}/share/${t}`}else return K}},methods:{async onCopy(){await ee(this.shareUrl)}}},cs={class:"flex flex-col items-center justify-center min-h-full py-4 space-y-4"},is=a("strong",{class:"block text-lg"}," Scan QR code or copy URL ",-1),ls={class:"block text-xs text-center break-all px-4"};function us(t,e,s,r,o,n){const c=ut,d=z;return l(),u(k,null,[(l(),x(J(s.tag),{text:n.text,class:"text-primary",icon:"share-alt",onClick:e[0]||(e[0]=p=>o.visible=!0)},null,8,["text"])),i(d,{modelValue:o.visible,"onUpdate:modelValue":e[1]||(e[1]=p=>o.visible=p),"cancel-button":!1,"confirm-button":"Copy URL",size:"small",title:"Share dashboard",class:"dark text-white",onConfirm:n.onCopy},{default:y(()=>[a("div",cs,[i(c,{value:n.shareUrl},null,8,["value"]),is,a("span",ls,h(n.shareUrl.replace("https://","")),1)])]),_:1},8,["modelValue","onConfirm"])],64)}var ds=m(rs,[["render",us]]),ms="/logo.svg";const hs={name:"Header",inject:["$screen"],data(){return{title:"AW Monitor"}},computed:{buttonTag(){return this.$screen.sm?P:W}}},ps={class:"sticky top-0 z-50 border-b bg-white dark:bg-black dark:border-gray-darkest"},_s={class:"flex items-center justify-between container py-2 sm:py-4"},fs={class:"flex flex-nowrap items-center space-x-4 py-2 sm:py-0"},xs=["alt"],gs={class:"font-bold text-xl whitespace-nowrap sm:text-2xl"},ys={class:"flex space-x-4 sm:space-x-6"};function ws(t,e,s,r,o,n){const c=ds,d=Qe,p=Ue;return l(),u("header",ps,[a("div",_s,[a("div",fs,[a("img",{alt:o.title,src:ms,class:"w-5"},null,8,xs),a("h1",gs,h(o.title),1)]),a("div",ys,[i(c,{tag:n.buttonTag,"show-text":n.$screen.xs},null,8,["tag","show-text"]),i(d,{tag:n.buttonTag,"show-text":n.$screen.xs},null,8,["tag","show-text"])])]),i(p)])}var bs=m(hs,[["render",ws]]);const vs={name:"DefaultLayout"},$s={class:"min-h-screen flex flex-col bg-white text-black dark:bg-black dark:text-white"},ks={class:"flex items-stretch flex-grow"},Cs={class:"container py-12"};function As(t,e,s,r,o,n){const c=bs,d=Oe,p=X("router-view"),_=we;return l(),u("div",$s,[i(c),i(d),a("main",ks,[a("div",Cs,[i(p)])]),i(_)])}var Ms=m(vs,[["render",As]]);const Ss={default:Ms};function Ts(t){return t.map(e=>{var s;return{path:e.path,component:Ss[((s=e.meta)==null?void 0:s.layout)||"default"],children:[j(A({},e),{path:""})]}})}const js="modulepreload",dt={},Bs="/",mt=function(e,s){return!s||s.length===0?e():Promise.all(s.map(r=>{if(r=`${Bs}${r}`,r in dt)return;dt[r]=!0;const o=r.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":js,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((d,p)=>{c.addEventListener("load",d),c.addEventListener("error",p)})})).then(()=>e())},Ls={name:"FormInput",props:{modelValue:{type:[String,Number],default:null},type:{type:String,default:"text"}},methods:{onInput(t){this.$emit("update:modelValue",t.target.value)},onChange(t){this.$emit("change",t.target.value)}}},Ns=["value"];function Os(t,e,s,r,o,n){return l(),u("input",{value:s.modelValue,class:"block py-2 px-3 w-full rounded-md border shadow-sm outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-25 dark:bg-black dark:border-gray-darkest dark:focus:border-primary",onInput:e[0]||(e[0]=(...c)=>n.onInput&&n.onInput(...c)),onChange:e[1]||(e[1]=(...c)=>n.onChange&&n.onChange(...c))},null,40,Ns)}var Ds=m(Ls,[["render",Os]]);const Ps={name:"AddAccountButton",inject:["$app"],data(){return{visible:!1,account:null}},methods:{openModal(){this.visible=!0},onConfirm(){this.account&&(this.$app.addAccount(this.account),this.account=null)},onEnterKey(){this.onConfirm(),this.visible=!1}}};function Rs(t,e,s,r,o,n){const c=b,d=Ds,p=z;return l(),u(k,null,[S(t.$slots,"default",{open:n.openModal},()=>[i(c,N(t.$attrs,{name:"plus-circle",class:"text-primary transform scale-150 cursor-pointer",onClick:n.openModal}),null,16,["onClick"])]),i(p,{modelValue:o.visible,"onUpdate:modelValue":e[1]||(e[1]=_=>o.visible=_),"panel-mode":!0,title:"Add Account",onConfirm:n.onConfirm,onCancel:e[2]||(e[2]=_=>o.account=null)},{default:y(()=>[i(d,{modelValue:o.account,"onUpdate:modelValue":e[0]||(e[0]=_=>o.account=_),placeholder:"myaccount.wam",onKeyup:Ot(n.onEnterKey,["enter","native"])},null,8,["modelValue","onKeyup"])]),_:1},8,["modelValue","onConfirm"])],64)}var ht=m(Ps,[["render",Rs]]);const Is={name:"AddAccountSection",inject:["$app"]},Vs={class:"flex flex-col items-center justify-center space-y-6 h-full"},Us=a("div",{class:"flex flex-col items-center justify-center space-y-4"},[a("h3",{class:"font-bold text-xl"}," No monitored accounts "),a("p",{class:"block text-center text-gray-dark max-w-md"},' You are not monitoring any accounts. Click the "Add Account" button to start monitoring. ')],-1);function Ws(t,e,s,r,o,n){const c=b,d=lt,p=ht;return l(),u("div",Vs,[i(c,{name:"plus-circle",class:"text-6xl text-primary"}),Us,i(p,null,{default:y(({open:_})=>[i(d,{text:"Add Account",class:"text-white bg-primary",onClick:_},null,8,["onClick"])]),_:1})])}var zs=m(Is,[["render",Ws]]);const Es={name:"SupportCard",data(){return{showDialog:!1,account:Qt}},computed:{showTip(){return G.value}},methods:{onSendClick(){this.showDialog=!0},onConfirm(){G.value=!1}}},Fs={key:0,class:"flex flex-col items-center justify-between p-8 bg-primary text-white rounded-md shadow-sm sm:flex-row"},Hs=a("h2",{class:"text-2xl font-bold mb-6 sm:mb-0"},"Do you like this project?",-1),qs={key:1,class:"flex items-center justify-between text-gray-light dark:text-gray-darker"},Xs=a("span",null,"Do you like this project?",-1),Js=a("span",null,"Send a tip",-1),Ks={class:"flex flex-col items-center justify-center min-h-full py-4 space-y-4"},Qs={class:"block text-lg"};function Ys(t,e,s,r,o,n){const c=P,d=b,p=ut,_=z;return l(),u(k,null,[n.showTip?(l(),u("div",Fs,[Hs,i(c,{text:"Send a tip",icon:"smile",onClick:n.onSendClick},null,8,["onClick"])])):(l(),u("div",qs,[Xs,a("span",{class:"flex items-center space-x-2 cursor-pointer",onClick:e[0]||(e[0]=(...g)=>n.onSendClick&&n.onSendClick(...g))},[i(d,{name:"smile"}),Js])])),i(_,{modelValue:o.showDialog,"onUpdate:modelValue":e[1]||(e[1]=g=>o.showDialog=g),"cancel-button":!1,"confirm-button":"Done",size:"small",title:"Send WAXP Tokens",class:"dark text-white",onConfirm:n.onConfirm},{default:y(()=>[a("div",Ks,[i(p,{value:o.account},null,8,["value"]),a("strong",Qs," WAX Account Name: "+h(o.account),1)])]),_:1},8,["modelValue","onConfirm"])],64)}var Gs=m(Es,[["render",Ys]]);const Zs={name:"Tag",props:{text:{type:String,required:!0}}},tn={class:"px-2 py-1 text-gray-dark bg-gray-lightest border rounded-md whitespace-nowrap dark:bg-gray-darkest dark:border-gray-dark"};function en(t,e,s,r,o,n){return l(),u("span",tn,h(s.text),1)}var sn=m(Zs,[["render",en]]);const nn={name:"Gauge",props:{value:{type:Number,default:0},size:{type:String,default:"4rem"},radius:{type:Number,default:50},strokeWidth:{type:Number,default:20}},watch:{value:"updatePercent"},data(){return{percent:0}},computed:{innerRadius(){return this.radius-this.strokeWidth/2},dashArray(){return this.innerRadius*2*Math.PI},dashOffset(){return this.dashArray-this.percent/100*this.dashArray},viewBox(){return`0 0 ${this.radius*2} ${this.radius*2}`}},methods:{updatePercent(){this.percent=Math.min(Math.max(this.value,1),100)}},mounted(){setTimeout(()=>this.updatePercent(),50)}},an=["viewBox"],on={x:"50",y:"50","font-size":"100%","font-family":"sans-serif","font-weight":"normal","text-anchor":"middle","alignment-baseline":"middle","dominant-baseline":"central",fill:"currentColor",class:"text-black dark:text-gray-light"},rn=["stroke-width","cy","cx","r"],cn=["stroke-width","stroke-dasharray","cy","cx","r"];function ln(t,e,s,r,o,n){return l(),u("div",{style:O({width:s.size,height:s.size})},[(l(),u("svg",{viewBox:n.viewBox,width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg"},[a("g",null,[a("text",on,h(s.value)+"% ",1),a("circle",{"stroke-width":s.strokeWidth,cy:s.radius,cx:s.radius,r:n.innerRadius,fill:"none",stroke:"currentColor",class:"text-gray-lighter dark:text-gray-darkest"},null,8,rn),a("circle",{style:O({strokeDashoffset:n.dashOffset}),"stroke-width":s.strokeWidth,"stroke-dasharray":n.dashArray,cy:s.radius,cx:s.radius,r:n.innerRadius,stroke:"currentColor","stroke-linecap":"round",fill:"none",class:"transition-all duration-1000 ease-out transform origin-center -rotate-90"},null,12,cn)])],8,an))],4)}var un=m(nn,[["render",ln]]);const dn={name:"ResourceStats",props:{stats:{type:Object,required:!0},title:{type:String,required:!0},metric:{type:String,required:!0},color:{type:String,default:null}},computed:{text(){const t=Math.floor(this.stats.used/1e3),e=Math.floor(this.stats.max/1e3);return`${t}${this.metric} / ${e}${this.metric}`}}},mn={class:"flex flex-col items-center justify-center space-y-2"},hn={class:"flex flex-col items-center text-xs"},pn={class:"font-bold text-gray-darkest dark:text-gray-lightest"};function _n(t,e,s,r,o,n){const c=un;return l(),u("div",mn,[i(c,{color:s.color,value:s.stats.percent},null,8,["color","value"]),a("div",hn,[a("span",pn,h(s.title),1),a("span",{style:O({minWidth:"5.5rem"}),class:"text-gray-dark whitespace-nowrap text-center"},h(n.text),5)])])}var fn=m(dn,[["render",_n]]);const pt=Dt(),xn={name:"Countdown",props:{date:{type:Date,default:null}},computed:{diff(){return T(this.date||pt.value).diff(pt.value)},timer(){return this.diff>0?Pt(this.diff,{leading:!0}):"Time to mine!"}}};function gn(t,e,s,r,o,n){return l(),u("strong",null,h(n.timer),1)}var yn=m(xn,[["render",gn]]);const wn={name:"AccountCard",inject:["$app","$screen"],props:{account:{type:Object,required:!0}},computed:{links(){return[{text:"View on Bloks",href:`https://wax.bloks.io/account/${this.account.name}`},{text:"View NFT",href:`https://wax.atomichub.io/explorer/account/${this.account.name}`}]},landCommission(){return this.account.lastMine?this.account.lastMine.land.commission/100:0},lastMinedAt(){return this.account.lastMine?ne(this.account.lastMine.last_mine):"Loading..."},nextMineAt(){return this.account.nextMine?T.utc(this.account.nextMine).toDate():null},history(){const t=[...this.account.history];return this.$screen.md?t:this.$screen.xs?t.splice(-4):t.splice(-3)},claims(){return this.account.claims||[]}},methods:{onDelete(){return this.$app.removeAccount(this.account.name)},transactionLink(t){return`https://wax.bloks.io/transaction/${t}`}}},bn={class:"bg-white border rounded-md shadow-sm dark:bg-black dark:border-gray-darkest"},vn={class:"flex flex-col p-4 border-b dark:border-gray-darkest md:p-6 sm:flex-row"},$n={class:"flex flex-col flex-grow space-y-4"},kn={class:"flex items-baseline space-x-2"},Cn={class:"flex items-baseline space-x-2 flex-grow sm:flex-grow-0"},An={key:0,class:"text-success text-sm"},Mn={class:"text-gray-dark text-sm"},Sn={class:"flex flex-col space-y-2 text-gray-darkest dark:text-gray-lightest"},Tn={class:"flex flex-col lg:space-x-6 lg:flex-row"},jn={class:"flex flex-col lg:space-x-6 lg:flex-row mr-1"},Bn={class:"flex items-baseline space-x-2"},Ln=a("span",{class:"text-sm flex-grow sm:flex-grow-0"},"CPU Staked",-1),Nn={class:"text-sm"},On={class:"flex items-baseline space-x-2"},Dn=a("span",{class:"text-sm flex-grow sm:flex-grow-0"},"Land Commission",-1),Pn={class:"text-sm"},Rn={class:"flex flex-nowrap items-center justify-between space-x-4 mt-6 sm:mt-0"},In={class:"flex flex-col lg:flex-row"},Vn={class:"flex flex-grow flex-col items-baseline space-y-4 p-4 border-b sm:flex-row sm:space-x-4 sm:space-y-0 md:px-6 lg:border-0 dark:border-gray-darkest"},Un={class:"flex items-baseline flex-nowrap space-x-2"},Wn=a("span",{class:"text-sm"},"Last Mined",-1),zn={class:"text-sm"},En={class:"flex items-center space-x-1 text-xs"},Fn=["href"],Hn={class:"flex px-4 py-2 items-baseline justify-between space-x-4 font-semibold text-primary md:px-6 lg:py-4"},qn=["href"],Xn={class:"text-sm"};function Jn(t,e,s,r,o,n){const c=yn,d=b,p=it,_=fn,g=sn;return l(),u("div",bn,[a("div",vn,[a("div",$n,[a("div",kn,[a("div",Cn,[a("strong",null,h(s.account.tag||"miner"),1),n.nextMineAt?(l(),x(c,{key:0,date:n.nextMineAt,class:"text-info text-sm"},null,8,["date"])):w("",!0)]),n.claims.length?(l(),u("strong",An,h(n.claims.length)+" NFTs ",1)):w("",!0),a("strong",Mn,h(s.account.name),1),i(d,{name:"trash",class:"text-danger cursor-pointer",onClick:n.onDelete},null,8,["onClick"])]),a("div",Sn,[a("div",Tn,[i(p,{amount:s.account.tlm,expanded:!n.$screen.sm,decimals:4,type:"TLM"},null,8,["amount","expanded"]),i(p,{amount:s.account.wax,expanded:!n.$screen.sm,type:"WAX"},null,8,["amount","expanded"])]),a("div",jn,[a("div",Bn,[i(d,{name:"processor",class:"text-gray-dark"}),Ln,a("strong",Nn,h(s.account.cpu.staked.toFixed(2))+" WAX",1)]),a("div",On,[i(d,{name:"gold",class:"text-gray-dark"}),Dn,a("strong",Pn,h(n.landCommission.toFixed(2))+"% TLM",1)])])])]),a("div",Rn,[i(_,{stats:s.account.cpu,title:"CPU",metric:"ms",class:"text-cyan"},null,8,["stats"]),i(_,{stats:s.account.net,title:"NET",metric:"ms",class:"text-yellow"},null,8,["stats"]),i(_,{stats:s.account.ram,title:"RAM",metric:"KB",class:"text-orange"},null,8,["stats"])])]),a("div",In,[a("div",Vn,[a("div",Un,[i(d,{name:"calendar-alt",class:"text-gray-dark"}),Wn,a("strong",zn,h(n.lastMinedAt),1)]),a("div",En,[(l(!0),u(k,null,I(n.history,v=>(l(),u("a",{key:v.last_mine_tx,href:n.transactionLink(v.last_mine_tx),target:"_blank",rel:"noreferrer"},[i(g,{text:v.info.quantity},null,8,["text"])],8,Fn))),128))])]),a("div",Hn,[(l(!0),u(k,null,I(n.links,v=>(l(),u("a",{key:v.href,href:v.href,target:"_blank",rel:"noreferrer",class:"flex flex-nowrap items-baseline space-x-2"},[i(d,{name:"external-link-alt"}),a("span",Xn,h(v.text),1)],8,qn))),128))])])])}var Kn=m(wn,[["render",Jn]]);const Qn={name:"HomePage",inject:["$app"],computed:{updatedAt(){return this.$app.updatedAt?T(this.$app.updatedAt).format("MMMM D YYYY, HH:mm:ss"):"Not updated"}}},Yn={class:"flex flex-col items-stretch justify-between mb-6 sm:flex-row sm:items-center"},Gn={class:"flex items-center space-x-4 justify-between"},Zn=a("h2",{class:"font-bold text-xl"},"Accounts",-1),ta={class:"text-sm text-gray-light"},ea={class:"flex flex-col space-y-6"};function sa(t,e,s,r,o,n){const c=ht,d=Kn,p=Gs,_=zs;return n.$app.hasAccounts?(l(),u(k,{key:0},[a("div",Yn,[a("div",Gn,[Zn,i(c,{class:"relative top-2 sm:top-0"})]),a("span",ta," Last update: "+h(n.updatedAt),1)]),a("div",ea,[(l(!0),u(k,null,I(n.$app.accounts,g=>(l(),x(d,{key:g.name,account:g},null,8,["account"]))),128)),i(p)])],64)):(l(),x(_,{key:1}))}var na=m(Qn,[["render",sa]]);const aa=[{name:"index",path:"/",component:na,props:!0},{name:"share-id",path:"/share/:id",component:()=>mt(()=>import("./[id].c01bf163.js"),["assets/[id].c01bf163.js","assets/vendor.a6ee33be.js"]),props:!0},{name:"all",path:"/:all(.*)*",component:()=>mt(()=>import("./[...all].a9ad6661.js"),[]),props:!0}],oa=Ts(aa),ra=Rt({history:It(),routes:oa});var ca={install:()=>{}};const ia=Vt();Ut(ie).use(ia).use(ra).use(ca).mount("#app");export{st as a,Zt as h};
