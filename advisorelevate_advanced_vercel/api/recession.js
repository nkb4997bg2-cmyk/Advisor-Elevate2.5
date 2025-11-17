export default function handler(req, res) {
  const payload = {
    probability: 0.096,
    signals: {
      unemployment: 4.3,
      yieldSpread: 0.52,
      sahm: 0.13,
      gdpGrowth: 1.6
    },
    alert: false,
    forecast: {
      probability: [
        { month: '2025-04', value: 0.010 },
        { month: '2025-05', value: 0.011 },
        { month: '2025-06', value: 0.012 }
      ],
      gdp: [
        { quarter: '2024-Q4', value: 3.4 },
        { quarter: '2025-Q1', value: 1.4 },
        { quarter: '2025-Q2', value: 3.0 },
        { quarter: '2025-Q3', value: 1.6 }
      ]
    }
  };
  res.status(200).json(payload);
}
