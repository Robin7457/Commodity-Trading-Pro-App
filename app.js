// Application Data
const appData = {
  "commodities": {
    "mcx": [
      {"symbol": "GOLD", "name": "Gold", "hindi": "सोना", "price": 76450, "change": 2.3, "volume": 15420, "atr": 890, "sector": "precious_metals"},
      {"symbol": "SILVER", "name": "Silver", "hindi": "चांदी", "price": 89750, "change": -1.8, "volume": 8930, "atr": 2450, "sector": "precious_metals"},
      {"symbol": "COPPER", "name": "Copper", "hindi": "तांबा", "price": 765, "change": 0.8, "volume": 6780, "atr": 18, "sector": "base_metals"},
      {"symbol": "ALUMINIUM", "name": "Aluminium", "hindi": "एल्यूमीनियम", "price": 225, "change": 1.2, "volume": 4560, "atr": 8, "sector": "base_metals"},
      {"symbol": "ZINC", "name": "Zinc", "hindi": "जिंक", "price": 245, "change": -0.5, "volume": 3420, "atr": 12, "sector": "base_metals"},
      {"symbol": "CRUDEOIL", "name": "Crude Oil", "hindi": "कच्चा तेल", "price": 6780, "change": 1.9, "volume": 12340, "atr": 185, "sector": "energy"}
    ],
    "ncdex": [
      {"symbol": "CHANA", "name": "Chana", "hindi": "चना", "price": 6240, "change": 0.4, "volume": 2890, "atr": 125, "sector": "pulses", "seasonal_bias": "bullish", "monsoon_impact": "medium"},
      {"symbol": "WHEAT", "name": "Wheat", "hindi": "गेहूं", "price": 2580, "change": -0.2, "volume": 4560, "atr": 45, "sector": "cereals", "seasonal_bias": "neutral", "monsoon_impact": "high"},
      {"symbol": "SOYBEAN", "name": "Soybean", "hindi": "सोयाबीन", "price": 4950, "change": 1.5, "volume": 3670, "atr": 95, "sector": "oilseeds", "seasonal_bias": "bearish", "monsoon_impact": "high"},
      {"symbol": "JEERA", "name": "Jeera", "hindi": "जीरा", "price": 62000, "change": -1.2, "volume": 1890, "atr": 1850, "sector": "spices", "seasonal_bias": "bullish", "monsoon_impact": "low"},
      {"symbol": "TURMERIC", "name": "Turmeric", "hindi": "हल्दी", "price": 13600, "change": 0.8, "volume": 2340, "atr": 380, "sector": "spices", "seasonal_bias": "neutral", "monsoon_impact": "medium"},
      {"symbol": "GUARSEED", "name": "Guar Seed", "hindi": "ग्वार सीड", "price": 5450, "change": 2.1, "volume": 1560, "atr": 145, "sector": "oilseeds", "seasonal_bias": "bullish", "monsoon_impact": "high"}
    ]
  },
  "signals": [
    {
      "commodity": "GOLD",
      "signal": "BUY",
      "entry": 76200,
      "stop": 75350,
      "target": 77800,
      "confidence": 8,
      "rationale": "Strong seasonal demand + INR weakness",
      "rationale_hindi": "मजबूत मौसमी मांग + रुपया कमजोरी",
      "risk_reward": 1.88,
      "expected_value": 12.5
    },
    {
      "commodity": "CHANA",
      "signal": "BUY", 
      "entry": 6200,
      "stop": 6050,
      "target": 6550,
      "confidence": 7,
      "rationale": "Post-monsoon supply concerns",
      "rationale_hindi": "मानसून के बाद आपूर्ति की चिंता",
      "risk_reward": 2.33,
      "expected_value": 8.9
    },
    {
      "commodity": "COPPER",
      "signal": "SELL",
      "entry": 770,
      "stop": 790,
      "target": 735,
      "confidence": 6,
      "rationale": "Global demand slowdown fears",
      "rationale_hindi": "वैश्विक मांग में मंदी का डर",
      "risk_reward": 1.75,
      "expected_value": 6.2
    }
  ],
  "educational_content": {
    "basics": {
      "title": "Trading Basics",
      "title_hindi": "व्यापार की बुनियादी बातें",
      "topics": [
        {"en": "What is Commodity Trading", "hi": "कमोडिटी ट्रेडिंग क्या है"},
        {"en": "MCX vs NCDEX", "hi": "MCX बनाम NCDEX"},
        {"en": "Futures Contracts", "hi": "फ्यूचर्स कॉन्ट्रैक्ट"},
        {"en": "Margin Requirements", "hi": "मार्जिन आवश्यकताएं"}
      ]
    },
    "risk-mgmt": {
      "title": "Risk Management",
      "title_hindi": "जोखिम प्रबंधन",
      "topics": [
        {"en": "Position Sizing", "hi": "पोजीशन साइजिंग"},
        {"en": "Stop Loss Strategy", "hi": "स्टॉप लॉस रणनीति"},
        {"en": "Risk-Reward Ratio", "hi": "जोखिम-इनाम अनुपात"},
        {"en": "Portfolio Diversification", "hi": "पोर्टफोलियो विविधीकरण"}
      ]
    },
    "seasonal": {
      "title": "Seasonal Patterns",
      "title_hindi": "मौसमी पैटर्न",
      "topics": [
        {"en": "Monsoon Impact", "hi": "मानसून का प्रभाव"},
        {"en": "Festival Demand", "hi": "त्योहारी मांग"},
        {"en": "Harvest Cycles", "hi": "फसल चक्र"},
        {"en": "Weather Patterns", "hi": "मौसम के पैटर्न"}
      ]
    },
    "weather": {
      "title": "Weather Impact",
      "title_hindi": "मौसम का प्रभाव",
      "topics": [
        {"en": "Drought Effects", "hi": "सूखे के प्रभाव"},
        {"en": "Excessive Rainfall", "hi": "अत्यधिक बारिश"},
        {"en": "Temperature Variations", "hi": "तापमान में बदलाव"},
        {"en": "Crop Health Monitoring", "hi": "फसल स्वास्थ्य निगरानी"}
      ]
    }
  },
  "backtest_results": {
    "win_rate": 68.5,
    "profit_factor": 1.85,
    "max_drawdown": -12.3,
    "sharpe_ratio": 1.42,
    "total_returns": 23.7
  },
  "journal_entries": [
    {
      "id": 1,
      "date": "2025-08-15",
      "commodity": "GOLD",
      "entry": 76100,
      "exit": 76950,
      "quantity": 1,
      "pnl": 850,
      "notes": "Festival demand surge as expected"
    },
    {
      "id": 2,
      "date": "2025-08-14", 
      "commodity": "SILVER",
      "entry": 89500,
      "exit": 88750,
      "quantity": 2,
      "pnl": -1500,
      "notes": "Stopped out due to strong dollar"
    },
    {
      "id": 3,
      "date": "2025-08-13",
      "commodity": "CHANA",
      "entry": 6150,
      "exit": 6380,
      "quantity": 3,
      "pnl": 690,
      "notes": "Good seasonal pattern play"
    }
  ],
  "weather_data": {
    "monsoon_status": "Normal",
    "rainfall_deviation": "+5%",
    "agricultural_outlook": "Favorable",
    "impact_commodities": ["WHEAT", "SOYBEAN", "CHANA"]
  }
};

