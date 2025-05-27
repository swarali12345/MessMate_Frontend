function App() {
  return (
    <div className="min-h-screen bg-background text-textPrimary font-sans">
      <header className="bg-secondary text-white px-6 py-4">
        <h1 className="text-xl font-bold">Canteen Ordering System</h1>
      </header>

      <main className="p-6">
        <div className="bg-accent p-4 rounded-md mb-4">
          <p className="text-sm">Welcome! Choose your canteen to get started.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border border-gray-200 rounded-md shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-2">Sub-Canteen 1</h2>
            <button className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-md w-full">
              View Menu
            </button>
          </div>

          <div className="p-4 border border-gray-200 rounded-md shadow-sm bg-white">
            <h2 className="text-lg font-semibold mb-2">Sub-Canteen 2</h2>
            <button className="bg-primary hover:opacity-90 text-white px-4 py-2 rounded-md w-full">
              View Menu
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 p-4 mt-8">
        &copy; 2025 Canteen Ordering System
      </footer>
    </div>
  );
}

export default App;
