import {} from 'styled-components';
import { ThemeType } from './components/Theme'; // Import type from above file
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}