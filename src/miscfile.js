//isScopedModule = true. should be false
import { a } from "@/miscfile2";
//isScopedModule = true, but slashcount check invalidates @see https://github.com/benmosher/eslint-plugin-import/blob/master/src/rules/extensions.js#L132
import { a as f } from "@/components/miscfile3";
a
f
export default 'misc';