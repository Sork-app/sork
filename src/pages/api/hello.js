// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from 'mongoose';

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
  // test db connection
  console.log(mongoose.connection.readyState);
}
