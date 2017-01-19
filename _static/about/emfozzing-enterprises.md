---
layout: page
title: Emfozzing Enterprises
order: 50
---

Emfozzing Enterprises, Inc. is the corporation that backs CrossingsCon. We are a 501(c)3 not-for-profit organization that promotes the works of speculative fiction authors and the speculative fiction genre by creating a space online and in person that facilitates discussion, analysis, recommendation, and distribution of these works.

The board for EE, Inc. is:

{% for board_member in site.data.board %}
- **{{ board_member.name }}**, {{ board_member.title }}{% endfor %}
