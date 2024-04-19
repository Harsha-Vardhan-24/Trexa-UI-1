import React, { useState, useEffect, useRef } from 'react';

interface AutocompleteProps {
    suggestions: string[];
    onSelect: (value: string[]) => void;
}

const AutocompleteInput: React.FC<AutocompleteProps> = ({ suggestions, onSelect }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const handleRemoveFilter = (index: number) => {

        let items = selectedValues.filter((item, i) => i != index)
        setSelectedValues(items)
        onSelect(items)
    }
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
        setInputValue('');
        let items = selectedValues
        if (!selectedValues.includes(value)) {
            items.push(value)
            setSelectedValues(items) // Add value if not already selected
        }
        // Add value to selectedValues
        setShowSuggestions(false)
        onSelect(selectedValues)
    };

    const handleAdd = () => {
        if (inputValue.trim() !== '') {
            const newValue = inputValue.trim();
            let items = selectedValues
            if (!selectedValues.includes(newValue)) {
                items.push(newValue)
                setSelectedValues(items) // Add value if not already selected
            }
            setInputValue('');
            setShowSuggestions(false);
            onSelect(selectedValues)
        }
    };

    const handleFocus = () => {
        // Show all suggestions when input is focused
        setFilteredSuggestions(suggestions);
        setShowSuggestions(true);
    };

    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && inputValue === '') {
            let items = selectedValues
            items = items.slice(0, -1)
            setSelectedValues(items)
            onSelect(items) // Remove the last selected value
        }
    };

    return (
        <div className="relative bottom-2 w-full" ref={inputRef}>
            <div className="flex flex-wrap items-center">
                {selectedValues.map((item, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 mr-2 mt-2 mb-2 text-sm font-medium leading-tight text-gray-700 bg-gray-200 rounded-full"
                    >
                        {item}
                        <button type="button" className="ml-2" onClick={() => handleRemoveFilter(index)}>
                            x


                        </button>
                    </span>
                ))}


                <input
                    type="text"
                    className="block w-full  text-sm input-text-area"
                    value={inputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onKeyDown={handleBackspace} // Handle backspace key press
                    placeholder="Search here..."
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

export default AutocompleteInput;
