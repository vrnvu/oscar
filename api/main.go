package main

import (
	"fmt"
	"io"
	"log/slog"
	"os"

	"github.com/jaevor/go-nanoid"
)

type GroupID = uint8

const (
	Group0 GroupID = 0
	Group1 GroupID = 1
)

const SUMMARIZE_FILE_PATH = "../queues/summarizer"

func main() {
	slog.Info("api")

	path_example := "../assets/transcription.txt"
	slog.Info(fmt.Sprintf("Path example: %s", path_example))

	gen, err := nanoid.Canonic()
	if err != nil {
		panic(err)
	}

	id1 := gen()
	slog.Info(fmt.Sprintf("ID 1: %s", id1))

	groupID := groupID(id1)
	slog.Info(fmt.Sprintf("Group ID: %d", groupID))

	file, err := os.Open(path_example)
	if err != nil {
		slog.Error(fmt.Sprintf("Error opening file: %v", err))
		panic(err)
	}
	defer file.Close()

	newFile, err := os.Create(fmt.Sprintf("%s/%d/%s", SUMMARIZE_FILE_PATH, groupID, id1))
	if err != nil {
		slog.Error(fmt.Sprintf("Error creating file: %v", err))
		panic(err)
	}
	defer newFile.Close()

	_, err = io.Copy(newFile, file)
	if err != nil {
		slog.Error(fmt.Sprintf("Error writing to file: %v", err))
		panic(err)
	}

	slog.Info(fmt.Sprintf("File %s created", id1))
}

// groupID returns the group ID of the given nanoid.
// Current implementation is based on the last character of the nanoid.
// Because we only support up to 2 groups, we can use the last bit to determine the group.
// 0 -> Group0, 1 -> Group1
func groupID(id string) GroupID {
	return GroupID(id[len(id)-1] & 1)
}
