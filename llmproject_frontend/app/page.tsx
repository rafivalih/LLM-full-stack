// "use client";

// import { useState } from "react";

// export default function Home() {
//   const [question, setQuestion] = useState("");
//   const [answer, setAnswer] = useState("");
//   const [loading, setLoading] = useState(false);

//   const askQuestion = async () => {
//     if (!question.trim() || loading) return;

//     setLoading(true);
//     setAnswer("");

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/openai`,
//          {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           question: question.trim(),
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Something went wrong");
//       }

//       const data = await response.json();

//       setAnswer(data.answer);
//     } catch (error) {
//       console.error(error);
//       setAnswer("Sorry, something went wrong. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") {
//       askQuestion();
//     }
//   };

//   return (
//     <main className="sm:min-h-[calc(100vh-60px)] min-h-[calc(100vh-110px)]  bg-white flex flex-col">
     

//       {/* Content */}
//       <div className="flex-1 w-full max-w-3xl mx-auto px-4 flex flex-col">
        
//         {/* Answer */}
//         <div className="flex-1 py-10">
//           {!answer && !loading ? (
//             <div className="h-full flex items-center justify-center">
//               <div className="text-center">
                
//                 <h2 className="text-3xl font-semibold text-gray-900">
//                  <span>Hello Rafi,</span> What can I help with?
//                 </h2>

//                 <p className="mt-3 text-gray-500">
//                   Ask me anything
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <div className="mt-5">
//               <div className="mb-6">
//                 <p className="text-sm font-medium text-gray-500 mb-2">
//                   You
//                 </p>

//                 <p className="text-gray-900 text-lg">
//                   {question}
//                 </p>
//               </div>

//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-2">
//                   AI Assistant
//                 </p>

//                 {loading ? (
//                   <div className="flex items-center gap-2 text-gray-500">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
//                   </div>
//                 ) : (
//                   <p className="text-gray-800 leading-7 whitespace-pre-wrap">
//                     {answer}
//                   </p>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Input */}
//         <div className="pb-6">
//           <div className="flex items-center gap-2 border border-gray-300 rounded-2xl p-2 shadow-sm focus-within:border-gray-500 transition">
//             <input
//               type="text"
//               value={question}
//               onChange={(e) => setQuestion(e.target.value)}
//               onKeyDown={handleKeyDown}
//               placeholder="Ask anything..."
//               className="flex-1 px-3 py-3 outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
//             />

//             <button
//               onClick={askQuestion}
//               disabled={!question.trim() || loading}
//               className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center disabled:bg-gray-300 disabled:cursor-not-allowed transition"
//               aria-label="Send question"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 className="w-5 h-5"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M5 12h14M13 6l6 6-6 6"
//                 />
//               </svg>
//             </button>
//           </div>

         
//         </div>
//       </div>
//     </main>
//   );
// }




"use client";

import React, { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim() || loading) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/openai`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: question.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      setAnswer(data.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry, something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") {
      askQuestion();
    }
  };

  return (
    <main className="sm:min-h-[calc(100vh-60px)] min-h-[calc(100vh-110px)] bg-white flex flex-col">
      {/* Content */}
      <div className="flex-1 w-full max-w-3xl mx-auto px-4 flex flex-col">
        {/* Answer */}
        <div className="flex-1 py-10">
          {!answer && !loading ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-gray-900">
                  <span>Hello Rafi,</span> What can I help with?
                </h2>

                <p className="mt-3 text-gray-500">
                  Ask me anything
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-500 mb-2">
                  You
                </p>

                <p className="text-gray-900 text-lg">
                  {question}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 mb-2">
                  AI Assistant
                </p>

                {loading ? (
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:150ms]" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                ) : (
                  <p className="text-gray-800 leading-7 whitespace-pre-wrap">
                    {answer}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="pb-6">
          <div className="flex items-center gap-2 border border-gray-300 rounded-2xl p-2 shadow-sm focus-within:border-gray-500 transition">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              className="flex-1 px-3 py-3 outline-none text-gray-900 placeholder:text-gray-400 bg-transparent"
            />

            <button
              onClick={askQuestion}
              disabled={!question.trim() || loading}
              className="w-11 h-11 rounded-xl bg-black text-white flex items-center justify-center disabled:bg-gray-300 disabled:cursor-not-allowed transition"
              aria-label="Send question"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M13 6l6 6-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}