<div align="center">
<h1>JavaScript Bookmarklet Repository</h1>
<p><em> A collection of bookmarklets to automate common web tasks and streamline browsing. </em></p>
</div>

<br>

# Table of Contents
I. [Naruto Arena Bookmarklet](#I-naruto-arena-bookmarklet)  
II. [SkyShowtime Bookmarklet](#II-skyshowtime-bookmarklet)

<br>

# I. Naruto Arena Bookmarklet

### Links
- main website: https://www.naruto-arena.site/
- in-game website: https://www.naruto-arena.site/ingame
- bookmarklet code (minified, paste into bookmark URL): [NarutoArenaBookmarklet.js](https://github.com/RomulusMirauta/JavaScript_Bookmarklets/blob/main/NarutoArena/NarutoArenaBookmarklet.js)
- beautified source & development: [NarutoArenaCode.js](https://github.com/RomulusMirauta/JavaScript_Bookmarklets/blob/main/NarutoArena/NarutoArenaCode.js)

<br>

## Purpose
To automate the "initial set-up" process - modifying the background color from *the default* white to black & also muting the game's sound.

<br>

## Problem solved
Reduced time spent on repetitive actions - these changes are not automatically saved (in cookies - neither client-side, nor server-side), so this set-up must be done every time a new gaming session takes place.

<br>

## How to use
1. open your desired browser
2. access the bookmarklet's code by clicking here: [NarutoArenaBookmarklet.js](https://github.com/RomulusMirauta/JavaScript_Bookmarklets/blob/main/NarutoArena/NarutoArenaBookmarklet.js)
3. press the sequence of keys `CTRL` and `A` in order to select the entire code
4. copy the code
5. open the Bookmark Manager - for Chrome: press the sequence of keys `CTRL`, `SHIFT` and `O` *(not zero)*
6. create a bookmark: right-click inside the window and select "Add new bookmark"
7. fill-in the fields:
   - Name field e.g.: input "Naruto Arena Bookmarklet"
   - URL field: paste the code you just copied
8. open a new tab and access any website (e.g. *https://www.google.com/*) - ***limitation***
9. on browser's Bookmark Bar *(right below the field showing current website's address)*, find the bookmark named "Naruto Arena Bookmarklet" and left-click on it
10. if not already logged-in: log-in using your credentials
11. left-click again on the bookmarklet

<br>

## Compatibility Testing

I tested this bookmarklet on the following browsers:<br>
✅ Google Chrome <br>
✅ Mozilla Firefox <br>
✅ Microsoft Edge <br>
✅ Opera GX <br>

I tested this bookmarklet on the following platforms:<br>
✅ Windows (11)<br>
✅ Android (14)<br>


<br><hr><br>


# II. SkyShowtime Bookmarklet

## Links
- main website: https://www.skyshowtime.com/
- search page: https://www.skyshowtime.com/watch/search
- bookmarklet code (minified, paste into bookmark URL): [SkyShowtimeBookmarklet.js](https://github.com/RomulusMirauta/JavaScript_Bookmarklets/blob/main/SkyShowtime/SkyShowtimeBookmarklet.js)
- beautified source & development: [SkyShowtimeCode.js](https://github.com/RomulusMirauta/JavaScript_Bookmarklets/blob/main/SkyShowtime/SkyShowtimeCode.js)

<br>

## Purpose
Automatically opens SkyShowtime's streaming service website, focuses *(clicks on)* the search field and searches for a default phrase (e.g. "Mission Impossible"). Useful to quickly locate all titles in a film series - without manually typing.

<br>

## Problem solved
Removes the need of repeated manual clicking and typing when searching on SkyShowtime. Helpful when the search input is presented via an overlay or has an obfuscated CSS class.

<br>

## How to use
1. open your desired browser
2. open the bookmarklet file here: [SkyShowtimeBookmarklet.js](https://github.com/RomulusMirauta/JavaScript_Bookmarklets/blob/main/SkyShowtime/SkyShowtimeBookmarklet.js)
3. press the sequence of keys `CTRL` and `A` in order to select the entire code
4. copy the code
5. open the Bookmark Manager - for Chrome: press the sequence of keys `CTRL`, `SHIFT` and `O` *(not zero)*
6. create a bookmark: right-click inside the window and select "Add new bookmark"
7. fill-in the fields:
   - Name field e.g.: "SkyShowtime: Search (Mission Impossible)"
   - URL field: paste the code you just copied
8. open a new tab and access any website (e.g. *https://www.google.com/*) - ***limitation***
9. on browser's Bookmark Bar *(right below the field showing current website's address)*, find the previously created bookmark and left-click on it
10. if not already logged-in: log-in using your credentials
11. left-click again on the bookmarklet:
      - if you're already on the search page, it will focus the search input and it will type the phrase
      - if you clicked from another site, the bookmark will open SkyShowtime in a new tab and instruct you to click the bookmark again on that tab

<br>

> **Note:**  
> The bookmarklet targets the element with the selector `.xZpnK1HA4L`. This class may be obfuscated and could change in the future. If the script stops working, update the selector in the beautified source file *([SkyShowtimeCode.js](https://github.com/RomulusMirauta/JavaScript_Bookmarklets/blob/main/SkyShowtime/SkyShowtimeCode.js))*.

<br>

## Compatibility Testing
I tested this bookmarklet on the following browsers:<br>
✅ Google Chrome <br>
✅ Mozilla Firefox <br>
✅ Microsoft Edge <br>
✅ Opera GX <br>

I tested this bookmarklet on the following platforms:<br>
✅ Windows (11)<br>
✅ Android (14)<br>
