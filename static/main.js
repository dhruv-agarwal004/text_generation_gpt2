const chatContainer = document.getElementById('chat-container');
        const userInput = document.getElementById('userinput');
        const submitButton = document.getElementById('submit');
        const loadingIndicator = document.getElementById('loading');

        function addMessage(content, isUser) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
            messageDiv.textContent = content;
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        submitButton.addEventListener('click', function() {
            const userMessage = userInput.value.trim();
            if (userMessage) {
                addMessage(userMessage, true);
                userInput.value = '';
                loadingIndicator.style.display = 'block';

                fetch('/generate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({prompt: userMessage}),
                })
                .then(response => response.json())
                .then(data => {
                    loadingIndicator.style.display = 'none';
                    addMessage(data.response, false);
                })
                .catch((error) => {
                    loadingIndicator.style.display = 'none';
                    console.error('Error:', error);
                    addMessage('Error: ' + error, false);
                });
            }
        });

        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                submitButton.click();
            }
        });