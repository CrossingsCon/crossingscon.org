---
layout: page
title: Guests of Honor
order: 30
published: true
---

CrossingsCon is proud to welcome our guests of honor for 2019!

{% for guest in site.data.guests %}
<div class="row py-3">
  <div class="col-12 col-md-3">
    <img src="{{ site.baseurl }}/images/guests/{{ guest.image }}" alt="A picture of {{ guest.name }}">
  </div>
  <div class="col-12 col-md-9">
    <h5 class="mt-3 mt-md-0">{{ guest.name }}</h5>
    {{ guest.bio | markdownify }}
  </div>
</div>
{% endfor %}
