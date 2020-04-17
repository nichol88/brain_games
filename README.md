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

Run `rails server` and you should be up and running!


# Dual n-Back Instructions

The 'Dual' in Dual n-Back stands for two stimuli.

Each turn, you will hear a sound and see a position on the grid light up.

The test begins at "1-back", i.e. "one turn ago".

When either stimulus is the same as "1-back" (one turn ago), press the corresponding key:

* A for audio match
* L for position match

**n** will increase as you get better. Be careful, you will lose points for incorrect guesses. Good luck!

[More Info on Wikipedia](https://en.wikipedia.org/wiki/N-back)
