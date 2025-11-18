document.addEventListener('DOMContentLoaded', function () {
    console.log('Nội Thất TrippaD - Website đã sẵn sàng!');

    // ==================== DỮ LIỆU SẢN PHẨM ====================
    const products = [
        // === BÀN (15 sản phẩm) ===
        { id: 1, name: "Bàn làm việc gỗ sồi cao cấp", category: "Bàn", material: "Gỗ sồi tự nhiên", color: "Nâu đậm", price: 12500000, img: "imgs/ban-lam-viec-go-tu-nhien-dep-6.jpg", description: "Bàn làm việc cao cấp từ gỗ sồi tự nhiên", fullDescription: "Bàn làm việc gỗ sồi tự nhiên 100%, thiết kế tối giản phù hợp văn phòng và gia đình." },
        { id: 2, name: "Bàn ăn 6 ghế hiện đại", category: "Bàn", material: "Gỗ công nghiệp MDF", color: "Nâu sáng", price: 25800000, img: "imgs/ban-ghe-phong-an-Gray-min.jpg", description: "Bộ bàn ăn 6 ghế sang trọng", fullDescription: "Bộ bàn ăn 6 ghế thiết kế hiện đại, mặt bàn gỗ MDF phủ melamine chống trầy." },
        { id: 3, name: "Bàn trà gỗ óc chó", category: "Bàn", material: "Gỗ óc chó", color: "Nâu", price: 7500000, img: "imgs/sofa-go-oc-cho-sf05-6.jpg", description: "Bàn trà gỗ óc chó tự nhiên", fullDescription: "Bàn trà gỗ óc chó tự nhiên, thiết kế tinh tế cho phòng khách." },
        { id: 4, name: "Bàn học trẻ em", category: "Bàn", material: "Gỗ công nghiệp", color: "Trắng", price: 3200000, img: "imgs/ban-hoc-tre-em-go-cong-nghiep-BHTE013.jpg", description: "Bàn học cho trẻ em thiết kế ergonomic", fullDescription: "Bàn học cho trẻ em với thiết kế ergonomic, bảo vệ cột sống." },
        { id: 5, name: "Bàn trang điểm gỗ xoan đào", category: "Bàn", material: "Gỗ xoan đào", color: "Hồng nhạt", price: 8900000, img: "imgs/bang-go-xoan-dao-theo-nhu-cau-su-dung_e01ecfee4b57430aaca88b96f515f28c.jpg", description: "Bàn trang điểm sang trọng", fullDescription: "Bàn trang điểm từ gỗ xoan đào tự nhiên, kèm gương và ngăn kéo." },
        { id: 6, name: "Bàn máy tính gaming", category: "Bàn", material: "Gỗ MDF + Kim loại", color: "Đen", price: 4500000, img: "imgs/images.jpg", description: "Bàn máy tính chuyên game thủ", fullDescription: "Bàn máy tính gaming với thiết kế hiện đại, tích hợp đèn LED RGB." },
        { id: 7, name: "Bàn tiếp khách văn phòng", category: "Bàn", material: "Gỗ công nghiệp", color: "Nâu", price: 12500000, img: "imgs/L-Shaped-reception-desk_01.jpg", description: "Bàn tiếp khách chuyên nghiệp", fullDescription: "Bàn tiếp khách văn phòng cao cấp, thiết kế sang trọng." },
        { id: 8, name: "Bàn cafe inox mạ vàng", category: "Bàn", material: "Inox + Kính", color: "Vàng", price: 6800000, img: "imgs/images (1).jpg", description: "Bàn cafe sang trọng", fullDescription: "Bàn cafe từ inox mạ vàng và mặt kính cường lực." },
        { id: 9, name: "Bàn đa năng gấp gọn", category: "Bàn", material: "Nhựa + Kim loại", color: "Trắng", price: 1500000, img: "imgs/ban-lam-viec-gap-gon-da-nang-go-tu-nhien-khanhconcept-dk026-3-gk2xbclzh86msry.jpg", description: "Bàn đa năng có thể gấp gọn", fullDescription: "Bàn đa năng thiết kế thông minh, có thể gấp gọn tiết kiệm diện tích." },
        { id: 10, name: "Bàn bar gỗ sồi", category: "Bàn", material: "Gỗ sồi", color: "Nâu", price: 11200000, img: "imgs/z5774408102569_78c7a61bbe973cc22ef84a984d776cdd.jpg", description: "Bàn bar cho quán cafe", fullDescription: "Bàn bar từ gỗ sồi tự nhiên, phù hợp cho quán cafe và không gian hiện đại." },
        { id: 11, name: "Bàn tròn mặt đá", category: "Bàn", material: "Đá marble", color: "Trắng vân", price: 18500000, img: "imgs/bo-ban-an-tron-mat-da-min__1__668fe4d45b3840aca62b655a24fe2749.jpg", description: "Bàn tròn mặt đá marble", fullDescription: "Bàn tròn với mặt đá marble tự nhiên, chân kim loại sang trọng." },
        { id: 12, name: "Bàn làm việc đứng", category: "Bàn", material: "Kim loại + Gỗ", color: "Đen", price: 7500000, img: "imgs/ban-stadesk-140x60cm-go-tram-1.jpg", description: "Bàn làm việc có thể điều chỉnh độ cao", fullDescription: "Bàn làm việc đứng cho phép điều chỉnh độ cao linh hoạt." },
        { id: 13, name: "Bàn thờ gỗ gụ", category: "Bàn", material: "Gỗ gụ", color: "Nâu đỏ", price: 25000000, img: "imgs/z3825250210268_68fbc6f515c252ab50642d437f0bb1ac-2.jpg", description: "Bàn thờ tổ tiên cao cấp", fullDescription: "Bàn thờ từ gỗ gụ tự nhiên, chạm khắc tinh xảo." },
        { id: 14, name: "Bàn bếp đảo", category: "Bàn", material: "Đá nhân tạo", color: "Xám", price: 22000000, img: "imgs/ban-dao-bep-thiet-ke-thong-minh-pula-bd21-2.jpg", description: "Bàn bếp đảo hiện đại", fullDescription: "Bàn bếp đảo với mặt đá nhân tạo cao cấp, tích tủ bếp." },
        { id: 15, name: "Bàn trẻ em hình thú", category: "Bàn", material: "Nhựa ABS", color: "Xanh dương", price: 1200000, img: "imgs/ban-hoc-noithatgiasi-9.jpg", description: "Bàn trẻ em thiết kế ngộ nghĩnh", fullDescription: "Bàn trẻ em với thiết kế hình thú ngộ nghĩnh, an toàn cho bé." },

        // === GHẾ (15 sản phẩm) ===
        { id: 16, name: "Ghế văn phòng ergonomic", category: "Ghế", material: "Vải + Nhựa", color: "Đen", price: 4500000, img: "imgs/tải xuống.jpg", description: "Ghế văn phòng chống đau lưng", fullDescription: "Ghế văn phòng ergonomic thiết kế khoa học, hỗ trợ cột sống." },
        { id: 17, name: "Ghế sofa da cao cấp", category: "Ghế", material: "Da bò", color: "Nâu", price: 35000000, img: "imgs/5-47-768x779.jpg", description: "Ghế sofa da bò Ý", fullDescription: "Ghế sofa từ da bò Ý nhập khẩu, êm ái và sang trọng." },
        { id: 18, name: "Ghế gỗ phòng khách", category: "Ghế", material: "Gỗ sồi", color: "Nâu", price: 20000000, img: "imgs/2-26-768x681.jpg", description: "Ghế gỗ tự nhiên phòng khách", fullDescription: "Ghế gỗ sồi tự nhiên, thiết kế tối giản cho phòng khách." },
        { id: 19, name: "Ghế bar inox", category: "Ghế", material: "Inox + Da", color: "Bạc", price: 2500000, img: "imgs/ghe-bar-chan-inox-nem-tua-mau-trang-ma-b144-1.jpg", description: "Ghế bar cao inox", fullDescription: "Ghế bar từ inox không gỉ, đệm da cao cấp." },
        { id: 20, name: "Ghế xoay gaming", category: "Ghế", material: "Da PU + Kim loại", color: "Đỏ", price: 5200000, img: "imgs/461_yummi_6.jpg", description: "Ghế gaming chuyên nghiệp", fullDescription: "Ghế gaming với đèn LED RGB, hỗ trợ tối đa cho game thủ." },
        { id: 21, name: "Ghế bành gỗ hương", category: "Ghế", material: "Gỗ hương", color: "Nâu", price: 12800000, img: "imgs/ghe-banh-sicily_main_87_1020.jpg", description: "Ghế bành gỗ hương cổ điển", fullDescription: "Ghế bành từ gỗ hương tự nhiên, thiết kế cổ điển sang trọng." },
        { id: 22, name: "Ghế ăn gỗ óc chó", category: "Ghế", material: "Gỗ óc chó", color: "Nâu", price: 3200000, img: "imgs/ghe-an-go-oc-cho-pula.jpg", description: "Ghế ăn cao cấp", fullDescription: "Ghế ăn từ gỗ óc chó tự nhiên, thiết kế hiện đại." },
        { id: 23, name: "Ghế đá hoa cương", category: "Ghế", material: "Đá granite", color: "Xám", price: 8500000, img: "imgs/S5d65b4f9c022470ab02faf9549ba48fee.jpg_720x720q80.jpg", description: "Ghế đá ngoài trời", fullDescription: "Ghế đá granite chịu được thời tiết, phù hợp ngoài trời." },
        { id: 24, name: "Ghế treo mây tự nhiên", category: "Ghế", material: "Mây tre", color: "Nâu", price: 3800000, img: "imgs/RAHM-027-Style-1-2-768x512.jpg", description: "Ghế treo từ mây tự nhiên", fullDescription: "Ghế treo handmake từ mây tre tự nhiên, thiết kế độc đáo." },
        { id: 25, name: "Ghế văng mây", category: "Ghế", material: "Mây + Gỗ", color: "Nâu", price: 7500000, img: "imgs/p14.jpg", description: "Ghế văng thư giãn", fullDescription: "Ghế văng từ mây và gỗ, hoàn hảo cho không gian thư giãn." },
        { id: 26, name: "Ghế xếp nhựa", category: "Ghế", material: "Nhựa", color: "Xanh dương", price: 450000, img: "imgs/ghe_thu_gian_phong_ngu_1_0695c4b8ab.jpg", description: "Ghế xếp nhựa tiện lợi", fullDescription: "Ghế xếp từ nhựa cao cấp, gấp gọn dễ dàng." },
        { id: 27, name: "Ghế lười hạt xốp", category: "Ghế", material: "Vải + Hạt xốp", color: "Xám", price: 2800000, img: "imgs/adf5e47b6878314d60a6ada748ea4ab0.jpg", description: "Ghế lười siêu êm", fullDescription: "Ghế lười với ruột hạt xốp, ôm trọn cơ thể." },
        { id: 28, name: "Ghế massage toàn thân", category: "Ghế", material: "Da + Kim loại", color: "Đen", price: 45000000, img: "imgs/ghe-massage-toan-than-OTO-Stark-01-291-1692765366-.jpg", description: "Ghế massage cao cấp", fullDescription: "Ghế massage toàn thân với công nghệ Nhật Bản." },
        { id: 29, name: "Ghế trẻ em hình động vật", category: "Ghế", material: "Nhựa", color: "Hồng", price: 680000, img: "imgs/Ghe-sofa-tre-em-trang-tri-dong-vat-hoat-hinh-GSS003-1.jpg", description: "Ghế trẻ em ngộ nghĩnh", fullDescription: "Ghế trẻ em thiết kế hình thú, an toàn và đáng yêu." },
        { id: 30, name: "Ghế đẩu gỗ thông", category: "Ghế", material: "Gỗ thông", color: "Vàng nhạt", price: 1200000, img: "imgs/image_1024.jpg", description: "Ghế đẩu đa năng", fullDescription: "Ghế đẩu từ gỗ thông tự nhiên, nhẹ và bền." },

        // === TỦ (10 sản phẩm) ===
        { id: 31, name: "Tủ quần áo gỗ sồi", category: "Tủ", material: "Gỗ sồi", color: "Nâu", price: 18500000, img: "imgs/tu-dung-quan-ao-gia-dinh-go-soi-tu-nhien-hien-dai-ghs-5756.jpg", description: "Tủ quần áo 4 cánh", fullDescription: "Tủ quần áo từ gỗ sồi tự nhiên, 4 cánh với không gian rộng rãi." },
        { id: 32, name: "Tủ giày gỗ MDF", category: "Tủ", material: "Gỗ MDF", color: "Trắng", price: 3200000, img: "imgs/tu-de-giay-dep-go-cho-gia-dinh-ghtop-5672.jpg", description: "Tủ giày đa năng", fullDescription: "Tủ giày với nhiều ngăn, thiết kế hiện đại." },
        { id: 33, name: "Tủ bếp gỗ công nghiệp", category: "Tủ", material: "Gỗ MDF", color: "Xám", price: 25000000, img: "imgs/tu-bep-dep-hien-dai_24.jpg", description: "Tủ bếp hiện đại", fullDescription: "Tủ bếp từ gỗ công nghiệp chống ẩm, thiết kế tối ưu không gian." },
        { id: 34, name: "Tủ sách treo tường", category: "Tủ", material: "Gỗ ép", color: "Nâu", price: 4500000, img: "imgs/ke-treo-tuong.jpg", description: "Tủ sách tiết kiệm diện tích", fullDescription: "Tủ sách treo tường, thiết kế thông minh cho không gian nhỏ." },
        { id: 35, name: "Tủ quần áo hiện đại", category: "Tủ", material: "Kính", color: "Trắng", price: 12800000, img: "imgs/TQA15.jpg", description: "Tủ quần áo cao cấp", fullDescription: "Tủ quần áo có cánh tủ làm bằng kính." },
        { id: 36, name: "Tủ lạnh side by side", category: "Tủ", material: "Thép không gỉ", color: "Đen", price: 35000000, img: "imgs/tu-lanh-malloca-mf-547-sim.jpg", description: "Tủ lạnh công nghệ inverter", fullDescription: "Tủ lạnh side by side, tiết kiệm điện với công nghệ inverter." },
        { id: 37, name: "Tủ rượu gỗ gụ", category: "Tủ", material: "Gỗ gụ", color: "Nâu", price: 9800000, img: "imgs/tu-ruou-go-tu-nhien.jpg", description: "Tủ rượu gỗ gụ sang trọng", fullDescription: "Tủ rượu từ gỗ gụ có nhiều ngăn kéo." },
        { id: 38, name: "Tủ hồ sơ văn phòng", category: "Tủ", material: "Kim loại", color: "Nâu", price: 5200000, img: "imgs/THS421.jpg", description: "Tủ đựng hồ sơ chống cháy", fullDescription: "Tủ hồ sơ văn phòng với khả năng chống cháy, an toàn." },
        { id: 39, name: "Tủ giày thông minh", category: "Tủ", material: "Nhựa ABS", color: "Đen", price: 3800000, img: "imgs/0cb9bad68597451999775fe3f75fdf75tplv-o3syd03w52-resize-jpeg_800_800.jpg", description: "Tủ giày khử mùi", fullDescription: "Tủ giày thông minh với tính năng khử mùi và sấy khô." },
        { id: 40, name: "Tủ quần áo trẻ em", category: "Tủ", material: "Gỗ MDF", color: "Xanh", price: 6800000, img: "imgs/z4329730414826_31bcc29ab6466b7849d5113733bdd787_a90fdc0a8fa04f62babb3493b0635a94_grande.jpg", description: "Tủ quần áo cho bé", fullDescription: "Tủ quần áo trẻ em với thiết kế an toàn, màu sắc tươi sáng." },

        // === GIƯỜNG (5 sản phẩm) ===
        { id: 41, name: "Giường ngủ gỗ sồi king size", category: "Giường", material: "Gỗ sồi", color: "Nâu", price: 28500000, img: "imgs/giuong-go-soi-1.jpg", description: "Giường ngủ cao cấp", fullDescription: "Giường ngủ king size từ gỗ sồi tự nhiên." },
        { id: 42, name: "Giường tầng trẻ em", category: "Giường", material: "Gỗ thông", color: "Nâu", price: 12500000, img: "imgs/Giuong-tang-GT02-noi-that-tu-gia-5.jpg", description: "Giường tầng an toàn", fullDescription: "Giường tầng cho trẻ em với thiết kế an toàn, kèm cầu thang." },
        { id: 43, name: "Giường đơn gỗ hương", category: "Giường", material: "Gỗ hương", color: "Nâu", price: 45000000, img: "imgs/43_b18264c0d7324733940ab72387b35b94_grande.jpg", description: "Giường ngựa cổ điển", fullDescription: "Giường ngựa từ gỗ hương, thiết kế cổ điển sang trọng." },
        { id: 44, name: "Giường thông minh gấp gọn", category: "Giường", material: "Kim loại + Gỗ", color: "Trắng", price: 8500000, img: "imgs/302e84314e8bdc183a57fb0aeeb0d828.jpg", description: "Giường gấp gọn đa năng", fullDescription: "Giường thông minh có thể gấp gọn, tích hợp bàn làm việc." },
        { id: 45, name: "Giường canopy", category: "Giường", material: "Gỗ + Vải", color: "Trắng", price: 35000000, img: "imgs/640867e23460e45c8d6676af-citylight-canopy-bed-with-headboard.jpg", description: "Giường canopy lãng mạn", fullDescription: "Giường canopy với rèm voan, tạo không gian lãng mạn." },

        // === KỆ (5 sản phẩm) ===
        { id: 46, name: "Kệ sách gỗ sồi", category: "Kệ", material: "Gỗ sồi", color: "Nâu", price: 7500000, img: "imgs/Ke-sach-go-soi-da-nang-kieu-don-gian1.jpg", description: "Kệ sách 5 tầng", fullDescription: "Kệ sách từ gỗ sồi tự nhiên, 5 tầng với sức chứa lớn." },
        { id: 47, name: "Kệ tivi treo tường", category: "Kệ", material: "Kính + Kim loại", color: "Đen", price: 5200000, img: "imgs/-ke-treo-tuong-hien-dai-giup-tiet-kiem-khong-gian-va-tang-tinh-tham-my.jpg", description: "Kệ tivi hiện đại", fullDescription: "Kệ tivi treo tường từ kính cường lực và kim loại." },
        { id: 48, name: "Kệ giày gỗ MDF", category: "Kệ", material: "Gỗ MDF", color: "Nâu", price: 2800000, img: "imgs/5-avar-tu-giay-dep-go-kieu-dang-hien-dai-ghs-51812.jpg", description: "Kệ giày 3 tầng", fullDescription: "Kệ giày từ gỗ MDF chống ẩm, 3 tầng tiện lợi." },
        { id: 49, name: "Kệ trang trí inox", category: "Kệ", material: "Inox", color: "Bạc", price: 3800000, img: "imgs/thinh-phat-glass-kệ-trang-trí-phòng-khách-trong-thiết-kế-nội-thất-1.jpg", description: "Kệ trang trí nghệ thuật", fullDescription: "Kệ trang trí từ inox, thiết kế độc đáo cho không gian hiện đại." },
        { id: 50, name: "Kệ sách góc", category: "Kệ", material: "Gỗ ép", color: "Trắng", price: 4200000, img: "imgs/1.1-ke-sach-goc-tuong-dep.jpg", description: "Kệ sách góc thông minh", fullDescription: "Kệ sách góc thiết kế thông minh, tận dụng tối đa không gian." }
    ];

    // ==================== BIẾN TOÀN CỤC ====================
    const productList = document.getElementById('productList');
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    const materialFilter = document.getElementById('materialFilter');
    const colorFilter = document.getElementById('colorFilter');

    const vndFormatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0
    });

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    let currentProduct = null;
    let orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || {};

    // add global isRegister flag so auth UI state is consistent
    let isRegister = false;

    // Phân trang
    let currentPage = 1;
    const productsPerPage = 9;
    let filteredProducts = [];

    // ==================== KHỞI TẠO ỨNG DỤNG ====================
    function initialize() {
        console.log('🔄 Đang khởi tạo ứng dụng...');

        renderCategories();
        renderFeaturedProducts();
        renderProducts(products, 1);
        updateCartCount();
        updateCartUI();
        initializeAuthSystem();
        initializeModals();
        initializeEventListeners();
        initializeCategoryClicks();
        initializeProfessionalFeatures();
        initializeFloatingContact();
        initializeChatWidget();

        checkLoginStatus();

        // If we just registered, open the account modal and show the login form
        if (sessionStorage.getItem('showLoginAfterRegister') === 'true') {
            sessionStorage.removeItem('showLoginAfterRegister');
            isRegister = false;
            // ensure modal opens after DOM ready & init
            openAccountModal();
            toggleAuthForm(false);
        }

        console.log('✅ Ứng dụng đã khởi tạo thành công!');
    }
    // ==================== HỆ THỐNG XÁC THỰC ====================
    function initializeAuthSystem() {
        console.log('🔄 Đang khởi tạo hệ thống đăng nhập...');

        const loginBtn = document.getElementById('loginBtn');
        const authForm = document.getElementById('authForm');
        const toggleAuth = document.getElementById('toggleAuth');
        const logoutBtn = document.getElementById('logoutBtn');

        // Xử lý nút đăng nhập trên header
        if (loginBtn) {
            loginBtn.addEventListener('click', handleLoginClick);
            console.log('✅ Đã gắn sự kiện cho nút đăng nhập');
        } else {
            console.error('❌ Không tìm thấy nút đăng nhập');
        }

        // Xử lý toggle đăng nhập/đăng ký
        if (toggleAuth) {
            toggleAuth.addEventListener('click', function (e) {
                e.preventDefault();
                isRegister = !isRegister;
                toggleAuthForm(isRegister);
            });
        }

        // Xử lý submit form
        if (authForm) {
            authForm.addEventListener('submit', function (e) {
                e.preventDefault();
                console.log('📝 Đang xử lý form:', isRegister ? 'Đăng ký' : 'Đăng nhập');
                handleAuthSubmit(isRegister);
            });
        }

        // Xử lý nút đăng xuất
        if (logoutBtn) {
            logoutBtn.addEventListener('click', function (e) {
                e.preventDefault();
                logout();
            });
        }

        // Edit profile buttons (may be present in header or profile tab)
        const editProfileBtn = document.getElementById('editProfileBtn');
        const editProfileBtnInline = document.getElementById('editProfileBtnInline');
        const editProfileBtnMenu = document.getElementById('editProfileBtnMenu');
        if (editProfileBtn) editProfileBtn.addEventListener('click', openProfileEditor);
        if (editProfileBtnInline) editProfileBtnInline.addEventListener('click', openProfileEditor);
        if (editProfileBtnMenu) editProfileBtnMenu.addEventListener('click', openProfileEditor);
    }

    function handleLoginClick() {
        console.log('👆 Click đăng nhập, trạng thái:', currentUser ? 'Đã đăng nhập' : 'Chưa đăng nhập');

        if (currentUser) {
            console.log('👤 Mở modal tài khoản');
            openAccountModal();
        } else {
            console.log('🔐 Mở modal đăng nhập');
            openAccountModal();
        }
    }

    function toggleAuthForm(isRegister) {
        console.log('🔄 Chuyển sang:', isRegister ? 'Đăng ký' : 'Đăng nhập');

        const authTitle = document.getElementById('authTitle');
        const authSubmit = document.getElementById('authSubmit');
        const toggleAuth = document.getElementById('toggleAuth');

        if (authTitle) authTitle.textContent = isRegister ? 'Đăng ký' : 'Đăng nhập';
        if (authSubmit) authSubmit.textContent = isRegister ? 'Đăng ký' : 'Đăng nhập';
        if (toggleAuth) {
            toggleAuth.innerHTML = isRegister
                ? 'Đã có tài khoản? <a href="#">Đăng nhập</a>'
                : 'Chưa có tài khoản? <a href="#">Đăng ký ngay</a>';
        }
    }

    function handleAuthSubmit(isRegister) {
        const username = document.getElementById('authUsername')?.value.trim();
        const password = document.getElementById('authPassword')?.value.trim();

        console.log('📨 Thông tin đăng nhập:', { username, password, isRegister });

        if (!username || !password) {
            showToast('Vui lòng điền đủ thông tin', 'error');
            return;
        }

        if (username.length < 3) {
            showToast('Tên đăng nhập phải có ít nhất 3 ký tự', 'error');
            return;
        }

        if (password.length < 4) {
            showToast('Mật khẩu phải có ít nhất 4 ký tự', 'error');
            return;
        }

        if (isRegister) {
            registerUser(username, password);
        } else {
            loginUser(username, password);
        }
    }

    function registerUser(username, password) {
        console.log('📝 Đang đăng ký user:', username);

        // Kiểm tra xem user đã tồn tại chưa
        const existingUser = localStorage.getItem(`user_${username}`);
        if (existingUser) {
            showToast('Tài khoản đã tồn tại!', 'error');
            return;
        }

        const userData = {
            username: username,
            password: password,
            joinDate: new Date().toISOString()
        };

        // Lưu user vào localStorage
        localStorage.setItem(`user_${username}`, JSON.stringify(userData));
        console.log('✅ Đã đăng ký user:', username);

        // Mark to show login modal after reload, then reload silently
        sessionStorage.setItem('showLoginAfterRegister', 'true');
        // reload page so UI is reset and login modal can be shown
        window.location.reload();
    }

    function loginUser(username, password) {
        console.log('🔐 Đang đăng nhập:', username);

        const storedUser = localStorage.getItem(`user_${username}`);

        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.password === password) {
                // Đăng nhập thành công
                currentUser = userData;
                localStorage.setItem('currentUser', JSON.stringify(currentUser));

                console.log('✅ Đăng nhập thành công:', username);
                showToast(`Xin chào, ${username}!`);

                // Đóng modal và cập nhật giao diện
                closeAccountModal();
                updateLoginUI();
                document.getElementById('authForm').reset();

            } else {
                console.log('❌ Sai mật khẩu');
                showToast('Sai mật khẩu!', 'error');
            }
        } else {
            console.log('❌ Tài khoản không tồn tại');
            showToast('Tài khoản không tồn tại!', 'error');
        }
    }

    function checkLoginStatus() {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
            try {
                currentUser = JSON.parse(storedUser);
                console.log('🔍 Đã đăng nhập:', currentUser.username);
                updateLoginUI();
                return true;
            } catch (e) {
                console.error('❌ Lỗi parse user data:', e);
                localStorage.removeItem('currentUser');
            }
        }
        console.log('🔍 Chưa đăng nhập');
        return false;
    }

    function updateLoginUI() {
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn && currentUser) {
            loginBtn.textContent = `👤 ${currentUser.username}`;
            loginBtn.style.background = 'var(--primary)';
            loginBtn.title = 'Tài khoản của bạn';
            console.log('🎨 Đã cập nhật giao diện đăng nhập');
        }
    }

    function logout() {
        console.log('🚪 Đang đăng xuất:', currentUser?.username);

        currentUser = null;
        localStorage.removeItem('currentUser');

        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.textContent = '🔑 Đăng nhập';
            loginBtn.style.background = '';
            loginBtn.title = '';
        }

        showToast('Đã đăng xuất!');
        closeAccountModal();

        console.log('✅ Đã đăng xuất');
    }

    function requireLogin(action) {
        if (!checkLoginStatus()) {
            showToast('Vui lòng đăng nhập để ' + action, 'error');
            openAccountModal();
            return false;
        }
        return true;
    }

    function showAuthSection() {
        console.log('👤 Hiển thị form đăng nhập');

        const authSection = document.getElementById('authSection');
        const accountHeader = document.getElementById('accountHeader');
        const accountMenu = document.getElementById('accountMenu');

        if (authSection) authSection.style.display = 'block';
        if (accountHeader) accountHeader.style.display = 'none';
        if (accountMenu) accountMenu.style.display = 'none';

        // Reset form về đăng nhập
        toggleAuthForm(false);
        document.getElementById('authForm')?.reset();
    }

    function showAccountSection() {
        console.log('💼 Hiển thị thông tin tài khoản');

        const authSection = document.getElementById('authSection');
        const accountHeader = document.getElementById('accountHeader');
        const accountMenu = document.getElementById('accountMenu');
        const accountUsername = document.getElementById('accountUsername');
        const profileUsername = document.getElementById('profileUsername');
        const profileJoinDate = document.getElementById('profileJoinDate');

        if (authSection) authSection.style.display = 'none';
        if (accountHeader) accountHeader.style.display = 'block';
        if (accountMenu) accountMenu.style.display = 'block';

        if (accountUsername && currentUser) accountUsername.textContent = currentUser.displayName || currentUser.username;
        if (profileUsername && currentUser) profileUsername.textContent = currentUser.username;
        if (profileJoinDate && currentUser) {
            profileJoinDate.textContent = new Date(currentUser.joinDate).toLocaleDateString('vi-VN');
        }

        // update profile avatar & display name in profile tab
        const profileDisplayName = document.getElementById('profileDisplayName');
        if (profileDisplayName && currentUser) profileDisplayName.textContent = currentUser.displayName || currentUser.username;

        const accountAvatar = document.getElementById('accountAvatar');
        const accountAvatarFallback = document.getElementById('accountAvatarFallback');
        const profileAvatar = document.getElementById('profileAvatar');
        const profileAvatarFallback = document.getElementById('profileAvatarFallback');

        if (currentUser && currentUser.avatar) {
            if (accountAvatar) { accountAvatar.src = currentUser.avatar; accountAvatar.style.display = 'block'; }
            if (accountAvatarFallback) accountAvatarFallback.style.display = 'none';
            if (profileAvatar) { profileAvatar.src = currentUser.avatar; profileAvatar.style.display = 'block'; }
            if (profileAvatarFallback) profileAvatarFallback.style.display = 'none';
        } else {
            if (accountAvatar) accountAvatar.style.display = 'none';
            if (accountAvatarFallback) accountAvatarFallback.style.display = 'block';
            if (profileAvatar) profileAvatar.style.display = 'none';
            if (profileAvatarFallback) profileAvatarFallback.style.display = 'block';
        }

        updateOrderStats();
        loadOrders('all');
        initializeAccountTabs();
    }

    function openProfileEditor() {
        if (!currentUser) {
            showToast('Vui lòng đăng nhập để chỉnh sửa hồ sơ', 'error');
            openAccountModal();
            return;
        }

        // ensure account modal is open and account section shown
        openAccountModal();

        const editor = document.getElementById('profileEditor');
        const displayInput = document.getElementById('editDisplayName');
        const avatarUrlInput = document.getElementById('editAvatarUrl');
        const avatarFileInput = document.getElementById('editAvatarFile');
        const previewImg = document.getElementById('editAvatarPreview');
        const previewFallback = document.getElementById('editAvatarPreviewFallback');

        if (!editor || !displayInput || !avatarUrlInput || !avatarFileInput) return;

        // populate current values
        displayInput.value = currentUser.displayName || '';
        avatarUrlInput.value = currentUser.avatar && currentUser.avatar.startsWith('data:') ? '' : (currentUser.avatar || '');
        if (currentUser.avatar) {
            previewImg.src = currentUser.avatar;
            previewImg.style.display = 'block';
            if (previewFallback) previewFallback.style.display = 'none';
        } else {
            previewImg.style.display = 'none';
            if (previewFallback) previewFallback.style.display = 'block';
        }

        // show editor
        editor.style.display = 'block';

        // file change -> preview as base64
        avatarFileInput.onchange = handleProfileImageFile;

        // preview when URL changes
        avatarUrlInput.oninput = function () {
            const url = this.value.trim();
            if (url) {
                previewImg.src = url;
                previewImg.style.display = 'block';
                if (previewFallback) previewFallback.style.display = 'none';
            } else {
                previewImg.style.display = 'none';
                if (previewFallback) previewFallback.style.display = 'block';
            }
        };

        // buttons
        document.getElementById('saveProfileBtn')?.addEventListener('click', saveProfileChanges);
        document.getElementById('cancelEditProfileBtn')?.addEventListener('click', closeProfileEditor);
    }

    function closeProfileEditor() {
        const editor = document.getElementById('profileEditor');
        if (editor) editor.style.display = 'none';
        // reset file input
        const avatarFileInput = document.getElementById('editAvatarFile');
        if (avatarFileInput) avatarFileInput.value = '';
    }

    function handleProfileImageFile(e) {
        const file = e.target.files && e.target.files[0];
        const previewImg = document.getElementById('editAvatarPreview');
        const previewFallback = document.getElementById('editAvatarPreviewFallback');
        const avatarUrlInput = document.getElementById('editAvatarUrl');

        if (!file) return;

        const reader = new FileReader();
        reader.onload = function (ev) {
            const dataUrl = ev.target.result;
            if (previewImg) { previewImg.src = dataUrl; previewImg.style.display = 'block'; }
            if (previewFallback) previewFallback.style.display = 'none';
            // clear URL input when uploading a file
            if (avatarUrlInput) avatarUrlInput.value = '';
        };
        reader.readAsDataURL(file);
    }

    function saveProfileChanges() {
        const displayInput = document.getElementById('editDisplayName');
        const avatarUrlInput = document.getElementById('editAvatarUrl');
        const avatarFileInput = document.getElementById('editAvatarFile');
        const previewImg = document.getElementById('editAvatarPreview');

        if (!currentUser) return;

        const newDisplay = displayInput?.value.trim();
        const avatarUrl = avatarUrlInput?.value.trim();

        if (newDisplay && newDisplay.length < 2) {
            showToast('Tên hiển thị phải ít nhất 2 ký tự', 'error');
            return;
        }

        // set display name
        if (newDisplay) currentUser.displayName = newDisplay;

        // priority: uploaded file preview (base64) > URL input
        if (previewImg && previewImg.src) {
            currentUser.avatar = previewImg.src;
        } else if (avatarUrl) {
            currentUser.avatar = avatarUrl;
        } // otherwise leave avatar unchanged

        // save
        localStorage.setItem(`user_${currentUser.username}`, JSON.stringify(currentUser));
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        showToast('Đã cập nhật thông tin hồ sơ', 'success');

        // refresh UI
        updateLoginUI();
        showAccountSection();
        closeProfileEditor();
    }
    
    // ==================== MODAL FUNCTIONS ====================
    function initializeModals() {
        // Account Modal
        const accountModal = document.getElementById('accountModal');
        const closeAccount = document.getElementById('closeAccount');

        if (closeAccount && accountModal) {
            closeAccount.addEventListener('click', () => closeModal(accountModal));
        }

        // Product Modal
        const productModal = document.getElementById('productModal');
        const closeProductModal = document.getElementById('closeProductModal');
        const closeProductModalBtn = document.getElementById('closeProductModalBtn');
        const modalAddToCart = document.getElementById('modalAddToCart');

        if (closeProductModal && productModal) {
            closeProductModal.addEventListener('click', () => closeModal(productModal));
        }

        if (closeProductModalBtn && productModal) {
            closeProductModalBtn.addEventListener('click', () => closeModal(productModal));
        }

        if (modalAddToCart) {
            modalAddToCart.addEventListener('click', () => {
                if (currentProduct) {
                    addToCart(currentProduct);
                    closeModal(productModal);
                }
            });
        }

        // Cart Modal
        const cartModal = document.getElementById('cartModal');
        const cartBtn = document.getElementById('cartBtn');
        const closeCart = document.getElementById('closeCart');
        const clearCartBtn = document.getElementById('clearCart');
        const checkoutBtn = document.getElementById('checkoutBtn');

        if (cartBtn && cartModal) {
            cartBtn.addEventListener('click', () => openModal(cartModal));
        }

        if (closeCart && cartModal) {
            closeCart.addEventListener('click', () => closeModal(cartModal));
        }

        if (clearCartBtn) {
            clearCartBtn.addEventListener('click', clearCart);
        }

        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', checkout);
        }

        // Checkout Modal
        const checkoutModal = document.getElementById('checkoutModal');
        const closeCheckout = document.getElementById('closeCheckout');
        const checkoutForm = document.getElementById('checkoutForm');

        if (closeCheckout && checkoutModal) {
            closeCheckout.addEventListener('click', () => closeModal(checkoutModal));
        }

        if (checkoutForm) {
            checkoutForm.addEventListener('submit', handleCheckout);
        }

        // Order Details Modal
        const orderDetailsModal = document.getElementById('orderDetailsModal');
        const closeOrderDetails = document.getElementById('closeOrderDetails');
        const closeOrderDetailsBtn = document.getElementById('closeOrderDetailsBtn');

        if (closeOrderDetails && orderDetailsModal) {
            closeOrderDetails.addEventListener('click', () => closeModal(orderDetailsModal));
        }

        if (closeOrderDetailsBtn && orderDetailsModal) {
            closeOrderDetailsBtn.addEventListener('click', () => closeModal(orderDetailsModal));
        }

        // Close modal when clicking outside
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal(e.target);
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const openModal = document.querySelector('.modal.show');
                if (openModal) {
                    closeModal(openModal);
                }
            }
        });
    }

    function openModal(modal) {
        if (modal) {
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';

            if (modal.id === 'accountModal') {
                if (currentUser) {
                    showAccountSection();
                } else {
                    showAuthSection();
                }
            }
        }
    }

    function closeModal(modal) {
        if (modal) {
            modal.classList.remove('show');
            const anyModalOpen = document.querySelector('.modal.show');
            if (!anyModalOpen) {
                document.body.style.overflow = '';
            }

            if (modal.id === 'accountModal') {
                const authForm = document.getElementById('authForm');
                if (authForm) authForm.reset();
                toggleAuthForm(false);
            }
            if (modal.id === 'checkoutModal') {
                const checkoutForm = document.getElementById('checkoutForm');
                if (checkoutForm) checkoutForm.reset();
            }
        }
    }

    function openAccountModal() {
        const accountModal = document.getElementById('accountModal');
        if (accountModal) {
            console.log('🚀 Mở modal tài khoản');
            openModal(accountModal);

            // Hiển thị phần đúng dựa trên trạng thái đăng nhập
            if (currentUser) {
                console.log('👤 Hiển thị thông tin tài khoản');
                showAccountSection();
            } else {
                console.log('🔐 Hiển thị form đăng nhập');
                showAuthSection();
            }
        } else {
            console.error('❌ Không tìm thấy modal tài khoản');
        }
    }

    function closeAccountModal() {
        const accountModal = document.getElementById('accountModal');
        closeModal(accountModal);
    }

    function openProductModal(product) {
        currentProduct = product;
        const productModal = document.getElementById('productModal');
        const modalProductImg = document.getElementById('modalProductImg');
        const modalProductName = document.getElementById('modalProductName');
        const modalProductPrice = document.getElementById('modalProductPrice');
        const modalProductDesc = document.getElementById('modalProductDesc');
        const modalProductSpecs = document.getElementById('modalProductSpecs');

        if (modalProductImg) modalProductImg.src = product.img;
        if (modalProductName) modalProductName.textContent = product.name;
        if (modalProductPrice) modalProductPrice.textContent = vndFormatter.format(product.price);
        if (modalProductDesc) modalProductDesc.textContent = product.description;

        if (modalProductSpecs) {
            modalProductSpecs.innerHTML = `
                <li><strong>Loại:</strong> ${product.category}</li>
                <li><strong>Chất liệu:</strong> ${product.material}</li>
                <li><strong>Màu sắc:</strong> ${product.color}</li>
                <li><strong>Bảo hành:</strong> 24 tháng</li>
            `;
        }

        openModal(productModal);
    }

    function openCartModal() {
        const cartModal = document.getElementById('cartModal');
        openModal(cartModal);
    }

    function openCheckoutModal() {
        const checkoutModal = document.getElementById('checkoutModal');
        openModal(checkoutModal);
    }

    function openOrderDetailsModal(order) {
        const modal = document.getElementById('orderDetailsModal');
        const content = document.getElementById('orderDetailsContent');

        if (!modal || !content) return;

        content.innerHTML = generateOrderDetailsHTML(order);
        openModal(modal);
    }

    // ==================== TÀI KHOẢN & ĐƠN HÀNG ====================
    function initializeAccountTabs() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const tab = this.dataset.tab;
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));

                this.classList.add('active');
                const tabPane = document.getElementById(tab + 'Tab');
                if (tabPane) tabPane.classList.add('active');
            });
        });

        // Order filter
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                loadOrders(this.dataset.status);
            });
        });

        // Stat card click
        document.querySelectorAll('.stat-card').forEach(card => {
            card.addEventListener('click', function () {
                const status = this.dataset.status;
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll(`.filter-btn[data-status="${status}"]`).forEach(btn => btn.classList.add('active'));
                loadOrders(status);
            });
        });
    }

    function updateOrderStats() {
        if (!currentUser) return;

        const orders = getOrderHistory();
        const stats = {
            all: orders.length,
            pending: orders.filter(order => order.status === 'pending').length,
            shipping: orders.filter(order => order.status === 'shipping').length,
            completed: orders.filter(order => order.status === 'completed').length
        };

        Object.keys(stats).forEach(status => {
            const statElement = document.querySelector(`.stat-card[data-status="${status}"] .stat-number`);
            if (statElement) {
                statElement.textContent = stats[status];
            }
        });

        const totalOrdersElement = document.getElementById('profileTotalOrders');
        if (totalOrdersElement) {
            totalOrdersElement.textContent = `${orders.length} đơn`;
        }
    }

    function loadOrders(statusFilter = 'all') {
        if (!currentUser) return;

        const ordersList = document.getElementById('ordersList');
        if (!ordersList) return;

        const orders = getOrderHistory();
        let filteredOrders = orders;

        if (statusFilter !== 'all') {
            filteredOrders = orders.filter(order => order.status === statusFilter);
        }

        filteredOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

        if (filteredOrders.length === 0) {
            ordersList.innerHTML = `
                <div class="empty-orders">
                    <div class="icon">📦</div>
                    <h3>Chưa có đơn hàng</h3>
                    <p>Hãy mua sắm và trải nghiệm dịch vụ của chúng tôi!</p>
                </div>
            `;
            return;
        }

        ordersList.innerHTML = filteredOrders.map(order => generateOrderCardHTML(order)).join('');

        document.querySelectorAll('.order-card').forEach((card, index) => {
            card.addEventListener('click', function (e) {
                if (!e.target.closest('.order-actions')) {
                    openOrderDetailsModal(filteredOrders[index]);
                }
            });
        });
    }

    function generateOrderCardHTML(order) {
        return `
            <div class="order-card">
                <div class="order-header">
                    <div>
                        <div class="order-id">Mã đơn: ${order.id}</div>
                        <div class="order-date">${new Date(order.date).toLocaleDateString('vi-VN')}</div>
                    </div>
                    <div class="order-status status-${order.status}">
                        ${getStatusText(order.status)}
                    </div>
                </div>
                
                <div class="order-items">
                    ${order.items.map(item => `
                        <div class="order-item">
                            <img src="${item.img}" alt="${item.name}">
                            <div class="order-item-info">
                                <div class="order-item-name">${item.name}</div>
                                <div class="order-item-price">${vndFormatter.format(item.price)}</div>
                                <div class="order-item-quantity">Số lượng: ${item.quantity}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <div class="order-total">
                    Tổng tiền: ${vndFormatter.format(order.total)}
                </div>
                
                ${order.status === 'pending' ? `
                    <div class="order-actions">
                        <button class="btn btn-danger" onclick="app.cancelOrder('${order.id}')">Huỷ đơn</button>
                        <button class="btn btn-primary" onclick="app.contactSupport('${order.id}')">Liên hệ hỗ trợ</button>
                    </div>
                ` : ''}
                
                ${order.status === 'completed' ? `
                    <div class="order-actions">
                        <button class="btn btn-primary" onclick="app.reorder('${order.id}')">Mua lại</button>
                        <button class="btn" onclick="app.contactSupport('${order.id}')">Khiếu nại</button>
                    </div>
                ` : ''}
            </div>
        `;
    }

    function generateOrderDetailsHTML(order) {
        return `
            <div class="order-details">
                <div class="detail-section">
                    <h3>Thông tin đơn hàng</h3>
                    <div class="detail-row">
                        <span class="detail-label">Mã đơn hàng:</span>
                        <span class="detail-value">${order.id}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Ngày đặt:</span>
                        <span class="detail-value">${new Date(order.date).toLocaleString('vi-VN')}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Trạng thái:</span>
                        <span class="detail-value status-${order.status}">${getStatusText(order.status)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Tổng tiền:</span>
                        <span class="detail-value" style="font-weight: 700; color: var(--primary);">${vndFormatter.format(order.total)}</span>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3>Thông tin giao hàng</h3>
                    <div class="detail-row">
                        <span class="detail-label">Người nhận:</span>
                        <span class="detail-value">${order.customerName}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Điện thoại:</span>
                        <span class="detail-value">${order.customerPhone}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Địa chỉ:</span>
                        <span class="detail-value">${order.shippingAddress}</span>
                    </div>
                </div>
                
                <div class="detail-section">
                    <h3>Sản phẩm</h3>
                    <div class="order-items-details">
                        ${order.items.map(item => `
                            <div class="order-item-detail">
                                <img src="${item.img}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">
                                <div class="item-info">
                                    <div class="item-name">${item.name}</div>
                                    <div class="item-meta">
                                        <span class="item-price">${vndFormatter.format(item.price)}</span>
                                        <span class="item-quantity">× ${item.quantity}</span>
                                    </div>
                                </div>
                                <div class="item-total">${vndFormatter.format(item.price * item.quantity)}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    function getStatusText(status) {
        const statusMap = {
            'pending': 'Chờ xác nhận',
            'confirmed': 'Đã xác nhận',
            'shipping': 'Đang giao hàng',
            'completed': 'Đã giao',
            'cancelled': 'Đã huỷ'
        };
        return statusMap[status] || status;
    }

    function getOrderHistory() {
        if (!currentUser) return [];
        return orderHistory[currentUser.username] || [];
    }

    function saveOrderHistory(orders) {
        if (!currentUser) return;
        orderHistory[currentUser.username] = orders;
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    }

    // ==================== GIỎ HÀNG ====================
    function addToCart(product, quantity = 1) {
        if (!requireLogin('thêm sản phẩm vào giỏ hàng')) return;

        const existingIndex = cart.findIndex(item => item.id === product.id);

        if (existingIndex > -1) {
            cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + quantity;
        } else {
            cart.push({
                ...product,
                quantity: quantity
            });
        }

        saveCart();
        updateCartCount();
        updateCartUI();
        showToast(`Đã thêm "${product.name}" vào giỏ hàng`, 'success');
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        if (cartCount) {
            const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
            cartCount.textContent = count;
        }
    }

    function updateCartUI() {
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');

        if (!cartItems) return;

        cartItems.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align:center; color:#666; padding:2rem;">Giỏ hàng trống</p>';
            if (cartTotal) cartTotal.textContent = '0';
            return;
        }

        cart.forEach((item, index) => {
            const quantity = item.quantity || 1;
            total += item.price * quantity;

            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <img src="${item.img}" alt="${item.name}" style="width:60px; height:60px; object-fit:cover; border-radius:6px;">
                <div style="flex:1;">
                    <p style="font-weight:600; margin-bottom:5px;">${item.name}</p>
                    <p style="color:#2A5B3D; font-weight:600;">${vndFormatter.format(item.price)}</p>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button class="qty-btn minus" data-index="${index}" style="width:30px; height:30px; border:1px solid #ddd; background:white; border-radius:4px;">−</button>
                    <input type="text" value="${quantity}" readonly style="width:40px; text-align:center; border:1px solid #ddd; border-radius:4px; padding:5px;">
                    <button class="qty-btn plus" data-index="${index}" style="width:30px; height:30px; border:1px solid #ddd; background:white; border-radius:4px;">+</button>
                    <button class="delete-btn" data-index="${index}" style="background:#dc2626; color:white; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;">Xóa</button>
                </div>
            `;
            cartItems.appendChild(itemElement);
        });

        if (cartTotal) cartTotal.textContent = vndFormatter.format(total);

        setTimeout(() => {
            document.querySelectorAll('.qty-btn.minus').forEach(btn => {
                btn.addEventListener('click', function () {
                    const index = parseInt(this.dataset.index);
                    if (cart[index].quantity > 1) {
                        cart[index].quantity--;
                    } else {
                        cart.splice(index, 1);
                    }
                    saveCart();
                    updateCartCount();
                    updateCartUI();
                });
            });

            document.querySelectorAll('.qty-btn.plus').forEach(btn => {
                btn.addEventListener('click', function () {
                    const index = parseInt(this.dataset.index);
                    cart[index].quantity = (cart[index].quantity || 1) + 1;
                    saveCart();
                    updateCartCount();
                    updateCartUI();
                });
            });

            document.querySelectorAll('.delete-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    const index = parseInt(this.dataset.index);
                    cart.splice(index, 1);
                    saveCart();
                    updateCartCount();
                    updateCartUI();
                    showToast('Đã xóa sản phẩm khỏi giỏ hàng');
                });
            });
        }, 100);
    }

    function clearCart() {
        if (cart.length === 0) {
            showToast('Giỏ hàng đã trống!', 'error');
            return;
        }
        if (confirm('Bạn có chắc muốn xóa toàn bộ giỏ hàng?')) {
            cart = [];
            saveCart();
            updateCartCount();
            updateCartUI();
            showToast('Đã xóa toàn bộ giỏ hàng');
        }
    }

    // ==================== THANH TOÁN ====================
    function checkout() {
        if (!requireLogin('mua hàng')) return;

        if (cart.length === 0) {
            showToast('Giỏ hàng trống!', 'error');
            return;
        }

        openCheckoutModal();
    }

    function handleCheckout(e) {
        e.preventDefault();
        const name = document.getElementById('buyerName')?.value.trim();
        const phone = document.getElementById('buyerPhone')?.value.trim();
        const address = document.getElementById('buyerAddress')?.value.trim();

        if (!name || !phone || !address) {
            showToast('Vui lòng điền đủ thông tin', 'error');
            return;
        }

        const orderId = 'DH_' + Date.now();
        const order = {
            id: orderId,
            date: new Date().toISOString(),
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0),
            shippingAddress: address,
            customerName: name,
            customerPhone: phone,
            status: 'pending'
        };

        const orders = getOrderHistory();
        orders.push(order);
        saveOrderHistory(orders);

        showToast(`Đặt hàng thành công! Mã đơn: ${orderId}`);

        cart = [];
        saveCart();
        updateCartCount();
        updateCartUI();

        closeModal(document.getElementById('checkoutModal'));
        closeModal(document.getElementById('cartModal'));

        e.target.reset();
    }

    // ==================== DANH MỤC SẢN PHẨM ====================
    function initializeCategoryClicks() {
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function () {
                const category = this.dataset.category;

                document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
                this.classList.add('active');

                applyCategoryFilter(category);
            });
        });

        document.querySelectorAll('.dropdown-content a[data-category]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const category = this.dataset.category;
                applyCategoryFilter(category);
            });
        });
    }

    function applyCategoryFilter(category) {
        console.log('Đang lọc danh mục:', category);

        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            categoryFilter.value = category;
        }

        applyFilters();

        const productsSection = document.querySelector('.all-products-section');
        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    function renderCategories() {
        const categoriesGrid = document.querySelector('.categories-grid');
        if (!categoriesGrid) return;

        const categoryCounts = {
            'Bàn': products.filter(p => p.category === 'Bàn').length,
            'Ghế': products.filter(p => p.category === 'Ghế').length,
            'Tủ': products.filter(p => p.category === 'Tủ').length,
            'Giường': products.filter(p => p.category === 'Giường').length,
            'Kệ': products.filter(p => p.category === 'Kệ').length
        };

        Object.keys(categoryCounts).forEach(category => {
            const countElement = document.querySelector(`.category-card[data-category="${category}"] p`);
            if (countElement) {
                countElement.textContent = `${categoryCounts[category]} sản phẩm`;
            }
        });
    }

    function renderFeaturedProducts() {
        const featuredContainer = document.getElementById('featuredProducts');
        if (!featuredContainer) return;

        featuredContainer.innerHTML = featuredProducts.map(product => `
            <div class="featured-product-card">
                <div class="featured-badge">🔥 Bán chạy</div>
                <img src="${product.img}" alt="${product.name}">
                <div class="featured-product-info">
                    <h3>${product.name}</h3>
                    <div class="featured-product-price">${vndFormatter.format(product.price)}</div>
                    <div class="featured-product-sales">
                        <span class="sales-count">${product.salesCount} đã bán</span>
                        <span>• ⭐ 4.9/5</span>
                    </div>
                    <div class="featured-product-actions">
                        <button class="btn add-cart-featured" data-id="${product.id}">Thêm giỏ</button>
                        <button class="btn details-btn-featured" data-id="${product.id}">Chi tiết</button>
                    </div>
                </div>
            </div>
        `).join('');

        document.querySelectorAll('.add-cart-featured').forEach(btn => {
            btn.addEventListener('click', function () {
                const productId = parseInt(this.dataset.id);
                const product = products.find(p => p.id === productId);
                if (product) {
                    addToCart(product);
                }
            });
        });

        document.querySelectorAll('.details-btn-featured').forEach(btn => {
            btn.addEventListener('click', function () {
                const productId = parseInt(this.dataset.id);
                const product = products.find(p => p.id === productId);
                if (product) {
                    openProductModal(product);
                }
            });
        });
    }

    // ==================== BỘ LỌC & PHÂN TRANG ====================
    function initializeEventListeners() {
        if (searchInput) searchInput.addEventListener('input', applyFilters);
        if (categoryFilter) categoryFilter.addEventListener('change', applyFilters);
        if (materialFilter) materialFilter.addEventListener('change', applyFilters);
        if (colorFilter) colorFilter.addEventListener('change', applyFilters);

        const prevPageBtn = document.getElementById('prevPage');
        const nextPageBtn = document.getElementById('nextPage');

        if (prevPageBtn) {
            prevPageBtn.addEventListener('click', goToPrevPage);
        }

        if (nextPageBtn) {
            nextPageBtn.addEventListener('click', goToNextPage);
        }

        initializeSlider();
    }

    function applyFilters() {
        const text = searchInput?.value.trim().toLowerCase() || '';
        const category = categoryFilter?.value || 'all';
        const material = materialFilter?.value || 'all';
        const color = colorFilter?.value || 'all';

        const filtered = products.filter(p => {
            const matchesText = text === '' ||
                p.name.toLowerCase().includes(text) ||
                p.category.toLowerCase().includes(text) ||
                p.material.toLowerCase().includes(text);

            const matchesCategory = category === 'all' || p.category === category;
            const matchesMaterial = material === 'all' || p.material.includes(material);
            const matchesColor = color === 'all' || p.color === color;

            return matchesText && matchesCategory && matchesMaterial && matchesColor;
        });

        currentPage = 1;
        renderProducts(filtered, 1);
    }

    function renderProducts(productsToRender, page = 1) {
        if (!productList) {
            console.error('Không tìm thấy element productList');
            return;
        }

        filteredProducts = productsToRender || [];

        productList.innerHTML = '';

        if (!filteredProducts || !filteredProducts.length) {
            productList.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <p style="font-size: 1.2rem; color: #666; margin-bottom: 0.5rem;">😔 Không tìm thấy sản phẩm phù hợp</p>
                    <p style="color: #999;">Hãy thử điều chỉnh bộ lọc hoặc từ khóa tìm kiếm</p>
                </div>
            `;
            hidePagination();
            return;
        }

        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        currentPage = Math.max(1, Math.min(page, totalPages));

        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = Math.min(startIndex + productsPerPage, filteredProducts.length);
        const productsToShow = filteredProducts.slice(startIndex, endIndex);

        productsToShow.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.img}" alt="${product.name}" style="width:100%; height:200px; object-fit:cover; border-radius: 8px 8px 0 0;">
                <div class="info" style="padding: 1.5rem;">
                    <div>
                        <h3 style="margin-bottom: 0.5rem; font-size: 1.1rem;">${product.name}</h3>
                        <p style="margin: 0.3rem 0; color: #666; font-size: 0.9rem;"><strong>Loại:</strong> ${product.category}</p>
                        <p style="margin: 0.3rem 0; color: #666; font-size: 0.9rem;"><strong>Chất liệu:</strong> ${product.material}</p>
                        <p style="margin: 0.3rem 0; color: #666; font-size: 0.9rem;"><strong>Màu sắc:</strong> ${product.color}</p>
                    </div>
                    <div style="margin-top: 1rem;">
                        <p class="price" style="font-size: 1.2rem; font-weight: 700; color: #2A5B3D; margin-bottom: 1rem;">${vndFormatter.format(product.price)}</p>
                        <div class="card-actions" style="display: flex; gap: 0.5rem;">
                            <button class="add-cart" style="flex:1; padding: 0.7rem; background: #2A5B3D; color: white; border: none; border-radius: 6px; cursor: pointer;">Thêm vào giỏ</button>
                            <button class="details-btn" style="flex:1; padding: 0.7rem; background: transparent; color: #2A5B3D; border: 1px solid #2A5B3D; border-radius: 6px; cursor: pointer;">Xem chi tiết</button>
                        </div>
                    </div>
                </div>
            `;

            const addCartBtn = card.querySelector('.add-cart');
            const detailsBtn = card.querySelector('.details-btn');

            addCartBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addToCart(product);
            });
            detailsBtn.addEventListener('click', () => openProductModal(product));

            productList.appendChild(card);
        });

        renderPagination(totalPages);
        updatePaginationInfo(startIndex, endIndex, filteredProducts.length);
    }

    function renderPagination(totalPages) {
        const paginationSection = document.getElementById('paginationSection');
        const pageNumbers = document.getElementById('pageNumbers');
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        if (!paginationSection || !pageNumbers) return;

        if (totalPages > 1) {
            paginationSection.style.display = 'block';
        } else {
            paginationSection.style.display = 'none';
            return;
        }

        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;

        pageNumbers.innerHTML = '';

        addPageNumber(1, totalPages);

        if (currentPage > 3) {
            addEllipsis();
        }

        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            if (i !== 1 && i !== totalPages) {
                addPageNumber(i, totalPages);
            }
        }

        if (currentPage < totalPages - 2) {
            addEllipsis();
        }

        if (totalPages > 1) {
            addPageNumber(totalPages, totalPages);
        }
    }

    function addPageNumber(page, totalPages) {
        const pageNumbers = document.getElementById('pageNumbers');
        if (!pageNumbers) return;

        const pageElement = document.createElement('button');
        pageElement.className = `page-number ${page === currentPage ? 'active' : ''}`;
        pageElement.textContent = page;
        pageElement.addEventListener('click', () => goToPage(page));

        pageNumbers.appendChild(pageElement);
    }

    function addEllipsis() {
        const pageNumbers = document.getElementById('pageNumbers');
        if (!pageNumbers) return;

        const ellipsis = document.createElement('span');
        ellipsis.className = 'page-number ellipsis';
        ellipsis.textContent = '...';
        ellipsis.style.pointerEvents = 'none';

        pageNumbers.appendChild(ellipsis);
    }

    function hidePagination() {
        const paginationSection = document.getElementById('paginationSection');
        if (paginationSection) {
            paginationSection.style.display = 'none';
        }
    }

    function updatePaginationInfo(startIndex, endIndex, totalProducts) {
        const currentRange = document.getElementById('currentRange');
        const totalProductsSpan = document.getElementById('totalProducts');

        if (currentRange) {
            currentRange.textContent = `${startIndex + 1}-${endIndex}`;
        }
        if (totalProductsSpan) {
            totalProductsSpan.textContent = totalProducts;
        }
    }

    function goToPage(page) {
        currentPage = page;
        renderProducts(filteredProducts, page);

        const productList = document.getElementById('productList');
        if (productList) {
            productList.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function goToPrevPage() {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    }

    function goToNextPage() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    }

    // ==================== SLIDER ====================
    function initializeSlider() {
        const slider = document.getElementById('slider');
        if (!slider) return;

        const slidesWrap = slider.querySelector('.slides');
        const slides = Array.from(slidesWrap.children);
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsWrap = document.getElementById('dots');
        let currentSlide = 0;
        let slideInterval = null;
        const SLIDE_DELAY = 5000;

        function createDots() {
            if (!dotsWrap) return;
            dotsWrap.innerHTML = '';
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.addEventListener('click', () => goToSlide(index));
                dotsWrap.appendChild(dot);
            });
            updateDots();
        }

        function updateDots() {
            if (!dotsWrap) return;
            Array.from(dotsWrap.children).forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function goToSlide(index) {
            currentSlide = (index + slides.length) % slides.length;
            slidesWrap.style.transform = `translateX(-${currentSlide * 100}%)`;
            updateDots();
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        function prevSlide() {
            goToSlide(currentSlide - 1);
        }

        function startSlider() {
            slideInterval = setInterval(nextSlide, SLIDE_DELAY);
        }

        function resetSliderTimer() {
            clearInterval(slideInterval);
            startSlider();
        }

        if (prevBtn) prevBtn.addEventListener('click', () => {
            prevSlide();
            resetSliderTimer();
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            nextSlide();
            resetSliderTimer();
        });

        createDots();
        startSlider();

        slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
        slider.addEventListener('mouseleave', () => resetSliderTimer());
    }

    // ==================== TOAST NOTIFICATION ====================
    function showToast(message, type = 'success') {
        const oldContainers = document.querySelectorAll('#toastContainer');
        oldContainers.forEach(container => container.remove());

        const toastContainer = document.createElement('div');
        toastContainer.id = 'toastContainer';

        Object.assign(toastContainer.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: '99999',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
        });

        document.body.appendChild(toastContainer);

        const toast = document.createElement('div');

        let icon = '✅';
        if (type === 'error') icon = '❌';
        if (type === 'warning') icon = '⚠️';

        toast.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.2rem;">${icon}</span>
                <span>${message}</span>
            </div>
            <div class="toast-progress"></div>
        `;

        Object.assign(toast.style, {
            background: type === 'success' ? '#2A5B3D' : type === 'error' ? '#DC2626' : '#D4AF37',
            color: 'white',
            padding: '1rem 1.5rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            minWidth: '300px',
            maxWidth: '400px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.4s ease',
            opacity: '0',
            transform: 'translateX(400px)',
            borderLeft: `4px solid ${type === 'success' ? '#1E4A2F' : type === 'error' ? '#B91C1C' : '#B8860B'}`,
            cursor: 'pointer',
            zIndex: '100000'
        });

        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(0)';
        }, 100);

        const progress = toast.querySelector('.toast-progress');
        if (progress) {
            Object.assign(progress.style, {
                position: 'absolute',
                bottom: '0',
                left: '0',
                height: '3px',
                background: 'rgba(255,255,255,0.8)',
                width: '100%',
                transform: 'scaleX(1)',
                transformOrigin: 'left',
                transition: 'transform 3s linear'
            });

            setTimeout(() => {
                progress.style.transform = 'scaleX(0)';
            }, 100);
        }

        const autoRemove = setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (toast.parentNode && toastContainer.contains(toast)) {
                    toast.remove();
                }
                if (toastContainer.children.length === 0) {
                    toastContainer.remove();
                }
            }, 400);
        }, 3000);

        toast.addEventListener('click', () => {
            clearTimeout(autoRemove);
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (toast.parentNode && toastContainer.contains(toast)) {
                    toast.remove();
                }
                if (toastContainer.children.length === 0) {
                    toastContainer.remove();
                }
            }, 400);
        });
    }

    // Sản phẩm bán chạy
    const featuredProducts = products
        .map(product => ({
            ...product,
            salesCount: Math.floor(Math.random() * 100) + 20
        }))
        .sort((a, b) => b.salesCount - a.salesCount)
        .slice(0, 6);

    // ==================== GLOBAL FUNCTIONS ====================
    window.app = {
        cancelOrder: function (orderId) {
            if (!confirm('Bạn có chắc muốn huỷ đơn hàng này?')) return;

            if (!currentUser) {
                showToast('Vui lòng đăng nhập để thực hiện thao tác này', 'error');
                return;
            }

            const orders = getOrderHistory();
            const orderIndex = orders.findIndex(order => order.id === orderId);

            if (orderIndex !== -1) {
                if (orders[orderIndex].status === 'pending') {
                    orders[orderIndex].status = 'cancelled';
                    saveOrderHistory(orders);
                    updateOrderStats();

                    const activeFilter = document.querySelector('.filter-btn.active');
                    const currentFilter = activeFilter ? activeFilter.dataset.status : 'all';
                    loadOrders(currentFilter);

                    showToast('Đã huỷ đơn hàng thành công', 'success');
                } else {
                    showToast('Chỉ có thể huỷ đơn hàng đang chờ xác nhận', 'error');
                }
            } else {
                showToast('Không tìm thấy đơn hàng', 'error');
            }
        },

        reorder: function (orderId) {
            if (!currentUser) {
                showToast('Vui lòng đăng nhập để thực hiện thao tác này', 'error');
                return;
            }

            const orders = getOrderHistory();
            const order = orders.find(o => o.id === orderId);

            if (order) {
                order.items.forEach(item => {
                    addToCart(item, item.quantity);
                });

                showToast('Đã thêm sản phẩm vào giỏ hàng', 'success');

                closeAccountModal();
                openCartModal();
            }
        },

        contactSupport: function (orderId) {
            showToast(`Đang chuyển đến hỗ trợ cho đơn hàng: ${orderId}`, 'info');
        },

        viewOrderDetails: function (orderId) {
            const orders = getOrderHistory();
            const order = orders.find(o => o.id === orderId);

            if (order) {
                openOrderDetailsModal(order);
            }
        },

        scrollToAllProducts: function () {
            document.querySelector('.all-products-section').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // ==================== PROFESSIONAL ENHANCEMENTS ====================

    // Premium Loading Animation
    function showPageLoader() {
        const loader = document.createElement('div');
        loader.className = 'page-loader';
        loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">🦌</div>
            <div class="loader-spinner"></div>
            <p style="margin-top: 1rem; color: var(--text-light);">Đang tải...</p>
        </div>
    `;
        document.body.appendChild(loader);

        // Simulate loading
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                if (loader.parentNode) {
                    loader.remove();
                }
            }, 500);
        }, 1500);
    }

    // Professional Image Lazy Loading
    function initializeLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');

        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // Advanced Product Filtering
    function initializeAdvancedFilters() {
        const priceRange = document.getElementById('priceRange');
        const priceValue = document.getElementById('priceValue');

        if (priceRange && priceValue) {
            priceRange.addEventListener('input', function () {
                const value = this.value;
                priceValue.textContent = formatPrice(value * 1000000); // Convert to millions
                filterProducts();
            });
        }
    }

    // Professional Search with Debounce
    function initializeAdvancedSearch() {
        const searchInput = document.getElementById('searchInput');
        let searchTimeout;

        if (searchInput) {
            searchInput.addEventListener('input', function () {
                clearTimeout(searchTimeout);
                searchTimeout = setTimeout(() => {
                    filterProducts();
                }, 300);
            });
        }
    }

    // Enhanced Product Comparison
    function initializeProductComparison() {
        const compareCheckboxes = document.querySelectorAll('.compare-checkbox');
        const compareBtn = document.getElementById('compareBtn');
        let comparedProducts = [];

        compareCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const productId = this.dataset.productId;

                if (this.checked) {
                    if (comparedProducts.length < 3) {
                        comparedProducts.push(productId);
                    } else {
                        this.checked = false;
                        showToast('Chỉ có thể so sánh tối đa 3 sản phẩm', 'error');
                        return;
                    }
                } else {
                    comparedProducts = comparedProducts.filter(id => id !== productId);
                }

                updateCompareButton();
            });
        });

        function updateCompareButton() {
            if (compareBtn) {
                if (comparedProducts.length > 1) {
                    compareBtn.style.display = 'block';
                    compareBtn.textContent = `So sánh (${comparedProducts.length})`;
                } else {
                    compareBtn.style.display = 'none';
                }
            }
        }
    }

    // Professional Wishlist System
    function initializeWishlist() {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

        // Update wishlist UI
        function updateWishlistUI() {
            const wishlistCount = document.getElementById('wishlistCount');
            if (wishlistCount) {
                wishlistCount.textContent = wishlist.length;
            }
        }

        // Add to wishlist
        function addToWishlist(product) {
            if (!wishlist.find(item => item.id === product.id)) {
                wishlist.push(product);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                updateWishlistUI();
                showToast('Đã thêm vào danh sách yêu thích');
            } else {
                showToast('Sản phẩm đã có trong danh sách yêu thích', 'error');
            }
        }

        // Initialize wishlist buttons
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const productId = this.dataset.productId;
                const product = products.find(p => p.id === parseInt(productId));
                if (product) {
                    addToWishlist(product);
                }
            });
        });

        updateWishlistUI();
    }

    // Advanced Analytics
    function trackUserBehavior() {
        // Track page views
        console.log('Page viewed:', window.location.pathname);

        // Track product views
        document.querySelectorAll('.product-card').forEach(card => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const productId = card.dataset.productId;
                        console.log('Product viewed:', productId);
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(card);
        });
    }

    // Professional Error Handling
    function initializeErrorHandling() {
        window.addEventListener('error', function (e) {
            console.error('Global error:', e.error);
            showToast('Đã xảy ra lỗi. Vui lòng thử lại.', 'error');
        });

        window.addEventListener('unhandledrejection', function (e) {
            console.error('Unhandled promise rejection:', e.reason);
            showToast('Đã xảy ra lỗi. Vui lòng thử lại.', 'error');
        });
    }

    // Enhanced Performance Monitoring
    function monitorPerformance() {
        // Measure page load time
        window.addEventListener('load', () => {
            const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
            console.log('Page load time:', loadTime + 'ms');

            if (loadTime > 3000) {
                console.warn('Page load time is slow:', loadTime + 'ms');
            }
        });
    }

    // Professional Currency Formatter
    function formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0
        }).format(price);
    }

    // Advanced Image Zoom
    function initializeImageZoom() {
        const productImages = document.querySelectorAll('.product-image-zoom');

        productImages.forEach(img => {
            img.addEventListener('click', function () {
                openImageZoom(this.src, this.alt);
            });
        });

        function openImageZoom(src, alt) {
            const zoomModal = document.createElement('div');
            zoomModal.className = 'modal show';
            zoomModal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3000;
            cursor: zoom-out;
        `;

            zoomModal.innerHTML = `
            <img src="${src}" alt="${alt}" style="max-width: 90%; max-height: 90%; object-fit: contain;">
            <button class="close-x" style="position: absolute; top: 20px; right: 20px;">✕</button>
        `;

            document.body.appendChild(zoomModal);

            zoomModal.addEventListener('click', function (e) {
                if (e.target === zoomModal || e.target.classList.contains('close-x')) {
                    zoomModal.remove();
                }
            });
        }
    }

    function initializeProfessionalFeatures() {
        showPageLoader();
        initializeLazyLoading();
        initializeAdvancedFilters();
        initializeAdvancedSearch();
        initializeProductComparison();
        initializeWishlist();
        trackUserBehavior();
        initializeErrorHandling();
        monitorPerformance();
        initializeImageZoom();

        // Add floating animation to elements
        document.querySelectorAll('.floating-element').forEach(el => {
            el.classList.add('floating');
        });
    }

    // Floating Contact Icons
    function initializeFloatingContact() {
        const contactTrigger = document.getElementById('contactTrigger');
        const contactIcons = document.getElementById('contactIcons');

        if (contactTrigger && contactIcons) {
            contactTrigger.addEventListener('click', function () {
                contactIcons.classList.toggle('active');

                // Change icon when open/close
                const icon = this.querySelector('span');
                if (contactIcons.classList.contains('active')) {
                    icon.textContent = '✕';
                } else {
                    icon.textContent = '💬';
                }
            });

            // Close when clicking outside
            document.addEventListener('click', function (e) {
                if (!e.target.closest('.floating-contact') && contactIcons.classList.contains('active')) {
                    contactIcons.classList.remove('active');
                    contactTrigger.querySelector('span').textContent = '💬';
                }
            });
        }
    }

    // ==================== CHAT WIDGET ====================
    function initializeChatWidget() {
        console.log('🔄 Đang khởi tạo chat widget...');

        const chatWidget = document.getElementById('chatWidget');
        const closeChat = document.getElementById('closeChat');
        const minimizeChat = document.getElementById('minimizeChat');
        const sendMessage = document.getElementById('sendMessage');
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');
        const chatTyping = document.getElementById('chatTyping');
        const chatMinimized = document.getElementById('chatMinimized');

        // Close chat completely
        if (closeChat) {
            closeChat.addEventListener('click', closeChatWidget);
        }

        // Minimize chat
        if (minimizeChat) {
            minimizeChat.addEventListener('click', minimizeChatWidget);
        }

        // Restore from minimized
        if (chatMinimized) {
            chatMinimized.addEventListener('click', restoreChatWidget);
        }

        // Send message
        if (sendMessage) {
            sendMessage.addEventListener('click', sendChatMessage);
        }

        // Send on Enter key (but allow Shift+Enter for new line)
        if (chatInput) {
            chatInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    sendChatMessage();
                }
            });

            // Auto-resize textarea
            chatInput.addEventListener('input', function () {
                this.style.height = 'auto';
                this.style.height = Math.min(this.scrollHeight, 100) + 'px';
            });
        }

        // Make chat draggable
        makeChatDraggable();

        console.log('✅ Chat widget đã khởi tạo');
    }

    function makeChatDraggable() {
        const chatWidget = document.getElementById('chatWidget');
        const chatHeader = document.getElementById('chatHeader');

        if (!chatWidget || !chatHeader) return;

        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        chatHeader.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // Get the mouse cursor position at startup
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // Call a function whenever the cursor moves
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // Calculate the new cursor position
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // Set the element's new position
            const newTop = (chatWidget.offsetTop - pos2);
            const newLeft = (chatWidget.offsetLeft - pos1);

            // Boundary checking
            const maxTop = window.innerHeight - chatWidget.offsetHeight;
            const maxLeft = window.innerWidth - chatWidget.offsetWidth;

            chatWidget.style.top = Math.max(0, Math.min(newTop, maxTop)) + "px";
            chatWidget.style.left = Math.max(0, Math.min(newLeft, maxLeft)) + "px";
            chatWidget.style.right = "auto";
            chatWidget.style.bottom = "auto";
        }

        function closeDragElement() {
            // Stop moving when mouse button is released
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    function openChatWidget(orderId = null) {
        console.log('💬 Mở chat widget, đơn hàng:', orderId);

        const chatWidget = document.getElementById('chatWidget');
        const chatMessages = document.getElementById('chatMessages');
        const chatMinimized = document.getElementById('chatMinimized');

        if (chatWidget && chatMessages) {
            // Ensure widget is visible and not minimized
            chatWidget.classList.add('active');
            if (chatMinimized) {
                chatMinimized.style.display = 'none';
            }

            // Clear previous messages except the first welcome message
            const welcomeMessage = chatMessages.querySelector('.message.received');
            chatMessages.innerHTML = '';
            if (welcomeMessage) {
                chatMessages.appendChild(welcomeMessage);
            }

            // Add order info if provided
            if (orderId) {
                const orderMessage = document.createElement('div');
                orderMessage.className = 'message received';
                orderMessage.innerHTML = `
                <div>Tôi đang hỗ trợ bạn về đơn hàng <strong>${orderId}</strong>. Vui lòng mô tả vấn đề bạn gặp phải.</div>
                <div class="message-time">Vừa xong</div>
            `;
                chatMessages.appendChild(orderMessage);
            }

            scrollChatToBottom();

            // Focus on input
            const chatInput = document.getElementById('chatInput');
            if (chatInput) {
                setTimeout(() => chatInput.focus(), 300);
            }
        }
    }

    function minimizeChatWidget() {
        console.log('💬 Thu nhỏ chat widget');

        const chatWidget = document.getElementById('chatWidget');
        const chatMinimized = document.getElementById('chatMinimized');

        if (chatWidget) {
            chatWidget.classList.remove('active');
        }

        if (chatMinimized) {
            chatMinimized.style.display = 'flex';
        }
    }

    function restoreChatWidget() {
        console.log('💬 Khôi phục chat widget');

        const chatWidget = document.getElementById('chatWidget');
        const chatMinimized = document.getElementById('chatMinimized');

        if (chatWidget) {
            chatWidget.classList.add('active');
        }

        if (chatMinimized) {
            chatMinimized.style.display = 'none';
        }

        // Focus on input
        const chatInput = document.getElementById('chatInput');
        if (chatInput) {
            setTimeout(() => chatInput.focus(), 300);
        }
    }

    function closeChatWidget() {
        console.log('💬 Đóng chat widget hoàn toàn');

        const chatWidget = document.getElementById('chatWidget');
        const chatInput = document.getElementById('chatInput');
        const chatMinimized = document.getElementById('chatMinimized');

        if (chatWidget) {
            chatWidget.classList.remove('active');
        }

        if (chatMinimized) {
            chatMinimized.style.display = 'none';
        }

        if (chatInput) {
            chatInput.value = '';
            chatInput.style.height = 'auto';
        }

        showToast('Đã đóng chat hỗ trợ');
    }

    function sendChatMessage() {
        const chatInput = document.getElementById('chatInput');
        const chatMessages = document.getElementById('chatMessages');
        const message = chatInput?.value.trim();

        if (!message || !chatMessages) return;

        // Add user message
        const messageElement = document.createElement('div');
        messageElement.className = 'message sent';
        messageElement.innerHTML = `
        <div>${message}</div>
        <div class="message-time">${getCurrentTime()}</div>
    `;
        chatMessages.appendChild(messageElement);

        // Clear input
        chatInput.value = '';
        chatInput.style.height = 'auto';

        scrollChatToBottom();

        // Show typing indicator
        showTypingIndicator();

        // Simulate reply after delay
        setTimeout(() => {
            hideTypingIndicator();
            addBotReply(message);
        }, 1500 + Math.random() * 2000);
    }

    function addBotReply(userMessage) {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) return;

        const replies = [
            "Cảm ơn bạn đã phản hồi. Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.",
            "Tôi đã ghi nhận thông tin của bạn. Đội ngũ hỗ trợ sẽ xử lý yêu cầu của bạn.",
            "Cảm ơn bạn đã thông báo. Chúng tôi sẽ cập nhật tình trạng đơn hàng cho bạn sớm.",
            "Tôi hiểu vấn đề của bạn. Hãy để chúng tôi hỗ trợ bạn giải quyết điều này.",
            "Thông tin của bạn đã được ghi nhận. Chúng tôi sẽ phản hồi trong vòng 24 giờ.",
            "Cảm ơn bạn đã liên hệ. Đội ngũ hỗ trợ của chúng tôi sẽ liên lạc với bạn sớm."
        ];

        const reply = replies[Math.floor(Math.random() * replies.length)];

        const messageElement = document.createElement('div');
        messageElement.className = 'message received';
        messageElement.innerHTML = `
        <div>${reply}</div>
        <div class="message-time">${getCurrentTime()}</div>
    `;
        chatMessages.appendChild(messageElement);

        scrollChatToBottom();

        // Show notification badge if minimized
        const chatMinimized = document.getElementById('chatMinimized');
        const chatNotification = document.getElementById('chatNotification');
        const chatWidget = document.getElementById('chatWidget');

        if (chatMinimized && chatNotification && chatWidget && !chatWidget.classList.contains('active')) {
            chatNotification.style.display = 'flex';
        }
    }

    function showTypingIndicator() {
        const chatTyping = document.getElementById('chatTyping');
        if (chatTyping) {
            chatTyping.classList.add('active');
            scrollChatToBottom();
        }
    }

    function hideTypingIndicator() {
        const chatTyping = document.getElementById('chatTyping');
        if (chatTyping) {
            chatTyping.classList.remove('active');
        }
    }

    function scrollChatToBottom() {
        const chatMessages = document.getElementById('chatMessages');
        if (chatMessages) {
            setTimeout(() => {
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 100);
        }
    }

    function getCurrentTime() {
        const now = new Date();
        return now.getHours().toString().padStart(2, '0') + ':' +
            now.getMinutes().toString().padStart(2, '0');
    }

    // Update the contactSupport function in window.app
    window.app.contactSupport = function (orderId) {
        console.log('💬 Liên hệ hỗ trợ cho đơn hàng:', orderId);
        openChatWidget(orderId);
        showToast(`Đang mở chat hỗ trợ cho đơn hàng ${orderId}`);
    };

    // Khởi động ứng dụng
    initialize();
});