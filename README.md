# Web Afternoon
Design Time


## Deployment
The website is hosted on a [Heroku Pipeline](https://devcenter.heroku.com/articles/pipelines). The `design-edition` branch is connected to the staging website at http://webafternoon-staging.herokuapp.com. New pull requests to the `design-edition` branch will gernerate a review app at a URL specific to that PR.

The `master` branch is connected to the production app at http://webafternoon.herokuapp.com. The production environment must be deployed manually via the Heroku dashboard.
