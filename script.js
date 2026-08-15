(()=>{
  const progress=document.getElementById('scroll-progress');
  const mobileNav=document.getElementById('mobile-nav');
  const year=document.getElementById('current-year');
  
  if(year)year.textContent=String(new Date().getFullYear());
  
  const updateProgress=()=>{
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
  
  if(mobileNav){
    mobileNav.querySelectorAll('a').forEach(link=>{
      link.addEventListener('click',()=>mobileNav.removeAttribute('open'));
    });
  }
})();