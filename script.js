let tg = window.Telegram.WebApp;
print(tg.initData());

let main_page = document.querySelector('#main_page');

if  (main_page){
    window.Telegram.WebApp.expand()
    window.Telegram.WebApp.MainButton.onClick(buttonOn)
    window.Telegram.WebApp.MainButton.setParams({'text': 'Корзина'})
    window.Telegram.WebApp.MainButton.show()
}
