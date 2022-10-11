<template>
  <view>
    <text class="text-color-primary">{{message}}</text>
    <button :title="btnMessage" :on-press="handleClick" />
    <text class="count-text">{{count}}</text>
    <text>{{clickMotivation}}</text>
  </view>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome to my application",
      btnMessage: "Click Me",
      count: 0
    };
  },
  computed: {
    clickMotivation() {
      if (this.count < 5) {
        return "Please click me!";
      } else {
        return "Good job! Keep clicking!";
      }
    }
  },
  methods: {
    handleClick() {
      this.count++;
    }
  }
};
</script>

<style>
.text-color-primary {
  color: blue;
}

.count-text {
  font-size: 30px;
}
</style>