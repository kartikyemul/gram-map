package main

import (
	"encoding/json"
	"log"
	"net/http"
	"time"
)

type HealthResponse struct {
	Status  string `json:"status"`
	Service string `json:"service"`
	Time    string `json:"time"`
}

// enableCORS lets the React app (port 5173) call this server (port 8080).
func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		if r.Method == http.MethodOptions {
			w.WriteHeader(http.StatusNoContent)
			return
		}

		next.ServeHTTP(w, r)
	})
}

// getOnly rejects any request that is not GET.
func getOnly(handler http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
			return
		}
		handler(w, r)
	}
}

func writeJSON(w http.ResponseWriter, data any) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(data)
}

func healthHandler(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, HealthResponse{
		Status:  "ok",
		Service: "grammap-backend",
		Time:    time.Now().Format(time.RFC3339),
	})
}

func villagesHandler(w http.ResponseWriter, r *http.Request) {
	writeJSON(w, villages)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/health", getOnly(healthHandler))
	mux.HandleFunc("/api/villages", getOnly(villagesHandler))
	mux.HandleFunc("/api/plots", plotsHandler)

	addr := ":8080"
	log.Println("GramMap backend running on http://localhost" + addr + "/api/health")
	log.Fatal(http.ListenAndServe(addr, enableCORS(mux)))
}
