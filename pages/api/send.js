import Mailchimp from 'mailchimp-api-v3';
import dotEnv from 'dotenv';

dotEnv.config();

const { MAILCHIMP_API_KEY } = process.env;

const mailchimp = new Mailchimp(API_KEY);

export default async (req, res) => {
  const { name, email } = req.body;
  
  try {
    const response = await mailchimp.post('/lists/<your-api-key>/members', {
      email_address: email,
      FNAME: name,
      status: 'subscribed',
    });

    await res.json(response);
  } catch (err) {
    res.json(err);
  }
};
