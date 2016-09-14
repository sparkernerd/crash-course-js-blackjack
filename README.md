
# The Iron Yard Crash Course

## BlackJack!

This is the code for a basic game of BlackJack written in JavaScript (with a little HTML and CSS as well). While this code is intended to be used in conjunction with an in-person crash course at The Iron Yard campus, you are welcome to use this code to learn on your own!

### How to Use This Repository

The first step is to download this code. Click on the big green button up to the right that says "Clone or download" - you'll want to then click on "Download ZIP". This will download a zipped file with all of these files in it! Unzip that file and place the resulting directory on your Desktop (or anywhere else on your machine that you prefer).

Now you're ready to start coding! Open up that directory you downloaded and double-click on the `blackjack.html` file. This should open in your web browser. Now you can start editing the `blackjack.js` file and work on the assignment.

### Your Mission

Your goal for this assignment is to make the BlackJack game work! Here are things that can or should happen:

* When a user clicks on the "Deal Hand" button they should receive two cards. The HTML looks like this: `<figure class='hand'>Q</figure>` (notice the `Q` in the middle, that's the card dealt to the user!)
  * Be sure that the user receives two **random** cards, from the possibilities (2-10, J, Q, K, or A).
* If the user has `21` as their card total, print "BlackJack!" in the `result` HTML element.
  * Remember: J, Q, and K count as 10 and an Ace (A) counts as 11.
* When the user clicks on "Hit Card" they receive a new card added to the end of the current set of cards.
  * This should also be a **random** card as the two before!
  * Be sure to check to see if they have BlackJack each time they hit a card!

### Good Luck!

### Want to skip to the end?

If you want to peek at one possible solution, [check out the `solution` branch by clicking here](https://github.com/TIYDC/crash-course-js-blackjack/blob/solution/blackjack.js).
