<template>
  <aside class="card flex gap-4 p-5" role="note">
    <span
      class="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-bg text-muted"
      aria-hidden="true"
    >
      <Icon name="lucide:shield-check" class="size-4" />
    </span>
    <div>
      <p class="font-medium">{{ $t('work.privateTitle') }}</p>
      <p class="mt-1 text-sm text-pretty text-muted">{{ $t('work.privateNote') }}</p>
    </div>
  </aside>
</template>
