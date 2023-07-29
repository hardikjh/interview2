```javascript
function saveToFile(transcriptData) {
    const blob = new Blob([JSON.stringify(transcriptData, null, 2)], {type: "text/plain;charset=utf-8"});
    const url = URL.createObjectURL(blob);

    chrome.downloads.download({
        url: url,
        filename: 'transcript.txt'
    });
}
```