export type SetState<S> = S | ((prevState?: S) => S);
export interface Options<T> {
    defaultValue?: T | (() => T);
    serializer?: (value: T) => string;
    deserializer?: (value: string) => T;
    onError?: (error: unknown) => void;
}
export declare function createUseStorageState(getStorage: () => Storage | undefined): <T>(key: string, options?: Options<T>) => readonly [any, (value?: SetState<T> | undefined) => void];
