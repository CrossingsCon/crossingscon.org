---
layout: page
title: CrossingsCon Staff
order: 40
---

Who's minding these worldgates anyway? Here's who does what at CrossingsCon.

<div class="row mb-3">
    <div class="col"><img src="{{ site.baseurl }}/images/carousel/staff-at-closing.jpg" class="img-fluid" alt="The CrossingsCon 2017 staff at Closing Ceremonies"></div>
</div>

{% if site.data.jobs %}
Interested in joining us? [Click here to see our open positions.]({{site.baseurl}}/badges/volunteering)
{: .alert .alert-info}
{% endif %}

{% for section in site.data.staff %}
<div class="row mt-4">
  <h3 class="col-12">{{ section.section }}</h3>
</div>
<div class="row">
  {% for staffer in section.staff %}
  <div class="col-12 col-md-6 p-3">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ staffer.name }}</h4>
        <h5 class="card-title">{{ staffer.title }}</h5>
        <div class="card-text text-muted">Wizardly specialty:<br/>{{ staffer.specialty }}</div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% endfor %}
