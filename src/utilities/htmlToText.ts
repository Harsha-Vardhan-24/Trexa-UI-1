export const htmlToPlainText=(html: string)=> {
    const div = document.createElement('div');
    div.innerHTML = html.replace(/\+/g, ' ');
    return div.textContent || div.innerText || '';
  }