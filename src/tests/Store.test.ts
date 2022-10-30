import { describe, test, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { globalStore } from '../store/globalStore';

describe('Global store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test('increments count', () => {
    globalStore().increment();
    expect(globalStore().count).toBe(1);
  });
  test('decrement count', () => {
    globalStore().decrement();
    expect(globalStore().count).toBe(-1);
  });
});
