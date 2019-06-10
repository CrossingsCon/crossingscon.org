---
layout: page
title: Event Descriptions
order: 60
published: false
---

There will be a trove of events at CrossingsCon 2019, including panels, workshops, games, Q&As, and more. This page will be updated with long-form descriptions as we announce more events, so check back often so you don't miss hearing about something!

We're still ironing out the exact schedule of events at the con, so events are being announced and published to this page in no particular order. If you have any questions or comments about an event, please email <events@crossingscon.org>.

{% for event in site.data.events %}
{% if event.published %}
<div class="row py-3">
  <div class="col-12 col-md-3">
    {% if event.image %}
    <img src="{{ site.baseurl }}/images/events/{{ event.image }}" alt="{{ event.imageAlt }}">
    {% endif %}
  </div>
  <div class="col-12 col-md-9">
    <h5 class="mt-3 mt-md-0">{{ event.name }}</h5>
    {{ event.desc | markdownify }}
  </div>
</div>
{% endif %}
{% endfor %}
