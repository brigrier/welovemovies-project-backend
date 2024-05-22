const service = require("./movies.service")

//GET MOVIES
async function list(req, res){
    const data = await service.list();
    res.json({data})
}


module.exports = {
    list,
}