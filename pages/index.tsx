import type { NextPage } from "next";
import { useState } from "react";

type Vowels = {
  a: number;
  e: number;
  i: number;
  o: number;
  u: number;
};

const Home: NextPage = () => {
  const [vowels, setVowels] = useState<Vowels>({
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  });

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const vowels = value?.match(/[aeiou]/gi);
    const vowelsCount: Vowels = {
      a: 0,
      e: 0,
      i: 0,
      o: 0,
      u: 0,
    };

    if (vowels) {
      vowels?.forEach((vowel) => {
        vowelsCount[vowel?.toLocaleLowerCase() as keyof Vowels]++;
      });
    }

    setVowels(vowelsCount);
  };

  return (
    <div className="h-full w-full">
      <main className="h-full w-full mx-auto flex justify-center items-center">
        <div className="flex flex-col gap-3 justify-center items-center w-full">
          <input
            type="text"
            id="large-input"
            onChange={onChangeInput}
            autoComplete="off"
            className="block w-1/3 p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div className="w-1/3 flex justify-between items-center gap-4">
            {Object.keys(vowels)?.map((vowel) => (
              <div
                key={`vowel-${vowel}`}
                className="flex justify-center items-center gap-2"
              >
                <p className="w-1/3 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 whitespace-nowrap">
                  {vowel}: {vowels?.[vowel as keyof Vowels]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
