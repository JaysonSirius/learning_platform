/*
 * @Date: 2019-08-11 21:42:59
 * @LastEditors: 余王亮
 * @LastEditTime: 2019-08-25 14:09:45
 */
/**
 * @file sys_parameter.h
 * @author 余王亮 (wotsen@outlook.com)
 * @brief 配置参数
 * @version 0.1
 * @date 2019-08-11
 * 
 * @copyright Copyright (c) 2019
 * 
 */
#pragma once

#include <stdio.h>
#include <pthread.h>
#include "inttypes.h"
#include <tfile/tfile.h>
#include "../../tools/com_def.h"

struct sys_parameter
{
#define SYS_PARAMETER_MAGIC 0x190ADB
    uint32_t para_magic;
    uint16_t para_crc;
} PACKED;

class SysParameter : tfile::ReaderWriter
{
public:
#define SYS_PARAMETER_FILENAME "../data/para.bin"

    ~SysParameter();

    struct sys_parameter *get_para_ptr(void)
    {
        return para;
    }

    static SysParameter *get_sys_para(void);

    bool reset_default_parameter(void);

    void cal_crc16(void);

    bool save_para(size_t start, size_t len);

    bool is_ok(void) const
    {
        return (NULL != para && NULL != fp);
    }

private:
    SysParameter() {}

    static SysParameter *instance;
    struct sys_parameter *para;
    pthread_mutex_t mutex;
    FILE *fp;
};

bool sys_para_init(void);
struct sys_parameter *get_para_ptr(void);