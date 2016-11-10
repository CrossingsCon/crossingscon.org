---
layout: page
title: Guests of Honor
order: 30
---

CrossingsCon is proud to welcome our guests of honor!

{% for guest in site.data.guests %}
## {{ guest.name }}

![A picture of {{ guest.name }}]({{ site.baseurl }}/images/guests/{{ guest.image }})
{{ guest.bio | markdownify }}
{% endfor %}
