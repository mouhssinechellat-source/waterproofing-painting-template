/* Dalas Étanchéité & Peinture – script.js */
/* =====================================================================
   1. CONFIGURATION – EDIT THIS SECTION ONLY (everything else can stay)
   ===================================================================== */

/* 1a. Contact details. Links, buttons and the request form all use these. */
const CONFIG={
  phoneLocal:"0621681357",   // shown on the page
  phoneIntl:"212621681357",  // used for tel: and wa.me links (no + or 0)
  email:"rinzhor@gmail.com"
};

/* 1b. Price guide, in MAD per m². The estimator and the price cards use these.
   "both" is the sum of the two. Replace with your real prices. */
const PRICES={
  wp:{min:80,max:150},  // roof waterproofing / tar sealing
  pt:{min:35,max:70}    // facade & roof painting
};

/* 1c. Portfolio photos and videos. One object per item.
   type: "photo" | "video" | "ba" (before/after)   cat: "wp" (waterproofing) | "pt" (painting)
   t: title shown on the tile (a translation key such as "l1", or plain text)
   photo:  {type:"photo", cat:"wp", t:"Villa Agdal", src:"images/villa-agdal.jpg"}
   video:  {type:"video", cat:"pt", t:"Facade painting", src:"videos/facade.mp4", poster:"images/facade-poster.jpg"}
   before/after: {type:"ba", cat:"wp", t:"Roof Souissi", before:"images/before.jpg", after:"images/after.jpg"}
   Items without src/before/after show a colour placeholder. Replace the examples below. */
const MEDIA=[
{type:"ba",cat:"wp",t:"l1"},{type:"photo",cat:"pt",t:"l2"},{type:"photo",cat:"wp",t:"l3"},
{type:"video",cat:"wp",t:"l4"},{type:"ba",cat:"pt",t:"l5"},{type:"video",cat:"pt",t:"l6"}];

/* =====================================================================
   2. APPLICATION CODE
   ===================================================================== */
