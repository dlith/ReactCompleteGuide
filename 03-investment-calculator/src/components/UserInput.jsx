import {useState} from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 12000,
    annualInvestment: 1000,
    expectedReturn: 5.5,
    duration: 12,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => handleChange("initialInvestment", event.target.value)}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => handleChange("annualInvestment", event.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => handleChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
