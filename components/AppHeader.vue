<template>
  <header class="container">
    <img src="~/assets/img/logo.svg" alt="Oluwatobi Alonge" />
    <nav class="nav">
      <ul>
        <li class="nav__links"><NuxtLink to="/">Work</NuxtLink></li>
        <li class="nav__links"><NuxtLink to="/about">About</NuxtLink></li>
        <li class="nav__button"><a class="button">Resume</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
header {
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: $font-mono;
  color: var(--lightest-slate);
  img {
    max-height: 2.8rem;
  }
  .nav {
    ul {
      display: flex;
      align-items: center;
    }
    &__links {
      margin: 0px 1rem;
      position: relative;
      counter-increment: nav-counter 1;
      font-size: $font-sm;

      &:before {
        content: '0' counter(nav-counter) '. ';
        color: var(--green);
        font-size: $font-xxs;
      }
    }
    &__button {
      color: var(--green);
      background-color: transparent;
      border: 1px solid var(--green);
      border-radius: $border-radius;
      padding: 0.75rem 1rem;
      font-family: $font-mono;
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      margin-left: 15px;
      font-size: $font-xs;
      &:hover,
      &:active,
      &:visited {
        background-color: var(--green-tint);
        outline: none;
      }
    }
  }
}
</style>
