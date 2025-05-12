---
layout: page
title: building astro buddy
description: How I turned past work into a live, full-stack web app
img: assets/img/astrobuddy.png
importance: 1
category: personal
related_publications: false
---

I originally started working on arXiv-based retrieval pipelines while experimenting with LangChain and vector databases to help with my own astronomy research. At the time, the goal was just to load and embed recent quasar-related PDFs, then run semantic queries over them to explore if RAG could surface relevant references. I had the ingestion code working locally, but nothing interactive or deployable.

Fast-forward to now: I’ve turned that offline tooling into a complete, publicly available web app called **Astro Buddy**, accessible at [https://astro-buddy.dangause.com/](https://astro-buddy.dangause.com/). It’s designed to answer open-ended questions about quasars using a custom document retrieval system I built from scratch.

The stack came together in layers:

1. **Backend**: I refactored my ingestion code into a FastAPI service. It fetches the 100 latest quasar papers from arXiv, downloads the PDFs, extracts text, embeds them using OpenAI’s API, and stores them in a pgvector database.

2. **Frontend**: I used a free Next.js template as the base UI, then customized it to include a simple form where users can enter a query and an OpenAI API key. The frontend sends the query to the backend, which performs the retrieval and returns a synthesized answer.

3. **Deployment**: I containerized everything with Docker Compose for local development. Then I deployed the frontend on Vercel and the backend on Render. PostgreSQL + pgvector is hosted on Render too. Getting all the services to talk to each other across platforms took some debugging—especially making sure the frontend could correctly route API requests to the Render backend.

4. **Integration**: I kept my ingestion pipeline separate from the chat API, which made things easier to test and reuse. The ingestion can run periodically or on-demand, while the chat endpoint just pulls from the existing vector store.

What makes this project meaningful for me is that it pulls together a bunch of things I’ve built or experimented with over the past year—PDF parsing, semantic search, API design, cloud deployment—and puts them into a single, user-facing tool. It's also the first time I’ve taken an astronomy-focused data science idea and wrapped it in a full-stack app designed for public use.

I'll keep iterating on this, and I have ideas for how to expand it beyond quasars and bring in multi-modal context and dynamic visualizations. For now, it's a solid proof of concept—and a fun way to bridge research tools and public outreach.
