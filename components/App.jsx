import React, { useState, useCallback, useMemo } from 'react';
import { RefreshCw, Clipboard, AlertTriangle, Send, Heart, Droplet, Zap, Home, Stethoscope, Key, Pill } from 'lucide-react';

const SYSTEM_INSTRUCTION_PLAN = `
Bạn là Bác sĩ/Nhân viên y tế tại Trạm Y tế Xã/Phường. Nhiệm vụ của bạn là lập một KẾ HOẠCH SƠ CẤP CỨU NGẮN GỌN và CHÍNH XÁC dựa trên 'lý do đến trạm' của bệnh nhân.

Quy tắc Bắt buộc:
1. Văn phong: PHẢI sử dụng văn phong hành chính y tế, câu ngắn, mục rõ ràng, và thuật ngữ y tế chính xác (tiếng Việt).
2. Giả định mặc định: Nếu thiếu thông tin quan trọng (tuổi, tiền sử), bạn PHẢI GIẢ ĐỊNH MẶC ĐỊNH: 'Người lớn 18–65 tuổi, không mang thai, không suy gan/thận nặng.' và ghi rõ giả định này ở Mục 1.
3. Cấu trúc 7 Mục: PHẢI TUÂN THỦ TUYỆT ĐỐI cấu trúc 7 mục sau, bắt đầu bằng tiêu đề in đậm:
`;

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Trạm Y Tế - Kế hoạch sơ cấp cứu</h1>
      <p>Ứng dụng chạy thử nghiệm thành công.</p>
    </div>
  );
}
