---
layout: page
permalink: /repositories/
title: repositories
description: The code behind my projects.
nav: true
nav_order: 4
---

<div class="repositories row row-cols-1 row-cols-md-2">
  {% for repo in site.data.repositories.github_repos %}
    <div class="col mb-4">
      <a href="https://github.com/{{ repo.name }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
        <div class="card h-100 hoverable">
          <div class="card-body">
            <h5 class="card-title"><i class="fa-brands fa-github"></i> {{ repo.name | split: '/' | last }}</h5>
            <p class="card-text">{{ repo.description }}</p>
            <p class="card-text"><small class="text-muted">{{ repo.language }}</small></p>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>
