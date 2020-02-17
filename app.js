const express = require("express");
const bodyPaerser = require("body-parser");
const morgan = require("morgan");
const app = express();

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: " Customer Api",
            description: "Customer API Information",
            contacts: {
                name: "Om Raman"
            },
            servers: ['http://localhost:1010']
        }
    },
    // ['.routes/*.js]
    apis: ["app.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Middleware
app.use(bodyPaerser.urlencoded({ extended: true }));
app.use(bodyPaerser.json());
app.use(morgan("tiny"));    // By default "tiny"

//  Routes
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to  request all the customers
 *    responses:
 *      '200':
 *      description: A successful response 
 */

app.get('/customers', (req, res) => {
    res.send("customer results");
})

/**
 * @swagger
 * /update:
 *    put:
 *      description: Use to update a customer
 *      responses:
 *          '200':
 *          description: Successfully updated 
 */

app.put('/update', (req, res) => {
    res.send("customer updated")
})

/**
 * @swagger
 * /delete:
 *   delete:
 *      description: Use to delete a customer
 *      responses:
 *          '200':
 *          description: Successfully Deleted
 */

 app.delete('/delete', (req, res) => {
     res.send("Customer is deleted successfully");
 })

const PORT = process.env.PORT || 1010;
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost://${PORT}`)
})
