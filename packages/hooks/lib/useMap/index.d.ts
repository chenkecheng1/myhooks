declare function useMap<K, T>(initialValue?: Iterable<readonly [K, T]>): readonly [any, {
    readonly set: (key: K, entry: T) => void;
    readonly setAll: (newMap: Iterable<readonly [K, T]>) => void;
    readonly remove: (key: K) => void;
    readonly reset: () => any;
    readonly get: (key: K) => any;
}];
export default useMap;
