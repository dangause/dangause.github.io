---
layout: page
title: astro buddy
description: A quasar specific question answering tool
img: assets/img/astrobuddy.png
importance: 1
category: personal
related_publications: false
---

Astro Buddy is a web app I built to help answer open-ended questions about quasars using the latest scientific literature. It combines a FastAPI backend with a pgvector PostgreSQL database and a modern Next.js frontend, all tied together through a Retrieval-Augmented Generation (RAG) pipeline powered by the OpenAI API.

The backend regularly ingests the 100 most recent arXiv papers that mention “quasar,” extracts text from the PDFs, chunks and embeds the content, and stores those vectors in a database. When a user submits a query, the app retrieves the most relevant passages and returns a synthesized response based on those documents. The result is a lightweight, domain-specific assistant focused on quasars, running on infrastructure I control end-to-end.

The frontend is deployed on Vercel, while the backend and vector database are hosted separately on Render. The entire system is modular and extensible—I plan to expand it to support other astronomy topics and add dynamic visual components over time.

You can try it out live here: [https://astro-buddy.dangause.com/](https://astro-buddy.dangause.com/)
