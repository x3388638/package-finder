# package-finder
Userscript to easily find the package source code on GitHub  
<img width="500" src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/877c3029eb297d35081dbb7f61b7b6208d63205a/package-finder-cover.png">

## Install
1. Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=zh-TW) or other alternative userscript manager ([e.g.](https://openuserjs.org/about/Userscript-Beginners-HOWTO#how-do-i-get-going-))
2. Go to https://openuserjs.org/scripts/x3388638/package-finder
3. Click the blue 「Install」 button

## Usage
After the userscript installed, you will find that there is a new button next to the search input. You can enter the package name and click the button to find the package source code you want.

## GitHub Enterprise
If you are using a self hosted GitHub enterprise plan, just adding the domain to the userscript setting on Tempermonkey (or other userscript manager you are using).

1. Go to the Tempermonky dashboard and select package-finder

![](https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/e6a2703b6240d6bfed4bced03e8fac0b2519ba0f/package-finder-usage-1.png)

2. Select the setting tab and add `https://{YOUR_GITHUB_ENTERPRISE_DOMAIN}/*` to custom matches list

![](https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/e6a2703b6240d6bfed4bced03e8fac0b2519ba0f/package-finder-usage-2.png)

## LICENSE
MIT
