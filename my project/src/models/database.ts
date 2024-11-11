import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://israelcohen:spgqY3.RhWny7XF@cluster0.8dupj.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    password: String
});

const User = mongoose.model('User', userSchema);

