<template>
  <div class="footer">
    <h4>What’s Next</h4>
    <h2>Get in Touch</h2>
    <p>
      If you have any questions, requests or comments … or you just want to say
      hello, don’t hesitate to contact me. I will try my best to respond as soon
      as possible
    </p>
    <a
      class="email-link"
      href="mailto:tobylonge@gmail.com"
      rel="noopener noreferrer"
      target="_blank"
      >Contact Me</a
    >
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/variables';
.footer {
  text-align: center;
  h4 {
    margin: 2rem 0 1rem;
    color: var(--green);
    font-family: $font-mono;
    font-size: $font-sm;
    font-weight: 400;
  }
  h2 {
    font-weight: 600;
    color: var(--lightest-slate);
    font-size: 2.5rem;
  }
  p {
    margin: 1rem auto;
    font-weight: 400;
    font-size: 1.5rem;
    width: 90%;
    @media (min-width: 768px) {
      width: 60%;
    }
  }
  .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: $border-radius;
    padding: 1.25rem 1.75rem;
    font-size: $font-sm;
    font-family: $font-mono;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    display: inline-block;
    margin-top: 3rem;
  }
}
</style>
