package main

type Village struct {
	ID     int     `json:"id"`
	Name   string  `json:"name"`
	Taluka string  `json:"taluka"`
	Plots  int     `json:"plots"`
	Lat    float64 `json:"lat"`
	Lng    float64 `json:"lng"`
}

type Plot struct {
	ID      string `json:"id"`
	Village string `json:"village"`
	Area    string `json:"area"`
	Owner   string `json:"owner"`
	Status  string `json:"status"`
}

var villages = []Village{
	{ID: 1, Name: "Wadgaon", Taluka: "North Solapur", Plots: 312, Lat: 17.74, Lng: 75.88},
	{ID: 2, Name: "Kasegaon", Taluka: "Pandharpur", Plots: 245, Lat: 17.70, Lng: 75.40},
	{ID: 3, Name: "Nimgaon", Taluka: "Barshi", Plots: 198, Lat: 18.15, Lng: 75.65},
	{ID: 4, Name: "Pimpalgaon", Taluka: "Barshi", Plots: 276, Lat: 18.25, Lng: 75.75},
}

var plots = []Plot{
	{ID: "112/A", Village: "Wadgaon", Area: "2.4 acres", Owner: "Ramesh Jadhav", Status: "Pending"},
	{ID: "87", Village: "Kasegaon", Area: "1.8 acres", Owner: "Sunita Shinde", Status: "Verified"},
	{ID: "45/B", Village: "Wadgaon", Area: "3.1 acres", Owner: "Dattatray More", Status: "Verified"},
	{ID: "230", Village: "Nimgaon", Area: "0.9 acres", Owner: "Lata Pawar", Status: "Disputed"},
	{ID: "56/C", Village: "Pimpalgaon", Area: "4.2 acres", Owner: "Vijay Kale", Status: "Verified"},
}
