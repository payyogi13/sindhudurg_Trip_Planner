
function generateItinerary() {
  document.getElementById("loader").style.display = "block";
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    const from = document.getElementById("fromCity").value;
    const to = document.getElementById("toCity").value;
    const days = document.getElementById("days").value;
    const people = document.getElementById("people").value;
    const budget = document.getElementById("budget").value;
    document.getElementById("output").textContent = `From: ${from}\nTo: ${to}\nDays: ${days}\nPeople: ${people}\nBudget: ₹${budget}\n\n⚙️ AI-generated itinerary coming soon...`;
  }, 5000);
}
function downloadPDF() {
  alert("PDF Download coming soon!");
}
