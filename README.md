# Pokemon Challenge

Congratulations on making it this far!

We were impressed with your soft skills, now we want to see where you are in terms of your Front End technical abilities.

Build a web page that allows a user to choose one of three pokemon, “Bulbasaur”, “Squirtle”, or “Charmander.” The web page should allow the user to see the name of the pokemon beneath the sprite of the pokemon as well as the ID, weight, height, and types.

Look here for an example:
https://miro.medium.com/max/5756/1*LvC-N5iv5YTeoZ5DF_QPpA.png

The card (or name) should be selectable and upon selection a confirmation should ask the user if they are sure they want to select the chosen pokemon as their pokemon. On a success, the other pokemon should be removed from the DOM and the selected pokemon should be centered.

## Requirements
1.	Use the pokemon service to retrieve data for the three pokemon in the starterPokemon array in pokemon.component. The getPokemon function from the pokemon service will need to be refactored to take a pokemon and retrieve the data for it.
2.	The data needs to be shown in a card and the cards need to look good on any viewport. Vertical on mobile and horizontal on desktop.
3.	Use the data provided in the pokemonService. An interface with the data structure can be found in pokemon.interface.ts.
4.	The component logic should be strongly typed.
5.	Unit tests should test the functionality of the component.
6.	Refactor the application to use best practices to ensure maintainability and extensibility.
