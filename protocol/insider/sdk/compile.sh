#!/bin/bash

mkdir sdk_cpp_code -p
mkdir sdk_py_code -p
mkdir sdk_js_code -p

protos=""
for file_a in `ls *.proto`
do 
protos=$protos" "$file_a
done

echo "proto files : "
echo $protos

./protoc --proto_path=./ --cpp_out=sdk_cpp_code --python_out=sdk_py_code --js_out=sdk_js_code $protos

#cp sdk_cpp_code/* ../../../service/app/base_fun/sdk_net/sdk_protocol/
#cp sdk_cpp_code/* ../../../service/test/sdk_test/sdk_protocol/
