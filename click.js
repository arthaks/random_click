// 定义停止时间戳（例如设置为当前时间+30秒）
let stopTime = Date.now() + 86400 * 1000;

function randomCenterClick() {
    // 获取当前时间
    const currentTime = Date.now();

    // 检查是否到达停止时间
    if (currentTime >= stopTime) {
        console.log("到达设定时间，程序已停止运行。");
        return; // 停止执行
    }

    // 获取屏幕尺寸
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight;

    // 计算屏幕中心
    const center_x = screenWidth / 2;
    const center_y = screenHeight / 2;

    // 定义点击的半径
    const radius = 80;

    // 生成中心区域内的随机位置
    const x = Math.floor(center_x + (Math.random() * 2 - 1) * radius);
    const y = Math.floor(center_y + (Math.random() * 2 - 1) * radius);

    // 创建并触发鼠标按下事件
    const mouseDownEvent = new MouseEvent("mousedown", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y,
        buttons: 1 // 鼠标左键
    });
    const targetElement = document.elementFromPoint(x, y);
    if (targetElement) {
        targetElement.dispatchEvent(mouseDownEvent);
    }

    // 模拟鼠标按钮按住的时间（50到200毫秒之间）
    const pressDuration = Math.random() * 150 + 50;
    setTimeout(() => {
        // 创建并触发鼠标释放事件
        const mouseUpEvent = new MouseEvent("mouseup", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
            buttons: 0 // 鼠标左键释放
        });
        targetElement.dispatchEvent(mouseUpEvent);

        // 创建并触发点击事件
        const clickEvent = new MouseEvent("click", {
            view: window,
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y
        });
        targetElement.dispatchEvent(clickEvent);
    }, pressDuration);

    // 生成随机延迟（1000到2000毫秒之间）
    const delay = 800 + Math.random() * 1000;

    // 输出调试信息
    console.log(`点击位置: (${x}, ${y}), 按住时间: ${pressDuration}ms, 下次点击延迟: ${delay.toFixed(2)}ms`);

    // 安排下一次点击
    setTimeout(randomCenterClick, delay + pressDuration);
}

// 开始随机点击循环
randomCenterClick();