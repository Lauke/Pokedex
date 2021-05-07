# AJAX Pokédex

* In progress

## Progress
* I've learned how to fetch the Pokemon API and display it in the console log
* Learned how to fetch data from the API and manipulate the DOM Objects (still figuring out how to fetch the moves)
* Added the moves, not in the best way but it's understandable for now (going to reconsider this later)
* Fetched a second API to get the evolutions and managed to get the info and output them to html
* Added an else to the if function, to empty the div if the pokemon has NO evolution
* Sandbox version is finished (friday 07/05 10h25), the code is somewhat still messy and can use a clean up for more efficiency (will focus on this later), for now I start with css to meet the deadline with a working example.

## Practical Information

* Repository: `ajax-pokedex`
* Deadline: 2 days
* Delivery: Github page (published)
* Team: Solo

## Learning Objectives

* A typical AJAX flow: send asynchronous requests to a remote server and process the results;
* **[JSON](https://www.w3schools.com/js/js_json_intro.asp)** (JavaScript Object Notation) format;
* DOM manipulation: changing the DOM based on results of AJAX-requests.

## Exercise

Make a [Pokédex](https://www.google.com/search?q=pokedex&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiRtNT3-vDfAhWDy6QKHd1cBD4Q_AUIDigB&biw=1300&bih=968#imgrc=_) using [this API](https://pokeapi.co/).

Basic functionality that is expected (read: core features):
* You can search a pokémon by name and by ID
* Of said pokémon you need to show:
    * The ID-number
    * An image (sprite)
    * _At least_ 4 "moves"
    * The previous evolution, _only if it exists_, along with their name and image. Be carefull, you cannot just do ID-1 to get the previous form, for example look into "magmar" - "magmortar". You have to use a seperate api call for this!

Make your web page look like a pokédex by adding a little CSS.