# Notes:

Mariella told me to time-box this exercise, so it's not 100% perfect. The most glaring problem is the opacity of the non-focused images bleeding through each other. I struggled for a bit because the instructions say to use Retina images, which means setting a div with a background image and putting an opaque overlay on top isn't going to work. I tried using a CSS filter and fidling with contrast and brightness to simulate a opacity, but in my opinion, that was worse that the bleed through.

The images all being different heights and widths also made things difficult. I would've preferred to just use math to set the X and Y values consistently, but because the images all have different heights and widths, getting pixel-perfect placement was very manual. I'm not a fan of manual...

I used JPGs for the images instead of PNGs with a transparent background and simulated the rounded edges in CSS (border-radius). This was just a tiny optimization for image size.

I assumed you'd prefer the animation (and the countdown timer) to stop playing if someone clicks on the numbers. Easy enough to change that if that's a bad assumption.
