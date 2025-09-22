const Enquiry = require('../../Models/enquery.model');

// Insert new enquiry
let enqueryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;
  let enquery = new Enquiry({ name, email, phone, message });

  enquery.save()
    .then(() => {
      res.send({ status: 1, message: "Enquiry saved successfully" });
      console.log("Data saved");
    })
    .catch((err) => {
      res.send({ status: 0, message: "Error occurred: " + err });
      console.log("Error occurred while saving: " + err);
    });
};

// Get all enquiries
let enqueryList = async (req, res) => {
  let enquiryList = await Enquiry.find();
  res.status(200).json({ status: 1, message: "Enquiry list", data: enquiryList });
  console.log("Fetched enquiry list");
};

// Delete enquiry
let deleteEnquiry = async (req, res) => {
  let enquiryId = req.params.id;
  let deleteRes = await Enquiry.deleteOne({ _id: enquiryId });
  res.send({
    status: 1,
    message: "Enquiry deleted successfully",
    id: enquiryId,
    delRes: deleteRes
  });
};

// Update enquiry
let updateEnquery = async (req, res) => {
  let enquiryId = req.params.id;
  let { name, email, phone, message } = req.body;

  let updateObj = { name, email, phone, message };

  let updateRes = await Enquiry.updateOne({ _id: enquiryId }, updateObj);
  res.send({
    status: 1,
    message: "Enquiry updated successfully",
   
    updateRes: updateRes
  });
  console.log(updateRes);
};

let enquerySingleRow = async (req,res)=>{
        let enId=req.params.id;
        let enquery=await Enquiry.findOne({_id:enId})
        res.send({status:1,enquery})
}

module.exports = { enquerySingleRow,enqueryInsert, enqueryList, deleteEnquiry, updateEnquery };
