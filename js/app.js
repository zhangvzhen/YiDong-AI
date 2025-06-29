// --- 登录和健康问卷相关变量 ---
let currentStep = 1;
let countdownTimer = null;
let userHealthData = {};

// --- 登录界面功能 ---
function initLogin() {
    const loginBtn = document.getElementById('login-btn');
    const sendCodeBtn = document.getElementById('send-code-btn');
    const loginPhone = document.getElementById('login-phone');
    const loginCode = document.getElementById('login-code');

    // 发送验证码
    sendCodeBtn.addEventListener('click', function() {
        const phone = loginPhone.value.trim();
        if (!validatePhone(phone)) {
            showToast('请输入正确的手机号码');
            return;
        }
        
        // 开始倒计时
        startCountdown(sendCodeBtn);
        showToast('验证码已发送');
    });

    // 登录按钮
    loginBtn.addEventListener('click', function() {
        const phone = loginPhone.value.trim();
        const code = loginCode.value.trim();
        
        if (!validatePhone(phone)) {
            showToast('请输入正确的手机号码');
            return;
        }
        
        if (!validateCode(code)) {
            showToast('请输入6位验证码');
            return;
        }
        
        // 模拟登录成功
        showToast('登录成功');
        setTimeout(() => {
            hideLogin();
            showSurvey();
        }, 1000);
    });

    // 输入框回车事件
    loginPhone.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendCodeBtn.click();
        }
    });
    
    loginCode.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            loginBtn.click();
        }
    });
}

// 验证手机号
function validatePhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone);
}

// 验证验证码
function validateCode(code) {
    return /^\d{6}$/.test(code);
}

// 开始倒计时
function startCountdown(button) {
    let countdown = 60;
    button.disabled = true;
    button.textContent = `${countdown}秒后重发`;
    
    countdownTimer = setInterval(() => {
        countdown--;
        button.textContent = `${countdown}秒后重发`;
        
        if (countdown <= 0) {
            clearInterval(countdownTimer);
            button.disabled = false;
            button.textContent = '获取验证码';
        }
    }, 1000);
}

// 隐藏登录界面
function hideLogin() {
    const loginOverlay = document.getElementById('login-overlay');
    loginOverlay.classList.remove('active');
}

// 显示健康问卷
function showSurvey() {
    const surveyOverlay = document.getElementById('survey-overlay');
    surveyOverlay.classList.add('active');
    initSurvey();
}

// --- 健康问卷功能 ---
function initSurvey() {
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const submitBtn = document.getElementById('submit-survey-btn');

    nextBtn.addEventListener('click', nextStep);
    prevBtn.addEventListener('click', prevStep);
    submitBtn.addEventListener('click', submitSurvey);

    // 初始化第一步
    updateStepDisplay();
}

// 下一步
function nextStep() {
    if (validateCurrentStep()) {
        if (currentStep < 3) {
            currentStep++;
            updateStepDisplay();
        }
    }
}

// 上一步
function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateStepDisplay();
    }
}

// 验证当前步骤
function validateCurrentStep() {
    switch (currentStep) {
        case 1:
            const age = document.getElementById('age').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            
            if (!age || age < 45 || age > 100) {
                showToast('请输入45-100岁之间的年龄');
                return false;
            }
            
            if (!gender) {
                showToast('请选择性别');
                return false;
            }
            
            userHealthData.age = age;
            userHealthData.gender = gender.value;
            break;
            
        case 2:
            const diseases = document.querySelectorAll('input[name="diseases"]:checked');
            const joints = document.querySelector('input[name="joints"]:checked');
            
            if (diseases.length === 0) {
                showToast('请选择慢性病史情况');
                return false;
            }
            
            if (!joints) {
                showToast('请选择关节状况');
                return false;
            }
            
            userHealthData.diseases = Array.from(diseases).map(d => d.value);
            userHealthData.joints = joints.value;
            break;
            
        case 3:
            const goals = document.querySelectorAll('input[name="goals"]:checked');
            const intensity = document.querySelector('input[name="intensity"]:checked');
            
            if (goals.length === 0) {
                showToast('请选择健康目标');
                return false;
            }
            
            if (!intensity) {
                showToast('请选择运动强度偏好');
                return false;
            }
            
            userHealthData.goals = Array.from(goals).map(g => g.value);
            userHealthData.intensity = intensity.value;
            break;
    }
    
    return true;
}

