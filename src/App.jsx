import React, { useState, useEffect } from 'react';
// N'bɛ baara kɛ ka ɲɛnabɔ: 'Mail' icon አዲስ ጨምረናል፣ 'MessageCircle' አጥፍተናል
import { Search, Shield, Zap, TrendingUp, AlertTriangle, CheckCircle2, Wallet, Bell, Terminal, ChevronRight, Activity, Users, DollarSign, History, ChevronUp, X, Mail, Send, Cpu } from 'lucide-react';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [capitalProtected, setCapitalProtected] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    
    setAnalyzing(true);
    setResult(null);
    setTerminalLogs(['[System] Initializing SoSoGuard Agent...']);
    
    const logs = [
      '[Data] Fetching SoSoValue Smart Money flows...',
      '[Network] Scanning X (Twitter) & Telegram sentiment...',
      '[Analysis] Correlating on-chain buys with social spikes...',
      '[Action] Calculating optimal risk/reward & Stoic exit...',
      '[Success] Market Signal generated successfully.'
    ];
    
    let step = 0;
    const interval = setInterval(() => {
      if (step < logs.length) {
        setTerminalLogs(prev => {
          const nextLog = logs[step];
          return nextLog ? [...prev, nextLog] : prev;
        });
        step++;
      }
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      setAnalyzing(false);
      setResult({
        token: searchQuery.toUpperCase(),
        signal: 'BUY',
        confidence: 87,
        logic: "High social sentiment detected on X. SoSoValue smart money index shows accumulation. Risk/Reward ratio is optimal for short-term entry.",
        price: "$0.000452",
        sentiment: "Extreme Greed",
        sentimentScore: 88, 
        smartMoney: "+$2.5M",
        socialMentions: "+420%"
      });
    }, 3500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-neutral-50 font-sans selection:bg-orange-500/30 relative overflow-x-hidden flex flex-col">
      {/* Background Visuals */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent z-10 h-[60%]"></div>
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-full h-[40%] bg-orange-600/5 blur-[120px] z-0"></div>
        <div 
          className="absolute bottom-[-10%] left-[-50%] right-[-50%] h-[100vh] z-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(249, 115, 22, 0.4) 1px, transparent 1px), linear-gradient(to top, rgba(249, 115, 22, 0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            transform: 'perspective(1000px) rotateX(82deg) translateY(200px) scale(1.5)',
            transformOrigin: 'top center',
          }}
        ></div>
      </div>
      
      <div className="relative z-10 flex-grow flex flex-col">
        {/* Navigation */}
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
          <nav className="w-full max-w-5xl bg-[#0a0a0a]/90 backdrop-blur-md border border-neutral-800/80 rounded-full px-2 h-16 flex items-center justify-between shadow-2xl">
            <div className="flex items-center space-x-2 pl-4 cursor-pointer" onClick={() => {setResult(null); setAnalyzing(false); setSearchQuery('');}}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">SoSo<span className="text-orange-500">Guard</span></span>
            </div>

            <div className="flex items-center space-x-6 pr-2">
              <div className="hidden md:flex items-center space-x-5 text-sm text-neutral-400 font-medium">
                {/* N'bɛ baara kɛ ka ɲɛnabɔ: Header ላይ ያሉትን አይከኖች አስተካክለናል */}
                <a href="https://x.com/PunnyCrypto" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><X className="w-4 h-4 hover:text-white transition-colors" /></a>
                <a href="https://t.me/habtamu56" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><Send className="w-4 h-4 hover:text-white transition-colors" /></a>
                <a href="mailto:cryptomaster758@gmail.com" aria-label="Email"><Mail className="w-4 h-4 hover:text-white transition-colors" /></a>
              </div>
              <button onClick={() => setWalletConnected(!walletConnected)} className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${walletConnected ? 'bg-neutral-800 text-white' : 'bg-[#f95700] text-white shadow-lg'}`}>
              </button>
            </div>
          </nav>
        </div>

        <main className="max-w-6xl mx-auto px-4 pt-36 pb-12 flex-grow w-full">
          {/* Dashboard (Visible when wallet connected) */}
          {walletConnected && (
            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in duration-500">
              <div className="bg-[#0a0a0a]/80 border border-neutral-800 rounded-2xl p-5 flex items-center justify-between">
                <div><p className="text-sm text-neutral-400">Total Portfolio</p><h3 className="text-2xl font-bold font-mono">$12,450.00</h3></div>
                <Wallet className="w-5 h-5 text-orange-500" />
              </div>
              <div className="bg-[#0a0a0a]/80 border border-neutral-800 rounded-2xl p-5 flex items-center justify-between border-l-2 border-l-green-500">
                <div><p className="text-sm text-neutral-400">Protected Capital</p><h3 className="text-2xl font-bold font-mono text-green-400">$3,200.00</h3></div>
                <Shield className="w-5 h-5 text-green-500" />
              </div>
              <div className="bg-[#0a0a0a]/80 border border-neutral-800 rounded-2xl p-5 flex items-center justify-between">
                <div><p className="text-sm text-neutral-400">Active Guards</p><h3 className="text-2xl font-bold">2 Agents Running</h3></div>
                <Zap className="w-5 h-5 text-blue-500" />
              </div>
            </div>
          )}

          {/* Initial Search UI */}
          {!result && (
            <div className={`text-center max-w-4xl mx-auto mb-16 mt-8 transition-all duration-500 ${analyzing ? 'opacity-20 scale-95' : 'opacity-100'}`}>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight">
                Eliminate emotion.<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#f95700]">Automate discipline.</span>
              </h1>
              <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                SoSoGuard AI analyzes on-chain noise for clear signals and extracts your initial seed capital automatically.
              </p>
              <form onSubmit={handleSearch} className="relative max-w-xl mx-auto">
                <input 
                  type="text" 
                  className="block w-full pl-6 pr-40 py-4 bg-[#0a0a0a]/90 border border-neutral-800 rounded-2xl text-white placeholder-neutral-500 focus:ring-2 focus:ring-orange-500/50 outline-none" 
                  placeholder="Enter Memecoin (e.g. $PEPE)" 
                  value={searchQuery} 
                  onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button 
                  type="submit" 
                  disabled={!searchQuery} 
                  className="absolute inset-y-2 right-2 px-6 bg-[#f95700] hover:bg-orange-600 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20"
                >
                  Deploy Agent
                </button>
              </form>
            </div>
          )}

          {/* AI Terminal Simulation */}
          {analyzing && (
            <div className="max-w-2xl mx-auto bg-black/90 border border-neutral-800 rounded-2xl p-1 overflow-hidden shadow-2xl relative z-20">
              <div className="bg-neutral-900 px-4 py-2 flex items-center border-b border-neutral-800 rounded-t-xl">
                <span className="text-xs text-neutral-500 font-mono flex-grow text-center">agent-terminal_v1.0.sh</span>
                <Terminal className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="p-6 font-mono text-sm h-64 overflow-y-auto flex flex-col justify-end">
                <div className="space-y-3">
                  {terminalLogs.map((log, i) => (
                    <div key={i} className="flex items-start animate-in fade-in duration-300">
                      <span className="text-orange-500 mr-3">►</span>
                      <span className={typeof log === 'string' && log.includes('[Success]') ? 'text-green-400 font-bold' : 'text-neutral-300'}>
                        {log}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-start animate-pulse">
                    <span className="text-orange-500 mr-3">►</span><span className="w-2 h-4 bg-orange-500"></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Analysis Results UI */}
          {result && !analyzing && (
            <div className="max-w-5xl mx-auto animate-in slide-in-from-bottom-8 duration-500">
              <button onClick={() => setResult(null)} className="text-neutral-500 hover:text-white mb-6 text-sm flex items-center">
                <ChevronRight className="w-4 h-4 rotate-180 mr-1" />Back
              </button>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-[#0a0a0a] border border-neutral-800 rounded-3xl p-8 relative overflow-hidden shadow-xl">
                    <div className="flex justify-between items-start mb-6">
                      <div><p className="text-sm text-neutral-400 mb-1 uppercase font-bold tracking-widest">AI Market Signal</p><h2 className="text-4xl font-black text-white tracking-tighter">{result.token}</h2></div>
                      <div className="bg-green-500/10 border border-green-500/20 px-5 py-2 rounded-xl text-green-400 font-bold uppercase tracking-widest">{result.signal}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6 font-mono">
                      <div className="bg-black/50 p-4 rounded-xl border border-neutral-800"><p className="text-xs text-neutral-500 mb-1">Price</p><p className="text-xl font-bold">{result.price}</p></div>
                      <div className="bg-black/50 p-4 rounded-xl border border-neutral-800"><p className="text-xs text-neutral-500 mb-1">Confidence</p><p className="text-xl font-bold text-green-400">{result.confidence}%</p></div>
                    </div>
                    <div className="bg-orange-500/5 border border-orange-500/10 p-5 rounded-xl">
                      <p className="text-sm leading-relaxed text-neutral-300">
                        <span className="font-bold text-orange-400 mr-2 uppercase tracking-tighter">Agent Logic:</span>{result.logic}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#0a0a0a] border border-neutral-800 rounded-3xl p-6 relative overflow-hidden shadow-xl">
                  <h3 className="text-xl font-bold text-white mb-4">Capital Guard</h3>
                  <button 
                    onClick={() => setCapitalProtected(!capitalProtected)} 
                    className={`w-full py-4 rounded-xl font-bold transition-all ${capitalProtected ? 'bg-green-500/10 text-green-400 border border-green-500' : 'bg-[#f95700] text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20'}`}
                  >
                    {capitalProtected ? 'Guard Activated' : 'Activate Guard'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-20 py-12 border-t border-neutral-900/50 bg-black/40">
          <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
            <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-6">Powered By</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-70 mb-12">
              <span className="text-2xl font-bold text-white tracking-tighter">SoSo<span className="text-orange-500">Value</span> API</span>
              <span className="text-2xl font-black italic text-white tracking-tighter">SoSo <span className="text-orange-500">DEX</span></span>
            </div>
            <div onClick={scrollToTop} className="cursor-pointer text-neutral-500 hover:text-orange-500 flex flex-col items-center">
              <ChevronUp className="w-5 h-5 animate-bounce" /><span className="text-[10px] uppercase font-bold tracking-widest">Top</span>
            </div>
            
            {/* N'bɛ baara kɛ ka ɲɛnabɔ: Footer ላይ ያሉትንም አይከኖች አስተካክለናል (ካሉ) */}
            <div className="mt-12 flex space-x-6">
              <a href="https://x.com/PunnyCrypto" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><X className="w-4 h-4 text-neutral-500 hover:text-white transition-colors" /></a>
              <a href="https://t.me/habtamu56" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><Send className="w-4 h-4 text-neutral-500 hover:text-white transition-colors" /></a>
              <a href="mailto:cryptomaster758@gmail.com" aria-label="Email"><Mail className="w-4 h-4 text-neutral-500 hover:text-white transition-colors" /></a>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;