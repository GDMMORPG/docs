---
layout: page
title: Art Bible Documentation
permalink: /artbible/
---

# Art Bible Documentation

Welcome to the Art Bible Documentation section for the Godot MMORPG project. This section contains visual style guidelines, asset specifications, and artistic direction.

## Contents

This section will cover:

- **Visual Style Guide**: Overall aesthetic and artistic direction
- **Color Palette**: Primary and secondary color schemes
- **Character Design**: Character proportions, styles, and variations
- **Environment Art**: Landscape, architecture, and prop design
- **UI/UX Design**: Interface design guidelines and components
- **Animation Standards**: Animation principles and specifications
- **Asset Specifications**: Technical requirements for art assets
- **Lighting & VFX**: Lighting design and visual effects guidelines

## Art Direction

The visual style of the Godot MMORPG aims to (artistic vision to be documented).

---

{% if site.artbible.size > 0 %}
## Documentation Pages

<ul>
{% for doc in site.artbible %}
  <li>
    <a href="{{ doc.url | relative_url }}">{{ doc.title }}</a>
    {% if doc.description %}
      <p>{{ doc.description }}</p>
    {% endif %}
  </li>
{% endfor %}
</ul>
{% else %}
<p><em>No art bible documentation pages yet. Check back soon!</em></p>
{% endif %}
