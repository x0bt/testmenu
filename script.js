let tg = window.Telegram.WebApp;
print(tg.initData());

if (tg.ready()) {
    tg.expand();   
}
