---
layout: page
title: MANNA
description: An MCP server that gives AI agents structured access to astronomical data archives
img: assets/img/cosmicai_logo.jpg
importance: 1
category: NRAO
related_publications: false
---

Astronomy has decades of public data sitting in archives around the world. Most of them implement the same standards from the International Virtual Observatory Alliance (IVOA), but each one differs in its tables, its services, and the query syntax it actually accepts, so using them still takes a lot of archive-specific knowledge. That slows research down, especially multiwavelength studies that draw on several archives at once.

AI agents could lower that barrier, but without structured access to archive services they have to fall back on general knowledge or web searches, which are often incomplete or out of date. An agent can usually find a target's coordinates or which archive holds its data, and then get stuck on the step that matters: actually retrieving the observations.

**MANNA** (MCP Architecture for NOIRLab, NRAO, and Additional Archives) is a Model Context Protocol (MCP) server that closes that gap. You can ask a question in plain English, like "what ALMA observations exist for this protostar?", and the agent resolves the target, finds the right archive and table, writes the query, and returns the results.

#### How it works

MANNA works with any MCP client, such as Claude Code, Claude Desktop, or Jupyter AI, and talks to archives through the standard IVOA interfaces: TAP/ADQL queries, image search (SIA), cone search, the IVOA registry, and Sesame name resolution. Its tools come in a few layers:

- **Core tools** each do one step through a standard interface: resolve a target, find archives and services, describe a table, run a query, or follow an asynchronous job.
- **Workflow tools** combine several core tools to finish a multi-step task in one call.
- **Result handling** returns small results directly. For large ones, the agent gets a recipe to fetch them straight from the archive, so the server never has to hold them.
- **Archive notes** record each archive's quirks, such as missing columns, fixed sets of values, and functions it doesn't support, so the agent sees them before writing a query. Every note comes with a check that re-verifies it against the live archive.

<div class="row justify-content-center mt-3">
  <div class="col-sm-8 col-md-6 text-center">
    {% include figure.liquid loading="eager" path="assets/img/projects/manna/manna_architecture.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Schematic of MANNA. An astronomer's request passes to an AI agent, which calls MANNA's tools over MCP. Archive notes supply archive-specific knowledge to the tools at run time and are re-checked against the archives.
</div>

MANNA has curated notes for the NOIRLab Astro Data Lab, the ALMA Science Archive, ESO, the Canadian Astronomy Data Centre, and Gaia, and it can reach any archive listed in the IVOA registry. Archives without notes still work; the agent just has to discover their quirks by trial and error.

#### Does it help?

To find out, we built an evaluation suite of archive tasks and ran each one with and without MANNA, using one open-weight model and three Anthropic Claude models. MANNA made every model more efficient, with fewer tool calls and less time per solved task, and it substantially improved accuracy for the smallest model: Claude Haiku passed 21.7 of 23 tasks on average with MANNA and 15.0 without. The gap grew larger when each task was given a limited budget of time and turns, which makes MANNA especially useful for groups working under budget constraints.

<div class="row mt-3">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/projects/manna/manna_evals_gain.png" class="img-fluid rounded z-depth-1" zoomable=true %}
  </div>
</div>
<div class="caption">
  Evaluation results for four models with (filled) and without (open) MANNA on 23 archive tasks: tasks passed, and tool calls, input tokens, cost, and time per task. Markers are the mean of three runs; whiskers span the range.
</div>

#### My role

I started MANNA in the summer of 2026 as an intern with the NSF-Simons AI Institute for Cosmic Origins (CosmicAI) at NRAO, on the STABLE team (Summer Team for Astronomical Benchmarking and LLM Engineering), and presented it at the CosmicAI Cosmic Horizons conference in Charlottesville that July. I have continued developing it as a post-baccalaureate researcher at NRAO. The code lives in the CosmicAI organization on GitHub, is distributed on PyPI as `manna-mcp`, and comes with documentation, tutorial notebooks, a test suite, and the evaluation framework. I am first author on a paper describing MANNA and its evaluation, in preparation for the _Astronomical Journal_, with Robert Nikutta, Brian Mason, Adele Plunkett, Ryan Loomis, Stephanie Juneau, Stella Offner, Zoie Telkamp, Adam Anil, and Eric Murphy.

- Code: [github.com/NSF-Simons-CosmicAI-Institute/manna](https://github.com/NSF-Simons-CosmicAI-Institute/manna)
- Package: [pypi.org/project/manna-mcp](https://pypi.org/project/manna-mcp/)
- Documentation: [manna.readthedocs.io](https://manna.readthedocs.io/)
- Paper: Gause, D., Nikutta, R., Mason, B., Plunkett, A., et al., _MANNA: An MCP Architecture for NOIRLab, NRAO, and Additional Archives_, in preparation for AJ
- Poster: [Cosmic Horizons poster (PDF)](/assets/pdf/gause_manna_poster_cosmic_horizons_2026.pdf)
- Talk: [Cosmic Horizons presentation](https://www.youtube.com/watch?v=qa7x-6zJRRw)
- Write-up: [CosmicAI STABLE highlights](https://cosmicai.org/news/stable)
