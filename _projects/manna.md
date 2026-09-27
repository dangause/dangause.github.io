---
layout: page
title: MANNA
description: Letting AI assistants search professional astronomy archives
img: assets/img/cosmicai_logo.jpg
importance: 1
category: NRAO
related_publications: false
---

Astronomy has decades of public data sitting in archives around the world, but finding what you need usually means learning each archive's web forms, table layouts, and query language. **MANNA** (MCP Architecture for NOIRLab, NRAO, and Additional Archives) lets an AI assistant do that legwork for you. You can ask a question in plain English, like "what ALMA observations exist for this protostar?", and the assistant looks up the object, picks the right archive, writes the query, and hands back the results.

It works because most major archives already speak a shared set of standards published by the International Virtual Observatory Alliance (IVOA). MANNA wraps those standards in the Model Context Protocol (MCP), the common way of connecting AI assistants to outside tools, so one server can reach many archives, including the NOIRLab Astro Data Lab, NRAO and ALMA, CADC, ESO, and Gaia. It also carries notes on each archive's quirks, so the assistant makes fewer mistakes when writing queries.

I built MANNA during the summer of 2026 as an intern with the NSF-Simons AI Institute for Cosmic Origins (CosmicAI) at NRAO, as part of the STABLE team (Summer Team for Astronomical Benchmarking and LLM Engineering), working with Zoie Telkamp, Adele Plunkett, Brian Mason, Robert Nikutta, Stephanie Juneau, Adam Zacharia Anil, Ryan Loomis, Stella Offner, Greg Durrett, Paul Torrey, and Eric Murphy. I presented it at the CosmicAI Cosmic Horizons conference in Charlottesville that July. A deployment on the Astro Data Lab is currently in internal testing.

- Code: [github.com/dangause/manna](https://github.com/dangause/manna)
- Documentation: [manna.readthedocs.io](https://manna.readthedocs.io/)
- Poster: [Cosmic Horizons poster (PDF)](/assets/pdf/gause_manna_poster_cosmic_horizons_2026.pdf)
- Talk: [Cosmic Horizons presentation](https://www.youtube.com/watch?v=qa7x-6zJRRw)
- Write-up: [CosmicAI STABLE highlights](https://cosmicai.org/news/stable)
