# Notes:

Mariella told me to time-box this exercise, so it's not 100% perfect. The most glaring problem is the opacity of the non-focused images bleeding through each other. I struggled for a bit because the instructions say to use Retina images, which means setting a div with a background image and putting an opaque overlay on top isn't going to work. I tried using a CSS filter and fidling with contrast and brightness to simulate a opacity, but in my opinion, that was worse that the bleed through. I also tried using the "disabled" images in the Figma and updating src of the non-active images to those, but couldn't get a good fade in/out effect and again that jumping from faded to opaque was more jarring than the bleed through.

The images all being different heights and widths also made things difficult. I would've preferred to just use math to set the X and Y values consistently, but because the images all have different heights and widths, getting pixel-perfect placement was very manual. I'm not a fan of manual...

I used JPGs for the images instead of PNGs with a transparent background and simulated the rounded edges in CSS (border-radius). This was just a tiny optimization for image size.

I assumed you'd prefer the animation (and the countdown timer) to stop playing if someone clicks on the numbers. Easy enough to change that if that's a bad assumption.

Didn't add any tests, I would if this were production code and I wasn't time-boxing the project.

In the interest of time, I just used a plain vanilla stylesheet, which I'd never do in an actual production project. Since this is just one page, there's no real advantage to breaking it up into multiple modules or imports. Also, I realized I've been taking Sass/PostCSS for granted, man I miss nested CSS.
