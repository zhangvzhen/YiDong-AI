// 页面内容定义
const pageContents = {
    // 首页内容 - 运动视频推荐
    home: `
        <div class="search-container">
            <i class="fas fa-search search-icon-input"></i>
            <input type="text" class="search-input" placeholder="搜索光波音色锻炼...">
            <button class="search-button">健康进步</button>
        </div>

        <div class="theme-card">
            <div class="theme-info">
                <div class="theme-title">社区功程<br>(太极运动家庭展)</div>
                <div class="theme-desc">适合初学者的太极</div>
                <button class="theme-button">创新场景</button>
            </div>
            <div class="secondary-button">查询心得</div>
            <img src="https://picsum.photos/100/100" alt="太极" class="theme-image">
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">个性化运动推荐</div>
                <div class="card-more">查看更多 ></div>
            </div>
            <div class="feature-grid">
                <div class="feature-item">
                    <div class="feature-icon feature-icon-1">
                        <i class="fas fa-running"></i>
                    </div>
                    <div class="feature-name">高强度</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon feature-icon-2">
                        <i class="fas fa-baby"></i>
                    </div>
                    <div class="feature-name">太极养生</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon feature-icon-3">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="feature-name">食为天</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon feature-icon-4">
                        <i class="fas fa-dumbbell"></i>
                    </div>
                    <div class="feature-name">指导教程</div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">推荐视频</div>
                <div class="card-more">更多 ></div>
            </div>
            <div class="video-list">
                <div class="video-item">
                    <div class="video-thumbnail">
                        <i class="fas fa-play-circle fa-2x"></i>
                    </div>
                    <div class="video-info">
                        <div class="video-title">太极拳入门教学 - 第一集</div>
                        <div class="video-meta">
                            <i class="fas fa-eye"></i> 1.2万次播放
                        </div>
                    </div>
                </div>
                <div class="video-item">
                    <div class="video-thumbnail">
                        <i class="fas fa-play-circle fa-2x"></i>
                    </div>
                    <div class="video-info">
                        <div class="video-title">适合中老年人的八段锦</div>
                        <div class="video-meta">
                            <i class="fas fa-eye"></i> 8.5千次播放
                        </div>
                    </div>
                </div>
                <div class="video-item">
                    <div class="video-thumbnail">
                        <i class="fas fa-play-circle fa-2x"></i>
                    </div>
                    <div class="video-info">
                        <div class="video-title">每日五分钟颈椎保健操</div>
                        <div class="video-meta">
                            <i class="fas fa-eye"></i> 5.3千次播放
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // 计划页面 - 日程和饮食安排
    plan: `
        <div class="card">
            <div class="card-header">
                <div class="card-title">智能选择适宜强度</div>
                <div class="card-more">左右滑动调整 ></div>
            </div>
            
            <div class="progress-container">
                <div class="progress-item">
                    <div class="progress-circle">
                        <div class="progress-value">80</div>
                    </div>
                    <div class="progress-text">中等强度</div>
                </div>
                <button class="theme-button" style="background: #3dc295; padding: 8px 15px;">活动指南</button>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">今日计划</div>
                <div class="card-more">查看全部 ></div>
            </div>
            <div class="schedule-list">
                <div class="schedule-item">
                    <div class="schedule-time">08:00</div>
                    <div class="schedule-content">
                        <div class="schedule-title">早间太极</div>
                        <div class="schedule-desc">20分钟，初级难度</div>
                    </div>
                    <div class="schedule-status">已完成</div>
                </div>
                <div class="schedule-item">
                    <div class="schedule-time">12:00</div>
                    <div class="schedule-content">
                        <div class="schedule-title">午餐推荐</div>
                        <div class="schedule-desc">清蒸鱼、时蔬、粗粮饭</div>
                    </div>
                    <div class="schedule-status">进行中</div>
                </div>
                <div class="schedule-item">
                    <div class="schedule-time">17:00</div>
                    <div class="schedule-content">
                        <div class="schedule-title">八段锦练习</div>
                        <div class="schedule-desc">15分钟，全身放松</div>
                    </div>
                    <div class="schedule-status">未开始</div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">推荐饮食</div>
                <div class="card-more">更多 ></div>
            </div>
            <div class="diet-list">
                <div class="diet-item">
                    <div class="diet-icon">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="diet-content">
                        <div class="diet-title">早餐</div>
                        <div class="diet-desc">全麦面包、鸡蛋、牛奶、水果</div>
                    </div>
                </div>
                <div class="diet-item">
                    <div class="diet-icon">
                        <i class="fas fa-drumstick-bite"></i>
                    </div>
                    <div class="diet-content">
                        <div class="diet-title">午餐</div>
                        <div class="diet-desc">糙米饭、清蒸鱼、凉拌蔬菜</div>
                    </div>
                </div>
                <div class="diet-item">
                    <div class="diet-icon">
                        <i class="fas fa-carrot"></i>
                    </div>
                    <div class="diet-content">
                        <div class="diet-title">晚餐</div>
                        <div class="diet-desc">蔬菜沙拉、鸡胸肉、小米粥</div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // 社区页面 - 交流模块
    community: `
        <div class="card">
            <div class="card-header">
                <div class="card-title">社区交流</div>
                <div class="card-more">发布 +</div>
            </div>
            <div class="post-filter">
                <span class="filter-item active">热门</span>
                <span class="filter-item">最新</span>
                <span class="filter-item">关注</span>
            </div>
            <div class="post-list">
                <div class="post-item">
                    <div class="post-user">
                        <div class="user-avatar">
                            <i class="fas fa-user-circle fa-2x"></i>
                        </div>
                        <div class="user-info">
                            <div class="user-name">张阿姨</div>
                            <div class="post-time">2小时前</div>
                        </div>
                    </div>
                    <div class="post-content">
                        今天跟着视频学习了太极拳的基本动作，感觉很不错，坚持一周了，腰不那么疼了！
                    </div>
                    <div class="post-image">
                        <img src="https://picsum.photos/300/200" alt="太极练习">
                    </div>
                    <div class="post-actions">
                        <div class="action-item">
                            <i class="far fa-heart"></i> 58
                        </div>
                        <div class="action-item">
                            <i class="far fa-comment"></i> 23
                        </div>
                        <div class="action-item">
                            <i class="far fa-share-square"></i> 5
                        </div>
                    </div>
                </div>
                <div class="post-item">
                    <div class="post-user">
                        <div class="user-avatar">
                            <i class="fas fa-user-circle fa-2x"></i>
                        </div>
                        <div class="user-info">
                            <div class="user-name">王叔叔</div>
                            <div class="post-time">昨天</div>
                        </div>
                    </div>
                    <div class="post-content">
                        分享一个简单的健康食谱：枸杞煮鸡蛋，每天早上一杯，眼睛明亮，精神好！
                    </div>
                    <div class="post-actions">
                        <div class="action-item">
                            <i class="far fa-heart"></i> 42
                        </div>
                        <div class="action-item">
                            <i class="far fa-comment"></i> 15
                        </div>
                        <div class="action-item">
                            <i class="far fa-share-square"></i> 8
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">附近活动</div>
                <div class="card-more">全部 ></div>
            </div>
            <div class="event-list">
                <div class="event-item">
                    <div class="event-date">
                        <div class="date-day">15</div>
                        <div class="date-month">8月</div>
                    </div>
                    <div class="event-info">
                        <div class="event-title">社区太极晨练</div>
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i> 中央公园
                        </div>
                        <div class="event-time">
                            <i class="far fa-clock"></i> 06:30-07:30
                        </div>
                    </div>
                    <button class="event-join">报名</button>
                </div>
                <div class="event-item">
                    <div class="event-date">
                        <div class="date-day">18</div>
                        <div class="date-month">8月</div>
                    </div>
                    <div class="event-info">
                        <div class="event-title">健康饮食讲座</div>
                        <div class="event-location">
                            <i class="fas fa-map-marker-alt"></i> 社区活动中心
                        </div>
                        <div class="event-time">
                            <i class="far fa-clock"></i> 14:00-16:00
                        </div>
                    </div>
                    <button class="event-join">报名</button>
                </div>
            </div>
        </div>
    `,

    // 我的页面 - 运动AI反馈
    profile: `
        <div class="user-profile">
            <div class="user-avatar-large">
                <i class="fas fa-user-circle fa-4x"></i>
            </div>
            <div class="user-name-large">张明</div>
            <div class="user-level">健康达人 Lv.3</div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">AI 健康报告</div>
                <div class="card-more">详情 ></div>
            </div>
            <div class="health-stats">
                <div class="stat-item">
                    <div class="stat-value">23</div>
                    <div class="stat-label">连续运动天数</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">5.2</div>
                    <div class="stat-label">周平均运动时长(小时)</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">78</div>
                    <div class="stat-label">总体健康评分</div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">AI 健康建议</div>
            </div>
            <div class="ai-feedback">
                <div class="feedback-item">
                    <div class="feedback-icon">
                        <i class="fas fa-thumbs-up"></i>
                    </div>
                    <div class="feedback-content">
                        <div class="feedback-title">做得好的方面</div>
                        <div class="feedback-detail">
                            <ul>
                                <li>坚持每日晨练太极拳</li>
                                <li>饮食规律，蔬果摄入充足</li>
                                <li>作息时间稳定</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="feedback-item">
                    <div class="feedback-icon warning">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="feedback-content">
                        <div class="feedback-title">需要改进的方面</div>
                        <div class="feedback-detail">
                            <ul>
                                <li>近期血压略高，建议减少盐分摄入</li>
                                <li>缺乏有氧运动，建议增加慢跑或快走</li>
                                <li>水分摄入不足，建议多喝水</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <div class="card-title">本周运动数据</div>
            </div>
            <div class="exercise-data">
                <div class="data-chart">
                    <!-- 模拟图表区域 -->
                    <div class="chart-placeholder">
                        <div class="chart-bar" style="height: 30px;"></div>
                        <div class="chart-bar" style="height: 60px;"></div>
                        <div class="chart-bar" style="height: 45px;"></div>
                        <div class="chart-bar" style="height: 20px;"></div>
                        <div class="chart-bar" style="height: 50px;"></div>
                        <div class="chart-bar" style="height: 35px;"></div>
                        <div class="chart-bar" style="height: 40px;"></div>
                    </div>
                    <div class="chart-labels">
                        <span>一</span>
                        <span>二</span>
                        <span>三</span>
                        <span>四</span>
                        <span>五</span>
                        <span>六</span>
                        <span>日</span>
                    </div>
                </div>
                <div class="exercise-summary">
                    <div class="summary-item">
                        <div class="summary-label">周运动总时长</div>
                        <div class="summary-value">5小时12分钟</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">平均心率</div>
                        <div class="summary-value">72 BPM</div>
                    </div>
                    <div class="summary-item">
                        <div class="summary-label">消耗热量</div>
                        <div class="summary-value">1,240 千卡</div>
                    </div>
                </div>
            </div>
        </div>
    `,

    // AI聊天页面 - 结构保持不变，但初始消息会由 history 控制
    ai: `
        <div class="chat-container">
            <div class="chat-messages" id="chat-messages">
                <!-- 聊天消息将通过 chatHistory 动态加载 -->
            </div>
            <div class="chat-input-area">
                <textarea id="chat-input" placeholder="输入您的问题..." rows="1"></textarea>
                <button id="send-button">发送</button>
            </div>
        </div>
    `
};

