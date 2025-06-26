const teamMembers = ['lavanya'];

const nav = document.getElementById('team-nav');
const content = document.getElementById('content');

teamMembers.forEach(member => {
  const li = document.createElement('li');
  li.textContent = member.charAt(0).toUpperCase() + member.slice(1);
  li.addEventListener('click', () => loadProfile(member));
  nav.appendChild(li);
});

function loadProfile(member) {
  fetch(`src/components/${member}.html`)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    });
}