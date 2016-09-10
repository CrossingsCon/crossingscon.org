# crossingscon.org
The website for CrossingsCon.

## Installing
The site is a [Jekyll site](https://jekyllrb.com/docs/home/), so all that stuff applies here.

```bash
# clone the repo
$ git clone github.com/crossingscon/crossingscon.org
$ cd crossingscon.org

# install dependencies
$ make install

# build the site (optional, because you probably just want to...)
$ make build

# use jekyll's server mode
$ make start
```

You should now be able to see the site at [http://localhost:4000/](http://localhost:4000/).

## Developing

### Making significant layout-type changes
Do them in a feature branch, git flow-style:

```bash
# create the branch
$ git checkout feature/poiuyt-frobnitzing

# do your work
# rebase your commits so they make sense and are atomic
# rebase everything on top of gh-pages:
$ git rebase gh-pages

# commit and push
$ git commit -m "Frobnitz the poiuyt."
$ git push
```

Create a pull request for your branch and have someone who knows what they're doing look it over and approve it. (We don't really have CI. I'm not sure what our CI would do. It would probably look at the repo and go, "Yep, that's a repo. Full of things." Actually, maybe it would test that jekyll completed without errors. But that's for later, and I digress.)

Once the PR is approved, go ahead and merge it, and delete the branch.

### Making text-only changes
Go ahead and just do them right on gh-pages, unless it's, like, paragraphs and paragraphs of text. We're not barbarians.

## Page Layouts

### page
This is the default page layout. It should be used for just about everything.

```markdown
---
layout: page
title: About CrossingsCon
---
```

### redirect
This page layout actually causes that page to redirect to a specified external URL. We do this so we can capture that we redirected somewhere else in our analytics.

```markdown
---
title: Young Wizards Slack
layout: redirect
redirect_url: http://youngwizards-slackin.herokuapp.com/
---
```

`redirect_url`: The URL to redirect to.
