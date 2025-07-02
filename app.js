document.getElementById("tripForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const destination = e.target.destination.value;
  const duration = e.target.duration.value;
  const people = e.target.people.value;
  const budget = e.target.budget.value;

  const prompt = `Plan a detailed travel itinerary to ${destination} in Sindhudurg, Maharashtra, India for ${people} people, lasting ${duration} days, with a budget of INR ${budget}. Include travel options (train, road, flight), places to visit, food, and stay.`;

  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=YOUR_API_KEY", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });

  const data = await response.json();
  const plan = data.candidates?.[0]?.content?.parts?.[0]?.text || "Unable to generate plan.";
  document.getElementById("output").textContent = plan;
  document.getElementById("downloadPdf").hidden = false;
});

// PDF Download
document.getElementById("downloadPdf").addEventListener("click", () => {
  const text = document.getElementById("output").textContent;
  const blob = new Blob([text], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "travel-plan.pdf";
  a.click();
});
