const outlets = [
  {
    name: "SuperPower Outlet",
    watts: 1800,
    price: 25.99,
    company: "PowerCo",
    image: "",
    alt: "SuperPower outlet with high wattage",
  },
  {
    name: "EnergySaver Outlet",
    watts: 1200,
    price: 19.99,
    company: "EcoTech",
    image: "",
    alt: "EnergySaver outlet designed for efficiency",
  },
  {
    name: "TurboCharge Outlet",
    watts: 2400,
    price: 29.99,
    company: "FastCharge Inc.",
    image: "",
    alt: "TurboCharge outlet for rapid charging",
  },
  {
    name: "MaxPower Outlet",
    watts: 1500,
    price: 22.5,
    company: "MaxElectronics",
    image: "",
    alt: "MaxPower outlet for versatile use",
  },
  {
    name: "UltraSafe Outlet",
    watts: 1800,
    price: 27.99,
    company: "SafePower",
    image: "",
    alt: "UltraSafe outlet with safety features",
  },
  {
    name: "QuickCharge Outlet",
    watts: 2000,
    price: 24.99,
    company: "ChargeTech",
    image: "",
    alt: "QuickCharge outlet for fast power delivery",
  },
  {
    name: "HomeGuard Outlet",
    watts: 1200,
    price: 17.99,
    company: "GuardPlus",
    image: "",
    alt: "HomeGuard outlet for home safety",
  },
  {
    name: "PowerFlex Outlet",
    watts: 1500,
    price: 21.99,
    company: "FlexiPower",
    image: "",
    alt: "PowerFlex outlet with flexible features",
  },
  {
    name: "EcoPower Outlet",
    watts: 1000,
    price: 15.99,
    company: "EcoHome",
    image: "",
    alt: "EcoPower outlet for eco-friendly charging",
  },
  {
    name: "HighPerformance Outlet",
    watts: 2000,
    price: 28.99,
    company: "PerformancePlus",
    image: "",
    alt: "HighPerformance outlet for demanding devices",
  },
  {
    name: "SmartPower Outlet",
    watts: 1200,
    price: 19.5,
    company: "SmartTech",
    image: "",
    alt: "SmartPower outlet with intelligent features",
  },
  {
    name: "RapidCharge Outlet",
    watts: 2200,
    price: 26.99,
    company: "RapidTech",
    image: "",
    alt: "RapidCharge outlet for quick power access",
  },
  {
    name: "TravelMate Outlet",
    watts: 1000,
    price: 14.99,
    company: "TravelSafe",
    image: "",
    alt: "TravelMate outlet designed for portability",
  },
  {
    name: "CompactPower Outlet",
    watts: 1500,
    price: 23.99,
    company: "CompactElectrics",
    image: "",
    alt: "CompactPower outlet for small spaces",
  },
  {
    name: "SmartSafe Outlet",
    watts: 1800,
    price: 29.5,
    company: "SmartSafety",
    image: "",
    alt: "SmartSafe outlet with advanced safety features",
  },
  {
    name: "AllWeather Outlet",
    watts: 2000,
    price: 30.99,
    company: "WeatherProof",
    image: "",
    alt: "AllWeather outlet suitable for outdoor use",
  },
  {
    name: "PowerGuard Outlet",
    watts: 1200,
    price: 20.5,
    company: "GuardTech",
    image: "",
    alt: "PowerGuard outlet with surge protection",
  },
  {
    name: "RapidPower Outlet",
    watts: 1800,
    price: 27.5,
    company: "RapidCharge Corp.",
    image: "",
    alt: "RapidPower outlet for high efficiency",
  },
  {
    name: "MultiPort Outlet",
    watts: 2000,
    price: 32.99,
    company: "MultiConnect",
    image: "",
    alt: "MultiPort outlet for multiple devices",
  },
  {
    name: "HomeEssentials Outlet",
    watts: 1500,
    price: 22.5,
    company: "Essentials Inc.",
    image: "",
    alt: "HomeEssentials outlet for everyday use",
  },
  {
    name: "SurgeGuard Outlet",
    watts: 1800,
    price: 25.99,
    company: "SurgeSafe",
    image: "",
    alt: "SurgeGuard outlet with protective features",
  },
];

const outletContainer = document.getElementById("outlet-container");

outlets.forEach((outlet) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
        <img src="${outlet.image || "placeholder.jpg"}" alt="${outlet.alt}">
        <h2>${outlet.name}</h2>
        <p>Watts: ${outlet.watts}</p>
        <p>Price: $${outlet.price.toFixed(2)}</p>
        <p>Company: ${outlet.company}</p>
    `;

  outletContainer.appendChild(card);
});
