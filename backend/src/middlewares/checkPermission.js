import jwt from "jsonwebtoken";
import User from "../models/user";

export const checkPermission = async (req, res, next) => {
  try {
    // kiểm tra xem user có đăng nhập không
    if (!req.headers.authorization) {
      return res.status(401).json({
        message: "Bạn chưa đăng nhập",
      });
    }

    // lấy jwt token từ header
    const token = req.headers.authorization.split(" ")[1];

    // xác thực jwt token
    const { _id } = jwt.verify(token, "anhntph28549");
    // lấy thông tin user từ database
    const user = await User.findById(_id);

    // kiểm tra xem user có đủ quyền thực hiện hành động đó không
    if (user.role != "admin") {
      return res.status(403).json({
        message: "Bạn không có quyền truy cập",
      });
    }

    // lưu thông tin user vào req để sử dụng trong các middleware khác
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
