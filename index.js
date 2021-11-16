// 代理history事件
let old = window.history.pushState
window.history.pushState = function() {
    // 123
    return old;
}