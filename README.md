# Orange Circle

Orange Circle is a two-player turn-based game inspired by whack-a-mole.


### Instructions

Designed on a 5x5 board, the game objective is to click on as many random orange circles that appear in a 30-second timeframe.

Players gain one point on clicking the orange circle before it disappears, and gets one point deducted for every white circle clicked. The player with the highest score at the end of their turn wins.

Game can be played here: https://steph-wong.github.io/orange-circle/


### Technologies Used

- jQuery


### Approach Taken

The game was first designed for one player, then modified to be turn-based.

- Create basic HTML & CSS structures
- Create a loop that makes random circles light up
- Add function to record correct clicks (on orange circle)
- Add scoring system and countdown timer
- Modify to two-player game; create turns & compare scores


### Unsolved Problems

- Had trouble setting board using an array
- Timer doesn't restart at 30 (shows 29)
- Need to tighten up codes


### References

- Whack-a-mole by Hades (http://codepen.io/Hades3191/pen/zBrvoj)
- zGGxGj by Beau Rogers (http://codepen.io/BeaueRogers/pen/zGGxGj)
