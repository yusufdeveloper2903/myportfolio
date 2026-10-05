<script setup lang="ts">
import { blogChannelUrl, latestPost } from '@/data/blog'
import { formatDate } from '@/utils/date'
</script>

<template>
  <section id="blog" class="blog">
    <div class="container blog__inner">
      <article class="post">
        <img :src="latestPost.cover" alt="" class="post__cover" loading="lazy" />
        <h3 class="post__title">{{ latestPost.title }}</h3>
        <p class="post__excerpt">{{ latestPost.excerpt }}</p>
        <footer class="post__meta">
          <span>Published in</span>
          <span class="post__category">{{ latestPost.category }}</span>
          <time :datetime="latestPost.publishedAt">{{ formatDate(latestPost.publishedAt) }}</time>
        </footer>
      </article>

      <div class="blog__intro">
        <h2 class="blog__title">My Blog And News</h2>
        <p class="blog__text">
          I teach others what I know. I mainly teach JavaScript, Vue.js, HTML, CSS, Bootstrap and
          Sass.
        </p>
        <a :href="blogChannelUrl" class="blog__cta" target="_blank" rel="noopener noreferrer">
          Go To The Blog
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.blog {
  padding-block: 70px;

  &__inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 10%;

    @include below(md) {
      flex-direction: column-reverse;
      gap: 50px;
      text-align: center;
    }
  }

  &__intro {
    flex: 0 1 45%;
  }

  &__title {
    max-width: 60%;
    color: $color-teal;
    font-size: 45px;

    @include below(md) {
      max-width: 100%;
      font-size: 36px;
    }
  }

  &__text {
    max-width: 60%;
    margin: 20px 0 60px;
    color: $color-text-muted;
    font-size: 18px;
    line-height: 1.3;

    @include below(md) {
      max-width: 100%;
      margin-bottom: 40px;
    }
  }

  &__cta {
    display: inline-block;
    padding: 17px 30px;
    border: 1px solid $color-teal;
    border-radius: 30px;
    background-color: $color-teal;
    box-shadow: $shadow-glow;
    color: $color-bg;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    transition: all $transition-base;
    @include focus-ring;

    &:hover {
      background-color: $color-bg;
      color: $color-teal;
      text-decoration: underline;
    }
  }
}

.post {
  flex: 0 1 45%;

  &__cover {
    width: 100%;
    height: auto;
  }

  &__title {
    margin-top: 30px;
    color: $color-teal;
    font-size: 33px;

    &::first-letter {
      text-transform: uppercase;
    }

    @include below(sm) {
      font-size: 24px;
    }
  }

  &__excerpt {
    margin: 25px 0;
    color: $color-text-muted;
    font-size: 16px;
    line-height: 1.5;
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 15px 20px;
    color: $color-text-muted;
    font-size: 14px;
    text-transform: uppercase;

    @include below(md) {
      justify-content: center;
    }

    time {
      margin-left: auto;
      font-size: 18px;
      text-transform: none;

      @include below(md) {
        margin-left: 0;
      }
    }
  }

  &__category {
    padding: 12px 26px;
    border: 1px solid $color-teal;
    border-radius: 30px;
    color: $color-teal;
    font-weight: 700;
  }
}
</style>
