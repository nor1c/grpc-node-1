### Generate types
- Based on https://github.com/grpc/grpc-node/tree/master/packages/proto-loader#example-usage:
```bash
./node_modules/.bin/proto-loader-gen-types --longs=String --enums=String --defaults --oneofs --grpcLib=@grpc/grpc-js --outDir=protos/ protos/*.proto
```

### Useful Links
- gRPC Crash Course by Hussein Nasser https://www.youtube.com/watch?v=Yw4rkaTc0f8
- https://github.com/hnasr/javascript_playground/tree/master/grpc-demo
- Proto Loader https://www.npmjs.com/package/@grpc/proto-loader
- https://stackoverflow.com/questions/64530776/how-do-you-generate-typings-for-protobuf-files-for-use-with-grpc
- https://gist.github.com/shankarshastri/c1b4d920188da78a0dbc9fc707e82996
- https://unpkg.com/browse/google-protobuf@3.17.3/README.md

### Test the code
- Run the gRPC server
```bash
yarn dev
```
- Create a new book via client
```bash
npx ts-node client.ts HarryPotter 999
```