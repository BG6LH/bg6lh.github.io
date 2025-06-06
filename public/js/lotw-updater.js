// 前端 LoTW 数据更新器
class LoTWUpdater {
  constructor() {
    this.updateButton = null;
    this.statusElement = null;
    this.init();
  }

  init() {
    // 创建更新按钮
    this.createUpdateButton();
  }

  createUpdateButton() {
    const button = document.createElement('button');
    button.className = 'lotw-update-btn';
    button.innerHTML = '🔄 更新 LoTW 数据';
    button.onclick = () => this.triggerUpdate();
    
    // 可以插入到指定位置
    const container = document.querySelector('.lotw-confirmed-dxcc-result');
    if (container) {
      container.appendChild(button);
    }
    
    this.updateButton = button;
  }

  async triggerUpdate() {
    if (this.updateButton) {
      this.updateButton.disabled = true;
      this.updateButton.innerHTML = '⏳ 更新中...';
    }

    try {
      // 这里可以调用 GitHub Actions API 或其他触发机制
      // 示例：触发 GitHub Actions workflow
      const response = await fetch('/api/trigger-lotw-update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        this.showStatus('✅ 更新请求已发送', 'success');
        // 可以设置定时器检查更新状态
        setTimeout(() => {
          window.location.reload();
        }, 30000); // 30秒后刷新页面
      } else {
        throw new Error('更新请求失败');
      }
    } catch (error) {
      this.showStatus('❌ 更新失败: ' + error.message, 'error');
    } finally {
      if (this.updateButton) {
        this.updateButton.disabled = false;
        this.updateButton.innerHTML = '🔄 更新 LoTW 数据';
      }
    }
  }

  showStatus(message, type) {
    // 显示状态消息
    console.log(message);
    // 可以添加 UI 提示
  }
}

// 页面加载完成后初始化
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    new LoTWUpdater();
  });
}