import{A as S,S as g,N as v,K as b,M as w,i as f,a,b as l}from"./assets/vendor-df7f1691.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const q=Array.from(document.querySelectorAll(".accordion-container"));new S(q,{duration:800,showMultiple:!0});new g(".reviews-wrapper",{modules:[v,b,w],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const L="https://portfolio-js.b.goit.study/api",B="/reviews",x=`${L}${B}`;let P=1;const N={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};T(P).then(e=>{console.log(e),N.container.insertAdjacentHTML("beforeend",C(e))}).catch(e=>{console.log(e),f.error({title:"Error",message:"Not found"})});async function T(e){const{data:t}=await a.get(x,{params:{id:e}});return t}function C(e){return e.map(({_id:t,author:o,avatar_url:n,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${n}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const y=document.querySelector(".covers");function I(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function O(){document.querySelectorAll(".marquee__line").forEach(t=>{t.style.animationName="marqueeLine"})}window.addEventListener("scroll",()=>{y&&I(y)&&O()});new g(".reviews-wrapper",{modules:[v,b,w],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const _="https://portfolio-js.b.goit.study/api",k="/reviews",A=`${_}${k}`;let D=1;const M={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};R(D).then(e=>{console.log(e),M.container.insertAdjacentHTML("beforeend",V(e))}).catch(e=>{console.log(e),f.error({title:"Error",message:"Not found"})});async function R(e){const{data:t}=await a.get(A,{params:{id:e}});return t}function V(e){return e.map(({_id:t,author:o,avatar_url:n,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${n}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const j="https://portfolio-js.b.goit.study/api",F="/requests",h=document.querySelector(".user-form"),i=document.querySelector(".validation-text"),m=document.querySelector(".footer-form-frame");h.addEventListener("submit",H);async function H(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim();t&&(i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)",m.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(i.textContent="Invalid email, try again",i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)",m.style.borderBottomColor="rgba(231, 74, 59, 1)"),await z({email:t,comment:o})}async function z(e){try{const t=await a.post(`${j}${F}`,e);i.style.visibility="hidden",m.style.borderBottomColor="rgba(250, 250, 250, 0.20)",h.reset();const o=l.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h3 class="modal-header">Thank you for your interest in cooperation!</h3>
		<p class="modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
		</div>`);o.show(),document.querySelector(".modal-close").addEventListener("click",()=>{o.close()})}catch(t){l.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${t.message}</p>
		</div>
		`).show()}}const G=document.getElementById("menu-toggle"),d=document.getElementById("menu");G.addEventListener("click",K);const $=document.querySelector(".backdrop"),U=document.querySelector(".burger-icon");U.addEventListener("click",J);const W=document.querySelector(".xclose-btn-mob");W.addEventListener("click",Q);function K(){d.style.display==="none"?d.style.display="block":d.style.display="none",console.log("clickMenu")}function J(){$.classList.add("is-open"),console.log("isOpen")}function Q(){$.classList.remove("is-open"),console.log("isClose")}const X="https://portfolio-js.b.goit.study/api",Y="/requests",E=document.querySelector(".user-form"),c=document.querySelector(".validation-text"),p=document.querySelector(".footer-form-frame");E.addEventListener("submit",Z);async function Z(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim();t&&(c.style.visibility="visible",c.style.color="rgba(60, 188, 129, 1)",p.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(c.textContent="Invalid email, try again",c.style.visibility="visible",c.style.color="rgba(231, 74, 59, 1)",p.style.borderBottomColor="rgba(231, 74, 59, 1)"),await ee({email:t,comment:o})}async function ee(e){try{const t=await a.post(`${X}${Y}`,e);c.style.visibility="hidden",p.style.borderBottomColor="rgba(250, 250, 250, 0.20)",E.reset();const o=l.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h3 class="modal-header">Thank you for your interest in cooperation!</h3>
		<p class="modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
		</div>`);o.show(),document.querySelector(".modal-close").addEventListener("click",()=>{o.close()})}catch(t){l.create(`
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
