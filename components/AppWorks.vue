<template>
  <div class="my-works">
    <h2 class="heading">Some things I’ve built</h2>
    <ul class="nav">
      <li class="nav__links active">All</li>
      <li class="nav__links">Dev</li>
      <li class="nav__links">Desgin</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
.my-works {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav {
    display: flex;
    align-items: center;
    &__links {
      margin: 0px 1rem;
      position: relative;
      font-size: $font-sm;
      cursor: pointer;
      &.active {
        color: var(--green);
      }
    }
  }
}
</style>
