const router = require('express').Router();
const Company = require('../../models/company')


//update company's profile 
router.put("/:id",async (req,res)=>{
    if ( req.body.userId === req.params.id || req.body.isAdmin ){
        if ( req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password , salt)
            }catch (err){
                return res.status(500).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set : req.body
            })
            res.status(200).json('account updated')
        }catch(err){
            return res.status(500).json(err)

            
        }
    }else {
        return res.status(403).json('you can update only your account')
    }

})
//delete company's profile
router.delete("/:id", async (req, res) => {
    if (req.body.companyId === req.params.id || req.body.isAdmin) {
      try {
        await Company.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    } else {
      return res.status(403).json("You can delete only your account!");
    }
  });

//admin
//get company
router.get("/admin:id", async (req, res) => {
    const companyId = req.query.companyId;
    const companyName = req.query.username;
    try {
      const company = companyId
        ? await Company.findById(companyId)
        : await Company.findOne({ username: companyName });
      const { password, updatedAt, ...other } = company._doc;
      res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//get all company
router.get('/admin/allcompany', async (req,res) => {
    try{
       await Company.find().then(company => {
            res.json(company);
            console.log(company);
        })
    }catch{
        res.status(500).json(err);
    }
})  
//delete company
router.delete("/admin:id", async (req, res) => {
    if (req.body.companyId === req.params.id) {
      try {
        await Company.findByIdAndDelete(req.params.id);
        res.status(200).json("company has been deleted");
      } catch (err) {
        return res.status(500).json(err);
      }
    }
    
  });

//update company 
router.put("/admin:id" , async(req,res)=>{
    if (req.body.companyId === req.params.id) {
    try{
    const user = await Company.findByIdAndUpdate(req.params.id,{
        $set : req.body
    })
    res.status(200).json('company updated')
}catch(err){
    return res.status(500).json(err)
}  
}
});

module.exports = router;
