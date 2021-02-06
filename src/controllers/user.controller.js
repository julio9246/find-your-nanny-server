
const { User } = require('../models');
 
exports.listAll = async (req, res) => {
  const users = await User.findAll();
  return res.status(200).json(users)
}



// ==> Método responsável por criar um novo 'User':

// app.post('/register', async (req, res) => {
//   const user = await User.create(req.body);
//   res.json(user);
// });
 

// app.listen(3000 , (e)=>{
//     console.log(e)
// });