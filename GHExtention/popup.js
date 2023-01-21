//popup.html buttons click event listner
document.querySelector('.buttons').addEventListener('click', async (e) => {
  
  //text opening and splting
  const templates = await fetch('/templates.txt')
    .then(response => response.text())
    .then(text => text.split('\n'))
    .then(lines => lines.map(line =>line.replace(/\\n/g,'\n')))
  
  //copy text to clipboard
  let textToCopy = templates[e.target.value];
  navigator.clipboard.writeText(textToCopy);
});
