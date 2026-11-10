---
layout: page
title: rock daisies
description: Cleaning, analyzing, and mapping occurrence records of the rock daisy tribe for California Academy of Sciences research
img: assets/img/rock_daisy.jpg
importance: 2
category: CAS
related_publications: false
---

Rock daisies (the tribe Perityleae) are small flowering plants that grow on cliffs and rocky outcrops across the deserts of North and South America, often confined to a single mountain range. As a volunteer with the Scientific Computing Department at the California Academy of Sciences, I worked with botanist Isaac Lichter-Marck on the data side of his research on the tribe: wrangling and cleaning its occurrence records, analyzing where each group grows, and turning the results into maps.

That work is part of [_Perityleae B.G.Baldwin (Asteroideae): A catalogue of natural history, taxonomy, and morphology of the rock daisy tribe_](https://doi.org/10.53875/capitulum.04.2.02) (Lichter-Marck et al. 2026, _Capitulum_ 4(2)), a catalogue of all 273 names published in the tribe, covering 8 genera and 90 taxa, on which I am a coauthor.

#### Data wrangling

The first problem is names. Rock daisy taxonomy has been revised many times, so the same plant can appear in the records under several different names. I wrote a parser for the project's nomenclator, a curated list that maps every published name and synonym to its currently accepted name, and used it to match each name against the GBIF backbone taxonomy and pull every matching occurrence record from GBIF, the global database of species sightings and museum specimens.

That gave roughly 8,700 raw records. Cleaning them meant mapping every synonym to its accepted name and finding records whose coordinates couldn't be right, such as specimens that were georeferenced to the wrong place or plotted in the middle of the ocean.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/rock_daisies/tribe_occurrences_outliers.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  GBIF occurrence records for the whole tribe, colored by genus. Circled points are coordinate outliers flagged and removed during cleaning.
</div>

#### Analysis and visualizations

With a clean dataset, I built a small Python package, [rock-daisy-viz](https://github.com/dangause/rock-daisy-viz), for looking at where each genus and species grows. It makes three kinds of figures, all on shaded-relief basemaps so the plants can be seen against the terrain they live on:

- **Scatter maps** of individual records, grouped by genus or species, for the full range or for regions such as the sky islands of Arizona and New Mexico, Big Bend, the Great Basin, and Baja California
- **Density heatmaps** with one overlaid layer per species, which show where species ranges overlap and where they are isolated
- **Interactive 3D relief plots** that drape records over digital elevation models, to show how these species follow cliffs and mountain ranges

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/rock_daisies/species_occurrences.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/rock_daisies/species_heatmaps.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Left: occurrence records across the southwestern US and northwestern Mexico, colored by species. Right: overlaid per-species density heatmaps of the same region.
</div>

The main notebook produces more than 20 maps, at the genus level and for regional views, from the same cleaned dataset.

- Paper: [Lichter-Marck et al. 2026, _Capitulum_ 4(2)](https://doi.org/10.53875/capitulum.04.2.02)
- Code: [github.com/dangause/rock-daisy-viz](https://github.com/dangause/rock-daisy-viz)
