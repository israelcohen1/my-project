import express from 'express';
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});


app.post('/api/users', (req, res) => {
    console.log('req.body');
    console.log(req.body);


    res.status(201).json({ message: 'pets saved successfully' });
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);

});