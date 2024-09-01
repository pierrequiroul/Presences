const presence = new Presence({
		clientId: "1241444837476274268",
	}),
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
				viewAccount: "general.viewAccount",
				viewChannel: "general.viewChannel",
				viewCategory: "general.viewCategory",
				viewHome: "general.viewHome",
				viewList: "netflix.viewList",
				viewSerie: "general.viewSerie",
				viewShow: "general.viewShow",
				viewMovie: "general.viewMovie",
				buttonViewPage: "general.buttonViewPage",
				watching: "general.watching",
				watchingAd: "youtube.ad",
				watchingLive: "general.watchingLive",
				watchingShow: "general.watchingShow",
				buttonWatchStream: "general.buttonWatchStream",
				buttonWatchVideo: "general.buttonWatchVideo",
				buttonListenAlong: "general.buttonListenAlong",
				live: "general.live",
				waitingLive: "general.waitingLive",
				waitingLiveThe: "general.waitingLiveThe",
				home: "twitch.home",
				// Custom strings
				deferred: "general.deferred",
			},
			await presence.getSetting<string>("lang").catch(() => "en")
		);
	};
let oldLang: string = null,
	strings: Awaited<ReturnType<typeof getStrings>>;

function getAdditionnalStrings(lang: string) {
	switch (true) {
		case ["fr-FR"].includes(lang): {
			strings.deferred = "En Différé";
			break;
		}
		case ["nl-NL"].includes(lang): {
			strings.deferred = "Uitgestelde";
			break;
		}
		case ["de-DE"].includes(lang): {
			strings.deferred = "Zeitversetzt";
			break;
		}
		default: {
			strings.deferred = "Deferred";
			break;
		}
	}
}

let title = "Default Title",
	subtitle = "Default Subtitle",
	category = "Default Category";

const enum Assets { // Other default assets can be found at index.d.ts
	Logo = "https://i.imgur.com/m2gRowq.png",
	Animated = "",
	Auvio = "https://imgur.com/Ky3l5MZ.png",
	Deffered = "https://imgur.com/uvRMlkv.png",
	Waiting = "https://imgur.com/W4XSjjC.png",
	Listening = "https://imgur.com/0yWcS5h.png",
	Binoculars = "https://i.imgur.com/aF3TWVK.png",
	LiveAnimated = "https://cdn.rcd.gg/PreMiD/websites/R/RTLplay/assets/2.gif",
	LaUne = "https://imgur.com/tmFLVEZ.png",
	Tipik = "https://imgur.com/w7nj6WR.png",
	LaTrois = "https://imgur.com/7VaOFVk.png",
	Classic21 = "https://imgur.com/Ocr1zGu.png",
	LaPremiere = "https://imgur.com/Ffjsqzu.png",
	Vivacite = "https://imgur.com/57XKm7C.png",
	Musiq3 = "https://imgur.com/syQuNbG.png",
	Tarmac = "https://imgur.com/cVqhgnM.png",
	Jam = "https://imgur.com/TmXgxdW.png",
	Viva = "https://imgur.com/gSR3YWE.png",
	Ixpe = "https://imgur.com/FGu3BY9.png",
	MediasProx = "https://imgur.com/Roa6C5I.png",
	AB3 = "https://imgur.com/utT3GeJ.png",
	ABXPLORE = "https://imgur.com/lCMetzW.png",
	LN24 = "https://imgur.com/mLQfLVU.png",
	NRJ = "https://imgur.com/ffN5YyQ.png",
	Arte = "https://imgur.com/3IJaVaj.png",
	BRUZZ = "https://imgur.com/SNtrrxL.png",
	BRF = "https://imgur.com/pcdX4gD.png",
	Kids = "https://imgur.com/hCECgHg.png",
}

