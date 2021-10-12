// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mailchimp, { Status } from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: 'cbdcfcb92fc46084d1b3b7949dffbec5-us5',
  server: 'us5',
});

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): void {
  const { email } = req.body;
  if (!email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }
  mailchimp.lists.addListMember('d1cca5a05d', {
    email_address: email,
    status: Status?.subscribed || 'subscribed'
  }).then(() => {
    res.status(201).json({ error: '' });
  }).catch((error) => {
    res.status(500).json({ error: error.message || error.toString() });
  });
}
