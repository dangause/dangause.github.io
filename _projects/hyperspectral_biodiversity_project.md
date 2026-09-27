---
layout: page
title: hyperspectral biodiversity
description: A CAS research project predicting where tree species are absent, using hyperspectral satellite imagery and machine learning.
img: assets/img/hs-rs-cube.png
importance: 1
category: CAS
related_publications: false
---

Museum plant records tell you where a species was found, but not where it's missing. That gap matters, because knowing where a species is absent makes estimates of biodiversity much more reliable.

This project tests whether hyperspectral satellite images, which capture hundreds of colors per pixel instead of the usual three, can fill that gap. Using a fully mapped forest plot at UC Santa Cruz as ground truth and imagery from the EnMAP satellite, I trained a model to predict whether a given tree species is present in each pixel. Early tests on a single species are promising, though the sample so far is small.

For background on the imagery itself, see my post [Hyperspectral 101](/blog/2025/hyperspectral-101/).

- Code: [github.com/dangause/hrs-botany](https://github.com/dangause/hrs-botany)
