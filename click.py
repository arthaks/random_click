import pyautogui
import time
import random

# 自动获取屏幕分辨率
screen_width, screen_height = pyautogui.size()

# 计算屏幕中心
center_x, center_y = screen_width // 2, screen_height // 2

# 定义点击的范围，以中心点为基准，每个方向偏移50像素
range_x = 50
range_y = 50

# 点击次数
clicks = 100000000000

try:
    for _ in range(clicks):
        # 生成在中心区域的随机坐标
        x = random.randint(center_x - range_x, center_x + range_x)
        y = random.randint(center_y - range_y, center_y + range_y)

        # 模拟鼠标移动到目标位置，增加一些随机性
        move_duration = random.uniform(0.1, 0.3)  # 随机移动时间
        pyautogui.moveTo(x, y, duration=move_duration)

        # 模拟鼠标悬停效果，增加一点随机延时
        hover_time = random.uniform(0.1, 0.3)
        time.sleep(hover_time)

        # 模拟鼠标按下和抬起
        pyautogui.mouseDown()
        time.sleep(random.uniform(0.05, 0.1))  # 短暂的按下状态
        pyautogui.mouseUp()

        # 模拟点击后的微小调整或抖动，增加真实感
        pyautogui.moveRel(random.randint(-3, 3), random.randint(-3, 3), duration=0.05)

        # 生成a到b随机浮点数作为间隔时间
        pause_between_clicks = random.uniform(0.01, 0.1)

        # 暂停
        time.sleep(pause_between_clicks)

except KeyboardInterrupt:
    print("\n脚本已被中断。")

print("随机点击完成！")