// Application State
class AppState {
  constructor() {
    this.currentLanguage = 'en';
    this.currentTheme = 'light';
    this.activeSection = 'dashboard';
    this.activeEducationTab = 'basics';
    this.journalEntries = [...appData.journal_entries];
  }

  setLanguage(lang) {
    this.currentLanguage = lang;
    this.applyLanguage();
  }

  setTheme(theme) {
    this.currentTheme = theme;
    this.applyTheme();
  }

  applyLanguage() {
    document.documentElement.setAttribute('data-lang', this.currentLanguage);
    
    // Update all translatable elements
    document.querySelectorAll('[data-en][data-hi]').forEach(element => {
      const text = this.currentLanguage === 'hi' ? 
        element.getAttribute('data-hi') : 
        element.getAttribute('data-en');
      element.textContent = text;
    });

    // Update language toggle button
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
      langToggle.textContent = this.currentLanguage === 'en' ? 'हि' : 'EN';
    }
  }

  applyTheme() {
    document.documentElement.setAttribute('data-color-scheme', this.currentTheme);
    
    // Update theme toggle button
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      themeToggle.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
  }

  setActiveSection(section) {
    console.log('Setting active section to:', section); // Debug log
    this.activeSection = section;
    this.updateNavigation();
    this.updateSections();
  }

  updateNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.dataset.section === this.activeSection) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  updateSections() {
    console.log('Updating sections, active:', this.activeSection); // Debug log
    document.querySelectorAll('.section').forEach(section => {
      console.log('Section ID:', section.id, 'Target:', this.activeSection); // Debug log
      if (section.id === this.activeSection) {
        section.style.display = 'block';
        section.classList.add('active');
      } else {
        section.style.display = 'none';
        section.classList.remove('active');
      }
    });
  }

  addJournalEntry(entry) {
    const newEntry = {
      ...entry,
      id: Date.now(),
      pnl: (parseFloat(entry.exit) - parseFloat(entry.entry)) * parseInt(entry.quantity)
    };
    this.journalEntries.unshift(newEntry);
    this.updateJournalDisplay();
  }

  updateJournalDisplay() {
    renderJournalTable();
  }
}