// 更新步骤显示
function updateStepDisplay() {
    // 隐藏所有步骤
    for (let i = 1; i <= 3; i++) {
        const step = document.getElementById(`step-${i}`);
        step.style.display = 'none';
    }
    
    // 显示当前步骤
    const currentStepElement = document.getElementById(`step-${currentStep}`);
    currentStepElement.style.display = 'block';
    
    // 更新按钮状态
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-survey-btn');
    
    prevBtn.style.display = currentStep === 1 ? 'none' : 'block';
    nextBtn.style.display = currentStep === 3 ? 'none' : 'block';
    submitBtn.style.display = currentStep === 3 ? 'block' : 'none';
}

// 提交问卷
function submitSurvey() {
    if (validateCurrentStep()) {
        // 保存用户健康数据
        localStorage.setItem('userHealthData', JSON.stringify(userHealthData));
        
        showToast('健康信息已保存');
        setTimeout(() => {
            hideSurvey();
            showMainApp();
        }, 1000);
    }
}

// 隐藏健康问卷
function hideSurvey() {
    const surveyOverlay = document.getElementById('survey-overlay');
    surveyOverlay.classList.remove('active');
}

// 显示主应用
function showMainApp() {
    // 检查是否已经登录
    const isLoggedIn = localStorage.getItem('userHealthData');
    if (!isLoggedIn) {
        // 如果未登录，显示登录界面
        const loginOverlay = document.getElementById('login-overlay');
        loginOverlay.classList.add('active');
        return;
    }
    
    // 隐藏所有overlay
    document.querySelectorAll('.overlay').forEach(overlay => {
        overlay.classList.remove('active');
    });
    
    // 显示主应用内容
    document.querySelector('header').style.display = 'flex';
    document.querySelector('main').style.display = 'block';
    document.querySelector('.bottom-nav').style.display = 'flex';
    
    // 初始化显示首页
    showPage('home');
    
    // 为底部导航添加点击事件
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageName = item.getAttribute('data-page');
            showPage(pageName);
        });
    });
    
    // 初始化视频播放功能
    initVideoPlayer();
}

// 显示提示信息
function showToast(message) {
    // 创建toast元素
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 12px 20px;
        border-radius: 20px;
        font-size: 14px;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // 显示动画
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 10);
    
    // 自动隐藏
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

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
    // 初始化登录功能
    initLogin();
    
    // 检查是否已经登录
    const isLoggedIn = localStorage.getItem('userHealthData');
    if (!isLoggedIn) {
        // 如果未登录，隐藏主应用内容，显示登录界面
        document.querySelector('header').style.display = 'none';
        document.querySelector('main').style.display = 'none';
        document.querySelector('.bottom-nav').style.display = 'none';
        
        const loginOverlay = document.getElementById('login-overlay');
        loginOverlay.classList.add('active');
    } else {
        // 如果已登录，显示主应用
        showMainApp();
        // 初始化视频播放功能
        initVideoPlayer();
        // 初始化语音按钮
        initMicButton();
    }
});

