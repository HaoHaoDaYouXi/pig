import request from '@/router/axios'
export function GetMenu() {
    return request({
        url: '/admin/menu/userTree',
        method: 'get'
    })
}