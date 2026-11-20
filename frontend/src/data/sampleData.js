export const summaryCards = [
  { id: 1, label: "Villages", value: 42, note: "Across 3 talukas" },
  { id: 2, label: "Land Plots", value: 1286, note: "Registered in system" },
  { id: 3, label: "Pending Requests", value: 17, note: "Awaiting review" },
];

export const recentActivity = [
  { id: 1, text: "Plot 112/A ownership transfer submitted", village: "Wadgaon", time: "10 min ago" },
  { id: 2, text: "Boundary survey completed for Plot 87", village: "Kasegaon", time: "1 hour ago" },
  { id: 3, text: "New plot registered by Gram Sevak", village: "Nimgaon", time: "3 hours ago" },
  { id: 4, text: "Land use change request approved", village: "Pimpalgaon", time: "Yesterday" },
  { id: 5, text: "Mutation entry updated for Plot 45/B", village: "Wadgaon", time: "Yesterday" },
];

export const villages = [
  { id: 1, name: "Wadgaon", taluka: "North Solapur", plots: 312, lat: 17.74, lng: 75.88 },
  { id: 2, name: "Kasegaon", taluka: "Pandharpur", plots: 245, lat: 17.7, lng: 75.4 },
  { id: 3, name: "Nimgaon", taluka: "Barshi", plots: 198, lat: 18.15, lng: 75.65 },
  { id: 4, name: "Pimpalgaon", taluka: "Barshi", plots: 276, lat: 18.25, lng: 75.75 },
];

export const plots = [
  { id: "112/A", village: "Wadgaon", area: "2.4 acres", owner: "Ramesh Jadhav", status: "Pending" },
  { id: "87", village: "Kasegaon", area: "1.8 acres", owner: "Sunita Shinde", status: "Verified" },
  { id: "45/B", village: "Wadgaon", area: "3.1 acres", owner: "Dattatray More", status: "Verified" },
  { id: "230", village: "Nimgaon", area: "0.9 acres", owner: "Lata Pawar", status: "Disputed" },
  { id: "56/C", village: "Pimpalgaon", area: "4.2 acres", owner: "Vijay Kale", status: "Verified" },
];
