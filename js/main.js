/*====================================================
  甲・乙・丙・丁　共通入力項目の反映
====================================================*/
// HTMLの oninput="update()" から直接呼び出せるように、
// $(function() { ... }) の外に書くのがコツです！

function update() {
    // 1. 各入力欄の値を取得
    var kanaKo = $('#name_kana_ko').val() || "";
    var nameKo = $('#name_ko').val() || "";
    var post1Ko = $('#post-code1_ko').val() || "";
    var post2Ko = $('#post-code2_ko').val() || "";
    var addr1Ko = $('#address1_ko').val() || "";
    var addr2Ko = $('#address2_ko').val() || "";

    var kanaOtsu = $('#name_kana_otsu').val() || "";
    var nameOtsu = $('#name_otsu').val() || "";
    var post1Otsu = $('#post-code1_otsu').val() || "";
    var post2Otsu = $('#post-code2_otsu').val() || "";
    var addr1Otsu = $('#address1_otsu').val() || "";
    var addr2Otsu = $('#address2_otsu').val() || "";

    var kanahei = $('#name_kana_hei').val() || "";
    var namehei = $('#name_hei').val() || "";
    var post1hei = $('#post-code1_hei').val() || "";
    var post2hei = $('#post-code2_hei').val() || "";
    var addr1hei = $('#address1_hei').val() || "";
    var addr2hei = $('#address2_hei').val() || "";

    var kanatei = $('#name_kana_tei').val() || "";
    var nametei = $('#name_tei').val() || "";
    var post1tei = $('#post-code1_tei').val() || "";
    var post2tei = $('#post-code2_tei').val() || "";
    var addr1tei = $('#address1_tei').val() || "";
    var addr2tei = $('#address2_tei').val() || "";
    
    // 2. クラス指定された箇所すべてに反映
    // input要素（val）と、spanなどのテキスト要素（text）両方に送っておくと確実です
    $('.sync-kana-ko').val(kanaKo);
    $('.sync-name-ko').val(nameKo);
    $('.sync-post1-ko').val(post1Ko).text(post1Ko);
    $('.sync-post2-ko').val(post2Ko).text(post2Ko);
    $('.sync-address1-ko').val(addr1Ko).text(addr1Ko);
    $('.sync-address2-ko').val(addr2Ko).text(addr2Ko);
    
    $('.sync-kana-otsu').val(kanaOtsu);
    $('.sync-name-otsu').val(nameOtsu);
    $('.sync-post1-otsu').val(post1Otsu).text(post1Otsu);
    $('.sync-post2-otsu').val(post2Otsu).text(post2Otsu);
    $('.sync-address1-otsu').val(addr1Otsu).text(addr1Otsu);
    $('.sync-address2-otsu').val(addr2Otsu).text(addr2Otsu);

    $('.sync-kana-hei').val(kanahei);
    $('.sync-name-hei').val(namehei);
    $('.sync-post1-hei').val(post1hei).text(post1hei);
    $('.sync-post2-hei').val(post2hei).text(post2hei);
    $('.sync-address1-hei').val(addr1hei).text(addr1hei);
    $('.sync-address2-hei').val(addr2hei).text(addr2hei);

    $('.sync-kana-tei').val(kanatei);
    $('.sync-name-tei').val(nametei);
    $('.sync-post1-tei').val(post1tei).text(post1tei);
    $('.sync-post2-tei').val(post2tei).text(post2tei);
    $('.sync-address1-tei').val(addr1tei).text(addr1tei);
    $('.sync-address2-tei').val(addr2tei).text(addr2tei);

    // 3. 1ページ目の「（ここに会社名が入ります）」などのテキスト部分用
    // spanやpタグは .val() ではなく .text() を使います
    $('#out_company').text(nameKo + " 御中");

    // 住所1と住所2をスペースで繋いで反映
    $('.sync-address-full-ko').text(addr1Ko + " " + addr2Ko);
}

// ページ読み込み完了時に一度実行（初期値がある場合のため）
$(document).ready(function() {
    update();
});


