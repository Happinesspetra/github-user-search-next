interface ErrorMessageProps {
    message: string;
  }
  
  export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
      <div className="rounded-md bg-black-50 dark:bg-black-900/30 p-4 my-4">
        <div className="flex">
          <div className="text-black-700 dark:text-black-200">
            <h3 className="text-sm font-medium">Error</h3>
            <div className="mt-2 text-sm">{message}</div>
          </div>
        </div>
      </div>
    );
  }
