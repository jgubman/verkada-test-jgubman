# Notes:

Mariella told me to time-box this exercise, so it's not 100% perfect.

The images all being different heights and widths also made things difficult. I would've preferred to just use math to set the X and Y values consistently, but because the images all have different heights and widths, getting pixel-perfect placement was very manual. I'm not a fan of manual...

I used JPGs for the images instead of PNGs with a transparent background and simulated the rounded edges in CSS (border-radius). This was just a tiny optimization for image size.

I assumed you'd prefer the animation (and the countdown timer) to stop playing if someone clicks on the numbers. Easy enough to change that if that's a bad assumption.

Didn't add any tests, I would if this were production code and I wasn't time-boxing the project.

In the interest of time, I just used a plain vanilla stylesheet, which I'd never do in an actual production project. Since this is just one page, there's no real advantage to breaking it up into multiple modules or imports. Also, I realized I've been taking Sass/PostCSS for granted, man I miss nested CSS.

I put a little effort into the responsive sizing. At 1200px I force it to wrap and hide the carousel controls. It's a little janky and I'd prefer to spend more time on it.
