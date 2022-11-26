import express, { Request, Response } from "express";

const app = express()

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Order service')
})

app.listen(PORT, () => console.log(`Product service is up and running in port ${PORT}`))