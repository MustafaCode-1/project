import monngoose from 'mongoose'

export const connect = async () => {
try{
monngoose.connect(process.env.MONGO_URL);
const connection = monngoose.connection;
connection.on('connected', () => {
    console.log("server is conected")
})
connection.on('error', (err) => {
    console.log("server is not conected" + err)
    process.exit();
})
} catch(err){
console.log(err)
}
}