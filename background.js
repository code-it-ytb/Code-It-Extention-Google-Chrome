chrome.browserAction.setIcon({
	path: "img/icon.png"
});

if (typeof localStorage.notifications === 'undefined' || localStorage.notifications === null || localStorage.notifications == "true" || localStorage.notifications == "false") {
	localStorage.notifications = "1";
}

if (typeof localStorage.volume === 'undefined' || localStorage.volume === null) {
	localStorage.volume = 0.3;
}

if (typeof localStorage.lastOnline === 'undefined' || localStorage.lastOnline === null) {
	localStorage.lastOnline = 0;
}

if (typeof localStorage.youtube === 'undefined' || localStorage.youtube === null) {
	localStorage.youtube = "1";
}

if (typeof localStorage.lastVideo === 'undefined' || localStorage.lastVideo === null) {
	localStorage.lastVideo = new Date().getTime();
}

if (typeof localStorage.lastVideoID === 'undefined' || localStorage.lastVideoID === null) {
	localStorage.lastVideoID = "";
}

if (typeof localStorage.lastVideoData === 'undefined' || localStorage.lastVideoData === null) {
	localStorage.lastVideoData = "{}";
}

$.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase());

var audioAlert = new Audio("sounds/alert.ogg");

function createBasicNotification(id, title, message, iconUrl, buttons) {
	if ($.browser.chrome && !$.browser.opera) {
		chrome.notifications.create(id, {
			type: "basic",
			title: title,
			message: message,
			iconUrl: iconUrl,
			buttons: buttons,
			silent: true,
			priority: 2
		});			
	} else {
		chrome.notifications.create(id, {
			type: "basic",
			title: title,
			message: message,
			iconUrl: iconUrl,
			priority: 2
		});	
	}

	audioAlert.volume = parseFloat(localStorage.volume) / 3.0;
	audioAlert.play();
}

function createImageNotification(id, title, message, imageUrl, iconUrl, contextMessage, buttons) {
	if ($.browser.chrome && !$.browser.opera) {
		chrome.notifications.create(id, {
			type: "image",
			title: title,
			message: message,
			imageUrl: imageUrl,
			iconUrl: iconUrl,
			contextMessage: contextMessage,
			buttons: buttons,
			silent: true,
			priority: 2
		});
	} else {
		chrome.notifications.create(id, {
			type: "basic",
			title: title,
			message: message,
			iconUrl: iconUrl,
			contextMessage: contextMessage,
			priority: 2
		});
	}

	audioAlert.volume = parseFloat(localStorage.volume) / 3.0;
	audioAlert.play();
}
