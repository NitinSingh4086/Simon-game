# Simon Game

A browser memory game built with JavaScript and jQuery. Remember an expanding color sequence and repeat it by clicking the colored tiles.

**[Play the live game](https://simonngameee.netlify.app/)** · [Game logic](game.js)

## How to play

1. Open the game on a desktop browser and press a keyboard key to start.
2. Watch and listen for the highlighted color.
3. Click the colors in the sequence you have memorized.
4. After a correct sequence, the game adds one new color and advances the level.
5. A wrong choice ends the round. Press a key to restart.

The game flashes the newly added color each round; it does not replay the entire sequence.

## Features

- Random color selection and an expanding sequence stored in an array.
- Input checked against the expected sequence after every click.
- Level progression after completing a sequence.
- Color-specific sounds and press animations.
- Game-over feedback and state reset for a new round.

## Stack

JavaScript, jQuery 3.7.1, HTML, and CSS. There is no backend or build step.

## Run locally

```bash
git clone https://github.com/NitinSingh4086/Simon-game.git
cd Simon-game
```

Open `index.html` in a desktop browser. Internet access is needed for the jQuery CDN and Google Fonts.

Alternatively, serve the directory with any static web server. With Python installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## How the code works

[game.js](game.js) keeps two arrays:

- `gamePattern`: the expected sequence.
- `userClickedPattern`: the player's input for the current round.

`nextSequence()` appends a random color and increases the level. Each tile click calls `checkAnswer()` to compare the latest input with the corresponding expected color. A completed round schedules the next level; a mismatch calls `startOVer()` to clear the state.

| File | Responsibility |
| --- | --- |
| `index.html` | Four-tile game interface and script loading |
| `styles.css` | Tile layout, pressed state, and game-over styling |
| `game.js` | Sequence generation, input checks, sounds, and reset |
| `sounds/` | Color cues and the wrong-answer sound |

## Manual checks

- Press a key and confirm the heading changes to level 1.
- Repeat the correct sequence and confirm the next level appears.
- Choose an incorrect color and confirm the game-over message appears.
- Press a key again and confirm the game restarts at level 1.
- Check the color sounds and visual press feedback.

## Current scope

This is a focused frontend learning project. It has no automated test suite, saved scores, or account system. Starting and restarting require a keyboard; touch-only play and keyboard navigation of the tiles are not implemented. Rapid extra clicks during the between-level delay also need stronger input guarding.
