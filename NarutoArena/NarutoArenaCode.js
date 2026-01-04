javascript: (function() {
  localStorage.setItem('changeBackground', "document.body.style.backgroundColor = 'black';");
  var newWin = window.open('https://www.naruto-arena.site/ingame', '_blank');
  /* opens desired website */
  newWin.onload = function() {
	newWin.eval(localStorage.getItem('changeBackground'));
	/* changing the background from white (default) to black */
    var observer = new newWin.MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (newWin.document.querySelector('#_volume_controller_red_bar')) {
          newWin.document.getElementById('_volume_controller_red_bar').click();
		  /* clicks the mute button when and if it is available */
          observer.disconnect();
        }
      });
    });
    observer.observe(newWin.document, { childList: true, subtree: true });
  };
})();


//to create LOGIN only IF needed
//click on mute button when in-battle as well