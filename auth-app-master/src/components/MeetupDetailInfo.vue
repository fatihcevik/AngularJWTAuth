<template>
  <view>
    <nb-card-item bordered>
      <nb-body>
        <nb-text :style="styles.label">Date</nb-text>
        <nb-text>{{meetup.startDate | formatDate}}</nb-text>
        <nb-text :style="styles.label">From</nb-text>
        <nb-text>{{meetup.timeFrom}}</nb-text>
        <nb-text :style="styles.label">To</nb-text>
        <nb-text>{{meetup.timeTo}}</nb-text>
        <nb-text :style="styles.label">Category</nb-text>
        <nb-text>{{meetup.category.name}}</nb-text>
        <nb-text :style="styles.label">Info</nb-text>
        <nb-text>{{meetup.shortInfo}}</nb-text>
      </nb-body>
    </nb-card-item>

    <nb-card-item header bordered>
      <nb-text>Description</nb-text>
    </nb-card-item>

    <nb-card-item bordered>
      <nb-text>{{meetup.description}}</nb-text>
    </nb-card-item>
  </view>
</template>

<script>
import styles from "@/styles";

export default {
  data() {
    return {
      styles
    };
  },
  props: {
    meetup: {
      type: Object,
      required: true
    }
  }
};
</script>