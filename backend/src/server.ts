import express from 'express';
import cors from 'cors';



const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.send('API is Running 🚀');
});


app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
