const header = document.querySelector('header');
const output = document.querySelector('#output');
setDefaultTheme();

const themeBtns = document.querySelectorAll("input[name='theme']");
const styleSheet = document.getElementById('theme');

for (let btn of Array.from(themeBtns))
  btn.addEventListener('click', changeTheme)

function changeTheme(event) {
  toggleTheme(event.target);

  const themeNo = event.target.getAttribute('data-no');
  if (themeNo == '1') {
    setDefaultTheme();
  } else if (themeNo == '3') {
    document.querySelector('.calculate.btn')
      .style.color = "var(--text-color-3)";
  } else {
    header.style.color = "var(--text-color)"; 
    output.style.color = "var(--text-color)";
  }
}

function toggleTheme(btn) {
  for (let btn of Array.from(themeBtns))
    btn.removeAttribute('class');

  btn.className += 'active';
  styleSheet.href = `./css/themes/theme-${
    btn.getAttribute('data-no')}.css`;
}

function setDefaultTheme() {
  header.style.color = "var(--text-color-2)";
  output.style.color = "var(--text-color-2)";
}