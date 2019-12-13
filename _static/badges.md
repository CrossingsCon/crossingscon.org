---
layout: page
title: Register
nav_title: Badge Prices
order: 10
published: true
---

In order to attend CrossingsCon, you'll need to [register for a badge]({{ site.data.badges.url }}) in advance. While registering, you can also snag a ticket for our Sunday tour, and donate to [Lifeboats]({{ site.baseurl }}/badges/lifeboats), our fund for cousins who need help coming to con.

All convention badge types give you access to all the panels, activities, and games on Friday and Saturday. The only programming on Sunday is the optional Space for Life tour which requires an additional ticket &mdash; but trust us, it's worth it!

<table class="table">
  <caption class="sr-only">Badge prices for CrossingsCon</caption>
  <thead><tr>
    <th>Badge Type</th>
    <th>Age Range</th>
    <th>Badge Price</th>
    <th>Sunday Tour</th>
  </tr></thead>
  <tbody>
    {% for badge in site.data.badges.types %}
    <tr>
      <td>{{ badge.type }}{% if badge.requires_adult %}*{% endif %}</td>
      <td>{{ badge.ages }}</td>
      <td>{{ badge.badge_price }}</td>
      <td>{{ badge.tour_price }}</td>
    </tr>
    {% endfor %}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4"><small>* Requires accompanying purchase of an Adult Badge.</small></td>
    </tr>
  </tfoot>
</table>

<p class="text-center">
  <a class="btn btn-lg btn-badge" href="{{ site.data.badges.url }}" target="_blank">Register now!</a>
</p>

<div class="row d-none d-lg-flex py-3">
  <div class="col"><img src="{{ site.baseurl }}/images/2019new/panel2-crop2.jpg" class="img-fluid" alt="Attendees on their walk to the aquarium"></div>
  <div class="col"><img src="{{ site.baseurl }}/images/2019new/signings-crop.jpg" class="img-fluid" alt="Sonia takes a picture with a camera"></div>
</div>