// 显示指定页面
function showPage(pageName) {
    // 隐藏所有页面
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // 显示指定页面
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
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
    // 1. 获取健康信息
    let healthInfo = '';
    try {
        const userHealthData = JSON.parse(localStorage.getItem('userHealthData') || '{}');
        if (userHealthData && Object.keys(userHealthData).length > 0) {
            healthInfo = `【用户健康信息】年龄：${userHealthData.age || ''}，性别：${userHealthData.gender === 'male' ? '男' : userHealthData.gender === 'female' ? '女' : ''}，慢性病史：${(userHealthData.diseases || []).join('、') || '无'}，关节状况：${userHealthData.joints || ''}，健康目标：${(userHealthData.goals || []).join('、') || ''}，运动强度偏好：${userHealthData.intensity || ''}。\n`;
        }
    } catch (e) {
        healthInfo = '';
    }

    // 2. 拼接健康信息和用户消息
    const realPrompt = healthInfo + userMessage;

    // 显示加载提示 (仅添加到 DOM，不存入 history)
    appendMessageToDOM("AI思考中...", ['ai-message', 'thinking']);

    try {
        const response = await fetch('http://localhost:5000/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: realPrompt })
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

// --- 用于存储聊天记录的数组 ---
let chatHistory = [
    // 初始欢迎消息
    { text: "您好！我是您的AI健康反馈，有什么可以帮您的吗？", classes: ['ai-message'] }
];

// --- 视频播放和反馈功能 ---
let currentVideoTitle = '';
let selectedFeedback = {
    intensity: '',
    feeling: '',
    difficulty: '',
    exitReason: '',
    specialFeeling: ''
};
let videoStartTime = 0;
let videoEndReason = ''; // 'completed', 'paused', 'closed'

// 初始化视频播放功能
function initVideoPlayer() {
    // 为所有视频项添加点击事件
    document.querySelectorAll('.video-item').forEach(item => {
        item.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            const videoTitle = this.getAttribute('data-title');
            playVideo(videoSrc, videoTitle);
        });
    });

    // 为视频预览添加错误处理
    document.querySelectorAll('.video-preview').forEach(preview => {
        preview.addEventListener('error', function(e) {
            console.log('视频预览加载失败:', e);
            // 保持占位符显示，隐藏视频元素
            this.style.display = 'none';
        });
        
        // 添加加载成功处理
        preview.addEventListener('loadeddata', function() {
            // 视频加载成功，显示视频并隐藏占位符
            this.classList.add('loaded');
            const placeholder = this.previousElementSibling;
            if (placeholder && placeholder.classList.contains('video-placeholder')) {
                placeholder.style.display = 'none';
            }
        });
        
        // 添加加载开始处理
        preview.addEventListener('loadstart', function() {
            // 开始加载时显示加载状态
            this.style.opacity = '0';
        });
    });

    // 关闭视频按钮
    document.getElementById('close-video-btn').addEventListener('click', () => {
        videoEndReason = 'closed';
        closeVideo();
    });

    // 视频播放结束事件
    document.getElementById('fullscreen-video').addEventListener('ended', () => {
        videoEndReason = 'completed';
        onVideoEnded();
    });

    // 视频暂停事件
    document.getElementById('fullscreen-video').addEventListener('pause', () => {
        // 只有在用户主动暂停时才记录
        if (videoEndReason === '') {
            videoEndReason = 'paused';
        }
    });

    // 视频播放事件
    document.getElementById('fullscreen-video').addEventListener('play', () => {
        // 如果重新播放，重置结束原因
        if (videoEndReason === 'paused') {
            videoEndReason = '';
        }
    });

    // 初始化反馈功能
    initFeedback();
}

// 播放视频
function playVideo(videoSrc, videoTitle) {
    const videoPlayer = document.getElementById('fullscreen-video');
    const videoTitleElement = document.querySelector('.video-title-fullscreen');
    const videoOverlay = document.getElementById('video-player-overlay');

    // 重置状态
    videoEndReason = '';
    videoStartTime = Date.now();

    // 设置视频源和标题
    videoPlayer.src = videoSrc;
    videoTitleElement.textContent = videoTitle;
    currentVideoTitle = videoTitle;

    // 显示视频播放器
    videoOverlay.classList.add('active');

    // 添加加载事件监听
    videoPlayer.addEventListener('loadeddata', function onLoadedData() {
        // 视频加载成功后播放
        videoPlayer.play().catch(error => {
            console.log('视频播放失败:', error);
            showToast('视频播放失败，请稍后重试');
        });
        // 移除事件监听器，避免重复触发
        videoPlayer.removeEventListener('loadeddata', onLoadedData);
    });

    // 添加错误事件监听
    videoPlayer.addEventListener('error', function onError(e) {
        console.log('视频加载错误:', e);
        showToast('视频加载失败，请检查网络连接或稍后重试');
        // 移除事件监听器
        videoPlayer.removeEventListener('error', onError);
    });

    // 设置超时处理
    setTimeout(() => {
        if (videoPlayer.readyState === 0) {
            showToast('视频加载超时，请检查网络连接');
        }
    }, 10000); // 10秒超时
}

// 关闭视频
function closeVideo() {
    const videoPlayer = document.getElementById('fullscreen-video');
    const videoOverlay = document.getElementById('video-player-overlay');

    // 暂停视频
    videoPlayer.pause();
    videoPlayer.currentTime = 0;

    // 隐藏视频播放器
    videoOverlay.classList.remove('active');

    // 如果视频播放时间超过10秒，显示反馈
    const playDuration = (Date.now() - videoStartTime) / 1000;
    if (playDuration > 10) {
        setTimeout(() => {
            showFeedback();
        }, 500);
    }
}

// 视频播放结束
function onVideoEnded() {
    // 关闭视频播放器
    closeVideo();
    
    // 显示反馈弹窗
    setTimeout(() => {
        showFeedback();
    }, 500);
}

// 初始化反馈功能
function initFeedback() {
    // 反馈按钮点击事件
    document.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const feeling = this.getAttribute('data-feeling');
            const value = this.getAttribute('data-value');
            const questionType = this.closest('.feedback-question').querySelector('label').textContent;
            
            selectFeedback(feeling, value, questionType);
        });
    });

    // 特殊感觉文本输入框事件
    const specialFeelingTextarea = document.getElementById('special-feeling');
    const charCount = document.getElementById('char-count');
    
    specialFeelingTextarea.addEventListener('input', function() {
        const length = this.value.length;
        charCount.textContent = length;
        
        // 更新字符计数颜色
        if (length > 180) {
            charCount.style.color = '#ff6b6b';
        } else if (length > 150) {
            charCount.style.color = '#ffa726';
        } else {
            charCount.style.color = '#999';
        }
        
        // 存储特殊感觉内容
        selectedFeedback.specialFeeling = this.value;
    });

    // 提交反馈按钮
    document.getElementById('submit-feedback-btn').addEventListener('click', submitFeedback);

    // 跳过反馈按钮
    document.getElementById('skip-feedback-btn').addEventListener('click', skipFeedback);
}

