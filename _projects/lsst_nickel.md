---
layout: page
title: lsst science pipelines adaptation
description: Adapting the LSST Science Pipelines to Lick's Nickel Telescope
img: assets/img/lsst.png
importance: 2
category: UCO
related_publications: true
---

The Vera C. Rubin Observatory will be one of—if not *the*—premier observatories for transient and survey astronomy this decade. It’s been conceptualized and designed around its main task — the Legacy Survey of Space and Time (LSST), a proposed ten-year survey slated to capture the entire southern sky every three nights. The main instrument will be the Simonyi Survey Telescope, an 8.4 m beast hooked up to the 3.2-gigapixel LSSTCam survey camera.

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

To comply with the requirements set by the sheer magnitude of this goal, LSST is expected to take over 200,000 pictures per year and will generate on the order of 20 terabytes of raw imaging data every 24-hour observing period — which works out to about 20,000 gigabytes per night. Additionally, with transient detection as one of LSST’s main science goals, the LSST Data Management System (DMS) requires real-time, high-speed, complex image processing in order to send out alerts in as little as 60 seconds.

These are serious requirements and will necessitate serious data-management strategies. The LSST team has long recognized this and has been developing data tools to accomplish this goal for decades.

<div class="row justify-content-center mt-3">
  <div class="col-md-6 col-sm-10 text-center">
    {% include figure.liquid loading="eager" path="assets/img/projects/lsst_nickel/lsst_pipelines_diagram.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption text-center">
  LSST Science Pipelines: Infrastructure for real-time alert processing and long-term data releases.
</div>


One of the main products of this amazing work is the LSST Science Pipelines Software — a collection of tools designed to create the LSST data releases and perform nightly alert production. The [LSST GitHub organization](https://github.com/lsst) contains hundreds of repositories, and among these are dozens of Python products that comprise the Science Pipelines. The Science Pipelines contain tools that cover the gamut of astronomical image processing, from data organization and file storing, workflow graph building, reduction tasks, source detection, deblending, PSF modeling, astrometric and photometric calibration, and countless other astronomical algorithms. All of these algorithms are designed to be easily added or removed from processing pipelines, allowing for universal customization and integration on a scale never before seen.

One of the best parts of the LSST Science Pipelines is that they were purposefully developed so that they could be abstracted and used by any instrument—not just the Rubin instruments. The LSST developers even shared a [repository](https://github.com/lsst/obs_lsst) that serves as a starting point for adapting to other telescopes.

After conversations with my volunteer supervisor at University of California Observatories, we’ve decided to give it a crack by adapting the LSST Science Pipelines to Lick Observatory’s very own Nickel Telescope. Nickel, a 1 m reflector, is an almost comically underpowered telescope in comparison to the instruments for which the LSST Pipelines were developed. That said, applying these incredibly precise and powerful tools to smaller telescopes could hugely benefit astronomers worldwide. The lack of a unified image-processing framework is one of the greatest frustrations in modern astronomy, and the LSST Science Pipelines are a convincing candidate to fill this gap.

Due to the complexity of LSST’s data requirements and its continued development, it should hardly come as a surprise that adapting the Science Pipelines is no trivial task. A lack of robust documentation and open-source examples of small-scale adaptations renders this a pioneering effort. Follow along, and we’ll see how this goes!
