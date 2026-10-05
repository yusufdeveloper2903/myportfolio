<script setup lang="ts">
import { reactive, ref } from 'vue'

import { profile } from '@/data/profile'
import type { ContactMessage } from '@/types'
import { buildContactMailto } from '@/utils/mailto'

const form = reactive<ContactMessage>({ name: '', email: '', message: '' })
const submitted = ref(false)

function onSubmit() {
  window.location.href = buildContactMailto(profile.email, {
    name: form.name.trim(),
    email: form.email.trim(),
    message: form.message.trim(),
  })
  submitted.value = true
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="contact__eyebrow">Contact Me</h2>

      <div class="contact__intro">
        <p class="contact__lead">
          Let me know if you want to talk about a potential collaboration. I'm available for
          freelance work.
        </p>
        <a :href="`mailto:${profile.email}`" class="contact__email">{{ profile.email }}</a>
      </div>

      <form class="contact__form" @submit.prevent="onSubmit">
        <label class="field">
          <span class="visually-hidden">Name</span>
          <input
            v-model="form.name"
            type="text"
            name="name"
            autocomplete="name"
            placeholder="What’s your name?"
            required
          />
        </label>
        <label class="field">
          <span class="visually-hidden">Email</span>
          <input
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="Your email"
            required
          />
        </label>
        <label class="field">
          <span class="visually-hidden">Project details</span>
          <textarea
            v-model="form.message"
            name="message"
            rows="1"
            placeholder="Tell me about your project"
            required
          />
        </label>

        <div class="contact__actions">
          <button type="submit" class="contact__submit">Get a Quote</button>
          <p v-if="submitted" class="contact__status" role="status">
            Your email app should open with the message ready to send.
          </p>
        </div>
      </form>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  padding-block: 70px;

  &__eyebrow {
    color: $color-purple;
    font-family: $font-display;
    font-size: 18px;
    font-weight: 400;

    &::after {
      content: '';
      display: block;
      width: 30px;
      height: 2px;
      margin-top: 6px;
      background-color: $color-purple;
    }

    @include below(md) {
      text-align: center;

      &::after {
        margin-inline: auto;
      }
    }
  }

  &__intro {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;

    @include below(md) {
      flex-direction: column-reverse;
      align-items: center;
      margin-top: 30px;
      text-align: center;
    }
  }

  &__lead {
    max-width: 55%;
    margin: 20px 0 50px;
    color: $color-white;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.3;

    @include below(md) {
      max-width: 100%;
      margin: 0;
      font-size: 26px;
    }
  }

  &__email {
    margin-top: 20px;
    color: $color-purple;
    font-size: 20px;
    text-decoration: none;
    word-break: break-all;
    @include focus-ring;

    &:hover {
      text-decoration: underline;
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    margin-top: 30px;

    @include below(md) {
      justify-content: center;
    }
  }

  &__submit {
    padding: 18px 50px;
    border: 1px solid $color-purple;
    border-radius: 100px;
    background-color: $color-purple;
    color: $color-white;
    font-family: $font-display;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: all $transition-base;
    @include focus-ring;

    &:hover {
      background-color: $color-white;
      color: $color-purple;
    }
  }

  &__status {
    color: #3ecf8e;
  }
}

.field {
  display: block;

  input,
  textarea {
    width: 100%;
    padding: 45px 0 17px;
    border: none;
    border-bottom: 1px solid $color-border-soft;
    outline: none;
    background: none;
    color: $color-white;
    font-size: 20px;
    resize: vertical;
    transition: border-color $transition-fast;

    &::placeholder {
      color: $color-placeholder;
      font-family: $font-display;
    }

    &:focus {
      border-bottom-color: $color-purple;
    }
  }
}
</style>
