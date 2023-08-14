const {CityService} = require('../services/index');

/**
 * 
 * POST
 * data -> req.body
 */
const cityService = new CityService();
const create = async (req,res) => {
    try {
        var myObject=req.body
        const valuesArray = [];
        for (const key in myObject) {
        if (myObject.hasOwnProperty(key)) {
        valuesArray.push(myObject[key]);
  }
}
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created a city",
            err:{}
        })
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a city",
            err:error
        })
    }
}
const createbulk = async (req,res) => {
    try {
        const city = await cityService.createCitybulk(req.body);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully created a city in bulk",
            err:{}
        })
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to create a city in bulk",
            err:error
        })
    }
}

const destroy = async (req,res) => {
    try {
        const city = await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data:city,
            success:true,
            message:"successfully deleted a city",
            err:{}
        })
        
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to delete a city",
            err:error
        })
    }
}

const get  = async (req,res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(500).json({
            data:city,
            success:true,
            message:"successfully fetched a city",
            err:{}
        })
        
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to a get city",
            err:error
        })
        
    }
}

const update = async (req,res) => {
    try {
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(500).json({
            data:city,
            success:true,
            message:"successfully updated a city",
            err:{}
        })
        
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to a update city",
            err:error
        })
    }

}

const getAll = async (req,res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data:cities,
            success:true,
            message:"successfully fetched all  cities",
            err:{}
        })
        
    } catch (error) {
        console.log("error at controller layer");
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"not able to a fetched all cities",
            err:error
        })

    }
}
module.exports = {
    create,destroy,get,update,getAll,createbulk
}


//the work of controller is-> the request is come on this controllers   and this controllers is 
//going to pass all the req to service and repository layer and they process the thing somehow and give back to controller 
//and controller will  form the response structure and sended back to user