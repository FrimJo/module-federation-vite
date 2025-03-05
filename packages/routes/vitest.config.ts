import viteBaseConfig from '@repo/cypress-vite/vite-config'
import { defineConfig, mergeConfig } from 'vitest/config'

export default mergeConfig(viteBaseConfig, defineConfig({}))
