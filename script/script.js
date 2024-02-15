document.addEventListener('DOMContentLoaded', function() {
    //홈페이지 로드시 팝업 보이기
    showPopup();
});

function showPopup() {
    document.getElementById('contPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('contPopup').style.display = 'none';
}

const $objbutton = document.querySelector('.obj-button');
const $objai = document.querySelector('.obj-txt-ai');
const $lablRegion = document.getElementById('lablRegion');
const $lablTime = document.getElementById('lablTime');
const $lablPlace = document.getElementById('lablPlace');

// 모든 input을 하나의 텍스트로 묶어 주기
let travelInfo;

function collectTravelInfo() {
    const region = $lablRegion.value;
    const time = $lablTime.value;
    const place = $lablPlace.value;

    const rentYes = document.getElementById('radiorent_yes').checked;
    const rentNo = document.getElementById('radiorent_no').checked;
    const taxiYes = document.getElementById('radiotaxi_yes').checked;
    const taxiNO = document.getElementById('radiotaxi_no').checked;

    const rentText = rentYes ? '예' : (rentNo ? '아니오' : '');
    const taxiText = taxiYes ? '예' : (taxiNO ? '아니오' : '');

    travelInfo = `여행지: ${region}, 일정: ${time}, 가고 싶은 여행지: ${place}, 차 렌트 여부: ${rentText}, 택시 이용 여부: ${taxiText}`;

    console.log(travelInfo);
}

let data = [];
data.push({
    "role": "system",
    "content": "assistant"
});

const url = `https://open-api.jejucodingcamp.workers.dev/`;

$objbutton.addEventListener('click', e => {
    e.preventDefault();
    collectTravelInfo();
    data.push({
        "role": "user",
        "content": travelInfo
    });

    chatGPTAPI();

    $lablPlace.value = '';
    $lablRegion.value = '';
    $lablTime.value = '';
    document.getElementById('radiorent_yes').checked = false;
    document.getElementById('radiorent_no').checked = false;
    document.getElementById('radiotaxi_yes').checked = false;
    document.getElementById('radiotaxi_no').checked = false;

    // 기존 데이터를 비워줍니다.
    data.length = 0;
    data.push({
        "role": "system",
        "content": "assistant"
    });
});

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
        appendAnswer(res.choices[0].message.content);

        // API 호출 완료 후 기존 데이터를 비워줍니다.
        data.length = 0;
        data.push({
            "role": "system",
            "content": "assistant"
        });
    })
    .catch(error => {
        console.error('Error from API:', error);
    });
}

function appendAnswer(message) {
    $objai.innerHTML = `<p>${message}</p>`;
}