const PH=CONFIG.phoneIntl,EM=CONFIG.email;
const D={
ar:{h1:"تزفيت الأسطح وصباغة الواجهات بالرباط",h2:"دالاس لعزل الأسطح وصباغة الواجهات: نحمي بيتك أو فيلتك من الرطوبة والتسربات ونعيد لواجهته جمالها، بالرباط وتمارة والهرهورة وسلا.",
n1:"الخدمات",n2:"أعمالنا",n3:"آراء الزبناء",n4:"اطلب خدمة",cta1:"اطلب معاينة مجانية",c_wa:"تواصل عبر واتساب",c_call:"اتصل الآن",
t1:"معاينة وثمن مجاني بالرباط",t2:"حماية دائمة من التسربات والطقس",t3:"عمل نظيف وجدّي",
s_title:"خدماتنا",s_sub:"حلول للمنازل والفيلات والعمارات، بمواد تناسب مناخ الرباط الرطب.",prob:"المشاكل التي نحلها",sol:"ما نقوم به",
s1t:"تزفيت وعزل الأسطح",s1a:"تسرب مياه الأمطار إلى الداخل",s1b:"رطوبة وبقع على الأسقف",s1c:"تشققات الإسمنت وحرارة الصيف",s1d:"كشف مصدر التسرب وإصلاح الشقوق",s1e:"تزفيت وعزل بأغشية مقاومة للشمس والمطر",
s2t:"صباغة الواجهات والأسطح",s2a:"ألوان باهتة وطلاء متقشر",s2b:"تشققات وآثار رطوبة على الجدران",s2c:"تأثر الواجهة بالشمس والبحر",s2d:"تحضير الجدران ومعالجة التشققات",s2e:"طلاء خارجي عالي التحمل بألوان تناسب الفيلا",
p_title:"أعمالنا: صور وفيديوهات",p_sub:"تصفح مشاريع أنجزناها، وقارن قبل وبعد.",f_all:"الكل",f_wp:"العزل والتزفيت",f_pt:"الصباغة",f_ba:"قبل وبعد",f_vid:"فيديو",
l1:"عزل سطح فيلا – أكدال",l2:"صباغة واجهة – السويسي",l3:"تزفيت سطح – تمارة",l4:"فيديو: مراحل العزل",l5:"صباغة سطح – الهرهورة",l6:"فيديو: صباغة واجهة",before:"قبل",after:"بعد",ph:"أضف صورة المشروع هنا",bdg:"قبل/بعد",
add_t:"أضف صورك وفيديوهاتك",add_n:"الملفات المحلية تظهر في هذه الجلسة فقط. للنشر الدائم ضع الروابط في المصفوفة MEDIA داخل الكود.",add_f:"اختر ملفات",add_u:"أو رابط صورة/فيديو",add_c:"الفئة",add_b:"أضف إلى المعرض",
r_title:"ماذا يقول زبناؤنا",rf_title:"شاركنا رأيك",rf_stars:"التقييم",rf_text:"تعليقك",rf_area:"الحي / المدينة",rf_send:"أنشر رأيي",rf_ok:"شكرا! تمت إضافة رأيك.",
r1:"كان السطح يتسرب كل شتاء، ومنذ التزفيت لم تنزل قطرة. عمل نظيف وفي الوقت المحدد.",r1n:"سعاد",r1a:"حي الرياض",
r2:"صباغة الواجهة غيّرت شكل الفيلا بالكامل. فريق محترم وجاد.",r2n:"يوسف",r2a:"السويسي",
r3:"أعطونا ثمنا واضحا بعد المعاينة والتزموا به.",r3n:"نادية",r3a:"تمارة",
r4:"عزلوا سطح المنزل قبل الشتاء بدون أي مشكل. أنصح بهم.",r4n:"محمد",r4a:"سلا",
c_title:"اطلب خدمة أو معاينة",c_sub:"املأ الطلب وسنرد عليك بسرعة عبر واتساب أو الهاتف.",
f_name:"الاسم الكامل",f_phone:"الهاتف (+212)",f_mail:"البريد الإلكتروني (Gmail)",f_service:"الخدمة",o_wp:"تزفيت وعزل السطح",o_pt:"صباغة الواجهة/السطح",o_both:"الخدمتان معا",
f_prop:"نوع العقار",o_house:"منزل",o_villa:"فيلا",o_bld:"عمارة",f_area:"الحي بالرباط",f_msg:"تفاصيل المشروع",f_send:"تحقق وأرسل الطلب",
e_name:"أدخل اسمك",e_phone:"رقم هاتف مغربي غير صحيح (مثال: 0621681357)",e_mail:"البريد الإلكتروني غير صحيح",e_area:"أدخل الحي",
sk:"تم تجهيز طلبك. اختر طريقة الإرسال:",s_wa:"أرسل عبر واتساب",s_em:"أرسل بالبريد",s_cp:"انسخ التفاصيل",copied:"تم النسخ",
req:"طلب خدمة – دالاس",a_title:"نغطي الأحياء التالية",
sh_title:"شارك مع جيرانك",sh_sub:"تعرف من يحتاج تزفيت سطح أو صباغة واجهة؟ شارك الصفحة في مجموعات حيّك.",sh_copy:"نسخ الرابط",
sh_text:"دالاس: تزفيت الأسطح وصباغة الواجهات بالرباط – معاينة مجانية 0621681357",foot:"© دالاس لعزل الأسطح والصباغة – الرباط، تمارة، الهرهورة، سلا",close:"إغلاق"},
fr:{h1:"Étanchéité de toiture et peinture de façades à Rabat",h2:"Dalas protège votre maison ou villa de l’humidité et des fuites, et redonne du caractère à sa façade, à Rabat, Témara, Harhoura et Salé.",
n1:"Services",n2:"Réalisations",n3:"Avis clients",n4:"Demander un devis",cta1:"Visite et devis gratuits",c_wa:"Écrire sur WhatsApp",c_call:"Appeler",
t1:"Devis gratuit à Rabat",t2:"Protection durable contre fuites et intempéries",t3:"Chantier propre et fiable",
s_title:"Nos services",s_sub:"Des solutions pour maisons, villas et immeubles, adaptées au climat humide de Rabat.",prob:"Problèmes résolus",sol:"Notre intervention",
s1t:"Étanchéité des toitures",s1a:"Infiltrations d’eau de pluie",s1b:"Humidité et taches aux plafonds",s1c:"Fissures du béton, chaleur estivale",s1d:"Repérage des fuites et réparation des fissures",s1e:"Goudronnage et membranes résistantes au soleil et à la pluie",
s2t:"Peinture façades et toitures",s2a:"Couleurs ternies, peinture qui s’écaille",s2b:"Fissures et traces d’humidité sur les murs",s2c:"Façade agressée par le soleil et l’air marin",s2d:"Préparation des murs et traitement des fissures",s2e:"Peinture extérieure haute résistance, teintes adaptées à votre villa",
p_title:"Nos réalisations en photos et vidéos",p_sub:"Parcourez nos chantiers et comparez avant/après.",f_all:"Tout",f_wp:"Étanchéité",f_pt:"Peinture",f_ba:"Avant / Après",f_vid:"Vidéos",
l1:"Étanchéité villa – Agdal",l2:"Façade peinte – Souissi",l3:"Toiture – Témara",l4:"Vidéo : étapes d’étanchéité",l5:"Toiture peinte – Harhoura",l6:"Vidéo : peinture de façade",before:"Avant",after:"Après",ph:"Ajoutez ici la photo du chantier",bdg:"Avant/Après",
add_t:"Ajouter vos photos et vidéos",add_n:"Les fichiers locaux ne restent que le temps de la session. Pour publier durablement, placez les liens dans le tableau MEDIA du code.",add_f:"Choisir des fichiers",add_u:"Ou lien photo/vidéo",add_c:"Catégorie",add_b:"Ajouter à la galerie",
r_title:"Ce que disent nos clients",rf_title:"Donnez votre avis",rf_stars:"Note",rf_text:"Votre commentaire",rf_area:"Quartier / Ville",rf_send:"Publier mon avis",rf_ok:"Merci ! Votre avis a été ajouté.",
r1:"Le toit fuyait chaque hiver ; depuis l’étanchéité, plus une goutte. Chantier propre et dans les délais.",r1n:"Souad",r1a:"Hay Riad",
r2:"La peinture a transformé notre villa. Équipe sérieuse et respectueuse.",r2n:"Youssef",r2a:"Souissi",
r3:"Un prix clair après la visite, et ils l’ont respecté.",r3n:"Nadia",r3a:"Témara",
r4:"Toit de la maison étanchéifié avant l’hiver sans aucun souci. Je recommande.",r4n:"Mohamed",r4a:"Salé",
c_title:"Demandez un devis ou une visite",c_sub:"Remplissez la demande, nous répondons vite sur WhatsApp ou par téléphone.",
f_name:"Nom complet",f_phone:"Téléphone (+212)",f_mail:"E-mail (Gmail)",f_service:"Service souhaité",o_wp:"Étanchéité de toiture",o_pt:"Peinture façade/toiture",o_both:"Les deux",
f_prop:"Type de bien",o_house:"Maison",o_villa:"Villa",o_bld:"Immeuble",f_area:"Quartier à Rabat",f_msg:"Détails du projet",f_send:"Vérifier et envoyer",
e_name:"Indiquez votre nom",e_phone:"Numéro marocain invalide (ex. 0621681357)",e_mail:"Adresse e-mail invalide",e_area:"Indiquez le quartier",
sk:"Votre demande est prête. Choisissez comment l’envoyer :",s_wa:"Envoyer par WhatsApp",s_em:"Envoyer par e-mail",s_cp:"Copier les détails",copied:"Copié",
req:"Demande de service – Dalas",a_title:"Quartiers couverts",
sh_title:"Partagez avec vos voisins",sh_sub:"Vous connaissez quelqu’un qui a besoin d’étanchéité ou de peinture ? Partagez dans les groupes de votre quartier.",sh_copy:"Copier le lien",
sh_text:"Dalas : étanchéité de toiture et peinture de façades à Rabat – devis gratuit 0621681357",foot:"© Dalas Étanchéité & Peinture – Rabat, Témara, Harhoura, Salé",close:"Fermer"},
en:{h1:"Roof waterproofing and facade painting in Rabat",h2:"Dalas protects your house or villa from damp and leaks and gives its facade a fresh finish, across Rabat, Temara, Harhoura and Salé.",
n1:"Services",n2:"Portfolio",n3:"Reviews",n4:"Request service",cta1:"Free visit & quote",c_wa:"Message on WhatsApp",c_call:"Call now",
t1:"Free quote in Rabat",t2:"Lasting protection from leaks and weather",t3:"Clean, reliable work",
s_title:"Our services",s_sub:"Solutions for houses, villas and buildings, suited to Rabat’s humid climate.",prob:"Problems we solve",sol:"What we do",
s1t:"Roof waterproofing / tar sealing",s1a:"Rainwater infiltration",s1b:"Damp and stains on ceilings",s1c:"Concrete cracks and summer heat",s1d:"Locate leaks and repair cracks",s1e:"Tar sealing and membranes built for sun and rain",
s2t:"Facade and roof painting",s2a:"Faded colours and peeling paint",s2b:"Cracks and damp marks on walls",s2c:"Sun and sea-air weathering",s2d:"Wall preparation and crack treatment",s2e:"High-durability exterior paint in colours that suit your villa",
p_title:"Portfolio: photos & videos",p_sub:"Browse completed projects and compare before and after.",f_all:"All",f_wp:"Waterproofing",f_pt:"Facade & roof painting",f_ba:"Before & After",f_vid:"Videos",
l1:"Villa roof sealing – Agdal",l2:"Painted facade – Souissi",l3:"Roof – Temara",l4:"Video: sealing steps",l5:"Painted roof – Harhoura",l6:"Video: facade painting",before:"Before",after:"After",ph:"Add your project photo here",bdg:"Before/After",
add_t:"Add your photos and videos",add_n:"Local files last for this session only. To publish permanently, put the links in the MEDIA array in the code.",add_f:"Choose files",add_u:"Or a photo/video link",add_c:"Category",add_b:"Add to gallery",
r_title:"What our clients say",rf_title:"Share your review",rf_stars:"Rating",rf_text:"Your comment",rf_area:"Neighborhood / City",rf_send:"Post my review",rf_ok:"Thank you! Your review was added.",
r1:"Our roof leaked every winter. Since the sealing, not a drop. Clean work, on schedule.",r1n:"Souad",r1a:"Hay Riad",
r2:"The paint transformed our villa. A serious, respectful team.",r2n:"Youssef",r2a:"Souissi",
r3:"A clear price after the visit, and they kept to it.",r3n:"Nadia",r3a:"Temara",
r4:"Our roof was waterproofed before winter with no hassle. Highly recommended.",r4n:"Mohamed",r4a:"Salé",
c_title:"Request a service or visit",c_sub:"Fill in the request and we’ll reply quickly on WhatsApp or by phone.",
f_name:"Full name",f_phone:"Phone (+212)",f_mail:"Email (Gmail)",f_service:"Service needed",o_wp:"Roof waterproofing",o_pt:"Facade/roof painting",o_both:"Both",
f_prop:"Property type",o_house:"House",o_villa:"Villa",o_bld:"Building",f_area:"Neighborhood in Rabat",f_msg:"Project details",f_send:"Check & send request",
e_name:"Enter your name",e_phone:"Invalid Moroccan number (e.g. 0621681357)",e_mail:"Invalid email address",e_area:"Enter the neighborhood",
sk:"Your request is ready. Choose how to send it:",s_wa:"Send via WhatsApp",s_em:"Send by email",s_cp:"Copy details",copied:"Copied",
req:"Service request – Dalas",a_title:"Areas we cover",
sh_title:"Share with your neighbors",sh_sub:"Know someone who needs waterproofing or painting? Share this page in your neighborhood groups.",sh_copy:"Copy link",
sh_text:"Dalas: roof waterproofing and facade painting in Rabat – free quote 0621681357",foot:"© Dalas Étanchéité & Peinture – Rabat, Temara, Harhoura, Salé",close:"Close"}};
/* ---- Extra translations: price guide + FAQ (add more keys here) ---- */
const X={
ar:{n5:"الأسعار",n6:"أسئلة شائعة",pr_title:"دليل الأسعار التقريبية",pr_sub:"أسعار بداية لتعرف الميزانية قبل المعاينة. الثمن النهائي يحدده الفريق بعد المعاينة المجانية.",pr_per:"الثمن التقريبي للمتر المربع",cur:"درهم",
pr_note:"أسعار إرشادية فقط، وتتغير حسب المساحة وحالة السطح والمواد. الثمن النهائي بعد المعاينة المجانية.",est_title:"احسب تقديرا سريعا",est_area:"المساحة بالمتر المربع (م²)",est_btn:"احسب التقدير",est_res:"التقدير التقريبي",est_req:"اطلب معاينة بهذا التقدير",est_err:"أدخل مساحة صحيحة بين 1 و5000 م²",
faq_title:"أسئلة شائعة",
q1:"هل المعاينة مجانية؟",a1:"نعم، المعاينة وتقديم الثمن مجانيان بالرباط وتمارة والهرهورة وسلا، وبدون أي التزام.",
q2:"كم يدوم التزفيت والعزل؟",a2:"المدة تتغير حسب نوع المواد وحالة السطح. نشرح لك الخيار الأنسب وشروط الضمان أثناء المعاينة.",
q3:"ما أفضل وقت لعزل السطح أو صباغة الواجهة؟",a3:"الطقس الجاف أنسب للتنفيذ، لكن إن كان عندك تسرب يمكنك الاتصال بنا في أي وقت لنقترح الحل المناسب.",
q4:"كيف يُحسب الثمن؟",a4:"حسب المساحة وحالة السطح أو الجدران والمواد المختارة وصعوبة الوصول. بعد المعاينة تتوصل بثمن واضح.",
q5:"كيف أطلب الخدمة؟",a5:"املأ نموذج الطلب أسفل الصفحة، أو راسلنا على واتساب، أو اتصل بنا على الرقم الظاهر في الصفحة."},
fr:{n5:"Tarifs",n6:"FAQ",pr_title:"Guide des tarifs indicatifs",pr_sub:"Des prix de départ pour estimer votre budget avant la visite. Le prix final est fixé après la visite gratuite.",pr_per:"Prix indicatif par m²",cur:"MAD",
pr_note:"Tarifs indicatifs uniquement, variables selon la surface, l’état du support et les matériaux. Prix final après la visite gratuite.",est_title:"Calculez une estimation rapide",est_area:"Surface en mètres carrés (m²)",est_btn:"Calculer l’estimation",est_res:"Estimation indicative",est_req:"Demander une visite avec cette estimation",est_err:"Entrez une surface valide entre 1 et 5000 m²",
faq_title:"Questions fréquentes",
q1:"La visite est-elle gratuite ?",a1:"Oui, la visite et le devis sont gratuits à Rabat, Témara, Harhoura et Salé, sans engagement.",
q2:"Combien de temps dure l’étanchéité ?",a2:"La durée dépend des matériaux et de l’état de la toiture. Nous vous expliquons l’option adaptée et les conditions de garantie lors de la visite.",
q3:"Quelle est la meilleure période pour l’étanchéité ou la peinture ?",a3:"Le temps sec est idéal pour les travaux, mais en cas de fuite vous pouvez nous appeler à tout moment pour une solution adaptée.",
q4:"Comment le prix est-il calculé ?",a4:"Selon la surface, l’état du support, les matériaux choisis et l’accès au chantier. Après la visite, vous recevez un prix clair.",
q5:"Comment demander un service ?",a5:"Remplissez le formulaire en bas de page, écrivez-nous sur WhatsApp ou appelez le numéro affiché."},
en:{n5:"Prices",n6:"FAQ",pr_title:"Price guide",pr_sub:"Starting prices to help you plan a budget before the visit. The final price is set after the free site visit.",pr_per:"Approximate price per m²",cur:"MAD",
pr_note:"Indicative prices only; they vary with surface area, condition and materials. Final price after the free visit.",est_title:"Get a quick estimate",est_area:"Surface area in square metres (m²)",est_btn:"Calculate estimate",est_res:"Indicative estimate",est_req:"Request a visit with this estimate",est_err:"Enter a valid surface between 1 and 5000 m²",
faq_title:"Frequently asked questions",
q1:"Is the site visit free?",a1:"Yes. The visit and quote are free in Rabat, Temara, Harhoura and Salé, with no obligation.",
q2:"How long does waterproofing last?",a2:"It depends on the materials and the condition of the roof. We explain the best option and the warranty terms during the visit.",
q3:"When is the best time for waterproofing or painting?",a3:"Dry weather is best for the work, but if you have a leak you can call us at any time and we will suggest the right fix.",
q4:"How is the price calculated?",a4:"By surface area, the condition of the roof or walls, the materials chosen and site access. After the visit you get a clear price.",
q5:"How do I request a service?",a5:"Fill in the request form at the bottom of the page, message us on WhatsApp, or call the number shown on the page."}};
for(const l in X)Object.assign(D[l],X[l]);

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let L="ar",F="all",REV=[];
const T=k=>D[L][k]??k;
try{REV=JSON.parse(localStorage.getItem("dalas_reviews")||"[]")}catch(e){}
const mk=(tag,cls,txt)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e};
const isVid=u=>/\.(mp4|webm|mov|m4v)(\?|$)/i.test(u);
function tiles(){const box=$("#tiles");box.innerHTML="";
MEDIA.forEach(it=>{if(F=="ba"?it.type!="ba":F=="vid"?it.type!="video":F!="all"&&it.cat!=F)return;
const b=mk("button","tile "+it.cat);const img=it.type=="ba"?it.after:it.type=="photo"?it.src:it.poster;
if(img)b.style.backgroundImage=`url("${img}")`;
if(it.type=="video"&&it.src&&!img){const v=mk("video");v.src=it.src;v.muted=true;v.preload="metadata";b.append(v)}
b.append(mk("span","",T(it.t)||it.t));
if(it.type=="ba")b.append(mk("span","bd",T("bdg")));
if(it.type=="video")b.append(mk("span","pl","▶"));
b.onclick=()=>openLb(it);box.append(b)});
$$("#flt button").forEach(b=>{b.textContent=T("f_"+b.dataset.f);b.setAttribute("aria-pressed",b.dataset.f==F)})}
function openLb(it){const v=$("#lbv");v.innerHTML="";v.style.backgroundImage="";v.className="lbv tile "+it.cat;v.style.aspectRatio="16/10";$("#lbl").textContent=T(it.t)||it.t;
if(it.type=="video"){if(it.src){const e=mk("video");e.src=it.src;e.controls=true;e.autoplay=true;e.playsInline=true;if(it.poster)e.poster=it.poster;v.append(e)}else v.append(mk("span","",T("ph")))}
else if(it.type=="photo"){if(it.src){const e=mk("img");e.src=it.src;e.alt=T(it.t);v.append(e)}else v.append(mk("span","",T("ph")))}
else{const w=mk("div","ba");w.style.setProperty("--p","50%");const a=mk("div","b1"),c=mk("div","a1");
a.className="b1 tile wp";c.className="a1 tile pt";if(it.before)a.style.backgroundImage=`url("${it.before}")`;if(it.after)c.style.backgroundImage=`url("${it.after}")`;
a.append(mk("span","",T("before")));c.append(mk("span","",T("after")));
const r=mk("input");r.type="range";r.min=5;r.max=95;r.value=50;r.oninput=()=>w.style.setProperty("--p",r.value+"%");r.setAttribute("aria-label",T("before")+" / "+T("after"));
w.append(a,c,mk("span","hd"),r);v.append(w)}
$("#lb").showModal()}
function reviews(){const rl=$("#rl");rl.innerHTML="";
const base=[1,2,3,4].map(i=>({t:T("r"+i),n:T("r"+i+"n"),a:T("r"+i+"a"),s:["o_wp","o_pt","o_wp","o_wp"][i-1],r:i==3?4:5}));
[...REV.slice().reverse(),...base].forEach(r=>{const c=mk("div","card");c.append(mk("div","stars","★".repeat(r.r)+"☆".repeat(5-r.r)),mk("p","q",r.t),mk("strong","",r.n),mk("div","meta",r.a+" · "+T(r.s)));rl.append(c)})}
function share(){const u=encodeURIComponent(location.href),t=encodeURIComponent(T("sh_text").replace("0621681357",CONFIG.phoneLocal));$("#shw").href="https://wa.me/?text="+t+"%20"+u;$("#shf").href="https://www.facebook.com/sharer/sharer.php?u="+u}
function setL(l){L=l;const h=document.documentElement;h.lang=l;h.dir=l=="ar"?"rtl":"ltr";
$$("[data-t]").forEach(e=>e.textContent=T(e.dataset.t));
$$(".lang button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l==l));
document.title="Dalas Étanchéité & Peinture";tiles();reviews();share();estRender();$("#qe").textContent="";$("#sum").hidden=true}
$$(".lang button").forEach(b=>b.onclick=()=>setL(b.dataset.l));
$$("#flt button").forEach(b=>b.onclick=()=>{F=b.dataset.f;tiles()});
$("#lbx").onclick=()=>$("#lb").close();$("#lb").onclick=e=>{if(e.target.id=="lb")e.target.close()};
$("#mb").onclick=()=>{const c=$("#mc").value,u=$("#mu").value.trim();
[...$("#mf").files].forEach(f=>MEDIA.push({type:f.type.startsWith("video")?"video":"photo",cat:c,t:f.name,src:URL.createObjectURL(f)}));
if(/^https?:\/\//i.test(u))MEDIA.push({type:isVid(u)?"video":"photo",cat:c,t:u.split("/").pop(),src:u});
$("#mf").value="";$("#mu").value="";F="all";tiles()};
$("#rf").onsubmit=e=>{e.preventDefault();const f=e.target;REV.push({n:f.n.value.trim(),a:f.a.value.trim(),s:f.s.value,r:+f.r.value,t:f.t.value.trim()});
try{localStorage.setItem("dalas_reviews",JSON.stringify(REV))}catch(x){}
f.reset();reviews();$("#rm").textContent=T("rf_ok")};
$$("[data-svc]").forEach(a=>a.onclick=()=>{$("#qf").svc.value=a.dataset.svc});
let TXT="";
$("#qf").onsubmit=e=>{e.preventDefault();const f=e.target,er=$("#qe"),p=f.phone.value.replace(/[\s.\-()]/g,"");er.textContent="";$("#sum").hidden=true;
const bad=!f.name.value.trim()?["e_name","name"]:!/^(\+212|00212|0)[5-7]\d{8}$/.test(p)?["e_phone","phone"]:(f.mail.value&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.mail.value))?["e_mail","mail"]:!f.area.value.trim()?["e_area","area"]:null;
if(bad){er.textContent=T(bad[0]);f[bad[1]].focus();return}
const so=f.svc.selectedOptions[0].textContent,po=f.prop.selectedOptions[0].textContent;
TXT=[T("req"),T("f_name")+": "+f.name.value.trim(),T("f_phone")+": "+p,f.mail.value&&T("f_mail")+": "+f.mail.value,T("f_service")+": "+so,T("f_prop")+": "+po,T("f_area")+": "+f.area.value.trim(),f.msg.value.trim()&&T("f_msg")+": "+f.msg.value.trim()].filter(Boolean).join("\n");
$("#sk").textContent=T("sk");$("#sp").textContent=TXT;$("#sw").href="https://wa.me/"+PH+"?text="+encodeURIComponent(TXT);
$("#se").href="mailto:"+EM+"?subject="+encodeURIComponent(T("req"))+"&body="+encodeURIComponent(TXT);$("#sm").textContent="";$("#sum").hidden=false;$("#sum").scrollIntoView({behavior:"smooth",block:"nearest"})};
const cp=async(txt,el)=>{try{await navigator.clipboard.writeText(txt);el.textContent=T("copied")}catch(e){prompt("",txt)}};
$("#sc").onclick=()=>cp(TXT,$("#sm"));$("#shc").onclick=()=>cp(location.href,$("#shm"));
/* ---- Price guide estimator ---- */
let EST=null;
const fmt=n=>n.toLocaleString("en-US");
const rng=s=>s=="both"?{min:PRICES.wp.min+PRICES.pt.min,max:PRICES.wp.max+PRICES.pt.max}:PRICES[s];
function estRender(){["wp","pt"].forEach(k=>$("#p_"+k).textContent=PRICES[k].min+" – "+PRICES[k].max+" "+T("cur")+" / m²");
if(EST){$("#ev").textContent=fmt(EST.lo)+" – "+fmt(EST.hi)+" "+T("cur");$("#esum").textContent="("+EST.a+" m²)"}}
$("#eb").onclick=()=>{const a=+$("#ea").value,s=$("#es").value;
if(!(a>=1&&a<=5000)){$("#ee").textContent=T("est_err");$("#eo").hidden=true;EST=null;return}
$("#ee").textContent="";const p=rng(s);EST={a,s,lo:Math.round(a*p.min/10)*10,hi:Math.round(a*p.max/10)*10};estRender();$("#eo").hidden=false};
$("#er").onclick=()=>{if(!EST)return;const f=$("#qf");f.svc.value=EST.s;
f.msg.value=T("est_res")+": "+EST.a+" m² ≈ "+fmt(EST.lo)+" – "+fmt(EST.hi)+" "+T("cur");
$("#contact").scrollIntoView({behavior:"smooth"})};

/* ---- Apply contact config to links and labels ---- */
function applyConfig(){
$$("[data-tel]").forEach(a=>a.href="tel:+"+CONFIG.phoneIntl);
$$("[data-wa]").forEach(a=>a.href="https://wa.me/"+CONFIG.phoneIntl);
$$("[data-mail]").forEach(a=>a.href="mailto:"+CONFIG.email);
$$("[data-show=tel]").forEach(a=>a.textContent="📞 "+CONFIG.phoneLocal);
$$("[data-show=mail]").forEach(a=>a.textContent="✉ "+CONFIG.email)}
applyConfig();
setL("ar");
