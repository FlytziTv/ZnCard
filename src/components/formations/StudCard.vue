<template>
  <div class="stud-card">
    <div class="stud-image-container">
      <img class="stud-image" :src="StudImage" :alt="StudImgName">
    </div>
    <div class="stud-info">
      <H4 class="stud-title">{{ TitleStud }}</H4>
      <H6 class="stud-name">{{ NameStud }}</H6>
      <p class="stud-date">{{ DateStud }}</p>
    </div>
  </div>
</template>

<style>

.stud-title {
  font-family: 'Satoshi-Bold';
  font-weight: 700;
  font-size: 16px;
  color: var(--primary-color-text);
}

.stud-name {
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  font-size: 14px;
  color: var(--primary-color-text);
}

.stud-date {
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  font-size: 12px;
  color: var(--secondary-color-description);
}

.stud-image-container {
  height: 77px;
  width: 77px;
  background-color: var(--primary-color-text);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stud-image {
  width: 59px;
}

.stud-card {
  width: 612px;
  background-color: var(--primary-color-mini-card);
  padding: 4px;
  display: flex;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>

<script>
export default {
  props: {
    StudImage: {
      type: String,
      required: true
    },
    StudImgName: {
      type: String,
      required: true
    },
    TitleStud: {
      type: String,
      required: true
    },
    NameStud: {
      type: String,
      required: true
    },
    DateStud: {
      type: String,
      required: true
    },
  }
}
</script>
