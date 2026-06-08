/*====================================================
  甲・乙・丙・丁　共通入力項目の反映
====================================================*/
// HTMLの oninput="update()" から直接呼び出せるように、
// $(function() { ... }) の外に書く！

// ★日本語の「変換中（未確定）」かどうかを管理するフラグを、一番上（外側）に引っ越します
var isComposing = false;

function update() {
    // ★【重要】フリガナ欄などで日本語入力（未確定）のときは、
    // HTMLのoninputからのすり抜け呼び出しをここで完全にシャットアウトします！
    if (isComposing) return;

    // 1. 各入力欄の値を取得
    var dateYear  = $('#date_year').val()  || "";
    var dateMonth = $('#date_month').val() || "";
    var dateDay   = $('#date_day').val()   || "";

    var kanaKo = $('#name_kana_ko').val() || "";
    var nameKo = $('#name_ko').val() || "";
    var post1Ko = $('#post-code1_ko').val() || "";
    var post2Ko = $('#post-code2_ko').val() || "";
    var addrkanaKo = $('#address_kana_ko').val() || "";
    var addr1Ko = $('#address1_ko').val() || "";
    var addr2Ko = $('#address2_ko').val() || "";
    var tel1Ko = $('#tel-code1_ko').val() || "";
    var tel2Ko = $('#tel-code2_ko').val() || "";
    var tel3Ko = $('#tel-code3_ko').val() || "";
    var fax1Ko = $('#fax-code1_ko').val() || "";
    var fax2Ko = $('#fax-code2_ko').val() || "";
    var fax3Ko = $('#fax-code3_ko').val() || "";
    var positionKanaKo = $('#position_kana_ko').val() || "";
    var positionKo = $('#position_ko').val() || "";
    var repnameKanaKo = $('#repname_kana_ko').val() || "";
    var repnameKo = $('#repname_ko').val() || "";

    var kanaOtsu = $('#name_kana_otsu').val() || "";
    var nameOtsu = $('#name_otsu').val() || "";
    var post1Otsu = $('#post-code1_otsu').val() || "";
    var post2Otsu = $('#post-code2_otsu').val() || "";
    var addr1Otsu = $('#address1_otsu').val() || "";
    var addr2Otsu = $('#address2_otsu').val() || "";
    var tel1Otsu = $('#tel-code1_otsu').val() || "";
    var tel2Otsu = $('#tel-code2_otsu').val() || "";
    var tel3Otsu = $('#tel-code3_otsu').val() || "";

    var kanahei = $('#name_kana_hei').val() || "";
    var namehei = $('#name_hei').val() || "";
    var post1hei = $('#post-code1_hei').val() || "";
    var post2hei = $('#post-code2_hei').val() || "";
    var addr1hei = $('#address1_hei').val() || "";
    var addr2hei = $('#address2_hei').val() || "";

    var post1Hoshonin = $('#post-code1_hoshonin').val() || "";
    var post2Hoshonin = $('#post-code2_hoshonin').val() || "";
    var addrkanaHoshonin = $('#address_kana_hoshonin').val() || "";
    var addr1Hoshonin = $('#address1_hoshonin').val() || "";
    var addr2Hoshonin = $('#address2_hoshonin').val() || "";
    var tel1Hoshonin = $('#tel-code1_hoshonin').val() || "";
    var tel2Hoshonin = $('#tel-code2_hoshonin').val() || "";
    var tel3Hoshonin = $('#tel-code3_hoshonin').val() || "";
    
    // 2. クラス指定された箇所すべてに反映
    // input要素（val）と、spanなどのテキスト要素（text）両方に送っておくと確実
    $('.sync-date-year').val(dateYear).text(dateYear);
    $('.sync-date-month').val(dateMonth).text(dateMonth);
    $('.sync-date-day').val(dateDay).text(dateDay);

    $('.sync-kana-ko').val(kanaKo);
    $('.sync-name-ko').val(nameKo);
    $('.sync-post1-ko').val(post1Ko).text(post1Ko);
    $('.sync-post2-ko').val(post2Ko).text(post2Ko);
    $('.sync-address-kana-ko').val(addrkanaKo).text(addrkanaKo);
    $('.sync-address1-ko').val(addr1Ko).text(addr1Ko);
    $('.sync-address2-ko').val(addr2Ko).text(addr2Ko);
    $('.sync-tel1-ko').val(tel1Ko).text(tel1Ko);
    $('.sync-tel2-ko').val(tel2Ko).text(tel2Ko);
    $('.sync-tel3-ko').val(tel3Ko).text(tel3Ko);
    $('.sync-fax1-ko').val(fax1Ko).text(fax1Ko);
    $('.sync-fax2-ko').val(fax2Ko).text(fax2Ko);
    $('.sync-fax3-ko').val(fax3Ko).text(fax3Ko);
    $('.sync-position-kana-ko').val(positionKanaKo).text(positionKanaKo);
    $('.sync-position-ko').val(positionKo).text(positionKo);
    $('.sync-repname-kana-ko').val(repnameKanaKo).text(repnameKanaKo);
    $('.sync-repname-ko').val(repnameKo).text(repnameKo);
    
    $('.sync-kana-otsu').val(kanaOtsu);
    $('.sync-name-otsu').val(nameOtsu);
    $('.sync-post1-otsu').val(post1Otsu).text(post1Otsu);
    $('.sync-post2-otsu').val(post2Otsu).text(post2Otsu);
    $('.sync-address1-otsu').val(addr1Otsu).text(addr1Otsu);
    $('.sync-address2-otsu').val(addr2Otsu).text(addr2Otsu);
    $('.sync-tel1-otsu').val(tel1Otsu).text(tel1Otsu);
    $('.sync-tel2-otsu').val(tel2Otsu).text(tel2Otsu);
    $('.sync-tel3-otsu').val(tel3Otsu).text(tel3Otsu);

    $('.sync-kana-hei').val(kanahei);
    $('.sync-name-hei').val(namehei);
    $('.sync-post1-hei').val(post1hei).text(post1hei);
    $('.sync-post2-hei').val(post2hei).text(post2hei);
    $('.sync-address1-hei').val(addr1hei).text(addr1hei);
    $('.sync-address2-hei').val(addr2hei).text(addr2hei);

    $('.sync-post1-hoshonin').val(post1Hoshonin).text(post1Hoshonin);
    $('.sync-post2-hoshonin').val(post2Hoshonin).text(post2Hoshonin);
    $('.sync-address-kana-hoshonin').val(addrkanaHoshonin).text(addrkanaHoshonin);
    $('.sync-address1-hoshonin').val(addr1Hoshonin).text(addr1Hoshonin);
    $('.sync-address2-hoshonin').val(addr2Hoshonin).text(addr2Hoshonin);
    $('.sync-tel1-hoshonin').val(tel1Hoshonin).text(tel1Hoshonin);
    $('.sync-tel2-hoshonin').val(tel2Hoshonin).text(tel2Hoshonin);
    $('.sync-tel3-hoshonin').val(tel3Hoshonin).text(tel3Hoshonin);

    // 3. 1ページ目の「（ここに会社名が入ります）」などのテキスト部分用
    // spanやpタグは .val() ではなく .text() を使います
    $('#out_company').text(nameKo + " 御中");

    // 住所1と住所2をスペースで繋いで反映（空のときはプレースホルダーが消えないよう空文字をセット）
    var fullKo = (addr1Ko + " " + addr2Ko).trim();
    $('.sync-address-full-ko').val(fullKo);

    var fullOtsu = (addr1Otsu + " " + addr2Otsu).trim();
    $('.sync-address-full-otsu').val(fullOtsu);

    var fullHoshonin = (addr1Hoshonin + " " + addr2Hoshonin).trim();
    $('.sync-address-full-hoshonin').val(fullHoshonin);
}

