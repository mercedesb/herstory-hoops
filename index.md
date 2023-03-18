---
title: Through Hoops
layout: base_layout.html
---

# Through Hoops

{%- for hoop in hoops %}
  - [{{ hoop.name }}](hoops/{{ hoop.name | slugify }}/)
{% endfor -%}