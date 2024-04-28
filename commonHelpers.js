import{A as h,S as p,N as w,K as g,M as y,i as f,a as u,b as d}from"./assets/vendor-df7f1691.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const E=Array.from(document.querySelectorAll(".accordion-container"));new h(E,{duration:800,showMultiple:!0});new p(".reviews-wrapper",{modules:[w,g,y],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const $="https://portfolio-js.b.goit.study/api",S="/reviews",q=`${$}${S}`;let L=1;const P={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};x(L).then(e=>{console.log(e),P.container.insertAdjacentHTML("beforeend",B(e))}).catch(e=>{console.log(e),f.error({title:"Error",message:"Not found"})});async function x(e){const{data:t}=await u.get(q,{params:{id:e}});return t}function B(e){return e.map(({_id:t,author:s,avatar_url:n,review:o})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${n}" alt="${s}"/>
    
    <p class="reviews-text">${o}</p>
    <h2 class="reviews-subtitle">${s}</h2>

    </li>
    
    `).join("")}const m=document.querySelector(".covers");function N(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function I(){document.querySelectorAll(".marquee__line").forEach(t=>{t.style.animationName="marqueeLine"})}window.addEventListener("scroll",()=>{m&&N(m)&&I()});new p(".reviews-wrapper",{modules:[w,g,y],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const O="https://portfolio-js.b.goit.study/api",k="/reviews",M=`${O}${k}`;let A=1;const T={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};_(A).then(e=>{console.log(e),T.container.insertAdjacentHTML("beforeend",C(e))}).catch(e=>{console.log(e),f.error({title:"Error",message:"Not found"})});async function _(e){const{data:t}=await u.get(M,{params:{id:e}});return t}function C(e){return e.map(({_id:t,author:s,avatar_url:n,review:o})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${n}" alt="${s}"/>
    
    <p class="reviews-text">${o}</p>
    <h2 class="reviews-subtitle">${s}</h2>

    </li>
    
    `).join("")}const V="https://portfolio-js.b.goit.study/api",R="/requests",v=document.querySelector(".user-form"),i=document.querySelector(".validation-text"),a=document.querySelector(".footer-form-frame");v.addEventListener("submit",j);async function j(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),s=e.currentTarget.elements.comments.value.trim();t&&(i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)",a.style.borderBottomColor="rgba(60, 188, 129, 1)"),t||(i.textContent="Invalid email, try again",i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)",a.style.borderBottomColor="rgba(231, 74, 59, 1)"),await D({email:t,comment:s})}async function D(e){try{const t=await u.post(`${V}${R}`,e);i.style.visibility="hidden",a.style.borderBottomColor="rgba(250, 250, 250, 0.20)",v.reset();const s=d.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h3 class="modal-header">Thank you for your interest in cooperation!</h3>
		<p class="modal-text">The manager will contact you shortly to discuss further details and opportunities for cooperation. Please stay in touch.</p>
		</div>`);s.show(),document.querySelector(".modal-close").addEventListener("click",()=>{s.close()})}catch(t){d.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${t.message}</p>
		</div>
		`).show()}}const H=document.getElementById("menu-toggle"),l=document.getElementById("menu");H.addEventListener("click",G);const b=document.querySelector(".backdrop"),z=document.querySelector(".burger-icon");z.addEventListener("click",W);const F=document.querySelector(".xclose-btn-mob");F.addEventListener("click",K);function G(){l.style.display==="none"?l.style.display="block":l.style.display="none",console.log("clickMenu")}function W(){b.classList.add("is-open"),console.log("isOpen")}function K(){b.classList.remove("is-open"),console.log("isClose")}
//# sourceMappingURL=commonHelpers.js.map
