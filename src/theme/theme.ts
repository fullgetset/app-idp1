import { Config } from 'tailwindcss';
import { colors } from './colors';
import { borderRadius } from './border-radius';
import { fontSize } from './font-size';
import { lineHeight } from './line-height';

export const theme: Config['theme'] = {
  colors,
  borderRadius,
  fontSize,
  lineHeight,
};
