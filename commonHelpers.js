import{S as y,K as v,M as g,N as b,A as x,i as $,a as u,b as a}from"./assets/vendor-129bc8d0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();new y(".swiper-container",{modules:[v,g,b],speed:500,direction:"horizontal",slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0},mousewheel:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{spaceBetween:32}}});const P=Array.from(document.querySelectorAll(".accordion-container"));new x(P,{duration:800,showMultiple:!0});new y(".reviews-wrapper",{modules:[b,v,g],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const k="https://portfolio-js.b.goit.study/api",N="/reviews",T=`${k}${N}`;let O=1;const C={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};I(O).then(e=>{console.log(e),C.container.insertAdjacentHTML("beforeend",M(e))}).catch(e=>{console.log(e),$.error({title:"Error",message:"Not found"})});async function I(e){const{data:t}=await u.get(T,{params:{id:e}});return t}function M(e){return e.map(({_id:t,author:o,avatar_url:r,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${r}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const f=document.querySelector(".covers");function _(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function A(){document.querySelectorAll(".marquee__line").forEach(t=>{t.style.animationName="marqueeLine"})}window.addEventListener("scroll",()=>{f&&_(f)&&A()});new y(".reviews-wrapper",{modules:[b,v,g],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,height:302,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const D="https://portfolio-js.b.goit.study/api",R="/reviews",V=`${D}${R}`;let j=1;const E={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};z(j).then(e=>{E.container.innerHTML="",E.container.insertAdjacentHTML("beforeend",F(e))}).catch(e=>{console.log(e),$.error({title:"Error",message:"Not found"})});async function z(e){const{data:t}=await u.get(V,{params:{id:e}});return t}function F(e){return e.map(({_id:t,author:o,avatar_url:r,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${r}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const H="https://portfolio-js.b.goit.study/api",W="/requests",w=document.querySelector(".user-form"),i=document.querySelector(".validation-text"),m=document.querySelector(".footer-form-frame");w.addEventListener("submit",S);async function S(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim();t&&(i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)",m.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(i.textContent="Invalid email, try again",i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)",m.style.borderBottomColor="rgba(231, 74, 59, 1)"),await G({email:t,comment:o})}w.removeEventListener("submit",S);async function G(e){try{const t=await u.post(`${H}${W}`,e);i.style.visibility="hidden",m.style.borderBottomColor="rgba(250, 250, 250, 0.20)",w.reset();const o=a.create(`
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
		`).show()}}document.querySelector("nav-list");const U=document.getElementById("menu-toggle"),l=document.getElementById("menu");U.addEventListener("click",q);l.addEventListener("click",q);const L=document.querySelector(".backdrop"),K=document.querySelector(".burger-icon");K.addEventListener("click",X);const J=document.querySelector(".mobile-menu-list"),Q=document.querySelector(".xclose-btn-mob");Q.addEventListener("click",h);J.addEventListener("click",h);function q(){l.style.display==="block"?l.style.display="none":l.style.display="block",console.log("clickMenu")}function X(){L.classList.add("is-open"),console.log("isOpen"),window.addEventListener("resize",Y)}function Y(){window.innerWidth>767&&h()}function h(){L.classList.remove("is-open"),console.log("isClose")}const Z="https://portfolio-js.b.goit.study/api",ee="/requests",B=document.querySelector(".user-form"),c=document.querySelector(".validation-text"),p=document.querySelector(".footer-form-frame");B.addEventListener("submit",te);async function te(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim();t&&(c.style.visibility="visible",c.style.color="rgba(60, 188, 129, 1)",p.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(c.textContent="Invalid email, try again",c.style.visibility="visible",c.style.color="rgba(231, 74, 59, 1)",p.style.borderBottomColor="rgba(231, 74, 59, 1)"),await oe({email:t,comment:o})}async function oe(e){try{const t=await u.post(`${Z}${ee}`,e);c.style.visibility="hidden",p.style.borderBottomColor="rgba(250, 250, 250, 0.20)",B.reset();const o=a.create(`
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
