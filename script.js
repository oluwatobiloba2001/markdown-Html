const markDown = document.getElementById("markdown-input");

function convertMarkdown() {
  let html = markDown.value;

  html = html.replace(/^(\#{1,6}) (.*)$/gm, (_, hashes, content) => {
    return `<h${hashes.length}>${content}</h${hashes.length}>`;
  });

  html = html.replace(/^\s*> (.*)$/gm, '<blockquote>$1</blockquote>');

  html = html.replace(/\*{2}(.*?)\*{2}/g, '<strong>$1</strong>');

  html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

  html = html.replace(/(?<!\*)\*(?!\*)(.*?)\*(?!\*)/g, '<em>$1</em>');
  html = html.replace(/(?<!_)_(?!_)(.*?)_(?!_)/g, '<em>$1</em>');

  html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  document.getElementById("html-output").textContent = html;
  document.getElementById("preview").innerHTML = html;

  return html;
};

markDown.addEventListener('input', convertMarkdown);
