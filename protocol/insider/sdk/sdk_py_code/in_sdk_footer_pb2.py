# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: in_sdk_footer.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='in_sdk_footer.proto',
  package='insider.sdk',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x13in_sdk_footer.proto\x12\x0binsider.sdk\"\x15\n\x06\x46ooter\x12\x0b\n\x03res\x18\x01 \x01(\x05\x62\x06proto3')
)




_FOOTER = _descriptor.Descriptor(
  name='Footer',
  full_name='insider.sdk.Footer',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='res', full_name='insider.sdk.Footer.res', index=0,
      number=1, type=5, cpp_type=1, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=36,
  serialized_end=57,
)

DESCRIPTOR.message_types_by_name['Footer'] = _FOOTER
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Footer = _reflection.GeneratedProtocolMessageType('Footer', (_message.Message,), {
  'DESCRIPTOR' : _FOOTER,
  '__module__' : 'in_sdk_footer_pb2'
  # @@protoc_insertion_point(class_scope:insider.sdk.Footer)
  })
_sym_db.RegisterMessage(Footer)


# @@protoc_insertion_point(module_scope)