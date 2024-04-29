import{A as x,S as b,N as w,K as f,M as h,i as E,a as u,b as a}from"./assets/vendor-df7f1691.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const P=Array.from(document.querySelectorAll(".accordion-container"));new x(P,{duration:800,showMultiple:!0});new b(".reviews-wrapper",{modules:[w,f,h],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const N="https://portfolio-js.b.goit.study/api",k="/reviews",T=`${N}${k}`;let C=1;const I={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};O(C).then(e=>{console.log(e),I.container.insertAdjacentHTML("beforeend",_(e))}).catch(e=>{console.log(e),E.error({title:"Error",message:"Not found"})});async function O(e){const{data:t}=await u.get(T,{params:{id:e}});return t}function _(e){return e.map(({_id:t,author:o,avatar_url:n,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${n}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const g=document.querySelector(".covers");function M(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function A(){document.querySelectorAll(".marquee__line").forEach(t=>{t.style.animationName="marqueeLine"})}window.addEventListener("scroll",()=>{g&&M(g)&&A()});new b(".reviews-wrapper",{modules:[w,f,h],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,height:302,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const D="https://portfolio-js.b.goit.study/api",R="/reviews",V=`${D}${R}`;let j=1;const v={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};F(j).then(e=>{v.container.innerHTML="",v.container.insertAdjacentHTML("beforeend",H(e))}).catch(e=>{console.log(e),E.error({title:"Error",message:"Not found"})});async function F(e){const{data:t}=await u.get(V,{params:{id:e}});return t}function H(e){return e.map(({_id:t,author:o,avatar_url:n,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${n}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const z="https://portfolio-js.b.goit.study/api",G="/requests",y=document.querySelector(".user-form"),i=document.querySelector(".validation-text"),m=document.querySelector(".footer-form-frame");y.addEventListener("submit",$);async function $(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim();t&&(i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)",m.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(i.textContent="Invalid email, try again",i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)",m.style.borderBottomColor="rgba(231, 74, 59, 1)"),await U({email:t,comment:o})}y.removeEventListener("submit",$);async function U(e){try{const t=await u.post(`${z}${G}`,e);i.style.visibility="hidden",m.style.borderBottomColor="rgba(250, 250, 250, 0.20)",y.reset();const o=a.create(`
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
		`).show()}}document.querySelector("nav-list");const W=document.getElementById("menu-toggle"),l=document.getElementById("menu");W.addEventListener("click",q);l.addEventListener("click",q);const S=document.querySelector(".backdrop"),K=document.querySelector(".burger-icon");K.addEventListener("click",X);const J=document.querySelector(".mobile-menu-list"),Q=document.querySelector(".xclose-btn-mob");Q.addEventListener("click",L);J.addEventListener("click",L);function q(){l.style.display==="block"?l.style.display="none":l.style.display="block",console.log("clickMenu")}function X(){S.classList.add("is-open"),console.log("isOpen")}function L(){S.classList.remove("is-open"),console.log("isClose")}const Y="https://portfolio-js.b.goit.study/api",Z="/requests",B=document.querySelector(".user-form"),c=document.querySelector(".validation-text"),p=document.querySelector(".footer-form-frame");B.addEventListener("submit",ee);async function ee(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim();t&&(c.style.visibility="visible",c.style.color="rgba(60, 188, 129, 1)",p.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(c.textContent="Invalid email, try again",c.style.visibility="visible",c.style.color="rgba(231, 74, 59, 1)",p.style.borderBottomColor="rgba(231, 74, 59, 1)"),await te({email:t,comment:o})}async function te(e){try{const t=await u.post(`${Y}${Z}`,e);c.style.visibility="hidden",p.style.borderBottomColor="rgba(250, 250, 250, 0.20)",B.reset();const o=a.create(`
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
