const User = require('../Models/User');

module.exports = {
    
        store:async(req, res)=>{
          const { name, email, password } = req.body;
          
          const user = await User.create(name, email, password);

          return res.status(200).json(user);
        },

        index:async(req, res)=>{
          const users = await User.find();

          return res.json(users)
        },

        show:async(req, res)=>{
          const { id } = req.params;

          const user = await User.findById(id);

          return res.json(user);
        },

        update:async(req, res)=>{
          const { id } = req.params;

          const { name, email, password } = req.body;

          await User.findByIdAndUpdate(id);
        },

        destroy:async(req, res)=>{
          const { id } = req.params;

          await User.findByIdAndDelete(id);
        }

}

