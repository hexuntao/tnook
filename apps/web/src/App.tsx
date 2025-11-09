import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to Tnook</h1>
        <p className="text-muted-foreground">A Turborepo project with Vite, React, and shadcn/ui</p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default App;
