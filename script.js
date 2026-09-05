(()=>{
  const progress=document.getElementById('scroll-progress');
  const mobileNav=document.getElementById('mobile-nav');
  const year=document.getElementById('current-year');
  const backToTop=document.createElement('button');
  backToTop.type='button';
  backToTop.className='back-to-top';
  backToTop.setAttribute('aria-label','Return to the top of the page');
  backToTop.innerHTML='<span aria-hidden="true">↑</span><span>Top</span>';
  document.body.append(backToTop);
  
  if(year)year.textContent=String(new Date().getFullYear());
  
  const updateProgress=()=>{
    backToTop.classList.toggle('is-visible',window.scrollY>560);
    if(!progress)return;
    const root=document.documentElement;
    const distance=root.scrollHeight-root.clientHeight;
    progress.style.width=distance>0
      ?`${Math.min(100,(root.scrollTop/distance)*100)}%`
      :'0%';
  };
  
  updateProgress();
  window.addEventListener('scroll',updateProgress,{passive:true});
  window.addEventListener('resize',updateProgress);
  backToTop.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  });
  
  if(mobileNav){
    mobileNav.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click',()=>mobileNav.removeAttribute('open'));
    });
  }
})();