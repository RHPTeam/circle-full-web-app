<template>
  <div>
    <app-header/>
    <div class="promotion p_10">
      <app-image/>
      <app-info/>
      <app-detail/>
      <app-action/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/Head/HeadBackgroundControl";
import AppImage from "@/components/Promotion/image";
import AppInfo from "@/components/Promotion/info";
import AppDetail from "@/components/Promotion/detail";
import AppAction from "@/components/Promotion/action";

export default {
  components: {
    AppHeader,
    AppImage,
    AppInfo,
    AppDetail,
    AppAction
  }
};
</script>

<style scoped>
</style>
