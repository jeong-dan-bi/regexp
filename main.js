const str = `
010-1234-5678
thececond@gmail.com
https://www.omdbapi.com/?apikey=4a27f4b6&s=frozen
The quick brown fox jump over the lazy dog.
abbcccdddd
table
http://localhost:1234/
동해물과 백두산이 마르고 닳도옥 하느님이 보우하사 우리나라 만세
`

//생성자 함수 형식
//const reg  = new RegExp ('the', 'gi')
//console.log(str.match(reg))

//리터럴 방식
//const reg = /the/gi
//console.log(str.match(reg))

//문자열 대체 jump => HAPPY
const reg = /jump/gi
console.log(reg.test(str))
strResult = str.replace(reg, 'HAPPY')
console.log(strResult)

//----------패턴 1
console.log('----패턴 1----')
//t로 시작하는 부분 찾기
//주의사항! 문자열 앞에 공백이 있으면 실행 안됨
//g만 입력하면 null, m추가해서,대소문자 구분안하고 출력하고 싶으면 i
console.log(
    str.match(/^t/gim)
)

//d로 끝나는 부분 찾기
console.log(
    str.match(/d$/gm)
)

//. 임의의 한 문자와 일치
console.log(
    str.match(/./g)
)
//he로 끝나는 부분 찾기
console.log(
    str.match(/.he/g)
)
//h로 시작하고 s로 끝나는 부분 찾기
console.log(
    str.match(/h...s/g)
)

//fox와 dog를 |로 찾기
console.log(
    str.match(/fox | dog/g)
)

//http, https를 ?로 찾기
console.log(
    str.match(/https?/g)
)


//----------패턴 2
console.log('----패턴 2----')

//d가 2개인 연속 일치 여부
console.log(
    str.match(/d{2}/g)
)

//d가 2개 이상 4개 이하
console.log(
    str.match(/d{2,4}/g)
)


//----------패턴 3
console.log('----패턴 3----')

//[abc] : a 또는 b 또는 c 각각의 단어
//fox
console.log(
    str.match(/[fox]/g)
)

//0에서 9까지의 1개 이상의 연속된 데이터를 찾기
console.log(
    str.match(/[0-9]{1,}/g)
)

//가-힣 까지 3개 이상의 연속된 데이터를 찾기
console.log(
    str.match(/[가-힣]{3,}/g)
)


//----------패턴 4
console.log('----패턴 4----')

//영어 대소문자, 숫자, _까지 모든 문자 찾기
console.log(
    str.match(/\w/g)
)

//문자의 경계 모두 출력 : 공백, 특수문자
console.log(
    str.match(/\b/g)
)
//경계활용해서 f로 시작 1개 이상의 문자 찾기
console.log(
    str.match(/\bf\w{1,}\b/g)
)

//모든 공백 찾기
console.log(
    str.match(/\s/g)
)
//공백 활용 => 공백을 찾아서 없애기!
const h = `  the hello world    !`
console.log(
    h.replace(/\s/g, '')
)


//----------패턴 5
console.log('----패턴 5----')

//앞쪽 일치
console.log(
    str.match(/.{1,}(?=@)/g)
)

//뒤쪽 일치
console.log(
    str.match(/(?<=@).{1,}/g)
)