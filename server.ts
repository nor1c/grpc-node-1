import * as grpc from 'grpc'

import * as protoLoader from '@grpc/proto-loader'

import { ProtoGrpcType } from './protos/book'
import { Book } from './protos/bookPackage/Book'
import { Books } from './protos/bookPackage/Books'
import { BookServiceHandlers } from './protos/bookPackage/BookService'

class Server {
  private server: grpc.Server
  private hostPort: string
  private books: any[] = []

  constructor(host: string, port: number) {
    this.server = new grpc.Server()
    this.hostPort = `${host}:${port}`
  }

  async boot(): Promise<void> {
    const packageDefinition = protoLoader.loadSync('./protos/book.proto', {})
    const bookProto = ((grpc.loadPackageDefinition(packageDefinition)) as unknown) as ProtoGrpcType

    const serverImpl: BookServiceHandlers = {
      GetBooks: this.getBooks.bind(this),
      CreateBook: this.createBook.bind(this),
      BookDetail: this.bookDetail.bind(this),
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

  getBooks(call: any, callback: any) {
    const rpcBooks: Books = {}

    rpcBooks.books = this.books

    callback(null, rpcBooks)
  }

  createBook(call: any, callback: any) {
    const newBook: Book = {
      id: this.books.length+1,
      title: call.request.title,
      page: call.request.page
    }

    this.books.push(newBook)

    callback(null, newBook)
  }

  bookDetail() {}
}

;(() => {
  new Server("0.0.0.0", 40000).boot()
})()