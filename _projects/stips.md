---
layout: page
title: STIPS
description: The Small Telescope Image Processing Suite, bringing Rubin Observatory's software to 1-meter class telescopes
img: assets/img/lsst.png
importance: 1
category: UCO
related_publications: false
---

One-meter class telescopes have decades of images sitting in their archives, but most have no modern software for turning raw frames into science-ready measurements. **STIPS**, the Small Telescope Image Processing Suite, fills that gap by borrowing the software built for one of the most ambitious telescopes of the decade.

#### Where the software comes from

The Vera C. Rubin Observatory is carrying out the Legacy Survey of Space and Time (LSST), a ten-year survey that photographs the entire southern sky every few nights with an 8.4 m telescope and a 3.2-gigapixel camera. It produces around 20 terabytes of raw images per night and has to flag anything that changes in the sky within about a minute.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/lsst_nickel/lsst_simonyi.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/lsst_nickel/lsst_survey_map.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Fig 1 (left) The Simonyi Survey Telescope, Rubin Observatory’s primary instrument. Fig 2 (right) LSST planned 10-year sky coverage: total number of visits per area of sky.
</div>

To handle that, the Rubin team spent years building the [LSST Science Pipelines](https://pipelines.lsst.io/), a toolkit that covers nearly every step of astronomical image processing. Usefully, it was designed so that it could be adapted to other instruments, not just Rubin's.

<div class="row justify-content-center mt-3">
  <div class="col-md-6 col-sm-10 text-center">
    {% include figure.liquid loading="eager" path="assets/img/projects/lsst_nickel/lsst_pipelines_diagram.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption text-center">
  LSST Science Pipelines: Infrastructure for real-time alert processing and long-term data releases.
</div>

#### What STIPS does

Adapting the pipelines to a new telescope normally takes a lot of specialized knowledge. This project started as an attempt to get them running on the Nickel Telescope, a 1 m reflector at Lick Observatory, and grew into a general package that does the hard part once so that other small telescopes can reuse it.

With STIPS, a telescope is described by a short profile: its camera, its filters, and how to read its image headers. From there, a single command-line tool runs the whole process, including:

- cleaning raw images using calibration frames
- working out exactly where each image points on the sky and how bright each source is
- stacking images and subtracting them from one another to find things that have changed
- building light curves, the record of how an object's brightness changes over time

STIPS currently supports the Nickel 1 m and the CTIO 1.0 m telescope in Chile, and it runs on a laptop, in a container, or on a computing cluster.

#### How well it works

We tested STIPS on Nickel data against Landolt standard stars, a set of stars with very well-known brightnesses, and measured them to within 0.05 magnitudes, with positions accurate to better than a pixel. It also reproduced previously published observations of the supernova SN 2020wnt.

I presented STIPS with Kyle Westfall of UC Observatories at the 248th meeting of the American Astronomical Society in Pasadena in June 2026.

- Code: [github.com/dangause/stips](https://github.com/dangause/stips)
- Poster: [AAS 248 iPoster](https://aas248-aas.ipostersessions.com/?s=03-D6-D6-6C-C5-AA-57-D4-12-33-1B-2F-65-D9-43-94)
