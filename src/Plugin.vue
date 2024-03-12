<template>
  <div class="extended-richtext">
    <TipTap v-model="model.content" />
  </div>
</template>

<script>
import TipTap from './TipTap.vue';

export default {
  components: {
    TipTap,
  },
  mixins: [window.Storyblok.plugin],
  watch: {
    'model': {
      handler: function(value) {
        this.$emit('changed-model', value);
      },
      deep: true,
    },
  },
  methods: {
    initWith() {
      return {
        plugin: 'extended-rich-text-editor',
        content: '',
      };
    },

    pluginCreated() {
      console.log('plugin:created dumbos tip tap');
    },
  },
};
</script>