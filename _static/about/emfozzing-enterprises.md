---
layout: page
title: Emfozzing Enterprises
order: 60
---

Emfozzing Enterprises, Inc. is the corporation that backs CrossingsCon. We are a 501(c)(3) nonprofit organization that promotes the works of speculative fiction authors and the speculative fiction genre by creating a space online and in person that facilitates discussion, analysis, recommendation, and distribution of these works.

Our other projects include the [Linguistics After Dark podcast](https://linguisticsafterdark.com/) and [The Crossings Slack.](http://slackin.emfozzingenterprises.org/)

Learn more about Emfozzing Enterprises at [emfozzingenterprises.org](https://emfozzingenterprises.org), you can also support us on our [Patreon](https://patreon.com/emfozzing).

The board for EE, Inc. is:

{% for board_member in site.data.board %}
- **{{ board_member.name }}**, {{ board_member.title }}{% endfor %}
