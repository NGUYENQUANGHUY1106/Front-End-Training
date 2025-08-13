/**
 * render songs
 * scroll top
 * play /pause/seek
 * cd rotate
 * Next/prev
 * random
 * next / repeat when ended
 * active song
 * scroll active song into view
 * play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'F8_PLAYER';

const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const player = $(".player");
const progress = $("#progress");
const btnNext = $(".btn-next");
const btnPrev = $(".btn-prev");
const btnRandom = $(".btn-random");
const btnRepeat = $(".btn-repeat");
const playList = $(".playlist");

const app = {
  currentIndex: 0,
  isPlay: false,
  isRandom: false,
  isRepeat: false,
  config : JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
  songs:
   [

    {
      name: "Dù cho tận thế",
      singer: "Erik",
      path: "./audio/duchotanthe.mp3",
      image: "./image/img-1.jpg",
    },
    {
      name: "Qua cầu rước em ",
      singer: "Danh Ka",
      path: "./audio/quacauruocem.mp3",
      image: "./image/img-2.jpg",
    },
    {
      name: "Phim ba người ",
      singer: "Thái Học ",
      path: "./audio/phimbanguoi.mp3",
      image: "./image/img-3.jpg",
    },
  
    
  ],
  setConfig: function(key, value)
  {
     this.config[key] = value;
     localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));

  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `

      <div class="song ${index === this.currentIndex ? "active" : ''}" data-index = "${index}">
      <div class="thumb" style="background-image: url('${song.image}')">
      </div>
      <div class="body">
        <h3 class="title">${song.name}</h3>
        <p class="author">${song.singer}</p>
      </div>
      <div class="option">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
      `;
    });
    playList.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    // xử lý phóng to thu nhỏ cd
    cdWidth = cd.offsetWidth;

    // xử lý CD quay / dừng
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, //10s
      iterations: Infinity,
    });
    cdThumbAnimate.pause();
    
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop) {
        const newCdWidth = cdWidth - scrollTop;
        // console.log(newCdWidth);

        cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
        cd.style.opacity = newCdWidth / cdWidth;
      }
    };
    // xử lý khi play
    (playBtn.onclick = function () {
      if (_this.isPlay) {
        _this.isPlay = false;
        player.classList.remove("playing");
        cdThumbAnimate.pause();
        audio.pause();
      } else {
        _this.isPlay = true;
        player.classList.add("playing");
        audio.play();
        cdThumbAnimate.play();
      }
    }),
      // khi tiến độ bài hát thay đỗi
      (audio.ontimeupdate = function () {
        if (audio.duration) {
          const progressCurrent = Math.floor(
            (audio.currentTime / audio.duration) * 100
          );
          progress.value = progressCurrent;
        }
      });
    // tua bài hát xử lý khi tua
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
      // console.log(audio.duration / 100 * e.target.value);
    };

    // khi next
    btnNext.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
        player.classList.add("playing");
        cdThumbAnimate.play();
      } else {
        _this.nextSong();
        player.classList.add("playing");
        cdThumbAnimate.play();
      }
      _this.render();
      audio.play();
      _this.scrollActiveSong();
    };
    btnPrev.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
        player.classList.add("playing");
        cdThumbAnimate.play();
      } else {
        _this.prevSong();
        player.classList.add("playing");
        cdThumbAnimate.play();
      }
      _this.render();
      audio.play();
      _this.scrollActiveSong();
    };

    // random bài hát / khi random
    btnRandom.onclick = function () {
      _this.isRandom = !_this.isRandom;
      _this.setConfig('isRandom', _this.isRandom)

      btnRandom.classList.toggle("active", _this.isRandom);
    };

    // khi bài hát kết thúc sẽ phát lại bài hát
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        btnNext.click();
      }
    };
    // xử lý phát lại bài hát khi kết thúc
    btnRepeat.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig('isRepeat' , _this.isRepeat);
      btnRepeat.classList.toggle("active", _this.isRepeat);
    };

    // Lắng nghe hành vi click vào playlist
    playList.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");
      const optionNode = e.target.closest(".option");

      if (songNode || optionNode) {
       // xử lý click vào song  
       if(songNode)
       {
        //  console.log(songNode.getAttribute('data-index'));
        // current lúc nãy là số mà dataset lấy ra là chuổi nên convert sáng Number
        console.log(songNode.dataset.index);
        _this.currentIndex = Number(songNode.dataset.index) ;
        _this.loadCurrentSong();
        _this.render();
        audio.play();
        player.classList.add("playing");
        cdThumbAnimate.play();
       }

       // xử lý khi click vào opitions
       if(optionNode)
       {

       }
      }
    };
  },
  // khi bài hát được play
  loadCurrentSong: function () {
    const heading = $("header h2");
    const cdThumb = $(".cd-thumb");
    const audio = $("#audio");

    //  console.log(heading,cdThumb,audio);

    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  
  loadConfig : function()
  {
      this.isRandom = this.config.isRandom ;
      this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex <= 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);
    {
      this.currentIndex = newIndex;
      this.loadCurrentSong();
    }
  },

  scrollActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 300);
  },
  start: function () {
    // gán cấu hình từ config vào object;
    this.loadConfig();
    // định nghĩa các thuộc tính cho object
    this.defineProperties();
    // lắng nghe và xử  lý các sự kiện
    this.handleEvents();
    // hiển thị bài hát đầu tiên
    this.loadCurrentSong();
    // hiển thị danh sách bài hát
    this.render();
    // hiển thị trạng thái ban đầu của btn 
    btnRepeat.classList.toggle("active", this.isRepeat);
    btnRandom.classList.toggle("active", this.isRandom);

  },
};

app.start();
