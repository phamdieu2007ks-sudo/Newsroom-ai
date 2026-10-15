document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');
    const chatMessages = document.getElementById('chat-messages');

    function addMessage(text, isUser = true) {
        if (!text.trim()) return;

        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${isUser ? 'user' : 'ai'}`;

        let innerHTML = '';
        if (isUser) {
            innerHTML = `
                <div class="msg-content">
                    <div class="msg-bubble">
                        ${text}
                    </div>
                </div>
            `;
        } else {
            innerHTML = `
                <div class="msg-avatar"><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                <div class="msg-content">
                    <div class="msg-bubble">
                        <div class="msg-text">${text}</div>
                    </div>
                </div>
            `;
        }

        msgDiv.innerHTML = innerHTML;
        chatMessages.appendChild(msgDiv);
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        if (isUser) {
            chatInput.value = '';
            setTimeout(() => {
                addMessage("Tôi đã nhận được yêu cầu của bạn. Tính năng này đang được phát triển thêm.", false);
            }, 1000);
        }
    }

    sendBtn.addEventListener('click', () => {
        addMessage(chatInput.value);
    });

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addMessage(chatInput.value);
        }
    });

    const suggestionBtns = document.querySelectorAll('.suggestions button');
    suggestionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const text = this.innerText;
            addMessage(text, true);
        });
    });
});