import { useEffect } from 'react';

export default function App() {
    useEffect(() => {

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>


            <div style={{ height: '5px' }} />

            {/* 👇️ scroll to top on button click */}
            <button
                onClick={() => {window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });}}

                className="fixed p-4 text-xs bottom-10 right-10 bg-zinc-800 text-white rounded-full text-center hover:bg-zinc-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clip-rule="evenodd" />
                </svg>
            </button>



        </div>
    );
}