// Packages that aren't written in TypeScript don't provide '.d.ts' ("definition") files,
// which TypeScript could use to give us the nice IDE features for that package.
// However, if we install a community-written types package such as @types/lodash,
// TypeScript will pick up on it and use it to inform our usage.
import { uniq } from "lodash";

uniq(["apple", "banana", "cherry", "apple"]);
