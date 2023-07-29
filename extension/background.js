```javascript
import { transcribeConversation, getSpeakerNames, tagUserText } from './transcription.js';
import { saveToFile } from './saveToFile.js';

let transcriptData = [];
let speakerNames = [];

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'startTranscription') {
    startTranscription();
  } else if (request.message === 'stopTranscription') {
    stopTranscription();
  } else if (request.message === 'saveTranscript') {
    saveTranscript();
  }
});

function startTranscription() {
  speakerNames = getSpeakerNames();
  transcribeConversation(transcriptData, speakerNames);
}

function stopTranscription() {
  // Stop the transcription process
  // This functionality depends on the implementation of transcribeConversation
}

function saveTranscript() {
  saveToFile(transcriptData);
}
```