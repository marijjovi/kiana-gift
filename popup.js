
document.addEventListener('DOMContentLoaded', () => {
  
    fetch(chrome.runtime.getURL('greysanatomy.txt'))
      .then(response => response.text())
      .then(data => {
 
        const content = data.split('\n');
  
       
        const filteredContent = content.filter(line => line.split(/\s+/).length >= 10);
  
        chrome.storage.local.set({ quotes: filteredContent });
  
       
        document.getElementById("generate").addEventListener("click", () => {
          const randomQuote = filteredContent[Math.floor(Math.random() * filteredContent.length)];
        document.getElementById("quote").textContent = randomQuote;
        });
      })
      .catch(err => console.error("Error loading quotes:", err));
  });
  