import{S as u,N as d,K as m,M as p,A as P,i as S,a as y,b as a}from"./assets/vendor-129bc8d0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const b of n.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&r(b)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const B=document.querySelectorAll(".accordion-header"),k=document.querySelector(".accordion-panel"),N=document.querySelector(".about-us"),C=document.querySelector(".mobile-open-ac");k.style.maxHeight="100%";N.classList.add("active");C.style.transform="rotate(180deg)";B.forEach(e=>{e.addEventListener("click",function(){const t=e.closest(".about-us"),o=t.querySelector(".accordion-panel"),r=e.querySelector(".mobile-open-ac");t.classList.toggle("active"),t.classList.contains("active")?(o.style.maxHeight=o.scrollHeight+"px",r.style.transform="rotate(180deg)"):(o.style.maxHeight="0",r.style.transform="rotate(0deg)")})});const I=new u(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[d,m,p],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.querySelector(".about-swiper-button").addEventListener("click",()=>{I.slideNext()});new u(".swiper-container",{modules:[m,p,d],speed:500,direction:"horizontal",slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0},mousewheel:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{spaceBetween:32}}});const T=Array.from(document.querySelectorAll(".accordion-container"));new P(T,{duration:800,showMultiple:!0});new u(".reviews-wrapper",{modules:[d,m,p],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const O="https://portfolio-js.b.goit.study/api",A="/reviews",M=`${O}${A}`;let V=1;const _={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};D(V).then(e=>{console.log(e),_.container.insertAdjacentHTML("beforeend",H(e))}).catch(e=>{console.log(e),S.error({title:"Error",message:"Not found"})});async function D(e){const{data:t}=await y.get(M,{params:{id:e}});return t}function H(e){return e.map(({_id:t,author:o,avatar_url:r,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${r}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const h=document.querySelector(".covers");function R(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function z(){document.querySelectorAll(".marquee__line").forEach(t=>{t.style.animationName="marqueeLine"})}window.addEventListener("scroll",()=>{h&&R(h)&&z()});new u(".reviews-wrapper",{modules:[d,m,p],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,height:302,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const j="https://portfolio-js.b.goit.study/api",F="/reviews",W=`${j}${F}`;let G=1;const E={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};U(G).then(e=>{E.container.innerHTML="",E.container.insertAdjacentHTML("beforeend",K(e))}).catch(e=>{console.log(e),S.error({title:"Error",message:"Not found"})});async function U(e){const{data:t}=await y.get(W,{params:{id:e}});return t}function K(e){return e.map(({_id:t,author:o,avatar_url:r,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${r}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const J="https://portfolio-js.b.goit.study/api",Q="/requests",w=document.querySelector(".user-form"),i=document.querySelector(".validation-text"),g=document.querySelector(".footer-form-frame");w.addEventListener("submit",q);async function q(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim();t&&(i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)",g.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(i.textContent="Invalid email, try again",i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)",g.style.borderBottomColor="rgba(231, 74, 59, 1)"),await X({email:t,comment:o})}w.removeEventListener("submit",q);async function X(e){try{const t=await y.post(`${J}${Q}`,e);i.style.visibility="hidden",g.style.borderBottomColor="rgba(250, 250, 250, 0.20)",w.reset();const o=a.create(`
		<div class="modal modal-styles">
		<button type="button" class="modal-close">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h3 class="modal-header">Thank you for your interest in cooperation!</h3>
		<p class="modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
		</div>`);o.show(),document.addEventListener("keydown",s=>{s.code==="Escape"&&o.visible()&&o.close()}),document.querySelector(".modal-close").addEventListener("click",()=>{o.close()})}catch(t){a.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${t.message}</p>
		</div>
		`).show()}}document.querySelector("nav-list");const Y=document.getElementById("menu-toggle"),l=document.getElementById("menu");Y.addEventListener("click",$);l.addEventListener("click",$);const L=document.querySelector(".backdrop"),Z=document.querySelector(".burger-icon");Z.addEventListener("click",oe);const ee=document.querySelector(".mobile-menu-list"),te=document.querySelector(".xclose-btn-mob");te.addEventListener("click",f);ee.addEventListener("click",f);function $(){l.style.display==="block"?l.style.display="none":l.style.display="block",console.log("clickMenu")}function oe(){L.classList.add("is-open"),console.log("isOpen"),window.addEventListener("resize",se)}function se(){window.innerWidth>767&&f()}function f(){L.classList.remove("is-open"),console.log("isClose")}const re="https://portfolio-js.b.goit.study/api",ne="/requests",x=document.querySelector(".user-form"),c=document.querySelector(".validation-text"),v=document.querySelector(".footer-form-frame");x.addEventListener("submit",ie);async function ie(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim();t&&(c.style.visibility="visible",c.style.color="rgba(60, 188, 129, 1)",v.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(c.textContent="Invalid email, try again",c.style.visibility="visible",c.style.color="rgba(231, 74, 59, 1)",v.style.borderBottomColor="rgba(231, 74, 59, 1)"),await ce({email:t,comment:o})}async function ce(e){try{const t=await y.post(`${re}${ne}`,e);c.style.visibility="hidden",v.style.borderBottomColor="rgba(250, 250, 250, 0.20)",x.reset();const o=a.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h3 class="modal-header">Thank you for your interest in cooperation!</h3>
		<p class="modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
		</div>`);o.show(),document.querySelector(".modal-close").addEventListener("click",()=>{o.close()})}catch(t){a.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${t.message}</p>
		</div>
		`).show()}}
//# sourceMappingURL=commonHelpers.js.map
