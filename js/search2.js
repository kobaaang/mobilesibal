window.addEventListener('DOMContentLoaded', function() {
   // 로컬 스토리지에서 저장된 책 데이터 가져오기
   var bookData = JSON.parse(localStorage.getItem('bookData'));

   if (bookData) {
      // 기존 콘텐츠 초기화
      const contentWrap = document.querySelector('.content_wrap');
      contentWrap.innerHTML = '';

      // 마지막에 추가된 책 데이터 가져오기
      const latestBook = bookData[bookData.length - 1];

      // 콘텐츠 추가
      const content = document.createElement('div');
      content.className = 'content1';
      content.innerHTML = `
         <a href="./search2.html">
            <div class="img">
               <img class="thumbnail" src="${latestBook.thumbnail}">
            </div>
            <h1 class="title">${latestBook.title}</h1>
            <p class="txt">${latestBook.authors} (${latestBook.publisher})</p>
         </a>
      `;

      contentWrap.appendChild(content);

      const contents = document.querySelector('.section2_3 .contents');
      contents.textContent = latestBook.contents;

      const publisher = document.querySelector('.section2_2 .publisher');
      publisher.textContent = latestBook.publisher;

      const datetime = document.querySelector('.section2_2 .datetime');
      datetime.textContent = latestBook.datetime;

      const price = document.querySelector('.price');
      price.textContent = latestBook.price;

      // .later 요소를 클릭했을 때 실행될 이벤트 핸들러
      var laterLink = document.querySelector('.later a');
      laterLink.addEventListener('click', function(event) {
         event.preventDefault();

         // 로컬 스토리지에서 저장된 laterBookData 가져오기
         var laterBookData = JSON.parse(localStorage.getItem('laterBookData'));

         // 새로운 데이터를 추가할 경우
         if (laterBookData) {
            laterBookData.push(latestBook);
         } else {
            laterBookData = [latestBook];
         }

         // 로컬 스토리지에 데이터 저장
         localStorage.setItem('laterBookData', JSON.stringify(laterBookData));
      });

      // .now 요소를 클릭했을 때 실행될 이벤트 핸들러
      var nowLink = document.querySelector('.now a');
      nowLink.addEventListener('click', function(event) {
         event.preventDefault();

         // 로컬 스토리지에서 현재 nowBookData 가져오기
         var nowBookData = JSON.parse(localStorage.getItem('nowBookData'));

         // 새로운 데이터를 추가할 경우
         if (nowBookData) {
            nowBookData.push(latestBook);
         } else {
            nowBookData = [latestBook];
         }

         // 로컬 스토리지에 데이터 저장
         localStorage.setItem('nowBookData', JSON.stringify(nowBookData));
      });

      // .finish 요소를 클릭했을 때 실행될 이벤트 핸들러
      var finishLink = document.querySelector('.finish a');
      finishLink.addEventListener('click', function(event) {
         event.preventDefault();

         // 로컬 스토리지에서 저장된 finishBookData 가져오기
         var finishBookData = JSON.parse(localStorage.getItem('finishBookData'));

         // 새로운 데이터를 추가할 경우
         if (finishBookData) {
            finishBookData.push(latestBook);
         } else {
            finishBookData = [latestBook];
         }

         // 로컬 스토리지에 데이터 저장
         localStorage.setItem('finishBookData', JSON.stringify(finishBookData));
      });
   }
});
