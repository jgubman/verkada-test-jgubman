# Notes:

Fun assignment, thanks for this!

Mariella told me to time box this between 4 and 8 hours. Other than the fonts, it is pixel perfect at the same browser dimensions as the figma. I didn't have access to the fonts in the figma, so the numbers and the Lorem Ipsum stuff aren't perfect, but I think they're close and they retain the same styling as the figma.

I made it responsive, so the spacing of elements changes at wider/smaller dimensions, but should retain the same feel. The smallest phone dimension was tough given the size of the images and time constraints, so I scaled them down.

The images all being different heights and widths made things tricky. I would've preferred to just use math to set the X and Y values consistently, but because the images all have different heights and widths, getting pixel-perfect placement was manual. I _think_ there's a way to have a uniform element sized at the largest width/height and top or bottom align the images inside that element and rotate it, but I was fidling with that angle for a long time and couldn't get it pixel-perfect, so in the interest of time I went with manual calculations. If this were a real project, I'd love to work with the design team on something less brittle.

I used JPGs for the images instead of PNGs with a transparent background and simulated the rounded edges in CSS (border-radius). This was just a tiny optimization for image size.

I assumed you'd prefer the animation (and the countdown timer) to switch to the paused if someone clicks on the numbers. Easy enough to change that if that's a bad assumption.

Didn't add any tests, I would if this were production code and I wasn't time-boxing the project.

In the interest of time, I just used a plain vanilla stylesheet, which I'd never do in an actual production project. Since this is just one page, there's no real advantage to breaking it up into multiple modules or imports. Also, I realized I've been taking Sass/PostCSS for granted, man I miss nested CSS.
