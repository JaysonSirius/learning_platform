/**
 * @file sdk_protocol_do.h
 * @author 余王亮 (wotsen@outlook.com)
 * @brief 
 * @version 0.1
 * @date 2019-09-22
 * 
 * @copyright Copyright (c) 2019
 * 
 */
#pragma once

#include <inttypes.h>
#include "sdk_package_distribution.h"
#include <uv.h>

#define MAX_SDK_MSG_LEN (64 * 1024) // 最大一包数据64k

#define SDK_NET_PROTOCOL_MAGIC (0x123456789ABCDEF)

enum sdk_net_data_type
{
	SDK_TCP_DATA_TYPE,
	SDK_UDP_DATA_TYPE,
};

struct SdkResponsePack
{
	uint64_t alloc_size; // 总共分配的内存
	uv_buf_t res;		 // 包含的响应内存地址和响应长度
};

template <typename T>
bool sdk_protocol_do(const enum sdk_net_data_type type, sdk_package<T> *req, struct SdkResponsePack *res);