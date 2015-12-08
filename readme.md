## Font Awesome to SVG for Fontello.com
Gets the latest Font Awesome icon set and optimizes it for Fontello.com

## Dependencies
https://github.com/riobard/font-awesome-svg
https://github.com/svg/svgo
https://github.com/75lb/renamer


## Run
I will set up a task manager to avoid having to do this manually, but for now:

* Install dependencies
`npm install`

* Get latest Font Awesome
`fa2svg --dir svg`

* Compress it
`svgo -f svg`

* Rename it (useful for me since I use "icon-" as a name in my css)
`renamer --find 'fa-' --replace '' *`
