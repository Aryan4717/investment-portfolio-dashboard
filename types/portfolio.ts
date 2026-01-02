/**
 * Portfolio Data Model
 * 
 * This file defines TypeScript interfaces for the investment portfolio dashboard.
 * These interfaces are designed to match typical Excel portfolio structures
 * and provide type safety throughout the application.
 */

/**
 * Stock Interface
 * 
 * Represents a single stock holding with all relevant financial metrics.
 * This is the core data structure for individual stock positions.
 */
export interface Stock {
  /** Stock symbol/ticker (e.g., "AAPL", "GOOGL") - unique identifier */
  symbol: string;
  
  /** Company name (e.g., "Apple Inc.") - for display purposes */
  companyName: string;
  
  /** Stock exchange where the stock is traded (e.g., "NYSE", "NASDAQ", "BSE", "NSE") 
   *  - Important for market-specific data and regulations */
  exchange: string;
  
  /** Sector classification (e.g., "Technology", "Healthcare", "Finance")
   *  - Used for portfolio diversification analysis and sector-based grouping */
  sector: string;
  
  /** Industry classification (e.g., "Software", "Pharmaceuticals")
   *  - Provides more granular categorization than sector */
  industry?: string;
  
  /** Current Market Price - the latest trading price of the stock
   *  - Essential for calculating current portfolio value */
  cmp: number;
  
  /** Price-to-Earnings ratio - valuation metric comparing stock price to earnings per share
   *  - Helps assess if a stock is overvalued or undervalued relative to earnings */
  peRatio: number;
  
  /** Earnings per share (EPS) - company's profit divided by outstanding shares
   *  - Key profitability metric for fundamental analysis */
  earnings: number;
  
  /** Market capitalization in currency units
   *  - Indicates company size and stock liquidity */
  marketCap?: number;
  
  /** 52-week high price
   *  - Context for current price performance */
  high52Week?: number;
  
  /** 52-week low price
   *  - Context for current price performance */
  low52Week?: number;
}

/**
 * PortfolioRow Interface
 * 
 * Represents a single row in the portfolio, combining stock information
 * with portfolio-specific holdings data. This matches the typical Excel structure
 * where each row represents one stock position.
 */
export interface PortfolioRow {
  /** Stock information - all the stock details */
  stock: Stock;
  
  /** Purchase price per share - the price at which the stock was bought
   *  - Critical for calculating gains/losses and cost basis */
  purchasePrice: number;
  
  /** Number of shares held - quantity of stock in the portfolio
   *  - Used to calculate total investment and current value */
  quantity: number;
  
  /** Total investment amount - purchase price × quantity
   *  - Represents the total capital invested in this position */
  investment: number;
  
  /** Present value - current market price × quantity
   *  - Shows the current worth of the holding */
  presentValue: number;
  
  /** Gain/Loss amount - present value - investment
   *  - Absolute profit or loss in currency units */
  gainLoss: number;
  
  /** Gain/Loss percentage - (gainLoss / investment) × 100
   *  - Relative performance metric, easier to compare across positions */
  gainLossPercent: number;
  
  /** Average purchase price (if multiple purchases)
   *  - Useful when same stock was bought at different prices */
  averagePrice?: number;
  
  /** Date of purchase - when the stock was acquired
   *  - Important for tax calculations and holding period analysis */
  purchaseDate?: Date | string;
  
  /** Last updated timestamp - when the data was last refreshed
   *  - Ensures data freshness awareness */
  lastUpdated?: Date | string;
}

/**
 * SectorSummary Interface
 * 
 * Aggregated data for a sector, providing portfolio-level insights.
 * Used for sector-wise analysis and diversification metrics.
 */
export interface SectorSummary {
  /** Sector name (e.g., "Technology", "Healthcare") */
  sector: string;
  
  /** Total number of different stocks in this sector */
  stockCount: number;
  
  /** Total investment across all stocks in this sector */
  totalInvestment: number;
  
  /** Total present value of all holdings in this sector */
  totalPresentValue: number;
  
  /** Total gain/loss for this sector */
  totalGainLoss: number;
  
  /** Gain/loss percentage for this sector */
  gainLossPercent: number;
  
  /** Percentage of total portfolio value represented by this sector
   *  - Key metric for diversification analysis */
  portfolioWeight: number;
  
  /** Average P/E ratio across stocks in this sector */
  averagePeRatio?: number;
  
  /** List of stock symbols in this sector (for reference) */
  stocks?: string[];
}

/**
 * Portfolio Interface
 * 
 * Complete portfolio structure containing all holdings and summary data.
 * This is the top-level data structure for the entire portfolio.
 */
export interface Portfolio {
  /** Array of all portfolio rows (individual stock positions) */
  rows: PortfolioRow[];
  
  /** Sector-wise summaries */
  sectorSummaries: SectorSummary[];
  
  /** Total portfolio investment */
  totalInvestment: number;
  
  /** Total portfolio present value */
  totalPresentValue: number;
  
  /** Total portfolio gain/loss */
  totalGainLoss: number;
  
  /** Total portfolio gain/loss percentage */
  totalGainLossPercent: number;
  
  /** Last updated timestamp for the entire portfolio */
  lastUpdated: Date | string;
}

/**
 * Exchange type - common stock exchanges
 */
export type Exchange = "NYSE" | "NASDAQ" | "BSE" | "NSE" | "AMEX" | "OTHER";

/**
 * Sector type - common market sectors
 */
export type Sector = 
  | "Technology"
  | "Healthcare"
  | "Finance"
  | "Consumer Discretionary"
  | "Consumer Staples"
  | "Energy"
  | "Industrials"
  | "Materials"
  | "Real Estate"
  | "Utilities"
  | "Communication"
  | "Other";