// --- 用于存储聊天记录的数组 ---
let chatHistory = [
    // 初始欢迎消息
    { text: "您好！我是您的AI健康反馈，有什么可以帮您的吗？", classes: ['ai-message'] }
];

// 为页面导航添加CSS样式
document.head.insertAdjacentHTML('beforeend', `
<style>
    /* 社区页面样式 */
    .post-filter {
        display: flex;
        margin: 10px 0;
    }
    
    .filter-item {
        padding: 5px 15px;
        margin-right: 10px;
        font-size: 14px;
        color: #666;
        border-radius: 15px;
        background: #f5f5f5;
    }
    
    .filter-item.active {
        background: #3dc295;
        color: white;
    }
    
    .post-item {
        border-bottom: 1px solid #eee;
        padding: 15px 0;
    }
    
    .post-user {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
    }
    
    .user-avatar {
        margin-right: 10px;
        color: #666;
    }
    
    .user-name {
        font-weight: bold;
        font-size: 14px;
    }
    
    .post-time {
        font-size: 12px;
        color: #999;
    }
    
    .post-content {
        font-size: 14px;
        line-height: 1.5;
        margin-bottom: 10px;
    }
    
    .post-image {
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 10px;
    }
    
    .post-image img {
        width: 100%;
    }
    
    .post-actions {
        display: flex;
    }
    
    .action-item {
        display: flex;
        align-items: center;
        margin-right: 20px;
        font-size: 14px;
        color: #666;
    }
    
    .action-item i {
        margin-right: 5px;
    }
    
    /* 活动列表样式 */
    .event-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }
    
    .event-date {
        width: 50px;
        height: 50px;
        background: #f5f5f5;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
    }
    
    .date-day {
        font-size: 18px;
        font-weight: bold;
    }
    
    .date-month {
        font-size: 12px;
        color: #666;
    }
    
    .event-info {
        flex: 1;
    }
    
    .event-title {
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    .event-location, .event-time {
        font-size: 12px;
        color: #666;
        display: flex;
        align-items: center;
    }
    
    .event-location i, .event-time i {
        margin-right: 5px;
        font-size: 10px;
    }
    
    .event-join {
        background: #3dc295;
        color: white;
        border: none;
        padding: 5px 15px;
        border-radius: 15px;
        font-size: 12px;
    }
    
    /* 我的页面样式 */
    .user-profile {
        text-align: center;
        padding: 20px 0;
    }
    
    .user-avatar-large {
        color: #666;
        margin-bottom: 10px;
    }
    
    .user-name-large {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    .user-level {
        color: #3dc295;
        font-size: 14px;
    }
    
    .health-stats {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
    }
    
    .stat-item {
        text-align: center;
        flex: 1;
    }
    
    .stat-value {
        font-size: 20px;
        font-weight: bold;
        color: #3dc295;
    }
    
    .stat-label {
        font-size: 12px;
        color: #666;
    }
    
    .ai-feedback {
        padding: 10px 0;
    }
    
    .feedback-item {
        display: flex;
        margin-bottom: 15px;
    }
    
    .feedback-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #3dc295;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
    }
    
    .feedback-icon.warning {
        background: #ff9b5c;
    }
    
    .feedback-title {
        font-weight: bold;
        margin-bottom: 5px;
    }
    
    .feedback-detail {
        font-size: 14px;
        color: #666;
    }
    
    .feedback-detail ul {
        padding-left: 15px;
    }
    
    .exercise-data {
        padding: 10px 0;
    }
    
    .data-chart {
        margin-bottom: 15px;
    }
    
    .chart-placeholder {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        height: 100px;
        padding: 10px 0;
    }
    
    .chart-bar {
        width: 30px;
        background: #3dc295;
        border-radius: 5px 5px 0 0;
    }
    
    .chart-labels {
        display: flex;
        justify-content: space-between;
    }
    
    .chart-labels span {
        font-size: 12px;
        color: #999;
    }
    
    .exercise-summary {
        display: flex;
        flex-direction: column;
    }
    
    .summary-item {
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        border-bottom: 1px solid #eee;
    }
    
    .summary-label {
        font-size: 14px;
        color: #666;
    }
    
    .summary-value {
        font-weight: bold;
    }
    
    /* 计划页面样式 */
    .schedule-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }
    
    .schedule-time {
        width: 50px;
        font-weight: bold;
        font-size: 14px;
    }
    
    .schedule-content {
        flex: 1;
    }
    
    .schedule-title {
        font-weight: bold;
        margin-bottom: 3px;
    }
    
    .schedule-desc {
        font-size: 12px;
        color: #666;
    }
    
    .schedule-status {
        color: #3dc295;
        font-size: 12px;
    }
    
    .diet-item {
        display: flex;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }
    
    .diet-icon {
        width: 40px;
        height: 40px;
        background: #f5f5f5;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        color: #666;
    }
    
    .diet-title {
        font-weight: bold;
        margin-bottom: 3px;
    }
    
    .diet-desc {
        font-size: 12px;
        color: #666;
    }
    
    /* 公共按钮样式 */
    .secondary-button {
        background: rgba(255,255,255,0.2);
        border: none;
        color: white;
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 12px;
        margin-right: 10px;
    }
</style>
`);

