<template>
  <a class="icon-social" :class="platformClass" :href="linkSrc" target="_blank" rel="noopener noreferrer">
    <img :src="imageSrc" :alt="titleImg" >
  </a>
</template>

<style scoped>
.icon-social {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
}

.icon-social img {
  width: 18px;
  height: 18px;
}


.mail-hover:hover {
  background-color: var(--social-mail-color);
}

.spotify-hover:hover {
  background-color: var(--social-spotify-color);
}

.linkedin-hover:hover {
  background-color: var(--social-linkedin-color);
}

.dribbble-hover:hover {
  background-color: var(--social-dribbble-color);
}

.behance-hover:hover {
  background-color: var(--social-behance-color);
}

.youtube-hover:hover {
  background-color: var(--social-youtube-color);
}

.instagram-hover:hover {
  background-color: var(--social-instagram-color);
}

.facebook-hover:hover {
  background-color: var(--social-facebook-color);
}

.tiktok-hover:hover {
  background-color: var(--social-tiktok-color);
}

.discord-hover:hover {
  background-color: var(--social-discord-color);
}

.twitter-hover:hover {
  background-color: var(--social-twitter-color);
}

.telegram-hover:hover {
  background-color: var(--social-telegram-color);
}

.whatsapp-hover:hover {
  background-color: var(--social-whatsapp-color);
}

.gitlab-hover:hover {
  background-color: var(--social-gitlab-color);
}

.github-hover:hover {
  background-color: var(--social-github-color);
}

.twitch-hover:hover {
  background-color: var(--social-twitch-color);
}

.snapchat-hover:hover {
  background-color: var(--social-snapchat-color);
}

.soundcloud-hover:hover {
  background-color: var(--social-soundcloud-color);
}

.paypal-hover:hover {
  background-color: var(--social-paypal-color);
}

.default-hover:hover {
  background-color: gray; /* ou ce que tu veux comme couleur par défaut */
}

</style>

<script>
export default {
  props: {
    linkSrc: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    titleImg: {
      type: String,
      required: true
    }
  },
  computed: {
    platformClass() {
      const available = [
        'mail', 'spotify', 'linkedin', 'dribbble', 'behance', 'youtube', 'instagram',
        'facebook', 'tiktok', 'discord', 'twitter', 'telegram', 'whatsapp',
        'gitlab', 'github', 'twitch', 'snapchat', 'soundcloud', 'paypal'
      ];
      const lower = this.titleImg.toLowerCase();
      return available.includes(lower) ? `${lower}-hover` : 'default-hover';
    }
  }
}
</script>
