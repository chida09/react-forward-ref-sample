import { forwardRef, InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

// forwardRefを使用してコンポーネントを定義
// これにより、親コンポーネントからrefを直接inputエレメントに渡すことができます
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(

  // 関数にCustomInputという名前を付けることで、React DevToolsでコンポーネント名が正しく表示されます
  function CustomInput({ label, className, ...props }, ref) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
          {label}
        </label>
        <input
          // refを直接inputエレメントに渡します。これがforwardRefの主な目的です
          ref={ref}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className}`}
          {...props}
        />
      </div>
    );
  }
);

// displayNameを明示的に設定することで、開発ツールでコンポーネントを識別しやすくなります
CustomInput.displayName = 'CustomInput';

export default CustomInput;
