const mongodb=require('mongodb');
mongoclient=mongodb.MongoClient;
const url="mongodb://localhost:27017/";
const client=new mongoclient(url);

async function run(){
    try{
        const database=client.db('Student');
        const record=database.collection('Records');
        const data=await record.updateOne(
           {name:"Aditya"},
           {$set:{name:"Adi"}} 
        );


        console.log("Successfully updated");
        const dlt=await record.deleteOne({name:"Aditya"});
        console.log("Successfully deleted");


        const find=await record.findOne(
            {name:"Aditya"},
            {projection:{name:1,marks:1,_id:0}}
        );
        console.log("Successfully found "+JSON.stringify(result));


        const finds=await record.find(
            {name:"Adi"},
            {projection:{name:1,marks:1,_id:0}}
        ).toArray();
        console.log("Successfully found"+JSON.stringify(result));
          

        const sort=await record.find(
            {},
            {projection:{name:1,_id:0,marks:1}}
           ).sort({marks:-1}).toArray();

        const join=await record.aggregate([
            {
            $lookup:{
                from:"courses",
                localField:"name",
                foreignField:"name",
                as:"join"
            }
        }
        ]).toArray();
        console.log("Joined! "+JSON.stringify(join));


    }
    finally{
        await client.close();
    }

}
run().catch(err=>{console.log(err);});