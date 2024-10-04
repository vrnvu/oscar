package main

import (
	"fmt"
	"log/slog"
	"net/http"
)

func startServer() {
	router := http.NewServeMux()
	router.HandleFunc("POST /todos", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("create a todo")
	})
	router.HandleFunc("GET /todos", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println("get all todos")
	})

	slog.Info("Server is running on port 8080")
	http.ListenAndServe(":8080", router)
}
