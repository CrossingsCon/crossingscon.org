---
layout: page
title: Register
nav_title: Badge Prices
order: 10
---

In order to attend CrossingsCon, you'll need to [register for a badge]({{ site.data.badges.url }}) in advance. While registering, you can also snag a ticket for our Sunday tour, pre-order merchandise, and donate a [badge scholarship]({{ site.baseurl }}/badges/scholarships) for a cousin who needs help coming to con.

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
  <a class="btn btn-lg btn-success" href="{{ site.data.badges.url }}" target="_blank">Register now!</a>
</p>
