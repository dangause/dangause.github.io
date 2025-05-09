---
layout: post
title: Hyperspectral 101
date: 2025-05-09 13:40:16
description: An introduction to hyperspectral imagery 
tags: hsi biodiversity
categories: posts
featured: true
---

#### Hyperspectral Imagery: The Good, the Bad, and the Ugly

There's been a fair amount of hype around hyperspectral imagery (HSI from now on) recently. In this blog post I'll cover a basic overview of what HSI is, what we can do with it, and where we can get it.

##### What is it?

**TLDR; HSI is just like a RGB image, but extended to hundreds of wavelength bands across the infrared to ultraviolent spectrum.**

From eoPortal, an information source operated by the European Space Agency, *"Hyperspectral imaging (HSI) is a process used to obtain high spectral resolution imagery by dividing light into many narrow, contiguous spectral bands across the electromagnetic (EM) spectrum, typically between visible and infrared wavelengths."*
Despite its intimidating name and description, it's actually a fairly simple concept. It takes the fundamental concepts of spectroscopy (familiar to any astronomer), and applies them to an entire image, so that every pixel contains a full, continuous spectra of the light picked up from that point in an image.

Where an RGB image records the intensity of light in three bands (red, green, blue centred at approximately 660 nm, 520 nm, and 450 nm, respectively), HSI records the intensity of light in hundreds of narrow bands, estimating a continuous spectrum from near infrared to ultraviolet.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/hsi-spectrum.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/rgb-ms-hsi.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>




Where traditional spectroscopic telescopic instruments are built and optimized for faint point sources of light, 


HSI has applications in a wide swath of fields including, but certainly not limited to, environmental monitoring, defense surveillance, agriculture, geology and mining, forestry, urban studies, disaster respose. Due an influx of money coming from a subset of these fields (the identification of which is an exercise left up to the reader), R&D in HSI has been fairly active over the past few decades. And now as more and more commercial satellite companies keep popping up and recognizing the profitability in this kind of data, there's more HSI instruments in orbit than ever before.


