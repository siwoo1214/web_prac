
const para = document.querySelector("p"); /*텍스트 단락을 선택*/

para.addEventListener("click", updateName); /*이벤트 수신기를 첨부*/

function updateName() {    /*사용자가 단락을 클릭하면 코드블럭 실행*/
    const name = prompt("Enter a new name");
    para.textContent = `Player 1: ${name}`;
}

document.addEventListener("DOMContentLoaded", () => {
    function createAnoElement() {
        const anoElement = document.createElement("div"); // 새로운 div 요소 생성
        anoElement.textContent = "I am an 'ano' element!";
        anoElement.classList.add("ano"); // "ano" 클래스를 추가
        document.body.appendChild(anoElement); // 문서 본문에 추가
    }

    const buttons = document.querySelectorAll("button");

    for (const button of buttons) {
        button.addEventListener("click", (event) => {
            if (event.target.textContent.includes("추가 버튼")) { // 버튼 클릭 시 체크
                createAnoElement(); // ano 클래스가 있는 요소 생성
            } else {
                createParagraph(); // 기존 기능 유지
            }
        });
    }
});
