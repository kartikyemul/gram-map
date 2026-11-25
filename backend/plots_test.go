package main

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func postPlot(body string) *httptest.ResponseRecorder {
	request := httptest.NewRequest(http.MethodPost, "/api/plots", strings.NewReader(body))
	recorder := httptest.NewRecorder()
	plotsHandler(recorder, request)
	return recorder
}

func TestCreatePlotRejectsUnknownVillage(t *testing.T) {
	recorder := postPlot(`{"village":"Nowhere","area":"1 acres","owner":"Test"}`)
	if recorder.Code != http.StatusBadRequest {
		t.Errorf("expected 400, got %d", recorder.Code)
	}
}

func TestCreatePlotAddsPendingPlotFirst(t *testing.T) {
	recorder := postPlot(`{"village":"Wadgaon","area":"1.5 acres","owner":"Test Owner"}`)
	if recorder.Code != http.StatusCreated {
		t.Fatalf("expected 201, got %d", recorder.Code)
	}
	if plots[0].Owner != "Test Owner" || plots[0].Status != "Pending" {
		t.Errorf("new plot not stored correctly: %+v", plots[0])
	}
}
