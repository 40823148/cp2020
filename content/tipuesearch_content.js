var tipuesearch = {"pages": [{'title': 'About', 'text': '\n \n \n', 'tags': '', 'url': 'About.html'}, {'title': '建立網站', 'text': 'step1 下載可攜式python verson 3.8.5 "fall 2020" 利用cmd指令查看當前python版本以及所是用套件清單 \n step 2 去google git window 以下載git 套件 解壓縮fall2020/data/新增資料夾portablegit 將start.bat拉出更改cord \n REM for portable git set path_git=%Disk%:\\portablegit\\bin; 在path路徑後新增 %path_git%; 變數 \n 設定完後重啟start.bat 輸入指令git version 以測試git指令套件是否生效及查看版本 \n step 3 cd fall2020/tmp *使用學校電腦時需設置代理伺服器porxy *輸入指令git config --global http.proxy http://[2001:288:6004:17::69]:3128 抓取個人姓名及帳號 git config --global user.email "40823148@gm.nfu.edu" \n git config --global user.name "40823148" \n step 4 在github建立倉儲cad2020 cd tmp 進入tmp目錄下 將建立的倉儲抓下來並在tmp目錄下建立cad2020子目錄 git clone https://github.com/40823148/cad2020.git \n step 5 cd tmp/cad2020 進入tmp目錄中的cad子目錄 輸入指令 git submodule add https://github.com/mdecourse/cmsimde.git cmsimde 將在mdecourse倉儲中的模組git下來並在cad2020中建立cmsimde的目錄 \n step 6 進入cmsimde中 將up_dir檔案全部複製至cad2020目錄下 \n step 7 使用指令 pip install flask flask_cors lxml bs4 markdown pelican leo 將建立網站所需模組套件抓下來 \n step 8 cd tmp/cad2020/cmsimde 進入cmsimde目錄中 python wsgi.py 輸入指令以啟動網頁引擎 \n 輸入密碼admin 將網頁做基本名稱更改後 確認無礙轉成靜態網頁 cd tmp/cad2020 進入cad2020目錄下 git add . 將所更改的檔案整合 git commit -m"檔案名稱" git push 將檔案推送至倉儲 輸入github 使用者名稱及密碼 推送完成 在cad2020倉儲設定github pages 可得到靜態網址 https://40823148.github.io/cad2020/ \n', 'tags': '', 'url': '建立網站.html'}]};