/*====================================================
  エンターキーを押したら次の入力フォームにカーソルが移動
====================================================*/
$(function() {
    // ページ内の全ての input (type="text" や type="number") を対象にする
    $('input').on('keydown', function(e) {
        if (e.keyCode === 13) { // エンターキー
            e.preventDefault();

            // ページ内の全ての input を取得
            var $inputs = $('input');
            
            // 現在の要素が何番目かを取得
            var index = $inputs.index(this);
            
            // 次の要素が存在するか確認してフォーカス
            if (index + 1 < $inputs.length) {
                $inputs.eq(index + 1).focus();
            } else {
                // 最後の入力欄でエンターを押した場合
                // 最初の入力に戻すか、フォーカスを外すなどの処理（お好みで）
                $inputs.eq(index).blur(); 
            }
        }
    });
});

/*====================================================
  金額入力欄　カンマ付け（全角対応版）
====================================================*/
$(function() {
    $(document).on('blur', '.price-input', function() {
        // 1. カンマを除去し、全角数字を半角に変換
        var val = $(this).val()
            .replace(/,/g, '')
            .replace(/[０-９]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            });

        // 2. 数値として有効ならカンマ区切りにする
        if (val !== "" && !isNaN(val)) {
            $(this).val(Number(val).toLocaleString());
        }
    });

    $(document).on('focus', '.price-input', function() {
        var val = $(this).val().replace(/,/g, '');
        $(this).val(val);
    });
});

/*====================================================
  現金　or クレジット　「契約書兼同意書」表示非表示
====================================================*/
function updatePageVisibility() {
    const isCash = $('input[name="payment"][value="cash"]').is(':checked');
    const creditType = $('input[name="credit-type"]:checked').val();

    // 現金払いなら両方非表示
    if (isCash) {
        $('.page11, .page12').hide();
        return;
    }

    // 分割払いの場合はクレジット種別で切り替え
    $('.page11').toggle(creditType !== 'personal');
    $('.page12').toggle(creditType !== 'corporate');
}

$('input[name="payment"], input[name="credit-type"]').on('change', updatePageVisibility);

/*====================================================
  page12 本人確認　有無による詳細内容の表示・非表示
====================================================*/
$('select[name="business_type"]').on('change', function() {
    const val = $(this).val();
    $('.yes-container').toggle(val === '1'); // 有
    $('.no-container').toggle(val === '2');  // 無
});

/*====================================================
  保守・サービステーブル　自動計算ロジック（10%税・掛け算）
====================================================*/
$(function() {
    // ★ 'input change' に変更し、カンマが付いたタイミングでも再計算されるように修正
    $(document).on('input change', '.init-cost, .unit-price, .quantity', function() {
        // 入力された要素から見て、同じ行（tr）を取得する
        var $row = $(this).closest('tr');

        // カンマを除去し、全角数字を半角に変換してから数値にする関数
        function getNum($el) {
            if (!$el.length) return 0;
            var val = $el.val().replace(/,/g, '')
                .replace(/[環境-９]/g, function(s) { // ←全角数字を半角に変換する魔法の処理
                    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
                });
            return parseFloat(val) || 0;
        }

        // 1. 各入力欄の値を取得
        var initCost = getNum($row.find('.init-cost'));
        var unitPrice = getNum($row.find('.unit-price'));
        var quantity  = getNum($row.find('.quantity'));

        // 2. 初期費用 → 税額（10%）の計算
        var $initTaxInput = $row.find('.init-tax');
        if (initCost > 0) {
            var initTax = Math.floor(initCost * 0.1);
            // カンマ区切りの文字列にしてセットする
            $initTaxInput.val(initTax.toLocaleString());
        } else {
            $initTaxInput.val('');
        }

        // 3. 単価 × 数量 → 月額料金、およびその税額（10%）の計算
        var $monthCostInput = $row.find('.month-cost');
        var $monthTaxInput = $row.find('.month-tax');

        if (unitPrice > 0 && quantity > 0) {
            var monthCost = unitPrice * quantity;
            var monthTax = Math.floor(monthCost * 0.1);

            // カンマ区切りの文字列にしてセットする
            $monthCostInput.val(monthCost.toLocaleString());
            $monthTaxInput.val(monthTax.toLocaleString());
        } else {
            // 入力が不完全なら空にする
            $monthCostInput.val('');
            $monthTaxInput.val('');
        }
    });
});