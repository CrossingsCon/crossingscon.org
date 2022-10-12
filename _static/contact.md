---
layout: page
title: Contact Us
category_title: Contact
order: 60
---

If you need to ask us a question or get a hold of us for any reason, the best way to do so is through email at [info@crossingscon.org](mailto:info@crossingscon.org), or submit the form below.

<div id="contact-form" class="contact-form">
    <input id="name" type="text" name="name" placeholder="Name" >
    <input id="email" type="email" name="email" placeholder="Email" >
    <textarea id="message" placeholder="Message" ></textarea>
    <button type="button" class="btn btn-badge" id="send-message">Send</button>
</div>

You can also follow us on social media to keep up with all the latest updates:
{% for sm in site.data.social_media %}
- [{{sm.service | capitalize}}]({{sm.site}}){% endfor %}
