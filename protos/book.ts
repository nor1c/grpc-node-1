import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { BookServiceClient as _bookPackage_BookServiceClient, BookServiceDefinition as _bookPackage_BookServiceDefinition } from './bookPackage/BookService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  bookPackage: {
    Book: MessageTypeDefinition
    BookService: SubtypeConstructor<typeof grpc.Client, _bookPackage_BookServiceClient> & { service: _bookPackage_BookServiceDefinition }
    Books: MessageTypeDefinition
    NoParam: MessageTypeDefinition
  }
}

