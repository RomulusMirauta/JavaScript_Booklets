/*
  SkyShowtime - Beautified bookmarklet code

  What this does:
  - Finds the search element using the selector '.xZpnK1HA4L'
  - Fills it with the phrase 'Mission Impossible'
  - Dispatches input/change events and attempts to submit the search
  - If the page isn't the SkyShowtime search page, opens it in a new tab and asks you to click the bookmark there
*/

(function () {
  'use strict';

  var SEARCH_PHRASE = 'Mission Impossible';
  var SEARCH_SELECTOR = '.xZpnK1HA4L';
  var SEARCH_PATH = '/watch/search';
  var SEARCH_URL = 'https://www.skyshowtime.com' + SEARCH_PATH;
  var TOGGLE_SELECTOR = "button[aria-label*='Search'], .search-toggle, .open-search, .icon-search, .site-search-toggle";
  var SUBMIT_SELECTOR = "button[aria-label*='Search'], button[title*='Search'], .search__button, .search-button, .search-submit, .search-icon";

  function findSearchInput() {
    var el = document.querySelector(SEARCH_SELECTOR);
    if (!el) return null;

    var tag = (el.tagName || '').toLowerCase();
    if (tag === 'input' || tag === 'textarea' || el.isContentEditable) return el;

    if (el.querySelector) {
      return el.querySelector('input, textarea, [contenteditable]') || el;
    }

    return el;
  }

  function setValue(input, value) {
    if (!input) return;

    if (input.isContentEditable) {
      input.textContent = value;
      input.dispatchEvent(new InputEvent('input', { bubbles: true }));
      return;
    }

    try {
      var nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      nativeSetter.call(input, value);
    } catch (e) {
      input.value = value;
    }

    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function submitInput(input) {
    try {
      var submitBtn = input.form ? input.form.querySelector("button[type='submit'], input[type='submit']") : document.querySelector(SUBMIT_SELECTOR);
      if (submitBtn) {
        submitBtn.click();
        return;
      }
    } catch (e) {
      // ignore
    }

    // fallback: simulate Enter key events
    ['keydown', 'keypress', 'keyup'].forEach(function (type) {
      input.dispatchEvent(new KeyboardEvent(type, { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
    });
  }

  function fillAndSearch(input) {
    if (!input) return;

    input.focus();
    try { input.setSelectionRange(String(input.value || '').length, String(input.value || '').length); } catch (e) { /* ignore */ }

    setValue(input, SEARCH_PHRASE);

    // small delay to allow any UI handlers to run
    setTimeout(function () {
      submitInput(input);
    }, 250);
  }

  function openSearchPageAndNotify() {
    window.open(SEARCH_URL, '_blank');
    alert('Opened SkyShowtime in a new tab.\n\nAfter it loads, click the bookmark again on that tab to run the search.');
  }

  // Main flow
  if (location.hostname.indexOf('skyshowtime.com') !== -1 && location.pathname.indexOf(SEARCH_PATH) !== -1) {
    var input = findSearchInput();
    if (input) {
      fillAndSearch(input);
      return;
    }

    // Try opening a search overlay
    var toggle = document.querySelector(TOGGLE_SELECTOR);
    if (toggle) {
      try { toggle.click(); } catch (e) { /* ignore */ }

      var tries = 0;
      var interval = setInterval(function () {
        var i = findSearchInput();
        if (i) {
          clearInterval(interval);
          fillAndSearch(i);
        }
        if (++tries > 12) clearInterval(interval);
      }, 400);

      return;
    }

    // Last resort: observe DOM for input to appear
    var observer = new MutationObserver(function () {
      var i = findSearchInput();
      if (i) {
        observer.disconnect();
        fillAndSearch(i);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(function () { observer.disconnect(); }, 10000);

    return;
  }

  // Not on site: open and instruct user to click bookmark on that tab
  openSearchPageAndNotify();

})();
