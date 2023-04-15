<template>
  <AppHeader />
  <div class="layout">
    <slot />
    <ContactMe />
  </div>
  <AppFooter />
</template>
<style scoped>
.layout {
  min-height: 100vh;
}
</style>
