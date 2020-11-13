import request from "../utils/request"

export function getCategory(data) {
    return request({
        url:'get_type',
        data
    })
}