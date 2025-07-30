<template>
  <div class="card-profil">
    <div class="top-menu">
      <a href="#" @click.prevent="$emit('menu-click')">
        <img :src="menuOuvert ? '/icon-all/X.svg' : '/icon-all/menu.svg'" alt="">
      </a>
      <div class="banner-profil"></div>
    </div>
    <div class="profil">
      <div class="icon-profil">
        <img class="icon_user" src="/card/pp.png" alt="Icon Profil" />
        <img class="icon_activity" src="/card/activity.png" alt="Icon Activité" />
      </div>

      <div class="infos-user">
        <div class="name-icon">
          <H1>FlytziTv</H1>
          <div class="user-icon">
            <img src="/icon-all/verif.svg" alt="">
            <img src="/icon-all/shield.svg" alt="">
          </div>
        </div>
        <div class="tag-profil">
          <TagUsers imageSrc="/icon-all/loc.svg" titleImg="" :text="$t('position')" />
          <hr>
          <TagUsers imageSrc="/icon-all/pc.svg" titleImg="" :text="$t('metier')" />
        </div>
        <p>{{ $t('description_profile') }}</p>

        <div class="social-group">
          <IconSocial
            linkSrc="paypal.me/aalexisin"
            imageSrc="/icon-social/paypal.svg"
            titleImg="paypal"
          />
          <IconSocial
            linkSrc="https://www.linkedin.com/in/alexis-inacio/"
            imageSrc="/icon-social/linkedin.svg"
            titleImg="linkedin"
          />
          <IconSocial
            linkSrc="mailto:alexis.inacio78@gmail.com"
            imageSrc="/icon-social/envelope.svg"
            titleImg="mail"
          />
          <IconSocial
            linkSrc="mailto:alexis.inacio78@gmail.com"
            imageSrc="/icon-social/envelope.svg"
            titleImg="mail"
          />
          <IconSocial
            linkSrc="https://www.tiktok.com/@aalexis.in"
            imageSrc="/icon-social/tiktok.svg"
            titleImg="tiktok"
          />
          <IconSocial
            linkSrc="https://www.youtube.com/@Flytzi_"
            imageSrc="/icon-social/youtube.svg"
            titleImg="youtube"
          />
          <IconSocial
            linkSrc="https://www.twitch.tv/flytzitv"
            imageSrc="/icon-social/twitch.svg"
            titleImg="twitch"
          />
          <IconSocial
            linkSrc="https://discord.gg/Mft5EbRBEr"
            imageSrc="/icon-social/discord.svg"
            titleImg="discord"
          />
          <IconSocial
            linkSrc="https://github.com/FlytziTv"
            imageSrc="/icon-social/github.svg"
            titleImg="github"
          />
          <IconSocial
            linkSrc="https://www.behance.net/Flytzi"
            imageSrc="/icon-social/behance.svg"
            titleImg="behance"
          />
          <IconSocial
            linkSrc="https://open.spotify.com/user/c5wpio54wdje7bnxbeo9kxzcp"
            imageSrc="/icon-social/spotify.svg"
            titleImg="spotify"
          />
        </div>

      </div>


    </div>

  </div>
</template>


<style scoped>
.social-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.infos-user {
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  font-size: 14px;
}

.tag-profil hr {
  /* margin: 4px 0; */
  border-radius: 20px;
  width: 1px;
  background-color: var(--primary-color-text);
  height: 10px;
  border: none;
}

.tag-profil {
  display: flex;
  align-items: center;
  gap: 8px;
}

.user-icon img {
  width: 20px;
  height: 20px;
}

.user-icon {
  display: flex;
  gap: 4px;
  align-items: center;
}

.name-icon H1 {
  font-family: 'Satoshi-BlackItalic';
  font-size: 24px;
  font-weight: 900;
  color: var(--primary-color-text);
}

.name-icon {
  display: flex;
  gap: 10px;
  align-items: center;
}

.infos-user {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 80px 20px 0 20px;
}

.icon_activity {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 4px solid var(--primary-color-background);
  position: absolute;
  bottom: 4px;
  right: 7px;
}

.icon_user {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  border: 4px solid var(--primary-color-background);
}

.icon-profil {
  width: 128px;
  height: 128px;
  top: 120px;
  left: 20px;
  position: absolute;
}


.banner-profil {
  background-image: url('/card/banner.png');
  background-size: cover;
  background-position: center;
  border-radius: 6px 6px 0 0;
  width: 100%;
  height: 180px;
}

.top-menu img {
  width: 16px;
  height: 16px;
}

.top-menu a {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 14px;
  right: 14px;
  border: 1px solid var(--secondary-color);
  border-radius: 50%;
  width: 26px;
  height: 26px;
  cursor: pointer;
}

.top-menu {
  position: relative;
  width: 100%;
  height: 180px;
}

.card-profil {
  width: 480px;
  height: 573px;
  background-color: var(--primary-color-background);
  border-radius: var(--padding-8px);
  border: 4px solid var(--primary-color-background);
  overflow: hidden;
  position: relative;
}
</style>

<script>
import TagUsers from './profil/TagUsers.vue';
import IconSocial from './profil/IconSocial.vue';

export default {
  components: {
    TagUsers,
    IconSocial
  },
  props: {
    menuOuvert: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeLanguage() {
      // Changer entre les langues 'fr', 'en', et 'pt'
      const newLang = this.$i18n.locale === 'fr'
        ? 'en'
        : this.$i18n.locale === 'en'
        ? 'pt'
        : 'fr';

      // Mettre à jour la langue dans l'application
      this.$i18n.locale = newLang;

      // Enregistrer la langue dans le localStorage
      localStorage.setItem('lang', newLang);
    },
  },
};
</script>