// Initialize app state
const appState = new AppState();

// Utility Functions
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

function formatNumber(num, decimals = 2) {
  return new Intl.NumberFormat('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num);
}

function getColorForChange(change) {
  if (change > 0) return '#16a34a';  // green
  if (change < 0) return '#dc2626';  // red
  return '#6b7280';  // gray
}

function updateDateTime() {
  const now = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Kolkata'
  };
  
  const dateTimeElement = document.getElementById('currentDateTime');
  if (dateTimeElement) {
    if (appState.currentLanguage === 'hi') {
      dateTimeElement.textContent = now.toLocaleDateString('hi-IN', options) + ' IST';
    } else {
      dateTimeElement.textContent = now.toLocaleDateString('en-IN', options) + ' IST';
    }
  }
}

// Signal Card Rendering
function createSignalCard(signal) {
  const commodity = [...appData.commodities.mcx, ...appData.commodities.ncdex]
    .find(c => c.symbol === signal.commodity);
  
  if (!commodity) return '';

  const changeClass = commodity.change >= 0 ? 'positive' : 'negative';
  const signalClass = signal.signal.toLowerCase();
  const rationale = appState.currentLanguage === 'hi' ? signal.rationale_hindi : signal.rationale;
  
  // Add seasonal and weather indicators for NCDEX commodities
  let indicators = '';
  if (commodity.seasonal_bias) {
    const seasonalText = appState.currentLanguage === 'hi' ? 
      (commodity.seasonal_bias === 'bullish' ? 'तेजी' : 
       commodity.seasonal_bias === 'bearish' ? 'मंदी' : 'तटस्थ') :
      commodity.seasonal_bias;
    indicators += `<span class="seasonal-indicator ${commodity.seasonal_bias}">🌾 ${seasonalText}</span>`;
  }
  
  if (commodity.monsoon_impact) {
    const impactText = appState.currentLanguage === 'hi' ? 
      (commodity.monsoon_impact === 'high' ? 'उच्च' : 
       commodity.monsoon_impact === 'medium' ? 'मध्यम' : 'कम') :
      commodity.monsoon_impact;
    indicators += `<span class="weather-indicator ${commodity.monsoon_impact}">🌧️ ${impactText}</span>`;
  }

  return `
    <div class="signal-card">
      <div class="signal-header">
        <div>
          <div class="signal-symbol">${commodity.symbol}</div>
          <div class="signal-hindi">${commodity.hindi}</div>
        </div>
        <span class="signal-badge ${signalClass}">${signal.signal}</span>
      </div>
      <div class="signal-body">
        <div class="signal-price">
          <span class="current-price">${formatCurrency(commodity.price)}</span>
          <span class="price-change ${changeClass}">${commodity.change >= 0 ? '+' : ''}${commodity.change}%</span>
        </div>
        
        <div class="signal-levels">
          <div class="level-item">
            <div class="level-label">${appState.currentLanguage === 'hi' ? 'एंट्री' : 'ENTRY'}</div>
            <div class="level-value">${formatCurrency(signal.entry)}</div>
          </div>
          <div class="level-item">
            <div class="level-label">${appState.currentLanguage === 'hi' ? 'स्टॉप' : 'STOP'}</div>
            <div class="level-value">${formatCurrency(signal.stop)}</div>
          </div>
          <div class="level-item">
            <div class="level-label">${appState.currentLanguage === 'hi' ? 'टारगेट' : 'TARGET'}</div>
            <div class="level-value">${formatCurrency(signal.target)}</div>
          </div>
        </div>

        ${indicators ? `<div class="signal-indicators" style="margin: 12px 0; display: flex; gap: 8px; flex-wrap: wrap;">${indicators}</div>` : ''}
        
        <div class="signal-metrics">
          <div class="confidence-score">
            <span style="font-size: 12px; color: var(--color-text-secondary);">${appState.currentLanguage === 'hi' ? 'विश्वास' : 'Confidence'}</span>
            <div class="confidence-bar">
              <div class="confidence-fill" style="width: ${signal.confidence * 10}%"></div>
            </div>
            <span>${signal.confidence}/10</span>
          </div>
          <div class="rr-ratio">
            R:R ${formatNumber(signal.risk_reward, 2)}
          </div>
        </div>
        
        <div class="signal-rationale">
          <strong>${appState.currentLanguage === 'hi' ? 'कारण:' : 'Rationale:'}</strong> ${rationale}
        </div>
      </div>
    </div>
  `;
}

