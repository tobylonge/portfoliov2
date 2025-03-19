<template>
  <main class="container">
    <h4>Hi there,</h4>
    <h1>
      I’m <span>Oluwatobi Alonge</span> and I’m a design minded front-end
      developer that brings ideas to life using web technologies.
    </h1>
    <AppWorks />
  </main>
</template>

<script setup>
  
useHead({
  script: [
    { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
  ],
});

</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';
main {
  text-align: center;
  h4 {
    margin: 2rem 0 1rem;
    color: var(--green);
    font-family: $font-mono;
    font-size: $font-sm;
    font-weight: 400;
  }
  h1 {
    color: var(--slate);
    font-size: 2rem;
    width: 90%;
    margin: 0 auto;
    font-weight: 500;
    @media (min-width: 768px) {
      width: 75%;
    }
    span {
      font-weight: 600;
      color: var(--lightest-slate);
    }
  }
}
</style>
