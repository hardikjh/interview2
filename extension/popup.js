document.addEventListener('DOMContentLoaded', function () {
    let startButton = document.getElementById('startTranscriptionButton');
    let stopButton = document.getElementById('stopTranscriptionButton');
    let saveButton = document.getElementById('saveTranscriptButton');

    startButton.addEventListener('click', function () {
        chrome.runtime.sendMessage({ command: 'startTranscription' });
    });

    stopButton.addEventListener('click', function () {
        chrome.runtime.sendMessage({ command: 'stopTranscription' });
    });

    saveButton.addEventListener('click', function () {
        chrome.runtime.sendMessage({ command: 'saveTranscript' });
    });
});