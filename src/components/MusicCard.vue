<template>
  <div class="card-music">
    <img :src="currentSong.image" alt="">
    <div class="music-info">
      <h3 class="title-music">{{ currentSong.title }}</h3>
      <div class="son-info">
        <p class="artist-name">{{ currentSong.artist }}</p>
        <p>・</p>
        <p class="album-name">{{ currentSong.album }}</p>
      </div>
      <div class="action-son">
        <a href="#" @click.prevent="prevSong"><img src="/icon-all/befort.svg" alt=""></a>
        <a href="#" @click.prevent="togglePlay"><img :src="isPlaying ? './icon-all/play.svg' : './icon-all/pause.svg'" alt=""></a>
        <a href="#" @click.prevent="nextSong"><img src="/icon-all/skip.svg" alt=""></a>
        <a href="#" @click.prevent="mute"><img :src="isMuted ? './icon-all/volume-mute.svg' : './icon-all/volume.svg'" alt=""></a>
      </div>
      <div class="status-son">
        <div class="progress-track" @click="seek($event)">
          <div class="progress-bar" :style="{ width: progress + '%' }"></div>
        </div>
        <p class="time-son">{{ currentTime }} / {{ duration }}</p>
      </div>
      <audio ref="audio" :src="currentSong.audio" @timeupdate="updateTime" @loadedmetadata="setDuration" @ended="nextSong"></audio>
    </div>
  </div>
</template>


<style scoped>

.time-son {
  font-family: 'Satoshi-Bold';
  font-weight: 700;
  font-size: 14px;
  color: var(--primary-color-text);
}

.progress-track {
  width: calc(100% - 90px);
  height: 6px;
  background: var(--secondary-color);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
}
.progress-bar {
  height: 100%;
  background: var(--primary-color-text);
  border-radius: 4px;
  transition: width 0.2s;
  width: 0%;
  position: absolute;
  left: 0;
  top: 0;
}

.status-son {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding-right: 10px;
}

.action-son img {
  width: 20px;
  height: 20px;
}

.action-son a {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  border-radius: 100%;
}

.action-son {
  display: flex;
  align-items: center;
  gap: 8px;
}

.album-name {
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  font-size: 14px;
}

.artist-name {
  font-family: 'Satoshi-Bold';
  font-weight: 700;
  font-size: 14px;
  text-decoration: underline;
}

.son-info {
  display: flex;
  align-items: center;
  gap: 4px;
}

.title-music {
  font-family: 'Satoshi-Black';
  font-weight: 900;
  font-size: 24px;
}

.music-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--primary-color-text);
  gap: 6px;
  width: 100%;
}

.card-music img {
  height: 100%;
  border-radius: 4px;
}

.card-music {
  width: 480px;
  height: 168px;
  background-color: var(--primary-color-background);
  border-radius: var(--padding-8px);
  border: 4px solid var(--primary-color-background);
  overflow: hidden;
  position: relative;
  display: flex;
  gap: 10px;
}
</style>


<script setup>
import { ref, computed } from 'vue';



const songs = [
  {
    title: 'Océan',
    artist: 'So La Lune',
    album: 'Wilma',
    image: './music/Océan.png',
    audio: './music/So La Lune - Océan.mp4',
  },
  {
    title: 'Tate McRae',
    artist: 'Just Keep Watching',
    album: 'F1 The Album',
    image: './music/Just Keep Watching.png',
    audio: './music/Tate McRae - Just Keep Watching.mp4',
  },
  // Ajoute d'autres sons ici
];

const currentIndex = ref(0);
const currentSong = computed(() => songs[currentIndex.value]);
const isPlaying = ref(false);
const isMuted = ref(false);
const currentTime = ref('0:00');
const duration = ref('0:00');
const audio = ref(null);
const progress = ref(0);

function updateTime() {
  if (!audio.value) return;
  currentTime.value = formatTime(audio.value.currentTime);
  if (audio.value.duration) {
    progress.value = (audio.value.currentTime / audio.value.duration) * 100;
  } else {
    progress.value = 0;
  }
}

function seek(event) {
  if (!audio.value) return;
  const track = event.currentTarget;
  const rect = track.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const percent = clickX / rect.width;
  audio.value.currentTime = percent * audio.value.duration;
}

function nextSong() {
  currentIndex.value = (currentIndex.value + 1) % songs.length;
  resetAudio();
}

function prevSong() {
  currentIndex.value = (currentIndex.value - 1 + songs.length) % songs.length;
  resetAudio();
}

function resetAudio() {
  isPlaying.value = false;
  isMuted.value = false;
  currentTime.value = '0:00';
  duration.value = '0:00';
  progress.value = 0;
  if (audio.value) {
    audio.value.pause();
    audio.value.currentTime = 0;
    audio.value.load();
  }
}

function togglePlay() {
  if (!audio.value) return;
  if (audio.value.paused) {
    audio.value.play();
    isPlaying.value = true;
  } else {
    audio.value.pause();
    isPlaying.value = false;
  }
}



function setDuration() {
  if (!audio.value) return;
  duration.value = formatTime(audio.value.duration);
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}


// La fonction skip n'est plus utilisée, remplacée par nextSong/prevSong

function mute() {
  if (!audio.value) return;
  audio.value.muted = !audio.value.muted;
  isMuted.value = audio.value.muted;
}
</script>
