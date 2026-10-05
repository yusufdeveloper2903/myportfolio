import { describe, expect, it } from 'vitest'

import { projects } from '../projects'

describe('projects data', () => {
  it('has an image and a valid https url for every project', () => {
    for (const project of projects) {
      expect(project.image, project.title).toBeTruthy()
      expect(new URL(project.url).protocol, project.title).toBe('https:')
    }
  })

  it('has at least one featured project', () => {
    expect(projects.some((project) => project.featured)).toBe(true)
  })
})
