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

// 이벤트 리스너 추가
document.addEventListener("DOMContentLoaded", function() {
    // 페이지 로딩 시 실행할 초기 코드 추가...

    // 초기 슬라이드 표시
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentSlide].style.display = "block";
});
