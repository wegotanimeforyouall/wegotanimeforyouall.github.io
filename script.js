document.addEventListener('DOMContentLoaded',function(){
  const hamburger = document.getElementById('hamburger');
  const sideMenu = document.getElementById('sideMenu');
  const closeMenu = document.getElementById('closeMenu');
  const searchInput = document.getElementById('searchInput');

  hamburger && hamburger.addEventListener('click',()=>{ sideMenu.setAttribute('aria-hidden','false'); });
  closeMenu && closeMenu.addEventListener('click',()=>{ sideMenu.setAttribute('aria-hidden','true'); });

  // simple search filter
  if (searchInput){
    searchInput.addEventListener('input',function(e){
      const q = (e.target.value||'').toLowerCase().trim();
      document.querySelectorAll('.anime-card').forEach(card=>{
        const txt = (card.textContent||'').toLowerCase();
        card.style.display = txt.includes(q) ? '' : 'none';
      });
    });
  }

  // placeholder login flow (not real)
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  loginBtn && loginBtn.addEventListener('click',()=>{
    alert('Google Sign-in will be added later. For now, this is just a placeholder.');
  });
  logoutBtn && logoutBtn.addEventListener('click',()=>{
    alert('Logged out (placeholder).');
  });
});