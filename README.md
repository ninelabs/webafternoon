# Web Afternoon
Design Time


## Deployment
The website is hosted on a [Heroku Pipeline](https://dashboard.heroku.com/pipelines/a9a243e5-12a6-4454-94c7-edc3bf74b0f7). The `design-edition` branch is connected to the staging website at http://webafternoon-staging.herokuapp.com. New pull requests to the `design-edition` branch will gernerate a review app at a URL specific to that PR.

The `master` branch is connected to the production app at http://webafternoon.herokuapp.com. The production environment must be deployed manually via the Heroku dashboard.
