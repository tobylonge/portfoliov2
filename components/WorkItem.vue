<template>
  <div class="work-item">
    <div class="work-item__image">
      <img src="http://via.placeholder.com/640x360" alt="title" />
    </div>
    <div class="work-item__body">
      <div class="work-item__desc">
        <div class="work-item__type">Type</div>
        <div class="work-item__title">Title</div>
        <div class="work-item__desc">
          A web interactive showing telegram chats from a group of Neighbors in
          Russian-Occupied Bucha.
        </div>
      </div>
      <div class="work-item__footer">
        <ul class="work-item__tools">
          <li>Tools</li>
        </ul>
        <ul class="work-item__links">
          <!-- <li><IconGithub style="font-size: 1.5rem" /></li> -->
          <Icon name="simple-line-icons:social-github" />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/style/variables';
.work-item {
  background: var(--light-navy);
  display: flex;
  &__image,
  &__body {
    width: 50%;
  }
  &__image {
    img {
      height: 100%;
      object-fit: cover;
    }
  }
  &__body {
    text-align: right;
    display: flex;
    flex-direction: column;
    padding: 0.75rem;
    justify-content: space-between;
  }
  &__type {
    color: var(--green);
    font-family: $font-mono;
    font-size: $font-xs;
  }
  &__title {
    margin: 1rem 0 0.75rem;
    color: var(--lightest-slate);
    font-size: $font-xxl;
    font-weight: 500;
  }
  &__desc {
    font-size: $font-base;
    color: var(--light-slate);
    margin-bottom: 1rem;
  }
  &__tools {
    font-family: $font-mono;
    font-size: $font-xs;
    display: inline-flex;
    margin-bottom: 1rem;
    li {
      margin: 0 1rem;
      &:first-child {
        margin-right: 0;
      }
    }
  }
  &__links {
    color: var(--lightest-slate);
  }
}
</style>
