const express = require('express');
const cors = require('cors');
const path=require('path');
const user = require('./models/user');
const post = require('./models/post');
const { default: mongoose } = require('mongoose');


const app = express();
app.use(express.json());
app.use(cors());

console.log("hello")

mongoose.connect('mongodb+srv://siddhesh11p:Sid2003@cluster0.h3kci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/blog')

app.post('/user/register', async(req,res)=>{
    const item = req.body;
    console.log(item);

    await user.create({
        'name':item.name,
    'password':item.password
    })
    
    res.send("create user")

})

app.post('/user/login', async(req,res)=>{

    const {name,password} = req.body;

    const data = await user.findOne({name:name,password:password})
    if(data)
    {
        console.log(data)
        console.log("user found");
        res.status(200).json({ status: 1 });
    }
    else{
        console.log("user not found");
        res.status(401).json({ status: 0 });
    }
})

app.post('/user/createpost', async (req,res)=>{

    const {title,summary,image,content,author} = req.body;

    await post.create({
        'title':title,
        'summary':summary,
        'image':image,
        'content':content,
        'author':author

    })
    console.log({title,summary,image,content,author})
    res.send("Created Post")
})

app.get('/user/getposts', async(req,res)=>{
    const data = await post.find();
    console.log(data)
    res.json(data);
})


app.use(express.static(path.join(__dirname,'../client/dist')))

app.get('*',(req,res)=>{
    
    res.sendFile(path.join(__dirname,'../client/dist','index.html'))
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

