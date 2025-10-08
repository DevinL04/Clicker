/**
 * Main entry point for the CMPM 121 Section Activity
 * Simple starter template - customize to your heart's content!
 */

console.log("🎮 CMPM 121 - Starting...");

// Simple counter for demonstration

let counter: number = 0;

window.addEventListener("DOMContentLoaded", () => {
  // Create basic HTML structure
  document.body.innerHTML = `
    <h1>CMPM 121 Project</h1>
    <p>Counter: <span id="counter">0</span></p>
    <button id="increment">Click Me!</button>
  `;

  const button = document.getElementById("increment")! as HTMLButtonElement;
  const counterElement = document.getElementById("counter")! as HTMLSpanElement;

  // Style the button
  button.style.backgroundColor = "lightblue";
  button.style.color = "white";
  button.style.padding = "10px 20px";
  button.style.borderRadius = "5px";
  button.style.border = "none";
  button.style.cursor = "pointer";

  // Click handler
  button.addEventListener("click", () => {
    counter += 67;
    counterElement.textContent = counter.toString();
    console.log("I have these thingies:", button, counterElement, counter);
  });
});
