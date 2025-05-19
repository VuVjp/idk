// ----------------------
// DS SẢN PHẨM MẪU
// ----------------------
const products = {
  "1": {
    name: "Call of Duty®: Modern Warfare® II",
    priceOld: 890000,
    priceNew: 690000,
    image: "assets/images/gameDetails-Id-1.jpg",
    description: `Call of Duty®: Modern Warfare® II là một trò chơi bắn súng góc nhìn thứ nhất nổi bật với lối chơi kịch tính, đồ họa chân thực và cơ chế chiến đấu tinh tế. Người chơi sẽ tham gia vào các nhiệm vụ đầy thử thách trên khắp thế giới, từ chiến trường đô thị cho đến các khu vực chiến sự khắc nghiệt. Với chế độ chiến dịch hấp dẫn, chế độ nhiều người chơi phong phú và hệ thống vũ khí đa dạng, trò chơi mang đến trải nghiệm hành động đỉnh cao với nhịp độ nhanh và chiến thuật sáng tạo.`,
    genre: ["Hành động", "Chiến thuật", "Mô phỏng"],
    tags: ["rpg", "adv"],
    id: "1",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "2": {
    name: "Assassin Creed",
    priceOld: 1000000,
    priceNew: 790000,
    image: "assets/images/gameDetails-Id-2.jpg",
    description: `Assassin's Creed là một loạt trò chơi hành động - phiêu lưu góc nhìn thứ ba, kết hợp yếu tố lén lút (stealth), leo trèo parkour, chiến đấu, và thế giới mở. Người chơi điều khiển các nhân vật sát thủ trong những thời kỳ lịch sử khác nhau, khám phá các thành phố cổ kính, thực hiện nhiệm vụ ám sát và khám phá bí ẩn xoay quanh cuộc chiến giữa Assassins và Templars.`,
    genre: ["Phiêu lưu", "Hành động", "Nhập vai"],
    tags: ["adv", "act", "rpg"],
    id: "2",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "3": {
    name: "Clair Obscur: Expedition 33",
    priceOld: 640000,
    priceNew: 520000,
    image: "assets/images/gameDetails-Id-3.jpg",
    description: `Trong thế giới của Clair Obscur, một nghi lễ hàng năm gọi là "gommage" được thực hiện bởi một thực thể thần bí tên là Paintress. Mỗi năm, cô ta chọn một độ tuổi cụ thể, và tất cả những người ở độ tuổi đó sẽ bị xóa sổ khỏi sự tồn tại. Người chơi sẽ dẫn dắt nhóm Expedition 33 trong hành trình phá vỡ chu kỳ chết chóc này bằng cách đối đầu với Paintress.`,
    genre: ["Nhập vai", "Phiêu lưu"],
    tags: ["rpg", "adv"],
    id: "3",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "4": {
    name: "Split Fiction",
    priceOld: "",
    priceNew: 440000,
    image: "assets/images/gameDetails-Id-4.jpg",
    description: `Split Fiction là một trò chơi hành động - phiêu lưu hợp tác hai người, được phát triển bởi Hazelight Studios và phát hành bởi Electronic Arts dưới nhãn EA Originals. Trò chơi ra mắt vào ngày 6 tháng 3 năm 2025 trên các nền tảng PlayStation 5, Xbox Series X/S và PC, và dự kiến phát hành trên Nintendo Switch 2 vào ngày 5 tháng 6 năm 2025. `,
    genre: ["Hành động", "Phiêu lưu"],
    tags: ["act", "adv"],
    id: "4",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "5": {
    name: "Blue Prince",
    priceOld: 460000,
    priceNew: 310000,
    image: "assets/images/gameDetails-Id-5.jpg",
    description: `Người chơi nhập vai Simon P. Jones, người thừa kế của dinh thự Mt. Holly từ người chú cố Herbert S. Sinclair. Tuy nhiên, để chính thức nhận được tài sản, Simon phải tìm ra phòng thứ 46 bí ẩn trong dinh thự, mặc dù bản thiết kế chỉ hiển thị 45 phòng. Nếu không đạt được mục tiêu trong một ngày (với 50 bước di chuyển), dinh thự sẽ tái cấu trúc ngẫu nhiên vào ngày hôm sau, buộc người chơi bắt đầu lại từ đầu.`,
    genre: ["Chiến thuật", "Phiêu lưu"],
    tags: ["str", "adv"],
    id: "5",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "6": {
    name: "Kingdom Come II",
    priceOld: "",
    priceNew: 780000,
    image: "assets/images/gameDetails-Id-6.jpg",
    description: `Kingdom Come: Deliverance II là phần tiếp theo của tựa game nhập vai hành động nổi tiếng năm 2018, được phát triển bởi Warhorse Studios và phát hành bởi Deep Silver. Trò chơi chính thức ra mắt vào ngày 4 tháng 2 năm 2025 trên các nền tảng PlayStation 5, Xbox Series X|S và PC . Người chơi tiếp tục nhập vai Henry, con trai của một thợ rèn, trong bối cảnh Bohemia thế kỷ 15 đang chìm trong hỗn loạn vì chiến tranh và xung đột quyền lực. Câu chuyện tập trung vào các chủ đề trả thù, phản bội và khám phá, với các lựa chọn đạo đức ảnh hưởng trực tiếp đến diễn biến của cốt truyện. Thế giới trong game được mở rộng gấp đôi so với phần đầu, bao gồm hai khu vực chính: Trosky và Kuttenberg, mang đến trải nghiệm khám phá sâu sắc và đa dạng hơn`,
    genre: ["Nhập vai", "Mô phỏng", "Hành động"],
    tags: ["rpg", "sim", "act"],
    id: "6",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "7": {
    name: "Baldur's Gate 3",
    priceOld: 990000,
    priceNew: 890000,
    image: "assets/images/gameDetails-Id-7.jpg",
    description: `Baldur's Gate 3 là một trò chơi nhập vai (RPG) theo lượt, được phát triển và phát hành bởi Larian Studios. Đây là phần thứ ba trong loạt game Baldur's Gate, dựa trên hệ thống luật của Dungeons & Dragons (D&D) phiên bản 5. Trò chơi chính thức ra mắt vào tháng 8 năm 2023 trên PC, và sau đó được phát hành trên PlayStation 5, macOS và Xbox Series X/S. Baldur's Gate 3 lấy bối cảnh tại vùng đất Forgotten Realms, cụ thể là khu vực Sword Coast vào năm 1492 DR, hơn 120 năm sau các sự kiện của Baldur's Gate II: Shadows of Amn. Người chơi thức dậy trên một con tàu của loài Mind Flayer, bị nhiễm một loại ký sinh trùng có thể biến họ thành chính loài sinh vật đó. Hành trình của người chơi là tìm cách loại bỏ ký sinh trùng này, đồng thời khám phá những âm mưu đen tối đằng sau nó.`,
    genre: ["Nhập vai", "Chiến thuật"],
    tags: ["rpg", "str"],
    id: "7",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "8": {
    name: "Farming Simulator",
    priceOld: 550000,
    priceNew: 430000,
    image: "assets/images/gameDetails-Id-8.jpg",
    description: `Farming Simulator là một loạt trò chơi mô phỏng nông nghiệp do GIANTS Software phát triển từ năm 2008. Người chơi vào vai một nông dân hiện đại, quản lý trang trại, trồng trọt, chăn nuôi và khai thác lâm sản trong các môi trường đa dạng như Mỹ, châu Âu và châu Á. Tính đến năm 2025, loạt game đã bán được hơn 25 triệu bản và có hơn 90 triệu lượt tải trên thiết bị di động . `,
    genre: ["Chiến thuật", "Mô phỏng"],
    tags: ["horror", "sur", "act"],
    id: "8",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "9": {
    name: "R.E.P.O",
    priceOld: "",
    priceNew: 310000,
    image: "assets/images/gameDetails-Id-9.jpg",
    description: `Trong R.E.P.O., người chơi vào vai một robot dưới sự điều khiển của một trí tuệ nhân tạo bí ẩn, với nhiệm vụ thu thập và vận chuyển các vật phẩm có giá trị từ những cơ sở bỏ hoang đầy rẫy nguy hiểm. Trò chơi hỗ trợ tối đa 6 người chơi hợp tác trực tuyến, yêu cầu sự phối hợp chặt chẽ và chiến lược để hoàn thành nhiệm vụ.`,
    genre: ["Kinh dị", "Sinh tồn", "Hành động"],
    tags: ["horror", "sur", "act"],
    id: "9",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "10": {
    name: "HELLDIVERS™ 2",
    priceOld: 850000,
    priceNew: 690000,
    image: "assets/images/gameDetails-Id-10.jpg",
    description: "Helldivers 2 là trò chơi bắn súng phối hợp góc nhìn thứ ba được phát triển bởi Arrowhead Game Studios và phát hành bởi Sony Interactive Entertainment dành cho hệ máy PlayStation 5 và Windows. Trò chơi là phần tiếp nối trực tiếp của Helldivers (2015). Lấy bối cảnh thế kỷ 22, câu chuyện theo chân những chiến binh Helldivers, một lực lượng tinh nhuệ được cử đi đối phó với các mối đe dọa khác nhau nhằm bảo vệ nhân loại.",
    genre: ["Kinh dị", "Sinh tồn", "Hành động"],
    tags: ["horror", "sur", "act"],
    id: "10",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "11": {
    name: "PUBG: BATTLEGROUNDS",
    priceOld: 320000,
    priceNew: 0,
    image: "assets/images/gameDetails-Id-11.jpg",
    description: `PUBG: BATTLEGROUNDS (trước đây là PlayerUnknown's Battlegrounds) là tựa game battle royale đình đám do KRAFTON phát triển và phát hành. Ra mắt lần đầu vào tháng 3 năm 2017, trò chơi đã nhanh chóng trở thành hiện tượng toàn cầu, góp phần định hình lại thể loại battle royale trong ngành công nghiệp game. Trong PUBG: BATTLEGROUNDS, người chơi sẽ tham gia vào các trận đấu sinh tử với tối đa 100 người, nhảy dù xuống một hòn đảo rộng lớn để thu thập vũ khí, trang bị và chiến đấu để trở thành người sống sót cuối cùng. Trò chơi hỗ trợ nhiều chế độ chơi như solo, duo và squad (tối đa 4 người), với các bản đồ đa dạng như Erangel, Miramar, Sanhok, Taego, Rondo, Vikendi và Deston.
`,
    genre: ["Hành động", "Sinh tồn", "Thể thao"],
    tags: ["act", "sur", "sports"],
    id: "11",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "12": {
    name: "Rust",
    priceOld: 440000,
    priceNew: 320000,
    image: "assets/images/gameDetails-Id-12.jpg",
    description: `Rust là một tựa game sinh tồn trực tuyến nhiều người chơi, được phát triển bởi Facepunch Studios và phát hành lần đầu tiên vào năm 2013. Đến nay, trò chơi đã bước sang năm thứ 12 và tiếp tục thu hút một cộng đồng người chơi đông đảo nhờ vào lối chơi khắc nghiệt, tính cạnh tranh cao và sự cập nhật nội dung thường xuyên.`,
    genre: ["Sinh tồn", "Hành động", "Mô phỏng"],
    tags: ["sur", "act", "sim"],
    id: "12",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "13": {
    name: "Dead By Daylight",
    priceOld: 490000,
    priceNew: 330000,
    image: "assets/images/gameDetails-Id-13.jpg",
    description: `Dead by Daylight là tựa game sinh tồn kinh dị nhiều người chơi, phát triển bởi Behaviour Interactive. Trong game, một người chơi vào vai Kẻ Sát Nhân (Killer), trong khi bốn người còn lại là Người Sống Sót (Survivors), cùng nhau đối mặt trong các trận đấu 4v1 căng thẳng.`,
    genre: ["Thể thao", "Mô phỏng"],
    tags: ["sports", "sim"],
    id: "13",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "14": {
    name: "EA SPORTS FC™ 24",
    priceOld: 1150000,
    priceNew: 950000,
    image: "assets/images/gameDetails-Id-14.jpg",
    description: `EA SPORTS FC™ 24 là tựa game bóng đá mô phỏng được phát triển bởi EA Vancouver và EA Romania, phát hành vào ngày 29 tháng 9 năm 2023. Đây là phiên bản đầu tiên trong loạt game EA SPORTS FC, đánh dấu sự kết thúc của mối quan hệ hợp tác kéo dài 30 năm giữa EA Sports và FIFA. `,
    genre: ["Thể thao", "Mô phỏng"],
    tags: ["sports", "sim"],
    id: "14",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "15": {
    name: "The Sims™ 4",
    priceOld: 490000,
    priceNew: 0,
    image: "assets/images/gameDetails-Id-15.jpg",
    description: `The Sims™ 4 là tựa game mô phỏng cuộc sống nổi tiếng, được phát triển bởi Maxis và phát hành bởi Electronic Arts. Ra mắt lần đầu vào năm 2014, trò chơi đã trở thành một trong những biểu tượng của thể loại mô phỏng, cho phép người chơi tạo dựng và điều khiển cuộc sống của những nhân vật ảo (Sim) trong một thế giới mở rộng lớn.`,
    genre: ["Mô phỏng", "Chiến thuật"],
    tags: ["sim", "str"],
    id: "15",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "16": {
    name: "Resident Evil 4 Remake",
    priceOld: 1050000,
    priceNew: 890000,
    image: "assets/images/gameDetails-Id-16.jpg",
    description: ``,
    genre: ["Hành động", "Kinh dị"],
    tags: ["act", "horror"],
    id: "16",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "17": {
    name: "Hades II",
    priceOld: 640000,
    priceNew: 490000,
    image: "assets/images/gameDetails-Id-17.jpg",
    description: `Hades II là phần tiếp theo của tựa game roguelike đình đám Hades (2020), được phát triển bởi Supergiant Games. Trò chơi hiện đang trong giai đoạn Early Access trên PC từ tháng 5 năm 2024 và dự kiến sẽ phát hành đầy đủ trên các nền tảng như macOS, Nintendo Switch và Nintendo Switch 2 vào năm 2025 . Trong Hades II, người chơi sẽ vào vai Melinoë, công chúa của Âm Phủ và em gái của Zagreus (nhân vật chính trong phần đầu). Sau khi Titan Thời Gian Chronos trỗi dậy và chiếm lĩnh Âm Phủ, bắt giữ Hades cùng gia đình, Melinoë được nữ thần phù thủy Hecate cứu thoát và huấn luyện để trở thành một chiến binh sử dụng ma thuật hắc ám. Nhiệm vụ của cô là đánh bại Chronos và giải cứu gia đình .`,
    genre: ["Hành động", "Nhập vai"],
    tags: ["sur", "horror", "act"],
    id: "17",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "18": {
    name: "Sons of the Forest",
    priceOld: 580000,
    priceNew: 450000,
    image: "assets/images/gameDetails-Id-18.jpg",
    description: `Sons of the Forest là phần tiếp theo của tựa game sinh tồn kinh dị The Forest (2018), được phát triển bởi Endnight Games và phát hành chính thức vào ngày 22 tháng 2 năm 2024 trên nền tảng PC qua Steam . Người chơi vào vai Jack Holt, một nhà báo nổi tiếng được thuê bởi tập đoàn PuffCorp để điều tra sự mất tích của CEO Edward Puffton cùng gia đình trên hòn đảo bí ẩn mang tên "Site 2". Sau khi trực thăng bị bắn rơi, Jack cùng đồng đội Kelvin – người bị mất thính giác và khả năng nói – phải sinh tồn giữa môi trường đầy rẫy những sinh vật ăn thịt người và khám phá các bí mật cổ xưa liên quan đến một hiện vật kỳ bí gọi là "Cube" .`,
    genre: ["Sinh tồn", "Kinh dị", "Hành động"],
    tags: ["sur", "horror", "act"],
    id: "18",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "19": {
    name: "Dragon Kingdom",
    priceOld: 602701,
    priceNew: 468498,
    image: "assets/images/gameDetails-Id-19.jpg",
    description: `Trò chơi kết hợp giữa nông trại, khai thác mỏ và câu cá, với điểm nhấn là việc nuôi dưỡng và đồng hành cùng rồng. Người chơi có thể khám phá thế giới mở, thu thập tài nguyên và xây dựng cuộc sống của riêng mình.`,
    genre: ["Kinh dị"],
    tags: ["horror"],
    id: "19",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "20": {
    name: "Cyberpunk 2077",
    priceOld: 950000,
    priceNew: 760000,
    image: "assets/images/gameDetails-Id-20.jpg",
    description: `Cyberpunk 2077 là một trò chơi nhập vai hành động thế giới mở do CD Projekt RED phát triển, lấy bối cảnh tại thành phố tương lai Night City. Người chơi nhập vai V, một lính đánh thuê có thể tùy chỉnh ngoại hình, kỹ năng và quá khứ, tham gia vào các nhiệm vụ đa dạng và ảnh hưởng đến cốt truyện thông qua lựa chọn của mình,`,
    genre: ["Nhập vai", "Phiêu lưu"],
    tags: ["rpg", "adv"],
    id: "20",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "21": {
    name: "Elden Ring",
    priceOld: 1100000,
    priceNew: 890000,
    image: "assets/images/gameDetails-Id-21.jpg",
    description: `Elden Ring là một tựa game hành động nhập vai thế giới mở do FromSoftware phát triển và Bandai Namco Entertainment phát hành. Ra mắt vào ngày 25 tháng 2 năm 2022, trò chơi đã nhanh chóng trở thành một hiện tượng toàn cầu, bán được hơn 30 triệu bản tính đến tháng 4 năm 2025, và được ca ngợi là một trong những trò chơi vĩ đại nhất mọi thời đại . Bối cảnh của Elden Ring là vùng đất "Lands Between", nơi Elden Ring – nguồn gốc của Erdtree – đã bị phá vỡ, dẫn đến sự sụp đổ của Trật tự Vàng. Người chơi vào vai một Tarnished, được hướng dẫn bởi ân sủng để thu thập các mảnh vỡ của Elden Ring, đánh bại các á thần và trở thành Elden Lord .`,
    genre: ["Nhập vai", "Hành động", "Phiêu lưu"],
    tags: ["rpg", "act", "adv"],
    id: "21",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "22": {
    name: "The Witcher 3: Wild Hunt",
    priceOld: 630000,
    priceNew: 420000,
    image: "assets/images/gameDetails-Id-22.jpg",
    description: `The Witcher 3: Wild Hunt là một trò chơi nhập vai hành động thế giới mở do CD Projekt Red phát triển, ra mắt vào ngày 19 tháng 5 năm 2015. Dựa trên loạt tiểu thuyết của Andrzej Sapkowski, trò chơi đã giành hơn 200 giải thưởng "Game of the Year" và được coi là một trong những tựa game xuất sắc nhất mọi thời đại.Người chơi nhập vai Geralt xứ Rivia, một Witcher – thợ săn quái vật được đột biến sinh học – trong hành trình tìm kiếm con gái nuôi Ciri, người đang bị săn đuổi bởi nhóm kỵ sĩ siêu nhiên mang tên Wild Hunt. Bối cảnh diễn ra tại "The Continent", một thế giới giả tưởng lấy cảm hứng từ văn hóa Trung và Bắc Âu, nổi bật với các vùng như Velen, Novigrad và Skellige. `,
    genre: ["Nhập vai", "Phiêu lưu"],
    tags: ["rpg", "adv"],
    id: "22",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "23": {
    name: "Starfield",
    priceOld: 1200000,
    priceNew: 990000,
    image: "assets/images/gameDetails-Id-23.jpg",
    description: `Starfield là một trò chơi nhập vai hành động thế giới mở do Bethesda Game Studios phát triển và Bethesda Softworks phát hành. Đây là thương hiệu mới đầu tiên của Bethesda trong hơn 25 năm, ra mắt vào ngày 6 tháng 9 năm 2023 trên Windows và Xbox Series X/S. Trò chơi sử dụng Creation Engine 2, một phiên bản nâng cấp của công nghệ từng được sử dụng trong các tựa game như Skyrim và Fallout 4. Starfield lấy bối cảnh vào năm 2330, trong một khu vực rộng khoảng 50 năm ánh sáng từ Hệ Mặt Trời, nơi loài người đã định cư trên nhiều hành tinh. Người chơi nhập vai một thành viên của tổ chức Constellation, nhóm các nhà thám hiểm không gian đang tìm kiếm những hiện vật bí ẩn mang năng lượng siêu nhiên. Cốt truyện xoay quanh cuộc hành trình khám phá vũ trụ, đối mặt với các phe phái như United Colonies và Freestar Collective, và giải mã những bí ẩn liên quan đến các hiện vật này.`,
    genre: ["Nhập vai", "Mô phỏng", "Phiêu lưu"],
    tags: ["rpg", "sim", "adv"],
    id: "23",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "24": {
    name: "Detroit: Become Human",
    priceOld: 690000,
    priceNew: 540000,
    image: "assets/images/gameDetails-Id-24.jpg",
    description: `Detroit: Become Human là một trò chơi phiêu lưu năm 2018 do Quantic Dream phát triển và Sony Interactive Entertainment phát hành. Trò chơi được phát hành cho PlayStation 4 vào tháng 5 năm 2018. Quantic Dream đã phát hành bản port cho Windows theo giấy phép từ Sony vào tháng 12 năm 2019. Cốt truyện xoay quanh ba người máy : Kara ( Valorie Curry ), người trốn thoát khỏi chủ nhân của mình để khám phá khả năng tri giác mới tìm thấy và bảo vệ một cô gái trẻ; Connor ( Bryan Dechart ), người có nhiệm vụ săn lùng những người máy tri giác; Markus ( Jesse Williams ), người cống hiến hết mình để giải thoát những người máy khác khỏi cảnh nô lệ. Lựa chọn của người chơi ảnh hưởng đến diễn biến và kết quả của câu chuyện`,
    genre: ["Mô phỏng", "Phiêu lưu"],
    tags: ["sim", "adv"],
    id: "24",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "25": {
    name: "Forza Horizon 5",
    priceOld: 980000,
    priceNew: 750000,
    image: "assets/images/gameDetails-Id-25.jpg",
    description: `Forza Horizon 5 là một trò chơi đua xe năm 2021 do Playground Games phát triển và Xbox Game Studios phát hành . Đây là tựa game Forza Horizon thứ năm và là phần chính thứ mười hai trong loạt game Forza . Trò chơi lấy bối cảnh là một phiên bản hư cấu của Mexico . Trò chơi được phát hành vào ngày 9 tháng 11 năm 2021 cho Windows , Xbox One và Xbox Series X/S . Trò chơi cũng được phát hành cho PlayStation 5 vào ngày 29 tháng 4 năm 2025, là phiên bản đầu tiên của một trò chơi Forza chính thống phát hành bên ngoài nền tảng Xbox và PC.`,
    genre: ["Thể thao", "Mô phỏng"],
    tags: ["sports", "sim"],
    id: "25",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "26": {
    name: "Dying Light 2 Stay Human",
    priceOld: 920000,
    priceNew: 790000,
    image: "assets/images/gameDetails-Id-26.jpg",
    description: `Dying Light 2 là một trò chơi điện tử kinh dị sinh tồn nhập vai hành động có bối cảnh thế giới mở theo chủ đề ngày tận thế của thây ma . Lấy bối cảnh 22 năm sau Dying Light , trò chơi có sự góp mặt của nhân vật chính mới tên là Aiden Caldwell (do Jonah Scott lồng tiếng ), người có nhiều kỹ năng parkour khác nhau . Người chơi có thể thực hiện các hành động như leo gờ, trượt, nhảy khỏi mép và chạy trên tường để nhanh chóng di chuyển trong thành phố`,
    genre: ["Hành động", "Kinh dị", "Sinh tồn"],
    tags: ["act", "horror", "sur"],
    id: "26",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "27": {
    name: "It Takes Two",
    priceOld: 690000,
    priceNew: 560000,
    image: "assets/images/gameDetails-Id-27.jpg",
    description: `Cody và May là một cặp vợ chồng, họ đang có ý định ly hôn sau khi Cody tranh cãi với May về việc cô ấy chỉ suốt ngày làm việc, không quan tâm đến gia đình, May phản bác lại rằng Cody không bao giờ ủng hộ công việc của cô hay đánh giá cao công việc đấy. Sau khi nói với Rose (con gái của họ) rằng họ đang có ý định ly hôn, Rose chạy đi lấy những con búp bê mà cô ấy tự làm, trông nó khá giống với bố mẹ của cô ấy và đem nó vào nhà kho của gia đình, cô cố gắng sửa chữa mối quan hệ của họ bằng cách đóng kịch. Một lúc sau, Cody và May thấy mình đang bị mắc kẹt ở bên trong những con búp bê mà nguyên nhân là do một giọt nước mắt của con gái của họ rơi xuống và vô tình trúng những con búp bê. Bác sĩ Hakim, một người dưới hình dạng một cuốn sách trị liệu mối quan hệ của mình, ông nói với May và Cody rằng ông được giao nhiệm vụ cố gắng sửa chữa mối quan hệ của họ khi họ cố tiếp cận Rose.`,
    genre: ["Phiêu lưu", "Chiến thuật"],
    tags: ["adv", "str"],
    id: "27",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "28": {
    name: "Red Dead Redemption 2",
    priceOld: 1060000,
    priceNew: 850000,
    image: "assets/images/gameDetails-Id-28.jpg",
    description: `Trò chơi sử dụng cả góc nhìn thứ nhất và thứ ba, người chơi có thể tự do di chuyển và tương tác trong một thế giới mở. Các hoạt động trong trò chơi bao gồm đấu súng, cướp bóc, săn bắn, cưỡi ngựa, tương tác với nhân vật không phải người chơi (NPC) và duy trì "điểm danh dự" của nhân vật thông qua các lựa chọn và hành động bên trong trò chơi. Trò chơi cũng có một hệ thống tiền thưởng tương tự như hệ thống "truy nã" từ loạt Grand Theft Auto tương ứng theo phản ứng của cơ quan thực thi pháp luật và thợ săn tiền thưởng đối với tội ác của người chơi. Red Dead Online, một chế độ nhiều người chơi trực tuyến của trò chơi, cho phép tối đa 32 người tham gia vào nhiều chế độ chơi hợp tác và cạnh tranh.`,
    genre: ["Hành động", "Phiêu lưu", "Mô phỏng"],
    tags: ["act", "adv", "sim"],
    id: "28",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "29": {
    name: "Hollow Knight: Silksong",
    priceOld: 490000,
    priceNew: 390000,
    image: "assets/images/gameDetails-Id-29.jpg",
    description: `Trò chơi Hollow Knight: Silksong được thiết lập để tương tự như trò chơi tiền nhiệm Hollow Knight , với nền tảng 2D và chiến đấu, mặc dù không giống như trò chơi đầu tiên, người chơi điều khiển Hornet thay vì "the Knight". Một số thay đổi được thực hiện so với bản gốc, chẳng hạn như nhân vật người chơi di chuyển với phong cách nhào lộn hơn hoặc áp dụng khả năng tự chữa lành tức thời. Nhiệm vụ phụ sẽ là một phần của trò chơi và bao gồm một nhật ký để theo dõi chúng. Điều này bao gồm một hệ thống nhiệm vụ được chia thành bốn loại có tên là Gather, Wayfarer, Hunt và Grand Hunt, được cung cấp bởi các nhân vật không phải người chơi trong trò chơi hoặc bởi các bảng nhiệm vụ.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["adv", "act"],
    id: "29",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "30": {
    name: "Stray",
    priceOld: 630000,
    priceNew: 490000,
    image: "assets/images/gameDetails-Id-30.jpg",
    description: `Stray là một trò chơi video phiêu lưu năm 2022 được phát triển bởi BlueTwelve Studio và được xuất bản bởi Annapurna Interactive. Cốt truyện game kể về một con mèo đi lạc trong một thành phố đầy rẫy robot, máy móc và vi khuẩn đột biến. Nhân vật chính bắt đầu quay trở lại vùng đất bên ngoài với sự giúp đỡ của một người bạn đồng hành không người lái tên là B-12. Dưới góc nhìn thứ ba, người chơi di chuyển bằng cách nhảy qua các nền tảng và leo lên các chướng ngại vật, đồng thời có thể tương tác với môi trường xung quanh để mở ra những con đường mới. Sử dụng B-12, người chơi có thể lưu trữ các vật phẩm được tìm thấy trong khi chơi và để giải các câu đố theo cốt truyện. Trong suốt trò chơi, người chơi phải trốn tránh khỏi mối nguy hiểm Zurks và Sentinels cố gắng giết họ`,
    genre: ["Phiêu lưu", "Mô phỏng"],
    tags: ["adv", "sim"],
    id: "30",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "31": {
    name: "Ghost of Tsushima",
    priceOld: 1190000,
    priceNew: 990000,
    image: "assets/images/gameDetails-Id-31.jpg",
    description: `Ghost of Tsushima là một trò chơi lén lút, phiêu lưu hành động góc nhìn thứ ba. Với một thế giới mở rộng lớn, không có điểm dừng chân và có thể được khám phá mà không cần hướng dẫn. Người chơi có thể di chuyển nhanh chóng đến các khu vực khác nhau trong thế giới trên lưng ngựa và bằng một vật phẩm đóng vai trò như một cái móc để có thể tiếp cận các khu vực khó tiếp cận trong trò chơi. Trò chơi có các nhiệm vụ phụ và các nhân vật không thể chơi được (NPC) mà người chơi có thể tương tác.`,
    genre: ["Hành động", "Phiêu lưu"],
    tags: ["act", "adv"],
    id: "31",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "32": {
    name: "Alan Wake II",
    priceOld: 1150000,
    priceNew: 920000,
    image: "assets/images/gameDetails-Id-32.jpg",
    description: `So với Alan Wake gốc , một trò chơi phiêu lưu hành động có chủ đề kinh dị , Alan Wake 2 là một trò chơi kinh dị sinh tồn , mặc dù vẫn được chơi theo góc nhìn thứ ba . Người chơi vào vai Alan Wake hoặc Saga Anderson trong hai câu chuyện chơi đơn riêng biệt , có thể chơi theo bất kỳ thứ tự nào mà người chơi chọn , mặc dù chuỗi mở đầu và kết thúc của trò chơi là tuyến tính.`,
    genre: ["Kinh dị", "Phiêu lưu"],
    tags: ["horror", "adv"],
    id: "32",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "33": {
    name: "Stardew Valley",
    priceOld: 290000,
    priceNew: 190000,
    image: "assets/images/gameDetails-Id-33.jpg",
    description: `Stardew Valley là một trò chơi mô phỏng cuộc sống nông trại năm 2016 do Eric "ConcernedApe" Barone phát triển. Người chơi vào vai một nhân vật thừa kế trang trại đổ nát của người ông quá cố tại một nơi được gọi là "Stardew Valley". Stardew Valley là một trò chơi mở , trong đó người chơi quản lý một trang trại bằng cách khai hoang, trồng trọt theo mùa và chăn nuôi. Người chơi có thể xây dựng các kỹ năng trong nông trại, kiếm ăn, câu cá, khai thác mỏ và chiến đấu. Trò chơi cũng bao gồm các tính năng xã hội, chẳng hạn như xây dựng mối quan hệ với người dân thị trấn, với tùy chọn kết hôn và sinh con. Một bản cập nhật sau đó đã thêm chế độ nhiều người chơi, cho phép chơi trực tuyến với những người khác.`,
    genre: ["Mô phỏng", "Chiến thuật"],
    tags: ["sim", "str"],
    id: "33",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "34": {
    name: "Hogwarts Legacy",
    priceOld: 1250000,
    priceNew: 980000,
    image: "assets/images/gameDetails-Id-34.jpg",
    description: `Hogwarts Legacy là một trò chơi nhập vai hành động năm 2023 do Avalanche Software phát triểnvà được Warner Bros. Games phát hành dưới nhãn hiệu Portkey Games . Đây là một phần của loạt trò chơi Wizarding World , diễn ra một thế kỷ trước các tiểu thuyết Harry Potter . Người chơi điều khiển một học sinh theo học tại Trường Phù thủy và Pháp sư Hogwarts, người học cách sử dụng một loạt các khả năng và đồ vật ma thuật. Với sự hỗ trợ của các học sinh và giáo sư khác, nhân vật chính bắt đầu cuộc hành trình khám phá một bí mật cổ xưa ẩn giấu trong thế giới phù thủy .`,
    genre: ["Phiêu lưu", "Nhập vai"],
    tags: ["adv", "rpg"],
    id: "34",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "35": {
    name: "Atomic Heart",
    priceOld: 920000,
    priceNew: 790000,
    image: "assets/images/gameDetails-Id-35.jpg",
    description: `Atomic Heart là một trò chơi điện tử bắn súng góc nhìn thứ nhất có yếu tố nhập vai. Vũ khí bao gồm súng thông thường, vũ khí năng lượng và vũ khí cận chiến. Có nhiều loại kẻ thù khác nhau, hầu hết là rô-bốt; dị nhân là một loại kẻ thù khác bao gồm xác chết của con người được hoạt hình hóa bởi các sinh vật giống thực vật được biến đổi gen gọi là mầm. Hệ thống chế tạo cho phép người chơi ghép các loại vũ khí lại với nhau từ các bộ phận kim loại có thể tháo rời khỏi rô-bốt hoặc lấy từ các thiết bị gia dụng. Đạn trong trò chơi rất khan hiếm, vì vậy người chơi cũng có tùy chọn sử dụng súng năng lượng có thể sạc lại. Các sự kiện thời gian nhanh có trong trò chơi.`,
    genre: ["Hành động", "Kinh dị", "Mô phỏng"],
    tags: ["act", "horror", "sim"],
    id: "35",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "36": {
    name: "Little Nightmares II",
    priceOld: 540000,
    priceNew: 410000,
    image: "assets/images/gameDetails-Id-36.jpg",
    description: ``,
    genre: ["Kinh dị", "Phiêu lưu"],
    tags: ["horror", "adv"],
    id: "36",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "37": {
    name: "Plague Tale: Requiem",
    priceOld: 1050000,
    priceNew: 860000,
    image: "assets/images/gameDetails-Id-37.jpg",
    description: `Requiem là một trò chơi hành động phiêu lưu được chơi theo góc nhìn thứ ba . Trong trò chơi, người chơi sẽ điều khiển Amicia và phải đối mặt với cả con người thù địch và lũ chuột đang phát tán bệnh dịch hạch đen . Lối chơi phần lớn giống với trò chơi đầu tiên, mặc dù hệ thống chiến đấu được mở rộng đáng kể. Amicia được trang bị các loại vũ khí như dao để đâm kẻ thù, một cái ná có thể dùng để ném đá và một chiếc nỏ cho phép cô đánh bại những đối thủ mặc áo giáp. Mũi tên nỏ, bình ném và đá có thể được kết hợp với hỗn hợp giả kim. Ngoài Ignifer và Extinguis, cho phép người chơi lần lượt thắp sáng và dập tắt ngọn lửa, trò chơi còn giới thiệu tar , giúp tăng bán kính của nguồn sáng và có thể được sử dụng để đốt cháy kẻ thù.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["adv", "act"],
    id: "37",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "38": {
    name: "Sea of Thieves",
    priceOld: 640000,
    priceNew: 490000,
    image: "assets/images/gameDetails-Id-38.jpg",
    description: ` tưởng về Sea of ​​Thieves được hình thành vào năm 2014. Rare lấy cảm hứng từ những người chơi các trò chơi PC như Eve Online (2003), DayZ (2018) và Rust (2018), những người đã sử dụng các công cụ trò chơi để tạo ra câu chuyện của riêng họ. Rare đã khám phá các bối cảnh khác nhau, chẳng hạn như ma cà rồng và khủng long, trước khi quyết định chọn chủ đề cướp biển lấy cảm hứng từ các bộ phim Cướp biển vùng Caribe và The Goonies (1985). Trò chơi có hệ thống tiến trình chỉ mở khóa các vật phẩm mỹ phẩm vì nhóm phát triển muốn khuyến khích cả người chơi thông thường và người chơi có kinh nghiệm chơi cùng nhau. Rare đã thoát khỏi danh tiếng về sự bí mật của mình trong quá trình phát triển Sea of ​​Thieves , mời người hâm mộ thử nghiệm các bản dựng đầu tiên.`,
    genre: ["Mô phỏng", "Phiêu lưu", "Hành động"],
    tags: ["sim", "adv", "act"],
    id: "38",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "39": {
    name: "Lies of P",
    priceOld: 990000,
    priceNew: 840000,
    image: "assets/images/gameDetails-Id-39.jpg",
    description: `Lies of P ( tiếng Hàn :  P의 거짓 ) là một trò chơi nhập vai hành động năm 2023 do Neowiz và Round8 Studio phát triển và Neowiz phát hành. Dựa trên tiểu thuyết The Adventures of Pinocchio năm 1883 của Carlo Collodi , câu chuyện kể về chú rối trong tựa game đi qua thành phố hư cấu Krat, nơi bị cả dịch bệnh hóa đá và cuộc nổi loạn của rối hoành hành. Lies of P được chơi theo góc nhìn thứ ba , với người chơi sử dụng vũ khí cận chiến và một cánh tay cơ khí được trang bị nhiều công cụ khác nhau để chiến đấu với những con rối, phe phái và công dân thù địch bị biến dạng do căn bệnh này. Trong suốt trò chơi, người chơi đưa ra quyết định tại các điểm cốt truyện quan trọng ảnh hưởng đến câu chuyện.`,
    genre: ["Hành động", "Nhập vai"],
    tags: ["act", "rpg"],
    id: "39",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "40": {
    name: "Palworld",
    priceOld: 790000,
    priceNew: 650000,
    image: "assets/images/gameDetails-Id-40.jpg",
    description: `Palworld là một hành động-phiêu lưu, sinh tồn và thuần hóa quái vật do nhà phát triển Pocketpair. Trò chơi được đặt trong mộtthế giới mởcó nhiều sinh vật giống động vật được gọi là "Pals", người chơi có thể chiến đấu và bắt giữ chúng để sử dụng cho việc xây dựng căn cứ, di chuyển và chiến đấu. Người chơi cũng có thể chỉ định "Pals" cho các căn cứ, nơi chúng sẽ tự động hoàn thành nhiệm vụ cho người chơi. Palworldcó thể chơi một mình hoặc trực tuyến với tối đa 32 người chơi trên một máy chủ. Trò chơi được công bố vào năm 2021 và ra mắt thông qua quyền truy cập sớm cho Windows,Xbox One và Xbox Series X/S vào tháng 1 năm 2024, [ 3 ] và cho PlayStation 5 vào tháng 9 năm 2024`,
    genre: ["Sinh tồn", "Mô phỏng", "Nhập vai"],
    tags: ["sur", "sim", "rpg"],
    id: "40",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "41": {
    name: "ARK: Survival Ascended",
    priceOld: 1120000,
    priceNew: 890000,
    image: "assets/images/gameDetails-Id-41.jpg",
    description: `ARK: Survival Ascended được công bố vào tháng 3 năm 2023. Ban đầu dự kiến ​​phát hành vào tháng 8 năm 2023, đã bị trì hoãn đến tháng 10 năm 2023. Các máy chủ chính thức của Survival Evolved cũng sẽ bị đóng cửa cùng lúc, với ngày đóng cửa bị trì hoãn cho đến ngày 30 tháng 9 năm 2023 khi thời điểm phát hành của Survival Ascended bị lùi lại. Mặc dù đã được đồng sáng lập của studio tuyên bố trước đó, bản làm lại sẽ không phải là bản nâng cấp miễn phí. Survival Ascended được phát hành dưới dạng truy cập sớm cho Windows vào ngày 25 tháng 10 năm 2023, Xbox Series X/S vào ngày 21 tháng 11 năm 2023, [ 8 ] và PlayStation 5 vào ngày 30 tháng 11 năm 2023. Bản làm lại bao gồm một bản đại tu đồ họa được phát triển trong Unreal Engine 5 . Nó có tất cả nội dung có thể tải xuống (DLC) đã phát hành trước đó cũng như nội dung gốc, bao gồm DLC mới, sự kiện theo mùa và các bản cập nhật chất lượng cuộc sống.`,
    genre: ["Sinh tồn", "Hành động", "Mô phỏng"],
    tags: ["sur", "act", "sim"],
    id: "41",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "42": {
    name: "Project Zomboid",
    priceOld: 310000,
    priceNew: 240000,
    image: "assets/images/gameDetails-Id-42.jpg",
    description: `Project Zomboid là một trò chơi điện tử thế giới mở , đẳng cự do nhà phát triển độc lập người Anh và CanadaThe Indie Stone phát triển. Trò chơi được đặt trong vùng cấm hậu tận thế, đầy rẫy thây ma của Knox Country hư cấu (trước đây là Quận Knox ), Kentucky , Hoa Kỳ , nơi người chơi được thử thách để sống sót càng lâu càng tốt trước khi không thể tránh khỏi cái chết. Đây là một trong năm trò chơi đầu tiên được phát hành trên phần tài trợ alpha của cổng thông tin trò chơi Desura .`,
    genre: ["Sinh tồn", "Chiến thuật", "Mô phỏng"],
    tags: ["sur", "str", "sim"],
    id: "42",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "43": {
    name: "No Man's Sky",
    priceOld: 940000,
    priceNew: 750000,
    image: "assets/images/gameDetails-Id-43.jpg",
    description: `Trò chơi được xây dựng xung quanh bốn trụ cột: khám phá, sinh tồn, chiến đấu và giao dịch. Người chơi có thể tham gia vào toàn bộ vũ trụ thế giới mở xác định được tạo theo thủ tục , bao gồm hơn 18 nghìn tỷ hành tinh. Thông qua hệ thống tạo thủ tục của trò chơi, các hành tinh có hệ sinh thái riêng với các dạng thực vật và động vật độc đáo và nhiều loài người ngoài hành tinh khác nhau có thể giao chiến hoặc giao dịch với người chơi trong các hệ thống hành tinh. Người chơi tiến triển trong trò chơi bằng cách khai thác tài nguyên để cung cấp năng lượng và cải thiện thiết bị của họ, mua và bán tài nguyên bằng tiền kiếm được từ việc ghi chép hệ thực vật và động vật hoặc giao dịch với các dạng sống đã đề cập ở trên, xây dựng căn cứ hành tinh và mở rộng hạm đội vũ trụ hoặc theo dõi cốt truyện bao quát của trò chơi bằng cách tìm kiếm bí ẩn xung quanh thực thể được gọi là The Atlas.`,
    genre: ["Hành động", "Kinh dị"],
    tags: ["adv", "sim"],
    id: "43",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "44": {
    name: "Control",
    priceOld: 890000,
    priceNew: 690000,
    image: "assets/images/gameDetails-Id-44.jpg",
    description: `Control xoay quanh Cục Kiểm soát Liên bang (FBC), một cơ quan bí mật của chính phủ Hoa Kỳ có nhiệm vụ ngăn chặn và nghiên cứu các hiện tượng vi phạm luật thực tế. Với vai Jesse Faden ( Courtney Hope ), Giám đốc mới của Cục, người chơi sẽ khám phá Ngôi nhà Cũ nhất - trụ sở huyền bí của FBC - và sử dụng các khả năng mạnh mẽ để đánh bại kẻ thù nguy hiểm được gọi là Hiss, kẻ đã xâm lược và làm hỏng thực tế. Người chơi có được các khả năng bằng cách tìm ra các Đối tượng Quyền lực, các vật thể trần tục như điện thoại quay số hoặc đĩa mềm thấm nhuần năng lượng từ một chiều không gian khác, là trung tâm của các sự kiện huyền bí lớn và kể từ đó đã được FBC thu hồi. Ngoài Hope, phần lồng tiếng và cảnh quay trực tiếp được cung cấp bởi James McCaffrey , Matthew Porretta và Martti Suosalo , trong khi ban nhạc Poets of the Fall cung cấp thêm nhạc.`,
    genre: ["Hành động", "Kinh dị"],
    tags: ["act", "horror"],
    id: "44",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "45": {
    name: "The Forest",
    priceOld: 480000,
    priceNew: 390000,
    image: "assets/images/gameDetails-Id-45.jpg",
    description: `The Forest là một trò chơi điện tử kinh dị sinh tồn được phát triển và phát hành bởi Endnight Games. Trò chơi diễn ra trên một bán đảo xa xôi hẻo lánh có nhiều rừng rậm, nơi nhân vật người chơi Eric LeBlanc phải chiến đấu với những con quái vật ăn thịt người, trong khi tìm kiếm con trai Timmy của mình sau một vụ tai nạn máy bay. Trò chơi có lối chơi phi tuyến tính trong môi trường thế giới mở được chơi theo góc nhìn thứ nhất , không có nhiệm vụ hoặc nhiệm vụ cố định, trao quyền cho người chơi tự đưa ra quyết định để sinh tồn. Sau giai đoạn beta truy cập sớm kéo dài bốn năm phát hành vào năm 2014, trò chơi hoàn chỉnh đã được phát hành cho Windows vào tháng 4 năm 2018 và cho PlayStation 4 vào tháng 11 năm 2018. Trò chơi đã thành công về mặt thương mại, bán được hơn năm triệu bản vào cuối năm 2018. Một trò chơi tiếp theo, Sons of the Forest , đã được phát hành trong Early Access cho Windows vào ngày 23 tháng 2 năm 2023.`,
    genre: ["Sinh tồn", "Kinh dị"],
    tags: ["sur", "horror"],
    id: "45",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "46": {
    name: "Slay the Spire",
    priceOld: 320000,
    priceNew: 210000,
    image: "assets/images/gameDetails-Id-46.jpg",
    description: `Trong Slay the Spire , người chơi cố gắng leo lên một ngọn tháp nhiều tầng được tạo ra thông qua quá trình tạo thủ tục với tư cách là một trong bốn nhân vật, chiến đấu với kẻ thù và trùm . Chiến đấu diễn ra thông qua hệ thống dựa trên trò chơi bài sưu tầm , với người chơi nhận được các lá bài mới làm phần thưởng từ chiến đấu và các phương tiện khác, yêu cầu người chơi sử dụng các chiến lược của trò chơi xây dựng bộ bài để xây dựng một bộ bài hiệu quả để hoàn thành cuộc leo núi.`,
    genre: ["Chiến thuật", "Nhập vai"],
    tags: ["str", "rpg"],
    id: "46",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "47": {
    name: "Terraria",
    priceOld: 270000,
    priceNew: 190000,
    image: "assets/images/gameDetails-Id-47.jpg",
    description: `Trò chơi có các tính năng khám phá, chiến đấu, chế tạo, xây dựng và khai thác bên trong một 2D được tạo theo thủ tục . Nó có một số khó khăn về thế giới, cũng như một lớp nhân vật. Người chơi có thể chạm trán với nhiều kẻ thù khác nhau trong suốt trò chơi, chẳng hạn như những kẻ xuất hiện tại một thời điểm hoặc địa điểm nhất định hoặc trong các sự kiện đặc biệt và cũng có thể hoàn thành các mục tiêu cụ thể để thu hút các nhân vật không phải người chơi bán vật phẩm và cung cấp dịch vụ cho người chơi. Terraria cũng có tính năng hỗ trợ chocác sửa đổi thông qua tModLoader.`,
    genre: ["Phiêu lưu", "Sinh tồn"],
    tags: ["adv", "sur"],
    id: "47",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "48": {
    name: "Don't Starve Together",
    priceOld: 330000,
    priceNew: 210000,
    image: "assets/images/gameDetails-Id-48.jpg",
    description: `Trò chơi theo chân một nhà khoa học tên là Wilson, người thấy mình đang ở trong một thế giới song song tối tăm, buồn tẻ được gọi là Constant và phải sống sót càng lâu càng tốt. Để đạt được mục đích này, người chơi phải giữ cho Wilson sống, được cho ăn và ổn định về mặt tinh thần khi anh ta tránh xa nhiều kẻ thù siêu thực và siêu nhiên sẽ cố gắng giết và nuốt chửng anh ta. Chế độ phiêu lưu của trò chơi làm tăng thêm chiều sâu cho cốt truyện thưa thớt và đưa Wilson vào cuộc chiến với nhân vật phản diện được cho là của trò chơi, Maxwell.`,
    genre: ["Phiêu lưu", "Mô phỏng"],
    tags: ["sur", "sim"],
    id: "48",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "49": {
    name: "Outer Wilds",
    priceOld: 570000,
    priceNew: 440000,
    image: "assets/images/gameDetails-Id-49.jpg",
    description: `Outer Wilds là một trò chơi phiêu lưu hành động năm 2019 do Mobius Digital phát triển và Annapurna Interactive phát hành . Trò chơi theo chân nhân vật người chơi khi họ khám phá một hệ thống hành tinh bị kẹt trong vòng lặp thời gian 22 phút,được thiết lập lại sau khi mặt trời phát nổ siêu tân tinh và phá hủy hệ thống. Thông qua nhiều lần thử, họ điều tra các tàn tích của người ngoài hành tinh Nomai để khám phá lịch sử của họ và nguyên nhân của vòng lặp thời gian.`,
    genre: ["Phiêu lưu", "Mô phỏng"],
    tags: ["adv", "sim"],
    id: "49",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "50": {
    name: "Doom Eternal",
    priceOld: 800000,
    priceNew: 600000,
    image: "assets/images/gameDetails-Id-50.jpg",
    description: `Lấy bối cảnh một thời gian sau các sự kiện của trò chơi năm 2016, câu chuyện theo chân Doom Slayer một lần nữa, trong nhiệm vụ chấm dứt sự xâm chiếm Trái đất của Địa ngục và ngăn chặn kế hoạch tiêu diệt loài người của người ngoài hành tinh Khan Maykr. Cùng với chiến dịch chơi đơn, chế độ nhiều người chơi, Battlemode, đã được giới thiệu. Trong chế độ này, người chơi có thể vào vai Doom Slayer hoặc một con quỷ, và chiến đấu cho đến khi Doom Slayer đánh bại được lũ quỷ hoặc ngược lại. Một chế độ horde đã được thêm vào vào tháng 10 năm 2021. The Ancient Gods , một DLC chiến dịch độc lập gồm hai phần lấy bối cảnh sau các sự kiện của trò chơi chính, đã được phát hành từ tháng 10 năm 2020 đến tháng 3 năm 2021.`,
    genre: ["Hành động", "Phiêu lưu"],
    tags: ["act", "adv"],
    id: "50",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "51": {
    name: "Minecraft",
    priceOld: 350000,
    priceNew: 300000,
    image: "assets/images/gameDetails-Id-51.jpg",
    description: `rong Minecraft , người chơi khám phá một thế giới ba chiều được tạo theo thủ tục với địa hình gần như vô hạn được tạo thành từ các voxel . Người chơi có thể khám phá và khai thác nguyên liệu thô, chế tạo công cụ và vật phẩm, xây dựng các công trình, công trình đất và máy móc. Tùy thuộc vào chế độ chơi đã chọn , người chơi có thể chiến đấu với đám đông thù địch , cũng như hợp tác hoặc cạnh tranh với những người chơi khác trong chế độ nhiều người chơi . Trò chơi có hai chế độ chính: chế độ sinh tồn, nơi người chơi phải thu thập tài nguyên để sinh tồn và chế độ sáng tạo, nơi người chơi có tài nguyên vô hạn và khả năng bay. Có thêm ba chế độ chơi nữa: chế độ khán giả cho phép người chơi xem những người khác, chế độ phiêu lưu cấm người chơi khai thác khối và chế độ hardcore chơi giống hệt chế độ sinh tồn ở độ khó khó nhưng có tính năng chết vĩnh viễn . Cộng đồng lớn của trò chơi cung cấp nhiều nội dung do người dùng tạo ra , chẳng hạn như sửa đổi , máy chủ , giao diện , gói kết cấu và bản đồ tùy chỉnh, bổ sung cơ chế và khả năng chơi mới cho trò chơi. Speedrunning là một hoạt động cộng đồng phổ biến khác.`,
    genre: ["Phiêu lưu", "Mô phỏng"],
    tags: ["adv", "sim"],
    id: "51",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "52": {
    name: "Valorant",
    priceOld: "",
    priceNew: 0,
    image: "assets/images/gameDetails-Id-52.jpg",
    description: `Valorant là tựa game bắn súng góc nhìn thứ nhất (FPS) miễn phí được Riot Games phát triển và phát hành. Trò chơi được công bố lần đầu tiên với tên mã là Project A vào tháng 10 năm 2019. Nó được thiết lập để phát hành cho Microsoft Windows với phiên bản Closed beta ra mắt vào ngày 7 tháng 4 năm 2020, sau đó là phát hành chính thức vào ngày 2 tháng 6 năm 2020. Đến tháng 6 năm 2024, Valorant chính thức phát hành trên nền tảng PlayStation 5 và Xbox Series X/S, tuy nhiên phiên bản trên không có khả năng chơi chung với người dùng Windows.`,
    genre: ["Hành động", "Thể thao"],
    tags: ["act", "sports"],
    id: "52",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "53": {
    name: "Death Stranding",
    priceOld: 950000,
    priceNew: 700000,
    image: "assets/images/gameDetails-Id-53.jpg",
    description: `Trò chơi lấy bối cảnh tại Hoa Kỳ sau một sự kiện thảm khốc khiến các sinh vật hủy diệt bắt đầu lang thang trên Trái đất. Người chơi điều khiển Sam Porter Bridges ( Norman Reedus ), một người đưa thư được giao nhiệm vụ chuyển hàng tiếp tế đến các thuộc địa biệt lập và kết nối lại chúng thông qua mạng lưới truyền thông không dây. Cùng với Reedus, trò chơi có sự góp mặt của các diễn viên Mads Mikkelsen , Léa Seydoux , Margaret Qualley , Troy Baker , Tommie Earl Jenkins và Lindsay Wagner , ngoài ra còn có sự góp mặt của các đạo diễn phim Guillermo del Toro và Nicolas Winding Refn , với tư cách là các nhân vật phụ.`,
    genre: ["Phiêu lưu", "Mô phỏng", "Hành động"],
    tags: ["adv", "sim", "act"],
    id: "53",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "54": {
    name: "Resident Evil Village",
    priceOld: 800000,
    priceNew: 650000,
    image: "assets/images/gameDetails-Id-54.jpg",
    description: `Resident Evil Village là một trò chơi kinh dị sinh tồn năm 2021 do Capcom phát triển và phát hành. Đây là phần tiếp theo của Resident Evil 7: Biohazard (2017) và là trò chơi chính thứ mười của loạt Resident Evil . Người chơi điều khiển Ethan Winters , người đang tìm kiếm cô con gái bị bắt cóc của mình trong một ngôi làng bí ẩn chứa đầy những sinh vật đột biến. Village duy trì các yếu tố kinh dị sinh tồn từ các trò chơi trước, với người chơi tìm kiếm vật phẩm trong môi trường và quản lý tài nguyên trong khi thêm lối chơi theo hướng hành động hơn, với số lượng kẻ thù cao hơn và nhấn mạnh hơn vào chiến đấu.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["horror", "act", "adv"],
    id: "54",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "55": {
    name: "Shadow of the Tomb Raider",
    priceOld: 600000,
    priceNew: 480000,
    image: "assets/images/gameDetails-Id-55.jpg",
    description: `Lấy bối cảnh ba năm sau các sự kiện của Rise of the Tomb Raider , câu chuyện theo chân Lara Croft khi cô mạo hiểm đi qua các vùng nhiệt đới của Châu Mỹ đến thành phố huyền thoại Paititi , chiến đấu với tổ chức bán quân sự Trinity và chạy đua để ngăn chặn ngày tận thế của người Maya mà cô đã gây ra. Lara phải băng qua môi trường và chiến đấu với kẻ thù bằng súng ống và tàng hình khi cô khám phá các trung tâm bán mở . Trong các trung tâm này, cô có thể đột kích các ngôi mộ thử thách để mở khóa phần thưởng mới, hoàn thành các nhiệm vụ phụ và thu thập tài nguyên có thể được sử dụng để chế tạo các vật liệu hữu ích.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["adv", "act"],
    id: "55",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "56": {
    name: "Sekiro: Shadows Die Twice",
    priceOld: 750000,
    priceNew: 600000,
    image: "assets/images/gameDetails-Id-56.jpg",
    description: `Người chơi điều khiển Wolf, một shinobi bắt đầu nhiệm vụ giải cứu chúa tể của mình và bị cuốn vào cuộc xung đột vì số phận của Ashina. Trò chơi tập trung vào việc ẩn núp, khám phá và chiến đấu, đặc biệt nhấn mạnh vào các trận đánh trùm . Trò chơi diễn ra ở một nước Nhật hư cấu trong thời kỳ Sengoku và có nhiều tham chiếu đến thần thoại và triết học Phật giáo . Đạo diễn chính Hidetaka Miyazaki muốn tạo ra một sở hữu trí tuệ (IP) mới đánh dấu sự khác biệt so với loạt Dark Souls của họ , muốn tạo ra một trò chơi theo chủ đề Nhật Bản xoay quanh shinobi và ninja. Tenchu , là một IP gắn liền với FromSoftware và với chủ đề lịch sử đó, đã trở thành động lực cho dự án. `,
    genre: ["Hành động", "Phiêu lưu"],
    tags: ["act", "adv"],
    id: "56",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "57": {
    name: "Mass Effect Legendary Edition",
    priceOld: 1000000,
    priceNew: 850000,
    image: "assets/images/gameDetails-Id-58.jpg",
    description: `Quá trình phát triển Legendary Edition bắt đầu vào năm 2019 dưới sự chỉ đạo của Mac Walters , người trước đây từng là biên kịch chính cho Mass Effect 2 và Mass Effect 3. BioWare quyết định tiếp cận dự án như một bản làm lại thay vì làm lại để giữ nguyên trải nghiệm của bộ ba trò chơi gốc. Legendary Edition nhận được những đánh giá rất tích cực từ các ấn phẩm trò chơi điện tử, họ ca ngợi trải nghiệm nâng cao của trò chơi đầu tiên bên cạnh sự tiện lợi và phạm vi của toàn bộ gói. Những lời chỉ trích nhỏ nhắm vào phạm vi của lối chơi và những thay đổi về hình ảnh ở một số khía cạnh nhất định.`,
    genre: ["Mô phỏng", "Chiến thuật"],
    tags: ["sim", "str"],
    id: "58",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "58": {
    name: "Planet Zoo",
    priceOld: 580000,
    priceNew: 450000,
    image: "assets/images/gameDetails-Id-58.jpg",
    description: `Planet Zoo là một trò chơi mô phỏng xây dựng và quản lý năm 2019 của Frontier Developments . Trò chơi là phiên bản kế thừa tinh thần của Zoo Tycoon và Zoo Tycoon 2 , với lối chơi tương tự như trò chơi công viên chủ đề của studio, Planet Coaster . Ban đầu được phát hành cho Windows , các bản port cho PlayStation 5 và Xbox Series X/S được phát hành vào năm 2024.`,
    genre: ["Mô phỏng", "Chiến thuật"],
    tags: ["sim", "str"],
    id: "58",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "59": {
    name: "Ori and the Will of the Wisps",
    priceOld: 500000,
    priceNew: 400000,
    image: "assets/images/gameDetails-Id-59.jpg",
    description: `Ori and the Will of the Wisps là một Metroidvania 2D; một trò chơi nền tảng nhấn mạnh vào việc khám phá, thu thập các vật phẩm và nâng cấp, và quay trở lại các khu vực trước đây không thể tiếp cận. Người chơi điều khiển Ori, một linh hồn hộ mệnh màu trắng. Với tư cách là Ori, người chơi phải nhảy, leo trèo, lướt và bơi giữa các nền tảng khác nhau để giải các câu đố phức tạp. Trò chơi diễn ra dưới dạng Metroidvania , với các khả năng và nâng cấp mới cho phép người chơi mở khóa các khu vực trước đây không thể tiếp cận của bản đồ. Một số yếu tố nền tảng của trò chơi được lấy cảm hứng từ các thương hiệu Rayman và Metroid .`,
    genre: ["Phiêu lưu", "Nhập vai", "Hành động"],
    tags: ["adv", "rpg", "act"],
    id: "59",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "60": {
    name: "Metro Exodus",
    priceOld: 700000,
    priceNew: 530000,
    image: "assets/images/gameDetails-Id-60.jpg",
    description: `Metro Exodus là một trò chơi bắn súng góc nhìn thứ nhất năm 2019 do 4A Games phát triển và Deep Silver phát hành . Trò chơi là phần thứ ba trong loạt trò chơi điện tử Metro , dựa trêntiểu thuyết của Dmitry Glukhovsky . Đây là phần tiếp theo của Metro: Last Light và cuốn sách Metro 2035 , theo chân nhân vật chính Artyom và phi hành đoàn của anh khi họ chạy trốn khỏi Moscow Metro và cùng các đồng minh của mình thực hiện chuyến hành trình xuyên lục địa qua Nga và một số vùng của Kazakhstan trên một đầu máy xe lửa có tên là Aurora . Câu chuyện diễn ra trong hơn một năm, trong thời gian đó, Artyom đến thăm các địa điểm như Sông Volga và Biển Caspi . Trò chơi cải thiện cơ chế chơi trò chơi của Last Light ; nó bao gồm một số địa điểm thế giới mở thu nhỏ và có các cấp độ tuyến tính giống như các trò chơi trước đó trong sê-ri.`,
    genre: [],
    tags: [],
    id: "60",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "61": {
    name: "The Outer Worlds",
    priceOld: 700000,
    priceNew: 520000,
    image: "assets/images/gameDetails-Id-61.jpg",
    description: `The Outer Worlds là một trò chơi nhập vai hành động năm 2019 do Obsidian Entertainment phát triểnvà Private Division phát hành . Lấy bối cảnh ở một tương lai thay thế , trò chơi diễn ra ở Halcyon, một hệ thống sao xa xôi do các tập đoàn lớn chiếm đóng . Trong trò chơi, người chơi sẽ điều khiển một hành khách từ một con tàu thuộc địa bị mất tích, người được một nhà khoa học hồi sinh và giao nhiệm vụ giải cứu những người thực dân đồng hương của mình và hạ gục các tập đoàn chịu trách nhiệm cho sự sụp đổ của thuộc địa. Trò chơi được chơi theo góc nhìn thứ nhất và người chơi có thể sử dụng các tùy chọn chiến đấu, tàng hình hoặc đối thoại (thuyết phục, nói dối và đe dọa) khi chạm trán với các nhân vật không thể chơi được có khả năng thù địch . Người chơi có thể đưa ra nhiều quyết định đối thoại ảnh hưởng đến cốt truyện phân nhánh.`,
    genre: ["Nhập vai", "Phiêu lưu", "Hành động"],
    tags: ["rpg", "adv", "act"],
    id: "61",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "62": {
    name: "Divinity: Original Sin 2",
    priceOld: 750000,
    priceNew: 600000,
    image: "assets/images/gameDetails-Id-62.jpg",
    description: ``,
    genre: [],
    tags: [],
    id: "62",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "63": {
    name: "Cuphead",
    priceOld: 400000,
    priceNew: 350000,
    image: "assets/images/gameDetails-Id-63.jpg",
    description: `Cuphead là một trò chơi điện tử chạy và bắn năm 2017 do Studio MDHR của Canada phát triển và phát hành. Trò chơi theo chân nhân vật chính có đầu tách trà và anh trai Mugman, khi họ thực hiện một thỏa thuận với Ác quỷ để trả tiền thua lỗ của sòng bạc bằng cách chiếm lại linh hồn của những con nợ bỏ trốn. Trong trò chơi, tối đa hai người chơi điều khiển Cuphead và/hoặc Mugman để chiến đấu qua nhiều cấp độ và các trận đánh trùm ; trò chơi không có cấu trúc tường thuật cứng nhắc. Khi trò chơi tiến triển, nhân vật chính có thêm sức mạnh và khảnăng, cuối cùng phải đối mặt với Ác quỷ. Tuy nhiên, người chơi chỉ có thể trang bị một số lượng giới hạn các khả năng này tại một thời điểm nhất định.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["act", "adv"],
    id: "63",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "64": {
    name: "Celeste",
    priceOld: 350000,
    priceNew: 300000,
    image: "assets/images/gameDetails-Id-64.jpg",
    description: `Celeste là một trò chơi điện tử nền tảng năm 2018 dostudio độc lập Maddy Makes Games phát triển và phát hành . Người chơi điều khiển nhân vật Madeline , một phụ nữ trẻ mắc chứng lo âu và trầm cảm, người cố gắng leo lên Núi Celeste . Trong quá trình leo núi, cô gặp một số nhân vật, bao gồm một hiện thân của sự tự ti của cô, mà cộng đồng đã đặt tên là Badeline, người cố gắng ngăn cô lên đến đỉnh núi.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["act", "adv"],
    id: "64",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "65": {
    name: "Subnautica",
    priceOld: 550000,
    priceNew: 450000,
    image: "assets/images/gameDetails-Id-65.jpg",
    description: `Subnautica là một trò chơi sinh tồn phiêu lưu hành động năm 2018 do Unknown Worlds Entertainment phát triển và phát hành . Người chơi điều khiển Ryley Robinson, một người sống sót sau vụ tai nạn tàu vũ trụ trên một hành tinh đại dương của người ngoài hành tinh, nơi họ được tự do khám phá. Mục tiêu chính là tìm kiếm các nguồn tài nguyên thiết yếu, sống sót trong hệ thực vật và động vật địa phương và tìm cách thoát khỏi hành tinh.`,
    genre: ["Sinh tồn", "Phiêu lưu", "Mô phỏng"],
    tags: ["sur", "adv", "sim"],
    id: "",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "66": {
    name: "The Talos Principle",
    priceOld: 400000,
    priceNew: 300000,
    image: "assets/images/gameDetails-Id-66.jpg",
    description: `Trò chơi có cốt truyện triết học . Tên của trò chơi ám chỉ đến một nguyên lý triết học do một triết gia Hy Lạp hư cấu được gọi là Straton xứ Stageira xây dựng . Trong các văn bản tìm thấy trong trò chơi, Straton lập luận rằng ý thức của Talos trong thần thoại Hy Lạp (một người máy nhưng có ý thức) ngụ ý rằng con người cũng chỉ là máy móc (mặc dù là máy móc sinh học). Trò chơi có nhiều tên lấy từ thần thoại và tôn giáo, chẳng hạn như Elohim , Gehenna , Samsara và Uriel .`,
    genre: ["Phiêu lưu"],
    tags: ["adv"],
    id: "66",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "67": {
    name: "Hollow Knight",
    priceOld: 450000,
    priceNew: 350000,
    image: "assets/images/gameDetails-Id-67.jpg",
    description: `Hollow Knight là một trò chơi điện tử Metroidvania năm 2017 do nhà phát triển độc lập người Úc Team Cherry phát triển và phát hành. Người chơi điều khiển Knight, một chiến binh côn trùng khám phá Hallownest, một vương quốc sụp đổ bị một căn bệnh siêu nhiên hoành hành. Trò chơi được đặt trong nhiều địa điểm ngầm khác nhau, có các nhân vật côn trùng thân thiện và thù địch cùng nhiều trùm . Người chơi có cơ hội mở khóa các khả năng khi khám phá, cùng với các phần truyền thuyết và văn bản hương vị được lan truyền khắp vương quốc.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["act", "adv"],
    id: "67",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "68": {
    name: "Slime Rancher",
    priceOld: 480000,
    priceNew: 400000,
    image: "assets/images/gameDetails-Id-68.jpg",
    description: `rò chơi được chơi trong thế giới mở và theo góc nhìn thứ nhất . Người chơi điều khiển một nhân vật tên là Beatrix LeBeau, một chủ trang trại chuyển đến một hành tinh xa Trái đất được gọi là Far Far Range để sống cuộc sống của một " chủ trang trại chất nhờn ", bao gồm việc xây dựng trang trại của mình và khám phá thế giới của Far Far Range để thu thập, nuôi, cho ăn và lai tạo chất nhờn. Chất nhờn là những sinh vật sống dạng keo có nhiều kích thước và đặc điểm khác nhau. Để tiến triển, cô ấy có những ghi chú do chủ cũ của trang trại để lại giúp cô ấy trong hành trình của mình qua Far Far Range.`,
    genre: ["Mô phỏng", "Phiêu lưu"],
    tags: ["sim", "adv"],
    id: "68",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "69": {
    name: "Factorio",
    priceOld: 650000,
    priceNew: 550000,
    image: "assets/images/gameDetails-Id-69.jpg",
    description: `actorio là một trò chơi mô phỏng xây dựng và quản lý do studio Wube Software của Séc phát triển và phát hành. Trò chơi theo chân một kỹ sư bị rơi xuống một hành tinh xa lạ và phải thu thập tài nguyên và tạo ra ngành công nghiệp tự động để chế tạo tên lửa ; người chơi có thể tiếp tục trò chơi sau khi đạt được mục tiêu cuối cùng. Có cả chế độ chơi đơn và nhiều người chơi cũng như tám kịch bản trò chơi bổ sung.`,
    genre: ["Chiến thuật", "Mô phỏng"],
    tags: ["str", "sim"],
    id: "69",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "70": {
    name: "Ghostrunner",
    priceOld: 600000,
    priceNew: 450000,
    image: "assets/images/gameDetails-Id-70.jpg",
    description: `Được chơi theo góc nhìn thứ nhất với tư cách là Jack the Ghostrunner, người chơi phải vượt qua các môi trường nguy hiểm bằng cách lao, nhảy, chạy trên tường, vật lộn và trượt. Người chơi cũng sẽ chạm trán với kẻ thù, phải xử lý cẩn thận, vì cả kẻ thù và người chơi đều có thể bị giết chỉ bằng một đòn. Jack có thể sử dụng một cơ chế gọi là Sensory Boost, cho phép anh ta làm chậm thời gian và né tránh cũng như làm chệch hướng các viên đạn giữa không trung. Khi người chơi tiến triển trong câu chuyện, họ sẽ mở khóa các khả năng và nâng cấp mới, họ có thể áp dụng bằng cách sử dụng các mảnh giống như tetromino trên hệ thống lưới.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["act", "adv"],
    id: "70",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "71": {
    name: "Ori and the Blind Forest",
    priceOld: 400000,
    priceNew: 320000,
    image: "assets/images/gameDetails-Id-71.jpg",
    description: `ri and the Blind Forest là một Metroidvania 2D; một trò chơi nền tảng tập trung vào khám phá, thu thập vật phẩm và nâng cấp, và quay trở lại các khu vực trước đây không thể tiếp cận. Người chơi điều khiển Ori, một linh hồn hộ mệnh màu trắng và Sein, người là ánh sáng và đôi mắt của Spirit Tree. Với tư cách là Ori, người chơi phải nhảy, leo trèo và sử dụng nhiều khả năng khác nhau để điều hướng thế giới của trò chơi. Sein có thể bắn Spirit Flames để chiến đấu với kẻ thù hoặc phá vỡ chướng ngại vật. Ori được yêu cầu tương tác với môi trường bằng cách nhảy từ các nền tảng và giải câu đố, và phải đối mặt với nhiều kẻ thù khác nhau. Người chơi giúp Ori thu thập tế bào sức khỏe, tế bào năng lượng, khả năng mới và nâng cấp. Thế giới trò chơi mở ra cho người chơi theo phong cách của Metroidvania , với các khả năng mới cho phép người chơi tiếp cận các khu vực trước đây không thể tiếp cận.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["adv", "act"],
    id: "71",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "72": {
    name: "Frostpunk",
    priceOld: 600000,
    priceNew: 480000,
    image: "assets/images/gameDetails-Id-72.jpg",
    description: `Frostpunk là một trò chơi điện tử sinh tồn xây dựng thành phố năm 2018 do 11 Bit Studios phát triển và phát hành. Người chơi vào vai một nhà lãnh đạo trong một lịch sử thay thế lấy bối cảnh vào cuối thế kỷ 19, trong đó họ phải xây dựng và duy trì một thành phố trong suốt mùa đông núi lửa trên toàn thế giới , quản lý tài nguyên, đưa ra lựa chọn về cách sống sót và khám phá khu vực bên ngoài thành phố của họ để tìm người sống sót, tài nguyên hoặc các vật phẩm hữu ích khác. Trò chơi có một số kịch bản để thực hiện, mỗi kịch bản có câu chuyện riêng và những thách thức khác nhau. Chiến dịch chính áp dụng cấu trúc ba hồi, yêu cầu người chơi phải vật lộn với xung đột nội bộ và tình trạng hỗn loạn xã hội trong một thành phố bị chia cắt và sống sót sau một cơn bão lớn đe dọa nhấn chìm thành phố, đồng thời phải hy sinh và đưa ra những quyết định đạo đức xám xịt về mặt đạo đức trên đường đi.`,
    genre: ["Chiến thuật", "Mô phỏng", "Sinh tồn"],
    tags: ["str", "sim", "sur"],
    id: "72",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "73": {
    name: "Darkest Dungeon",
    priceOld: 520000,
    priceNew: 400000,
    image: "assets/images/gameDetails-Id-73.jpg",
    description: `Darkest Dungeon yêu cầu người chơi quản lý một danh sách anh hùng để khám phá ngục tối bên dưới một biệt thự gothic mà người chơi đã thừa kế. Được chơi theo sự kết hợp giữa chuyển động thời gian thực và chiến đấu theo lượt , một tính năng cốt lõi của Darkest Dungeon là mức độ căng thẳng của mỗi anh hùng tăng lên khi khám phá và chiến đấu nhiều hơn; một nhân vật duy trì mức độ căng thẳng cao có thể mắc phải những bệnh tật sẽ cản trở hoặc có thể tăng cường hiệu suất của họ với tư cách là một nhà thám hiểm. Biểu tượng căng thẳng, hay Vương miện sắt, một hình lưỡi liềm với năm gai hướng vào trong, cũng có trong logo của trò chơi .`,
    genre: ["Chiến thuật", "Nhập vai", "Phiêu lưu"],
    tags: ["rpg", "str", "adv"],
    id: "73",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "74": {
    name: "Cuphead: The Delicious Last Course",
    priceOld: 300000,
    priceNew: 250000,
    image: "assets/images/gameDetails-Id-74.jpg",
    description: `Trò chơi theo chân nhân vật chính có đầu tách trà và anh trai Mugman, khi họ thực hiện một thỏa thuận với Ác quỷ để trả tiền thua lỗ của sòng bạc bằng cách chiếm lại linh hồn của những con nợ bỏ trốn. Trong trò chơi, tối đa hai người chơi điều khiển Cuphead và/hoặc Mugman để chiến đấu qua nhiều cấp độ và các trận đánh trùm ; trò chơi không có cấu trúc tường thuật cứng nhắc. Khi trò chơi tiến triển, nhân vật chính có thêm sức mạnh và khả năng, cuối cùng phải đối mặt với Ác quỷ. Tuy nhiên, người chơi chỉ có thể trang bị một số lượng giới hạn các khả năng này tại một thời điểm nhất định.`,
    genre: ["Hành động"],
    tags: ["act"],
    id: "74",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "75": {
    name: "Disco Elysium",
    priceOld: 800000,
    priceNew: 650000,
    image: "assets/images/gameDetails-Id-75.jpg",
    description: `Disco Elysium kể về một thám tử gặp rắc rối tỉnh dậy sau cơn say xỉn mà không nhớ mình là ai hoặc thế giới xung quanh. Khi anh ta điều tra một vụ giết người cùng với một thám tử từ một đồn cảnh sát khác, người chơi có thể ghép lại danh tính của chính nhân vật chính và khám phá ra điều gì đã dẫn anh ta đến trạng thái này. Disco Elysium là một trò chơi nhập vai không theo truyền thống có rất ít cảnh chiến đấu. Thay vào đó, các sự kiện được giải quyết thông qua kiểm tra kỹ năng và cây đối thoại bằng hệ thống 24 kỹ năng đại diện cho các khía cạnh và tính cách khác nhau của nhân vật chính, mỗi kỹ năng có thể nói chuyện trực tiếp với người chơi để ảnh hưởng đến quyết định của họ. Trò chơi dựa trên bối cảnh trò chơi nhập vai trên bàn mà Kurvitz đã tạo ra trước đó, sau đó thành lập ZA/UM vào năm 2016 để chuyển thể thành trò chơi điện tử. Đây là lần thứ hai bối cảnh Elysium được khám phá, sau tiểu thuyết Sacred and Terrible Air năm 2013`,
    genre: ["Mô phỏng", "Chiến thuật"],
    tags: ["sim", "str"],
    id: "75",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "76": {
    name: "Kerbal Space Program",
    priceOld: 500000,
    priceNew: 400000,
    image: "assets/images/gameDetails-Id-76.jpg",
    description: `Người chơi điều hành một chương trình không gian do Kerbals điều hành, một loài người tí hon màu xanh lá cây, đã xây dựng một cảng vũ trụ trên hành tinh quê hương của họ, Kerbin . Từ trung tâm vũ trụ, người chơi có thể chế tạo nhiều loại phương tiện khác nhau như tên lửa , máy bay , tàu vũ trụ và xe tự hành từ một bộ linh kiện được cung cấp. Tàu vũ trụ được chế tạo có thể được phóng từ bệ phóng hoặc đường băng của trung tâm vũ trụ để hoàn thành nhiều nhiệm vụ khác nhau trong khi tránh hỏng hóc một phần hoặc thảm khốc (chẳng hạn như thiếu nhiên liệu hoặc hỏng cấu trúc). Người chơi điều khiển chuyến bay với ít sự hỗ trợ nào khác ngoài Hệ thống hỗ trợ ổn định (SAS) để giữ cho phương tiện của họ định hướng. Với điều kiện duy trì đủ lực đẩy và nhiên liệu, tàu vũ trụ có thể đi vào quỹ đạo quanh Kerbin hoặc di chuyển đến các thiên thể khác . Để hình dung quỹ đạo của phương tiện, người chơi được cung cấp một 'bản đồ' hiển thị quỹ đạo của phương tiện cũng như quỹ đạo của các thiên thể và tàu vũ trụ khác, cũng như các thông số quỹ đạo của chúng. Các 'nút' điều khiển tàu vũ trụ có thể được lập biểu đồ, tính thời gian và thực hiện, và các đối tượng có thể được chọn và 'nhắm mục tiêu' để tạo điều kiện cho việc bay ngang qua, gặp gỡ và kết nối. `,
    genre: ["Mô phỏng", "Chiến thuật"],
    tags: ["sim", "str"],
    id: "76",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "77": {
    name: "Stellaris",
    priceOld: 700000,
    priceNew: 550000,
    image: "assets/images/gameDetails-Id-77.jpg",
    description: `Stellaris là một trò chơi điện tử chiến lược vĩ đại 4X do Paradox Development Studio phát triển và Paradox Interactive phát hành. Trong Stellaris , người chơi sẽ điều khiển một nền văn minh giữa các vì sao trên sân khấu thiên hà và được giao nhiệm vụ khám phá , thuộc địa hóa và quản lý khu vực thiên hà của họ, chạm trán với các nền văn minh khác mà sau đó họ có thể tham gia vào ngoại giao , thương mại hoặc chiến tranh . Một phần lớn của trò chơi liên quan đến việc giải quyết các sự kiện theo kịch bản và mới nổi, thông qua đó các đế chế mới thay đổi cán cân quyền lực , các cuộc khủng hoảng mạnh mẽ đe dọa thiên hà hoặc chuỗi sự kiện kể câu chuyện về các đế chế bị lãng quên.`,
    genre: ["Chiến thuật", "Mô phỏng"],
    tags: ["str", "sim"],
    id: "77",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "78": {
    name: "Tales of Arise",
    priceOld: 750000,
    priceNew: 600000,
    image: "assets/images/gameDetails-Id-78.jpg",
    description: `Tales of Arise là một trò chơi nhập vai hành động năm 2021 do Bandai Namco Entertainment phát triển và phát hành. Là phần chính thứ hai mươi bảy trong loạt Tales , trò chơi theo chân một người đàn ông và một người phụ nữ từ thế giới đối lập của Dahna và Rena và hành trình của họ để chấm dứt sự áp bức của Renans đối với người Dahnan.`,
    genre: ["Hành động", "Nhập vai", "Phiêu lưu"],
    tags: ["act", "rpg", "adv"],
    id: "78",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "79": {
    name: "Dark Souls III",
    priceOld: 750000,
    priceNew: 600000,
    image: "assets/images/gameDetails-Id-79.jpg",
    description: `Dark Souls III là một trò chơi nhập vai hành động được chơi ở góc nhìn thứ ba. Theo giám đốc chính và người sáng tạo ra loạt phim Hidetaka Miyazaki , thiết kế lối chơi của trò chơi "theo sát Dark Souls II ". Người chơi được trang bị nhiều loại vũ khí khác nhau để chiến đấu chống lại kẻ thù, chẳng hạn như cung, đạn ném được, chất xúc tác ma thuật và kiếm. Khiên có thể hoạt động như vũ khí phụ, nhưng chúng chủ yếu được sử dụng để đánh chặn các đòn tấn công của kẻ thù và bảo vệ người chơi khỏi bị sát thương. Mỗi loại vũ khí có hai loại tấn công cơ bản, một là đòn tấn công tiêu chuẩn và loại còn lại mạnh hơn một chút có thể được tích điện, tương tự như trò chơi trước đó của FromSoftware, Bloodborne . Ngoài ra, các đòn tấn công có thể được né tránh thông qua việc lăn né. Bonfires , đóng vai trò là điểm kiểm tra, trở lại từ các phần trước. Theo Miyazaki, Ashes đóng vai trò quan trọng trong trò chơi. Phép thuật được giới thiệu trong trò chơi, với hệ thống phép thuật quay trở lại từ Demon's Souls , hiện được gọi là " điểm tập trung " (FP). Khi thực hiện phép thuật và kỹ năng vũ khí, điểm tập trung của người chơi sẽ bị tiêu thụ. Có hai loại Estus Flask trong trò chơi, có thể được phân bổ để phù hợp với phong cách chơi cụ thể của người chơi. Một loại nạp lại điểm tấn công giống như các trò chơi trước trong sê-ri, trong khi loại còn lại nạp lại điểm tập trung, một tính năng mới trong trò chơi. Chiến đấu và chuyển động được thực hiện nhanh hơn và mượt mà hơn so với Dark Souls II . Một số chuyển động của người chơi được thực hiện nhanh hơn, cho phép gây ra nhiều sát thương hơn trong thời gian ngắn hơn.`,
    genre: ["Hành động", "Nhập vai", "Phiêu lưu"],
    tags: ["act", "rpg", "adv"],
    id: "79",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "80": {
    name: "Death's Door",
    priceOld: 650000,
    priceNew: 550000,
    image: "assets/images/gameDetails-Id-80.jpg",
    description: `Death's Door là một trò chơi hành động phiêu lưu đẳng cự 3D . Người chơi bắt đầu với một thanh kiếm, cung tên. Các đòn đánh bằng kiếm kết hợp lại thành các đòn combo và đạn cho cung được bổ sung bằng cách sử dụng kiếm. Bốn vũ khí khác và ba viên đạn ma thuật sẽ có sẵn khi trò chơi tiến triển, nhưng cơ chế tấn công cơ bản vẫn giữ nguyên`,
    genre: ["Hành động", "Phiêu lưu"],
    tags: ["act", "adv"],
    id: "80",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "81": {
    name: "Gris",
    priceOld: 480000,
    priceNew: 400000,
    image: "assets/images/gameDetails-Id-81.jpg",
    description: `Trò chơi theo chân một cô gái tên là Gris, [ 4 ] người tỉnh dậy trong lòng bàn tay của một bức tượng phụ nữ đang đổ nát. Cô cố gắng hát lên, nhưng nhanh chóng bị nghẹn ngào, và bàn tay của bức tượng vỡ vụn, thả cô xuống mặt đất không màu bên dưới. Sau khi hạ cánh, cô tiếp tục bước về phía trước và phát hiện ra một số cấu trúc kỳ lạ dường như được cung cấp năng lượng bởi các điểm sáng bí ẩn giống như các ngôi sao. Gris có thể thu thập những ánh sáng này để có được các khả năng mới, chẳng hạn như biến thành một khối đá nặng và tạo ra những con đường mới được tạo thành từ các chòm sao.`,
    genre: ["Phiêu lưu"],
    tags: ["adv"],
    id: "81",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "82": {
    name: "Valheim",
    priceOld: 500000,
    priceNew: 420000,
    image: "assets/images/gameDetails-Id-82.jpg",
    description: `Valheim là một trò chơi sinh tồn thế giới mở lấy cảm hứng từ thần thoại Bắc Âu, do Iron Gate Studio phát triển và Coffee Stain Publishing phát hành. Trò chơi ra mắt lần đầu dưới dạng Early Access trên Steam vào ngày 2 tháng 2 năm 2021 và sau đó được phát hành trên Xbox One, Xbox Series X/S vào tháng 3 năm 2023, và trên macOS vào tháng 6 năm 2024. `,
    genre: ["Sinh tồn", "Phiêu lưu", "Mô phỏng"],
    tags: ["sur", "adv", "sim"],
    id: "82",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "83": {
    name: "Psychonauts 2",
    priceOld: 700000,
    priceNew: 550000,
    image: "assets/images/gameDetails-Id-83.jpg",
    description: `Người chơi nhập vai Razputin "Raz" Aquato, một cậu bé có khả năng ngoại cảm, gia nhập tổ chức điệp viên tâm linh quốc tế Psychonauts. Trò chơi tiếp nối trực tiếp sự kiện từ phần trước và phần VR "Psychonauts in the Rhombus of Ruin", khi Raz cùng đồng đội khám phá bí ẩn về sự thành lập của tổ chức và quá khứ gia đình mình. Các màn chơi diễn ra trong tâm trí của các nhân vật, mỗi thế giới mang phong cách nghệ thuật độc đáo và phản ánh tâm lý riêng biệt.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["adv", "act"],
    id: "83",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "84": {
    name: "Monster Hunter: World",
    priceOld: 750000,
    priceNew: 600000,
    image: "assets/images/gameDetails-Id-84.jpg",
    description: `Monster Hunter: World là một trò chơi hành động nhập vai (ARPG) do Capcom phát triển và phát hành. Được ra mắt vào tháng 1 năm 2018 trên PlayStation 4 và Xbox One, và vào tháng 8 năm 2018 trên PC, trò chơi đã nhanh chóng trở thành một trong những tựa game bán chạy nhất của Capcom, với hơn 20 triệu bản được bán ra tính đến năm 2024. Người chơi vào vai một thợ săn thuộc Đội 5 của Ủy ban Nghiên cứu, được cử đến "Tân Thế Giới" để điều tra hiện tượng di cư bí ẩn của các Rồng Cổ Đại, đặc biệt là Zorah Magdaros. Trong quá trình khám phá, người chơi sẽ đối mặt với nhiều loài quái vật hung dữ và khám phá những bí ẩn sâu xa của vùng đất này.`,
    genre: ["Hành động", "Phiêu lưu", "Nhập vai"],
    tags: ["act", "rpg", "adv"],
    id: "84",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "85": {
    name: "The Long Dark",
    priceOld: 580000,
    priceNew: 450000,
    image: "assets/images/gameDetails-Id-85.jpg",
    description: `The Long Dark là một trò chơi sinh tồn góc nhìn thứ nhất do Hinterland Studio phát triển, đưa người chơi vào vai một phi công gặp nạn phải sinh tồn trong vùng hoang dã lạnh giá của Canada sau một sự kiện từ trường địa cực bí ẩn. Trò chơi nổi bật với lối chơi tập trung vào sinh tồn thực tế, không có yếu tố siêu nhiên như zombie, mà chỉ có thiên nhiên khắc nghiệt và sự cô lập.`,
    genre: ["Sinh tồn", "Phiêu lưu"],
    tags: ["sur", "adv"],
    id: "85",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "86": {
    name: "Inside",
    priceOld: 400000,
    priceNew: 300000,
    image: "assets/images/gameDetails-Id-86.jpg",
    description: ``,
    genre: ["Phiêu lưu"],
    tags: ["adv"],
    id: "86",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "87": {
    name: "RimWorld",
    priceOld: 600000,
    priceNew: 500000,
    image: "assets/images/gameDetails-Id-87.jpg",
    description: `Trong RimWorld, bạn điều khiển một nhóm người sống sót sau vụ rơi tàu vũ trụ trên một hành tinh xa lạ. Nhiệm vụ của bạn là xây dựng và quản lý thuộc địa, đảm bảo sự sống còn của cư dân bằng cách cung cấp thực phẩm, chỗ ở, chăm sóc y tế và bảo vệ họ khỏi các mối đe dọa như cướp biển, động vật hoang dã và thiên tai. Mỗi cư dân có tính cách, kỹ năng và lịch sử riêng, ảnh hưởng đến cách họ tương tác và phản ứng với môi trường xung quanh.`,
    genre: ["Chiến thuật", "Mô phỏng", "Sinh tồn"],
    tags: ["sim", "str", "sur"],
    id: "87",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "88": {
    name: "Hotline Miami",
    priceOld: 320000,
    priceNew: 250000,
    image: "assets/images/gameDetails-Id-88.jpg",
    description: `Hotline Miami là một trò chơi hành động góc nhìn từ trên xuống, nổi bật với lối chơi nhanh, bạo lực và phong cách nghệ thuật độc đáo. Được phát triển bởi Dennaton Games và phát hành bởi Devolver Digital vào năm 2012, trò chơi đã trở thành một biểu tượng trong làng game indie. Người chơi điều khiển một nhân vật vô danh, thường được gọi là "Jacket", thực hiện các nhiệm vụ ám sát theo chỉ dẫn từ những cuộc gọi bí ẩn. Mỗi màn chơi yêu cầu bạn tiêu diệt tất cả kẻ thù trong khu vực bằng nhiều loại vũ khí cận chiến và súng ống.`,
    genre: ["Hành động", "Phiêu lưu"],
    tags: ["str", "sim"],
    id: "88",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "89": {
    name: "Tropico 6",
    priceOld: 700000,
    priceNew: 600000,
    image: "assets/images/gameDetails-Id-89.jpg",
    description: `Tropico 6 là phần thứ sáu trong loạt game mô phỏng xây dựng và quản lý chính trị nổi tiếng, được phát triển bởi Limbic Entertainment và phát hành bởi Kalypso Media. Ra mắt lần đầu vào năm 2019, trò chơi đưa người chơi vào vai "El Presidente" — nhà lãnh đạo tối cao của quốc đảo hư cấu Tropico — với nhiệm vụ xây dựng, quản lý và duy trì quyền lực qua nhiều thời kỳ lịch sử.`,
    genre: ["Chiến thuật", "Mô phỏng"],
    tags: ["str", "sim"],
    id: "89",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "90": {
    name: "Returnal",
    priceOld: 700000,
    priceNew: 550000,
    image: "assets/images/gameDetails-Id-90.jpg",
    description: `Người chơi vào vai Selene Vassos, một phi hành gia của tổ chức ASTRA, khi cô hạ cánh khẩn cấp xuống hành tinh lạ Atropos để điều tra tín hiệu bí ẩn mang tên "White Shadow". Tại đây, Selene phát hiện mình bị mắc kẹt trong một vòng lặp thời gian: mỗi khi chết, cô lại sống lại tại điểm rơi ban đầu, trong khi thế giới xung quanh thay đổi không ngừng. Hành trình của Selene không chỉ là cuộc chiến sinh tồn mà còn là hành trình khám phá những bí ẩn về bản thân, quá khứ và những ảo giác kỳ lạ liên quan đến ngôi nhà thời thơ ấu và một phi hành gia đeo mặt nạ cổ điển. `,
    genre: ["Hành động"],
    tags: ["act"],
    id: "90",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "91": {
    name: "Dark Souls Remastered",
    priceOld: 800000,
    priceNew: 650000,
    image: "assets/images/gameDetails-Id-91.jpg",
    description: `Dark Souls: Remastered là phiên bản nâng cấp của tựa game hành động nhập vai kinh điển Dark Souls (2011), do FromSoftware phát triển và Bandai Namco Entertainment phát hành. Phiên bản Remastered ra mắt vào ngày 25 tháng 5 năm 2018, với các cải tiến về đồ họa và hiệu suất, đồng thời giữ nguyên trải nghiệm khắc nghiệt và thử thách đã làm nên tên tuổi của trò chơi.`,
    genre: ["Nhập vai", "Hành động", "Phiêu lưu"],
    tags: ["rpg", "act", "adv"],
    id: "91",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "92": {
    name: "Batman: Arkham Knight",
    priceOld: 350000,
    priceNew: 300000,
    image: "assets/images/gameDetails-Id-92.jpg",
    description: `Batman: Arkham Knight là phần cuối cùng trong bộ ba game Arkham nổi tiếng, được phát triển bởi Rocksteady Studios và phát hành bởi Warner Bros. Interactive Entertainment vào năm 2015. Người chơi tiếp tục vào vai Batman, đối mặt với mối đe dọa mới tại thành phố Gotham khi kẻ thù Arkham Knight cùng đội quân của hắn xuất hiện nhằm tiêu diệt Batman một lần và mãi mãi. Trò chơi khai thác sâu hơn vào tâm lý của Batman, các mối quan hệ phức tạp và những bí mật trong quá khứ.`,
    genre: ["Hành động", "Phiêu lưu", "Nhập vai"],
    tags: ["act", "adv", "rpg"],
    id: "92",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "93": {
    name: "Assassin's Creed Odyssey",
    priceOld: 720000,
    priceNew: 600000,
    image: "assets/images/gameDetails-Id-93.jpg",
    description: `Assassin’s Creed Odyssey là một tựa game nhập vai hành động thế giới mở, phát triển bởi Ubisoft Quebec và phát hành bởi Ubisoft vào năm 2018. Đây là phần thứ mười một trong series Assassin’s Creed, với bối cảnh Hy Lạp cổ đại trong thời kỳ Chiến tranh Peloponnesian (khoảng 431–404 TCN). Người chơi nhập vai một trong hai nhân vật anh chị em sinh đôi—Alexios hoặc Kassandra—những chiến binh Hy Lạp có nguồn gốc từ Sparta. Họ bị đẩy vào cuộc chiến tranh lớn giữa Athens và Sparta, đồng thời khám phá ra sự thật về gia đình mình và tổ chức bí mật mang tên Cult of Kosmos.`,
    genre: ["Hành động", "Phiêu lưu", "Nhập vai"],
    tags: ["act", "adv", "rpg"],
    id: "93",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "94": {
    name: "Horizon Zero Dawn",
    priceOld: 850000,
    priceNew: 700000,
    image: "assets/images/gameDetails-Id-94.jpg",
    description: `Horizon Zero Dawn là một tựa game hành động nhập vai thế giới mở được phát triển bởi Guerrilla Games và phát hành bởi Sony Interactive Entertainment vào năm 2017. Trò chơi nhanh chóng trở thành một trong những biểu tượng nổi bật của dòng game thế hệ mới trên PlayStation.
    Lấy bối cảnh trong tương lai hậu khải huyền, khi thế giới loài người đã trở lại thời kỳ nguyên thủy, còn các loài động vật thì đã bị thay thế bởi các máy móc khổng lồ có hình dáng như động vật hoang dã.
    Người chơi vào vai Aloy, một cô gái trẻ tài năng, cô độc trong hành trình khám phá bí ẩn về nguồn gốc của thế giới hiện tại và quá khứ của chính mình.`,
    genre: ["Phiêu lưu", "Hành động"],
    tags: ["adv", "act"],
    id: "94",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "95": {
    name: "Amnesia: The Bunker",
    priceOld: 520000,
    priceNew: 400000,
    image: "assets/images/gameDetails-Id-95.jpg",
    description: `Amnesia: The Bunker là một trò chơi kinh dị sinh tồn góc nhìn thứ nhất do Frictional Games phát triển và phát hành vào năm 2023. Đây là phần thứ tư trong loạt game Amnesia, nổi tiếng với phong cách kinh dị tâm lý và bầu không khí căng thẳng.
Người chơi vào vai Henri Clément, một binh sĩ Pháp trong Thế chiến thứ nhất, tỉnh dậy trong một boongke quân sự bỏ hoang và tối tăm. Anh hoàn toàn bị mắc kẹt, bị săn đuổi bởi một sinh vật bí ẩn và kinh hoàng. Nhiệm vụ của Henri là sống sót, khám phá bí ẩn của boongke, và tìm đường thoát ra.`,
    genre: ["Kinh dị", "Sinh tồn"],
    tags: ["horror", "sur"],
    id: "95",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "96": {
    name: "HITMAN 3",
    priceOld: 450000,
    priceNew: 350000,
    image: "assets/images/gameDetails-Id-96.jpg",
    description: `Hitman 3 là phần kết trong bộ ba game World of Assassination do IO Interactive phát triển và phát hành vào tháng 1 năm 2021. Đây là một trò chơi hành động lén lút góc nhìn thứ ba, đưa người chơi vào vai Agent 47, sát thủ chuyên nghiệp, lạnh lùng và đầy kỹ năng.
Hitman 3 tiếp nối các sự kiện từ phần trước, khi Agent 47 cùng cộng sự Diana Burnwood và Lucas Grey tiến hành chiến dịch tiêu diệt tổ chức bí ẩn Providence – những kẻ thao túng thế giới từ trong bóng tối. Lần này, nhiệm vụ mang tính cá nhân sâu sắc, đẩy Agent 47 vào những quyết định khó khăn, hé lộ thêm nhiều bí mật trong quá khứ của anh.`,
    genre: ["Hành động", "Nhập vai", "Phiêu lưu"],
    tags: ["act", "rpg", "adv"],
    id: "96",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "97": {
    name: "Dark Souls II",
    priceOld: 650000,
    priceNew: 500000,
    image: "assets/images/gameDetails-Id-97.jpg",
    description: `Dark Souls II là phần thứ hai trong loạt game hành động nhập vai nổi tiếng Dark Souls, được phát triển bởi FromSoftware và phát hành bởi Bandai Namco Games vào năm 2014. Dù không được đạo diễn bởi Hidetaka Miyazaki như phần đầu, trò chơi vẫn giữ nguyên tinh thần "khó nhưng công bằng", đồng thời mang đến nhiều cải tiến mới.
    Người chơi nhập vai một nhân vật vô danh – một Undead (Kẻ Bất Tử) – bị kéo đến vương quốc Drangleic, nơi bị nguyền rủa bởi bóng tối và sự điên loạn. Trong hành trình tìm kiếm cách chữa khỏi lời nguyền Hollow, người chơi sẽ khám phá quá khứ tàn khốc của Drangleic, đối mặt với các vị vua sa ngã và thế lực cổ xưa trong bóng tối.
    Giống các phần khác trong series, cốt truyện của Dark Souls II không được kể trực tiếp, mà ẩn giấu trong môi trường, vật phẩm và các cuộc hội thoại rời rạc. Người chơi phải tự "ghép mảnh" để hiểu toàn bộ bức tranh.`,
    genre: ["Hành động", "Nhập vai", "Phiêu lưu"],
    tags: ["act", "rpg", "adv"],
    id: "97",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "98": {
    name: "Bioshock Infinite",
    priceOld: 600000,
    priceNew: 450000,
    image: "assets/images/gameDetails-Id-98.jpg",
    description: `BioShock Infinite là một tựa game hành động góc nhìn thứ nhất kết hợp yếu tố nhập vai và kể chuyện sâu sắc, được phát triển bởi Irrational Games và phát hành bởi 2K Games vào năm 2013. Đây là phần thứ ba trong loạt game BioShock, nhưng nội dung độc lập – không cần chơi hai phần trước để hiểu cốt truyện.
    Game lấy bối cảnh năm 1912 tại Columbia – một thành phố bay trên bầu trời, được xây dựng như biểu tượng của giấc mơ Mỹ, nhưng thực chất là một xã hội đầy rẫy phân biệt chủng tộc, tôn giáo cực đoan và độc tài chính trị.
    Bạn vào vai Booker DeWitt, một cựu thám tử Pinkerton mang trong mình món nợ bí ẩn. Anh nhận nhiệm vụ: (Bring us the girl, and wipe away the debt.)
    Cô gái đó là Elizabeth – người sở hữu sức mạnh thao túng thực tại, bị giam cầm trong một tòa tháp canh bởi lãnh tụ Columbia, Zachary Comstock. Câu chuyện mở ra từ đây, với hàng loạt bẻ ngoặt bất ngờ, du hành giữa các chiều không gian, và một kết thúc gây chấn động.`,
    genre: ["Hành động", "Phiêu lưu"],
    tags: ["act", "adv"],
    id: "98",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "99": {
    name: "Fallout 4",
    priceOld: 600000,
    priceNew: 450000,
    image: "assets/images/gameDetails-Id-99.jpg",
    description: `Fallout 4 là một game nhập vai hành động thế giới mở do Bethesda Game Studios phát triển và phát hành vào năm 2015. Đây là phần thứ tư chính trong loạt game hậu tận thế nổi tiếng Fallout, và là một trong những tựa game được mong đợi nhất vào thời điểm ra mắt.
    allout 4 lấy bối cảnh năm 2287, tức 210 năm sau chiến tranh hạt nhân toàn cầu, trong một thế giới bị tàn phá nặng nề. Câu chuyện bắt đầu tại Boston và vùng lân cận (The Commonwealth), nơi những người sống sót đang vật lộn với bức xạ, đột biến, và xung đột phe phái.
    Bạn vào vai "Sole Survivor", người sống sót duy nhất từ Vault 111, được đưa vào giấc ngủ đông ngay trước khi bom hạt nhân rơi. Khi tỉnh dậy, bạn chứng kiến cảnh vợ/chồng mình bị sát hại và con bị bắt cóc, khởi đầu một hành trình tìm kiếm con trai và vén màn bí mật của thế giới hậu tận thế.`,
    genre: ["Nhập vai", "Hành động"],
    tags: ["rpg", "act"],
    id: "99",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
  "100": {
    name: "Darksiders III",
    priceOld: 600000,
    priceNew: 480000,
    image: "assets/images/gameDetails-Id-100.jpg",
    description: `Darksiders III là phần thứ ba trong loạt game hành động phiêu lưu Darksiders, được phát triển bởi Gunfire Games và phát hành bởi THQ Nordic vào năm 2018. Trong phần này, bạn sẽ vào vai Fury, nữ Kỵ Sĩ thứ ba của Tứ Kỵ Sĩ Khải Huyền – một nhân vật mạnh mẽ, nóng nảy và đầy quyền năng.
    Lấy bối cảnh song song với phần đầu (Darksiders I) và tiếp nối sự kiện từ phần hai (Darksiders II), game đưa bạn vào vai Fury, được Hội đồng Charred Council giao nhiệm vụ truy lùng và tiêu diệt 7 Đại Tội (Seven Deadly Sins) – các sinh vật cổ đại đại diện cho lòng tham, đố kỵ, kiêu ngạo...
    Fury lang thang qua một Trái Đất bị hủy diệt, nơi thiên thần, quỷ dữ và những sinh vật hỗn mang đang tranh giành quyền lực, trong khi nhân loại đang bên bờ tuyệt diệt. Trong quá trình săn lùng các Đại Tội, Fury phải đối mặt với sự phản bội, bí mật đen tối của Hội đồng, và câu hỏi lớn: "Ai mới thực sự là kẻ tội lỗi?`,
    genre: ["Hành động", "Phiêu lưu", "Nhập vai"],
    tags: ["act", "adv", "rpg"],
    id: "100",
    reviews: [
      "<b>VuVjp</b>: Game rất hay, đồ họa đỉnh cao!",
      "<b>minhtinhk5</b>: Chiến dịch hấp dẫn và nhiều chế độ chơi.",
      "<b>Bac-chan</b>: Giá hợp lý với chất lượng."
    ]
  },
};


// ----------------------
// HÀM LẤY THAM SỐ TỪ URL
// ----------------------
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// ----------------------------------------------------
// HIỂN THỊ CHI TIẾT SẢN PHẨM (product-detail page)
// ----------------------------------------------------
function renderProductDetail() {
  const productKey = getQueryParam("id"); // Lấy tham số "id" từ URL (ví dụ: "1" hoặc "2")
  const product = products[productKey];

  if (!product) {
    document.body.innerHTML =
      "<h2 class='text-center mt-5'>Sản phẩm không tồn tại.</h2>";
    return;
  }

  // Header
  document.querySelector("h3").innerText = product.name;
  document.querySelector(".breadcrumb").innerHTML = `<a href="index.html">Home</a>  >  <a href="shop.html">Shop</a>  >  ${product.name}`;

  // Hình ảnh sản phẩm
  const img = document.querySelector(".left-image img");
  img.src = product.image;
  img.alt = product.name;

  // Tiêu đề và giá sản phẩm
  document.querySelector(".col-lg-6.align-self-center h4").innerText = product.name;
  document.querySelector(".price").innerHTML = product.priceOld === ""
    ? (product.priceNew === 0 ? "Miễn phí" : `${product.priceNew.toLocaleString()} VNĐ`)
    : (product.priceNew === 0
      ? `<em>${product.priceOld.toLocaleString()} VNĐ</em> Miễn phí`
      : `<em>${product.priceOld.toLocaleString()} VNĐ</em> ${product.priceNew.toLocaleString()} VNĐ`);



  // Mô tả sản phẩm (xử lý xuống dòng nếu có)
  const descHTML = product.description
    .split('\n')
    .map(line => `<p>${line}</p>`)
    .join('');
  document.querySelector("#description").innerHTML = descHTML;

  // Hiển thị chi tiết sản phẩm (Game ID, Thể loại, Thẻ liên quan)
  const ul = document.querySelector(".col-lg-6.align-self-center ul");
  ul.innerHTML = `
    <li><span>Game ID:</span> ${product.id}</li>
    <li><span>Thể loại:</span> ${product.genre.map(g => `<a href="#">${g}</a>`).join(", ")}</li>
    <li><span>Thẻ liên quan:</span> ${product.tags.map(t => `<a href="#">${t}</a>`).join(", ")}</li>`;

  // Hiển thị reviews
  const reviewContainer = document.querySelector("#reviews");
  reviewContainer.innerHTML = product.reviews.map(r => `<p>${r}</p>`).join("");
}

// --------------------------------------------------
// THÊM SẢN PHẨM VÀO GIỎ HÀNG (trong product-detail)
// --------------------------------------------------
function addToCart() {
  const productKey = getQueryParam("id"); // Lấy ID sản phẩm từ URL ("1" hoặc "2")
  const product = products[productKey];

  if (!product) {
    alert("Sản phẩm không tồn tại!");
    return;
  }

  // Lấy số lượng từ input trong form (nên dùng <input type="number" ...> nếu có thể)
  const quantityInput = document.querySelector("#qty input");
  const quantity = parseInt(quantityInput.value.trim(), 10) || 1;

  // Lấy giỏ hàng từ localStorage (nếu chưa có thì trả về mảng rỗng)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Kiểm tra xem sản phẩm đã có trong giỏ chưa theo product.id
  const existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += quantity; // Cộng dồn số lượng
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.priceNew,
      image: product.image,
      quantity: quantity
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart)); // Cập nhật giỏ hàng vào localStorage
  alert(`Đã thêm ${quantity} sản phẩm vào giỏ hàng!`);
}

// ---------------------------------------------
// HIỆN THỊ PRODUCT DETAIL VÀ XỬ LÝ "THÊM VÀO GIỎ"
// ---------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Nếu trang đang là product-detail (có form id "qty")
  if (document.getElementById("qty")) {
    renderProductDetail();
    document.getElementById("qty").addEventListener("submit", function (event) {
      event.preventDefault(); // Ngăn reload trang
      addToCart();
    });
  }
});

// --------------------------------------------------
// HIỂN THỊ GIỎ HÀNG (cart page)
// --------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra đăng nhập: Nếu chưa đăng nhập thì chuyển hướng về trang login
  if (document.getElementById("cart-items")) {
    if (localStorage.getItem("userLoggedIn") !== "true") {
      alert("Bạn cần đăng nhập để xem giỏ hàng!");
      window.location.href = "login.html";
      return;
    }
    renderCart();
  }
});

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartItemsContainer.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.price * item.quantity;
    cartItemsContainer.innerHTML += `
      <div class="col-lg-3 col-md-6">
        <div class="item">
          <div class="thumb">
            <img src="${item.image}" alt="${item.name}">
            <div class="down-content">
              <h4>${item.name}</h4>
              <span class="category">Giá: ${item.price.toLocaleString()} VNĐ</span>
              <p>Số lượng: ${item.quantity}</p>
              <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Xóa</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = totalPrice.toLocaleString() + " VNĐ";
}

// Hàm xóa sản phẩm khỏi giỏ hàng và cập nhật lại localStorage
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// Đưa hàm removeItem vào phạm vi toàn cục để có thể gọi từ HTML
window.removeItem = removeItem;
