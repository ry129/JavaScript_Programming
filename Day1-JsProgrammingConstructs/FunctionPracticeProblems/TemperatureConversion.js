function temperatureConversion() {
  let choice = parseInt(
    prompt(
      "Choose conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius"
    )
  );

  switch (choice) {
    case 1:
      let celsius = parseFloat(
        prompt("Enter temperature in Celsius (0°C - 100°C):")
      );
      if (celsius < 0 || celsius > 100) {
        alert("Invalid input! Temperature must be between 0°C and 100°C.");
      } else {
        let fahrenheit = (celsius * 9) / 5 + 32;
        alert(`${celsius}°C = ${fahrenheit}°F`);
      }
      break;

    case 2:
      let fahrenheit = parseFloat(
        prompt("Enter temperature in Fahrenheit (32°F - 212°F):")
      );
      if (fahrenheit < 32 || fahrenheit > 212) {
        alert("Invalid input! Temperature must be between 32°F and 212°F.");
      } else {
        let celsius = ((fahrenheit - 32) * 5) / 9;
        alert(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
      }
      break;

    default:
      alert("Invalid choice! Please select 1 or 2.");
  }
}

temperatureConversion();
