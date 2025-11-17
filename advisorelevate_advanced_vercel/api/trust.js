export default function handler(req, res) {
  const payload = {
    trustIndex: 0.932,
    ethicsLog: [
      { id: 1, ts: '2025-11-10T09:32:00Z', event: 'content_flagged', severity: 'low' },
      { id: 2, ts: '2025-11-10T09:45:00Z', event: 'bias_check_pass', severity: 'info' }
    ],
    modelReadiness: [
      { model: 'content-core-v1', status: 'production', drift: 'low' },
      { model: 'risk-scout-beta', status: 'beta', drift: 'medium' }
    ]
  };
  res.status(200).json(payload);
}
