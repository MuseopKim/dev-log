module.exports = {
  /** Site MetaData (Required all)*/
  title: `Dev Log`, // (* Required)
  description: `Jr. Backend Developer`, // (* Required)
  author: `Museop Kim`, // (* Required)
  language: "ko-KR", // (* Required) html lang, ex. 'en' | 'en-US' | 'ko' | 'ko-KR' | ...
  siteUrl: "https://steadiness.dev", // (* Required)

  /** Header */
  profileImageFileName: "profile.webp", // include filename extension ex.'profile.jpg'
  // The Profile image file is located at path "./images/"
  // If the file does not exist, it is replaced by a random image.

  /** Home > Bio information*/
  comment: "Jr. Backend Developer",
  name: "Museop Kim",
  company: "",
  location: "Seoul, Korea",
  email: "museopkim0214@gmail.com",
  website: "", // ex.'https://junhobaik.github.io'
  linkedin: "", // ex.'https://www.linkedin.com/in/junho-baik-16073a19ab'
  facebook: "", // ex.'https://www.facebook.com/zuck' or 'https://www.facebook.com/profile.php?id=000000000000000'
  instagram: "", // ex.'https://www.instagram.com/junhobaik'
  github: "https://github.com/MuseopKim", // ex.'https://github.com/junhobaik'

  /** Post */
  enablePostOfContents: true, // TableOfContents activation (Type of Value: Boolean. Not String)
  disqusShortname: "", // comments (Disqus sort-name)
  enableSocialShare: true, // Social share icon activation (Type of Value: Boolean. Not String)

  /** Optional */
  googleAnalytics: "G-PEZ2BVSWQQ", // Google Analytics TrackingID. ex.'UA-123456789-0'
  googleSearchConsole: "mysm6P8FL_NGrBPplwqenldW-Os5Fn-FRqTu_mv01AQ", // content value in HTML tag of google search console ownership verification. ex.'w-K42k14_I4ApiQKuVPbCRVV-GxlrqWxYoqO94KMbKo'
  googleAdsenseSlot: "", // Google Adsense Slot. ex.'5214956675'
  googleAdsenseClient: "" // Google Adsense Client. ex.'ca-pub-5001380215831339'
  // Please correct the adsense client number(ex.5001380215831339) in the './static/ads.txt' file.
};
