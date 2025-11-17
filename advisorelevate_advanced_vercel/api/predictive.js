export default function handler(req, res) {
  const payload = {
    currentMRR: 4800,
    next30DaysForecast: 7200,
    trajectory: 'upward',
    points: [
      { day: 0, mrr: 4800 },
      { day: 7, mrr: 5200 },
      { day: 14, mrr: 5800 },
      { day: 21, mrr: 6400 },
      { day: 30, mrr: 7200 }
    ]
  };
  res.status(200).json(payload);
}
