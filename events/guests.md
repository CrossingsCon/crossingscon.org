---
layout: page
title: Special Guests
---

CrossingsCon is proud to welcome our special guests!

{% for guest in site.data.guests %}
## {{ guest.name }}

![A picture of {{ guest.name }}]({{ site.baseurl }}/images/guests/{{ guest.image }})
{{ guest.bio | markdownify }}
{% endfor %}
