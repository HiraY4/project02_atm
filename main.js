#!/usr/bin/env node
import showBanner from "node-banner";
import login from "./atm_module/login.js";
(async () => {
    await showBanner('ATM', 'AUTOMATED TELLER MACHINE FOR BALANCE INQUIRY, TRANSACTIONS AND BILLING', 'red', 'grey');
})();
setTimeout(() => {
    login();
}, 1000);
