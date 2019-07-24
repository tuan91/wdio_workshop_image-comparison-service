const assert = require('assert');

describe('Workshop', function() {
    it('First test', () => {
        browser.url('https://webdriver.io');
        const title = browser.getTitle();
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });
    it.skip('check Screen', function() {
        browser.url('https://www.mytoys.de');
        browser.checkScreen('view Page', { /* some method options*/ });
    });
    it.skip('check FullPageScreen', function() {
        browser.url('https://www.mytoys.de');
        browser.checkFullPageScreen('fullpage', { /* some method options*/ });
    });
    it.skip('check Element', function() {
        browser.url('https://www.mytoys.de');
        const specialTeaser = $("div.pa3.pa4_MD.mhn3.mhn4_MD");
        specialTeaser.scrollIntoView();
        browser.checkElement(specialTeaser, 'Special Teaser', { /* some method options*/ });
    });
});
/**
 * @description method option
 * blockOut - ignoriert einen definierten Bereich (nur bei der check-Methode)
 * disableCSSAnimation - friert Animation ein
 * hideScrollBars - Scrollbar wird ausgeblendet
 * hideElements - spezifische Elemente unsichbar machen visibilitiy: hidden
 * removeElements - spzifisches Element entfernen display: none
 */

/**
 * @description Plugin option
 * autoSaveBaseline - wenn es keine Baselineimgage gibt wird eine erstellt
 * baselineFolder - Erstellen des Baselineordners
 * clearRuntimeFolder - ordner div und actual werden vor dem test geschlöscht
 * debug - extra logging console wird aktiviert und alle bilder werden auch im div gespeichert
 * disableCSSAnimation - friert animation ein
 * formatImageName - format des gespeichertem bildes
 * fullPageScrollTimeout - wartet nach dem scrollen eine definierte Zeit
 * hideScrollBars - Scrollbar wird ausgeblendet
 * savePerInstance - separate Speicherung von device Bildern
 * screenshotPath - Pfad zum Div und actual ordner
 * addressBarShadowPadding
 * toolBarShadowPadding
 */
/**
 * @description Compare options => for Plugin and method options
 * ignoreAlpha - ignoriert Deckkraft der Farben
 * blockOutStatusBar - Statusbar wird ignoriert
 * blockOutToolBar - Toolbar wird ignoriert
 * ignoreAntialiasing - Antialiasing wird ignoeriert
 * ignoreColors - Farben werden ignoriert (schwarz/weiß Foto)
 * ignoreLess
 * ignoreNothing
 * ignoreTransparentPixel
 * rawMisMatchPercentage
 * returnAllCompareData
 * saveAboveTolerance
 * largeImageThreshold
 */
