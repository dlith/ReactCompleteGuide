import * as utils from "../util/investment.js";

export default function Results({input}) {
  const computedValues = utils.calculateInvestmentResults(input);
  const initialInvestment =
    computedValues[0].valueEndOfYear - computedValues[0].interest - computedValues[0].annualInvestment;
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment value</th>
            <th>Interest (year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {computedValues.map((yearData) => {
            const totalInterest =
              yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
            const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{utils.formatter.format(yearData.valueEndOfYear)}</td>
                <td>{utils.formatter.format(yearData.interest)}</td>
                <td>{utils.formatter.format(totalInterest)}</td>
                <td>{utils.formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
