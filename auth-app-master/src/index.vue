<template>
  <view class="container" :class="{'container-android': Platform.OS === 'android' }">
    <Navigation v-if="isAuthResolved" />
    <nb-container v-else class="spinner-container">
      <nb-spinner color="blue" />
    </nb-container>
  </view>
</template>

<script>
import Vue from "vue-native-core";
import { VueNativeBase } from "native-base";
import { Platform } from "react-native";

import store from "./store";
import Navigation from "./navigation";
import moment from "moment";
import Vuelidate from "vuelidate";

import ScreenWithDrawer from "@/components/ScreenWithDrawer";
import InputWithError from "@/components/InputWithError";
import AppMessage from "@/components/AppMessage";
import AppNavigationEvents from "@/react-components/AppNavigationEvents";
import AppHeader from "@/components/AppHeader";
import AppTimePicker from "@/components/AppTimePicker";

Vue.use(VueNativeBase);
Vue.use(Vuelidate);
Vue.component("ScreenWithDrawer", ScreenWithDrawer);
Vue.component("AppMessage", AppMessage);
Vue.component("AppHeader", AppHeader);
Vue.component("AppTimePicker", AppTimePicker);
Vue.component("InputWithError", InputWithError);
Vue.component("AppNavigationEvents", AppNavigationEvents);

Vue.prototype.$store = store;

Vue.filter("upperCase", function(value) {
  if (!value) return "";
  return value.toUpperCase();
});

Vue.filter("formatDate", function(value, formatType = "LL") {
  if (!value) return "";
  return moment(value).format(formatType);
});

Vue.filter("fromNow", function(value) {
  if (!value) return "";
  return moment(value).fromNow();
});

export default {
  data() {
    return {
      Platform
    };
  },

  components: {
    Navigation
  },
  created() {
    this.$store.dispatch("auth/verifyUser").catch(() => {});
  },
  computed: {
    isAuthResolved() {
      return this.$store.state.auth.isAuthResolved;
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  background-color: #324191;
  flex: 1;
}
.container-android {
  padding-top: 32.5px;
}
.spinner-container {
  display: flex;
  justify-content: center;
}
</style>