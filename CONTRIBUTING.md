# Contributing to CoCreateJS

This project is work of [many contributors](https://github.com/CoCreate-app/CoCreateJS/graphs/contributors).
You're encouraged to submit [pull requests](https://github.com/CoCreate-app/CoCreateJS/pulls),
[propose features and discuss issues](https://github.com/CoCreate-app/CoCreateJS/issues).

In the examples below, substitute your Github username for `contributor` in URLs.

## Fork the Project

Fork the [project on Github](https://github.com/CoCreate-app/CoCreateJS) and check out your copy.

```
git CoCreateJS https://github.com/contributor/CoCreateJS.git
cd CoCreateJS
git remote add upstream https://github.com/CoCreate-app/CoCreateJS.git
```

## Create a Topic Branch

Make sure your fork is up-to-date and create a topic branch for your feature or bug fix on dev branch.

```
git checkout dev
git pull upstream dev
git checkout -b my-feature-branch
```

## Write Tests

Try to write a test that reproduces the problem you're trying to fix or describes a feature that you want to build.

We definitely appreciate pull requests that highlight or reproduce a problem, even without a fix.

## Write Code

Implement your feature or bug fix.

## Write Documentation

Document any external behavior in the [README](README.md).

## Commit Changes

Make sure git knows your name and email address:

```
git config --global user.name "Your Name"
git config --global user.email "contributor@example.com"
```

We use [semantic-release](https://github.com/semantic-release/semantic-release) as process to generate changelog
and to release. Write meaningful commits according to 
[Commit Message Formats](https://github.com/semantic-release/semantic-release#commit-message-format) is important.

```
git add ...
git commit -am "commit-type(optional topic): a meaningful message"
```

Here is an example of the release type that should be done based on a [semantic-release](https://github.com/semantic-release/semantic-release):

| Commit message                                                                                                                                                                                   | Release type               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | Patch Release              |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release |


## Push

```
git push origin my-feature-branch
```

## Make a Pull Request

Go to [https://github.com/CoCreate-app/CoCreateJS](https://github.com/CoCreate-app/CoCreateJS) and select your feature branch.
Click the 'Pull Request' button and fill out the form. Pull requests are usually reviewed within a few days.

## Rebase

If you've been working on a change for a while, rebase with upstream/dev.

```
git fetch upstream
git rebase upstream/dev
git push origin my-feature-branch -f
```

## Be Patient

It's likely that your change will not be merged and that the nitpicky maintainers will ask you to do more, or fix seemingly benign problems. Hang in there!

## Thank You

Please do know that we really appreciate and value your time and work. We love you, really.