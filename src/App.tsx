import { useMemo, useState } from "react";

type PingResponse = {
  message: string;
};

function App() {
  const apiBaseUrl = useMemo(() => {
    return import.meta.env.VITE_API_URL || "http://localhost:5000";
  }, []);

  const [result, setResult] = useState<string>("Klik op de knop om /api/ping aan te roepen.");
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${apiBaseUrl}/api/ping`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const data: PingResponse = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      if (error instanceof Error) {
        setResult(`Fout: ${error.message}`);
      } else {
        setResult("Fout: Onbekende fout");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-8 shadow-xl shadow-slate-300/40">
        <h1 className="text-3xl font-bold tracking-tight">Daily Grind</h1>
        <p className="mt-3 text-slate-600">Backend URL: {apiBaseUrl}</p>

        <button
          type="button"
          onClick={testConnection}
          disabled={loading}
          className="mt-6 rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {loading ? "Bezig..." : "Test backend verbinding"}
        </button>

        <h2 className="mt-8 text-lg font-semibold">Resultaat</h2>
        <pre className="mt-2 overflow-auto rounded-lg bg-slate-950 p-4 text-sm text-slate-100">{result}</pre>
      </div>
    </main>
  );
}

export default App;
