<template>
  <div class="footer">
    <div class="container">
      <div class="footer__social-links">
        <a><Icon name="simple-line-icons:social-github" /></a>
        <a><Icon name="simple-line-icons:social-dribbble" /></a>
        <a><Icon name="simple-line-icons:social-linkedin" /></a>
        <a><Icon name="simple-line-icons:envelope" /></a>
        <a><Icon name="simple-line-icons:social-twitter" /></a>
      </div>
      <div class="footer__contact">
        <p>© Oluwatobi Alonge 2022 | tobylonge@gmail.com</p>
      </div>
      <div class="footer__switch">
        <!-- Work on this later -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
.footer {
  background: var(--light-navy);
  padding: 1rem 0;
  .container {
    display: grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    @media (max-width: 768px) {
      grid-template-columns: auto;
      gap: 10px;
    }
  }
  &__social-links {
    display: flex;
    align-items: center;
    color: var(--light-slate);
    @media (max-width: 768px) {
      display: block;
      text-align: center;
      margin-bottom: 5px;
    }
    a {
      padding-right: 1.5rem;
      line-height: 0;
      &:last-child {
        padding: 0;
      }
    }
  }
  &__contact {
    margin: 0 auto;
    p {
      line-height: 0;
    }
  }
}
</style>
