
const mongoose = require('mongoose');
const Market = require('./models/Market');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const newMarket = new Market(req.body);
      await newMarket.save();
      res.status(201).json(newMarket);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'GET') {
    try {
      const markets = await Market.find();
      res.status(200).json(markets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === 'OPTIONS') {
    // CORS Preflight request
    res.setHeader('Allow', ['GET', 'POST', 'OPTIONS']);
    res.status(204).end();
  } else if (req.method === 'PATCH') {
    // Test endpoint for button click
    res.status(200).json({ message: 'Testing from backend' });
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'PATCH', 'OPTIONS']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
