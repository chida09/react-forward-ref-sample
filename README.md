## forwardRefとは

- コンポーネントを通じて参照（ref）を「転送」するために使用されます。
- 親コンポーネントから子コンポーネント内の DOM 要素に直接アクセスを可能にします。

簡単な例

親コンポーネント

```tsx
const inputRef = useRef<HTMLInputElement>(null);

useEffect(() => {
  if (inputRef.current) inputRef.current.focus();
}, []);

<CustomInput
  ref={inputRef}
  placeholder="John Doe"
  id="name-input"
/>
```

子コンポーネント

```tsx
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>()

function CustomInput({ ...props }, ref) {
  return (
    <input
      // refを直接inputエレメントに渡します。これがforwardRefの主な目的です
      ref={ref}
    {...props}
    />
  )
}
```

- [forwardRefって何なんだっけ？](https://zenn.dev/terrierscript/scraps/15ca11388f7424)
