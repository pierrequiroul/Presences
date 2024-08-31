const presence = new Presence({
	clientId: "645028677033132033",
}),
browsingTimestamp = Math.floor(Date.now() / 1000),
getStrings = async () => {
	return presence.getStrings(
		{
			play: "general.playing",
			pause: "general.paused",
			search: "general.search",
			searchSomething: "general.searchSomething",
			browsing: "general.browsing",
			viewing: "general.viewing",
			viewPage: "general.viewPage",
			viewAPage: "general.viewAPage",
			viewHome: "general.viewHome",
			viewAccount: "general.viewAccount",
			viewChannel: "general.viewChannel",
			viewCategory: "general.viewCategory",
			viewList: "netflix.viewList",
			buttonViewPage: "general.buttonViewPage",
			watching: "general.watching",
			watchingAd: "youtube.ad",
			watchingLive: "general.watchingLive",
			watchingShow: "general.watchingShow",
			watchingMovie: "general.watchingMovie",
			listeningMusic: "general.listeningMusic",
			buttonWatchStream: "general.buttonWatchStream",
			buttonWatchVideo: "general.buttonWatchVideo",
			buttonWatchEpisode: "general.buttonViewEpisode",
			buttonWatchMovie: "general.buttonWatchMovie",
			buttonListenAlong: "general.buttonListenAlong",
			live: "general.live",
			season: "general.season",
			episode: "general.episode",
			// Non-existent, should be general strings
			deferred: "general.deferred",
		},
		await presence.getSetting<string>("lang").catch(() => "en")
	);
};
let oldLang: string = null,
strings: Awaited<ReturnType<typeof getStrings>>;

const enum Assets {
	Logo = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/logo.png",
	Animated = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/0.gif",
	Deferred = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/1.gif",
	LiveAnimated = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/2.gif",
	Listening = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/3.png",
	AdEn = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/4.png",
	AdFr = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/5.png",
	RTLPlay = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/6.png",
	RTLTVi = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/7.png",
	RTLClub = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/8.png",
	RTLPlug = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/9.png",
	BelRTL = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/10.png",
	Contact = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/11.png",
}

function exist(selector: string) {
	return document.querySelector(selector) !== null;
}

presence.on("UpdateData", async () => {
	const { hostname, /*href,*/ pathname } = document.location,
		presenceData: PresenceData = {
			name: "Plex",
			largeImageKey: Assets.Animated, // Default
			largeImageText: "Plex",
			type: ActivityType.Watching,
		},
		[lang, /*usePresenceName, useChannelName,*/ privacy, time, /*buttons, poster*/] =
			await Promise.all([
				presence.getSetting<string>("lang").catch(() => "en"),
				presence.getSetting<boolean>("usePresenceName"),
				presence.getSetting<boolean>("useChannelName"),
				presence.getSetting<boolean>("privacy"),
				presence.getSetting<boolean>("timestamp"),
				presence.getSetting<number>("buttons"),
				presence.getSetting<boolean>("usePosterImage"),
			]);

	if (oldLang !== lang || !strings) {
		oldLang = lang;
		strings = await getStrings();
	}

	switch (true) {
		case (exist("Player-miniPlayerContainer-mixkS9")): {
			presenceData.details = "watch";


			break;
		}

		case (["plex.tv","watch.plex.tv","app.plex.tv"].includes(hostname)): {
			presenceData.details = strings.browsing;

			presenceData.smallImageKey = Assets.Reading;
			presenceData.smallImageText = strings.browsing;

			if (!privacy) {
				presenceData.state = strings.viewHome;

				if (time) presenceData.startTimestamp = browsingTimestamp;
			}
			break;
		}

		case ["recherche"].includes(pathname.split("/")[2]): {
			
			break;
		}
		default: {
			presenceData.details = "test";
			break;
		}
	}

	if (presenceData.details) presence.setActivity(presenceData);
	else presence.setActivity();
});
