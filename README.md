# 2022-HexSchool-Layout---week6

2022 六角切版直播班 - 第六週

本週學習重點：

<b>1. `!default` 是scss語法，指預設值，權重極小，如果都有加權重一樣，會顯示上面先加 `!default` 的，但如果沒有加 `!default` 權重較高會直接覆蓋</b>

2. 直接複製BS5的 `_variables.scss` 修改變數，因為有加 `!default` 要放在原本BS5的變數檔案前面才可以蓋過
   - 在 `$theme-colors(80-92行)` 修改顏色，也可以新增顏色，會自動新增一組相同顏色的背景、文字、等等，直接套class名稱就好
   - 如果想將按鈕改為直角，可以在 `$enable-rouded(218行)` 改為 `false`
   - 如果想修改間距，可以在 `$spacer(251行)` 修改或新增，一般會以 4px 或 8px 為基本，如果新增也會自動支援斷點
   - 如果想修改背景顏色可以在 `$body-bg(281行)` 修改或新增
   - 如果想取消連結下底線可以在 `$link-decoration(291行)` 改為 `none`
   - 如果要修改字體，可以在 `$font-family-sans-serif(421行)` 新增在最前面

<b>3. BS是用mobile first</b>

<b>4. 格線系統</b>
  - .col- 的外層只能是 .row
  - .row 裡面只能是 .col-
  - 最外層至少補一個 container 可以置中 
- 可以加上下 的 margin 與 padding
- 網頁內容與元件要放在 .col- 裡面
- row 預設已經寫好
    - dislpay:flex
    - flex-wrap:wrap
- gutter(間距)、column(欄)
- 排版三劍客： .container、.row、.col 1~12
    - container
        - .container 固定寬度
        - .container-fluid 滿版
    - .row
        - no-gutters：不需要 gutters
- 如果要改gutter（BS預設是24px）可以在 `$grid-gutter-width(348行)` 更改

<b>5. 格線系統常見錯誤</b>
    - 在 .col 增加寬度(不行！！！)
    - 在格線系統調整左右 margin 與 padding（不行！！！）

<b>6. `list-unstyled(加在ul上)` 這個class名稱可以取消列表圓點</b>
