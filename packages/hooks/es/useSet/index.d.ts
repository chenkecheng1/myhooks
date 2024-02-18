declare function useSet<K>(initialValue?: Iterable<K>): readonly [any, {
    readonly add: (key: K) => void;
    readonly remove: (key: K) => void;
    readonly reset: () => any;
}];
export default useSet;
