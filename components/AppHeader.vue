<template>
  <header class="container">
    <img src="~/assets/img/logo.svg" alt="Oluwatobi Alonge" />
    <nav class="nav h-sm-block">
      <ul>
        <li class="nav__links">
          <NuxtLink to="/">Work</NuxtLink>
        </li>
        <li class="nav__links">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="nav__button"><a class="button">Resume</a></li>
      </ul>
    </nav>
    <button class="mobile-menu d-sm-block" d-sm-block @click="toggleModal">
      <!-- <IconMenu /> -->
      <Icon name="simple-line-icons:menu" />
    </button>
  </header>

  <!-- For Mobile -->
  <Modal v-if="modalOpen" @close-modal="toggleModal">
    <nav class="nav--mobile">
      <ul>
        <li class="nav__links"><NuxtLink to="/">Work</NuxtLink></li>
        <li class="nav__links"><NuxtLink to="/about">About</NuxtLink></li>
        <li class="nav__button"><a class="button">Resume</a></li>
      </ul>
    </nav>
  </Modal>
</template>

<script setup lang="ts">
const modalOpen = ref(false)
const toggleModal = () => {
  modalOpen.value = !modalOpen.value
}
</script>

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

  .mobile-menu {
    outline: none;
    border: none;
    background: none;
    color: var(--green);
    font-size: 1.5rem;
    display: none;
    cursor: pointer;
  }
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
    padding: 0.75rem 1.5rem;
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

  &--mobile {
    ul {
      flex-direction: column;
      text-align: center;

      li {
        font-size: $font-xl;
        margin-bottom: 3rem;

        &:before {
          font-size: $font-xl;
        }
      }
    }
  }
}
</style>
