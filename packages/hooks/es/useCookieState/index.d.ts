import Cookies from 'js-cookie';
export type State = string | undefined;
export interface Options extends Cookies.CookieAttributes {
    defaultValue?: State | (() => State);
}
declare function useCookieState(cookieKey: string, options?: Options): readonly [any, (newValue: State | ((prevState: State) => State), newOptions?: Cookies.CookieAttributes) => void];
export default useCookieState;
