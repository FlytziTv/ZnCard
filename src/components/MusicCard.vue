<template>
  <div class="card-music">
    <img src="/music/Océan.png" alt="">
    <div class="music-info">
      <h3 class="title-music">Océan</h3>
      <div class="son-info">
        <p class="artist-name">So La Lune</p>
        <p>・</p>
        <p class="album-name">Wilma</p>
      </div>
      <div class="action-son">
        <a href="#"><img src="../../icon-all/befort.svg" alt=""></a>
        <a href="#"><img src="../../icon-all/play.svg" alt=""></a>
        <a href="#"><img src="../../icon-all/skip.svg" alt=""></a>
        <a href="#"><img src="../../icon-all/volume.svg" alt=""></a>
      </div>
      <div class="status-son">
        <div class="fake-bar"></div>
        <p class="time-son">0:00 / 0:00</p>
      </div>
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

.fake-bar {
  flex: 1;
  height: 5px;
  background-color: var(--secondary-color);
  border-radius: 4px;
}

.status-son {
  display: flex;
  align-items: center;
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
