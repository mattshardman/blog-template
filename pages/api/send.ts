import Mailchimp from 'mailchimp-api-v3';
import { config } from 'dotenv';
import { NextApiRequest, NextApiResponse } from 'next'

export interface ProcessEnv {
  [key: string]: string | undefined
}

config();

const { MAILCHIMP_API_KEY } = process.env;

interface Body {
  name: string,
  email: string,
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email }: Body = req.body;
  
  if (!MAILCHIMP_API_KEY) {
    return res.status(200).send('true');
  }
  
  try {
    const mailchimp = new Mailchimp(MAILCHIMP_API_KEY as string);

    await mailchimp.post('/lists/<your-api-key>/members', {
      email_address: email,
      FNAME: name,
      status: 'subscribed',
    });

    res.status(200).send('true');
  } catch (err) {
    res.status(400).json(err);
  }
};
