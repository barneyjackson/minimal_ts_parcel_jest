import {describe, expect, test} from '@jest/globals';
import { exportToCsv } from '../exportToCsv';

describe('export-to-csv wrapper', () => {
  test('call 3rd party module', () => {
    expect(exportToCsv()).toBe(true);
  });
});