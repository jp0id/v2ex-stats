import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
      '@/*': path.resolve(__dirname, './*'),
    }
  },
  test: {
    // 指定测试文件目录
    include: [
      'service/**/*.test.{ts,js}',
      'entrypoints/**/*.test.{ts,js}',
      'components/**/*.test.{ts,tsx}',
      'tests/**/*.test.{ts,js}'
    ],
    // 排除目录
    exclude: [
      'node_modules/**',
      'output/**',
      '.wxt/**',
      'docs/**'
    ],
    // 测试环境
    environment: 'node',
    // 全局设置
    globals: true,
    // 代码覆盖率配置
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/**',
        'output/**',
        '.wxt/**',
        'docs/**',
        '**/*.test.{ts,js}',
        '**/*.config.{ts,js}'
      ]
    }
  }
}); 