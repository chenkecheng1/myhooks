declare const useSessionStorageState: <T>(key: string, options?: import("../createUseStorageState").Options<T>) => readonly [any, (value?: import("../createUseStorageState").SetState<T> | undefined) => void];
export default useSessionStorageState;
