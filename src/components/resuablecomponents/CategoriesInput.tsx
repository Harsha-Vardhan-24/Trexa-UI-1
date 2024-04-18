import React, { useState, useEffect, useRef } from 'react';

interface AutocompleteProps {
    suggestions: string[];
    onSelect: (value: string) => void;
}

const CategoriesInput: React.FC<AutocompleteProps> = ({ suggestions, onSelect }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
   
    useEffect(() => {
        // Function to close suggestions dropdown when clicking outside the input
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };

        // Adding event listener to handle clicks outside the input
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Removing event listener when component unmounts
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);

        // Filter suggestions based on input value
        const filtered = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        );
        setFilteredSuggestions(filtered);
        setShowSuggestions(true);
    };

    const handleSelect = (value: string) => {
        setInputValue(value);
        setShowSuggestions(false)
        onSelect(value)
    };

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            const newValue = inputValue.trim();
          
            if (!suggestions.includes(newValue)) {
                suggestions.push(newValue)
               
            }
            setInputValue(inputValue.trim());
            setShowSuggestions(false);
            onSelect(inputValue.trim())
        }
    };

    const handleFocus = () => {
        // Show all suggestions when input is focused
        setFilteredSuggestions(suggestions);
        setShowSuggestions(true);
    };

   
    return (
        <div className="relative  w-full" ref={inputRef}>
            <div className="flex flex-wrap items-center">
                <input
                    type="text"
                    className="input-text-area"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus} // Handle backspace key press
                    placeholder="Catogery"
                />

            </div>
            {showSuggestions && (
                <ul className="absolute z-10 left-0 w-full bg-white border border-gray-300 rounded mt-1 py-1 overflow-y-auto max-h-48">
                    {/* Add suggestion */}
                    <li
                        className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={handleAdd}
                    >
                        {inputValue.toString() !== '' && (
                            <div className='flex flex-wrap items-center'>
                                Add
                                <p className='rounded-md text-center bg-blue-100 text-blue p-2 font-medium mr-1'>{inputValue.toString()}</p>
                            </div>
                        )}
                    </li>
                    {/* Filtered suggestions */}
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleSelect(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CategoriesInput;
