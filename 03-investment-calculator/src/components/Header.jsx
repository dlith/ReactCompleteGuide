import logoImage from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logoImage} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
