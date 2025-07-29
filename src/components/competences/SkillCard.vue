<template>
  <div class="skill-card">
    <div class="skill-image-container">
      <img :src="skillImage" :alt="skillImgName" class="skill-image">
    </div>
    <div class="skill-info">
      <H4>{{ skillName }}</H4>
      <p>// {{ skillCategory }}</p>
    </div>
  </div>
</template>

<style>
.skill-card {
  width: 303px;
  height: 58px;
  background-color: var(--primary-color-mini-card);
  padding: 4px;
  display: flex;
  border-radius: 8px;
}
.skill-image-container {
  height: 100%;
  width: 50px;
  background-color: var(--primary-color-text);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.skill-image {
  width: 34px;
  height: 34px;
}
.skill-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
}

.skill-info H4 {
  font-size: 15px;
  font-family: 'Satoshi-Bold';
  font-weight: 700;
  color: var(--primary-color-text);
}

.skill-info P {
  font-size: 12px;
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  color: var(--primary-color-text);
}
</style>



<script>
export default {
  props: {
    skillName: {
      type: String,
      required: true
    },
    skillCategory: {
      type: String,
      required: true
    },
    skillImage: {
      type: String,
      required: true
    },
    skillImgName: {
      type: String,
      required: true
    }
  }
}
</script>

