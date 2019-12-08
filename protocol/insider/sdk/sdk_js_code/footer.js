// source: in_sdk_footer.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.insider.sdk.Footer');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.insider.sdk.Result');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.insider.sdk.Footer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.insider.sdk.Footer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.insider.sdk.Footer.displayName = 'proto.insider.sdk.Footer';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.insider.sdk.Footer.prototype.toObject = function(opt_includeInstance) {
  return proto.insider.sdk.Footer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.insider.sdk.Footer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.insider.sdk.Footer.toObject = function(includeInstance, msg) {
  var f, obj = {
    res: jspb.Message.getFieldWithDefault(msg, 1, 0),
    result: (f = msg.getResult()) && proto.insider.sdk.Result.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.insider.sdk.Footer}
 */
proto.insider.sdk.Footer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.insider.sdk.Footer;
  return proto.insider.sdk.Footer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.insider.sdk.Footer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.insider.sdk.Footer}
 */
proto.insider.sdk.Footer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRes(value);
      break;
    case 2:
      var value = new proto.insider.sdk.Result;
      reader.readMessage(value,proto.insider.sdk.Result.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.insider.sdk.Footer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.insider.sdk.Footer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.insider.sdk.Footer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.insider.sdk.Footer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRes();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.insider.sdk.Result.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 res = 1;
 * @return {number}
 */
proto.insider.sdk.Footer.prototype.getRes = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.insider.sdk.Footer} returns this
 */
proto.insider.sdk.Footer.prototype.setRes = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Result result = 2;
 * @return {?proto.insider.sdk.Result}
 */
proto.insider.sdk.Footer.prototype.getResult = function() {
  return /** @type{?proto.insider.sdk.Result} */ (
    jspb.Message.getWrapperField(this, proto.insider.sdk.Result, 2));
};


/**
 * @param {?proto.insider.sdk.Result|undefined} value
 * @return {!proto.insider.sdk.Footer} returns this
*/
proto.insider.sdk.Footer.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.insider.sdk.Footer} returns this
 */
proto.insider.sdk.Footer.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.insider.sdk.Footer.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


