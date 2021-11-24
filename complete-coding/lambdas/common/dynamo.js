const { DynamoDB } = require('aws-sdk');
const aws = require('aws-sdk');

const docClient = new DynamoDB.DocumentClient();

const Dynamo = {
    async get(id, table) {

        const params = {
            TableName: table,
        Key: {
            ID: id
        }
        }
        const dataRetrieved = await docClient.get(params).promise();
        
        if (!dataRetrieved || !dataRetrieved.Item) {
            throw Error(`There is an error in data ID = ${id} from ${table}`)
        } else {
            return dataRetrieved.Item;
        }
    }
}

module.exports = Dynamo;