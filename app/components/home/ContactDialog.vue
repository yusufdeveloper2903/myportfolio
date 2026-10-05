<script setup lang="ts">
import { site } from '~/data/site'

const { t } = useI18n()
const { isOpen, close } = useContactDialog()
const DIALOG_ID = 'contact-dialog'
const getDialog = () => document.getElementById(DIALOG_ID) as HTMLDialogElement | null

// Keep the native <dialog> in sync with shared state (Esc / backdrop close update it too).
watch(isOpen, (open) => {
  const dialog = getDialog()
  if (open && !dialog?.open) dialog?.showModal()
  if (!open && dialog?.open) dialog.close()
})

const form = reactive({ name: '', email: '', message: '' })

const draft = computed(() => ({
  to: site.email,
  subject: t('contact.form.subject', { name: form.name.trim() || '—' }),
  body: [form.message.trim(), '', `— ${form.name.trim()}`, form.email.trim()]
    .filter((line, index) => index < 2 || line)
    .join('\n'),
}))

/** Validates natively, then opens the chosen compose target. */
function send(target: 'gmail' | 'app') {
  if (!getDialog()?.querySelector('form')?.reportValidity()) return
  if (target === 'gmail') window.open(gmailComposeUrl(draft.value), '_blank', 'noopener')
  else window.location.href = mailtoUrl(draft.value)
  close()
}
</script>

<template>
  <dialog
    :id="DIALOG_ID"
    class="m-auto w-[min(92vw,32rem)] rounded-card border border-line bg-surface p-0 text-left text-fg shadow-2xl backdrop:bg-black/60 backdrop:backdrop-blur-sm"
    :aria-label="$t('contact.form.title')"
    @click.self="close()"
    @close="close()"
  >
    <form class="p-6 sm:p-8" @submit.prevent="send('gmail')">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-xl font-semibold tracking-tight">{{ $t('contact.form.title') }}</h3>
          <p class="mt-1 text-sm text-muted">{{ $t('contact.form.hint') }}</p>
        </div>
        <button
          type="button"
          class="grid size-9 shrink-0 place-items-center rounded-full text-muted hover:bg-surface-hover hover:text-fg"
          :aria-label="$t('work.close')"
          @click="close()"
        >
          <Icon name="lucide:x" class="size-4" />
        </button>
      </div>

      <div class="mt-6 grid gap-4">
        <label class="grid gap-1.5 text-sm">
          <span class="text-muted">{{ $t('contact.form.name') }}</span>
          <input
            v-model="form.name"
            required
            autocomplete="name"
            class="rounded-xl border border-line bg-bg px-3.5 py-2.5 outline-none focus:border-accent"
          />
        </label>
        <label class="grid gap-1.5 text-sm">
          <span class="text-muted">{{ $t('contact.form.email') }}</span>
          <input
            v-model="form.email"
            type="email"
            required
            autocomplete="email"
            class="rounded-xl border border-line bg-bg px-3.5 py-2.5 outline-none focus:border-accent"
          />
        </label>
        <label class="grid gap-1.5 text-sm">
          <span class="text-muted">{{ $t('contact.form.message') }}</span>
          <textarea
            v-model="form.message"
            required
            rows="5"
            class="resize-y rounded-xl border border-line bg-bg px-3.5 py-2.5 outline-none focus:border-accent"
          />
        </label>
      </div>

      <div class="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
        <button type="submit" class="btn-primary sm:flex-1">
          <Icon name="simple-icons:gmail" class="size-4" />
          {{ $t('contact.form.gmail') }}
        </button>
        <button type="button" class="btn-ghost sm:flex-1" @click="send('app')">
          <Icon name="lucide:mail" class="size-4" />
          {{ $t('contact.form.app') }}
        </button>
      </div>
    </form>
  </dialog>
</template>
