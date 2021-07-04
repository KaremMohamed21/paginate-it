# Paginate-it

This is utility package for handling backend pagination with expressJs and Mongoose

## installation

using npm:

    $ npm install paginate-it

## usage

in your file:

    // import the main package
    const { paginate } = require('paginate-it');
    const City = require('cityModel')



    // use the function inside your route handling function
    app.get('/api/city', (req, res) => {

        // You have to provide your mongoose model and the req object
        const { pagesNum, docs } = async paginate({ model: City, req });
        
        res.json({ pagesNum, docs });

    })

## Properties

- **model** | MongooseModel: Mongoose model that you want to paginate a query from. (required)
- **req** | Express req: Express req object (required)
- **query** | Object: object with the query params like in the Model.find({})
- **population** | String: the property that you want to paginate

## Request Query Params

- **limit**: Number of the item in single page (Default: 9)
- **page**: The number of the page you want (Default: 1)

  `BaseURL/city?page=2&limit=10`
