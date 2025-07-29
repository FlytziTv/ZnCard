<template>
  <div class="tag-language">
    <div class="bulle-color" :class="platformClass"></div>
    <p class="nom-language">{{ language }}</p>
  </div>
</template>


<style>

.tag-language {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

.bulle-color {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nom-language {
  font-family: 'Satoshi-Regular';
  font-weight: 400;
  font-size: 11px;
  color: var(--primary-color-text);
}

.html-color {
  background-color: var(--color-html);
}
.css-color {
  background-color: var(--color-css);
}
.javascript-color {
  background-color: var(--color-javascript);
}
.vue-color {
  background-color: var(--color-vue);
}
.python-color {
  background-color: var(--color-python);
}
.lua-color {
  background-color: var(--color-lua);
}

</style>

<script>
export default {
  props: {
    language: {
      type: String,
      required: true
    }
  },
  computed: {
    platformClass() {
      // Associe chaque langage à sa classe couleur
      const map = {
        html: 'html-color',
        css: 'css-color',
        javascript: 'javascript-color',
        vue: 'vue-color',
        python: 'python-color',
        lua: 'lua-color'
      };
      // Normalise le nom pour éviter les soucis de casse
      return map[this.language.toLowerCase()] || '';
    }
  }
}
</script>
