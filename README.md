# Ps Plan 여행 추천

## 목표
* GPT를 이용 여행 추천 서비스

## 기능
* 여행 일정 추천 받습니다.

## WBS
* 아래 일정표는 머메이드로 작성했습니다.
```mermaid
gantt
    title P's Plan
    dateFormat  YYYY-MM-DD
    section 계획
    프로젝트 구상       :done,    des1, 2024-02-10, 1d

    section 설계
    index.html 작성    :done,    des1, 2024-02-10, 1d
    style.css 작성     :done,    des1, 2024-02-10, 1d
    script.js 작성     :done,    des1, 2024-02-11, 2d

    section 개발
    index.html 개발    :done,    des1, 2024-02-12, 4d
    style.css 개발     :done,    des1, 2024-02-12, 4d
    script.js 개발     :done,    des1, 2024-02-12, 4d

    section 테스트
    기능테스트         :done,    des1, 2024-02-15, 1d
    시스템베포         :done,    des1, 2024-02-15, 1d
```

## 프로젝트 구조
![image](https://github.com/vin00/recommand_tour/assets/155034374/4adce29f-d3be-41ee-b5ae-c7113737d072)

## 와이어 프레임

|메인화면|설명|
|------|----|
|![image](https://github.com/vin00/recommand_tour/assets/155034374/9c5543e5-7f5b-4c5b-92d6-375ea856bffa)|페이지 오픈시 팝업화면 구현|
|![image](https://github.com/vin00/recommand_tour/assets/155034374/e7055950-b046-42ba-b207-7279a6ebd272)|여행 위치, 일자, 차량 렌트 여부 입력|
|![image](https://github.com/vin00/recommand_tour/assets/155034374/7bab2264-3bef-4871-905f-6ab296ead0eb)|GPT를 통해 여행의 전반적인 계획 수신|
