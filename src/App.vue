<template>
  <div class="parametre">
    <a
      v-for="lang in langs"
      :key="lang.code"
      @click="changeLanguage(lang.code)"
      :class="{ 'active-lang': proxy.$i18n.locale === lang.code }"
    >
      {{ $t(lang.label) }}
    </a>
  </div>

  <div class="all-cards">
    <div class="first-card">
      <ProfilCard @menu-click="handleMenuClick" :menuOuvert="showTest" />
      <MusicCard />
    </div>
    <transition name="fade">
      <PrincipalCard v-if="showTest" />
    </transition>
  </div>
</template>


<style scoped>

.active-lang {
  color: red;
  font-weight: bold;
}

.parametre a {
  background-color: var(--color-nav);
  padding: 6px 0;
  width: 90px;
  border-radius: 4px;
  font-family: 'Satoshi-Regular';
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
}

.parametre {
  display: flex;
  gap: 10px;
  padding: 4px;
  position: absolute;
  background-color: var(--color-nav);
  bottom: 10px;
  left: calc(50% - 149px);
  border-radius: 6px;
}

.parametre a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.parametre img {
  width: 20px;
  height: 20px;
}


.first-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.all-cards {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  height: 100vh;
}
</style>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import ProfilCard from './components/ProfilCard.vue';
import MusicCard from './components/MusicCard.vue';
import PrincipalCard from './components/PrincipalCard.vue';

const showTest = ref(false);

function handleMenuClick() {
  showTest.value = !showTest.value;
}

// Accès à $i18n via l'instance courante
const { proxy } = getCurrentInstance();

const langs = [
  { code: 'fr', label: 'francais' },
  { code: 'en', label: 'anglais' },
  { code: 'pt', label: 'portugais' },
];

function changeLanguage(lang) {
  proxy.$i18n.locale = lang;
  localStorage.setItem('lang', lang);
}
</script>
