export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { plan } = req.body || {};
  res.status(200).json({
    ok: true,
    plan: plan || 'unknown',
    message: 'Billing API stub – connect Stripe or LemonSqueezy in production.'
  });
}
