// 가로세로 문제 매핑하기
// 문제 번호 매겨서 그 칸에 rn cn 체크하기
// const RENDERING = [
//     'o','o','o','o','o','o','o','o',
//     'o','o','o','o','o','o','o','o',
//     'o','o','o','o','o','o','o','o',
//     'o','o','o','o','o','o','o','o',
//     'o','o','o','o','o','o','o','o',
//     'o','o','o','o','o','o','o','o',
//     'o','o','o','o','o','o','o','o',
//     'o','o','o','o','o','o','o','o'
// ];
const RENDERING = [
    'r1 c1','r1','x','x','x','x','x','x',
    'c1','x','x','x','c2','x','x','c3',
    'x','x','r2','r2','r2 c2','x','x','c3',
    'x','c4','x','x','x','x','x','c3',
    'r3','r3 c4','x','r4 c5','r4','r4','r4','x',
    'x','x','x','c5','x','x','x','x',
    'x','r5','r5','r5 c5','x','x','x','x',
    'x','x','x','c5','x','r6','r6','r6',
];

const quizQ = {
    r1 : {
        num : '가로 1번 문제',
        quiz : '귤과 비슷하고 살이 부드럽고 즙이 많은 과일.',
        hint : '자몽은 맛있다.',
        answer : '자몽',
    },
    r2 : {
        num : '가로 2번 문제',
        quiz : '감귤 종류의 하나. 열매는 가죽질의 기름기를 함유한 껍질과 안쪽의 즙이 많은 과육으로 이루어져 있다.',
        hint : '자몽은 맛있다.',
        answer : '오렌지',
    },
    r3 : {
        num : '가로 3번 문제',
        quiz : '굵고 큰 파.',
        hint : '자몽은 맛있다.',
        answer : '대파',
    },
    r4 : {
        num : '가로 4번 문제',
        quiz : '솔방울 모양의 과일. 노란색 과육을 가지고 있다.',
        hint : '자몽은 맛있다.',
        answer : '파인애플',
    },
    r5 : {
        num : '가로 5번 문제',
        quiz : '산형과의 여러해살이풀. 논과 같이 축축한 땅에서 자라며 잎과 줄기에 독특한 향기가 있어서 나물로 먹거나 해물탕 같은 요리에 주로 넣어 먹는다.',
        hint : '자몽은 맛있다.',
        answer : '미나리',
    },
    r6 : {
        num : '가로 6번 문제',
        quiz : '초승달 모양의 긴 타원형으로, 대체로 처음에는 초록색이었다가 노란색으로 익는다. 맛과 향이 달다.',
        hint : '자몽은 맛있다.',
        answer : '바나나',
    },
    c1 : {
        num : '세로 1번 문제',
        quiz : '살구보다 조금 크고 껍질 표면은 털이 없이 매끈하며 맛은 시큼하며 달콤하다',
        hint : '자두는 시다',
        answer: '자두',
    },
    c2 : {
        num : '세로 2번 문제',
        quiz : '검은 자줏빛으로 긴 원통 모양이며, 익혀서 반찬으로 쓴다.',
        hint : '자두는 시다',
        answer: '가지',
    },
    c3 : {
        num : '세로 3번 문제',
        quiz : '잎이 둥글고 넓으며 양배추처럼 결구성(結球性)인 개량종 상추이다.',
        hint : '자두는 시다',
        answer: '양상추',
    },
    c4 : {
        num : '세로 4번 문제',
        quiz : '갈색 껍질에 하얀색의 둥근 모양. 껍질을 까면 눈이 맵다.',
        hint : '자두는 시다',
        answer: '양파',
    },
    c5 : {
        num : '세로 5번 문제',
        quiz : '열매는 짧은 타원형으로 꼭대기가 납작하고 크며, 바닥은 오목하고 세로로 골이 진다. 단맛과 아삭아삭한 질감이 있으며, 식용한다.',
        hint : '자두는 시다',
        answer: '파프리카',
    }
}
export {RENDERING, quizQ};