export default function TextInput({ type = 'text', label, name, rows = "1", disabled = false }) {
    const commonProps = {
        name,
        className: "text-input",
        required: true,
    };

    return (
        <div>
            <label className="block text-sm mb-2" htmlFor={name}>
                {label}
            </label>
            {type === 'textarea' ? (
                <textarea
                    {...commonProps}
                    rows={rows}
                    disabled={disabled}
                />
            ) : (
                <input
                    type={type}
                    {...commonProps}
                    disabled={disabled}
                />
            )}
        </div>
    );
}