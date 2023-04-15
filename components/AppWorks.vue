<template>
  <div class="my-works">
    <h2 class="heading">Some things I’ve built</h2>
    <ul class="nav">
      <li class="nav__links active">All</li>
      <li class="nav__links">Dev</li>
      <li class="nav__links">Design</li>
    </ul>
  </div>
  <div class="my-works__wrapper">
    <WorkItem />
    <WorkItem />
    <WorkItem />
    <WorkItem />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
.my-works {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.5rem 0px 2.5rem;
  .heading {
    margin: 0;
  }

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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    .nav {
      width: 100%;
      margin-top: 1.5rem;
      display: grid;
      grid-template-columns: auto auto auto;
      border-bottom: 1px solid var(--lightest-navy);

      &__links {
        padding-bottom: 5px;
        &.active {
          border-bottom: 1px solid var(--green);
        }
      }
    }
  }

  &__wrapper {
    display: grid;
    grid-template-columns: auto auto;
    gap: 2rem;
    margin-bottom: 3.75rem;
    @media (max-width: 768px) {
      grid-template-columns: auto;
    }
  }
}
</style>
