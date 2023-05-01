import { siteConfig } from './lib/site-config';

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '46b1339b5334482c9f7706fa89aeadfa',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'MECO on the Rock',
  domain: 'mecovibre.vercel.app',
  author: 'MECO',

  // open graph metadata (optional)
  description: 'MECO on the Rock - 일하고 먹고 사는 이야기입니다.',

  // social usernames (optional)
  twitter: 'meco_vibre',
  // github: '#',
  // linkedin: '#',
  newsletter: 'https://dawoom.stibee.com/', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://file.notion.so/f/s/0cefe44b-0a91-4239-896a-5cb22da9fc68/favicon.png?id=0e773c7c-cf26-4f1c-a670-a6c63e6f6406&table=block&spaceId=d45fb170-b0a2-43cd-92f4-f9b616f901c5&expirationTimestamp=1683027620692&signature=LqL3bZ2ZZnsI29smCmhtC6k-azs_MRvxeMsFpOyDZVw&downloadName=favicon.png',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: '카테고리',
      pageId: '36400db511474331b5c1de6918212469',
    },
  ],

  // -------- custom configs (2skydev) -------------

  // date-fns format string
  dateformat: 'yyyy. MM. dd.',

  // post page - hidden properties
  hiddenPostProperties: ['설명', '상태', '최하위 정렬'],

  // contentPosition (table of contents) text align
  contentPositionTextAlign: 'left',

  // default theme color
  defaultTheme: 'system',

  // enable comment
  enableComment: true,
});
