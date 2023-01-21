document.querySelector('.buttons').addEventListener('click', async (e) => {
  const templates = await fetch('/templates.txt')
    .then(response => response.text())
    .then(text => text.split('\n'))
    .then(lines => lines.map(line =>line.replace(/\\n/g,'\n')));
  let textToCopy = templates[e.target.value];
  navigator.clipboard.writeText(textToCopy);
  chrome.tabs.executeScript({
    code: `document.activeElement.value = "${textToCopy}";`});
});