const { Builder, By, until } = require('selenium-webdriver');

async function extractAllRows() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('https://etherscan.io/txs?ps=100');  // Replace with actual URL

        // ✅ Wait for the table to load
        await driver.wait(until.elementLocated(By.css('table tbody tr')), 10000);

        // ✅ Get all table rows
        let rows = await driver.findElements(By.css('table tbody tr'));

        const labels = [
            'Column1', 'Transaction Hash', 'Type', 'Block Number',
            'Column5', 'Time', 'Column7', 'Sender', 'Column9',
            'Fee Recipient', 'ETH Amount', 'Gas Fee', 'Column13'
        ];

        let allData = [];

        for (let row of rows) {
            let columns = await row.findElements(By.css('td'));
            let rowData = {};

            for (let i = 0; i < columns.length; i++) {
                let text = await columns[i].getText();
                rowData[labels[i]] = text;
            }

            // ✅ Extract 'From' and 'To' separately
            let fromAddress = "Not Found";
            let toAddress = "Not Found";
            
            try {
                let addressElements = await row.findElements(By.css('.border.border-white.px-1.mx-n1'));
                if (addressElements.length >= 2) {
                    fromAddress = await addressElements[0].getText();  // First occurrence = "From"
                    toAddress = await addressElements[1].getText();    // Second occurrence = "To"
                }
            } catch (e) {
                console.warn("⚠ 'From' or 'To' address not found in row.");
            }

            rowData["From"] = fromAddress;
            rowData["To"] = toAddress;

            allData.push(rowData);
        }

        console.log('Extracted Data:', allData);

    } catch (error) {
        console.error('Error extracting data:', error);
    } finally {
        await driver.quit();
    }
}

extractAllRows();
