<template>
  <div class="tag-users">
    <img :src="imageSrc" :alt="titleImg" >
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    titleImg: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

.tag-users {
  display: flex;
  align-items: center;
  gap: 6px;
}

.tag-users img {
  width: 16px;
  height: 16px;
}

.tag-users p {
  font-size: 14px;
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  color: var(--primary-color-text);
}
</style>
