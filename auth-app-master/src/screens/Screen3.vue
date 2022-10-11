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
      title: "Screen 3"
    };
  },
  props: {
    navigation: {
      type: Object
    }
  }
};
</script>