function renderTopSignals() {
  const container = document.getElementById('topSignals');
  if (!container) return;
  
  const topSignals = appData.signals.slice(0, 3);
  container.innerHTML = topSignals.map(createSignalCard).join('');
}

function renderAllSignals() {
  const container = document.getElementById('allSignals');
  if (!container) return;
  
  container.innerHTML = appData.signals.map(createSignalCard).join('');
}

// Market Heatmap
function renderHeatmap() {
  const container = document.getElementById('marketHeatmap');
  if (!container) return;
  
  const allCommodities = [...appData.commodities.mcx, ...appData.commodities.ncdex];
  
  container.innerHTML = allCommodities.map(commodity => {
    const backgroundColor = getColorForChange(commodity.change);
    const textColor = '#ffffff';
    
    return `
      <div class="heatmap-item" style="background-color: ${backgroundColor}; color: ${textColor};">
        <div class="heatmap-symbol">${commodity.symbol}</div>
        <div class="heatmap-change">${commodity.change >= 0 ? '+' : ''}${commodity.change}%</div>
      </div>
    `;
  }).join('');
}

// Risk Calculator
function updateRiskCalculator() {
  const accountSize = parseFloat(document.getElementById('accountSize')?.value || 0);
  const riskPercent = parseFloat(document.getElementById('riskPercent')?.value || 0);
  const entryPrice = parseFloat(document.getElementById('entryPrice')?.value || 0);
  const stopLoss = parseFloat(document.getElementById('stopLoss')?.value || 0);
  
  if (accountSize && riskPercent && entryPrice && stopLoss && entryPrice !== stopLoss) {
    const riskAmount = (accountSize * riskPercent) / 100;
    const riskPerUnit = Math.abs(entryPrice - stopLoss);
    const positionSize = Math.floor(riskAmount / riskPerUnit);
    const totalCost = positionSize * entryPrice;
    
    // Add brokerage and fees (estimated)
    const brokerage = totalCost * 0.0003; // 0.03%
    const totalCostWithFees = totalCost + brokerage;
    
    const positionSizeEl = document.getElementById('positionSize');
    const riskAmountEl = document.getElementById('riskAmount');
    const totalCostEl = document.getElementById('totalCost');
    
    if (positionSizeEl) positionSizeEl.textContent = positionSize.toString();
    if (riskAmountEl) riskAmountEl.textContent = formatCurrency(riskAmount);
    if (totalCostEl) totalCostEl.textContent = formatCurrency(totalCostWithFees);
  }
}

