---
layout: page
title: Volunteering
---

So you want to help a congoer? Great! We'll need a few hands to help plan and run the convention. Being a volunteer is
pretty great, actually. Volunteers don't have to pay for their badges and may qualify to stay in staff housing at
discounted rates. Plus, it's a lot of fun!

{% assign number_of_jobs = site.data.jobs | size %}
{% if number_of_jobs %}
Here are the positions that are currently open:

  {% for job in site.data.jobs %}
## {{ job.title }}

{{ job.description | markdownify }}

**To apply for this job:** {{ job.instructions | default: 'Email us at <thecrossingscon@gmail.com> with a cover letter and resume and the job title in the subject line.' }}
  {% endfor %}
{% else %}
Unfortunately, we don't have any positions open right now. Usually we look for planning staff about a month after the convention ends and onsite staff about three months before the convention. We hope to hear from you then!
{% endif %}
