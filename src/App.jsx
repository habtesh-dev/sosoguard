import React, { useState, useEffect } from 'react';
import { Search, Shield, Zap, TrendingUp, AlertTriangle, CheckCircle2, Wallet, Bell, Terminal, ChevronRight, Activity, Users, DollarSign, History, ChevronUp, Twitter, MessageCircle, Send, Cpu } from 'lucide-react';

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
          const newLog = logs[step];
          return [...prev, newLog];
        });
        step++;
      }
    }, 500);

    // Simulate AI analysis finishing
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
        sentimentScore: 88, // For the meter (0-100)
        smartMoney: "+$2.5M",
        socialMentions: "+420%"
      });
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-neutral-50 font-sans selection:bg-orange-500/30 relative overflow-x-hidden flex flex-col">
      
      {/* 3D Perspective Grid Background Matching SoSo DEX */}
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
      
      {/* Main content wrapper */}
      <div className="relative z-10 flex-grow flex flex-col">
        
        {/* Floating Pill Navbar */}
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
          <nav className="w-full max-w-5xl bg-[#0a0a0a]/90 backdrop-blur-md border border-neutral-800/80 rounded-full px-2 h-16 flex items-center justify-between shadow-2xl shadow-orange-500/5">
            
            {/* Logo */}
            <div className="flex items-center space-x-2 pl-4 cursor-pointer" onClick={() => {setResult(null); setAnalyzing(false); setSearchQuery('');}}>
              <div className="w-7 h-7 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">SoSo<span className="text-orange-500">Guard</span></span>
            </div>

            {/* Links and Buttons */}
            <div className="flex items-center space-x-6 pr-2">
              <div className="hidden md:flex items-center space-x-5 text-sm text-neutral-400 font-medium">
                <a href="https://x.com/PunnyCrypto" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-colors" /></a>
                <a href="https://t.me/habtamu56" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><MessageCircle className="w-4 h-4 hover:text-white cursor-pointer transition-colors" /></a>
                <a href="mailto:cryptomaster758@gmail.com" aria-label="Email"><Send className="w-4 h-4 hover:text-white cursor-pointer transition-colors" /></a>
                <span className="hover:text-white cursor-pointer transition-colors ml-2">Terminal</span>
              </div>
              
              <button 
                onClick={() => setWalletConnected(!walletConnected)}
                className={`flex items-center space-x-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg ${
                  walletConnected 
                  ? 'bg-neutral-800 border border-neutral-700 text-white hover:bg-neutral-700' 
                  : 'bg-[#f95700] hover:bg-orange-600 text-white shadow-orange-500/20'
                }`}
              >
                {walletConnected ? '0x7F...3A92' : 'Connect Wallet'}
              </button>
            </div>
          </nav>
        </div>

        <main className="max-w-6xl mx-auto px-4 pt-36 pb-12 flex-grow w-full">
          
          {/* Portfolio Dashboard */}
          {walletConnected && (
            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Total Portfolio</p>
                  <h3 className="text-2xl font-bold text-white">$12,450.00</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-orange-500" />
                </div>
              </div>
              <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 flex items-center justify-between border-l-2 border-l-green-500">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Protected Capital</p>
                  <h3 className="text-2xl font-bold text-green-400">$3,200.00</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-500" />
                </div>
              </div>
              <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-400 mb-1">Active Guards</p>
                  <h3 className="text-2xl font-bold text-white">2 Agents Running</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </div>
          )}

          {/* Hero Section */}
          {!result && (
            <div className={`text-center max-w-4xl mx-auto mb-16 mt-8 transition-all duration-500 ${analyzing ? 'opacity-20 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
              <div className="inline-flex items-center space-x-2 mb-10 opacity-80 justify-center">
                <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"/>
                  </svg>
                  <span className="text-3xl font-bold tracking-tight text-white">SoSo<span className="text-orange-500">Guard</span></span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight text-white">
                Eliminate emotion.<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-[#f95700]">Automate discipline.</span>
              </h1>
              <p className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto">
                The first AI trading agent that analyzes on-chain noise to give you clear signals, and automatically extracts your initial seed capital when targets are hit.
              </p>

              {/* Search Box */}
              <form onSubmit={handleSearch} className="relative max-w-xl mx-auto mb-6">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-neutral-500" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-14 pr-40 py-4 bg-[#0a0a0a]/90 border border-neutral-800 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500 transition-all text-lg backdrop-blur-md shadow-2xl shadow-orange-500/5"
                  placeholder="Enter Memecoin (e.g. $PEPE)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={!searchQuery}
                  className="absolute inset-y-2 right-2 flex items-center justify-center px-6 bg-[#f95700] hover:bg-orange-600 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg shadow-orange-500/20 group"
                >
                  <Cpu className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                  Deploy Agent
                </button>
              </form>
            </div>
          )}

          {/* FEATURE 1: Live AI Terminal (Replaces simple loading spinner) */}
          {analyzing && (
            <div className="max-w-2xl mx-auto bg-black/90 border border-neutral-800 rounded-2xl p-1 overflow-hidden shadow-2xl shadow-orange-500/10 animate-in zoom-in-95 duration-300 relative z-20">
              <div className="bg-neutral-900 px-4 py-2 flex items-center space-x-2 border-b border-neutral-800 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="text-xs text-neutral-500 font-mono ml-4 flex-grow text-center">agent-terminal_v1.0.sh</span>
                <Terminal className="w-4 h-4 text-neutral-500" />
              </div>
              <div className="p-6 font-mono text-sm h-64 overflow-y-auto flex flex-col justify-end">
                <div className="space-y-3">
                  {terminalLogs.map((log, i) => {
                     // Safe check
                     const isSuccess = typeof log === 'string' && log.includes('[Success]');
                     return (
                      <div key={i} className="flex items-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <span className="text-orange-500 mr-3">►</span>
                        <span className={isSuccess ? 'text-green-400 font-bold' : 'text-neutral-300'}>{log}</span>
                      </div>
                    )
                  })}
                  <div className="flex items-start animate-pulse">
                    <span className="text-orange-500 mr-3">►</span>
                    <span className="w-2 h-4 bg-orange-500 inline-block"></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* FEATURE 3: Live Agent Activity (Shows when idle) */}
          {!result && !analyzing && (
            <div className="max-w-2xl mx-auto mt-16 text-left animate-in fade-in duration-1000 delay-300">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <h3 className="text-sm font-bold text-neutral-400 uppercase tracking-wider">Live Agent Activity</h3>
                </div>
                <span className="text-xs text-neutral-500">SoSo DEX</span>
              </div>
              
              <div className="space-y-3 relative">
                {/* Fade effect at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
                
                {[
                  { token: '$WIF', action: 'Secured 100 USDC seed capital at 2.5x profit', time: '2 mins ago', color: 'text-green-400', border: 'border-green-500/20' },
                  { token: '$BOME', action: 'Triggered Stoic Exit. Market sentiment dropped 40%', time: '14 mins ago', color: 'text-orange-400', border: 'border-orange-500/20' },
                  { token: '$PEPE', action: 'Smart Money accumulation detected. Alert sent.', time: '1 hr ago', color: 'text-blue-400', border: 'border-blue-500/20' }
                ].map((log, i) => (
                  <div key={i} className={`bg-[#0a0a0a]/60 border ${log.border} rounded-xl p-4 flex items-center justify-between hover:bg-neutral-900/50 transition-colors backdrop-blur-sm`}>
                    <div className="flex items-center space-x-4">
                      <div className={`font-mono font-bold px-2 py-1 bg-neutral-900 rounded-md ${log.color}`}>{log.token}</div>
                      <div className="text-sm text-neutral-300">{log.action}</div>
                    </div>
                    <div className="text-xs text-neutral-500 font-mono hidden md:block">{log.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results Area */}
          {result && !analyzing && (
            <div className="max-w-5xl mx-auto animate-in slide-in-from-bottom-8 zoom-in-95 duration-500">
              
              {/* Back button */}
              <button onClick={() => setResult(null)} className="flex items-center space-x-2 text-neutral-500 hover:text-white mb-6 transition-colors text-sm font-medium">
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back to Search</span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Left: AI Signal & Insights */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 relative overflow-hidden group hover:border-green-500/30 transition-colors shadow-xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                    
                    <div className="flex justify-between items-start mb-6 relative z-10">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Cpu className="w-4 h-4 text-green-500" />
                          <p className="text-sm font-medium text-neutral-400">AI Market Signal</p>
                        </div>
                        <h2 className="text-4xl font-black text-white tracking-tight">{result.token}</h2>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 px-5 py-2.5 rounded-xl flex items-center space-x-2 shadow-lg shadow-green-500/10">
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-green-400 font-bold tracking-widest uppercase">{result.signal}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 relative z-10">
                      <div className="bg-black/60 rounded-xl p-4 border border-neutral-800/50">
                        <span className="text-neutral-500 text-xs uppercase tracking-wider font-semibold block mb-1">Current Price</span>
                        <span className="font-mono text-xl text-white">{result.price}</span>
                      </div>
                      <div className="bg-black/60 rounded-xl p-4 border border-neutral-800/50 flex flex-col justify-center">
                        <span className="text-neutral-500 text-xs uppercase tracking-wider font-semibold block mb-1">AI Confidence</span>
                        <div className="flex items-center space-x-3">
                          <span className="font-bold text-xl text-green-400">{result.confidence}%</span>
                          <div className="h-1.5 flex-grow bg-neutral-800 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: `${result.confidence}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-500/5 border border-orange-500/10 rounded-xl p-5 relative z-10">
                      <p className="text-sm text-neutral-300 leading-relaxed flex items-start">
                        <span className="font-bold text-orange-400 uppercase text-xs tracking-wider mr-3 bg-orange-500/10 px-2 py-1 rounded mt-0.5 shrink-0">Agent Logic</span> 
                        {result.logic}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* FEATURE 2: Fear & Greed Meter */}
                    <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-4 relative overflow-hidden flex flex-col justify-between">
                      <div className="flex justify-center mb-3">
                         <TrendingUp className="w-5 h-5 text-neutral-400" />
                      </div>
                      <p className="text-xs text-neutral-500 mb-2 text-center font-medium">Market Sentiment</p>
                      
                      <div className="w-full mt-1 mb-2">
                        <div className="h-2 w-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full relative">
                          {/* Indicator Marker */}
                          <div 
                            className="absolute top-[-4px] bottom-[-4px] w-1.5 bg-white shadow-md rounded-full border border-neutral-200"
                            style={{ left: `${result.sentimentScore}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-[10px] text-neutral-600 mt-1 uppercase font-bold tracking-wider">
                          <span>Fear</span>
                          <span>Greed</span>
                        </div>
                      </div>
                      <p className="text-red-400 font-bold text-center text-sm">{result.sentiment} ({result.sentimentScore})</p>
                    </div>
                    
                    <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-4 text-center flex flex-col justify-center">
                      <DollarSign className="w-5 h-5 text-neutral-400 mx-auto mb-2" />
                      <p className="text-xs text-neutral-500 mb-1">Smart Money (24h)</p>
                      <p className="text-green-400 font-bold text-lg">{result.smartMoney}</p>
                    </div>
                    
                    <div className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-neutral-800 rounded-2xl p-4 text-center flex flex-col justify-center">
                      <Users className="w-5 h-5 text-neutral-400 mx-auto mb-2" />
                      <p className="text-xs text-neutral-500 mb-1">Social Mentions</p>
                      <p className="text-green-400 font-bold text-lg">{result.socialMentions}</p>
                    </div>
                  </div>
                </div>

                {/* Right: The Stoic Exit Setup */}
                <div className="bg-[#0a0a0a]/90 backdrop-blur-md border border-neutral-800 rounded-3xl p-6 relative overflow-hidden shadow-xl flex flex-col h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f95700] to-orange-400"></div>
                  
                  <div className="flex justify-between items-start mb-6 mt-2">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <Shield className="w-4 h-4 text-orange-500" />
                        <p className="text-sm font-bold text-orange-500 uppercase tracking-wider">The Stoic Exit</p>
                      </div>
                      <h2 className="text-2xl font-bold text-white tracking-tight">Capital Guard</h2>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
                    Auto-extract your initial seed capital when targets hit. Trade with house money, zero emotions.
                  </p>

                  <div className="space-y-5 flex-grow">
                    <div className="bg-black/60 p-4 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-colors focus-within:border-orange-500/50">
                      <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-3 flex items-center justify-between">
                        <span>Seed Capital</span>
                        <span className="text-neutral-600">USDC</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 font-medium">$</span>
                        <input type="number" defaultValue="100" className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-xl py-3 pl-8 pr-4 text-white text-lg focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-mono" />
                      </div>
                    </div>
                    
                    <div className="bg-black/60 p-4 rounded-2xl border border-neutral-800/80 hover:border-neutral-700 transition-colors">
                      <label className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-3 flex items-center justify-between">
                        <span>Exit Trigger</span>
                        <span className="text-neutral-600">Auto-Sell</span>
                      </label>
                      <div className="relative">
                        <select className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-xl py-3 pl-4 pr-10 text-white text-md focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 appearance-none transition-all cursor-pointer font-medium">
                          <option>2x (100% Profit)</option>
                          <option>3x (200% Profit)</option>
                          <option>5x (400% Profit)</option>
                          <option>Sentiment Drop (SoSoValue Alert)</option>
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 rotate-90 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setCapitalProtected(!capitalProtected)}
                    className={`w-full mt-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
                      capitalProtected 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.1)]' 
                      : 'bg-[#f95700] hover:bg-orange-600 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5'
                    }`}
                  >
                    {capitalProtected ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>Guard Activated</span>
                      </>
                    ) : (
                      <>
                        <Shield className="w-5 h-5" />
                        <span>Activate Guard & Execute</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>

        {/* Footer */}
        <footer className="relative z-10 mt-20 pt-16 pb-8 border-t border-neutral-900/50 bg-black/40 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            
            {/* Powered By Sponsors */}
            <div className="flex flex-col items-center justify-center mb-20">
              <p className="text-sm font-bold text-neutral-500 uppercase tracking-widest mb-6">Powered By</p>
              <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-70 hover:opacity-100 transition-all duration-500">
                <span className="text-2xl font-bold tracking-tight text-white">SoSo<span className="text-orange-500">Value</span> API</span>
                <span className="text-2xl font-black italic tracking-tighter text-white">SoSo <span className="text-orange-500">DEX</span></span>
              </div>
            </div>

            {/* Back to Top */}
            <div 
              onClick={scrollToTop}
              className="flex flex-col items-center justify-center cursor-pointer opacity-50 hover:opacity-100 hover:text-orange-500 transition-all mb-16"
            >
              <div className="flex flex-col -space-y-3 mb-2 animate-bounce">
                <ChevronUp className="w-6 h-6" />
                <ChevronUp className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold">Back to Top</span>
            </div>

            {/* Bottom Links */}
            <div className="flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-medium">
              <div className="mb-4 md:mb-0 hover:text-white cursor-pointer transition-colors">
                WhitePaper
              </div>
              <div className="flex flex-wrap justify-center items-center gap-6">
                <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer transition-colors">About SoSoGuard</span>
                <div className="flex items-center space-x-4 ml-4">
                  <a href="https://x.com/PunnyCrypto" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-colors" /></a>
                  <a href="https://t.me/habtamu56" target="_blank" rel="noopener noreferrer" aria-label="Telegram"><MessageCircle className="w-4 h-4 hover:text-white cursor-pointer transition-colors" /></a>
                  <a href="mailto:cryptomaster758@gmail.com" aria-label="Email"><Send className="w-4 h-4 hover:text-white cursor-pointer transition-colors" /></a>
                </div>
              </div>
            </div>

          </div>
        </footer>

      </div>
    </div>
  );
};

export default App;