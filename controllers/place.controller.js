const Place = require('../models/place.model');

// 관광지 등록
exports.createPlace = async (req, res) => {
    try {
        const place = new Place(req.body);
        await place.save();
        res.status(201).json({ message: '관광지 등록 완료!', place });
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: '관광지 등록 실패'});
    }
};

// 관광지 전체 조회
exports.getAllPlaces = async (req, res) => {
    try {
      const places = await Place.find();
      res.status(200).json(places);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: '관광지 조회 실패' });
    }
};

// 관광지 상세 조회
exports.getPlaceById = async (req, res) => {
    try {
      const place = await Place.findById(req.params.id);
      if (!place) return res.status(404).json({ message: '해당 관광지를 찾을 수 없습니다.' });
      res.status(200).json(place);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: '관광지 상세 조회 실패' });
    }
}; 

// 키워드 기반 관광지 검색
exports.searchPlaces = async (req, res) => {
    const { keyword } = req.query;
    if (!keyword) {
        return res.status(400).json({ message: '검색어를 입력하세요.' });
    }
    try {
        const places = await Place.find({
            $or: [
                { name: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
                { category: { $regex: keyword, $options: 'i' } }
            ]
        });
        res.status(200).json(places);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '관광지 검색 실패' });
    }
};

// 테마 기반 관광지 필터링
exports.filterPlacesByTheme = async (req, res) => {
    const { theme } = req.query;
    try {
        const query = theme ? { category: theme } : {};
        const places = await Place.find(query);
        res.status(200).json(places);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '관광지 필터링 실패' });
    }
};
