import sys
import os
import random

from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler


def parse_args():
    if len(sys.argv) != 2:
        print("Usage: python main.py <group-id>")
        sys.exit(1)

    group_id = sys.argv[1]
    if not group_id.isdigit():
        print("Group ID must be number between: [0, 1]")
        sys.exit(1)

    if group_id != "0" and group_id != "1":
        print("Group ID must be 0 or 1")
        sys.exit(1)

    return group_id


def configure_queue(group_id: str):
    if group_id == "0":
        return "../queues/summarizer/0"
    elif group_id == "1":
        return "../queues/summarizer/1"
    else:
        print(f"Invalid group ID: {group_id}")
        sys.exit(1)

def process_file_from_queue(queue_path: str):
    files = os.listdir(queue_path)
    print(f"Files: {files}")
    random_file = random.choice(files)
    print(f"Random file: {random_file}")


class QueueHandler(FileSystemEventHandler):
    def __init__(self, queue_path):
        self.queue_path = queue_path

    def on_deleted(self, event):
        if not event.is_directory:
            process_file_from_queue(self.queue_path)

    def on_created(self, event):
        if not event.is_directory:
            process_file_from_queue(self.queue_path)


def main():
    group_id = parse_args()
    queue_path = configure_queue(group_id)

    print(f"Group ID: {group_id}")
    print(f"Queue path: {queue_path}")

    event_handler = QueueHandler(queue_path)
    observer = Observer()
    observer.schedule(event_handler, queue_path, recursive=False)
    observer.start()

    process_file_from_queue(queue_path)
    observer.join()


if __name__ == "__main__":
    main()

