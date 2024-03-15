type LoadingPageProps = {
  text?: string;
};

const LoadingPage: React.FC<LoadingPageProps> = ({ text = 'Carregando...' }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex items-center space-x-4">
        <div className="animate-spin rounded-full h-36 w-36 border-t-4 border-orange-500 border-t-orange-500 border-r-orange-500"></div>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl">{text}</h1>
      </div>
    </div>
  );
}

export default LoadingPage;
