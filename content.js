// content.js

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.action === "translate") {
//       // 여기에 번역 기능을 구현하면 됩니다.
//       // 예를 들어, 구글 번역 API를 사용하거나 다른 번역 서비스를 호출할 수 있습니다.
//       // 번역 결과를 sendResponse로 반환하거나 웹 페이지에 삽입하는 등의 작업을 수행합니다.
//       // 이 예시에서는 간단한 alert을 통해 번역 기능이 동작함을 보여줍니다.
//       alert("번역 기능이 동작합니다!");
//     }
//   });

// content.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "translate") {
    const textToTranslate = prompt("번역할 텍스트를 입력하세요:");
    const apiKey = "TzuVvZKecA";
    const apiUrl = "https://api.papago.com/v1/language/translate";
    
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: `source=ko&target=en&text=${encodeURIComponent(textToTranslate)}&apikey=${apiKey}`
    })
    .then(response => response.json())
    .then(data => {
      const translatedText = data.message.result.translatedText;
      alert(`번역 결과: ${translatedText}`);
    })
    .catch(error => {
      console.error("번역 오류:", error);
    });
  }
});
