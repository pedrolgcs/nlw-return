import { app } from './app';

const { PORT = 3333 } = process.env;

app.listen(PORT, () => console.log(`🔥 Server is running on port ${PORT}`));
