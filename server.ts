import * as grpc from 'grpc'

import * as protoLoader from '@grpc/proto-loader'

import { ProtoGrpcType } from './protos/book'
import { BookServiceHandlers } from './protos/bookPackage/BookService'

class Server {
  private server: grpc.Server
  private hostPort: string
  private books: []

  constructor(host: string, port: number) {
    this.server = new grpc.Server()
    this.hostPort = `${host}:${port}`
    this.books = []
  }

  async boot(): Promise<void> {
    const packageDefinition = protoLoader.loadSync('./protos/book.proto', {})
    const bookProto = ((grpc.loadPackageDefinition(packageDefinition)) as unknown) as ProtoGrpcType

    const serverImpl: BookServiceHandlers = {
      CreateBook: this.createBook.bind(this),
      BookDetail: this.bookDetail.bind(this)
    }

    this.server.addService(bookProto.bookPackage.BookService.service, serverImpl)
    this.server.bindAsync(
      this.hostPort,
      grpc.ServerCredentials.createInsecure(),
      (err: Error | null) => {
        if (err) {
          console.log(`Server error: ${err.message}`)
        } else {
          console.log(`Server bound on port ${this.hostPort}`)
          this.server.start()
        }
      }
    )
  }

  createBook(call: any, callback: any) {
    console.log(call);
  }

  bookDetail() {}
}

;(() => {
  new Server("0.0.0.0", 40000).boot()
})()