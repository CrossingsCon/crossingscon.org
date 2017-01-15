---
layout: page
title: Guests of Honor
order: 30
---

CrossingsCon is proud to welcome our guests of honor!

{% for guest in site.data.guests %}
<div class="guest {% cycle 'left', 'right' %}">
  <img class="guest-photo" src="{{ site.baseurl }}/images/guests/{{ guest.image }}" alt="A picture of {{ guest.name }}" />
  <div class="guest-bio" markdown="1">
## {{ guest.name }}
{{ guest.bio | markdownify }}
  </div>
</div>
{% endfor %}
