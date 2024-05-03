import{S as d,N as u,K as m,M as p,A as T,i as E,a as w,b as P}from"./assets/vendor-129bc8d0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const f of r.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const x=document.querySelector(".accordion-panel"),$=document.querySelectorAll(".accordion-header"),B=document.querySelector(".about-us"),I=document.querySelector(".mobile-open-us");x.style.maxHeight="100%";B.classList.add("active");I.style.transform="rotate(180deg)";$.forEach(e=>{e.addEventListener("click",function(){const t=e.closest(".about-us"),n=t.querySelector(".accordion-panel"),s=e.querySelector(".mobile-open-us");t.classList.toggle("active"),t.classList.contains("active")?(n.style.maxHeight=n.scrollHeight+"px",s.style.transform="rotate(180deg)"):(n.style.maxHeight="0",s.style.transform="rotate(0deg)")})});const N=new d(".about-swiper-container",{loop:!0,setWrapperSize:!0,modules:[u,m,p],spaceBetween:0,simulateTouch:!0,grabCursor:!0,slideActiveClass:"active",navigation:{nextEl:".about-swiper-button"},keyboard:{enabled:!0,onlyInViewport:!1},breakpoints:{320:{slidesPerView:2},375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}});document.querySelector(".about-swiper-button").addEventListener("click",()=>{N.slideNext()});const a=new d(".swiper-container",{modules:[m,p,u],speed:500,direction:"horizontal",slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0},mousewheel:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{spaceBetween:32}}}),M=document.getElementById("slide1"),V=document.getElementById("slide2"),A=document.getElementById("slide3");M.addEventListener("keydown",function(e){e.key==="Tab"&&!e.shiftKey&&(e.preventDefault(),a.slideNext())});V.addEventListener("keydown",function(e){e.key==="Tab"&&e.shiftKey?(e.preventDefault(),a.slidePrev()):e.key==="Tab"&&!e.shiftKey&&(e.preventDefault(),a.slideNext())});A.addEventListener("keydown",function(e){e.key==="Tab"&&e.shiftKey&&(e.preventDefault(),a.slidePrev())});const O=Array.from(document.querySelectorAll(".accordion-container"));new T(O,{duration:800,showMultiple:!0});new d(".reviews-wrapper",{modules:[u,m,p],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:18}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const D="https://portfolio-js.b.goit.study/api",C="/reviews",H=`${D}${C}`;let _=1;const z={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};R(_).then(e=>{z.container.insertAdjacentHTML("beforeend",j(e))}).catch(e=>{console.log(e),E.error({title:"Error",message:"Not found"})});async function R(e){const{data:t}=await w.get(H,{params:{id:e}});return t}function j(e){return e.map(({_id:t,author:n,avatar_url:s,review:o})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${s}" alt="${n}"/>
    
    <p class="reviews-text">${o}</p>
    <h2 class="reviews-subtitle">${n}</h2>

    </li>
    
    `).join("")}const g=document.querySelector(".covers");function K(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function W(){document.querySelectorAll(".marquee__line").forEach(t=>{t.style.animationName="marqueeLine"})}window.addEventListener("scroll",()=>{g&&K(g)&&W()});new d(".reviews-wrapper",{modules:[u,m,p],direction:"horizontal",updateOnWindowResize:!0,slidesPerView:1,enabled:!0,swipeHandler:".reviews-item",speed:300,spaceBetween:20,height:302,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:2,slidesPerGroup:1,spaceBetween:16},1440:{slidesPerView:4,slidesPerGroup:1,spaceBetween:16}},navigation:{prevEl:".swiper-button-prev",nextEl:".swiper-button-next",preventClicks:!1}});const G="https://portfolio-js.b.goit.study/api",F="/reviews",U=`${G}${F}`;let J=1;const h={container:document.querySelector(".reviews-list"),btnPrev:document.querySelector(".swiper-button-prev"),btnNext:document.querySelector(".swiper-button-next")};Q(J).then(e=>{h.container.innerHTML="",h.container.insertAdjacentHTML("beforeend",X(e))}).catch(e=>{console.log(e),E.error({title:"Error",message:"Not found"})});async function Q(e){const{data:t}=await w.get(U,{params:{id:e}});return t}function X(e){return e.map(({_id:t,author:n,avatar_url:s,review:o})=>`
    
    <li class="reviews-item swiper-slide" data="${t}">
    <img class="reviews-img" src="${s}" alt="${n}"/>
    
    <p class="reviews-text">${o}</p>
    <h2 class="reviews-subtitle">${n}</h2>

    </li>
    
    `).join("")}const b=document.querySelector(".modal-backdrop"),Y=document.querySelector(".modal"),Z=document.querySelector(".modal-close");Z.addEventListener("click",v);b.addEventListener("click",function(e){e.target===e.currentTarget&&v()});document.addEventListener("keydown",function(e){e.key==="Escape"&&!Y.contains(e.target)&&v()});function ee(){b.classList.remove("is-hidden")}function v(e){b.classList.add("is-hidden")}const te="https://portfolio-js.b.goit.study/api",ne="/requests",S=document.querySelector(".user-form"),c=document.querySelector(".footer-submit-input"),i=document.querySelector(".validation-text");document.querySelector("#icon-vector");S.addEventListener("submit",se);c.addEventListener("input",()=>{oe(c,40)});c.addEventListener("input",function(e){(c.value===""||!c.checkValidity())&&(document.documentElement.style.setProperty("--color1","rgba(231, 74, 59, 1)"),i.textContent="Invalid email, try again",i.style.visibility="visible",i.style.color="rgba(231, 74, 59, 1)"),c.checkValidity()&&(document.documentElement.style.setProperty("--color1","rgba(60, 188, 129, 1)"),i.textContent="Success!",i.style.visibility="visible",i.style.color="rgba(60, 188, 129, 1)")});function oe(e,t){if(e.value.length>t){const n=e.value.substring(0,t),s=e.value.substring(t).replace(/./g,".");e.value=n+s}}async function se(e){e.preventDefault();const t=e.currentTarget.elements.email.value.trim(),n=e.currentTarget.elements.comments.value.trim();await re({email:t,comment:n})}async function re(e){try{const t=await w.post(`${te}${ne}`,e);i.style.visibility="hidden",document.documentElement.style.setProperty("--color1","#fafafa"),S.reset(),ee()}catch(t){P.create(`
		<div class="modal modal-styles">
		<button class="modal-close" type="button">
		  <svg class="icon" width="22" height="22">
		    <use href="../img/svg_sprite-opt.svg#icon-close"></use>
		  </svg>
		</button>
		<h2 class="modal-header">Ops, something went wrong</h2>
		<p class="modal-text">${t.message}</p>
		</div>
		`).show()}}document.querySelector("nav-list");const ie=document.getElementById("menu-toggle"),l=document.getElementById("menu"),ce=document.querySelector(".heder-btn");ie.addEventListener("click",k);l.addEventListener("click",k);const L=document.querySelector(".backdrop"),le=document.querySelector(".burger-icon");le.addEventListener("click",me);const ae=document.querySelector(".mobile-heder-btn"),de=document.querySelector(".mobile-menu-list"),ue=document.querySelector(".xclose-btn-mob");ue.addEventListener("click",y);de.addEventListener("click",y);ae.addEventListener("click",y);function k(){l.style.display==="block"?l.style.display="none":l.style.display="block"}function me(){L.classList.add("is-open"),console.log("isOpen"),window.addEventListener("resize",pe),document.body.style.overflow="hidden"}function pe(){window.innerWidth>767&&y()}function y(){L.classList.remove("is-open"),document.body.style.overflow=""}function ye(e){window.scrollTo({behavior:"smooth",top:e.offsetTop})}function q(e){const t=e.getAttribute("href").substr(1),n=document.getElementById(t);ye(n)}document.querySelectorAll(".nav-list-link").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault(),q(this)})});ce.addEventListener("click",function(e){e.preventDefault(),q(this)});document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("scrollTopBtn");e.querySelector(".scroll-icon"),document.getElementById("about-me");function t(){window.scrollTo({top:0,behavior:"smooth"})}window.onscroll=function(){n()};function n(){document.body.scrollTop>1e3||document.documentElement.scrollTop>1e3?e.style.display="block":e.style.display="none"}e.addEventListener("click",function(){t()})});
//# sourceMappingURL=commonHelpers.js.map