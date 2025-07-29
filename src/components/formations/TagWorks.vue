<template>
  <div class="tag-works">
    <p>{{ tagName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tagName: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.tag-works {
  background-color: var(--color1-tag);
  border-radius: 10px;
  padding: 2px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tag-works p {
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  font-size: 10px;
  color: var(--color2-tag);
}
</style>
