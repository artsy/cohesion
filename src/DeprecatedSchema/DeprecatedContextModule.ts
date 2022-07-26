import { ContextModule as _ContextModule } from "./DeprecatedValues"

export interface ContextModule {
  /**
   * A conceptual module on the page. While this may be a React component name,
   * it does not need to be, as long as given the name it should be clear what
   * part of the page is being referred to.
   */
  context_module: _ContextModule
}
