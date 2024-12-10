export default function handler(req, res) {
    if (req.method === 'GET') {
      // Your GET logic here
      res.status(200).json({ message: 'Hello, worlds!', success: true });
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  }