// 页面加载时显示首页
document.addEventListener('DOMContentLoaded', () => {
    // 初始化显示首页
    showPage('home');
    
    // 为底部导航添加点击事件
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageName = item.getAttribute('data-page');
            showPage(pageName);
        });
    });
});

// 显示指定页面
function showPage(pageName) {
    // 更新页面内容
    const contentArea = document.getElementById('content');
    contentArea.innerHTML = pageContents[pageName];
    
    // 更新活跃的导航项
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('data-page') === pageName);
    });
    
    // 如果是AI页面，则初始化聊天功能
    if (pageName === 'ai') {
        initChat();
    }
}

// 初始化聊天功能
function initChat() {
    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');
    const chatMessagesContainer = document.getElementById('chat-messages');

    if (!chatMessagesContainer) return; // 安全检查

    // 1. 清空当前显示的消息
    chatMessagesContainer.innerHTML = '';

    // 2. 从 chatHistory 重建消息列表
    chatHistory.forEach(message => {
        // 直接调用内部的添加逻辑，避免重复添加历史记录
        appendMessageToDOM(message.text, message.classes);
    });
     // 滚动到底部
     chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    // 3. 添加事件监听器 (只添加一次)
    // 为确保不重复添加监听器，可以先移除旧的 (如果存在)
    // (简单起见，这里假设 initChat 只在切换到 AI 页面时调用一次有效实例)
    if (!sendButton.hasAttribute('data-listener-added')) {
        chatInput.addEventListener('input', () => {
            chatInput.style.height = 'auto';
            chatInput.style.height = (chatInput.scrollHeight) + 'px';
        });

        const sendMessageHandler = () => {
            const messageText = chatInput.value.trim();
            if (messageText) {
                // 调用 appendMessage 来显示并存储历史记录
                appendMessage(messageText, 'user-message');
                chatInput.value = '';
                chatInput.style.height = 'auto';
                callBackendAPI(messageText);
            }
        };

        sendButton.addEventListener('click', sendMessageHandler);
        sendButton.setAttribute('data-listener-added', 'true'); // 标记已添加

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessageHandler();
            }
        });
    }
}

