interface ErrorMessageProps {
    message: string;
  }
  
  export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
      <div className="rounded-md bg-red-50 dark:bg-red-900/30 p-4 my-4">
        <div className="flex">
          <div className="text-red-700 dark:text-red-200">
            <h3 className="text-sm font-medium">Error</h3>
            <div className="mt-2 text-sm">{message}</div>
          </div>
        </div>
      </div>
    );
  }