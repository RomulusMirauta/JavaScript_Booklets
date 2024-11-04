javascript: (function() { 
  localStorage.setItem('changeBackground', "document.body.style.backgroundColor = 'black';"); 
  var newWin = window.open('https://www.naruto-arena.site/ingame', '_blank'); 
  newWin.onload = function() {
	newWin.eval(localStorage.getItem('changeBackground'));
    var observer = new newWin.MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (newWin.document.querySelector('#_volume_controller_red_bar')) {
          newWin.document.getElementById('_volume_controller_red_bar').click();
          observer.disconnect();
        }
      });
    });
    observer.observe(newWin.document, { childList: true, subtree: true });
  };
})();
