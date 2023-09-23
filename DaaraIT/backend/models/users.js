const userSchema = new Schema({
   firstName: String,
   lastName: String,
   email: String,
   password: String,
   permissionLevel: Number,
   dateOfbBirth: String
});

const userModel = mongoose.model('Users', userSchema);
