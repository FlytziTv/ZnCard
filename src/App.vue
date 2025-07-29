<template>
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
import { ref } from 'vue';
import ProfilCard from './components/ProfilCard.vue';
import MusicCard from './components/MusicCard.vue';
import PrincipalCard from './components/PrincipalCard.vue';

const showTest = ref(false);

function handleMenuClick() {
  showTest.value = !showTest.value;
}

</script>
