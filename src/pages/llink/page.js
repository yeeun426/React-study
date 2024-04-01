import "./style.css";

export default function page() {
  
  return (
<script type="text/javascript">
    var dropSwiper = new Swiper('#dropSwiper', {
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar', // 스크롤바를 나타낼 요소의 CSS 선택자
      },
    });
</script>
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{ backgroundColor: "red" }}>
            1
          </div>
          <div className="swiper-slide" style={{ backgroundColor: "blue" }}>
            2
          </div>
        </div>
      </div>
    </div>
  );
}
