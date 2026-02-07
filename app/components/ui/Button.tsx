type ButtonProps = {
    name: string;
    isLoading: boolean;
    disabled?: boolean;
}

export function Button({ name, isLoading, disabled = false }: ButtonProps) {
    const isDisabled = disabled || isLoading;

    return (
        <button
            className={`p-4 mt-4 border rounded-2xl border-white w-full
                ${isDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer hover:bg-white/10'}
                ${isLoading ? 'cursor-wait' : ''}`}
            type="submit"
            disabled={isDisabled}>
                {isLoading ? 'Fetching...' : name}
        </button>
    )
}