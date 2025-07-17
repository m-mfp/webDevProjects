const markdownInput = document.getElementById("markdown-input");
markdownInput.value = ""

const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
  htmlOutput.innerText = convertMarkdown();
  preview.innerHTML = convertMarkdown();
});

function convertMarkdown() {
    const input = markdownInput.value;

    //regex
    const headingRegex = /^(#{1,3})\s+(.*)/gm;
    const boldRegex1 = /\*\*(.+)\*\*/gm;
    const boldRegex2 = /__(.+)__/gm;
    const italicRegex1 = /\*(.+)\*/gm;
    const italicRegex2 = /_(.+)_/gm;
    const imgRegex = /\!\[(.+)\]\((.+)\)/gm;
    const linkRegex = /\[(.+)\]\((.+)\)/gm;
    const quoteRegex = /^\>\s(.+)/gm;

    let html = input.replace(headingRegex, (_, level, content) => {
        level = level.length;
        return `<h${level}>${content}</h${level}>`;
    });

    html = html.replace(boldRegex1, (_, content) => {
        return `<strong>${content}</strong>`
    })

    html = html.replace(boldRegex2, (_, content) => {
        return `<strong>${content}</strong>`
    })

    html = html.replace(italicRegex1, (_, content) => {
        return `<em>${content}</em>`
    })

    html = html.replace(italicRegex2, (_, content) => {
        return `<em>${content}</em>`
    })

    html = html.replace(imgRegex, (_, alt, source) => {
        return `<img alt="${alt}" src="${source}" />`
    })

    html = html.replace(linkRegex, (_, linkText, url) => {
        return `<a href="${url}">${linkText}</a>`
    })

    html = html.replace(quoteRegex, (_, content) => {
        return `<blockquote>${content}</blockquote>`
    })

    return html
}



