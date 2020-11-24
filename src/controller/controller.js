const Test= require('@model/test');

const TestController = {
    helloWorld(req, res){
        res.send('hello Queorld');
    },

    createSomeone(req, res){
        const {name, age} = req.body;
        const erson = new Test({name, age});
        personalbar.save((err, person)=>{
            if (err){
                return res.status(500).send({message: 'erro'});
            }
            res.send(person);
        });
    }
};

module.exports = TestController;