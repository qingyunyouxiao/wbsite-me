import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 状态管理：控制当前显示的页面（home/tasks）
  const [currentPage, setCurrentPage] = useState('home');
  // 状态管理：10个任务的完成度
  const [tasks, setTasks] = useState(
    Array.from({ length: 10 }, (_, index) => ({
      id: index + 1,
      name: `任务 ${index + 1}`,
      progress: 0, // 初始完成度
    }))
  );
  // 状态管理：实时时钟
  const [currentTime, setCurrentTime] = useState(new Date());

  // === 时钟逻辑 ===
  useEffect(() => {
    // 每秒更新时钟
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // 组件卸载时清除定时器
    return () => clearInterval(timer);
  }, []);

  // 格式化时间显示
  const formatTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`;
  };

  // === 任务逻辑 ===
  // 保存任务完成度
  const saveProgress = (taskId, inputValue) => {
    const progress = parseInt(inputValue) || 0;
    // 限制完成度在 0-100 之间
    const validProgress = Math.max(0, Math.min(100, progress));
    
    // 更新任务状态
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, progress: validProgress } : task
      )
    );
    
    // 提示保存成功
    alert(`任务 ${taskId} 完成度已更新为 ${validProgress}%`);
  };

  // === 页面切换逻辑 ===
  const goToTasks = () => setCurrentPage('tasks');
  const goToHome = () => setCurrentPage('home');

  return (
    <div className="container">
      {/* 首页 */}
      {currentPage === 'home' && (
        <div id="home-page">
          <h1>欢迎来到我的网页！</h1>
          {/* 时钟展示区域 */}
          <div id="clock" className="clock">{formatTime(currentTime)}</div>
          <p>
            这是一个带实时时钟的测试网页，部署到 GitHub Pages / Vercel 均可正常显示～
          </p>
          {/* 跳转到任务页面的按钮 */}
          <button onClick={goToTasks} className="btn">
            前往任务列表 (~/tasks)
          </button>
          <footer>
            <p>部署测试 | 2026</p>
          </footer>
        </div>
      )}

      {/* 任务页面 */}
      {currentPage === 'tasks' && (
        <div id="tasks-page">
          <h1 className="page-title">任务列表 (~/tasks)</h1>
          <div className="task-list">
            {tasks.map((task) => (
              <div key={task.id} className="task-item">
                <span className="task-name">{task.name}</span>
                <div className="progress-group">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={task.progress}
                    className="progress-input"
                    placeholder="完成度(%)"
                    onChange={(e) => {
                      // 实时同步输入值（可选，也可只在保存时处理）
                      setTasks(
                        tasks.map((t) =>
                          t.id === task.id
                            ? { ...t, progress: parseInt(e.target.value) || 0 }
                            : t
                        )
                      );
                    }}
                  />
                  <button
                    className="save-progress"
                    onClick={() => saveProgress(task.id, task.progress)}
                  >
                    保存
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* 返回首页按钮 */}
          <button onClick={goToHome} className="btn back-btn">
            返回首页
          </button>
        </div>
      )}
    </div>
  );
}

export default App;