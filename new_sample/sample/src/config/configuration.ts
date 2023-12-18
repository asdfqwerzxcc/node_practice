import 'dotenv/config';

export default()=>({
    database:{
        password: process.env.password || ''
    }
})