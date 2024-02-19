chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "runContentScript") {
    const priceElements = document.querySelectorAll('p.css-1451qnd');

    const numericPriceElements = Array.from(priceElements).filter(element => {
      const numericContent = element.textContent.replace(/,/g, '').replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d) => d.charCodeAt(0) - '٠'.charCodeAt(0));
      return !isNaN(parseFloat(numericContent));
    });
    
    const total = numericPriceElements.reduce((sum, element) => {
      const price = parseFloat(element.textContent.replace(/,/g, '').replace(/[٠١٢٣٤٥٦٧٨٩]/g, (d) => d.charCodeAt(0) - '٠'.charCodeAt(0)));
      return sum + price;
    }, 0);
    
    alert('کل مبلغ: ' + total.toLocaleString('en-US') + ' تومان');
  }
});
