import * as grpc from 'grpc'

import * as protoLoader from '@grpc/proto-loader'

import { ProtoGrpcType } from './protos/book'

const packageDefinition = protoLoader.loadSync('./protos/book.proto', {})
const bookProto = ((grpc.loadPackageDefinition(packageDefinition)) as unknown) as ProtoGrpcType
const bookPackage = bookProto.bookPackage

const client = new bookPackage.BookService("0.0.0.0:40000", grpc.credentials.createInsecure())

client.createBook({
  "id": -1,
  "title": "The Stronger",
  "page": 40,
}, (err: Error | null, response: any) => {
  if (err) {
    console.log(err);
    console.log(`Received error: ${err.message}`)
  } else {
    console.log(`Received from server: ${JSON.stringify(response)}`);
  }
})