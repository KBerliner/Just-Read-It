const getPage = async () => {
    try {
        return await chrome.tabs.getSelected()
    } catch (e) {
        console.error(e)
    }    
}

const alterPageCss = (page) => {
    const newCss = `
        #right-sidebar-container {
            display: none !important;
        }

        #left-sidebar-container {
            display: none !important;
        }
        
        reddit-header-large {
            display: none !important;
        }

        shreddit-comments-page-ad {
            display: none !important;
        }

        shreddit-app {
            padding-top: 0 !important;
        }
    `

    chrome.tabs.insertCSS(page.id, { code: newCss })
}

const run = async () => {
    page = await getPage()
    alterPageCss(page);
}

chrome.browserAction.onClicked.addListener(run)
