const express = require('express');
const router = express.Router();
const placeController = require('../controllers/place.controller'); // 파일명 맞춰 유지

// 관광지 등록
router.post('/', placeController.createPlace);

// 관광지 전체 조회 (테마 필터링 포함)
router.get('/', placeController.filterPlacesByTheme);

// 관광지 키워드 검색
router.get('/search', placeController.searchPlaces);

// 관광지 개별 상세 조회
router.get('/:id', placeController.getPlaceById);

module.exports = router;

