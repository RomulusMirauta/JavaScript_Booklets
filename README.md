# JavaScript Bookmarklet Repository

<br>

# Table of Contents
### 1. [**Naruto Arena Bookmarklet**](https://github.com/RomulusMirauta/JavaScript_Booklets/edit/main/README.md#1-naruto-arena-booklet)
### 2. [**SkyShowtime Bookmarklet**](https://github.com/RomulusMirauta/JavaScript_Booklets/edit/main/README.md#2-skyshowtime-bookmarklet)

<br>

# 1. Naruto Arena Bookmarklet

## Links
- main website: https://www.naruto-arena.site/
- in-game website: https://www.naruto-arena.site/ingame

<br>

## **Purpose** 
To automate the "initial set-up" process - modifying the background color from white to black & muting the game's sound.

<br>

## **Problem solved** 
Reduced time spent on repetitive actions - these changes are not automatically saved (in cookies - neither client-side, nor server-side), so this set-up must be done every time a new gaming session takes place.

<br>

## How to use
1. open your desired browser
2. access bookmarklet's code by clicking here: [NarutoArenaBookmarklet.js](https://github.com/RomulusMirauta/JavaScript_Booklets/blob/main/NarutoArenaBookmarklet.js)
3. press the sequence of keys `CTRL` and `A` in order to select the entire code
4. copy the code
5. open the Bookmark Manager - for Chrome: press the sequence of keys `CTRL`, `SHIFT` and `O`
6. create a bookmark: right-click inside the window and select "Add new bookmark"
7. fill-in the fields:
   - Name field - input "Naruto Arena Bookmarklet"
   - URL field - paste the code you just copied
8. open a new tab and access any website (e.g. *https://www.google.ro/*) - ***limitation***
9. on browser's Bookmark Bar *(right below the field showing current website's address)*, find the bookmark named "Naruto Arena Bookmarklet" and left-click on it
10. log-in using your credentials
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

# 2. SkyShowtime Bookmarklet

## Links
- main website: https://www.skyshowtime.com/
- search page: https://www.skyshowtime.com/watch/search
- bookmarklet code (minified, paste into bookmark URL): [SkyShowtimeBookmarklet.js](https://github.com/RomulusMirauta/JavaScript_Booklets/blob/main/SkyShowtime/SkyShowtimeBookmarklet.js)
- beautified source & development: [SkyShowtimeCode.js](https://github.com/RomulusMirauta/JavaScript_Booklets/blob/main/SkyShowtime/SkyShowtimeCode.js)

<br>

## **Purpose**
Automatically focus the SkyShowtime search field and search for a default phrase (e.g. "Mission Impossible"). Useful to quickly locate all titles in a film series - without manual typing.

<br>

## **Problem solved**
Removes the need of repeated manual clicking and typing when searching on SkyShowtime. Helpful when the search input is presented via an overlay or has an obfuscated CSS class.

<br>

## How to use
1. open your desired browser
2. open the bookmarklet file here: [SkyShowtimeBookmarklet.js](https://github.com/RomulusMirauta/JavaScript_Booklets/blob/main/SkyShowtime/SkyShowtimeBookmarklet.js)
3. select the entire code (CTRL + A) and copy it
4. open the Bookmark Manager (Chrome: CTRL + SHIFT + O)
5. create a new bookmark and paste the code into the URL field
   - Name: "SkyShowtime: Search (Mission Impossible)"
   - URL: paste the code
6. open a new tab and go to the SkyShowtime search page: https://www.skyshowtime.com/watch/search
7. click the bookmark. If you're already on the search page it will focus the search input and type the phrase. If you clicked from another site the bookmark will open SkyShowtime in a new tab and instruct you to click the bookmark again on that tab.


**Note:** the bookmarklet targets the element with selector `.xZpnK1HA4L`. This class may be obfuscated and could change; if the script stops working update the selector in the beautified source (`SkyShowtimeCode.js`).

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