// 将消息添加到聊天窗口的 DOM 中 (内部函数，不修改 history)
function appendMessageToDOM(text, classList) {
    const chatMessages = document.getElementById('chat-messages');
    if (!chatMessages) return;
    const messageDiv = document.createElement('div');
    // 确保 classList 是数组
    const classesToAdd = Array.isArray(classList) ? classList : [classList];
    messageDiv.classList.add('message', ...classesToAdd);
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
     // 滚动到底部 (每次添加后都滚动)
     chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 更新后的 appendMessage：添加到 DOM 并更新 history
function appendMessage(text, ...classes) {
    // 1. 添加到 DOM
    appendMessageToDOM(text, classes);

    // 2. 添加到历史记录
    // 过滤掉可能的 'thinking' 类，因为它只是临时状态
    const finalClasses = classes.filter(cls => cls !== 'thinking');
    chatHistory.push({ text: text, classes: finalClasses });

    // 可选：如果担心历史记录过长，可以在此添加限制逻辑
    // if (chatHistory.length > MAX_HISTORY_LENGTH) { ... }
}

// 更新后的 callBackendAPI：使用新的 appendMessage 添加 AI 回复
async function callBackendAPI(userMessage) {
    // 显示加载提示 (仅添加到 DOM，不存入 history)
    appendMessageToDOM("AI思考中...", ['ai-message', 'thinking']);

    try {
        const response = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userMessage })
        });

        // 移除加载提示
        const thinkingMessage = document.querySelector('#chat-messages .thinking'); // 更精确的选择器
        if (thinkingMessage) thinkingMessage.remove();

        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch (e) {
                errorData = { error: `请求失败 (状态码: ${response.status})` };
            }
            throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.reply) {
            // 使用 appendMessage 添加 AI 回复到 DOM 和 history
            appendMessage(data.reply, 'ai-message');
        } else if (data.error) {
            // 错误消息也添加到 DOM 和 history
             appendMessage(`错误: ${data.error}`, 'ai-message', 'error-message'); // 可选：添加错误样式
        } else {
            appendMessage('收到了无法解析的回复', 'ai-message');
        }

    } catch (error) {
        console.error('Error calling backend API:', error);
        const thinkingMessage = document.querySelector('#chat-messages .thinking');
        if (thinkingMessage) thinkingMessage.remove();
        // 错误消息添加到 DOM 和 history
        appendMessage(`抱歉，连接AI服务时出错: ${error.message}`, 'ai-message', 'error-message'); // 可选：添加错误样式
    }
}

/*
// --- (注释掉之前的模拟代码) ---
// function simulateAIResponse(userMessage) { ... }
*/