// 타임라인 인터랙티브
function showEraDetails(era) {
    var eraDetails = document.getElementById(era);
    if (eraDetails.style.display === "none") {
        eraDetails.style.display = "block";
    } else {
        eraDetails.style.display = "none";
    }
}

// 사진 갤러리 슬라이드쇼
var currentSlide = 0;
function changeSlide(direction) {
    var slides = document.getElementsByClassName("slide");
    slides[currentSlide].style.display = "none";
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0; // 처음으로 돌아간다
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1; // 마지막 슬라이드로 이동
    }

    slides[currentSlide].style.display = "block"; // 새로운 현재 슬라이드를 보여준다
}

// 사진 갤러리 범위 표시
function showGalleryRange(start, end) {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (var i = start; i <= end; i++) {
        slides[i].style.display = "block";
    }
}

// 페이지 로딩 시 실행할 초기 코드 추가
document.addEventListener("DOMContentLoaded", function() {
    // 초기 슬라이드 표시
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide]..style.display = "block";
});

// 스크롤 애니메이션
window.onscroll = function() {
    var sections = document.getElementsByTagName('section');
    for (var i = 0; i < sections.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = sections[i].getBoundingClientRect().top;
        var elementVisible = 150; // 픽셀 단위

        if (elementTop < windowHeight - elementVisible) {
            sections[i].classList.add("active");
        } else {
            sections[i].classList.remove("active");
        }
    }
};

// 동적 데이터 로드
function loadMoreData() {
    // AJAX 요청 혹은 다른 방식으로 데이터 로드 구현
    console.log("추가 데이터 로드");
    // 데이터 처리 및 표시 로직 구현
}

// 윈도우 리사이즈 이벤트 핸들링
window.onresize = function(event) {
    // 리사이즈 시 실행할 코드
    console.log("윈도우 크기가 변경되었습니다.");
};
