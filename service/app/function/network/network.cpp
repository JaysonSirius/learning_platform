/**
 * @file network.cpp
 * @author 余王亮 (wotsen@outlook.com)
 * @brief 
 * @version 0.1
 * @date 2019-09-14
 * 
 * @copyright Copyright (c) 2019
 * 
 */
#define LOG_TAG "NETWORK"

#include <easylogger/easylogger_setup.h>
#include "../task_manage/task_manage.h"
#include "../../tools/timer/timer.h"
#include "../../common/sdk_protocol/in_sdk.pb.h"
#include "network.h"

using namespace insider::sdk;
using namespace wotsen;

static UvSdkNetServer *uv_sdk_net_server = nullptr;

bool UvSdkNetServer::create_tcp_server(const char *ipv4, const int &port)
{
	std::shared_ptr<UvSdkNetSrvType<uv_tcp_t>> server(new UvSdkNetSrvType<uv_tcp_t>);

	uv_tcp_init(loop, &server->handle);
	uv_ip4_addr(ipv4, port, &server->addr);

	uv_tcp_bind(&server->handle, (const struct sockaddr*)&server->addr, 0);

	int r = uv_listen((uv_stream_t*)&server->handle, DEFAULT_BACKLOG, on_new_connection);
	if (r)
	{
		log_e("Listen error %s\n", uv_strerror(r));
		return false;
	}

	tcp_servers.push_back(std::move(server));

	return true;
}
// 创建tcp服务器
bool UvSdkNetServer::create_tcp_server(const std::string &ipv4, const int &port) {
	return create_tcp_server(ipv4.c_str(), port);
}

void alloc_buffer(uv_handle_t *handle, size_t suggested_size, uv_buf_t *buf)
{
    buf->base = (char*) malloc(suggested_size);
    buf->len = suggested_size;
}

void echo_read(uv_stream_t *client, ssize_t nread, const uv_buf_t *buf)
{
    if (nread > 0) {
		// 放入数据处理链表
		// FIXME:应该发送完后进行释放
		log_d("read str = [%s]\n", buf->base);
    	free(buf->base);
        // write_req_t *req = (write_req_t*) malloc(sizeof(write_req_t));
        // req->buf = uv_buf_init(buf->base, nread);
        // uv_write((uv_write_t*) req, client, &req->buf, 1, echo_write);
        // return;
    }
    if (nread < 0) {
        if (nread != UV_EOF) {
            log_e("Read error %s\n", uv_err_name(nread));
		}
        uv_close((uv_handle_t*) client, NULL);
    }

    // free(buf->base);
}

void on_new_connection(uv_stream_t *server, int status) {
	if (status < 0)
	{
		log_e("New connection error %s\n", uv_strerror(status));
		return ;
	}

	uv_tcp_t *client = (uv_tcp_t *)malloc(sizeof(uv_tcp_t));
	uv_tcp_init(server->loop, client);
	if (0 == uv_accept(server, (uv_stream_t *)client))
	{
		uv_read_start((uv_stream_t *)client, alloc_buffer, echo_read);
	}
	else
	{
		uv_close((uv_handle_t *)client, NULL);
	}
}

UvSdkNetServer::~UvSdkNetServer() {
	for (auto &tcp_s : tcp_servers) {
		uv_close((uv_handle_t *)&tcp_s->handle, NULL);
	}
	tcp_servers.clear();
}

void sdk_uv_net_init(void) {
	uv_sdk_net_server = new UvSdkNetServer(UvEvent::get_uv_event()->get_uv_loop());

	uv_sdk_net_server->create_tcp_server("0.0.0.0", 8001);

    log_i("sdk-uv网络任务初始化完成...\n");

}

void task_network_init(void)
{
	sdk_uv_net_init();
}