// 选择反馈选项
function selectFeedback(feeling, value, questionType) {
    // 移除同组其他按钮的选中状态
    const questionDiv = event.target.closest('.feedback-question');
    questionDiv.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // 选中当前按钮
    event.target.classList.add('selected');

    // 根据问题类型存储反馈
    if (questionType.includes('退出原因')) {
        selectedFeedback.exitReason = value;
    } else if (questionType.includes('强度')) {
        selectedFeedback.intensity = value;
    } else if (questionType.includes('身体感受')) {
        selectedFeedback.feeling = value;
    } else if (questionType.includes('困难')) {
        selectedFeedback.difficulty = value;
    }

    // 检查是否可以启用提交按钮
    checkSubmitButton();
}

// 检查是否可以启用提交按钮
function checkSubmitButton() {
    const submitBtn = document.getElementById('submit-feedback-btn');
    const hasIntensity = selectedFeedback.intensity !== '';
    const hasFeeling = selectedFeedback.feeling !== '';
    const hasDifficulty = selectedFeedback.difficulty !== '';
    const hasExitReason = selectedFeedback.exitReason !== '';

    // 如果中途退出，需要选择退出原因
    if (videoEndReason !== 'completed') {
        if (!hasExitReason) {
            submitBtn.disabled = true;
            return;
        }
    }

    // 至少需要选择两个问题才能提交（不包括退出原因）
    const selectedCount = [hasIntensity, hasFeeling, hasDifficulty].filter(Boolean).length;
    submitBtn.disabled = selectedCount < 2;
}

// 显示反馈弹窗
function showFeedback() {
    const feedbackOverlay = document.getElementById('feedback-overlay');
    const exitReasonQuestion = document.getElementById('exit-reason-question');
    
    // 根据视频结束原因决定是否显示退出原因问题
    if (videoEndReason !== 'completed') {
        exitReasonQuestion.style.display = 'block';
    } else {
        exitReasonQuestion.style.display = 'none';
    }
    
    feedbackOverlay.classList.add('active');
    
    // 重置反馈选择
    resetFeedback();
}

