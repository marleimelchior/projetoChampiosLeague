import doteenv from 'dotenv';
import createApp from './app';
doteenv.config();

const app = createApp();
const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Server rodando na porta http://localhost:${port}`);
})
