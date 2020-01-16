---
layout: page
title: Register
nav_title: Badge Prices
order: 10
published: true
---

In order to attend CrossingsCon, you'll need to [register for a badge]({{ site.data.badges.url }}) in advance. While registering, you can also donate to [Lifeboats]({{ site.baseurl }}/badges/lifeboats), our fund for cousins who need help coming to con.

If you're only able to make it to CrossingsCon for certain days you can purchase a badge for each day(s) individually in any combination, or else get a 3-day badge at a slight discount.

<table class="table">
  <caption class="sr-only">Badge prices for CrossingsCon</caption>
  <thead><tr>
    <th>Badge Type</th>
    <th>Age Range</th>
    <th>Badge Price</th>
  </tr></thead>
  <tbody>
    {% for badge in site.data.badges.types %}
    <tr>
      <td>{{ badge.type }}{% if badge.requires_adult %}*{% endif %}</td>
      <td>{{ badge.ages }}</td>
      <td>{{ badge.price }}</td>
    </tr>
    {% endfor %}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3"><small>* Requires accompanying purchase of an Adult Badge.</small></td>
    </tr>
    <tr>
      <td colspan="3"><small><sup>†</sup> Early-bird pricing available through the end of February 2020. The latter price will be used starting March 1st 2020.</small></td>
    </tr>
  </tfoot>
</table>

<p class="text-center">
  <a class="btn btn-lg btn-badge" href="{{ site.data.badges.url }}" target="_blank">Register now!</a>
</p>

<div class="row d-none d-lg-flex py-3">
  <div class="col"><img src="{{ site.baseurl }}/images/2019new/panel2-crop.jpg" class="img-fluid" alt="Sarah, Mark and Diane in conversation during a panel"></div>
  <div class="col"><img src="{{ site.baseurl }}/images/2019new/signings-crop.jpg" class="img-fluid" alt="Diane and Mark signing books for attendees"></div>
</div>
