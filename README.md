# README

# To Install Locally

Download the repository. Navigate to the games-backend folder, and install dependencies with `bundle install`. You will also need to create and seed the database with the game assets:
```
rails db:create
```
then:
```
rails db:seed
```

Next, you will need to change the base url to `http://localhost:3000`. This can be found in line 2 of `frontend/public/js/index.js`.

Run `rails server` and you should be up and running! View the app by opening index.html at: `frontend > Public > index.html`


# Dual n-Back Instructions

The 'Dual' in Dual n-Back stands for two stimuli.

Each turn, you will hear a sound and see a position on the grid light up.

The test begins at "1-back", i.e. "one turn ago".

When either stimulus is the same as "1-back" (one turn ago), press the corresponding key:

* A for audio match
* L for position match

**n** will increase as you get better. Be careful, you will lose points for incorrect guesses. Good luck!

[More Info on Wikipedia](https://en.wikipedia.org/wiki/N-back)

# License

MIT License

Copyright (c) 2020 Brian Nicholls

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
