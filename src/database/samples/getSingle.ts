import { PutItemOutput } from "aws-sdk/clients/dynamodb";
import { DocumentClient } from "aws-sdk/lib/dynamodb/document_client";

const AWS = require("aws-sdk");
const client: DocumentClient = new AWS.DynamoDB.DocumentClient({
  endpoint: new AWS.Endpoint("http://localhost:8000"),
  region: "local",
});

// Make sure table is created
const TableName = "sample";

export default async function getSingle({
  pk,
  sk,
}: {
  pk: string;
  sk: string;
}): Promise<PutItemOutput> {
  return await client
    .get({
      TableName,
      Key: {
        pk,
        sk,
      },
    })
    .promise();
}
