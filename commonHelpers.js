import{A as b,S as p,N as w,K as y,M as g,i as f,a as u,b as d}from"./assets/vendor-df7f1691.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const h=Array.from(document.querySelectorAll(".accordion-container"));new b(h,{duration:800,showMultiple:!0});new p(".reviews-wrapper",{modules:[w,y,g],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const $="https://portfolio-js.b.goit.study/api",E="/reviews",S=`${$}${E}`;let P=1;const q={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};L(P).then(e=>{console.log(e),q.container.insertAdjacentHTML("beforeend",x(e))}).catch(e=>{console.log(e),f.error({title:"Error",message:"Not found"})});async function L(e){const{data:t}=await u.get(S,{params:{id:e}});return t}function x(e){return e.map(({_id:t,author:o,avatar_url:n,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${n}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const m=document.querySelector(".covers");function B(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function N(){document.querySelectorAll(".marquee__line").forEach(t=>{t.style.animationName="marqueeLine"})}window.addEventListener("scroll",()=>{m&&B(m)&&N()});new p(".reviews-wrapper",{modules:[w,y,g],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const I="https://portfolio-js.b.goit.study/api",O="/reviews",A=`${I}${O}`;let T=1;const _={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};M(T).then(e=>{console.log(e),_.container.insertAdjacentHTML("beforeend",C(e))}).catch(e=>{console.log(e),f.error({title:"Error",message:"Not found"})});async function M(e){const{data:t}=await u.get(A,{params:{id:e}});return t}function C(e){return e.map(({_id:t,author:o,avatar_url:n,review:s})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${n}" alt="${o}"/>
    
    <p class="reviews-text">${s}</p>
    <h2 class="reviews-subtitle">${o}</h2>

    </li>
    
    `).join("")}const V="https://portfolio-js.b.goit.study/api",k="/requests",v=document.querySelector(".user-form"),i=document.querySelector(".validation-text"),a=document.querySelector(".footer-form-frame");v.addEventListener("submit",R);async function R(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim();t&&(i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)",a.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(i.textContent="Invalid email, try again",i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)",a.style.borderBottomColor="rgba(231, 74, 59, 1)"),await j({email:t,comment:o})}async function j(e){try{const t=await u.post(`${V}${k}`,e);i.style.visibility="hidden",a.style.borderBottomColor="rgba(250, 250, 250, 0.20)",v.reset();const o=d.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h3 class="modal-header">Thank you for your interest in cooperation!</h3>
		<p class="modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
		</div>`);o.show(),document.querySelector(".modal-close").addEventListener("click",()=>{o.close()})}catch(t){d.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${t.message}</p>
		</div>
		`).show()}}const D=document.getElementById("menu-toggle"),c=document.getElementById("menu");D.addEventListener("click",H);function H(){c.style.display==="none"?c.style.display="block":c.style.display="none",console.log("clickMenu")}
//# sourceMappingURL=commonHelpers.js.map
