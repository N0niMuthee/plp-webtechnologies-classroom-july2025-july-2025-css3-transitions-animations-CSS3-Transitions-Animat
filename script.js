//  Part 2: Functions with parameters, return values, and scope

// Global variable for box element
const box = document.getElementById("box");

// Function to add a class and move the box
function moveBox(distance, angle) {
  // local scope variables
  box.style.transform = `translateX(${distance}px) rotate(${angle}deg)`;
  return `Box moved ${distance}px and rotated ${angle} degrees.`;
}

// Function to reset the box
function resetBox() {
  box.style.transform = "translateX(0) rotate(0)";
  return "Box reset to original position.";
}

//  Part 3: Event-driven animations
document.getElementById("moveBoxBtn").addEventListener("click", () => {
  let message = moveBox(200, 45);
  console.log(message); // shows use of return value
});

document.getElementById("resetBoxBtn").addEventListener("click", () => {
  let message = resetBox();
  console.log(message);
});

// 🎬 Modal Logic
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
