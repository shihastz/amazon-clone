const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HzOrCDAemgo5Q1JJuE6wP9eWYFU56Kok2BHPboOOpQdGcmgG8zL1jQYHAbxdq2Sq3WkvGLMUCFPCIlR7t6tZkCY00ToSIWdRn"
);

//API

//App - config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//api - routes
app.get("/", (request, response) => response.status(200).send("helooooo"));
//app.get("/shihas", (request, response) => response.status(200).send("helooooo shihas"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment received", total);

  var customer = await stripe.customers.create({
    name: "shihass",
    address: {
      line1: "test line",
      postal_code: "5555",
      city: "San Francisco",
      state: "Kerala",
      country: "US",
    },
  });

  console.log("customer", customer);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    description: "payment",
    customer: customer.id,
  });

  //ok
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);

//default api endpoint(base url)
//http://localhost:5001/clone-42bff/us-central1/api