// Education Content
function renderEducationContent(tabId) {
  const container = document.getElementById('educationContent');
  if (!container) return;
  
  const content = appData.educational_content[tabId];
  if (!content) return;
  
  const title = appState.currentLanguage === 'hi' ? content.title_hindi : content.title;
  
  container.innerHTML = `
    <h3>${title}</h3>
    <div class="topic-list">
      ${content.topics.map(topic => `
        <div class="topic-item">
          <div class="topic-title">${appState.currentLanguage === 'hi' ? topic.hi : topic.en}</div>
          <div class="topic-description">
            ${appState.currentLanguage === 'hi' ? 
              'इस विषय के बारे में विस्तृत जानकारी प्राप्त करने के लिए क्लिक करें।' : 
              'Click to learn more about this topic in detail.'}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// Backtest Results
function renderBacktestResults() {
  const container = document.getElementById('backtestResults');
  if (!container) return;
  
  const results = appData.backtest_results;
  
  container.innerHTML = `
    <div class="metric-card">
      <div class="metric-value positive">${formatNumber(results.win_rate, 1)}%</div>
      <div class="metric-label">${appState.currentLanguage === 'hi' ? 'जीत दर' : 'Win Rate'}</div>
    </div>
    <div class="metric-card">
      <div class="metric-value positive">${formatNumber(results.profit_factor, 2)}</div>
      <div class="metric-label">${appState.currentLanguage === 'hi' ? 'लाभ कारक' : 'Profit Factor'}</div>
    </div>
    <div class="metric-card">
      <div class="metric-value negative">${results.max_drawdown}%</div>
      <div class="metric-label">${appState.currentLanguage === 'hi' ? 'अधिकतम गिरावट' : 'Max Drawdown'}</div>
    </div>
    <div class="metric-card">
      <div class="metric-value positive">${formatNumber(results.sharpe_ratio, 2)}</div>
      <div class="metric-label">Sharpe Ratio</div>
    </div>
    <div class="metric-card">
      <div class="metric-value positive">${formatNumber(results.total_returns, 1)}%</div>
      <div class="metric-label">${appState.currentLanguage === 'hi' ? 'कुल रिटर्न' : 'Total Returns'}</div>
    </div>
  `;
}

// Journal Table
function renderJournalTable() {
  const container = document.getElementById('journalTable');
  if (!container) return;
  
  const headers = appState.currentLanguage === 'hi' ? 
    ['तारीख', 'कमोडिटी', 'एंट्री', 'एक्जिट', 'मात्रा', 'P&L', 'टिप्पणी'] :
    ['Date', 'Commodity', 'Entry', 'Exit', 'Qty', 'P&L', 'Notes'];
  
  container.innerHTML = `
    <table class="table">
      <thead>
        <tr>
          ${headers.map(header => `<th>${header}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${appState.journalEntries.map(entry => `
          <tr>
            <td>${new Date(entry.date).toLocaleDateString(appState.currentLanguage === 'hi' ? 'hi-IN' : 'en-IN')}</td>
            <td>${entry.commodity}</td>
            <td>${formatCurrency(entry.entry)}</td>
            <td>${formatCurrency(entry.exit)}</td>
            <td>${entry.quantity}</td>
            <td class="${entry.pnl >= 0 ? 'pnl-positive' : 'pnl-negative'}">${formatCurrency(entry.pnl)}</td>
            <td>${entry.notes}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// Event Listeners
function setupEventListeners() {
  // Language toggle
  const languageToggle = document.getElementById('languageToggle');
  if (languageToggle) {
    languageToggle.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Language toggle clicked'); // Debug log
      const newLang = appState.currentLanguage === 'en' ? 'hi' : 'en';
      appState.setLanguage(newLang);
      
      // Re-render dynamic content
      renderTopSignals();
      renderAllSignals();
      renderEducationContent(appState.activeEducationTab);
      renderBacktestResults();
      renderJournalTable();
    });
  }

  // Theme toggle
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Theme toggle clicked'); // Debug log
      const newTheme = appState.currentTheme === 'light' ? 'dark' : 'light';
      appState.setTheme(newTheme);
    });
  }

  // Navigation
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const sectionId = item.dataset.section;
      console.log('Nav item clicked:', sectionId); // Debug log
      if (sectionId) {
        appState.setActiveSection(sectionId);
      }
    });
  });

  // Education tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      appState.activeEducationTab = btn.dataset.tab;
      renderEducationContent(btn.dataset.tab);
    });
  });

  // Risk calculator inputs
  ['accountSize', 'riskPercent', 'entryPrice', 'stopLoss'].forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener('input', updateRiskCalculator);
    }
  });

  // Add trade modal
  const addTradeBtn = document.getElementById('addTradeBtn');
  if (addTradeBtn) {
    addTradeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById('addTradeModal');
      if (modal) {
        modal.classList.remove('hidden');
        // Set today's date as default
        const dateInput = document.querySelector('input[name="date"]');
        if (dateInput) {
          dateInput.value = new Date().toISOString().split('T')[0];
        }
      }
    });
  }

  const modalClose = document.getElementById('modalClose');
  if (modalClose) {
    modalClose.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById('addTradeModal');
      if (modal) {
        modal.classList.add('hidden');
      }
    });
  }

  const cancelTrade = document.getElementById('cancelTrade');
  if (cancelTrade) {
    cancelTrade.addEventListener('click', (e) => {
      e.preventDefault();
      const modal = document.getElementById('addTradeModal');
      if (modal) {
        modal.classList.add('hidden');
      }
    });
  }

  // Add trade form submission
  const addTradeForm = document.getElementById('addTradeForm');
  if (addTradeForm) {
    addTradeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const entry = {
        date: formData.get('date'),
        commodity: formData.get('commodity'),
        entry: parseFloat(formData.get('entry')),
        exit: parseFloat(formData.get('exit')),
        quantity: parseInt(formData.get('quantity')),
        notes: formData.get('notes') || ''
      };
      
      appState.addJournalEntry(entry);
      const modal = document.getElementById('addTradeModal');
      if (modal) {
        modal.classList.add('hidden');
      }
      e.target.reset();
    });
  }

  // Close modal when clicking outside
  const addTradeModal = document.getElementById('addTradeModal');
  if (addTradeModal) {
    addTradeModal.addEventListener('click', (e) => {
      if (e.target.id === 'addTradeModal') {
        e.target.classList.add('hidden');
      }
    });
  }
}

// Initialize Application
function initializeApp() {
  console.log('Initializing app...'); // Debug log
  
  updateDateTime();
  setInterval(updateDateTime, 60000); // Update every minute
  
  renderTopSignals();
  renderAllSignals();
  renderHeatmap();
  renderEducationContent('basics');
  renderBacktestResults();
  renderJournalTable();
  updateRiskCalculator();
  
  setupEventListeners();
  
  // Initial state
  appState.updateNavigation();
  appState.updateSections();
  appState.applyTheme();
  appState.applyLanguage();
  
  console.log('App initialized successfully'); // Debug log
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
