# Ethereum Transactions Scraper

This project scrapes transaction data from Etherscan using Selenium and Node.js.

## 📌 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Google Chrome](https://www.google.com/chrome/)
- [ChromeDriver](https://chromedriver.chromium.org/) (Ensure it's compatible with your Chrome version)

## 🚀 Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/VuyyuruSrujan/Ethereum-Transactions-Data.git
   cd Ethereum-Transactions-Data
   ```

2. **Install dependencies:**

   ```sh
   npm i selenium-webdriver --force
   ```

## 🏃 Running the Scraper

To start scraping Ethereum transaction data, run:

```sh
node data.js
```

## 📊 Extracted Data

The scraper extracts the following details from Etherscan:

- **Transaction Hash**
- **Type**
- **Block Number**
- **Time**
- **Sender (From Address)**
- **Fee Recipient**
- **ETH Amount**
- **Gas Fee**
- **Recipient (To Address)**

The data is printed in the console.

## 🛠 Troubleshooting

- If ChromeDriver is not found, ensure it is installed and matches your Chrome version.
- If the script fails to locate elements, check if Etherscan has updated its structure.
- Use `console.log()` inside `data.js` for debugging extracted elements.

## 📜 License

This project is open-source. You are free to use, modify, and distribute it.

---

### 📢 Contributions & Support

Feel free to contribute by submitting pull requests or reporting issues. If you encounter any problems, create an issue in the repository.