function getChannel(channel: string) {
	channel = channel.toLowerCase();
	const defaultColor = "#FFFF00";
	switch (true) {
		case ["la une", "laune"].includes(channel): {
			return {
				channel: "La Une",
				type: ActivityType.Watching,
				logo: Assets.LaUne,
				color: "#ee372b",
			};
		}
		case ["tipik"].includes(channel): {
			return {
				channel: "Tipik",
				type: ActivityType.Watching,
				logo: Assets.Tipik,
				color: "#0df160",
			};
		}
		case ["la trois", "latrois"].includes(channel): {
			return {
				channel: "La Trois",
				type: ActivityType.Watching,
				logo: Assets.LaTrois,
				color: "#9b49a1",
			};
		}
		case ["classic 21", "classic21"].includes(channel): {
			return {
				channel: "Classic 21",
				type: ActivityType.Listening,
				logo: Assets.Classic21,
				color: "#8c408a",
			};
		}
		case ["la premiere", "la première", "lapremiere"].includes(channel): {
			return {
				channel: "La Première",
				type: ActivityType.Listening,
				logo: Assets.LaPremiere,
				color: "#083e7a",
			};
		}
		case ["vivacite", "vivacité"].includes(channel): {
			return {
				channel: "Vivacité",
				type: ActivityType.Listening,
				logo: Assets.Vivacite,
				color: "#f93308",
			};
		}
		case ["musiq3"].includes(channel): {
			return {
				channel: "Musiq3",
				type: ActivityType.Listening,
				logo: Assets.Musiq3,
				color: "#d63c4d",
			};
		}
		case ["tarmac"].includes(channel): {
			return {
				channel: "Tarmac",
				type: ActivityType.Listening,
				logo: Assets.Tarmac,
				color: defaultColor,
			};
		}
		case ["jam"].includes(channel): {
			return {
				channel: "Jam",
				type: ActivityType.Listening,
				logo: Assets.Jam,
				color: defaultColor,
			};
		}
		case ["viva"].includes(channel): {
			return {
				channel: "Viva+",
				type: ActivityType.Listening,
				logo: Assets.Viva,
				color: "#f93308",
			};
		}
		case ["ixpe"].includes(channel): {
			return {
				channel: "Ixpé",
				type: ActivityType.Watching,
				logo: Assets.Ixpe,
				color: defaultColor,
			};
		}
		case ["medias de proximite", "médias de proximité"].includes(channel): {
			return {
				channel: "Médias de proximité",
				type: ActivityType.Watching,
				logo: Assets.MediasProx,
				color: defaultColor,
			};
		}
		case ["ab3"].includes(channel): {
			return {
				channel: "AB3",
				type: ActivityType.Watching,
				logo: Assets.AB3,
				color: defaultColor,
			};
		}
		case ["abxplore"].includes(channel): {
			return {
				channel: "ABXPLORE",
				type: ActivityType.Watching,
				logo: Assets.ABXPLORE,
				color: defaultColor,
			};
		}
		case ["ln24"].includes(channel): {
			return {
				channel: "LN24",
				type: ActivityType.Watching,
				logo: Assets.LN24,
				color: defaultColor,
			};
		}
		case ["nrj"].includes(channel): {
			return {
				channel: "NRJ",
				type: ActivityType.Watching,
				logo: Assets.NRJ,
				color: defaultColor,
			};
		}
		case ["arte"].includes(channel): {
			return {
				channel: "Arte",
				type: ActivityType.Watching,
				logo: Assets.Arte,
				color: defaultColor,
			};
		}
		case ["bruzz"].includes(channel): {
			return {
				channel: "BRUZZ",
				type: ActivityType.Watching,
				logo: Assets.BRUZZ,
				color: defaultColor,
			};
		}
		case ["brf"].includes(channel): {
			return {
				channel: "BRF",
				type: ActivityType.Watching,
				logo: Assets.BRF,
				color: defaultColor,
			};
		}
		case ["kids"].includes(channel): {
			return {
				channel: "RTBF Auvio",
				type: ActivityType.Watching,
				logo: Assets.Kids,
				color: defaultColor,
			};
		}
		default: {
			return {
				channel: "RTBF Auvio",
				type: ActivityType.Watching,
				logo: Assets.Auvio,
				color: defaultColor,
			};
		}
	}
}

function exist(selector: string) {
	return document.querySelector(selector) !== null;
}

