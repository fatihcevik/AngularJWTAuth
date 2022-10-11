<template>
  <ScreenWithDrawer :navigation="navigation" :headerTitle="title">
    <view>
      <text class="text-color-primary">{{title}}</text>
    </view>
  </ScreenWithDrawer>
</template>

<script>
export default {
  data() {
    return {
      title: "Screen 2"
    };
  },
  props: {
    navigation: {
      type: Object
    }
  }
};
</script>