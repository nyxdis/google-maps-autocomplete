import {
  htmlSelectorRe as originalHtmlSelectorRe,
  validateHtmlSelector as originalValidateHtmlSelector,
} from "@schematics/angular/utility/validation";

// Must start with a letter, and must contain only alphanumeric characters or dashes.
// When adding a dash the segment after the dash must also start with a letter.
export const htmlSelectorRe = originalHtmlSelectorRe;

export function validateHtmlSelector(selector: string): void {
  return originalValidateHtmlSelector(selector);
}