// Adapted veryCrunchy's function from YouTube Presence https://github.com/PreMiD/Presences/pull/8000
async function getThumbnail(
	src: string,
	cropLeftPercentage = 0,
	cropRightPercentage = 0,
	cropTopPercentage = 0,
	cropBottomPercentage = 0,
	progress = 1,
	borderWidth = 30,
	borderColor = "#FFFF00"
): Promise<string> {
	return new Promise(resolve => {
		const img = new Image(),
			wh = 320; // Size of the square thumbnail

		img.crossOrigin = "anonymous";
		img.src = src;

		img.onload = function () {
			let croppedWidth,
				croppedHeight,
				cropX = 0,
				cropY = 0;

			// Determine if the image is landscape or portrait
			const isLandscape = img.width > img.height;

			if (isLandscape) {
				// Landscape mode: use left and right crop percentages
				const cropLeft = img.width * cropLeftPercentage;
				croppedWidth = img.width - cropLeft - img.width * cropRightPercentage;
				croppedHeight = img.height;
				cropX = cropLeft;
			} else {
				// Portrait mode: use top and bottom crop percentages
				const cropTop = img.height * cropTopPercentage;
				croppedWidth = img.width;
				croppedHeight =
					img.height - cropTop - img.height * cropBottomPercentage;
				cropY = cropTop;
			}

			// Determine the scale to fit the cropped image into the square canvas
			let newWidth, newHeight, offsetX, offsetY;

			if (isLandscape) {
				newWidth = wh - 2 * borderWidth;
				newHeight = (newWidth / croppedWidth) * croppedHeight;
				offsetX = borderWidth;
				offsetY = (wh - newHeight) / 2;
			} else {
				newHeight = wh - 2 * borderWidth;
				newWidth = (newHeight / croppedHeight) * croppedWidth;
				offsetX = (wh - newWidth) / 2;
				offsetY = borderWidth;
			}

			const tempCanvas = document.createElement("canvas");
			tempCanvas.width = wh;
			tempCanvas.height = wh;
			const ctx = tempCanvas.getContext("2d"),
				// Remap progress from 0-1 to 0.03-0.97
				remappedProgress = 0.07 + progress * (0.93 - 0.07);

			// 1. Fill the canvas with a black background
			ctx.fillStyle = "#080808";
			ctx.fillRect(0, 0, wh, wh);

			// 2. Draw the radial progress bar
			if (remappedProgress > 0) {
				ctx.beginPath();
				ctx.moveTo(wh / 2, wh / 2);
				const startAngle = Math.PI / 4; // 45 degrees in radians, starting from bottom-right

				ctx.arc(
					wh / 2,
					wh / 2,
					wh,
					startAngle,
					startAngle + 2 * Math.PI * remappedProgress
				);
				ctx.lineTo(wh / 2, wh / 2);
				ctx.fillStyle = borderColor; // Yellow color for the progress bar
				ctx.fill();
			}

			// 3. Draw the cropped image centered and zoomed out based on the borderWidth
			ctx.drawImage(
				img,
				cropX,
				cropY,
				croppedWidth,
				croppedHeight,
				offsetX,
				offsetY,
				newWidth,
				newHeight
			);

			resolve(tempCanvas.toDataURL("image/png"));
		};

		img.onerror = function () {
			resolve(src);
		};
	});
}

