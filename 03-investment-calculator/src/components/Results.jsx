import * as utils from "../util/investment.js";

export default function Results({input}) {
  console.log(input);
  const computedValues = utils.calculateInvestmentResults(input);
  console.log(computedValues);
  return <p>Results...</p>;
}
