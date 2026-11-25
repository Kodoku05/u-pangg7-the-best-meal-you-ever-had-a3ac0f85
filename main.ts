import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const sentence = "My best supper was springy instant noodles in our dark stairwell, my brother holding a bicycle torch over the dented pot so I could find the last egg he insisted had fallen into my half by accident.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), sentence, 'utf8');