// 重置反馈选择
function resetFeedback() {
    selectedFeedback = {
        intensity: '',
        feeling: '',
        difficulty: '',
        exitReason: '',
        specialFeeling: ''
    };

    // 移除所有选中状态
    document.querySelectorAll('.feedback-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // 清空特殊感觉输入框
    const specialFeelingTextarea = document.getElementById('special-feeling');
    const charCount = document.getElementById('char-count');
    specialFeelingTextarea.value = '';
    charCount.textContent = '0';
    charCount.style.color = '#999';

    // 禁用提交按钮
    document.getElementById('submit-feedback-btn').disabled = true;
}

// 提交反馈
function submitFeedback() {
    // 组织反馈语言
    const feedbackText = organizeFeedbackText();
    
    // 隐藏反馈弹窗
    hideFeedback();
    
    // 切换到AI页面并发送反馈
    setTimeout(() => {
        showPage('ai');
        setTimeout(() => {
            // 发送反馈到AI助手
            appendMessage(feedbackText, 'user-message');
            callBackendAPI(feedbackText);
        }, 500);
    }, 300);
}

// 隐藏反馈弹窗
function hideFeedback() {
    const feedbackOverlay = document.getElementById('feedback-overlay');
    feedbackOverlay.classList.remove('active');
}

// 跳过反馈
function skipFeedback() {
    hideFeedback();
}

// 组织反馈文本
function organizeFeedbackText() {
    const parts = [];
    const playDuration = Math.round((Date.now() - videoStartTime) / 1000);
    
    parts.push(`我刚观看了"${currentVideoTitle}"的运动视频`);
    
    // 根据结束原因添加不同的描述
    if (videoEndReason === 'completed') {
        parts.push('完整观看了整个视频');
    } else if (videoEndReason === 'paused') {
        parts.push(`观看了约${Math.floor(playDuration / 60)}分${playDuration % 60}秒后暂停了`);
    } else if (videoEndReason === 'closed') {
        parts.push(`观看了约${Math.floor(playDuration / 60)}分${playDuration % 60}秒后关闭了视频`);
    }
    
    // 添加退出原因
    if (selectedFeedback.exitReason) {
        parts.push(`中途退出的原因：${selectedFeedback.exitReason}`);
    }
    
    if (selectedFeedback.intensity) {
        parts.push(`运动强度感受：${selectedFeedback.intensity}`);
    }
    
    if (selectedFeedback.feeling) {
        parts.push(`身体感受：${selectedFeedback.feeling}`);
    }
    
    if (selectedFeedback.difficulty) {
        parts.push(`遇到的困难：${selectedFeedback.difficulty}`);
    }
    
    // 添加特殊感觉
    if (selectedFeedback.specialFeeling.trim()) {
        parts.push(`特殊感受：${selectedFeedback.specialFeeling.trim()}`);
    }
    
    // 根据观看情况给出不同的建议请求
    if (videoEndReason === 'completed') {
        parts.push('请根据我的反馈给我一些运动建议');
    } else {
        parts.push('请根据我的反馈给我一些建议，包括如何更好地完成这个运动');
    }
    
    return parts.join('，') + '。';
}

// --- 语音提问功能 ---
let mediaRecorder = null;
let audioChunks = [];
let isRecording = false;

function initMicButton() {
    const micBtn = document.getElementById('mic-button');
    const chatInput = document.getElementById('chat-input');
    if (!micBtn) return;

    // 录音状态提示
    let recordToast = null;
    function showRecordToast(msg) {
        if (recordToast) recordToast.remove();
        recordToast = document.createElement('div');
        recordToast.className = 'toast';
        recordToast.textContent = msg;
        recordToast.style.cssText = `
            position: fixed; top: 60%; left: 50%; transform: translate(-50%, -50%); background: #3dc295; color: white; padding: 16px 28px; border-radius: 25px; font-size: 16px; z-index: 10001; opacity: 0.95;`
        document.body.appendChild(recordToast);
    }
    function hideRecordToast() {
        if (recordToast) { recordToast.remove(); recordToast = null; }
    }

    // 按下开始录音
    micBtn.addEventListener('mousedown', startRecording);
    micBtn.addEventListener('touchstart', startRecording);
    // 松开结束录音
    micBtn.addEventListener('mouseup', stopRecording);
    micBtn.addEventListener('mouseleave', stopRecording);
    micBtn.addEventListener('touchend', stopRecording);

    async function startRecording(e) {
        e.preventDefault();
        if (isRecording) return;
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            showToast('当前浏览器不支持录音');
            return;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            audioChunks = [];
            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) audioChunks.push(event.data);
            };
            mediaRecorder.onstop = async () => {
                if (audioChunks.length === 0) return;
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                // 上传音频到后端
                showRecordToast('正在识别...');
                const formData = new FormData();
                formData.append('audio', audioBlob, 'record.wav');
                try {
                    const resp = await fetch('http://localhost:5000/api/asr', { method: 'POST', body: formData });
                    const data = await resp.json();
                    hideRecordToast();
                    if (data.text) {
                        chatInput.value = data.text;
                        chatInput.style.height = 'auto';
                        chatInput.style.height = (chatInput.scrollHeight) + 'px';
                        // 自动发送
                        appendMessage(data.text, 'user-message');
                        callBackendAPI(data.text);
                    } else {
                        showToast(data.error || '识别失败');
                    }
                } catch (err) {
                    hideRecordToast();
                    showToast('语音识别失败');
                }
            };
            mediaRecorder.start();
            isRecording = true;
            showRecordToast('正在录音... 松开发送');
        } catch (err) {
            showToast('无法访问麦克风');
        }
    }
    function stopRecording(e) {
        if (!isRecording) return;
        isRecording = false;
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
        }
        hideRecordToast();
    }
}