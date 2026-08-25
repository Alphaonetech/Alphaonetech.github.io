const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

if (nav && menu) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
  });

  document.querySelectorAll('.nav nav a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const form = document.getElementById('partnerForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(
      'Alpha One Technologies enquiry - ' + (data.get('interest') || 'General')
    );
    const body = encodeURIComponent(
      'Name: ' + data.get('name') + '\n' +
      'Company: ' + (data.get('company') || '') + '\n' +
      'Email: ' + data.get('email') + '\n' +
      'Phone: ' + data.get('phone') + '\n' +
      'Interest: ' + (data.get('interest') || '') + '\n\n' +
      'Message:\n' + (data.get('message') || '')
    );
    window.location.href =
      'mailto:alphaonetech00@proton.me?subject=' + subject + '&body=' + body;
    const note = document.getElementById('formNote');
    if (note) note.textContent = 'Opening your email app to send the enquiry.';
  });
}

const footer = document.querySelector('footer');
if (footer && !footer.querySelector('.legal-links')) {
  const legal = document.createElement('div');
  legal.className = 'legal-links';
  legal.innerHTML =
    '<a href="terms-and-conditions.html">Terms & Conditions</a> · ' +
    '<a href="privacy-policy.html">Privacy Policy</a> · ' +
    '<a href="refund-policy.html">Refund Policy</a> · ' +
    '<a href="contact-us.html">Contact Us</a>';
  footer.appendChild(legal);
}
