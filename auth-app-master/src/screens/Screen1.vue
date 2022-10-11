<template>
  <view>
    <text class="text-color-primary">{{title}}</text>
    <button :title="'Go to Screen 2'" :on-press="goToScreen2" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: "Screen 1"
    };
  },
  props: {
    navigation: {
      type: Object
    }
  },
  methods: {
    goToScreen2() {
      this.navigation.navigate("Screen2");
    }
  }
};
</script>