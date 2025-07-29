<template>
  <div class="work-card">
    <div class="top-card">
      <div class="work-image-container">
        <img class="work-image" :src="workImage" :alt="workImgName">
      </div>
      <div class="work-info">
        <H4 class="work-title">{{ TitleWorks }}</H4>
        <H6 class="work-name">{{ NameWorks }}</H6>
        <p class="work-date">{{ DateWorks }}</p>
      </div>
    </div>
    <div class="work-description">
      <p class="description" v-html="work_description"></p>
      <div class="tags-works-container">
        <TagWorks v-for="(tag, i) in tags.slice(0, 5)" :key="i" :tagName="tag" />
      </div>
    </div>
  </div>
</template>

<style>

.tags-works-container {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.description {
  font-family: 'Satoshi-Regular';
  font-weight: 400;
  font-size: 12px;
  color: var(--primary-color-text);
}

.work-description {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 4px;
}

.work-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.work-title {
  font-family: 'Satoshi-Bold';
  font-weight: 700;
  font-size: 16px;
  color: var(--primary-color-text);
}

.work-name {
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  font-size: 14px;
  color: var(--primary-color-text);
}

.work-date {
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  font-size: 12px;
  color: var(--secondary-color-description);
}

.top-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-bottom: 6px;
}

.work-image-container {
  height: 77px;
  width: 77px;
  background-color: var(--primary-color-text);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.work-image {
  width: 59px;
}

.work-card {
  width: 406px;
  background-color: var(--primary-color-mini-card);
  padding: 4px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
}
</style>

<script>
import TagWorks from './TagWorks.vue';

export default {
  components: {
    TagWorks
  },
  props: {
    workImage: {
      type: String,
      required: true
    },
    workImgName: {
      type: String,
      required: true
    },
    TitleWorks: {
      type: String,
      required: true
    },
    NameWorks: {
      type: String,
      required: true
    },
    DateWorks: {
      type: String,
      required: true
    },
    work_description: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>
