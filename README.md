# Oscar

An assistant for processing and summarizing audio transcriptions.

<img width="759" alt="Screenshot 2024-10-04 at 16 22 57" src="https://github.com/user-attachments/assets/736b3d95-9f2e-4d81-9d27-04daf844b6d1">


## Components

1. **API Service (Go)**
   - Receives transcription files
   - Generates unique IDs
   - Distributes files to processing groups

2. **Summarizer Service (Python)**
   - Multiple instances, one per GPU, one per model
   - Processes files from assigned queue
   - Watcher monitors queue to prevent CPU blocking

## Workflow

1. File receives random ID and group assignment
2. API distributes files to specific queues
3. Summarizer processes files from its queue

## Future Improvements

- Accept video/audio files directly
- Add more ML models
- e2e video summarization, action recognition, etc
