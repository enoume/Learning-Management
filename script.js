

        // ----------------- 학습 데이터 -----------------
        let studyData =
            [
                {
                    "id": "part1",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제1장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-1", "title": "제1강 벡터의해석(1)", "duration": "37분", "progress": 0 },
                        { "id": "p1-2", "title": "제2강 벡터의해석(2) 외적 및 실전문제풀이 1-7번", "duration": "38분", "progress": 0 },
                        { "id": "p1-3", "title": "제3강 벡터의해석(3) 미분연산자", "duration": "37분", "progress": 0 }
                    ]
                },
                {
                    "id": "part2",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제2장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-4", "title": "제4강 쿨롱의 법칙 및 전계의 세기", "duration": "37분", "progress": 0 },
                        { "id": "p1-5", "title": "제5강 실전문제풀이 1-12번", "duration": "41분", "progress": 0 },
                        { "id": "p1-6", "title": "제6강 전기력선의 성질, 전속.전속밀도, 가우스법칙에 의한 전계", "duration": "37분", "progress": 0 },
                        { "id": "p1-7", "title": "제7강 실전문제풀이 13-36번", "duration": "40분", "progress": 0 },
                        { "id": "p1-8", "title": "제8강 전위및 전위경도 37-50번", "duration": "37분", "progress": 0 },
                        { "id": "p1-9", "title": "제9강 전기쌍극자 및 전기2중층 (실전문제51-60번)", "duration": "36분", "progress": 0 },
                        { "id": "p1-10", "title": "제10강 전기력선의 방정식 및 가우스발산정리 (실전문제61-70번)", "duration": "34분", "progress": 0 }
                    ]
                },
                {
                    "id": "part3",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제3장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-11", "title": "제11강 정전용량 (실전문제1-15번)", "duration": "41분", "progress": 0 },
                        { "id": "p1-12", "title": "제12강 전위계수 유도 계수 용량계수 (실전문제16-23번)", "duration": "36분", "progress": 0 },
                        { "id": "p1-13", "title": "제13강 도체계의 에너지 및 합성콘덴서의 해석 (실전문제24~36번)", "duration": "39분", "progress": 0 },
                        { "id": "p1-14", "title": "제14강 실전문제(37-51번)", "duration": "35분", "progress": 0 }
                    ]
                },
                {
                    "id": "part4",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제4장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-15", "title": "제15강 유전체 및 실전문제(1-14번)", "duration": "38분", "progress": 0 },
                        { "id": "p1-16", "title": "제16강 실전문제(15-30번) 및 경계면조건설명", "duration": "39분", "progress": 0 },
                        { "id": "p1-17", "title": "제17강 실전문제(31-43번) 및 맥스웰변형력 및 복합유전체", "duration": "36분", "progress": 0 }
                    ]
                },
                {
                    "id": "part5",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제5장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-18", "title": "제18강 실전문제(44-51번) 접지무한평판과 점전하(실전문제1-9번)", "duration": "39분", "progress": 0 },
                        { "id": "p1-19", "title": "제19강 접지도체구와 점전하 및 접지무한평판과 선전하(10-17번) 전류 내용설명", "duration": "40분", "progress": 0 }
                    ]
                },
                {
                    "id": "part6",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제6장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-20", "title": "제20강 실전문제풀이", "duration": "37분", "progress": 0 }
                    ]
                },
                {
                    "id": "part7",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제7장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-21", "title": "제21강 진공중의 정전계(1)", "duration": "39분", "progress": 0 },
                        { "id": "p1-22", "title": "제22강 진공중의 정전계I 실전문제풀이(3-19)", "duration": "37분", "progress": 0 },
                        { "id": "p1-23", "title": "제23강 전류에 의한 자계I 및 실전문제풀이(20-30)", "duration": "38분", "progress": 0 },
                        { "id": "p1-24", "title": "제24강 전류에의한 자계 실전문제풀이(31-43)", "duration": "37분", "progress": 0 },
                        { "id": "p1-25", "title": "제25강 유한장 직선전류에 의한 자계, 정사작형중심자계 솔테노이드자계(실전문제 44-52)", "duration": "38분", "progress": 0 },
                        { "id": "p1-26", "title": "제26강 솔레노이드 및 플레밍의왼손,토렌쯔의힘(53-66번)", "duration": "38분", "progress": 0 },
                        { "id": "p1-27", "title": "제27강 자계내전자가 수직입사시,평행두도선간 작용하는 힘(67-72번)", "duration": "35분", "progress": 0 }
                    ]
                },
                {
                    "id": "part8",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제8장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-28", "title": "제28강 자성체 및 히스테리 곡선과 자화의 세기(1-23번)", "duration": "38분", "progress": 0 },
                        { "id": "p1-29", "title": "제29강 감자력 체적당에너지 경계면조건 및 전기회로와 자기회로의 대응관계(24-35번)", "duration": "38분", "progress": 0 },
                        { "id": "p1-30", "title": "제30강 전기회로와 자기회로의 대응관계 및 공극(35-57번)", "duration": "42분", "progress": 0 }
                    ]
                },
                {
                    "id": "part9",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제9장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-31", "title": "제31강 전자유도현상 설명", "duration": "37분", "progress": 0 },
                        { "id": "p1-32", "title": "제32강 실전문제풀이(1-26번)", "duration": "36분", "progress": 0 }
                    ]
                },
                {
                    "id": "part10",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제10장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-33", "title": "제33강 인덕턴스의 기본성질(1-17번)", "duration": "38분", "progress": 0 },
                        { "id": "p1-34", "title": "제34강 동심원통, 평행왕복도선의 인덕턴스(18-35번)", "duration": "38분", "progress": 0 },
                        { "id": "p1-35", "title": "제35강 상호인덕턴스 정리(36-51번)", "duration": "36분", "progress": 0 }
                    ]
                },
                {
                    "id": "part11",
                    "subject": "전기자기학",
                    "step": "이론",
                    "title": "제11장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-36", "title": "제36강 전류의 종류(변위전류)(1-13번)", "duration": "39분", "progress": 0 },
                        { "id": "p1-37", "title": "제37강 맥스웰 방정식 및 파동고유임피던스(14-27번)", "duration": "36분", "progress": 0 },
                        { "id": "p1-38", "title": "제38강 전자파,투과파,반사파(28-52번)", "duration": "38분", "progress": 0 }
                    ]
                },
                {
                    "id": "part12",
                    "subject": "전기자기학",
                    "step": "기출문제",
                    "title": "기출문제풀이",
                    "type": "strategy",
                    "courses": [
                        { "id": "p1-39", "title": "제1강 2020년 1,2회", "duration": "23분", "progress": 0 },
                        { "id": "p1-40", "title": "제2강 2020년 3회", "duration": "34분", "progress": 0 },
                        { "id": "p1-41", "title": "제3강 2020년 4회", "duration": "19분", "progress": 0 },
                        { "id": "p1-42", "title": "제4강 2021년 1회", "duration": "26분", "progress": 0 },
                        { "id": "p1-43", "title": "제5강 2021년 2회", "duration": "27분", "progress": 0 },
                        { "id": "p1-44", "title": "제6강 2021년 3회", "duration": "24분", "progress": 0 },
                        { "id": "p1-45", "title": "제7강 2022년 1회", "duration": "38분", "progress": 0 },
                        { "id": "p1-46", "title": "제8강 2022년 2회", "duration": "27분", "progress": 0 },
                        { "id": "p1-47", "title": "제9강 2022년 3회", "duration": "22분", "progress": 0 },
                        { "id": "p1-48", "title": "제10강 2023년 1회", "duration": "29분", "progress": 0 },
                        { "id": "p1-49", "title": "제11강 2023년 2회", "duration": "37분", "progress": 0 },
                        { "id": "p1-50", "title": "제12강 2023년 3회", "duration": "25분", "progress": 0 },
                        { "id": "p1-51", "title": "제13강 2024년 1회", "duration": "29분", "progress": 0 },
                        { "id": "p1-52", "title": "제14강 2024년 2회", "duration": "25분", "progress": 0 },
                        { "id": "p1-53", "title": "제15강 2024년 3회", "duration": "20분", "progress": 0 }
                    ]
                },
                {
                    "id": "part13",
                    "subject": "전력공학",
                    "step": "이론",
                    "title": "제1장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p2-1", "title": "제1강 OT 및 1장 저항 전선", "duration": "37분", "progress": 0 },
                        { "id": "p2-2", "title": "제2강 1장 전선 애자", "duration": "41분", "progress": 0 },
                        { "id": "p2-3", "title": "제3강 1장 애자 이도계산", "duration": "37분", "progress": 0 },
                        { "id": "p2-4", "title": "제4강 1장 off set 지중전선", "duration": "31분", "progress": 0 },
                        { "id": "p2-5", "title": "제5강 1장 문제풀이 2장 선로 정의 개요", "duration": "41분", "progress": 0 },
                    ]
                },
                {
                    "id": "part14",
                    "subject": "전력공학",
                    "step": "이론",
                    "title": "제2장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p2-6", "title": "제6강 2장 인덕턴스(L)", "duration": "40분", "progress": 0 },
                        { "id": "p2-7", "title": "제7강 2장 인덕턴스 문제풀이 - 정전용량", "duration": "38분", "progress": 0 },
                        { "id": "p2-8", "title": "제8강 2장 정전용량 문제풀이-코로나", "duration": "31분", "progress": 0 },
                    ]
                },
                {
                    "id": "part15",
                    "subject": "전력공학",
                    "step": "이론",
                    "title": "제3장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p2-9", "title": "제9강 3장 단거리 송전", "duration": "40분", "progress": 0 },
                        { "id": "p2-10", "title": "제10강 3장 단거리 문제풀이 - 중거리 송전", "duration": "35분", "progress": 0 },
                        { "id": "p2-11", "title": "제11강 3장 중거리 - 송전 용량", "duration": "43분", "progress": 0 },
                    ]
                },
                {
                    "id": "part16",
                    "subject": "전력공학",
                    "step": "이론",
                    "title": "제4장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p2-12", "title": "제12강 4장 안정도(1)", "duration": "39분", "progress": 0 },
                        { "id": "p2-13", "title": "제13강 4장 안정도(2)", "duration": "37분", "progress": 0 },
                        { "id": "p2-14", "title": "제14강 4장 안정도 문제풀이", "duration": "31분", "progress": 0 },
                    ]
                },
                {
                    "id": "part17",
                    "subject": "전력공학",
                    "step": "이론",
                    "title": "제5장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p2-15", "title": "제15강 5장 사고해석(단락관계)", "duration": "33분", "progress": 0 },
                        { "id": "p2-16", "title": "제16강 5장 대칭좌표법", "duration": "32분", "progress": 0 },
                    ]
                },
                {
                    "id": "part18",
                    "subject": "전력공학",
                    "step": "이론",
                    "title": "제6장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p2-17", "title": "제17강 6장 중성점 접지(개요, 비접지 방식)", "duration": "37분", "progress": 0 },
                        { "id": "p2-18", "title": "제18강 6장 중성점 접지(직접접지 소호리액터접지)", "duration": "40분", "progress": 0 },
                    ]
                },
                {
                    "id": "part19",
                    "subject": "전력공학",
                    "step": "이론",
                    "title": "제7장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p2-19", "title": "제19강 7장 이상전압", "duration": "37분", "progress": 0 },
                        { "id": "p2-20", "title": "제20강 7장 이상전압(L.A)", "duration": "36분", "progress": 0 },
                        { "id": "p2-21", "title": "제21강 7장 이상전압(L.A) 8장 유도장해", "duration": "32분", "progress": 0 },
                    ]
                },
                {
                    "id": "part20",
                    "subject": "전력공학",
                    "step": "이론",
                    "title": "제8장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p2-22", "title": "제22강 배전1장 수전설비(1)", "duration": "39분", "progress": 0 },
                        { "id": "p2-23", "title": "제23강 배전1장 수전설비(2)", "duration": "31분", "progress": 0 },
                        { "id": "p2-24", "title": "제24강 배전1장 수전설비 문제풀이 2장 변압기 용량", "duration": "37분", "progress": 0 },
                        { "id": "p2-25", "title": "제25강 배전2장 변압기 콘데서 용량", "duration": "41분", "progress": 0 },
                        { "id": "p2-26", "title": "제26강 배전2장 기타~배전3장 배전방식", "duration": "38분", "progress": 0 },
                        { "id": "p2-27", "title": "제27강 전3장 - 발전공학(수력)", "duration": "37분", "progress": 0 },
                        { "id": "p2-28", "title": "제28강 발전공학(수력) - 화력발전", "duration": "36분", "progress": 0 },
                        { "id": "p2-29", "title": "제29강 화력발전 - 원자력발전", "duration": "15분", "progress": 0 }
                    ]
                },
                {
                    "id": "part21",
                    "subject": "전력공학",
                    "step": "기출문제",
                    "title": "기출문제풀이",
                    "type": "strategy",
                    "courses": [
                        { "id": "p21-1", "title": "제1강 2020년 1,2회", "duration": "23분", "progress": 0 },
                        { "id": "p21-2", "title": "제2강 2020년 3회", "duration": "23분", "progress": 0 },
                        { "id": "p21-3", "title": "제3강 2020년 4회", "duration": "20분", "progress": 0 },
                        { "id": "p21-4", "title": "제4강 2021년 1회", "duration": "16분", "progress": 0 },
                        { "id": "p21-5", "title": "제5강 2021년 2회", "duration": "14분", "progress": 0 },
                        { "id": "p21-6", "title": "제6강 2021년 3회", "duration": "18분", "progress": 0 },
                        { "id": "p21-7", "title": "제7강 2022년 1회", "duration": "13분", "progress": 0 },
                        { "id": "p21-8", "title": "제8강 2022년 2회", "duration": "16분", "progress": 0 },
                        { "id": "p21-9", "title": "제9강 2022년 3회", "duration": "13분", "progress": 0 },
                        { "id": "p21-10", "title": "제10강 2023년 1회", "duration": "20분", "progress": 0 },
                        { "id": "p21-11", "title": "제11강 2023년 2회", "duration": "18분", "progress": 0 },
                        { "id": "p21-12", "title": "제12강 2023년 3회", "duration": "19분", "progress": 0 },
                        { "id": "p21-13", "title": "제13강 2024년 1회", "duration": "22분", "progress": 0 },
                        { "id": "p21-14", "title": "제14강 2024년 2회", "duration": "19분", "progress": 0 },
                        { "id": "p21-15", "title": "제15강 2024년 3회", "duration": "22분", "progress": 0 }
                    ]
                },
                {
                    "id": "part22",
                    "subject": "전기기기",
                    "step": "이론",
                    "title": "전기기기",
                    "type": "strategy",
                    "courses": [
                        { "id": "p3-1", "title": "제1강 기초이론 및 발전기 구조", "duration": "38분", "progress": 0 },
                        { "id": "p3-2", "title": "제2강 직류발전기 구조 및 원리", "duration": "35분", "progress": 0 },
                        { "id": "p3-3", "title": "제3강 직류발전기 유기기전력 및 전기자권선법", "duration": "37분", "progress": 0 },
                        { "id": "p3-4", "title": "제4강 전기자 반작용 및 정류", "duration": "37분", "progress": 0 },
                        { "id": "p3-5", "title": "제5강 정류 곡선, 직류 발전기 종류", "duration": "39분", "progress": 0 },
                        { "id": "p3-6", "title": "제6강 직류발전기 종류(자여자) 및 발전기 특성", "duration": "36분", "progress": 0 },
                        { "id": "p3-7", "title": "제7강 발전기특성과 전압변동률", "duration": "40분", "progress": 0 },
                        { "id": "p3-8", "title": "제8강 자여자 발전기 전압 황립조건 및 직류발전기 병렬 운전 조건", "duration": "36분", "progress": 0 },
                        { "id": "p3-9", "title": "제9강 직류전동기 원리와 직류전동기 역기전력과 출력", "duration": "34분", "progress": 0 },
                        { "id": "p3-10", "title": "제10강 직류전동기 속도 및 토크와 토크 특성", "duration": "42분", "progress": 0 },
                        { "id": "p3-11", "title": "제11강 직류전동기 운전 및 직류전동기 역회전", "duration": "37분", "progress": 0 },
                        { "id": "p3-12", "title": "제12강 손실 및 효율, 직류발전기 문제해설", "duration": "42분", "progress": 0 },
                        { "id": "p3-13", "title": "제13강 직류전동기 문제해설, 동기기", "duration": "39분", "progress": 0 },
                        { "id": "p3-14", "title": "제14강 동기발전기 구조와 전기자권선법(단점계수)", "duration": "39분", "progress": 0 },
                        { "id": "p3-15", "title": "제15강 전기자권선법(분포계수) 및 동기임피던스와 동기리액턴스의 관계 및 비돌극기 발전기 출력", "duration": "38분", "progress": 0 },
                        { "id": "p3-16", "title": "제16강 동기발전기 전기자반작용과 단락전류", "duration": "37분", "progress": 0 },
                        { "id": "p3-17", "title": "제17강 단락비, 병렬운전조건", "duration": "41분", "progress": 0 },
                        { "id": "p3-18", "title": "제18강 동기전동기, 동기기 문제해설", "duration": "39분", "progress": 0 },
                        { "id": "p3-19", "title": "제19강 동기기 문제해설, 변압기 구조", "duration": "40분", "progress": 0 },
                        { "id": "p3-20", "title": "제20강 변압기원리, 변압기 등가회로", "duration": "36분", "progress": 0 },
                        { "id": "p3-21", "title": "제21강 변압기환산등가회로, 주파수와 철손과의 관계, 전압변동률", "duration": "43분", "progress": 0 },
                        { "id": "p3-22", "title": "제22강 임피던스 전압, 변압기 효율", "duration": "42분", "progress": 0 },
                        { "id": "p3-23", "title": "제23강 변압기 3상결선, 변압기 병렬운전조건", "duration": "43분", "progress": 0 },
                        { "id": "p3-24", "title": "제24강 특수변압기, 변압기 문제해설(1~3)", "duration": "36분", "progress": 0 },
                        { "id": "p3-25", "title": "제25강 변압기 문제해설(4~33)", "duration": "38분", "progress": 0 },
                        { "id": "p3-26", "title": "제26강 변압기 문제해설(34~79)", "duration": "40분", "progress": 0 },
                        { "id": "p3-27", "title": "제27강 슬립, 유도전동기속도, 종류 및 구조", "duration": "38분", "progress": 0 },
                        { "id": "p3-28", "title": "제28강 회전시 2차주파수, 2차전압, 2차전류, 토크와 동기와트", "duration": "39분", "progress": 0 },
                        { "id": "p3-29", "title": "제29강 토크와 전압관계, 비례추이, 기동법, 속도제어", "duration": "44분", "progress": 0 },
                        { "id": "p3-30", "title": "제30강 원선도, 이상현상, 단상유도전동기, 유도전압조정기, 문제(1~13)", "duration": "43분", "progress": 0 },
                        { "id": "p3-31", "title": "제31강 유도전동기문제풀이(14~70), 정류기", "duration": "45분", "progress": 0 },
                        { "id": "p3-32", "title": "제32강 정류기, 정류기 문제풀이", "duration": "43분", "progress": 0 }
                    ]
                },
                {
                    "id": "part23",
                    "subject": "전기기기",
                    "step": "기출문제",
                    "title": "기출문제풀이",
                    "type": "strategy",
                    "courses": [
                        { "id": "p4-1", "title": "제1강 2020년 1,2회", "duration": "30분", "progress": 0 },
                        { "id": "p4-2", "title": "제2강 2020년 3회", "duration": "38분", "progress": 0 },
                        { "id": "p4-3", "title": "제3강 2020년 4회", "duration": "26분", "progress": 0 },
                        { "id": "p4-4", "title": "제4강 2021년 1회", "duration": "21분", "progress": 0 },
                        { "id": "p4-5", "title": "제5강 2021년 2회", "duration": "20분", "progress": 0 },
                        { "id": "p4-6", "title": "제6강 2021년 3회", "duration": "25분", "progress": 0 },
                        { "id": "p4-7", "title": "제7강 2022년 1회", "duration": "45분", "progress": 0 },
                        { "id": "p4-8", "title": "제8강 2022년 2회", "duration": "46분", "progress": 0 },
                        { "id": "p4-9", "title": "제9강 2022년 3회", "duration": "32분", "progress": 0 },
                        { "id": "p4-10", "title": "제10강 2023년 1회", "duration": "38분", "progress": 0 },
                        { "id": "p4-11", "title": "제11강 2023년 2회", "duration": "24분", "progress": 0 },
                        { "id": "p4-12", "title": "제12강 2023년 3회", "duration": "40분", "progress": 0 },
                        { "id": "p4-13", "title": "제13강 2024년 1회", "duration": "19분", "progress": 0 },
                        { "id": "p4-14", "title": "제14강 2024년 2회", "duration": "36분", "progress": 0 },
                        { "id": "p4-15", "title": "제15강 2024년 3회", "duration": "22분", "progress": 0 }
                    ]
                },
                {
                    "id": "part24",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제1장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-1", "title": "제1강 기초이론(전류 전압 저항 및 단위환산)", "duration": "35분", "progress": 0 },
                        { "id": "p5-2", "title": "제2강 저항의 직 병렬 접속 및 배율기와 분류기", "duration": "36분", "progress": 0 },
                        { "id": "p5-3", "title": "제3강 실전문제풀이(1-9번)", "duration": "37분", "progress": 0 },
                        { "id": "p5-4", "title": "제4강 실전문제풀이(10-12번)", "duration": "37분", "progress": 0 },
                        { "id": "p5-5", "title": "제5강 순시값 평균값 실효값 최대값의 구분", "duration": "36분", "progress": 0 },
                        { "id": "p5-6", "title": "제6강 실전문제풀이(13-25번)", "duration": "38분", "progress": 0 },
                        { "id": "p5-7", "title": "제7강 복소수 및 실전문제풀이(26-31번)", "duration": "35분", "progress": 0 },
                    ]
                },
                {
                    "id": "part25",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제2, 3장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-8", "title": "제8강 제2장 기본교류 회로(R L회로)", "duration": "36분", "progress": 0 },
                        { "id": "p5-9", "title": "제9강 C만의 회로 및 실전문제풀이(2-9번)", "duration": "35분", "progress": 0 },
                        { "id": "p5-10", "title": "제10강 RLC직렬 실전문제풀이(10-17번)", "duration": "41분", "progress": 0 },
                        { "id": "p5-11", "title": "제11강 RLC 병렬 실전문제풀이(18 -24번)", "duration": "36분", "progress": 0 },
                        { "id": "p5-12", "title": "제12강 실전문제풀이(25-40번) 직병렬 공진", "duration": "33분", "progress": 0 },
                        { "id": "p5-13", "title": "제13강 일반공진회로 문제풀이(34-37번) 교류전력(1) 실전문제(1-5번)", "duration": "38분", "progress": 0 },
                        { "id": "p5-14", "title": "제14강 교류전력(2) 최대전력 전송조건(6-13번)", "duration": "37분", "progress": 0 },
                        { "id": "p5-15", "title": "제15강 교류전력(3) 3전압계 3전류계(14-21번)", "duration": "34분", "progress": 0 },
                    ]
                },
                {
                    "id": "part26",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제4장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-16", "title": "제16강 4장 상호유도회로 및 실전문제(1-8번)", "duration": "37분", "progress": 0 },
                        { "id": "p5-17", "title": "제17강 상호유도회로 실전문제(9-15번)", "duration": "38분", "progress": 0 },
                    ]
                },
                {
                    "id": "part27",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제5, 6장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-18", "title": "제18강 5장 벡터궤적 및 6장 선형회로망 이론 설명", "duration": "36분", "progress": 0 },
                        { "id": "p5-19", "title": "제19강 6장 실전문제풀이(2-15반)", "duration": "38분", "progress": 0 },
                        { "id": "p5-20", "title": "제20강 실전문제풀이(16-27번)", "duration": "38분", "progress": 0 },
                    ]
                },
                {
                    "id": "part28",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제7장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-21", "title": "제21강 7장 다상교류(1-8번) Y △결선의 성질", "duration": "38분", "progress": 0 },
                        { "id": "p5-22", "title": "제22강 다상교류(2), n상전력 및 다상의 성질(7-12번)", "duration": "38분", "progress": 0 },
                        { "id": "p5-23", "title": "제23강 다상교류(3)(13-18번)", "duration": "39분", "progress": 0 },
                    ]
                },
                {
                    "id": "part29",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제8장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-24", "title": "제24강 다상교류(4)(19-27번) 2전력계 및 v결선, 8장 대칭좌표법 기초이론", "duration": "37분", "progress": 0 },
                        { "id": "p5-25", "title": "제25강 대칭좌표법(2)(1-11번)", "duration": "38분", "progress": 0 },
                        { "id": "p5-26", "title": "제26강 대칭좌표법(3)발전기 기본식 및 1선지락 풀이(12-15번)", "duration": "38분", "progress": 0 },
                    ]
                },
                {
                    "id": "part30",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제9장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-27", "title": "제27강 9장 비정현파 기초이론 비정현파의 대칭성 및 왜형률(7-21번)", "duration": "35분", "progress": 0 },
                        { "id": "p5-28", "title": "제28강 비정현파 실전문제풀이(18-28번)", "duration": "38분", "progress": 0 },
                    ]
                },
                {
                    "id": "part31",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제10장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-29", "title": "제29강 비정현파 실전문제풀이(29-32번, 10장 2단자회로망(구동점임피던스 및 영점,극점풀이)", "duration": "39분", "progress": 0 },
                    ]
                },
                {
                    "id": "part32",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제11장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-30", "title": "제30강 11장 카우어이론 정저항 쌍대회로설명 및 풀이 및 Z파라미터", "duration": "39분", "progress": 0 },
                        { "id": "p5-31", "title": "제31강 Y파라미터, 4단자정수의 이해(문제1-12번)", "duration": "36분", "progress": 0 },
                        { "id": "p5-32", "title": "제32강 실전문제풀이(12-24번), 영상임피던스의 이해", "duration": "38분", "progress": 0 },
                    ]
                },
                {
                    "id": "part33",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제12장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-33", "title": "제33강 실전문제풀이(25-34번), 12장 분포정수회로의 이해", "duration": "36분", "progress": 0 },
                        { "id": "p5-34", "title": "제34강 무손실, 무왜형 선로의 이해 및 실전문제풀이", "duration": "36분", "progress": 0 },
                    ]
                },
                {
                    "id": "part34",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제13장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-35", "title": "제35강 13장 라플라스의 성질 이해1(실전문제1-14번)", "duration": "37분", "progress": 0 },
                        { "id": "p5-36", "title": "제36강 라플라스 실전문제풀이(1)(15-21번)", "duration": "37분", "progress": 0 },
                        { "id": "p5-37", "title": "제37강 라플라스 실전문제풀이(2)(22-31번)", "duration": "32분", "progress": 0 },
                    ]
                },
                {
                    "id": "part35",
                    "subject": "회로이론",
                    "step": "이론",
                    "title": "제14장",
                    "type": "strategy",
                    "courses": [
                        { "id": "p5-38", "title": "제38강 14장 전달함수의 개요 및 풀이(1)(1-13번)", "duration": "37분", "progress": 0 },
                        { "id": "p5-39", "title": "제39강 전달함수(2)(블록선도)(14-20번) 및 제15장 R.L과도현상(1-6번)", "duration": "39분", "progress": 0 },
                        { "id": "p5-40", "title": "제40강 과도현상(2)(R.C 및 R.L.C)", "duration": "35분", "progress": 0 }
                    ]
                },
                {
                    "id": "part36",
                    "subject": "회로이론",
                    "step": "기출문제",
                    "title": "기출문제풀이",
                    "type": "strategy",
                    "courses": [
                        { "id": "p51-1", "title": "제1강 2020년 1,2회", "duration": "25분", "progress": 0 },
                        { "id": "p51-2", "title": "제2강 2020년 3회", "duration": "17분", "progress": 0 },
                        { "id": "p51-3", "title": "제3강 2020년 4회", "duration": "16분", "progress": 0 },
                        { "id": "p51-4", "title": "제4강 2021년 1회", "duration": "25분", "progress": 0 },
                        { "id": "p51-5", "title": "제5강 2021년 2회", "duration": "25분", "progress": 0 },
                        { "id": "p51-6", "title": "제6강 2021년 3회", "duration": "22분", "progress": 0 },
                        { "id": "p51-7", "title": "제7강 2022년 1회", "duration": "24분", "progress": 0 },
                        { "id": "p51-8", "title": "제8강 2022년 2회", "duration": "30분", "progress": 0 },
                        { "id": "p51-9", "title": "제9강 2022년 3회", "duration": "20분", "progress": 0 },
                        { "id": "p51-10", "title": "제10강 2023년 1회", "duration": "14분", "progress": 0 },
                        { "id": "p51-11", "title": "제11강 2023년 2회", "duration": "29분", "progress": 0 },
                        { "id": "p51-12", "title": "제12강 2023년 3회", "duration": "14분", "progress": 0 },
                        { "id": "p51-13", "title": "제13강 2024년 1회", "duration": "20분", "progress": 0 },
                        { "id": "p51-14", "title": "제14강 2024년 2회", "duration": "21분", "progress": 0 },
                        { "id": "p51-15", "title": "제15강 2024년 3회", "duration": "19분", "progress": 0 }
                    ]
                },
                {
                    "id": "part37",
                    "subject": "제어공학",
                    "step": "이론",
                    "title": "이론강의",
                    "type": "strategy",
                    "courses": [
                        { "id": "p6-1", "title": "제1강 제어공학계 개념", "duration": "40분", "progress": 0 },
                        { "id": "p6-2", "title": "제2강 문제풀이(1~30번)", "duration": "27분", "progress": 0 },
                        { "id": "p6-3", "title": "제3강 라플라스 변환", "duration": "33분", "progress": 0 },
                        { "id": "p6-4", "title": "제4강 문제풀이(1~23번)", "duration": "26분", "progress": 0 },
                        { "id": "p6-5", "title": "제5강 전달함수", "duration": "38분", "progress": 0 },
                        { "id": "p6-6", "title": "제6강 문제풀이(1~18번)", "duration": "35분", "progress": 0 },
                        { "id": "p6-7", "title": "제7강 블록선도와 신호흐름선도", "duration": "33분", "progress": 0 },
                        { "id": "p6-8", "title": "제8강 문제풀이(1~15번)", "duration": "31분", "progress": 0 },
                        { "id": "p6-9", "title": "제9강 문제풀이(16~32번)", "duration": "34분", "progress": 0 },
                        { "id": "p6-10", "title": "제10강 과도응답", "duration": "33분", "progress": 0 },
                        { "id": "p6-11", "title": "제11강 문제풀이(1~23번)", "duration": "32분", "progress": 0 },
                        { "id": "p6-12", "title": "제12강 편차와 감도 및 문제풀이", "duration": "28분", "progress": 0 },
                        { "id": "p6-13", "title": "제13강 주파수 응답", "duration": "33분", "progress": 0 },
                        { "id": "p6-14", "title": "제14강 문제풀이 1~28번", "duration": "42분", "progress": 0 },
                        { "id": "p6-15", "title": "제15강 선형 제어계통의 안정도", "duration": "31분", "progress": 0 },
                        { "id": "p6-16", "title": "제16강 문제풀이 1~17번", "duration": "31분", "progress": 0 },
                        { "id": "p6-17", "title": "제17강 문제풀이 18~39번", "duration": "42분", "progress": 0 },
                        { "id": "p6-18", "title": "제18강 근궤적법 ~ 문제풀이 1~19번", "duration": "41분", "progress": 0 },
                        { "id": "p6-19", "title": "제19강 상태방정식", "duration": "34분", "progress": 0 },
                        { "id": "p6-20", "title": "제20강 문제풀이1~20번", "duration": "39분", "progress": 0 },
                        { "id": "p6-21", "title": "제21강 문제풀이21~42번", "duration": "35분", "progress": 0 },
                        { "id": "p6-22", "title": "제22강 시퀀스제어", "duration": "31분", "progress": 0 },
                        { "id": "p6-23", "title": "제23강 문제풀이1~24번", "duration": "36분", "progress": 0 },
                        { "id": "p6-24", "title": "제24강 제어기기", "duration": "26분", "progress": 0 }
                    ]
                },
                {
                    "id": "part38",
                    "subject": "제어공학",
                    "step": "기출문제",
                    "title": "기출문제풀이",
                    "type": "strategy",
                    "courses": [
                        { "id": "p7-1", "title": "제1강 2020년 1,2회", "duration": "23분", "progress": 0 },
                        { "id": "p7-2", "title": "제2강 2020년 3회", "duration": "19분", "progress": 0 },
                        { "id": "p7-3", "title": "제3강 2020년 4회", "duration": "21분", "progress": 0 },
                        { "id": "p7-4", "title": "제4강 2021년 1회", "duration": "16분", "progress": 0 },
                        { "id": "p7-5", "title": "제5강 2021년 2회", "duration": "14분", "progress": 0 },
                        { "id": "p7-6", "title": "제6강 2021년 3회", "duration": "14분", "progress": 0 },
                        { "id": "p7-7", "title": "제7강 2022년 1, 2회", "duration": "37분", "progress": 0 },
                        { "id": "p7-8", "title": "제8강 2022년 3회", "duration": "20분", "progress": 0 },
                        { "id": "p7-9", "title": "제9강 2023년 1회", "duration": "26분", "progress": 0 },
                        { "id": "p7-10", "title": "제10강 2023년 2회", "duration": "16분", "progress": 0 },
                        { "id": "p7-11", "title": "제11강 2023년 3회", "duration": "21분", "progress": 0 },
                        { "id": "p7-12", "title": "제12강 2024년 1회", "duration": "18분", "progress": 0 },
                        { "id": "p7-13", "title": "제13강 2024년 2회", "duration": "17분", "progress": 0 },
                        { "id": "p7-14", "title": "제14강 2024년 3회", "duration": "19분", "progress": 0 }
                    ]
                },
                {
                    "id": "part39",
                    "subject": "전기설비기술기준",
                    "step": "이론",
                    "title": "Part1",
                    "type": "strategy",
                    "courses": [
                        { "id": "p8-1", "title": "제1강 Part1 1장 총칙~3장 전선", "duration": "26분", "progress": 0 },
                        { "id": "p8-2", "title": "제2강 Part1 4장 전로의 절연~문제풀이", "duration": "27분", "progress": 0 },
                        { "id": "p8-3", "title": "제3강 Part1 5장 접지시스템", "duration": "32분", "progress": 0 },
                        { "id": "p8-4", "title": "제4강 Part1 5장 접지시스템~6장 피뢰시스템", "duration": "31분", "progress": 0 },
                        { "id": "p8-5", "title": "제5강 Part1 6장 피뢰시스템~문제풀이", "duration": "26분", "progress": 0 },
                    ]
                },
                {
                    "id": "part40",
                    "subject": "전기설비기술기준",
                    "step": "이론",
                    "title": "Part2",
                    "type": "strategy",
                    "courses": [
                        { "id": "p8-6", "title": "제6강 Part2 1장 접지설비~2장 기계기구시설", "duration": "30분", "progress": 0 },
                        { "id": "p8-7", "title": "제7강 Part2 2장 기계기구시설", "duration": "30분", "progress": 0 },
                        { "id": "p8-8", "title": "제8강 Part2 문제풀이", "duration": "17분", "progress": 0 },
                    ]
                },
                {
                    "id": "part41",
                    "subject": "전기설비기술기준",
                    "step": "이론",
                    "title": "Part3",
                    "type": "strategy",
                    "courses": [
                        { "id": "p8-9", "title": "제9강 Part3 1장 전선로(승탑 및 승주 방지~보호망시설)", "duration": "27분", "progress": 0 },
                        { "id": "p8-10", "title": "제10강 Part3 1장 전선로(가공케이블시설~공용설치)", "duration": "27분", "progress": 0 },
                        { "id": "p8-11", "title": "제11강 Part3 1장 전선로(지지물 간 거리~가공전선과 전선 접근 또는 교차)", "duration": "24분", "progress": 0 },
                        { "id": "p8-12", "title": "제12강 Part3 문제풀이", "duration": "32분", "progress": 0 },
                        { "id": "p8-13", "title": "제13강 Part3 1장 전선로(400kV 이상 특고압~ 25kV이하 가공전선시설)", "duration": "26분", "progress": 0 },
                        { "id": "p8-14", "title": "제14강 part3 2장 특수장소의시설~3장전력보안통신설비", "duration": "30분", "progress": 0 },
                        { "id": "p8-15", "title": "제15강 part3 문제풀이", "duration": "19분", "progress": 0 },
                    ]
                },
                {
                    "id": "part42",
                    "subject": "전기설비기술기준",
                    "step": "이론",
                    "title": "Part4",
                    "type": "strategy",
                    "courses": [
                        { "id": "p8-16", "title": "제16강 part4 1장 통칙~2장 안전보호(과전류에 대한 보호)", "duration": "36분", "progress": 0 },
                        { "id": "p8-17", "title": "제17강 part4 과도전압에 보호~문제풀이", "duration": "21분", "progress": 0 },
                        { "id": "p8-18", "title": "제18강 part4 3장 저압옥내배선(공통사항~배선설비의선정과외부영향)", "duration": "32분", "progress": 0 },
                        { "id": "p8-19", "title": "제19강 part4 3장(등기구 시설~직류전기설비)(204페이지 누락내용은 20강에서 보강)", "duration": "29분", "progress": 0 },
                        { "id": "p8-20", "title": "제20강 part4 문제풀이(19강 누락내용 보충)", "duration": "34분", "progress": 0 },
                    ]
                },
                {
                    "id": "part43",
                    "subject": "전기설비기술기준",
                    "step": "이론",
                    "title": "Part5, 6",
                    "type": "strategy",
                    "courses": [
                        { "id": "p8-21", "title": "제21강 part5 전기철도", "duration": "38분", "progress": 0 },
                        { "id": "p8-22", "title": "제22강 part6 분산형 전원", "duration": "22분", "progress": 0 }
                    ]
                },
                {
                    "id": "part44",
                    "subject": "전기설비기술기준",
                    "step": "기출문제",
                    "title": "기출문제풀이",
                    "type": "strategy",
                    "courses": [
                        { "id": "p9-1", "title": "제1강 2020년 1,2회", "duration": "24분", "progress": 0 },
                        { "id": "p9-2", "title": "제2강 2021년 1,2,3회", "duration": "40분", "progress": 0 },
                        { "id": "p9-3", "title": "제3강 2022년 1,2,3회", "duration": "33분", "progress": 0 },
                        { "id": "p9-4", "title": "제4강 2023년 1회", "duration": "14분", "progress": 0 },
                        { "id": "p9-5", "title": "제5강 2023년 2회", "duration": "18분", "progress": 0 },
                        { "id": "p9-6", "title": "제6강 2023년 3회", "duration": "23분", "progress": 0 },
                        { "id": "p9-7", "title": "제7강 2024년 1회", "duration": "19분", "progress": 0 },
                        { "id": "p9-8", "title": "제8강 2024년 2회", "duration": "14분", "progress": 0 },
                        { "id": "p9-9", "title": "제9강 2024년 3회", "duration": "12분", "progress": 0 }
                    ]
                }
        ];
