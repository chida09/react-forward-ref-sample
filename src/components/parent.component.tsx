"use client"
import { useEffect, useRef } from 'react';
import CustomInput from './custom-input.component';

const ParentComponent: React.FC = () => {
  // useRefを使用してinput要素への参照を作成
  // これにより、DOMを直接操作することができます
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffectを使用して、コンポーネントがマウントされた後に実行される処理を定義
  useEffect(() => {
    // inputRefが有効な場合（nullでない場合）、そのinput要素にフォーカスを当てる
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []); // 空の依存配列は、このeffectがマウント時にのみ実行されることを意味します

  const handleButtonClick = () => {
    // inputRefが有効な場合、その値をログに出力し、フィールドをクリアする
    if (inputRef.current) {
      console.log('Input value:', inputRef.current.value);
      inputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Parent Component</h1>
      {/* CustomInputコンポーネントを使用し、refを渡す */}
      {/* これにより、ParentComponentからCustomInput内のinput要素を直接操作できる */}
      <CustomInput
        ref={inputRef}
        label="Enter your name"
        placeholder="John Doe"
        id="name-input"
      />
      <button
        onClick={handleButtonClick}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Log and Clear
      </button>
    </div>
  );
};

export default ParentComponent;
