(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),i=document.querySelectorAll(".page-header__menu-mobile a"),s=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};i.forEach((e=>{e.addEventListener("click",s),e.matchMedia("(max-width:1199px)")})),t.addEventListener("click",s),n.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),tns({container:".galery-container",items:1,slideBy:"page",autoplay:!0,controls:!1,autoplayButtonOutput:!1,nav:!1,rewind:!0,mode:"gallery",speed:1e3}),tns({container:".my-slider",items:1,slideBy:"page",autoplay:!0,controls:!1,autoplayButtonOutput:!1,navPosition:"bottom",rewind:!0}),(()=>{function e(){const e=document.querySelector(`#${this.dataset.modalId}`);document.body.classList.toggle("modal-open"),e.classList.toggle("is-hidden")}document.querySelectorAll("[data-modal-id]").forEach((t=>{t.addEventListener("click",e)}))})();const e={min:0,max:100,speed:100,increment:1,delay:0},t={min:"data-counter-min",max:"data-counter-max",speed:"data-counter-speed",increment:"data-counter-increment",delay:"data-counter-delay"};class n extends class{render(e){this.element.innerHTML=e}}{die(){clearTimeout(this.interval)}count(){this.current<this.max?(this.current+=this.increment,this.render(this.current)):this.current>this.max&&(this.render(this.max),this.die())}initialize(){this.delay>0?setTimeout((()=>{this.interval=setInterval(this.count.bind(this),this.speed)}),this.delay):this.interval=setInterval(this.count.bind(this),this.speed),this.render(this.min)}constructor(n,i,s,r,a,o){super(),this.selector=n,this.element=document.querySelector(this.selector),this.min=parseInt(this.element.getAttribute(t.min))||e.min,this.max=parseInt(this.element.getAttribute(t.max))||e.max,this.speed=parseInt(this.element.getAttribute(t.speed))||e.speed,this.increment=parseInt(this.element.getAttribute(t.increment))||e.increment,this.delay=parseInt(this.element.getAttribute(t.delay))||e.delay,this.current=this.min,this.interval,this.initialize()}}new n(".locations-count-16"),new n(".locations-count-23");const i=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&e.target.classList.add("element-show")}))}),{threshold:[.5]}),s=document.querySelectorAll(".element-animation");for(let e of s)i.observe(e);
//# sourceMappingURL=index.30354276.js.map
