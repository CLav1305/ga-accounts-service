import express from "express";
import accountsController from "../controllers/accountsController.js";

const Router = express.Router();

Router.route("/accounts") // this create an endpoint for /accounts
    .get(accountsController.getAllAccounts) // if the user sends a GET rq to /accounts, use this function
    .post(accountsController.createAccount); // if the user sends a post rq to /accounts, ise this function

Router.route("/accounts/:id") // the id here represents a dynamic parameter, so the endpoint could be /accounts/1 etc
    .get(accountsController.getAccountById)  
    .put(accountsController.updateAccountById)
    .delete(accountsController.deleteAccountById);

export default Router;