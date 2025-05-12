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

Here are some images of what the web app looks like, and the quality of answer it returns.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_posts/astro-buddy-05122025/astrobuddy-home.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Astro buddy home page
</div>

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog_posts/astro-buddy-05122025/astrobuddy-answer.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Astro buddy question-answer
</div>