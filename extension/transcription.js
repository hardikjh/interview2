```javascript
let transcriptData = [];
let speakerNames = [];

function transcribeConversation() {
    let conversation = document.querySelectorAll('[data-message-text]');
    conversation.forEach(message => {
        let speaker = message.previousElementSibling.querySelector('[data-self-name]').innerText;
        let text = message.innerText;
        transcriptData.push({speaker, text});
    });
}

function getSpeakerNames() {
    let participants = document.querySelectorAll('[data-self-name]');
    participants.forEach(participant => {
        let name = participant.innerText;
        if (!speakerNames.includes(name)) {
            speakerNames.push(name);
        }
    });
}

function tagUserText() {
    transcriptData.forEach(data => {
        data.speaker = speakerNames.indexOf(data.speaker);
    });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'startTranscription') {
        transcribeConversation();
        getSpeakerNames();
        tagUserText();
        sendResponse({message: 'Transcription started'});
    }
    if (request.message === 'stopTranscription') {
        sendResponse({message: 'Transcription stopped', data: transcriptData});
    }
});
```