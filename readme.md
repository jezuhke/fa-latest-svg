## Font Awesome to SVG for Fontello.com
Gets the latest Font Awesome svg icon set and optimizes it for Fontello.com.
It also removes the `fa-` prefix, since in my case it's not needed.

## Dependencies
* https://github.com/riobard/font-awesome-svg
* https://github.com/svg/svgo
* https://github.com/75lb/renamer

## Run

* Install dependencies
`npm install`

* Run tasks
`gulp generate`

* Rename it (useful for me since I use "icon-" in my icon css)
`cd svg && renamer --find 'fa-' --replace '' *`

## Run manually

* Install dependencies
`npm install`

* Get latest Font Awesome
`fa2svg --dir svg`

* Compress it
`svgo -f svg`

* Rename it (useful for me since I use "icon-" as a name in my css)
`renamer --find 'fa-' --replace '' *`
