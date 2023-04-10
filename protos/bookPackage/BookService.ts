// Original file: protos/book.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Book as _bookPackage_Book, Book__Output as _bookPackage_Book__Output } from '../bookPackage/Book';
import type { Books as _bookPackage_Books, Books__Output as _bookPackage_Books__Output } from '../bookPackage/Books';
import type { NoParam as _bookPackage_NoParam, NoParam__Output as _bookPackage_NoParam__Output } from '../bookPackage/NoParam';

export interface BookServiceClient extends grpc.Client {
  BookDetail(argument: _bookPackage_Book, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  BookDetail(argument: _bookPackage_Book, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  BookDetail(argument: _bookPackage_Book, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  BookDetail(argument: _bookPackage_Book, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  bookDetail(argument: _bookPackage_Book, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  bookDetail(argument: _bookPackage_Book, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  bookDetail(argument: _bookPackage_Book, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  bookDetail(argument: _bookPackage_Book, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  
  CreateBook(argument: _bookPackage_Book, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  CreateBook(argument: _bookPackage_Book, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  CreateBook(argument: _bookPackage_Book, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  CreateBook(argument: _bookPackage_Book, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_Book, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_Book, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_Book, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  createBook(argument: _bookPackage_Book, callback: grpc.requestCallback<_bookPackage_Book__Output>): grpc.ClientUnaryCall;
  
  GetBooks(argument: _bookPackage_NoParam, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Books__Output>): grpc.ClientUnaryCall;
  GetBooks(argument: _bookPackage_NoParam, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_Books__Output>): grpc.ClientUnaryCall;
  GetBooks(argument: _bookPackage_NoParam, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Books__Output>): grpc.ClientUnaryCall;
  GetBooks(argument: _bookPackage_NoParam, callback: grpc.requestCallback<_bookPackage_Books__Output>): grpc.ClientUnaryCall;
  getBooks(argument: _bookPackage_NoParam, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Books__Output>): grpc.ClientUnaryCall;
  getBooks(argument: _bookPackage_NoParam, metadata: grpc.Metadata, callback: grpc.requestCallback<_bookPackage_Books__Output>): grpc.ClientUnaryCall;
  getBooks(argument: _bookPackage_NoParam, options: grpc.CallOptions, callback: grpc.requestCallback<_bookPackage_Books__Output>): grpc.ClientUnaryCall;
  getBooks(argument: _bookPackage_NoParam, callback: grpc.requestCallback<_bookPackage_Books__Output>): grpc.ClientUnaryCall;
  
}

export interface BookServiceHandlers extends grpc.UntypedServiceImplementation {
  BookDetail: grpc.handleUnaryCall<_bookPackage_Book__Output, _bookPackage_Book>;
  
  CreateBook: grpc.handleUnaryCall<_bookPackage_Book__Output, _bookPackage_Book>;
  
  GetBooks: grpc.handleUnaryCall<_bookPackage_NoParam__Output, _bookPackage_Books>;
  
}

export interface BookServiceDefinition extends grpc.ServiceDefinition {
  BookDetail: MethodDefinition<_bookPackage_Book, _bookPackage_Book, _bookPackage_Book__Output, _bookPackage_Book__Output>
  CreateBook: MethodDefinition<_bookPackage_Book, _bookPackage_Book, _bookPackage_Book__Output, _bookPackage_Book__Output>
  GetBooks: MethodDefinition<_bookPackage_NoParam, _bookPackage_Books, _bookPackage_NoParam__Output, _bookPackage_Books__Output>
}
