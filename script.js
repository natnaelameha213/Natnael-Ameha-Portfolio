const FORM_URL='https://formsubmit.co/ajax/natnaelameha31@gmail.com',EMAIL='natnaelameha31@gmail.com',GH='https://github.com/natnaelameha213/';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const P=[
['ProClinic','Management','Hospital & clinic system','Patient records, appointments and billing.','proclinic','http://proclinic-hospital.freedev.app/','ProClinic_Hospital',['PHP','MySQL','Bootstrap'],['Patients, doctors, billing','Role-based admin']],
['ProHotel','Business','Hotel booking system','Room booking, restaurant and admin panel.','prohotel','https://prohotel-booking.freedev.app/restaurant.php','ProHotel_Booking',['PHP','MySQL'],['Room availability','Booking management']],
['ProStock POS','Management','Inventory & POS','Stock tracking and point-of-sale.','prostock','https://prostok-pos.freedev.app/dashboard.php','ProStock_POS',['PHP','MySQL'],['Sales and stock reports','Cashier roles']],
['ProCRM','Management','Customer management','Leads, customers and pipeline dashboard.','procrm','https://procrm-professional.freedev.app/dashboard.php','ProCRM_Professional',['PHP','MySQL'],['Customer pipeline','Dashboard stats']],
['MyStore','E-commerce','Online store','Catalog, cart, checkout and admin.','mystore','https://ecommerce.freedev.app/','ecommerce',['PHP','MySQL','JS'],['Cart & orders','Product admin']],
['ProCourier','Business','Delivery management','Parcel tracking and dispatch.','procourier','https://procourier-delivery.freedev.app/','ProCourier_Delivery',['PHP','MySQL'],['Shipment tracking','Dispatch panel']],
['ProJobs','Full-Stack','Job portal','Employers post jobs, candidates apply.','projobs','https://projobs-portal.freedev.app/','ProJobs_Portal',['PHP','MySQL'],['Job posts & applications','Employer/candidate roles']],
['ProMarket','E-commerce','Multi-vendor marketplace','Many vendors, one marketplace.','promarket','https://promarket-multivendor.freedev.app/','ProMarket_MultiVendor',['PHP','MySQL'],['Vendor dashboards','Orders per vendor']],
['EliteDrive','Business','Car rental system','Browse, book and manage rentals.','elitedrive','https://car-rentall.freedev.app/','car-rental',['PHP','MySQL'],['Fleet & booking','Admin panel']],
['Glamour Salon','Frontend','Salon booking website','Static booking site with admin page.','salon','https://glamour-salon-na.netlify.app/','glamour-salon',['HTML','CSS','JS'],['Booking form','Admin page']],
['LearnX','Full-Stack','E-learning platform','Courses and learning platform.','learnx','https://learnx-e-learning-platform.netlify.app/','learnx-e-learning-platform',['HTML','CSS','JS'],['Courses & lessons']],
['DigiMarket','E-commerce','Digital product marketplace','Sell and buy digital products.','digimarket','https://digimarket-na.netlify.app/','Digimarket-Digital-MarketPlace',['HTML','CSS','JS'],['Product listings','Dark/purple UI']],
['FinancePro','Frontend','Personal finance dashboard','Track income, expenses and budgets.','financepro','https://financepro-na.netlify.app/','Financepro-Personal-Finance-Dashboard',['HTML','CSS','JS'],['Charts & budgets'] ]
].map(a=>({n:a[0],c:a[1],t:a[2],d:a[3],img:a[4],live:a[5],gh:a[6],tech:a[7],feat:a[8]}));
const S=(k,v)=>{try{return v===undefined?localStorage.getItem(k):localStorage.setItem(k,v)}catch(e){return null}};
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2000)};
// theme
const root=document.documentElement;root.dataset.theme=S('theme')||(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');
$('#theme').onclick=()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';S('theme',root.dataset.theme)};
$('#burger').onclick=()=>$('#menu').classList.toggle('open');$$('#menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
// i18n
const T={am:{home:'መነሻ',about:'ስለ እኔ',projects:'ፕሮጀክቶች',services:'አገልግሎቶች',process:'የአሰራር ሂደት',resume:'ሲቪ',contact:'ያግኙኝ',avail:'ለፍሪላንስ ዝግጁ',hi:'ሰላም፣ እኔ',lead:'ለእውነተኛ ንግዶች ፈጣንና ደህንነቱ የተጠበቀ የድር መተግበሪያዎችን እሠራለሁ።',viewwork:'ሥራዎቼን ይመልከቱ →',hire:'ቅጥሩኝ',cv:'ሲቪ አውርድ ⬇',s1:'የተሠሩ ፕሮጀክቶች',s2:'ፉል-ስታክ ሲስተሞች',s3:'ፍሮንትኤንድ ፕሮጀክቶች',s4:'ከርቀት ለመላው ዓለም'},
ar:{home:'الرئيسية',about:'نبذة',projects:'المشاريع',services:'الخدمات',process:'آلية العمل',resume:'السيرة الذاتية',contact:'تواصل',avail:'متاح للعمل الحر',hi:'مرحباً، أنا',lead:'أبني تطبيقات ويب سريعة وآمنة للشركات الحقيقية.',viewwork:'شاهد أعمالي ←',hire:'وظّفني',cv:'تحميل السيرة ⬇',s1:'مشاريع منجزة',s2:'أنظمة متكاملة',s3:'مشاريع واجهات',s4:'عن بُعد حول العالم'},
fr:{home:'Accueil',about:'À propos',projects:'Projets',services:'Services',process:'Processus',resume:'CV',contact:'Contact',avail:'Disponible en freelance',hi:'Salut, je suis',lead:'Je crée des applications web rapides et sécurisées pour de vraies entreprises.',viewwork:'Voir mes projets →',hire:'Me recruter',cv:'Télécharger le CV ⬇',s1:'Projets réalisés',s2:'Systèmes full-stack',s3:'Projets frontend',s4:'À distance, partout'}};
const en={};$$('[data-i]').forEach(e=>en[e.dataset.i]=e.textContent);T.en=en;
function setLang(l){const d=T[l]||en;$$('[data-i]').forEach(e=>e.textContent=d[e.dataset.i]||en[e.dataset.i]);document.documentElement.lang=l;document.documentElement.dir=l==='ar'?'rtl':'ltr';S('lang',l)}
$('#lang').onchange=e=>setLang(e.target.value);const L=S('lang');if(L&&T[L]){$('#lang').value=L;setLang(L)}
// typing
const words=['Full-Stack Web Developer','PHP & MySQL Specialist','Freelance Developer'];let wi=0,ci=0,del=0;
(function ty(){const w=words[wi];ci+=del?-1:1;$('#typed').textContent=w.slice(0,ci);let s=del?35:70;if(!del&&ci===w.length){del=1;s=1400}else if(del&&ci===0){del=0;wi=(wi+1)%words.length;s=300}setTimeout(ty,s)})();
// projects
let cat='All',q='',favs=[];try{favs=JSON.parse(S('favs')||'[]')}catch(e){}
const cats=['All',...new Set(P.map(p=>p.c))];if(favs.length)cats.push('★ Favorites');
$('#filters').innerHTML=cats.map(c=>`<button class="f${c==='All'?' on':''}" data-c="${c}">${c}</button>`).join('');
$('#filters').onclick=e=>{const b=e.target.closest('.f');if(!b)return;cat=b.dataset.c;$$('.f').forEach(x=>x.classList.toggle('on',x===b));draw()};
$('#search').oninput=e=>{q=e.target.value.toLowerCase();draw()};
const thumb=p=>p.img?`<img loading="lazy" src="assets/projects/${p.img}.jpg" alt="${p.n} screenshot">`:`<span>${p.n.slice(0,2)}</span>`;
function draw(){const list=P.filter(p=>(cat==='All'||(cat[0]==='★'?favs.includes(p.n):p.c===cat))&&(p.n+p.t+p.tech.join()).toLowerCase().includes(q));
$('#grid').innerHTML=list.map(p=>`<article class="proj reveal in"><div class="thumb" data-m="${p.n}">${thumb(p)}<button class="fav${favs.includes(p.n)?' on':''}" data-f="${p.n}" aria-label="Favorite">${favs.includes(p.n)?'♥':'♡'}</button></div>
<div class="pb"><h3>${p.n}</h3><p>${p.t}. ${p.d}</p><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
<div class="acts"><a class="btn primary sm" href="${p.live}" target="_blank" rel="noopener">Live Demo</a>${p.gh?`<a class="btn ghost sm" href="${GH+p.gh}" target="_blank" rel="noopener">GitHub</a>`:''}<button class="btn ghost sm" data-m="${p.n}">Details</button></div></div></article>`).join('')||'<p class="muted">No projects found.</p>'}
$('#grid').onclick=e=>{const f=e.target.closest('[data-f]');if(f){const n=f.dataset.f;favs=favs.includes(n)?favs.filter(x=>x!==n):[...favs,n];S('favs',JSON.stringify(favs));draw();return}
const m=e.target.closest('[data-m]');if(m)openM(P.find(p=>p.n===m.dataset.m))};
function openM(p){$('#mbox').innerHTML=`<button class="icon x" id="mx" aria-label="Close">✕</button>${p.img?`<img src="assets/projects/${p.img}.jpg" alt="${p.n}">`:''}<h3>${p.n}</h3><p class="muted">${p.t}. ${p.d}</p><h4>Key features</h4><ul>${p.feat.map(f=>`<li>${f}</li>`).join('')}</ul><h4>Tech stack</h4><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>
<div class="acts" style="margin-top:16px"><a class="btn primary sm" href="${p.live}" target="_blank" rel="noopener">Live Demo</a>${p.gh?`<a class="btn ghost sm" href="${GH+p.gh}" target="_blank" rel="noopener">GitHub</a>`:''}<button class="btn ghost sm" id="cl">Copy link</button></div>`;
$('#modal').classList.add('open');$('#mx').onclick=cm;$('#cl').onclick=()=>cp(p.live)}
const cm=()=>$('#modal').classList.remove('open');$('#modal').onclick=e=>{if(e.target.id==='modal')cm()};addEventListener('keydown',e=>e.key==='Escape'&&cm());
const cp=t=>navigator.clipboard?.writeText(t).then(()=>toast('Copied ✓'),()=>toast(t));draw();
$('#copyMail').onclick=e=>{e.preventDefault();cp(EMAIL)};
$('#share').onclick=()=>navigator.share?navigator.share({title:'Natnael Ameha',url:location.href}).catch(()=>{}):cp(location.href);
// reveal, counters, scroll
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});$$('.reveal').forEach(e=>io.observe(e));
const co=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,n=+el.dataset.count;let i=0;const t=setInterval(()=>{el.textContent=++i;if(i>=n)clearInterval(t)},80);co.unobserve(el)}));$$('[data-count]').forEach(e=>co.observe(e));
const secs=$$('main section');addEventListener('scroll',()=>{$('#top').classList.toggle('show',scrollY>500);const y=scrollY+120;let cur='';secs.forEach(s=>{if(s.offsetTop<=y)cur=s.id});$$('#menu a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+cur))},{passive:true});
$('#top').onclick=()=>scrollTo({top:0});$('#yr').textContent=new Date().getFullYear();
// form
$('#form').onsubmit=async e=>{e.preventDefault();const f=e.target,st=$('#status');if(!f.name.value.trim()||!/\S+@\S+\.\S+/.test(f.email.value)||!f.message.value.trim()){st.textContent='Please fill name, a valid email and message.';return}
st.textContent='Sending…';try{const r=await fetch(FORM_URL,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(f)))});if(!r.ok)throw 0;f.reset();st.textContent='';toast('Message sent ✓')}catch(x){st.textContent='Could not send. Please use Telegram or email.'}};