// ページ読み込み完了時に一度実行（初期値がある場合のため）
$(document).ready(function() {
    update();

    // ひらがな → カタカナ変換関数
    function toKatakana(str) {
        return str.replace(/[\u3041-\u3096]/g, function(match) {
            return String.fromCharCode(match.charCodeAt(0) + 0x60);
        });
    }

    // フリガナ入力欄を全部まとめて指定
    const kanaFields = [
        '#name_kana_ko',
        '#address_kana_ko',
        '#position_kana_ko',
        '#repname_kana_ko',
        '#name_kana_otsu',
        '#name_kana_hei',
        '#address_kana_hoshonin'
    ];

    // 日本語の「変換中（未確定）」かどうかを管理するフラグ
    // let isComposing = false;
    const kanaSelector = kanaFields.join(',');

    $(kanaSelector)
        .on('compositionstart', function() {
            // 日本語の入力（ローマ字をひらがなに変えている最中など）が始まったらフラグをtrueに
            isComposing = true;
        })
        .on('compositionend', function() {
            // 日本語の変換が「確定（Enter）」された瞬間にフラグをfalseにして変換を実行
            isComposing = false;

            const val = $(this).val();
            $(this).val(toKatakana(val)); // カタカナに変換
            update(); // 画面全体に反映
        })
        .on('input', function() {
            // ★WindowsのIMEで変換中（未確定）のときは、文字がダブるのを防ぐために処理を完全にスルー（無視）する！
            if (isComposing) return;

            // 英数入力モードの時や、コピペで値が入った時はここが通ります
            const val = $(this).val();
            $(this).val(toKatakana(val));
            update();
        });
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
            // $(this).val(Number(val).toLocaleString());
            var num = Number(val);
            // init-cost2 / init-cost3 は必ずマイナス表示にする
            if ($(this).hasClass('init-cost2') || $(this).hasClass('init-cost3')) {
                num = -Math.abs(num);
            }
            $(this).val(num.toLocaleString());
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
  「委任状」表示非表示
====================================================*/
function updateIninVisibility() {
    const isYes = $('input[name="inin-type"][value="yes"]').is(':checked');
    const isNo = $('input[name="inin-type"][value="no"]').is(':checked');

    if (isNo) {
        $('.page13').hide();
        $('body').addClass('inin-no'); 
        return;
    }

    $('.page13').toggle(isYes);
    $('body').removeClass('inin-no');
}

$('input[name="inin-type"]').on('change', updateIninVisibility);

/*====================================================
  page12 本人確認　有無による詳細内容の表示・非表示
====================================================*/
// $('select[name="business_type"]').on('change', function() {
//     const val = $(this).val();
//     $('.yes-container').toggle(val === '1'); 
//     $('.no-container').toggle(val === '2');  
// });

/*====================================================
  保守・サービステーブル　自動計算ロジック（10%税・掛け算）
====================================================*/
$(function() {
    // ★ 'input change' に変更し、カンマが付いたタイミングでも再計算されるように修正
    $(document).on('input change', '.init-cost, .init-cost2, .init-cost3, .unit-price, .quantity', function() {
        // 入力された要素から見て、同じ行（tr）を取得する
        var $row = $(this).closest('tr');

        // カンマを除去し、全角数字を半角に変換してから数値にする関数
        function getNum($el) {
            if (!$el.length) return 0;
            var val = $el.val().replace(/,/g, '')
                .replace(/[０-９]/g, function(s) { // ←全角数字を半角に変換する魔法の処理
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
        // if (initCost > 0) {
        if ($row.find('.init-cost').val() !== '') {
            var initTax = Math.floor(initCost * 0.1);
            // カンマ区切りの文字列にしてセットする
            $initTaxInput.val(initTax.toLocaleString());
        } else {
            $initTaxInput.val('');
        }

        // init-cost2 → init-tax2 ← 追加
        // var initCost2 = getNum($row.find('.init-cost2'));
        var initCost2 = Math.abs(getNum($row.find('.init-cost2')));  // ← Math.abs() 追加
        var $initTax2Input = $row.find('.init-tax2');
        // if (initCost2 > 0) {
        if ($row.find('.init-cost2').val() !== '') { 
            // $initTax2Input.val(Math.floor(initCost2 * 0.1).toLocaleString());
            $initTax2Input.val((-Math.floor(initCost2 * 0.1)).toLocaleString());
        } else {
            $initTax2Input.val('');
        }

        // init-cost3 → init-tax3 ← 追加
        // var initCost3 = getNum($row.find('.init-cost3'));
        var initCost3 = Math.abs(getNum($row.find('.init-cost3')));  // ← Math.abs() 追加
        var $initTax3Input = $row.find('.init-tax3');
        // if (initCost3 > 0) {
        if ($row.find('.init-cost3').val() !== '') {  
            // $initTax3Input.val(Math.floor(initCost3 * 0.1).toLocaleString());
            $initTax3Input.val((-Math.floor(initCost3 * 0.1)).toLocaleString());
        } else {
            $initTax3Input.val('');
        }

        // 3. 単価 × 数量 → 月額料金、およびその税額（10%）の計算
        var $monthCostInput = $row.find('.month-cost');
        var $monthTaxInput = $row.find('.month-tax');

        // if (unitPrice > 0 && quantity > 0) {
        // 変更後（どちらかに値が入っていれば計算、両方空なら空欄）
        // if ($row.find('.unit-price').val() !== '' || $row.find('.quantity').val() !== '') {
        //「両方入力済みなら計算」という現行の挙動を保ちつつ 0 も表示
        if ($row.find('.unit-price').val() !== '' && $row.find('.quantity').val() !== '') {
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

/*====================================================
  合計計算：緑枠合計 - 青枠 = 赤枠
====================================================*/
function calcTotal() {
    function getNum($el) {
        if (!$el.length) return 0;
        var val = $el.val().replace(/,/g, '')
            .replace(/[０-９]/g, function(s) {
                return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
            });
        return parseFloat(val) || 0;
    }

    // 緑枠：discount-row と result-row を除く全行のinit-cost合計
    var totalInitCost = 0;
    var totalInitTax = 0;
    var totalMonthCost = 0;
    var totalMonthTax = 0;
    $('.hosyu-table tbody tr').not('.discount-row').not('.result-row-1').not('.result-row-2').each(function() {
        totalInitCost += getNum($(this).find('.init-cost'));
        totalInitTax += getNum($(this).find('.init-tax')); 
        totalMonthCost += getNum($(this).find('.month-cost'));
        totalMonthTax += getNum($(this).find('.month-tax')); 
    });

    // 青枠：各種割引合計行のinit-cost2
    // var discountCost = getNum($('.discount-row').find('.init-cost2'));
    // var discountTax = getNum($('.discount-row').find('.init-tax2'));
    // var discountMonthCost = getNum($('.discount-row').find('.init-cost3'));
    // var discountMonthTax = getNum($('.discount-row').find('.init-tax3'));

    // 青枠：各種割引合計行（マイナス入力でもプラス入力でも絶対値で扱う）
    var discountCost      = Math.abs(getNum($('.discount-row').find('.init-cost2')));
    var discountTax       = Math.abs(getNum($('.discount-row').find('.init-tax2')));
    var discountMonthCost = Math.abs(getNum($('.discount-row').find('.init-cost3')));
    var discountMonthTax  = Math.abs(getNum($('.discount-row').find('.init-tax3')));    

    // 初期費用の計算
    var resultCost = totalInitCost - discountCost;
    var resultTax = totalInitTax - discountTax;

    // 月額料金の計算 追加
    var resultMonthCost = totalMonthCost - discountMonthCost;
    var resultMonthTax = totalMonthTax - discountMonthTax;

    // result-row-1 に出力
    $('.result-row-1').find('.price-input').eq(0).val(resultCost > 0 ? resultCost.toLocaleString() : '');
    $('.result-row-1').find('.price-input').eq(1).val(resultTax > 0 ? resultTax.toLocaleString() : '');
    $('.result-row-1').find('.price-input').eq(2).val(resultMonthCost > 0 ? resultMonthCost.toLocaleString() : '');
    $('.result-row-1').find('.price-input').eq(3).val(resultMonthTax > 0 ? resultMonthTax.toLocaleString() : '');

    // result-row-2 に出力
    var resultTotal = resultCost + resultTax;
    var resultMonthTotal = resultMonthCost + resultMonthTax;
    $('.result-row-2').find('.price-input').eq(0).val(resultTotal > 0 ? resultTotal.toLocaleString() : '');
    $('.result-row-2').find('.price-input').eq(1).val(resultMonthTotal > 0 ? resultMonthTotal.toLocaleString() : '');
}

// 既存のイベントの末尾にcalcTotal()を追加
$(document).on('input change', '.init-cost, .init-cost2, .init-cost3, .unit-price, .quantity', function() {
    // ...既存コードそのまま...

    calcTotal(); // ← 末尾に追加
});

/*====================================================
  印刷前に未選択のselectを非表示にして、印刷後に戻す
====================================================*/
$(window).on('beforeprint', function() {
    $('select').each(function() {
        if ($(this).val() === '' || $(this).val() === null) {
            $(this).css('visibility', 'hidden');
        }
    });
});

$(window).on('afterprint', function() {
    $('select').css('visibility', 'visible');
});

/*====================================================
  page3:支払回数 → page4：契約期間  に反映
====================================================*/
$('#payment-times').on('input', function() {
    $('#payment-times-sync').val($(this).val());
});