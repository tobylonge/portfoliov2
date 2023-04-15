<template>
  <Teleport to="body">
    <div class="modal-overlay" @click="$emit('closeModal')"></div>
    <aside class="modal">
      <div class="modal__header">
        <button aria-label="Close Modal" @click="$emit('closeModal')">×</button>
      </div>
      <div class="modal__body">
        <slot></slot>
      </div>
    </aside>
  </Teleport>
</template>
<script setup lang="ts">
defineEmits(['closeModal'])
</script>

<style lang="scss" scoped>
@import '@/assets/style/variables';
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(5px);
  user-select: none;
  z-index: 2;
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  bottom: 0px;
  right: 0px;
  padding: 3.125rem 0.75rem;
  width: min(75vw, 400px);
  height: 100vh;
  outline: 0px;
  background-color: var(--light-navy);
  box-shadow: -10px 0px 30px -15px var(--navy-shadow);
  z-index: 5;
  transform: translateX(0vw);
  visibility: visible;
  &__header {
    position: absolute;
    right: 1rem;
    top: 1rem;
    button {
      background: none;
      outline: none;
      border: none;
      color: var(--green);
      font-size: 5rem;
      font-weight: 300;
    }
  }
}
</style>
