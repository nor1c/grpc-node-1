import * as grpc from 'grpc'

import * as protoLoader from '@grpc/proto-loader'

import { ProtoGrpcType } from './protos/book'

const packageDefinition = protoLoader.loadSync('./protos/book.proto', {})
const bookProto = ((grpc.loadPackageDefinition(packageDefinition)) as unknown) as ProtoGrpcType
const bookPackage = bookProto.bookPackage

const client = new bookPackage.BookService("0.0.0.0:40000", grpc.credentials.createInsecure())

const bookTitle: string = process.argv[2]
const totalPage: number = process.argv[3] as unknown as number

if (bookTitle == null) {
  console.error(`Parameter title is required!`)
}
if (totalPage === undefined) {
  console.error(`Parameter total of page is required!`)
}

if (bookTitle && totalPage) {
  client.createBook({
    "id": -1,
    "title": bookTitle,
    "page": totalPage
  }, (err: Error | null, response: any) => {
    if (err) {
      console.log(`Received error: ${err.message}`)
    } else {
      // console.log(`Received from server: ${JSON.stringify(response)}`);
      console.log(response)
    }
  })
}

client.getBooks({}, (err: Error | null, response: any) => {
  if (err) {
    console.log(`Received error: ${err.message}`);
  } else {
    console.log(`Received from server: ${JSON.stringify(response)}`);
  }
})