/* =========================
   전기기사/다중시험 학습관리 시스템 - script.js (최종)
   - 과목/단계/장/강의 CRUD
   - 단계 추가는 모달
   - 강의 삭제는 × 버튼(겹침 방지 CSS 연동)
   - 타이틀 클릭 수정 + localStorage 저장
========================= */

(() => {
  // ---------- DOM ----------
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitleEl = document.getElementById('modalTitle');
  const modalBodyEl  = document.getElementById('modalBody');

  const subjectButtonsContainer = document.querySelector('.subject-buttons');
  const stepButtonsContainer = document.querySelector('.study-step-button1');
  const sectionListEl = document.getElementById('sectionList');
  const courseListEl = document.getElementById('courseList');

  const overallProgressEl = document.getElementById('overallProgress');
  const completedCoursesEl = document.getElementById('completedCourses');
  const studyTimeEl = document.getElementById('studyTime');

  const openAddSectionBtn = document.getElementById('openAddSectionBtn');
  const openAddCourseBtn = document.getElementById('openAddCourseBtn');

  // ---------- Storage Keys ----------
  const KEY_STUDY = 'studyData';
  const KEY_PROGRESS = 'courseProgress';
  const KEY_SEL_SUBJECT = 'selectedSubject';
  const KEY_SEL_STEP = 'selectedStep';
  const KEY_SEL_SECTION = 'selectedSection';
  const KEY_STEPS = 'availableSteps';
  const KEY_TITLE = 'appTitle';

  // ---------- State ----------
  let studyData = loadJSON(KEY_STUDY, []);
  let courseProgress = loadJSON(KEY_PROGRESS, {});
  let selectedSubject = localStorage.getItem(KEY_SEL_SUBJECT) || null;
  let selectedStep = localStorage.getItem(KEY_SEL_STEP) || null;
  let selectedSection = localStorage.getItem(KEY_SEL_SECTION) || null;

  // ---------- Bootstrap (if empty) ----------
  if (!Array.isArray(studyData) || studyData.length === 0) {
    // 최소 샘플(빈 상태도 정상 동작하도록)
    studyData = [
      { id: 'part-' + Date.now(), subject: '전기기사', step: '이론', title: '1장', type: 'custom', courses: [] },
    ];
    saveJSON(KEY_STUDY, studyData);
  }

  // subjects / steps default selection
  const subjects = getSubjects();
  if (!selectedSubject || !subjects.includes(selectedSubject)) selectedSubject = subjects[0] || null;

  const steps = getAvailableStepsFromStorageOrData();
  if (!selectedStep || !steps.includes(selectedStep)) selectedStep = steps[0] || null;

  // selectedSection 유효성 검사 (현재 필터에 존재하는 섹션인지)
  if (selectedSection && !getCurrentStudyData().some(s => s.id === selectedSection)) {
    selectedSection = null;
    localStorage.removeItem(KEY_SEL_SECTION);
  }

  // ---------- Modal ----------
  function showModal(type) {
    modalOverlay.dataset.type = type;
    modalOverlay.style.display = 'flex';

    if (type === 'section') {
      modalTitleEl.textContent = '장 추가';
      modalBodyEl.innerHTML = `
        <input id="modalSectionTitle" placeholder="장 제목 예: 2장, 회로이론(1)" />
      `;
      setTimeout(() => document.getElementById('modalSectionTitle')?.focus(), 0);

    } else if (type === 'course') {
      modalTitleEl.textContent = '강의 추가';
      modalBodyEl.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:10px;">
          <input id="modalCourseTitle" placeholder="강의 제목" />
          <input id="modalCourseDuration" placeholder="시간 (예: 38분, 1h 10m)" />
        </div>
      `;
      setTimeout(() => document.getElementById('modalCourseTitle')?.focus(), 0);

    } else if (type === 'subject') {
      modalTitleEl.textContent = '과목 추가';
      modalBodyEl.innerHTML = `
        <input id="modalSubjectName" placeholder="과목 이름 예: 건축사, 전기기사, 정보처리기사" />
      `;
      setTimeout(() => document.getElementById('modalSubjectName')?.focus(), 0);

    } else if (type === 'step') {
      modalTitleEl.textContent = '단계 추가';
      modalBodyEl.innerHTML = `
        <input id="modalStepName" placeholder="단계 이름 예: 이론/기출/오답/모의고사" />
      `;
      setTimeout(() => document.getElementById('modalStepName')?.focus(), 0);
    }
  }

  function closeModal() {
    modalOverlay.style.display = 'none';
    modalOverlay.dataset.type = '';
    modalTitleEl.textContent = '';
    modalBodyEl.innerHTML = '';
  }

  // ---------- Title Editable ----------
  function initEditableTitle() {
    const el = document.getElementById('appTitle');
    if (!el) return;

    const saved = localStorage.getItem(KEY_TITLE);
    if (saved) el.textContent = saved;

    el.style.cursor = 'text';

    el.addEventListener('click', () => {
      if (el.dataset.editing === '1') return;
      el.dataset.editing = '1';

      const input = document.createElement('input');
      input.type = 'text';
      input.value = el.textContent.trim();
      input.style.cssText = [
        'font-size:24px',
        'font-weight:800',
        'width:100%',
        'max-width:720px',
        'padding:6px 10px',
        'border-radius:8px',
        'border:1px solid #ddd',
        'outline:none'
      ].join(';');

      el.replaceWith(input);
      input.focus();
      input.select();

      const commit = () => {
        const v = input.value.trim() || '학습 관리 시스템';
        localStorage.setItem(KEY_TITLE, v);

        const h1 = document.createElement('h1');
        h1.id = 'appTitle';
        h1.textContent = v;

        input.replaceWith(h1);
        setTimeout(initEditableTitle, 0);
      };

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') commit();
        if (e.key === 'Escape') commit();
      });
      input.addEventListener('blur', commit);
    }, { once: true }); // 교체 후 재바인딩
  }

  // ---------- Render Helpers ----------
  function getSubjects() {
    return Array.from(new Set(studyData.map(s => s.subject))).filter(Boolean);
  }

  function getAvailableStepsFromStorageOrData() {
    const saved = localStorage.getItem(KEY_STEPS);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      } catch (_) {}
    }
    return Array.from(new Set(studyData.map(s => s.step))).filter(Boolean);
  }

  function getCurrentStudyData() {
    // 현재 선택된 과목 + 단계 기준으로 섹션 필터
    return studyData.filter(s => {
      const okSub = !selectedSubject || s.subject === selectedSubject;
      const okStep = !selectedStep || s.step === selectedStep;
      return okSub && okStep;
    });
  }

  function renderSubjectButtons() {
    if (!subjectButtonsContainer) return;
    const subs = getSubjects();

    subjectButtonsContainer.innerHTML = subs.map(sub => `
      <button data-subject="${escapeHtml(sub)}" class="${selectedSubject === sub ? 'active' : ''}" style="position:relative;padding-right:22px;">
        ${escapeHtml(sub)}
        <span class="del-sub" data-sub="${escapeHtml(sub)}" style="position:absolute;right:6px;top:50%;transform:translateY(-50%);color:#e11d48;cursor:pointer;font-size:12px;">✖</span>
      </button>
    `).join('');

    // 과목 추가 버튼(한 번만 삽입)
    const parent = subjectButtonsContainer.parentNode;
    if (parent && !parent.querySelector('#openAddSubjectBtn')) {
      const wrap = document.createElement('div');
      wrap.style = 'display:flex;gap:8px;margin-top:8px;align-items:center;';
      wrap.innerHTML = `<button id="openAddSubjectBtn" class="btn btn-primary" type="button">과목 추가</button>`;
      parent.insertBefore(wrap, subjectButtonsContainer.nextSibling);

      wrap.querySelector('#openAddSubjectBtn').addEventListener('click', () => showModal('subject'));
    }
  }

  function renderStepButtons() {
    if (!stepButtonsContainer) return;
    const steps = getAvailableStepsFromStorageOrData();

    stepButtonsContainer.innerHTML = steps.map(st => `
      <button data-step="${escapeHtml(st)}" class="${selectedStep === st ? 'active' : ''}" style="position:relative;padding-right:22px;">
        ${escapeHtml(st)}
        <span class="del-step" data-step="${escapeHtml(st)}" style="position:absolute;right:6px;top:50%;transform:translateY(-50%);color:#e11d48;cursor:pointer;font-size:12px;">✖</span>
      </button>
    `).join('');

    // 단계 추가 버튼(한 번만 삽입)
    const parent = stepButtonsContainer.parentNode;
    if (parent && !parent.querySelector('#openAddStepBtn')) {
      const wrap = document.createElement('div');
      wrap.style = 'display:flex;gap:8px;margin-top:8px;align-items:center;';
      wrap.innerHTML = `<button id="openAddStepBtn" class="btn btn-success" type="button">단계 추가</button>`;
      parent.insertBefore(wrap, stepButtonsContainer.nextSibling);

      wrap.querySelector('#openAddStepBtn').addEventListener('click', () => showModal('step'));
    }
  }

  function renderSidebar() {
    if (!sectionListEl) return;
    const current = getCurrentStudyData();

    if (current.length === 0) {
      sectionListEl.innerHTML = `<p style="color:#888;margin:0;">자료가 없습니다.</p>`;
      return;
    }

    sectionListEl.innerHTML = current.map(sec => {
      const active = selectedSection === sec.id ? 'active' : '';
      return `
        <button class="section-btn ${active}" data-id="${sec.id}" type="button">
          <span class="section-title">${escapeHtml(sec.title)}</span>
          <span class="del-section" data-id="${sec.id}" title="삭제">✖</span>
        </button>
      `;
    }).join('');
  }

  function renderCourses() {
    if (!courseListEl) return;

    const currentSections = getCurrentStudyData();
    const sec = selectedSection
      ? currentSections.find(s => s.id === selectedSection)
      : currentSections[0];

    // 선택 섹션 자동 보정
    if (sec && selectedSection !== sec.id) {
      selectedSection = sec.id;
      localStorage.setItem(KEY_SEL_SECTION, selectedSection);
      renderSidebar();
    }

    if (!sec) {
      courseListEl.innerHTML = `<p style="color:#888;">장(섹션)을 선택하세요.</p>`;
      return;
    }

    if (!Array.isArray(sec.courses) || sec.courses.length === 0) {
      courseListEl.innerHTML = `<p style="color:#888;">강의가 없습니다.</p>`;
      return;
    }

    courseListEl.innerHTML = sec.courses.map((c, i) => {
      const prog = (courseProgress[c.id] ?? c.progress ?? 0);
      const completedClass = prog === 100 ? 'completed' : '';

      return `
        <div class="course ${completedClass}" data-id="${c.id}">
          <div class="course-header">
            <div class="course-left">
              <div class="checkbox ${prog===100 ? 'checked' : ''}" data-id="${c.id}">${prog===100 ? '✓' : ''}</div>
              <strong>${i + 1}. ${escapeHtml(c.title)}</strong>
            </div>
            <div class="course-right">
              <span class="course-duration">${escapeHtml(c.duration || '0분')}</span>
              <button class="del-course" data-id="${c.id}" title="삭제" type="button">×</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderStats() {
    // ✅ 전체 강의 기준 집계(요구사항 유지)
    let totalCourses = 0, completedCourses = 0, totalMin = 0, completedMin = 0;

    studyData.forEach(sec => {
      (sec.courses || []).forEach(c => {
        totalCourses++;
        const durMin = parseTimeToMinutes(c.duration);
        totalMin += durMin;

        const prog = (courseProgress[c.id] ?? c.progress ?? 0);
        if (prog === 100) completedCourses++;
        completedMin += durMin * (prog / 100);
      });
    });

    const overall = totalCourses ? Math.round((completedCourses / totalCourses) * 100) : 0;
    overallProgressEl.textContent = overall + "%";
    completedCoursesEl.textContent = `${completedCourses} / ${totalCourses}`;

    const totalH = Math.floor(totalMin / 60);
    const doneH = Math.floor(completedMin / 60);
    studyTimeEl.textContent = `${doneH}h / ${totalH}h`;
  }

  function renderAll() {
    renderSubjectButtons();
    renderStepButtons();
    renderSidebar();
    renderCourses();
    renderStats();
  }

  // ---------- Events: top buttons ----------
  openAddSectionBtn?.addEventListener('click', () => showModal('section'));
  openAddCourseBtn?.addEventListener('click', () => {
    if (!selectedSection) {
      alert('장(섹션)을 먼저 선택하세요.');
      return;
    }
    showModal('course');
  });

  // ---------- Events: delegated modal confirm/cancel ----------
  document.body.addEventListener('click', (e) => {
    // Cancel
    if (e.target && e.target.id === 'modalCancel') {
      closeModal();
      return;
    }

    // Confirm
    if (e.target && e.target.id === 'modalConfirm') {
      const type = modalOverlay.dataset.type;

      if (type === 'section') {
        const title = document.getElementById('modalSectionTitle')?.value.trim() || '';
        if (!title) return alert('장 제목을 입력하세요.');

        const newId = 'part-' + Date.now();
        const subj = selectedSubject || (studyData[0] && studyData[0].subject) || '미정';
        const step = selectedStep || '이론';

        studyData.push({ id: newId, subject: subj, step, title, type: 'custom', courses: [] });
        saveJSON(KEY_STUDY, studyData);

        selectedSection = newId;
        localStorage.setItem(KEY_SEL_SECTION, selectedSection);

        renderAll();
        closeModal();
        return;
      }

      if (type === 'course') {
        if (!selectedSection) { closeModal(); return alert('장(섹션)을 먼저 선택하세요.'); }

        const title = document.getElementById('modalCourseTitle')?.value.trim() || '';
        const durationRaw = document.getElementById('modalCourseDuration')?.value.trim() || '0분';
        if (!title) return alert('강의 제목을 입력하세요.');

        const sec = studyData.find(s => s.id === selectedSection);
        if (!sec) return alert('선택된 장을 찾을 수 없습니다.');

        const newId = `${selectedSection}-c-${Date.now()}`;
        sec.courses = sec.courses || [];
        sec.courses.push({ id: newId, title, duration: normalizeDuration(durationRaw), progress: 0 });

        saveJSON(KEY_STUDY, studyData);
        renderAll();
        closeModal();
        return;
      }

      if (type === 'subject') {
        const name = document.getElementById('modalSubjectName')?.value.trim() || '';
        if (!name) return alert('과목 이름을 입력하세요.');

        const existing = getSubjects();
        if (existing.includes(name)) return alert('이미 존재하는 과목입니다.');

        // 과목을 추가할 때 기본 섹션 1개 생성
        const baseId = 'part-' + Date.now();
        studyData.push({ id: baseId, subject: name, step: '이론', title: '1장', type: 'custom', courses: [] });
        saveJSON(KEY_STUDY, studyData);

        selectedSubject = name;
        localStorage.setItem(KEY_SEL_SUBJECT, selectedSubject);

        selectedStep = '이론';
        localStorage.setItem(KEY_SEL_STEP, selectedStep);

        selectedSection = baseId;
        localStorage.setItem(KEY_SEL_SECTION, selectedSection);

        // 단계 목록에도 '이론' 포함 보정
        const steps = getAvailableStepsFromStorageOrData();
        if (!steps.includes('이론')) {
          steps.push('이론');
          saveJSON(KEY_STEPS, steps);
        }

        renderAll();
        closeModal();
        return;
      }

      if (type === 'step') {
        const name = (document.getElementById('modalStepName')?.value || '').trim();
        if (!name) return alert('단계 이름을 입력하세요.');

        let steps = loadJSON(KEY_STEPS, []);
        if (!Array.isArray(steps)) steps = [];

        if (steps.includes(name)) return alert('이미 존재하는 단계입니다.');
        steps.push(name);
        saveJSON(KEY_STEPS, steps);

        selectedStep = name;
        localStorage.setItem(KEY_SEL_STEP, selectedStep);

        selectedSection = null;
        localStorage.removeItem(KEY_SEL_SECTION);

        renderAll();
        closeModal();
        return;
      }

      closeModal();
      return;
    }
  });

  // ---------- Events: subject buttons ----------
  subjectButtonsContainer?.addEventListener('click', (e) => {
    // delete subject
    if (e.target.classList.contains('del-sub') || e.target.closest('.del-sub')) {
      const sub = e.target.dataset.sub || e.target.closest('.del-sub')?.dataset.sub;
      if (!sub) return;
      if (!confirm(`${sub} 과목을 삭제하시겠습니까?`)) return;

      // 과목 삭제: 해당 subject 섹션 전체 삭제
      studyData = studyData.filter(sec => sec.subject !== sub);
      saveJSON(KEY_STUDY, studyData);

      // 선택값 보정
      const subs = getSubjects();
      selectedSubject = subs[0] || null;
      localStorage.setItem(KEY_SEL_SUBJECT, selectedSubject || '');

      const steps = getAvailableStepsFromStorageOrData();
      selectedStep = steps[0] || null;
      localStorage.setItem(KEY_SEL_STEP, selectedStep || '');

      selectedSection = null;
      localStorage.removeItem(KEY_SEL_SECTION);

      renderAll();
      return;
    }

    const btn = e.target.closest('button');
    if (!btn || !subjectButtonsContainer.contains(btn)) return;

    selectedSubject = btn.dataset.subject || btn.textContent.trim();
    localStorage.setItem(KEY_SEL_SUBJECT, selectedSubject);

    selectedSection = null;
    localStorage.removeItem(KEY_SEL_SECTION);

    renderAll();
  });

  // ---------- Events: step buttons ----------
  stepButtonsContainer?.addEventListener('click', (e) => {
    // delete step
    if (e.target.classList.contains('del-step') || e.target.closest('.del-step')) {
      const st = e.target.dataset.step || e.target.closest('.del-step')?.dataset.step;
      if (!st) return;
      if (!confirm(`${st} 단계를 삭제하시겠습니까?`)) return;

      let steps = loadJSON(KEY_STEPS, []);
      if (!Array.isArray(steps) || steps.length === 0) steps = getAvailableStepsFromStorageOrData();

      steps = steps.filter(x => x !== st);
      saveJSON(KEY_STEPS, steps);

      // 선택 단계 보정
      if (selectedStep === st) {
        selectedStep = steps[0] || null;
        localStorage.setItem(KEY_SEL_STEP, selectedStep || '');
      }

      selectedSection = null;
      localStorage.removeItem(KEY_SEL_SECTION);

      renderAll();
      return;
    }

    const btn = e.target.closest('button');
    if (!btn || !stepButtonsContainer.contains(btn)) return;

    selectedStep = btn.dataset.step || btn.textContent.trim();
    localStorage.setItem(KEY_SEL_STEP, selectedStep);

    selectedSection = null;
    localStorage.removeItem(KEY_SEL_SECTION);

    renderAll();
  });

  // ---------- Events: section list ----------
  sectionListEl?.addEventListener('click', (e) => {
    // delete section
    if (e.target.classList.contains('del-section') || e.target.closest('.del-section')) {
      const id = e.target.dataset.id || e.target.closest('.del-section')?.dataset.id;
      if (!id) return;
      if (!confirm('해당 장을 삭제하시겠습니까?')) return;

      studyData = studyData.filter(s => s.id !== id);
      saveJSON(KEY_STUDY, studyData);

      if (selectedSection === id) {
        selectedSection = null;
        localStorage.removeItem(KEY_SEL_SECTION);
      }

      renderAll();
      return;
    }

    // select section
    const btn = e.target.closest('.section-btn');
    if (!btn || !sectionListEl.contains(btn)) return;

    selectedSection = btn.dataset.id;
    localStorage.setItem(KEY_SEL_SECTION, selectedSection);

    renderAll();
  });

  // ---------- Events: course list ----------
  courseListEl?.addEventListener('click', (e) => {
    // toggle checkbox
    if (e.target.classList.contains('checkbox')) {
      const courseId = e.target.dataset.id;
      const prog = courseProgress[courseId] ?? 0;
      courseProgress[courseId] = (prog === 100 ? 0 : 100);
      saveJSON(KEY_PROGRESS, courseProgress);
      renderAll();
      return;
    }

    // delete course
    if (e.target.classList.contains('del-course') || e.target.closest('.del-course')) {
      const id = e.target.dataset.id || e.target.closest('.del-course')?.dataset.id;
      if (!id) return;
      if (!confirm('해당 강의를 삭제하시겠습니까?')) return;

      const sec = studyData.find(s => s.id === selectedSection);
      if (!sec) return;

      sec.courses = (sec.courses || []).filter(c => c.id !== id);
      saveJSON(KEY_STUDY, studyData);

      // 진행률도 정리
      if (courseProgress[id] != null) {
        delete courseProgress[id];
        saveJSON(KEY_PROGRESS, courseProgress);
      }

      renderAll();
      return;
    }
  });

  // ---------- Init ----------
  renderAll();
  initEditableTitle();

  // ---------- Utils ----------
  function loadJSON(key, fallback) {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    try { return JSON.parse(raw); } catch (_) { return fallback; }
  }

  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function parseTimeToMinutes(text) {
    if (!text) return 0;
    const s = String(text).trim().toLowerCase();

    // 예: "38분"
    const m1 = s.match(/(\d+)\s*분/);
    // 예: "1h 10m", "1h", "70m"
    const h = (s.match(/(\d+)\s*h/) ? parseInt(s.match(/(\d+)\s*h/)[1], 10) : 0);
    const m = (s.match(/(\d+)\s*m/) ? parseInt(s.match(/(\d+)\s*m/)[1], 10) : 0);

    if (h || m) return h * 60 + m;
    if (m1) return parseInt(m1[1], 10);

    // 숫자만 있으면 분으로 해석
    const onlyNum = s.match(/^(\d+)$/);
    if (onlyNum) return parseInt(onlyNum[1], 10);

    return 0;
  }

  function normalizeDuration(input) {
    const s = String(input || '').trim();
    if (!s) return '0분';

    // "38" => "38분"
    if (/^\d+$/.test(s)) return `${s}분`;

    // "70m" => "70m" 유지 / "1h 10m" 유지
    if (/[hm]/i.test(s)) return s;

    // "38분" => 그대로
    if (/분/.test(s)) return s;

    return s;
  }

  function escapeHtml(str) {
    return String(str ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }
})();
