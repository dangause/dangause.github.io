---
layout: page
title: BALQSO classifier
description: Spotting broad absorption line quasars in Sloan Digital Sky Survey spectra with machine learning
img: assets/img/balqso.png
importance: 1
category: personal
related_publications: false
---

Quasars are the bright centers of distant galaxies, powered by gas falling onto a giant black hole. Some of them show broad absorption lines in their light, a sign of fast winds blowing outward from around the black hole.

I set out to train a model to spot these quasars automatically, using spectra from the Sloan Digital Sky Survey. The public code covers the data side of the project: picking quasars from the survey catalogs, downloading their spectra, and testing simple baseline models.

- Code: [github.com/dangause/qso-cv](https://github.com/dangause/qso-cv)