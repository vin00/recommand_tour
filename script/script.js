// DOM 요소들을 변수에 할당
const $obj_input = document.querySelector('.obj-input')
const $obj_button = document.querySelector('.obj-button')
const $answer = document.querySelector('.answer')
const $aiboxInput = document.querySelector('.obj-input-Aibox');3

// 사용자 및 시스템 메시지를 저장하는 배열
const data = []

// API 요청을 보낼 URL
const url = `https://open-api.jejucodingcamp.workers.dev/`

// 답변을 화면에 추가하는 함수
function appendAnswer(message) {
    const p = document.createElement('p');
    p.textContent = message;
    $answer.appendChild(p);
    $aiboxInput.value = message;
}

// 버튼 클릭 시 이벤트 리스너 추가
$obj_button.addEventListener('click', e => {
    e.preventDefault()
    const contents = $obj_input.value
    // 사용자 입력을 배열에 추가
    data.push({
        "role": "user",
        "content": contents
    });
    // 입력창 비우기
    $obj_input.value = '';

    // API 요청 보내기
    chatGPTAPI();
});

// API 요청 함수
function chatGPTAPI() {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: 'follow'
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
        // 답변 온 것을 화면에 추가하는 함수 호출
        appendAnswer(res.choices[0].message.content);
    })

    .catch(error => {
        console.error('Error:', error)
    })
}