import api from './apis';
import { CartItem, Order } from './interface';

const products: any = [
  {
    name: '[든든] 유부 슬라이스 500g',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11153-main-01.png',
    price: 4900,
  },
  {
    name: '[든든] 진맛살 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11157-main-01.png',
    price: 7100,
  },
  {
    name: '[든든] 신-키리모찌 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11161-main-01.png',
    price: 12000,
  },
  {
    name: '[든든] 흑곤약 250g',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11263-main-01.png',
    price: 1300,
  },
  {
    name: '[든든] 흑곤약 1.2kg',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11277-main-01.png',
    price: 4000,
  },
  {
    name: '[든든] 곤약말이 시라타끼 200g',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11280-main-01.png',
    price: 1100,
  },
  {
    name: '[든든] 기분 시로가마보코 160g',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11315-main-01.png',
    price: 2800,
  },
  {
    name: '[든든] 냉동조미유부삼각 (60장) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11323-main-01.png',
    price: 8400,
  },
  {
    name: '[든든] 시노다마끼 유부야채말이 (15g*40입) 600g',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11328-main-01.png',
    price: 9000,
  },
  {
    name: '[든든] 기분 오뎅세트 433g',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200525/11331-main-01.png',
    price: 8900,
  },
  {
    name: '[든든] 종가집 콩이가득두부 (찌개용) 3kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/efc1aca6-6888-4207-b4ce-03b3aeeb2f12.jpg',
    price: 5000,
  },
  {
    name: '[든든] 종가집 콩이가득두부 (부침용) 3kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/9eccf593-012b-490a-8ce0-9be3eb2a978b.jpg',
    price: 5000,
  },
  {
    name: '[든든] 식자재왕 쫀득한쌀떡국(수입)2kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/d1baa230-86d4-4c37-a8a7-b9818f333f30.jpg',
    price: 5000,
  },
  {
    name: '[든든] 식자재왕 쌀떡볶이(우리쌀)1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/58e63e2a-d3ec-402c-9cae-a1e8da886a0b.jpg',
    price: 5000,
  },
  {
    name: '[든든] 식자재왕 쌀떡볶이(신당동_수입)2kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/46f5800e-ea47-4e61-8be2-b12929fdc9a1.jpg',
    price: 5000,
  },
  {
    name: '[든든] 식자재왕 떡볶이(고구마_냉동)1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/0cd8aab5-c054-431d-ad16-9bfcda365361.jpg',
    price: 5000,
  },
  {
    name: '[든든] 식자재왕 떡볶이(치즈_냉동)1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/5340012b-829d-4a6c-b218-18ab0e91e6e9.jpg',
    price: 5000,
  },
  {
    name: '[든든] 면사랑 쌀떡볶이 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/0a32606c-fab9-446d-b0d5-87e551274c76.jpg',
    price: 5000,
  },
  {
    name: '[든든] 면사랑 쌀떡국 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/b27857c3-60d7-406a-8dff-10089152d515.jpg',
    price: 5000,
  },
  {
    name: '[든든] 면사랑 조랭이떡 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/92fc2d92-e960-4f61-950a-da07ab022d78.jpg',
    price: 5000,
  },
  {
    name: '[든든] 면사랑 치즈 필링 떡볶이 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/497b1e60-c328-457c-b571-48dd97b8f775.jpg',
    price: 5000,
  },
  {
    name: '[든든] 초밥왕(네모) 600g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/b0fe4ad0-e00a-4a1f-9d8c-6024019d2c4b.jpg',
    price: 5700,
  },
  {
    name: '[든든] 초밥왕(세모) 600g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/10cfd364-c26b-4502-843a-893977c22d84.jpg',
    price: 5700,
  },
  {
    name: '[든든] 주부초밥왕 새콤달콤 640g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/1c5628cc-65b1-4144-8792-787b655d93da.jpg',
    price: 7460,
  },
  {
    name: '[든든] 주부초밥왕 새콤달콤 320g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/bb3e4b20-0406-4394-8d04-8f1cb66a9712.jpg',
    price: 3000,
  },
  {
    name: '[든든] 주부초밥왕 새콤달콤 160g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/8709f7cc-e52c-44b4-81bd-7691c6d1eb08.jpg',
    price: 1600,
  },
  {
    name: '[든든] 해물유부주머니 700g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/192cd55c-9202-4479-9ed9-61675de2263d.jpg',
    price: 9000,
  },
  {
    name: '[든든] 고기유부주머니 700g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/89583514-46d0-497c-b7bb-bb17eca775da.jpg',
    price: 8800,
  },
  {
    name: '[든든] 주부유부왕 500g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/ad846ff8-c698-44ac-8953-2624627b0f63.jpg',
    price: 4800,
  },
  {
    name: '[든든] 주부유부왕 300g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/a314c955-fb59-4bc7-955c-9fcaa155dd72.jpg',
    price: 3300,
  },
  {
    name: '[든든] 냉장 꽃맛살 2kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/1e02c6bf-d611-41c8-9e25-0f499c785d80.jpg',
    price: 17100,
  },
  {
    name: '[든든] 냉동 꽃맛살 2kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/0fc75c35-0df7-4c7c-bf29-b6901d707282.jpg',
    price: 17100,
  },
  {
    name: '[든든] 삼호 참참바골드 70g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/fdad826d-0976-4977-847d-4eac59497718.jpg',
    price: 650,
  },
  {
    name: '[든든] 삼호 찰어묵 청실 160g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/ec94b092-e911-4245-9b59-8ac41a9e2fc3.jpg',
    price: 1900,
  },
  {
    name: '[든든] 삼호 찰어묵 청실홍실 320g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/9b9625b2-3347-4266-9fac-4b181da85a99.jpg',
    price: 3800,
  },
  {
    name: '[든든] 삼호 냉장 구운어묵 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/cdddd19c-b50b-4f40-9f09-92e27b85a6c4.jpg',
    price: 5000,
  },
  {
    name: '[든든] 삼호 냉동 알뜰구운어묵 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/23349629-fe21-4434-9307-1e7c6e164636.jpg',
    price: 4700,
  },
  {
    name: '[든든] 삼호 사색꼬치탕어묵 520g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/cffd263e-32d6-4bff-a03a-9132cd022e9b.jpg',
    price: 3800,
  },
  {
    name: '[든든] 삼호어묵 하얀사각 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/83b8e1ac-6e1b-4c0c-9f54-7837a649fc23.jpg',
    price: 6300,
  },
  {
    name: '[든든] 삼호 꼬치어묵 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/32939ca4-ab7b-4a60-9fb9-bae4e46b793d.jpg',
    price: 6300,
  },
  {
    name: '[든든] 맛있는게맛살(연육50%대) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/e8a5fa89-e3ad-4cde-b8aa-a35d0c2c1810.jpg',
    price: 4300,
  },
  {
    name: '[든든] 삼호 게맛살S(연육60%대) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/4a56963d-137b-4693-ac79-93904d34174c.jpg',
    price: 4400,
  },
  {
    name: '[든든] 삼호 마파람 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/8fb54b1c-1c20-4a13-8417-d3fea8a78199.jpg',
    price: 7700,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵 (절단사각) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/5740bca7-d75d-488f-9396-9dd88d4feed4.jpg',
    price: 3800,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵에프 (사각) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/c860c608-b29f-4907-8055-8f76be5f0855.jpg',
    price: 3200,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵 (연육30%, 사각) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/f8b27a7b-a2ee-41a1-8dc8-b030d4ec0a10.jpg',
    price: 2600,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵(연육30%, 봉) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/c219ae2f-4884-49d6-a973-4bc42fabe214.jpg',
    price: 2600,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵(연육30%, 볼) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/6bf64b54-f8c2-4a96-9a0e-455efe006614.jpg',
    price: 2600,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵(연육30%, 종합) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/196c7887-0c93-48a1-802d-c03ec17eb636.jpg',
    price: 2700,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵(연육50%, 종합) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/b5a1ba88-dea5-4c8c-9fb5-73a6fd56b157.jpg',
    price: 3100,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵(연육50%, 사각) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/74b98703-5b31-46cd-a35e-69ab3b90b009.jpg',
    price: 3000,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵(연육50%, 봉) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/fc613053-64d8-4c00-9dae-e67c11a2fff9.jpg',
    price: 3000,
  },
  {
    name: '[든든] 삼호 마차촌 부산어묵(연육50%, 볼) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/a063c4d5-2bf7-4393-9cac-4054d254dcc4.jpg',
    price: 3000,
  },
  {
    name: '[든든] 맛있는어묵꼬치(봉) 640g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/9a1a3419-3cf7-4e2e-863d-6b6d15823e9b.jpg',
    price: 6300,
  },
  {
    name: '[든든] 맛있는어묵꼬치(사각) 640g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/cd8ed1cb-355d-4f8b-835a-b4aeeb852307.jpg',
    price: 6300,
  },
  {
    name: '[든든] 삼호어묵2호(연육60%, 종합) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/ac6381d3-ccc9-4472-903a-c6304e4534b1.jpg',
    price: 4100,
  },
  {
    name: '[든든] 삼호어묵2호(연육60%, 사각) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/536c4310-25e3-42d3-95f2-b5b43c439fa3.jpg',
    price: 4000,
  },
  {
    name: '[든든] 삼호어묵2호(연육60%, 볼) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/4f68b7fb-27b0-44de-a4ed-4cff9b3f8819.jpg',
    price: 4000,
  },
  {
    name: '[든든] 삼호 오뎅한그릇 시원한맛 360g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/cd170ff7-7fab-42f9-bf9f-5490e6331167.jpg',
    price: 1980,
  },
  {
    name: '[든든] 삼호 오뎅한그릇 얼큰한맛 360g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/52095ac1-656d-42f7-9efd-f71fb546cf39.jpg',
    price: 1980,
  },
  {
    name: '[든든] 맛있는삼호어묵골드(연육70%, 종합) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/21b55168-881b-41f5-8a65-51f4b8d579eb.jpg',
    price: 5500,
  },
  {
    name: '[든든] 맛있는삼호어묵골드(연육70%, 사각) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/2de48cf0-c82a-4485-97d2-5d4e168dfec4.jpg',
    price: 5400,
  },
  {
    name: '[든든] 맛있는삼호어묵골드(연육70%, 봉) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/05f69718-7b27-4acc-b620-c52983d484c3.jpg',
    price: 5400,
  },
  {
    name: '[든든] 맛있는삼호어묵골드(연육70%, 볼) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/7db964a3-8f5f-417b-82f3-10731e6506f2.jpg',
    price: 5400,
  },
  {
    name: '[든든] 세미원푸드 한아름 피쉬볼 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201221-171323/17214-main-01.jpg',
    price: 12170,
  },
  {
    name: '[든든] 세미원푸드 샌드위치 모양 피쉬볼 500g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201221-171323/17213-main-01.jpg',
    price: 6080,
  },
  {
    name: '[든든] 세미원푸드 새우 피쉬볼 500g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201221-171323/17212-main-01.jpg',
    price: 6080,
  },
  {
    name: '[든든] 세미원푸드 버섯 모양 피쉬볼 500g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201221-171323/17211-main-01.jpg',
    price: 6080,
  },
  {
    name: '[든든] 세미원푸드 두부 모양 피쉬볼 500g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201221-171323/17210-main-01.jpg',
    price: 6080,
  },
  {
    name: '[든든] 세미원푸드 이솝 찐빵 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/a8d3b47f-c7de-4563-8aa8-083d93679f27.jpg',
    price: 11800,
  },
  {
    name: '[든든] 세미원푸드 수제 꽃빵 900g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201221-171159/17161-main-01.jpg',
    price: 5760,
  },
  {
    name: '[든든] 세미원푸드 구워먹는 치즈떡 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201221-171159/17160-main-01.jpg',
    price: 6570,
  },
  {
    name: '[든든] 세미원푸드 구워먹는 치즈떡 600g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201221-171159/17159-main-01.jpg',
    price: 4030,
  },
  {
    name: '[든든] 한성간편맛살 1.2kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/fe725fa5-5a07-4a3f-b0b8-76ffb99d06f7.jpg',
    price: 4100,
  },
  {
    name: '[든든] 냉동 꽃맛살 2kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/9ff5bd30-50ae-4d91-afc2-60761aed2a52.jpg',
    price: 13600,
  },
  {
    name: '[든든] 크래미F2(수) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/af9a5031-2829-4d45-99f7-94f16e592ccb.jpg',
    price: 6200,
  },
  {
    name: '[든든] 크래미F(수) 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/7b3e13b4-e950-46db-8ddb-51823639a6c3.jpg',
    price: 7800,
  },
  {
    name: '[든든] 요리가 간편한 맛살채 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/6096b959-6732-4011-8e71-0b92638d7dde.jpg',
    price: 7400,
  },
  {
    name: '[든든] 이게조아F 540g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/58e9ead5-1a52-41e0-8b99-14c64f8e75b7.jpg',
    price: 8900,
  },
  {
    name: '[든든] 이게조아F 270g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/38c87a7e-77b7-4d09-b290-5313129e4dbc.jpg',
    price: 4800,
  },
  {
    name: '[든든] 이게조아F 초밥용 270g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/8d1f1c73-bb37-4c81-98e5-2ede87f7816a.jpg',
    price: 5200,
  },
  {
    name: '[든든] 한성통통맛살 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/3e0835e5-6329-4a82-ad08-4e6ee74605c4.jpg',
    price: 3500,
  },
  {
    name: '[든든] 베스트코 치즈떡 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201119-141118/16215-main-01.jpg',
    price: 4410,
  },
  {
    name: '[든든] 베스트코 떡볶이떡 2kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201119-140757/16092-main-01.jpg',
    price: 3300,
  },
  {
    name: '[든든] 베스트코 쌀떡국떡 2kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/bulk/20201119-140757/16087-main-01.jpg',
    price: 3300,
  },
  {
    name: '[든든] 굿프랜즈 오징어볼 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/0760392d-54c4-401a-986a-93b5ba1c7beb.jpg',
    price: 9060,
  },
  {
    name: '[든든] 굿프랜즈 오징어바 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/1813c345-6a23-4968-b6d8-c2db93ab7f6e.jpg',
    price: 9060,
  },
  {
    name: '[든든] 굿프랜즈 종합 꼬치어묵 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/6966e37d-b5ee-46e1-b1dd-1b8862a73109.jpg',
    price: 6960,
  },
  {
    name: '[든든] 굿프랜즈 부산사각어묵 800g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/00a503eb-eebc-45d8-9032-808dc0666289.jpg',
    price: 3550,
  },
  {
    name: '[든든] 굿프랜즈 부산사각꼬치어묵 600g',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/63af775c-db43-4fe5-b61e-c8061a7fa5b5.jpg',
    price: 5030,
  },
  {
    name: '[든든] 굿프랜즈 잡채해물완자 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/078766cf-593c-4ac5-abbf-fe1aadd981c1.jpg',
    price: 7250,
  },
  {
    name: '[든든] 굿프랜즈 푸짐한한입완자 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/f0b9cd56-259c-41fe-8560-023125648912.jpg',
    price: 8490,
  },
  {
    name: '[든든] 굿프랜즈 푸짐한깻잎완자 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/sellergoods/main/f8d1c396-5f5d-4ee7-a232-a09ce25c70ac.jpg',
    price: 8460,
  },
  {
    name: '[든든] 즉석떡국(1개입) 163g',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200619-MARTENG-8244/12379-main-01.jpg',
    price: 1960,
  },
  {
    name: '[든든] 쉐프원 맛있는 유부 1kg',
    imageSrc:
      'https://cdn-mart.baemin.com/goods/custom/20200608/11848-main-01.jpg',
    price: 10590,
  },
  {
    name: '[든든] 대림선 국탕용 선종합 1kg 10개',
    imageSrc: 'https://cdn-mart.baemin.com/goods/43/1561626366896m0.jpg',
    price: 36410,
  },
  {
    name: '[든든] 대림선 부산어묵 얇은사각 1kg 10개',
    imageSrc: 'https://cdn-mart.baemin.com/goods/42/1561626554949m0.jpg',
    price: 35000,
  },
  {
    name: '[든든] 조미유부 (15g*60입) (냉동)',
    imageSrc: 'https://cdn-mart.baemin.com/goods/73/1553240234753m0.jpg',
    price: 6100,
  },
  {
    name: '[든든] 면사랑 밀떡볶이 1kg 10개',
    imageSrc: 'https://cdn-mart.baemin.com/goods/81/1565919475579m0.jpg',
    price: 16000,
  },
  {
    name: '"[든든] 면사랑 밀떡볶이 1kg 10개",',
    imageSrc: '"https://cdn-mart.baemin.com/goods/81/1565919475579m0.jpg",',
    price: 16000,
    quantity: 3,
    checked: true,
  },
];

products.forEach((product: any, index: any) => {
  api.products.post({ id: String(index), ...product });
});

const cartItems: CartItem[] = [
  {
    id: '1',
    quantity: 10,
    isSelected: true,
  },
  {
    id: '2',
    quantity: 1,
    isSelected: false,
  },
  {
    id: '3',
    quantity: 5,
    isSelected: true,
  },
];

cartItems.forEach(cartItem => api.cart.post(cartItem));

const orders: Order[] = [
  {
    id: '1',
    itemList: [
      { id: '1', quantity: 2 },
      { id: '2', quantity: 3 },
    ],
  },
  {
    id: '2',
    itemList: [
      { id: '1', quantity: 1 },
      { id: '3', quantity: 11 },
    ],
  },
];

orders.forEach(order => api.order.post(order));
