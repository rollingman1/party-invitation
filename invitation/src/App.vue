<template>
  <div class="container">
    <div class="keg">
      <span class="handle"></span>
      <span class="pipe"></span>
    </div>
    <div class="glass">
      <span class="beer"></span>
    </div>
    <div class="letter">
        <span class="text">
            <h1> 안녕하세요👋 </h1>
            <h2> 2021 연말 파티에 초대합니다 </h2>
            <div class="content">
              <p>
                  장소 : <a href="http://naver.me/xAtVAcaA" style="color:white">무디살롱</a><br/>
                  날짜 : 2021년 12월 4일<br/>
                  시간 : 18시 30분 ~ 23시 00분 <br/>
                  참가비 : 2만원 <br/>
                  드레스코드 : 블랙이나 레드나 각자 멋진 옷 입고오기 <br/>
              </p>
              <p>
                  연락주세요 📞 <a href="tel:01094728260" style="color:white">01094728260</a>
              </p>
            </div>
            
        </span>
    </div>
  </div>
</template>

<style>
/* @import url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRALEAP.woff2'); */
/* @font-face {
  font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff');
    font-weight: normal;
    font-style: normal;
} */
@import url('https://cdn.rawgit.com/moonspam/NanumSquare/master/nanumsquare.css');

@font-face {
    font-family: 'KOTRALEAP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRALEAP.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MaruBuri-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

body {
  margin: 0;
  height: 500vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(
      lightslategray 300px,
      #333 300px
  );
  overflow: hidden;
  font-family: 'KOTRALEAP';
  /* src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/KOTRALEAP.woff2') format('woff2');
  font-weight: normal;
  font-style: normal; */
  /* font-family: 'NanumSquare', sans-serif; */
}

.content {
  font-family: 'NanumSquare';
  line-height: 30px;
}


.container {
    width: 700px;
    height: 300px;
    position: relative;
}

.container *::before,
.container *::after {
    content: '';
    position: absolute;
}

.keg {
    position: absolute;
    width: 90px;
    height: 200px;
    background: linear-gradient(
        to right,
        #777 70px,
        #555 70px
    );
    bottom: 0;
    left: 310px;
}

.keg .pipe {
    position: absolute;
    width: 10px;
    height: 40px;
    background-color: #ccc;
    top: 33px;
    left: 10px;
}

.keg .pipe::before {
    width: 40px;
    height: 20px;
    background: 
        radial-gradient(
            circle at 10px 10px,
            #eee 7px,
            #ccc 7px, #ccc 10px,
            transparent 10px
        ),
        linear-gradient(
            #ccc 50%,
            #999 50%
        );
    border-radius: 10px;
    top: -2px;
    left: -5px;
}

.keg .pipe::after {
    width: 10px;
    background-color: rgba(255, 206, 84, 0.5);
    animation: flow 5s infinite;
}

@keyframes flow {
    0%, 15% {
        top: 40px;
        height: 0;
    }

    20% {
        height: 115px;
    }

    40% {
        height: 75px;
    }

    55% {
        top: 40px;
        height: 50px;
    }

    60%, 100% {
        top: 80px;
        height: 0;
    }
}

.keg .handle {
    position: absolute;
    border-style: solid;
    border-width: 50px 10px 0 10px;
    border-color: black transparent transparent transparent;
    top: -10px;
    left: 5px;
    transform-origin: center 50px;
    animation: handle 5s infinite;
}

@keyframes handle {
    10%, 60% {
        transform: rotate(0deg);
    }

    20%, 50% {
        transform: rotate(-90deg);
    }
}

.keg .handle::before {
    width: 20px;
    height: 10px;
    background-color: #ccc;
    top: -60px;
    left: -10px;
    border-radius: 5px 5px 0 0;
}

.keg .handle::after {
    width: 10px;
    height: 20px;
    background-color: #ccc;
    top: -20px;
    left: -5px;
}

.glass {
    position: absolute;
    width: 70px;
    height: 100px;
    color: rgba(255, 255, 255, 0.3);
    background-color: currentColor;
    bottom: 0;
    border-radius: 5px;
    animation: slide 5s ease infinite;
}

@keyframes slide {
    0% {
        left: 0;
        filter: opacity(0);
    }

    20%, 80% {
        left: 300px;
        filter: opacity(1);
    }

    100% {
        left: 600px;
        filter: opacity(0);
    }
}

.glass::before {
    width: 50px;
    height: 40px;
    border: 10px solid;
    top: 20px;
    right: -20px;
    border-radius: 0 40% 40% 0;
    clip-path: inset(0 0 0 72%);
}

.beer {
    position: absolute;
    width: 60px;
    background-color: rgba(255, 206, 84, 0.8);
    bottom: 15px;
    left: 5px;
    border-radius: 0 0 5px 5px;
    border-top: solid rgba(255, 206, 84, 0.8);
    animation: fillup 5s infinite;
}

@keyframes fillup {
    0%, 20% {
        height: 0px;
        border-width: 0px;
    }

    40% {
        height: 40px;
    }

    80%, 100% {
        height: 80px;
        border-width: 5px;
    }
}

.beer::before {
    width: inherit;
    background-color: #eee;
    border-radius: 5px 5px 0 0;
    animation: 
        wave 0.5s infinite alternate,
        fillup-foam 5s linear infinite;
}

@keyframes fillup-foam {
    0%, 20% {
        top: 0;
        height: 0;
    }

    60%, 100% {
        top: -15px;
        height: 15px;
    }
}

@keyframes wave {
    from {
        transform: skewY(-3deg);
    }

    to {
        transform: skewY(3deg);
    }
}

.letter {
    width: 97%;
    position: absolute;
    bottom: -110%;
    text-align: center;
}

.text {
    color:#eee;;
}

</style>
