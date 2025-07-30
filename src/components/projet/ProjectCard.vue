<template>
  <div class="project-card">
    <div class="title-project">
      <a target="_blank" :href="link"><H4>{{ Titre }}</H4></a>
      <div class="visibility">
        <p>{{ visibilité }}</p>
      </div>
    </div>
    <p class="description-project">{{ description }}</p>
    <div class="infos-project">
      <TagLanguage v-for="(tag, i) in tags.slice(0, 5)" :key="i" :language="tag.lang" />
      <p class="date_maj">{{ date_maj }}</p>
    </div>
  </div>
</template>


<style>
.date_maj {
  font-family: 'Satoshi-Regular';
  font-weight: 400;
  font-size: 11px;
  color: #3F3F3F;
}

.infos-project {
  display: flex;
  align-items: center;
  gap: 8px;
}

.description-project {
  font-family: 'Satoshi-Regular';
  font-weight: 400;
  font-size: 14px;
  color: var(--primary-color-text);
  padding-bottom: 4px;
}

.visibility p {
  font-family: 'Satoshi-Medium';
  font-weight: 500;
  font-size: 12px;
  color: var(--secondary-color-description);
}

.visibility {
  padding: 0px 8px;
  border: 1px solid var(--secondary-color);
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title-project H4 {
  font-family: 'Satoshi-Bold';
  font-weight: 700;
  color: var(--color-zn-background);
  font-size: 20px;
}

.title-project a {
  text-decoration: none;
}

.title-project {
  display: flex;
  align-items: center;
  gap: 8px;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--primary-color-mini-card);
  border-radius: 8px;
  padding: var(--padding-8px);
  border: 1px solid var(--secondary-color);
  width: 406px;
}


</style>

<script>
import TagLanguage from './TagLanguage.vue';

export default {
  components: {
    TagLanguage
  },
  props: {
    Titre: {
      type: String,
      required: true
    },
    visibilité: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date_maj: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
