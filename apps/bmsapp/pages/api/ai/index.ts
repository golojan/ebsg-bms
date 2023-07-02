import { NextApiRequest, NextApiResponse } from 'next';
import { OpenAIStream, gpt } from 'utils/OpenAIStream';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing env var from OpenAI');
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // const { prompt } = req.query;
  const prompt = 'Kindly report on state of the budget for Agu Chux';
  if (!prompt) {
    return new Response('Missing prompt');
  }
  const payload = gpt(prompt as string);
  const stream = await OpenAIStream(payload);
  return new Response(stream);
};

export const config = {
  runtime: 'edge',
};

export default handler;
