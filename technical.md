---
layout: page
title: Technical Documentation
permalink: /technical/
---

# Technical Documentation

Welcome to the Technical Documentation section for the Godot MMORPG project. This section contains technical specifications, architecture decisions, and implementation details.

## Contents

This section will cover:

- **Architecture**: System architecture and design patterns
- **Code Standards**: Coding conventions and best practices
- **API Documentation**: Server and client API specifications
- **Database Schema**: Data models and database design
- **Network Protocol**: Communication protocols and data structures
- **Development Setup**: Environment setup and development workflow
- **Deployment**: Deployment procedures and infrastructure

## Technical Stack

- **Game Engine**: Godot 4.x
- **Programming Languages**: GDScript, C#
- **Backend**: (To be documented)
- **Database**: (To be documented)
- **Infrastructure**: (To be documented)

---

{% if site.technical.size > 0 %}
## Documentation Pages

<ul>
{% for doc in site.technical %}
  <li>
    <a href="{{ doc.url | relative_url }}">{{ doc.title }}</a>
    {% if doc.description %}
      <p>{{ doc.description }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>
{% else %}
<p><em>No technical documentation pages yet. Check back soon!</em></p>
{% endif %}
