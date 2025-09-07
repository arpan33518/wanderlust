const mongoose = require("mongoose");
const{Schema} = mongoose;

main()
    .then(() => console.log("connection successful"))
    .catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
}

const orderSchema = new Schema({
    item:String,
    price:Number,
});

const addOrders = async () =>{
    let res = await Order
}

const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order",
        },
    ],
});

// customerSchema.pre("findOneAndDelete",async() =>{
//     console.log("PRE MIDDLEWARE");
// })

customerSchema.post("findOneAndDelete",async(customer) =>{
    if(customer.orders.length){
        Order.deleteMany({ _id :customer.orders })
    }
    console.log(data);
})

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

// Functions
const findCustomer = async() =>{
    let result = await Customer.find({}).populate("orders");
    console.log(result[0]);
};

const addCust = async () =>{
    let newCust = new Customer({
        name:"Arpan Purkait"
    }); 

    let newOrder = new Order({
        item:"Burger",
        price:250,
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("add new customer");
};

const delCust = async () => {
    let data = await Customer.findByIdAndDelete('68bc01ac2fa58d71c427e032');
    console.log(data);
};

delCust();