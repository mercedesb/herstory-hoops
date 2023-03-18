---
pagination:
  data: hoops
  size: 1
  alias: hoop
permalink: "hoops/{{ hoop.name | slugify }}/"
layout: base_layout.html
eleventyComputed:
  title: "{{ hoop.name }}"
---

# {{ hoop.name }}

{{ hoop.bio }}

## "{{hoop.quote}}"

{{ hoop.quote_location }}

