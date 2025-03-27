"use client";

import { setIsChatAiOpen } from "@/feature/reducer/chatAiSlice";
import { RootState } from "@/feature/store";
import { useDispatch, useSelector } from "react-redux";

const ChatAi = () => {
    const { isChatAiOpen } = useSelector((state: RootState) => state.chatAi);
    const dispatch = useDispatch();

    const handleCloseChat = () => {
        dispatch(setIsChatAiOpen(false));
    };

    if (!isChatAiOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 z-40 bg-gray-900/60 backdrop-blur-sm"
                onClick={handleCloseChat}
            />
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md bg-white rounded-lg shadow-xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Chat mit AI-Werkstatt</h2>
                <div className="mb-4 h-48 overflow-y-auto bg-gray-100 p-3 rounded">
                    <p className="text-gray-600">Stelle mir eine Frage!</p>
                </div>
                <div className="flex gap-2">
                    <input
                        type="text"
                        className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Deine Frage..."
                    />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Senden
                    </button>
                </div>
            </div>
        </>
    );
};

export default ChatAi;