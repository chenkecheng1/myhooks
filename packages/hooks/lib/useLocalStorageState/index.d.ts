declare const useLocalStorageState: <T>(key: string, options?: import("../createUseStorageState").Options<T>) => readonly [any, (value?: import("../createUseStorageState").SetState<T> | undefined) => void];
export default useLocalStorageState;
