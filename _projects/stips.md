---
layout: page
title: STIPS
description: The Small Telescope Image Processing Suite, bringing the LSST Science Pipelines to 1-meter-class telescopes
img: assets/img/projects/stips/stips_card.png
importance: 1
category: UCO
related_publications: false
---

<div class="row justify-content-center mt-3">
  <div class="col-6 col-md-3 text-center">
    {% include figure.liquid loading="eager" path="assets/img/projects/stips/stips_logo.png" class="img-fluid" alt="STIPS logo" %}
  </div>
</div>

Telescopes of the 1-meter class are often called the workhorses of observational astronomy. They follow up supernovae and other transients, time exoplanet transits, monitor variable stars, and train students, and many hold archives that go back decades. Their role is growing as surveys like the Zwicky Transient Facility and Rubin Observatory's Legacy Survey of Space and Time (LSST) find far more transients than large telescopes can follow. Yet few of these telescopes have an actively maintained, public image-reduction pipeline. Most groups end up writing their own, which falls hardest on the users these telescopes serve best: community colleges, outreach programs, and small research groups.

**STIPS**, the Small Telescope Image Processing Suite, is an open-source package that runs the LSST Science Pipelines on these telescopes. I am the lead developer, working with Kyle Westfall at UC Observatories, and a paper describing it is in preparation for the _Astronomical Journal_.

#### Borrowing a survey's software

Vera C. Rubin Observatory built the LSST Science Pipelines to process a ten-year survey of the southern sky that will make some 32 trillion observations of 40 billion objects. Along with state-of-the-art image-processing algorithms, they include a data management layer, the butler, that stores every product together with the configuration and software versions that made it.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/lsst_nickel/lsst_simonyi.jpg" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/lsst_nickel/lsst_survey_map.png" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: the Simonyi Survey Telescope at Rubin Observatory. Right: LSST's planned ten-year sky coverage.
</div>

The pipelines can be adapted to other cameras, and they already process data from Hyper Suprime-Cam, DECam, and others. But each new camera normally needs its own "obs" package, a piece of Python that encodes the detector geometry, header conventions, and calibrations, and writing one takes detailed knowledge of the pipeline internals. Running the pipelines then means learning the butler's data model, pipeline definitions, and a set of bespoke command-line tools. That complexity has kept the software out of reach for most small telescopes.

#### How STIPS works

STIPS replaces the obs package with a short, declarative description of the camera. Each instrument gets a directory whose central file, the instrument profile, lists the filters, the header keywords, the observatory site, and the detector geometry; everything else has a default. When the software runs, STIPS builds the instrument classes the pipelines need directly from that profile, so a new telescope needs only the configuration that differs from the defaults.

<div class="row justify-content-center mt-3">
  <div class="col-sm-12 text-center">
    {% include figure.liquid loading="eager" path="assets/img/projects/stips/fig_architecture.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Components of STIPS. The user writes an instrument profile once per camera and a run configuration for each reduction. The <code>obs_stips</code> package builds the instrument classes, pipelines, and tasks from the profile; the <code>stips</code> command-line interface runs the LSST Stack, which writes images, catalogs, and provenance to a butler repository.
</div>

A reduction is then controlled by a single YAML file that names the instrument, the target, the nights and bands, and where the difference-imaging templates and reference catalogs come from. One command takes the data from raw frames to a chosen end point:

- **Ingestion and calibration:** screen and ingest the raw frames, then build and certify each night's bias and flat field
- **Single-visit processing:** correct each frame for the instrument signature and calibrate it against Gaia DR3 and Pan-STARRS, with color terms for the instrument's filters
- **Difference imaging:** subtract a template, built from the telescope's own images or taken from a survey, to isolate whatever changed
- **Photometry and light curves:** forced PSF photometry at the target, or differential aperture photometry for bright stars and transits
- **Data products:** every product is stored in the butler with its configuration and software versions, and light curves and calibration metrics are exported as tables

<div class="row justify-content-center mt-3">
  <div class="col-sm-12 text-center">
    {% include figure.liquid loading="eager" path="assets/img/projects/stips/fig_flow.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Processing of one night's data. Raw frames are screened, ingested, and calibrated (top row), then differenced against a template and measured (bottom row). Green cylinders are data; for differential photometry (dashed arrow) the subtraction is skipped.
</div>

Nights are processed independently, so a failure on one night doesn't stop the rest, and the same pipelines can be sent to a Slurm or HTCondor cluster. Because STIPS calls the LSST software in separate processes, it installs in an ordinary Python environment, and container images with everything installed ship with each release.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/stips/fig_2023ixf_images.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  SN 2023ixf in M101, observed with the Nickel telescope on 2023 May 27: (a) the raw frame, (b) the calibrated image, and (c) the difference against a Pan-STARRS template, with the supernova marked.
</div>

#### Testing it on real telescopes

STIPS currently supports two instruments: the Direct Imaging Camera on the 1-m Nickel Telescope at Lick Observatory and Y4KCam on the CTIO 1.0-m telescope in Chile. Every number below comes from reprocessing the raw data from scratch.

- **Calibration:** against Landolt standard stars, mean Nickel residuals are within 0.012 mag in _BVRI_, and astrometric fits to Gaia DR3 have median residuals of 14–48 milliarcseconds. On six Y4KCam nights from 2011, 870 measurements of 71 Landolt standards agree with the catalog to medians between −0.028 and +0.039 mag, with a robust scatter (NMAD) of 0.022–0.044 mag.
- **Supernovae:** Nickel light curves of SN 2023ixf and SN 2020wnt agree with independent reductions of the same data to within 0.10 mag in the median.
- **Exoplanets:** a single night of Nickel differential photometry recovers the transit of HD 189733 b with a depth of 2.40 ± 0.06% and a mid-transit time within a minute of the published ephemeris.
- **Archival data:** Y4KCam images from a cloudy night in 2011 recover a transit of WASP-19 b with a depth of 2.16 ± 0.14%, consistent with the published 2.077 ± 0.014%, and a mid-transit time −1.1 ± 1.0 minutes from the ephemeris.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/stips/fig_landolt_residuals.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  STIPS minus Landolt magnitudes for standard stars in <i>B</i>, <i>V</i>, <i>R</i>, and <i>I</i>: (a) ten standards on four Nickel nights, (b) 71 standards on six Y4KCam nights, calibrated against Gaia DR3. Symbols mark the night.
</div>

<div class="row mt-3">
  <div class="col-sm-12 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/stips/fig_sn_external.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  STIPS photometry of SN 2023ixf and SN 2020wnt (filled symbols) against independent reductions of the same Nickel data (open triangles).
</div>

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/stips/fig_hd189733_transit.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/stips/fig_wasp19_transits.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Left: the transit of HD 189733 b observed with the Nickel telescope on 2025 August 2. Right: the transit of WASP-19 b in archival Y4KCam data from 2011 December 24, with the published light curve of the same frames (orange squares) for comparison.
</div>

#### Links

I first presented STIPS at the 248th meeting of the American Astronomical Society in Pasadena in June 2026.

- Paper: Gause, D. & Westfall, K. B., _STIPS: Bringing the LSST Science Pipelines to 1-Meter-Class Telescopes_, in preparation for AJ
- Code: [github.com/dangause/stips](https://github.com/dangause/stips) (BSD 3-Clause)
- Documentation: [stips-docs.readthedocs.io](https://stips-docs.readthedocs.io)
- Poster: [AAS 248 iPoster](https://aas248-aas.ipostersessions.com/?s=03-D6-D6-6C-C5-AA-57-D4-12-33-1B-2F-65-D9-43-94)
