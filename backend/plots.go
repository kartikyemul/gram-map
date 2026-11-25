package main

import (
	"encoding/json"
	"net/http"
	"strconv"
	"strings"
	"sync"
)

var (
	plotsLock  sync.Mutex
	nextPlotID = 300
)

type NewPlot struct {
	Village string `json:"village"`
	Area    string `json:"area"`
	Owner   string `json:"owner"`
}

func villageExists(name string) bool {
	for _, village := range villages {
		if village.Name == name {
			return true
		}
	}
	return false
}

func plotsHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		plotsLock.Lock()
		defer plotsLock.Unlock()
		writeJSON(w, plots)
	case http.MethodPost:
		createPlot(w, r)
	default:
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
	}
}

func createPlot(w http.ResponseWriter, r *http.Request) {
	r.Body = http.MaxBytesReader(w, r.Body, 1<<20)

	var input NewPlot
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, "invalid JSON", http.StatusBadRequest)
		return
	}

	input.Area = strings.TrimSpace(input.Area)
	input.Owner = strings.TrimSpace(input.Owner)
	if input.Area == "" || input.Owner == "" || !villageExists(input.Village) {
		http.Error(w, "village, area and owner are required", http.StatusBadRequest)
		return
	}

	plotsLock.Lock()
	defer plotsLock.Unlock()

	plot := Plot{
		ID:      strconv.Itoa(nextPlotID),
		Village: input.Village,
		Area:    input.Area,
		Owner:   input.Owner,
		Status:  "Pending",
	}
	nextPlotID++
	plots = append([]Plot{plot}, plots...)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(plot)
}
