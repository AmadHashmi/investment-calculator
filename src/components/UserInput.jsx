export default function UserInput({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChange("initialInvestment", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChange("annualInvestment", Number(event.target.value))
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChange("expectedReturn", Number(event.target.value))
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) =>
              onChange("duration", Number(event.target.value))
            }
          />
        </p>
      </div>
    </section>
  );
}