presence.on("UpdateData", async () => {
	const presenceData: PresenceData = {
			name: "Auvio",
			largeImageKey: Assets.Auvio, // Default
			largeImageText: "RTBF Auvio",
			type: ActivityType.Watching,
		},
		{ /*hostname, href,*/ pathname } = document.location,
		[lang, privacy, time, buttons] = await Promise.all([
			presence.getSetting<string>("lang").catch(() => "en"),
			presence.getSetting<boolean>("privacy"),
			presence.getSetting<boolean>("time"),
			presence.getSetting<number>("buttons"),
		]);

	if (oldLang !== lang || !strings) {
		oldLang = lang;
		strings = await getStrings();
		getAdditionnalStrings(lang);
	}

	switch (true) {
		/* PODCAST PLAYER */
		case exist("#audioPlayerContainer") &&
			document
				.querySelector("#PlayerUIAudioPlayPauseButton")
				.getAttribute("aria-label") === "pause": {
			presenceData.name = exist(".PlayerUIAudio_titleText__HV4Y2")
				? document.querySelector(".PlayerUIAudio_titleText__HV4Y2").textContent
				: "Podcast";
			presenceData.type = ActivityType.Listening;

			presenceData.details = exist(".PlayerUIAudio_titleText__HV4Y2")
				? document.querySelector(".PlayerUIAudio_titleText__HV4Y2").textContent
				: "";
			presenceData.state = exist(".PlayerUIAudio_subtitle__uhGA4")
				? document.querySelector(".PlayerUIAudio_subtitle__uhGA4").textContent
				: "";

			presenceData.smallImageKey = Assets.Listening;
			presenceData.smallImageText = strings.play;

			const progress =
				presence.timestampFromFormat(
					document
						.querySelector(".PlayerUIAudio_duration__n7hxV")
						.textContent.split("/")[0]
				) /
				presence.timestampFromFormat(
					document
						.querySelector(".PlayerUIAudio_duration__n7hxV")
						.textContent.split("/")[1]
				);
			presenceData.largeImageKey = await getThumbnail(
				decodeURIComponent(
					document
						.querySelector(".PlayerUIAudio_logoContainer__6ffGY > span > img")
						.getAttribute("src")
						.replace("/_next/image?url=", "")
						.split("&w")[0]
				),
				0,
				0,
				0,
				0,
				progress,
				20,
				getChannel("default").color
			);
			presenceData.largeImageText += " - Podcasts";
			break;
		}
		/* CATEGORY & CHANNEL PAGE

		(ex: https://auvio.rtbf.be/categorie/sport-9 or https://auvio.rtbf.be/chaine/la-une-1) */
		case [
			"categorie",
			"direct", // Considered as category
			"podcasts", // Considered as category
			"kids", // Considered as category
			"mon-auvio",
			"chaine",
			"mot-cle",
		].includes(pathname.split("/")[1]) || pathname === "/": {
			presenceData.smallImageKey = Assets.Binoculars;
			presenceData.smallImageText = strings.browsing;

			if (pathname === "/") presenceData.details = strings.home;
			else {
				const title = document.querySelector("h1").textContent;

				presenceData.details = privacy ? "" : title;

				switch (true) {
					default: {
						presenceData.state = privacy
							? strings.viewAPage
							: strings.viewCategory.replace(":", "");

						/* We randomly pick a cover image from that category */
						const random = Math.floor(Math.random() * 3),
							selector = exist("img.TileProgramPoster_hoverPicture__v5RJX")
								? "img.TileProgramPoster_hoverPicture__v5RJX"
								: "img.TileMedia_hoverPicture__RGh_m";

						presenceData.largeImageKey = await getThumbnail(
							decodeURIComponent(
								document
									.querySelectorAll(selector)
									[random].getAttribute("src")
									.replace("/_next/image?url=", "")
									.split("&w")[0]
							),
							0.22,
							0.22,
							0,
							0.3,
							1.5,
							15
						);
						if (exist(".TileMedia_title__331RH > h3")) {
							presenceData.largeImageText += exist(
								".TileMedia_title__331RH > h3 > div > p"
							)
								? ` - ${document
										.querySelectorAll(".TileMedia_title__331RH > h3")
										[random].textContent.replace(
											document.querySelectorAll(
												".TileMedia_title__331RH > h3 > div > p"
											)[random].textContent,
											""
										)}`
								: ` - ${
										document.querySelectorAll(".TileMedia_title__331RH > h3")[
											random
										].textContent
								  }`;
						}
						break;
					}
					case ["chaine"].includes(pathname.split("/")[1]): {
						presenceData.state = privacy
							? strings.viewAPage
							: strings.viewChannel.replace(":", "");

						presenceData.largeImageKey = getChannel(title).logo;
						presenceData.largeImageText = getChannel(title).channel;
						break;
					}
					case ["mon-auvio"].includes(pathname.split("/")[1]): {
						presenceData.state = privacy
							? strings.viewAPage
							: strings.viewPage.replace(":", "");
						break;
					}
				}
			}

			break;
		}
		/* RESEARCH (Page de recherche)

	(https://auvio.rtbf.be/explorer) */
		case ["explorer"].includes(pathname.split("/")[1]): {
			presenceData.details = strings.browsing;
			presenceData.state = strings.searchSomething;

			presenceData.smallImageKey = Assets.Search;
			presenceData.smallImageText = strings.search;

			break;
		}

		/* ACCOUNT & ACCOUNT SETTINGS PAGE

	(ex: https://auvio.rtbf.be/mes_informations) */
		case [
			"mes_informations",
			"controle_parental",
			"portabilite",
			"mes_offres_premium",
			"langues_sous_titres",
			"parametres_lecture",
		].includes(pathname.split("/")[1]): {
			presenceData.details = document.querySelector(
				".UserGateway_title__PkVAb"
			).textContent;
			presenceData.state = privacy ? strings.viewAPage : strings.viewAccount;

			presenceData.smallImageKey = Assets.Binoculars;
			presenceData.smallImageText = strings.browsing;

			break;
		}
		case ["media", "live", "emission"].includes(pathname.split("/")[1]): {
			let breadcrumbData, mediaData;

			// Retrieving JSON
			for (
				let i = 0;
				i <
				document.querySelectorAll("script[type='application/ld+json']").length;
				i++
			) {
				const data = JSON.parse(
					document.querySelectorAll("script[type='application/ld+json']")[i]
						.textContent
				);
				if (["BreadcrumbList"].includes(data["@type"])) breadcrumbData = data;
				if (["Movie", "Episode", "BroadcastEvent"].includes(data["@type"]))
					mediaData = data;
			}

			/* Processing title

			*/
			title = document.querySelectorAll("div.DetailsTitle_title__mdRHD")[
				document.querySelectorAll("div.DetailsTitle_title__mdRHD").length - 1
			].textContent;
			if (document.querySelector("div.DetailsTitle_subtitle__D30rn")) {
				title = title.replace(
					document.querySelectorAll("div.DetailsTitle_subtitle__D30rn")[
						document.querySelectorAll("div.DetailsTitle_subtitle__D30rn")
							.length - 1
					].textContent,
					""
				); // Subtitle is nested in the same div as the title..
				if (
					title.toLowerCase() ===
					breadcrumbData.itemListElement[
						breadcrumbData.itemListElement.length - 1
					].name.toLowerCase()
				) {
					// If so, it means that the title is more like a topic and the subtitle is more relevant is this case
					title = document.querySelectorAll("div.DetailsTitle_subtitle__D30rn")[
						document.querySelectorAll("div.DetailsTitle_subtitle__D30rn")
							.length - 1
					].textContent;
				}
			}

			const bChannelCategoryShown =
					document.querySelectorAll(".DetailsTitle_channelCategory__vh_cY > p")
						.length > 1,
				channelCategory = bChannelCategoryShown
					? document.querySelectorAll(
							".DetailsTitle_channelCategory__vh_cY > p"
					  )[0].textContent
					: "";

			if (!exist("#player")) {
				/*
					MEDIA PAGE
				*/
				subtitle = bChannelCategoryShown ? `${channelCategory} - ` : "";
				subtitle += document.querySelector("p.PictoBar_text__0Y_kv")
					? document.querySelector("p.PictoBar_text__0Y_kv").textContent
					: ""; // Get Duration
				if (breadcrumbData) {
					for (let i = 1; i < breadcrumbData.itemListElement.length; i++) {
						// Get Genres
						if (breadcrumbData.itemListElement[i].name !== title) {
							subtitle += ` - ${breadcrumbData.itemListElement[i].name.replace(
								/s$/i,
								""
							)}`;
						}
					}
				}
				if (["live"].includes(pathname.split("/")[1])) category = "direct";

				presenceData.details = privacy ? "" : title;
				presenceData.state = privacy ? "" : subtitle;

				presenceData.smallImageKey = Assets.Binoculars;
				presenceData.smallImageText = strings.browsing;

				presenceData.largeImageKey = await getThumbnail(
					mediaData.image || mediaData.broadcastOfEvent.image.url,
					0.425,
					0.025,
					0,
					0,
					1,
					20,
					getChannel(channelCategory).color
				);
				//presenceData.state = title;
				presenceData.largeImageText = breadcrumbData
					? breadcrumbData.itemListElement[
							breadcrumbData.itemListElement.length - 1
					  ].name
					: "";
			} else {
				/* 
					MEDIA PLAYER PAGE
				*/
				if (document.querySelector("#ui-wrapper > div")) {
					// Update the variables only if the overlay is visible and the elements are found
					title =
						document.querySelector(".TitleDetails_title__vsoUq")?.textContent ||
						title;
					subtitle =
						document.querySelector(".TitleDetails_subtitle__y1v4e")
							?.textContent || subtitle;
					category =
						document.querySelector(".TitleDetails_category__Azvos")
							?.textContent || category;
				}

				const video = document.querySelectorAll("div > video")[
					document.querySelectorAll("div > video").length - 1
				] as HTMLVideoElement;
				let progress = video.currentTime / video.duration;

				presenceData.name = title;

				/* LIVE VIDEO PLAYER */
				if (["live"].includes(pathname.split("/")[1])) {
					progress =
						parseFloat(
							(
								document.querySelector(
									".PlayerUITimebar_timebarNow__HoN7c"
								) as HTMLElement
							).style.width.replace("%", "")
						) / 100;

					presenceData.details = title;
					presenceData.state = subtitle;

					if (["direct"].includes(category.toLowerCase())) {
						presenceData.smallImageKey = video.played
							? Assets.Live
							: Assets.Pause;
						presenceData.smallImageText = video.played
							? strings.live
							: strings.pause;
					} else if (category.toLowerCase() === "en différé") {
						presenceData.smallImageKey = video.played
							? Assets.Deffered
							: Assets.Pause;
					}
					presenceData.smallImageText = video.played
						? strings.deferred
						: strings.pause;

					/* VOD VIDEO PLAYER */
				} else {
					presenceData.details = title;
					presenceData.state = bChannelCategoryShown
						? `${channelCategory} - ${subtitle}`
						: subtitle;

					presenceData.smallImageKey = video.played
						? Assets.Play
						: Assets.Pause;
					presenceData.smallImageText = video.played
						? strings.play
						: strings.pause;
				}

				presenceData.largeImageKey = await getThumbnail(
					mediaData.image || mediaData.broadcastOfEvent.image.url,
					0.425,
					0.025,
					0,
					0,
					progress,
					20,
					getChannel(channelCategory).color
				);
				presenceData.largeImageText += document.querySelector(
					"div.DetailsTitle_channelCategory__vh_cY"
				)
					? ` - ${
							document.querySelector("div.DetailsTitle_channelCategory__vh_cY")
								.textContent
					  }`
					: "";
			}
			break;
		}

		/*
		case exist("div > video"): {
			const channelName = document.querySelector(
				"div.DetailsTitle_channelCategory__vh_cY.DetailsTitle_spacer__vsWzR > a, div.DetailsTitle_channelCategory__vh_cY > div > p"
			).textContent; // Sometimes it's an a or a p

			presenceData.state = document.querySelector(
				"#ui-wrapper .TitleDetails_title__vsoUq"
			).textContent;
			presenceData.largeImageKey = getChannel(channelName).logo;

			if (["live"].includes(pathname.split("/")[1])) {
				presenceData.details = strings.watchingLive;

				if (buttons) {
					presenceData.buttons = [
						{
							label: strings.buttonWatchStream,
							url: href, // We are not redirecting directly to the raw stream, it's only the livestream page
						},
					];
				}

				if (
					document
						.querySelector('button[id="PlayerUIButtonPlayPause"]')
						.getAttribute("aria-label") === "pause"
				) {
					if (
						document
							.querySelector("#ui-wrapper .TitleDetails_liveCategory__Mifvw")
							.textContent.toLowerCase() === "direct"
					) {
						presenceData.smallImageKey = Assets.Live;
						presenceData.smallImageText = strings.watchingLive;
						if (time) {
							presenceData.endTimestamp = presence.getTimestamps(
								browsingTimestamp,
								new Date(
									new Date().setHours(
										parseInt(
											document
												.querySelectorAll(
													'p[class="PlayerUITimebar_text__YB0il"]'
												)[1]
												.textContent.split("h")[0]
										),
										parseInt(
											document
												.querySelectorAll(
													'p[class="PlayerUITimebar_text__YB0il"]'
												)[1]
												.textContent.split("h")[1]
										),
										0,
										0
									)
								).getTime()
							)[1];
						}
					} else {
						presenceData.smallImageKey = Assets.Differed;
						presenceData.smallImageText = strings.watchingLive;
						if (time) presenceData.startTimestamp = browsingTimestamp;

						if (buttons) {
							presenceData.buttons = [
								{
									label: strings.buttonWatchVideo,
									url: href, // We are not redirecting directly to the raw stream, it's only the livestream page
								},
							];
						}
					}
				} else {
					presenceData.smallImageKey = Assets.Pause;
					presenceData.smallImageText = strings.pause;
					delete presenceData.startTimestamp;
				}
			} else {
				presenceData.details = `${strings.watching} ${
					document.querySelector(
						"main > nav > ul:last-of-type > li:nth-of-type(2) > a"
					).textContent
				}`;

				if (time) {
					presenceData.endTimestamp = presence.getTimestampsfromMedia(
						document.querySelector("#player > div > div > div > div > div > video")
					)[1];
				}

				if (buttons) {
					presenceData.buttons = [
						{
							label: strings.buttonWatchVideo,
							url: href, // We are not redirecting directly to the raw stream, it's only the livestream page
						},
					];
				}

				if (
					document
						.querySelector('button[id="PlayerUIButtonPlayPause"]')
						.getAttribute("aria-label") === "pause"
				) {
					presenceData.smallImageKey = Assets.Play;
					presenceData.smallImageText = strings.play;
				} else {
					presenceData.smallImageKey = Assets.Pause;
					presenceData.smallImageText = strings.pause;
					delete presenceData.endTimestamp;
				}
			}
			break;
		}

		/* MOVIE PAGE 
		case exist(
			"div.DetailsTitle_title__mdRHD.DetailsTitle_spacer__vsWzR > h1"
		): {
			// Check if we have a Show Title

			const mediaName = document.querySelector(
					"head > meta:nth-child(19)"
				); // We get the last tag of the breadcrumb list ul (ex: Accueil > Films > Drame > <Title>)
				/*mediaFullName = document.querySelector(
					"div.DetailsTitle_title__mdRHD.DetailsTitle_spacer__vsWzR > h1"
				); // We get the last h1 because div content can be overlayed in desktop

			if (time) presenceData.startTimestamp = browsingTimestamp;

			if (
				["live"].includes(pathname.split("/")[1]) &&
				!exist("#quickResumeButton")
			) {
				presenceData.details = privacy
					? strings.waitingLive
					: `${strings.waitingLiveThe}`;

				presenceData.state = privacy
				? ""
				: mediaName.textContent;
				/*presenceData.state = privacy
					? ""
					: mediaFullName.textContent === "" // Sometimes it has an empty h1 (ex: JT 19h30)
					? mediaName.textContent
					: `${mediaName.textContent} : ${(mediaFullName.textContent =
							mediaFullName.textContent.replace(
								new RegExp(
									mediaName.textContent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
								),
								""
							))}`;
				
				presenceData.smallImageKey = Assets.Waiting;
				presenceData.smallImageText = strings.waitingLiveThe;

				if (time) {
					presenceData.endTimestamp = presence.getTimestamps(
						0,
						presence.timestampFromFormat(
							document.querySelector("div.LiveCountdown_countdown__vevrl > p")
								.textContent
						)
					)[1];
				}
			} else {
				presenceData.details = privacy
					? strings.viewAPage
					: `${strings.viewPage} ${
							document.querySelector(
								"main > nav > ul:last-of-type > li:nth-of-type(2) > a"
							).textContent
					  }`;

				presenceData.state = privacy ? "" : mediaName.textContent;

				presenceData.smallImageKey = Assets.Viewing;
				presenceData.smallImageText = strings.viewAPage;
			}

			if (exist("div.DetailsTitle_channelCategory__vh_cY > p")) {
				// Detect if we have Channel tag
				presenceData.largeImageKey = getChannel(
					document.querySelector("div.DetailsTitle_channelCategory__vh_cY > p")
						.textContent
				).logo;
				presenceData.largeImageText = getChannel(
					document.querySelector("div.DetailsTitle_channelCategory__vh_cY > p")
						.textContent
				).channel;
			} else {
				presenceData.largeImageKey = Assets.Auvio;
				presenceData.largeImageText = "Auvio";
			}

			break;
		}
		*/
		// In case we need a default
		default: {
			presenceData.details = pathname;
			break;
		}
	}

	if ((presenceData.startTimestamp || presenceData.endTimestamp) && !time) {
		delete presenceData.startTimestamp;
		delete presenceData.endTimestamp;
	}
	if (presenceData.details === "") delete presenceData.details;
	if (presenceData.state === "") delete presenceData.state;

	if ((!buttons || privacy) && presenceData.buttons)
		delete presenceData.buttons;

	if (presenceData.details) presence.setActivity(presenceData);
	else presence.setActivity();
});
