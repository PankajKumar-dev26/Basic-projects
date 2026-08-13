const test = document.querySelector('.test');

window.addEventListener('keydown', (e) => {
  test.classList.add('test-js');
  test.innerHTML = `<table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key=== " " ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>`
});