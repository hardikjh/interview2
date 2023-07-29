// Importing dependencies
import { transcriptData, speakerNames } from './background.js';
import { TranscriptSchema } from './transcription.js';

// Function to send message to background script
function sendMessageToBackground(message) {
  chrome.runtime.sendMessage({ message: message });
}

// Listening for messages from the popup script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'startTranscription') {
    startTranscription();
  } else if (request.message === 'stopTranscription') {
    stopTranscription();
  } else if (request.message === 'saveTranscript') {
    saveTranscript();
  }
});

// Function to start transcription
function startTranscription() {
  // Get speaker names from Google Meet frontend
  speakerNames = getSpeakerNames();

  // Start transcribing the conversation
  transcriptData = transcribeConversation();
}

// Function to stop transcription
function stopTranscription() {
  // Stop transcribing the conversation
  transcriptData = null;
}

// Function to save transcript
function saveTranscript() {
  // Save the transcript data to a .txt file
  saveToFile(transcriptData);
}