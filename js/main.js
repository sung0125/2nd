
// 드롭다운 메뉴가 있는 요소
var dropdown = document.querySelector('.dropdown');

// 클릭 이벤트를 추가하여 메뉴가 토글
dropdown.addEventListener('click', function(event) {
    var dropdownContent = this.querySelector('.dropdown-content');
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

// 문서의 다른 부분을 클릭했을 때 메뉴가 사라지도록 
document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = 'none';
    }
});

