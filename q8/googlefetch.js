
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function fetchGoogleHomePage() {
    try {
        const response = await fetch('https://www.google.com');
        if (!response.ok) {
            throw new Error(`Error fetching page: ${response.status}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html); 
        const pageTitle = $('title').text();
        console.log("Page Title:", pageTitle);

        $('a').each((index, element) => {
            const link = $(element).attr('href');
            console.log(`Link ${index + 1}: ${link}`);
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchGoogleHomePage();
